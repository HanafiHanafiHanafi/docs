"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[128],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var i=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),u=function(e){var a=i.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=u(e.components);return i.createElement(s.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},h=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),h=n,b=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return t?i.createElement(b,r(r({ref:a},c),{},{components:t})):i.createElement(b,r({ref:a},c))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,r=new Array(l);r[0]=h;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[d]="string"==typeof e?e:n,r[1]=o;for(var u=2;u<l;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>r});var i=t(7294),n=t(6010);const l={tabItem:"tabItem_Ymn6"};function r(e){let{children:a,hidden:t,className:r}=e;return i.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,r),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>w});var i=t(7462),n=t(7294),l=t(6010),r=t(2466),o=t(6550),s=t(1980),u=t(7392),c=t(12);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:i,default:n}}=e;return{value:a,label:t,attributes:i,default:n}}))}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??d(t);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const i=(0,o.k6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(i.location.search);a.set(l,e),i.replace({...i.location,search:a.toString()})}),[l,i])]}function v(e){const{defaultValue:a,queryString:t=!1,groupId:i}=e,l=p(e),[r,o]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:a,tabValues:l}))),[s,u]=b({queryString:t,groupId:i}),[d,v]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[i,l]=(0,c.Nk)(t);return[i,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:i}),f=(()=>{const e=s??d;return h({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),v(e)}),[u,v,l]),tabValues:l}}var f=t(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:a,block:t,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),p=e=>{const a=e.currentTarget,t=c.indexOf(a),i=u[t].value;i!==o&&(d(a),s(i))},h=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:r}=e;return n.createElement("li",(0,i.Z)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>c.push(e),onKeyDown:h,onClick:p},r,{className:(0,l.Z)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":o===a})}),t??a)})))}function g(e){let{lazy:a,children:t,selectedValue:i}=e;if(t=Array.isArray(t)?t:[t],a){const e=t.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==i}))))}function k(e){const a=v(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",m.tabList)},n.createElement(y,(0,i.Z)({},e,a)),n.createElement(g,(0,i.Z)({},e,a)))}function w(e){const a=(0,f.Z)();return n.createElement(k,(0,i.Z)({key:String(a)},e))}},8495:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=t(7462),n=(t(7294),t(3905));t(4866),t(5162),t(4996);const l={id:"what-is-avail",title:"Avail",sidebar_label:"Introduction",sidebar_position:1,description:"Learn about Avail's data availability chain",keywords:["docs","avail","availability","scale","rollup"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"/"},r="Avail",o={unversionedId:"what-is-avail",id:"what-is-avail",title:"Avail",description:"Learn about Avail's data availability chain",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"what-is-avail",title:"Avail",sidebar_label:"Introduction",sidebar_position:1,description:"Learn about Avail's data availability chain",keywords:["docs","avail","availability","scale","rollup"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"/"},sidebar:"defaultSidebar",next:{title:"Quick Start",permalink:"/avail-quick-start"}},s={},u=[{value:"Current Availability and Scaling Challenges",id:"current-availability-and-scaling-challenges",level:2},{value:"What is the data availability problem?",id:"what-is-the-data-availability-problem",level:3},{value:"Avail&#39;s approach to data availability",id:"avails-approach-to-data-availability",level:3},{value:"High Guarantee",id:"high-guarantee",level:4},{value:"Minimum Trust",id:"minimum-trust",level:4},{value:"Easy to Use",id:"easy-to-use",level:4},{value:"Perfect for Off-Chain Scaling",id:"perfect-for-off-chain-scaling",level:4},{value:"Execution Agnostic",id:"execution-agnostic",level:4},{value:"Bootstrapping Security",id:"bootstrapping-security",level:4},{value:"Fast provable finality using NPoS",id:"fast-provable-finality-using-npos",level:4},{value:"Avail-Powered Validiums",id:"avail-powered-validiums",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:u},d="wrapper";function p(e){let{components:a,...t}=e;return(0,n.kt)(d,(0,i.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"avail"},"Avail"),(0,n.kt)("p",null,"Avail is a blockchain that is laser-focused on data availability: ordering and recording blockchain transactions, and making it possible to prove that block data is available without downloading the whole block. This allows it to scale in ways that monolithic blockchains cannot."),(0,n.kt)("admonition",{title:"A Robust General-Purpose Scalable Data Availability Layer",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enables Layer-2 solutions to offer increased scalability throughput by leveraging Avail to build Validiums with off-chain data availability.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enables standalone chains or sidechains with arbitrary execution environments to bootstrap validator security without needing to create and manage their own validator set by guaranteeing transaction data availability.")))),(0,n.kt)("h2",{id:"current-availability-and-scaling-challenges"},"Current Availability and Scaling Challenges"),(0,n.kt)("h3",{id:"what-is-the-data-availability-problem"},"What is the data availability problem?"),(0,n.kt)("p",null,"Peers in a blockchain network need a way to ensure that all the data of a newly proposed block is\nreadily available. If the data is not available, the block might contain malicious transactions\nwhich are being hidden by the block producer. Even if the block contains non-malicious transactions,\nhiding them might compromise the security of the system."),(0,n.kt)("h3",{id:"avails-approach-to-data-availability"},"Avail's approach to data availability"),(0,n.kt)("h4",{id:"high-guarantee"},"High Guarantee"),(0,n.kt)("p",null,"Avail provides a provable, high-level of guarantee that data is available. Light clients can independendly verify availability in a constant number of queries, without downloading the entire block."),(0,n.kt)("h4",{id:"minimum-trust"},"Minimum Trust"),(0,n.kt)("p",null,"No need to be a validator or host a full node. Even with a light client, get verifiable availability."),(0,n.kt)("h4",{id:"easy-to-use"},"Easy to Use"),(0,n.kt)("p",null,"Built using modified Substrate, the solution focuses on ease of use, whether you host an application or\noperate an off-chain scaling solution."),(0,n.kt)("h4",{id:"perfect-for-off-chain-scaling"},"Perfect for Off-Chain Scaling"),(0,n.kt)("p",null,"Unlock the full scaling potential of your off-chain scaling solution by keeping the data with us and\nstill avoiding the DA problem on L1."),(0,n.kt)("h4",{id:"execution-agnostic"},"Execution Agnostic"),(0,n.kt)("p",null,"Chains that use Avail can implement any type of execution environment irrespective of the application logic. Transactions from any environment are supported: EVM, Wasm, or even new VMs that have not been built yet. Avail is perfect for experimenting with new execution layers."),(0,n.kt)("h4",{id:"bootstrapping-security"},"Bootstrapping Security"),(0,n.kt)("p",null,"Avail enables new chains to be created without needing to spin up a new validator set, and leverage Avail's instead. Avail takes care of transaction sequencing, consensus, and availability in exchange for simple transaction fees (gas)."),(0,n.kt)("h4",{id:"fast-provable-finality-using-npos"},"Fast provable finality using NPoS"),(0,n.kt)("p",null,"Fast provable finality via Nominated Proof of Stake. Backed by KZG\ncommitments and erasure coding."),(0,n.kt)("p",null,"Start by checking out this ",(0,n.kt)("a",{parentName:"p",href:"https://polygon.technology/blog/polygon-research-ethereum-scaling-with-rollups"},"blog post")," on scaling Ethereum with Rollups."),(0,n.kt)("h2",{id:"avail-powered-validiums"},"Avail-Powered Validiums"),(0,n.kt)("p",null,"Due to the architecture of monolithic blockchains (such as Ethereum in its current state), operating the blockchain is expensive, resulting in high transaction fees. Rollups attempt to extract the burden of execution by running transactions off-chain and then posting the execution results and the ","[usually compressed]"," transaction data."),(0,n.kt)("p",null,"Validiums are the next step: instead of posting the transaction data, it is kept available off-chain, where a proof/attestation is only posted to the base layer. This is by far the most cost-effective solution because both execution and data availability are kept off-chain while still allowing for final verification and settlement on the layer 1 chain."),(0,n.kt)("p",null,"Avail is a blockchain optimized for data availability. Any rollup that wishes to become a validium can switch to post transaction data to Avail instead of the layer 1 and deploy a verification contract that, in addition to verifying the correct execution, also verifies data availability."),(0,n.kt)("admonition",{title:"Attestation",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The Avail team will make this data availability verification simple on Ethereum by building an attestation bridge to post data availability attestations directly to Ethereum. This will make the verification contract's job a simple one, since the DA attestations will already be on-chain. This bridge is currently in design; please reach out to the Avail team for more information or to join our early access program.")),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.availproject.org/introducing-avail-by-a-robust-general-purpose-scalable-data-availability-layer/"},"Introducing Avail \u2014 a Robust General-Purpose Scalable Data Availability Layer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.availproject.org/the-data-availability-problem/"},"The Data Availability Problem"))))}p.isMDXComponent=!0}}]);