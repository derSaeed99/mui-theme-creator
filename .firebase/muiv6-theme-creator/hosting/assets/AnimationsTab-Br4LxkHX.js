import{G as m,r as a,n as e,o,T as r,q as h,S as x,a8 as U}from"./index-Cyn3OnSy.js";import{G as p}from"./Grid-kVyTndvk.js";import{M as n}from"./MenuItem-Yjhsu0Bt.js";const f={bounce:m`
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  `,slideIn:m`
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  `,shake:m`
    0%, 100% {
      transform: translateX(0);
    }
    10%, 30%, 50%, 70%, 90% {
      transform: translateX(-10px);
    }
    20%, 40%, 60%, 80% {
      transform: translateX(10px);
    }
  `,popBounce:m`
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  `,rotate:m`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `,pulse:m`
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(0.9);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  `,flip:m`
    0% {
      transform: perspective(400px) rotateY(0);
    }
    100% {
      transform: perspective(400px) rotateY(360deg);
    }
  `,fadeIn:m`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `},g=()=>{const[t,N]=a.useState(null),[i,D]=a.useState(500),[c,v]=a.useState("ease-in-out"),[u,C]=a.useState(0),[l,E]=a.useState("1"),[d,A]=a.useState("&:active");return e.jsxDEV(o,{sx:{m:2},children:e.jsxDEV(o,{sx:{display:"flex",gap:4},children:[e.jsxDEV(o,{sx:{width:"400px"},children:[e.jsxDEV(p,{container:!0,spacing:4,sx:{maxWidth:600},children:Object.keys(f).map(s=>e.jsxDEV(p,{item:!0,xs:3,children:e.jsxDEV(o,{onClick:()=>N(s),onMouseDown:()=>N(s),sx:{width:80,height:80,borderRadius:"50%",bgcolor:{bounce:"success.main",slideIn:"info.main",shake:"error.main",popBounce:"warning.main",rotate:"secondary.main",pulse:"primary.main",flip:"info.dark",fadeIn:"success.dark"}[s],display:"flex",alignItems:"center",justifyContent:"center",boxShadow:t===s?"inset 0 0 0 3px #fff, 0 3px 6px rgba(0,0,0,0.2)":3,transition:"transform 0.2s, box-shadow 0.2s",mx:"auto","&:hover":{transform:"scale(1.05)",boxShadow:t===s?"inset 0 0 0 3px #fff, 0 6px 12px rgba(0,0,0,0.3)":6,cursor:"pointer"},...d==="@keyframes"?{animation:`${f[s]} ${i}ms ${c} ${u}ms ${l}`}:{[d]:{animation:`${f[s]} ${i}ms ${c} ${u}ms ${l}`}}},children:e.jsxDEV(r,{variant:"body2",color:"white",sx:{fontSize:"0.75rem",fontWeight:"medium",textTransform:"capitalize"},children:s},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:169,columnNumber:19},void 0)},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:116,columnNumber:17},void 0)},s,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:115,columnNumber:15},void 0))},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:113,columnNumber:11},void 0),e.jsxDEV(r,{variant:"body2",color:"secondary",sx:{textAlign:"center",mt:1,mb:3},children:"(Click and hold)"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:184,columnNumber:11},void 0),e.jsxDEV(o,{sx:{mt:2},children:[e.jsxDEV(o,{sx:{mb:3},children:[e.jsxDEV(r,{gutterBottom:!0,children:"Animation Speed (ms)"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:195,columnNumber:15},void 0),e.jsxDEV(h,{value:i,onChange:(s,b)=>D(b),min:100,max:2e3,step:100,marks:!0,valueLabelDisplay:"auto"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:196,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:194,columnNumber:13},void 0),e.jsxDEV(o,{sx:{mb:3},children:[e.jsxDEV(r,{gutterBottom:!0,children:"Easing"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:207,columnNumber:15},void 0),e.jsxDEV(x,{value:c,onChange:s=>v(s.target.value),size:"small",fullWidth:!0,children:[e.jsxDEV(n,{value:"linear",children:"Linear"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:214,columnNumber:17},void 0),e.jsxDEV(n,{value:"ease",children:"Ease"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:215,columnNumber:17},void 0),e.jsxDEV(n,{value:"ease-in",children:"Ease In"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:216,columnNumber:17},void 0),e.jsxDEV(n,{value:"ease-out",children:"Ease Out"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:217,columnNumber:17},void 0),e.jsxDEV(n,{value:"ease-in-out",children:"Ease In Out"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:218,columnNumber:17},void 0),e.jsxDEV(n,{value:"cubic-bezier(0.68, -0.55, 0.265, 1.55)",children:"Bounce"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:219,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:208,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:206,columnNumber:13},void 0),e.jsxDEV(o,{sx:{mb:3},children:[e.jsxDEV(r,{gutterBottom:!0,children:"Delay (ms)"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:225,columnNumber:15},void 0),e.jsxDEV(h,{value:u,onChange:(s,b)=>C(b),min:0,max:1e3,step:100,marks:!0,valueLabelDisplay:"auto"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:226,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:224,columnNumber:13},void 0),e.jsxDEV(o,{sx:{mb:3},children:[e.jsxDEV(r,{gutterBottom:!0,children:"Iterations"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:237,columnNumber:15},void 0),e.jsxDEV(x,{value:l,onChange:s=>E(s.target.value),size:"small",fullWidth:!0,children:[e.jsxDEV(n,{value:"1",children:"Once"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:244,columnNumber:17},void 0),e.jsxDEV(n,{value:"2",children:"Twice"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:245,columnNumber:17},void 0),e.jsxDEV(n,{value:"3",children:"Three times"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:246,columnNumber:17},void 0),e.jsxDEV(n,{value:"infinite",children:"Infinite"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:247,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:238,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:236,columnNumber:13},void 0),e.jsxDEV(o,{sx:{mb:3},children:[e.jsxDEV(r,{gutterBottom:!0,children:"Trigger Event"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:251,columnNumber:15},void 0),e.jsxDEV(x,{value:d,onChange:s=>A(s.target.value),size:"small",fullWidth:!0,children:[e.jsxDEV(n,{value:"&:active",children:"On Click (hold)"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:258,columnNumber:17},void 0),e.jsxDEV(n,{value:"&:hover",children:"On Hover"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:259,columnNumber:17},void 0),e.jsxDEV(n,{value:"@keyframes",children:"On Mount/Change"},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:260,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:252,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:250,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:193,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:112,columnNumber:9},void 0),t&&e.jsxDEV(o,{sx:{flex:1},children:e.jsxDEV(U,{mode:"dark",code:d==="@keyframes"?`import { keyframes } from "@emotion/react";

const ${t} = keyframes\`${f[t].styles}\`

// Use in any MUI component:
<Box sx={{ 
  animation: \`\${${t}} ${i}ms ${c} ${u}ms ${l}\`
}}>
  content
</Box>`:`import { keyframes } from "@emotion/react";

const ${t} = keyframes\`${f[t].styles}\`

// Use in any MUI component:
<Box sx={{ 
  '${d}': { 
    animation: \`\${${t}} ${i}ms ${c} ${u}ms ${l}\` 
  }
}}>
  content
</Box>`},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:269,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:268,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:110,columnNumber:7},void 0)},void 0,!1,{fileName:"C:/Users/ased9/Documents/code/mui-theme-creator/src/components/AnimationsTab.tsx",lineNumber:109,columnNumber:5},void 0)};export{g as AnimationsTab};
