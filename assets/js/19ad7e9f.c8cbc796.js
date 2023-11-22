"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[4941],{4651:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=s(5893),l=s(1151);const a={layout:"docs",title:"Style Guide",section:"chisel3"},i="Chisel Developers Style Guide",o={id:"developers/style",title:"Style Guide",description:"This document describes the syle used within the chisel3",source:"@site/docs/developers/style.md",sourceDirName:"developers",slug:"/developers/style",permalink:"/chisel/docs/developers/style",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/developers/style.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Style Guide",section:"chisel3"},sidebar:"tutorialSidebar",previous:{title:"Scaladoc",permalink:"/chisel/docs/developers/scaladoc"},next:{title:"Test Coverage",permalink:"/chisel/docs/developers/test-coverage"}},r={},c=[{value:"Filenames",id:"filenames",level:2},{value:"Packages",id:"packages",level:2},{value:"Imports",id:"imports",level:2},{value:"Tests",id:"tests",level:2},{value:"Comments",id:"comments",level:2},{value:"Module Classes and Instances",id:"module-classes-and-instances",level:2},{value:"Naming Conventions",id:"naming-conventions",level:2},{value:"Why CamelCase instead of Snake_Case?",id:"why-camelcase-instead-of-snake_case",level:3},{value:"Modules and Bundles (Classes, Traits, and Objects)",id:"modules-and-bundles-classes-traits-and-objects",level:3},{value:"Values and Methods",id:"values-and-methods",level:3},{value:"Constants",id:"constants",level:3},{value:"UpperCamelCase vs. lowerCamelCase",id:"uppercamelcase-vs-lowercamelcase",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"chisel-developers-style-guide",children:"Chisel Developers Style Guide"}),"\n",(0,t.jsxs)(n.p,{children:["This document describes the syle used within the ",(0,t.jsx)(n.code,{children:"chisel3"}),"\nand related projects (",(0,t.jsx)(n.code,{children:"firrtl"}),", etc). It does not\ncapture requirements for code which is written using these libraries,\nalthough projects may choose to adopt these guidelines."]}),"\n",(0,t.jsxs)(n.p,{children:["The Chisel style guide reflects the ",(0,t.jsx)(n.a,{href:"http://google.github.io/styleguide/javaguide.html",children:"Google Java style\nguide"})," and the ",(0,t.jsx)(n.a,{href:"http://docs.scala-lang.org/style/",children:"General Public Scala style\nguide"}),". The specific rules below are to clarify\nthe style used for the chisel3 repo and repos related to Chisel (Firrtl)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Goal:"})," Readability and consistency are the main purposes of the style guide.\nWriting your code so someone else (or yourself) can grok it later is important\nto code health and quality."]}),"\n",(0,t.jsx)(n.h2,{id:"filenames",children:"Filenames"}),"\n",(0,t.jsx)(n.p,{children:'The source file name consists of the case-sensitive name of the top-level class\nit contains, plus ".scala".'}),"\n",(0,t.jsx)(n.h2,{id:"packages",children:"Packages"}),"\n",(0,t.jsx)(n.p,{children:"Package definitions must contain the full path to the package from scala. If\nyou create a subpackage, it should go in a subdirectory."}),"\n",(0,t.jsx)(n.p,{children:"package directory.name.to.get.you.to.your.source"}),"\n",(0,t.jsxs)(n.p,{children:["As in Scala, packages follow the ",(0,t.jsx)(n.a,{href:"https://google.github.io/styleguide/javaguide.html#s5.2.1-package-names",children:"Java package naming convention"}),".\nNote that these guidelines call for all lowercase, no underscores."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"// Do this\npackage hardware.chips.topsecret.masterplan\n\n// Not this\npackage hardware.chips.veryObvious.bad_style\n"})}),"\n",(0,t.jsx)(n.p,{children:"We also suggest you do not use chisel3 as a package, and especially do not use it\nas the final (innermost) package."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"// Don't do this\npackage hardware.chips.newchip.superfastcomponent.chisel3\n\n// This will lead to instantiating package members like so:\nval module = Module(new chisel3.FastModule)\n\n// Which collides with the chisel namespace\nimport chisel3._\n"})}),"\n",(0,t.jsx)(n.h2,{id:"imports",children:"Imports"}),"\n",(0,t.jsxs)(n.p,{children:["Avoid wildcard ( ._ ) imports, with the exception of chisel3._\nAll other imports must call out used methods.\n",(0,t.jsx)(n.code,{children:"import chisel3._"})," must be first, and separated from remaining imports with an extra blank line."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Reason:"})," This makes it clear where methods are defined."]}),"\n",(0,t.jsx)(n.p,{children:"Any remaining imports must be listed alphabetically."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import chisel3._\n\nimport the.other.thing.that.i.reference.inline\nimport the.other.things.that.i.reference.{ClassOne, ClassTwo}\n\n\nval myInline = inline.MakeAnInline()\nval myClassOne = new ClassOne\n"})}),"\n",(0,t.jsx)(n.h2,{id:"tests",children:"Tests"}),"\n",(0,t.jsx)(n.p,{children:'Test classes are named starting with the name of the class they are testing, and\nending with "Test".\nTest files must start with the name of the class you are testing and end with\n"Test.scala".\nTest files should reside in a subdirectory called "tests".\nThe tests package should be composed of the package class you are testing.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"package class.under.test.class\npackage tests\n"})}),"\n",(0,t.jsx)(n.h2,{id:"comments",children:"Comments"}),"\n",(0,t.jsx)(n.p,{children:"We use scaladoc to automatically generate documentation from the source code."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"/** Multiple lines of ScalaDoc text are written here,\n  * wrapped normally...\n  */\npublic int method(String p1) { ... }\n"})}),"\n",(0,t.jsx)(n.p,{children:"... or in this single-line example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"/** An especially short bit of Javadoc. */\n"})}),"\n",(0,t.jsx)(n.p,{children:"Write documentation as if the person reading it knows more about Scala and\nChisel than you. If you find comments in the code consider breaking them up\ninto seperate methods."}),"\n",(0,t.jsx)(n.h2,{id:"module-classes-and-instances",children:"Module Classes and Instances"}),"\n",(0,t.jsxs)(n.p,{children:["Modules can take different forms in Chisel. The first form is similar to Verilog, where\nyou instance the module and then hook it up. In this case ",(0,t.jsx)(n.code,{children:"Module(new MyMod())"})," is\nreturning a reference to the module."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"val myMod = Module(new MyMod())\nmyMod.io <> hookUp\n"})}),"\n",(0,t.jsx)(n.p,{children:"The second form is a more programmatic inline style with factory methods. In this case,\nQueue is actually returning the part of the IO bundle representing the queue's\noutput. The factory method takes the input IO to the queue and an optional parameter\nfor depth."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"val queueOut = Queue(queueIn, depth=10)\n"})}),"\n",(0,t.jsx)(n.p,{children:"The latter can be used for composing multiple functions into a single line."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"val queueOut = Queue(\n  Arbitrate.byRoundRobin(\n    Queue(a), // depth assumed to be 1\n    Queue(b, depth=3),\n    Queue(c, depth=4)\n  ),\n  depth=10\n)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"naming-conventions",children:"Naming Conventions"}),"\n",(0,t.jsxs)(n.p,{children:["Chisel follows the ",(0,t.jsx)(n.a,{href:"http://docs.scala-lang.org/style/naming-conventions.html",children:"Scala Naming Conventions"}),".\nIn general, Chisel code should use ",(0,t.jsx)(n.code,{children:"lowerCamelCase"})," for variable naming (ie. the first letter\nof each word is capitalized except for the first word) and ",(0,t.jsx)(n.code,{children:"UpperCamelCase"})," for class names."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Using these guidelines can result in verilog which is noncompliant with common verilog coding standards, e.g.\nthe ",(0,t.jsx)(n.a,{href:"https://github.com/lowRISC/style-guides/blob/master/VerilogCodingStyle.md#naming",children:"lowRISC verilog coding style"}),".\nAuthors of Chisel code that translates to hardware constructs might therefore prefer to use ",(0,t.jsx)(n.code,{children:"snake_case"}),". However,\ngenerated code can always be transformed to meet various emitted code requirements, so the official Chisel style\nguide follows the Scala convention."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"why-camelcase-instead-of-snake_case",children:"Why CamelCase instead of Snake_Case?"}),"\n",(0,t.jsxs)(n.p,{children:["The compiler inserts underscores when splitting Chisel/FIRRTL aggregate types\ninto Verilog types. The compiler uses underscores to preserve the original\nstructure of the data in the resulting Verilog. Because of the special meaning\nof underscores in Chisel-generated Verilog, their use in naming is ",(0,t.jsx)(n.strong,{children:"strongly"}),"\ndiscouraged."]}),"\n",(0,t.jsx)(n.p,{children:"Consider the following Chisel code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"val msg = Wire(new Bundle {\n  val valid = Bool()\n  val addr = UInt(32)\n  val data = UInt(64)\n})\nval msg_rec = Wire(Bool())\n"})}),"\n",(0,t.jsx)(n.p,{children:"Which compiles to the Verilog:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-verilog",children:"wire  msg_valid;\nwire [31:0] msg_addr;\nwire [63:0] msg_data;\nwire  msg_rec;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The Verilog maintains the structure of the original aggregate wire ",(0,t.jsx)(n.code,{children:"msg"}),".\nHowever, because we named another variable ",(0,t.jsx)(n.code,{children:"msg_rec"}),", it appears in the Verilog\nas if ",(0,t.jsx)(n.code,{children:"msg"})," had 4 fields instead of its actual 3! If we instead follow the\nlowerCamelCase for values naming convention, the resulting Verilog makes more\nsense:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"val msg = Wire(new Bundle {\n  val valid = Bool()\n  val addr = UInt(32)\n  val data = UInt(64)\n})\nval msgRec = Wire(Bool())\n"})}),"\n",(0,t.jsx)(n.p,{children:"And its resulting Verilog:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-verilog",children:"wire  msg_valid;\nwire [31:0] msg_addr;\nwire [63:0] msg_data;\nwire  msgRec;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Much better."}),"\n",(0,t.jsx)(n.h3,{id:"modules-and-bundles-classes-traits-and-objects",children:"Modules and Bundles (Classes, Traits, and Objects)"}),"\n",(0,t.jsx)(n.p,{children:"Modules are Scala classes and thus use UpperCamelCase."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"class ModuleNamingExample extends Module {\n  ...\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Similarly, other classes (Chisel & Scala) should be UpperCamelCase as well."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"trait UsefulScalaUtilities {\n  def isEven(n: Int): Boolean = (n % 2) == 0\n  def isOdd(n: Int): Boolean = !isEven(n)\n}\n\nclass MyCustomBundle extends Bundle {\n  ...\n}\n// Companion object to MyCustomBundle\nobject MyCustomBundle {\n  ...\n}\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"values-and-methods",children:"Values and Methods"}),"\n",(0,t.jsx)(n.p,{children:"Values and methods should use lowerCamelCase. (Unless the value is a constant.)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"val mySuperReg = Reg(init = 0.asUInt(32))\ndef myImportantMethod(a: UInt): Bool = a < 23.asUInt\n"})}),"\n",(0,t.jsx)(n.h3,{id:"constants",children:"Constants"}),"\n",(0,t.jsxs)(n.p,{children:["Unlike the Google Java style, constants use UpperCamelCase, which is in line\nwith the official ",(0,t.jsx)(n.a,{href:"https://docs.scala-lang.org/style/naming-conventions.html",children:"Scala Naming\nConventions"}),".\nConstants are final fields (val or object) whose contents are deeply immutable\nand belong to a package object or an object. Examples:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'// Constants\nobject Constants {\n  val Number = 5\n  val Names = "Ed" :: "Ann" :: Nil\n  val Ages = Map("Ed" -> 35, "Ann" -> 32)\n}\n\n// Not constants\nclass NonConstantsInClass {\n  val inClass: String = "in-class"\n}\n\nobject nonConstantsInObject {\n  var varString = "var-string"\n  val mutableCollection: scala.collection.mutable.Set[String]\n  val mutableElements = Set(mutable)\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"uppercamelcase-vs-lowercamelcase",children:"UpperCamelCase vs. lowerCamelCase"}),"\n",(0,t.jsxs)(n.p,{children:["There is more than one reasonable way to covert English prose into camel case.\nWe follow the convention defined in the ",(0,t.jsx)(n.a,{href:"https://google.github.io/styleguide/javaguide.html#s5.3-camel-case",children:"Google Java style\nguide"}),". The\npotentially non-obvious rule being to treat acronymns as words for the purpose\nof camel case."]}),"\n",(0,t.jsx)(n.p,{children:"Note that the casing of the original words is almost entirely disregarded.\nExample:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Prose form"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"UpperCamelCase"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"lowerCamelCase"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Incorrect"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"find GCD"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"FindGcd"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"findGcd"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.del,{children:"findGCD"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"state for FSM"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"StateForFsm"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"stateForFsm"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.del,{children:"stateForFSM"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"mock dut"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"MockDut"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"mockDut"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.del,{children:"MockDUT"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"FIFO Generator"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"FifoGenerator"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"fifoGenerator"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.del,{children:"FIFOGenerator"})})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var t=s(7294);const l={},a=t.createContext(l);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);