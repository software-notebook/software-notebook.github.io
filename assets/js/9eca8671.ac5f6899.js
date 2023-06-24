"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[1468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,h=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5930:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},i="Back of the envelop calculations",l={unversionedId:"software-architecture/topics/back-of-the-envelop",id:"software-architecture/topics/back-of-the-envelop",title:"Back of the envelop calculations",description:"- Target Traffic Per Day : 50 million requests",source:"@site/docs/software-architecture/topics/back-of-the-envelop.md",sourceDirName:"software-architecture/topics",slug:"/software-architecture/topics/back-of-the-envelop",permalink:"/docs/software-architecture/topics/back-of-the-envelop",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"softwareArchitectureSidebar",previous:{title:"Apache Lucene",permalink:"/docs/software-architecture/topics/apache-lucene"},next:{title:"Database Notes",permalink:"/docs/software-architecture/topics/database"}},c={},s=[],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"back-of-the-envelop-calculations"},"Back of the envelop calculations"),(0,n.kt)("h1",{id:"number-of-service-instances-calculation"},"Number of service instances calculation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Target Traffic Per Day : 50 million requests"),(0,n.kt)("li",{parentName:"ul"},"Target Traffic Per Sec : 50 ",(0,n.kt)("em",{parentName:"li"}," 10^6 /(24 ")," 3600) = ~(50 ",(0,n.kt)("em",{parentName:"li"}," 10^6 / 25 ")," 4000) = ~(50 * 10^6 / 100,000) = ~500 "),(0,n.kt)("li",{parentName:"ul"},"Target Request Response time : 100 ms = 0.1 sec"),(0,n.kt)("li",{parentName:"ul"},"Total Requests per second = 1 / 0.1 sec = 10 requests per seconds"),(0,n.kt)("li",{parentName:"ul"},"Total number of threads in a service = 50 (assumption)"),(0,n.kt)("li",{parentName:"ul"},"Total throughput of the service = 50 * 10 = 500 requests per seconds per instance")),(0,n.kt)("p",null,"The above number indicates that we will need one single instance of the service for meeting the target of 500 requests per seconds assuming that service is able to process each request in 100 ms."),(0,n.kt)("p",null,"However, its always good to keep multiple instances because of the following reasons"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"No downtime should be required while releasing and deploying the new changes. In this case, we expect at least 2 instances."),(0,n.kt)("li",{parentName:"ul"},"No downtime should be there for operationl reasons (site maintaince)"),(0,n.kt)("li",{parentName:"ul"},"No performance impact in case of spikes e.g. 30-40% of extra load."),(0,n.kt)("li",{parentName:"ul"},"No single point of failure")),(0,n.kt)("p",null,"So we can target three instances of the service."),(0,n.kt)("h1",{id:"storage-calculation"},"Storage calculation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Average payload size for each request: (Payload size) ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Payload size - contains 1000 characters -> ~ 1000 * 2 Bytes -> 2000  Bytes -> 2 KB"))),(0,n.kt)("li",{parentName:"ul"},"Total number of requests per day =  50 million"),(0,n.kt)("li",{parentName:"ul"},"Total storage requirements per day = 50 million ",(0,n.kt)("em",{parentName:"li"}," 2 KB -> ~ 50 ")," 10^6 * 2 / 10^6 GB -> ~ 100 GB"),(0,n.kt)("li",{parentName:"ul"},"Total storage requirements per year = 100 GB ",(0,n.kt)("em",{parentName:"li"}," 365 -> ~100 ")," 400 GB -> 4000 GB"),(0,n.kt)("li",{parentName:"ul"},"Total storage requirements for 5 years = 4000 GB * 5 = 20000 GB -> 20000 / 10^3 TB -> 20 TB")),(0,n.kt)("p",null,"The above storage requirements is considering no redundency and its recommended to have at least 2 more redundent storage so total storage requirement is going to 60 TB for next 5 years."),(0,n.kt)("p",null,"Ref:\n",(0,n.kt)("a",{parentName:"p",href:"https://wso2.com/whitepapers/capacity-planning-for-application-design-part-1/"},"Capacity planning for application design"),"\n",(0,n.kt)("a",{parentName:"p",href:"http://highscalability.com/blog/2011/1/26/google-pro-tip-use-back-of-the-envelope-calculations-to-choo.html"},"Back of the envelop calculations")))}f.isMDXComponent=!0}}]);