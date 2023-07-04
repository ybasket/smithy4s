/*
 *  Copyright 2021-2022 Disney Streaming
 *
 *  Licensed under the Tomorrow Open Source Technology License, Version 1.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     https://disneystreaming.github.io/TOST-1.0.txt
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

package smithy4s
package http

import smithy4s.http.HttpMediaType
import smithy4s.kinds.TupleK

import schema._
import smithy4s.schema.Primitive._

object StringAndBlobCodecs {

  def readerOr(
      other: CachedSchemaCompiler[HttpBodyReader]
  ): CachedSchemaCompiler[HttpBodyReader] =
    CachedSchemaCompiler.getOrElse(ReaderCompiler, other)

  def writerOr(
      other: CachedSchemaCompiler[HttpBodyWriter]
  ): CachedSchemaCompiler[HttpBodyWriter] =
    CachedSchemaCompiler.getOrElse(WriterCompiler, other)

  private object ReaderCompiler
      extends CachedSchemaCompiler.Possible.Impl[HttpBodyReader] {
    def fromSchema[A](
        schema: Schema[A],
        cache: Cache
    ): Option[HttpBodyReader[A]] =
      StringAndBlobReaderVisitor(schema).map(_.mapInstance(_.left))
  }

  private object WriterCompiler
      extends CachedSchemaCompiler.Possible.Impl[HttpBodyWriter] {
    def fromSchema[A](
        schema: Schema[A],
        cache: Cache
    ): Option[HttpBodyWriter[A]] =
      StringAndBlobReaderVisitor(schema).map(_.mapInstance(_.right))
  }

  private type CodecResult[A] = Option[HttpBodyCodec[A]]

  private object StringAndBlobReaderVisitor
      extends SchemaVisitor.Default[CodecResult] {
    self =>

    override def default[A]: CodecResult[A] = None

    override def primitive[P](
        shapeId: ShapeId,
        hints: Hints,
        tag: Primitive[P]
    ): CodecResult[P] = tag match {
      case PString =>
        Some(
          HttpMediaTyped(
            stringMediaType(hints),
            TupleK(stringReader, stringWriter)
          )
        )

      case PBlob =>
        val maybeMediaTypeHint = smithy.api.MediaType.hint.unapply(hints)
        val mediaType: HttpMediaType = HttpMediaType(
          maybeMediaTypeHint
            .map(_.value)
            .getOrElse("application/octet-stream")
        )
        Some { HttpMediaTyped(mediaType, TupleK(blobReader, blobWriter)) }

      case PTimestamp | PUUID | PBigInt | PBoolean | PLong | PShort |
          PDocument | PByte | PDouble | PFloat | PBigDecimal | PInt =>
        None
    }

    private def stringMediaType(hints: Hints): HttpMediaType = {
      val maybeMediaTypeHint = smithy.api.MediaType.hint.unapply(hints)
      HttpMediaType(
        maybeMediaTypeHint
          .map(_.value)
          .getOrElse("text/plain")
      )
    }

    private val stringReader: PayloadReader[String] = {
      new PayloadReader[String] {
        def read(blob: Blob): Either[PayloadError, String] = Right(
          blob.toUTF8String
        )
      }
    }

    private val stringWriter: PayloadWriter[String] =
      Writer.encodeBy(Blob(_))

    private val blobReader: PayloadReader[ByteArray] = {
      new PayloadReader[ByteArray] {
        def read(blob: Blob): Either[PayloadError, ByteArray] = Right(
          ByteArray(blob.toArray)
        )
      }
    }

    private val blobWriter: PayloadWriter[ByteArray] =
      Writer.encodeBy(bytearray => Blob(bytearray.array))

    override def enumeration[E](
        shapeId: ShapeId,
        hints: Hints,
        tag: EnumTag,
        values: List[EnumValue[E]],
        total: E => EnumValue[E]
    ): CodecResult[E] = {
      val mediaType = stringMediaType(hints)
      tag match {
        case EnumTag.StringEnum =>
          val reader = new PayloadReader[E] {
            def read(blob: Blob): Either[PayloadError, E] = {
              val str = blob.toUTF8String
              values
                .find(_.stringValue == str) match {
                case Some(enumValue) => Right(enumValue.value)
                case None =>
                  Left(
                    new PayloadError(
                      PayloadPath.root,
                      s"expected one of ${values.mkString(",")}",
                      s"Unknown enum value $str"
                    )
                  )
              }
            }
          }
          val writer = new PayloadWriter[E] {
            def write(unit: Unit, e: E): Blob = Blob(total(e).stringValue)
          }
          Some(HttpMediaTyped(mediaType, TupleK(reader, writer)))

        case EnumTag.IntEnum => None
      }
    }

    override def biject[A, B](
        schema: Schema[A],
        bijection: Bijection[A, B]
    ): CodecResult[B] =
      self(schema).map(_.mapInstance(_.biject(bijection)))

    override def refine[A, B](
        schema: Schema[A],
        refinement: Refinement[A, B]
    ): CodecResult[B] =
      self(schema).map(_.mapInstance { case TupleK(readerA, writerA) =>
        val readerB = new PayloadReader[B] {
          def read(blob: Blob): Either[PayloadError, B] =
            readerA
              .read(blob)
              .flatMap(refinement.asFunction(_).left.map { error =>
                PayloadError(
                  PayloadPath.root,
                  refinement.tag.id.show,
                  error.getMessage
                )
              })
        }
        val writerB =
          Writer.encodeBy((b: B) => writerA.encode(refinement.from(b)))
        TupleK(readerB, writerB)
      })

    override def nullable[A](
        schema: Schema[A]
    ): CodecResult[Option[A]] =
      self(schema).map(_.mapInstance { case TupleK(readerA, writerA) =>
        val readerOptionA = new PayloadReader[Option[A]] {
          def read(blob: Blob): Either[PayloadError, Option[A]] =
            if (blob.isEmpty) Right(None)
            else readerA.read(blob).map(a => Some(a))
        }
        val writerOptionA: PayloadWriter[Option[A]] = Writer.encodeBy {
          case Some(a) => writerA.encode(a)
          case None    => Blob.empty
        }
        TupleK(readerOptionA, writerOptionA)
      })
  }
}
