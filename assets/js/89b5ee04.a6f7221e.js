"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[9625],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=r,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="Goals, Objective and Outcomes",s={permalink:"/articles/goals-objectives-and-outcomes",source:"@site/articles/goals-objectives-and-outcomes.md",title:"Goals, Objective and Outcomes",description:"Background",date:"2023-06-13T23:20:21.000Z",formattedDate:"June 13, 2023",tags:[],readingTime:2.975,hasTruncateMarker:!1,authors:[],frontMatter:{}},c={authorsImageUrls:[]},l=[{value:"Background",id:"background",level:2},{value:"Template",id:"template",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Reference",id:"reference",level:3}],u={toc:l},h="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,'In our day to day life, we are often asked various questions like "why we are doing this", "what would happen if we don\'t do it", "how do we know if we are doing the right thing" and so on.'),(0,r.kt)("p",null,"The reason why these questions comes to our mind is because are we think inside out and we don't have the sufficient context why this decision was made and why we are being asked to do a specific task."),(0,r.kt)("p",null,"As an example, a team might get a goal that the unit test coverage for the components should be at least 85%. We all understand the need for having the unit test cases but then we have questions about the measurement criteria. E.g. is it important to have well written test cases vs some poorly written test cases that have 80-90% line coverage?"),(0,r.kt)("p",null,"This is where we need to share a big picture with the team mates and we need to explain and share the ",(0,r.kt)("em",{parentName:"p"},"why")," (goals and objectives) so that team better understanding and is able to help in achieveing the actual goal even though if it means that we have to adjust the measurement criteria from 85% coverage to 80% coverage and well maintained test cases."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The maintainance of the test case is very important and we should add update them if we are founding any new bug.")),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("p",null,"The big picture can be shared using following template:"),(0,r.kt)("mermaid",{value:"flowchart TD\n    Goal[Goals \\n What we want to achieve \\n Where we want to be] -.->Objective[Objective \\n How can we achieve it \\n Measurable actions]\n    Objective-.-> Processes[Processes \\n What processes are required to meet the objective \\n What missing system is required to be built]\n    Processes -.-> Outcome[Outcome \\n How are we going to know if we are on the right track,\\n how we will get feedback for further improvements]\n   "}),(0,r.kt)("p",null,"Note - Outcomes should be used for identifying the gaps and improvements - What changes are required in processes, What changes are required in objectives."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"example-1"},"Example 1"),(0,r.kt)("mermaid",{value:"flowchart TD\n    Goal[Goals \\n Our goal is to improve time to market] -.->Objective[Objective \\n Improve developer's efficiency by having well written unit test cases \\n that helps in catching bugs during development phase itself \\n instead of catching them during integration testing or in live.]\n    Objective-.-> Processes[Processes \\n 1. Ensure that test cases are well-written \\n and covers critical business use cases during reviews. \\n 2. Ensure that test cases are being updated if a new bug is identified.]\n    Processes -.-> Outcome[Outcome \\n 1. Unit test coverage is required to be 85% to ensure that all critical path of the codes are covered. \\n 2. No of issues detected post development due to code changes.]\n   "}),(0,r.kt)("h3",{id:"example-2"},"Example 2"),(0,r.kt)("mermaid",{value:"flowchart TD\n    Goal[Goals \\n My goal is to stay fit and healthy] -.->Objective[Objective \\n Maintain weight]\n    Objective-.-> Processes[Processess \\n Choose the right process that fits with my goal and objective \\n 1. Workout \\n 2. Diet \\n 3. Medication.]\n    Processes -.-> Outcome[Outcome \\n 1. Target weight is 70 KG.]\n   "}),(0,r.kt)("p",null,"There could be N number of processes that might lead to desired outcome so we need to pick the approaches that are aligned with objective.\nWe revisit the processes / system if goals and objective are not being fullfilled."),(0,r.kt)("p",null,'In above case, only "workout" process will help in achieving the desired goal. If its diet then it wouldn\'t help in achiving the overall goal.'),(0,r.kt)("h3",{id:"reference"},"Reference"),(0,r.kt)("mermaid",{value:"flowchart LR\n    Vision --\x3e Goals --\x3e Objective --\x3e Processes --\x3e Outcome\n   "}))}d.isMDXComponent=!0}}]);