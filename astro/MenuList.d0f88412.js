import{r as c}from"./index.ed373d49.js";var l={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=c,d=Symbol.for("react.element"),f=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,h=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function u(s,t,a){var e,n={},i=null,m=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(m=t.ref);for(e in t)x.call(t,e)&&!_.hasOwnProperty(e)&&(n[e]=t[e]);if(s&&s.defaultProps)for(e in t=s.defaultProps,t)n[e]===void 0&&(n[e]=t[e]);return{$$typeof:d,type:s,key:i,ref:m,props:n,_owner:h.current}}o.Fragment=f;o.jsx=u;o.jsxs=u;l.exports=o;var r=l.exports;function y(){const[s,t]=c.useState([]),a=async()=>{try{const e=await fetch("https://skilled-prosperity-c2f89bf4d5.strapiapp.com/api/menu-lists").then(n=>n.json());console.log(e.data),t(e.data)}catch(e){console.log(e)}};return c.useEffect(()=>{a()},[]),r.jsx("section",{className:"menu-box",children:r.jsx("div",{className:"content",children:r.jsx("ul",{children:s.map(e=>r.jsx("li",{className:"item-list",children:r.jsxs("a",{href:"",children:[r.jsx("span",{className:"item-thumb",children:r.jsx("img",{src:`/img/${e.attributes.menuThumb}`})}),r.jsxs("dl",{className:"item-info",children:[r.jsxs("dt",{className:"item-name",children:[e.attributes.menuName," :"," ",r.jsx("span",{children:e.attributes.menuPrice})]}),r.jsx("dd",{children:e.attributes.menuInfo})]})]})},e.id))})})})}export{y as default};
