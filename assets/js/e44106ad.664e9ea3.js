"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[3510],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=i,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||n;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3719:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var r=a(7462),i=(a(7294),a(3905));const n={title:"API Basics",sidebar_position:1},l=void 0,o={unversionedId:"software-architecture/topics/APIs",id:"software-architecture/topics/APIs",title:"API Basics",description:"1. Define API as a Product",source:"@site/docs/software-architecture/topics/APIs.md",sourceDirName:"software-architecture/topics",slug:"/software-architecture/topics/APIs",permalink:"/docs/software-architecture/topics/APIs",draft:!1,editUrl:"https://github.com/atulagrawal/software-architecture/tree/main/packages/create-docusaurus/templates/shared/docs/software-architecture/topics/APIs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"API Basics",sidebar_position:1},sidebar:"softwareArchitectureSidebar",previous:{title:"Topics",permalink:"/docs/category/topics"},next:{title:"Apache Lucene",permalink:"/docs/software-architecture/topics/apache-lucene"}},s={},u=[{value:"1. Define API as a Product",id:"1-define-api-as-a-product",level:2},{value:"Guidelines",id:"guidelines",level:2},{value:"Key considerations",id:"key-considerations",level:2},{value:"REST APIs",id:"rest-apis",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-define-api-as-a-product"},"1. Define API as a Product"),(0,i.kt)("p",null,"The well defined APIs have following characteristics."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Usable",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ease to use."))),(0,i.kt)("li",{parentName:"ul"},"Simple",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Easy to understand."))),(0,i.kt)("li",{parentName:"ul"},"Predictable",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Adheres to industry guidelines and predictable (e.g. REST standards)."))),(0,i.kt)("li",{parentName:"ul"},"Stable",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Doesn't change often."))),(0,i.kt)("li",{parentName:"ul"},"Purpose Driven",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Solve specific business problem or use case."))),(0,i.kt)("li",{parentName:"ul"},"Well-defined API boundries",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Do one thing, do it well."),(0,i.kt)("li",{parentName:"ul"},"Avoid overloading the API with too many functionality.")))),(0,i.kt)("h2",{id:"guidelines"},"Guidelines"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use Outside-In approach while designing the APIs as we need to think from the user's pespective who is going to consume this API and integrate with it."),(0,i.kt)("li",{parentName:"ul"},"Governances",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Release Notes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Publish the release notes with clients about API contract changes."))),(0,i.kt)("li",{parentName:"ul"},"Backward compatiblity",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Keep the backward compatiblity in mind while designing solutions. "),(0,i.kt)("li",{parentName:"ul"},"If not possible, make breaking changes as additive to original API. Old client can continue to use old fields till migrated to new fields."),(0,i.kt)("li",{parentName:"ul"},"As a last resort, think about defining the next version of APIs."))),(0,i.kt)("li",{parentName:"ul"},"Versioning",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Upgrade Major Version for significant changes or backward incompatible changes."))),(0,i.kt)("li",{parentName:"ul"},"Rollback and Fix forward starategies",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Plan for unknown issues.")))))),(0,i.kt)("h1",{id:"rest-api"},"REST API"),(0,i.kt)("h2",{id:"key-considerations"},"Key considerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Purpose"),(0,i.kt)("li",{parentName:"ul"})),(0,i.kt)("h2",{id:"rest-apis"},"REST APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Payload"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Request",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"GET"),(0,i.kt)("li",{parentName:"ul"},"POST"),(0,i.kt)("li",{parentName:"ul"},"PUT"),(0,i.kt)("li",{parentName:"ul"},"PATCH"),(0,i.kt)("li",{parentName:"ul"},"DELETE"))),(0,i.kt)("li",{parentName:"ul"},"Response",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"2XX"),(0,i.kt)("li",{parentName:"ul"},"4XX"),(0,i.kt)("li",{parentName:"ul"},"5XX"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Governance"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"API Versioning",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Backward comaptiblity"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Security"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Authentication (client_id, secret, auth-tokens etc.)"),(0,i.kt)("li",{parentName:"ul"},"Authorization (scopes,permissions etc.)"),(0,i.kt)("li",{parentName:"ul"},"Rate limit"),(0,i.kt)("li",{parentName:"ul"},"Sensative Data Handling"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Observability"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Availablity"),(0,i.kt)("li",{parentName:"ul"},"Latency")))))}m.isMDXComponent=!0}}]);