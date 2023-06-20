"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),h=l(n),d=o,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[h]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},s="Tax Invoice Processing System",a={unversionedId:"system-design/tax-invoice-processing-app",id:"system-design/tax-invoice-processing-app",title:"Tax Invoice Processing System",description:"Design a system that businesses are able to use for checking tax invoices :",source:"@site/docs/system-design/tax-invoice-processing-app.md",sourceDirName:"system-design",slug:"/system-design/tax-invoice-processing-app",permalink:"/docs/system-design/tax-invoice-processing-app",draft:!1,editUrl:"https://github.com/atulagrawal/software-architecture/tree/main/packages/create-docusaurus/templates/shared/docs/system-design/tax-invoice-processing-app.md",tags:[],version:"current",frontMatter:{},sidebar:"systemDesignSidebar",previous:{title:"System Design Design - Webinars!",permalink:"/docs/system-design/system-design-webinars"}},c={},l=[{value:"Upload the invocies for the processing.",id:"upload-the-invocies-for-the-processing",level:3},{value:"Process the invocies and store thier results.",id:"process-the-invocies-and-store-thier-results",level:3}],p={toc:l},h="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tax-invoice-processing-system"},"Tax Invoice Processing System"),(0,o.kt)("p",null,"Design a system that businesses are able to use for checking tax invoices :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Businesses upload the tax invoices for checking if they are any tax filing related issues (tax compliance check). The backend will have to parse the invoice pdf, run the checks (tax related rules) and then store the result.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The number of invoices could be upto 10,000"),(0,o.kt)("li",{parentName:"ul"},"The invoice could be ~5 MB size.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"View the history of invoice statuses for upto a year.")),(0,o.kt)("h1",{id:"1-monolith-approach"},"1. Monolith approach"),(0,o.kt)("p",null,"In this approach, there will be a single backend service that will be responsible for all the business logic. There will be two main flows - 1. To accept the invoice file request and storage them in the file server for further processing. 2. The actual processing of the invioce files."),(0,o.kt)("h3",{id:"upload-the-invocies-for-the-processing"},"Upload the invocies for the processing."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Customer uploads the invoices as pdfs."),(0,o.kt)("li",{parentName:"ol"},"The invoices pdfs are stored in file storage and invoice entries are created with pending status in the database."),(0,o.kt)("li",{parentName:"ol"},"Response is returned back to the customer.")),(0,o.kt)("mermaid",{value:"flowchart LR\n%%{init: {'theme':'neutral'}}%%\n    browser[Browser] --\x3e webapp[Tax Invoice Web App]\n    webapp --\x3e invoiceserv[Tax Invoice Management Service]\n    invoiceserv --\x3e invoicedb[Database Storage]\n    invoiceserv --\x3e invoicedoc[Document Storage]\n    invoiceserv -- Publish Invoice Created Event --\x3e broker[Message Broker]\n    invoiceserv --\x3e webapp\n    webapp --\x3e browser"}),(0,o.kt)("h3",{id:"process-the-invocies-and-store-thier-results"},"Process the invocies and store thier results."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Invoice processing requires extraction of the raw data from the pdf."),(0,o.kt)("li",{parentName:"ol"},"The raw data is used for evaluating the rules."),(0,o.kt)("li",{parentName:"ol"},"Raw data along with status is stored in the database."),(0,o.kt)("li",{parentName:"ol"},"Customer is notified of the outcome.")),(0,o.kt)("mermaid",{value:"%%{init: {'theme':'neutral'}}%%\nflowchart LR\n    broker -.-> subscriber[Subscriber]\n    subscriber --\x3e  invoiceserv[Tax Invoice Management Service]\n    invoiceserv--1. Load Invoice--\x3einvoiceserv\n    invoiceserv--2. Parse Invoice Data--\x3einvoiceserv\n    invoiceserv--3. Run Business Rules for computing the status --\x3e invoiceserv\n    invoiceserv--4. Store status --\x3e invoiceserv\n    invoiceserv-- 5. Notify customer --\x3e Notification[Notification Serv]\n   "}),(0,o.kt)("h1",{id:"2-batch-based-approach"},"2. Batch based approach"),(0,o.kt)("p",null,"Upload files to common shared location and do batch processing - Its similar to above approach but here the files will be exchanged via central server. This pattern is more suitable for server-to-server intraction but if customer experience is involved then it will be good to consider other options so that we are able to notify the customers in near-real-time."),(0,o.kt)("p",null,"If it is server-to-server intraction then we will have to think about following decisions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Roles and Responsbilitities of the batch")),(0,o.kt)("p",null,"The role of the batch could be just to ingest the files into the system and delegate rest of the of functionalities to the other modules. As an example, the batch can pick up the files from the source and then store it into the file server and then delegate the responsiblity of processing the file to another component. The main advantage of this approach is that any changes to the processing logic wouldn't have any impact to the batch schedules because releasing the change would require re-deployment of the batch component."),(0,o.kt)("p",null,"On the other hand, the batch could also act like a orchestrator where it can call various microservices e.g. data extraction service, invoice check service etc and maintain the processing status however the volume of number of invoice files should be considered for the design decision. If intake rate is very high then it can cause performance issues and slow down the entire pipeline."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Resiliency and fault tolerance")),(0,o.kt)("p",null,"As the batch application will have to load the files for procesinng, there could be intermittent failures or re-start that maybe required from time to time so it is important to keep track of the batch files status seperately so that if at any point in time there is any issue the batch is able to resume the processing."),(0,o.kt)("h1",{id:"3--orcehstrator"},"3 . Orcehstrator"),(0,o.kt)("p",null,"In this approach, we can use the SAGA pattern (choreography) for the processing of the invoice files."),(0,o.kt)("mermaid",{value:"%%{init: {'theme':'neutral'}}%%\nflowchart TD\n    subgraph Invoice Processing System\n\n        subgraph Upload Module\n            Browser --\x3e frontend[ Web App]\n            frontend --\x3e invoiceserv[Invoice Mgmt Service]\n            invoiceserv -. Invoice Uploaded Message  .-> workflow[Workflow Orchestrator]\n        end\n    \n        subgraph Tasks Module\n        subgraph Extract\n                pdfdataextractor[PDF Document Extractor]\n            \n            end\n            \n            subgraph Process\n\n                invoicecheckserv[Invoice Rules Service]\n            \n            end\n            subgraph Notify\n                notificationservice[Notification Serv]\n            \n            end\n        end\n        workflow -. CommandMessage : ExtractData .-> Extract\n        workflow -. CommandMessage : CheckInvoice .-> Process\n        workflow -. CommandMessage : SendEmail .-> Notify\n        \n        \n        Extract-. CommandStatusdMessage .->workflow\n        Process-. CommandStatusdMessage .-> workflow\n        Notify -. CommandStatusdMessage.-> workflow\n    end"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.infoq.com/articles/eda-mediator/"},"Ref - Document Processor System for Due Dillgience")),(0,o.kt)("p",null,"The diagrams in this articles are created using ",(0,o.kt)("a",{parentName:"p",href:"https://mermaid.js.org/syntax/flowchart.html"},"mermaid")))}u.isMDXComponent=!0}}]);