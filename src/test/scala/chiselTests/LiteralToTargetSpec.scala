// SPDX-License-Identifier: Apache-2.0

package chiselTests

import chisel3._
import circt.stage.ChiselStage
import org.scalatest.freespec.AnyFreeSpec
import org.scalatest.matchers.should.Matchers

class LiteralToTargetSpec extends AnyFreeSpec with Matchers {

  "Literal Data should fail to be converted to ReferenceTarget" in {

    (the[ChiselException] thrownBy {

      class Bar extends RawModule {
        val a = 1.U
      }

      class Foo extends RawModule {
        val bar = Module(new Bar)
        bar.a.toTarget
      }

      ChiselStage.elaborate(new Foo)
    } should have).message("Cannot call instanceName on a literal: UInt<1>(1)")
  }
}
