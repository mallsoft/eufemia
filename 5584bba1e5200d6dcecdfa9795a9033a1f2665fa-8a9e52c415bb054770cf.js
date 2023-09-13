"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[8677],{3535:function(e,n,l){l.r(n),l.d(n,{default:function(){return E}});var a={};l.r(a),l.d(a,{Empty:function(){return s},Inline:function(){return p},Label:function(){return d},LabelAndValue:function(){return h},Placeholder:function(){return u},WithDecimalLimit:function(){return b},WithDecimalSymbol:function(){return f},WithPrefix:function(){return v},WithSuffix:function(){return x},WithThousandSeparator:function(){return m},WithValue:function(){return c}});var t=l(52322),r=l(45392),o=l(58901),i=l(55812);const s=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:"<Value.Number showEmpty />\n"}),u=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:'<Value.Number placeholder="The number was not filled in" />\n'}),c=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:"<Value.Number value={123} />\n"}),d=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:'<Value.Number label="Label text" showEmpty />\n'}),h=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:'<Value.Number label="Label text" value={12345678} />\n'}),p=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:"<P>\n  This is before the component\n  <Value.Number value={123} inline />\n  This is after the component\n</P>\n"}),m=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:'<Value.Number\n  label="Label text"\n  value={12345678.9}\n  thousandSeparator=" "\n/>\n'}),f=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:'<Value.Number label="Label text" value={123.4567} decimalSymbol="." />\n'}),b=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:'<Value.Number label="Label text" value={123.4567} decimalLimit={2} />\n'}),v=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:'<Value.Number label="Label text" value={123.4} prefix="$" />\n'}),x=()=>(0,t.jsx)(o.Z,{scope:{Value:i.Z},children:'<Value.Number label="Label text" value={123.4} suffix="kr" />\n'});function j(e){const n=Object.assign({h2:"h2",h3:"h3"},(0,r.ah)(),e.components);return a||Z("Examples",!1),s||Z("Examples.Empty",!0),p||Z("Examples.Inline",!0),d||Z("Examples.Label",!0),h||Z("Examples.LabelAndValue",!0),u||Z("Examples.Placeholder",!0),b||Z("Examples.WithDecimalLimit",!0),f||Z("Examples.WithDecimalSymbol",!0),v||Z("Examples.WithPrefix",!0),x||Z("Examples.WithSuffix",!0),m||Z("Examples.WithThousandSeparator",!0),c||Z("Examples.WithValue",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Demos"}),"\n",(0,t.jsx)(n.h3,{children:"Empty"}),"\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(n.h3,{children:"Placeholder"}),"\n",(0,t.jsx)(u,{}),"\n",(0,t.jsx)(n.h3,{children:"Value"}),"\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h3,{children:"Label"}),"\n",(0,t.jsx)(d,{}),"\n",(0,t.jsx)(n.h3,{children:"Label and value"}),"\n",(0,t.jsx)(h,{}),"\n",(0,t.jsx)(n.h3,{children:"Inline"}),"\n",(0,t.jsx)(p,{}),"\n",(0,t.jsx)(n.h3,{children:"With: Thousand separator"}),"\n",(0,t.jsx)(m,{}),"\n",(0,t.jsx)(n.h3,{children:"With: Decimal symbol"}),"\n",(0,t.jsx)(f,{}),"\n",(0,t.jsx)(n.h3,{children:"With: Decimals"}),"\n",(0,t.jsx)(b,{}),"\n",(0,t.jsx)(n.h3,{children:"With: Prefix"}),"\n",(0,t.jsx)(v,{}),"\n",(0,t.jsx)(n.h3,{children:"With: Suffix"}),"\n",(0,t.jsx)(x,{})]})}var E=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(j,e)})):j(e)};function Z(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},75749:function(e,n,l){l.d(n,{Z:function(){return d}});var a=l(21068),t=l(40409),r=l(2784),o=l(95955),i=l.n(o),s=l(52322);function u(e){const{path:n="/",iterate:l,children:t}=e,o=(0,r.useContext)(a.Z),{data:u,handlePathChange:c}=o,d=u&&i().has(u,n)?i().get(u,n):void 0,h=(0,r.useMemo)((()=>c?(e,l)=>{c(`${n}${e}`,l)}:void 0),[c,n]);return l?Array.isArray(d)?(0,s.jsx)(s.Fragment,{children:d.map(((e,l)=>{const r=c?(e,a)=>{c(`${n}/${l}${e}`,a)}:void 0;return(0,s.jsx)(a.Z.Provider,{value:{...o,data:e,handlePathChange:r},children:t},`element${l}`)}))}):null:(0,s.jsx)(a.Z.Provider,{value:{...o,data:d,handlePathChange:h},children:t})}u._supportsEufemiaSpacingProps=!0;var c=u;var d={Context:a.Z,Provider:t.Z,At:c}},31270:function(e,n,l){const a=l(2784).createContext(void 0);n.Z=a},38875:function(e,n,l){const a=l(2784).createContext(void 0);n.Z=a},55812:function(e,n,l){l.d(n,{Z:function(){return C}});var a=l(49406),t=l(8160),r=l(27439),o=l(52322);function i(e){const{className:n,label:l,placeholder:i,value:s,inline:u,showEmpty:c,prepare:d=(e=>e)}=(0,t.Z)(e);return(0,o.jsx)(a.Z,{className:n,label:l,showEmpty:c,placeholder:i,inline:u,...(0,r.SR)(e),children:d(s)})}i._supportsEufemiaSpacingProps=!0;var s=i;function u(e,n){const{thousandSeparator:l,decimalLimit:a,fixedDecimals:t,decimalSymbol:r=",",magnitude:o,prefix:i,suffix:s}=null!=n?n:{},u=void 0!==o?e/Math.pow(10,o):e,c=void 0!==t?u.toFixed(t):a?(Math.round(u*Math.pow(10,a))/Math.pow(10,a)).toString():u.toString(),d=void 0!==r?c.replace(".",r):c,h=void 0!==l?d.replace(/\B(?=(\d{3})+(?!\d))/g,l):d,p=void 0!==i?i+h:h;return void 0!==s?p+s:p}function c(e){const{className:n,label:l,placeholder:i,value:s,inline:c,showEmpty:d,thousandSeparator:h,decimalSymbol:p,decimalLimit:m,prefix:f,suffix:b}=(0,t.Z)(e);return(0,o.jsx)(a.Z,{className:n,label:l,showEmpty:d,placeholder:i,inline:c,...(0,r.SR)(e),children:void 0!==s?u(s,{thousandSeparator:!0===h?" ":h,decimalSymbol:p,decimalLimit:m,prefix:f,suffix:b}):null})}c._supportsEufemiaSpacingProps=!0;var d=c,h=l(2784),p=l(32831);function m(e){const n=(0,h.useContext)(p.Z),{className:l,label:i,placeholder:s,showEmpty:u,value:c,inline:d}=(0,t.Z)(e);return(0,o.jsx)(a.Z,{className:l,label:i,showEmpty:u,placeholder:s,inline:d,...(0,r.SR)(e),children:!0===c||!1===c?!0===c?null==n?void 0:n.translation.Forms.booleanYes:null==n?void 0:n.translation.Forms.booleanNo:null})}m._supportsEufemiaSpacingProps=!0;var f=m;function b(e){var n,l;const a={...e,label:e.label,thousandSeparator:null!==(n=e.thousandSeparator)&&void 0!==n?n:" ",suffix:null!==(l=e.suffix)&&void 0!==l?l:" kr"};return(0,o.jsx)(d,{...a})}b._supportsEufemiaSpacingProps=!0;var v=b;function x(e){var n;const l=(0,h.useContext)(p.Z),a={...e,label:null!==(n=e.label)&&void 0!==n?n:null==l?void 0:l.translation.Forms.dateLabel};return(0,o.jsx)(s,{...a})}x._supportsEufemiaSpacingProps=!0;var j=x;function E(e){var n;const l=(0,h.useContext)(p.Z),a={...e,label:null!==(n=e.label)&&void 0!==n?n:null==l?void 0:l.translation.Forms.emailLabel};return(0,o.jsx)(s,{...a})}E._supportsEufemiaSpacingProps=!0;var Z=E,g=l(41672);function S(e){var n;const l=(0,h.useContext)(p.Z),a={...e,label:null!==(n=e.label)&&void 0!==n?n:e.inline||null==l?void 0:l.translation.Forms.nationalIdentityNumberLabel,prepare:e=>(0,g.WU)((0,g.bR)(e),{nin:!0}).toString()};return(0,o.jsx)(s,{...a})}S._supportsEufemiaSpacingProps=!0;var P=S;function y(e){var n;const l=(0,h.useContext)(p.Z),a={...e,label:null!==(n=e.label)&&void 0!==n?n:e.inline||null==l?void 0:l.translation.Forms.phoneNumberLabel,prepare:e=>(0,g.WU)((0,g.bR)(e),{phone:!0}).toString()};return(0,o.jsx)(s,{...a})}y._supportsEufemiaSpacingProps=!0;var w=y;function N(e){var n;const l=(0,h.useContext)(p.Z),a={...e,label:null!==(n=e.label)&&void 0!==n?n:e.inline||null==l?void 0:l.translation.Forms.bankAccountNumberLabel,prepare:e=>(0,g.WU)((0,g.bR)(e),{ban:!0}).toString()};return(0,o.jsx)(s,{...a})}N._supportsEufemiaSpacingProps=!0;var C={String:s,Number:d,Boolean:f,Currency:v,Date:j,Email:Z,NationalIdentityNumber:P,PhoneNumber:w,BankAccountNumber:N}},49406:function(e,n,l){var a=l(65731),t=l(94799),r=l(72779),o=l.n(r),i=l(27439),s=l(52322);function u(e){const{className:n,label:l,inline:r,placeholder:u,showEmpty:c,children:d}=e;return null!=d&&!1!==d||c||u?(0,s.jsxs)(a.Z,{className:o()("dnb-forms-value",r&&"dnb-forms-value-block--inline",n),...(0,i.SR)(e),children:[l&&(0,s.jsx)(t.Z,{className:"dnb-forms-value-block__label",label_direction:r?"horizontal":"vertical",children:l}),null!=d?d:(0,s.jsx)("span",{className:"dnb-forms-value-block__placeholder",children:u})]}):null}u._supportsEufemiaSpacingProps=!0,n.Z=u},8160:function(e,n,l){l.d(n,{Z:function(){return h}});var a=l(2784),t=l(95955),r=l.n(t),o=l(27439),i=l(34763),s=l(75749),u=l(31270),c=l(38875),d=l(66485);function h(e){const{path:n,elementPath:l,emptyValue:t,required:h,error:p,onFocus:m,onBlur:f,onChange:b,validator:v,onBlurValidator:x,schema:j,errorMessages:E,validateInitially:Z,validateUnchanged:g,toInput:S=(e=>e),fromInput:P=(e=>e)}=e,y=(0,a.useMemo)((()=>{var n;return null!==(n=e.id)&&void 0!==n?n:(0,d.Xo)()}),[e.id]),w=(0,a.useContext)(s.Z.Context),N=(0,a.useContext)(u.Z),C=(0,a.useContext)(c.Z),{handlePathChange:V,setPathWithError:L,errors:W}=null!=w?w:{},_=Boolean(N),{setError:k,setShowError:F}=null!=N?N:{},M=Boolean(C),{index:R,value:I,handleChange:B}=null!=C?C:{};if(n&&"/"!==n.substring(0,1))throw new Error("Invalid path. Data value path JSON Pointers must be from root (starting with a /).");if(l&&"/"!==l.substring(0,1))throw new Error("Invalid elementPath. Element pathJSON Pointers must be from root of iterate element (starting with a /).");if(l&&!C)throw new Error("elementPath cannot be used when not inside an iterate element context. Wrap the component in an Iterate.Loop.");const D=(0,a.useMemo)((()=>void 0!==e.value?e.value:M&&l?"/"===l?I:r().has(I,l)?r().get(I,l):void 0:w.data&&n?"/"===n?w.data:r().has(w.data,n)?r().get(w.data,n):void 0:void 0),[n,l,M,I,e.value,w.data]),{0:$,1:A}=(0,a.useState)(D),T=(0,a.useRef)(!1);(0,a.useEffect)((()=>{A(D)}),[D]);const{0:q,1:O}=(0,a.useState)(),{0:U,1:X}=(0,a.useState)(Boolean(Z||p)),J=(0,a.useMemo)((()=>j&&Object.keys(j).length>0?i.ZP.compile(j):void 0),[j]),z=(0,a.useCallback)((e=>{const l=e instanceof o.Xq&&"string"==typeof e.validationRule&&void 0!==(null==E?void 0:E[e.validationRule])?new o.Xq(E[e.validationRule]):e;O(l),n&&(null==L||L(n,Boolean(e))),null==k||k(null!=n?n:y,l)}),[n,y,E,L,k]),H=(0,a.useCallback)((e=>{if("function"==typeof v&&Promise.resolve(v(e)).then(z),e===t&&h){const e=new o.Xq("The value is required",{validationRule:"required"});return z(e),e}if(J){if(void 0===e&&void 0===t)return void z(void 0);J(e);const n=(0,i.K$)(J.errors);return z(n),n}z(void 0)}),[J,t,h,z,v]);(0,a.useEffect)((()=>{!q&&n&&null!=W&&W[n]&&z(W[n])}),[n,W,q,z]),(0,a.useEffect)((()=>{w.showAllErrors&&(X(!0),null==F||F(null!=n?n:y,!0))}),[y,n,w.showAllErrors,F]);const K=(0,a.useCallback)(((e,l)=>{if(e)null==m||m(null!=l?l:$);else{if(null==f||f(null!=l?l:$),!T.current&&!g)return;"function"==typeof x&&Promise.resolve(x(null!=l?l:$)).then(z),X(!0),null==F||F(null!=n?n:y,!0)}}),[y,n,$,g,m,f,x,z,F]),Y=(0,a.useCallback)((()=>K(!0)),[K]),G=(0,a.useCallback)((()=>K(!1)),[K]),Q=(0,a.useCallback)((e=>{const a=P(e);if(a!==$&&(A(a),T.current=!0,X(!1),null==F||F(null!=n?n:y,!1),H(a),null==b||b(a),n&&(null==V||V(n,a)),l)){null==B||B(`/${R}${l&&"/"!==l?l:""}`,a)}}),[y,n,l,R,$,b,H,V,F,B,P]),ee=(0,a.useMemo)((()=>null!=p?p:q),[p,q]);return(0,a.useEffect)((()=>(n&&(null==w||w.handleMountField(n)),H(D),()=>{n&&(null==w||w.handleUnMountField(n))})),[]),{...e,id:y,value:S($),error:_?void 0:U?ee:void 0,setHasFocus:K,handleFocus:Y,handleBlur:G,handleChange:Q}}}}]);
//# sourceMappingURL=5584bba1e5200d6dcecdfa9795a9033a1f2665fa-8a9e52c415bb054770cf.js.map