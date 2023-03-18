"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[488],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=i,b=c["".concat(d,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(b,o(o({ref:t},s),{},{components:a})):n.createElement(b,o({ref:t},s))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9483:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));a(4996);const r={id:"avail-data-avail",title:"Avail Validator Data Availability",sidebar_label:"Data Availability",description:"Learn about running an Avail Validator node for Data Availability.",keywords:["docs","avail","node","data availability","da"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"avail-data-avail"},o=void 0,l={unversionedId:"Running Avail/avail-data-avail",id:"Running Avail/avail-data-avail",title:"Avail Validator Data Availability",description:"Learn about running an Avail Validator node for Data Availability.",source:"@site/docs/Running Avail/build-data-availability.md",sourceDirName:"Running Avail",slug:"/Running Avail/avail-data-avail",permalink:"/Running Avail/avail-data-avail",draft:!1,tags:[],version:"current",frontMatter:{id:"avail-data-avail",title:"Avail Validator Data Availability",sidebar_label:"Data Availability",description:"Learn about running an Avail Validator node for Data Availability.",keywords:["docs","avail","node","data availability","da"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"avail-data-avail"},sidebar:"defaultSidebar",previous:{title:"Run a Validator",permalink:"/Running Avail/avail-validator"},next:{title:"FAQ",permalink:"/faq"}},d={},u=[{value:"Build from the Source Code",id:"build-from-the-source-code",level:2},{value:"Optional: How to generate deterministic WASM",id:"optional-how-to-generate-deterministic-wasm",level:2}],s={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"build-from-the-source-code"},"Build from the Source Code"),(0,i.kt)("p",null,"Clone the repo and checkout to the right branch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:maticnetwork/avail.git\n")),(0,i.kt)("p",null,"Only build the node binaries"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cargo build --release -p data-avail\n")),(0,i.kt)("h2",{id:"optional-how-to-generate-deterministic-wasm"},"Optional: How to generate deterministic WASM"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This step is ",(0,i.kt)("strong",{parentName:"p"},"not required")," and it should only be used to verify that WASM matches with\nthe source code.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"srtool")," allows building ",(0,i.kt)("strong",{parentName:"p"},"WASM runtimes in a deterministic way"),", allowing CIs and users, with\nvarious machines and OS, to produce a ",(0,i.kt)("em",{parentName:"p"},"strictly identical")," WASM runtime."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chevdor/srtool-cli"},"srtool-cli"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Move to your ",(0,i.kt)("inlineCode",{parentName:"p"},"substrate")," root folder and build the WASM runtime:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"srtool build -r runtime/ --package da-runtime\n")),(0,i.kt)("p",null,"You should expect an output like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Found 1.57.0, we will be using paritytech/srtool:1.57.0 for the build\n\ud83e\uddf0 Substrate Runtime Toolbox - srtool v0.9.19 \ud83e\uddf0\n        - by Chevdor -\ninfo: using existing install for '1.57.0-x86_64-unknown-linux-gnu'\ninfo: override toolchain for '/build' set to '1.57.0-x86_64-unknown-linux-gnu'\n\n1.57.0-x86_64-unknown-linux-gnu unchanged - rustc 1.57.0 (f1edd0429 2021-11-29)\n\n\ud83c\udfd7  Building node-template-runtime as release using rustc 1.57.0 (f1edd0429 2021-11-29)\n\u23f3 That can take a little while, be patient... subsequent builds will be faster.\n Since you have to wait a little, you may want to learn more about Substrate runtimes:\n https://docs.substrate.io/v3/getting-started/architecture/\n   Updating git repository `https://github.com/maticnetwork/plonk.git`\n   Updating crates.io index\nDownloading crates ...\n  Downloaded addr2line v0.17.0\n  Downloaded void v1.0.2\n  ...\n\n  Compiling pallet-staking v3.0.0 (/build/frame/staking)\n  Compiling pallet-babe v3.0.0 (/build/frame/babe)\n    Finished release [optimized] target(s) in 5m 31s\n\n\u2728 Your Substrate WASM Runtime is ready! \u2728\nSummary generated with srtool v0.9.19 using the docker image paritytech/srtool:1.57.0:\nPackage     : node-template-runtime v2.0.0\nGIT commit  : 0c920993026117aa83c905bfcbe881a71ae3e8a3\nGIT tag     : v3.0.0\nGIT branch  : da-poc-upgrade-3.0\nRustc       : rustc 1.57.0 (f1edd0429 2021-11-29)\nTime        : 2022-01-18T15:55:30Z\n\n== Compact\nVersion     : node-template-1 (node-template-1.tx1.au10)\nMetadata    : V12\nSize        : 1.75 MB (1832581 bytes)\nProposal    : 0xb1b534eb700006140cc980c89c1f3a9ad7a5ababa3e2aa8b9a17c5ae71d9b61c\nIPFS        : QmanwTMjMhWL8uL974VzrA6XVUg17x7czYqEftop6dhkP2\nBLAKE2_256  : 0xa1f8434cba25d4bee440d61b9ce6eeaa0d948ff2173187d940e8c3d87086737c\nWasm        : ./bin/node-template/runtime//target/srtool/release/wbuild/node-template-runtime/node_template_runtime.compact.wasm\n\n== Compressed\nNo compressed runtime found\n")),(0,i.kt)("p",null,"Now you only need to replace the WASM file in your ",(0,i.kt)("inlineCode",{parentName:"p"},"target/release")," folder and rebuild the node\nbinary. Another option is to replace the WASM code in ",(0,i.kt)("inlineCode",{parentName:"p"},"genesis > runtime > frameSystem > code")," in\nyour ",(0,i.kt)("inlineCode",{parentName:"p"},"chain.spec")," file."))}p.isMDXComponent=!0}}]);