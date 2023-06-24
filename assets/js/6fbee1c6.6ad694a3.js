"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[7514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||s;return n?r.createElement(m,i(i({ref:t},h),{},{components:n})):r.createElement(m,i({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={},i="Event Driven Architecture",o={unversionedId:"software-architecture/architecture-patterns/event-driven-architecture",id:"software-architecture/architecture-patterns/event-driven-architecture",title:"Event Driven Architecture",description:"How would you model event publishing if payload size is very huge?",source:"@site/docs/software-architecture/architecture-patterns/event-driven-architecture.md",sourceDirName:"software-architecture/architecture-patterns",slug:"/software-architecture/architecture-patterns/event-driven-architecture",permalink:"/docs/software-architecture/architecture-patterns/event-driven-architecture",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"softwareArchitectureSidebar",previous:{title:"Domain Driven Design",permalink:"/docs/software-architecture/architecture-patterns/domain-driven-design"},next:{title:"Eventual Consistency",permalink:"/docs/software-architecture/architecture-patterns/eventual-consistency"}},l={},c=[{value:"Domain Events",id:"domain-events",level:2},{value:"General Purpose Change Event (a.k.a. Event Carried State Transfer)",id:"general-purpose-change-event-aka-event-carried-state-transfer",level:3},{value:"Delta Events",id:"delta-events",level:3},{value:"Fine Grained Event",id:"fine-grained-event",level:3},{value:"Coarse Grained Event",id:"coarse-grained-event",level:3},{value:"Thin Event (a.k.a Event Notification)",id:"thin-event-aka-event-notification",level:3},{value:"References",id:"references",level:2}],h={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"event-driven-architecture"},"Event Driven Architecture"),(0,a.kt)("p",null,"How would you model event publishing if payload size is very huge?\n",(0,a.kt)("a",{parentName:"p",href:"https://akfpartners.com/growth-blog/claim-check-pattern"},"https://akfpartners.com/growth-blog/claim-check-pattern")),(0,a.kt)("h1",{id:"taxonomy"},"Taxonomy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Publisher - A service that publishes the events."),(0,a.kt)("li",{parentName:"ul"},"Consumer - A client application that consumers the events."),(0,a.kt)("li",{parentName:"ul"},"Event - An event signals the changes in the application state or resources or the domain aggregate.")),(0,a.kt)("h1",{id:"event-modelling"},"Event Modelling"),(0,a.kt)("h2",{id:"domain-events"},"Domain Events"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A domain event is published whenever a business operation is performed by the customer of the system.")),(0,a.kt)("mermaid",{value:"flowchart LR\n    OrderPlaced -.->OrderConfirmed-.->OrderCancelled\n    OrderPlaced-.-> OrderDeclined\n    OrderConfirmed -.-> OrderProcessed"}),(0,a.kt)("h3",{id:"general-purpose-change-event-aka-event-carried-state-transfer"},"General Purpose Change Event (a.k.a. Event Carried State Transfer)"),(0,a.kt)("mermaid",{value:"flowchart LR\n    OrderChangedEvent"}),(0,a.kt)("h3",{id:"delta-events"},"Delta Events"),(0,a.kt)("p",null,"Delta Events contains the old value and the new value. This type of event is required when consumers are interested in knowing the old and updated value. A simple use case would to be for ",(0,a.kt)("em",{parentName:"p"},"Activlity Log Service")," that keeps track of ",(0,a.kt)("em",{parentName:"p"},"what")," actions were performed by the customer and ",(0,a.kt)("em",{parentName:"p"},"what values")," were changed and on what date."),(0,a.kt)("mermaid",{value:"classDiagram\n    class CustomerProfileChanged {\n       AddressDetails addressDetails\n       PhoneDetails phoneDetails\n    }\n    class AddressDetails {\n        Address oldAddress\n        Address newAddress\n    }\n    CustomerProfileChanged --\x3e AddressDetails\n\n    class CustomerProfileChanged {\n       \n    }\n    class PhoneDetails {\n        Phone oldPhone\n        Phone newPhone\n    }\n    CustomerProfileChanged --\x3e PhoneDetails\n"}),(0,a.kt)("h3",{id:"fine-grained-event"},"Fine Grained Event"),(0,a.kt)("p",null,"If there are many consumers and each consumer is interested in specific part of the message payload then fine grained events can be useful as consumers are decoupled and they are only aware of the payload details that are specific to thier business needs. "),(0,a.kt)("p",null,"The other use case for fine grained events could be the security and access role. In this case, publisher might want to be careful about the info that is shared with consumer as it might lead to security, data privacy and other access related issues."),(0,a.kt)("p",null,"The fine grained events can also help in improving the overall availablity of the system as it helps in reducing the blast radius of the impact in case if any part of the system that publishes these event is down (Tradeoff - entire event not being available vs part of the event not being available). It also helps in improving the performance of the consumer app as they wouldn't have to deal with noise (unwated events)."),(0,a.kt)("p",null,"On the other side, this will lead to fan-out effect where multiple events will have to be published for a single business trasaction (e.g. customer updating the profile) and in case if a consumer is interseted in all the details of a business transaction then this pattern will add more work and complexities for the consumer."),(0,a.kt)("mermaid",{value:"classDiagram\n\n    class CustomerAddressChangedEvent {\n        String customerId\n        Address newAddress\n    }\n    \n    CustomerAddressChangedEvent --\x3e Address\n    class CustomerPhoneChangedEvent {\n        String customerId\n        Phone newPhone\n    }\n    CustomerPhoneChangedEvent --\x3e Phone"}),(0,a.kt)("p",null,"In this example, if pubisher changes the contract of the Phone then there wouldn't be any impact to the consumers who are consuming the AddressChangedEvent."),(0,a.kt)("h3",{id:"coarse-grained-event"},"Coarse Grained Event"),(0,a.kt)("p",null,"Coarse grained events contain all the details about the resource (domain aggregate). This can help in reducing the complexity on consumer side as they get all the details in one single payload and they wouldn't have to make additional calls for loading the missing part of the payload."),(0,a.kt)("p",null,"This also helps in reducing the divergence with the publisher system for the cases when the state of the resources changes frequently as the entire context of the changes is part of the payload and doesn't require any changes. E.g. The customer's balance will be diffrent in case if multiple transactions are procsssed within a short period of time. "),(0,a.kt)("p",null,"On the other side"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This model adds some level of complexity on the publisher side as its difficult for them to find out which consumers are interested in what part of the events and they have to align with all consumers whenever there are changes to the events."),(0,a.kt)("li",{parentName:"ul"},"This model also adds additional load on consumer side as they end up processing more events then they should be processing.")),(0,a.kt)("p",null,"The corase grained events can be really useful for audit trail, transaction history like use cases."),(0,a.kt)("mermaid",{value:"classDiagram\n\n    class CustomerProfileChanged {\n        String customerId\n        Address newAddress\n        Phone newPhone\n        Others otherObjects\n    }\n    \n    CustomerProfileChanged --\x3e Address\n    CustomerProfileChanged --\x3e Phone\n    CustomerProfileChanged --\x3e Others\n    "}),(0,a.kt)("h3",{id:"thin-event-aka-event-notification"},"Thin Event (a.k.a Event Notification)"),(0,a.kt)("p",null,"This event contain the minimal payload for the resource changes (e.g. resource id, status). The main purpose is to inform the client then something has happened in the system and consumers are required to load the other details for subsequent processing."),(0,a.kt)("p",null,"Thin events are useful when consumers must process the the latest state of the events. In this case, consumer always load the latest state via API call instead of relying on the payload as it may not be up-to-date. This approach also helps in solving the out of order issue for the events."),(0,a.kt)("mermaid",{value:"classDiagram\n\n    class CustomerProfileChanged {\n        String customerId;\n    }\n     "}),(0,a.kt)("p",null,"On the contratry, the Fat event is similar to coarse grained events and contains the entire resource payload."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/swlh/event-notification-vs-event-carried-state-transfer-2e4fdf8f6662"},"Event Notification vs Event Carried State Transfer")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.infoq.com/articles/eda-mediator/"},"Case Study - Document Processor System for Due Dillgience")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://imgopt.infoq.com/fit-in/1200x2400/filters:quality(80)/filters:no_upscale()/articles/eda-mediator/en/resources/27figure-1-1685547198564.jpg",alt:"Diagram"})))}u.isMDXComponent=!0}}]);