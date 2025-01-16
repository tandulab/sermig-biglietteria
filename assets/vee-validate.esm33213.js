import{d as Fn,D as Re,E as wn,G as Pn,c as M,H as C,I as E,o as an,J as un,K as _e,i as oe,L as In,p as X,M as je,N as fe,O as Mn,P as Cn,Q as Nn,R as Ie,S as Tn}from"../index33213.js";/**
  * vee-validate v4.11.8
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function G(e){return typeof e=="function"}function on(e){return e==null}const me=e=>e!==null&&!!e&&typeof e=="object"&&!Array.isArray(e);function xe(e){return Number(e)>=0}function kn(e){const n=parseFloat(e);return isNaN(n)?e:n}function Rn(e){return typeof e=="object"&&e!==null}function Un(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function Bn(e){if(!Rn(e)||Un(e)!=="[object Object]")return!1;if(Object.getPrototypeOf(e)===null)return!0;let n=e;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n}function Fe(e,n){return Object.keys(n).forEach(t=>{if(Bn(n[t])){e[t]||(e[t]={}),Fe(e[t],n[t]);return}e[t]=n[t]}),e}function Se(e){const n=e.split(".");if(!n.length)return"";let t=String(n[0]);for(let i=1;i<n.length;i++){if(xe(n[i])){t+=`[${n[i]}]`;continue}t+=`.${n[i]}`}return t}const Dn={};function zn(e){return Dn[e]}function Qe(e,n,t){typeof t.value=="object"&&(t.value=w(t.value)),!t.enumerable||t.get||t.set||!t.configurable||!t.writable||n==="__proto__"?Object.defineProperty(e,n,t):e[n]=t.value}function w(e){if(typeof e!="object")return e;var n=0,t,i,a,u=Object.prototype.toString.call(e);if(u==="[object Object]"?a=Object.create(e.__proto__||null):u==="[object Array]"?a=Array(e.length):u==="[object Set]"?(a=new Set,e.forEach(function(d){a.add(w(d))})):u==="[object Map]"?(a=new Map,e.forEach(function(d,m){a.set(w(m),w(d))})):u==="[object Date]"?a=new Date(+e):u==="[object RegExp]"?a=new RegExp(e.source,e.flags):u==="[object DataView]"?a=new e.constructor(w(e.buffer)):u==="[object ArrayBuffer]"?a=e.slice(0):u.slice(-6)==="Array]"&&(a=new e.constructor(e)),a){for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)Qe(a,i[n],Object.getOwnPropertyDescriptor(e,i[n]));for(n=0,i=Object.getOwnPropertyNames(e);n<i.length;n++)Object.hasOwnProperty.call(a,t=i[n])&&a[t]===e[t]||Qe(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}const Ge=Symbol("vee-validate-form"),Ln=Symbol("vee-validate-field-instance"),Xe=Symbol("Default empty value"),$n=typeof window<"u";function De(e){return G(e)&&!!e.__locatorRef}function se(e){return!!e&&G(e.parse)&&e.__type==="VVTypedSchema"}function we(e){return!!e&&G(e.validate)}function sn(e){return e==="checkbox"||e==="radio"}function xn(e){return me(e)||Array.isArray(e)}function Gn(e){return Array.isArray(e)?e.length===0:me(e)&&Object.keys(e).length===0}function Me(e){return/^\[.+\]$/i.test(e)}function Hn(e){return dn(e)&&e.multiple}function dn(e){return e.tagName==="SELECT"}function cn(e){return He(e)&&e.target&&"submit"in e.target}function He(e){return e?!!(typeof Event<"u"&&G(Event)&&e instanceof Event||e&&e.srcElement):!1}function D(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var t,i,a;if(Array.isArray(e)){if(t=e.length,t!=n.length)return!1;for(i=t;i--!==0;)if(!D(e[i],n[i]))return!1;return!0}if(e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(i of e.entries())if(!n.has(i[0]))return!1;for(i of e.entries())if(!D(i[1],n.get(i[0])))return!1;return!0}if(Ze(e)&&Ze(n))return!(e.size!==n.size||e.name!==n.name||e.lastModified!==n.lastModified||e.type!==n.type);if(e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(i of e.entries())if(!n.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if(t=e.length,t!=n.length)return!1;for(i=t;i--!==0;)if(e[i]!==n[i])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();for(a=Object.keys(e),t=a.length,i=t;i--!==0;){var u=a[i];if(!D(e[u],n[u]))return!1}return!0}return e!==e&&n!==n}function Ze(e){return $n?e instanceof File:!1}function We(e){return Me(e)?e.replace(/\[|\]/gi,""):e}function L(e,n,t){return e?Me(n)?e[We(n)]:(n||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((a,u)=>xn(a)&&u in a?a[u]:t,e):t}function ve(e,n,t){if(Me(n)){e[We(n)]=t;return}const i=n.split(/\.|\[(\d+)\]/).filter(Boolean);let a=e;for(let u=0;u<i.length;u++){if(u===i.length-1){a[i[u]]=t;return}(!(i[u]in a)||on(a[i[u]]))&&(a[i[u]]=xe(i[u+1])?[]:{}),a=a[i[u]]}}function Ue(e,n){if(Array.isArray(e)&&xe(n)){e.splice(Number(n),1);return}me(e)&&delete e[n]}function en(e,n){if(Me(n)){delete e[We(n)];return}const t=n.split(/\.|\[(\d+)\]/).filter(Boolean);let i=e;for(let u=0;u<t.length;u++){if(u===t.length-1){Ue(i,t[u]);break}if(!(t[u]in i)||on(i[t[u]]))break;i=i[t[u]]}const a=t.map((u,d)=>L(e,t.slice(0,d).join(".")));for(let u=a.length-1;u>=0;u--)if(Gn(a[u])){if(u===0){Ue(e,t[0]);continue}Ue(a[u-1],t[u-1])}}function Y(e){return Object.keys(e)}function fn(e,n=void 0){const t=Ie();return(t==null?void 0:t.provides[e])||Nn(e,n)}function nn(e,n,t){if(Array.isArray(e)){const i=[...e],a=i.findIndex(u=>D(u,n));return a>=0?i.splice(a,1):i.push(n),i}return D(e,n)?t:n}function tn(e,n=0){let t=null,i=[];return function(...a){return t&&clearTimeout(t),t=setTimeout(()=>{const u=e(...a);i.forEach(d=>d(u)),i=[]},n),new Promise(u=>i.push(u))}}function Wn(e,n){return me(n)&&n.number?kn(e):e}function ze(e,n){let t;return async function(...a){const u=e(...a);t=u;const d=await u;return u!==t||(t=void 0,n(d,a)),d}}function Le(e){return Array.isArray(e)?e:e?[e]:[]}function pe(e,n){const t={};for(const i in e)n.includes(i)||(t[i]=e[i]);return t}function Kn(e){let n=null,t=[];return function(...i){const a=fe(()=>{if(n!==a)return;const u=e(...i);t.forEach(d=>d(u)),t=[],n=null});return n=a,new Promise(u=>t.push(u))}}function Yn(e,n,t){return n.slots.default?typeof e=="string"||!e?n.slots.default(t()):{default:()=>{var i,a;return(a=(i=n.slots).default)===null||a===void 0?void 0:a.call(i,t())}}:n.slots.default}function Be(e){if(vn(e))return e._value}function vn(e){return"_value"in e}function qn(e){return e.type==="number"||e.type==="range"?Number.isNaN(e.valueAsNumber)?e.value:e.valueAsNumber:e.value}function Pe(e){if(!He(e))return e;const n=e.target;if(sn(n.type)&&vn(n))return Be(n);if(n.type==="file"&&n.files){const t=Array.from(n.files);return n.multiple?t:t[0]}if(Hn(n))return Array.from(n.options).filter(t=>t.selected&&!t.disabled).map(Be);if(dn(n)){const t=Array.from(n.options).find(i=>i.selected);return t?Be(t):n.value}return qn(n)}function mn(e){const n={};return Object.defineProperty(n,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?me(e)&&e._$$isNormalized?e:me(e)?Object.keys(e).reduce((t,i)=>{const a=Jn(e[i]);return e[i]!==!1&&(t[i]=rn(a)),t},n):typeof e!="string"?n:e.split("|").reduce((t,i)=>{const a=Qn(i);return a.name&&(t[a.name]=rn(a.params)),t},n):n}function Jn(e){return e===!0?[]:Array.isArray(e)||me(e)?e:[e]}function rn(e){const n=t=>typeof t=="string"&&t[0]==="@"?Xn(t.slice(1)):t;return Array.isArray(e)?e.map(n):e instanceof RegExp?[e]:Object.keys(e).reduce((t,i)=>(t[i]=n(e[i]),t),{})}const Qn=e=>{let n=[];const t=e.split(":")[0];return e.includes(":")&&(n=e.split(":").slice(1).join(":").split(",")),{name:t,params:n}};function Xn(e){const n=t=>L(t,e)||t[e];return n.__locatorRef=e,n}function Zn(e){return Array.isArray(e)?e.filter(De):Y(e).filter(n=>De(e[n])).map(n=>e[n])}const et={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let nt=Object.assign({},et);const be=()=>nt;async function hn(e,n,t={}){const i=t==null?void 0:t.bails,a={name:(t==null?void 0:t.name)||"{field}",rules:n,label:t==null?void 0:t.label,bails:i??!0,formData:(t==null?void 0:t.values)||{}},d=(await tt(a,e)).errors;return{errors:d,valid:!d.length}}async function tt(e,n){if(se(e.rules)||we(e.rules))return it(n,e.rules);if(G(e.rules)||Array.isArray(e.rules)){const d={field:e.label||e.name,name:e.name,label:e.label,form:e.formData,value:n},m=Array.isArray(e.rules)?e.rules:[e.rules],s=m.length,c=[];for(let b=0;b<s;b++){const O=m[b],S=await O(n,d);if(!(typeof S!="string"&&!Array.isArray(S)&&S)){if(Array.isArray(S))c.push(...S);else{const N=typeof S=="string"?S:gn(d);c.push(N)}if(e.bails)return{errors:c}}}return{errors:c}}const t=Object.assign(Object.assign({},e),{rules:mn(e.rules)}),i=[],a=Object.keys(t.rules),u=a.length;for(let d=0;d<u;d++){const m=a[d],s=await lt(t,n,{name:m,params:t.rules[m]});if(s.error&&(i.push(s.error),e.bails))return{errors:i}}return{errors:i}}function rt(e){return!!e&&e.name==="ValidationError"}function yn(e){return{__type:"VVTypedSchema",async parse(t){var i;try{return{output:await e.validate(t,{abortEarly:!1}),errors:[]}}catch(a){if(!rt(a))throw a;if(!(!((i=a.inner)===null||i===void 0)&&i.length)&&a.errors.length)return{errors:[{path:a.path,errors:a.errors}]};const u=a.inner.reduce((d,m)=>{const s=m.path||"";return d[s]||(d[s]={errors:[],path:s}),d[s].errors.push(...m.errors),d},{});return{errors:Object.values(u)}}}}}async function it(e,n){const i=await(se(n)?n:yn(n)).parse(e),a=[];for(const u of i.errors)u.errors.length&&a.push(...u.errors);return{errors:a}}async function lt(e,n,t){const i=zn(t.name);if(!i)throw new Error(`No such validator '${t.name}' exists.`);const a=at(t.params,e.formData),u={field:e.label||e.name,name:e.name,label:e.label,value:n,form:e.formData,rule:Object.assign(Object.assign({},t),{params:a})},d=await i(n,a,u);return typeof d=="string"?{error:d}:{error:d?void 0:gn(u)}}function gn(e){const n=be().generateMessage;return n?n(e):"Field is invalid"}function at(e,n){const t=i=>De(i)?i(n):i;return Array.isArray(e)?e.map(t):Object.keys(e).reduce((i,a)=>(i[a]=t(e[a]),i),{})}async function ut(e,n){const i=await(se(e)?e:yn(e)).parse(w(n)),a={},u={};for(const d of i.errors){const m=d.errors,s=(d.path||"").replace(/\["(\d+)"\]/g,(c,b)=>`[${b}]`);a[s]={valid:!m.length,errors:m},m.length&&(u[s]=m[0])}return{valid:!i.errors.length,results:a,errors:u,values:i.value}}async function ot(e,n,t){const a=Y(e).map(async c=>{var b,O,S;const V=(b=t==null?void 0:t.names)===null||b===void 0?void 0:b[c],N=await hn(L(n,c),e[c],{name:(V==null?void 0:V.name)||c,label:V==null?void 0:V.label,values:n,bails:(S=(O=t==null?void 0:t.bailsMap)===null||O===void 0?void 0:O[c])!==null&&S!==void 0?S:!0});return Object.assign(Object.assign({},N),{path:c})});let u=!0;const d=await Promise.all(a),m={},s={};for(const c of d)m[c.path]={valid:c.valid,errors:c.errors},c.valid||(u=!1,s[c.path]=c.errors[0]);return{valid:u,results:m,errors:s}}let ln=0;function st(e,n){const{value:t,initialValue:i,setInitialValue:a}=dt(e,n.modelValue,n.form);if(!n.form){let S=function(V){var N;"value"in V&&(t.value=V.value),"errors"in V&&c(V.errors),"touched"in V&&(O.touched=(N=V.touched)!==null&&N!==void 0?N:O.touched),"initialValue"in V&&a(V.initialValue)};const{errors:s,setErrors:c}=vt(),b=ln>=Number.MAX_SAFE_INTEGER?0:++ln,O=ft(t,i,s);return{id:b,path:e,value:t,initialValue:i,meta:O,flags:{pendingUnmount:{[b]:!1},pendingReset:!1},errors:s,setState:S}}const u=n.form.createPathState(e,{bails:n.bails,label:n.label,type:n.type,validate:n.validate}),d=M(()=>u.errors);function m(s){var c,b,O;"value"in s&&(t.value=s.value),"errors"in s&&((c=n.form)===null||c===void 0||c.setFieldError(E(e),s.errors)),"touched"in s&&((b=n.form)===null||b===void 0||b.setFieldTouched(E(e),(O=s.touched)!==null&&O!==void 0?O:!1)),"initialValue"in s&&a(s.initialValue)}return{id:Array.isArray(u.id)?u.id[u.id.length-1]:u.id,path:e,value:t,errors:d,meta:u,initialValue:i,flags:u.__flags,setState:m}}function dt(e,n,t){const i=X(E(n));function a(){return t?L(t.initialValues.value,E(e),E(i)):E(i)}function u(c){if(!t){i.value=c;return}t.stageInitialValue(E(e),c,!0)}const d=M(a);if(!t)return{value:X(a()),initialValue:d,setInitialValue:u};const m=ct(n,t,d,e);return t.stageInitialValue(E(e),m,!0),{value:M({get(){return L(t.values,E(e))},set(c){t.setFieldValue(E(e),c,!1)}}),initialValue:d,setInitialValue:u}}function ct(e,n,t,i){return _e(e)?E(e):e!==void 0?e:L(n.values,E(i),E(t))}function ft(e,n,t){const i=je({touched:!1,pending:!1,valid:!0,validated:!!E(t).length,initialValue:M(()=>E(n)),dirty:M(()=>!D(E(e),E(n)))});return oe(t,a=>{i.valid=!a.length},{immediate:!0,flush:"sync"}),i}function vt(){const e=X([]);return{errors:e,setErrors:n=>{e.value=Le(n)}}}function _t(e,n,t){return sn(t==null?void 0:t.type)?ht(e,n,t):bn(e,n,t)}function bn(e,n,t){const{initialValue:i,validateOnMount:a,bails:u,type:d,checkedValue:m,label:s,validateOnValueUpdate:c,uncheckedValue:b,controlled:O,keepValueOnUnmount:S,syncVModel:V,form:N}=mt(t),q=O?fn(Ge):void 0,p=N||q,z=M(()=>Se(C(e))),U=M(()=>{if(C(p==null?void 0:p.schema))return;const y=E(n);return we(y)||se(y)||G(y)||Array.isArray(y)?y:mn(y)}),{id:ne,value:te,initialValue:Z,meta:T,setState:re,errors:de,flags:ee}=st(z,{modelValue:i,form:p,bails:u,label:s,type:d,validate:U.value?W:void 0}),$=M(()=>de.value[0]);V&&yt({value:te,prop:V,handleChange:k,shouldValidate:()=>c&&!ee.pendingReset});const ie=(v,y=!1)=>{T.touched=!0,y&&J()};async function he(v){var y,j;return p!=null&&p.validateSchema?(y=(await p.validateSchema(v)).results[C(z)])!==null&&y!==void 0?y:{valid:!0,errors:[]}:U.value?hn(te.value,U.value,{name:C(z),label:C(s),values:(j=p==null?void 0:p.values)!==null&&j!==void 0?j:{},bails:u}):{valid:!0,errors:[]}}const J=ze(async()=>(T.pending=!0,T.validated=!0,he("validated-only")),v=>{if(!ee.pendingUnmount[B.id])return re({errors:v.errors}),T.pending=!1,T.valid=v.valid,v}),H=ze(async()=>he("silent"),v=>(T.valid=v.valid,v));function W(v){return(v==null?void 0:v.mode)==="silent"?H():J()}function k(v,y=!0){const j=Pe(v);ye(j,y)}an(()=>{if(a)return J();(!p||!p.validateSchema)&&H()});function K(v){T.touched=v}function R(v){var y;const j=v&&"value"in v?v.value:Z.value;re({value:w(j),initialValue:w(j),touched:(y=v==null?void 0:v.touched)!==null&&y!==void 0?y:!1,errors:(v==null?void 0:v.errors)||[]}),T.pending=!1,T.validated=!1,H()}const Q=Ie();function ye(v,y=!0){te.value=Q&&V?Wn(v,Q.props.modelModifiers):v,(y?J:H)()}function Ae(v){re({errors:Array.isArray(v)?v:[v]})}const Ke=M({get(){return te.value},set(v){ye(v,c)}}),B={id:ne,name:z,label:s,value:Ke,meta:T,errors:de,errorMessage:$,type:d,checkedValue:m,uncheckedValue:b,bails:u,keepValueOnUnmount:S,resetField:R,handleReset:()=>R(),validate:W,handleChange:k,handleBlur:ie,setState:re,setTouched:K,setErrors:Ae,setValue:ye};if(un(Ln,B),_e(n)&&typeof E(n)!="function"&&oe(n,(v,y)=>{D(v,y)||(T.validated?J():H())},{deep:!0}),!p)return B;const Ce=M(()=>{const v=U.value;return!v||G(v)||we(v)||se(v)||Array.isArray(v)?{}:Object.keys(v).reduce((y,j)=>{const P=Zn(v[j]).map(le=>le.__locatorRef).reduce((le,ae)=>{const ue=L(p.values,ae)||p.values[ae];return ue!==void 0&&(le[ae]=ue),le},{});return Object.assign(y,P),y},{})});return oe(Ce,(v,y)=>{if(!Object.keys(v).length)return;!D(v,y)&&(T.validated?J():H())}),In(()=>{var v;const y=(v=C(B.keepValueOnUnmount))!==null&&v!==void 0?v:C(p.keepValuesOnUnmount),j=C(z);if(y||!p||ee.pendingUnmount[B.id]){p==null||p.removePathState(j,ne);return}ee.pendingUnmount[B.id]=!0;const P=p.getPathState(j);if(Array.isArray(P==null?void 0:P.id)&&(P!=null&&P.multiple)?P!=null&&P.id.includes(B.id):(P==null?void 0:P.id)===B.id){if(P!=null&&P.multiple&&Array.isArray(P.value)){const ae=P.value.findIndex(ue=>D(ue,C(B.checkedValue)));if(ae>-1){const ue=[...P.value];ue.splice(ae,1),p.setFieldValue(j,ue)}Array.isArray(P.id)&&P.id.splice(P.id.indexOf(B.id),1)}else p.unsetPathValue(C(z));p.removePathState(j,ne)}}),B}function mt(e){const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:void 0,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,syncVModel:!1,controlled:!0}),t=!!(e!=null&&e.syncVModel),i=typeof(e==null?void 0:e.syncVModel)=="string"?e.syncVModel:(e==null?void 0:e.modelPropName)||"modelValue",a=t&&!("initialValue"in(e||{}))?$e(Ie(),i):e==null?void 0:e.initialValue;if(!e)return Object.assign(Object.assign({},n()),{initialValue:a});const u="valueProp"in e?e.valueProp:e.checkedValue,d="standalone"in e?!e.standalone:e.controlled,m=(e==null?void 0:e.modelPropName)||(e==null?void 0:e.syncVModel)||!1;return Object.assign(Object.assign(Object.assign({},n()),e||{}),{initialValue:a,controlled:d??!0,checkedValue:u,syncVModel:m})}function ht(e,n,t){const i=t!=null&&t.standalone?void 0:fn(Ge),a=t==null?void 0:t.checkedValue,u=t==null?void 0:t.uncheckedValue;function d(m){const s=m.handleChange,c=M(()=>{const O=C(m.value),S=C(a);return Array.isArray(O)?O.findIndex(V=>D(V,S))>=0:D(S,O)});function b(O,S=!0){var V,N;if(c.value===((V=O==null?void 0:O.target)===null||V===void 0?void 0:V.checked)){S&&m.validate();return}const q=C(e),p=i==null?void 0:i.getPathState(q),z=Pe(O);let U=(N=C(a))!==null&&N!==void 0?N:z;i&&(p!=null&&p.multiple)&&p.type==="checkbox"?U=nn(L(i.values,q)||[],U,void 0):(t==null?void 0:t.type)==="checkbox"&&(U=nn(C(m.value),U,C(u))),s(U,S)}return Object.assign(Object.assign({},m),{checked:c,checkedValue:a,uncheckedValue:u,handleChange:b})}return d(bn(e,n,t))}function yt({prop:e,value:n,handleChange:t,shouldValidate:i}){const a=Ie();if(!a||!e)return;const u=typeof e=="string"?e:"modelValue",d=`update:${u}`;u in a.props&&(oe(n,m=>{D(m,$e(a,u))||a.emit(d,m)}),oe(()=>$e(a,u),m=>{if(m===Xe&&n.value===void 0)return;const s=m===Xe?void 0:m;D(s,n.value)||t(s,i())}))}function $e(e,n){if(e)return e.props[n]}let gt=0;const Oe=["bails","fieldsCount","id","multiple","type","validate"];function Vn(e){const n=E(e==null?void 0:e.initialValues)||{},t=E(e==null?void 0:e.validationSchema);return t&&se(t)&&G(t.cast)?w(t.cast(n)||{}):w(n)}function bt(e){var n;const t=gt++;let i=0;const a=X(!1),u=X(!1),d=X(0),m=[],s=je(Vn(e)),c=X([]),b=X({}),O=X({}),S=Kn(()=>{O.value=c.value.reduce((l,r)=>(l[Se(C(r.path))]=r,l),{})});function V(l,r){const o=k(l);if(!o){typeof l=="string"&&(b.value[Se(l)]=Le(r));return}if(typeof l=="string"){const f=Se(l);b.value[f]&&delete b.value[f]}o.errors=Le(r),o.valid=!o.errors.length}function N(l){Y(l).forEach(r=>{V(r,l[r])})}e!=null&&e.initialErrors&&N(e.initialErrors);const q=M(()=>{const l=c.value.reduce((r,o)=>(o.errors.length&&(r[o.path]=o.errors),r),{});return Object.assign(Object.assign({},b.value),l)}),p=M(()=>Y(q.value).reduce((l,r)=>{const o=q.value[r];return o!=null&&o.length&&(l[r]=o[0]),l},{})),z=M(()=>c.value.reduce((l,r)=>(l[r.path]={name:r.path||"",label:r.label||""},l),{})),U=M(()=>c.value.reduce((l,r)=>{var o;return l[r.path]=(o=r.bails)!==null&&o!==void 0?o:!0,l},{})),ne=Object.assign({},(e==null?void 0:e.initialErrors)||{}),te=(n=e==null?void 0:e.keepValuesOnUnmount)!==null&&n!==void 0?n:!1,{initialValues:Z,originalInitialValues:T,setInitialValues:re}=pt(c,s,e),de=Vt(c,s,T,p),ee=M(()=>c.value.reduce((l,r)=>{const o=L(s,r.path);return ve(l,r.path,o),l},{})),$=e==null?void 0:e.validationSchema;function ie(l,r){var o,f;const h=M(()=>L(Z.value,C(l))),g=O.value[C(l)];if(g){((r==null?void 0:r.type)==="checkbox"||(r==null?void 0:r.type)==="radio")&&(g.multiple=!0);const x=i++;return Array.isArray(g.id)?g.id.push(x):g.id=[g.id,x],g.fieldsCount++,g.__flags.pendingUnmount[x]=!1,g}const _=M(()=>L(s,C(l))),I=C(l),A=i++,F=je({id:A,path:l,touched:!1,pending:!1,valid:!0,validated:!!(!((o=ne[I])===null||o===void 0)&&o.length),initialValue:h,errors:Tn([]),bails:(f=r==null?void 0:r.bails)!==null&&f!==void 0?f:!1,label:r==null?void 0:r.label,type:(r==null?void 0:r.type)||"default",value:_,multiple:!1,__flags:{pendingUnmount:{[A]:!1},pendingReset:!1},fieldsCount:1,validate:r==null?void 0:r.validate,dirty:M(()=>!D(E(_),E(h)))});return c.value.push(F),O.value[I]=F,S(),p.value[I]&&!ne[I]&&fe(()=>{ce(I,{mode:"silent"})}),_e(l)&&oe(l,x=>{S();const Ve=w(_.value);O.value[x]=F,fe(()=>{ve(s,x,Ve)})}),F}const he=tn(Je,5),J=tn(Je,5),H=ze(async l=>await l==="silent"?he():J(),(l,[r])=>{const o=Y(y.errorBag.value);return[...new Set([...Y(l.results),...c.value.map(h=>h.path),...o])].sort().reduce((h,g)=>{const _=g,I=k(_)||K(_),A=(l.results[_]||{errors:[]}).errors,F={errors:A,valid:!A.length};return h.results[_]=F,F.valid||(h.errors[_]=F.errors[0]),I&&b.value[_]&&delete b.value[_],I?(I.valid=F.valid,r==="silent"||r==="validated-only"&&!I.validated||V(I,F.errors),h):(V(_,A),h)},{valid:l.valid,results:{},errors:{}})});function W(l){c.value.forEach(l)}function k(l){const r=typeof l=="string"?Se(l):l;return typeof r=="string"?O.value[r]:r}function K(l){return c.value.filter(o=>l.startsWith(o.path)).reduce((o,f)=>o?f.path.length>o.path.length?f:o:f,void 0)}let R=[],Q;function ye(l){return R.push(l),Q||(Q=fe(()=>{[...R].sort().reverse().forEach(o=>{en(s,o)}),R=[],Q=null})),Q}function Ae(l){return function(o,f){return function(g){return g instanceof Event&&(g.preventDefault(),g.stopPropagation()),W(_=>_.touched=!0),a.value=!0,d.value++,ge().then(_=>{const I=w(s);if(_.valid&&typeof o=="function"){const A=w(ee.value);let F=l?A:I;return _.values&&(F=_.values),o(F,{evt:g,controlledValues:A,setErrors:N,setFieldError:V,setTouched:Ne,setFieldTouched:Ee,setValues:le,setFieldValue:j,resetForm:Te,resetField:Ye})}!_.valid&&typeof f=="function"&&f({values:I,evt:g,errors:_.errors,results:_.results})}).then(_=>(a.value=!1,_),_=>{throw a.value=!1,_})}}}const B=Ae(!1);B.withControlled=Ae(!0);function Ce(l,r){const o=c.value.findIndex(h=>h.path===l),f=c.value[o];if(!(o===-1||!f)){if(fe(()=>{ce(l,{mode:"silent",warn:!1})}),f.multiple&&f.fieldsCount&&f.fieldsCount--,Array.isArray(f.id)){const h=f.id.indexOf(r);h>=0&&f.id.splice(h,1),delete f.__flags.pendingUnmount[r]}(!f.multiple||f.fieldsCount<=0)&&(c.value.splice(o,1),qe(l),S(),delete O.value[l])}}function v(l){return W(r=>{r.path.startsWith(l)&&Y(r.__flags.pendingUnmount).forEach(o=>{r.__flags.pendingUnmount[o]=!0})})}const y={formId:t,values:s,controlledValues:ee,errorBag:q,errors:p,schema:$,submitCount:d,meta:de,isSubmitting:a,isValidating:u,fieldArrays:m,keepValuesOnUnmount:te,validateSchema:E($)?H:void 0,validate:ge,setFieldError:V,validateField:ce,setFieldValue:j,setValues:le,setErrors:N,setFieldTouched:Ee,setTouched:Ne,resetForm:Te,resetField:Ye,handleSubmit:B,stageInitialValue:_n,unsetInitialValue:qe,setFieldInitialValue:ke,useFieldModel:ue,createPathState:ie,getPathState:k,unsetPathValue:ye,removePathState:Ce,initialValues:Z,getAllPathStates:()=>c.value,markForUnmount:v,isFieldTouched:pn,isFieldDirty:On,isFieldValid:Sn};function j(l,r,o=!0){const f=w(r),h=typeof l=="string"?l:l.path;k(h)||ie(h),ve(s,h,f),o&&ce(h)}function P(l,r=!0){Y(s).forEach(o=>{delete s[o]}),Y(l).forEach(o=>{j(o,l[o],!1)}),r&&ge()}function le(l,r=!0){Fe(s,l),m.forEach(o=>o&&o.reset()),r&&ge()}function ae(l){const r=k(E(l))||ie(l);return M({get(){return r.value},set(o){const f=E(l);j(f,o,!1),r.validated=!0,r.pending=!0,ce(f).then(()=>{r.pending=!1})}})}function ue(l){return Array.isArray(l)?l.map(ae):ae(l)}function Ee(l,r){const o=k(l);o&&(o.touched=r)}function pn(l){var r;return!!(!((r=k(l))===null||r===void 0)&&r.touched)}function On(l){var r;return!!(!((r=k(l))===null||r===void 0)&&r.dirty)}function Sn(l){var r;return!!(!((r=k(l))===null||r===void 0)&&r.valid)}function Ne(l){if(typeof l=="boolean"){W(r=>{r.touched=l});return}Y(l).forEach(r=>{Ee(r,!!l[r])})}function Ye(l,r){var o;const f=r&&"value"in r?r.value:L(Z.value,l),h=k(l);h&&(h.__flags.pendingReset=!0),ke(l,w(f)),j(l,f,!1),Ee(l,(o=r==null?void 0:r.touched)!==null&&o!==void 0?o:!1),V(l,(r==null?void 0:r.errors)||[]),fe(()=>{h&&(h.__flags.pendingReset=!1)})}function Te(l,r){let o=l!=null&&l.values?l.values:T.value;o=se($)&&G($.cast)?$.cast(o):o,re(o),W(f=>{var h;f.__flags.pendingReset=!0,f.validated=!1,f.touched=((h=l==null?void 0:l.touched)===null||h===void 0?void 0:h[f.path])||!1,j(f.path,L(o,f.path),!1),V(f.path,void 0)}),r!=null&&r.force?P(o,!1):le(o,!1),N((l==null?void 0:l.errors)||{}),d.value=(l==null?void 0:l.submitCount)||0,fe(()=>{ge({mode:"silent"}),W(f=>{f.__flags.pendingReset=!1})})}async function ge(l){const r=(l==null?void 0:l.mode)||"force";if(r==="force"&&W(g=>g.validated=!0),y.validateSchema)return y.validateSchema(r);u.value=!0;const o=await Promise.all(c.value.map(g=>g.validate?g.validate(l).then(_=>({key:g.path,valid:_.valid,errors:_.errors})):Promise.resolve({key:g.path,valid:!0,errors:[]})));u.value=!1;const f={},h={};for(const g of o)f[g.key]={valid:g.valid,errors:g.errors},g.errors.length&&(h[g.key]=g.errors[0]);return{valid:o.every(g=>g.valid),results:f,errors:h}}async function ce(l,r){var o;const f=k(l);if(f&&(r==null?void 0:r.mode)!=="silent"&&(f.validated=!0),$){const{results:h}=await H((r==null?void 0:r.mode)||"validated-only");return h[l]||{errors:[],valid:!0}}return f!=null&&f.validate?f.validate(r):(!f&&(o=r==null?void 0:r.warn),Promise.resolve({errors:[],valid:!0}))}function qe(l){en(Z.value,l)}function _n(l,r,o=!1){ke(l,r),ve(s,l,r),o&&!(e!=null&&e.initialValues)&&ve(T.value,l,w(r))}function ke(l,r){ve(Z.value,l,w(r))}async function Je(){const l=E($);if(!l)return{valid:!0,results:{},errors:{}};u.value=!0;const r=we(l)||se(l)?await ut(l,s):await ot(l,s,{names:z.value,bailsMap:U.value});return u.value=!1,r}const An=B((l,{evt:r})=>{cn(r)&&r.target.submit()});an(()=>{if(e!=null&&e.initialErrors&&N(e.initialErrors),e!=null&&e.initialTouched&&Ne(e.initialTouched),e!=null&&e.validateOnMount){ge();return}y.validateSchema&&y.validateSchema("silent")}),_e($)&&oe($,()=>{var l;(l=y.validateSchema)===null||l===void 0||l.call(y,"validated-only")}),un(Ge,y);function En(l,r){const o=k(C(l))||ie(l),f=()=>G(r)?r(pe(o,Oe)):r||{};function h(){var I;o.touched=!0,((I=f().validateOnBlur)!==null&&I!==void 0?I:be().validateOnBlur)&&ce(o.path)}function g(I){var A;const F=(A=f().validateOnModelUpdate)!==null&&A!==void 0?A:be().validateOnModelUpdate;j(o.path,I,F)}return M(()=>{if(G(r)){const F=r(o),x=F.model||"modelValue";return Object.assign({onBlur:h,[x]:o.value,[`onUpdate:${x}`]:g},F.props||{})}const I=(r==null?void 0:r.model)||"modelValue",A={onBlur:h,[I]:o.value,[`onUpdate:${I}`]:g};return r!=null&&r.mapProps?Object.assign(Object.assign({},A),r.mapProps(pe(o,Oe))):A})}function jn(l,r){const o=k(C(l))||ie(l),f=()=>G(r)?r(pe(o,Oe)):r||{};function h(){var A;o.touched=!0,((A=f().validateOnBlur)!==null&&A!==void 0?A:be().validateOnBlur)&&ce(o.path)}function g(A){var F;const x=Pe(A),Ve=(F=f().validateOnInput)!==null&&F!==void 0?F:be().validateOnInput;j(o.path,x,Ve)}function _(A){var F;const x=Pe(A),Ve=(F=f().validateOnChange)!==null&&F!==void 0?F:be().validateOnChange;j(o.path,x,Ve)}return M(()=>{const A={value:o.value,onChange:_,onInput:g,onBlur:h};return G(r)?Object.assign(Object.assign({},A),r(pe(o,Oe)).attrs||{}):r!=null&&r.mapAttrs?Object.assign(Object.assign({},A),r.mapAttrs(pe(o,Oe))):A})}return Object.assign(Object.assign({},y),{values:Mn(s),handleReset:()=>Te(),submitForm:An,defineComponentBinds:En,defineInputBinds:jn})}function Vt(e,n,t,i){const a={touched:"some",pending:"some",valid:"every"},u=M(()=>!D(n,E(t)));function d(){const s=e.value;return Y(a).reduce((c,b)=>{const O=a[b];return c[b]=s[O](S=>S[b]),c},{})}const m=je(d());return Cn(()=>{const s=d();m.touched=s.touched,m.valid=s.valid,m.pending=s.pending}),M(()=>Object.assign(Object.assign({initialValues:E(t)},m),{valid:m.valid&&!Y(i.value).length,dirty:u.value}))}function pt(e,n,t){const i=Vn(t),a=t==null?void 0:t.initialValues,u=X(i),d=X(w(i));function m(s,c=!1){u.value=Fe(w(u.value)||{},w(s)),d.value=Fe(w(d.value)||{},w(s)),c&&e.value.forEach(b=>{if(b.touched)return;const S=L(u.value,b.path);ve(n,b.path,w(S))})}return _e(a)&&oe(a,s=>{s&&m(s,!0)},{deep:!0}),{initialValues:u,originalInitialValues:d,setInitialValues:m}}const Ot=Fn({name:"Form",inheritAttrs:!1,props:{as:{type:null,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(e,n){const t=Re(e,"initialValues"),i=Re(e,"validationSchema"),a=Re(e,"keepValues"),{errors:u,errorBag:d,values:m,meta:s,isSubmitting:c,isValidating:b,submitCount:O,controlledValues:S,validate:V,validateField:N,handleReset:q,resetForm:p,handleSubmit:z,setErrors:U,setFieldError:ne,setFieldValue:te,setValues:Z,setFieldTouched:T,setTouched:re,resetField:de}=bt({validationSchema:i.value?i:void 0,initialValues:t,initialErrors:e.initialErrors,initialTouched:e.initialTouched,validateOnMount:e.validateOnMount,keepValuesOnUnmount:a}),ee=z((K,{evt:R})=>{cn(R)&&R.target.submit()},e.onInvalidSubmit),$=e.onSubmit?z(e.onSubmit,e.onInvalidSubmit):ee;function ie(K){He(K)&&K.preventDefault(),q(),typeof n.attrs.onReset=="function"&&n.attrs.onReset()}function he(K,R){return z(typeof K=="function"&&!R?K:R,e.onInvalidSubmit)(K)}function J(){return w(m)}function H(){return w(s.value)}function W(){return w(u.value)}function k(){return{meta:s.value,errors:u.value,errorBag:d.value,values:m,isSubmitting:c.value,isValidating:b.value,submitCount:O.value,controlledValues:S.value,validate:V,validateField:N,handleSubmit:he,handleReset:q,submitForm:ee,setErrors:U,setFieldError:ne,setFieldValue:te,setValues:Z,setFieldTouched:T,setTouched:re,resetForm:p,resetField:de,getValues:J,getMeta:H,getErrors:W}}return n.expose({setFieldError:ne,setErrors:U,setFieldValue:te,setValues:Z,setFieldTouched:T,setTouched:re,resetForm:p,validate:V,validateField:N,resetField:de,getValues:J,getMeta:H,getErrors:W}),function(){const R=e.as==="form"?e.as:e.as?wn(e.as):null,Q=Yn(R,n,k);return R?Pn(R,Object.assign(Object.assign(Object.assign({},R==="form"?{novalidate:!0}:{}),n.attrs),{onSubmit:$,onReset:ie}),Q):Q}}}),At=Ot;export{At as F,_t as u};
