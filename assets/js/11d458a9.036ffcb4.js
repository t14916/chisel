"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[7792],{3217:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var n=t(5893),i=t(1151);const o={layout:"docs",title:"Reset",section:"chisel3"},l="Reset",c={id:"explanations/reset",title:"Reset",description:"As of Chisel 3.2.0, Chisel 3 supports both synchronous and asynchronous reset,",source:"@site/docs/explanations/reset.md",sourceDirName:"explanations",slug:"/explanations/reset",permalink:"/chisel/docs/explanations/reset",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/explanations/reset.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Reset",section:"chisel3"},sidebar:"tutorialSidebar",previous:{title:"Properties",permalink:"/chisel/docs/explanations/properties"},next:{title:"Sequential Circuits",permalink:"/chisel/docs/explanations/sequential-circuits"}},r={},a=[{value:"Reset Inference",id:"reset-inference",level:3},{value:"Implicit Reset",id:"implicit-reset",level:3},{value:"Setting Implicit Reset Type",id:"setting-implicit-reset-type",level:4},{value:"Reset-Agnostic Code",id:"reset-agnostic-code",level:3},{value:"Forcing Reset Type",id:"forcing-reset-type",level:3},{value:"Last-Connect Semantics",id:"last-connect-semantics",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"reset",children:"Reset"}),"\n",(0,n.jsx)(s.p,{children:"As of Chisel 3.2.0, Chisel 3 supports both synchronous and asynchronous reset,\nmeaning that it can natively emit both synchronous and asynchronously reset registers."}),"\n",(0,n.jsx)(s.p,{children:"The type of register that is emitted is based on the type of the reset signal associated\nwith the register."}),"\n",(0,n.jsxs)(s.p,{children:["There are three types of reset that implement a common trait ",(0,n.jsx)(s.code,{children:"Reset"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Bool"})," - constructed with ",(0,n.jsx)(s.code,{children:"Bool()"}),'. Also known as "synchronous reset".']}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"AsyncReset"})," - constructed with ",(0,n.jsx)(s.code,{children:"AsyncReset()"}),'. Also known as "asynchronous reset".']}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Reset"})," - constructed with ",(0,n.jsx)(s.code,{children:"Reset()"}),'. Also known as "abstract reset".']}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For implementation reasons, the concrete Scala type is ",(0,n.jsx)(s.code,{children:"ResetType"}),". Stylistically we avoid ",(0,n.jsx)(s.code,{children:"ResetType"}),", instead using the common trait ",(0,n.jsx)(s.code,{children:"Reset"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Registers with reset signals of type ",(0,n.jsx)(s.code,{children:"Bool"})," are emitted as synchronous reset flops.\nRegisters with reset signals of type ",(0,n.jsx)(s.code,{children:"AsyncReset"})," are emitted as asynchronouly reset flops.\nRegisters with reset signals of type ",(0,n.jsx)(s.code,{children:"Reset"})," will have their reset type ",(0,n.jsx)(s.em,{children:"inferred"})," during FIRRTL compilation."]}),"\n",(0,n.jsx)(s.h3,{id:"reset-inference",children:"Reset Inference"}),"\n",(0,n.jsxs)(s.p,{children:["FIRRTL will infer a concrete type for any signals of type abstract ",(0,n.jsx)(s.code,{children:"Reset"}),".\nThe rules are as follows:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["An abstract ",(0,n.jsx)(s.code,{children:"Reset"})," with only signals of type ",(0,n.jsx)(s.code,{children:"AsyncReset"}),", abstract ",(0,n.jsx)(s.code,{children:"Reset"}),", and ",(0,n.jsx)(s.code,{children:"DontCare"}),"\nin both its fan-in and fan-out will infer to be of type ",(0,n.jsx)(s.code,{children:"AsyncReset"})]}),"\n",(0,n.jsxs)(s.li,{children:["An abstract ",(0,n.jsx)(s.code,{children:"Reset"})," with signals of both types ",(0,n.jsx)(s.code,{children:"Bool"})," and ",(0,n.jsx)(s.code,{children:"AsyncReset"})," in its fan-in and fan-out\nis an error."]}),"\n",(0,n.jsxs)(s.li,{children:["Otherwise, an abstract ",(0,n.jsx)(s.code,{children:"Reset"})," will infer to type ",(0,n.jsx)(s.code,{children:"Bool"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["You can think about (3) as the mirror of (1) replacing ",(0,n.jsx)(s.code,{children:"AsyncReset"})," with ",(0,n.jsx)(s.code,{children:"Bool"})," with the additional\nrule that abstract ",(0,n.jsx)(s.code,{children:"Reset"}),"s with neither ",(0,n.jsx)(s.code,{children:"AsyncReset"})," nor ",(0,n.jsx)(s.code,{children:"Bool"})," in their fan-in and fan-out will\ndefault to type ",(0,n.jsx)(s.code,{children:"Bool"}),'.\nThis "default" case is uncommon and implies that reset signal is ultimately driven by a ',(0,n.jsx)(s.code,{children:"DontCare"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"implicit-reset",children:"Implicit Reset"}),"\n",(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.code,{children:"Module"}),"'s ",(0,n.jsx)(s.code,{children:"reset"})," is of type abstract ",(0,n.jsx)(s.code,{children:"Reset"}),".\nPrior to Chisel 3.2.0, the type of this field was ",(0,n.jsx)(s.code,{children:"Bool"}),".\nFor backwards compatability, if the top-level module has an implicit reset, its type will default to ",(0,n.jsx)(s.code,{children:"Bool"}),"."]}),"\n",(0,n.jsx)(s.h4,{id:"setting-implicit-reset-type",children:"Setting Implicit Reset Type"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"New in Chisel 3.3.0"})}),"\n",(0,n.jsxs)(s.p,{children:["If you would like to set the reset type from within a Module (including the top-level ",(0,n.jsx)(s.code,{children:"Module"}),"),\nrather than relying on ",(0,n.jsx)(s.em,{children:"Reset Inference"}),", you can mixin one of the following traits:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"RequireSyncReset"})," - sets the type of ",(0,n.jsx)(s.code,{children:"reset"})," to ",(0,n.jsx)(s.code,{children:"Bool"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"RequireAsyncReset"})," - sets the type of ",(0,n.jsx)(s.code,{children:"reset"})," to ",(0,n.jsx)(s.code,{children:"AsyncReset"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"For example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scala",children:"class MyAlwaysSyncResetModule extends Module with RequireSyncReset {\n  val mySyncResetReg = RegInit(false.B) // reset is of type Bool\n}\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scala",children:"class MyAlwaysAsyncResetModule extends Module with RequireAsyncReset {\n  val myAsyncResetReg = RegInit(false.B) // reset is of type AsyncReset\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note:"})," This sets the concrete type, but the Scala type will remain ",(0,n.jsx)(s.code,{children:"Reset"}),", so casting may still be necessary.\nThis comes up most often when using a reset of type ",(0,n.jsx)(s.code,{children:"Bool"})," in logic."]}),"\n",(0,n.jsx)(s.h3,{id:"reset-agnostic-code",children:"Reset-Agnostic Code"}),"\n",(0,n.jsxs)(s.p,{children:["The purpose of abstract ",(0,n.jsx)(s.code,{children:"Reset"})," is to make it possible to design hardware that is agnostic to the\nreset discipline used.\nThis enables code reuse for utilities and designs where the reset discipline does not matter to\nthe functionality of the block."]}),"\n",(0,n.jsx)(s.p,{children:"Consider the two example modules below which are agnostic to the type of reset used within them:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scala",children:"class ResetAgnosticModule extends Module {\n  val io = IO(new Bundle {\n    val out = UInt(4.W)\n  })\n  val resetAgnosticReg = RegInit(0.U(4.W))\n  resetAgnosticReg := resetAgnosticReg + 1.U\n  io.out := resetAgnosticReg\n}\n\nclass ResetAgnosticRawModule extends RawModule {\n  val clk = IO(Input(Clock()))\n  val rst = IO(Input(Reset()))\n  val out = IO(Output(UInt(8.W)))\n\n  val resetAgnosticReg = withClockAndReset(clk, rst)(RegInit(0.U(8.W)))\n  resetAgnosticReg := resetAgnosticReg + 1.U\n  out := resetAgnosticReg\n}\n"})}),"\n",(0,n.jsx)(s.p,{children:"These modules can be used in both synchronous and asynchronous reset domains.\nTheir reset types will be inferred based on the context within which they are used."}),"\n",(0,n.jsx)(s.h3,{id:"forcing-reset-type",children:"Forcing Reset Type"}),"\n",(0,n.jsxs)(s.p,{children:["You can set the type of a Module's implicit reset as described ",(0,n.jsx)(s.a,{href:"#setting-implicit-reset-type",children:"above"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"You can also cast to force the concrete type of reset."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:".asBool"})," will reinterpret a ",(0,n.jsx)(s.code,{children:"Reset"})," as ",(0,n.jsx)(s.code,{children:"Bool"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:".asAsyncReset"})," will reinterpret a ",(0,n.jsx)(s.code,{children:"Reset"})," as ",(0,n.jsx)(s.code,{children:"AsyncReset"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["You can then use ",(0,n.jsx)(s.code,{children:"withReset"})," to use a cast reset as the implicit reset.\nSee ",(0,n.jsx)(s.a,{href:"../explanations/multi-clock",children:'"Multiple Clock Domains"'})," for more information about ",(0,n.jsx)(s.code,{children:"withReset"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The following will make ",(0,n.jsx)(s.code,{children:"myReg"})," as well as both ",(0,n.jsx)(s.code,{children:"resetAgnosticReg"}),"s synchronously reset:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scala",children:"class ForcedSyncReset extends Module {\n  // withReset's argument becomes the implicit reset in its scope\n  withReset (reset.asBool) {\n    val myReg = RegInit(0.U)\n    val myModule = Module(new ResetAgnosticModule)\n\n    // RawModules do not have implicit resets so withReset has no effect\n    val myRawModule = Module(new ResetAgnosticRawModule)\n    // We must drive the reset port manually\n    myRawModule.rst := Module.reset // Module.reset grabs the current implicit reset\n  }\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The following will make ",(0,n.jsx)(s.code,{children:"myReg"})," as well as both ",(0,n.jsx)(s.code,{children:"resetAgnosticReg"}),"s asynchronously reset:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scala",children:"class ForcedAysncReset extends Module {\n  // withReset's argument becomes the implicit reset in its scope\n  withReset (reset.asAsyncReset){\n    val myReg = RegInit(0.U)\n    val myModule = Module(new ResetAgnosticModule) // myModule.reset is connected implicitly\n\n    // RawModules do not have implicit resets so withReset has no effect\n    val myRawModule = Module(new ResetAgnosticRawModule)\n    // We must drive the reset port manually\n    myRawModule.rst := Module.reset // Module.reset grabs the current implicit reset\n  }\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note:"})," such casts (",(0,n.jsx)(s.code,{children:"asBool"})," and ",(0,n.jsx)(s.code,{children:"asAsyncReset"}),") are not checked by FIRRTL.\nIn doing such a cast, you as the designer are effectively telling the compiler\nthat you know what you are doing and to force the type as cast."]}),"\n",(0,n.jsx)(s.h3,{id:"last-connect-semantics",children:"Last-Connect Semantics"}),"\n",(0,n.jsxs)(s.p,{children:["It is ",(0,n.jsx)(s.strong,{children:"not"})," legal to override the reset type using last-connect semantics\nunless you are overriding a ",(0,n.jsx)(s.code,{children:"DontCare"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scala",children:"class MyModule extends Module {\n  val resetBool = Wire(Reset())\n  resetBool := DontCare\n  resetBool := false.B // this is fine\n  withReset(resetBool) {\n    val mySubmodule = Module(new Submodule())\n  }\n  resetBool := true.B // this is fine\n  resetBool := false.B.asAsyncReset // this will error in FIRRTL\n}\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>l});var n=t(7294);const i={},o=n.createContext(i);function l(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);