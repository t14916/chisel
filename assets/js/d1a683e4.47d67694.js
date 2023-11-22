"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[2478],{1946:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=o(5893),s=o(1151);const t={layout:"docs",title:"Upgrading From Chisel 3.4 to 3.5",section:"chisel3"},a=void 0,r={id:"appendix/upgrading-from-chisel-3-4",title:"Upgrading From Chisel 3.4 to 3.5",description:"Upgrading From Chisel 3.4 to 3.5",source:"@site/docs/appendix/upgrading-from-chisel-3-4.md",sourceDirName:"appendix",slug:"/appendix/upgrading-from-chisel-3-4",permalink:"/chisel/docs/appendix/upgrading-from-chisel-3-4",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/appendix/upgrading-from-chisel-3-4.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Upgrading From Chisel 3.4 to 3.5",section:"chisel3"},sidebar:"tutorialSidebar",previous:{title:"Experimental Features",permalink:"/chisel/docs/appendix/experimental-features"},next:{title:"Upgrading From Scala 2.11",permalink:"/chisel/docs/appendix/upgrading-from-scala-2-11"}},l={},d=[{value:"Upgrading From Chisel 3.4 to 3.5",id:"upgrading-from-chisel-34-to-35",level:2},{value:"General Strategy for Upgrade",id:"general-strategy-for-upgrade",level:3},{value:"Common Issues",id:"common-issues",level:3},{value:"Value io is not a member of chisel3.Module",id:"value-io-is-not-a-member-of-chisel3module",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"upgrading-from-chisel-34-to-35",children:"Upgrading From Chisel 3.4 to 3.5"}),"\n",(0,i.jsx)(n.p,{children:"Chisel 3.5 was a major step forward. It added support for Scala 2.13 as well as dropped many long deprecated APIs.\nSome users may run into issues while upgrading so this page serves as a central location to describe solutions to common issues."}),"\n",(0,i.jsx)(n.h3,{id:"general-strategy-for-upgrade",children:"General Strategy for Upgrade"}),"\n",(0,i.jsx)(n.p,{children:"Users are encouraged to first upgrade to the latest version of Chisel 3.4 (3.4.4 at the time of writing) and resolve all deprecation warnings. Doing so should enable a smoother transition to Chisel 3.5."}),"\n",(0,i.jsx)(n.h3,{id:"common-issues",children:"Common Issues"}),"\n",(0,i.jsx)(n.h4,{id:"value-io-is-not-a-member-of-chisel3module",children:"Value io is not a member of chisel3.Module"}),"\n",(0,i.jsxs)(n.p,{children:["This issue most often arises when there are two implementations of a given ",(0,i.jsx)(n.code,{children:"Module"})," that may be chosen between by a generator parameter.\nFor example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"class Foo extends Module {\n  val io = IO(new Bundle {\n    val in = Input(UInt(8.W))\n    val out = Output(UInt(8.W))\n  })\n  io.out := io.in\n}\n\nclass Bar extends Module {\n  val io = IO(new Bundle {\n    val in = Input(UInt(8.W))\n    val out = Output(UInt(8.W))\n  })\n  io.out := io.in + 1.U\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"class Example(useBar: Boolean) extends Module {\n  val io = IO(new Bundle {\n    val in = Input(UInt(8.W))\n    val out = Output(UInt(8.W))\n  })\n\n  val inst = if (useBar) {\n    Module(new Bar)\n  } else {\n    Module(new Foo)\n  }\n\n  inst.io.in := io.in\n  io.out := inst.io.out\n}\n// error: value io is not a member of chisel3.Module\n//   inst.io.in := io.in\n//   ^^^^^^^\n// error: value io is not a member of chisel3.Module\n//   io.out := inst.io.out\n//             ^^^^^^^\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Foo"})," and ",(0,i.jsx)(n.code,{children:"Bar"})," clearly have the same interface, yet we get a type error in Chisel 3.5.\nNotably, while this does work in Chisel 3.4, it does throw a deprecation warning.\nIn short, this code is relying on old behavior of the Scala type inferencer.\nIn Scala 2.11 and before, the type inferred for ",(0,i.jsx)(n.code,{children:"val inst"})," is: ",(0,i.jsx)(n.code,{children:"Module { def io : { def in : UInt; def out : UInt } }"}),".\nAnd in fact, if we manually ascribe this type to ",(0,i.jsx)(n.code,{children:"val inst"}),", our same code from above works in Chisel 3.5:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"class Example(useBar: Boolean) extends Module {\n  val io = IO(new Bundle {\n    val in = Input(UInt(8.W))\n    val out = Output(UInt(8.W))\n  })\n\n  val inst: Module { def io : { def in : UInt; def out : UInt } } = if (useBar) {\n    Module(new Bar)\n  } else {\n    Module(new Foo)\n  }\n\n  inst.io.in := io.in\n  io.out := inst.io.out\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["So what is going on and why is this type so ugly?\nThis is called a ",(0,i.jsxs)(n.a,{href:"https://en.wikipedia.org/wiki/Structural_type_system",children:[(0,i.jsx)(n.em,{children:"structural"})," (or ",(0,i.jsx)(n.em,{children:"duck"}),") type"]}),".\nBasically, code does not provide any unifying type for ",(0,i.jsx)(n.code,{children:"Foo"})," and ",(0,i.jsx)(n.code,{children:"Bar"})," so the compiler does its best to make one up.\nOne negative consequence of the old Scala behavior is that structural type inference makes it very easy to accidentally\nchange the public API of your code without meaning to.\nThus, in the bump from Scala 2.11 to 2.12, the behavior of the Scala compiler changed to not do structural type inference by default."]}),"\n",(0,i.jsx)(n.p,{children:"The solution, is to explicitly provide a type to the Scala compiler:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"trait HasCommonInterface extends Module {\n  val io = IO(new Bundle {\n    val in = Input(UInt(8.W))\n    val out = Output(UInt(8.W))\n  })\n}\n\nclass Foo extends Module with HasCommonInterface {\n  io.out := io.in\n}\n\nclass Bar extends Module with HasCommonInterface {\n  io.out := io.in + 1.U\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now our original code works:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:'class Example(useBar: Boolean) extends Module {\n  val io = IO(new Bundle {\n    val in = IO(Input(UInt(8.W)))\n    val out = IO(Output(UInt(8.W)))\n  })\n\n  // Now, inst is inferred to be of type "HasCommonInterface"\n  val inst = if (useBar) {\n    Module(new Bar)\n  } else {\n    Module(new Foo)\n  }\n\n  inst.io.in := io.in\n  io.out := inst.io.out\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Historical Note"})}),"\n",(0,i.jsxs)(n.p,{children:["This may sound similar because a very similar error is included in ",(0,i.jsx)(n.a,{href:"upgrading-from-scala-2-11#common-issues",children:"Common Issues"})," in the Appendix for upgrading from Scala 2.11 to 2.12.\nThe workaround employed in Chisel for Scala 2.12 did not work in Scala 2.13, so we came up with the more robust solution described above."]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>a});var i=o(7294);const s={},t=i.createContext(s);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);