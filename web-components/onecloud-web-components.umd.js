(function(n,Gt){typeof exports=="object"&&typeof module<"u"?Gt(exports):typeof define=="function"&&define.amd?define(["exports"],Gt):(n=typeof globalThis<"u"?globalThis:n||self,Gt(n.onecloudwebcomponents={}))})(this,function(n){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qn;const Gt=globalThis,bi=Gt.ShadowRoot&&(Gt.ShadyCSS===void 0||Gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_i=Symbol(),xs=new WeakMap;let ws=class{constructor(t,o,i){if(this._$cssResult$=!0,i!==_i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=o}get styleSheet(){let t=this.o;const o=this.t;if(bi&&t===void 0){const i=o!==void 0&&o.length===1;i&&(t=xs.get(o)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&xs.set(o,t))}return t}toString(){return this.cssText}};const r=e=>new ws(typeof e=="string"?e:e+"",void 0,_i),y=(e,...t)=>{const o=e.length===1?e[0]:t.reduce((i,s,a)=>i+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[a+1],e[0]);return new ws(o,e,_i)},Jn=(e,t)=>{if(bi)e.adoptedStyleSheets=t.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of t){const i=document.createElement("style"),s=Gt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=o.cssText,e.appendChild(i)}},Es=bi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let o="";for(const i of t.cssRules)o+=i.cssText;return r(o)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Yn,defineProperty:Qn,getOwnPropertyDescriptor:Kn,getOwnPropertyNames:ta,getOwnPropertySymbols:ea,getPrototypeOf:oa}=Object,Xt=globalThis,ks=Xt.trustedTypes,ia=ks?ks.emptyScript:"",vi=Xt.reactiveElementPolyfillSupport,je=(e,t)=>e,$o={toAttribute(e,t){switch(t){case Boolean:e=e?ia:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=e!==null;break;case Number:o=e===null?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},yi=(e,t)=>!Yn(e,t),Ls={attribute:!0,type:String,converter:$o,reflect:!1,hasChanged:yi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Xt.litPropertyMetadata??(Xt.litPropertyMetadata=new WeakMap);class Le extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,o=Ls){if(o.state&&(o.attribute=!1),this._$Ei(),this.elementProperties.set(t,o),!o.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,o);s!==void 0&&Qn(this.prototype,t,s)}}static getPropertyDescriptor(t,o,i){const{get:s,set:a}=Kn(this.prototype,t)??{get(){return this[o]},set(l){this[o]=l}};return{get(){return s==null?void 0:s.call(this)},set(l){const d=s==null?void 0:s.call(this);a.call(this,l),this.requestUpdate(t,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ls}static _$Ei(){if(this.hasOwnProperty(je("elementProperties")))return;const t=oa(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(je("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(je("properties"))){const o=this.properties,i=[...ta(o),...ea(o)];for(const s of i)this.createProperty(s,o[s])}const t=this[Symbol.metadata];if(t!==null){const o=litPropertyMetadata.get(t);if(o!==void 0)for(const[i,s]of o)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[o,i]of this.elementProperties){const s=this._$Eu(o,i);s!==void 0&&this._$Eh.set(s,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const o=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)o.unshift(Es(s))}else t!==void 0&&o.push(Es(t));return o}static _$Eu(t,o){const i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(o=>o(this))}addController(t){var o;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)==null||o.call(t))}removeController(t){var o;(o=this._$EO)==null||o.delete(t)}_$E_(){const t=new Map,o=this.constructor.elementProperties;for(const i of o.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Jn(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(o=>{var i;return(i=o.hostConnected)==null?void 0:i.call(o)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(o=>{var i;return(i=o.hostDisconnected)==null?void 0:i.call(o)})}attributeChangedCallback(t,o,i){this._$AK(t,i)}_$EC(t,o){var a;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const l=(((a=i.converter)==null?void 0:a.toAttribute)!==void 0?i.converter:$o).toAttribute(o,i.type);this._$Em=t,l==null?this.removeAttribute(s):this.setAttribute(s,l),this._$Em=null}}_$AK(t,o){var a;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const l=i.getPropertyOptions(s),d=typeof l.converter=="function"?{fromAttribute:l.converter}:((a=l.converter)==null?void 0:a.fromAttribute)!==void 0?l.converter:$o;this._$Em=s,this[s]=d.fromAttribute(o,l.type),this._$Em=null}}requestUpdate(t,o,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??yi)(this[t],o))return;this.P(t,o,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,o,i){this._$AL.has(t)||this._$AL.set(t,o),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,l]of this._$Ep)this[a]=l;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,l]of s)l.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],l)}let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(i=this._$EO)==null||i.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(o)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(o)}willUpdate(t){}_$AE(t){var o;(o=this._$EO)==null||o.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(o=>this._$EC(o,this[o]))),this._$EU()}updated(t){}firstUpdated(t){}}Le.elementStyles=[],Le.shadowRootOptions={mode:"open"},Le[je("elementProperties")]=new Map,Le[je("finalized")]=new Map,vi==null||vi({ReactiveElement:Le}),(Xt.reactiveElementVersions??(Xt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=globalThis,xo=We.trustedTypes,Ps=xo?xo.createPolicy("lit-html",{createHTML:e=>e}):void 0,Hs="$lit$",qt=`lit$${Math.random().toFixed(9).slice(2)}$`,Bs="?"+qt,sa=`<${Bs}>`,ue=document,Ge=()=>ue.createComment(""),Xe=e=>e===null||typeof e!="object"&&typeof e!="function",Ts=Array.isArray,ra=e=>Ts(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ci=`[ 	
\f\r]`,qe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Os=/-->/g,As=/>/g,pe=RegExp(`>|${Ci}(?:([^\\s"'>=/]+)(${Ci}*=${Ci}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ms=/'/g,Is=/"/g,Ds=/^(?:script|style|textarea|title)$/i,na=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),g=na(1),ge=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),Rs=new WeakMap,me=ue.createTreeWalker(ue,129);function zs(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ps!==void 0?Ps.createHTML(t):t}const aa=(e,t)=>{const o=e.length-1,i=[];let s,a=t===2?"<svg>":"",l=qe;for(let d=0;d<o;d++){const h=e[d];let u,p,f=-1,b=0;for(;b<h.length&&(l.lastIndex=b,p=l.exec(h),p!==null);)b=l.lastIndex,l===qe?p[1]==="!--"?l=Os:p[1]!==void 0?l=As:p[2]!==void 0?(Ds.test(p[2])&&(s=RegExp("</"+p[2],"g")),l=pe):p[3]!==void 0&&(l=pe):l===pe?p[0]===">"?(l=s??qe,f=-1):p[1]===void 0?f=-2:(f=l.lastIndex-p[2].length,u=p[1],l=p[3]===void 0?pe:p[3]==='"'?Is:Ms):l===Is||l===Ms?l=pe:l===Os||l===As?l=qe:(l=pe,s=void 0);const v=l===pe&&e[d+1].startsWith("/>")?" ":"";a+=l===qe?h+sa:f>=0?(i.push(u),h.slice(0,f)+Hs+h.slice(f)+qt+v):h+qt+(f===-2?d:v)}return[zs(e,a+(e[o]||"<?>")+(t===2?"</svg>":"")),i]};class Je{constructor({strings:t,_$litType$:o},i){let s;this.parts=[];let a=0,l=0;const d=t.length-1,h=this.parts,[u,p]=aa(t,o);if(this.el=Je.createElement(u,i),me.currentNode=this.el.content,o===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=me.nextNode())!==null&&h.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(Hs)){const b=p[l++],v=s.getAttribute(f).split(qt),C=/([.?@])?(.*)/.exec(b);h.push({type:1,index:a,name:C[2],strings:v,ctor:C[1]==="."?da:C[1]==="?"?ca:C[1]==="@"?ha:wo}),s.removeAttribute(f)}else f.startsWith(qt)&&(h.push({type:6,index:a}),s.removeAttribute(f));if(Ds.test(s.tagName)){const f=s.textContent.split(qt),b=f.length-1;if(b>0){s.textContent=xo?xo.emptyScript:"";for(let v=0;v<b;v++)s.append(f[v],Ge()),me.nextNode(),h.push({type:2,index:++a});s.append(f[b],Ge())}}}else if(s.nodeType===8)if(s.data===Bs)h.push({type:2,index:a});else{let f=-1;for(;(f=s.data.indexOf(qt,f+1))!==-1;)h.push({type:7,index:a}),f+=qt.length-1}a++}}static createElement(t,o){const i=ue.createElement("template");return i.innerHTML=t,i}}function Pe(e,t,o=e,i){var l,d;if(t===ge)return t;let s=i!==void 0?(l=o._$Co)==null?void 0:l[i]:o._$Cl;const a=Xe(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((d=s==null?void 0:s._$AO)==null||d.call(s,!1),a===void 0?s=void 0:(s=new a(e),s._$AT(e,o,i)),i!==void 0?(o._$Co??(o._$Co=[]))[i]=s:o._$Cl=s),s!==void 0&&(t=Pe(e,s._$AS(e,t.values),s,i)),t}class la{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:o},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??ue).importNode(o,!0);me.currentNode=s;let a=me.nextNode(),l=0,d=0,h=i[0];for(;h!==void 0;){if(l===h.index){let u;h.type===2?u=new Ye(a,a.nextSibling,this,t):h.type===1?u=new h.ctor(a,h.name,h.strings,this,t):h.type===6&&(u=new ua(a,this,t)),this._$AV.push(u),h=i[++d]}l!==(h==null?void 0:h.index)&&(a=me.nextNode(),l++)}return me.currentNode=ue,s}p(t){let o=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,o),o+=i.strings.length-2):i._$AI(t[o])),o++}}class Ye{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,o,i,s){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=Pe(this,t,o),Xe(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==ge&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ra(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==M&&Xe(this._$AH)?this._$AA.nextSibling.data=t:this.T(ue.createTextNode(t)),this._$AH=t}$(t){var a;const{values:o,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Je.createElement(zs(i.h,i.h[0]),this.options)),i);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(o);else{const l=new la(s,this),d=l.u(this.options);l.p(o),this.T(d),this._$AH=l}}_$AC(t){let o=Rs.get(t.strings);return o===void 0&&Rs.set(t.strings,o=new Je(t)),o}k(t){Ts(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let i,s=0;for(const a of t)s===o.length?o.push(i=new Ye(this.S(Ge()),this.S(Ge()),this,this.options)):i=o[s],i._$AI(a),s++;s<o.length&&(this._$AR(i&&i._$AB.nextSibling,s),o.length=s)}_$AR(t=this._$AA.nextSibling,o){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,o);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var o;this._$AM===void 0&&(this._$Cv=t,(o=this._$AP)==null||o.call(this,t))}}class wo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,o,i,s,a){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=o,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}_$AI(t,o=this,i,s){const a=this.strings;let l=!1;if(a===void 0)t=Pe(this,t,o,0),l=!Xe(t)||t!==this._$AH&&t!==ge,l&&(this._$AH=t);else{const d=t;let h,u;for(t=a[0],h=0;h<a.length-1;h++)u=Pe(this,d[i+h],o,h),u===ge&&(u=this._$AH[h]),l||(l=!Xe(u)||u!==this._$AH[h]),u===M?t=M:t!==M&&(t+=(u??"")+a[h+1]),this._$AH[h]=u}l&&!s&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class da extends wo{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}class ca extends wo{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==M)}}class ha extends wo{constructor(t,o,i,s,a){super(t,o,i,s,a),this.type=5}_$AI(t,o=this){if((t=Pe(this,t,o,0)??M)===ge)return;const i=this._$AH,s=t===M&&i!==M||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==M&&(i===M||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,t):this._$AH.handleEvent(t)}}class ua{constructor(t,o,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Pe(this,t)}}const Si=We.litHtmlPolyfillSupport;Si==null||Si(Je,Ye),(We.litHtmlVersions??(We.litHtmlVersions=[])).push("3.1.4");const pa=(e,t,o)=>{const i=(o==null?void 0:o.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const a=(o==null?void 0:o.renderBefore)??null;i._$litPart$=s=new Ye(t.insertBefore(Ge(),a),a,void 0,o??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let x=class extends Le{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const t=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=t.firstChild),t}update(t){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=pa(o,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ge}};x._$litElement$=!0,x.finalized=!0,(qn=globalThis.litElementHydrateSupport)==null||qn.call(globalThis,{LitElement:x});const $i=globalThis.litElementPolyfillSupport;$i==null||$i({LitElement:x}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ga={attribute:!0,type:String,converter:$o,reflect:!1,hasChanged:yi},ma=(e=ga,t,o)=>{const{kind:i,metadata:s}=o;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),a.set(o.name,e),i==="accessor"){const{name:l}=o;return{set(d){const h=t.get.call(this);t.set.call(this,d),this.requestUpdate(l,h,e)},init(d){return d!==void 0&&this.P(l,void 0,e),d}}}if(i==="setter"){const{name:l}=o;return function(d){const h=this[l];t.call(this,d),this.requestUpdate(l,h,e)}}throw Error("Unsupported decorator location: "+i)};function c(e){return(t,o)=>typeof o=="object"?ma(e,t,o):((i,s,a)=>{const l=s.hasOwnProperty(a);return s.constructor.createProperty(a,l?{...i,wrapped:!0}:i),l?Object.getOwnPropertyDescriptor(s,a):void 0})(e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(e){return c({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xi=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(e,t){return(o,i,s)=>{const a=l=>{var d;return((d=l.renderRoot)==null?void 0:d.querySelector(e))??null};return xi(o,i,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dt(e){return(t,o)=>{const{slot:i,selector:s}=e??{},a="slot"+(i?`[name=${i}]`:":not([name])");return xi(t,o,{get(){var h;const l=(h=this.renderRoot)==null?void 0:h.querySelector(a),d=(l==null?void 0:l.assignedElements(e))??[];return s===void 0?d:d.filter(u=>u.matches(s))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(e){return(t,o)=>{const{slot:i}=e??{},s="slot"+(i?`[name=${i}]`:":not([name])");return xi(t,o,{get(){var l;const a=(l=this.renderRoot)==null?void 0:l.querySelector(s);return(a==null?void 0:a.assignedNodes(e))??[]}})}}/**
 * Replacement for Lit's @customElement decorator
 *
 * Checks whether a custom element has already been registered
 * before attempting to register it.
 *
 * Source:
 * https://github.com/lit/lit/blob/main/packages/reactive-element/src/decorators/custom-element.ts
 *
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 * BSD 3-Clause License
 *
 * Copyright (c) 2017 Google LLC. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */const E=e=>(t,o)=>{if(customElements.get(e)){console.warn(`${e} is already defined.`);return}o!==void 0?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},Qe={solid:"solid",glass:"glass",transparent:"transparent",solidBorder:"solid-border",special:"special"},He={background:"var(--ds-theme-background-card-normal, #fefefe)",backdropFilter:"none",borderWidth:"0",borderStyle:"none",borderColor:"#e0e0e0",borderRadius:"0"},G={background:"var(--ds-theme-background-card-normal, #fefefe)",backdropFilter:"none",borderWidth:"0",borderStyle:"none",borderColor:"var(--ds-theme-border-card-fade, #e0e0e0)",borderRadius:"0"},q={background:"var(--ds-theme-background-glass-normal, rgba(255, 255, 255, 0.4))",backdropFilter:"var(--ds-blur-glass, 5rem)",borderWidth:"var(--ds-border-width-xs, 0.0625rem)",borderStyle:"solid",borderColor:"var(--ds-theme-border-glass-fade, rgba(255, 255, 255, 0.1))",borderRadius:"0"},Ns={background:"transparent",backdropFilter:"none",borderWidth:"0",borderStyle:"none",borderColor:"transparent",borderRadius:"0"},kt={background:"var(--ds-theme-background-card-normal, #fefefe)",backdropFilter:"none",borderWidth:"var(--ds-border-width-s, 0.125rem)",borderStyle:"solid",borderColor:"var(--ds-theme-border-card-fade, #e6f2fb)",borderRadius:"0"},Jt={background:"var(--ds-theme-background-highlight-normal, #b3daf0)",backdropFilter:"none",borderWidth:"var(--ds-border-width-s, 0.125rem)",borderStyle:"solid",borderColor:"var(--ds-theme-border-special-fade, #cbe6f4)",borderRadius:"0"};y`
  :host([surface]) {
    background: var(--ds-surface-background, ${r(He.background)});
    backdrop-filter: var(
      --ds-surface-backdrop-filter,
      ${r(He.backdropFilter)}
    );
    border-width: var(--ds-surface-border-width, ${r(He.borderWidth)});
    border-style: var(--ds-surface-border-style, ${r(He.borderStyle)});
    border-color: var(
      --ds-surface-border-color,
      var(--ds-theme-border-card-fade, ${r(He.borderColor)})
    );
    border-radius: var(
      --ds-surface-border-radius,
      ${r(He.borderRadius)}
    );
  }

  :host([surface='${r(Qe.solid)}']) {
    --ds-surface-background: ${r(G.background)};
    --ds-surface-border-width: ${r(G.borderWidth)};
    --ds-surface-border-style: ${r(G.borderStyle)};
    --ds-surface-border-color: ${r(G.borderColor)};
  }

  :host([surface='${r(Qe.glass)}']) {
    --ds-surface-background: ${r(q.background)};
    --ds-surface-backdrop-filter: ${r(q.backdropFilter)};
    --ds-surface-border-width: ${r(q.borderWidth)};
    --ds-surface-border-style: ${r(q.borderStyle)};
    --ds-surface-border-color: ${r(q.borderColor)};
  }

  :host([surface='${r(Qe.transparent)}']) {
    --ds-surface-background: ${r(Ns.background)};
  }

  :host([surface='${r(Qe.solidBorder)}']) {
    --ds-surface-border-width: ${r(kt.borderWidth)};
    --ds-surface-border-style: ${r(kt.borderStyle)};
    --ds-surface-border-color: ${r(kt.borderColor)};
  }

  :host([surface='${r(Qe.special)}']) {
    --ds-surface-background: ${r(Jt.background)};
    --ds-surface-border-width: ${r(Jt.borderWidth)};
    --ds-surface-border-style: ${r(Jt.borderStyle)};
    --ds-surface-border-color: ${r(Jt.borderColor)};
  }
`;const wi={fontWeight:"var(--ds-lead-font-weight, 400)",fontSize:"var(--ds-lead-font-size, 1.125rem)",lineHeight:"var(--ds-lead-line-height, 1.75rem)",letterSpacing:"var(--ds-lead-letter-spacing, -0.03em)",marginBottom:"0"},fe={fontWeight:"var(--ds-base-font-weight, 400)",fontSize:"var(--ds-base-font-size, 1rem)",lineHeight:"var(--ds-base-line-height, 1.5rem)",letterSpacing:"var(--ds-base-letter-spacing, -0.03em)",marginBottom:"0"},Vs={fontWeight:"var(--ds-small-font-weight, 400)",fontSize:"var(--ds-small-font-size, 0.875rem)",lineHeight:"var(--ds-small-line-height, 1.25rem)",letterSpacing:"var(--ds-small-letter-spacing, -0.03em)",marginBottom:"0"},Yt={fontWeight:"var(--ds-x-small-font-weight, 400)",fontSize:"var(--ds-x-small-font-size, 0.75rem)",lineHeight:"var(--ds-x-small-line-height, 1rem)",letterSpacing:"var(--ds-x-small-letter-spacing, -0.03em)",marginBottom:"0"},Ei={fontWeight:"var(--ds-label-lead-font-weight, 600)",fontSize:"var(--ds-label-lead-font-size, 1rem)",lineHeight:"var(--ds-label-lead-line-height, 1.5rem)",marginBottom:"0"},Ke={fontWeight:"var(--ds-label-font-weight, 600)",fontSize:"var(--ds-label-font-size, 0.75rem)",lineHeight:"var(--ds-label-line-height, 1rem)",marginBottom:"0"},st={fontWeight:"var(--ds-label-s-font-weight, 600)",fontSize:"var(--ds-label-s-font-size, 0.75rem)",lineHeight:"var(--ds-label-s-line-height, 1rem)",marginBottom:"0"},Eo={fontWeight:"var(--ds-label-eyebrow-font-weight, 600)",fontSize:"var(--ds-label-eyebrow-font-size, 0.75rem)",lineHeight:"var(--ds-label-eyebrow-line-height, 1rem)",letterSpacing:"var(--ds-label-eyebrow-letter-spacing, 0.08em)",marginBottom:"0"},Be={fontWeight:"var(--ds-label-m-font-weight, 600)",fontSize:"var(--ds-label-m-font-size, 0.875rem)",lineHeight:"var(--ds-label-m-line-height, 1.25rem)",marginBottom:"0"},be={fontWeight:"var(--ds-label-l-font-weight, 600)",fontSize:"var(--ds-label-l-font-size, 1rem)",lineHeight:"var(--ds-label-l-line-height, 1.5rem)",marginBottom:"0"},ko={fontWeight:"var(--ds-action-button-font-weight, 600)",fontSize:"var(--ds-action-button-font-size, 0.9375rem)",lineHeight:"var(--ds-action-button-line-height, 1.3755rem)",letterSpacing:"var(--ds-action-button-letter-spacing, -0.02em)",marginBottom:"0"},Lo=y`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
  border: 0;
`,Rt={display:"flex",justifyContent:"space-between",alignItems:"start",position:"initial",gap:"var(--ds-spacing-xs, 0.5rem)",paddingBlockStart:"var(--ds-spacing-xs, 0.5rem)",paddingBlockEnd:"var(--ds-spacing-xs, 0.5rem)",paddingInlineStart:"var(--ds-spacing-xs, 0.5rem)",paddingInlineEnd:"var(--ds-spacing-xs, 0.5rem)"},Zs={labelColor:"var(--ds-theme-foreground-base-strong, #0e1726)"},fa={centerGap:"0"},ba=y`
  .announcement__banner {
    background: var(--ds-announcement-background, ${r(Jt.background)});
    display: var(--ds-announcement-display, ${r(Rt.display)});
    gap: var(--ds-announcement-gap, ${r(Rt.gap)});
    position: var(--ds-announcement-position, ${r(Rt.position)});
    align-items: var(--ds-announcement-align-items, ${r(Rt.alignItems)});
    padding-block-start: var(
      --ds-announcement-block-start,
      ${r(Rt.paddingBlockStart)}
    );
    padding-block-end: var(
      --ds-announcement-padding-block-end,
      ${r(Rt.paddingBlockEnd)}
    );
    padding-inline-start: var(
      --ds-announcement-padding-inline-start,
      ${r(Rt.paddingInlineStart)}
    );
    padding-inline-end: var(
      --ds-announcement-padding-inline-end,
      ${r(Rt.paddingInlineEnd)}
    );
    justify-content: var(
      --ds-announcement-justify-content,
      ${r(Rt.justifyContent)}
    );
  }

  .announcement__close-sr {
    ${Lo};
  }

  .announcement__center {
    display: var(--ds-announcement-center-display, flex);
    flex-direction: var(--ds-announcement-center-flex-direction, column);
    align-items: var(--ds-announcement-center-align-items, center);
    text-align: var(--ds-announcement-center-text-align, center);
    gap: var(
      --ds-announcement-center-gap,
      ${r(fa.centerGap)}
    );
  }

  :host ::slotted([slot='announcement__label']) {
    color: ${r(Zs.labelColor)};
    font-weight: ${r(fe.fontWeight)};
    font-size: ${r(fe.fontSize)};
    line-height: ${r(fe.lineHeight)};
    letter-spacing: ${r(fe.letterSpacing)};
  }

  :host ::slotted([slot='announcement__link']) {
    --ds-link-color: ${r(Zs.labelColor)};
  }
`,lt={xs:"0",sm:"540px",md:"860px",lg:"1440px"},ki={xs:6,sm:6,md:12,lg:24},Fs={xs:{marginInlineStart:"auto",marginInlineEnd:"auto"},sm:{marginInlineStart:"auto",marginInlineEnd:"auto"},md:{marginInlineStart:"auto",marginInlineEnd:"auto"},lg:{marginInlineStart:"auto",marginInlineEnd:"auto"}},Qt={xs:{paddingInlineStart:"1rem",paddingInlineEnd:"1rem"},sm:{paddingInlineStart:"4rem",paddingInlineEnd:"4rem"},md:{paddingInlineStart:"3.5rem",paddingInlineEnd:"3.5rem"},lg:{paddingInlineStart:"5%",paddingInlineEnd:"5%"}},_a={xs:"1328px",sm:"1328px",md:"1328px",lg:"1328px"};function va(e){return`${parseInt(e,10)-.02}px`}const ya=y`
  @media (min-width: ${r(lt.md)}) {
    :host {
      --ds-announcement-justify-content: center;
      --ds-announcement-align-items: center;
      --ds-announcement-position: relative;
      --ds-announcement-gap: var(--ds-spacing-s, 0.75rem);
      --ds-announcement-padding-block-start: var(--ds-spacing-xs, 0.5rem);
      --ds-announcement-padding-block-end: var(--ds-spacing-xs, 0.5rem);
      --ds-announcement-padding-inline-start: var(--ds-spacing-4xl, 6rem);
      --ds-announcement-padding-inline-end: var(--ds-spacing-4xl, 6rem);
    }

    .announcement__center {
      --ds-announcement-center-flex-direction: row;
      --ds-announcement-center-gap: var(--ds-spacing-xs, 0.5rem);
    }

    .announcement__dismiss {
      position: absolute;
      right: var(--ds-spacing-m, 1rem);
      top: var(--ds-spacing-xs, 0.5rem);
    }
  }
`,Po={buttonPrimary:"button--primary",buttonSecondary:"button--secondary",buttonGhost:"button--ghost",buttonTertiary:"button--tertiary",buttonTag:"button--tag"},Ho={small:"small",medium:"medium",large:"large"},Bo={circle:"circle",rounded:"rounded"},to={xsmall:"xsmall",small:"small",medium:"medium",large:"large",xlarge:"xlarge",x2large:"2xlarge",x3large:"3xlarge",x4large:"4xlarge"},Us={name:"add",regular:["M11.7498 3C12.1295 3 12.4434 3.28201 12.4931 3.64808L12.5 3.74985L12.5012 11H19.7543C20.1685 11 20.5043 11.3358 20.5043 11.75C20.5043 12.1297 20.2221 12.4435 19.8561 12.4932L19.7543 12.5H12.5012L12.5032 19.7491C12.5033 20.1633 12.1676 20.4993 11.7534 20.4993C11.3737 20.4993 11.0598 20.2173 11.0101 19.8512L11.0032 19.7494L11.0012 12.5H3.7522C3.33798 12.5 3.0022 12.1642 3.0022 11.75C3.0022 11.3703 3.28435 11.0565 3.65043 11.0068L3.7522 11H11.0012L11 3.75015C10.9999 3.33594 11.3356 3 11.7498 3Z"],filled:["M11.8834 3.00673L12 3C12.5128 3 12.9355 3.38604 12.9933 3.88338L13 4V11H20C20.5128 11 20.9355 11.386 20.9933 11.8834L21 12C21 12.5128 20.614 12.9355 20.1166 12.9933L20 13H13V20C13 20.5128 12.614 20.9355 12.1166 20.9933L12 21C11.4872 21 11.0645 20.614 11.0067 20.1166L11 20V13H4C3.48716 13 3.06449 12.614 3.00673 12.1166L3 12C3 11.4872 3.38604 11.0645 3.88338 11.0067L4 11H11V4C11 3.48716 11.386 3.06449 11.8834 3.00673L12 3L11.8834 3.00673Z"]},js={name:"add-circle",regular:["M 6 10 c 0 -0.28 0.22 -0.5 0.5 -0.5 h 3 v -3 a 0.5 0.5 0 0 1 1 0 v 3 h 3 a 0.5 0.5 0 0 1 0 1 h -3 v 3 a 0.5 0.5 0 0 1 -1 0 v -3 h -3 A 0.5 0.5 0 0 1 6 10 Z m 4 8 a 8 8 0 1 0 0 -16 a 8 8 0 0 0 0 16 Z m 0 -1 a 7 7 0 1 1 0 -14 a 7 7 0 0 1 0 14 Z"],filled:["M 18 10 a 8 8 0 1 1 -16 0 a 8 8 0 0 1 16 0 Z M 6 10 c 0 0.28 0.22 0.5 0.5 0.5 h 3 v 3 a 0.5 0.5 0 0 0 1 0 v -3 h 3 a 0.5 0.5 0 0 0 0 -1 h -3 v -3 a 0.5 0.5 0 0 0 -1 0 v 3 h -3 a 0.5 0.5 0 0 0 -0.5 0.5 Z"]},Ws={name:"heart",regular:["M12.8199 5.57912L11.9992 6.40163L11.1759 5.57838C9.07688 3.47931 5.67361 3.47931 3.57455 5.57838C1.47548 7.67744 1.47548 11.0807 3.57455 13.1798L11.4699 21.0751C11.7628 21.368 12.2377 21.368 12.5306 21.0751L20.432 13.1783C22.5264 11.0723 22.53 7.67857 20.4306 5.57912C18.3277 3.47623 14.9228 3.47623 12.8199 5.57912ZM19.3684 12.1206L12.0002 19.4842L4.63521 12.1191C3.12192 10.6058 3.12192 8.15232 4.63521 6.63904C6.14849 5.12575 8.602 5.12575 10.1153 6.63904L11.4727 7.99648C11.7706 8.29435 12.2553 8.28854 12.5459 7.98363L13.8806 6.63978C15.3977 5.12268 17.8528 5.12268 19.3699 6.63978C20.8836 8.15343 20.881 10.5997 19.3684 12.1206Z"],filled:["M12.8199 5.57912L11.9992 6.40163L11.1759 5.57838C9.07688 3.47931 5.67361 3.47931 3.57455 5.57838C1.47548 7.67744 1.47548 11.0807 3.57455 13.1798L11.4699 21.0751C11.7628 21.368 12.2377 21.368 12.5306 21.0751L20.432 13.1783C22.5264 11.0723 22.53 7.67857 20.4306 5.57912C18.3277 3.47623 14.9228 3.47623 12.8199 5.57912Z"]},Gs={name:"chevron-down",regular:["M4.21967 8.46967C4.51256 8.17678 4.98744 8.17678 5.28033 8.46967L12 15.1893L18.7197 8.46967C19.0126 8.17678 19.4874 8.17678 19.7803 8.46967C20.0732 8.76256 20.0732 9.23744 19.7803 9.53033L12.5303 16.7803C12.2374 17.0732 11.7626 17.0732 11.4697 16.7803L4.21967 9.53033C3.92678 9.23744 3.92678 8.76256 4.21967 8.46967Z"],filled:["M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"]},Xs={name:"chevron-up",regular:["M4.21967 15.5303C4.51256 15.8232 4.98744 15.8232 5.28033 15.5303L12 8.81066L18.7197 15.5303C19.0126 15.8232 19.4874 15.8232 19.7803 15.5303C20.0732 15.2374 20.0732 14.7626 19.7803 14.4697L12.5303 7.21967C12.2374 6.92678 11.7626 6.92678 11.4697 7.21967L4.21967 14.4697C3.92678 14.7626 3.92678 15.2374 4.21967 15.5303Z"],filled:["M4.29289 15.7071C4.68342 16.0976 5.31658 16.0976 5.70711 15.7071L12 9.41421L18.2929 15.7071C18.6834 16.0976 19.3166 16.0976 19.7071 15.7071C20.0976 15.3166 20.0976 14.6834 19.7071 14.2929L12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L4.29289 14.2929C3.90237 14.6834 3.90237 15.3166 4.29289 15.7071Z"]},qs={name:"chevron-left",regular:["M15.5303 4.21967C15.8232 4.51256 15.8232 4.98744 15.5303 5.28033L8.81066 12L15.5303 18.7197C15.8232 19.0126 15.8232 19.4874 15.5303 19.7803C15.2374 20.0732 14.7626 20.0732 14.4697 19.7803L7.21967 12.5303C6.92678 12.2374 6.92678 11.7626 7.21967 11.4697L14.4697 4.21967C14.7626 3.92678 15.2374 3.92678 15.5303 4.21967Z"],filled:["M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"]},Js={name:"chevron-right",regular:["M8.46967 4.21967C8.17678 4.51256 8.17678 4.98744 8.46967 5.28033L15.1893 12L8.46967 18.7197C8.17678 19.0126 8.17678 19.4874 8.46967 19.7803C8.76256 20.0732 9.23744 20.0732 9.53033 19.7803L16.7803 12.5303C17.0732 12.2374 17.0732 11.7626 16.7803 11.4697L9.53033 4.21967C9.23744 3.92678 8.76256 3.92678 8.46967 4.21967Z"],filled:["M8.29289 4.29289C7.90237 4.68342 7.90237 5.31658 8.29289 5.70711L14.5858 12L8.29289 18.2929C7.90237 18.6834 7.90237 19.3166 8.29289 19.7071C8.68342 20.0976 9.31658 20.0976 9.70711 19.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L9.70711 4.29289C9.31658 3.90237 8.68342 3.90237 8.29289 4.29289Z"]},Ys={name:"learning-app",regular:["M5.5 2C4.11929 2 3 3.11929 3 4.5V19.5C3 20.8807 4.11929 22 5.5 22H12.8096C12.3832 21.5557 12.0194 21.051 11.7322 20.5H5.5C4.94772 20.5 4.5 20.0523 4.5 19.5H11.3135C11.159 19.0218 11.0585 18.5195 11.0189 18H4.5V4.5C4.5 3.94772 4.94772 3.5 5.5 3.5H17C17.5523 3.5 18 3.94772 18 4.5V11.0189C18.5195 11.0585 19.0218 11.159 19.5 11.3135V4.5C19.5 3.11929 18.3807 2 17 2H5.5ZM23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23C20.5376 23 23 20.5376 23 17.5ZM16.9138 15.097L19.7203 16.9373C19.8073 16.9933 19.8757 17.0677 19.9254 17.1604C19.9751 17.251 20 17.3502 20 17.458C20 17.5614 19.9762 17.6606 19.9285 17.7555C19.8809 17.8504 19.8146 17.9258 19.7296 17.9819L16.9231 19.8965C16.8713 19.931 16.8184 19.9569 16.7646 19.9741C16.7128 19.9914 16.6568 20 16.5967 20C16.518 20 16.4424 19.9838 16.3699 19.9515C16.2973 19.917 16.2331 19.8717 16.1772 19.8157C16.1233 19.7574 16.0798 19.6906 16.0466 19.6151C16.0155 19.5397 16 19.461 16 19.379V15.621C16 15.5369 16.0155 15.4571 16.0466 15.3816C16.0798 15.3062 16.1233 15.2404 16.1772 15.1843C16.231 15.1283 16.2942 15.0841 16.3667 15.0517C16.4393 15.0172 16.5159 15 16.5967 15C16.7128 15 16.8184 15.0323 16.9138 15.097ZM6 6C6 5.44772 6.44772 5 7 5H15C15.5523 5 16 5.44772 16 6V8C16 8.55228 15.5523 9 15 9H7C6.44772 9 6 8.55228 6 8V6ZM7.5 7.5H14.5V6.5H7.5V7.5Z"],filled:["M5.5 2H17C18.3807 2 19.5 3.11929 19.5 4.5V11.3135C18.8699 11.11 18.1978 11 17.5 11C13.9101 11 11 13.9101 11 17.5C11 18.1978 11.11 18.8699 11.3135 19.5H4.5C4.5 20.0523 4.94772 20.5 5.5 20.5H11.7322C12.0194 21.051 12.3832 21.5557 12.8096 22H5.5C4.11929 22 3 20.8807 3 19.5V4.5C3 3.11929 4.11929 2 5.5 2ZM7 5C6.44772 5 6 5.44772 6 6V7C6 7.55228 6.44772 8 7 8H15C15.5523 8 16 7.55228 16 7V6C16 5.44772 15.5523 5 15 5H7ZM23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23C20.5376 23 23 20.5376 23 17.5ZM16.9138 15.097L19.7203 16.9373C19.8073 16.9933 19.8757 17.0677 19.9254 17.1604C19.9751 17.251 20 17.3502 20 17.458C20 17.5614 19.9762 17.6606 19.9285 17.7555C19.8809 17.8504 19.8146 17.9258 19.7296 17.9819L16.9231 19.8965C16.8713 19.931 16.8184 19.9569 16.7646 19.9741C16.7128 19.9914 16.6568 20 16.5967 20C16.518 20 16.4424 19.9838 16.3699 19.9515C16.2973 19.917 16.2331 19.8717 16.1772 19.8157C16.1233 19.7574 16.0798 19.6906 16.0466 19.6151C16.0155 19.5397 16 19.461 16 19.379V15.621C16 15.5369 16.0155 15.4571 16.0466 15.3816C16.0798 15.3062 16.1233 15.2404 16.1772 15.1843C16.231 15.1283 16.2942 15.0841 16.3667 15.0517C16.4393 15.0172 16.5159 15 16.5967 15C16.7128 15 16.8184 15.0323 16.9138 15.097Z"]},Qs={name:"subtract",regular:["M3.75391 12.5H20.2458C20.66 12.5 20.9958 12.1642 20.9958 11.75C20.9958 11.3358 20.66 11 20.2458 11H3.75391C3.33969 11 3.00391 11.3358 3.00391 11.75C3.00391 12.1642 3.33969 12.5 3.75391 12.5Z"],filled:["M3.99609 13H19.9996C20.5519 13 20.9996 12.5523 20.9996 12C20.9996 11.4477 20.5519 11 19.9996 11H3.99609C3.44381 11 2.99609 11.4477 2.99609 12C2.99609 12.5523 3.44381 13 3.99609 13Z"]},Ks={name:"arrow-right",regular:["M13.2673 4.20889C12.9674 3.9232 12.4926 3.93475 12.2069 4.23467C11.9212 4.5346 11.9328 5.00933 12.2327 5.29502L18.4841 11.2496H3.75C3.33579 11.2496 3 11.5854 3 11.9996C3 12.4138 3.33579 12.7496 3.75 12.7496H18.4842L12.2327 18.7043C11.9328 18.99 11.9212 19.4648 12.2069 19.7647C12.4926 20.0646 12.9674 20.0762 13.2673 19.7905L20.6862 12.7238C20.8551 12.5629 20.9551 12.3576 20.9861 12.1443C20.9952 12.0975 21 12.0491 21 11.9996C21 11.9501 20.9952 11.9016 20.986 11.8547C20.955 11.6415 20.855 11.4364 20.6862 11.2756L13.2673 4.20889Z"],filled:["M13.7045 4.28377C13.3111 3.89615 12.678 3.90084 12.2904 4.29424C11.9027 4.68765 11.9074 5.3208 12.3008 5.70842L17.6712 10.9998H4C3.44771 10.9998 3 11.4475 3 11.9998C3 12.5521 3.44772 12.9998 4 12.9998H17.6646L12.3008 18.2847C11.9074 18.6723 11.9027 19.3055 12.2904 19.6989C12.678 20.0923 13.3111 20.097 13.7045 19.7094L20.6287 12.887C21.1256 12.3974 21.1256 11.5958 20.6287 11.1062L13.7045 4.28377Z"]},tr={name:"arrow-left",regular:["M10.7327 19.7905C11.0326 20.0762 11.5074 20.0646 11.7931 19.7647C12.0788 19.4648 12.0672 18.99 11.7673 18.7043L5.51587 12.7497L20.25 12.7497C20.6642 12.7497 21 12.4139 21 11.9997C21 11.5855 20.6642 11.2497 20.25 11.2497L5.51577 11.2497L11.7673 5.29502C12.0672 5.00933 12.0787 4.5346 11.7931 4.23467C11.5074 3.93475 11.0326 3.9232 10.7327 4.20889L3.31379 11.2756C3.14486 11.4365 3.04491 11.6417 3.01393 11.8551C3.00479 11.9019 3 11.9503 3 11.9997C3 12.0493 3.00481 12.0977 3.01398 12.1446C3.04502 12.3579 3.14496 12.563 3.31379 12.7238L10.7327 19.7905Z"],filled:["M10.2949 19.7152C10.6883 20.1028 11.3215 20.0981 11.7091 19.7047C12.0967 19.3113 12.092 18.6782 11.6986 18.2906L6.32827 12.9992H19.9995C20.5517 12.9992 20.9995 12.5514 20.9995 11.9992C20.9995 11.4469 20.5517 10.9992 19.9995 10.9992H6.33488L11.6986 5.71428C12.092 5.32666 12.0967 4.69351 11.7091 4.3001C11.3215 3.9067 10.6883 3.90201 10.2949 4.28963L3.37073 11.112C2.87382 11.6016 2.87382 12.4032 3.37073 12.8928L10.2949 19.7152Z"]},er={name:"arrow-down",regular:["M19.7905 13.2673C20.0762 12.9674 20.0646 12.4926 19.7647 12.2069C19.4648 11.9212 18.99 11.9328 18.7043 12.2327L12.7498 18.484V3.75C12.7498 3.33579 12.4141 3 11.9998 3C11.5856 3 11.2498 3.33579 11.2498 3.75V18.4844L5.29502 12.2327C5.00933 11.9328 4.5346 11.9212 4.23467 12.2069C3.93475 12.4926 3.9232 12.9674 4.20889 13.2673L11.2756 20.6862C11.4366 20.8553 11.642 20.9552 11.8556 20.9861C11.9023 20.9952 11.9505 21 11.9998 21C12.0495 21 12.0981 20.9952 12.1451 20.9859C12.3582 20.9548 12.5631 20.8549 12.7238 20.6862L19.7905 13.2673Z"],filled:["M19.7162 13.7045C20.1038 13.3111 20.0991 12.678 19.7057 12.2903C19.3123 11.9027 18.6792 11.9074 18.2915 12.3008L13.0002 17.6711V4C13.0002 3.44771 12.5525 3 12.0002 3C11.4479 3 11.0002 3.44772 11.0002 4V17.6646L5.71525 12.3008C5.32763 11.9074 4.69448 11.9027 4.30108 12.2903C3.90767 12.678 3.90298 13.3111 4.29061 13.7045L11.113 20.6287C11.6026 21.1256 12.4042 21.1256 12.8938 20.6287L19.7162 13.7045Z"]},or={name:"arrow-up",regular:["M4.20889 10.7327C3.9232 11.0326 3.93475 11.5074 4.23467 11.7931C4.5346 12.0788 5.00933 12.0672 5.29502 11.7673L11.2495 5.516V20.25C11.2495 20.6642 11.5853 21 11.9995 21C12.4137 21 12.7495 20.6642 12.7495 20.25V5.51565L18.7043 11.7673C18.99 12.0672 19.4648 12.0788 19.7647 11.7931C20.0646 11.5074 20.0762 11.0326 19.7905 10.7327L12.7238 3.31379C12.5627 3.14474 12.3573 3.04477 12.1438 3.01386C12.0971 3.00477 12.0489 3 11.9995 3C11.9498 3 11.9012 3.00483 11.8543 3.01406C11.6412 3.04518 11.4363 3.14509 11.2756 3.31379L4.20889 10.7327Z"],filled:["M4.28377 10.2949C3.89615 10.6883 3.90084 11.3215 4.29424 11.7091C4.68765 12.0967 5.3208 12.092 5.70842 11.6986L10.9998 6.32833V19.9994C10.9998 20.5517 11.4475 20.9994 11.9998 20.9994C12.552 20.9994 12.9998 20.5517 12.9998 19.9994V6.33481L18.2847 11.6986C18.6723 12.092 19.3055 12.0967 19.6989 11.7091C20.0923 11.3215 20.097 10.6883 19.7094 10.2949L12.887 3.37073C12.3974 2.87382 11.5958 2.87382 11.1062 3.37073L4.28377 10.2949Z"]},Li={name:"dismiss",regular:["M4.39705 4.55379L4.46967 4.46967C4.73594 4.2034 5.1526 4.1792 5.44621 4.39705L5.53033 4.46967L12 10.939L18.4697 4.46967C18.7626 4.17678 19.2374 4.17678 19.5303 4.46967C19.8232 4.76256 19.8232 5.23744 19.5303 5.53033L13.061 12L19.5303 18.4697C19.7966 18.7359 19.8208 19.1526 19.6029 19.4462L19.5303 19.5303C19.2641 19.7966 18.8474 19.8208 18.5538 19.6029L18.4697 19.5303L12 13.061L5.53033 19.5303C5.23744 19.8232 4.76256 19.8232 4.46967 19.5303C4.17678 19.2374 4.17678 18.7626 4.46967 18.4697L10.939 12L4.46967 5.53033C4.2034 5.26406 4.1792 4.8474 4.39705 4.55379L4.46967 4.46967L4.39705 4.55379Z"],filled:["M4.2097 4.3871L4.29289 4.29289C4.65338 3.93241 5.22061 3.90468 5.6129 4.2097L5.70711 4.29289L12 10.585L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L13.415 12L19.7071 18.2929C20.0676 18.6534 20.0953 19.2206 19.7903 19.6129L19.7071 19.7071C19.3466 20.0676 18.7794 20.0953 18.3871 19.7903L18.2929 19.7071L12 13.415L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L10.585 12L4.29289 5.70711C3.93241 5.34662 3.90468 4.77939 4.2097 4.3871L4.29289 4.29289L4.2097 4.3871Z"]},ir={name:"dismiss-circle",regular:["M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM15.4462 8.39705L15.5303 8.46967C15.7966 8.73594 15.8208 9.1526 15.6029 9.44621L15.5303 9.53033L13.061 12L15.5303 14.4697C15.7966 14.7359 15.8208 15.1526 15.6029 15.4462L15.5303 15.5303C15.2641 15.7966 14.8474 15.8208 14.5538 15.6029L14.4697 15.5303L12 13.061L9.53033 15.5303C9.26406 15.7966 8.8474 15.8208 8.55379 15.6029L8.46967 15.5303C8.2034 15.2641 8.1792 14.8474 8.39705 14.5538L8.46967 14.4697L10.939 12L8.46967 9.53033C8.2034 9.26406 8.1792 8.8474 8.39705 8.55379L8.46967 8.46967C8.73594 8.2034 9.1526 8.1792 9.44621 8.39705L9.53033 8.46967L12 10.939L14.4697 8.46967C14.7359 8.2034 15.1526 8.1792 15.4462 8.39705Z"],filled:["M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM15.5303 8.46967L15.4462 8.39705C15.1852 8.2034 14.827 8.20101 14.5636 8.38988L14.4697 8.46967L12 10.939L9.53033 8.46967L9.44621 8.39705C9.18522 8.2034 8.82701 8.20101 8.56362 8.38988L8.46967 8.46967L8.39705 8.55379C8.2034 8.81478 8.20101 9.17299 8.38988 9.43638L8.46967 9.53033L10.939 12L8.46967 14.4697L8.39705 14.5538C8.2034 14.8148 8.20101 15.173 8.38988 15.4364L8.46967 15.5303L8.55379 15.6029C8.81478 15.7966 9.17299 15.799 9.43638 15.6101L9.53033 15.5303L12 13.061L14.4697 15.5303L14.5538 15.6029C14.8148 15.7966 15.173 15.799 15.4364 15.6101L15.5303 15.5303L15.6029 15.4462C15.7966 15.1852 15.799 14.827 15.6101 14.5636L15.5303 14.4697L13.061 12L15.5303 9.53033L15.6029 9.44621C15.7966 9.18522 15.799 8.82701 15.6101 8.56362L15.5303 8.46967L15.4462 8.39705L15.5303 8.46967Z"]},sr={name:"more-vertical",regular:["M12 7.75C11.0335 7.75 10.25 6.9665 10.25 6C10.25 5.0335 11.0335 4.25 12 4.25C12.9665 4.25 13.75 5.0335 13.75 6C13.75 6.9665 12.9665 7.75 12 7.75ZM12 13.75C11.0335 13.75 10.25 12.9665 10.25 12C10.25 11.0335 11.0335 10.25 12 10.25C12.9665 10.25 13.75 11.0335 13.75 12C13.75 12.9665 12.9665 13.75 12 13.75ZM10.25 18C10.25 18.9665 11.0335 19.75 12 19.75C12.9665 19.75 13.75 18.9665 13.75 18C13.75 17.0335 12.9665 16.25 12 16.25C11.0335 16.25 10.25 17.0335 10.25 18Z"],filled:["M12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14ZM10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18Z"]},rr={name:"more-horizontal",regular:["M7.75 12C7.75 12.9665 6.9665 13.75 6 13.75C5.0335 13.75 4.25 12.9665 4.25 12C4.25 11.0335 5.0335 10.25 6 10.25C6.9665 10.25 7.75 11.0335 7.75 12ZM13.75 12C13.75 12.9665 12.9665 13.75 12 13.75C11.0335 13.75 10.25 12.9665 10.25 12C10.25 11.0335 11.0335 10.25 12 10.25C12.9665 10.25 13.75 11.0335 13.75 12ZM18 13.75C18.9665 13.75 19.75 12.9665 19.75 12C19.75 11.0335 18.9665 10.25 18 10.25C17.0335 10.25 16.25 11.0335 16.25 12C16.25 12.9665 17.0335 13.75 18 13.75Z"],filled:["M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z"]},nr={name:"pause",regular:["M6.25 3C5.00736 3 4 4.00736 4 5.25V18.75C4 19.9926 5.00736 21 6.25 21H8.75C9.99264 21 11 19.9926 11 18.75V5.25C11 4.00736 9.99264 3 8.75 3H6.25ZM5.5 5.25C5.5 4.83579 5.83579 4.5 6.25 4.5H8.75C9.16421 4.5 9.5 4.83579 9.5 5.25V18.75C9.5 19.1642 9.16421 19.5 8.75 19.5H6.25C5.83579 19.5 5.5 19.1642 5.5 18.75V5.25ZM15.25 3C14.0074 3 13 4.00736 13 5.25V18.75C13 19.9926 14.0074 21 15.25 21H17.75C18.9926 21 20 19.9926 20 18.75V5.25C20 4.00736 18.9926 3 17.75 3H15.25ZM14.5 5.25C14.5 4.83579 14.8358 4.5 15.25 4.5H17.75C18.1642 4.5 18.5 4.83579 18.5 5.25V18.75C18.5 19.1642 18.1642 19.5 17.75 19.5H15.25C14.8358 19.5 14.5 19.1642 14.5 18.75V5.25Z"],filled:["M5.74609 3C4.7796 3 3.99609 3.7835 3.99609 4.75V19.25C3.99609 20.2165 4.7796 21 5.74609 21H9.24609C10.2126 21 10.9961 20.2165 10.9961 19.25V4.75C10.9961 3.7835 10.2126 3 9.24609 3H5.74609ZM14.7461 3C13.7796 3 12.9961 3.7835 12.9961 4.75V19.25C12.9961 20.2165 13.7796 21 14.7461 21H18.2461C19.2126 21 19.9961 20.2165 19.9961 19.25V4.75C19.9961 3.7835 19.2126 3 18.2461 3H14.7461Z"]},ar={name:"play",regular:["M7.60846 4.61489C7.1087 4.34296 6.5 4.70472 6.5 5.27368V18.726C6.5 19.2949 7.1087 19.6567 7.60846 19.3848L19.97 12.6586C20.4921 12.3746 20.4921 11.6251 19.97 11.341L7.60846 4.61489ZM5 5.27368C5 3.56682 6.82609 2.48151 8.32538 3.2973L20.687 10.0235C22.2531 10.8756 22.2531 13.124 20.687 13.9762L8.32538 20.7024C6.82609 21.5181 5 20.4328 5 18.726V5.27368Z"],filled:["M5 5.27368C5 3.56682 6.82609 2.48151 8.32538 3.2973L20.687 10.0235C22.2531 10.8756 22.2531 13.124 20.687 13.9762L8.32538 20.7024C6.82609 21.5181 5 20.4328 5 18.726V5.27368Z"]},lr={name:"speaker-off",regular:["M3.28034 2.21968C2.98745 1.92678 2.51257 1.92677 2.21968 2.21966C1.92678 2.51255 1.92677 2.98743 2.21966 3.28032L6.43782 7.49856H4.25C3.00736 7.49856 2 8.50592 2 9.74856V14.2465C2 15.4891 3.00736 16.4965 4.25 16.4965H7.92956C8.11329 16.4965 8.29063 16.5639 8.42793 16.686L12.9194 20.6797C13.7255 21.3965 15 20.8242 15 19.7456V16.0609L20.7194 21.7805C21.0123 22.0734 21.4872 22.0734 21.7801 21.7805C22.073 21.4876 22.073 21.0127 21.7801 20.7198L3.28034 2.21968ZM13.5 14.5609V19.1888L9.42465 15.565C9.01275 15.1988 8.48074 14.9965 7.92956 14.9965H4.25C3.83579 14.9965 3.5 14.6607 3.5 14.2465V9.74856C3.5 9.33435 3.83579 8.99856 4.25 8.99856H7.92961C7.93233 8.99856 7.93505 8.99856 7.93777 8.99855L13.5 14.5609ZM13.5 4.80677V10.3182L15 11.8182V4.24998C15 3.17136 13.7255 2.59913 12.9195 3.3158L9.52003 6.33813L10.5825 7.40062L13.5 4.80677ZM17.141 13.9592L18.279 15.0973C18.7408 14.1628 19 13.1107 19 12C19 10.7968 18.6958 9.66243 18.1596 8.67182C17.9624 8.30755 17.5072 8.17211 17.143 8.36931C16.7787 8.5665 16.6432 9.02165 16.8404 9.38591C17.2609 10.1627 17.5 11.0523 17.5 12C17.5 12.691 17.3729 13.3512 17.141 13.9592ZM19.3881 16.2064L20.4815 17.2998C21.4437 15.7631 22 13.9457 22 12C22 9.77388 21.2717 7.71568 20.0407 6.0536C19.7941 5.72075 19.3244 5.65077 18.9916 5.89731C18.6587 6.14384 18.5888 6.61353 18.8353 6.94639C19.8815 8.35894 20.5 10.1062 20.5 12C20.5 13.5311 20.0958 14.9663 19.3881 16.2064Z"],filled:["M3.28034 2.21968C2.98745 1.92678 2.51257 1.92677 2.21968 2.21966C1.92678 2.51255 1.92677 2.98743 2.21966 3.28032L6.43783 7.49858H4.25C3.00736 7.49858 2 8.50594 2 9.74858V14.2465C2 15.4891 3.00736 16.4965 4.25 16.4965H7.92956C8.11329 16.4965 8.29063 16.5639 8.42793 16.686L12.9194 20.6797C13.7255 21.3965 15 20.8243 15 19.7456V16.0609L20.7194 21.7805C21.0123 22.0734 21.4872 22.0734 21.7801 21.7805C22.073 21.4876 22.073 21.0127 21.7801 20.7198L3.28034 2.21968ZM17.141 13.9593L18.279 15.0973C18.7408 14.1628 19 13.1107 19 12C19 10.7968 18.6958 9.66244 18.1596 8.67183C17.9624 8.30757 17.5072 8.17213 17.143 8.36932C16.7787 8.56651 16.6432 9.02166 16.8404 9.38593C17.2609 10.1627 17.5 11.0523 17.5 12C17.5 12.691 17.3729 13.3512 17.141 13.9593ZM19.3881 16.2064L20.4815 17.2999C21.4437 15.7631 22 13.9457 22 12C22 9.77389 21.2717 7.71569 20.0407 6.05362C19.7941 5.72076 19.3244 5.65079 18.9916 5.89732C18.6587 6.14386 18.5888 6.61355 18.8353 6.9464C19.8815 8.35896 20.5 10.1062 20.5 12C20.5 13.5311 20.0958 14.9663 19.3881 16.2064ZM9.52004 6.33813L15 11.8182V4.25C15 3.17137 13.7255 2.59914 12.9195 3.31582L9.52004 6.33813Z"]},dr={name:"accessibility",regular:["M10.5 5C10.5 5.64117 10.9022 6.18838 11.4682 6.403C11.8174 6.48797 12.1822 6.48801 12.5315 6.4031C13.0975 6.18855 13.5 5.64127 13.5 5C13.5 4.17157 12.8284 3.5 12 3.5C11.1715 3.5 10.5 4.17157 10.5 5ZM9.02622 5.39876C9.0089 5.2683 8.99995 5.1352 8.99995 5C8.99995 3.34315 10.3431 2 12 2C13.6568 2 15 3.34315 15 5C15 5.13522 14.991 5.26835 14.9737 5.39883L17.8502 4.17784C18.9933 3.6926 20.318 4.2222 20.8116 5.36177C21.3069 6.50526 20.7776 7.82908 19.6306 8.31599L16.0025 9.85602V13.5732L17.8768 19.0167C18.2814 20.1916 17.6569 21.4721 16.4819 21.8766C15.307 22.2812 14.0266 21.6567 13.622 20.4818L12.0001 15.7715L10.3783 20.4815C9.97376 21.6565 8.69332 22.281 7.51838 21.8764C6.34344 21.4719 5.71892 20.1914 6.12349 19.0165L8.00247 13.5595V9.85809L4.3695 8.31599C3.22242 7.82908 2.69318 6.50526 3.18846 5.36177C3.68204 4.2222 5.00676 3.6926 6.1499 4.17784L9.02622 5.39876ZM11.022 7.83699C10.8569 7.79238 10.6941 7.73627 10.5348 7.66865L5.56381 5.55859C5.1793 5.39538 4.73092 5.57464 4.5649 5.95794C4.40058 6.33732 4.57503 6.77369 4.9556 6.93523L8.74088 8.54199C9.20262 8.73798 9.50247 9.19101 9.50247 9.69262V13.6014C9.50247 13.7399 9.47946 13.8774 9.43437 14.0083L7.54177 19.5048C7.40691 19.8965 7.61508 20.3233 8.00673 20.4581C8.39838 20.593 8.82519 20.3848 8.96004 19.9932L11.0684 13.8702C11.3739 12.9821 12.6275 12.9856 12.9318 13.8699L15.0403 19.9934C15.1751 20.3851 15.6019 20.5932 15.9936 20.4584C16.3852 20.3235 16.5934 19.8967 16.4585 19.5051L14.5706 14.022C14.5255 13.891 14.5025 13.7535 14.5025 13.615V9.69055C14.5025 9.18894 14.8023 8.73591 15.2641 8.53992L19.0445 6.93523C19.425 6.77369 19.5995 6.33732 19.4352 5.95794C19.2691 5.57464 18.8208 5.39538 18.4362 5.55859L13.4653 7.66865C13.3057 7.73636 13.1427 7.79254 12.9773 7.83718C12.671 7.9427 12.3422 8 12 8C11.6575 8 11.3285 7.94264 11.022 7.83699Z"],filled:["M12 6.5C13.2426 6.5 14.25 5.49264 14.25 4.25C14.25 3.00736 13.2426 2 12 2C10.7574 2 9.75 3.00736 9.75 4.25C9.75 5.49264 10.7574 6.5 12 6.5ZM6.14978 4.17803C5.00664 3.69279 3.68192 4.22239 3.18834 5.36195C2.69306 6.50545 3.2223 7.82927 4.36938 8.31617L7.39308 9.59966C7.76247 9.75645 8.00235 10.1189 8.00235 10.5202V13.5597L6.12337 19.0167C5.7188 20.1916 6.34332 21.4721 7.51826 21.8766C8.69319 22.2812 9.97364 21.6567 10.3782 20.4817L11.7636 16.4582C11.841 16.2334 12.159 16.2334 12.2364 16.4582L13.6219 20.4819C14.0264 21.6569 15.3069 22.2814 16.4818 21.8768C17.6568 21.4723 18.2813 20.1918 17.8767 19.0169L16.0023 13.56V10.5181C16.0023 10.1168 16.2422 9.75438 16.6116 9.59759L19.6304 8.31617C20.7775 7.82927 21.3068 6.50545 20.8115 5.36195C20.3179 4.22239 18.9932 3.69279 17.85 4.17803L16.244 4.85973C15.9033 5.00435 15.6657 5.28256 15.5492 5.59067C15.0072 7.02499 13.6215 8.04295 12 8.04295C10.3784 8.04295 8.99272 7.025 8.45067 5.5907C8.33423 5.2826 8.09658 5.00439 7.75589 4.85978L6.14978 4.17803Z"]},cr={name:"keyboard",regular:["M19.7454 5C20.988 5 21.9954 6.00736 21.9954 7.25V16.7546C21.9954 17.9972 20.988 19.0046 19.7454 19.0046H4.25C3.00736 19.0046 2 17.9972 2 16.7546V7.25C2 6.00736 3.00736 5 4.25 5H19.7454ZM19.7454 6.5H4.25C3.83579 6.5 3.5 6.83579 3.5 7.25V16.7546C3.5 17.1688 3.83579 17.5046 4.25 17.5046H19.7454C20.1596 17.5046 20.4954 17.1688 20.4954 16.7546V7.25C20.4954 6.83579 20.1596 6.5 19.7454 6.5ZM6.75 14.5H17.25C17.6642 14.5 18 14.8358 18 15.25C18 15.6297 17.7178 15.9435 17.3518 15.9932L17.25 16H6.75C6.33579 16 6 15.6642 6 15.25C6 14.8703 6.28215 14.5565 6.64823 14.5068L6.75 14.5H17.25H6.75ZM16.5 11C17.0523 11 17.5 11.4477 17.5 12C17.5 12.5523 17.0523 13 16.5 13C15.9477 13 15.5 12.5523 15.5 12C15.5 11.4477 15.9477 11 16.5 11ZM10.5049 11C11.0572 11 11.5049 11.4477 11.5049 12C11.5049 12.5523 11.0572 13 10.5049 13C9.95259 13 9.50488 12.5523 9.50488 12C9.50488 11.4477 9.95259 11 10.5049 11ZM7.50488 11C8.05716 11 8.50488 11.4477 8.50488 12C8.50488 12.5523 8.05716 13 7.50488 13C6.95259 13 6.50488 12.5523 6.50488 12C6.50488 11.4477 6.95259 11 7.50488 11ZM13.5049 11C14.0572 11 14.5049 11.4477 14.5049 12C14.5049 12.5523 14.0572 13 13.5049 13C12.9526 13 12.5049 12.5523 12.5049 12C12.5049 11.4477 12.9526 11 13.5049 11ZM6 8C6.55228 8 7 8.44772 7 9C7 9.55228 6.55228 10 6 10C5.44772 10 5 9.55228 5 9C5 8.44772 5.44772 8 6 8ZM8.99512 8C9.54741 8 9.99512 8.44772 9.99512 9C9.99512 9.55228 9.54741 10 8.99512 10C8.44284 10 7.99512 9.55228 7.99512 9C7.99512 8.44772 8.44284 8 8.99512 8ZM11.9951 8C12.5474 8 12.9951 8.44772 12.9951 9C12.9951 9.55228 12.5474 10 11.9951 10C11.4428 10 10.9951 9.55228 10.9951 9C10.9951 8.44772 11.4428 8 11.9951 8ZM14.9951 8C15.5474 8 15.9951 8.44772 15.9951 9C15.9951 9.55228 15.5474 10 14.9951 10C14.4428 10 13.9951 9.55228 13.9951 9C13.9951 8.44772 14.4428 8 14.9951 8ZM17.9951 8C18.5474 8 18.9951 8.44772 18.9951 9C18.9951 9.55228 18.5474 10 17.9951 10C17.4428 10 16.9951 9.55228 16.9951 9C16.9951 8.44772 17.4428 8 17.9951 8Z"],filled:["M19.7454 5C20.988 5 21.9954 6.00736 21.9954 7.25V16.7546C21.9954 17.9972 20.988 19.0046 19.7454 19.0046H4.25C3.00736 19.0046 2 17.9972 2 16.7546V7.25C2 6.00736 3.00736 5 4.25 5H19.7454ZM17.25 14.5H6.75L6.64823 14.5068C6.28215 14.5565 6 14.8703 6 15.25C6 15.6297 6.28215 15.9435 6.64823 15.9932L6.75 16H17.25L17.3518 15.9932C17.7178 15.9435 18 15.6297 18 15.25C18 14.8703 17.7178 14.5565 17.3518 14.5068L17.25 14.5ZM16.5 11C15.9477 11 15.5 11.4477 15.5 12C15.5 12.5523 15.9477 13 16.5 13C17.0523 13 17.5 12.5523 17.5 12C17.5 11.4477 17.0523 11 16.5 11ZM13.5049 11C12.9526 11 12.5049 11.4477 12.5049 12C12.5049 12.5523 12.9526 13 13.5049 13C14.0572 13 14.5049 12.5523 14.5049 12C14.5049 11.4477 14.0572 11 13.5049 11ZM10.5049 11C9.95259 11 9.50488 11.4477 9.50488 12C9.50488 12.5523 9.95259 13 10.5049 13C11.0572 13 11.5049 12.5523 11.5049 12C11.5049 11.4477 11.0572 11 10.5049 11ZM7.50488 11C6.95259 11 6.50488 11.4477 6.50488 12C6.50488 12.5523 6.95259 13 7.50488 13C8.05716 13 8.50488 12.5523 8.50488 12C8.50488 11.4477 8.05716 11 7.50488 11ZM6 8C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10C6.55228 10 7 9.55228 7 9C7 8.44772 6.55228 8 6 8ZM8.99512 8C8.44284 8 7.99512 8.44772 7.99512 9C7.99512 9.55228 8.44284 10 8.99512 10C9.54741 10 9.99512 9.55228 9.99512 9C9.99512 8.44772 9.54741 8 8.99512 8ZM11.9951 8C11.4428 8 10.9951 8.44772 10.9951 9C10.9951 9.55228 11.4428 10 11.9951 10C12.5474 10 12.9951 9.55228 12.9951 9C12.9951 8.44772 12.5474 8 11.9951 8ZM14.9951 8C14.4428 8 13.9951 8.44772 13.9951 9C13.9951 9.55228 14.4428 10 14.9951 10C15.5474 10 15.9951 9.55228 15.9951 9C15.9951 8.44772 15.5474 8 14.9951 8ZM17.9951 8C17.4428 8 16.9951 8.44772 16.9951 9C16.9951 9.55228 17.4428 10 17.9951 10C18.5474 10 18.9951 9.55228 18.9951 9C18.9951 8.44772 18.5474 8 17.9951 8Z"]},hr={name:"person-support",regular:["M19.9995 16.2461C19.9995 15.0041 18.9927 13.9972 17.7506 13.9972H6.24888C5.00686 13.9972 4 15.0041 4 16.2461V16.8238C4 17.7166 4.31852 18.5801 4.89828 19.259C6.46458 21.0932 8.8506 21.9984 11.9965 21.9984C15.1418 21.9984 17.529 21.0935 19.0984 19.26C19.6799 18.5807 19.9995 17.7158 19.9995 16.8215V16.2461ZM6.24888 15.4972H17.7506C18.1642 15.4972 18.4995 15.8325 18.4995 16.2461V16.8215C18.4995 17.3581 18.3078 17.877 17.9588 18.2846C16.7024 19.7526 14.7348 20.4984 11.9965 20.4984C9.25815 20.4984 7.29228 19.7526 6.03897 18.2849C5.69111 17.8776 5.5 17.3595 5.5 16.8238V16.2461C5.5 15.8325 5.83528 15.4972 6.24888 15.4972ZM16.9965 7.00195C16.9965 4.24053 14.7579 2.00195 11.9965 2.00195C10.346 2.00195 8.88224 2.80167 7.97166 4.03476C7.90089 4.01263 7.82562 4.00071 7.74756 4.00071L5.24976 4.00071C4.83554 4.0007 4.49976 4.33649 4.49976 4.75071L4.49976 10.2495C4.49976 11.7683 5.731 12.9995 7.2498 12.9995L7.49977 12.9995V12.9952C7.5032 12.9952 7.50664 12.9952 7.51009 12.9952C8.061 12.9952 8.5076 12.5486 8.5076 11.9977C8.5076 11.4468 8.061 11.0002 7.51009 11.0002C7.19071 11.0002 6.90639 11.1503 6.72382 11.3838C6.29624 11.1852 5.99976 10.752 5.99976 10.2495V9.99902H6.74756C7.12823 9.99902 7.48052 9.87748 7.76772 9.67108C8.6537 11.0718 10.2165 12.002 11.9965 12.002C14.7579 12.002 16.9965 9.76338 16.9965 7.00195ZM6.99756 6.896C6.99683 6.93123 6.99646 6.96655 6.99646 7.00195C6.99646 7.03736 6.99683 7.07268 6.99756 7.10791V8.24902C6.99756 8.38709 6.88563 8.49902 6.74756 8.49902H5.99976L5.99976 5.50071H6.99756L6.99756 6.896ZM8.49756 7.09058V6.91333C8.54458 5.02128 10.0931 3.50195 11.9965 3.50195C13.9295 3.50195 15.4965 5.06896 15.4965 7.00195C15.4965 8.93495 13.9295 10.502 11.9965 10.502C10.0931 10.502 8.54458 8.98262 8.49756 7.09058Z"],filled:["M19.9995 16.2461C19.9995 15.0041 18.9927 13.9972 17.7506 13.9972H6.24888C5.00686 13.9972 4 15.0041 4 16.2461V17.1661C4 17.7382 4.17841 18.296 4.51037 18.7619C6.05253 20.9262 8.57549 21.9984 11.9965 21.9984C15.4167 21.9984 17.941 20.9267 19.4869 18.7635C19.8203 18.297 19.9995 17.7379 19.9995 17.1646V16.2461ZM16.9965 7.00195C16.9965 4.24053 14.7579 2.00195 11.9965 2.00195C10.346 2.00195 8.88224 2.80167 7.97166 4.03476C7.90089 4.01263 7.82562 4.00071 7.74756 4.00071L5.24976 4.00071C4.83554 4.0007 4.49976 4.33649 4.49976 4.75071L4.49976 10.2495C4.49976 11.7683 5.731 12.9995 7.2498 12.9995L7.49977 12.9995V12.9952C7.50316 12.9952 7.50656 12.9952 7.50996 12.9952C8.06087 12.9952 8.50748 12.5486 8.50748 11.9977C8.50748 11.4468 8.06087 11.0002 7.50996 11.0002C7.19061 11.0002 6.9063 11.1503 6.72373 11.3837C6.2962 11.1851 5.99976 10.7519 5.99976 10.2495V9.99902H6.74756C7.12823 9.99902 7.48052 9.87748 7.76772 9.67108C8.6537 11.0718 10.2165 12.002 11.9965 12.002C14.7579 12.002 16.9965 9.76338 16.9965 7.00195ZM6.99756 6.896C6.99683 6.93123 6.99646 6.96655 6.99646 7.00195C6.99646 7.03736 6.99683 7.07268 6.99756 7.10791V8.24902C6.99756 8.38709 6.88563 8.49902 6.74756 8.49902H5.99976L5.99976 5.50071H6.99756L6.99756 6.896Z"]},ur={name:"group-of-people",regular:["M14.754 10C15.7205 10 16.504 10.7835 16.504 11.75V16.499C16.504 18.9848 14.4888 21 12.003 21C9.51712 21 7.50193 18.9848 7.50193 16.499V11.75C7.50193 10.7835 8.28543 10 9.25193 10H14.754ZM14.754 11.5H9.25193C9.11386 11.5 9.00193 11.6119 9.00193 11.75V16.499C9.00193 18.1564 10.3455 19.5 12.003 19.5C13.6604 19.5 15.004 18.1564 15.004 16.499V11.75C15.004 11.6119 14.8921 11.5 14.754 11.5ZM3.75 10L7.13128 9.99906C6.78791 10.4145 6.56424 10.9325 6.51312 11.5002L3.75 11.5C3.61193 11.5 3.5 11.6119 3.5 11.75V14.9988C3.5 16.3802 4.61984 17.5 6.00124 17.5C6.20123 17.5 6.39574 17.4765 6.58216 17.4322C6.66687 17.9361 6.82156 18.4167 7.03487 18.864C6.70577 18.953 6.35899 19 6.00124 19C3.79142 19 2 17.2086 2 14.9988V11.75C2 10.7835 2.7835 10 3.75 10ZM16.8747 9.99906L20.25 10C21.2165 10 22 10.7835 22 11.75V15C22 17.2091 20.2091 19 18 19C17.6436 19 17.298 18.9534 16.9691 18.8659C17.184 18.4177 17.3388 17.9371 17.425 17.4331C17.6092 17.477 17.8019 17.5 18 17.5C19.3807 17.5 20.5 16.3807 20.5 15V11.75C20.5 11.6119 20.3881 11.5 20.25 11.5L17.4928 11.5002C17.4417 10.9325 17.218 10.4145 16.8747 9.99906ZM12 3C13.6569 3 15 4.34315 15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3ZM18.5 4C19.8807 4 21 5.11929 21 6.5C21 7.88071 19.8807 9 18.5 9C17.1193 9 16 7.88071 16 6.5C16 5.11929 17.1193 4 18.5 4ZM5.5 4C6.88071 4 8 5.11929 8 6.5C8 7.88071 6.88071 9 5.5 9C4.11929 9 3 7.88071 3 6.5C3 5.11929 4.11929 4 5.5 4ZM12 4.5C11.1716 4.5 10.5 5.17157 10.5 6C10.5 6.82843 11.1716 7.5 12 7.5C12.8284 7.5 13.5 6.82843 13.5 6C13.5 5.17157 12.8284 4.5 12 4.5ZM18.5 5.5C17.9477 5.5 17.5 5.94772 17.5 6.5C17.5 7.05228 17.9477 7.5 18.5 7.5C19.0523 7.5 19.5 7.05228 19.5 6.5C19.5 5.94772 19.0523 5.5 18.5 5.5ZM5.5 5.5C4.94772 5.5 4.5 5.94772 4.5 6.5C4.5 7.05228 4.94772 7.5 5.5 7.5C6.05228 7.5 6.5 7.05228 6.5 6.5C6.5 5.94772 6.05228 5.5 5.5 5.5Z"],filled:["M14.754 10C15.7205 10 16.504 10.7835 16.504 11.75V16.499C16.504 18.9848 14.4888 21 12.003 21C9.51712 21 7.50193 18.9848 7.50193 16.499V11.75C7.50193 10.7835 8.28543 10 9.25193 10H14.754ZM7.13128 9.99906C6.78183 10.4218 6.55636 10.9508 6.51057 11.5304L6.50193 11.75V16.499C6.50193 17.3456 6.69319 18.1476 7.03487 18.864C6.70577 18.953 6.35899 19 6.00124 19C3.79142 19 2 17.2086 2 14.9988V11.75C2 10.8318 2.70711 10.0788 3.60647 10.0058L3.75 10L7.13128 9.99906ZM16.8747 9.99906L20.25 10C21.2165 10 22 10.7835 22 11.75V15C22 17.2091 20.2091 19 18 19C17.6436 19 17.298 18.9534 16.9691 18.8659C17.2697 18.238 17.4538 17.5452 17.4951 16.8144L17.504 16.499V11.75C17.504 11.0847 17.2678 10.4747 16.8747 9.99906ZM12 3C13.6569 3 15 4.34315 15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3ZM18.5 4C19.8807 4 21 5.11929 21 6.5C21 7.88071 19.8807 9 18.5 9C17.1193 9 16 7.88071 16 6.5C16 5.11929 17.1193 4 18.5 4ZM5.5 4C6.88071 4 8 5.11929 8 6.5C8 7.88071 6.88071 9 5.5 9C4.11929 9 3 7.88071 3 6.5C3 5.11929 4.11929 4 5.5 4Z"]},pr={name:"approvals-app",regular:["M11.7803 1.71966C11.4874 1.42677 11.0125 1.42678 10.7197 1.71968C10.4268 2.01258 10.4268 2.48746 10.7197 2.78034L11.9396 4.0002C6.99683 4.03268 3 8.04959 3 13C3 17.9706 7.02944 22 12 22C16.6942 22 20.5483 18.4068 20.9631 13.8202C21.0004 13.4077 20.6962 13.043 20.2837 13.0057C19.8712 12.9684 19.5065 13.2726 19.4692 13.6851C19.1236 17.5058 15.9111 20.5 12 20.5C7.85786 20.5 4.5 17.1421 4.5 13C4.5 8.87822 7.82493 5.53303 11.939 5.50024L10.7197 6.71955C10.4268 7.01244 10.4268 7.48732 10.7197 7.78021C11.0126 8.0731 11.4874 8.0731 11.7803 7.78021L14.2803 5.28021C14.421 5.13955 14.5 4.94878 14.5 4.74987C14.5 4.55095 14.421 4.36019 14.2803 4.21954L11.7803 1.71966ZM15.7837 10.2197C16.0766 10.5126 16.0766 10.9874 15.7837 11.2803L11.2803 15.7838C11.1397 15.9244 10.9489 16.0034 10.75 16.0034C10.5511 16.0035 10.3603 15.9244 10.2197 15.7838L8.21967 13.7838C7.92678 13.4909 7.92678 13.016 8.21967 12.7231C8.51256 12.4302 8.98744 12.4302 9.28033 12.7231L10.75 14.1928L14.723 10.2197C15.0159 9.92678 15.4908 9.92677 15.7837 10.2197Z"],filled:["M10.5429 1.79289C10.9334 1.40237 11.5666 1.40237 11.9571 1.79289L14.457 4.29277C14.6445 4.4803 14.7499 4.73466 14.7499 4.99987C14.7499 5.26509 14.6445 5.51945 14.457 5.70698L11.9571 8.20686C11.5666 8.59738 10.9334 8.59738 10.5429 8.20686C10.1524 7.81633 10.1524 7.18317 10.5429 6.79264L11.3011 6.03445C7.76324 6.38516 5 9.36988 5 13C5 16.866 8.13401 20 12 20C15.5689 20 18.5153 17.3283 18.9458 13.8763C19.0141 13.3282 19.5138 12.9393 20.0618 13.0077C20.6099 13.076 20.9988 13.5757 20.9304 14.1237C20.3767 18.5644 16.5903 22 12 22C7.02944 22 3 17.9706 3 13C3 8.24519 6.68723 4.35157 11.3583 4.02252L10.5429 3.20711C10.1524 2.81658 10.1524 2.18342 10.5429 1.79289ZM16.2071 9.79289C16.5976 10.1834 16.5976 10.8166 16.2071 11.2071L11.7071 15.7071C11.3166 16.0976 10.6834 16.0976 10.2929 15.7071L8.29289 13.7071C7.90237 13.3166 7.90237 12.6834 8.29289 12.2929C8.68342 11.9024 9.31658 11.9024 9.70711 12.2929L11 13.5858L14.7929 9.79289C15.1834 9.40237 15.8166 9.40237 16.2071 9.79289Z"]},gr={name:"timer",regular:["M12 5C16.6944 5 20.5 8.80558 20.5 13.5C20.5 18.1944 16.6944 22 12 22C7.30558 22 3.5 18.1944 3.5 13.5C3.5 8.80558 7.30558 5 12 5ZM12 6.5C8.13401 6.5 5 9.63401 5 13.5C5 17.366 8.13401 20.5 12 20.5C15.866 20.5 19 17.366 19 13.5C19 9.63401 15.866 6.5 12 6.5ZM12 8C12.3797 8 12.6935 8.28215 12.7432 8.64823L12.75 8.75V13.25C12.75 13.6642 12.4142 14 12 14C11.6203 14 11.3065 13.7178 11.2568 13.3518L11.25 13.25V8.75C11.25 8.33579 11.5858 8 12 8ZM19.1472 5.11371L19.2298 5.17355L20.3882 6.13773C20.7066 6.40272 20.7498 6.87562 20.4849 7.19398C20.2419 7.48581 19.8243 7.54649 19.5112 7.35047L19.4286 7.29063L18.2702 6.32645C17.9518 6.06146 17.9086 5.58856 18.1735 5.2702C18.4165 4.97837 18.8341 4.91769 19.1472 5.11371ZM14.25 2.5C14.6642 2.5 15 2.83579 15 3.25C15 3.6297 14.7178 3.94349 14.3518 3.99315L14.25 4H9.75C9.33579 4 9 3.66421 9 3.25C9 2.8703 9.28215 2.55651 9.64823 2.50685L9.75 2.5H14.25Z"],filled:["M12 5C16.6944 5 20.5 8.80558 20.5 13.5C20.5 18.1944 16.6944 22 12 22C7.30558 22 3.5 18.1944 3.5 13.5C3.5 8.80558 7.30558 5 12 5ZM12 8C11.6203 8 11.3065 8.28215 11.2568 8.64823L11.25 8.75V13.25L11.2568 13.3518C11.3065 13.7178 11.6203 14 12 14C12.3797 14 12.6935 13.7178 12.7432 13.3518L12.75 13.25V8.75L12.7432 8.64823C12.6935 8.28215 12.3797 8 12 8ZM19.1704 5.1226L19.2517 5.18424L20.4008 6.18424C20.7132 6.45617 20.7461 6.9299 20.4742 7.24236C20.2249 7.52878 19.8061 7.58026 19.4973 7.3774L19.416 7.31576L18.267 6.31576C17.9545 6.04383 17.9217 5.5701 18.1936 5.25764C18.4428 4.97122 18.8617 4.91974 19.1704 5.1226ZM14.25 2.5C14.6642 2.5 15 2.83579 15 3.25C15 3.6297 14.7178 3.94349 14.3518 3.99315L14.25 4H9.75C9.33579 4 9 3.66421 9 3.25C9 2.8703 9.28215 2.55651 9.64823 2.50685L9.75 2.5H14.25Z"]},mr={name:"person-feedback",regular:["M14.77 12.4C14.92 12.47 15.09 12.5 15.25 12.5C15.58 12.5 15.89 12.37 16.13 12.14L18.31 10H19.25C20.77 10 22 8.77 22 7.25V4.75C22 3.23 20.77 2 19.25 2H14.75C13.23 2 12 3.23 12 4.75V7.25C12 8.51 12.85 9.57 14 9.9V11.25C14 11.75 14.31 12.2 14.77 12.4ZM13.5 4.75C13.5 4.06 14.06 3.5 14.75 3.5H19.25C19.94 3.5 20.5 4.06 20.5 4.75V7.25C20.5 7.94 19.94 8.5 19.25 8.5H17.69L15.5 10.65V8.5H14.75C14.06 8.5 13.5 7.94 13.5 7.25V4.75ZM8 13.5C6.07 13.5 4.5 11.93 4.5 10C4.5 8.07 6.07 6.5 8 6.5C9.93 6.5 11.5 8.07 11.5 10C11.5 11.93 9.93 13.5 8 13.5ZM8 8C6.9 8 6 8.9 6 10C6 11.1 6.9 12 8 12C9.1 12 10 11.1 10 10C10 8.9 9.1 8 8 8ZM8.00086 22C5.94086 22 4.36086 21.44 3.30086 20.33C1.96434 18.9257 1.99727 17.1555 2.00067 16.9727L2.00086 16.96C2.00086 15.89 2.90086 15 4.00086 15H12.0009C13.1009 15 14.0009 15.9 14.0009 17L14.001 17.0064C14.004 17.1325 14.0461 18.9165 12.7009 20.33C11.6409 21.44 10.0609 22 8.00086 22ZM4.00086 16.5C3.72086 16.5 3.50086 16.72 3.50086 17L3.50081 17.0048C3.49953 17.0997 3.48268 18.3527 4.40086 19.31C5.16086 20.1 6.37086 20.5 8.00086 20.5C9.63086 20.5 10.8509 20.09 11.6109 19.29C12.5234 18.3382 12.502 17.0975 12.5009 17.0324L12.5009 17.03C12.5009 16.72 12.2709 16.49 12.0009 16.49H4.00086V16.5Z"],filled:["M14.77 12.4C14.92 12.47 15.09 12.5 15.25 12.5C15.58 12.5 15.89 12.37 16.13 12.14L18.31 10H19.25C20.77 10 22 8.77 22 7.25V4.75C22 3.23 20.77 2 19.25 2H14.75C13.23 2 12 3.23 12 4.75V7.25C12 8.51 12.85 9.57 14 9.9V11.25C14 11.75 14.31 12.2 14.77 12.4ZM8 13.5C6.07 13.5 4.5 11.93 4.5 10C4.5 8.07 6.07 6.5 8 6.5C9.93 6.5 11.5 8.07 11.5 10C11.5 11.93 9.93 13.5 8 13.5ZM8.00086 22C5.94086 22 4.36086 21.44 3.30086 20.33C1.96434 18.9257 1.99727 17.1555 2.00067 16.9727L2.00086 16.96C2.00086 15.89 2.90086 15 4.00086 15H12.0009C13.1009 15 14.0009 15.9 14.0009 17L14.001 17.0064C14.004 17.1325 14.0461 18.9165 12.7009 20.33C11.6409 21.44 10.0609 22 8.00086 22Z"]},fr={name:"info",regular:["M12.0001 1.99805C17.5238 1.99805 22.0016 6.47589 22.0016 11.9996C22.0016 17.5233 17.5238 22.0011 12.0001 22.0011C6.47638 22.0011 1.99854 17.5233 1.99854 11.9996C1.99854 6.47589 6.47638 1.99805 12.0001 1.99805ZM12.0001 3.49805C7.30481 3.49805 3.49854 7.30432 3.49854 11.9996C3.49854 16.6949 7.30481 20.5011 12.0001 20.5011C16.6954 20.5011 20.5016 16.6949 20.5016 11.9996C20.5016 7.30432 16.6954 3.49805 12.0001 3.49805ZM11.9964 10.4986C12.3761 10.4984 12.6901 10.7803 12.74 11.1464L12.7469 11.2481L12.7505 16.7497C12.7508 17.1639 12.4152 17.5 12.001 17.5002C11.6213 17.5005 11.3073 17.2185 11.2574 16.8525L11.2505 16.7507L11.2469 11.2491C11.2467 10.8349 11.5822 10.4989 11.9964 10.4986ZM12.0005 7.00086C12.5521 7.00086 12.9992 7.44798 12.9992 7.99953C12.9992 8.55107 12.5521 8.99819 12.0005 8.99819C11.449 8.99819 11.0019 8.55107 11.0019 7.99953C11.0019 7.44798 11.449 7.00086 12.0005 7.00086Z"],filled:["M12.0001 1.99805C17.5238 1.99805 22.0016 6.47589 22.0016 11.9996C22.0016 17.5233 17.5238 22.0011 12.0001 22.0011C6.47638 22.0011 1.99854 17.5233 1.99854 11.9996C1.99854 6.47589 6.47638 1.99805 12.0001 1.99805ZM11.9963 10.2486C11.4834 10.249 11.061 10.6353 11.0036 11.1327L10.9969 11.2493L11.0005 16.7509L11.0073 16.8675C11.0654 17.3648 11.4884 17.7506 12.0012 17.7502C12.514 17.7499 12.9364 17.3636 12.9939 16.8662L13.0005 16.7496L12.9969 11.248L12.9901 11.1314C12.932 10.6341 12.5091 10.2483 11.9963 10.2486ZM12.0005 6.49908C11.3093 6.49908 10.749 7.0594 10.749 7.7506C10.749 8.4418 11.3093 9.00212 12.0005 9.00212C12.6917 9.00212 13.2521 8.4418 13.2521 7.7506C13.2521 7.0594 12.6917 6.49908 12.0005 6.49908Z"]},br={name:"presence",regular:["M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM17.0607 8.43934C17.6464 9.02513 17.6464 9.97487 17.0607 10.5607L11.5607 16.0607C10.9749 16.6464 10.0251 16.6464 9.43934 16.0607L7.43934 14.0607C6.85355 13.4749 6.85355 12.5251 7.43934 11.9393C8.02513 11.3536 8.97487 11.3536 9.56066 11.9393L10.5 12.8787L14.9393 8.43934C15.5251 7.85355 16.4749 7.85355 17.0607 8.43934Z"],filled:["M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM17.0607 10.5607L11.5607 16.0607C10.9749 16.6464 10.0251 16.6464 9.43934 16.0607L7.43934 14.0607C6.85355 13.4749 6.85355 12.5251 7.43934 11.9393C8.02513 11.3536 8.97487 11.3536 9.56066 11.9393L10.5 12.8787L14.9393 8.43934C15.5251 7.85355 16.4749 7.85355 17.0607 8.43934C17.6464 9.02513 17.6464 9.97487 17.0607 10.5607Z"]},_r={name:"search",regular:["M10 2.75C14.0041 2.75 17.25 5.99594 17.25 10C17.25 11.7319 16.6427 13.3219 15.6295 14.5688L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2641 20.7966 19.8474 20.8208 19.5538 20.6029L19.4697 20.5303L14.5688 15.6295C13.3219 16.6427 11.7319 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75ZM10 4.25C6.82436 4.25 4.25 6.82436 4.25 10C4.25 13.1756 6.82436 15.75 10 15.75C13.1756 15.75 15.75 13.1756 15.75 10C15.75 6.82436 13.1756 4.25 10 4.25Z"],filled:["M10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 11.7101 16.9276 13.2866 15.964 14.5483L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3466 21.0676 19.7794 21.0953 19.3871 20.7903L19.2929 20.7071L14.5483 15.964C13.2866 16.9276 11.7101 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5ZM10 4.5C6.96243 4.5 4.5 6.96243 4.5 10C4.5 13.0376 6.96243 15.5 10 15.5C13.0376 15.5 15.5 13.0376 15.5 10C15.5 6.96243 13.0376 4.5 10 4.5Z"]},vr={name:"local-language",regular:["M9.34045 6.37226L9.38917 6.4766L14.9493 20.9766C15.0972 21.3624 14.9104 21.7974 14.532 21.9482C14.1852 22.0865 13.7978 21.9379 13.6217 21.6151L13.5791 21.5228L12.1461 17.7857L5.05932 17.7859L4.96527 17.7798L3.4185 21.5398C3.26139 21.9217 2.83032 22.1015 2.45568 21.9413C2.11227 21.7945 1.93548 21.4129 2.02941 21.0561L2.06182 20.9596L8.02575 6.45964C8.26631 5.87479 9.04862 5.84994 9.34045 6.37226ZM18.7457 2.00293C19.1254 2.00293 19.4392 2.28508 19.4888 2.65116L19.4957 2.75293L19.4954 7.49893L21.2457 7.4997C21.6254 7.4997 21.9392 7.78185 21.9888 8.14793L21.9957 8.2497C21.9957 8.62939 21.7135 8.94319 21.3475 8.99285L21.2457 8.9997L19.4954 8.99893L19.4957 16.2497C19.4957 16.6294 19.2135 16.9432 18.8475 16.9929L18.7457 16.9997C18.366 16.9997 18.0522 16.7175 18.0025 16.3515L17.9957 16.2497V2.75293C17.9957 2.33872 18.3315 2.00293 18.7457 2.00293ZM8.81111 8.74708L5.64895 16.2857H11.7589L8.81111 8.74708ZM10.7477 2.00293H16.2455C16.6252 2.00293 16.939 2.28508 16.9887 2.65116L16.9955 2.75293V5.75663C16.9955 8.10121 15.0949 10.0019 12.7503 10.0019C12.3361 10.0019 12.0003 9.66609 12.0003 9.25187C12.0003 8.83766 12.3361 8.50187 12.7503 8.50187C14.2103 8.50187 15.4041 7.36214 15.4905 5.92386L15.4955 5.75663V3.50293H10.7477C10.3335 3.50293 9.99775 3.16714 9.99775 2.75293C9.99775 2.37323 10.2799 2.05944 10.646 2.00978L10.7477 2.00293H16.2455H10.7477Z"],filled:["M9.56258 7.50543L9.61862 7.62215L14.9259 20.6267C15.1346 21.1381 14.8892 21.7217 14.3779 21.9304C13.903 22.1242 13.3658 21.9265 13.1244 21.4879L13.0741 21.3824L11.693 17.999H5.40701L3.91608 21.4056C3.71043 21.8754 3.18729 22.1078 2.70853 21.9612L2.599 21.9206C2.1292 21.715 1.89681 21.1918 2.04333 20.7131L2.08394 20.6036L7.77668 7.59899C8.11338 6.82981 9.1713 6.80444 9.56258 7.50543ZM19 2C19.5128 2 19.9355 2.38604 19.9933 2.88338L20 3L19.9998 7H21C21.5128 7 21.9355 7.38604 21.9933 7.88338L22 8C22 8.51284 21.614 8.93551 21.1166 8.99327L21 9H19.9998L20 16C20 16.5128 19.614 16.9355 19.1166 16.9933L19 17C18.4872 17 18.0645 16.614 18.0067 16.1166L18 16V3C18 2.44772 18.4477 2 19 2ZM8.66047 10.5674L6.28201 15.999H10.877L8.66047 10.5674ZM11 2H16C16.5128 2 16.9355 2.38604 16.9933 2.88338L17 3V5.97488C17 8.18401 15.2091 9.97488 13 9.97488C12.4477 9.97488 12 9.52716 12 8.97488C12 8.42259 12.4477 7.97488 13 7.97488C14.0544 7.97488 14.9182 7.159 14.9945 6.12414L15 5.97488V4H11C10.4477 4 10 3.55228 10 3C10 2.48716 10.386 2.06449 10.8834 2.00673L11 2H16H11Z"]},yr={name:"chat-multiple",regular:["M9.56158 3C5.41944 3 2.06158 6.35786 2.06158 10.5C2.06158 11.6329 2.31325 12.7088 2.76423 13.6734C2.5102 14.6714 2.22638 15.7842 2.03999 16.5147C1.80697 17.428 2.6294 18.2588 3.54374 18.039C4.29396 17.8587 5.44699 17.5819 6.47447 17.337C7.41678 17.7631 8.46241 18 9.56158 18C13.7037 18 17.0616 14.6421 17.0616 10.5C17.0616 6.35786 13.7037 3 9.56158 3ZM3.56158 10.5C3.56158 7.18629 6.24787 4.5 9.56158 4.5C12.8753 4.5 15.5616 7.18629 15.5616 10.5C15.5616 13.8137 12.8753 16.5 9.56158 16.5C8.60084 16.5 7.69487 16.2748 6.89161 15.8749L6.6482 15.7537L6.38368 15.8167C5.46095 16.0363 4.39489 16.2919 3.59592 16.4838C3.79467 15.7047 4.05784 14.6724 4.28601 13.7757L4.35619 13.4998L4.22568 13.2468C3.80145 12.4246 3.56158 11.4914 3.56158 10.5ZM14.5616 21.0001C12.5922 21.0001 10.8001 20.241 9.46191 18.9995C9.49511 18.9999 9.52835 19.0001 9.56163 19.0001C10.2796 19.0001 10.9768 18.911 11.6427 18.7434C12.5067 19.2254 13.5021 19.5001 14.5616 19.5001C15.5223 19.5001 16.4283 19.2748 17.2316 18.8749L17.475 18.7537L17.7395 18.8167C18.6611 19.0361 19.7046 19.2625 20.4787 19.4262C20.3037 18.6757 20.065 17.6711 19.8372 16.7757L19.767 16.4999L19.8975 16.2469C20.3217 15.4247 20.5616 14.4915 20.5616 13.5001C20.5616 11.3853 19.4676 9.52617 17.8146 8.45761C17.6363 7.73435 17.3653 7.04756 17.015 6.41052C19.9523 7.42684 22.0616 10.2171 22.0616 13.5001C22.0616 14.6332 21.8098 15.7094 21.3586 16.6741C21.6117 17.6821 21.8679 18.774 22.0304 19.4773C22.2348 20.3623 21.4554 21.1633 20.563 20.9768C19.8358 20.8248 18.6933 20.581 17.6495 20.3367C16.707 20.763 15.6611 21.0001 14.5616 21.0001Z"],filled:["M9.5 3C5.35786 3 2 6.35786 2 10.5C2 11.6335 2.25193 12.71 2.70336 13.6749C2.40124 14.9 2.13954 16.2085 2.02174 16.8173C1.88844 17.5063 2.48734 18.1099 3.17494 17.9875C3.79825 17.8765 5.15315 17.6267 6.41143 17.3363C7.35412 17.7628 8.40027 18 9.5 18C13.6421 18 17 14.6421 17 10.5C17 6.35786 13.6421 3 9.5 3ZM9.46191 18.9996C10.8001 20.2411 12.5922 21.0002 14.5616 21.0002C15.6611 21.0002 16.707 20.7631 17.6495 20.3368C18.6933 20.5811 19.8358 20.8249 20.563 20.9769C21.4554 21.1634 22.2348 20.3624 22.0304 19.4775C21.8679 18.7741 21.6117 17.6822 21.3586 16.6742C21.8098 15.7095 22.0616 14.6333 22.0616 13.5002C22.0616 10.2172 19.9523 7.42696 17.015 6.41064C17.3653 7.04768 17.6363 7.73448 17.8146 8.45773C19.4676 9.52629 20.5616 11.3855 20.5616 13.5002C20.5616 14.4916 20.3217 15.4248 19.8975 16.247L19.767 16.5L19.8372 16.7758C20.065 17.6713 20.3037 18.6758 20.4787 19.4264C19.7046 19.2627 18.6611 19.0362 17.7395 18.8168L17.475 18.7539L17.2316 18.875C16.4283 19.2749 15.5223 19.5002 14.5616 19.5002C13.5021 19.5002 12.5067 19.2255 11.6427 18.7436C10.9768 18.9112 10.2796 19.0002 9.56163 19.0002C9.52835 19.0002 9.49511 19 9.46191 18.9996Z"]},Cr={name:"image-multiple",regular:["M13.7482 8.99633C14.4375 8.99633 14.9963 8.43751 14.9963 7.74817C14.9963 7.05882 14.4375 6.5 13.7482 6.5C13.0588 6.5 12.5 7.05882 12.5 7.74817C12.5 8.43751 13.0588 8.99633 13.7482 8.99633ZM6.25 3C4.45507 3 3 4.45507 3 6.25V15.25C3 17.0449 4.45507 18.5 6.25 18.5H15.25C17.0449 18.5 18.5 17.0449 18.5 15.25V6.25C18.5 4.45507 17.0449 3 15.25 3H6.25ZM4.5 6.25C4.5 5.2835 5.2835 4.5 6.25 4.5H15.25C16.2165 4.5 17 5.2835 17 6.25V15.25C17 15.4812 16.9552 15.7018 16.8738 15.9038L12.2867 11.6128C11.4217 10.8036 10.0775 10.8036 9.21252 11.6128L4.62602 15.9033C4.54474 15.7015 4.5 15.481 4.5 15.25V6.25ZM11.262 12.7082L15.7669 16.9224C15.6035 16.9728 15.4299 17 15.25 17H6.25C6.06985 17 5.89607 16.9728 5.73252 16.9222L10.2372 12.7082C10.5256 12.4385 10.9736 12.4385 11.262 12.7082ZM8.74995 21.0002C7.59927 21.0002 6.58826 20.4022 6.01074 19.5H8.72444L8.74995 19.5002H15.7499C17.821 19.5002 19.5 17.8212 19.5 15.7502V6.01108C20.402 6.58861 21 7.59956 21 8.75017V15.7502C21 18.6497 18.6494 21.0002 15.7499 21.0002H8.74995Z"],filled:["M3 6.25C3 4.45507 4.45507 3 6.25 3H15.25C17.0449 3 18.5 4.45507 18.5 6.25V15.25C18.5 15.8963 18.3114 16.4985 17.9861 17.0046L12.2941 11.6292C11.427 10.8103 10.0715 10.8103 9.20443 11.6292L3.5133 17.0037C3.18842 16.4978 3 15.8959 3 15.25V6.25ZM13.7472 8.99633C14.4365 8.99633 14.9954 8.43751 14.9954 7.74817C14.9954 7.05882 14.4365 6.5 13.7472 6.5C13.0578 6.5 12.499 7.05882 12.499 7.74817C12.499 8.43751 13.0578 8.99633 13.7472 8.99633ZM11.2642 12.7198L16.9056 18.0473C16.4207 18.3349 15.8546 18.5 15.25 18.5H6.25C5.64499 18.5 5.0786 18.3347 4.59352 18.0468L10.2343 12.7198C10.5234 12.4468 10.9752 12.4468 11.2642 12.7198ZM8.74897 21.0002C7.59829 21.0002 6.58728 20.4022 6.00977 19.5H8.72346L8.74897 19.5002H15.749C17.82 19.5002 19.499 17.8212 19.499 15.7502V6.01108C20.4011 6.58861 20.999 7.59957 20.999 8.75017V15.7502C20.999 18.6497 18.6485 21.0002 15.749 21.0002H8.74897Z"]},Sr={name:"data-sunburst",regular:["M15.4938 4.24949C15.2008 4.11721 15.0001 3.8324 15.0001 3.51091C15.0001 2.98921 15.5074 2.61834 15.9858 2.82646C18.3041 3.83504 20.1657 5.69664 21.1743 8.01497C21.3824 8.49336 21.0116 9.00063 20.4899 9.00063C20.1684 9.00063 19.8835 8.8 19.7513 8.50698C18.8998 6.62076 17.38 5.10099 15.4938 4.24949ZM9.00014 3.51091C9.00014 2.98921 8.49287 2.61834 8.01448 2.82646C5.69615 3.83504 3.83455 5.69664 2.82597 8.01497C2.61785 8.49336 2.98872 9.00062 3.51042 9.00062C3.83191 9.00062 4.11673 8.8 4.249 8.50698C5.1005 6.62076 6.62028 5.10099 8.5065 4.24949C8.79951 4.11721 9.00014 3.8324 9.00014 3.51091ZM15.4938 19.7518C15.2008 19.884 15.0001 20.1689 15.0001 20.4903C15.0001 21.012 15.5074 21.3829 15.9858 21.1748C18.3041 20.1662 20.1657 18.3046 21.1743 15.9863C21.3824 15.5079 21.0116 15.0006 20.4899 15.0006C20.1684 15.0006 19.8835 15.2012 19.7513 15.4943C18.8998 17.3805 17.38 18.9003 15.4938 19.7518ZM3.51042 15.0006C3.83191 15.0006 4.11672 15.2012 4.249 15.4943C5.1005 17.3805 6.62028 18.9003 8.5065 19.7518C8.79951 19.884 9.00014 20.1689 9.00014 20.4903C9.00014 21.012 8.49287 21.3829 8.01448 21.1748C5.69615 20.1662 3.83455 18.3046 2.82597 15.9863C2.61785 15.5079 2.98872 15.0006 3.51042 15.0006ZM12.0001 6.50062C11.8067 6.50062 11.6159 6.51057 11.4281 6.52995C11.016 6.57246 10.6476 6.27291 10.605 5.86088C10.5625 5.44886 10.8621 5.08038 11.2741 5.03787C11.513 5.01322 11.7552 5.00062 12.0001 5.00062C15.3316 5.00062 18.118 7.32725 18.8262 10.4436C18.9179 10.8475 18.6649 11.2493 18.261 11.3411C17.8571 11.4329 17.4552 11.1799 17.3634 10.776C16.8071 8.32763 14.6161 6.50062 12.0001 6.50062ZM9.12113 6.40126C9.35338 6.74424 9.26361 7.21055 8.92064 7.4428C7.4585 8.43288 6.50011 10.105 6.50011 12.0006C6.50011 13.1429 6.8475 14.2017 7.4423 15.0801C7.67454 15.4231 7.58478 15.8894 7.2418 16.1216C6.89882 16.3539 6.43251 16.2641 6.20026 15.9211C5.44266 14.8023 5.00011 13.452 5.00011 12.0006C5.00011 9.58638 6.22296 7.45799 8.07959 6.20077C8.42257 5.96852 8.88888 6.05828 9.12113 6.40126ZM18.2307 12.9056C18.6306 13.0133 18.8676 13.4248 18.7599 13.8248C17.9572 16.8057 15.2359 19.0006 12.0001 19.0006C10.8286 19.0006 9.72223 18.7122 8.75027 18.2019C8.38353 18.0094 8.24232 17.556 8.43486 17.1893C8.62741 16.8225 9.0808 16.6813 9.44754 16.8738C10.2096 17.2739 11.0773 17.5006 12.0001 17.5006C14.5407 17.5006 16.6807 15.7774 17.3115 13.4348C17.4192 13.0348 17.8307 12.7979 18.2307 12.9056ZM12.0001 8.00062C9.79098 8.00062 8.00011 9.79148 8.00011 12.0006C8.00011 14.2098 9.79098 16.0006 12.0001 16.0006C14.2093 16.0006 16.0001 14.2098 16.0001 12.0006C16.0001 9.79148 14.2093 8.00062 12.0001 8.00062ZM9.50011 12.0006C9.50011 10.6199 10.6194 9.50062 12.0001 9.50062C13.3808 9.50062 14.5001 10.6199 14.5001 12.0006C14.5001 13.3813 13.3808 14.5006 12.0001 14.5006C10.6194 14.5006 9.50011 13.3813 9.50011 12.0006Z"],filled:["M14.9999 3.51091C14.9999 3.8324 15.2005 4.11721 15.4935 4.24949C17.3798 5.10099 18.8995 6.62076 19.751 8.50698C19.8833 8.8 20.1681 9.00063 20.4896 9.00063C21.0113 9.00063 21.3822 8.49336 21.1741 8.01497C20.1655 5.69664 18.3039 3.83504 15.9855 2.82646C15.5072 2.61834 14.9999 2.98921 14.9999 3.51091ZM8.01424 2.82646C8.49263 2.61834 8.99989 2.98921 8.99989 3.51091C8.99989 3.8324 8.79927 4.11721 8.50625 4.24949C6.62003 5.10099 5.10026 6.62076 4.24876 8.50698C4.11648 8.8 3.83167 9.00062 3.51018 9.00062C2.98848 9.00062 2.61761 8.49336 2.82573 8.01497C3.83431 5.69664 5.69591 3.83504 8.01424 2.82646ZM14.9999 20.4903C14.9999 20.1689 15.2005 19.884 15.4935 19.7518C17.3798 18.9003 18.8995 17.3805 19.751 15.4943C19.8833 15.2012 20.1681 15.0006 20.4896 15.0006C21.0113 15.0006 21.3822 15.5079 21.1741 15.9863C20.1655 18.3046 18.3039 20.1662 15.9855 21.1748C15.5072 21.3829 14.9999 21.012 14.9999 20.4903ZM4.24876 15.4943C4.11648 15.2012 3.83167 15.0006 3.51018 15.0006C2.98848 15.0006 2.61761 15.5079 2.82573 15.9863C3.8343 18.3046 5.69591 20.1662 8.01424 21.1748C8.49263 21.3829 8.99989 21.012 8.99989 20.4903C8.99989 20.1689 8.79927 19.884 8.50625 19.7518C6.62003 18.9003 5.10026 17.3805 4.24876 15.4943ZM11.9999 6.50066C11.8065 6.50066 11.6157 6.51062 11.4279 6.53C11.0158 6.57251 10.6474 6.27296 10.6049 5.86093C10.5623 5.4489 10.8619 5.08043 11.2739 5.03792C11.5128 5.01327 11.755 5.00066 11.9999 5.00066C15.3315 5.00066 18.1178 7.3273 18.826 10.4436C18.9178 10.8475 18.6647 11.2494 18.2608 11.3412C17.8569 11.433 17.4551 11.1799 17.3633 10.776C16.8069 8.32768 14.6159 6.50066 11.9999 6.50066ZM9.12095 6.40131C9.3532 6.74429 9.26343 7.2106 8.92045 7.44285C7.45832 8.43293 6.49993 10.105 6.49993 12.0007C6.49993 13.1429 6.84732 14.2018 7.44211 15.0801C7.67436 15.4231 7.5846 15.8894 7.24162 16.1217C6.89864 16.3539 6.43233 16.2642 6.20008 15.9212C5.44247 14.8024 4.99993 13.4521 4.99993 12.0007C4.99993 9.58642 6.22277 7.45803 8.07941 6.20081C8.42239 5.96857 8.8887 6.05833 9.12095 6.40131ZM18.2305 12.9056C18.6304 13.0133 18.8674 13.4249 18.7597 13.8248C17.957 16.8057 15.2358 19.0007 11.9999 19.0007C10.8284 19.0007 9.72204 18.7123 8.75009 18.202C8.38335 18.0094 8.24213 17.556 8.43468 17.1893C8.62723 16.8226 9.08062 16.6813 9.44736 16.8739C10.2094 17.274 11.0771 17.5007 11.9999 17.5007C14.5405 17.5007 16.6805 15.7775 17.3113 13.4348C17.419 13.0349 17.8305 12.7979 18.2305 12.9056ZM11.9999 8.00066C9.79079 8.00066 7.99993 9.79152 7.99993 12.0007C7.99993 14.2098 9.79079 16.0007 11.9999 16.0007C14.2091 16.0007 15.9999 14.2098 15.9999 12.0007C15.9999 9.79152 14.2091 8.00066 11.9999 8.00066Z"]},$r={name:"code-circle",regular:["M14.5452 6.06083C14.9259 6.22399 15.1023 6.66489 14.9391 7.04562L10.4394 17.5456C10.2762 17.9263 9.83534 18.1027 9.45462 17.9396C9.07389 17.7764 8.89752 17.3355 9.06068 16.9548L13.5604 6.45477C13.7236 6.07404 14.1645 5.89767 14.5452 6.06083ZM8.80747 9.24826C9.08457 9.55614 9.05961 10.0304 8.75172 10.3074L6.87114 12L8.75172 13.6925C9.05961 13.9696 9.08457 14.4438 8.80747 14.7517C8.53038 15.0596 8.05616 15.0845 7.74828 14.8075L5.24828 12.5574C5.09024 12.4152 5 12.2126 5 12C5 11.7874 5.09024 11.5847 5.24828 11.4425L7.74828 9.19251C8.05616 8.91541 8.53038 8.94037 8.80747 9.24826ZM15.1925 9.24826C14.9154 9.55614 14.9404 10.0304 15.2483 10.3074L17.1289 12L15.2483 13.6925C14.9404 13.9696 14.9154 14.4438 15.1925 14.7517C15.4696 15.0596 15.9438 15.0845 16.2517 14.8075L18.7517 12.5574C18.9098 12.4152 19 12.2126 19 12C19 11.7874 18.9098 11.5847 18.7517 11.4425L16.2517 9.19251C15.9438 8.91541 15.4696 8.94037 15.1925 9.24826ZM22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"],filled:["M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM14.9391 7.04562L10.4394 17.5456C10.2762 17.9263 9.83534 18.1027 9.45462 17.9396C9.07389 17.7764 8.89752 17.3355 9.06068 16.9548L13.5604 6.45477C13.7236 6.07404 14.1645 5.89767 14.5452 6.06083C14.9259 6.22399 15.1023 6.66489 14.9391 7.04562ZM8.75172 10.3074L6.87114 12L8.75172 13.6925C9.05961 13.9696 9.08457 14.4438 8.80747 14.7517C8.53038 15.0596 8.05616 15.0845 7.74828 14.8075L5.24828 12.5574C5.09024 12.4152 5 12.2126 5 12C5 11.7874 5.09024 11.5847 5.24828 11.4425L7.74828 9.19251C8.05616 8.91541 8.53038 8.94037 8.80747 9.24826C9.08457 9.55614 9.05961 10.0304 8.75172 10.3074ZM15.1925 9.24826C15.4696 8.94037 15.9438 8.91541 16.2517 9.19251L18.7517 11.4425C18.9098 11.5847 19 11.7874 19 12C19 12.2126 18.9098 12.4152 18.7517 12.5574L16.2517 14.8075C15.9438 15.0845 15.4696 15.0596 15.1925 14.7517C14.9154 14.4438 14.9404 13.9696 15.2483 13.6925L17.1289 12L15.2483 10.3074C14.9404 10.0304 14.9154 9.55614 15.1925 9.24826Z"]},xr={name:"text-align",regular:["M2 5.75C2 5.33579 2.33579 5 2.75 5H18.25C18.6642 5 19 5.33579 19 5.75C19 6.16421 18.6642 6.5 18.25 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75ZM2 18.75C2 18.3358 2.33579 18 2.75 18H13.25C13.6642 18 14 18.3358 14 18.75C14 19.1642 13.6642 19.5 13.25 19.5H2.75C2.33579 19.5 2 19.1642 2 18.75ZM2.75 11.5C2.33579 11.5 2 11.8358 2 12.25C2 12.6642 2.33579 13 2.75 13H21.25C21.6642 13 22 12.6642 22 12.25C22 11.8358 21.6642 11.5 21.25 11.5H2.75Z"],filled:["M2 6C2 5.44772 2.44772 5 3 5H18C18.5523 5 19 5.44772 19 6C19 6.55228 18.5523 7 18 7H3C2.44772 7 2 6.55228 2 6ZM2 18C2 17.4477 2.44772 17 3 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19H3C2.44772 19 2 18.5523 2 18ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H3Z"]},wr={name:"comment-note",regular:["M12 3C12 1.89543 12.8954 1 14 1H21C22.1046 1 23 1.89543 23 3V9C23 10.1046 22.1046 11 21 11H14C12.8954 11 12 10.1046 12 9V3ZM14.5 4C14.2239 4 14 4.22386 14 4.5C14 4.77614 14.2239 5 14.5 5H20.5C20.7761 5 21 4.77614 21 4.5C21 4.22386 20.7761 4 20.5 4H14.5ZM14.5 7C14.2239 7 14 7.22386 14 7.5C14 7.77614 14.2239 8 14.5 8H20.5C20.7761 8 21 7.77614 21 7.5C21 7.22386 20.7761 7 20.5 7H14.5Z","M5.25 3H11V4.5H5.25C4.2835 4.5 3.5 5.2835 3.5 6.25V14.75C3.5 15.7165 4.2835 16.5 5.25 16.5H7.49879L7.49986 20.2506L12.5135 16.5H18.75C19.7165 16.5 20.5 15.7165 20.5 14.75V12H21C21.3506 12 21.6872 11.9398 22 11.8293V14.75C22 16.5449 20.5449 18 18.75 18H13.0125L7.99868 21.7507C7.44585 22.1642 6.6625 22.0512 6.24901 21.4984C6.08736 21.2822 6 21.0196 6 20.7499L5.99921 18H5.25C3.45507 18 2 16.5449 2 14.75V6.25C2 4.45507 3.45507 3 5.25 3Z"],filled:["M14 1C12.8954 1 12 1.89543 12 3V9C12 10.1046 12.8954 11 14 11H21C22.1046 11 23 10.1046 23 9V3C23 1.89543 22.1046 1 21 1H14ZM14 4.5C14 4.22386 14.2239 4 14.5 4H20.5C20.7761 4 21 4.22386 21 4.5C21 4.77614 20.7761 5 20.5 5H14.5C14.2239 5 14 4.77614 14 4.5ZM14 7.5C14 7.22386 14.2239 7 14.5 7H20.5C20.7761 7 21 7.22386 21 7.5C21 7.77614 20.7761 8 20.5 8H14.5C14.2239 8 14 7.77614 14 7.5ZM5.25 3H11V9C11 10.6569 12.3431 12 14 12H21C21.3506 12 21.6872 11.9398 22 11.8293V14.75C22 16.5449 20.5449 18 18.75 18H13L8 21.75C7.17595 22.368 6 21.7801 6 20.75V18H5.25C3.45508 18 2 16.5449 2 14.75V6.25C2 4.45507 3.45507 3 5.25 3Z"]},Er={name:"library",regular:["M4 3H5C6.05382 3 6.91812 3.8164 6.99451 4.85081L7 5V19C7 20.0538 6.1836 20.9181 5.14919 20.9945L5 21H4C2.94618 21 2.08188 20.1836 2.00549 19.1492L2 19V5C2 3.94618 2.8164 3.08188 3.85081 3.00549L4 3H5H4ZM10 3H11C12.0538 3 12.9181 3.8164 12.9945 4.85081L13 5V19C13 20.0538 12.1836 20.9181 11.1492 20.9945L11 21H10C8.94618 21 8.08188 20.1836 8.00549 19.1492L8 19V5C8 3.94618 8.8164 3.08188 9.85081 3.00549L10 3H11H10ZM16.9743 5.0005C17.8138 5.0005 18.5825 5.5311 18.8643 6.34636L18.9113 6.5025L21.9263 18.2485C22.1888 19.2689 21.613 20.3094 20.6295 20.6402L20.4863 20.6825L19.5173 20.9315C19.3513 20.9735 19.1833 20.9945 19.0193 20.9945C18.1807 20.9945 17.4112 20.463 17.1302 19.6476L17.0833 19.4915L14.0673 7.7465C13.8058 6.72514 14.3807 5.68555 15.3649 5.35484L15.5083 5.3125L16.4763 5.0635C16.6423 5.0205 16.8103 5.0005 16.9743 5.0005ZM5 4.5H4C3.75467 4.5 3.55042 4.67778 3.50806 4.91043L3.5 5V19C3.5 19.2444 3.67699 19.4494 3.91016 19.4919L4 19.5H5C5.24533 19.5 5.44958 19.3222 5.49194 19.0896L5.5 19V5C5.5 4.75556 5.32301 4.55062 5.08984 4.50809L5 4.5ZM11 4.5H10C9.75467 4.5 9.55042 4.67778 9.50806 4.91043L9.5 5V19C9.5 19.2444 9.67699 19.4494 9.91016 19.4919L10 19.5H11C11.2453 19.5 11.4496 19.3222 11.4919 19.0896L11.5 19V5C11.5 4.75556 11.323 4.55062 11.0898 4.50809L11 4.5ZM16.9753 6.5005L16.9119 6.50437L16.8493 6.5165L15.8813 6.7645C15.7063 6.8095 15.6143 6.9275 15.5743 6.9955C15.5431 7.0483 15.4985 7.14718 15.5049 7.27422L15.5203 7.3745L18.5363 19.1185C18.6023 19.3765 18.8333 19.4945 19.0193 19.4945L19.0818 19.4906L19.1443 19.4785L20.1133 19.2295C20.3515 19.1691 20.5052 18.9458 20.4879 18.7102L20.4733 18.6215L17.4583 6.8755C17.3913 6.6185 17.1613 6.5005 16.9753 6.5005Z"],filled:["M5.5 3C6.328 3 7 3.672 7 4.5V19.5C7 20.328 6.328 21 5.5 21H3.5C2.672 21 2 20.328 2 19.5V4.5C2 3.672 2.672 3 3.5 3H5.5ZM11.5 3C12.328 3 13 3.672 13 4.5V19.5C13 20.328 12.328 21 11.5 21H9.5C8.672 21 8 20.328 8 19.5V4.5C8 3.672 8.672 3 9.5 3H11.5ZM18.781 6.1238L21.995 18.6428C22.201 19.4448 21.718 20.2628 20.915 20.4688L19.039 20.9498C18.236 21.1558 17.419 20.6728 17.213 19.8698L13.999 7.3528C13.793 6.5498 14.276 5.7328 15.079 5.5268L16.955 5.0438C17.758 4.8388 18.575 5.3228 18.781 6.1238Z"]},kr={name:"bot",regular:["M17.7534 13.9994C18.9961 13.9994 20.0034 15.0068 20.0034 16.2494V17.1545C20.0034 18.2482 19.526 19.2874 18.6961 19.9998C17.1307 21.3437 14.8904 22.0006 12.0004 22.0006C9.11087 22.0006 6.87205 21.344 5.30918 20.0003C4.48056 19.2879 4.00391 18.2495 4.00391 17.1567V16.2494C4.00391 15.0068 5.01127 13.9994 6.25391 13.9994H17.7534ZM17.7534 15.4994H6.25391C5.83969 15.4994 5.50391 15.8352 5.50391 16.2494V17.1567C5.50391 17.8124 5.7899 18.4354 6.28707 18.8629C7.54516 19.9445 9.44117 20.5006 12.0004 20.5006C14.5603 20.5006 16.4582 19.9442 17.7191 18.8617C18.2169 18.4342 18.5034 17.8107 18.5034 17.1545V16.2494C18.5034 15.8352 18.1676 15.4994 17.7534 15.4994ZM11.8989 2.00685L12.0007 2C12.3804 2 12.6942 2.28215 12.7438 2.64823L12.7507 2.75L12.7499 3.499L16.2504 3.49951C17.493 3.49951 18.5004 4.50687 18.5004 5.74951V10.2541C18.5004 11.4967 17.493 12.5041 16.2504 12.5041H7.75036C6.50772 12.5041 5.50036 11.4967 5.50036 10.2541V5.74951C5.50036 4.50687 6.50772 3.49951 7.75036 3.49951L11.2499 3.499L11.2507 2.75C11.2507 2.3703 11.5328 2.05651 11.8989 2.00685L12.0007 2L11.8989 2.00685ZM16.2504 4.99951H7.75036C7.33615 4.99951 7.00036 5.33529 7.00036 5.74951V10.2541C7.00036 10.6683 7.33615 11.0041 7.75036 11.0041H16.2504C16.6646 11.0041 17.0004 10.6683 17.0004 10.2541V5.74951C17.0004 5.33529 16.6646 4.99951 16.2504 4.99951ZM9.74965 6.49951C10.4396 6.49951 10.9989 7.05883 10.9989 7.74879C10.9989 8.43876 10.4396 8.99808 9.74965 8.99808C9.05969 8.99808 8.50036 8.43876 8.50036 7.74879C8.50036 7.05883 9.05969 6.49951 9.74965 6.49951ZM14.2424 6.49951C14.9324 6.49951 15.4917 7.05883 15.4917 7.74879C15.4917 8.43876 14.9324 8.99808 14.2424 8.99808C13.5524 8.99808 12.9931 8.43876 12.9931 7.74879C12.9931 7.05883 13.5524 6.49951 14.2424 6.49951Z"],filled:["M17.7534 13.9994C18.9961 13.9994 20.0034 15.0068 20.0034 16.2494V17.1545C20.0034 18.2482 19.526 19.2874 18.6961 19.9998C17.1307 21.3437 14.8904 22.0006 12.0004 22.0006C9.11087 22.0006 6.87205 21.344 5.30918 20.0003C4.48056 19.2879 4.00391 18.2495 4.00391 17.1567V16.2494C4.00391 15.0068 5.01127 13.9994 6.25391 13.9994H17.7534ZM11.8989 2.00685L12.0007 2C12.3804 2 12.6942 2.28215 12.7438 2.64823L12.7507 2.75L12.7499 3.499L16.2504 3.49951C17.493 3.49951 18.5004 4.50687 18.5004 5.74951V10.2541C18.5004 11.4967 17.493 12.5041 16.2504 12.5041H7.75036C6.50772 12.5041 5.50036 11.4967 5.50036 10.2541V5.74951C5.50036 4.50687 6.50772 3.49951 7.75036 3.49951L11.2499 3.499L11.2507 2.75C11.2507 2.3703 11.5328 2.05651 11.8989 2.00685L12.0007 2L11.8989 2.00685ZM9.74965 6.49951C9.05969 6.49951 8.50036 7.05883 8.50036 7.74879C8.50036 8.43876 9.05969 8.99808 9.74965 8.99808C10.4396 8.99808 10.9989 8.43876 10.9989 7.74879C10.9989 7.05883 10.4396 6.49951 9.74965 6.49951ZM14.2424 6.49951C13.5524 6.49951 12.9931 7.05883 12.9931 7.74879C12.9931 8.43876 13.5524 8.99808 14.2424 8.99808C14.9324 8.99808 15.4917 8.43876 15.4917 7.74879C15.4917 7.05883 14.9324 6.49951 14.2424 6.49951Z"]},Lr={name:"lightbulb",regular:["M12 2.00098C16.0041 2.00098 19.25 5.24691 19.25 9.25098C19.25 11.347 18.3493 13.2707 16.5869 14.9929C16.51 15.0681 16.4504 15.1586 16.4118 15.2582L16.3804 15.3605L15.2493 20.2561C15.0266 21.22 14.2035 21.9183 13.2302 21.993L13.057 21.9996H10.9433C9.95374 21.9996 9.08791 21.3545 8.79629 20.4228L8.75088 20.2555L7.62132 15.3607C7.58904 15.2208 7.51728 15.0931 7.41456 14.9928C5.73515 13.3526 4.83778 11.5297 4.75613 9.54923L4.75 9.25098L4.75388 9.01166C4.88014 5.11837 8.07601 2.00098 12 2.00098ZM14.115 18.499H9.884L10.2125 19.9182C10.2831 20.2245 10.5357 20.4504 10.8401 20.4925L10.9433 20.4996H13.057C13.3713 20.4996 13.6481 20.3044 13.7577 20.0174L13.7878 19.9184L14.115 18.499ZM12 3.50098C8.89821 3.50098 6.37006 5.95699 6.25415 9.03042L6.25 9.25098L6.25672 9.52799C6.33286 11.0913 7.05722 12.5471 8.46262 13.9197C8.72675 14.1777 8.92265 14.496 9.03422 14.846L9.08291 15.0235L9.538 16.999H14.461L14.9189 15.0228C15.0019 14.6634 15.1718 14.3309 15.4124 14.0539L15.5386 13.9201C16.9432 12.5475 17.6672 11.0916 17.7433 9.52803L17.75 9.25098L17.7458 9.03042C17.6299 5.95699 15.1018 3.50098 12 3.50098Z"],filled:["M15.538 18.999L15.2473 20.2575C15.0241 21.2208 14.2013 21.9184 13.2285 21.993L13.0554 21.9996H10.9437C9.95426 21.9996 9.0885 21.3547 8.79678 20.4232L8.75135 20.2559L8.461 18.999H15.538ZM12 2.00098C16.0041 2.00098 19.25 5.24691 19.25 9.25098C19.25 11.3875 18.3144 13.3443 16.4846 15.0917C16.4493 15.1254 16.4247 15.1687 16.4137 15.2162L15.886 17.499H8.114L7.58801 15.2164C7.57702 15.1688 7.55234 15.1255 7.51701 15.0917C5.68616 13.3443 4.75 11.3875 4.75 9.25098C4.75 5.24691 7.99593 2.00098 12 2.00098Z"]},Pr={name:"apps-add-in",regular:["M10.5 3C11.7426 3 12.75 4.00736 12.75 5.25V11.25H18.75C19.9926 11.25 21 12.2574 21 13.5V18.75C21 19.9926 19.9926 21 18.75 21H5.25C4.00736 21 3 19.9926 3 18.75V5.25C3 4.00736 4.00736 3 5.25 3H10.5ZM11.25 12.75H4.5V18.75C4.5 19.1642 4.83579 19.5 5.25 19.5H11.249L11.25 12.75ZM18.75 12.75H12.749V19.5H18.75C19.1642 19.5 19.5 19.1642 19.5 18.75V13.5C19.5 13.0858 19.1642 12.75 18.75 12.75ZM10.5 4.5H5.25C4.83579 4.5 4.5 4.83579 4.5 5.25V11.25H11.25V5.25C11.25 4.83579 10.9142 4.5 10.5 4.5ZM17.8982 2.00685L18 2C18.3797 2 18.6935 2.28215 18.7432 2.64823L18.75 2.75V5.25H21.25C21.6297 5.25 21.9435 5.53215 21.9932 5.89823L22 6C22 6.3797 21.7178 6.69349 21.3518 6.74315L21.25 6.75H18.75V9.25C18.75 9.6297 18.4678 9.94349 18.1018 9.99315L18 10C17.6203 10 17.3065 9.71785 17.2568 9.35177L17.25 9.25V6.75H14.75C14.3703 6.75 14.0565 6.46785 14.0068 6.10177L14 6C14 5.6203 14.2822 5.30651 14.6482 5.25685L14.75 5.25H17.25V2.75C17.25 2.3703 17.5322 2.05651 17.8982 2.00685Z"],filled:["M10.5 3C11.8807 3 13 4.11929 13 5.5V11H18.5C19.8807 11 21 12.1193 21 13.5V18.5C21 19.8807 19.8807 21 18.5 21H5.5C4.11929 21 3 19.8807 3 18.5V5.5C3 4.11929 4.11929 3 5.5 3H10.5ZM11 13H5V18.5C5 18.7761 5.22386 19 5.5 19H11V13ZM18.5 13H13V19H18.5C18.7761 19 19 18.7761 19 18.5V13.5C19 13.2239 18.7761 13 18.5 13ZM10.5 5H5.5C5.22386 5 5 5.22386 5 5.5V11H11V5.5C11 5.22386 10.7761 5 10.5 5ZM17.8834 2.00673L18 2C18.5128 2 18.9355 2.38604 18.9933 2.88338L19 3V5H21C21.5128 5 21.9355 5.38604 21.9933 5.88338L22 6C22 6.51284 21.614 6.93551 21.1166 6.99327L21 7H19V9C19 9.51284 18.614 9.93551 18.1166 9.99327L18 10C17.4872 10 17.0645 9.61396 17.0067 9.11662L17 9V7H15C14.4872 7 14.0645 6.61396 14.0067 6.11662L14 6C14 5.48716 14.386 5.06449 14.8834 5.00673L15 5H17V3C17 2.48716 17.386 2.06449 17.8834 2.00673L18 2L17.8834 2.00673Z"]},Hr={name:"send",regular:["M5.69362 11.9997L2.29933 3.2715C2.0631 2.66403 2.65544 2.08309 3.2414 2.28959L3.33375 2.32885L21.3337 11.3288C21.852 11.588 21.8844 12.2975 21.4309 12.6129L21.3337 12.6705L3.33375 21.6705C2.75077 21.962 2.11746 21.426 2.2688 20.8234L2.29933 20.7278L5.69362 11.9997L2.29933 3.2715L5.69362 11.9997ZM4.4021 4.54007L7.01109 11.2491L13.6387 11.2497C14.0184 11.2497 14.3322 11.5318 14.3818 11.8979L14.3887 11.9997C14.3887 12.3794 14.1065 12.6932 13.7404 12.7428L13.6387 12.7497L7.01109 12.7491L4.4021 19.4593L19.3213 11.9997L4.4021 4.54007Z"],filled:["M12.8147 12.1969L5.28344 13.4521C5.10705 13.4815 4.95979 13.6029 4.89723 13.7704L2.29933 20.7278C2.05066 21.3673 2.72008 21.9773 3.33375 21.6705L21.3337 12.6705C21.8865 12.3941 21.8865 11.6052 21.3337 11.3288L3.33375 2.32885C2.72008 2.02201 2.05066 2.63206 2.29933 3.2715L4.89723 10.2289C4.95979 10.3964 5.10705 10.5178 5.28344 10.5472L12.8147 11.8024C12.9236 11.8205 12.9972 11.9236 12.9791 12.0325C12.965 12.1168 12.899 12.1829 12.8147 12.1969Z"]},Br={name:"star",regular:["M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 0 1-1.96 1.42L12 18.86l-4.72 2.48a1.35 1.35 0 0 1-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78Zm1.2.94L9.75 8.6c-.2.4-.58.68-1.02.74l-5.05.74 3.66 3.56c.32.3.46.76.39 1.2l-.87 5.02 4.52-2.37c.4-.2.86-.2 1.26 0l4.51 2.37-.86-5.03c-.07-.43.07-.88.39-1.2l3.65-3.55-5.05-.74a1.35 1.35 0 0 1-1.01-.74L12 4.04Z"],filled:["M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 0 1-1.96 1.42L12 18.86l-4.72 2.48a1.35 1.35 0 0 1-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78Z"]},Tr={name:"checkmark",regular:["M4.53033 12.9697C4.23744 12.6768 3.76256 12.6768 3.46967 12.9697C3.17678 13.2626 3.17678 13.7374 3.46967 14.0303L7.96967 18.5303C8.26256 18.8232 8.73744 18.8232 9.03033 18.5303L20.0303 7.53033C20.3232 7.23744 20.3232 6.76256 20.0303 6.46967C19.7374 6.17678 19.2626 6.17678 18.9697 6.46967L8.5 16.9393L4.53033 12.9697Z"],filled:["M8.5 16.5858L4.70711 12.7929C4.31658 12.4024 3.68342 12.4024 3.29289 12.7929C2.90237 13.1834 2.90237 13.8166 3.29289 14.2071L7.79289 18.7071C8.18342 19.0976 8.81658 19.0976 9.20711 18.7071L20.2071 7.70711C20.5976 7.31658 20.5976 6.68342 20.2071 6.29289C19.8166 5.90237 19.1834 5.90237 18.7929 6.29289L8.5 16.5858Z"]},Ca={[Us.name]:Us,[js.name]:js,[Ws.name]:Ws,[Gs.name]:Gs,[Xs.name]:Xs,[qs.name]:qs,[Js.name]:Js,[Ys.name]:Ys,[Qs.name]:Qs,[or.name]:or,[er.name]:er,[tr.name]:tr,[Ks.name]:Ks,[Li.name]:Li,[ir.name]:ir,[sr.name]:sr,[rr.name]:rr,[nr.name]:nr,[ar.name]:ar,[lr.name]:lr,[dr.name]:dr,[cr.name]:cr,[hr.name]:hr,[ur.name]:ur,[pr.name]:pr,[gr.name]:gr,[mr.name]:mr,[fr.name]:fr,[br.name]:br,[_r.name]:_r,[vr.name]:vr,[yr.name]:yr,[Cr.name]:Cr,[Sr.name]:Sr,[$r.name]:$r,[xr.name]:xr,[wr.name]:wr,[Er.name]:Er,[kr.name]:kr,[Lr.name]:Lr,[Pr.name]:Pr,[Hr.name]:Hr,[Br.name]:Br,[Tr.name]:Tr},Sa={xs:"xs",sm:"s",md:"m",lg:"l",xl:"xl"};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=e=>e??M,Pi=y`
  /**
 * Remove the default button styles
 */
  border-radius: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  display: inline-flex;
  align-items: center;
  border: 0 solid transparent;
  cursor: pointer;
`,Or=y`
  /**
 * Remove the default link styles
 */
  text-decoration: none;
  outline: none;
`,D={display:"inline-flex",justifyContent:"center",alignItems:"center",backgroundColor:"var(--ds-theme-background-accent-strong-normal, #0067b8)",maxHeight:"3rem",minWidth:"3rem",borderColor:"var(--ds-color-transparent, transparent)",borderStyle:"solid",color:"var(--ds-theme-foreground-accent-strong-normal, #fff)",textDecoration:"none",borderWidth:"var(--ds-border-width, 0.125rem)",gap:"0.75rem",boxShadow:"var(--ds-depth-none, 0 0 0 0 rgba(0, 0, 0, 0.12), 0 0 0 0 rgba(0, 0, 0, 0.12))",borderRadius:"var(--ds-radii-xs)",outline:"0.1875rem dotted currentcolor",outlineOffset:"-0.375rem",opacity:"1",cursor:"pointer",pointerEvents:"auto",paddingInlineEnd:"var(--ds-spacing-m, 1rem)",paddingInlineStart:"var(--ds-spacing-m, 1rem)",paddingBlockEnd:"var(--ds-spacing-s, 0.75rem)",paddingBlockStart:"var(--ds-spacing-s, 0.75rem)",boxSizing:"border-box"},$a=y`
  button {
    ${Pi};
  }

  a {
    ${Or};
  }

  :host button,
  :host a,
  :host span,
  :host div {
    justify-content: var(--ds-button-justify-content, ${r(D.justifyContent)});
    align-items: var(--ds-button-align-items, ${r(D.alignItems)});
    display: var(--ds-button-display, ${r(D.display)});
    border-style: var(--ds-button-border-style-solid, ${r(D.borderStyle)});
    text-decoration: var(--ds-button-text-decoration, ${r(D.textDecoration)});
    border-width: var(--ds-button-border-width, ${r(D.borderWidth)});
    box-sizing: var(--ds-button-box-sizing, ${r(D.boxSizing)});
    max-height: var(--ds-button-max-height, ${r(D.maxHeight)});
    min-width: var(--ds-button-min-width, ${r(D.minWidth)});
    gap: var(--ds-button-gap, ${r(D.gap)});
    box-shadow: var(--ds-button-box-shadow, ${r(D.boxShadow)});
    font-weight: var(--ds-button-font-weight, ${r(ko.fontWeight)});
    font-size: var(--ds-button-font-size, ${r(ko.fontSize)});
    line-height: var(--ds-button-line-height, ${r(ko.lineHeight)});
    letter-spacing: var(
      --ds-button-letter-spacing,
      ${r(ko.letterSpacing)}
    );
    padding-inline-start: var(
      --ds-button-padding-inline-start,
      ${r(D.paddingInlineStart)}
    );
    padding-inline-end: var(
      --ds-button-padding-inline-end,
      ${r(D.paddingInlineEnd)}
    );
    padding-block-start: var(
      --ds-button-padding-block-start,
      ${r(D.paddingBlockStart)}
    );
    padding-block-end: var(
      --ds-button-padding-block-end,
      ${r(D.paddingBlockEnd)}
    );
    background-color: var(
      --ds-button-background-color,
      ${r(D.backgroundColor)}
    );
    color: var(--ds-button-color, ${r(D.color)}) !important;
    border-color: var(--ds-button-border-color, ${r(D.borderColor)});
    border-radius: var(--ds-button-border-radius, ${r(D.borderRadius)});
    cursor: var(--ds-button-cursor, ${r(D.cursor)});
    pointer-events: var(--ds-button-pointer-events, ${r(D.pointerEvents)});
    opacity: var(--ds-button-opacity, ${r(D.opacity)});

    --ds-icon-color: var(--ds-button-color);
  }

  :host(:focus) button,
  :host(:focus) a {
    outline: var(--ds-button-outline, ${r(D.outline)});
    outline-offset: var(--ds-button-outline-offset, ${r(D.outlineOffset)});
  }

  :host([appearance='button--primary']) {
    --ds-button-color: var(--ds-theme-foreground-accent-strong-normal, #fff) !important;
    --ds-button-background-color: var(--ds-theme-background-accent-strong-normal, #0067b8);
    --ds-button-border-color: var(--ds-color-transparent, transparent);
  }

  :host([appearance='button--primary']:hover:not([disabled])) {
    --ds-button-background-color: var(--ds-theme-background-accent-strong-hover, #006dc1);
  }

  :host([appearance='button--primary']:active:not([disabled])) {
    --ds-button-background-color: var(--ds-theme-background-accent-strong-pressed, #004275);
  }

  :host([appearance='button--secondary']) {
    --ds-button-background-color: var(--ds-color-transparent, transparent);
    --ds-button-color: var(--ds-theme-foreground-accent-subtle-normal, #2a446f) !important;
    --ds-button-border-color: var(--ds-theme-border-accent-subtle-normal, #2a446f);
  }

  :host([appearance='button--secondary']:active) {
    --ds-button-color: var(--ds-theme-foreground-accent-subtle-pressed, #17253d) !important;
    --ds-button-border-color: var(--ds-theme-border-accent-subtle-pressed, #17253d);
  }

  :host([appearance='button--tertiary']) {
    --ds-button-background-color: var(--ds-color-neutral-bright-lime, #89c402);
    --ds-button-color: var(--ds-color-neutral-black, #000) !important;
    --ds-button-border-color: transparent;
  }

  :host([appearance='button--tertiary']:hover) {
    --ds-button-background-color: rgba(137, 196, 2, 0.8);
  }

  :host([appearance='button--tertiary']:active) {
    --ds-button-background-color: rgba(137, 196, 2, 0.5);
  }

  :host([appearance='button--ghost']) {
    --ds-button-background-color: transparent;
    --ds-button-color: var(--ds-theme-foreground-accent-subtle-normal, #2a446f) !important;
    --ds-button-border-color: transparent;
  }

  :host([appearance='button--ghost']:hover) {
    --ds-button-background-color: var(
      --ds-theme-background-accent-subtle-normal,
      rgba(0, 85, 151, 0.15)
    );
    --ds-button-color: var(--ds-theme-foreground-accent-subtle-hover, #263e65) !important;
  }

  :host([appearance='button--ghost']:active) {
    --ds-button-color: var(--ds-theme-foreground-accent-subtle-pressed, #17253d) !important;
  }

  :host([disabled]) {
    --ds-button-opacity: 0.2;
    --ds-button-pointer-events: none;
    --ds-button-cursor: pointer;
  }

  :host([size='medium']) {
    --ds-button-gap: var(--ds-spacing-xs, 0.5rem);
    --ds-button-padding-inline-start: var(--ds-spacing-m);
    --ds-button-padding-inline-end: var(--ds-spacing-m);
    --ds-button-padding-block-start: var(--ds-spacing-xs);
    --ds-button-padding-block-end: var(--ds-spacing-xs);
    --ds-button-max-height: 2.5rem;
  }

  :host([size='medium']) button,
  :host([size='medium']) a,
  :host([size='medium']) span,
  :host([size='medium']) div {
    --ds-button-min-width: 2.5rem;
  }

  :host([size='small']) {
    --ds-button-gap: var(--ds-spacing-2xs, 0.25rem);
    --ds-button-padding-inline-start: var(--ds-spacing-s);
    --ds-button-padding-inline-end: var(--ds-spacing-s);
    --ds-button-padding-block-start: var(--ds-spacing-2xs);
    --ds-button-padding-block-end: var(--ds-spacing-2xs);
    --ds-button-max-height: 2rem;
  }

  :host([size='small']) button,
  :host([size='small']) a,
  :host([size='small']) span,
  :host([size='small']) div {
    --ds-button-min-width: 2rem;
  }

  :host([shape='rounded']) {
    --ds-button-border-radius: var(--ds-radii-s) !important;
  }

  :host([shape='circle']) {
    --ds-button-border-radius: var(--ds-radii-circle) !important;
  }

  :host([appearance='button--tag']) {
    --ds-button-background-color: var(
      --ds-theme-background-accent-subtle-normal,
      rgba(0, 85, 151, 0.15)
    );
    --ds-button-color: var(--ds-theme-foreground-accent-subtle-normal, #2a446f) !important;
    --ds-button-border-color: transparent;
    --ds-button-border-radius: var(--ds-radii-xs);
    --ds-button-padding-inline-start: var(--ds-spacing-m);
    --ds-button-padding-inline-end: var(--ds-spacing-m);
    --ds-button-padding-block-start: var(--ds-spacing-2xs);
    --ds-button-padding-block-end: var(--ds-spacing-2xs);
    --ds-button-font-size: var(--ds-label-m-font-size, 0.875rem);
    --ds-button-font-weight: var(--ds-label-m-font-weight, 600);
    --ds-button-line-height: var(--ds-label-m-line-height, 1.25rem);
    --ds-button-max-height: 32px;
  }

  :host([appearance='button--tag']:hover) {
    --ds-button-background-color: var(
      --ds-theme-background-accent-subtle-hover,
      rgba(0, 85, 151, 0.4)
    );
    --ds-button-color: var(--ds-theme-foreground-accent-subtle-hover, #263e65) !important;
    --ds-button-text-decoration: underline;
  }

  :host([appearance='button--tag']:active) {
    --ds-button-background-color: var(--ds-theme-background-accent-strong-pressed, #004275);
    --ds-button-color: var(--ds-theme-foreground-accent-strong-pressed, #fff) !important;
  }

  :host([icon-only]),
  :host([shape='circle']) {
    --ds-button-padding-inline-start: 0.75rem;
    --ds-button-padding-inline-end: 0.75rem;
    --ds-button-padding-block-start: 0.875rem;
    --ds-button-padding-block-end: 0.875rem;
  }

  :host([icon-only][size='medium']) {
    --ds-button-padding-inline-start: 0.5rem;
    --ds-button-padding-inline-end: 0.5rem;
    --ds-button-padding-block-start: 0.75rem;
    --ds-button-padding-block-end: 0.75rem;
  }

  :host([icon-only][size='small']) {
    --ds-button-padding-inline-start: 0.25rem;
    --ds-button-padding-inline-end: 0.25rem;
    --ds-button-padding-block-start: 0.5rem;
    --ds-button-padding-block-end: 0.5rem;
  }

  :host([icon-only]) ::slotted([slot='button__text']) {
    position: absolute;
    overflow: hidden;
    width: 1rem;
    height: 1rem;
    clip: rect(1px, 1px, 1px, 1px);
  }
`;var xa=Object.defineProperty,U=(e,t,o,i)=>{for(var s=void 0,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=l(t,o,s)||s);return s&&xa(t,o,s),s};const Hi=e=>{class t extends e{constructor(){super(...arguments),this.ariaLabel=null,this.ariaControls=null,this.ariaDisabled=null,this.ariaHasPopup=null,this.ariaExpanded=null,this.ariaPressed=null,this.autoFocus=!1,this.disabled=!1,this.formNoValidate=!1,this.type="button"}renderButton(i){return g`
        <button
          aria-label=${T(this.ariaLabel)}
          aria-controls=${T(this.ariaControls)}
          aria-disabled=${T(this.ariaDisabled)}
          aria-haspopup=${T(this.ariaHasPopup)}
          aria-expanded=${T(this.ariaExpanded)}
          aria-pressed=${T(this.ariaPressed)}
          ?autofocus=${T(this.autofocus)}
          ?disabled=${T(this.disabled)}
          form=${T(this.form)}
          formaction=${T(this.formAction)}
          formmethod=${T(this.formMethod)}
          ?formnovalidate=${T(this.formNoValidate)}
          formtarget=${T(this.formTarget)}
          name=${T(this.name)}
          popovertarget=${T(this.popoverTarget)}
          popovertargetaction=${T(this.popoverTargetAction)}
          type=${T(this.type)}
          value=${T(this.value)}
        >
          ${i}
        </button>
      `}}return U([c({attribute:"aria-label"})],t.prototype,"ariaLabel"),U([c({attribute:"aria-controls"})],t.prototype,"ariaControls"),U([c({attribute:"aria-disabled"})],t.prototype,"ariaDisabled"),U([c({attribute:"aria-haspopup"})],t.prototype,"ariaHasPopup"),U([c({attribute:"aria-expanded"})],t.prototype,"ariaExpanded"),U([c({attribute:"aria-pressed"})],t.prototype,"ariaPressed"),U([c({attribute:"autofocus",type:Boolean})],t.prototype,"autoFocus"),U([c({type:Boolean})],t.prototype,"disabled"),U([c({})],t.prototype,"form"),U([c({attribute:"formaction"})],t.prototype,"formAction"),U([c({attribute:"formenctype"})],t.prototype,"formEncType"),U([c({attribute:"formmethod"})],t.prototype,"formMethod"),U([c({attribute:"formnovalidate",type:Boolean})],t.prototype,"formNoValidate"),U([c({attribute:"formtarget"})],t.prototype,"formTarget"),U([c({})],t.prototype,"name"),U([c({attribute:"popovertarget"})],t.prototype,"popoverTarget"),U([c({attribute:"popovertargetaction"})],t.prototype,"popoverTargetAction"),U([c({})],t.prototype,"type"),U([c({})],t.prototype,"value"),t};var wa=Object.defineProperty,Lt=(e,t,o,i)=>{for(var s=void 0,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=l(t,o,s)||s);return s&&wa(t,o,s),s};const To=e=>{class t extends e{constructor(){super(...arguments),this.ariaDisabled=null,this.ariaExpanded=null}renderLink(i){return g`
        <a
          aria-disabled=${T(this.ariaDisabled)}
          aria-expanded=${T(this.ariaExpanded)}
          download=${T(this.download)}
          href=${this.href}
          hreflang=${T(this.hreflang)}
          ping=${T(this.ping)}
          referrerpolicy=${T(this.referrerpolicy)}
          rel=${T(this.rel)}
          target=${T(this.target)}
          type=${T(this.LinkType)}
        >
          ${i}
        </a>
      `}}return Lt([c({attribute:"aria-disabled"})],t.prototype,"ariaDisabled"),Lt([c({attribute:"aria-expanded"})],t.prototype,"ariaExpanded"),Lt([c()],t.prototype,"download"),Lt([c()],t.prototype,"href"),Lt([c()],t.prototype,"hreflang"),Lt([c()],t.prototype,"ping"),Lt([c()],t.prototype,"referrerpolicy"),Lt([c()],t.prototype,"rel"),Lt([c()],t.prototype,"target"),Lt([c()],t.prototype,"LinkType"),t};var Ea=Object.defineProperty,ka=Object.getOwnPropertyDescriptor,_t=(e,t,o,i)=>{for(var s=i>1?void 0:i?ka(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&Ea(t,o,s),s};const La="reimagine-button";n.Button=class extends Hi(To(x)){constructor(){super(...arguments),this.disabled=!1}_buildButtonMarkup(){const t=this.iconOnly?g`<slot name="button__icon"></slot>`:"",o=this.withIconPrepend?g`<slot name="button__icon-prepend"></slot>`:"",i=this.withIconAppend?g`<slot name="button__icon-append"></slot>`:"",s=g`<slot name="button__text"></slot>`;let a;return this.withIconPrepend&&this.withIconAppend?a=g`${o}${s}${i}`:this.withIconPrepend?a=g`${o}${s}`:this.withIconAppend?a=g`${s}${i}`:this.iconOnly?a=g`${t}${s}`:a=s,a}_renderCustomElement(){return this.element==="div"?g`<div>${this._buildButtonMarkup()}</div>`:g`<span>${this._buildButtonMarkup()}</span>`}render(){this.ariaLabel=this.buttonLabel||"";const t=this._buildButtonMarkup();let o;return this.element&&this.element!==""?o=g`${this._renderCustomElement()}`:o=this.href?this.renderLink(t):this.renderButton(t),o}},n.Button.styles=[$a],_t([c({reflect:!0})],n.Button.prototype,"appearance",2),_t([c({reflect:!0})],n.Button.prototype,"size",2),_t([c({reflect:!0})],n.Button.prototype,"shape",2),_t([c({type:Boolean,reflect:!0,attribute:"icon-only"})],n.Button.prototype,"iconOnly",2),_t([c({type:Boolean,reflect:!0,attribute:"with-icon-prepend"})],n.Button.prototype,"withIconPrepend",2),_t([c({type:Boolean,reflect:!0,attribute:"with-icon-append"})],n.Button.prototype,"withIconAppend",2),_t([c({type:Boolean,reflect:!0})],n.Button.prototype,"disabled",2),_t([c({type:String,reflect:!0})],n.Button.prototype,"theme",2),_t([c({reflect:!0})],n.Button.prototype,"element",2),_t([c({reflect:!0,attribute:"button-label"})],n.Button.prototype,"buttonLabel",2),n.Button=_t([E(La)],n.Button);const Ar=Object.assign({}),Pa=Object.keys(Ar),Ha=(e="")=>Pa.includes(e),Ba=({name:e="",filled:t})=>{const a=`../../../../../../node_modules/@fluentui/svg-icons/icons/${e.replace("-","_").toLowerCase()}_24_${t?"filled":"regular"}.svg`;return Ha(a)?Ar[a]:""},vt={display:"inline-block",color:"#0078d4",width:"1em",minWidth:"1em",height:"1em",minHeight:"1em",boxSizing:"content-box",position:"relative",lineHeight:"1",borderRadius:"initial"},Bi={position:"absolute",top:"-12.97%",height:"auto"},Ta=y`
  :host {
    --ds-icon-svg-position: var(--ds-icon-svg-position, ${r(Bi.position)});
    --ds-icon-svg-top-pos: var(--ds-icon-svg-top-pos, ${r(Bi.top)});
    --ds-icon-svg-height: var(--ds-icon-svg-height, ${r(Bi.height)});
    --ds-icon-img-border-radius: ${r(vt.borderRadius)};
    display: var(--ds-icon-display, ${r(vt.display)});
    position: var(--ds-icon-position, ${r(vt.position)});
    color: var(
      --ds-icon-color,
      var(--ds-theme-foreground-base-icon, ${r(vt.color)})
    );
    width: var(--ds-icon-size-default, ${r(vt.display)});
    min-width: var(--ds-icon-size-default, ${r(vt.minWidth)});
    height: var(--ds-icon-size-default, ${r(vt.height)});
    min-height: var(--ds-icon-size-default, ${r(vt.minHeight)});
    box-sizing: var(--ds-icon-box-sizing, ${r(vt.boxSizing)});
    line-height: var(--ds-icon-line-height, ${r(vt.lineHeight)});
    border-radius: var(--ds-icon-border-radius, ${r(vt.borderRadius)});
  }

  :host img,
  :host ::slotted(img) {
    width: var(--ds-icon-size-default, 1em);
    min-width: var(--ds-icon-size-default, 1em);
    height: var(--ds-icon-size-default, 1em);
    min-height: var(--ds-icon-size-default, 1em);
    border-radius: var(--ds-icon-img-border-radius);
  }

  :host svg {
    position: var(--ds-icon-svg-position);
    top: var(--ds-icon-svg-top-pos);
    height: var(--ds-icon-svg-height);
    /* stylelint-disable-next-line value-keyword-case */
    fill: currentColor;
  }

  /* icon size - 12px */
  :host([size='xsmall']) {
    --ds-icon-size-default: 0.75rem;
    --ds-icon-size-xsmall: 0.75rem;
  }

  /* icon size - 16px */
  :host([size='small']) {
    --ds-icon-size-default: 1rem;
  }

  /* icon size - 20px */
  :host([size='medium']) {
    --ds-icon-size-default: 1.25rem;
  }

  /* icon size - 24px */
  :host([size='large']) {
    --ds-icon-size-default: 1.5rem;
  }

  /* icon size - 32px */
  :host([size='xlarge']) {
    --ds-icon-size-default: 2rem;
  }

  /* icon size - 40px */
  :host([size='2xlarge']) {
    --ds-icon-size-default: 2.5rem;
  }

  /* icon size - 48px */
  :host([size='3xlarge']) {
    --ds-icon-size-default: 3rem;
  }

  /* icon size - 64px */
  :host([size='4xlarge']) {
    --ds-icon-size-default: 4rem;
  }
`;var Oa=Object.defineProperty,Aa=Object.getOwnPropertyDescriptor,zt=(e,t,o,i)=>{for(var s=i>1?void 0:i?Aa(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&Oa(t,o,s),s};const Ma="reimagine-icon";n.Icon=class extends x{constructor(){super(...arguments),this.filled=!1,this.ariaLabel=null,this.ariaHidden=null,this.role=null}setIcon(){var t;if(this._slotContents&&this._slotContents.length===0&&this.icon){const o=Ba({name:this.icon,filled:this.filled}),i=o&&new DOMParser().parseFromString(o,"text/html"),s=i&&i.body.querySelector("svg");s&&(this.removeIcon(),(t=this.shadowRoot)==null||t.append(s))}}removeIcon(){var o;const t=(o=this.shadowRoot)==null?void 0:o.querySelector("svg");t==null||t.remove()}updated(t){t.has("ariaLabel")&&this._setAriaAttrs(),t.has("icon")&&this.setIcon()}_setAriaAttrs(){this.ariaLabel?(this.setAttribute("role","img"),this.removeAttribute("aria-hidden")):(this.setAttribute("aria-hidden","true"),this.setAttribute("role","presentation"))}_svgRender(){if(!this.icon)return;const t=Ca[this.icon][this.filled?"filled":"regular"],o=!0;if(t.length===1)return g`
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" .ariaHidden=${o}>
          <path d="${t[0]}"></path>
        </svg>
      `;if(t.length===2)return g`
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" .ariaHidden=${o}>
          <path d="${t[0]}"></path>
          <path d="${t[1]}"></path>
        </svg>
      `}render(){return this.icon?g`${this._svgRender()}`:g`<slot></slot>`}},n.Icon.styles=[Ta],zt([c({reflect:!0})],n.Icon.prototype,"theme",2),zt([c()],n.Icon.prototype,"icon",2),zt([c()],n.Icon.prototype,"size",2),zt([c({type:Boolean})],n.Icon.prototype,"filled",2),zt([c({attribute:"aria-label"})],n.Icon.prototype,"ariaLabel",2),zt([c({attribute:"aria-hidden"})],n.Icon.prototype,"ariaHidden",2),zt([c({attribute:"role"})],n.Icon.prototype,"role",2),zt([Dt()],n.Icon.prototype,"_slotContents",2),n.Icon=zt([E(Ma)],n.Icon);var Ia=Object.defineProperty,Da=Object.getOwnPropertyDescriptor,yt=(e,t,o,i)=>{for(var s=i>1?void 0:i?Da(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&Ia(t,o,s),s};const Ra="reimagine-announcement";n.Announcement=class extends x{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._badgeSlotEmpty=!0,this._closed=!1}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0,this._badgeSlotEmpty=this._badgeSlot.length===0}_renderOptionalSlot(t,o){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}close(){this._closed=!0}updated(){var t;this._badgeSlotEmpty||(t=this._badgeSlot[0])==null||t.setAttribute("size",Sa.xs)}render(){return this._closed?g`<span
        aria-live="polite"
        class="announcement__close-sr"
        part="announcement__close-sr"
        aria-atomic="true"
        sr-close-text="${T(this.srCloseText)}"
        >${T(this.srCloseText)}</span
      >`:g`
      ${this._renderOptionalSlot("announcement__first",this._firstSlotEmpty)}
      <div part="announcement__banner" class="announcement__banner">
        <slot name="announcement__badge" @slotchange="${this._handleSlotChange}"></slot>
        <div part="announcement__center" class="announcement__center">
          <slot name="announcement__label"></slot>
          <slot name="announcement__link"></slot>
        </div>
        <div part="announcement__dismiss" class="announcement__dismiss">
          <slot name="announcement__button" @slotchange="${this._handleSlotChange}">
            <reimagine-button
              @click=${this.close}
              icon-only
              appearance=${Po.buttonGhost}
              shape=${Bo.rounded}
              size=${Ho.small}
              button-label=${T(this.closeLabel)}
            >
              <reimagine-icon
                filled
                icon=${Li.name}
                size=${to.medium}
                role="presentation"
                aria-hidden="true"
                slot="button__icon"
              ></reimagine-icon>
            </reimagine-button>
          </slot>
        </div>
      </div>
      ${this._renderOptionalSlot("announcement__last",this._lastSlotEmpty)}
    `}},n.Announcement.styles=[ba,ya],yt([_({slot:"announcement__first"})],n.Announcement.prototype,"_firstSlot",2),yt([_({slot:"announcement__last"})],n.Announcement.prototype,"_lastSlot",2),yt([_({slot:"announcement__badge"})],n.Announcement.prototype,"_badgeSlot",2),yt([m()],n.Announcement.prototype,"_firstSlotEmpty",2),yt([m()],n.Announcement.prototype,"_lastSlotEmpty",2),yt([m()],n.Announcement.prototype,"_badgeSlotEmpty",2),yt([m()],n.Announcement.prototype,"_closed",2),yt([c({attribute:"close-label"})],n.Announcement.prototype,"closeLabel",2),yt([c({attribute:"sr-close-text",reflect:!0})],n.Announcement.prototype,"srCloseText",2),yt([c({reflect:!0})],n.Announcement.prototype,"theme",2),n.Announcement=yt([E(Ra)],n.Announcement);const J={alignItems:"center",background:"#fefefe",backdropFilter:"initial",borderRadius:"0.5rem",borderWidth:"1px",boxShadow:"none",display:"inline-flex",height:"2rem",justifyContent:"center",paddingBlockStart:"0.5rem",paddingBlockEnd:"0.5rem",paddingInlineStart:"1rem",paddingInlineEnd:"1rem",width:"2rem"},za={sizeDefault:"1.25rem"},eo={imgWidth:"100%",imgDisplay:"inline-flex",imgHeight:"auto",imgBorderRadius:"0.25rem"},Na=y`
  :host {
    --ds-badge-icon-size: var(
      --ds-icon-size-default,
      ${r(za.sizeDefault)}
    );
    --ds-badge-img-width: ${r(eo.imgWidth)};
    --ds-badge-img-display: ${r(eo.imgDisplay)};
    --ds-badge-img-height: ${r(eo.imgHeight)};
    --ds-badge-img-radius: var(--ds-radii-xs, ${r(eo.imgBorderRadius)});

    display: var(--ds-badge-display, ${r(J.display)});
    justify-content: var(--ds-badge-justify-content, ${r(J.justifyContent)});
    align-items: var(--ds-badge-align-items, ${r(J.alignItems)});
    box-shadow: var(--ds-badge-box-shadow, ${r(J.boxShadow)});
    width: var(--ds-badge-width, ${r(J.width)});
    height: var(--ds-badge-height, ${r(J.height)});
    padding-block: var(
        --ds-badge-padding-block-start,
        calc(var(--ds-badge-height, ${r(J.height)}) / 4)
      )
      var(
        --ds-badge-padding-block-end,
        calc(var(--ds-badge-height, ${r(J.height)}) / 4)
      );
    padding-inline: var(
        --ds-badge-padding-inline-start,
        calc(var(--ds-badge-height, ${r(J.height)}) / 4)
      )
      var(
        --ds-badge-padding-inline-end,
        calc(var(--ds-badge-height, ${r(J.height)}) / 4)
      );

    background: var(--ds-badge-background, ${r(kt.background)});
    border-width: var(--ds-badge-border-width, ${r(J.borderWidth)});
    border-style: var(--ds-badge-border-style, ${r(kt.borderStyle)});
    border-color: var(--ds-badge-border-color, ${r(kt.borderColor)});
    border-radius: var(
      --ds-badge-border-radius,
      var(--ds-radii-s, ${r(J.borderRadius)})
    );
  }

  ::slotted(reimagine-icon) {
    --ds-icon-size-default: var(--ds-badge-icon-size);
    --ds-icon-img-border-radius: var(
      --ds-radii-xs,
      ${r(eo.imgBorderRadius)}
    );
  }

  ::slotted(img) {
    width: var(--ds-badge-img-width);
    display: var(--ds-badge-img-display);
    height: var(--ds-badge-img-height);
    border-radius: var(--ds-badge-img-radius);
  }

  ::slotted(reimagine-media) {
    --ds-media-asset-border-start-start-radius: var(--ds-radii-xs, 0.25rem);
    --ds-media-asset-border-start-end-radius: var(--ds-radii-xs, 0.25rem);
    --ds-media-asset-border-end-start-radius: var(--ds-radii-xs, 0.25rem);
    --ds-media-asset-border-end-end-radius: var(--ds-radii-xs, 0.25rem);
    --ds-media-asset-overflow: hidden;
  }

  :host([theme='night']) {
    --ds-badge-background: ${r(q.background)};
    --ds-badge-border-color: ${r(q.borderColor)};
  }

  :host([surface]) {
    --ds-surface-border-radius: var(
      --ds-badge-border-radius,
      var(--ds-radii-xs, ${r(J.borderRadius)})
    );
  }

  :host([shape='oval']) {
    --ds-badge-border-radius: var(--ds-radii-circle);
  }

  :host([shape='oval']) ::slotted(reimagine-media) {
    --ds-media-asset-border-start-start-radius: var(--ds-radii-circle);
    --ds-media-asset-border-start-end-radius: var(--ds-radii-circle);
    --ds-media-asset-border-end-start-radius: var(--ds-radii-circle);
    --ds-media-asset-border-end-end-radius: var(--ds-radii-circle);
  }

  :host([shape='oval']) ::slotted(img) {
    border-radius: var(--ds-radii-circle);
  }

  :host([size='xs']) {
    --ds-badge-bg-color: var(--ds-theme-background-card-normal);
  }

  :host([size='s']) {
    --ds-badge-width: 3rem;
    --ds-badge-height: 3rem;
    --ds-badge-icon-size: 1.5rem;
  }

  :host([size='m']) {
    --ds-badge-width: 4rem;
    --ds-badge-height: 4rem;
    --ds-badge-icon-size: 2rem;
  }

  :host([size='l']) {
    --ds-badge-width: 5rem;
    --ds-badge-height: 5rem;
    --ds-badge-icon-size: 2.5rem;
  }

  :host([size='xl']) {
    --ds-badge-width: 8rem;
    --ds-badge-height: 8rem;
    --ds-badge-icon-size: 3rem;
  }

  :host([type='media']) {
    --ds-badge-padding-block-start: calc(
      var(--ds-badge-height, ${r(J.height)}) / 8
    );
    --ds-badge-padding-block-end: calc(
      var(--ds-badge-height, ${r(J.height)}) / 8
    );
    --ds-badge-padding-inline-start: calc(
      var(--ds-badge-height, ${r(J.height)}) / 8
    );
    --ds-badge-padding-inline-end: calc(
      var(--ds-badge-height, ${r(J.height)}) / 8
    );
  }

  :host([clickable]) {
    --ds-badge-box-shadow: var(--ds-elevation-level-1);
    cursor: pointer;
  }

  :host([clickable]:hover) {
    --ds-badge-box-shadow: var(--ds-elevation-level-2);
  }

  :host([clickable]:active) {
    --ds-badge-background: var(--ds-theme-background-card-pressed);
    --ds-badge-box-shadow: var(--ds-elevation-level-1);
  }

  :host([type='text']) {
    --ds-badge-width: fit-content;
  }
`;var Va=Object.defineProperty,Za=Object.getOwnPropertyDescriptor,Nt=(e,t,o,i)=>{for(var s=i>1?void 0:i?Za(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&Va(t,o,s),s};const Fa="reimagine-badge";n.Badge=class extends x{constructor(){super(...arguments),this.empty=!1}_handleSlotChange(){this.empty=this._slot.length===0,this.empty||this._updateTypeAttribute()}_updateTypeAttribute(){const t=this._slot.some(i=>i.nodeName.toLowerCase().includes("span")),o=this._slot.some(i=>i.nodeName.toLowerCase().includes("media"));t?this.type="text":o?this.type="media":this.removeAttribute("type")}connectedCallback(){super.connectedCallback(),this._handleSlotChange()}render(){return g` <slot @slotchange=${this._handleSlotChange}></slot> `}},n.Badge.styles=[Na],Nt([_()],n.Badge.prototype,"_slot",2),Nt([c({type:Boolean,reflect:!0})],n.Badge.prototype,"empty",2),Nt([c({reflect:!0})],n.Badge.prototype,"theme",2),Nt([c({reflect:!0})],n.Badge.prototype,"size",2),Nt([c({reflect:!0})],n.Badge.prototype,"surface",2),Nt([c({reflect:!0})],n.Badge.prototype,"shape",2),Nt([c({type:Boolean,reflect:!0})],n.Badge.prototype,"clickable",2),Nt([c({reflect:!0})],n.Badge.prototype,"type",2),n.Badge=Nt([E(Fa)],n.Badge);const _e={display:"flex",justifyContent:"center",flexDirection:"column",rowGap:"var(--ds-spacing-xs)",columnGap:"var(--ds-spacing-xs)",marginBlockStart:"var(--ds-spacing-2xs)",marginInlineStart:"0"},Ua=y`
  :host {
    display: var(--ds-button-group-display, ${r(_e.display)});
    row-gap: var(--ds-button-group-row-gap, ${r(_e.rowGap)});
    column-gap: var(--ds-button-group-column-gap, ${r(_e.columnGap)});
    flex-direction: var(
      --ds-button-group-flex-direction,
      ${r(_e.flexDirection)}
    );
  }

  :host ::slotted(reimagine-button) {
    display: grid;
  }

  :host ::slotted(reimagine-link) {
    justify-content: var(
      --ds-button-group-justify-content,
      ${r(_e.justifyContent)}
    );
    margin-block-start: var(
      --ds-button-group-margin-block-start,
      ${r(_e.marginBlockStart)}
    );
    margin-inline-start: var(
      --ds-button-group-margin-inline-start,
      ${r(_e.marginInlineStart)}
    );
  }
`,ja={flexDirection:"row"},Wa=y`
  @media (min-width: ${r(lt.sm)}) {
    :host {
      flex-direction: var(
        --ds-button-group-flex-direction,
        ${r(ja.flexDirection)}
      );
    }

    :host ::slotted(reimagine-link) {
      --ds-button-group-margin-inline-start: var(--ds-spacing-xs);
      --ds-button-group-margin-block-start: 0;
    }
  }
`;var Ga=Object.defineProperty,Xa=Object.getOwnPropertyDescriptor,qa=(e,t,o,i)=>{for(var s=i>1?void 0:i?Xa(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&Ga(t,o,s),s};const Ja="reimagine-button-group";n.ButtonGroup=class extends x{render(){return g` <slot></slot> `}},n.ButtonGroup.styles=[Ua,Wa],n.ButtonGroup=qa([E(Ja)],n.ButtonGroup);const ve={display:"flex",flexDirection:"column",rowGap:"var(--ds-spacing-2xl, 3rem)",paddingInlineStart:"var(--ds-card-padding-default, 1.5rem)",paddingInlineEnd:"var(--ds-card-padding-default, 1.5rem)",paddingBlockStart:"var(--ds-card-padding-default, 1.5rem)",paddingBlockEnd:"var(--ds-card-padding-default, 1.5rem)"},Ya=y`
  :host {
    /* Apply default or custom values to the host element */
    display: var(--ds-card-in-hero-display, ${r(ve.display)});
    flex-direction: var(
      --ds-card-in-hero-flex-direction,
      ${r(ve.flexDirection)}
    );
    row-gap: var(--ds-card-in-hero-row-gap, ${r(ve.rowGap)});
    padding-inline-start: var(
      --ds-card-in-hero-padding-inline-start,
      ${r(ve.paddingInlineStart)}
    );
    padding-inline-end: var(
      --ds-card-in-hero-padding-inline-end,
      ${r(ve.paddingInlineEnd)}
    );
    padding-block-start: var(
      --ds-card-in-hero-padding-block-start,
      ${r(ve.paddingBlockStart)}
    );
    padding-block-end: var(
      --ds-card-in-hero-padding-block-end,
      ${r(ve.paddingBlockEnd)}
    );

    --ds-text-block-body-gap: 'var(--ds-spacing-xs, .5rem)';
  }
`;var Qa=Object.defineProperty,Oo=(e,t,o,i)=>{for(var s=void 0,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=l(t,o,s)||s);return s&&Qa(t,o,s),s};const Ka=e=>{class t extends e{constructor(){super(...arguments),this.clickable=!0,this.active=!1}}return Oo([c({type:Boolean})],t.prototype,"clickable"),Oo([c({type:Boolean})],t.prototype,"active"),Oo([c({reflect:!0})],t.prototype,"theme"),Oo([c({attribute:"card-base",reflect:!0})],t.prototype,"cardBase"),t},Pt={boxShadow:"initial",borderStartStartRadius:"1.5rem",borderStartEndRadius:"1.5rem",borderEndStartRadius:"1.5rem",borderEndEndRadius:"1.5rem",borderWidth:"0",borderStyle:"none",borderColor:"initial",backgroundColor:"initial",overflow:"hidden"},tl={backgroundColor:"var(--ds-theme-background-base-color, #dceef8)"},el=y`
  /* Base styles for all card base variants */
  :host([card-base]) {
    border-width: var(--ds-card-base-border-width, ${r(Pt.borderWidth)});
    border-style: var(--ds-card-base-border-style, ${r(Pt.borderStyle)});
    border-color: var(--ds-card-base-border-color, ${r(Pt.borderColor)});
    background-color: var(
      --ds-card-base-background-color,
      ${r(Pt.backgroundColor)}
    );
    border-start-start-radius: var(
      --ds-card-base-border-start-start-radius,
      ${r(Pt.borderStartStartRadius)}
    );
    border-start-end-radius: var(
      --ds-card-base-border-start-end-radius,
      ${r(Pt.borderStartEndRadius)}
    );
    border-end-start-radius: var(
      --ds-card-base-border-end-start-radius,
      ${r(Pt.borderEndStartRadius)}
    );
    border-end-end-radius: var(
      --ds-card-base-border-end-end-radius,
      ${r(Pt.borderEndEndRadius)}
    );
    box-shadow: var(--ds-card-base-box-shadow, ${r(Pt.boxShadow)});
    overflow: var(--ds-card-base-overflow, ${r(Pt.overflow)});
  }

  /* Styles for the 'solid' variant */
  :host([card-base='solid']) {
    --ds-card-base-background-color: ${r(G.background)};
    --ds-card-base-border-width: ${r(G.borderWidth)};
    --ds-card-base-border-style: ${r(G.borderStyle)};
    --ds-card-base-border-color: ${r(G.borderColor)};
    --ds-card-base-box-shadow: var(--ds-elevation-level-2);
  }

  /* Styles for the 'solid-border' variant */
  :host([card-base='solid-border']) {
    --ds-card-base-background-color: ${r(kt.background)};
    --ds-card-base-border-width: ${r(kt.borderWidth)};
    --ds-card-base-border-style: ${r(kt.borderStyle)};
    --ds-card-base-border-color: ${r(kt.borderColor)};
    --ds-card-base-box-shadow: var(--ds-elevation-level-2);
  }

  /* Styles for the 'glass' variant */
  :host([card-base='glass']) {
    --ds-card-base-background-color: ${r(q.background)};
    --ds-card-base-border-width: ${r(q.borderWidth)};
    --ds-card-base-border-style: ${r(q.borderStyle)};
    --ds-card-base-border-color: ${r(q.borderColor)};
    --ds-card-base-box-shadow: var(--ds-elevation-level-2);
  }

  /* Styles for the 'media' variant */
  :host([card-base='media']) {
    --ds-card-base-box-shadow: var(--ds-elevation-level-2);
  }

  /* Styles for the 'transparent' variant */
  :host([card-base='transparent']) {
    --ds-card-base-background-color: ${r(Ns.background)};
  }

  /* Styles for the 'special' variant */
  :host([card-base='special']) {
    --ds-card-base-border-width: ${r(Jt.borderWidth)};
    --ds-card-base-border-style: ${r(Jt.borderStyle)};
    --ds-card-base-border-color: ${r(Jt.borderColor)};
    --ds-card-base-background-color: ${r(tl.backgroundColor)};
    --ds-card-base-box-shadow: var(--ds-elevation-level-2);
  }

  /* Active (selected) state for various card base variants */
  :host([card-base='solid-border'][active]),
  :host([card-base='solid'][active]),
  :host([card-base='glass'][active]),
  :host([card-base='media'][active]),
  :host([card-base='special'][active]) {
    --ds-card-base-box-shadow: var(--ds-elevation-level-2);
  }

  /* Specific active (selected) state for 'glass' card base variant */
  :host([card-base='glass'][active]) {
    --ds-card-base-background-color: var(--ds-theme-background-glass-active);
  }

  /* Hover state for all card bases except 'transparent' */
  :host([card-base]:not([card-base='transparent']):hover) {
    --ds-card-base-box-shadow: var(--ds-elevation-level-3);
  }

  /* Adds a pointer cursor for clickable card bases */
  :host([card-base][clickable]) {
    cursor: pointer;
  }

  /* Active state for clickable card bases except 'transparent', 'glass', and 'special' */
  :host(
      [card-base][clickable]:not([card-base='transparent']):not([card-base='glass']):not(
          [card-base='special']
        ):active
    ) {
    --ds-card-base-background-color: var(--ds-theme-background-card-pressed);
    --ds-card-base-box-shadow: var(--ds-elevation-level-1);
  }

  /* Active state for clickable 'glass' card bases */
  :host([card-base='glass'][clickable]:active) {
    --ds-card-base-background-color: var(--ds-theme-background-glass-pressed);
    --ds-card-base-border-color: var(--ds-color-neutral-white);
    --ds-card-base-box-shadow: var(--ds-elevation-level-1);
  }

  /* Active state for clickable 'special' card bases */
  :host([card-base='special'][clickable]:active) {
    --ds-card-base-box-shadow: var(--ds-elevation-level-1);
  }

  /* State for non-clickable card bases */
  :host([card-base]:not([clickable])) {
    --ds-card-base-box-shadow: var(--ds-elevation-level-0);
  }
`;var ol=Object.defineProperty,il=Object.getOwnPropertyDescriptor,Kt=(e,t,o,i)=>{for(var s=i>1?void 0:i?il(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&ol(t,o,s),s};const sl="reimagine-card-in-hero";n.CardInHero=class extends Ka(To(x)){constructor(){super(...arguments),this._topSlotEmpty=!0,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0,this._topSlotEmpty=this._topSlot.length===0}updated(){const t=this._topSlot[0];!this._topSlotEmpty&&t.tagName.toLowerCase()==="reimagine-text-block"&&(t.setAttribute("size","2xs"),t.setAttribute("configuration","list"))}_renderOptionalSlot(t="card-in-hero__first",o=this._firstSlotEmpty){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return g`
      ${this._renderOptionalSlot("card-in-hero__first",this._firstSlotEmpty)}
      <slot name="card-in-hero__top" @slotchange="${this._handleSlotChange}"></slot>
      <slot name="card-in-hero__bottom"></slot>
      ${this._renderOptionalSlot("card-in-hero__last",this._lastSlotEmpty)}
    `}},n.CardInHero.styles=[Ya,el],Kt([c({reflect:!0})],n.CardInHero.prototype,"theme",2),Kt([_({slot:"card-in-hero__first"})],n.CardInHero.prototype,"_firstSlot",2),Kt([_({slot:"card-in-hero__last"})],n.CardInHero.prototype,"_lastSlot",2),Kt([_({slot:"card-in-hero__top"})],n.CardInHero.prototype,"_topSlot",2),Kt([m()],n.CardInHero.prototype,"_topSlotEmpty",2),Kt([m()],n.CardInHero.prototype,"_firstSlotEmpty",2),Kt([m()],n.CardInHero.prototype,"_lastSlotEmpty",2),n.CardInHero=Kt([E(sl)],n.CardInHero);const te={display:"block",position:"relative",overFlow:"hidden",boxShadow:"var(--ds-depth-8)",borderStartStartRadius:"var(--ds-radii-m, 0.5rem)",borderStartEndRadius:"var(--ds-radii-m, 0.5rem)",borderEndStartRadius:"var(--ds-radii-m, 0.5rem)",borderEndEndRadius:"var(--ds-radii-m, 0.5rem)"},Vt={content:"''",position:"absolute",top:"0",left:"0",right:"0",bottom:"0",width:"100%",height:"100%",background:"var(--ds-theme-background-overlay-gradient, #0078d4)"},Te={contentPosition:"absolute",contentPositionBottom:"0",headingFontSize:"var(--ds-label-s-font-size, 0.75rem)",paddingBlockStart:"var(--ds-spacing-l, 2rem)",paddingBlockEnd:"var(--ds-spacing-l, 2rem)",paddingInlineStart:"var(--ds-spacing-l, 2rem)",paddingInlineEnd:"var(--ds-spacing-l, 2rem)"},rl=y`
  :host {
    /* card-promo__image css variables */
    --ds-card-promo-image-before-content: ${r(Vt.content)};
    --ds-card-promo-image-before-position: ${r(Vt.position)};
    --ds-card-promo-image-before-top: ${r(Vt.top)};
    --ds-card-promo-image-before-left: ${r(Vt.left)};
    --ds-card-promo-image-before-right: ${r(Vt.right)};
    --ds-card-promo-image-before-bottom: ${r(Vt.bottom)};
    --ds-card-promo-image-before-width: ${r(Vt.width)};
    --ds-card-promo-image-before-height: ${r(Vt.height)};
    --ds-card-promo-image-before-background: ${r(Vt.background)};

    /* card-promo__content css variables */
    --ds-card-promo-content-position: ${r(Te.contentPosition)};
    --ds-card-promo-content-position-bottom: ${r(Te.contentPositionBottom)};
    --ds-card-promo-content-padding-block-start: ${r(Te.paddingBlockStart)};
    --ds-card-promo-content-padding-block-end: ${r(Te.paddingBlockEnd)};
    --ds-card-promo-content-padding-inline-start: ${r(Te.paddingInlineStart)};
    --ds-card-promo-content-padding-inline-end: ${r(Te.paddingInlineEnd)};

    display: var(--ds-card-promo-display, ${r(te.display)});
    position: var(--ds-card-promo-position, ${r(te.position)});
    overflow: var(--ds-card-promo-overflow, ${r(te.overFlow)});
    border-start-start-radius: var(
      --ds-card-promo-border-start-start,
      ${r(te.borderStartStartRadius)}
    );
    border-start-end-radius: var(
      --ds-card-promo-border-start-end-radius,
      ${r(te.borderStartEndRadius)}
    );
    border-end-end-radius: var(
      --ds-card-promo-border-end-end-radius,
      ${r(te.borderEndStartRadius)}
    );
    border-end-start-radius: var(
      --ds-card-promo-border-end-start-radius,
      ${r(te.borderEndEndRadius)}
    );
    box-shadow: var(--ds-card-promo-box-shadow, ${r(te.boxShadow)});
  }

  :host([background^='overlay-']) ::slotted([slot='card-promo__image'])::before {
    content: var(--ds-card-promo-image-before-content);
    position: var(--ds-card-promo-image-before-position);
    top: var(--ds-card-promo-image-before-top);
    left: var(--ds-card-promo-image-before-left);
    right: var(--ds-card-promo-image-before-right);
    bottom: var(--ds-card-promo-image-before-bottom);
    width: var(--ds-card-promo-image-before-width);
    height: var(--ds-card-promo-image-before-height);
    background: var(--ds-card-promo-image-before-background);
  }

  ::slotted([slot='card-promo__content']) {
    position: var(--ds-card-promo-content-position);
    bottom: var(--ds-card-promo-content-position-bottom);
    padding-inline-start: var(--ds-card-promo-content-padding-block-start);
    padding-inline-end: var(--ds-card-promo-content-padding-block-end);
    padding-block-start: var(--ds-card-promo-content-padding-inline-start);
    padding-block-end: var(--ds-card-promo-content-padding-inline-end);
  }
`;var nl=Object.defineProperty,al=Object.getOwnPropertyDescriptor,ll=(e,t,o,i)=>{for(var s=i>1?void 0:i?al(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&nl(t,o,s),s};const dl="reimagine-card-promo";n.CardPromo=class extends x{render(){return g`
      <div part="card-promo__image">
        <slot name="card-promo__image"></slot>
      </div>
      <div part="card-promo__content">
        <slot name="card-promo__content"></slot>
      </div>
    `}},n.CardPromo.styles=[rl],n.CardPromo=ll([E(dl)],n.CardPromo);const Ti=y`var(--ds-vfi-outline-width, 0.1875rem)`,cl=y`var(--ds-vfi-outline-style, dotted)`,hl=y`var(--ds-vfi-outline-offset, 0.25rem)`,ul=y`calc(calc(${Ti} + 0.1875rem) * -1)`;y`calc(calc(${Ti}) * -1)`;const Mr=y`var(--ds-vfi-text-color, currentcolor ${cl} ${Ti})`,Oe=y`
  outline: ${Mr};
`,Ir=y`
  outline: ${Mr} !important;
`,pl=y`
  ${Oe}
  outline-offset: ${ul};
`;y`
  ${Oe}
  outline-offset: ${hl};
`;const gl={display:"flex"},Ao={labelDisplay:"inline-flex",labelAlignItems:"center",labelGap:"var(--ds-spacing-s, 0.75rem)",labelPosition:"relative"},rt={controlDisplay:"inline-flex",controlAlignItems:"center",controlJustifyContent:"center",controlBorderColor:"var(--ds-theme-foreground-accent-subtle-normal, #2a446f)",controlBorderRadius:"var(--ds-radii-xs, var(--ds-spacing-2, 0.25rem))",controlBorderWidth:"var(--ds-border-width-s, 0.125rem)",controlBorderStyle:"solid",controlBackgroundColor:"initial",controlWidth:"2rem",controlHeight:"2rem"},Dr=y`
  /**
   * Default styles for the host element
   */
  :host {
    display: var(--ds-checkbox-display, ${r(gl.display)});
  }

  /**
   * Styles for the label element
   */
  :host .checkbox__label {
    display: var(--ds-checkbox-label-display, ${r(Ao.labelDisplay)});
    position: var(--ds-checkbox-label-position, ${r(Ao.labelPosition)});
    align-items: var(
      --ds-checkbox-label-align-items,
      ${r(Ao.labelAlignItems)}
    );
    gap: var(--ds-checkbox-label-gap, ${r(Ao.labelGap)});
    font-weight: var(
      --ds-checkbox-label-font-weight,
      ${r(be.fontWeight)}
    );
    font-size: var(--ds-checkbox-label-font-size, ${r(be.fontSize)});
    line-height: var(
      --ds-checkbox-label-line-height,
      ${r(be.lineHeight)}
    );
    color: var(--ds-theme-foreground-base-subtle);
  }

  /**
   * Styles for the input element (visually hidden)
   */
  :host .checkbox__input {
    ${Lo};
  }

  /**
   * Styles for the checkbox control element
   */
  :host .checkbox__control {
    display: var(
      --ds-checkbox-control-display,
      ${r(rt.controlDisplay)}
    );
    align-items: var(
      --ds-checkbox-control-align-items,
      ${r(rt.controlAlignItems)}
    );
    justify-content: var(
      --ds-checkbox-control-justify-content,
      ${r(rt.controlJustifyContent)}
    );
    border-color: var(
      --ds-checkbox-control-border-color,
      ${r(rt.controlBorderColor)}
    );
    width: var(
      --ds-checkbox-control-width,
      calc(
        ${r(rt.controlWidth)} -
          calc(${r(rt.controlBorderWidth)} * 2)
      )
    );
    height: var(
      --ds-checkbox-control-height,
      calc(
        ${r(rt.controlHeight)} -
          calc(${r(rt.controlBorderWidth)} * 2)
      )
    );
    border-style: var(
      --ds-checkbox-control-border-style,
      ${r(rt.controlBorderStyle)}
    );
    border-radius: var(
      --ds-checkbox-control-border-radius,
      ${r(rt.controlBorderRadius)}
    );
    border-width: var(
      --ds-checkbox-control-border-width,
      ${r(rt.controlBorderWidth)}
    );
    background-color: var(
      --ds-checkbox-control-background-color,
      ${r(rt.controlBackgroundColor)}
    );
  }

  /**
   * Styles for checked and indeterminate states
   */
  :host([checked]) .checkbox__control,
  :host([indeterminate]) .checkbox__control {
    --ds-checkbox-control-background-color: var(--ds-theme-background-accent-strong-normal);
    --ds-checkbox-control-border-color: var(--ds-theme-background-accent-strong-normal);
  }

  /**
   * Icon color styling for checked and indeterminate states
   */
  :host([checked]) .checkbox__control reimagine-icon,
  :host([indeterminate]) .checkbox__control reimagine-icon {
    --ds-checkbox-control-background-color: var(--ds-theme-background-accent-strong-normal);
    --ds-icon-color: var(--ds-theme-background-base-neutral);
  }

  /**
   * Hover state styling for the checkbox control
   */
  :host .checkbox__control:hover {
    --ds-checkbox-control-border-color: var(--ds-theme-foreground-accent-subtle-hover);
  }

  /**
   * Hover state styling when checked or indeterminate
   */
  :host([checked]) .checkbox__control:hover,
  :host([indeterminate]) .checkbox__control:hover {
    --ds-checkbox-control-border-color: var(--ds-theme-background-accent-strong-normal);
  }

  /**
   * Small size adjustments for the checkbox control
   */
  :host([size='small']) .checkbox__control {
    --ds-checkbox-control-width: calc(
      1.5rem -
        calc(
          var(
              --ds-checkbox-control-border-width,
              ${r(rt.controlBorderWidth)}
            ) * 2
        )
    );
    --ds-checkbox-control-height: calc(
      1.5rem -
        calc(
          var(
              --ds-checkbox-control-border-width,
              ${r(rt.controlBorderWidth)}
            ) * 2
        )
    );
  }

  /**
   * Disabled state styles
   */
  :host([disabled]) .checkbox__control,
  :host([disabled]) ::slotted([slot='checkbox__label-text']) {
    opacity: 0.2;
  }

  :host([disabled]) .checkbox__control {
    cursor: not-allowed;
  }

  /**
   * Active state styling for the checkbox control
   */
  :host .checkbox__input:not([disabled]):active + .checkbox__control {
    --ds-checkbox-control-border-color: var(--ds-theme-border-accent-subtle-pressed);
  }

  /**
   * Active state styling for checked or indeterminate checkboxes
   */
  :host([checked]) .checkbox__input:not([disabled]):active + .checkbox__control,
  :host([indeterminate]) .checkbox__input:not([disabled]):active + .checkbox__control {
    --ds-checkbox-control-background-color: var(--ds-theme-background-accent-strong-pressed);
    --ds-checkbox-control-border-color: var(--ds-theme-background-accent-strong-pressed);
  }

  /**
   * Hidden label styling for accessibility (screen readers only)
   */
  :host([label-hidden]) {
    --ds-checkbox-label-gap: 0;
  }

  :host([label-hidden]) ::slotted([slot='checkbox__label-text']) {
    ${Lo};
  }

  /**
   * Focus state styling for the checkbox control
   */
  :host .checkbox__input:focus + .checkbox__control {
    ${Oe};
  }
`;var ml=Object.defineProperty,nt=(e,t,o,i)=>{for(var s=void 0,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=l(t,o,s)||s);return s&&ml(t,o,s),s};const Rr=e=>{class t extends e{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.indeterminate=!1,this.size="medium",this.checkboxId="default-checkbox-id",this.name=void 0,this.form=void 0,this.value=void 0,this.required=!1,this.ariaChecked="false",this.leadingLabel=!1,this.labelText=null,this._checkboxLabelSlotEmpty=!0}_handleClick(i){if(this.disabled)return;this.checked=!this.checked,this.indeterminate=!1;const s=new CustomEvent(i.type,i);this.dispatchEvent(s)}_getIconName(){return this.indeterminate?"subtract":this.checked?"checkmark":""}handleCheckboxSlotChange(){this._checkboxLabelSlotEmpty=this._checkboxLabelSlot.length===0}renderCheckboxLabelSlot(){return g`
        <span
          part="checkbox__label-text"
          class="checkbox__label-text"
          style=${this._checkboxLabelSlotEmpty?"display: none;":""}
        >
          <slot name="checkbox__label-text" @slotchange=${this.handleCheckboxSlotChange}></slot>
        </span>
      `}renderCheckbox(){var a;const i=this._getIconName();this.indeterminate||this.removeAttribute("indeterminate"),this.labelText=(a=this.querySelector('[slot="checkbox__label-text"]'))==null?void 0:a.textContent;const s=this.value||this.labelText;return g`
        <label class="checkbox__label" for=${this.checkboxId}>
          ${this.leadingLabel?this.renderCheckboxLabelSlot():""}
          <input
            type="checkbox"
            class="checkbox__input"
            id=${this.checkboxId}
            @click=${this._handleClick}
            name=${this.name}
            .value=${s}
            ?checked=${this.checked}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-checked=${this.checked}
          />
          <span class="checkbox__control">
            ${i&&g`<reimagine-icon icon=${i} filled size=${this.size}></reimagine-icon>`||""}
          </span>
          ${this.leadingLabel?"":this.renderCheckboxLabelSlot()}
        </label>
      `}}return nt([c({type:Boolean,reflect:!0})],t.prototype,"checked"),nt([c({type:Boolean})],t.prototype,"disabled"),nt([c({type:Boolean})],t.prototype,"indeterminate"),nt([c({type:String})],t.prototype,"size"),nt([c({type:String,attribute:"id"})],t.prototype,"checkboxId"),nt([c({type:String})],t.prototype,"name"),nt([c({type:String})],t.prototype,"form"),nt([c({type:String})],t.prototype,"value"),nt([c({type:Boolean})],t.prototype,"required"),nt([c({type:String,attribute:"aria-checked"})],t.prototype,"ariaChecked"),nt([c({type:Boolean,attribute:"leading-label"})],t.prototype,"leadingLabel"),nt([c({reflect:!1})],t.prototype,"labelText"),nt([_({slot:"checkbox__label-text"})],t.prototype,"_checkboxLabelSlot"),nt([m()],t.prototype,"_checkboxLabelSlotEmpty"),t};var fl=Object.defineProperty,bl=Object.getOwnPropertyDescriptor,Ae=(e,t,o,i)=>{for(var s=i>1?void 0:i?bl(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&fl(t,o,s),s};const _l="reimagine-checkbox";n.Checkbox=class extends Rr(x){constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0}_renderOptionalSlot(t,o){return g`
      <div part=${t} class=${t} style=${o?"display: none;":""}>
        <slot name=${t} @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}render(){return g`
      ${this._renderOptionalSlot("checkbox__first",this._firstSlotEmpty)} ${this.renderCheckbox()}
      ${this._renderOptionalSlot("checkbox__last",this._lastSlotEmpty)}
    `}},n.Checkbox.styles=[Dr],Ae([c({reflect:!0})],n.Checkbox.prototype,"theme",2),Ae([_({slot:"checkbox__first"})],n.Checkbox.prototype,"_firstSlot",2),Ae([_({slot:"checkbox__last"})],n.Checkbox.prototype,"_lastSlot",2),Ae([m()],n.Checkbox.prototype,"_firstSlotEmpty",2),Ae([m()],n.Checkbox.prototype,"_lastSlotEmpty",2),n.Checkbox=Ae([E(_l)],n.Checkbox);const Me={show:"show",collapse:"collapse",collapsing:"collapsing",collapsed:"collapsed"},Mo={hide:"onHide",hidden:"onHidden",show:"onShow",shown:"onShown"},zr={d0:"0ms",d100:"100ms",d150:"150ms",d200:"200ms",d250:"250ms",d300:"300ms",d400:"400ms",d500:"500ms",d600:"600ms",d700:"700ms",d800:"800ms"},vl={custom:"cubic-bezier(0.19, 1, 0.22, 1)",accelerateMax:"cubic-bezier(0.9, 0.1, 1, 0.2)",accelerateMid:"cubic-bezier(1, 0, 1, 1)",accelerateMin:"cubic-bezier(0.8, 0, 0.78, 1)",decelerateMax:"cubic-bezier(0.1, 0.9, 0.2, 1)",decelerateMid:"cubic-bezier(0, 0, 0, 1)",decelerateMin:"cubic-bezier(0.33, 0, 0.1, 1)",easyEase:"cubic-bezier(0.33, 0, 0.67, 1)",linear:"cubic-bezier(0.25, 0.25, 0.75, 0.75)",maxEasyEase:"cubic-bezier(0.8, 0, 0.2, 1)"},Oi=e=>{const t=`transition: ${e};`;return y`
    ${r(t)};

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `},yl=e=>y`
  .collapse {
    ${Oi(`var(--ds-transition-collapse, ${e})`)};
  }

  .collapse:not(.show) {
    display: none;
  }
`,Zt={color:"var(--ds-theme-foreground-base-strong, #0e1726)",paddingBlockEnd:"var(--ds-spacing-l, 1.5rem)",borderBottomColor:"var(--ds-theme-border-neutral-fade, #bdc5d2)",containerMarginInline:"var(--ds-spacing-xl, 2rem)",containerMarginBlockStart:"0.1875rem",buttonGap:"var(--ds-spacing-s, 0.75rem)",transition:`height ${zr.d800} ease-in-out;`},Ai={color:"var(--ds-theme-foreground-base-strong, #0e1726)",titleFontSize:"1.125rem",titleFontWeight:"600"},Nr={iconSize:"var(--ds-heading-2xs, 1.125rem)",iconTransition:`transform ${zr.d600} ${vl.custom}`},Cl=y`
  :host {
    display: inline-flex;
    color: var(--ds-collapse-color, ${r(Zt.color)});
    overflow: hidden;
    width: 100%;

    ${Oi(`${r(Zt.transition)}`)};
  }

  /**
   * Container
   */
  :host .collapse__container {
    margin-block-start: var(
      --ds-collapse-container-margin-block-start,
      ${r(Zt.containerMarginBlockStart)}
    );
    margin-inline: var(
      --ds-collapse-container-margin-inline-start,
      ${r(Zt.containerMarginInline)}
    );
    width: 100%;
  }

  /**
   * Heading and content
   */
  :host .collapse__heading,
  :host .collapse__content {
    padding-block-end: var(
      --ds-collapse-padding-block-end,
      ${r(Zt.paddingBlockEnd)}
    );
  }

  /**
   * Button
   */
  :host button {
    ${Pi};
    display: flex;
    width: 100%;
    padding: 0;
    gap: var(--ds-collapse-button-gap, ${r(Zt.buttonGap)});
    color: var(--ds-collapse-button-color, ${r(Zt.color)});
    background-color: transparent;
  }

  :host button:focus {
    ${Oe};
  }

  /**
   * Icon
   */
  :host reimagine-icon,
  :host ::slotted([slot='collapse__icon']) {
    transform: rotate(0deg);
    color: var(--ds-collapse-icon-color, ${r(Zt.color)});
    font-size: var(--ds-collapse-icon-size, ${r(Nr.iconSize)});

    ${Oi(`var(--ds-collapse-icon-transition, ${r(Nr.iconTransition)})`)};
  }

  :host([open]) reimagine-icon,
  :host([open]) ::slotted([slot='collapse__icon']) {
    transform: rotate(-180deg);
  }

  /**
   * Title
   */
  :host ::slotted([slot='collapse__title']) {
    color: var(--ds-collapse-title-color, ${r(Ai.color)});
    font-size: var(
      --ds-collapse-title-font-size,
      ${r(Ai.titleFontSize)}
    );
    font-weight: var(
      --ds-collapse-title-font-weight,
      ${r(Ai.titleFontWeight)}
    );
  }

  ${yl(`var(
    --ds-collapse-transition,
    ${r(Zt.transition)}
  )`)};
`,ee="transitionend",Io=e=>{if(!e)return 0;let o=getComputedStyle(e).getPropertyValue("transition-duration"),i=getComputedStyle(e).getPropertyValue("transition-delay");const s=parseFloat(o),a=parseFloat(i);return!s&&!a?0:(o=o.split(",")[0],i=i.split(",")[0],(parseFloat(o)+parseFloat(i))*1e3)},Sl=e=>{e.dispatchEvent(new Event(ee))},Do=(e,t=0)=>{let o=!1;const s=t+5;function a(){o=!0,e.removeEventListener(ee,a)}e.addEventListener(ee,a),setTimeout(()=>{o||Sl(e)},s)},$l=[...["input:not([disabled])","select:not([disabled])","textarea:not([disabled])","a[href]","button:not([disabled])","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],'[tabindex]:not([tabindex^="-"]):not([disabled])'];function Mi(e,t=e,o=e){return g`<div part="${t}" class="${o}">
    <slot name="${e}"></slot>
  </div>`}const Ro=(e,t=null)=>{const o=getComputedStyle(e);if(!t)return e.offsetHeight;let i=e.offsetHeight;return t.cssSelectors.forEach(s=>{!s.toLowerCase().includes("top")&&!s.toLowerCase().includes("bottom")?i+=parseInt(o.marginTop,10)+parseInt(o.marginBottom,10):s&&(i+=parseInt(o.margin,10))}),i},xl=(e=document)=>Array.from(e.querySelectorAll($l.join(", "))),Ii=(e,t,o=!1)=>{const i=e.getRootNode();return i instanceof ShadowRoot?o?i.querySelectorAll(t):i.querySelector(t):o?document.querySelectorAll(t):document.querySelector(t)},Vr=e=>e.offsetHeight;var wl=Object.defineProperty,El=Object.getOwnPropertyDescriptor,Ct=(e,t,o,i)=>{for(var s=i>1?void 0:i?El(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&wl(t,o,s),s};const kl="reimagine-collapse";n.Collapse=class extends Hi(x){constructor(){super(...arguments),this.open=!1,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0}_handleClick(){this.toggle()}_renderOptionalSlot(t,o){return g`
      <span part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </span>
    `}toggle(){this.open=!this.open}hide(){const t=new CustomEvent(Mo.hide,{composed:!0,cancelable:!0});this.dispatchEvent(t),Vr(this._content),this._content.classList.remove(Me.collapse),this._content.classList.remove(Me.show),this.style.height=`${this._heading.clientHeight}px`;const o=()=>{this._content.classList.add(Me.collapse),this._content.setAttribute("aria-hidden","true"),this._button.setAttribute("aria-expanded","false"),this.open=!1;const s=new CustomEvent(Mo.hidden,{composed:!0,cancelable:!0});this.dispatchEvent(s)},i=Io(this);this.addEventListener(ee,o.bind(this),{once:!0}),Do(this,i)}show(){const t=new CustomEvent(Mo.show,{composed:!0,cancelable:!0});this.dispatchEvent(t),this._content.classList.remove(Me.collapse),this.style.height=`${this._heading.clientHeight+this._content.clientHeight}px`;const o=()=>{this._content.classList.add(Me.collapse),this._content.classList.add(Me.show),this._content.removeAttribute("aria-hidden"),this._button.setAttribute("aria-expanded","true"),this.open=!0;const s=new CustomEvent(Mo.shown,{composed:!0,cancelable:!0});this.dispatchEvent(s)},i=Io(this);this.addEventListener(ee,o.bind(this),{once:!0}),Do(this,i)}updated(t){t.has("open")&&(this.open?this.show():this.hide())}connectedCallback(){super.connectedCallback(),this.ariaControls="collapse-content",this.addEventListener("click",this._handleClick)}disconnectedCallback(){this.removeEventListener("click",this._handleClick),super.disconnectedCallback()}render(){return g`
      ${this._renderOptionalSlot("collapse__first",this._firstSlotEmpty)}
      <div class="collapse__container" part="collapse__container">
        <div
          class="collapse__heading"
          part="collapse__heading"
          role="heading"
          aria-level="${this.headingLevel||"3"}"
        >
          ${this.renderButton(g` <slot name="collapse__title"></slot>
              <slot name="collapse__icon" @slotchange="${this._handleSlotChange}">
                <reimagine-icon icon="chevron-down" size="medium" filled></reimagine-icon>
              </slot>`)}
        </div>
        <div class="collapse__content" part="collapse__content" id="collapse-content">
          <slot></slot>
        </div>
      </div>
      ${this._renderOptionalSlot("collapse__last",this._lastSlotEmpty)}
    `}},n.Collapse.styles=[Cl],Ct([c({reflect:!0})],n.Collapse.prototype,"theme",2),Ct([c({reflect:!0,type:Boolean})],n.Collapse.prototype,"open",2),Ct([c({reflect:!0,attribute:"heading-level",type:Number})],n.Collapse.prototype,"headingLevel",2),Ct([_({slot:"collapse__first"})],n.Collapse.prototype,"_firstSlot",2),Ct([_({slot:"collapse__last"})],n.Collapse.prototype,"_lastSlot",2),Ct([bt(".collapse__heading")],n.Collapse.prototype,"_heading",2),Ct([bt(".collapse__content")],n.Collapse.prototype,"_content",2),Ct([bt("button")],n.Collapse.prototype,"_button",2),Ct([m()],n.Collapse.prototype,"_firstSlotEmpty",2),Ct([m()],n.Collapse.prototype,"_lastSlotEmpty",2),n.Collapse=Ct([E(kl)],n.Collapse);const oe={containerBoxSizing:"border-box",containerDisplay:"block",containerMarginInlineStart:Fs.xs.marginInlineStart,containerMarginInlineEnd:Fs.xs.marginInlineStart,containerMaxWidth:_a.xs,containerPaddingInlineStart:Qt.xs.paddingInlineStart,containerPaddingInlineEnd:Qt.xs.paddingInlineEnd,containerWidth:"100%"},Ll=y`
  :host {
    box-sizing: var(
      --ds-container-box-size,
      ${r(oe.containerBoxSizing)}
    ) !important;
    display: var(--ds-container-display, ${r(oe.containerDisplay)});
    margin-inline-start: var(
      --ds-container-margin-inline-start,
      ${r(oe.containerMarginInlineStart)}
    );
    margin-inline-end: var(
      --ds-container-margin-inline-end,
      ${r(oe.containerMarginInlineEnd)}
    );
    max-width: var(--ds-container-max-width, ${r(oe.containerMaxWidth)});
    padding-inline-start: var(
      --ds-container-padding-inline-start,
      ${r(oe.containerPaddingInlineStart)}
    );
    padding-inline-end: var(
      --ds-container-padding-inline-end,
      ${r(oe.containerPaddingInlineEnd)}
    );
    width: var(--ds-container-width, ${r(oe.containerWidth)});
  }

  :host([full-width]) {
    --ds-container-max-width: none;
    --ds-container-padding-inline-start: 0;
    --ds-container-padding-inline-end: 0;
  }
`,Pl=y`
  @media (min-width: ${r(lt.sm)}) {
    :host {
      --ds-container-padding-inline-start: ${r(Qt.sm.paddingInlineStart)};
      --ds-container-padding-inline-end: ${r(Qt.sm.paddingInlineEnd)};
    }
  }
  @media (min-width: ${r(lt.md)}) {
    :host {
      --ds-container-max-width: 100vw;
      --ds-container-padding-inline-start: ${r(Qt.md.paddingInlineStart)};
      --ds-container-padding-inline-end: ${r(Qt.md.paddingInlineEnd)};
    }
  }
  @media (min-width: ${r(lt.lg)}) {
    :host {
      --ds-container-box-size: content-box;
      --ds-container-padding-inline-start: ${r(Qt.lg.paddingInlineStart)};
      --ds-container-padding-inline-end: ${r(Qt.lg.paddingInlineEnd)};
      --ds-container-max-width: 1328px;
    }
  }
`;var Hl=Object.defineProperty,Bl=Object.getOwnPropertyDescriptor,Zr=(e,t,o,i)=>{for(var s=i>1?void 0:i?Bl(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&Hl(t,o,s),s};const Tl="reimagine-container";n.Container=class extends x{constructor(){super(...arguments),this.fullWidth=!1}render(){return g`<slot></slot>`}},n.Container.styles=[Ll,Pl],Zr([c({type:Boolean,reflect:!0,attribute:"full-width"})],n.Container.prototype,"fullWidth",2),n.Container=Zr([E(Tl)],n.Container);const zo={borderColor:"var(--ds-theme-border-base-fade, #CBE6F4)",borderStyle:"solid",borderWidth:"1px"},Ol=y`
  :host {
    border: 0;
    margin: 0;
    border-color: var(--ds-divider-border-color, ${r(zo.borderColor)});
    border-style: var(--ds-divider-border-style, ${r(zo.borderStyle)});
    border-top-width: var(--ds-divider-border-width, ${r(zo.borderWidth)});
    display: block;

    --ds-divider-vh: 100vh;
  }

  /* Configuration Styles - Size */
  :host([size='s']) {
    --ds-divider-border-color: var(--ds-theme-border-base-strong, #002948);
    --ds-divider-border-width: 2px;
  }

  :host([size='m']) {
    --ds-divider-border-color: var(--ds-theme-border-base-strong, #002948);
    --ds-divider-border-width: 4px;
  }

  /* Configuration Styles - Orientation */
  :host([orientation='vertical']) {
    border-top: none;
    border-inline-start-width: var(
      --ds-divider-border-width,
      ${r(zo.borderWidth)}
    );
    height: var(--ds-divider-vh, 100vh);
    width: 0;
  }
`;var Al=Object.defineProperty,Ml=Object.getOwnPropertyDescriptor,Di=(e,t,o,i)=>{for(var s=i>1?void 0:i?Ml(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&Al(t,o,s),s};const Il="reimagine-divider";n.Divider=class extends x{render(){return g``}},n.Divider.styles=[Ol],Di([c({type:String,reflect:!0})],n.Divider.prototype,"orientation",2),Di([c({type:String,reflect:!0})],n.Divider.prototype,"size",2),n.Divider=Di([E(Il)],n.Divider);const F={color:"var(--ds-theme-foreground-accent-strong-normal, #ffffff)",display:"block",bgColor:"var(--ds-theme-background-accent-strong-normal, #0078d4)",borderColor:"var(--ds-theme-background-accent-strong-normal, #0078d4)",borderWidth:"0.0625rem",arrowSize:"1rem",minWidth:"8rem",minHeight:"4rem",maxWidth:"21rem"},Fr={slotNameDisplay:"flex",slotNamePaddingInline:"1rem"},Dl=y`
  :host {
    /* Set :host property:values with default css variables names and values */
    display: var(--ds-flyout-display, ${r(F.display)});
    color: var(--ds-flyout-color, ${r(F.color)});
  }

  :host ::slotted([slot]) {
    /* You can set css variables while the selector is relative to the :host */
    display: var(
      --ds-flyout-slot-name-display,
      ${r(Fr.slotNameDisplay)}
    );
    padding-inline: var(
      --ds-flyout-slot-name-padding-inline,
      ${r(Fr.slotNamePaddingInline)}
    );
  }

  :host([anchor]) {
    isolation: isolate;
    opacity: 0;
    display: none;
    border-style: solid;
    border-width: var(--ds-flyout-border-width, ${r(F.borderWidth)});
    border-color: var(--ds-flyout-border-color, ${r(F.borderColor)});
    background-color: var(--ds-flyout-bg-color, ${r(F.bgColor)});
    position: absolute;
    width: max-content;
    min-width: var(--ds-flyout-min-width, ${r(F.minWidth)});
    min-height: var(--ds-flyout-min-height, ${r(F.minHeight)});
    max-width: var(--ds-flyout-max-width, ${r(F.maxWidth)});
  }

  .flyout__arrow {
    position: absolute;
    visibility: hidden;
    border-style: solid;
    border-color: var(--ds-flyout-border-color, ${r(F.borderColor)});
    border-width: 0;
    background-color: var(--ds-flyout-bg-color, ${r(F.bgColor)});
    width: var(--ds-flyout-arrow-size, ${r(F.arrowSize)});
    height: var(--ds-flyout-arrow-size, ${r(F.arrowSize)});
    transform: rotate(45deg);
  }

  .flyout__arrow[flyout-placement^='bottom'] {
    border-top-width: var(--ds-flyout-border-width, ${r(F.borderWidth)});
    border-left-width: var(--ds-flyout-border-width, ${r(F.borderWidth)});
  }

  .flyout__arrow[flyout-placement^='top'] {
    border-bottom-width: var(--ds-flyout-border-width, ${r(F.borderWidth)});
    border-right-width: var(--ds-flyout-border-width, ${r(F.borderWidth)});
  }

  .flyout__arrow[flyout-placement^='left'] {
    border-top-width: var(--ds-flyout-border-width, ${r(F.borderWidth)});
    border-right-width: var(--ds-flyout-border-width, ${r(F.borderWidth)});
  }

  .flyout__arrow[flyout-placement^='right'] {
    border-bottom-width: var(--ds-flyout-border-width, ${r(F.borderWidth)});
    border-left-width: var(--ds-flyout-border-width, ${r(F.borderWidth)});
  }

  .flyout__base {
    display: contents;
  }
`,oo=Math.min,Ie=Math.max,No=Math.round,ie=e=>({x:e,y:e}),Rl={left:"right",right:"left",bottom:"top",top:"bottom"},zl={start:"end",end:"start"};function Ri(e,t,o){return Ie(e,oo(t,o))}function io(e,t){return typeof e=="function"?e(t):e}function ye(e){return e.split("-")[0]}function so(e){return e.split("-")[1]}function Ur(e){return e==="x"?"y":"x"}function zi(e){return e==="y"?"height":"width"}function Vo(e){return["top","bottom"].includes(ye(e))?"y":"x"}function Ni(e){return Ur(Vo(e))}function Nl(e,t,o){o===void 0&&(o=!1);const i=so(e),s=Ni(e),a=zi(s);let l=s==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(l=Zo(l)),[l,Zo(l)]}function Vl(e){const t=Zo(e);return[Vi(e),t,Vi(t)]}function Vi(e){return e.replace(/start|end/g,t=>zl[t])}function Zl(e,t,o){const i=["left","right"],s=["right","left"],a=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return o?t?s:i:t?i:s;case"left":case"right":return t?a:l;default:return[]}}function Fl(e,t,o,i){const s=so(e);let a=Zl(ye(e),o==="start",i);return s&&(a=a.map(l=>l+"-"+s),t&&(a=a.concat(a.map(Vi)))),a}function Zo(e){return e.replace(/left|right|bottom|top/g,t=>Rl[t])}function Ul(e){return{top:0,right:0,bottom:0,left:0,...e}}function jr(e){return typeof e!="number"?Ul(e):{top:e,right:e,bottom:e,left:e}}function Fo(e){const{x:t,y:o,width:i,height:s}=e;return{width:i,height:s,top:o,left:t,right:t+i,bottom:o+s,x:t,y:o}}function Wr(e,t,o){let{reference:i,floating:s}=e;const a=Vo(t),l=Ni(t),d=zi(l),h=ye(t),u=a==="y",p=i.x+i.width/2-s.width/2,f=i.y+i.height/2-s.height/2,b=i[d]/2-s[d]/2;let v;switch(h){case"top":v={x:p,y:i.y-s.height};break;case"bottom":v={x:p,y:i.y+i.height};break;case"right":v={x:i.x+i.width,y:f};break;case"left":v={x:i.x-s.width,y:f};break;default:v={x:i.x,y:i.y}}switch(so(t)){case"start":v[l]-=b*(o&&u?-1:1);break;case"end":v[l]+=b*(o&&u?-1:1);break}return v}const jl=async(e,t,o)=>{const{placement:i="bottom",strategy:s="absolute",middleware:a=[],platform:l}=o,d=a.filter(Boolean),h=await(l.isRTL==null?void 0:l.isRTL(t));let u=await l.getElementRects({reference:e,floating:t,strategy:s}),{x:p,y:f}=Wr(u,i,h),b=i,v={},C=0;for(let S=0;S<d.length;S++){const{name:$,fn:O}=d[S],{x:P,y:H,data:N,reset:A}=await O({x:p,y:f,initialPlacement:i,placement:b,strategy:s,middlewareData:v,rects:u,platform:l,elements:{reference:e,floating:t}});p=P??p,f=H??f,v={...v,[$]:{...v[$],...N}},A&&C<=50&&(C++,typeof A=="object"&&(A.placement&&(b=A.placement),A.rects&&(u=A.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:s}):A.rects),{x:p,y:f}=Wr(u,b,h)),S=-1)}return{x:p,y:f,placement:b,strategy:s,middlewareData:v}};async function Gr(e,t){var o;t===void 0&&(t={});const{x:i,y:s,platform:a,rects:l,elements:d,strategy:h}=e,{boundary:u="clippingAncestors",rootBoundary:p="viewport",elementContext:f="floating",altBoundary:b=!1,padding:v=0}=io(t,e),C=jr(v),$=d[b?f==="floating"?"reference":"floating":f],O=Fo(await a.getClippingRect({element:(o=await(a.isElement==null?void 0:a.isElement($)))==null||o?$:$.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(d.floating)),boundary:u,rootBoundary:p,strategy:h})),P=f==="floating"?{x:i,y:s,width:l.floating.width,height:l.floating.height}:l.reference,H=await(a.getOffsetParent==null?void 0:a.getOffsetParent(d.floating)),N=await(a.isElement==null?void 0:a.isElement(H))?await(a.getScale==null?void 0:a.getScale(H))||{x:1,y:1}:{x:1,y:1},A=Fo(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:P,offsetParent:H,strategy:h}):P);return{top:(O.top-A.top+C.top)/N.y,bottom:(A.bottom-O.bottom+C.bottom)/N.y,left:(O.left-A.left+C.left)/N.x,right:(A.right-O.right+C.right)/N.x}}const Wl=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:s,rects:a,platform:l,elements:d,middlewareData:h}=t,{element:u,padding:p=0}=io(e,t)||{};if(u==null)return{};const f=jr(p),b={x:o,y:i},v=Ni(s),C=zi(v),S=await l.getDimensions(u),$=v==="y",O=$?"top":"left",P=$?"bottom":"right",H=$?"clientHeight":"clientWidth",N=a.reference[C]+a.reference[v]-b[v]-a.floating[C],A=b[v]-a.reference[v],it=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u));let ht=it?it[H]:0;(!ht||!await(l.isElement==null?void 0:l.isElement(it)))&&(ht=d.floating[H]||a.floating[C]);const ke=N/2-A/2,vo=ht/2-S[C]/2-1,yo=oo(f[O],vo),Co=oo(f[P],vo),ft=yo,So=ht-S[C]-Co,ut=ht/2-S[C]/2+ke,Mt=Ri(ft,ut,So),It=!h.arrow&&so(s)!=null&&ut!==Mt&&a.reference[C]/2-(ut<ft?yo:Co)-S[C]/2<0,Wt=It?ut<ft?ut-ft:ut-So:0;return{[v]:b[v]+Wt,data:{[v]:Mt,centerOffset:ut-Mt-Wt,...It&&{alignmentOffset:Wt}},reset:It}}}),Gl=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:s,middlewareData:a,rects:l,initialPlacement:d,platform:h,elements:u}=t,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:b,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:C="none",flipAlignment:S=!0,...$}=io(e,t);if((o=a.arrow)!=null&&o.alignmentOffset)return{};const O=ye(s),P=ye(d)===d,H=await(h.isRTL==null?void 0:h.isRTL(u.floating)),N=b||(P||!S?[Zo(d)]:Vl(d));!b&&C!=="none"&&N.push(...Fl(d,S,C,H));const A=[d,...N],it=await Gr(t,$),ht=[];let ke=((i=a.flip)==null?void 0:i.overflows)||[];if(p&&ht.push(it[O]),f){const ft=Nl(s,l,H);ht.push(it[ft[0]],it[ft[1]])}if(ke=[...ke,{placement:s,overflows:ht}],!ht.every(ft=>ft<=0)){var vo,yo;const ft=(((vo=a.flip)==null?void 0:vo.index)||0)+1,So=A[ft];if(So)return{data:{index:ft,overflows:ke},reset:{placement:So}};let ut=(yo=ke.filter(Mt=>Mt.overflows[0]<=0).sort((Mt,It)=>Mt.overflows[1]-It.overflows[1])[0])==null?void 0:yo.placement;if(!ut)switch(v){case"bestFit":{var Co;const Mt=(Co=ke.map(It=>[It.placement,It.overflows.filter(Wt=>Wt>0).reduce((Wt,c2)=>Wt+c2,0)]).sort((It,Wt)=>It[1]-Wt[1])[0])==null?void 0:Co[0];Mt&&(ut=Mt);break}case"initialPlacement":ut=d;break}if(s!==ut)return{reset:{placement:ut}}}return{}}}};async function Xl(e,t){const{placement:o,platform:i,elements:s}=e,a=await(i.isRTL==null?void 0:i.isRTL(s.floating)),l=ye(o),d=so(o),h=Vo(o)==="y",u=["left","top"].includes(l)?-1:1,p=a&&h?-1:1,f=io(t,e);let{mainAxis:b,crossAxis:v,alignmentAxis:C}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return d&&typeof C=="number"&&(v=d==="end"?C*-1:C),h?{x:v*p,y:b*u}:{x:b*u,y:v*p}}const ql=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,i;const{x:s,y:a,placement:l,middlewareData:d}=t,h=await Xl(t,e);return l===((o=d.offset)==null?void 0:o.placement)&&(i=d.arrow)!=null&&i.alignmentOffset?{}:{x:s+h.x,y:a+h.y,data:{...h,placement:l}}}}},Jl=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:i,placement:s}=t,{mainAxis:a=!0,crossAxis:l=!1,limiter:d={fn:$=>{let{x:O,y:P}=$;return{x:O,y:P}}},...h}=io(e,t),u={x:o,y:i},p=await Gr(t,h),f=Vo(ye(s)),b=Ur(f);let v=u[b],C=u[f];if(a){const $=b==="y"?"top":"left",O=b==="y"?"bottom":"right",P=v+p[$],H=v-p[O];v=Ri(P,v,H)}if(l){const $=f==="y"?"top":"left",O=f==="y"?"bottom":"right",P=C+p[$],H=C-p[O];C=Ri(P,C,H)}const S=d.fn({...t,[b]:v,[f]:C});return{...S,data:{x:S.x-o,y:S.y-i}}}}};function De(e){return Xr(e)?(e.nodeName||"").toLowerCase():"#document"}function dt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function se(e){var t;return(t=(Xr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Xr(e){return e instanceof Node||e instanceof dt(e).Node}function Ht(e){return e instanceof Element||e instanceof dt(e).Element}function Bt(e){return e instanceof HTMLElement||e instanceof dt(e).HTMLElement}function qr(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof dt(e).ShadowRoot}function ro(e){const{overflow:t,overflowX:o,overflowY:i,display:s}=St(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(s)}function Yl(e){return["table","td","th"].includes(De(e))}function Uo(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Zi(e){const t=Fi(),o=St(e);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function Ql(e){let t=re(e);for(;Bt(t)&&!Re(t);){if(Uo(t))return null;if(Zi(t))return t;t=re(t)}return null}function Fi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Re(e){return["html","body","#document"].includes(De(e))}function St(e){return dt(e).getComputedStyle(e)}function jo(e){return Ht(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function re(e){if(De(e)==="html")return e;const t=e.assignedSlot||e.parentNode||qr(e)&&e.host||se(e);return qr(t)?t.host:t}function Jr(e){const t=re(e);return Re(t)?e.ownerDocument?e.ownerDocument.body:e.body:Bt(t)&&ro(t)?t:Jr(t)}function Ui(e,t,o){var i;t===void 0&&(t=[]),o===void 0&&(o=!0);const s=Jr(e),a=s===((i=e.ownerDocument)==null?void 0:i.body),l=dt(s);return a?t.concat(l,l.visualViewport||[],ro(s)?s:[],l.frameElement&&o?Ui(l.frameElement):[]):t.concat(s,Ui(s,[],o))}function Yr(e){const t=St(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const s=Bt(e),a=s?e.offsetWidth:o,l=s?e.offsetHeight:i,d=No(o)!==a||No(i)!==l;return d&&(o=a,i=l),{width:o,height:i,$:d}}function Qr(e){return Ht(e)?e:e.contextElement}function ze(e){const t=Qr(e);if(!Bt(t))return ie(1);const o=t.getBoundingClientRect(),{width:i,height:s,$:a}=Yr(t);let l=(a?No(o.width):o.width)/i,d=(a?No(o.height):o.height)/s;return(!l||!Number.isFinite(l))&&(l=1),(!d||!Number.isFinite(d))&&(d=1),{x:l,y:d}}const Kl=ie(0);function Kr(e){const t=dt(e);return!Fi()||!t.visualViewport?Kl:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function t1(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==dt(e)?!1:t}function no(e,t,o,i){t===void 0&&(t=!1),o===void 0&&(o=!1);const s=e.getBoundingClientRect(),a=Qr(e);let l=ie(1);t&&(i?Ht(i)&&(l=ze(i)):l=ze(e));const d=t1(a,o,i)?Kr(a):ie(0);let h=(s.left+d.x)/l.x,u=(s.top+d.y)/l.y,p=s.width/l.x,f=s.height/l.y;if(a){const b=dt(a),v=i&&Ht(i)?dt(i):i;let C=b,S=C.frameElement;for(;S&&i&&v!==C;){const $=ze(S),O=S.getBoundingClientRect(),P=St(S),H=O.left+(S.clientLeft+parseFloat(P.paddingLeft))*$.x,N=O.top+(S.clientTop+parseFloat(P.paddingTop))*$.y;h*=$.x,u*=$.y,p*=$.x,f*=$.y,h+=H,u+=N,C=dt(S),S=C.frameElement}}return Fo({width:p,height:f,x:h,y:u})}function e1(e){let{elements:t,rect:o,offsetParent:i,strategy:s}=e;const a=s==="fixed",l=se(i),d=t?Uo(t.floating):!1;if(i===l||d&&a)return o;let h={scrollLeft:0,scrollTop:0},u=ie(1);const p=ie(0),f=Bt(i);if((f||!f&&!a)&&((De(i)!=="body"||ro(l))&&(h=jo(i)),Bt(i))){const b=no(i);u=ze(i),p.x=b.x+i.clientLeft,p.y=b.y+i.clientTop}return{width:o.width*u.x,height:o.height*u.y,x:o.x*u.x-h.scrollLeft*u.x+p.x,y:o.y*u.y-h.scrollTop*u.y+p.y}}function o1(e){return Array.from(e.getClientRects())}function tn(e){return no(se(e)).left+jo(e).scrollLeft}function i1(e){const t=se(e),o=jo(e),i=e.ownerDocument.body,s=Ie(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),a=Ie(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let l=-o.scrollLeft+tn(e);const d=-o.scrollTop;return St(i).direction==="rtl"&&(l+=Ie(t.clientWidth,i.clientWidth)-s),{width:s,height:a,x:l,y:d}}function s1(e,t){const o=dt(e),i=se(e),s=o.visualViewport;let a=i.clientWidth,l=i.clientHeight,d=0,h=0;if(s){a=s.width,l=s.height;const u=Fi();(!u||u&&t==="fixed")&&(d=s.offsetLeft,h=s.offsetTop)}return{width:a,height:l,x:d,y:h}}function r1(e,t){const o=no(e,!0,t==="fixed"),i=o.top+e.clientTop,s=o.left+e.clientLeft,a=Bt(e)?ze(e):ie(1),l=e.clientWidth*a.x,d=e.clientHeight*a.y,h=s*a.x,u=i*a.y;return{width:l,height:d,x:h,y:u}}function en(e,t,o){let i;if(t==="viewport")i=s1(e,o);else if(t==="document")i=i1(se(e));else if(Ht(t))i=r1(t,o);else{const s=Kr(e);i={...t,x:t.x-s.x,y:t.y-s.y}}return Fo(i)}function on(e,t){const o=re(e);return o===t||!Ht(o)||Re(o)?!1:St(o).position==="fixed"||on(o,t)}function n1(e,t){const o=t.get(e);if(o)return o;let i=Ui(e,[],!1).filter(d=>Ht(d)&&De(d)!=="body"),s=null;const a=St(e).position==="fixed";let l=a?re(e):e;for(;Ht(l)&&!Re(l);){const d=St(l),h=Zi(l);!h&&d.position==="fixed"&&(s=null),(a?!h&&!s:!h&&d.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||ro(l)&&!h&&on(e,l))?i=i.filter(p=>p!==l):s=d,l=re(l)}return t.set(e,i),i}function a1(e){let{element:t,boundary:o,rootBoundary:i,strategy:s}=e;const l=[...o==="clippingAncestors"?Uo(t)?[]:n1(t,this._c):[].concat(o),i],d=l[0],h=l.reduce((u,p)=>{const f=en(t,p,s);return u.top=Ie(f.top,u.top),u.right=oo(f.right,u.right),u.bottom=oo(f.bottom,u.bottom),u.left=Ie(f.left,u.left),u},en(t,d,s));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function l1(e){const{width:t,height:o}=Yr(e);return{width:t,height:o}}function d1(e,t,o){const i=Bt(t),s=se(t),a=o==="fixed",l=no(e,!0,a,t);let d={scrollLeft:0,scrollTop:0};const h=ie(0);if(i||!i&&!a)if((De(t)!=="body"||ro(s))&&(d=jo(t)),i){const f=no(t,!0,a,t);h.x=f.x+t.clientLeft,h.y=f.y+t.clientTop}else s&&(h.x=tn(s));const u=l.left+d.scrollLeft-h.x,p=l.top+d.scrollTop-h.y;return{x:u,y:p,width:l.width,height:l.height}}function ji(e){return St(e).position==="static"}function sn(e,t){return!Bt(e)||St(e).position==="fixed"?null:t?t(e):e.offsetParent}function rn(e,t){const o=dt(e);if(Uo(e))return o;if(!Bt(e)){let s=re(e);for(;s&&!Re(s);){if(Ht(s)&&!ji(s))return s;s=re(s)}return o}let i=sn(e,t);for(;i&&Yl(i)&&ji(i);)i=sn(i,t);return i&&Re(i)&&ji(i)&&!Zi(i)?o:i||Ql(e)||o}const c1=async function(e){const t=this.getOffsetParent||rn,o=this.getDimensions,i=await o(e.floating);return{reference:d1(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function h1(e){return St(e).direction==="rtl"}const Wi={convertOffsetParentRelativeRectToViewportRelativeRect:e1,getDocumentElement:se,getClippingRect:a1,getOffsetParent:rn,getElementRects:c1,getClientRects:o1,getDimensions:l1,getScale:ze,isElement:Ht,isRTL:h1},u1=ql,p1=Jl,g1=Gl,m1=Wl,f1=(e,t,o)=>{const i=new Map,s={platform:Wi,...o},a={...s.platform,_c:i};return jl(e,t,{...s,platform:a})};function b1(e){return _1(e)}function Gi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function _1(e){for(let t=e;t;t=Gi(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Gi(e);t;t=Gi(t)){if(!(t instanceof Element))continue;const o=getComputedStyle(t);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||t.tagName==="BODY"))return t}return null}const Q={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CLEAR:"Clear",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SPACE:" ",TAB:"Tab"};let v1=class{constructor(t,o){this._relativeRoot=null,this.setOptions(o),(this._host=t).addController(this)}hostConnected(){this._relativeRoot=this._host.parentNode instanceof ShadowRoot?this._host.parentNode.host:this._host,this.handleClickOutside=this.handleClickOutside.bind(this),this.handleClick=this.handleClick.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.addEventListeners()}hostDisconnected(){this.removeEventListeners()}get flyoutElement(){return this._relativeRoot}get targetElement(){return Ii(this._relativeRoot||this._host,`#${this._options.target}`,!1)}get floatingElement(){return this._host}get arrowElement(){return this._host.shadowRoot.querySelector(".flyout__arrow")}get middlewares(){const t=[u1(this._options.offset),p1(),m1({element:this.arrowElement})];if(this._options.flip){let o;switch(this._options.placement){case"left":{o=["left","bottom","top","right"];break}case"right":{o=["right","bottom","top","left"];break}case"top":{o=["top","right","bottom","left"];break}case"bottom":{o=["bottom","right","top","left"];break}default:{o=["bottom","right","top","left"];break}}t.push(g1({fallbackPlacements:o}))}return t}async updatePosition(){const{x:t,y:o,strategy:i,placement:s,middlewareData:a}=await f1(this.targetElement,this.floatingElement,{placement:this._options.placement,middleware:this.middlewares,platform:{...Wi,getOffsetParent:d=>Wi.getOffsetParent(d,b1)}});Object.assign(this.floatingElement.style,{position:i,left:`${t}px`,top:`${o}px`});const l={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(a.arrow&&this.arrowElement){const{x:d,y:h}=a.arrow;Object.assign(this.arrowElement.style,{left:d==null?"":`${d}px`,top:h==null?"":`${h}px`,right:"",bottom:"",[l]:`${-this.arrowElement.offsetWidth/2-1}px`,visibility:"visible",[`${s}`]:""}),this.arrowElement.setAttribute("flyout-placement",s)}}setOptions(t){return this._options=t,this}isPartOfParent(t,o){return!!(t.parentNode instanceof ShadowRoot&&t.parentNode.host.contains(o))}addEventListeners(){this.targetElement&&this.floatingElement&&(this.floatingElement.addEventListener("keydown",this.handleKeyDown),this.targetElement.addEventListener("keydown",this.handleKeyDown),this.targetElement.addEventListener("click",this.handleClick))}removeEventListeners(){this.targetElement&&this.floatingElement&&(this.floatingElement.removeEventListener("keydown",this.handleKeyDown),this.targetElement.removeEventListener("click",this.handleClick))}setup(){this.targetElement.classList.add("active"),this.floatingElement.setAttribute("aria-hidden","false"),document.addEventListener("click",this.handleClickOutside,!0)}cleanup(){this.targetElement.classList.remove("active"),this.floatingElement.setAttribute("aria-hidden","true"),document.removeEventListener("click",this.handleClickOutside,!0)}handleClick(){this._host.open?(this._host.hide(),this.cleanup()):(this._host.show(),this.setup())}handleClickOutside(t){const o=t.composedPath();t.button===0&&this.floatingElement&&this.targetElement&&!o.includes(this.floatingElement)&&!o.includes(this.targetElement)&&(this._host.hide(),this.cleanup())}handleKeyDown(t){this._host.open&&t.key===Q.ESC&&(t.stopPropagation(),this._host.hide(),this.targetElement.focus(),this.cleanup())}};const y1={top:"top",topEnd:"top-end",topStart:"top-start",bottom:"bottom",bottomEnd:"bottom-end",bottomStart:"bottom-start",right:"right",rightEnd:"right-end",rightStart:"right-start",left:"left",leftEnd:"left-end",leftStart:"left-start"},nn={onShow:"onShow",onHide:"onHide"};var C1=Object.defineProperty,S1=Object.getOwnPropertyDescriptor,ne=(e,t,o,i)=>{for(var s=i>1?void 0:i?S1(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&C1(t,o,s),s};const $1="reimagine-flyout";n.Flyout=class extends x{constructor(){super(),this.anchor=null,this.placement=y1.bottom,this.offset=0,this.open=!1,this.arrow=!1,this.reflow=!1,this.addEventListener("click",t=>{t.target.matches("[href]")&&this.hide()})}flyoutOptions(){return{target:this.anchor,placement:this.placement,offset:this.offset,flip:this.reflow}}_handleAriaAttributes(){if(this._flyout.targetElement.shadowRoot){const t=this._flyout.targetElement.shadowRoot;xl(t)[0].setAttribute("aria-expanded",String(this.open))}else this._flyout.targetElement.setAttribute("aria-expanded",String(this.open))}async _handleOpenChange(){if(this.open)this.style.display="block",await this._flyout.updatePosition(),this.style.opacity="1",this._flyout.setup(),this.dispatchEvent(new Event(nn.onShow));else{this.style.opacity="0";const t=()=>{this._flyout.cleanup(),this.dispatchEvent(new Event(nn.onHide)),this.style.display="none"},o=Io(this);this.addEventListener(ee,t.bind(this),{once:!0}),Do(this,o)}this._handleAriaAttributes()}async firstUpdated(){this.anchor&&(this._flyout=new v1(this,this.flyoutOptions()),this._flyout.setOptions(this.flyoutOptions()),this._handleAriaAttributes())}async updated(t){t.has("open")&&t.get("open")!==void 0&&await this._handleOpenChange()}show(){this.open=!0}hide(){this.open=!1}toggle(){this.open=!this.open}render(){return g`
      <div part="flyout__base" class="flyout__base">
        <slot></slot>
        ${this.arrow?g`<div part="flyout__arrow" class="flyout__arrow"></div>`:null}
      </div>
    `}},n.Flyout.styles=[Dl],ne([c({reflect:!0})],n.Flyout.prototype,"theme",2),ne([c({type:String})],n.Flyout.prototype,"anchor",2),ne([c({type:String})],n.Flyout.prototype,"placement",2),ne([c({type:Number})],n.Flyout.prototype,"offset",2),ne([c({type:Boolean,reflect:!0})],n.Flyout.prototype,"open",2),ne([c({type:Boolean,reflect:!0})],n.Flyout.prototype,"arrow",2),ne([c({type:Boolean,reflect:!0})],n.Flyout.prototype,"reflow",2),n.Flyout=ne([E($1)],n.Flyout);const Wo={display:"flex",flexDirection:"column",listStyleType:"none",rowGap:"var(--ds-spacing-m, 1rem)"},x1={marginBottom:"var(--ds-spacing-xl, 2rem)"},w1=y`
  ol {
    list-style-type: var(
      --ds-footnote-orderd-list-style-type,
      ${r(Wo.listStyleType)}
    );
    padding: 0;
    margin: 0;
    display: var(--ds-footnote-orderd-list-display, ${r(Wo.display)});
    flex-direction: var(
      --ds-footnote-orderd-list-felx-direction,
      ${r(Wo.flexDirection)}
    );
    row-gap: var(--ds-footnote-orderd-list-row-gap, ${r(Wo.rowGap)});
  }

  :host ::slotted(reimagine-divider) {
    margin-bottom: var(
      --ds-footnote-divider-margin-bottom,
      ${r(x1.marginBottom)}
    );
  }
`;var E1=Object.defineProperty,k1=Object.getOwnPropertyDescriptor,Xi=(e,t,o,i)=>{for(var s=i>1?void 0:i?k1(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&E1(t,o,s),s};const L1="reimagine-footnote";n.Footnote=class extends x{constructor(){super(...arguments),this.withDivider=!1}_handleSlotChange(){this.requestUpdate()}firstUpdated(){this._handleSlotChange()}updated(){const t=this.renderRoot.querySelector('slot[name="footnote__items"]');t&&t.assignedNodes({flatten:!0}).forEach(i=>{i.setAttribute("role","listitem")})}_buildFootnoteMarkup(){const t=this.withDivider?g` <slot name="footnote__divider"></slot>`:"";return g`
      ${t}
      <ol>
        <slot name="footnote__items" @slotchange=${this._handleSlotChange}></slot>
      </ol>
    `}render(){return g` ${this._buildFootnoteMarkup()} `}},n.Footnote.styles=[w1],Xi([c({type:Boolean,reflect:!0,attribute:"with-divider"})],n.Footnote.prototype,"withDivider",2),Xi([c({reflect:!0})],n.Footnote.prototype,"theme",2),n.Footnote=Xi([E(L1)],n.Footnote);const qi={fontWeight:"var(--ds-heading-3xl-font-weight, 600)",fontSize:"var(--ds-heading-3xl-font-size, 3.5rem)",lineHeight:"var(--ds-heading-3xl-line-height, 3.875rem)",letterSpacing:"var(--ds-heading-3xl-letter-spacing, -0.05em)",marginBottom:"0"},P1={fontWeight:"var(--ds-h5-font-weight, 600)",fontSize:"var(--ds-h5-font-size, 1.25rem)",lineHeight:"var(--ds-h5-line-height, 1.75rem)",letterSpacing:"var(--ds-h5-letter-spacing, -0.03em)",marginBottom:"0"},Ji={fontWeight:"var(--ds-heading-s-font-weight, 600)",fontSize:"var(--ds-heading-s-font-size, 1.5rem)",lineHeight:"var(--ds-heading-s-line-height, 2rem)",letterSpacing:"var(--ds-heading-s-letter-spacing, -0.05em)",marginBottom:"0"},Yi={fontWeight:"var(--ds-heading-3xs-font-weight, 600)",fontSize:"var(--ds-heading-3xs-font-size, 1rem)",lineHeight:"var(--ds-heading-3xs-line-height, 1.5rem)",letterSpacing:"var(--ds-heading-3xs-letter-spacing, -0.03em)",marginBottom:"0"},ao={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"var(--ds-spacing-xl, 2rem)"},H1={eyebrowColor:"var(--ds-theme-foreground-base-highlight, #005597)"},B1={headGap:"var(--ds-spacing-m, 1rem)"},T1={bodyGap:"var(--ds-spacing-2xl, 3rem)"},O1={headingColor:"var(--ds-theme-foreground-base-strong, #0e1726)"},an={contentColor:"var(--ds-theme-foreground-base-subtle, #17253d)",contentMarginBlockStart:"var(--ds-spacing-xl, 2rem)",contentPaddingInlineEnd:"var(--ds-spacing-l, 1rem)"},ln={footerColor:"var(--ds-theme-foreground-base-subtle, #17253d)",footerGap:"var(--ds-spacing-xl, 1.5rem)"},A1=y`
  :host {
    gap: var(--ds-heading-block-gap, ${r(ao.gap)});
  }

  :host,
  :host [part='heading-block__header'],
  :host [part='heading-block__body'],
  :host [part='heading-block__footer'] {
    display: var(--ds-heading-block-display, ${r(ao.display)});
    flex-direction: var(
      --ds-heading-block-flex-direction,
      ${r(ao.flexDirection)}
    );
  }

  :host [part='heading-block__header'] {
    gap: var(--ds-heading-block-head-gap, ${r(B1.headGap)});
  }

  :host [part='heading-block__body'] {
    gap: var(--ds-heading-block-body-gap, ${r(T1.bodyGap)});
  }

  :host [part='heading-block__footer'] {
    gap: var(--ds-heading-block-footer-gap, ${r(ln.footerGap)});
  }

  :host([alignment='center']) {
    text-align: var(--ds-heading-block-text-align, ${r(ao.alignItems)});
  }

  ::slotted([slot='heading-block__eyebrow-label']) {
    color: var(
      --ds-heading-block-eyebrow-label-color,
      ${r(H1.eyebrowColor)}
    );
    font-size: var(
      --ds-heading-block-eyebrow-label-font-size,
      ${r(Eo.fontSize)}
    );
    font-weight: var(
      --ds-heading-block-eyebrow-label-font-weight,
      ${r(Eo.fontWeight)}
    );
    line-height: var(
      --ds-heading-block-eyebrow-label-line-height,
      ${r(Eo.lineHeight)}
    );
    letter-spacing: var(
      --ds-heading-block-eyebrow-label-letter-spacing,
      ${r(Eo.letterSpacing)}
    );
  }

  ::slotted([slot='heading-block__heading-text']) {
    color: var(
      --ds-heading-block-heading-text-color,
      ${r(O1.headingColor)}
    );
    font-weight: var(
      --ds-heading-block-heading-text-font-weight,
      ${r(qi.fontWeight)}
    ) !important;
    font-size: var(
      --ds-heading-block-heading-text-font-size,
      ${r(qi.fontSize)}
    ) !important;
    line-height: var(
      --ds-heading-block-heading-text-line-height,
      ${r(qi.lineHeight)}
    ) !important;
  }

  ::slotted([slot='heading-block__content-text']) {
    color: var(
      --ds-heading-block-content-text-color,
      ${r(an.contentColor)}
    );
    font-weight: var(
      --ds-heading-block-content-text-font-weight,
      ${r(wi.fontWeight)}
    );
    font-size: var(
      --ds-heading-block-content-text-font-size,
      ${r(wi.fontSize)}
    );
    line-height: var(
      --ds-heading-block-content-text-line-height,
      ${r(wi.lineHeight)}
    );
    padding-inline-end: var(
      --ds-heading-block-content-text-padding-inline-end,
      ${r(an.contentPaddingInlineEnd)}
    );
    padding-inline-start: var(--ds-heading-block-content-text-padding-inline-start, 0);
  }

  ::slotted([slot='heading-block__footer-note']) {
    color: var(
      --ds-heading-block-footer-note-color,
      ${r(ln.footerColor)}
    );
    font-weight: var(
      --ds-heading-block-footer-note-font-weight,
      ${r(Yt.fontWeight)}
    ) !important;
    font-size: var(
      --ds-heading-block-footer-note-font-size,
      ${r(Yt.fontSize)}
    ) !important;
    line-height: var(
      --ds-heading-block-footer-note-line-height,
      ${r(Yt.lineHeight)}
    ) !important;
    letter-spacing: var(
      --ds-heading-block-footer-note-letter-spacing,
      ${r(Yt.letterSpacing)}
    ) !important;
  }

  :host([size='2xl']) ::slotted([slot='heading-block__heading-text']) {
    --ds-heading-block-heading-text-font-size: var(--ds-heading-2xl-font-size) !important;
    --ds-heading-block-heading-text-font-weight: var(--ds-heading-2xl-font-weight) !important;
    --ds-heading-block-heading-text-line-height: var(--ds-heading-2xl-line-height) !important;
  }

  :host([size='xl']) ::slotted([slot='heading-block__heading-text']) {
    --ds-heading-block-heading-text-font-size: var(--ds-heading-xl-font-size) !important;
    --ds-heading-block-heading-text-font-weight: var(--ds-heading-xl-font-weight) !important;
    --ds-heading-block-heading-text-line-height: var(--ds-heading-xl-line-height) !important;
  }

  :host([size='l']) ::slotted([slot='heading-block__heading-text']) {
    --ds-heading-block-heading-text-font-size: var(--ds-heading-l-font-size) !important;
    --ds-heading-block-heading-text-font-weight: var(--ds-heading-l-font-weight) !important;
    --ds-heading-block-heading-text-line-height: var(--ds-heading-l-line-height) !important;
  }

  :host([size='m']) ::slotted([slot='heading-block__heading-text']) {
    --ds-heading-block-heading-text-font-size: var(--ds-heading-m-font-size) !important;
    --ds-heading-block-heading-text-font-weight: var(--ds-heading-m-font-weight) !important;
    --ds-heading-block-heading-text-line-height: var(--ds-heading-m-line-height) !important;
  }

  :host([size='s']) ::slotted([slot='heading-block__heading-text']) {
    --ds-heading-block-heading-text-font-size: var(--ds-heading-s-font-size) !important;
    --ds-heading-block-heading-text-font-weight: var(--ds-heading-s-font-weight) !important;
    --ds-heading-block-heading-text-line-height: var(--ds-heading-s-line-height) !important;
  }

  :host([size='xs']) ::slotted([slot='heading-block__heading-text']) {
    --ds-heading-block-heading-text-font-size: var(--ds-heading-xs-font-size) !important;
    --ds-heading-block-heading-text-font-weight: var(--ds-heading-xs-font-weight) !important;
    --ds-heading-block-heading-text-line-height: var(--ds-heading-xs-line-height) !important;
  }

  :host([size='xl']) ::slotted([slot='heading-block__content-text']),
  :host([size='l']) ::slotted([slot='heading-block__content-text']),
  :host([size='m']) ::slotted([slot='heading-block__content-text']),
  :host([size='s']) ::slotted([slot='heading-block__content-text']),
  :host([size='xs']) ::slotted([slot='heading-block__content-text']) {
    --ds-heading-block-content-font-size: ${r(fe.fontSize)} !important;
    --ds-heading-block-content-font-weight: ${r(fe.fontWeight)} !important;
    --ds-heading-block-content-line-height: ${r(fe.lineHeight)} !important;
  }

  :host([size='3xl']) [part='heading-block__header'],
  :host([size='2xl']) [part='heading-block__header'],
  :host([size='xl']) [part='heading-block__header'] {
    --ds-heading-block-head-gap: var(--ds-spacing-m, 0.75rem);
  }

  :host([size='l']) [part='heading-block__header'],
  :host([size='m']) [part='heading-block__header'],
  :host([size='s']) [part='heading-block__header'] {
    --ds-heading-block-head-gap: var(--ds-spacing-xs, 0.5rem);
  }

  :host([size='3xl']) {
    --ds-heading-block-gap: var(--ds-spacing-xl, 1.5rem);
  }

  :host([size='2xl']) {
    --ds-heading-block-gap: var(--ds-spacing-l, 1rem);
  }

  :host([size='xl']),
  :host([size='l']),
  :host([size='m']),
  :host([size='s']) {
    --ds-heading-block-gap: var(--ds-spacing-m, 0.75rem);
  }

  :host([size='3xl']) [part='heading-block__body'] {
    --ds-heading-block-body-gap: var(--ds-spacing-2xl, 2rem);
  }

  :host([size='2xl']) [part='heading-block__body'] {
    --ds-heading-block-body-gap: var(--ds-spacing-l, 1.5rem);
  }

  :host([size='xl']) [part='heading-block__body'],
  :host([size='l']) [part='heading-block__body'],
  :host([size='m']) [part='heading-block__body'],
  :host([size='s']) [part='heading-block__body'] {
    --ds-heading-block-body-gap: var(--ds-spacing-xl, 1.5rem);
  }

  :host([size='l']) [part='heading-block__footer'],
  :host([size='m']) [part='heading-block__footer'],
  :host([size='s']) [part='heading-block__footer'] {
    --ds-heading-block-footer-gap: var(--ds-spacing-l, 1.5rem);
  }

  /* Center Alignment css */

  :host([alignment='center']) ::slotted([slot='heading-block__footer-link']) {
    justify-content: var(
      --ds-heading-block-justify-content,
      ${r(ao.justifyContent)}
    );
  }

  :host([alignment='center']) ::slotted([slot='heading-block__content-text']) {
    --ds-heading-block-content-padding-inline-end: var(--ds-spacing-2xl);
    --ds-heading-block-content-padding-inline-start: var(--ds-spacing-2xl);
  }
`,M1=y`
  @media (min-width: ${r(lt.md)}) {
    ::slotted([slot='heading-block__content-text']) {
      --ds-heading-block-content-padding-inline-end: var(--ds-spacing-2xl);
    }
  }
`;var I1=Object.defineProperty,D1=Object.getOwnPropertyDescriptor,X=(e,t,o,i)=>{for(var s=i>1?void 0:i?D1(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&I1(t,o,s),s};const R1="reimagine-heading-block";n.HeadingBlock=class extends x{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._eyebrowLabelEmpty=!0,this._headingTextEmpty=!0,this._contentTextEmpty=!0,this._footerLinkEmpty=!0,this._footerNoteEmpty=!0}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0,this._eyebrowLabelEmpty=this._eyebrowLabelSlot.length===0,this._headingTextEmpty=this._headingTextSlot.length===0,this._contentTextEmpty=this._contentTextSlot.length===0,this._footerLinkEmpty=this._footerLinkSlot.length===0,this._footerNoteEmpty=this._footerNoteSlot.length===0}_renderOptionalSlot(t="heading-block__first",o=this._firstSlotEmpty){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return g`
      ${this._renderOptionalSlot("heading-block__first",this._firstSlotEmpty)}
      <div
        class="heading-block__header"
        part="heading-block__header"
        style="${this._eyebrowLabelEmpty&&this._headingTextEmpty?"display: none;":""}"
      >
        <slot name="heading-block__eyebrow-label" @slotchange="${this._handleSlotChange}"></slot>
        <slot name="heading-block__heading-text" @slotchange="${this._handleSlotChange}"></slot>
      </div>
      <div class="heading-block__body" part="heading-block__body">
        <slot
          name="heading-block__content-text"
          @slotchange="${this._handleSlotChange}"
          style="${this._contentTextEmpty?"display: none;":""}"
        ></slot>
        <div
          class="heading-block__footer"
          part="heading-block__footer"
          style="${this._footerLinkEmpty&&this._footerNoteEmpty?"display: none;":""}"
        >
          <slot name="heading-block__footer-link" @slotchange="${this._handleSlotChange}"></slot>
          <slot name="heading-block__footer-note" @slotchange="${this._handleSlotChange}"></slot>
        </div>
      </div>
      ${this._renderOptionalSlot("heading-block__last",this._lastSlotEmpty)}
    `}},n.HeadingBlock.styles=[A1,M1],X([_({slot:"heading-block__first"})],n.HeadingBlock.prototype,"_firstSlot",2),X([_({slot:"heading-block__last"})],n.HeadingBlock.prototype,"_lastSlot",2),X([_({slot:"heading-block__eyebrow-label"})],n.HeadingBlock.prototype,"_eyebrowLabelSlot",2),X([_({slot:"heading-block__heading-text"})],n.HeadingBlock.prototype,"_headingTextSlot",2),X([_({slot:"heading-block__content-text"})],n.HeadingBlock.prototype,"_contentTextSlot",2),X([_({slot:"heading-block__footer-link"})],n.HeadingBlock.prototype,"_footerLinkSlot",2),X([_({slot:"heading-block__footer-note"})],n.HeadingBlock.prototype,"_footerNoteSlot",2),X([m()],n.HeadingBlock.prototype,"_firstSlotEmpty",2),X([m()],n.HeadingBlock.prototype,"_lastSlotEmpty",2),X([m()],n.HeadingBlock.prototype,"_eyebrowLabelEmpty",2),X([m()],n.HeadingBlock.prototype,"_headingTextEmpty",2),X([m()],n.HeadingBlock.prototype,"_contentTextEmpty",2),X([m()],n.HeadingBlock.prototype,"_footerLinkEmpty",2),X([m()],n.HeadingBlock.prototype,"_footerNoteEmpty",2),X([c({reflect:!0})],n.HeadingBlock.prototype,"theme",2),X([c({reflect:!0})],n.HeadingBlock.prototype,"size",2),X([c({reflect:!0})],n.HeadingBlock.prototype,"alignment",2),n.HeadingBlock=X([E(R1)],n.HeadingBlock);const dn={color:"var(--ds-theme-foreground-base-strong, var(--ds-color-brilliant-blue-900, #002948))",display:"block"},cn={slotNameDisplay:"flex",slotNamePaddingInline:"1rem"},z1=y`
  :host {
    /* Set :host property:values with default css variables names and values */
    display: var(--ds-category-display, ${r(dn.display)});
    color: var(--ds-category-color, ${r(dn.color)});
  }

  :host ::slotted([slot]) {
    /* You can set css variables while the selector is relative to the :host */
    display: var(
      --ds-category-slot-name-display,
      ${r(cn.slotNameDisplay)}
    );
    padding-inline: var(
      --ds-category-slot-name-padding-inline,
      ${r(cn.slotNamePaddingInline)}
    );
  }

  :host([property]) {
    /* Variants should set a CSS variable to a different value */
    --ds-category-slot-name-padding-inline: 2rem;
  }

  :host([property]) ::slotted(other-component-element) {
    /* You should modify slotted elements by setting their available css variables */
    --ds-other-component-element-display: flex;
    --ds-other-component-element-flex-direction: row;
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let hn=class extends Event{constructor(t,o,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=o,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function u2(e){return e}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let un=class{constructor(t,o,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(a,l)=>{this.unsubscribe&&(this.unsubscribe!==l&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=a,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(a,l)),this.unsubscribe=l},this.host=t,o.context!==void 0){const a=o;this.context=a.context,this.callback=a.callback,this.subscribe=a.subscribe??!1}else this.context=o,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new hn(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class N1{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,o=!1){const i=o||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[o,{disposer:i}]of this.subscriptions)o(this.o,i)},t!==void 0&&(this.value=t)}addCallback(t,o,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:o});const{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let V1=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}},pn=class extends N1{constructor(t,o,i){var s,a;super(o.context!==void 0?o.initialValue:i),this.onContextRequest=l=>{const d=l.composedPath()[0];l.context===this.context&&d!==this.host&&(l.stopPropagation(),this.addCallback(l.callback,d,l.subscribe))},this.onProviderRequest=l=>{const d=l.composedPath()[0];if(l.context!==this.context||d===this.host)return;const h=new Set;for(const[u,{consumerHost:p}]of this.subscriptions)h.has(u)||(h.add(u),p.dispatchEvent(new hn(this.context,u,!0)));l.stopPropagation()},this.host=t,o.context!==void 0?this.context=o.context:this.context=o,this.attachListeners(),(a=(s=this.host).addController)==null||a.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new V1(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Z1({context:e}){return(t,o)=>{const i=new WeakMap;if(typeof o=="object")return o.addInitializer(function(){i.set(this,new pn(this,{context:e}))}),{get(){return t.get.call(this)},set(s){var a;return(a=i.get(this))==null||a.setValue(s),t.set.call(this,s)},init(s){var a;return(a=i.get(this))==null||a.setValue(s),s}};{t.constructor.addInitializer(l=>{i.set(l,new pn(l,{context:e}))});const s=Object.getOwnPropertyDescriptor(t,o);let a;if(s===void 0){const l=new WeakMap;a={get(){return l.get(this)},set(d){i.get(this).setValue(d),l.set(this,d)},configurable:!0,enumerable:!0}}else{const l=s.set;a={...s,set(d){i.get(this).setValue(d),l==null||l.call(this,d)}}}return void Object.defineProperty(t,o,a)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gn({context:e,subscribe:t}){return(o,i)=>{typeof i=="object"?i.addInitializer(function(){new un(this,{context:e,callback:s=>{o.set.call(this,s)},subscribe:t})}):o.constructor.addInitializer(s=>{new un(s,{context:e,callback:a=>{s[i]=a},subscribe:t})})}}const Go="uiShellContextUpdate",Qi=Symbol.for("ui-shell-context"),mn={col1even:"1-col-even",col1boxed:"1-col-boxed",col1staged:"1-col-staged",col1focus:"1-col-focus",col2even:"2-col-even",col2focus:"2-col-focus",col2gapped:"2-col-gapped",col2offsetRight:"2-col-offset-right",col2offsetLeft:"2-col-offset-left",col2editorial:"2-col-editorial",col2sidebar:"2-col-sidebar",col3Even:"3-col-even",col3OffsetStack:"3-col-offset-stack",col3OffsetRight:"3-col-offset-right",col4even1:"4-col-even-1",col4even2:"4-col-even-2",col5Even:"5-col-even",col6Even:"6-col-even",col1evenOverflow:"1-col-even-overflow",col1boxedOverflow:"1-col-boxed-overflow",col2evenOverflow:"2-col-even-overflow",col3EvenOverflow:"3-col-even-overflow",col4evenOverflow:"4-col-even-overflow",colMultiCardOverflow:"multi-card-overflow"},pt={display:"flex",flexDirection:"row",height:"initial",justifyContent:"initial",alignItems:"center",minHeight:"initial",maxHeight:"none",position:"relative",paddingInline:"1rem",paddingBlockStart:"var(--ds-breadth-vertical-default, 6rem)",paddingBlockEnd:"var(--ds-breadth-vertical-default, 6rem)",zIndex:"0"},lo={contentDisplay:"flex",contentFlexDirection:"column",contentRowGap:"var(--ds-density-vertical-default, 3rem)",contentWidth:"100%"},Tt={position:"absolute",top:"0",right:"0",bottom:"0",left:"0",transform:"unset",overflow:"hidden",zIndex:"-1",width:"100%",maxWidth:"inherit",height:"100%",maxHeight:"inherit",paddingBlockStart:"0",paddingBlockEnd:"0"},F1=y`
  :host {
    display: var(--ds-ui-shell-display, ${r(pt.display)});
    flex-direction: var(--ds-ui-shell-flex-direction, ${r(pt.flexDirection)});
    position: var(--ds-ui-shell-position, ${r(pt.position)});
    height: var(--ds-ui-shell-height, ${r(pt.height)});
    min-height: var(--ds-ui-shell-min-height, ${r(pt.minHeight)});
    max-height: var(--ds-ui-shell-max-height, ${r(pt.maxHeight)});
    padding-block-start: var(
      --ds-ui-shell-padding-block-start,
      ${r(pt.paddingBlockStart)}
    );
    padding-block-end: var(
      --ds-ui-shell-padding-block-end,
      ${r(pt.paddingBlockEnd)}
    );
    justify-content: var(
      --ds-ui-shell-justify-content,
      ${r(pt.justifyContent)}
    );
    align-items: var(--ds-ui-shell-align-items, ${r(pt.alignItems)});
    z-index: var(--ds-ui-shell-z-index, 0);
  }

  .ui-shell__content {
    display: var(
      --ds-ui-shell-content-display,
      ${r(lo.contentDisplay)}
    );
    flex-direction: var(
      --ds-ui-shell-content-flex-direction,
      ${r(lo.contentFlexDirection)}
    );
    row-gap: var(--ds-ui-shell-content-row-gap, ${r(lo.contentRowGap)});
    width: var(--ds-ui-shell-content-width, ${r(lo.contentWidth)});
    justify-content: var(--ds-ui-shell-justify-content, initial);
    align-items: var(--ds-ui-shell-justify-content, initial);
  }

  :host([breadth='relaxed']) {
    --ds-ui-shell-padding-block-start: ${r(pt.paddingBlockStart)};
    --ds-ui-shell-padding-block-end: ${r(pt.paddingBlockEnd)};
  }

  :host([breadth='comfortable']) {
    --ds-ui-shell-padding-block-start: var(--ds-breadth-vertical-comfortable, 4.5rem);
    --ds-ui-shell-padding-block-end: var(--ds-breadth-vertical-comfortable, 4.5rem);
  }

  :host([breadth='none']) {
    --ds-ui-shell-padding-block-start: 0;
    --ds-ui-shell-padding-block-end: 0;
  }

  :host([density='default']) {
    --ds-ui-shell-content-row-gap: ${r(lo.contentRowGap)};
  }

  :host([density='compact']) {
    --ds-ui-shell-content-row-gap: var(--ds-density-vertical-compact, 2rem);
  }

  :host([density='none']) {
    --ds-ui-shell-content-row-gap: var(--ds-density-vertical-none, 0);
  }

  :host([horizontal-align='left']) {
    --ds-ui-shell-justify-content: flex-start;
  }

  :host([horizontal-align='center']) {
    --ds-ui-shell-justify-content: center;
  }

  :host([horizontal-align='right']) {
    --ds-ui-shell-justify-content: flex-end;
  }

  :host([vertical-align='top']) {
    --ds-ui-shell-align-items: flex-start;
  }

  :host([vertical-align='center']) {
    --ds-ui-shell-align-items: center;
  }

  :host([vertical-align='bottom']) {
    --ds-ui-shell-align-items: flex-end;
  }

  .ui-shell__background {
    position: var(
      --ds-ui-shell-background-position,
      ${r(Tt.position)}
    );
    top: var(--ds-ui-shell-background-top, ${r(Tt.top)});
    right: var(--ds-ui-shell-background-right, ${r(Tt.right)});
    bottom: var(--ds-ui-shell-background-bottom, ${r(Tt.bottom)});
    left: var(--ds-ui-shell-background-left, ${r(Tt.left)});
    transform: var(
      --ds-ui-shell-background-transform,
      ${r(Tt.transform)}
    );
    overflow: var(
      --ds-ui-shell-background-overflow,
      ${r(Tt.overflow)}
    );
    padding-block-start: var(
      --ds-ui-shell-background-padding-block-start,
      ${r(Tt.paddingBlockStart)}
    );
    padding-block-end: var(
      --ds-ui-shell-background-padding-block-end,
      ${r(Tt.paddingBlockEnd)}
    );
    z-index: var(--ds-ui-shell-background-z-index, ${r(Tt.zIndex)});
  }

  .ui-shell__background-media {
    --ds-media-width: 100%;
    --ds-media-height: 100%;
    --ds-media-object-fit: cover;
    --ds-media-picture-height: 100%;
    height: 100%;
  }
`,U1={none:{type:"density-vertical",value:"0"},compact:{type:"density-vertical",value:"2rem"},default:{type:"density-vertical",value:"3rem"}},j1=y`
  @media (max-width: ${r(va(lt.md))}) {
    :host([media-appearance='stack-mobile']),
    :host([media-appearance='stack-mobile-reverse']) {
      --ds-ui-shell-background-position: relative;
      --ds-ui-shell-background-z-index: 0;
    }

    :host([media-appearance='stack-mobile']) {
      --ds-ui-shell-flex-direction: column;
      --ds-ui-shell-padding-block-start: 0;
      --ds-ui-shell-background-padding-block-end: var(
        --ds-ui-shell-content-row-gap,
        var(--ds-density-vertical-default, 3rem)
      );
    }

    :host([media-appearance='stack-mobile-reverse']) {
      --ds-ui-shell-flex-direction: column-reverse;
      --ds-ui-shell-padding-block-end: 0;
      --ds-ui-shell-background-padding-block-start: var(
        --ds-ui-shell-content-row-gap,
        var(--ds-density-vertical-default, 3rem)
      );
    }

    .ui-shell__background-foreground {
      --ds-ui-shell-background-overflow: visible;
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      margin-block-end: var(--ds-ui-shell-background-padding-block-end);
    }

    .ui-shell__background-foreground .ui-shell__background-media {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .ui-shell__background-foreground .ui-shell__foreground-media {
      display: flex;
      padding-block-start: var(--ds-ui-shell-background-padding-block-end);
      padding-inline: ${r(U1.default.value)};
      z-index: 2;
    }

    .ui-shell__background-foreground picture img {
      width: 100%;
    }
  }
`;var W1=Object.defineProperty,G1=Object.getOwnPropertyDescriptor,V=(e,t,o,i)=>{for(var s=i>1?void 0:i?G1(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&W1(t,o,s),s};const X1="reimagine-ui-shell";n.UiShell=class extends x{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._backgroundMediaSlotEmpty=!0,this._backgroundForegroundClass="ui-shell__background-foreground",this._foregroundMediaClass="ui-shell__foreground-media-target",this._foregroundMediaCloneClass="ui-shell__foreground-media-clone",this.uiShellObject={theme:"",background:"",breadth:"",density:"",mediaAppearance:"",horizontalAlign:"",verticalAlign:"",foregroundMedia:void 0}}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0,this._backgroundMediaSlotEmpty=this._backgroundMediaSlot.length===0}_renderOptionalSlot(t="ui-shell__first",o=this._firstSlotEmpty){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_updateAttrByContext(){this.uiShellObject.theme!==""&&(this.theme=this.uiShellObject.theme),this.uiShellObject.background!==""&&(this.background=this.uiShellObject.background),this.uiShellObject.breadth!==""&&(this.breadth=this.uiShellObject.breadth),this.uiShellObject.density!==""&&(this.density=this.uiShellObject.density),this.uiShellObject.mediaAppearance!==""&&(this.mediaAppearance=this.uiShellObject.mediaAppearance),this.uiShellObject.horizontalAlign!==""&&(this.horizontalAlign=this.uiShellObject.horizontalAlign),this.uiShellObject.verticalAlign!==""&&(this.verticalAlign=this.uiShellObject.verticalAlign),this.uiShellObject.foregroundMedia!==void 0&&(this._foregroundMedia=this.uiShellObject.foregroundMedia,this._replicateMediaElement())}_renderMediaSlot(){return g`
      <div
        part="ui-shell__background"
        class="ui-shell__background"
        style="${this._backgroundMediaSlotEmpty?"display: none;":""}"
      >
        <div part="ui-shell__background-media" class="ui-shell__background-media">
          <slot name="ui-shell__background-media" @slotchange="${this._handleSlotChange}"></slot>
        </div>

        <div class="ui-shell__background-overlay"></div>
        <div class="ui-shell__foreground-media" part="ui-shell__foreground-media"></div>
      </div>
    `}_renderContentSlot(){return g`
      <div part="ui-shell__content" class="ui-shell__content">
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_replicateMediaElement(){var o,i,s;const t=this.uiShellObject.foregroundMedia||this.querySelector(`.${this._foregroundMediaClass}`)||void 0;if(this._foregroundMediaContainer&&t){const a=t.cloneNode(!0);a.classList.add(this._foregroundMediaCloneClass),a.classList.remove(this._foregroundMediaClass),a.style.display="",this._foregroundMedia=a,this._foregroundMediaContainer.innerHTML="",(o=this._foregroundMediaContainer)==null||o.append(this._foregroundMedia),(i=this._backgroundMediaContainer)==null||i.classList.add(this._backgroundForegroundClass)}else(s=this._backgroundMediaContainer)==null||s.classList.remove(this._backgroundForegroundClass)}_updateUiShellContext(t){this.uiShellObject={...this.uiShellObject,...t.detail},this._updateAttrByContext()}firstUpdated(){this._replicateMediaElement()}connectedCallback(){super.connectedCallback(),this.addEventListener(Go,this._updateUiShellContext)}disconnectedCallback(){this.removeEventListener(Go,this._updateUiShellContext),super.disconnectedCallback()}render(){return g`
      ${this._renderOptionalSlot("ui-shell__first",this._firstSlotEmpty)}
      ${this._renderMediaSlot()} ${this._renderContentSlot()}
      ${this._renderOptionalSlot("ui-shell__last",this._lastSlotEmpty)}
    `}},n.UiShell.styles=[F1,j1],V([_({slot:"ui-shell__first"})],n.UiShell.prototype,"_firstSlot",2),V([_({slot:"ui-shell__last"})],n.UiShell.prototype,"_lastSlot",2),V([_({slot:"ui-shell__background-media"})],n.UiShell.prototype,"_backgroundMediaSlot",2),V([m()],n.UiShell.prototype,"_firstSlotEmpty",2),V([m()],n.UiShell.prototype,"_lastSlotEmpty",2),V([m()],n.UiShell.prototype,"_backgroundMediaSlotEmpty",2),V([bt(".ui-shell__background")],n.UiShell.prototype,"_backgroundMediaContainer",2),V([bt(".ui-shell__foreground-media")],n.UiShell.prototype,"_foregroundMediaContainer",2),V([c({reflect:!1})],n.UiShell.prototype,"_backgroundForegroundClass",2),V([c({reflect:!1})],n.UiShell.prototype,"_foregroundMediaClass",2),V([c({reflect:!1})],n.UiShell.prototype,"_foregroundMediaCloneClass",2),V([c({reflect:!1,attribute:!1})],n.UiShell.prototype,"_foregroundMedia",2),V([c({reflect:!0})],n.UiShell.prototype,"theme",2),V([c({reflect:!0})],n.UiShell.prototype,"background",2),V([c({reflect:!0})],n.UiShell.prototype,"breadth",2),V([c({reflect:!0})],n.UiShell.prototype,"density",2),V([c({reflect:!0,attribute:"media-appearance"})],n.UiShell.prototype,"mediaAppearance",2),V([c({reflect:!0,attribute:"horizontal-align"})],n.UiShell.prototype,"horizontalAlign",2),V([c({reflect:!0,attribute:"vertical-align"})],n.UiShell.prototype,"verticalAlign",2),V([Z1({context:Qi}),c({attribute:!1})],n.UiShell.prototype,"uiShellObject",2),n.UiShell=V([E(X1)],n.UiShell);const $t={layoutDisplay:"flex",layoutColGap:"1rem",layoutRowGap:"0.5rem",layoutFlexDirection:"row",layoutFlexWrap:"wrap",layoutJustifyContent:"flex-start",layoutWidth:"100%",layoutPaddingInlineStart:"initial",layoutOverflow:"initial",layoutMarginInline:"initial"},Ki={layoutColDisplay:"block",layoutColFlexGrow:"0",layoutColFlexShrink:"0",layoutColFlexBasis:"auto"},q1=y`
  :host {
    --ds-layout-column-gap: var(
      --ds-density-horizontal-default,
      var(--ds-spacing-m, ${r($t.layoutColGap)})
    );
    --ds-layout-column-count: 1;
    --ds-layout-col-grid-column-total: ${ki.xs};

    /* Determine the amount of space reserved for column gaps
    * by multiplying the gap by the number of columns minus one. */
    --ds-layout-column-gap-offset: calc(
      var(--ds-layout-column-gap) * (var(--ds-layout-column-count) - 1)
    );

    /* Determine available width by subtracting the column gap offset from 100%. */
    --ds-layout-available-width: calc(100% - var(--ds-layout-column-gap-offset));

    /* Determine the width of each column by dividing the available width by the number of columns. */
    --ds-layout-column-width: calc(
      var(--ds-layout-available-width) / var(--ds-layout-column-count)
    );

    /* Layout column flex (not shorthand). */
    --ds-layout-col-flex-grow: ${r(Ki.layoutColFlexGrow)};
    --ds-layout-col-flex-shrink: ${r(Ki.layoutColFlexShrink)};
    --ds-layout-col-flex-basis: var(
      --ds-layout-column-width,
      ${r(Ki.layoutColFlexBasis)}
    );

    /* Flex basis to variables for all column layouts */
    --ds-layout-col-first-flex-basis: var(--ds-layout-col-flex-basis);
    --ds-layout-col-second-flex-basis: var(--ds-layout-col-flex-basis);
    --ds-layout-col-third-flex-basis: var(--ds-layout-col-flex-basis);
    --ds-layout-col-forth-flex-basis: var(--ds-layout-col-flex-basis);
    --ds-layout-col-fifth-flex-basis: var(--ds-layout-col-flex-basis);
    --ds-layout-col-last-flex-basis: var(--ds-layout-col-flex-basis);

    display: var(--ds-layout-display, ${r($t.layoutDisplay)});
    flex-wrap: var(--ds-layout-flex-wrap, ${r($t.layoutFlexWrap)});
    flex-direction: var(
      --ds-layout-flex-direction,
      ${r($t.layoutFlexDirection)}
    );
    column-gap: var(--ds-layout-column-gap, ${r($t.layoutColGap)});
    row-gap: var(--ds-layout-row-gap, ${r($t.layoutRowGap)});
    justify-content: var(
      --ds-layout-justify-content,
      ${r($t.layoutJustifyContent)}
    );
    width: var(--ds-layout-width, ${r($t.layoutWidth)});
    padding-inline-start: var(
      --ds-layout-padding-inline-start,
      ${r($t.layoutPaddingInlineStart)}
    );
    overflow: var(--ds-layout-overflow, ${r($t.layoutOverflow)});
    margin-inline: var(--ds-layout-margin-inline, ${r($t.layoutMarginInline)});
  }

  :host > .layout__col {
    flex-grow: var(--ds-layout-col-flex-grow);
    flex-shrink: var(--ds-layout-col-flex-shrink);
    flex-basis: var(--ds-layout-col-flex-basis);
  }

  :host([ltr]) {
    --ds-layout-flex-direction: row-reverse;
  }

  :host([overflow]) {
    --ds-layout-flex-wrap: nowrap;
    --ds-layout-column-count: 1;
    --ds-layout-col-flex-basis: calc(5 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2);
  }

  :host([overflow='scroll']) {
    --ds-layout-overflow: auto;
  }

  :host > .layout__col:first-child {
    flex-basis: var(--ds-layout-col-first-flex-basis);
  }

  :host > .layout__col:nth-child(2) {
    flex-basis: var(--ds-layout-col-second-flex-basis);
  }

  :host > .layout__col:nth-child(3) {
    flex-basis: var(--ds-layout-col-third-flex-basis);
  }

  :host > .layout__col:nth-child(4) {
    flex-basis: var(--ds-layout-col-forth-flex-basis);
  }

  :host > .layout__col:nth-child(5) {
    flex-basis: var(--ds-layout-col-fifth-flex-basis);
  }

  :host > .layout__col:last-child {
    flex-basis: var(--ds-layout-col-last-flex-basis);
  }
`,J1=y`
  @media (min-width: ${r(lt.sm)}) {
    :host([configuration^='6-col']),
    :host([configuration='4-col-even-2']) {
      --ds-layout-column-count: 2;
    }

    :host([overflow]) {
      --ds-layout-width: 100%;
      --ds-layout-column-count: 1;
    }

    :host([configuration='multi-card-overflow']) {
      --ds-layout-column-count: 2;
    }
  }

  @media (min-width: ${r(lt.md)}) {
    :host {
      --ds-layout-col-grid-column-total: ${ki.md};
      --ds-layout-row-gap: 1rem;
    }

    :host([configuration^='2-col']) {
      --ds-layout-column-count: 2;
    }

    :host([configuration^='3-col']),
    :host([configuration^='6-col']) {
      --ds-layout-column-count: 3;
    }

    :host([configuration^='4-col']) {
      --ds-layout-column-count: 4;
    }

    :host([configuration^='5-col']) {
      --ds-layout-column-count: 5;
    }

    :host([configuration='1-col-focus']) {
      --ds-layout-column-width: calc(10 / var(--ds-layout-col-grid-column-total) * 100%);
    }

    :host([configuration='2-col-focus']) {
      --ds-layout-width: calc(10 / var(--ds-layout-col-grid-column-total) * 100%);
      --ds-layout-column-width: calc(
        var(--ds-layout-available-width) / var(--ds-layout-column-count)
      );
    }

    :host([configuration='1-col-focus']),
    :host([configuration='2-col-focus']) {
      --ds-layout-justify-content: center;
      --ds-layout-margin-inline: auto;
    }

    :host([configuration='2-col-gapped']) {
      --ds-layout-col-flex-basis: calc(
        5 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
      --ds-layout-justify-content: space-between;
    }

    :host([configuration='2-col-offset-right']) {
      --ds-layout-col-first-flex-basis: calc(
        4 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
      --ds-layout-col-last-flex-basis: calc(
        8 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
    }

    :host([configuration='3-col-offset-stack']) {
      --ds-layout-col-first-flex-basis: calc(
        8 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
      --ds-layout-col-second-flex-basis: calc(
        4 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
      --ds-layout-col-third-flex-basis: calc(
        6 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
      --ds-layout-col-forth-flex-basis: calc(
        6 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
      --ds-layout-col-fifth-flex-basis: calc(
        4 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
      --ds-layout-col-last-flex-basis: calc(
        8 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
    }

    :host([configuration='3-col-offset-right']) {
      --ds-layout-col-first-flex-basis: calc(
        3 / var(--ds-layout-col-grid-column-total) * 100% - 0.75rem
      );
      --ds-layout-col-second-flex-basis: calc(
        3 / var(--ds-layout-col-grid-column-total) * 100% - 0.75rem
      );
      --ds-layout-col-last-flex-basis: calc(
        6 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
    }

    :host([configuration='2-col-offset-left']) {
      --ds-layout-col-first-flex-basis: calc(
        8 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
      --ds-layout-col-last-flex-basis: calc(
        4 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
    }

    :host([configuration='2-col-editorial']) {
      --ds-layout-col-first-flex-basis: calc(
        4 / var(--ds-layout-col-grid-column-total) * 100% - 0.5rem
      );
      --ds-layout-col-last-flex-basis: calc(
        6 / var(--ds-layout-col-grid-column-total) * 100% - 0.5rem
      );
      --ds-layout-column-gap: calc(1 / var(--ds-layout-col-grid-column-total) * 100% - 0.5rem);
    }

    :host([configuration='2-col-sidebar']) {
      --ds-layout-col-first-flex-basis: calc(
        4 / var(--ds-layout-col-grid-column-total) * 100% - 0.5rem
      );
      --ds-layout-col-last-flex-basis: calc(
        8 / var(--ds-layout-col-grid-column-total) * 100% - 0.5rem
      );
    }

    :host([configuration='4-col-even-2']) {
      --ds-layout-column-count: 2;
    }

    :host([configuration='1-col-even-overflow']),
    :host([configuration='1-col-boxed-overflow']),
    :host([overflow-columns='4'][configuration='1-col-even-overflow']),
    :host([overflow-columns='4'][configuration='1-col-boxed-overflow']) {
      --ds-layout-column-count: 1;
    }

    :host([configuration='3-col-even-overflow']),
    :host([configuration='4-col-even-overflow']),
    :host([configuration='multi-card-overflow']) {
      --ds-layout-column-count: 3;
    }

    :host([overflow='scroll']),
    :host([configuration='2-col-even-overflow']) {
      --ds-layout-column-count: 2;
    }
  }

  @media (min-width: ${r(lt.lg)}) {
    :host {
      --ds-layout-col-grid-column-total: ${ki.lg};
    }

    :host([configuration='1-col-boxed']),
    :host([configuration='1-col-staged']),
    :host([configuration='1-col-focus']) {
      --ds-layout-margin-inline: auto;
      --ds-layout-justify-content: center;
    }

    :host([configuration='1-col-boxed']) {
      --ds-layout-column-width: calc(20 / var(--ds-layout-col-grid-column-total) * 100%);
    }

    :host([configuration='1-col-staged']) {
      --ds-layout-column-width: calc(16 / var(--ds-layout-col-grid-column-total) * 100%);
    }

    :host([configuration='1-col-focus']) {
      --ds-layout-column-width: calc(14 / var(--ds-layout-col-grid-column-total) * 100%);
    }

    :host([configuration='2-col-focus']) {
      --ds-layout-width: calc(14 / var(--ds-layout-col-grid-column-total) * 100%);
      --ds-layout-column-width: calc(
        var(--ds-layout-available-width) / var(--ds-layout-column-count)
      );
    }

    :host([configuration='2-col-gapped']) {
      --ds-layout-col-flex-basis: calc(
        10 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
    }

    :host([configuration='2-col-offset-right']) {
      --ds-layout-col-first-flex-basis: calc(
        8 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
      --ds-layout-col-last-flex-basis: calc(
        16 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
    }

    :host([configuration='3-col-offset-right']) {
      --ds-layout-col-first-flex-basis: calc(
        6 / var(--ds-layout-col-grid-column-total) * 100% - 0.75rem
      );
      --ds-layout-col-second-flex-basis: calc(
        6 / var(--ds-layout-col-grid-column-total) * 100% - 0.75rem
      );
      --ds-layout-col-last-flex-basis: calc(
        12 / var(--ds-layout-col-grid-column-total) * 100% - 0.5rem
      );
    }

    :host([configuration='3-col-offset-stack']) {
      --ds-layout-col-first-flex-basis: calc(
        6 / var(--ds-layout-col-grid-column-total) * 100% - 0.75rem
      );
      --ds-layout-col-second-flex-basis: calc(
        6 / var(--ds-layout-col-grid-column-total) * 100% - 0.75rem
      );
      --ds-layout-col-third-flex-basis: calc(
        12 / var(--ds-layout-col-grid-column-total) * 100% - 0.5rem
      );
      --ds-layout-col-forth-flex-basis: calc(
        12 / var(--ds-layout-col-grid-column-total) * 100% - 0.5rem
      );
      --ds-layout-col-fifth-flex-basis: calc(
        6 / var(--ds-layout-col-grid-column-total) * 100% - 0.75rem
      );
      --ds-layout-col-last-flex-basis: calc(
        6 / var(--ds-layout-col-grid-column-total) * 100% - 0.75rem
      );
    }

    :host([configuration='2-col-offset-left']) {
      --ds-layout-col-first-flex-basis: calc(
        16 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
      --ds-layout-col-last-flex-basis: calc(
        8 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
    }

    :host([configuration='2-col-editorial']) {
      --ds-layout-col-first-flex-basis: calc(
        5 / var(--ds-layout-col-grid-column-total) * 100% - 0.5rem
      );
      --ds-layout-col-last-flex-basis: calc(
        12 / var(--ds-layout-col-grid-column-total) * 100% - 0.5rem
      );
    }

    :host([configuration='2-col-sidebar']) {
      --ds-layout-col-first-flex-basis: calc(
        6 / var(--ds-layout-col-grid-column-total) * 100% - 0.5rem
      );
      --ds-layout-col-last-flex-basis: calc(
        18 / var(--ds-layout-col-grid-column-total) * 100% - 0.5rem
      );
    }

    :host([configuration='4-col-even-2']) {
      --ds-layout-column-count: 4;
    }

    :host([configuration='6-col-even']) {
      --ds-layout-column-count: 6;
    }

    :host([density='relaxed']) {
      --ds-layout-column-gap: var(--ds-density-horizontal-relaxed, 6rem);
    }

    :host([configuration='4-col-even-overflow']) {
      --ds-layout-column-count: 4;
    }

    :host([overflow-columns='4'][configuration='1-col-boxed-overflow']) {
      --ds-layout-col-flex-basis: calc(
        20 / var(--ds-layout-col-grid-column-total) * 100% - 1rem / 2
      );
    }

    :host([overflow='scroll']) {
      --ds-layout-column-count: 1;
    }

    :host([configuration='multi-card-overflow']) {
      --ds-layout-column-count: 5;
    }
  }
`;var Y1=Object.defineProperty,Q1=Object.getOwnPropertyDescriptor,Ce=(e,t,o,i)=>{for(var s=i>1?void 0:i?Q1(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&Y1(t,o,s),s};const K1="reimagine-layout";n.Layout=class extends x{constructor(){super(...arguments),this.columns=1,this.ltr=!1}_renderLayoutColumns(){return this.columns=this._setColumns(),g`
      ${Array.from({length:this.columns},(t,o)=>g`
          <div part="layout__col-${o+1}" class="layout__col">
            <slot name="layout__col-${o+1}"></slot>
          </div>
        `)}
    `}_setColumns(){var t,o,i;return this.configuration?((t=this.configuration)==null?void 0:t.indexOf("stack"))!==-1?parseInt(this.configuration.split("-")[0],10)*2:((o=this.configuration)==null?void 0:o.indexOf("overflow"))===-1?parseInt(this.configuration.split("-")[0],10):((i=this.configuration)==null?void 0:i.indexOf("overflow"))!==-1&&this.overflowColumns||1:1}_setOverflow(){var t,o;((t=this.configuration)==null?void 0:t.indexOf("overflow"))!==-1&&!this.overflow&&(this.overflow="initial"),((o=this.configuration)==null?void 0:o.indexOf("overflow"))===-1&&this.removeAttribute("overflow")}_setTabIndex(){(getComputedStyle(this).overflow==="auto"||getComputedStyle(this).overflow==="scroll")&&this.setAttribute("tabindex","0")}updated(t){t.has("configuration")&&this._setOverflow()}connectedCallback(){super.connectedCallback(),this._setTabIndex(),this._setOverflow()}render(){return g` ${this._renderLayoutColumns()} `}},n.Layout.styles=[q1,J1],Ce([c({reflect:!1})],n.Layout.prototype,"columns",2),Ce([c({reflect:!0,attribute:"overflow-columns"})],n.Layout.prototype,"overflowColumns",2),Ce([c({reflect:!0})],n.Layout.prototype,"overflow",2),Ce([c({reflect:!0})],n.Layout.prototype,"configuration",2),Ce([c({reflect:!0})],n.Layout.prototype,"density",2),Ce([c({reflect:!0,type:Boolean})],n.Layout.prototype,"ltr",2),n.Layout=Ce([E(K1)],n.Layout);var td=Object.defineProperty,ed=Object.getOwnPropertyDescriptor,Se=(e,t,o,i)=>{for(var s=i>1?void 0:i?ed(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&td(t,o,s),s};const od="reimagine-hero-category";n.HeroCategory=class extends x{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_setUiShellContextAttr(){this._uiShellObject&&(this._uiShellObject.background="special-color")}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0}_renderOptionalSlot(t="hero-category__first",o=this._firstSlotEmpty){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}firstUpdated(){if(this._uiShellObject){this._setUiShellContextAttr();const t=new CustomEvent(Go,{bubbles:!0,composed:!0,detail:this._uiShellObject});this.dispatchEvent(t)}}render(){return g`
      ${this._renderOptionalSlot("hero-category__first",this._firstSlotEmpty)}
      <div part="hero-category__base" class="hero-category__base">
        <reimagine-container class="hero-category__container">
          <reimagine-layout
            configuration=${mn.col2even}
            density="relaxed"
            class="hero-category__layout"
          >
            <div
              slot="layout__col-1"
              part="hero-category__layout-col-1"
              class="hero-category__layout-col-1"
            >
              <slot name="hero-category__layout-col-1"></slot>
            </div>
            <div
              slot="layout__col-2"
              part="hero-category__layout-col-2"
              class="hero-category__layout-col-2"
            >
              <slot name="hero-category__layout-col-2"></slot>
            </div>
          </reimagine-layout>
        </reimagine-container>
      </div>
      ${this._renderOptionalSlot("hero-category__last",this._lastSlotEmpty)}
    `}},n.HeroCategory.styles=[z1],Se([c({reflect:!0})],n.HeroCategory.prototype,"theme",2),Se([_({slot:"hero-category__first"})],n.HeroCategory.prototype,"_firstSlot",2),Se([_({slot:"hero-category__last"})],n.HeroCategory.prototype,"_lastSlot",2),Se([m()],n.HeroCategory.prototype,"_firstSlotEmpty",2),Se([m()],n.HeroCategory.prototype,"_lastSlotEmpty",2),Se([gn({context:Qi,subscribe:!0})],n.HeroCategory.prototype,"_uiShellObject",2),n.HeroCategory=Se([E(od)],n.HeroCategory);class id{constructor(){var o,i;this.lang=Xo("lang",(o=document==null?void 0:document.documentElement)==null?void 0:o.getAttribute("lang")),this.dir=Xo("dir",(i=document==null?void 0:document.documentElement)==null?void 0:i.getAttribute("dir")),new MutationObserver(()=>{document.dispatchEvent(new CustomEvent("localeChanged",{detail:{lang:this.lang=Xo("lang",document.documentElement.lang),dir:this.dir=Xo("dir",document.documentElement.dir)}}))}).observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}}function Xo(e,t){return e==="lang"?t&&t.includes("-")&&t.length>=5?t.toLowerCase():"en-us":e==="dir"?t&&/^(ltr|rtl)$/i.test(t)?t.toLowerCase():"ltr":(console.warn("Invalid validation type!"),"")}const ts=function(){let e;return function(){return e||(e=new id),e}}(),sd=y`
  .hero-product__layout {
    --ds-layout-flex-direction: column-reverse;
    --ds-layout-flex-wrap: no-wrap;
  }

  :host::part(hero-product__layout-col-1) {
    display: flex;
    flex-direction: column;
    gap: var(
      --ds-hero-product-layout-col-1-gap,
      ${r({gap:"var(--ds-spacing-xl, 5rem)"}.gap)}
    );
  }

  :host::part(hero-product__layout-col-2) {
    display: flex;
    align-items: center;
    height: 100%;
  }

  ::slotted([slot='hero-product__layout-col-2']) {
    --ds-media-display: none;
    --ds-media-width: 100%;
    --ds-media-height: auto;
  }
`,rd=y`
  @media (min-width: ${r(lt.md)}) {
    .hero-product__layout[ltr] {
      --ds-layout-flex-direction: row-reverse;
    }

    .hero-product__layout {
      --ds-layout-flex-direction: row;
      --ds-layout-flex-wrap: wrap;
    }

    ::slotted([slot='hero-product__layout-col-2']) {
      --ds-media-display: block;
    }
  }
`;var nd=Object.defineProperty,ad=Object.getOwnPropertyDescriptor,Ot=(e,t,o,i)=>{for(var s=i>1?void 0:i?ad(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&nd(t,o,s),s};const ld="reimagine-hero-product";n.HeroProduct=class extends x{constructor(){super(...arguments),this.i18nManager=ts(),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_setAttrDefaults(){this._layoutColumn1&&this._layoutColumn1.forEach(t=>{t instanceof HTMLElement&&t.nodeName.toLowerCase()==="reimagine-heading-block"&&t.setAttribute("size","m"),t instanceof HTMLElement&&t.nodeName.toLowerCase()==="reimagine-card-in-hero"&&t.setAttribute("card-base","glass")}),this._layoutColumn2&&this._layoutColumn2.forEach(t=>{t instanceof HTMLElement&&t.nodeName.toLowerCase()==="reimagine-media"&&(t.setAttribute("type","highlight--glass"),t.setAttribute("aspect-ratio","16-9"),this._mediaElement=t)})}_setUiShellContextAttr(){this._uiShellObject&&(this._uiShellObject.background="base-fade",this._uiShellObject.mediaAppearance="stack-mobile",this._uiShellObject.foregroundMedia=this._mediaElement)}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0}_renderOptionalSlot(t,o){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}firstUpdated(){if(this._setAttrDefaults(),this._uiShellObject){this._setUiShellContextAttr();const t=new CustomEvent(Go,{bubbles:!0,composed:!0,detail:this._uiShellObject});this.dispatchEvent(t)}}renderDefaultLayout(){var o;const t=((o=this.i18nManager)==null?void 0:o.dir)==="rtl";return g`
      <div part="hero-product__base" class="hero-product__base">
        <reimagine-container part="hero-product__container" class="hero-product__container">
          <reimagine-layout
            configuration=${mn.col2even}
            density="relaxed"
            part="hero-product__layout"
            class="hero-product__layout"
            ?ltr=${t}
          >
            <div
              slot="layout__col-1"
              part="hero-product__layout-col-1"
              class="hero-product__layout-col-1"
            >
              <slot name="hero-product__layout-col-1"></slot>
            </div>
            <div
              slot="layout__col-2"
              part="hero-product__layout-col-2"
              class="hero-product__layout-col-2"
            >
              <slot name="hero-product__layout-col-2"></slot>
            </div>
          </reimagine-layout>
        </reimagine-container>
      </div>
    `}render(){return g`
      ${this._renderOptionalSlot("hero-product__first",this._firstSlotEmpty)}
      ${this.renderDefaultLayout()}
      ${this._renderOptionalSlot("hero-product__last",this._lastSlotEmpty)}
    `}},n.HeroProduct.styles=[sd,rd],Ot([_({slot:"hero-product__first"})],n.HeroProduct.prototype,"_firstSlot",2),Ot([_({slot:"hero-product__last"})],n.HeroProduct.prototype,"_lastSlot",2),Ot([_({slot:"hero-product__layout-col-1"})],n.HeroProduct.prototype,"_layoutColumn1",2),Ot([_({slot:"hero-product__layout-col-2"})],n.HeroProduct.prototype,"_layoutColumn2",2),Ot([m()],n.HeroProduct.prototype,"_firstSlotEmpty",2),Ot([m()],n.HeroProduct.prototype,"_lastSlotEmpty",2),Ot([c({reflect:!0})],n.HeroProduct.prototype,"theme",2),Ot([c({reflect:!1,attribute:!1})],n.HeroProduct.prototype,"_mediaElement",2),Ot([gn({context:Qi,subscribe:!0})],n.HeroProduct.prototype,"_uiShellObject",2),n.HeroProduct=Ot([E(ld)],n.HeroProduct);const Ne={backgroundColor:"var(--ds-theme-foreground-base-highlight)",width:"0.25rem",height:"1.5rem",display:"inline-block",borderRadius:"initial",border:"none"},dd=y`
  :host {
    display: var(--ds-indicator-display, ${r(Ne.display)});
    background-color: var(
      --ds-indicator-background-color,
      var(--ds-theme-foreground-base-highlight, ${r(Ne.backgroundColor)})
    );
    height: var(--ds-indicator-height, ${r(Ne.height)});
    width: var(--ds-indicator-width, ${r(Ne.width)});
    border: var(--ds-indicator-border, ${r(Ne.border)});
    border-radius: var(--ds-indicator-border-radius, ${r(Ne.borderRadius)});
  }

  :host([clickable]) {
    cursor: pointer;

    --ds-indicator-background-color: var(--ds-theme-background-accent-subtle-normal);
  }

  :host([clickable]:hover) {
    --ds-indicator-background-color: var(--ds-theme-background-accent-subtle-hover);
  }

  :host([clickable]:focus) {
    ${Ir}
  }

  :host([clickable]:active) {
    --ds-indicator-background-color: var(--ds-theme-background-accent-subtle-pressed);
  }

  :host([clickable][active]) {
    --ds-indicator-background-color: var(--ds-theme-background-accent-subtle-active);
  }

  :host([configuration='sharp']) {
    --ds-indicator-border-radius: 0;
  }

  :host([configuration='rounded']) {
    --ds-indicator-border-radius: 12.5rem;
  }

  :host([indicator-style='subtle']) {
    --ds-indicator-width: 0.125rem;
  }

  :host([indicator-style='strong']) {
    --ds-indicator-width: 0.5rem;
  }

  :host([orientation='horizontal']) {
    --ds-indicator-height: 0.25rem;
    --ds-indicator-width: 1.5rem;
  }

  :host([orientation='horizontal'][indicator-style='subtle']) {
    --ds-indicator-height: 0.125rem;
  }

  :host([orientation='horizontal'][indicator-style='strong']) {
    --ds-indicator-height: 0.5rem;
  }
`;var cd=Object.defineProperty,hd=Object.getOwnPropertyDescriptor,At=(e,t,o,i)=>{for(var s=i>1?void 0:i?hd(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&cd(t,o,s),s};const ud="reimagine-indicator";n.Indicator=class extends x{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this.clickable=!1,this.active=!1}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0}_renderOptionalSlot(t,o){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return g`
      ${this._renderOptionalSlot("indicator__first",this._firstSlotEmpty)}
      <slot></slot>
      ${this._renderOptionalSlot("indicator__last",this._lastSlotEmpty)}
    `}},n.Indicator.styles=[dd],At([_({slot:"indicator__first"})],n.Indicator.prototype,"_firstSlot",2),At([_({slot:"indicator__last"})],n.Indicator.prototype,"_lastSlot",2),At([m()],n.Indicator.prototype,"_firstSlotEmpty",2),At([m()],n.Indicator.prototype,"_lastSlotEmpty",2),At([c({type:Boolean})],n.Indicator.prototype,"clickable",2),At([c({type:Boolean})],n.Indicator.prototype,"active",2),At([c({type:String,reflect:!0})],n.Indicator.prototype,"configuration",2),At([c({type:String,reflect:!0})],n.Indicator.prototype,"orientation",2),At([c({type:String,reflect:!0,attribute:"indicator-style"})],n.Indicator.prototype,"indicatorStyle",2),n.Indicator=At([E(ud)],n.Indicator);const qo={display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--ds-spacing-xs)"},Jo={controlDisplay:"flex",controlFlexDirection:"column",controlGap:"var(--ds-spacing-3xs)",controlFlexGrow:"1"},es={labelDisplay:"flex",labelFlexDirection:"column",labelColor:"var(--ds-theme-foreground-base-highlight)"},ae={elementBorder:"none",elementHeight:"24px",elementOpacity:"0.8",elementColor:"var(--ds-theme-foreground-base-subtle, #17253d)",elementPaddingInlineStart:"0rem",elementPaddingInlineEnd:"0rem",elementPaddingBlockStart:"0rem",elementPaddingBlockEnd:"0rem"},pd=y`
  :host {
    display: var(--ds-input-display, ${r(qo.display)});
    align-items: var(--ds-input-align-items, ${r(qo.alignItems)});
    gap: var(--ds-input-gap, ${r(qo.gap)});
    justify-content: var(--ds-input-justify-content, ${r(qo.justifyContent)});
  }

  :host::part(input__control) {
    display: var(--ds-input-control-display, ${r(Jo.controlDisplay)});
    flex-direction: var(
      --ds-input-control-flex-direction,
      ${r(Jo.controlFlexDirection)}
    );
    gap: var(--ds-input-control-gap, ${r(Jo.controlGap)});
    flex-grow: var(
      --ds-input-control-flex-grow,
      ${r(Jo.controlFlexGrow)}
    );
  }

  ::slotted([slot='input__control-label']) {
    display: var(
      --ds-input-control-label-display,
      ${r(es.labelDisplay)}
    );
    flex-direction: var(
      --ds-input-control-label-flex-direction,
      ${r(es.labelFlexDirection)}
    );
    color: var(--ds-input-control-label-color, ${r(es.labelColor)});
    font-size: var(--ds-input-label-font-size, ${r(Be.fontSize)});
    font-weight: var(
      --ds-input-label-font-weight,
      ${r(Be.fontWeight)}
    );
    line-height: var(
      --ds-input-label-line-height,
      ${r(Be.lineHeight)}
    );
  }

  ::slotted([slot='input__control-input']) {
    display: flex;
    width: 100%;
    border: var(
      --ds-input-control-input-border,
      ${r(ae.elementBorder)}
    );
    background: var(--ds-input-control-input-background, 'none');
    color: var(
      --ds-input-control-input-color,
      ${r(ae.elementColor)}
    );
    font-size: var(
      --ds-input-control-input-font-size,
      ${r(Ei.fontSize)}
    );
    font-weight: var(
      --ds-input-control-input-font-weight,
      ${r(Ei.fontWeight)}
    );
    line-height: var(
      --ds-input-control-input-line-height,
      ${r(Ei.lineHeight)}
    );
    height: var(
      --ds-input-control-input-height,
      ${r(ae.elementHeight)}
    );
    padding-inline-start: var(
      --ds-input-control-input-inline-start,
      ${r(ae.elementPaddingInlineStart)}
    );
    padding-inline-end: var(
      --ds-input-control-input-inline-end,
      ${r(ae.elementPaddingInlineEnd)}
    );
    padding-block-start: var(
      --ds-input-control-input-block-start,
      ${r(ae.elementPaddingBlockStart)}
    );
    padding-block-end: var(
      --ds-input-control-input-block-end,
      ${r(ae.elementPaddingBlockEnd)}
    );
  }

  ::slotted([slot='input__control-input'])::placeholder {
    color: var(--ds-input-control-input-color);
    opacity: var(
      --ds-input-control-input-opacity,
      ${r(ae.elementOpacity)}
    );
  }

  :host(:focus) ::slotted([slot='input__control-input'])::placeholder,
  :host(:active) ::slotted([slot='input__control-input'])::placeholder,
  :host(:hover) ::slotted([slot='input__control-input'])::placeholder {
    --ds-input-control-input-opacity: 1;
  }
`,gd={submit:"submit"},co=e=>{e.forEach(t=>{t.el.addEventListener(t.type,t.handler,t.options)})},Yo=e=>{e.forEach(t=>{t.el.removeEventListener(t.type,t.handler)})};var md=Object.defineProperty,fd=Object.getOwnPropertyDescriptor,K=(e,t,o,i)=>{for(var s=i>1?void 0:i?fd(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&md(t,o,s),s};const bd="reimagine-input";n.Input=class extends x{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._trailingSlotEmpty=!0,this._leadingSlotEmpty=!0,this._inputLabelSlotEmpty=!0,this._inputElementSlotEmpty=!0,this._inputEvents=[],this._handleClick=()=>{if(!this._trailingSlotEmpty){const o=this._inputElementSlot[0].value;if(!this._trailingSlotEmpty){const i=new CustomEvent(gd.submit,{detail:{value:o}});this.dispatchEvent(i)}}},this._handleKeyDown=t=>{t.key==="Enter"&&this._handleClick()}}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0,this._trailingSlotEmpty=this._trailingSlot.length===0,this._leadingSlotEmpty=this._leadingSlot.length===0,this._inputLabelSlotEmpty=this._inputLabelSlot.length===0,this._inputElementSlotEmpty=this._inputElementSlot.length===0}updated(){this._leadingSlotEmpty||this._leadingSlot[0].setAttribute("size","xs")}_renderOptionalSlot(t,o){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this._inputEvents.push({el:this,type:"click",handler:this._handleClick},{el:this,type:"keydown",handler:this._handleKeyDown}),co(this._inputEvents)}disconnectedCallback(){super.disconnectedCallback(),Yo(this._inputEvents)}_buildMarkup(){return g`
      ${this._renderOptionalSlot("input__first",this._firstSlotEmpty)}
      ${this._renderOptionalSlot("input__leading",this._leadingSlotEmpty)}

      <div class="input__control" part="input__control">
        <slot></slot>
        ${this._renderOptionalSlot("input__control-label",this._inputLabelSlotEmpty)}
        ${this._renderOptionalSlot("input__control-input",this._inputElementSlotEmpty)}
      </div>

      <div part="input__trailing" class="input__trailing" @slotchange="${this._handleSlotChange}">
        <slot name="input__trailing">
          <reimagine-button
            size="${Ho.small}"
            appearance="${Po.buttonPrimary}"
            shape="${Bo.rounded}"
            icon-only
            button-label="${T(this.inputButtonLabel)}"
          >
            <reimagine-icon
              slot="button__icon"
              size="${to.medium}"
              icon="search"
              role="presentation"
              aria-hidden="true"
            >
            </reimagine-icon>
          </reimagine-button>
        </slot>
      </div>

      ${this._renderOptionalSlot("input__last",this._lastSlotEmpty)}
    `}render(){return this._buildMarkup()}},n.Input.styles=[pd],K([c({reflect:!0})],n.Input.prototype,"theme",2),K([c({reflect:!0,attribute:"input-button-label"})],n.Input.prototype,"inputButtonLabel",2),K([_({slot:"input__first"})],n.Input.prototype,"_firstSlot",2),K([_({slot:"input__last"})],n.Input.prototype,"_lastSlot",2),K([_({slot:"input__trailing"})],n.Input.prototype,"_trailingSlot",2),K([_({slot:"input__leading"})],n.Input.prototype,"_leadingSlot",2),K([_({slot:"input__control-label"})],n.Input.prototype,"_inputLabelSlot",2),K([_({slot:"input__control-input"})],n.Input.prototype,"_inputElementSlot",2),K([m()],n.Input.prototype,"_firstSlotEmpty",2),K([m()],n.Input.prototype,"_lastSlotEmpty",2),K([m()],n.Input.prototype,"_trailingSlotEmpty",2),K([m()],n.Input.prototype,"_leadingSlotEmpty",2),K([m()],n.Input.prototype,"_inputLabelSlotEmpty",2),K([m()],n.Input.prototype,"_inputElementSlotEmpty",2),K([m()],n.Input.prototype,"_inputEvents",2),n.Input=K([E(bd)],n.Input);const xt={color:"var(--ds-theme-foreground-accent-subtle-normal, #2a446f)",underlineOffset:"0.3rem",gap:"var(--ds-spacing-xs)",display:"inline-flex",alignItems:"center",opacity:"1",cursor:"pointer",pointerEvents:"auto",outline:"0.1875rem dotted currentColor"},_d=y`
  :host {
    align-items: var(--ds-link-align-items, ${r(xt.alignItems)});
    gap: var(--ds-link-gap, ${r(xt.gap)});
    font-size: var(--ds-link-font-size, ${r(Be.fontSize)});
    font-weight: var(--ds-link-font-weight, ${r(Be.fontWeight)});
    line-height: var(--ds-link-line-height, ${r(Be.lineHeight)});
    opacity: var(--ds-link-opacity, ${r(xt.opacity)});
    cursor: var(--ds-link-cursor, ${r(xt.cursor)});
    pointer-events: var(--ds-link-pointer-events, ${r(xt.pointerEvents)});
    text-underline-offset: var(
      --ds-link-underline-offset,
      ${r(xt.underlineOffset)}
    );
  }

  :host a,
  :host {
    display: var(--ds-link-display, ${r(xt.display)});
  }

  :host a {
    align-items: var(--ds-link-align-items, ${r(xt.alignItems)});
    gap: var(--ds-link-gap, ${r(xt.gap)});
    color: var(--ds-link-color, ${r(xt.color)});
    outline: none;
  }

  :host(:focus) {
    outline: var(--ds-link-outline, ${r(xt.outline)});
  }

  :host(:hover) a {
    --ds-link-color: var(--ds-color-dark-blue-600);
  }

  :host(:active) a {
    --ds-link-color: var(--ds-theme-foreground-accent-subtle-pressed);
  }

  :host([with-button]) a {
    ${Or}
  }

  :host(:hover) ::slotted(reimagine-button) {
    --ds-button-background-color: var(--ds-theme-background-accent-strong-hover, #006dc1);
  }

  :host(:active) ::slotted(reimagine-button) {
    --ds-button-background-color: var(--ds-theme-background-accent-strong-pressed, #004275);
    --ds-button-color: var(--ds-theme-foreground-accent-strong-pressed, #004275);
  }

  :host([disabled]) {
    --ds-link-opacity: 0.2;
    --ds-link-cursor: not-allowed;
    --ds-link-pointer-events: none;
  }

  :host([disabled]) ::slotted(reimagine-button) {
    --ds-button-opacity: 1;
  }
`;var os=function(e,t){return os=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,i){o.__proto__=i}||function(o,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(o[s]=i[s])},os(e,t)};function Qo(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");os(e,t);function o(){this.constructor=e}e.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)}var B=function(){return B=Object.assign||function(t){for(var o,i=1,s=arguments.length;i<s;i++){o=arguments[i];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},B.apply(this,arguments)};function vd(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(o[i[s]]=e[i[s]]);return o}function is(e,t,o){if(o||arguments.length===2)for(var i=0,s=t.length,a;i<s;i++)(a||!(i in t))&&(a||(a=Array.prototype.slice.call(t,0,i)),a[i]=t[i]);return e.concat(a||Array.prototype.slice.call(t))}typeof SuppressedError=="function"&&SuppressedError;var k;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(k||(k={}));var R;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(R||(R={}));var Ve;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Ve||(Ve={}));function fn(e){return e.type===R.literal}function yd(e){return e.type===R.argument}function bn(e){return e.type===R.number}function _n(e){return e.type===R.date}function vn(e){return e.type===R.time}function yn(e){return e.type===R.select}function Cn(e){return e.type===R.plural}function Cd(e){return e.type===R.pound}function Sn(e){return e.type===R.tag}function $n(e){return!!(e&&typeof e=="object"&&e.type===Ve.number)}function ss(e){return!!(e&&typeof e=="object"&&e.type===Ve.dateTime)}var xn=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Sd=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function $d(e){var t={};return e.replace(Sd,function(o){var i=o.length;switch(o[0]){case"G":t.era=i===4?"long":i===5?"narrow":"short";break;case"y":t.year=i===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][i-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][i-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=i===4?"long":i===5?"narrow":"short";break;case"e":if(i<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][i-4];break;case"c":if(i<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][i-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][i-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][i-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][i-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][i-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][i-1];break;case"s":t.second=["numeric","2-digit"][i-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=i<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),t}var xd=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function wd(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var t=e.split(xd).filter(function(b){return b.length>0}),o=[],i=0,s=t;i<s.length;i++){var a=s[i],l=a.split("/");if(l.length===0)throw new Error("Invalid number skeleton");for(var d=l[0],h=l.slice(1),u=0,p=h;u<p.length;u++){var f=p[u];if(f.length===0)throw new Error("Invalid number skeleton")}o.push({stem:d,options:h})}return o}function Ed(e){return e.replace(/^(.*?)-/,"")}var wn=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,En=/^(@+)?(\+|#+)?[rs]?$/g,kd=/(\*)(0+)|(#+)(0+)|(0+)/g,kn=/^(0+)$/;function Ln(e){var t={};return e[e.length-1]==="r"?t.roundingPriority="morePrecision":e[e.length-1]==="s"&&(t.roundingPriority="lessPrecision"),e.replace(En,function(o,i,s){return typeof s!="string"?(t.minimumSignificantDigits=i.length,t.maximumSignificantDigits=i.length):s==="+"?t.minimumSignificantDigits=i.length:i[0]==="#"?t.maximumSignificantDigits=i.length:(t.minimumSignificantDigits=i.length,t.maximumSignificantDigits=i.length+(typeof s=="string"?s.length:0)),""}),t}function Pn(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Ld(e){var t;if(e[0]==="E"&&e[1]==="E"?(t={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(t={notation:"scientific"},e=e.slice(1)),t){var o=e.slice(0,2);if(o==="+!"?(t.signDisplay="always",e=e.slice(2)):o==="+?"&&(t.signDisplay="exceptZero",e=e.slice(2)),!kn.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function Hn(e){var t={},o=Pn(e);return o||t}function Pd(e){for(var t={},o=0,i=e;o<i.length;o++){var s=i[o];switch(s.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=s.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=Ed(s.options[0]);continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=B(B(B({},t),{notation:"scientific"}),s.options.reduce(function(h,u){return B(B({},h),Hn(u))},{}));continue;case"engineering":t=B(B(B({},t),{notation:"engineering"}),s.options.reduce(function(h,u){return B(B({},h),Hn(u))},{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":t.roundingMode="floor";continue;case"rounding-mode-ceiling":t.roundingMode="ceil";continue;case"rounding-mode-down":t.roundingMode="trunc";continue;case"rounding-mode-up":t.roundingMode="expand";continue;case"rounding-mode-half-even":t.roundingMode="halfEven";continue;case"rounding-mode-half-down":t.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":t.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(kd,function(h,u,p,f,b,v){if(u)t.minimumIntegerDigits=p.length;else{if(f&&b)throw new Error("We currently do not support maximum integer digits");if(v)throw new Error("We currently do not support exact integer digits")}return""});continue}if(kn.test(s.stem)){t.minimumIntegerDigits=s.stem.length;continue}if(wn.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(wn,function(h,u,p,f,b,v){return p==="*"?t.minimumFractionDigits=u.length:f&&f[0]==="#"?t.maximumFractionDigits=f.length:b&&v?(t.minimumFractionDigits=b.length,t.maximumFractionDigits=b.length+v.length):(t.minimumFractionDigits=u.length,t.maximumFractionDigits=u.length),""});var a=s.options[0];a==="w"?t=B(B({},t),{trailingZeroDisplay:"stripIfInteger"}):a&&(t=B(B({},t),Ln(a)));continue}if(En.test(s.stem)){t=B(B({},t),Ln(s.stem));continue}var l=Pn(s.stem);l&&(t=B(B({},t),l));var d=Ld(s.stem);d&&(t=B(B({},t),d))}return t}var Ko={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Hd(e,t){for(var o="",i=0;i<e.length;i++){var s=e.charAt(i);if(s==="j"){for(var a=0;i+1<e.length&&e.charAt(i+1)===s;)a++,i++;var l=1+(a&1),d=a<2?1:3+(a>>1),h="a",u=Bd(t);for((u=="H"||u=="k")&&(d=0);d-- >0;)o+=h;for(;l-- >0;)o=u+o}else s==="J"?o+="H":o+=s}return o}function Bd(e){var t=e.hourCycle;if(t===void 0&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var o=e.language,i;o!=="root"&&(i=e.maximize().region);var s=Ko[i||""]||Ko[o||""]||Ko["".concat(o,"-001")]||Ko["001"];return s[0]}var rs,Td=new RegExp("^".concat(xn.source,"*")),Od=new RegExp("".concat(xn.source,"*$"));function L(e,t){return{start:e,end:t}}var Ad=!!String.prototype.startsWith&&"_a".startsWith("a",1),Md=!!String.fromCodePoint,Id=!!Object.fromEntries,Dd=!!String.prototype.codePointAt,Rd=!!String.prototype.trimStart,zd=!!String.prototype.trimEnd,Nd=!!Number.isSafeInteger,Vd=Nd?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},ns=!0;try{var Zd=An("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ns=((rs=Zd.exec("a"))===null||rs===void 0?void 0:rs[0])==="a"}catch{ns=!1}var Bn=Ad?function(t,o,i){return t.startsWith(o,i)}:function(t,o,i){return t.slice(i,i+o.length)===o},as=Md?String.fromCodePoint:function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];for(var i="",s=t.length,a=0,l;s>a;){if(l=t[a++],l>1114111)throw RangeError(l+" is not a valid code point");i+=l<65536?String.fromCharCode(l):String.fromCharCode(((l-=65536)>>10)+55296,l%1024+56320)}return i},Tn=Id?Object.fromEntries:function(t){for(var o={},i=0,s=t;i<s.length;i++){var a=s[i],l=a[0],d=a[1];o[l]=d}return o},On=Dd?function(t,o){return t.codePointAt(o)}:function(t,o){var i=t.length;if(!(o<0||o>=i)){var s=t.charCodeAt(o),a;return s<55296||s>56319||o+1===i||(a=t.charCodeAt(o+1))<56320||a>57343?s:(s-55296<<10)+(a-56320)+65536}},Fd=Rd?function(t){return t.trimStart()}:function(t){return t.replace(Td,"")},Ud=zd?function(t){return t.trimEnd()}:function(t){return t.replace(Od,"")};function An(e,t){return new RegExp(e,t)}var ls;if(ns){var Mn=An("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ls=function(t,o){var i;Mn.lastIndex=o;var s=Mn.exec(t);return(i=s[1])!==null&&i!==void 0?i:""}}else ls=function(t,o){for(var i=[];;){var s=On(t,o);if(s===void 0||In(s)||Xd(s))break;i.push(s),o+=s>=65536?2:1}return as.apply(void 0,i)};var jd=function(){function e(t,o){o===void 0&&(o={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!o.ignoreTag,this.locale=o.locale,this.requiresOtherClause=!!o.requiresOtherClause,this.shouldParseSkeletons=!!o.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(t,o,i){for(var s=[];!this.isEOF();){var a=this.char();if(a===123){var l=this.parseArgument(t,i);if(l.err)return l;s.push(l.val)}else{if(a===125&&t>0)break;if(a===35&&(o==="plural"||o==="selectordinal")){var d=this.clonePosition();this.bump(),s.push({type:R.pound,location:L(d,this.clonePosition())})}else if(a===60&&!this.ignoreTag&&this.peek()===47){if(i)break;return this.error(k.UNMATCHED_CLOSING_TAG,L(this.clonePosition(),this.clonePosition()))}else if(a===60&&!this.ignoreTag&&ds(this.peek()||0)){var l=this.parseTag(t,o);if(l.err)return l;s.push(l.val)}else{var l=this.parseLiteral(t,o);if(l.err)return l;s.push(l.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(t,o){var i=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:R.literal,value:"<".concat(s,"/>"),location:L(i,this.clonePosition())},err:null};if(this.bumpIf(">")){var a=this.parseMessage(t+1,o,!0);if(a.err)return a;var l=a.val,d=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!ds(this.char()))return this.error(k.INVALID_TAG,L(d,this.clonePosition()));var h=this.clonePosition(),u=this.parseTagName();return s!==u?this.error(k.UNMATCHED_CLOSING_TAG,L(h,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:R.tag,value:s,children:l,location:L(i,this.clonePosition())},err:null}:this.error(k.INVALID_TAG,L(d,this.clonePosition())))}else return this.error(k.UNCLOSED_TAG,L(i,this.clonePosition()))}else return this.error(k.INVALID_TAG,L(i,this.clonePosition()))},e.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&Gd(this.char());)this.bump();return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(t,o){for(var i=this.clonePosition(),s="";;){var a=this.tryParseQuote(o);if(a){s+=a;continue}var l=this.tryParseUnquoted(t,o);if(l){s+=l;continue}var d=this.tryParseLeftAngleBracket();if(d){s+=d;continue}break}var h=L(i,this.clonePosition());return{val:{type:R.literal,value:s,location:h},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Wd(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(t){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(t==="plural"||t==="selectordinal")break;return null;default:return null}this.bump();var o=[this.char()];for(this.bump();!this.isEOF();){var i=this.char();if(i===39)if(this.peek()===39)o.push(39),this.bump();else{this.bump();break}else o.push(i);this.bump()}return as.apply(void 0,o)},e.prototype.tryParseUnquoted=function(t,o){if(this.isEOF())return null;var i=this.char();return i===60||i===123||i===35&&(o==="plural"||o==="selectordinal")||i===125&&t>0?null:(this.bump(),as(i))},e.prototype.parseArgument=function(t,o){var i=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(k.EXPECT_ARGUMENT_CLOSING_BRACE,L(i,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(k.EMPTY_ARGUMENT,L(i,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(k.MALFORMED_ARGUMENT,L(i,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(k.EXPECT_ARGUMENT_CLOSING_BRACE,L(i,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:R.argument,value:s,location:L(i,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(k.EXPECT_ARGUMENT_CLOSING_BRACE,L(i,this.clonePosition())):this.parseArgumentOptions(t,o,s,i);default:return this.error(k.MALFORMED_ARGUMENT,L(i,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),o=this.offset(),i=ls(this.message,o),s=o+i.length;this.bumpTo(s);var a=this.clonePosition(),l=L(t,a);return{value:i,location:l}},e.prototype.parseArgumentOptions=function(t,o,i,s){var a,l=this.clonePosition(),d=this.parseIdentifierIfPossible().value,h=this.clonePosition();switch(d){case"":return this.error(k.EXPECT_ARGUMENT_TYPE,L(l,h));case"number":case"date":case"time":{this.bumpSpace();var u=null;if(this.bumpIf(",")){this.bumpSpace();var p=this.clonePosition(),f=this.parseSimpleArgStyleIfPossible();if(f.err)return f;var b=Ud(f.val);if(b.length===0)return this.error(k.EXPECT_ARGUMENT_STYLE,L(this.clonePosition(),this.clonePosition()));var v=L(p,this.clonePosition());u={style:b,styleLocation:v}}var C=this.tryParseArgumentClose(s);if(C.err)return C;var S=L(s,this.clonePosition());if(u&&Bn(u==null?void 0:u.style,"::",0)){var $=Fd(u.style.slice(2));if(d==="number"){var f=this.parseNumberSkeletonFromString($,u.styleLocation);return f.err?f:{val:{type:R.number,value:i,location:S,style:f.val},err:null}}else{if($.length===0)return this.error(k.EXPECT_DATE_TIME_SKELETON,S);var O=$;this.locale&&(O=Hd($,this.locale));var b={type:Ve.dateTime,pattern:O,location:u.styleLocation,parsedOptions:this.shouldParseSkeletons?$d(O):{}},P=d==="date"?R.date:R.time;return{val:{type:P,value:i,location:S,style:b},err:null}}}return{val:{type:d==="number"?R.number:d==="date"?R.date:R.time,value:i,location:S,style:(a=u==null?void 0:u.style)!==null&&a!==void 0?a:null},err:null}}case"plural":case"selectordinal":case"select":{var H=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(k.EXPECT_SELECT_ARGUMENT_OPTIONS,L(H,B({},H)));this.bumpSpace();var N=this.parseIdentifierIfPossible(),A=0;if(d!=="select"&&N.value==="offset"){if(!this.bumpIf(":"))return this.error(k.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,L(this.clonePosition(),this.clonePosition()));this.bumpSpace();var f=this.tryParseDecimalInteger(k.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,k.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(f.err)return f;this.bumpSpace(),N=this.parseIdentifierIfPossible(),A=f.val}var it=this.tryParsePluralOrSelectOptions(t,d,o,N);if(it.err)return it;var C=this.tryParseArgumentClose(s);if(C.err)return C;var ht=L(s,this.clonePosition());return d==="select"?{val:{type:R.select,value:i,options:Tn(it.val),location:ht},err:null}:{val:{type:R.plural,value:i,options:Tn(it.val),offset:A,pluralType:d==="plural"?"cardinal":"ordinal",location:ht},err:null}}default:return this.error(k.INVALID_ARGUMENT_TYPE,L(l,h))}},e.prototype.tryParseArgumentClose=function(t){return this.isEOF()||this.char()!==125?this.error(k.EXPECT_ARGUMENT_CLOSING_BRACE,L(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,o=this.clonePosition();!this.isEOF();){var i=this.char();switch(i){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(k.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,L(s,this.clonePosition()));this.bump();break}case 123:{t+=1,this.bump();break}case 125:{if(t>0)t-=1;else return{val:this.message.slice(o.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(o.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(t,o){var i=[];try{i=wd(t)}catch{return this.error(k.INVALID_NUMBER_SKELETON,o)}return{val:{type:Ve.number,tokens:i,location:o,parsedOptions:this.shouldParseSkeletons?Pd(i):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(t,o,i,s){for(var a,l=!1,d=[],h=new Set,u=s.value,p=s.location;;){if(u.length===0){var f=this.clonePosition();if(o!=="select"&&this.bumpIf("=")){var b=this.tryParseDecimalInteger(k.EXPECT_PLURAL_ARGUMENT_SELECTOR,k.INVALID_PLURAL_ARGUMENT_SELECTOR);if(b.err)return b;p=L(f,this.clonePosition()),u=this.message.slice(f.offset,this.offset())}else break}if(h.has(u))return this.error(o==="select"?k.DUPLICATE_SELECT_ARGUMENT_SELECTOR:k.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,p);u==="other"&&(l=!0),this.bumpSpace();var v=this.clonePosition();if(!this.bumpIf("{"))return this.error(o==="select"?k.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:k.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,L(this.clonePosition(),this.clonePosition()));var C=this.parseMessage(t+1,o,i);if(C.err)return C;var S=this.tryParseArgumentClose(v);if(S.err)return S;d.push([u,{value:C.val,location:L(v,this.clonePosition())}]),h.add(u),this.bumpSpace(),a=this.parseIdentifierIfPossible(),u=a.value,p=a.location}return d.length===0?this.error(o==="select"?k.EXPECT_SELECT_ARGUMENT_SELECTOR:k.EXPECT_PLURAL_ARGUMENT_SELECTOR,L(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!l?this.error(k.MISSING_OTHER_CLAUSE,L(this.clonePosition(),this.clonePosition())):{val:d,err:null}},e.prototype.tryParseDecimalInteger=function(t,o){var i=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(i=-1);for(var a=!1,l=0;!this.isEOF();){var d=this.char();if(d>=48&&d<=57)a=!0,l=l*10+(d-48),this.bump();else break}var h=L(s,this.clonePosition());return a?(l*=i,Vd(l)?{val:l,err:null}:this.error(o,h)):this.error(t,h)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var o=On(this.message,t);if(o===void 0)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return o},e.prototype.error=function(t,o){return{val:null,err:{kind:t,message:this.message,location:o}}},e.prototype.bump=function(){if(!this.isEOF()){var t=this.char();t===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},e.prototype.bumpIf=function(t){if(Bn(this.message,t,this.offset())){for(var o=0;o<t.length;o++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(t){var o=this.offset(),i=this.message.indexOf(t,o);return i>=0?(this.bumpTo(i),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var o=this.offset();if(o===t)break;if(o>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&In(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),o=this.offset(),i=this.message.charCodeAt(o+(t>=65536?2:1));return i??null},e}();function ds(e){return e>=97&&e<=122||e>=65&&e<=90}function Wd(e){return ds(e)||e===47}function Gd(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function In(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function Xd(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function cs(e){e.forEach(function(t){if(delete t.location,yn(t)||Cn(t))for(var o in t.options)delete t.options[o].location,cs(t.options[o].value);else bn(t)&&$n(t.style)||(_n(t)||vn(t))&&ss(t.style)?delete t.style.location:Sn(t)&&cs(t.children)})}function qd(e,t){t===void 0&&(t={}),t=B({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var o=new jd(e,t).parse();if(o.err){var i=SyntaxError(k[o.err.kind]);throw i.location=o.err.location,i.originalMessage=o.err.message,i}return t!=null&&t.captureLocation||cs(o.val),o.val}function hs(e,t){var o=t&&t.cache?t.cache:ec,i=t&&t.serializer?t.serializer:tc,s=t&&t.strategy?t.strategy:Yd;return s(e,{cache:o,serializer:i})}function Jd(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Dn(e,t,o,i){var s=Jd(i)?i:o(i),a=t.get(s);return typeof a>"u"&&(a=e.call(this,i),t.set(s,a)),a}function Rn(e,t,o){var i=Array.prototype.slice.call(arguments,3),s=o(i),a=t.get(s);return typeof a>"u"&&(a=e.apply(this,i),t.set(s,a)),a}function us(e,t,o,i,s){return o.bind(t,e,i,s)}function Yd(e,t){var o=e.length===1?Dn:Rn;return us(e,this,o,t.cache.create(),t.serializer)}function Qd(e,t){return us(e,this,Rn,t.cache.create(),t.serializer)}function Kd(e,t){return us(e,this,Dn,t.cache.create(),t.serializer)}var tc=function(){return JSON.stringify(arguments)};function ps(){this.cache=Object.create(null)}ps.prototype.get=function(e){return this.cache[e]},ps.prototype.set=function(e,t){this.cache[e]=t};var ec={create:function(){return new ps}},gs={variadic:Qd,monadic:Kd},Ze;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Ze||(Ze={}));var ti=function(e){Qo(t,e);function t(o,i,s){var a=e.call(this,o)||this;return a.code=i,a.originalMessage=s,a}return t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),zn=function(e){Qo(t,e);function t(o,i,s,a){return e.call(this,'Invalid values for "'.concat(o,'": "').concat(i,'". Options are "').concat(Object.keys(s).join('", "'),'"'),Ze.INVALID_VALUE,a)||this}return t}(ti),oc=function(e){Qo(t,e);function t(o,i,s){return e.call(this,'Value for "'.concat(o,'" must be of type ').concat(i),Ze.INVALID_VALUE,s)||this}return t}(ti),ic=function(e){Qo(t,e);function t(o,i){return e.call(this,'The intl string context variable "'.concat(o,'" was not provided to the string "').concat(i,'"'),Ze.MISSING_VALUE,i)||this}return t}(ti),et;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(et||(et={}));function sc(e){return e.length<2?e:e.reduce(function(t,o){var i=t[t.length-1];return!i||i.type!==et.literal||o.type!==et.literal?t.push(o):i.value+=o.value,t},[])}function rc(e){return typeof e=="function"}function ei(e,t,o,i,s,a,l){if(e.length===1&&fn(e[0]))return[{type:et.literal,value:e[0].value}];for(var d=[],h=0,u=e;h<u.length;h++){var p=u[h];if(fn(p)){d.push({type:et.literal,value:p.value});continue}if(Cd(p)){typeof a=="number"&&d.push({type:et.literal,value:o.getNumberFormat(t).format(a)});continue}var f=p.value;if(!(s&&f in s))throw new ic(f,l);var b=s[f];if(yd(p)){(!b||typeof b=="string"||typeof b=="number")&&(b=typeof b=="string"||typeof b=="number"?String(b):""),d.push({type:typeof b=="string"?et.literal:et.object,value:b});continue}if(_n(p)){var v=typeof p.style=="string"?i.date[p.style]:ss(p.style)?p.style.parsedOptions:void 0;d.push({type:et.literal,value:o.getDateTimeFormat(t,v).format(b)});continue}if(vn(p)){var v=typeof p.style=="string"?i.time[p.style]:ss(p.style)?p.style.parsedOptions:i.time.medium;d.push({type:et.literal,value:o.getDateTimeFormat(t,v).format(b)});continue}if(bn(p)){var v=typeof p.style=="string"?i.number[p.style]:$n(p.style)?p.style.parsedOptions:void 0;v&&v.scale&&(b=b*(v.scale||1)),d.push({type:et.literal,value:o.getNumberFormat(t,v).format(b)});continue}if(Sn(p)){var C=p.children,S=p.value,$=s[S];if(!rc($))throw new oc(S,"function",l);var O=ei(C,t,o,i,s,a),P=$(O.map(function(A){return A.value}));Array.isArray(P)||(P=[P]),d.push.apply(d,P.map(function(A){return{type:typeof A=="string"?et.literal:et.object,value:A}}))}if(yn(p)){var H=p.options[b]||p.options.other;if(!H)throw new zn(p.value,b,Object.keys(p.options),l);d.push.apply(d,ei(H.value,t,o,i,s));continue}if(Cn(p)){var H=p.options["=".concat(b)];if(!H){if(!Intl.PluralRules)throw new ti(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Ze.MISSING_INTL_API,l);var N=o.getPluralRules(t,{type:p.pluralType}).select(b-(p.offset||0));H=p.options[N]||p.options.other}if(!H)throw new zn(p.value,b,Object.keys(p.options),l);d.push.apply(d,ei(H.value,t,o,i,s,b-(p.offset||0)));continue}}return sc(d)}function nc(e,t){return t?B(B(B({},e||{}),t||{}),Object.keys(e).reduce(function(o,i){return o[i]=B(B({},e[i]),t[i]||{}),o},{})):e}function ac(e,t){return t?Object.keys(e).reduce(function(o,i){return o[i]=nc(e[i],t[i]),o},B({},e)):e}function ms(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,o){e[t]=o}}}}}function lc(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:hs(function(){for(var t,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];return new((t=Intl.NumberFormat).bind.apply(t,is([void 0],o,!1)))},{cache:ms(e.number),strategy:gs.variadic}),getDateTimeFormat:hs(function(){for(var t,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];return new((t=Intl.DateTimeFormat).bind.apply(t,is([void 0],o,!1)))},{cache:ms(e.dateTime),strategy:gs.variadic}),getPluralRules:hs(function(){for(var t,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];return new((t=Intl.PluralRules).bind.apply(t,is([void 0],o,!1)))},{cache:ms(e.pluralRules),strategy:gs.variadic})}}var dc=function(){function e(t,o,i,s){var a=this;if(o===void 0&&(o=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(h){var u=a.formatToParts(h);if(u.length===1)return u[0].value;var p=u.reduce(function(f,b){return!f.length||b.type!==et.literal||typeof f[f.length-1]!="string"?f.push(b.value):f[f.length-1]+=b.value,f},[]);return p.length<=1?p[0]||"":p},this.formatToParts=function(h){return ei(a.ast,a.locales,a.formatters,a.formats,h,void 0,a.message)},this.resolvedOptions=function(){var h;return{locale:((h=a.resolvedLocale)===null||h===void 0?void 0:h.toString())||Intl.NumberFormat.supportedLocalesOf(a.locales)[0]}},this.getAst=function(){return a.ast},this.locales=o,this.resolvedLocale=e.resolveLocale(o),typeof t=="string"){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var l=s||{};l.formatters;var d=vd(l,["formatters"]);this.ast=e.__parse(t,B(B({},d),{locale:this.resolvedLocale}))}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=ac(e.formats,i),this.formatters=s&&s.formatters||lc(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(t){if(!(typeof Intl.Locale>"u")){var o=Intl.NumberFormat.supportedLocalesOf(t);return o.length>0?new Intl.Locale(o[0]):new Intl.Locale(typeof t=="string"?t:t[0])}},e.__parse=qd,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),cc=Object.defineProperty,hc=(e,t,o,i)=>{for(var s=void 0,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=l(t,o,s)||s);return s&&cc(t,o,s),s};const ho=(e=>{const o=class o extends e{constructor(){super(...arguments),this.i18nManager=ts(),this.locChangeHandler=s=>{this.lang=s.detail.lang,this.dir=s.detail.dir,this.requestUpdate()}}connectedCallback(){var s,a;super.connectedCallback(),this.lang=((s=this.i18nManager)==null?void 0:s.lang)||"en-us",this.dir=((a=this.i18nManager)==null?void 0:a.dir)||"ltr",document.addEventListener("localeChanged",this.locChangeHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("localeChanged",this.locChangeHandler)}msg(s,a){var u;if(!s||!this.lang)return"";let l=(u=this.translations)==null?void 0:u[s];const{dict:d}=this.constructor;return l||(l=(d==null?void 0:d[s])||""),new dc(l,this.lang).format(a)}};o.dict={};let t=o;return hc([c({reflect:!1,type:Object})],t.prototype,"translations"),t})(x);var uc=Object.defineProperty,pc=Object.getOwnPropertyDescriptor,oi=(e,t,o,i)=>{for(var s=i>1?void 0:i?pc(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&uc(t,o,s),s};const gc="reimagine-link";n.Link=class extends To(ho){constructor(){super(...arguments),this.withButton=!1,this.iconPosition="left"}_buildLinkMarkup(){const t=this.withButton?g` <reimagine-button
          size="small"
          appearance="button--primary"
          element="div"
          shape="rounded"
          icon-only
        >
          <reimagine-icon
            icon="chevron-${this.dir==="rtl"?"left":"right"}"
            slot="button__icon"
          ></reimagine-icon>
          <span slot="button__text">Button</span>
        </reimagine-button>`:"",o=g`<slot name="link__text"></slot>`;return g`
      ${this.iconPosition==="right"?g`${o} ${t}`:g`${t} ${o}`}
    `}render(){return this.renderLink(g`${this._buildLinkMarkup()}`)}},n.Link.styles=[_d],oi([c({type:Boolean,reflect:!0,attribute:"with-button"})],n.Link.prototype,"withButton",2),oi([c({type:String,reflect:!0,attribute:"icon-position"})],n.Link.prototype,"iconPosition",2),oi([c({type:String,reflect:!0})],n.Link.prototype,"theme",2),n.Link=oi([E(gc)],n.Link);const mc={display:"block"},fc={eyebrowColor:"var(--ds-theme-foreground-base-highlight, #005597)"},bc={titleColor:"var(--ds-theme-foreground-base-strong, #0e1726)"},_c={subtextColor:"var(--ds-theme-foreground-base-subtle, #17253d)"},Nn={leadingColor:"var(--ds-theme-foreground-base-strong, #0e1726)",leadingMarginBottom:"0"},ii={contentDisplay:"flex",contentFlexGrow:"1",contentFlexDirection:"column",contentRowGap:"var(--ds-spacing-2xs, 0.25rem)"},$e={innerPaddingBlockStart:"1rem",innerPaddingBlockEnd:"1rem",innerPaddingInlineStart:"0",innerPaddingInlineEnd:"0",innerColumnGap:"var(--ds-spacing-xs, 0.50rem)",innerDisplay:"flex",innerAlignItems:"center"},vc=y`
  :host {
    display: var(--ds-list-item-display, ${r(mc.display)});
  }

  :host .list-item__inner {
    align-items: var(
      --ds-list-item-inner-align-items,
      ${r($e.innerAlignItems)}
    );
    column-gap: var(
      --ds-list-item-inner-column-gap,
      ${r($e.innerColumnGap)}
    );
    display: var(--ds-list-item-inner-display, ${r($e.innerDisplay)});
    padding-block-start: var(
      --ds-list-item-inner-padding-block-start,
      ${r($e.innerPaddingBlockStart)}
    );
    padding-block-end: var(
      --ds-list-item-inner-padding-block-end,
      ${r($e.innerPaddingBlockEnd)}
    );
    padding-inline-start: var(
      --ds-list-item-inner-padding-inline-start,
      ${r($e.innerPaddingInlineStart)}
    );
    padding-inline-end: var(
      --ds-list-item-inner-padding-inline-end,
      ${r($e.innerPaddingInlineEnd)}
    );
  }

  :host .list-item__content {
    display: var(
      --ds-list-item-content-display,
      ${r(ii.contentDisplay)}
    );
    flex-grow: var(
      --ds-list-item-content-flex-grow,
      ${r(ii.contentFlexGrow)}
    );
    flex-direction: var(
      --ds-list-item-content-flex-direction,
      ${r(ii.contentFlexDirection)}
    );
    row-gap: var(
      --ds-list-item-content-row-gap,
      ${r(ii.contentRowGap)}
    );
  }

  ::slotted([slot='list-item__eyebrow']) {
    font-size: var(
      --ds-list-item-eyebrow-font-size,
      ${r(st.fontSize)}
    ) !important;
    font-weight: var(
      --ds-list-item-eyebrow-font-weight,
      ${r(st.fontWeight)}
    ) !important;
    line-height: var(
      --ds-list-item-eyebrow-line-height,
      ${r(st.lineHeight)}
    ) !important;
    color: var(
      --ds-list-item-eyebrow-color,
      ${r(fc.eyebrowColor)}
    ) !important;
    margin-bottom: var(
      --ds-list-item-eyebrow-margin-bottom,
      ${r(st.marginBottom)}
    ) !important;
  }

  ::slotted([slot='list-item__leading']) {
    color: var(
      --ds-list-item-leading-color,
      ${r(Nn.leadingColor)}
    ) !important;
    margin-bottom: var(
      --ds-list-item-leading-margin-bottom,
      ${r(Nn.leadingMarginBottom)}
    );
  }

  ::slotted([slot='list-item__title']) {
    font-size: var(
      --ds-list-item-title-font-size,
      ${r(Ke.fontSize)}
    ) !important;
    font-weight: var(
      --ds-list-item-title-font-weight,
      ${r(Ke.fontWeight)}
    ) !important;
    line-height: var(
      --ds-list-item-title-line-height,
      ${r(Ke.lineHeight)}
    ) !important;
    color: var(
      --ds-list-item-title-color,
      ${r(bc.titleColor)}
    ) !important;
    margin-bottom: var(
      --ds-list-item-title-margin-bottom,
      ${r(Ke.marginBottom)}
    ) !important;
  }

  ::slotted([slot='list-item__subtext']) {
    font-size: var(
      --ds-list-item-subtext-font-size,
      ${r(Yt.fontSize)}
    ) !important;
    font-weight: var(
      --ds-list-item-subtext-font-weight,
      ${r(Yt.fontWeight)}
    ) !important;
    line-height: var(
      --ds-list-item-subtext-line-height,
      ${r(Yt.lineHeight)}
    ) !important;
    color: var(
      --ds-list-item-subtext-color,
      ${r(_c.subtextColor)}
    ) !important;
    margin-bottom: var(
      --ds-list-item-subtext-margin-bottom,
      ${r(Yt.marginBottom)}
    ) !important;
  }
`;var yc=Object.defineProperty,Cc=Object.getOwnPropertyDescriptor,tt=(e,t,o,i)=>{for(var s=i>1?void 0:i?Cc(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&yc(t,o,s),s};const Sc="reimagine-list-item";n.ListItem=class extends ho{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._leadingSlotEmpty=!0,this._eyebrowSlotEmpty=!0,this._titleSlotEmpty=!0,this._subtextSlotEmpty=!0,this.topDivider=!1,this.bottomDivider=!1,this.trailing=!1}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0,this._leadingSlotEmpty=this._leadingSlot.length===0,this._eyebrowSlotEmpty=this._eyebrowSlot.length===0,this._titleSlotEmpty=this._titleSlot.length===0,this._subtextSlotEmpty=this._subtextSlot.length===0}_renderOptionalSlot(t,o){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderTopDividerSlot(){return this.topDivider?g`<slot name="list-item__top-divider"><reimagine-divider></reimagine-divider></slot>`:M}_renderBottomDividerSlot(){return this.bottomDivider?g`<slot name="list-item__bottom-divider"><reimagine-divider></reimagine-divider></slot>`:M}_renderTrailingSlot(){return g`
      <div
        part="list-item__trailing"
        class="list-item__trailing"
        style="${this.trailing?"":"display: none;"}"
      >
        <slot name="list-item__trailing">
          <reimagine-icon
            icon="chevron-${this.dir==="rtl"?"left":"right"}"
            size="medium"
          ></reimagine-icon>
        </slot>
      </div>
    `}render(){return g`
      ${this._renderTopDividerSlot()}
      <div part="list-item__inner" class="list-item__inner">
        ${this._renderOptionalSlot("list-item__first",this._firstSlotEmpty)}
        ${this._renderOptionalSlot("list-item__leading",this._leadingSlotEmpty)}
        <div part="list-item__content" class="list-item__content">
          ${this._renderOptionalSlot("list-item__eyebrow",this._eyebrowSlotEmpty)}
          ${this._renderOptionalSlot("list-item__title",this._titleSlotEmpty)}
          ${this._renderOptionalSlot("list-item__subtext",this._subtextSlotEmpty)}
        </div>
        ${this._renderTrailingSlot()}
        ${this._renderOptionalSlot("list-item__last",this._lastSlotEmpty)}
      </div>
      ${this._renderBottomDividerSlot()}
    `}},n.ListItem.styles=[vc],tt([_({slot:"list-item__first"})],n.ListItem.prototype,"_firstSlot",2),tt([_({slot:"list-item__last"})],n.ListItem.prototype,"_lastSlot",2),tt([_({slot:"list-item__leading"})],n.ListItem.prototype,"_leadingSlot",2),tt([_({slot:"list-item__eyebrow"})],n.ListItem.prototype,"_eyebrowSlot",2),tt([_({slot:"list-item__title"})],n.ListItem.prototype,"_titleSlot",2),tt([_({slot:"list-item__subtext"})],n.ListItem.prototype,"_subtextSlot",2),tt([m()],n.ListItem.prototype,"_firstSlotEmpty",2),tt([m()],n.ListItem.prototype,"_lastSlotEmpty",2),tt([m()],n.ListItem.prototype,"_leadingSlotEmpty",2),tt([m()],n.ListItem.prototype,"_eyebrowSlotEmpty",2),tt([m()],n.ListItem.prototype,"_titleSlotEmpty",2),tt([m()],n.ListItem.prototype,"_subtextSlotEmpty",2),tt([c({type:Boolean,reflect:!0,attribute:"top-divider"})],n.ListItem.prototype,"topDivider",2),tt([c({type:Boolean,reflect:!0,attribute:"bottom-divider"})],n.ListItem.prototype,"bottomDivider",2),tt([c({type:Boolean,reflect:!0,attribute:"trailing"})],n.ListItem.prototype,"trailing",2),n.ListItem=tt([E(Sc)],n.ListItem);const w={aspectRatio:"initial",background:"initial",backdropFilter:"initial",boxSizing:"content-box",boxShadow:"initial",borderStyle:"initial",borderColor:"initial",borderWidth:"initial",borderStartStartRadius:"initial",borderStartEndRadius:"initial",borderEndEndRadius:"initial",borderEndStartRadius:"initial",display:"flex",width:"fit-content",maxWidth:"100%",height:"100%",maxHeight:"initial",objectFit:"initial",position:"relative",paddingInlineStart:"0rem",paddingInlineEnd:"0rem",paddingBlockStart:"0rem",paddingBlockEnd:"0rem"},uo={assetBorderStartStartRadius:"initial",assetBorderStartEndRadius:"initial",assetBorderEndEndRadius:"initial",assetBorderEndStartRadius:"initial",assetOverflow:"initial"},Ft={assetOverlayBackground:"initial",assetOverlayPosition:"absolute",assetOverlayTop:"0",assetOverlayLeft:"0",assetOverlayRight:"0",assetOverlayBottom:"0",assetOverlayWidth:"100%",assetOverlayHeight:"100%",assetOverlayBorderRadius:"var(--ds-media-asset-border-start-start-radius, 0)",assetOverlayZindex:"2"},Vn={slotPosition:"absolute",slotZindex:"1"},Zn={slotTopLeftX:"var(--ds-spacing-m, 1rem)",slotTopLeftY:"var(--ds-spacing-m, 1rem)"},Fn={slotTopRightX:"var(--ds-spacing-m, 1rem)",slotTopRightY:"var(--ds-spacing-m, 1rem)"},fs={slotCenterCenterX:"50%",slotCenterCenterY:"50%",slotCenterCenterTransform:"translate(-50%, -50%)"},Un={slotBottomLeftX:"var(--ds-spacing-m, 1rem)",slotBottomLeftY:"var(--ds-spacing-m, 1rem)"},jn={slotBottomRightX:"var(--ds-spacing-m, 1rem)",slotBottomRightY:"var(--ds-spacing-m, 1rem)"},$c=y`
  :host {
    aspect-ratio: var(--ds-media-aspect-ratio, ${r(w.aspectRatio)});
    background: var(--ds-media-background, ${r(w.background)});
    backdrop-filter: var(--ds-media-backdrop-filter, ${r(w.backdropFilter)});
    border-style: var(--ds-media-border-style, ${r(w.borderStyle)});
    border-color: var(--ds-media-border-color, ${r(w.borderColor)});
    border-width: var(--ds-media-border-width, ${r(w.borderWidth)});
    box-sizing: var(--ds-media-box-sizing, ${r(w.boxSizing)}) !important;
    box-shadow: var(--ds-media-box-shadow, ${r(w.boxShadow)});
    display: var(--ds-media-display, ${r(w.display)});
    width: var(--ds-media-width, ${r(w.width)});
    max-width: var(--ds-media-max-width, ${r(w.maxWidth)});
    height: var(--ds-media-height, ${r(w.height)});
    max-height: var(--ds-media-max-height, ${r(w.maxHeight)});
    object-fit: var(--ds-media-object-fit, ${r(w.objectFit)});
    position: var(--ds-media-position, ${r(w.position)});
    padding-inline-start: var(
      --ds-media-padding-inline-start,
      ${r(w.paddingInlineStart)}
    );
    padding-inline-end: var(
      --ds-media-padding-inline-end,
      ${r(w.paddingInlineEnd)}
    );
    padding-block-start: var(
      --ds-media-padding-block-start,
      ${r(w.paddingBlockStart)}
    );
    padding-block-end: var(
      --ds-media-padding-block-end,
      ${r(w.paddingBlockEnd)}
    );
  }

  :host,
  :host([type='highlight--double-image']) ::slotted([slot='media__double-img']) {
    border-start-start-radius: var(
      --ds-media-border-start-start-radius,
      ${r(w.borderStartStartRadius)}
    );
    border-start-end-radius: var(
      --ds-media-border-start-end-radius,
      ${r(w.borderStartEndRadius)}
    );
    border-end-end-radius: var(
      --ds-media-border-end-end-radius,
      ${r(w.borderEndEndRadius)}
    );
    border-end-start-radius: var(
      --ds-media-border-end-start-radius,
      ${r(w.borderEndStartRadius)}
    );
  }

  :host([aspect-ratio='21-9']) {
    --ds-media-aspect-ratio: 21 / 9;
  }

  :host([aspect-ratio='16-9']) {
    --ds-media-aspect-ratio: 16 / 9;
  }

  :host([aspect-ratio='4-3']) {
    --ds-media-aspect-ratio: 4 / 3;
  }

  :host([aspect-ratio='1-1']) {
    --ds-media-aspect-ratio: 1 / 1;
  }

  :host([aspect-ratio='3-4']) {
    --ds-media-aspect-ratio: 3 / 4;
  }

  :host([aspect-ratio='2-3']) {
    --ds-media-aspect-ratio: 2 / 3;
  }

  :host([drop-shadow]) {
    --ds-media-box-shadow: var(
      --ds-elevation-level-6,
      0px 32px 64px rgba(0, 0, 0, 0.14) 0px 0px 8px rgba(0, 0, 0, 0.12)
    );
  }

  img,
  picture,
  ::slotted(img),
  ::slotted(picture) {
    aspect-ratio: var(--ds-media-aspect-ratio, ${r(w.aspectRatio)});
    border-start-start-radius: var(
      --ds-media-asset-border-start-start-radius,
      ${r(uo.assetBorderStartStartRadius)}
    );
    border-start-end-radius: var(
      --ds-media-asset-border-start-end-radius,
      ${r(uo.assetBorderStartEndRadius)}
    );
    border-end-end-radius: var(
      --ds-media-asset-border-end-end-radius,
      ${r(uo.assetBorderEndEndRadius)}
    );
    border-end-start-radius: var(
      --ds-media-asset-border-end-start-radius,
      ${r(uo.assetBorderEndStartRadius)}
    );
    overflow: var(--ds-media-asset-overflow, ${r(uo.assetOverflow)});
  }

  img,
  ::slotted(img) {
    display: var(--ds-media-display, flex);
    width: var(--ds-media-width, ${r(w.width)});
    max-width: var(--ds-media-max-width, ${r(w.maxWidth)});
    height: var(--ds-media-height, ${r(w.height)});
    max-height: var(--ds-media-max-height, ${r(w.maxHeight)});
    object-fit: var(--ds-media-object-fit, ${r(w.objectFit)});
  }

  picture,
  ::slotted(picture) {
    display: var(--ds-media-picture-display, flex);
    width: var(
      --ds-media-picture-width,
      var(--ds-media-width, ${r(w.width)})
    );
    max-width: var(
      --ds-media-picture-max-width,
      var(--ds-media-max-width, ${r(w.maxWidth)})
    );
    height: var(
      --ds-media-picture-height,
      var(--ds-media-height, ${r(w.height)})
    );
  }

  /* Highlight styles */
  :host([type^='highlight']) {
    --ds-media-border-start-start-radius: var(--ds-radii-l, 1.5rem);
    --ds-media-border-start-end-radius: var(--ds-radii-l, 1.5rem);
    --ds-media-border-end-start-radius: var(--ds-radii-l, 1.5rem);
    --ds-media-border-end-end-radius: var(--ds-radii-l, 1.5rem);
    --ds-media-padding-inline-start: var(--ds-spacing-3xl, 4.5rem);
    --ds-media-padding-inline-end: var(--ds-spacing-3xl, 4.5rem);
    --ds-media-padding-block-start: var(--ds-spacing-3xl, 4.5rem);
    --ds-media-padding-block-end: var(--ds-spacing-3xl, 4.5rem);
    --ds-media-asset-border-start-start-radius: var(--ds-radii-m, 0.5rem);
    --ds-media-asset-border-start-end-radius: var(--ds-radii-m, 0.5rem);
    --ds-media-asset-border-end-start-radius: var(--ds-radii-m, 0.5rem);
    --ds-media-asset-border-end-end-radius: var(--ds-radii-m, 0.5rem);
    --ds-media-asset-overflow: hidden;
  }

  :host([type^='highlight']) ::slotted(img),
  :host([type^='highlight']) ::slotted(picture) {
    border-radius: var(--ds-radii-s, 0.5rem);
  }

  :host([type='highlight--double-image']) ::slotted([slot='media__double-img']) {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  :host([type='highlight--double-image']) ::slotted([slot='media__asset']) {
    position: relative;
    z-index: 1;
  }

  :host([surface]) {
    --ds-surface-border-radius: var(--ds-media-border-start-start-radius);
  }

  :host([type='highlight'][surface='glass']),
  :host([type='highlight'][surface='solid']) {
    --ds-surface-border-radius: var(--ds-media-border-start-start-radius);
  }

  :host([type='highlight'][surface='glass']),
  :host([type='highlight--glass']) {
    --ds-media-padding-inline-start: var(--ds-spacing-l);
    --ds-media-padding-inline-end: var(--ds-spacing-l);
    --ds-media-padding-block-start: var(--ds-spacing-l);
    --ds-media-padding-block-end: var(--ds-spacing-l);
    --ds-media-background: ${r(q.background)};
    --ds-media-border-width: ${r(q.borderWidth)};
    --ds-media-border-style: ${r(q.borderStyle)};
    --ds-media-border-color: ${r(q.borderColor)};
    --ds-media-backdrop-filter: ${r(q.backdropFilter)};
    --ds-surface-background: ${r(q.background)};
  }

  :host([type='highlight'][surface='solid']),
  :host([type='highlight--solid']) {
    --ds-media-padding-inline-start: var(--ds-spacing-m);
    --ds-media-padding-inline-end: var(--ds-spacing-m);
    --ds-media-padding-block-start: var(--ds-spacing-m);
    --ds-media-padding-block-end: var(--ds-spacing-m);
    --ds-media-background: ${r(G.background)};
    --ds-media-border-width: ${r(G.borderWidth)};
    --ds-media-border-style: ${r(G.borderStyle)};
    --ds-media-border-color: ${r(G.borderColor)};
    --ds-surface-background: ${r(G.background)};
  }

  :host([type='highlight']),
  :host([type='highlight'][surface='color']),
  :host([type='highlight--color']) {
    --ds-surface-background: var(--ds-theme-background-special-color, 'initial');
    --ds-media-background: var(--ds-theme-background-special-color, 'initial');
  }

  :host([border-width='m']) {
    --ds-media-padding-inline-start: var(--ds-spacing-m, 1rem);
    --ds-media-padding-inline-end: var(--ds-spacing-m, 1rem);
    --ds-media-padding-block-start: var(--ds-spacing-m, 1rem);
    --ds-media-padding-block-end: var(--ds-spacing-m, 1rem);
  }

  :host([border-width='xs']) {
    --ds-media-padding-inline-start: var(--ds-spacing-xs, 0.5rem);
    --ds-media-padding-inline-end: var(--ds-spacing-xs, 0.5rem);
    --ds-media-padding-block-start: var(--ds-spacing-xs, 0.5rem);
    --ds-media-padding-block-end: var(--ds-spacing-xs, 0.5rem);
  }

  :host([overlay])::part(media__asset) {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
  }

  :host([overlay])::part(media__asset__overlay) {
    position: var(
      --ds-media-overlay-position,
      ${r(Ft.assetOverlayPosition)}
    );
    top: var(--ds-media-overlay-top, ${r(Ft.assetOverlayTop)});
    left: var(--ds-media-overlay-left, ${r(Ft.assetOverlayLeft)});
    right: var(
      --ds-media-overlay-right,
      ${r(Ft.assetOverlayRight)}
    );
    bottom: var(
      --ds-media-overlay-bottom,
      ${r(Ft.assetOverlayBottom)}
    );
    width: var(
      --ds-media-overlay-width,
      ${r(Ft.assetOverlayWidth)}
    );
    height: var(
      --ds-media-overlay-height,
      ${r(Ft.assetOverlayHeight)}
    );
    border-radius: ${r(Ft.assetOverlayBorderRadius)};
    z-index: var(
      --ds-media-overlay-zindex,
      ${r(Ft.assetOverlayZindex)}
    );
  }

  :host([overlay])::part(media__asset__overlay)::after {
    content: '';
    position: absolute;
    top: inherit;
    left: inherit;
    right: inherit;
    bottom: inherit;
    border-radius: inherit;
    background: var(--ds-media-overlay-background, initial);
  }

  :host([overlay]) ::slotted([slot^='media__pos']) {
    --ds-media-slot-zindex: 2;
  }

  :host([overlay='asset--fill']) {
    --ds-media-overlay-background: var(--ds-theme-background-video-overlay-fill);
  }

  :host([overlay='asset--top']) {
    --ds-media-overlay-background: var(--ds-theme-background-video-overlay-vertical);
  }

  :host([overlay='asset--bottom-1']) {
    --ds-media-overlay-background: var(--ds-theme-background-video-overlay-bottom-vertical);
  }

  :host([overlay='asset--bottom-2']) {
    --ds-media-overlay-background: var(--ds-theme-background-video-overlay-bottom-vertical-light);
  }

  :host([overlay='asset--bottom-3']) {
    --ds-media-overlay-background: var(--ds-theme-background-video-overlay-bottom-vertical-strong);
  }

  :host([overlay='bg--fill']) {
    --ds-media-overlay-background: var(--ds-theme-background-background-overlay-fill);
  }

  :host([overlay='bg--horizontal']) {
    --ds-media-overlay-background: var(--ds-theme-background-background-overlay-horizontal);
  }

  :host([overlay='bg--horizontal-faded']) {
    --ds-media-overlay-background: var(--ds-theme-background-background-overlay-horizontal-faded);
  }

  :host([overlay='bg--vertical']) {
    --ds-media-overlay-background: var(--ds-theme-background-background-overlay-vertical);
  }

  :host([overlay='bg--vertical-color']) {
    --ds-media-overlay-background: var(--ds-theme-background-background-overlay-vertical-color);
  }

  ::slotted([slot^='media__pos']) {
    position: var(--ds-media-slot-position, ${r(Vn.slotPosition)});
    z-index: var(--ds-media-slot-zindex, ${r(Vn.slotZindex)});
  }

  ::slotted([slot='media__pos-top-left']) {
    left: calc(
      var(--ds-media-slot-top-left-x, ${r(Zn.slotTopLeftX)}) +
        var(--ds-media-padding-inline-start, ${r(w.paddingInlineStart)})
    );
    top: calc(
      var(--ds-media-slot-top-left-y, ${r(Zn.slotTopLeftY)}) +
        var(--ds-media-padding-block-start, ${r(w.paddingBlockStart)})
    );
  }

  ::slotted([slot='media__pos-top-right']) {
    right: calc(
      var(--ds-media-slot-top-right-x, ${r(Fn.slotTopRightX)}) +
        var(--ds-media-padding-inline-end, ${r(w.paddingInlineEnd)})
    );
    top: calc(
      var(--ds-media-slot-top-right-y, ${r(Fn.slotTopRightY)}) +
        var(--ds-media-padding-block-start, ${r(w.paddingBlockStart)})
    );
  }

  ::slotted([slot='media__pos-center-center']) {
    left: var(
      --ds-media-slot-center-center-x,
      ${r(fs.slotCenterCenterX)}
    );
    top: var(
      --ds-media-slot-center-center-y,
      ${r(fs.slotCenterCenterY)}
    );
    transform: var(
      --ds-media-slot-center-center-transform,
      ${r(fs.slotCenterCenterTransform)}
    );
  }

  ::slotted([slot='media__pos-bottom-left']) {
    left: calc(
      var(
          --ds-media-slot-bottom-left-x,
          ${r(Un.slotBottomLeftX)}
        ) + var(--ds-media-padding-inline-start, ${r(w.paddingInlineStart)})
    );
    bottom: calc(
      var(
          --ds-media-slot-bottom-left-y,
          ${r(Un.slotBottomLeftY)}
        ) + var(--ds-media-padding-block-end, ${r(w.paddingBlockEnd)})
    );
  }

  ::slotted([slot='media__pos-bottom-right']) {
    right: calc(
      var(
          --ds-media-slot-bottom-right-x,
          ${r(jn.slotBottomRightX)}
        ) + var(--ds-media-padding-inline-end, ${r(w.paddingInlineEnd)})
    );
    bottom: calc(
      var(
          --ds-media-slot-bottom-right-y,
          ${r(jn.slotBottomRightY)}
        ) + var(--ds-media-padding-block-end, ${r(w.paddingBlockEnd)})
    );
  }
`,xc={highlight:"highlight",highlightDoubleImage:"highlight--double-image",highlightColor:"highlight--color",highlightGlass:"highlight--glass",highlightSolid:"highlight--solid"};var wc=Object.defineProperty,Ec=Object.getOwnPropertyDescriptor,I=(e,t,o,i)=>{for(var s=i>1?void 0:i?Ec(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&wc(t,o,s),s};const kc="reimagine-media";n.Media=class extends x{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._doubleImageSlotEmpty=!0,this._captionSlotEmpty=!0,this._posTopLeftSlotEmpty=!0,this._posTopRightSlotEmpty=!0,this._posCenterCenterSlotEmpty=!0,this._posBottomLeftSlotEmpty=!0,this._posBottomRightSlotEmpty=!0,this.video=!1,this.dropShadow=!1}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0,this._doubleImageSlotEmpty=this._doubleImageSlot.length===0,this._captionSlotEmpty=this._captionSlot.length===0,this._posTopLeftSlotEmpty=this._posTopLeftSlot.length===0,this._posTopRightSlotEmpty=this._posTopRightSlot.length===0,this._posCenterCenterSlotEmpty=this._posCenterCenterSlot.length===0,this._posBottomLeftSlotEmpty=this._posBottomLeftSlot.length===0,this._posBottomRightSlotEmpty=this._posBottomRightSlot.length===0}_renderOptionalSlot(t,o){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderDoubleImage(){if(this.type===xc.highlightDoubleImage)return this._renderOptionalSlot("media__double-img",this._doubleImageSlotEmpty)}render(){return g`
      ${this._renderOptionalSlot("media__first",this._firstSlotEmpty)}
      <div part="media__asset" class="media__asset">
        <div part="media__asset__overlay"></div>
        <slot name="media__asset"></slot>
      </div>
      ${this._renderDoubleImage()}
      ${this._renderOptionalSlot("media__caption",this._captionSlotEmpty)}
      ${this._renderOptionalSlot("media__pos-top-left",this._posTopLeftSlotEmpty)}
      ${this._renderOptionalSlot("media__pos-top-right",this._posTopRightSlotEmpty)}
      ${this._renderOptionalSlot("media__pos-center-center",this._posCenterCenterSlotEmpty)}
      ${this._renderOptionalSlot("media__pos-bottom-left",this._posBottomLeftSlotEmpty)}
      ${this._renderOptionalSlot("media__pos-bottom-right",this._posBottomRightSlotEmpty)}
      ${this._renderOptionalSlot("media__last",this._lastSlotEmpty)}
    `}},n.Media.styles=[$c],I([_({slot:"media__first"})],n.Media.prototype,"_firstSlot",2),I([_({slot:"media__last"})],n.Media.prototype,"_lastSlot",2),I([_({slot:"media__double-img"})],n.Media.prototype,"_doubleImageSlot",2),I([_({slot:"media__caption"})],n.Media.prototype,"_captionSlot",2),I([_({slot:"media__pos-top-left"})],n.Media.prototype,"_posTopLeftSlot",2),I([_({slot:"media__pos-top-right"})],n.Media.prototype,"_posTopRightSlot",2),I([_({slot:"media__pos-center-center"})],n.Media.prototype,"_posCenterCenterSlot",2),I([_({slot:"media__pos-bottom-left"})],n.Media.prototype,"_posBottomLeftSlot",2),I([_({slot:"media__pos-bottom-right"})],n.Media.prototype,"_posBottomRightSlot",2),I([m()],n.Media.prototype,"_firstSlotEmpty",2),I([m()],n.Media.prototype,"_lastSlotEmpty",2),I([m()],n.Media.prototype,"_doubleImageSlotEmpty",2),I([m()],n.Media.prototype,"_captionSlotEmpty",2),I([m()],n.Media.prototype,"_posTopLeftSlotEmpty",2),I([m()],n.Media.prototype,"_posTopRightSlotEmpty",2),I([m()],n.Media.prototype,"_posCenterCenterSlotEmpty",2),I([m()],n.Media.prototype,"_posBottomLeftSlotEmpty",2),I([m()],n.Media.prototype,"_posBottomRightSlotEmpty",2),I([c({reflect:!0})],n.Media.prototype,"theme",2),I([c({reflect:!0,attribute:"aspect-ratio"})],n.Media.prototype,"aspectRatio",2),I([c({type:Boolean,reflect:!0})],n.Media.prototype,"video",2),I([c({type:Boolean,reflect:!0,attribute:"drop-shadow"})],n.Media.prototype,"dropShadow",2),I([c({reflect:!0})],n.Media.prototype,"surface",2),I([c({reflect:!0,attribute:"border-width"})],n.Media.prototype,"borderWidth",2),I([c({reflect:!0})],n.Media.prototype,"type",2),I([c({reflect:!0})],n.Media.prototype,"overlay",2),n.Media=I([E(kc)],n.Media);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lc={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Pc=e=>(...t)=>({_$litDirective$:e,values:t});class Hc{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,i){this._$Ct=t,this._$AM=o,this._$Ci=i}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const si=Pc(class extends Hc{constructor(e){var t;if(super(e),e.type!==Lc.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,s;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!((i=this.nt)!=null&&i.has(a))&&this.st.add(a);return this.render(t)}const o=e.element.classList;for(const a of this.st)a in t||(o.remove(a),this.st.delete(a));for(const a in t){const l=!!t[a];l===this.st.has(a)||(s=this.nt)!=null&&s.has(a)||(l?(o.add(a),this.st.add(a)):(o.remove(a),this.st.delete(a)))}return ge}}),Bc={"level-1":{value:["0px 1px 2px rgba(0, 0, 0, 0.14)","0px 0px 2px rgba(0, 0, 0, 0.12)"]},"level-2":{value:["0px 2px 4px rgba(0, 0, 0, 0.14)","0px 0px 2px rgba(0, 0, 0, 0.12)"]},"level-3":{value:["0px 4px 8px rgba(0, 0, 0, 0.14)","0px 0px 2px rgba(0, 0, 0, 0.12)"]},"level-4":{value:["0px 8px 16px rgba(0, 0, 0, 0.14)","0px 0px 2px rgba(0, 0, 0, 0.12)"]},"level-5":{value:["0px 14px 28px rgba(0, 0, 0, 0.14)","0px 0px 8px rgba(0, 0, 0, 0.12)"]},"level-6":{value:["0px 32px 64px rgba(0, 0, 0, 0.14)","0px 0px 8px rgba(0, 0, 0, 0.12)"]}},Tc=y`var(--ds-theme-background-base-color, #dceef8)`,Oc=y`rgba(0, 0, 0, 0)`,Ac=y`thin`,Mc=y`var(--ds-radii-circle)`,Ic=y`
  scrollbar-width: ${Ac};
  scrollbar-color: ${Tc} ${Oc};

  &::-webkit-scrollbar-thumb {
    border-radius: ${Mc};
  }
`,gt={display:"block",background:G.background,backdropFilter:G.backdropFilter,borderWidth:G.borderWidth,borderStyle:G.borderStyle,borderColor:G.borderColor,borderRadius:"var(--ds-radii-m, 0.5rem)",boxShadow:Bc["level-1"].value.join(", "),padding:"var(--ds-spacing-xs, 0.5rem)",gap:"var(--ds-spacing-s, 0.75rem)",contentMaxHeight:"22rem",contentOverflow:"auto"},Dc=y`
  :host {
    display: var(--ds-menu-list-display, ${r(gt.display)});
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    background: var(--ds-menu-list-background, ${r(gt.background)});
    backdrop-filter: var(
      --ds-menu-list-backdrop-filter,
      ${r(gt.backdropFilter)}
    );
    border-width: var(--ds-menu-list-border-width, ${r(gt.borderWidth)});
    border-style: var(--ds-menu-list-border-style, ${r(gt.borderStyle)});
    border-color: var(--ds-menu-list-border-color, ${r(gt.borderColor)});
    border-radius: var(--ds-menu-list-border-radius, ${r(gt.borderRadius)});
    box-shadow: var(--ds-menu-list-box-shadow, ${r(gt.boxShadow)});
    padding: var(--ds-menu-list-padding, ${r(gt.padding)});
    gap: var(--ds-menu-list-gap, ${r(gt.gap)});
  }

  .menu-list__content {
    max-height: var(
      --ds-menu-list-content-max-height,
      ${r(gt.contentMaxHeight)}
    );
  }

  .menu-list__content-scrolling {
    overflow: var(--ds-menu-list-content-overflow, ${r(gt.contentOverflow)});
    padding-block: var(--ds-vfi-outline-width, 0.1875rem);
    padding-inline-start: var(--ds-vfi-outline-width, 0.1875rem);
    padding-inline-end: var(--ds-spacing-xs, 0.5rem);

    ${Ic}
  }

  .menu-list__content-margin {
    margin-bottom: var(--ds-spacing-xs, 0.5rem);
  }
`,Ut={default:"default",link:"link",checkmark:"checkmark"},ri={small:"small",large:"large"};var Rc=Object.defineProperty,zc=Object.getOwnPropertyDescriptor,wt=(e,t,o,i)=>{for(var s=i>1?void 0:i?zc(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&Rc(t,o,s),s};const Nc="reimagine-menu-list";n.MenuList=class extends x{constructor(){super(...arguments),this.configuration=Ut.default,this.size=ri.small,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._scrollbarVisible=!1}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0,this._defaultSlot.forEach(t=>{t.setAttribute("role","listitem")}),this._scrollbarVisible=this._menuListContent.scrollHeight>this._menuListContent.clientHeight}_renderOptionalSlot(t,o){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}updated(t){t.has("configuration")&&this._defaultSlot.forEach(o=>{o.setAttribute("configuration",this.configuration)}),t.has("size")&&this._defaultSlot.forEach(o=>{o.setAttribute("size",this.size)})}render(){const t={"menu-list__content-scrolling":this._scrollbarVisible,"menu-list__content-margin":!this._lastSlotEmpty};return g`
      <div class="menu-list" part="menu-list">
        ${this._renderOptionalSlot("menu-list__first",this._firstSlotEmpty)}
        <div class="menu-list__content ${si(t)}" part="menu-list__content" role="list">
          <slot @slotchange="${this._handleSlotChange}"></slot>
        </div>
        ${this._lastSlotEmpty?"":g`<reimagine-divider></reimagine-divider>`}
        ${this._renderOptionalSlot("menu-list__last",this._lastSlotEmpty)}
      </div>
    `}},n.MenuList.styles=[Dc],wt([c({reflect:!0})],n.MenuList.prototype,"configuration",2),wt([c({reflect:!0,attribute:"size"})],n.MenuList.prototype,"size",2),wt([c({reflect:!0})],n.MenuList.prototype,"theme",2),wt([_({slot:"menu-list__first"})],n.MenuList.prototype,"_firstSlot",2),wt([_({slot:"menu-list__last"})],n.MenuList.prototype,"_lastSlot",2),wt([Dt()],n.MenuList.prototype,"_defaultSlot",2),wt([bt(".menu-list__content")],n.MenuList.prototype,"_menuListContent",2),wt([m()],n.MenuList.prototype,"_firstSlotEmpty",2),wt([m()],n.MenuList.prototype,"_lastSlotEmpty",2),wt([m()],n.MenuList.prototype,"_scrollbarVisible",2),n.MenuList=wt([E(Nc)],n.MenuList);const jt={display:"block",color:"var(--ds-theme-foreground-base-strong, #0e1726)",paddingInline:"var(--ds-spacing-xs, 0.5rem)",paddingBlock:"var(--ds-spacing-s, 0.75rem)",borderRadius:"var(--ds-radii-s, 0.5rem)",hoverBackgroundColor:"var(--ds-theme-background-accent-subtle-hover, rgba(0, 85, 151, 0.4))",activeBackgroundColor:"var(--ds-theme-background-accent-subtle-pressed, #54a5e2)"},Vc={leadingTransition:"opacity 0.2s ease"},Zc=y`
  :host {
    display: var(--ds-menu-list-item-display, ${r(jt.display)});
    color: var(--ds-menu-list-item-color, ${r(jt.color)});
  }

  /* Add VFI to inner element */
  :host(:focus),
  :host(:focus) a {
    outline: 0 !important;
  }

  :host(:focus) .list-item__inner {
    ${Oe}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :host .list-item__inner {
    --ds-list-item-inner-padding-block-start: var(
      --ds-menu-list-item-padding-block,
      ${r(jt.paddingBlock)}
    );
    --ds-list-item-inner-padding-block-end: var(
      --ds-menu-list-item-padding-block,
      ${r(jt.paddingBlock)}
    );
    --ds-list-item-inner-padding-inline-start: var(
      --ds-menu-list-item-padding-inline,
      ${r(jt.paddingInline)}
    );
    --ds-list-item-inner-padding-inline-end: var(
      --ds-menu-list-item-padding-inline,
      ${r(jt.paddingInline)}
    );

    border-radius: var(
      --ds-menu-list-item-border-radius,
      ${r(jt.borderRadius)}
    );
  }

  :host(:hover) .list-item__inner,
  :host(:focus) .list-item__inner {
    background-color: var(
      --ds-menu-list-item-hover-background-color,
      ${r(jt.hoverBackgroundColor)}
    );
  }

  :host(:active) .list-item__inner {
    background-color: var(
      --ds-menu-list-item-active-background-color,
      ${r(jt.activeBackgroundColor)}
    );
  }

  .list-item__leading,
  .list-item__trailing {
    display: inline-flex;
  }

  .list-item__leading {
    opacity: 0;
    transition: var(
      --ds-menu-list-item-leading-transition,
      ${r(Vc.leadingTransition)}
    );

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  /* Default configuration */
  :host([configuration='${r(Ut.default)}']:hover)
    .list-item__leading,
  :host([configuration='${r(Ut.default)}']:focus)
    .list-item__leading,
  :host([configuration='${r(Ut.default)}']:active)
    .list-item__leading {
    opacity: 1;
  }

  /* Size large */
  :host([size='${r(ri.large)}']) .list-item__leading {
    --ds-indicator-height: 100%;

    align-self: stretch;
  }

  :host([size='${r(ri.large)}']) ::slotted([slot='list-item__title']) {
    --ds-list-item-title-font-weight: ${r(be.fontWeight)};
    --ds-list-item-title-font-size: ${r(be.fontSize)};
    --ds-list-item-title-line-height: ${r(be.lineHeight)};
    --ds-list-item-title-margin-bottom: ${r(be.marginBottom)};
  }

  /* Disabled */
  :host([disabled]) {
    pointer-events: none;
    opacity: 0.2;
  }
`,Fc={sharp:"sharp",rounded:"rounded"};var Uc=Object.defineProperty,jc=Object.getOwnPropertyDescriptor,Wc=Object.getPrototypeOf,Gc=Reflect.get,ni=(e,t,o,i)=>{for(var s=i>1?void 0:i?jc(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&Uc(t,o,s),s},Xc=(e,t,o)=>Gc(Wc(e),o,t);const qc="reimagine-menu-list-item";n.MenuListItem=class extends Rr(To(n.ListItem)){constructor(){super(...arguments),this.configuration=Ut.default,this.disabled=!1,this.itemSize=ri.small}_renderLeadingSlot(){return g`
      <div part="list-item__leading" class="list-item__leading">
        <slot name="list-item__leading">
          <reimagine-indicator
            configuration="${Fc.rounded}"
          ></reimagine-indicator>
        </slot>
      </div>
    `}_renderTrailingSlot(){return g`
      <div
        part="list-item__trailing"
        class="list-item__trailing"
        style="${this.trailing?"":"display: none;"}"
      >
        <slot name="list-item__trailing">
          ${this.configuration===Ut.link?g`<reimagine-icon
                icon="chevron-${this.dir==="rtl"?"left":"right"}"
                size="${to.medium}"
              ></reimagine-icon>`:""}
          ${this.configuration===Ut.checkmark?this.renderCheckbox():""}
        </slot>
      </div>
    `}_renderContent(){return g`
      <div part="list-item__inner" class="list-item__inner">
        ${this._renderOptionalSlot("list-item__first",this._firstSlotEmpty)}
        ${this._renderLeadingSlot()}
        <div part="list-item__content" class="list-item__content">
          ${this._renderOptionalSlot("list-item__title",this._titleSlotEmpty)}
          ${this._renderOptionalSlot("list-item__subtext",this._subtextSlotEmpty)}
        </div>
        ${this._renderTrailingSlot()}
        ${this._renderOptionalSlot("list-item__last",this._lastSlotEmpty)}
      </div>
    `}updated(t){t.has("configuration")&&(this.trailing=this.configuration!==Ut.default),t.has("disabled")&&(this.ariaDisabled=this.disabled?"true":"false")}render(){return this.size="small",this.configuration===Ut.checkmark?g` <label for=${this.checkboxId}> ${this._renderContent()} </label> `:this.renderLink(this._renderContent())}},n.MenuListItem.shadowRootOptions={...x.shadowRootOptions,delegatesFocus:!0},n.MenuListItem.styles=[...Xc(n.MenuListItem,n.MenuListItem,"styles"),Dr,Zc],ni([c({reflect:!0})],n.MenuListItem.prototype,"configuration",2),ni([c({type:Boolean,reflect:!0})],n.MenuListItem.prototype,"disabled",2),ni([c({reflect:!0,attribute:"size"})],n.MenuListItem.prototype,"itemSize",2),n.MenuListItem=ni([E(qc)],n.MenuListItem);const z={display:"inline-flex",paddingInlineStart:"var(--ds-spacing-l, 1.5rem)",paddingInlineEnd:"var(--ds-spacing-l, 1.5rem)",paddingBlock:"var(--ds-spacing-xs, 0.5rem)",borderColor:"transparent",borderStyle:"solid",borderWidth:"var(--ds-border-width-xs, 0.0625rem)",borderRadius:"var(--ds-radii-circle, 12.5rem)",color:"var(--ds-theme-foreground-accent-subtle-normal, #2a446f)",backgroundColor:"var(--ds-theme-background-accent-subtle-normal, #0078d4)",hoverColor:"var(--ds-theme-foreground-accent-subtle-hover, #263e65)",hoverBackgroundColor:"var(--ds-theme-background-accent-subtle-hover, rgba(0, 85, 151, 0.4))",pressedColor:"var(--ds-theme-foreground-accent-subtle-pressed, #0e1726)",pressedBackgroundColor:"var(--ds-theme-background-accent-subtle-pressed, #54a5e2)",activeColor:"var(--ds-theme-foreground-accent-subtle, #ffffff)",activeBackgroundColor:"var(--ds-theme-background-accent-subtle, #005597)",outline:"0.1875rem dotted currentcolor",letterSpacing:"-0.3px",textAlign:"center",fontWeight:"600",fontSize:"0.9375rem",gap:"var(--ds-spacing-xs, 0.5rem)"},Jc=y`
  :host {
    display: var(--ds-pill-display, ${r(z.display)});
  }

  :host button {
    ${Pi};
    text-align: var(--ds-pill-text-align, ${r(z.textAlign)});
    letter-spacing: var(--ds-pill-letter-spacing, ${r(z.letterSpacing)});
    font-weight: var(--ds-pill-font-weight, ${r(z.fontWeight)});
    font-size: var(--ds-pill-font-size, ${r(z.fontSize)});
    gap: var(--ds-pill-gap, ${r(z.gap)});
    padding-block: var(--ds-spacing-xs, ${r(z.paddingBlock)});
    padding-inline-start: var(
      --ds-pill-padding-inline-start,
      ${r(z.paddingInlineStart)}
    );
    padding-inline-end: var(
      --ds-pill-padding-inline-end,
      ${r(z.paddingInlineEnd)}
    );
    border-style: var(--ds-pill-border-style, ${r(z.borderStyle)});
    border-width: var(--ds-pill-border-width, ${r(z.borderWidth)});
    border-color: var(--ds-pill-border-color, ${r(z.borderColor)});
    border-radius: var(--ds-pill-border-radius, ${r(z.borderRadius)});
    color: var(--ds-pill-color, ${r(z.color)});
    background-color: var(
      --ds-pill-background-color,
      ${r(z.backgroundColor)}
    );
  }

  :host button:focus {
    ${pl};
  }

  :host button:hover {
    --ds-pill-color: var(--ds-pill-hover-color, ${r(z.hoverColor)});
    --ds-pill-background-color: var(
      --ds-pill-hover-background-color,
      ${r(z.hoverBackgroundColor)}
    );
  }

  :host button:active {
    --ds-pill-color: var(--ds-pill-pressed-color, ${r(z.pressedColor)});
    --ds-pill-background-color: var(
      --ds-pill-pressed-background-color,
      ${r(z.pressedBackgroundColor)}
    );
  }

  :host([disabled]) button {
    opacity: 0.2;
    pointer-events: none;
    cursor: pointer;
  }

  :host([active]) button {
    --ds-pill-color: var(--ds-pill-active-color, ${r(z.activeColor)});
    --ds-pill-background-color: var(
      --ds-pill-active-background-color,
      ${r(z.activeBackgroundColor)}
    );
  }

  :host([multi-select][active]) button {
    --ds-pill-border-color: var(--ds-pill-multi-select-active-border-color, #2a446f);
    --ds-pill-padding-inline-end: var(--ds-spacing-xs, 0.5rem);
    --ds-pill-color: var(--ds-pill-color, ${r(z.color)});
    --ds-pill-background-color: var(
      --ds-pill-background-color,
      ${r(z.backgroundColor)}
    );
  }
`;var Yc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,le=(e,t,o,i)=>{for(var s=i>1?void 0:i?Qc(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&Yc(t,o,s),s};const Kc="reimagine-pill";n.Pill=class extends Hi(x){constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this.active=!1,this.disabled=!1,this.multiSelect=!1}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0}render(){return this.renderButton(g`
      <span
        part="pill__first"
        class="pill__first"
        style="${this._firstSlotEmpty?"display: none":""}"
      >
        <slot name="pill__first" @slotchange="${this._handleSlotChange}"></slot>
      </span>
      <slot></slot>
      ${this.active&&this.multiSelect?g`<reimagine-icon icon="dismiss-circle" filled size="large"></reimagine-icon>`:""}
      <span
        part="pill__last"
        class="pill__last"
        style="${this._lastSlotEmpty?"display: none":""}"
      >
        <slot name="pill__last" @slotchange="${this._handleSlotChange}"></slot>
      </span>
    `)}},n.Pill.styles=[Jc],le([_({slot:"pill__first"})],n.Pill.prototype,"_firstSlot",2),le([_({slot:"pill__last"})],n.Pill.prototype,"_lastSlot",2),le([m()],n.Pill.prototype,"_firstSlotEmpty",2),le([m()],n.Pill.prototype,"_lastSlotEmpty",2),le([c({reflect:!0,type:Boolean})],n.Pill.prototype,"active",2),le([c({reflect:!0,type:Boolean})],n.Pill.prototype,"disabled",2),le([c({reflect:!0,type:Boolean,attribute:"multi-select"})],n.Pill.prototype,"multiSelect",2),n.Pill=le([E(Kc)],n.Pill);const de={display:"flex",gap:"var(--ds-spacing-xs, 0.5rem)",flexDirection:"row",fontWeight:"var(--ds-display-1-font-weight,600)",fontSize:"var(--ds-label-font-size,0.875rem)"},th={gap:"var(--ds-spacing-2xs, 0.25rem)"},eh=y`
  :host {
    gap: var(--ds-product-gap, ${r(de.gap)});
    display: var(--ds-product-display, ${r(de.display)});
    font-weight: var(--ds-font-weight, ${r(de.fontWeight)});
    font-size: var(--ds-font-size, ${r(de.fontSize)});
    flex-direction: var(--ds-product-flex-direction, ${r(de.flexDirection)});
  }

  ol {
    list-style-type: none;
    display: var(--ds-product-display, ${r(de.display)});
    flex-direction: var(--ds-product-flex-direction, ${r(de.flexDirection)});
    padding: 0;
    margin: 0;
    gap: var(--ds-product-gap, ${r(de.gap)});
  }

  :host([configuration='vertical']) ol {
    --ds-product-flex-direction: column;
  }

  :host([configuration='vertical']) {
    --ds-product-flex-direction: column;
  }

  :host([density='comfortable']) ol {
    --ds-product-gap: var(--ds-spacing-2xl, 2rem);
  }

  :host([variant='badge-only']) ol {
    gap: ${r(th.gap)};
  }

  ::slotted([slot='related-product__overflow']) {
    --ds-badge-width: 2rem;
    --ds-badge-height: 2rem;
    font-size: ${r(st.fontSize)};
    font-weight: ${r(st.fontWeight)};
    line-height: ${r(st.lineHeight)};
  }
`;var oh=Object.defineProperty,ih=Object.getOwnPropertyDescriptor,po=(e,t,o,i)=>{for(var s=i>1?void 0:i?ih(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&oh(t,o,s),s};const sh="reimagine-related-products";n.RelatedProducts=class extends x{_handleSlotChange(){this.requestUpdate()}firstUpdated(){this._handleSlotChange()}updated(){["related-product__items","related-product__overflow"].forEach(t=>{const o=this.renderRoot.querySelector(`slot[name="${t}"]`);o&&o.assignedNodes({flatten:!0}).forEach(s=>{s.setAttribute("role","listitem")})})}render(){return g`
      <ol>
        <slot name="related-product__items" @slotchange=${this._handleSlotChange}></slot>
        <slot name="related-product__overflow"></slot>
      </ol>
    `}},n.RelatedProducts.styles=[eh],po([c({reflect:!0})],n.RelatedProducts.prototype,"density",2),po([c({reflect:!0})],n.RelatedProducts.prototype,"variant",2),po([c({reflect:!0})],n.RelatedProducts.prototype,"configuration",2),po([c({reflect:!0})],n.RelatedProducts.prototype,"theme",2),n.RelatedProducts=po([E(sh)],n.RelatedProducts);function ai(e,t,o){var i=o||{},s=i.noTrailing,a=s===void 0?!1:s,l=i.noLeading,d=l===void 0?!1:l,h=i.debounceMode,u=h===void 0?void 0:h,p,f=!1,b=0;function v(){p&&clearTimeout(p)}function C($){var O=$||{},P=O.upcomingOnly,H=P===void 0?!1:P;v(),f=!H}function S(){for(var $=arguments.length,O=new Array($),P=0;P<$;P++)O[P]=arguments[P];var H=this,N=Date.now()-b;if(f)return;function A(){b=Date.now(),t.apply(H,O)}function it(){p=void 0}!d&&u&&!p&&A(),v(),u===void 0&&N>e?d?(b=Date.now(),a||(p=setTimeout(u?it:A,e))):A():a!==!0&&(p=setTimeout(u?it:A,u===void 0?e-N:e))}return S.cancel=C,S}function bs(e,t,o){var i=o||{},s=i.atBegin,a=s===void 0?!1:s;return ai(e,t,{debounceMode:a!==!1})}const rh={change:"onChange"};var nh=Object.defineProperty,ah=Object.getOwnPropertyDescriptor,at=(e,t,o,i)=>{for(var s=i>1?void 0:i?ah(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&nh(t,o,s),s};const lh="reimagine-scroll-spy";n.ScrollSpy=class extends x{constructor(){super(...arguments),this.smoothScroll=!1,this.scrollBody=!1,this.offset=0,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._scrollSpyEvents=[],this._scrollElement=null,this._navLinks=[],this._scrollTargets=[],this._offsets=[],this._activeTarget=null}_setUp(){const t=this._navigationSlot;this._navLinks=t.flatMap(o=>Array.from(o.querySelectorAll('[href^="#"]'))),this._scrollTargets=this._targetsSlot,this._navLinks=this._navLinks.filter(o=>{const i=o.getAttribute("href").slice(1);return this._scrollTargets.some(s=>s.id===i)}),this._scrollTargets=this._navLinks.map(o=>{const i=o.getAttribute("href").slice(1);return this._scrollTargets.find(s=>s.id===i)}),this._setTargetsAndOffsets(),this._scrollSpyEvents.push(...this._navLinks.map(o=>({el:o,type:"click",handler:i=>this._onAnchorClick(i)}))),co(this._scrollSpyEvents),this._scrollTargets.length>0&&this._activeTarget!==this._scrollTargets[0].id&&this._activate(this._scrollTargets[0].id)}_setTargetsAndOffsets(){const t=this._scrollElement?this._scrollElement.scrollTop:0;this._offsets=this._scrollTargets.map(o=>o.getBoundingClientRect().top+t-(this._scrollElement?this._scrollElement.offsetTop:0))}_setScrollElement(){const t=this._scrollElement;this._scrollElement=this.scrollBody?null:this._basePart,t!==this._scrollElement&&this._attachScrollEvent()}_attachScrollEvent(){const t=this.scrollBody?window:this._scrollElement;this._scrollSpyEvents=this._scrollSpyEvents.filter(o=>o.type!=="scroll"),t&&this._scrollSpyEvents.push({el:t,type:"scroll",handler:ai(200,this._onScroll.bind(this))})}_activate(t){this._activeTarget!==t&&(this._activeTarget=t,this._navLinks.forEach(o=>{o.removeAttribute("active"),o.removeAttribute("aria-current"),this.activeClass&&o.classList.remove(this.activeClass),o.getAttribute("href")===`#${t}`&&(o.setAttribute("aria-current","true"),this.activeClass?o.classList.add(this.activeClass):o.setAttribute("active",""))}),this.dispatchEvent(new CustomEvent(rh.change,{bubbles:!0})))}_onWindowResize(){this._setTargetsAndOffsets(),this._onScroll()}_onAnchorClick(t){var a,l;t.preventDefault();const i=t.target.getAttribute("href").slice(1),s=document.getElementById(i);if(s){const d=this.scrollBody?window.scrollY:((a=this._scrollElement)==null?void 0:a.scrollTop)||0,h=s.getBoundingClientRect(),u=((l=this._scrollElement)==null?void 0:l.getBoundingClientRect())||{top:0,left:0},p=h.top+d-u.top-this.offset,f=this.smoothScroll?"smooth":"auto";this.scrollBody?window.scrollTo({top:p,behavior:f}):this._scrollElement&&this._scrollElement.scrollTo({top:p,behavior:f}),s.focus({preventScroll:!0}),this._activate(i)}}_onScroll(){const t=this._scrollElement?this._scrollElement.scrollTop+this.offset:window.scrollY+this.offset;for(let o=this._scrollTargets.length-1;o>=0;o--){const i=this._scrollTargets[o],s=this._scrollTargets[o+1];if(t>=this._offsets[o]&&(!s||t<this._offsets[o+1])){this._activate(i.id);break}}}connectedCallback(){super.connectedCallback(),this._attachScrollEvent(),this._scrollSpyEvents.push({el:window,type:"resize",handler:ai(500,this._onWindowResize.bind(this))}),co(this._scrollSpyEvents)}disconnectedCallback(){super.disconnectedCallback(),Yo(this._scrollSpyEvents)}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0}_handleBaseSlotChange(){this._setScrollElement(),this._setUp()}_renderOptionalSlot(t,o){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return g`
      <div
        part="scroll-spy__first"
        class="scroll-spy__first"
        style="${this._firstSlotEmpty?"display: none;":""}"
      >
        ${this._renderOptionalSlot("scroll-spy__first",this._firstSlotEmpty)}
      </div>

      <div
        part="scroll-spy__base"
        class="scroll-spy__base"
        @slotchange="${this._handleBaseSlotChange}"
      >
        <slot name="scroll-spy__navigation-links"></slot>
        <div part="scroll-spy__content" class="scroll-spy__content">
          <slot></slot>
        </div>
      </div>
      <div
        part="scroll-spy__last"
        class="scroll-spy__last"
        style="${this._lastSlotEmpty?"display: none":""}"
      >
        ${this._renderOptionalSlot("scroll-spy__last",this._lastSlotEmpty)}
      </div>
    `}},at([c({attribute:"active-class",type:String})],n.ScrollSpy.prototype,"activeClass",2),at([c({attribute:"smooth-scroll",reflect:!0,type:Boolean})],n.ScrollSpy.prototype,"smoothScroll",2),at([c({attribute:"scroll-body",type:Boolean})],n.ScrollSpy.prototype,"scrollBody",2),at([c({attribute:"offset",type:Number})],n.ScrollSpy.prototype,"offset",2),at([bt('[part="scroll-spy__base"]')],n.ScrollSpy.prototype,"_basePart",2),at([_({slot:"scroll-spy__first"})],n.ScrollSpy.prototype,"_firstSlot",2),at([_({slot:"scroll-spy__last"})],n.ScrollSpy.prototype,"_lastSlot",2),at([m()],n.ScrollSpy.prototype,"_firstSlotEmpty",2),at([m()],n.ScrollSpy.prototype,"_lastSlotEmpty",2),at([m()],n.ScrollSpy.prototype,"_scrollSpyEvents",2),at([m()],n.ScrollSpy.prototype,"_scrollElement",2),at([Dt({slot:"scroll-spy__navigation-links"})],n.ScrollSpy.prototype,"_navigationSlot",2),at([Dt()],n.ScrollSpy.prototype,"_targetsSlot",2),n.ScrollSpy=at([E(lh)],n.ScrollSpy);const Y={topStart:"top-start",middleStart:"middle-start",middleJustified:"middle-justified",middleEnd:"middle-end",bottomStart:"bottom-start",bottomJustified:"bottom-justified",bottomEnd:"bottom-end"},dh={scroll:"onScroll"},li={flexDirection:"column",gap:"var(--ds-spacing-xl, 2rem)",controlsGap:"var(--ds-spacing-xs, 0.5rem)",itemGap:"var(--ds-spacing-m, 1rem)"},_s={middleJustifiedControlWidth:"12rem",middleJustifiedPrevControlBackground:"linear-gradient(90deg, var(--ds-theme-background-neutral-fade, #f7f7f7) 25%, transparent 100%)",middleJustifiedNextControlBackground:"linear-gradient(270deg, var(--ds-theme-background-neutral-fade, #f7f7f7) 25%, transparent 100%)"},ch=y`
  :host {
    position: relative;
    display: flex;
    flex-direction: var(
      --ds-scrollslider-flex-direction,
      ${r(li.flexDirection)}
    );
    gap: var(--ds-scrollslider-gap, ${r(li.gap)});
  }

  .scrollslider__controls {
    display: flex;
    align-items: center;
    gap: var(--ds-scrollslider-controls-gap, ${r(li.controlsGap)});
  }

  .scrollslider__base {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
    overscroll-behavior-x: none;
    gap: var(--ds-filmstrip-item-gap, ${r(li.itemGap)});
    scroll-behavior: smooth;

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  .scrollslider__base::-webkit-scrollbar {
    display: none;
  }

  :host([hide-controls]) .scrollslider__controls {
    display: none;
  }

  :host([control-position^='middle']) {
    --ds-scrollslider-flex-direction: row;
  }

  :host([control-position='${r(Y.middleJustified)}'])
    .scrollslider__controls {
    position: absolute;
    pointer-events: none;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: 1;
    justify-content: space-between;
  }

  :host([control-position='${r(Y.middleJustified)}'])
    .scrollslider__prev-control-default,
  :host([control-position='${r(Y.middleJustified)}'])
    .scrollslider__next-control-default,
  :host([control-position='${r(Y.middleJustified)}'])
    [slot='scrollslider__prev-control']::slotted(*),
  :host([control-position='${r(Y.middleJustified)}'])
    [slot='scrollslider__next-control']::slotted(*) {
    pointer-events: visible;
  }

  :host([control-position='${r(Y.middleJustified)}'])
    .scrollslider__prev-control-disabled,
  :host([control-position='${r(Y.middleJustified)}'])
    .scrollslider__next-control-disabled {
    visibility: hidden;
  }

  :host([control-position='${r(Y.middleJustified)}'])
    .scrollslider__prev-control,
  :host([control-position='${r(Y.middleJustified)}'])
    .scrollslider__next-control {
    height: 100%;
    width: var(
      --ds-scrollslider-middle-justified-control-width,
      ${r(_s.middleJustifiedControlWidth)}
    );
    display: flex;
    align-items: center;
  }

  :host([control-position='${r(Y.middleJustified)}'])
    .scrollslider__prev-control {
    background: var(
      --ds-scrollslider-middle-justified-prev-control-background,
      ${r(_s.middleJustifiedPrevControlBackground)}
    );
  }

  :host([control-position='${r(Y.middleJustified)}'])
    .scrollslider__next-control {
    justify-content: end;
    background: var(
      --ds-scrollslider-middle-justified-next-control-background,
      ${r(_s.middleJustifiedNextControlBackground)}
    );
  }

  :host([control-position='${r(Y.middleEnd)}'])
    .scrollslider__controls {
    order: 4;
  }

  :host([control-position^='bottom']) .scrollslider__controls {
    order: 4;
  }

  :host([control-position='${r(Y.bottomJustified)}'])
    .scrollslider__controls {
    justify-content: space-between;
  }

  :host([control-position='${r(Y.bottomEnd)}'])
    .scrollslider__controls {
    justify-content: end;
  }
`,Fe={partialFocusNext:"onPartialFocusNext",partialFocusPrev:"onPartialFocusPrev"};var hh=Object.defineProperty,uh=Object.getOwnPropertyDescriptor,Z=(e,t,o,i)=>{for(var s=i>1?void 0:i?uh(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&hh(t,o,s),s};const ph="reimagine-scrollslider";n.Scrollslider=class extends ho{constructor(){super(...arguments),this.controlPosition=Y.topStart,this.hideControls=!1,this._scrollsliderItems=[],this._first=0,this._last=0,this._prevControlDisabled=!1,this._nextControlDisabled=!1,this._scrollsliderEvents=[],this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_handleBaseSlotChange(){this._setScrollsliderItems(),this._setButtonAttrs(),this._checkContainerOverflow()}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0}_handleControlSlotChange(){this._setButtonAttrs()}_checkContainerOverflow(){this._itemContainer.scrollWidth>this._itemContainer.clientWidth+2?this.hideControls=!1:this.hideControls=!0}_onScroll(){const t=new CustomEvent(dh.scroll,{cancelable:!0,bubbles:!0});this.dispatchEvent(t),!t.defaultPrevented&&this._setButtonAttrs()}_setScrollsliderItems(){this._scrollsliderItems=this._slot,this._scrollsliderItems.forEach(t=>{t.setAttribute("role","listitem")})}_atBeginning(){return Math.abs(this._itemContainer.scrollLeft)<=1}_atEnd(){return Math.abs(this._itemContainer.scrollLeft)+1>=this._itemContainer.scrollWidth-this._itemContainer.clientWidth}_setButtonAttrs(){const t=this._prevControlSlot.length>0?this._prevControlSlot[0]:this._prevControlDefault,o=this._nextControlSlot.length>0?this._nextControlSlot[0]:this._nextControlDefault;t.removeAttribute("disabled"),o.removeAttribute("disabled"),this._prevControlDisabled=!1,this._nextControlDisabled=!1,this._atBeginning()&&(t.matches(":focus")&&o.focus(),t.setAttribute("disabled",""),this._prevControlDisabled=!0),this._atEnd()&&(o.matches(":focus")&&t.focus(),o.setAttribute("disabled",""),this._nextControlDisabled=!0)}_scrollToNextItem(t){const o=t.target;if(o===this._scrollsliderItems[this._scrollsliderItems.length-1]){const i=this.dir==="ltr"?this._itemContainer.scrollWidth:this._itemContainer.scrollWidth*-1;window.requestAnimationFrame(()=>{this._itemContainer.scroll({left:i})})}else this.controlPosition===Y.middleJustified?o.scrollIntoView({block:"nearest",inline:"center"}):this.triggerNext()}_scrollToPrevItem(t){const o=t.target;o===this._scrollsliderItems[0]?window.requestAnimationFrame(()=>{this._itemContainer.scroll({left:0})}):this.controlPosition===Y.middleJustified?o.scrollIntoView({block:"nearest",inline:"center"}):this.triggerPrev()}_handleLeftRight(t){const o=t;(o.key===Q.ARROW_LEFT||o.key===Q.ARROW_RIGHT)&&o.preventDefault()}_scrollLeft(){const t=[],o=parseInt(getComputedStyle(this._itemContainer).columnGap,10);let i=0;if(this._scrollsliderItems.forEach(s=>{(this.dir==="ltr"&&s.getBoundingClientRect().left<this._itemContainer.getBoundingClientRect().left||this.dir==="rtl"&&s.getBoundingClientRect().right<=this._itemContainer.getBoundingClientRect().right)&&t.push(s)}),t.length>0){const s=this.dir==="ltr"?t.length-1:0;t[s].hasAttribute("partial")?i=t[s].getBoundingClientRect().left-this._itemContainer.getBoundingClientRect().left:i=(t[s].getBoundingClientRect().width+o)*-1}return i}_scrollRight(){const t=[],o=parseInt(getComputedStyle(this._itemContainer).columnGap,10);let i=0;if(this._scrollsliderItems.forEach(s=>{(this.dir==="ltr"&&s.getBoundingClientRect().left>=this._itemContainer.getBoundingClientRect().left||this.dir==="rtl"&&s.getBoundingClientRect().right>this._itemContainer.getBoundingClientRect().right)&&t.push(s)}),t.length>0){const s=this.dir==="rtl"?t.length-1:0;t[s].hasAttribute("partial")?i=t[s].getBoundingClientRect().right-this._itemContainer.getBoundingClientRect().right:i=t[s].getBoundingClientRect().width+o}return i}_renderOptionalSlot(t="scrollslider__first",o=this._firstSlotEmpty){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}prevControlTemplate(){const t={"scrollslider__prev-control-disabled":this._prevControlDisabled};return g`
      <div
        part="scrollslider__prev-control"
        class="scrollslider__prev-control ${si(t)}"
      >
        <slot
          name="scrollslider__prev-control"
          @slotchange="${this._handleControlSlotChange}"
          @click=${bs(200,this.triggerPrev,{atBegin:!0})}
        >
          <reimagine-button
            class="scrollslider__prev-control-default"
            icon-only
            appearance=${Po.buttonSecondary}
            size=${Ho.large}
            shape=${Bo.circle}
          >
            <reimagine-icon
              icon="arrow-${this.dir==="rtl"?"right":"left"}"
              size=${to.medium}
              aria-label=${this.msg("prev")||"Previous slide"}
              slot="button__icon"
            ></reimagine-icon>
          </reimagine-button>
        </slot>
      </div>
    `}nextControlTemplate(){const t={"scrollslider__next-control-disabled":this._nextControlDisabled};return g`
      <div
        part="scrollslider__next-control"
        class="scrollslider__next-control ${si(t)}"
      >
        <slot
          name="scrollslider__next-control"
          @slotchange="${this._handleControlSlotChange}"
          @click=${bs(200,this.triggerNext,{atBegin:!0})}
        >
          <reimagine-button
            class="scrollslider__next-control-default"
            icon-only
            appearance=${Po.buttonSecondary}
            size=${Ho.large}
            shape=${Bo.circle}
          >
            <reimagine-icon
              icon="arrow-${this.dir==="rtl"?"left":"right"}"
              size=${to.medium}
              aria-label=${this.msg("next")||"Next slide"}
              slot="button__icon"
            ></reimagine-icon>
          </reimagine-button>
        </slot>
      </div>
    `}controlsTemplate(){return g`
      <div part="scrollslider__controls" class="scrollslider__controls">
        ${this.prevControlTemplate()} ${this.nextControlTemplate()}
      </div>
    `}baseSlotTemplate(){return g`
      <div
        part="scrollslider__base"
        class="scrollslider__base"
        tabindex="-1"
        role="list"
        @scroll="${bs(60,this._onScroll)}"
      >
        <slot @slotchange=${this._handleBaseSlotChange}></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(()=>{this._setButtonAttrs(),this._checkContainerOverflow()}),this._resizeObserver.observe(this),this._scrollsliderEvents.push({el:this,type:Fe.partialFocusNext,handler:this._scrollToNextItem},{el:this,type:Fe.partialFocusPrev,handler:this._scrollToPrevItem},{el:this,type:"keydown",handler:this._handleLeftRight}),co(this._scrollsliderEvents)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._resizeObserver)==null||t.disconnect(),Yo(this._scrollsliderEvents)}triggerPrev(){if(this._atBeginning())return;const t=this.dir==="rtl"?this._scrollRight():this._scrollLeft();window.requestAnimationFrame(()=>{this._itemContainer.scrollBy({left:t})})}triggerNext(){if(this._atEnd())return;const t=this.dir==="rtl"?this._scrollLeft():this._scrollRight();window.requestAnimationFrame(()=>{this._itemContainer.scrollBy({left:t})})}render(){return g`
      ${this._renderOptionalSlot("scrollslider__first",this._firstSlotEmpty)}
      ${this.controlsTemplate()} ${this.baseSlotTemplate()}
      ${this._renderOptionalSlot("scrollslider__last",this._lastSlotEmpty)}
    `}},n.Scrollslider.styles=[ch],Z([c({attribute:"control-position",reflect:!0})],n.Scrollslider.prototype,"controlPosition",2),Z([c({attribute:"hide-controls",type:Boolean,reflect:!0})],n.Scrollslider.prototype,"hideControls",2),Z([c({reflect:!0})],n.Scrollslider.prototype,"theme",2),Z([bt(".scrollslider__prev-control reimagine-button")],n.Scrollslider.prototype,"_prevControlDefault",2),Z([bt(".scrollslider__next-control reimagine-button")],n.Scrollslider.prototype,"_nextControlDefault",2),Z([Dt({slot:"scrollslider__prev-control"})],n.Scrollslider.prototype,"_prevControlSlot",2),Z([Dt({slot:"scrollslider__next-control"})],n.Scrollslider.prototype,"_nextControlSlot",2),Z([bt(".scrollslider__base")],n.Scrollslider.prototype,"_itemContainer",2),Z([Dt()],n.Scrollslider.prototype,"_slot",2),Z([_({slot:"scrollslider__first"})],n.Scrollslider.prototype,"_firstSlot",2),Z([_({slot:"scrollslider__last"})],n.Scrollslider.prototype,"_lastSlot",2),Z([m()],n.Scrollslider.prototype,"_scrollsliderItems",2),Z([m()],n.Scrollslider.prototype,"_resizeObserver",2),Z([m()],n.Scrollslider.prototype,"_first",2),Z([m()],n.Scrollslider.prototype,"_last",2),Z([m()],n.Scrollslider.prototype,"_prevControlDisabled",2),Z([m()],n.Scrollslider.prototype,"_nextControlDisabled",2),Z([m()],n.Scrollslider.prototype,"_scrollsliderEvents",2),Z([m()],n.Scrollslider.prototype,"_firstSlotEmpty",2),Z([m()],n.Scrollslider.prototype,"_lastSlotEmpty",2),n.Scrollslider=Z([E(ph)],n.Scrollslider);const gh=y`
  :host {
    max-width: 100%;
    scroll-snap-align: var(
      --ds-scrollslider-item-scroll-snap-align,
      ${r({scrollSnapAlign:"start"}.scrollSnapAlign)}
    );
  }
`;var mh=Object.defineProperty,fh=Object.getOwnPropertyDescriptor,ce=(e,t,o,i)=>{for(var s=i>1?void 0:i?fh(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&mh(t,o,s),s};const bh="reimagine-scrollslider-item";n.ScrollsliderItem=class extends x{constructor(){super(...arguments),this.i18nManager=ts(),this.partial=!1,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_toggleListeners(){this.partial?(this.addEventListener("focusin",this._handleFocus),this.addEventListener("click",this._handleFocus)):(this.removeEventListener("focusin",this._handleFocus),this.removeEventListener("click",this._handleFocus))}_handleFocus(){var s;const t=((s=this.i18nManager)==null?void 0:s.dir)||"ltr",o=t==="rtl"?Fe.partialFocusNext:Fe.partialFocusPrev,i=t==="rtl"?Fe.partialFocusPrev:Fe.partialFocusNext;this.parentElement&&this.getBoundingClientRect().left<this.parentElement.getBoundingClientRect().left?this.dispatchEvent(new CustomEvent(o,{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent(i,{bubbles:!0,composed:!0}))}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0}_renderOptionalSlot(t="scrollslider-item__first",o=this._firstSlotEmpty){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}connectedCallback(){super.connectedCallback();const t={root:this.parentElement,rootMargin:"0px",threshold:.99};this._observer=new IntersectionObserver(o=>{o.forEach(i=>{this.partial=!i.isIntersecting,this._toggleListeners()})},t),this._observer.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._observer)==null||t.disconnect()}render(){return g`
      ${this._renderOptionalSlot("scrollslider-item__first",this._firstSlotEmpty)}
      <div part="scrollslider-item__base" class="scrollslider-item__base">
        <slot></slot>
      </div>
      ${this._renderOptionalSlot("scrollslider-item__last",this._lastSlotEmpty)}
    `}},n.ScrollsliderItem.styles=[gh],ce([c({type:Boolean,reflect:!0})],n.ScrollsliderItem.prototype,"partial",2),ce([c({reflect:!0})],n.ScrollsliderItem.prototype,"theme",2),ce([_({slot:"scrollslider-item__first"})],n.ScrollsliderItem.prototype,"_firstSlot",2),ce([_({slot:"scrollslider-item__last"})],n.ScrollsliderItem.prototype,"_lastSlot",2),ce([m()],n.ScrollsliderItem.prototype,"_firstSlotEmpty",2),ce([m()],n.ScrollsliderItem.prototype,"_lastSlotEmpty",2),ce([m()],n.ScrollsliderItem.prototype,"_observer",2),n.ScrollsliderItem=ce([E(bh)],n.ScrollsliderItem);const vs={display:"flex",flexDirection:"column",gap:"var(--ds-spacing-xl, 2rem)"},go={bodyColor:"var(--ds-theme-foreground-base-strong)",bodyDisplay:"flex",bodyJustifyContent:"space-between",bodyAlignItems:"center",bodyMarginInlineEnd:"var(--ds-spacing-l)"},_h={buttonDisplay:"none"},vh=y`
  :host {
    display: var(--ds-section-title-host-display, ${r(vs.display)});
    flex-direction: var(
      --ds-section-title-host-flex-direction,
      ${r(vs.flexDirection)}
    );
    gap: var(--ds-section-title-host-gap, ${r(vs.gap)});
  }

  :host [part='section-title__body'] {
    color: var(--ds-section-title-body-color, ${r(go.bodyColor)});
    font-weight: var(--ds-button-font-weight, ${r(Ji.fontWeight)});
    font-size: var(--ds-button-font-size, ${r(Ji.fontSize)});
    line-height: var(--ds-button-line-height, ${r(Ji.lineHeight)});
    display: var(--ds-section-title-body-display, ${r(go.bodyDisplay)});
    justify-content: var(
      --ds-section-title-body-justify-content,
      ${r(go.bodyJustifyContent)}
    );
    align-items: var(
      --ds-section-title-body-align-items,
      ${r(go.bodyAlignItems)}
    );
  }

  :host ::slotted([slot='section-title__body-text']) {
    margin-inline-end: var(
      --ds-section-title-margin-inline-end,
      ${r(go.bodyMarginInlineEnd)}
    );
  }

  :host ::slotted([slot='section-title__body-button']) {
    display: var(
      --ds-section-title-button-display,
      ${r(_h.buttonDisplay)}
    );
  }
`,yh=y`
  @media (min-width: ${r(lt.md)}) {
    :host ::slotted([slot='section-title__body-button']) {
      --ds-section-title-button-display: block;
    }
  }
`;var Ch=Object.defineProperty,Sh=Object.getOwnPropertyDescriptor,ct=(e,t,o,i)=>{for(var s=i>1?void 0:i?Sh(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&Ch(t,o,s),s};const $h="reimagine-section-title";n.SectionTitle=class extends x{constructor(){super(...arguments),this._buttonSlotEmpty=!0,this._dividerTopSlotEmpty=!0,this._dividerBottomSlotEmpty=!0,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_handleSlotChange(){this._buttonSlotEmpty=this._buttonSlot.length===0,this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0,this._dividerTopSlotEmpty=this._dividerTopSlot.length===0,this._dividerBottomSlotEmpty=this._dividerBottomSlot.length===0}updated(){this._dividerTopSlotEmpty||this._dividerTopSlot[0].setAttribute("size","m"),this._dividerBottomSlotEmpty||this._dividerBottomSlot[0].setAttribute("size","m"),this._buttonSlotEmpty||this._buttonSlot[0].querySelectorAll("reimagine-button").forEach(i=>{i.setAttribute("size","large")})}_renderOptionalSlot(t,o){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return g`
      ${this._renderOptionalSlot("section-title__first",this._firstSlotEmpty)}
      ${this.topDivider?g`<slot
            name="section-title__divider-top"
            @slotchange="${this._handleSlotChange}"
          ></slot>`:""}
      <div class="section-title__body" part="section-title__body">
        <slot name="section-title__body-text"></slot>
        ${this._renderOptionalSlot("section-title__body-button",this._buttonSlotEmpty)}
      </div>
      ${this.bottomDivider?g`<slot
            name="section-title__divider-bottom"
            @slotchange="${this._handleSlotChange}"
          ></slot>`:""}
      ${this._renderOptionalSlot("section-title__last",this._lastSlotEmpty)}
    `}},n.SectionTitle.styles=[vh,yh],ct([_({slot:"section-title__body-button"})],n.SectionTitle.prototype,"_buttonSlot",2),ct([_({slot:"section-title__divider-top"})],n.SectionTitle.prototype,"_dividerTopSlot",2),ct([_({slot:"section-title__divider-bottom"})],n.SectionTitle.prototype,"_dividerBottomSlot",2),ct([_({slot:"section-title__first"})],n.SectionTitle.prototype,"_firstSlot",2),ct([_({slot:"section-title__last"})],n.SectionTitle.prototype,"_lastSlot",2),ct([m()],n.SectionTitle.prototype,"_buttonSlotEmpty",2),ct([m()],n.SectionTitle.prototype,"_dividerTopSlotEmpty",2),ct([m()],n.SectionTitle.prototype,"_dividerBottomSlotEmpty",2),ct([m()],n.SectionTitle.prototype,"_firstSlotEmpty",2),ct([m()],n.SectionTitle.prototype,"_lastSlotEmpty",2),ct([c({type:Boolean,reflect:!0,attribute:"top-divider"})],n.SectionTitle.prototype,"topDivider",2),ct([c({type:Boolean,reflect:!0,attribute:"bottom-divider"})],n.SectionTitle.prototype,"bottomDivider",2),n.SectionTitle=ct([E($h)],n.SectionTitle);const ys={display:"flex",flexDirection:"column",gap:"var(--ds-spacing-s, 0.75rem)"},di={fontSize:"var(--ds-label-s-font-size, 0.75rem)",fontWeight:"var(--ds-label-s-font-weight, 600)",lineHeight:"var(--ds-label-s-line-height, 1rem)",color:"var(--ds-theme-foreground-base-highlight, #005597)"},Cs={display:"flex",flexDirection:"column",gap:"var(--ds-spacing-s, 0.75rem)"},xh=y`
  :host {
    display: var(--ds-share-display, ${r(ys.display)});
    flex-direction: var(--ds-share-flex-direction, ${r(ys.flexDirection)});
    gap: var(--ds-share-gap, ${r(ys.gap)});
  }

  ol {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: var(--ds-share-links-display, ${r(Cs.display)});
    flex-direction: var(
      --ds-share-links-flex-direction,
      ${r(Cs.flexDirection)}
    );
    gap: var(--ds-share-links-gap, ${r(Cs.gap)});
  }

  ::slotted([slot='share__label']) {
    font-size: var(--ds-share-label-font-size, ${r(di.fontSize)});
    font-weight: var(--ds-share-label-font-weight, ${r(di.fontWeight)});
    line-height: var(--ds-share-label-line-height, ${r(di.lineHeight)});
    color: var(--ds-share-label-color, ${r(di.color)});
  }
`,wh=y`
  @media (min-width: ${r(lt.md)}) {
    :host {
      --ds-share-gap: var(--ds-spacing-m);
    }

    ol {
      --ds-share-links-flex-direction: row;
      --ds-share-links-gap: var(--ds-spacing-xl);
    }
  }
`;var Eh=Object.defineProperty,kh=Object.getOwnPropertyDescriptor,Ue=(e,t,o,i)=>{for(var s=i>1?void 0:i?kh(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&Eh(t,o,s),s};const Lh="reimagine-share";n.Share=class extends x{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0,this.requestUpdate()}_renderOptionalSlot(t,o){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}firstUpdated(){this._handleSlotChange()}updated(){const t=this.renderRoot.querySelector('slot[name="share__link"]');t&&t.assignedNodes({flatten:!0}).forEach(i=>{i.setAttribute("role","listitem")})}render(){return g`
      ${this._renderOptionalSlot("share__first",this._firstSlotEmpty)}
      <slot name="share__label"></slot>
      <ol>
        <slot @slotchange=${this._handleSlotChange} name="share__link"></slot>
      </ol>
      ${this._renderOptionalSlot("share__last",this._lastSlotEmpty)}
    `}},n.Share.styles=[xh,wh],Ue([_({slot:"share__first"})],n.Share.prototype,"_firstSlot",2),Ue([_({slot:"share__last"})],n.Share.prototype,"_lastSlot",2),Ue([m()],n.Share.prototype,"_firstSlotEmpty",2),Ue([m()],n.Share.prototype,"_lastSlotEmpty",2),Ue([c({reflect:!0})],n.Share.prototype,"theme",2),n.Share=Ue([E(Lh)],n.Share);const xe={display:"flex",alignItems:"center",gap:"var(--ds-spacing-2xs, 0.25rem)",color:"var(--ds-theme-foreground-base-subtle, #17253D)",iconDisplay:"block",iconFontSize:"var(--ds-label-s-font-size, 0.75rem)",iconColor:"var(--ds-color-golden-yellow-500, currentColor)"},Ph=y`
  :host {
    --ds-star-rating-font-size: ${r(xe.iconFontSize)};
    --ds-star-rating-icon-color: ${r(xe.iconColor)};
    --ds-star-rating-icon-display: ${r(xe.iconDisplay)};

    display: var(--ds-star-rating-display, ${r(xe.display)});
    align-items: var(--ds-star-rating-align-items, ${r(xe.alignItems)});
    gap: var(--ds-star-rating-gap, ${r(xe.gap)});
    color: var(--ds-star-rating-color, ${r(xe.color)});
  }

  ::slotted([slot='star-rating__asset']) {
    --ds-icon-color: var(--ds-star-rating-icon-color);
    display: var(--ds-star-rating-icon-display);
  }

  ::slotted([slot='star-rating__content']) {
    font-size: var(--ds-star-rating-font-size);
  }
`;var Hh=Object.defineProperty,Bh=Object.getOwnPropertyDescriptor,Th=(e,t,o,i)=>{for(var s=i>1?void 0:i?Bh(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&Hh(t,o,s),s};const Oh="reimagine-star-rating";n.StarRating=class extends x{render(){return g`
      <div part="star-rating__asset" class="star-rating__asset">
        <slot name="star-rating__asset"></slot>
      </div>
      <div part="star-rating__content" class="star-rating__content">
        <slot name="star-rating__content"></slot>
      </div>
    `}},n.StarRating.styles=[Ph],n.StarRating=Th([E(Oh)],n.StarRating);const mo={fontSize:"var(--ds-label-m-font-size, 0.875rem)",fontWeight:"var(--ds-label-m-font-weight, 600)",lineHeight:"var(--ds-label-m-line-height, 1.25rem)",color:"var(--ds-theme-foreground-base-subtle, #17253D)",gap:"var(--ds-spacing-xs, 0.5rem)"},ci={fontWeight:"var(--ds-body-m-font-weight, 400)",fontSize:"var(--ds-heading-xl-font-size, 2.5rem)",lineHeight:"var(--ds-heading-xl-line-height, 3rem)",color:"var(--ds-theme-foreground-base-strong, #0E1726)"},hi={fontWeight:"var(--ds-body-m-font-weight, 400)",fontSize:"var(--ds-heading-m-font-size, 1.75rem)",color:"var(--ds-theme-foreground-base-strong, #0E1726)",lineHeight:"var(--ds-heading-m-line-height, 2.25rem)"},Ah=y`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--ds-stat-gap, ${r(mo.gap)});
  }

  :host([type='large'])::part(stat__body) {
    display: flex;
    flex-direction: row;
    gap: var(--ds-spacing-xs, 0.5rem);
    align-items: baseline;
  }

  :host([type='large--stacked'])::part(stat__body) {
    display: flex;
    flex-direction: column;
    gap: var(--ds-spacing-xs, 0.5rem);
  }

  :host([type='large']) ::slotted([slot='stat__title']),
  :host([type='large--stacked']) ::slotted([slot='stat__title']) {
    font-weight: var(--ds-stat-title-font-weight, ${r(ci.fontWeight)});
    font-size: var(--ds-stat-title-font-size, ${r(ci.fontSize)});
    line-height: var(--ds-stat-title-line-height, ${r(ci.lineHeight)});
    color: var(--ds-stat-title-color, ${r(ci.color)});
  }

  :host([type='large'])::part(stat__label),
  :host([type='large--stacked'])::part(stat__label),
  :host([type='large--stacked'])::part(stat__title) {
    font-size: var(--ds-stat-font-size, ${r(mo.fontSize)});
    font-weight: var(--ds-stat-font-weight, ${r(mo.fontWeight)});
    line-height: var(--ds-stat-line-height, ${r(mo.lineHeight)});
    color: var(--ds-stat-color, ${r(mo.color)});
  }

  :host([type='large'])::part(stat__title) {
    font-weight: var(
      --ds-stat-description-font-weight,
      ${r(hi.fontWeight)}
    );
    font-size: var(
      --ds-stat-description-font-size,
      ${r(hi.fontSize)}
    );
    line-height: var(
      --ds-stat-description-line-height,
      ${r(hi.lineHeight)}
    );
    color: var(--ds-stat-description-color, ${r(hi.color)});
  }
`;var Mh=Object.defineProperty,Ih=Object.getOwnPropertyDescriptor,we=(e,t,o,i)=>{for(var s=i>1?void 0:i?Ih(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&Mh(t,o,s),s};const Dh="reimagine-stat";n.Stat=class extends x{constructor(){super(...arguments),this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0}_renderOptionalSlot(t,o){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_configurationRender(){let t;return this.type==="large"||this.type==="large--stacked"?t=g`
        <div part="stat__label" class="stat__label">
          <slot name="stat__label"></slot>
          <slot name="stat__label-footnote"></slot>
        </div>
        <div part="stat__body" class="stat__body">
          <slot name="stat__title"></slot>
          <div part="stat__title" class="stat__title">
            <slot name="stat__description"></slot>
            <slot name="stat__title-footnote"></slot>
          </div>
        </div>
      `:t=g`<slot></slot>`,t}render(){return g`
      ${this._renderOptionalSlot("stat__first",this._firstSlotEmpty)}
      ${this._configurationRender()} ${this._renderOptionalSlot("stat__last",this._lastSlotEmpty)}
    `}},n.Stat.styles=[Ah],we([_({slot:"stat__first"})],n.Stat.prototype,"_firstSlot",2),we([_({slot:"stat__last"})],n.Stat.prototype,"_lastSlot",2),we([m()],n.Stat.prototype,"_firstSlotEmpty",2),we([m()],n.Stat.prototype,"_lastSlotEmpty",2),we([c({reflect:!0})],n.Stat.prototype,"type",2),we([c({reflect:!0})],n.Stat.prototype,"theme",2),n.Stat=we([E(Dh)],n.Stat);const Rh=y`
  :host {
    position: sticky;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-self: flex-start;
    background-color: var(
      --ds-sticky-background-color,
      ${r({backgroundColor:"var(--ds-theme-background-neutral-fade, #f7f7f7)"}.backgroundColor)}
    );
    box-sizing: border-box;
  }

  :host([direction='top']) {
    top: 0;
  }

  :host([direction='bottom']) {
    bottom: 0;
  }

  :host(:not(.stuck)) ::slotted(.show-stuck) {
    display: none;
  }

  :host(.stuck) ::slotted(.hide-stuck) {
    display: none;
  }
`,Ss={"size-aware":"size-aware",always:"always",off:"off"},Et={sticky:"sticky",stuck:"stuck",getHeight:"get-height"},he={top:"top",bottom:"bottom"},Wn={onStuck:"onSticky",onUnstuck:"onStatic"};var zh=Object.defineProperty,Nh=Object.getOwnPropertyDescriptor,j=(e,t,o,i)=>{for(var s=i>1?void 0:i?Nh(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&zh(t,o,s),s};const Vh="reimagine-sticky";n.Sticky=class extends x{constructor(){super(),this.direction=he.top,this.observerBehavior=Ss["size-aware"],this.extraScrollPadding=12,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._isStuck=!1,this._enableObserver=!0,this._observer=null,this._looseWidth=this._calculateLooseWidth(),this._observedWindowDimensions={width:window.innerWidth,height:window.innerHeight},this._stickyEvents=[],this._onResize=()=>{this._setVw(),window.innerHeight!==this._observedWindowDimensions.height&&this._setUp()},this._setVw(),this._resizeObserver=new ResizeObserver(()=>{requestAnimationFrame(()=>{const t={width:window.innerWidth,height:window.innerHeight};this._looseWidth=this._calculateLooseWidth(),this._setUp(JSON.stringify(t)===JSON.stringify(this._observedWindowDimensions)),this._observedWindowDimensions=t})})}connectedCallback(){super.connectedCallback(),this._stickyEvents.push({el:window,type:"resize",handler:ai(200,this._onResize.bind(this))}),co(this._stickyEvents)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver&&this._resizeObserver.disconnect(),Yo(this._stickyEvents),this._updateScrollPadding(!0)}updated(t){(t.has("extraScrollPadding")||t.has("direction"))&&this._updateScrollPadding(!0),t.has("observerBehavior")&&this._setUp()}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0}_handleBaseSlotChange(){this._defaultSlot.forEach(t=>{this._resizeObserver.observe(t)}),this._setUp()}_updateScrollPadding(t=!1){const o=document.documentElement,i=this.getBoundingClientRect().height;t&&(o.style.removeProperty("scroll-padding-top"),o.style.removeProperty("scroll-padding-bottom")),this.direction===he.top?o.style.scrollPaddingTop=i+this.extraScrollPadding+"px":this.direction===he.bottom&&(o.style.scrollPaddingBottom=i+this.extraScrollPadding+"px")}_setUp(t=!1){this._calculateHeights()&&this._createObserver(),t?this._setObserverStatus(this._enableObserver):this.setObserver()}_calculateHeights(){const t=this._stuckHeight,o=this._looseHeight,i={cssSelectors:["margin"]};return this._setStickyHeight(!0),this.classList.contains(Et.stuck)?(this._stuckHeight=Ro(this,i),this.classList.remove(Et.stuck),this._looseHeight=Ro(this,i),this.classList.add(Et.stuck)):(this._looseHeight=Ro(this,i),this.classList.add(Et.getHeight),this.classList.add(Et.stuck),this._stuckHeight=Ro(this,i),this.classList.remove(Et.stuck),this.classList.remove(Et.getHeight)),this._heightDif=this._looseHeight-this._stuckHeight,this._setStickyHeight(),t!==this._stuckHeight||o!==this._looseHeight}_setStickyHeight(t=!1){let o=null,i=null;if(this.style.setProperty("margin-top",i),!t){o=`${this._stuckHeight}px`;const{marginTop:s}=getComputedStyle(this);i=`${this._heightDif+parseInt(s,10)}px`}this.style.setProperty("height",o),i&&this.style.setProperty("margin-top",i)}_calculateLooseWidth(){let t=this.getBoundingClientRect().width;return this.classList.contains(Et.stuck)&&(this.classList.remove(Et.stuck),t=this.getBoundingClientRect().width,this.classList.add(Et.stuck)),t}_setVw(){const t=document.documentElement.clientWidth;this.style.setProperty("--vw",`${t}px`)}_hasPrevOrNextSibling(){return this.direction===he.bottom?this.nextElementSibling:this.previousElementSibling}_createObserver(){this._observer&&this._observer.disconnect();const t=(document.documentElement.clientWidth-this._looseWidth)/2,o=this._hasPrevOrNextSibling()?-1:-2,i=this._hasPrevOrNextSibling()?document:this.parentElement,s={root:i,rootMargin:`${o}px ${t}px ${o}px ${t}px`,threshold:[.99,.995,.999,1]};this._observer=new IntersectionObserver(([a])=>{if(this._enableObserver){const l=this._isStuck;if(i===document){let d=Math.ceil(a.intersectionRect.top)===-o;this.direction===he.bottom&&(d=Math.floor(a.intersectionRect.bottom)===document.documentElement.clientHeight+o),this._isStuck=a.intersectionRatio<1&&d}else this._isStuck=a.isIntersecting;if(this.direction===he.bottom&&Math.floor(this.getBoundingClientRect().bottom)===window.innerHeight&&(this._isStuck=!0),l!==void 0&&l!==this._isStuck)if(this._onStickyChange(),this._isStuck){const d=new CustomEvent(Wn.onStuck,{bubbles:!0});this.dispatchEvent(d)}else{const d=new CustomEvent(Wn.onUnstuck,{bubbles:!0});this.dispatchEvent(d)}}},s),this._observer.observe(this)}_stickyExceedsAcceptedHeight(){return this._stuckHeight>window.innerHeight/3}setObserver(){switch(this.observerBehavior){case Ss.off:{this._setObserverStatus(!1);break}case Ss.always:{this._setObserverStatus(!0);break}default:this._stickyExceedsAcceptedHeight()?this._setObserverStatus(!1):this._setObserverStatus(!0)}}_setObserverStatus(t){this._enableObserver=t;let o=null;t||(o="initial",this._isStuck=!1),this.style.setProperty("position",o),this._setIsStuck(),this._onStickyChange()}_setIsStuck(){if(this._enableObserver){const t=this.direction===he.bottom&&this.getBoundingClientRect().bottom===window.innerHeight,o=this.direction===he.top&&this.getBoundingClientRect().top===0;(t||o)&&(this._isStuck=!0)}}_onStickyChange(){this.classList.toggle(Et.stuck,this._isStuck),this._updateScrollPadding()}getStuckHeight(){return this._stuckHeight}render(){return g`
      <div
        part="sticky__first"
        class="sticky__first"
        style="${this._firstSlotEmpty?"display: none;":""}"
      >
        <slot name="sticky__first" @slotchange="${this._handleSlotChange}"></slot>
      </div>
      <div part="sticky__base" class="sticky__base">
        <slot @slotchange="${this._handleBaseSlotChange}"></slot>
      </div>
      <div
        part="sticky__last"
        class="sticky__last"
        style="${this._lastSlotEmpty?"display: none":""}"
      >
        <slot name="sticky__last" @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}},n.Sticky.styles=[Rh],j([c({reflect:!0})],n.Sticky.prototype,"direction",2),j([c({attribute:"observer-behavior"})],n.Sticky.prototype,"observerBehavior",2),j([c({type:Number,attribute:"extra-scroll-padding"})],n.Sticky.prototype,"extraScrollPadding",2),j([_({slot:"sticky__first"})],n.Sticky.prototype,"_firstSlot",2),j([_({slot:"sticky__last"})],n.Sticky.prototype,"_lastSlot",2),j([m()],n.Sticky.prototype,"_firstSlotEmpty",2),j([m()],n.Sticky.prototype,"_lastSlotEmpty",2),j([m()],n.Sticky.prototype,"_isStuck",2),j([m()],n.Sticky.prototype,"_enableObserver",2),j([m()],n.Sticky.prototype,"_observer",2),j([m()],n.Sticky.prototype,"_stuckHeight",2),j([m()],n.Sticky.prototype,"_looseHeight",2),j([m()],n.Sticky.prototype,"_looseWidth",2),j([m()],n.Sticky.prototype,"_heightDif",2),j([m()],n.Sticky.prototype,"_resizeObserver",2),j([m()],n.Sticky.prototype,"_observedWindowDimensions",2),j([m()],n.Sticky.prototype,"_stickyEvents",2),j([Dt()],n.Sticky.prototype,"_defaultSlot",2),n.Sticky=j([E(Vh)],n.Sticky);const Zh=y`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  :host(:focus) {
    ${Ir}
  }
`;var Fh=Object.defineProperty,Uh=Object.getOwnPropertyDescriptor,Ee=(e,t,o,i)=>{for(var s=i>1?void 0:i?Uh(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&Fh(t,o,s),s};const fo="reimagine-tab";let jh=0;n.Tab=class extends x{constructor(){super(...arguments),this._componentId=++jh,this._panelIdFallback=`tab${this._componentId}`,this._componentIdFallback=`${this._panelIdFallback}-tab`,this.active=!1,this.tabPanelId=null,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}willUpdate(){this.id=this.id.length>0?this.id:this._componentIdFallback,this.tabPanelId=this.tabPanelId&&this.tabPanelId.length>0?this.tabPanelId:this._panelIdFallback,this.setAttribute("tabindex",this.active?"0":"-1")}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0}render(){return g`
      <span
        part="tab__first"
        class="tab__first"
        style="${this._firstSlotEmpty?"display: none":M}"
      >
        <slot name="tab__first" @slotchange=${this._handleSlotChange}></slot>
      </span>
      <span part="tab__base" class="tab__base">
        <slot></slot>
      </span>
      <span
        part="tab__last"
        class="tab__last"
        style="${this._lastSlotEmpty?"display: none":M}"
      >
        <slot name="tab__last" @slotchange=${this._handleSlotChange}></slot>
      </span>
    `}},n.Tab.styles=[Zh],Ee([c({type:Boolean,reflect:!0})],n.Tab.prototype,"active",2),Ee([c({attribute:"tab-panel-id"})],n.Tab.prototype,"tabPanelId",2),Ee([_({slot:"tab__first"})],n.Tab.prototype,"_firstSlot",2),Ee([_({slot:"tab__last"})],n.Tab.prototype,"_lastSlot",2),Ee([m()],n.Tab.prototype,"_firstSlotEmpty",2),Ee([m()],n.Tab.prototype,"_lastSlotEmpty",2),n.Tab=Ee([E(fo)],n.Tab);const Wh=y`
  :host .tab-panel__base {
    display: none;
  }

  :host([active]) .tab-panel__base {
    display: block;
  }

  /* Prevents double VFI in Firefox */
  :host(:focus) {
    outline: none !important;
  }

  :host :focus {
    ${Oe}
  }

  .tab-panel__sr-button:not(:active):not(:focus) {
    ${Lo}
  }
`;var Gh=Object.defineProperty,Xh=Object.getOwnPropertyDescriptor,mt=(e,t,o,i)=>{for(var s=i>1?void 0:i?Xh(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&Gh(t,o,s),s};const qh="reimagine-tab-panel";let Jh=0;n.TabPanel=class extends ho{constructor(){super(...arguments),this._attrId=++Jh,this._componentIdFallback=`tab${this._attrId}`,this._tabIdFallback=`${this._componentIdFallback}-tab`,this.active=!1,this.tabId=null,this.tabLabel=null,this.tab=null,this._show=!0,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tabpanel"),this.setAttribute("tabindex","0")}willUpdate(){var t;this.id=this.id.length>0?this.id:this._componentIdFallback,this.tabId=this.tabId&&this.tabId.length>0?this.tabId:this._tabIdFallback,this.tab=Ii(this,`#${this.tabId}`),this.tabLabel=this.tabLabel&&this.tabLabel.length>0?this.tabLabel:(t=this.tab)==null?void 0:t.textContent}async updated(t){t.has("active")&&(await this.updateComplete,Vr(this.base),this._show=this.active)}_handleClick(t){this.tab&&this.tab.focus(),t.preventDefault()}_handleSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0}render(){const t={show:this._show};return g`
      <div
        part="tab-panel__first"
        class="tab-panel__first"
        style="${this._firstSlotEmpty?"display: none":M}"
      >
        <slot name="tab-panel__first" @slotchange=${this._handleSlotChange}></slot>
      </div>
      <div part="tab-panel__base" class="tab-panel__base ${si(t)}" tabindex="0">
        <slot></slot>
        <button
          part="tab-panel__sr-button"
          class="tab-panel__sr-button"
          @click="${this._handleClick}"
        >
          ${this.msg("back",{label:this.tabLabel||"tab"})||`Back to ${this.tabLabel||"tab"}`}
        </button>
      </div>
      <div
        part="tab-panel__last"
        class="tab-panel__last"
        style="${this._lastSlotEmpty?"display: none":M}"
      >
        <slot name="tab-panel__last" @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}},n.TabPanel.shadowRootOptions={...x.shadowRootOptions,delegatesFocus:!0},n.TabPanel.styles=[Wh],mt([c({type:Boolean,reflect:!0})],n.TabPanel.prototype,"active",2),mt([c({attribute:"tab-id"})],n.TabPanel.prototype,"tabId",2),mt([c({attribute:"tab-label"})],n.TabPanel.prototype,"tabLabel",2),mt([m()],n.TabPanel.prototype,"tab",2),mt([m()],n.TabPanel.prototype,"_show",2),mt([bt(".tab-panel__base")],n.TabPanel.prototype,"base",2),mt([Dt({flatten:!0})],n.TabPanel.prototype,"slotItems",2),mt([_({slot:"tab-panel__first"})],n.TabPanel.prototype,"_firstSlot",2),mt([_({slot:"tab-panel__last"})],n.TabPanel.prototype,"_lastSlot",2),mt([m()],n.TabPanel.prototype,"_firstSlotEmpty",2),mt([m()],n.TabPanel.prototype,"_lastSlotEmpty",2),n.TabPanel=mt([E(qh)],n.TabPanel);const Yh=y`
  :host {
    display: block;
  }
`,Qh={center:"center",start:"start"},ui={hide:"onHide",hidden:"onHidden",show:"onShow",shown:"onShown"},Kh={horizontal:"horizontal",vertical:"vertical"};var t2=Object.defineProperty,e2=Object.getOwnPropertyDescriptor,ot=(e,t,o,i)=>{for(var s=i>1?void 0:i?e2(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&t2(t,o,s),s};const o2="reimagine-tabs";n.Tabs=class extends ho{constructor(){super(...arguments),this.alignment=Qh.center,this.defaultTabIndex=0,this.orientation=Kh.horizontal,this.updateHistory=!1,this._tabs=[],this._tabPanels=[],this._activeTabIndex=0,this._activeTabPanelIndex=0,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._handlePopState=()=>{const{hash:t}=window.location;if(t.length>0&&this._tabs.length>0){const o=this._tabPanels.find(i=>i.id===t.slice(1));if(o&&o.tab)this._setActiveTab(o.tab),this._handleScrollAndFocus(this._activeTab);else{const i=this._tabPanels.find(s=>s.slotItems.find(a=>a.id===t.slice(1)));i&&i.tab&&(this._setActiveTab(i.tab),this._handleScrollAndFocus(this._activeTab))}}else this._setActiveTab(this._tabs[this.defaultTabIndex])}}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",this._handlePopState),this._initialHash=window.location.hash}disconnectedCallback(){window.removeEventListener("popstate",this._handlePopState),super.disconnectedCallback()}_handleScrollAndFocus(t){t&&t.addEventListener(ee,()=>{t&&(t.scrollIntoView(!0),t.focus())},{once:!0})}_handleClick(t){const i=t.target.closest(fo);i!==null&&this._setActiveTab(i)}_handleKeyDown(t){const i=t.target.closest(fo);switch(t.key){case Q.SPACE:case Q.ENTER:{i!==null&&(this._setActiveTab(i),t.preventDefault());break}case Q.HOME:case Q.END:case Q.ARROW_LEFT:case Q.ARROW_RIGHT:{this._handleDirectionKey(t.key),t.preventDefault();break}case Q.TAB:{this._activeTab&&this._activeTab.setAttribute("tabindex","0"),this._handleTabKey(t);break}}}_handleDirectionKey(t){const o=this._tabs.find(s=>s.matches(":focus")),i=this.dir==="rtl";if((o==null?void 0:o.tagName.toLowerCase())===fo){let s=this._tabs.indexOf(o);switch(t){case Q.HOME:{s=0;break}case Q.END:{s=this._tabs.length-1;break}case(i?Q.ARROW_RIGHT:Q.ARROW_LEFT):{s--;break}case(i?Q.ARROW_LEFT:Q.ARROW_RIGHT):{s++;break}}s<0&&(s=this._tabs.length-1),s>this._tabs.length-1&&(s=0),this._tabs[s].focus()}}_handleTabKey(t){const o=this._tabs.find(i=>i.matches(":focus"));o&&this._tabs.indexOf(o)>this._activeTabIndex&&(this._tabPanels[this._activeTabPanelIndex].focus(),t.preventDefault())}_setActiveTab(t){if(t!==this._activeTab){const o=this._activeTab;this._activeTab=t;const i=new CustomEvent(ui.hide,{detail:{relatedTarget:this._activeTab}}),s=new CustomEvent(ui.show,{detail:{relatedTarget:o}});if(o&&o.dispatchEvent(i),this._activeTab.dispatchEvent(s),s.defaultPrevented||i.defaultPrevented)return;this._tabs.forEach((C,S)=>{var $;C===this._activeTab?(C.active=!0,C.setAttribute("aria-selected","true"),this._activeTabIndex=S,this._activeTabPanelIndex=S):(C.active=!1,C.setAttribute("aria-selected","false"),($=this._tabPanels[S])==null||$.base.classList.remove("show"))});const a=new CustomEvent(ui.hidden,{detail:{relatedTarget:this._activeTab}}),l=new CustomEvent(ui.shown,{detail:{relatedTarget:o}});o&&o.dispatchEvent(a),this._activeTab.dispatchEvent(l);const{hash:d}=window.location,h=`#${this._activeTab.tabPanelId}`,{title:u}=document,{state:p}=window.history,f=!d&&this._activeTabIndex!==this.defaultTabIndex,b=d&&this._tabPanels[this._activeTabPanelIndex]&&!this._tabPanels[this._activeTabPanelIndex].querySelector(d);if((f||b&&d!==h)&&(this.updateHistory?window.history.pushState(p,u,h):window.history.replaceState(p,u,h)),this._tabPanels.length>0){const C=this._tabPanels[this._activeTabPanelIndex];if(C){const S=Io(C.base);C.addEventListener(ee,()=>this._completeTransitionEnd(C),{once:!0}),Do(C,S)}}}}_completeTransitionEnd(t){this._tabPanels.forEach(o=>{o===t?o.active=!0:o.active=!1})}_handleFirstLastSlotChange(){this._firstSlotEmpty=this._firstSlot.length===0,this._lastSlotEmpty=this._lastSlot.length===0}_handleBaseSlotChange(t){const o=t.target;this._tabs=[...o.assignedElements()].filter(s=>s.tagName.toLowerCase()===fo);let i=null;this._tabs.forEach(s=>{s.setAttribute("role","tab");const a=Ii(s,`#${s.tabPanelId}`);a&&(this._tabPanels.push(a),s.setAttribute("aria-controls",s.tabPanelId||""),a.setAttribute("aria-labelledby",s.id)),s.active&&(i=s)}),i?(this._activeTabIndex=this._tabs.indexOf(i),this.defaultTabIndex=this._activeTabIndex):this._activeTabIndex=this.defaultTabIndex,this._initialHash?(this._initialHash="",this._handlePopState()):this._setActiveTab(this._tabs[this._activeTabIndex])}show(t){const o=this._tabs.find(i=>i.tabPanelId===t);o&&this._setActiveTab(o)}render(){return g`
      <div
        part="tabs__first"
        class="tabs__first"
        style="${this._firstSlotEmpty?"display: none":M}"
      >
        <slot name="tabs__first" @slotchange=${this._handleFirstLastSlotChange}></slot>
      </div>
      <div
        part="tabs__base"
        class="tabs__base"
        @click="${this._handleClick}"
        @keydown="${this._handleKeyDown}"
        role="tablist"
      >
        <slot @slotchange="${this._handleBaseSlotChange}"></slot>
      </div>
      <div part="tabs__tabpanel" class="tabs__tabpanel">
        <slot name="tabs__tabpanel"></slot>
      </div>
      <div
        part="tabs__last"
        class="tabs__last"
        style="${this._lastSlotEmpty?"display: none":M}"
      >
        <slot name="tabs__last" @slotchange=${this._handleFirstLastSlotChange}></slot>
      </div>
    `}},n.Tabs.styles=[Yh],ot([c({reflect:!0})],n.Tabs.prototype,"alignment",2),ot([c({attribute:"default-tab-index",type:Number})],n.Tabs.prototype,"defaultTabIndex",2),ot([c({reflect:!0})],n.Tabs.prototype,"orientation",2),ot([c({attribute:"update-history",type:Boolean})],n.Tabs.prototype,"updateHistory",2),ot([m()],n.Tabs.prototype,"_tabs",2),ot([m()],n.Tabs.prototype,"_tabPanels",2),ot([m()],n.Tabs.prototype,"_activeTab",2),ot([m()],n.Tabs.prototype,"_activeTabIndex",2),ot([m()],n.Tabs.prototype,"_activeTabPanelIndex",2),ot([m()],n.Tabs.prototype,"_initialHash",2),ot([_({slot:"tabs__first"})],n.Tabs.prototype,"_firstSlot",2),ot([_({slot:"tabs__last"})],n.Tabs.prototype,"_lastSlot",2),ot([m()],n.Tabs.prototype,"_firstSlotEmpty",2),ot([m()],n.Tabs.prototype,"_lastSlotEmpty",2),n.Tabs=ot([E(o2)],n.Tabs);const Gn={default:"s","3xs":"s","2xs":"s",xs:"s",s:"m",m:"m"},bo={display:"flex",alignItems:"flex-start",textAlign:"left",flexDirection:"column",gap:"var(--ds-spacing-m, 1rem)"},_o={headerDisplay:"flex",headerAlignItems:"flex-start",headerTextAlign:"left",headerFlexDirection:"row",headerGap:"var(--ds-spacing-m, 1rem)"},pi={headingsDisplay:"flex",headingFlexDirection:"column",headingsGap:"var(--ds-spacing-2xs, 0.25rem)",headingsAlignItems:"flex-start"},gi={eyebrowDisplay:"flex",eyebrowFlexDirection:"row",eyebrowAlignItems:"center",eyebrowGap:"var(--ds-spacing-2xs, 0.25rem)"},i2={eyebrowLabelColor:"var(--ds-theme-foreground-base-highlight, #005597)"},Xn={eyebrowDateColor:"var(--ds-theme-foreground-neutral-subtle, #17253d)",eyebrowDateOpacity:"0.7"},$s={indicatorDisplay:"flex",indicatorAlignItems:"stretch",indicatorGap:"0.5rem"},mi={bodyDisplay:"flex",bodyFlexDirection:"column",bodyAlignItems:"flex-start",bodyGap:"var(--ds-spacing-m, 1rem)"},fi={footerDisplay:"flex",footerFlexDirection:"column",footerAlignItems:"start",footerGap:"var(--ds-spacing-m, 1rem)"},s2={color:"var(--ds-theme-foreground-base-strong, #0E1726)"},r2={color:"var(--ds-theme-foreground-base-subtle, #17253d)"},n2=y`
  :host {
    display: var(--ds-text-block-display, ${r(bo.display)});
    align-items: var(--ds-text-block-align-items, ${r(bo.alignItems)});
    text-align: var(--ds-text-block-text-align, ${r(bo.textAlign)});
    flex-direction: var(
      --ds-text-block-flex-direction,
      ${r(bo.flexDirection)}
    );
    gap: var(--ds-text-block-gap, ${r(bo.gap)});
  }

  :host [part='text-block__header'] {
    display: var(--ds-text-block-header-display, ${r(_o.headerDisplay)});
    align-items: var(
      --ds-text-block-header-align-items,
      ${r(_o.headerAlignItems)}
    );
    text-align: var(
      --ds-text-block-header-text-align,
      ${r(_o.headerTextAlign)}
    );
    flex-direction: var(
      --ds-text-block-header-flex-direction,
      ${r(_o.headerFlexDirection)}
    );
    gap: var(--ds-text-block-header-gap, ${r(_o.headerGap)});
  }

  :host [part='text-block__headings'] {
    display: var(
      --ds-text-block-headings-display,
      ${r(pi.headingsDisplay)}
    );
    flex-direction: var(
      --ds-text-block-headings-flex-direction,
      ${r(pi.headingFlexDirection)}
    );
    gap: var(--ds-text-block-headings-gap, ${r(pi.headingsGap)});
    align-items: var(
      --ds-text-block-headings-align-items,
      ${r(pi.headingsAlignItems)}
    );
  }

  :host [part='text-block__eyebrow'] {
    display: var(
      --ds-text-block-eyebrow-display,
      ${r(gi.eyebrowDisplay)}
    );
    flex-direction: var(
      --ds-text-block-eyebrow-flex-direction,
      ${r(gi.eyebrowFlexDirection)}
    );
    gap: var(--ds-text-block-eyebrow-gap, ${r(gi.eyebrowGap)});
    align-items: var(
      --ds-text-block-eyebrow-gap,
      ${r(gi.eyebrowAlignItems)}
    );
  }

  :host [part='text-block__title-indicator'] {
    display: var(
      --ds-text-block-indicator-display,
      ${r($s.indicatorDisplay)}
    );
    align-items: var(
      --ds-text-block-indicator-align-items,
      ${r($s.indicatorAlignItems)}
    );
    gap: var(--ds-text-block-indicator-gap, ${r($s.indicatorGap)});
  }

  ::slotted([slot='text-block__eyebrow-label']) {
    color: var(
      --ds-text-block-eyebrow-label-color,
      ${r(i2.eyebrowLabelColor)}
    );
    font-weight: var(
      --ds-text-block-eyebrow-label-font-weight,
      ${r(st.fontWeight)}
    ) !important;
    font-size: var(
      --ds-text-block-eyebrow-label-font-size,
      ${r(st.fontSize)}
    ) !important;
    line-height: var(
      --ds-text-block-eyebrow-label-line-height,
      ${r(st.lineHeight)}
    ) !important;
  }

  ::slotted([slot='text-block__heading']) {
    color: var(--ds-text-block-heading-color, ${r(s2.color)});
    font-weight: var(
      --ds-text-block-heading-font-weight,
      ${r(Yi.fontWeight)}
    );
    font-size: var(
      --ds-text-block-heading-font-size,
      ${r(Yi.fontSize)}
    );
    line-height: var(
      --ds-text-block-heading-line-height,
      ${r(Yi.lineHeight)}
    );
  }

  ::slotted([slot='text-block__content']) {
    color: var(--ds-text-block-content-color, ${r(r2.color)});
    font-weight: var(
      --ds-text-block-content-font-weight,
      ${r(Vs.fontWeight)}
    ) !important;
    font-size: var(
      --ds-text-block-content-font-size,
      ${r(Vs.fontSize)}
    ) !important;
    line-height: var(
      --ds-text-block-content-line-height,
      ${r(Ke.lineHeight)}
    ) !important;
    letter-spacing: var(
      --ds-text-block-content-letter-spacing,
      ${r(P1.letterSpacing)}
    ) !important;
  }

  ::slotted([slot='text-block__eyebrow-date']) {
    font-weight: var(
      --ds-text-block-eyebrow-date-font-weight,
      ${r(st.fontWeight)}
    ) !important;
    font-size: var(
      --ds-text-block-eyebrow-date-font-size,
      ${r(st.fontSize)}
    ) !important;
    line-height: var(
      --ds-text-block-eyebrow-date-line-height,
      ${r(st.lineHeight)}
    ) !important;
    margin-bottom: var(
      --ds-text-block-eyebrow-date-margin-bottom,
      ${r(st.marginBottom)}
    ) !important;
    color: var(
      --ds-text-block-eyebrow-date-color,
      ${r(Xn.eyebrowDateColor)}
    );
    opacity: var(
      --ds-text-block-eyebrow-date-opacity,
      ${r(Xn.eyebrowDateOpacity)}
    );
  }

  :host [part='text-block__body'] {
    display: var(--ds-text-block-body-display, ${r(mi.bodyDisplay)});
    flex-direction: var(
      --ds-text-block-body-flex-direction,
      ${r(mi.bodyFlexDirection)}
    );
    align-items: var(
      --ds-text-block-body-align-items,
      ${r(mi.bodyAlignItems)}
    );
    gap: var(--ds-text-block-body-gap, ${r(mi.bodyGap)});
  }

  :host [part='text-block__footer'] {
    display: var(--ds-text-block-footer-display, ${r(fi.footerDisplay)});
    flex-direction: var(
      --ds-text-block-footer-flex-direction,
      ${r(fi.footerFlexDirection)}
    );
    align-items: var(
      --ds-text-block-footer-align-items,
      ${r(fi.footerAlignItems)}
    );
    gap: var(--ds-text-block-footer-gap, ${r(fi.footerGap)});
  }

  :host ::slotted([slot='text-block__title-indicator']) {
    --ds-indicator-height: auto;
  }

  :host([size='m']) [part='text-block__headings'],
  :host([size='s']) [part='text-block__headings'],
  :host([size='xs']) [part='text-block__headings'] {
    --ds-text-block-headings-gap: var(--ds-spacing-xs, 0.5rem);
  }

  :host([size='m']),
  :host([size='s']),
  :host([size='xs']),
  :host([size='2xs']),
  :host([configuration='list']),
  :host([configuration='stacked']) {
    --ds-text-block-gap: var(--ds-spacing-m, 1rem);
  }

  :host([size='3xs']) ::slotted([slot='text-block__content']),
  :host([configuration='default']) ::slotted([slot='text-block__content']),
  :host([configuration='stacked']) ::slotted([slot='text-block__content']),
  :host([configuration='list']) ::slotted([slot='text-block__content']) {
    --ds-text-block-content-font-size: var(--ds-body-xs-font-size);
    --ds-text-block-content-line-height: var(--ds-body-xs-line-height);
  }

  :host([size='2xs']) ::slotted([slot='text-block__content']),
  :host([size='xs']) ::slotted([slot='text-block__content']),
  :host([size='s']) ::slotted([slot='text-block__content']) {
    --ds-text-block-content-font-size: var(--ds-body-m-font-size);
    --ds-text-block-content-line-height: var(--ds-body-m-line-height);
  }

  :host([size='m']) ::slotted([slot='text-block__content']) {
    --ds-text-block-content-font-size: var(--ds-body-l-font-size, 1.25rem);
    --ds-text-block-content-line-height: var(--ds-body-l-line-height, 2rem);
  }

  :host([size='2xs']) ::slotted([slot='text-block__heading']) {
    --ds-text-block-heading-font-size: var(--ds-heading-2xs-font-size);
    --ds-text-block-heading-line-height: var(--ds-heading-2xs-line-height);
  }

  :host([size='xs']) ::slotted([slot='text-block__heading']) {
    --ds-text-block-heading-font-weight: var(--ds-heading-xs-font-weight);
    --ds-text-block-heading-font-size: var(--ds-heading-xs-font-size);
    --ds-text-block-heading-line-height: var(--ds-heading-xs-line-height);
  }

  :host([size='s']) ::slotted([slot='text-block__heading']) {
    --ds-text-block-heading-font-weight: var(--ds-heading-s-font-weight);
    --ds-text-block-heading-font-size: var(--ds-heading-s-font-size);
    --ds-text-block-heading-line-height: var(--ds-heading-s-line-height);
  }

  :host([size='m']) ::slotted([slot='text-block__heading']) {
    --ds-text-block-heading-font-weight: var(--ds-heading-m-font-weight);
    --ds-text-block-heading-font-size: var(--ds-heading-m-font-size);
    --ds-text-block-heading-line-height: var(--ds-heading-m-line-height);
  }

  :host([configuration='list']) {
    --ds-text-block-flex-direction: row;
  }

  /* Alignment styles */
  :host([alignment='center']) {
    --ds-text-block-align-items: center;
    --ds-text-block-text-align: center;
    --ds-text-block-body-align-items: center;
    --ds-text-block-headings-align-items: center;
    --ds-text-block-flex-direction: column;
  }

  :host([alignment='center']) [part='text-block__header'] {
    --ds-text-block-header-flex-direction: column;
    --ds-text-block-header-align-items: center;
  }
`;var a2=Object.defineProperty,l2=Object.getOwnPropertyDescriptor,W=(e,t,o,i)=>{for(var s=i>1?void 0:i?l2(t,o):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(i?l(t,o,s):l(s))||s);return i&&s&&a2(t,o,s),s};const d2="reimagine-text-block";n.TextBlock=class extends x{constructor(){super(...arguments),this._eyebrowDateSlotEmpty=!0,this._textBlockFirstSlotEmpty=!0,this._textBlockLastSlotEmpty=!0,this._textBlockBadgeSlotEmpty=!0,this._isTextBlockEyebrowSlotEmpty=!0,this._isTextBlockFooterSlotEmpty=!0,this.indicator=!1}_handleSlotChange(){this._eyebrowDateSlotEmpty=this._eyebrowDateSlot.length===0,this._textBlockFirstSlotEmpty=this._textBlockFirstSlot.length===0,this._textBlockLastSlotEmpty=this._textBlockLastSlot.length===0,this._textBlockBadgeSlotEmpty=this._textBlockBadgeSlot.length===0,this._isTextBlockEyebrowSlotEmpty=this._textBlockEyebrowSlot.length===0,this._isTextBlockFooterSlotEmpty=this._textBlockFooterSlot.length===0}updated(){const t=Gn[this.size]||Gn.default;this._textBlockBadgeSlotEmpty||this._badgeSlot[0].setAttribute("size",t)}_renderOptionalSlot(t,o){return g`
      <div part=${t} class=${t} style="${o?"display: none;":""}">
        <slot name=${t} @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}_renderEyebrow(){return g`
      <div
        part="text-block__eyebrow"
        class="text-block__eyebrow"
        style="${this._isTextBlockEyebrowSlotEmpty&&this._eyebrowDateSlotEmpty?"display: none;":""}"
      >
        <slot name="text-block__eyebrow-label"></slot>
        ${this._renderOptionalSlot("text-block__eyebrow-date",this._eyebrowDateSlotEmpty)}
      </div>
    `}_renderTitleIndicator(){return g`
      <div part="text-block__title-indicator" class="text-block__title-indicator">
        ${this.configuration==="stacked"&&this.indicator?g`<slot name="text-block__indicator"></slot>`:""}
        <slot name="text-block__heading"></slot>
      </div>
    `}_renderListStacked(){return g`
      ${this._renderOptionalSlot("text-block__first",this._textBlockFirstSlotEmpty)}
      <div part="text-block__header" class="text-block__header">${this._renderBadge()}</div>

      <div part="text-block__body" class="text-block__body">
        <div part="text-block__headings" class="text-block__headings">
          ${this._renderEyebrow()} ${this._renderTitleIndicator()}
        </div>

        ${Mi("text-block__content")}
        ${this._renderOptionalSlot("text-block__footer",this._isTextBlockFooterSlotEmpty)}
      </div>
      ${this._renderOptionalSlot("text-block__last",this._textBlockLastSlotEmpty)}
    `}_renderDefault(){return g`
      ${this._renderOptionalSlot("text-block__first",this._textBlockFirstSlotEmpty)}
      <div part="text-block__header" class="text-block__header">
        ${this._renderBadge()}
        <div part="text-block__headings" class="text-block__headings">
          ${this._renderEyebrow()} ${this._renderTitleIndicator()}
        </div>
      </div>

      <div part="text-block__body" class="text-block__body">
        ${Mi("text-block__content")} ${Mi("text-block__footer")}
      </div>
      ${this._renderOptionalSlot("text-block__last",this._textBlockLastSlotEmpty)}
    `}_renderBadge(){return g`
      <div part="text-block__badge" class="text-block__badge">
        <slot name="text-block__badge" @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `}render(){return this.configuration==="list"||this.configuration==="stacked"?this._renderListStacked():this._renderDefault()}},n.TextBlock.styles=[n2],W([_({slot:"text-block__eyebrow-date"})],n.TextBlock.prototype,"_eyebrowDateSlot",2),W([_({slot:"text-block__badge"})],n.TextBlock.prototype,"_badgeSlot",2),W([_({slot:"text-block__first"})],n.TextBlock.prototype,"_textBlockFirstSlot",2),W([_({slot:"text-block__last"})],n.TextBlock.prototype,"_textBlockLastSlot",2),W([_({slot:"text-block__badge"})],n.TextBlock.prototype,"_textBlockBadgeSlot",2),W([_({slot:"text-block__eyebrow-label"})],n.TextBlock.prototype,"_textBlockEyebrowSlot",2),W([_({slot:"text-block__footer"})],n.TextBlock.prototype,"_textBlockFooterSlot",2),W([m()],n.TextBlock.prototype,"_eyebrowDateSlotEmpty",2),W([m()],n.TextBlock.prototype,"_textBlockFirstSlotEmpty",2),W([m()],n.TextBlock.prototype,"_textBlockLastSlotEmpty",2),W([m()],n.TextBlock.prototype,"_textBlockBadgeSlotEmpty",2),W([m()],n.TextBlock.prototype,"_isTextBlockEyebrowSlotEmpty",2),W([m()],n.TextBlock.prototype,"_isTextBlockFooterSlotEmpty",2),W([c({reflect:!0})],n.TextBlock.prototype,"configuration",2),W([c({reflect:!0})],n.TextBlock.prototype,"theme",2),W([c({reflect:!0})],n.TextBlock.prototype,"size",2),W([c({type:Boolean,reflect:!0})],n.TextBlock.prototype,"indicator",2),W([c({reflect:!0})],n.TextBlock.prototype,"alignment",2),n.TextBlock=W([E(d2)],n.TextBlock),Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
