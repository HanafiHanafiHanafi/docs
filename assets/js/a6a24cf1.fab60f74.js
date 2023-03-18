"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[65],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(v,o(o({ref:t},c),{},{components:a})):n.createElement(v,o({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6550),u=a(1980),s=a(7392),c=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,s]=v({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=u??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,l]),tabValues:l}}var f=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==i&&(d(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},1047:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));a(4866),a(5162),a(4996);const l={id:"avail-node-management",title:"Run an Avail Node",sidebar_label:"Run an Avail node",description:"Learn about running an Avail node.",keywords:["docs","avail","node"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"avail-node-management"},o=void 0,i={unversionedId:"Running Avail/avail-node-management",id:"Running Avail/avail-node-management",title:"Run an Avail Node",description:"Learn about running an Avail node.",source:"@site/docs/Running Avail/avail-node-management.md",sourceDirName:"Running Avail",slug:"/Running Avail/avail-node-management",permalink:"/Running Avail/avail-node-management",draft:!1,tags:[],version:"current",frontMatter:{id:"avail-node-management",title:"Run an Avail Node",sidebar_label:"Run an Avail node",description:"Learn about running an Avail node.",keywords:["docs","avail","node"],image:"https://availproject.github.io/img/avail/AvailDocs.png",slug:"avail-node-management"},sidebar:"defaultSidebar",previous:{title:"Run a Light Client",permalink:"/Running Avail/avail-light-client-da"},next:{title:"Run a Validator",permalink:"/Running Avail/avail-validator"}},u={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Node prerequisites: Install Rust &amp; dependencies",id:"node-prerequisites-install-rust--dependencies",level:3},{value:"Run Avail Locally",id:"run-avail-locally",level:2}],c={toc:s},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Common practice",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Users often run nodes on a cloud server. You may consider using a VPS provider to run your node.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"The following list of standard hardware is a recommendation of hardware specs that your environment should\nhave."),(0,r.kt)("p",null,"The hardware specs should at least have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4GB RAM"),(0,r.kt)("li",{parentName:"ul"},"2 core CPU"),(0,r.kt)("li",{parentName:"ul"},"20-40 GB SSD")),(0,r.kt)("admonition",{title:"If you plan on running a validator",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The hardware recommendations for running a validator on a Substrate-based chain:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"CPU - Intel(R) Core(TM) i7-7700K CPU @ 4.20GHz"),(0,r.kt)("li",{parentName:"ul"},"Storage - A NVMe solid state drive with about 256GB. Should be reasonably sized to deal with\nblockchain growth."),(0,r.kt)("li",{parentName:"ul"},"Memory - 64GB ECC"))),(0,r.kt)("h3",{id:"node-prerequisites-install-rust--dependencies"},"Node prerequisites: Install Rust & dependencies"),(0,r.kt)("admonition",{title:"Installation steps by Substrate",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Avail is a Substrate-based chain and requires the same configuration to run a Substrate chain."),(0,r.kt)("p",{parentName:"admonition"},"Additional installation documentation is available in the Substrate\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.substrate.io/v3/getting-started/installation/"},"getting started documentation")),".")),(0,r.kt)("p",null,"Once you choose an environment to run your node, ensure Rust is installed.\nIf you already have Rust installed, run the following command to make sure you are using the latest version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rustup update\n")),(0,r.kt)("p",null,"If not, start by running the following command to fetch the latest version of Rust:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://sh.rustup.rs -sSf | sh -s -- -y\n")),(0,r.kt)("p",null,"To configure your shell, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"source $HOME/.cargo/env\n")),(0,r.kt)("p",null,"Verify your installation with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rustc --version\n")),(0,r.kt)("h2",{id:"run-avail-locally"},"Run Avail Locally"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/avail"},"Avail source code"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:maticnetwork/avail.git\n")),(0,r.kt)("p",null,"Compile the source code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cargo build --release\n")),(0,r.kt)("admonition",{title:"This process usually takes time",type:"caution"}),(0,r.kt)("p",null,"Run a local dev node with temporary datastore:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./target/release/data-avail --dev --tmp\n")))}p.isMDXComponent=!0}}]);