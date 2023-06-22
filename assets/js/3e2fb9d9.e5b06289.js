"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[2718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Auto compeltion for Search",l={unversionedId:"system-design/search-engine-autocomplete-search-sentences",id:"system-design/search-engine-autocomplete-search-sentences",title:"Auto compeltion for Search",description:"Auto completion flow",source:"@site/docs/system-design/search-engine-autocomplete-search-sentences.md",sourceDirName:"system-design",slug:"/system-design/search-engine-autocomplete-search-sentences",permalink:"/docs/system-design/search-engine-autocomplete-search-sentences",draft:!1,editUrl:"https://github.com/atulagrawal/software-architecture/tree/main/packages/create-docusaurus/templates/shared/docs/system-design/search-engine-autocomplete-search-sentences.md",tags:[],version:"current",frontMatter:{},sidebar:"systemDesignSidebar",previous:{title:"Design a Log Service",permalink:"/docs/system-design/log-as-a-service"},next:{title:"Tax Invoice Processing System",permalink:"/docs/system-design/tax-invoice-processing-app"}},s={},c=[{value:"Auto completion flow",id:"auto-completion-flow",level:2},{value:"Functional Requirements",id:"functional-requirements",level:3},{value:"Non Functional Requirements",id:"non-functional-requirements",level:3},{value:"High Level Flow",id:"high-level-flow",level:3},{value:"Questions",id:"questions",level:3},{value:"Query Indexing Flow",id:"query-indexing-flow",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"auto-compeltion-for-search"},"Auto compeltion for Search"),(0,o.kt)("h2",{id:"auto-completion-flow"},"Auto completion flow"),(0,o.kt)("h3",{id:"functional-requirements"},"Functional Requirements"),(0,o.kt)("p",null,"Please refer below diagram for the requirements overview:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/gweb-uniblog-publish-prod/images/sf_autocomplete_search.width-1600.format-webp.webp",alt:"Google Autocompletion"})),(0,o.kt)("p",null,"Questions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How many characters should we let user type in before starting the auto-completion process"),(0,o.kt)("li",{parentName:"ul"},"How many times should we do auto completion e.g. 1st auto-completion after 3 words then after new word?"),(0,o.kt)("li",{parentName:"ul"})),(0,o.kt)("h3",{id:"non-functional-requirements"},"Non Functional Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Low Latency (less than 50 ms)"),(0,o.kt)("li",{parentName:"ul"},"Highly Available (99.99%)"),(0,o.kt)("li",{parentName:"ul"},"Number of concurrent users (~ 10 millions)"),(0,o.kt)("li",{parentName:"ul"},"Geography (single region)")),(0,o.kt)("h3",{id:"high-level-flow"},"High Level Flow"),(0,o.kt)("mermaid",{value:"%%{init: {'theme':'neutral'}}%%\ngraph\n    user[User]\n    subgraph Search\n        direction LR\n        ui[User Experience]\n    end\n    user-- Search Phrase --\x3e ui\n    Search -- Search Phrase --\x3e service\n\n    subgraph service[Auto Complete Service]\n        direction LR\n         tokenizer[Tokenizer \\n Phrase to Token]\n         stopword[Stopper \\n Filter tokens]\n         typo-corrector[Typo Correction \\n Resolve Spelling Mistakes]\n         tokenizer --\x3estopword--\x3etypo-corrector\n         \n    end\n\n    subgraph data\n        subgraph index[Index Engine]\n            direction LR\n        \n                nodex[Node 4 \\n Coordinator]\n                node1[Node 1]\n                node2[Node 2]\n                node3[Node 3]\n                nodex --Query Terms - T1,T2 --\x3enode1\n                nodex --Query Terms - T2 --\x3enode3\n        end    \n\n        subgraph cache\n            cache1[Cache]\n        end\n    end\n\n    service--Query Tokens--\x3eindex\n    service--Query Tokens--\x3ecache\n"}),(0,o.kt)("p",null,"Elastic Search could be one implementation of the auto completion service."),(0,o.kt)("p",null,"Notes : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The engine follows the scatter/gather pattern"),(0,o.kt)("li",{parentName:"ul"},"The coordinator will have to lookup for the nodes (shards) from the local copy of the shard mapper for identifiying the nodes that are required to be queries. "),(0,o.kt)("li",{parentName:"ul"},"The shard mapper will be managed by the quorum.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.elastic.co/blog/found-elasticsearch-top-down"},"https://www.elastic.co/blog/found-elasticsearch-top-down")),(0,o.kt)("h3",{id:"questions"},"Questions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How will you give top phrases (top 5)?"),(0,o.kt)("li",{parentName:"ul"},"How will you handle trends (e.g. political event, major accident, celebrity news)?"),(0,o.kt)("li",{parentName:"ul"},"How will you keep latency low?"),(0,o.kt)("li",{parentName:"ul"},"How will you manage unique phrases for auto completion (e.g. 60% of the customers are typing the same phrase for auto completion)?")),(0,o.kt)("h2",{id:"query-indexing-flow"},"Query Indexing Flow"),(0,o.kt)("p",null,"Customer submitted queries will be used for identifying the top candidates for auto completion flow."),(0,o.kt)("mermaid",{value:"graph LR\nUser -- Submit Query --\x3e QueryService[Query Service] -- Publish QuerySubmitted Event --\x3e Broker -- Process Events --\x3e Aggregator -- Index --\x3e IndexEngine[Indexer]\n"}))}m.isMDXComponent=!0}}]);