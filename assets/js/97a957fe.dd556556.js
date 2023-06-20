"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[5371],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,g=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return r?o.createElement(g,i(i({ref:t},m),{},{components:r})):o.createElement(g,i({ref:t},m))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1293:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={slug:"when-to-use-microservices",title:"When to use microservices",authors:{name:"Sam Newman & Martin Fowler",title:"GOTO 2020",image_url:"https://yt3.ggpht.com/qgTWM66BUH2STKGd-jTl5DMoIZXnDhKpmo_Cyp3yBEEUwdYMeHvjrulSl1wioLz-rm1mNhg6VA=s88-c-k-c0x00ffffff-no-rj"},tags:["Microservices"]},i=void 0,c={permalink:"/software-architecture/blog/when-to-use-microservices",editUrl:"https://github.com/atulagrawal/software-architecture/tree/main/packages/create-docusaurus/templates/shared/blog/when-to-use-microservices.md",source:"@site/blog/when-to-use-microservices.md",title:"When to use microservices",description:"",date:"2023-05-27T03:16:00.000Z",formattedDate:"May 27, 2023",tags:[{label:"Microservices",permalink:"/software-architecture/blog/tags/microservices"}],readingTime:.08,hasTruncateMarker:!1,authors:[{name:"Sam Newman & Martin Fowler",title:"GOTO 2020",image_url:"https://yt3.ggpht.com/qgTWM66BUH2STKGd-jTl5DMoIZXnDhKpmo_Cyp3yBEEUwdYMeHvjrulSl1wioLz-rm1mNhg6VA=s88-c-k-c0x00ffffff-no-rj",imageURL:"https://yt3.ggpht.com/qgTWM66BUH2STKGd-jTl5DMoIZXnDhKpmo_Cyp3yBEEUwdYMeHvjrulSl1wioLz-rm1mNhg6VA=s88-c-k-c0x00ffffff-no-rj"}],frontMatter:{slug:"when-to-use-microservices",title:"When to use microservices",authors:{name:"Sam Newman & Martin Fowler",title:"GOTO 2020",image_url:"https://yt3.ggpht.com/qgTWM66BUH2STKGd-jTl5DMoIZXnDhKpmo_Cyp3yBEEUwdYMeHvjrulSl1wioLz-rm1mNhg6VA=s88-c-k-c0x00ffffff-no-rj",imageURL:"https://yt3.ggpht.com/qgTWM66BUH2STKGd-jTl5DMoIZXnDhKpmo_Cyp3yBEEUwdYMeHvjrulSl1wioLz-rm1mNhg6VA=s88-c-k-c0x00ffffff-no-rj"},tags:["Microservices"]},prevItem:{title:"Choosing the Best Database in a System Design Interview",permalink:"/software-architecture/blog/choosing-the-best-database-in-a-system-design-interview"},nextItem:{title:"Lessons learned form Kafka in production",permalink:"/software-architecture/blog/lessons-learned-from-kafka-in-production"}},s={authorsImageUrls:[void 0]},l=[],m={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("iframe",{width:"700",height:"400",src:"https://www.youtube.com/embed/GBTdnfD6s5Q",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))}p.isMDXComponent=!0}}]);