/*
 *  Copyright 2021 Disney Streaming
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

import cats.Show
import org.scalacheck.Gen.Choose
import org.scalacheck._
import smithy.api.TimestampFormat
import java.time._
import java.time.format.DateTimeFormatter
import java.util.Locale
import org.scalacheck.Prop._

class TimestampSpec() extends munit.FunSuite with munit.ScalaCheckSuite {

  private implicit val arbInstant: Arbitrary[Instant] = {
    implicit val c: Choose[Instant] =
      Choose.xmap[Long, Instant](
        x =>
          Instant.ofEpochSecond(
            x % 2000000000, {
              x & 3 match {
                case 0 => 0
                case 1 => x % 1000 * 1000000
                case 2 => x % 1000000 * 1000
                case _ => x % 1000000000
              }
            }
          ),
        x => x.getEpochSecond
      )
    Arbitrary(
      Gen.choose[Instant](Instant.ofEpochSecond(-62167219200L), Instant.ofEpochSecond(253402300799L))
    )
  }

  private implicit val showInstant: Show[Instant] = Show.fromToString
  private val imfDateFormatter = DateTimeFormatter
    .ofPattern("EEE, dd MMM yyyy HH:mm:ss.SSSSSSSSS 'GMT'", Locale.ENGLISH)
    .withZone(ZoneId.of("GMT"))

  property("Converts from/to Instant") {
    forAll { (i: Instant) =>
      val ts = Timestamp(i.getEpochSecond, i.getNano)
      expect.same(ts.toInstant, i)
    }
  }

  property("Converts to/from DATE_TIME format") {
    forAll { (i: Instant) =>
      val ts = Timestamp(i.getEpochSecond, i.getNano)
      val formatted = ts.format(TimestampFormat.DATE_TIME)
      val parsed = Timestamp.parse(formatted, TimestampFormat.DATE_TIME)
      expect.same(formatted, i.toString)
      expect.same(parsed, Some(ts))
    }
  }

  property("Converts to/from HTTP_DATE format") {
    forAll { (i: Instant) =>
      val ts = Timestamp(i.getEpochSecond, i.getNano)
      val formatted = ts.format(TimestampFormat.HTTP_DATE)
      val parsed = Timestamp.parse(formatted, TimestampFormat.HTTP_DATE)
      val expected = imfDateFormatter.format(i)
        .replace("000 GMT", " GMT")
        .replace("000 GMT", " GMT")
        .replace(".000 GMT", " GMT")
      expect.same(formatted, expected)
      expect.same(parsed, Some(ts))
    }
  }

  property("Converts to/from EPOCH_SECONDS format") {
    forAll { (i: Instant) =>
      val ts = Timestamp(i.getEpochSecond, i.getNano)
      val formatted = ts.format(TimestampFormat.EPOCH_SECONDS)
      val parsed = Timestamp.parse(formatted, TimestampFormat.EPOCH_SECONDS)
      val expected =
        if (i.getNano != 0) {
          var s = s"${i.getEpochSecond}.${i.getNano + 1000000000}".replace(".1", ".")
          if (s.endsWith("000")) s = s.substring(0, s.length - 3)
          if (s.endsWith("000")) s = s.substring(0, s.length - 3)
          s
        } else i.getEpochSecond.toString
      expect.same(formatted, expected)
      expect.same(parsed, Some(ts))
    }
  }

  property("Parse EPOCH_SECONDS format with invalid input") {
    val EpochFormat = """^(\d+)(\.(\d+))?""".r
    forAll { (str: String) =>
      val parsed = Timestamp.parse(str, TimestampFormat.EPOCH_SECONDS)
      parsed match {
        case Some(_) => expect(EpochFormat.pattern.matcher(str).matches)
        case None    => expect(!EpochFormat.pattern.matcher(str).matches)
      }
    }
  }

  property("Parse EPOCH_SECONDS format with too many decimals") {
    forAll { (i: Int) =>
      val str = s"$i.${i % 1000}.${i % 1000}"
      val parsed = Timestamp.parse(str, TimestampFormat.EPOCH_SECONDS)
      expect.same(parsed, None)
    }
  }
}
