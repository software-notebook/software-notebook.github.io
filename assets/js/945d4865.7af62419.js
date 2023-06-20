"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[3595],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2728:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={title:"API Basics",sidebar_position:1},l=void 0,o={unversionedId:"software-architecture/apis/intro",id:"software-architecture/apis/intro",title:"API Basics",description:"1. Define API as a Product",source:"@site/docs/software-architecture/apis/intro.md",sourceDirName:"software-architecture/apis",slug:"/software-architecture/apis/intro",permalink:"/docs/software-architecture/apis/intro",draft:!1,editUrl:"https://github.com/atulagrawal/software-architecture/tree/main/packages/create-docusaurus/templates/shared/docs/software-architecture/apis/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"API Basics",sidebar_position:1},sidebar:"softwareArchitectureSidebar",previous:{title:"APIs",permalink:"/docs/category/apis"},next:{title:"GraphQL API",permalink:"/docs/software-architecture/apis/graphsql-api"}},s={},c=[{value:"1. Define API as a Product",id:"1-define-api-as-a-product",level:2},{value:"Guidelines",id:"guidelines",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1-define-api-as-a-product"},"1. Define API as a Product"),(0,n.kt)("p",null,"The well defined APIs have following characteristics."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Usable",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ease to use."))),(0,n.kt)("li",{parentName:"ul"},"Simple",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Easy to understand."))),(0,n.kt)("li",{parentName:"ul"},"Predictable",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Adheres to industry guidelines and predictable (e.g. REST standards)."))),(0,n.kt)("li",{parentName:"ul"},"Stable",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Doesn't change often."))),(0,n.kt)("li",{parentName:"ul"},"Purpose Driven",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Solve specific business problem or use case."))),(0,n.kt)("li",{parentName:"ul"},"Well-defined API boundries",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Do one thing, do it well."),(0,n.kt)("li",{parentName:"ul"},"Avoid overloading the API with too many functionality.")))),(0,n.kt)("h2",{id:"guidelines"},"Guidelines"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use Outside-In approach while designing the APIs as we need to think from the user's pespective who is going to consume this API and integrate with it."),(0,n.kt)("li",{parentName:"ul"},"Governances",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Release Notes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Publish the release notes with clients about API contract changes."))),(0,n.kt)("li",{parentName:"ul"},"Backward compatiblity",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Keep the backward compatiblity in mind while designing solutions. "),(0,n.kt)("li",{parentName:"ul"},"If not possible, make breaking changes as additive to original API. Old client can continue to use old fields till migrated to new fields."),(0,n.kt)("li",{parentName:"ul"},"As a last resort, think about defining the next version of APIs."))),(0,n.kt)("li",{parentName:"ul"},"Versioning",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Upgrade Major Version for significant changes or backward incompatible changes."))),(0,n.kt)("li",{parentName:"ul"},"Rollback and Fix forward starategies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Plan for unknown issues.")))))))}d.isMDXComponent=!0}}]);