"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[8043],{2969:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294);function r(e){let{children:t,color:n}=e;return o.createElement("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},7842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(7462),r=(n(7294),n(3905)),s=(n(2969),n(814)),i=n(2500);const a={},d=void 0,c={unversionedId:"test/domain-driven-design-webinars",id:"test/domain-driven-design-webinars",title:"domain-driven-design-webinars",description:"",source:"@site/docs/test/domain-driven-design-webinars.mdx",sourceDirName:"test",slug:"/test/domain-driven-design-webinars",permalink:"/docs/test/domain-driven-design-webinars",draft:!1,editUrl:"https://github.com/atulagrawal/software-architecture/tree/main/packages/create-docusaurus/templates/shared/docs/test/domain-driven-design-webinars.mdx",tags:[],version:"current",frontMatter:{}},u={},l=[],p={toc:l},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{language:"jsx",mdxType:"CodeBlock"},i.Z))}f.isMDXComponent=!0},2500:(e,t,n)=>{n.d(t,{Z:()=>o});const o="/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React, {useState} from 'react';\n\nexport default function MyComponent() {\n  const [bool, setBool] = useState(false);\n  return (\n    <div>\n      <p>MyComponent rendered !</p>\n      <p>bool={bool ? 'true' : 'false'}</p>\n      <p>\n        <button onClick={() => setBool((b) => !b)}>toggle bool</button>\n      </p>\n    </div>\n  );\n}"}}]);