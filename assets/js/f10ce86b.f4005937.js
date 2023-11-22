"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[5011],{2987:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=n(5893),o=n(1151);const i={layout:"docs",title:"DataView Cookbook",section:"chisel3"},s="DataView Cookbook",r={id:"cookbooks/dataview",title:"DataView Cookbook",description:"* How do I view a Data as a UInt or vice versa?",source:"@site/docs/cookbooks/dataview.md",sourceDirName:"cookbooks",slug:"/cookbooks/dataview",permalink:"/chisel/docs/cookbooks/dataview",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/cookbooks/dataview.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"DataView Cookbook",section:"chisel3"},sidebar:"tutorialSidebar",previous:{title:"General Cookbook",permalink:"/chisel/docs/cookbooks/cookbook"},next:{title:"Hierarchy Cookbook",permalink:"/chisel/docs/cookbooks/hierarchy"}},d={},l=[{value:"How do I view a Data as a UInt or vice versa?",id:"how-do-i-view-a-data-as-a-uint-or-vice-versa",level:2},{value:"How do I create a DataView for a Bundle has a type parameter?",id:"how-do-i-create-a-dataview-for-a-bundle-has-a-type-parameter",level:2},{value:"How do I create a DataView for a Bundle with optional fields?",id:"how-do-i-create-a-dataview-for-a-bundle-with-optional-fields",level:2},{value:"How do I connect a subset of Bundle fields?",id:"how-do-i-connect-a-subset-of-bundle-fields",level:2},{value:"How do I view a Bundle as a parent type (superclass)?",id:"how-do-i-view-a-bundle-as-a-parent-type-superclass",level:3},{value:"How do I view a Bundle as a parent type when the parent type is abstract (like a trait)?",id:"how-do-i-view-a-bundle-as-a-parent-type-when-the-parent-type-is-abstract-like-a-trait",level:3},{value:"How can I use <code>.viewAs</code> instead of <code>.viewAsSupertype(type)</code>?",id:"how-can-i-use-viewas-instead-of-viewassupertypetype",level:3}];function c(e){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"dataview-cookbook",children:"DataView Cookbook"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"#how-do-i-view-a-data-as-a-uint-or-vice-versa",children:"How do I view a Data as a UInt or vice versa?"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"#how-do-i-create-a-dataview-for-a-bundle-has-a-type-parameter",children:"How do I create a DataView for a Bundle has a type parameter?"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"#how-do-i-create-a-dataview-for-a-bundle-with-optional-fields",children:"How do I create a DataView for a Bundle with optional fields?"})}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"#how-do-i-connect-a-subset-of-bundle-fields",children:"How do I connect a subset of Bundle fields?"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"#how-do-i-view-a-bundle-as-a-parent-type-superclass",children:"How do I view a Bundle as a parent type (superclass)?"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"#how-do-i-view-a-bundle-as-a-parent-type-when-the-parent-type-is-abstract-like-a-trait",children:"How do I view a Bundle as a parent type when the parent type is abstract (like a trait)?"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsxs)(a.a,{href:"#how-can-i-use-viewas-instead-of-viewassupertypetype",children:["How can I use ",(0,t.jsx)(a.code,{children:".viewAs"})," instead of ",(0,t.jsx)(a.code,{children:".viewAsSupertype(type)"}),"?"]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"how-do-i-view-a-data-as-a-uint-or-vice-versa",children:"How do I view a Data as a UInt or vice versa?"}),"\n",(0,t.jsxs)(a.p,{children:["Subword viewing (using concatenations or bit extractions in ",(0,t.jsx)(a.code,{children:"DataViews"}),") is not yet supported.\nWe intend to implement this in the future, but for the time being, use regular casts\n(",(0,t.jsx)(a.code,{children:".asUInt"})," and ",(0,t.jsx)(a.code,{children:".asTypeOf"}),")."]}),"\n",(0,t.jsx)(a.h2,{id:"how-do-i-create-a-dataview-for-a-bundle-has-a-type-parameter",children:"How do I create a DataView for a Bundle has a type parameter?"}),"\n",(0,t.jsxs)(a.p,{children:["Instead of using a ",(0,t.jsx)(a.code,{children:"val"}),", use a ",(0,t.jsx)(a.code,{children:"def"})," which can have type parameters:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:"import chisel3._\nimport chisel3.experimental.dataview._\n\nclass Foo[T <: Data](val foo: T) extends Bundle\nclass Bar[T <: Data](val bar: T) extends Bundle\n\nobject Foo {\n  implicit def view[T <: Data]: DataView[Foo[T], Bar[T]] = {\n    DataView(f => new Bar(f.foo.cloneType), _.foo -> _.bar)\n    // .cloneType is necessary because the f passed to this function will be bound hardware\n  }\n}\n"})}),"\n",(0,t.jsxs)(a.p,{children:["If you think about type parameterized classes as really being a family of different classes\n(one for each type parameter), you can think about the ",(0,t.jsx)(a.code,{children:"implicit def"})," as a generator of ",(0,t.jsx)(a.code,{children:"DataViews"}),"\nfor each type parameter."]}),"\n",(0,t.jsx)(a.h2,{id:"how-do-i-create-a-dataview-for-a-bundle-with-optional-fields",children:"How do I create a DataView for a Bundle with optional fields?"}),"\n",(0,t.jsxs)(a.p,{children:["Instead of using the default ",(0,t.jsx)(a.code,{children:"DataView"})," apply method, use ",(0,t.jsx)(a.code,{children:"DataView.mapping"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:"import chisel3._\nimport chisel3.experimental.dataview._\n\nclass Foo(val w: Option[Int]) extends Bundle {\n  val foo = UInt(8.W)\n  val opt = w.map(x => UInt(x.W))\n}\nclass Bar(val w: Option[Int]) extends Bundle {\n  val bar = UInt(8.W)\n  val opt = w.map(x => UInt(x.W))\n}\n\nobject Foo {\n  implicit val view: DataView[Foo, Bar] =\n    DataView.mapping(\n      // First argument is always the function to make the view from the target\n      f => new Bar(f.w),\n      // Now instead of a varargs of tuples of individual mappings, we have a single function that\n      // takes a target and a view and returns an Iterable of tuple\n      (f, b) =>  List(f.foo -> b.bar) ++ f.opt.map(_ -> b.opt.get)\n                                   // ^ Note that we can append options since they are Iterable!\n\n    )\n}\n"})}),"\n",(0,t.jsx)(a.h2,{id:"how-do-i-connect-a-subset-of-bundle-fields",children:"How do I connect a subset of Bundle fields?"}),"\n",(0,t.jsxs)(a.p,{children:['Chisel 3 requires types to match exactly for connections.\nDataView provides a mechanism for "viewing" one ',(0,t.jsx)(a.code,{children:"Bundle"})," object as if it were the type of another,\nwhich allows them to be connected."]}),"\n",(0,t.jsx)(a.h3,{id:"how-do-i-view-a-bundle-as-a-parent-type-superclass",children:"How do I view a Bundle as a parent type (superclass)?"}),"\n",(0,t.jsxs)(a.p,{children:["For viewing ",(0,t.jsx)(a.code,{children:"Bundles"})," as the type of the parent, it is as simple as using ",(0,t.jsx)(a.code,{children:"viewAsSupertype"})," and providing a\ntemplate object of the parent type:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:"import chisel3._\nimport chisel3.experimental.dataview._\n\nclass Foo extends Bundle {\n  val foo = UInt(8.W)\n}\nclass Bar extends Foo {\n  val bar = UInt(8.W)\n}\nclass MyModule extends Module {\n  val foo = IO(Input(new Foo))\n  val bar = IO(Output(new Bar))\n  bar.viewAsSupertype(new Foo) := foo // bar.foo := foo.foo\n  bar.bar := 123.U           // all fields need to be connected\n}\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-verilog",children:"// Generated by CIRCT firtool-1.59.0\nmodule MyModule(\t// dataview.md:117:7\n  input        clock,\t// <stdin>:4:11\n               reset,\t// <stdin>:5:11\n  input  [7:0] foo_foo,\t// dataview.md:118:15\n  output [7:0] bar_foo,\t// dataview.md:119:15\n               bar_bar\t// dataview.md:119:15\n);\n\n  assign bar_foo = foo_foo;\t// dataview.md:117:7\n  assign bar_bar = 8'h7B;\t// dataview.md:117:7, :121:11\nendmodule\n\n"})}),"\n",(0,t.jsx)(a.h3,{id:"how-do-i-view-a-bundle-as-a-parent-type-when-the-parent-type-is-abstract-like-a-trait",children:"How do I view a Bundle as a parent type when the parent type is abstract (like a trait)?"}),"\n",(0,t.jsxs)(a.p,{children:["Given the following ",(0,t.jsx)(a.code,{children:"Bundles"})," that share a common ",(0,t.jsx)(a.code,{children:"trait"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:"import chisel3._\nimport chisel3.experimental.dataview._\n\ntrait Super extends Bundle {\n  def bitwidth: Int\n  val a = UInt(bitwidth.W)\n}\nclass Foo(val bitwidth: Int) extends Super {\n  val foo = UInt(8.W)\n}\nclass Bar(val bitwidth: Int) extends Super {\n  val bar = UInt(8.W)\n}\n"})}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"Foo"})," and ",(0,t.jsx)(a.code,{children:"Bar"})," cannot be connected directly, but they could be connected by viewing them both as if\nthey were instances of their common supertype, ",(0,t.jsx)(a.code,{children:"Super"}),".\nA straightforward approach might run into an issue like the following:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:"class MyModule extends Module {\n  val foo = IO(Input(new Foo(8)))\n  val bar = IO(Output(new Bar(8)))\n  bar.viewAsSupertype(new Super) := foo.viewAsSupertype(new Super)\n}\n// error: trait Super is abstract; cannot be instantiated\n//   bar.viewAsSupertype(new Super) := foo.viewAsSupertype(new Super)\n//                       ^^^^^^^^^\n// error: trait Super is abstract; cannot be instantiated\n//   bar.viewAsSupertype(new Super) := foo.viewAsSupertype(new Super)\n//                                                         ^^^^^^^^^\n"})}),"\n",(0,t.jsxs)(a.p,{children:["The problem is that ",(0,t.jsx)(a.code,{children:"viewAs"})," requires an object to use as a type template (so that it can be cloned),\nbut ",(0,t.jsx)(a.code,{children:"traits"})," are abstract and cannot be instantiated.\nThe solution is to create an instance of an ",(0,t.jsx)(a.em,{children:"anonymous class"})," and use that object as the argument to ",(0,t.jsx)(a.code,{children:"viewAs"}),".\nWe can do this like so:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:"class MyModule extends Module {\n  val foo = IO(Input(new Foo(8)))\n  val bar = IO(Output(new Bar(8)))\n  val tpe = new Super { // Adding curly braces creates an anonymous class\n    def bitwidth = 8 // We must implement any abstract methods\n  }\n  bar.viewAsSupertype(tpe) := foo.viewAsSupertype(tpe)\n}\n"})}),"\n",(0,t.jsxs)(a.p,{children:["By adding curly braces after the name of the trait, we're telling Scala to create a new concrete\nsubclass of the trait, and create an instance of it.\nAs indicated in the comment, abstract methods must still be implemented.\nThis is the same that happens when one writes ",(0,t.jsx)(a.code,{children:"new Bundle {}"}),",\nthe curly braces create a new concrete subclass; however, because ",(0,t.jsx)(a.code,{children:"Bundle"})," has no abstract methods,\nthe contents of the body can be empty."]}),"\n",(0,t.jsxs)(a.h3,{id:"how-can-i-use-viewas-instead-of-viewassupertypetype",children:["How can I use ",(0,t.jsx)(a.code,{children:".viewAs"})," instead of ",(0,t.jsx)(a.code,{children:".viewAsSupertype(type)"}),"?"]}),"\n",(0,t.jsxs)(a.p,{children:["While ",(0,t.jsx)(a.code,{children:"viewAsSupertype"})," is helpful for one-off casts, the need to provide a type template object\neach time can be onerous.\nBecause of the subtyping relationship, you can use ",(0,t.jsx)(a.code,{children:"PartialDataView.supertype"})," to create a\n",(0,t.jsx)(a.code,{children:"DataView"})," from a Bundle type to a parent type by just providing the function to construct an\ninstance of the parent type from an instance of the child type.\nThe mapping of corresponding fields is automatically determined by Chisel to be the fields defined\nin the supertype."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:"import chisel3._\nimport chisel3.experimental.dataview._\n\nclass Foo(x: Int) extends Bundle {\n  val foo = UInt(x.W)\n}\nclass Bar(val x: Int) extends Foo(x) {\n  val bar = UInt(x.W)\n}\n// Define a DataView without having to specify the mapping!\nimplicit val view = PartialDataView.supertype[Bar, Foo](b => new Foo(b.x))\n\nclass MyModule extends Module {\n  val foo = IO(Input(new Foo(8)))\n  val bar = IO(Output(new Bar(8)))\n  bar.viewAs[Foo] := foo // bar.foo := foo.foo\n  bar.bar := 123.U       // all fields need to be connected\n}\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-verilog",children:"// Generated by CIRCT firtool-1.59.0\nmodule MyModule(\t// dataview.md:203:7\n  input        clock,\t// <stdin>:4:11\n               reset,\t// <stdin>:5:11\n  input  [7:0] foo_foo,\t// dataview.md:204:15\n  output [7:0] bar_foo,\t// dataview.md:205:15\n               bar_bar\t// dataview.md:205:15\n);\n\n  assign bar_foo = foo_foo;\t// dataview.md:203:7\n  assign bar_bar = 8'h7B;\t// dataview.md:203:7, :207:11\nendmodule\n\n"})})]})}function p(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>r,a:()=>s});var t=n(7294);const o={},i=t.createContext(o);function s(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);