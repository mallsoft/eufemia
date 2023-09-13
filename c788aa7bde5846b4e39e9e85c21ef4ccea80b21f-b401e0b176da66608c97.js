"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[86885],{81709:function(e,n,l){l.r(n),l.d(n,{default:function(){return v}});var a={};l.r(a),l.d(a,{Empty:function(){return s},Inline:function(){return p},Label:function(){return d},LabelAndValue:function(){return h},Placeholder:function(){return u},WithValue:function(){return c}});var t=l(52322),o=l(45392),r=l(58901),i=l(55812);const s=()=>(0,t.jsx)(r.Z,{scope:{Value:i.Z},children:"<Value.String showEmpty />\n"}),u=()=>(0,t.jsx)(r.Z,{scope:{Value:i.Z},children:'<Value.String placeholder="The value was not filled in" />\n'}),c=()=>(0,t.jsx)(r.Z,{scope:{Value:i.Z},children:'<Value.String value="Text value" />\n'}),d=()=>(0,t.jsx)(r.Z,{scope:{Value:i.Z},children:'<Value.String label="Label text" showEmpty />\n'}),h=()=>(0,t.jsx)(r.Z,{scope:{Value:i.Z},children:'<Value.String label="Label text" value="Text value" />\n'}),p=()=>(0,t.jsx)(r.Z,{scope:{Value:i.Z},children:'<P>\n  This is before the component\n  <Value.String value="Text value" inline />\n  This is after the component\n</P>\n'});function m(e){const n=Object.assign({h2:"h2",h3:"h3"},(0,o.ah)(),e.components);return a||f("Examples",!1),s||f("Examples.Empty",!0),p||f("Examples.Inline",!0),d||f("Examples.Label",!0),h||f("Examples.LabelAndValue",!0),u||f("Examples.Placeholder",!0),c||f("Examples.WithValue",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Demos"}),"\n",(0,t.jsx)(n.h3,{children:"Empty"}),"\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(n.h3,{children:"Placeholder"}),"\n",(0,t.jsx)(u,{}),"\n",(0,t.jsx)(n.h3,{children:"Value"}),"\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h3,{children:"Label"}),"\n",(0,t.jsx)(d,{}),"\n",(0,t.jsx)(n.h3,{children:"Label and value"}),"\n",(0,t.jsx)(h,{}),"\n",(0,t.jsx)(n.h3,{children:"Inline"}),"\n",(0,t.jsx)(p,{})]})}var v=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(m,e)})):m(e)};function f(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},75749:function(e,n,l){l.d(n,{Z:function(){return d}});var a=l(21068),t=l(40409),o=l(2784),r=l(95955),i=l.n(r),s=l(52322);function u(e){const{path:n="/",iterate:l,children:t}=e,r=(0,o.useContext)(a.Z),{data:u,handlePathChange:c}=r,d=u&&i().has(u,n)?i().get(u,n):void 0,h=(0,o.useMemo)((()=>c?(e,l)=>{c(`${n}${e}`,l)}:void 0),[c,n]);return l?Array.isArray(d)?(0,s.jsx)(s.Fragment,{children:d.map(((e,l)=>{const o=c?(e,a)=>{c(`${n}/${l}${e}`,a)}:void 0;return(0,s.jsx)(a.Z.Provider,{value:{...r,data:e,handlePathChange:o},children:t},`element${l}`)}))}):null:(0,s.jsx)(a.Z.Provider,{value:{...r,data:d,handlePathChange:h},children:t})}u._supportsEufemiaSpacingProps=!0;var c=u;var d={Context:a.Z,Provider:t.Z,At:c}},31270:function(e,n,l){const a=l(2784).createContext(void 0);n.Z=a},38875:function(e,n,l){const a=l(2784).createContext(void 0);n.Z=a},55812:function(e,n,l){l.d(n,{Z:function(){return _}});var a=l(49406),t=l(8160),o=l(27439),r=l(52322);function i(e){const{className:n,label:l,placeholder:i,value:s,inline:u,showEmpty:c,prepare:d=(e=>e)}=(0,t.Z)(e);return(0,r.jsx)(a.Z,{className:n,label:l,showEmpty:c,placeholder:i,inline:u,...(0,o.SR)(e),children:d(s)})}i._supportsEufemiaSpacingProps=!0;var s=i;function u(e,n){const{thousandSeparator:l,decimalLimit:a,fixedDecimals:t,decimalSymbol:o=",",magnitude:r,prefix:i,suffix:s}=null!=n?n:{},u=void 0!==r?e/Math.pow(10,r):e,c=void 0!==t?u.toFixed(t):a?(Math.round(u*Math.pow(10,a))/Math.pow(10,a)).toString():u.toString(),d=void 0!==o?c.replace(".",o):c,h=void 0!==l?d.replace(/\B(?=(\d{3})+(?!\d))/g,l):d,p=void 0!==i?i+h:h;return void 0!==s?p+s:p}function c(e){const{className:n,label:l,placeholder:i,value:s,inline:c,showEmpty:d,thousandSeparator:h,decimalSymbol:p,decimalLimit:m,prefix:v,suffix:f}=(0,t.Z)(e);return(0,r.jsx)(a.Z,{className:n,label:l,showEmpty:d,placeholder:i,inline:c,...(0,o.SR)(e),children:void 0!==s?u(s,{thousandSeparator:!0===h?" ":h,decimalSymbol:p,decimalLimit:m,prefix:v,suffix:f}):null})}c._supportsEufemiaSpacingProps=!0;var d=c,h=l(2784),p=l(32831);function m(e){const n=(0,h.useContext)(p.Z),{className:l,label:i,placeholder:s,showEmpty:u,value:c,inline:d}=(0,t.Z)(e);return(0,r.jsx)(a.Z,{className:l,label:i,showEmpty:u,placeholder:s,inline:d,...(0,o.SR)(e),children:!0===c||!1===c?!0===c?null==n?void 0:n.translation.Forms.booleanYes:null==n?void 0:n.translation.Forms.booleanNo:null})}m._supportsEufemiaSpacingProps=!0;var v=m;function f(e){var n,l;const a={...e,label:e.label,thousandSeparator:null!==(n=e.thousandSeparator)&&void 0!==n?n:" ",suffix:null!==(l=e.suffix)&&void 0!==l?l:" kr"};return(0,r.jsx)(d,{...a})}f._supportsEufemiaSpacingProps=!0;var b=f;function x(e){var n;const l=(0,h.useContext)(p.Z),a={...e,label:null!==(n=e.label)&&void 0!==n?n:null==l?void 0:l.translation.Forms.dateLabel};return(0,r.jsx)(s,{...a})}x._supportsEufemiaSpacingProps=!0;var g=x;function E(e){var n;const l=(0,h.useContext)(p.Z),a={...e,label:null!==(n=e.label)&&void 0!==n?n:null==l?void 0:l.translation.Forms.emailLabel};return(0,r.jsx)(s,{...a})}E._supportsEufemiaSpacingProps=!0;var j=E,S=l(41672);function Z(e){var n;const l=(0,h.useContext)(p.Z),a={...e,label:null!==(n=e.label)&&void 0!==n?n:e.inline||null==l?void 0:l.translation.Forms.nationalIdentityNumberLabel,prepare:e=>(0,S.WU)((0,S.bR)(e),{nin:!0}).toString()};return(0,r.jsx)(s,{...a})}Z._supportsEufemiaSpacingProps=!0;var P=Z;function w(e){var n;const l=(0,h.useContext)(p.Z),a={...e,label:null!==(n=e.label)&&void 0!==n?n:e.inline||null==l?void 0:l.translation.Forms.phoneNumberLabel,prepare:e=>(0,S.WU)((0,S.bR)(e),{phone:!0}).toString()};return(0,r.jsx)(s,{...a})}w._supportsEufemiaSpacingProps=!0;var y=w;function C(e){var n;const l=(0,h.useContext)(p.Z),a={...e,label:null!==(n=e.label)&&void 0!==n?n:e.inline||null==l?void 0:l.translation.Forms.bankAccountNumberLabel,prepare:e=>(0,S.WU)((0,S.bR)(e),{ban:!0}).toString()};return(0,r.jsx)(s,{...a})}C._supportsEufemiaSpacingProps=!0;var _={String:s,Number:d,Boolean:v,Currency:b,Date:g,Email:j,NationalIdentityNumber:P,PhoneNumber:y,BankAccountNumber:C}},49406:function(e,n,l){var a=l(65731),t=l(94799),o=l(72779),r=l.n(o),i=l(27439),s=l(52322);function u(e){const{className:n,label:l,inline:o,placeholder:u,showEmpty:c,children:d}=e;return null!=d&&!1!==d||c||u?(0,s.jsxs)(a.Z,{className:r()("dnb-forms-value",o&&"dnb-forms-value-block--inline",n),...(0,i.SR)(e),children:[l&&(0,s.jsx)(t.Z,{className:"dnb-forms-value-block__label",label_direction:o?"horizontal":"vertical",children:l}),null!=d?d:(0,s.jsx)("span",{className:"dnb-forms-value-block__placeholder",children:u})]}):null}u._supportsEufemiaSpacingProps=!0,n.Z=u},8160:function(e,n,l){l.d(n,{Z:function(){return h}});var a=l(2784),t=l(95955),o=l.n(t),r=l(27439),i=l(34763),s=l(75749),u=l(31270),c=l(38875),d=l(66485);function h(e){const{path:n,elementPath:l,emptyValue:t,required:h,error:p,onFocus:m,onBlur:v,onChange:f,validator:b,onBlurValidator:x,schema:g,errorMessages:E,validateInitially:j,validateUnchanged:S,toInput:Z=(e=>e),fromInput:P=(e=>e)}=e,w=(0,a.useMemo)((()=>{var n;return null!==(n=e.id)&&void 0!==n?n:(0,d.Xo)()}),[e.id]),y=(0,a.useContext)(s.Z.Context),C=(0,a.useContext)(u.Z),_=(0,a.useContext)(c.Z),{handlePathChange:N,setPathWithError:V,errors:k}=null!=y?y:{},L=Boolean(C),{setError:F,setShowError:M}=null!=C?C:{},R=Boolean(_),{index:I,value:B,handleChange:A}=null!=_?_:{};if(n&&"/"!==n.substring(0,1))throw new Error("Invalid path. Data value path JSON Pointers must be from root (starting with a /).");if(l&&"/"!==l.substring(0,1))throw new Error("Invalid elementPath. Element pathJSON Pointers must be from root of iterate element (starting with a /).");if(l&&!_)throw new Error("elementPath cannot be used when not inside an iterate element context. Wrap the component in an Iterate.Loop.");const $=(0,a.useMemo)((()=>void 0!==e.value?e.value:R&&l?"/"===l?B:o().has(B,l)?o().get(B,l):void 0:y.data&&n?"/"===n?y.data:o().has(y.data,n)?o().get(y.data,n):void 0:void 0),[n,l,R,B,e.value,y.data]),{0:T,1:W}=(0,a.useState)($),q=(0,a.useRef)(!1);(0,a.useEffect)((()=>{W($)}),[$]);const{0:O,1:U}=(0,a.useState)(),{0:D,1:X}=(0,a.useState)(Boolean(j||p)),J=(0,a.useMemo)((()=>g&&Object.keys(g).length>0?i.ZP.compile(g):void 0),[g]),z=(0,a.useCallback)((e=>{const l=e instanceof r.Xq&&"string"==typeof e.validationRule&&void 0!==(null==E?void 0:E[e.validationRule])?new r.Xq(E[e.validationRule]):e;U(l),n&&(null==V||V(n,Boolean(e))),null==F||F(null!=n?n:w,l)}),[n,w,E,V,F]),H=(0,a.useCallback)((e=>{if("function"==typeof b&&Promise.resolve(b(e)).then(z),e===t&&h){const e=new r.Xq("The value is required",{validationRule:"required"});return z(e),e}if(J){if(void 0===e&&void 0===t)return void z(void 0);J(e);const n=(0,i.K$)(J.errors);return z(n),n}z(void 0)}),[J,t,h,z,b]);(0,a.useEffect)((()=>{!O&&n&&null!=k&&k[n]&&z(k[n])}),[n,k,O,z]),(0,a.useEffect)((()=>{y.showAllErrors&&(X(!0),null==M||M(null!=n?n:w,!0))}),[w,n,y.showAllErrors,M]);const K=(0,a.useCallback)(((e,l)=>{if(e)null==m||m(null!=l?l:T);else{if(null==v||v(null!=l?l:T),!q.current&&!S)return;"function"==typeof x&&Promise.resolve(x(null!=l?l:T)).then(z),X(!0),null==M||M(null!=n?n:w,!0)}}),[w,n,T,S,m,v,x,z,M]),Y=(0,a.useCallback)((()=>K(!0)),[K]),G=(0,a.useCallback)((()=>K(!1)),[K]),Q=(0,a.useCallback)((e=>{const a=P(e);if(a!==T&&(W(a),q.current=!0,X(!1),null==M||M(null!=n?n:w,!1),H(a),null==f||f(a),n&&(null==N||N(n,a)),l)){null==A||A(`/${I}${l&&"/"!==l?l:""}`,a)}}),[w,n,l,I,T,f,H,N,M,A,P]),ee=(0,a.useMemo)((()=>null!=p?p:O),[p,O]);return(0,a.useEffect)((()=>(n&&(null==y||y.handleMountField(n)),H($),()=>{n&&(null==y||y.handleUnMountField(n))})),[]),{...e,id:w,value:Z(T),error:L?void 0:D?ee:void 0,setHasFocus:K,handleFocus:Y,handleBlur:G,handleChange:Q}}}}]);
//# sourceMappingURL=c788aa7bde5846b4e39e9e85c21ef4ccea80b21f-b401e0b176da66608c97.js.map