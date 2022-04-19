package smithy4s.example

import smithy4s.Newtype
import smithy4s.syntax._

object ArbitraryData extends Newtype[smithy4s.Document] {
  val id: smithy4s.ShapeId = smithy4s.ShapeId("smithy4s.example", "arbitraryData")
  val hints : smithy4s.Hints = smithy4s.Hints(
    id,
    smithy.api.Trait(None, None, None),
  )
  val underlyingSchema : smithy4s.Schema[smithy4s.Document] = document.withHints(hints)
  val schema : smithy4s.Schema[ArbitraryData] = bijection(underlyingSchema, ArbitraryData(_), (_ : ArbitraryData).value)
  implicit val staticSchema : schematic.Static[smithy4s.Schema[ArbitraryData]] = schematic.Static(schema)
}