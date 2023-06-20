"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[4009],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,h=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={},c="Eventual Consistency",o={unversionedId:"software-architecture/architecture-patterns/eventual-consistency",id:"software-architecture/architecture-patterns/eventual-consistency",title:"Eventual Consistency",description:"Eventual consistency is a consistency model used in distributed computing to achieve high availability that informally guarantees that, if no new updates are made to a given data item, eventually all accesses to that item will return the last updated value. Ref",source:"@site/docs/software-architecture/architecture-patterns/eventual-consistency.md",sourceDirName:"software-architecture/architecture-patterns",slug:"/software-architecture/architecture-patterns/eventual-consistency",permalink:"/docs/software-architecture/architecture-patterns/eventual-consistency",draft:!1,editUrl:"https://github.com/atulagrawal/software-architecture/tree/main/packages/create-docusaurus/templates/shared/docs/software-architecture/architecture-patterns/eventual-consistency.md",tags:[],version:"current",frontMatter:{},sidebar:"softwareArchitectureSidebar",previous:{title:"Event Driven Architecture",permalink:"/docs/software-architecture/architecture-patterns/event-driven-architecture"},next:{title:"Hexagonal Architecture",permalink:"/docs/software-architecture/architecture-patterns/hexagonal-architecture"}},s={},l=[{value:"Conflict Identification",id:"conflict-identification",level:2},{value:"Conflict Resolution",id:"conflict-resolution",level:2},{value:"Conflict Resolustion Strategies",id:"conflict-resolustion-strategies",level:2}],u={toc:l},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventual-consistency"},"Eventual Consistency"),(0,a.kt)("p",null,"Eventual consistency is a consistency model used in distributed computing to achieve high availability that informally guarantees that, if no new updates are made to a given data item, eventually all accesses to that item will return the last updated value. ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Eventual_consistency#Conflict_resolution"},"Ref")),(0,a.kt)("p",null,"Ref:\n",(0,a.kt)("a",{parentName:"p",href:"https://serverlessland.com/event-driven-architecture/visuals/eventual-consistency"},"serverlessland - eventual consistency")),(0,a.kt)("h2",{id:"conflict-identification"},"Conflict Identification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use timestamps, vesrions, dotted version vector etc can be used for detecting the conflicting changes. As an example, if two services S1 and S2 in two different sites Site 1 and Site 2 performs the parallel rights at the same time then there could be two versions available for each site (ID1, Site1, V1) (ID1,Site2,V1) in the database. After replication (eventual consistency), the conflict resolution strategies can be used for reconlication.")),(0,a.kt)("h2",{id:"conflict-resolution"},"Conflict Resolution"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read repair: The resolution is done when a read finds an inconsistency."),(0,a.kt)("li",{parentName:"ul"},"Write repair: The resolution takes place during a write operation in case of inconsistency."),(0,a.kt)("li",{parentName:"ul"},"Asynchronous repair: The resolution is not part of a read or write operation. It is done seperately such as by background job or scheduler.")),(0,a.kt)("h2",{id:"conflict-resolustion-strategies"},"Conflict Resolustion Strategies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Last write wins"),(0,a.kt)("li",{parentName:"ul"},"First write wins"),(0,a.kt)("li",{parentName:"ul"},"Custom Override Logic")))}f.isMDXComponent=!0}}]);