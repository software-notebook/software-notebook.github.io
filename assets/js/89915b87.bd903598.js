"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[8043],{2969:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(7294);function r(e){let{children:n,color:t}=e;return o.createElement("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)}},7842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var o=t(7462),r=(t(7294),t(3905)),s=(t(2969),t(814)),i=t(2500);const d={},a=void 0,c={unversionedId:"test/domain-driven-design-webinars",id:"test/domain-driven-design-webinars",title:"domain-driven-design-webinars",description:"",source:"@site/docs/test/domain-driven-design-webinars.mdx",sourceDirName:"test",slug:"/test/domain-driven-design-webinars",permalink:"/docs/test/domain-driven-design-webinars",draft:!1,tags:[],version:"current",frontMatter:{}},l={},u=[],p={toc:u},f="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(f,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{language:"jsx",mdxType:"CodeBlock"},i.Z))}m.isMDXComponent=!0},2500:(e,n,t)=>{t.d(n,{Z:()=>o});const o="/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React, {useState} from 'react';\n\nexport default function MyComponent() {\n  const [bool, setBool] = useState(false);\n  return (\n    <div>\n      <p>MyComponent rendered !</p>\n      <p>bool={bool ? 'true' : 'false'}</p>\n      <p>\n        <button onClick={() => setBool((b) => !b)}>toggle bool</button>\n      </p>\n    </div>\n  );\n}"}}]);