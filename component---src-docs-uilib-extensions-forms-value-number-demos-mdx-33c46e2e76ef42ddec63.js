"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[8044],{80715:function(e,n,l){l.r(n),l.d(n,{default:function(){return E}});var a={};l.r(a),l.d(a,{Empty:function(){return s},Inline:function(){return m},Label:function(){return p},LabelAndValue:function(){return d},Placeholder:function(){return u},WithDecimalLimit:function(){return x},WithDecimalSymbol:function(){return b},WithPrefix:function(){return f},WithSuffix:function(){return v},WithThousandSeparator:function(){return h},WithValue:function(){return c}});var t=l(52322),r=l(45392),o=l(82058),i=l(75482);const s=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:"<Value.Number showEmpty />\n"}),u=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:'<Value.Number placeholder="The number was not filled in" />\n'}),c=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:"<Value.Number value={123} />\n"}),p=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:'<Value.Number label="Label text" showEmpty />\n'}),d=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:'<Value.Number label="Label text" value={12345678} />\n'}),m=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:"<p>\n  This is before the component\n  <Value.Number value={123} inline />\n  This is after the component\n</p>\n"}),h=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:'<Value.Number\n  label="Label text"\n  value={12345678.9}\n  thousandSeparator=" "\n/>\n'}),b=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:'<Value.Number label="Label text" value={123.4567} decimalSymbol="." />\n'}),x=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:'<Value.Number label="Label text" value={123.4567} decimalLimit={2} />\n'}),f=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:'<Value.Number label="Label text" value={123.4} prefix="$" />\n'}),v=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:'<Value.Number label="Label text" value={123.4} suffix="kr" />\n'});function j(e){const n=Object.assign({h2:"h2",h3:"h3"},(0,r.ah)(),e.components);return a||Z("Examples",!1),s||Z("Examples.Empty",!0),m||Z("Examples.Inline",!0),p||Z("Examples.Label",!0),d||Z("Examples.LabelAndValue",!0),u||Z("Examples.Placeholder",!0),x||Z("Examples.WithDecimalLimit",!0),b||Z("Examples.WithDecimalSymbol",!0),f||Z("Examples.WithPrefix",!0),v||Z("Examples.WithSuffix",!0),h||Z("Examples.WithThousandSeparator",!0),c||Z("Examples.WithValue",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Demos"}),"\n",(0,t.jsx)(n.h3,{children:"Empty"}),"\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(n.h3,{children:"Placeholder"}),"\n",(0,t.jsx)(u,{}),"\n",(0,t.jsx)(n.h3,{children:"Value"}),"\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h3,{children:"Label"}),"\n",(0,t.jsx)(p,{}),"\n",(0,t.jsx)(n.h3,{children:"Label and value"}),"\n",(0,t.jsx)(d,{}),"\n",(0,t.jsx)(n.h3,{children:"Inline"}),"\n",(0,t.jsx)(m,{}),"\n",(0,t.jsx)(n.h3,{children:"With: Thousand separator"}),"\n",(0,t.jsx)(h,{}),"\n",(0,t.jsx)(n.h3,{children:"With: Decimal symbol"}),"\n",(0,t.jsx)(b,{}),"\n",(0,t.jsx)(n.h3,{children:"With: Decimals"}),"\n",(0,t.jsx)(x,{}),"\n",(0,t.jsx)(n.h3,{children:"With: Prefix"}),"\n",(0,t.jsx)(f,{}),"\n",(0,t.jsx)(n.h3,{children:"With: Suffix"}),"\n",(0,t.jsx)(v,{})]})}var E=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(j,e)})):j(e)};function Z(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},75482:function(e,n,l){l.d(n,{Z:function(){return D}});var a=l(49406),t=l(63472),r=l(2784),o=l(95955),i=l.n(o),s=l(72210);function u(e){const{path:n}=e,l=(0,r.useContext)(s.Z.Context);if(n&&"/"!==n.substring(0,1))throw new Error("Invalid path. Input path JSON Pointers  must be from root (starting with a /).");const a=(0,r.useMemo)((()=>{var a;return null!==(a=e.value)&&void 0!==a?a:l.data&&void 0!==n&&i().has(l.data,n)?i().get(l.data,n):void 0}),[n,e.value,l.data]);return{...e,value:a}}var c=l(52322);function p(e){const{className:n,label:l,placeholder:r,value:o,inline:i,showEmpty:s,prepare:p=(e=>e)}=u(e);return(0,c.jsx)(a.Z,{className:n,label:l,showEmpty:s,placeholder:r,inline:i,...(0,t.p)(e),children:p(o)})}p._supportsEufemiaSpacingProps=!0;var d=p;function m(e,n){const{thousandSeparator:l,decimalLimit:a,fixedDecimals:t,decimalSymbol:r=",",magnitude:o,prefix:i,suffix:s}=null!=n?n:{},u=void 0!==o?e/Math.pow(10,o):e,c=void 0!==t?u.toFixed(t):a?(Math.round(u*Math.pow(10,a))/Math.pow(10,a)).toString():u.toString(),p=void 0!==r?c.replace(".",r):c,d=void 0!==l?p.replace(/\B(?=(\d{3})+(?!\d))/g,l):p,m=void 0!==i?i+d:d;return void 0!==s?m+s:m}function h(e){const{className:n,label:l,placeholder:r,value:o,inline:i,showEmpty:s,thousandSeparator:p,decimalSymbol:d,decimalLimit:h,prefix:b,suffix:x}=u(e);return(0,c.jsx)(a.Z,{className:n,label:l,showEmpty:s,placeholder:r,inline:i,...(0,t.p)(e),children:void 0!==o?m(o,{thousandSeparator:!0===p?" ":p,decimalSymbol:d,decimalLimit:h,prefix:b,suffix:x}):null})}h._supportsEufemiaSpacingProps=!0;var b=h,x=l(32831);function f(e){const n=(0,r.useContext)(x.Z),{className:l,label:o,placeholder:i,showEmpty:s,value:p,inline:d}=u(e);return(0,c.jsx)(a.Z,{className:l,label:o,showEmpty:s,placeholder:i,inline:d,...(0,t.p)(e),children:!0===p||!1===p?!0===p?null==n?void 0:n.translation.Forms.booleanYes:null==n?void 0:n.translation.Forms.booleanNo:null})}f._supportsEufemiaSpacingProps=!0;var v=f;function j(e){var n,l;const a={...e,label:e.label,thousandSeparator:null!==(n=e.thousandSeparator)&&void 0!==n?n:" ",suffix:null!==(l=e.suffix)&&void 0!==l?l:" kr"};return(0,c.jsx)(b,{...a})}j._supportsEufemiaSpacingProps=!0;var E=j;function Z(e){var n;const l=(0,r.useContext)(x.Z),a={...e,label:null!==(n=e.label)&&void 0!==n?n:null==l?void 0:l.translation.Forms.dateLabel};return(0,c.jsx)(d,{...a})}Z._supportsEufemiaSpacingProps=!0;var N=Z;function S(e){var n;const l=(0,r.useContext)(x.Z),a={...e,label:null!==(n=e.label)&&void 0!==n?n:null==l?void 0:l.translation.Forms.emailLabel};return(0,c.jsx)(d,{...a})}S._supportsEufemiaSpacingProps=!0;var g=S;function L(e){var n;const l=(0,r.useContext)(x.Z),a={...e,label:null!==(n=e.label)&&void 0!==n?n:null==l?void 0:l.translation.Forms.firstNameLabel};return(0,c.jsx)(d,{...a})}L._supportsEufemiaSpacingProps=!0;var V=L;function y(e){var n;const l=(0,r.useContext)(x.Z),a={...e,label:null!==(n=e.label)&&void 0!==n?n:null==l?void 0:l.translation.Forms.lastNameLabel};return(0,c.jsx)(d,{...a})}y._supportsEufemiaSpacingProps=!0;var _=y,w=l(41672);function P(e){var n;const l=(0,r.useContext)(x.Z),a={...e,label:null!==(n=e.label)&&void 0!==n?n:e.inline||null==l?void 0:l.translation.Forms.nationalIdentityNumberLabel,prepare:e=>(0,w.WU)((0,w.bR)(e),{nin:!0}).toString()};return(0,c.jsx)(d,{...a})}P._supportsEufemiaSpacingProps=!0;var W=P;function C(e){var n;const l=(0,r.useContext)(x.Z),a={...e,label:null!==(n=e.label)&&void 0!==n?n:e.inline||null==l?void 0:l.translation.Forms.phoneNumberLabel,prepare:e=>(0,w.WU)((0,w.bR)(e),{phone:!0}).toString()};return(0,c.jsx)(d,{...a})}C._supportsEufemiaSpacingProps=!0;var k=C;function F(e){var n;const l=(0,r.useContext)(x.Z),a={...e,label:null!==(n=e.label)&&void 0!==n?n:e.inline||null==l?void 0:l.translation.Forms.bankAccountNumberLabel,prepare:e=>(0,w.WU)((0,w.bR)(e),{ban:!0}).toString()};return(0,c.jsx)(d,{...a})}F._supportsEufemiaSpacingProps=!0;var D={String:d,Number:b,Boolean:v,Currency:E,Date:N,Email:g,FirstName:V,LastName:_,NationalIdentityNumber:W,PhoneNumber:k,BankAccountNumber:F}},49406:function(e,n,l){var a=l(65731),t=l(94799),r=l(63472),o=l(72779),i=l.n(o),s=l(52322);function u(e){const{className:n,label:l,inline:o,placeholder:u,showEmpty:c,children:p}=e;return null!=p&&!1!==p||c||u?(0,s.jsxs)(a.Z,{className:i()("dnb-forms-value",o&&"dnb-forms-value-block--inline",n),...(0,r.p)(e),children:[l&&(0,s.jsx)(t.Z,{className:"dnb-forms-value-block__label",label_direction:o?"horizontal":"vertical",children:l}),null!=p?p:(0,s.jsx)("span",{className:"dnb-forms-value-block__placeholder",children:u})]}):null}u._supportsEufemiaSpacingProps=!0,n.Z=u},63472:function(e,n,l){l.d(n,{N:function(){return t},p:function(){return a}});const a=e=>({space:null==e?void 0:e.space,top:null==e?void 0:e.top,bottom:null==e?void 0:e.bottom,left:null==e?void 0:e.left,right:null==e?void 0:e.right}),t=e=>{const{space:n,top:l,bottom:a,left:t,right:r,...o}=e;return o}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-value-number-demos-mdx-33c46e2e76ef42ddec63.js.map