import{r as m}from"./index-CsdIBAqE.js";var y={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=m,w=Symbol.for("react.element"),E=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,q=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function h(o,r,a){var n,s={},e=null,t=null;a!==void 0&&(e=""+a),r.key!==void 0&&(e=""+r.key),r.ref!==void 0&&(t=r.ref);for(n in r)_.call(r,n)&&!C.hasOwnProperty(n)&&(s[n]=r[n]);if(o&&o.defaultProps)for(n in r=o.defaultProps,r)s[n]===void 0&&(s[n]=r[n]);return{$$typeof:w,type:o,key:e,ref:t,props:s,_owner:q.current}}c.Fragment=E;c.jsx=h;c.jsxs=h;y.exports=c;var l=y.exports;function B(o,r,a,n){const s=a?"white":"#333";let e=a?"#1ea7fd":"transparent",t="14px",i="11px 20px";switch(n){case"small":t="0.85rem",i="0.5rem 1rem";break;case"medium":t="1rem",i="0.7rem 1.25rem";break;case"large":t="1.25rem",i="0.85rem 1.5rem";break;default:t="14px",i="10px 16px";break}return o&&(e=o),{color:s,boxShadow:a?"none":"rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",backgroundColor:e,fontFamily:["Nunito Sans","Helvetica Neue","Helvetica","Arial","sans-serif"],fontWeight:"700",border:0,borderRadius:r==="square"?"10px":"3em",cursor:"pointer",display:"inline-block",position:"relative",overflow:"hidden",transform:"translate3d(0, 0, 0)",fontSize:t,padding:i,lineHeight:1,"*:after":{display:"block",position:"absolute",width:"100%",height:"100%",top:0,left:0,pointerEvents:"none",backgroundImage:"radial-gradient(circle, #000 10%, transparent 10.01%)",backgroundRepeat:"no-repeat",backgroundPosition:"50%",transform:"scale(10,10)",opacity:0,transition:"transform .5s, opacity 1s"},"*:active:after":{transform:"scale(0,0)",opacity:.2,transition:"0s"},".kariu-button:active:after":{transform:"scale(0,0)",opacity:"0.2",transition:"0s"},"button.ripple":{position:"absolute",borderRadius:"50%",transform:"scale(0)",animation:"ripple 600ms linear",backgroundColor:"rgba(255, 255, 255, 0.4)"},"@keyframes ripple":{to:{transform:"scale(4)",opacity:0}},".kariu-button--primary":{color:"white",backgroundColor:"#1ea7fd"},".kariu-button--secondary":{color:"#333",backgroundColor:"transparent",boxShadow:"rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"}}}const g=({duration:o,color:r})=>{const[a,n]=m.useState([]);m.useEffect(()=>{if(a.length>0){const e=setTimeout(()=>{n([])},o);return()=>clearTimeout(e)}},[a,o]);const s=e=>{const t=e.currentTarget.getBoundingClientRect(),i=t.width>t.height?t.width:t.height,u=e.clientX-t.left-i/2,p={top:e.clientY-t.top-i/2,left:u,size:i};n([...a,p])};return l.jsx("div",{className:"ripple-container",onMouseDown:s,children:a.map((e,t)=>l.jsx("span",{style:{top:e.top,left:e.left,width:e.size,height:e.size,backgroundColor:r,animationDuration:`${o}ms`},className:"ripple"},t))})};g.__docgenInfo={description:"",methods:[],displayName:"Ripple",props:{duration:{required:!0,tsType:{name:"number"},description:""},color:{required:!0,tsType:{name:"string"},description:""}}};const S=({type:o,primary:r=!0,size:a="medium",backgroundColor:n=null,label:s,shape:e="round",className:t,children:i,ripple:u=!0,rippleDuration:f=500,rippleColor:p,sx:v={},...d})=>{const k=r?"kariu-button--primary":"kariu-button--secondary",x={...B(n||"",e,r,a),...v};let b=n||(r?"#1ea7fd":"lightgray");return p&&(b=p),l.jsxs("button",{type:o,className:["kariu-button",`kariu-button--${a}`,e,k,t].join(" "),style:x,onClick:T=>{d.onClick&&d.onClick(T)},...d,children:[s&&l.jsx("span",{className:"kariu-button--label",children:s}),u&&l.jsx(g,{duration:f,color:b}),i]})};S.__docgenInfo={description:"",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"true",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use",defaultValue:{value:"null",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"button" | "submit" | "reset"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'},{name:"literal",value:'"reset"'}]},description:"type of the button"},label:{required:!0,tsType:{name:"string"},description:"Button contents"},shape:{required:!1,tsType:{name:"union",raw:'"square" | "round"',elements:[{name:"literal",value:'"square"'},{name:"literal",value:'"round"'}]},description:"Button shape",defaultValue:{value:"'round'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Button classname override"},sx:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Button style overrides",defaultValue:{value:"{}",computed:!1}},buttonProps:{required:!1,tsType:{name:"ReactButtonHTMLAttributes",raw:"React.ButtonHTMLAttributes<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Usual button props: onClick"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement, MouseEvent>",elements:[{name:"HTMLButtonElement"},{name:"MouseEvent"}]},name:"event"}],return:{name:"void"}}},description:"Optional click handler"},children:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},ripple:{required:!1,tsType:{name:"boolean"},description:"If the button has a ripple effect on click.",defaultValue:{value:"true",computed:!1}},rippleDuration:{required:!1,tsType:{name:"number"},description:"Duration of the ripple effect",defaultValue:{value:"500",computed:!1}},rippleColor:{required:!1,tsType:{name:"string"},description:"Color of the ripple effect. Default color is the color of the button's background."}}};export{S as B,l as j};