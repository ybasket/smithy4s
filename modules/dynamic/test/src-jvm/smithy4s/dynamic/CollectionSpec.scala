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
package dynamic

import model._

class CollectionSpec() extends DummyIO.Suite {

  test("Decode collections with member hints") {
    loadDynamicModel("collection.smithy")
      .map { model =>
        expect(
          model.shapes(IdRef("smithy4s.example#ListWithMemberHints")) == Shape
            .ListCase(
              ListShape(
                MemberShape(
                  IdRef("smithy.api#String"),
                  Map(
                    IdRef("smithy.api#documentation") -> Document.fromString(
                      "listFoo"
                    )
                  )
                )
              )
            )
        )
        expect(
          model.shapes(IdRef("smithy4s.example#MapWithMemberHints")) == Shape
            .MapCase(
              MapShape(
                MemberShape(
                  IdRef("smithy.api#String"),
                  Map(
                    IdRef("smithy.api#documentation") -> Document.fromString(
                      "mapFoo"
                    )
                  )
                ),
                MemberShape(
                  IdRef("smithy.api#Integer"),
                  Map(
                    IdRef("smithy.api#documentation") -> Document.fromString(
                      "mapBar"
                    ),
                    IdRef("smithy.api#deprecated") -> Document.obj()
                  )
                )
              )
            )
        )
      }
  }

}