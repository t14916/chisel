// RUN: scala-cli --java-home "$JAVAHOME" --extra-jars "$RUNCLASSPATH" --scalac-option "$SCALAVERSION" --java-opt "--enable-native-access=ALL-UNNAMED --enable-preview $JAVALIBRARYPATH" --compiler-plugin "$PLUGINJARS"

import chisel3._
import circt.stage.ChiselStage
class FooBundle extends Bundle {
  val foo = Input(UInt(3.W))
}
class FooModule extends Module {
  val io = IO(new FooBundle)
}
println(ChiselStage.emitCHIRRTL(new FooModule))
