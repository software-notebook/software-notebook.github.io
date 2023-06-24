"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[596],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||g[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="Design a Log Service",s={unversionedId:"system-design/log-as-a-service",id:"system-design/log-as-a-service",title:"Design a Log Service",description:"High Level Design",source:"@site/docs/system-design/log-as-a-service.md",sourceDirName:"system-design",slug:"/system-design/log-as-a-service",permalink:"/docs/system-design/log-as-a-service",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"systemDesignSidebar",next:{title:"Auto compeltion for Search",permalink:"/docs/system-design/search-engine-autocomplete-search-sentences"}},c={},l=[{value:"High Level Design",id:"high-level-design",level:3}],u={toc:l},p="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"design-a-log-service"},"Design a Log Service"),(0,o.kt)("h3",{id:"high-level-design"},"High Level Design"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The logging infrasture can be decomposed around following tasks",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Logs Collection - A consumer invokes the apis of the logger for storing the logs (local / remote etc.)"),(0,o.kt)("li",{parentName:"ul"},"Logs Publication - The logger needs to send the logs to ")))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://engineering.fb.com/2019/10/07/data-infrastructure/scribe/"},"Facebook - Scribe System Design")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/logstash/current/deploying-and-scaling.html"},"Elastic Search - Logstash")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://quickwit.io/docs/main-branch/overview/architecture"},"Quickwit Architecture")))}g.isMDXComponent=!0}}]);