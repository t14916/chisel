"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[8915],{4771:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(5893),a=n(1151);const o={layout:"docs",title:"Upgrading From Scala 2.11",section:"chisel3",redirect_from:["/chisel3/upgrading-from-scala-2-11.html"]},r=void 0,l={id:"appendix/upgrading-from-scala-2-11",title:"Upgrading From Scala 2.11",description:"Upgrading From Scala 2.11 to 2.12",source:"@site/docs/appendix/upgrading-from-scala-2-11.md",sourceDirName:"appendix",slug:"/appendix/upgrading-from-scala-2-11",permalink:"/chisel/docs/appendix/upgrading-from-scala-2-11",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/appendix/upgrading-from-scala-2-11.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Upgrading From Scala 2.11",section:"chisel3",redirect_from:["/chisel3/upgrading-from-scala-2-11.html"]},sidebar:"tutorialSidebar",previous:{title:"Upgrading From Chisel 3.4 to 3.5",permalink:"/chisel/docs/appendix/upgrading-from-chisel-3-4"},next:{title:"Versioning",permalink:"/chisel/docs/appendix/versioning"}},t={},c=[{value:"Upgrading From Scala 2.11 to 2.12",id:"upgrading-from-scala-211-to-212",level:2},{value:"Scala Versioning",id:"scala-versioning",level:3},{value:"How to Upgrade",id:"how-to-upgrade",level:3},{value:"Common Issues",id:"common-issues",level:3},{value:"Value is not a member of chisel3.Bundle",id:"value-is-not-a-member-of-chisel3bundle",level:4}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"upgrading-from-scala-211-to-212",children:"Upgrading From Scala 2.11 to 2.12"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"As of Chisel 3.5, support for Scala 2.11 has been dropped. This page is only relevant to Chisel versions 3.4 and earlier"})}),"\n",(0,i.jsx)(s.p,{children:'As the latest (and probably last) release of Scala 2.11 (2.11.12) was released on 2 November 2017, the time has come to deprecate support for Scala 2.11.\nChisel 3.4 is the last version of Chisel that will support Scala 2.11, so users should upgrade to Scala 2.12\nThis document is intended to help guide Chisel users through this process; both the "Why?" and the "How?".'}),"\n",(0,i.jsx)(s.h3,{id:"scala-versioning",children:"Scala Versioning"}),"\n",(0,i.jsxs)(s.p,{children:["Scala versions have the following structure: ",(0,i.jsx)(s.code,{children:"2.X.Y"})," where ",(0,i.jsx)(s.code,{children:"X"})," is the ",(0,i.jsx)(s.em,{children:"major version"})," and ",(0,i.jsx)(s.code,{children:"Y"})," is the ",(0,i.jsx)(s.em,{children:"minor version"}),".\nNote that while we keep the leading ",(0,i.jsx)(s.code,{children:"2"})," constant, there is a project, ",(0,i.jsx)(s.a,{href:"https://dotty.epfl.ch/",children:"Dotty"}),", that is slated to become Scala 3."]}),"\n",(0,i.jsxs)(s.p,{children:["Scala maintains both source and binary compatiblity between minor versions, but not between major versions.\nBinary compatibility is defined at the level of the Java Byte Code (the ",(0,i.jsx)(s.code,{children:".class"})," or ",(0,i.jsx)(s.code,{children:".jar"})," files compiled from ",(0,i.jsx)(s.code,{children:".scala"}),").\nThis means that Scala projects that support multiple major versions of Scala must be compiled and published for each supported version.\nWhen publishing artifacts to Maven repositories, this manifests as an appendix on the ",(0,i.jsx)(s.em,{children:"Artifact ID"}),'.\nTaking Chisel v3.3.2 as an example, the "Artifact ID" is ',(0,i.jsx)(s.a,{href:"https://search.maven.org/artifact/edu.berkeley.cs/chisel3_2.12",children:'"chisel3_2.12"'}),"\nfor Scala 2.12, and ",(0,i.jsx)(s.a,{href:"https://search.maven.org/artifact/edu.berkeley.cs/chisel3_2.11",children:'"chisel3_2.11"'})," for Scala 2.11."]}),"\n",(0,i.jsx)(s.p,{children:"For more information, see the documentation on the Scala website:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://docs.scala-lang.org/overviews/core/binary-compatibility-of-scala-releases.html",children:"Binary Compatibility of Scala Releases"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://docs.scala-lang.org/overviews/core/binary-compatibility-for-library-authors.html",children:"Binary Compatibility for Library Authoers"})}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"how-to-upgrade",children:"How to Upgrade"}),"\n",(0,i.jsxs)(s.p,{children:["For most users, this is as simple as changing the ",(0,i.jsx)(s.code,{children:"scalaVersion"})," field in your ",(0,i.jsx)(s.code,{children:"build.sbt"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scala",children:'scalaVersion := "2.11.12"\n'})}),"\n",(0,i.jsx)(s.p,{children:"Becomes"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scala",children:'scalaVersion := "2.12.12"\n'})}),"\n",(0,i.jsx)(s.p,{children:"Now, the next time you run SBT, it will be using the Scala 2.12 version of Chisel 3 (as well as any other dependencies you have)."}),"\n",(0,i.jsx)(s.h3,{id:"common-issues",children:"Common Issues"}),"\n",(0,i.jsxs)(s.p,{children:["As mentioned in the ",(0,i.jsx)(s.a,{href:"#scala-versioning",children:"previous section"}),", Scala does ",(0,i.jsx)(s.em,{children:"not"})," maintain source compatibilty between major versions.\nPut another way, sometimes they break things in backwards incompatible ways.\nThis section includes some common issues that Chisel users run into and how to fix them."]}),"\n",(0,i.jsxs)(s.p,{children:["For complete information about changes, please see the ",(0,i.jsx)(s.a,{href:"https://www.scala-lang.org/news/2.12.0/",children:"release notes for Scala 2.12.0"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"value-is-not-a-member-of-chisel3bundle",children:"Value is not a member of chisel3.Bundle"}),"\n",(0,i.jsxs)(s.p,{children:["The most common problem for Chisel users upgrading from Scala 2.11 to 2.12 is a change in Scala type inference.\nThis usually occurs in the context of ",(0,i.jsx)(s.code,{children:"io"})," ",(0,i.jsx)(s.code,{children:"Bundles"})," in ",(0,i.jsx)(s.code,{children:"Modules"}),", given:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scala",children:"class Foo extends Module {\n  val io = IO(new Bundle {\n    val in = Input(Bool())\n    val out = Output(Bool())\n  })\n\n  io.out := ~io.in\n}\n"})}),"\n",(0,i.jsx)(s.p,{children:'You may see an error that says somethign like "value out is not a member of chisel3.Bundle":'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"[error] /workspace/src/main/scala/gcd/Foo.scala:9:6: value out is not a member of chisel3.Bundle\n[error]   io.out := ~io.in\n[error]      ^\n[error] /workspace/src/main/scala/gcd/Foo.scala:9:17: value in is not a member of chisel3.Bundle\n[error]   io.out := ~io.in\n[error]                 ^\n[error] two errors found\n"})}),"\n",(0,i.jsxs)(s.p,{children:["This can be worked around by adding ",(0,i.jsx)(s.code,{children:"-Xsource:2.11"})," to your ",(0,i.jsx)(s.code,{children:"scalacOptions"}),".\nThis is most commonly set in your ",(0,i.jsx)(s.code,{children:"build.sbt"}),".\nFor an example, see the ",(0,i.jsx)(s.a,{href:"https://github.com/freechipsproject/chisel-template/blob/11f6ca470120908d167cb8dc3241953eb31d0acb/build.sbt#L10",children:"chisel-template's build.sbt"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>r});var i=n(7294);const a={},o=i.createContext(a);function r(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);