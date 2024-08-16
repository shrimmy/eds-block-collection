(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8358:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: BlockHeading

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(7582);
// EXTERNAL MODULE: ./node_modules/lit/index.js
var lit = __webpack_require__(5862);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(9662);
;// CONCATENATED MODULE: ./src/components/block-heading/block-heading.styles.ts

const cssPropDefaults = {
    eyebrowColor: '#005597',
    eyebrowFontWeight: '600',
    eyebrowFontSize: '0.75rem',
    eyebrowLineHeight: '1rem',
    eyebrowLetterSpacing: '0.08rem',
    eyebrowMargin: '1rem',
    eyebrowTextTransform: 'uppercase',
    textAlign: 'left',
    titleColor: '#0e1726',
    titleBackground: 'transparent',
    paragraphColor: '#17253d',
    paragraphMargin: '1rem',
    paragraphMarginRight: '0',
    paragraphMarginLeft: '0',
    paragraphFontWeight: '400',
    paragraphFontSize: '1rem',
    paragraphLineHeight: '1.5rem',
    paragraphLetterSpacing: '-0.03em',
    paragraphWidth: '100%',
    footnoteColor: '#17253d',
    footnoteFontWeight: '400',
    footnoteFontSize: '0.75rem',
    footnoteLineHeight: '1rem',
    footnoteLetterSpacing: '-0.03em',
    footnoteMargin: '1.5rem',
    linksMargin: '1.5rem',
    slotMargin: '2rem',
};
/* harmony default export */ const block_heading_styles = ((0,lit/* css */.iv) `
  .block-heading {
    --_link-color: var(--ds-card-link-color, #0067b8);
    --root-spacing-m: var(--theme-spacing-m, 0.5rem);
    --root-spacing-xl: var(--theme-spacing-xl, 2rem);

    text-align: var(
      --ds-block-heading-text-align,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.textAlign)}
    );
    background-color: var(--block-heading-background-color);

    .block-heading__button-group > .button-group {
      justify-content: var(--block-heading-text-align);
    }
  }

  ::slotted([slot='eyebrow']) {
    --block-heading-eyebrow-color: var(
      --ds-block-heading-eyebrow-color,
      var(
        --ds-theme-foreground-base-highlight,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.eyebrowColor)}
      )
    );
    --block-heading-eyebrow-font-weight: var(
      --ds-block-heading-eyebrow-font-weight,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.eyebrowFontWeight)}
    );

    --block-heading-eyebrow-font-size: var(
      --ds-block-heading-eyebrow-font-size,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.eyebrowFontSize)}
    );
    --block-heading-eyebrow-line-height: var(
      --ds-block-heading-eyebrow-line-height,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.eyebrowLineHeight)}
    );
    --block-heading-eyebrow-letter-spacing: var(
      --ds-block-heading-eyebrow-letter-spacing,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.eyebrowLetterSpacing)}
    );
    --block-heading-eyebrow-margin: var(
      --ds-block-heading-eyebrow-margin,
      var(--ds-spacing-5, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.eyebrowMargin)})
    );
    --block-heading-eyebrow-text-transform: var(
      --ds-block-heading-eyebrow-text-transform,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.eyebrowTextTransform)}
    );

    text-transform: var(--block-heading-eyebrow-text-transform);
    color: var(--block-heading-eyebrow-color);
    font-weight: var(--block-heading-eyebrow-font-weight);
    font-size: var(--block-heading-eyebrow-font-size);
    line-height: var(--block-heading-eyebrow-line-height);
    letter-spacing: var(--block-heading-eyebrow-letter-spacing);
    margin: 0 0 var(--block-heading-eyebrow-margin);
  }

  ::slotted([slot='title']) {
    --block-heading-title-color: var(
      --ds-block-heading-title-color,
      var(--ds-theme-foreground-base, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.titleColor)})
    );
    --block-heading-title-background: var(
      --ds-block-heading-title-background,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.titleBackground)}
    );

    color: var(--block-heading-title-color);
    background: var(--block-heading-title-background);
  }

  ::slotted([slot='paragraph']) {
    --block-heading-paragraph-color: var(
      --ds-block-heading-paragraph-color,
      var(
        --ds-theme-foreground-base-subtle,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphColor)}
      )
    );
    --block-heading-paragraph-margin: var(
      --ds-block-heading-paragraph-margin,
      var(--ds-spacing-5, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphMargin)})
    );
    --block-heading-paragraph-font-weight: var(
      --ds-block-heading-paragraph-font-weight,
      var(
        --ds-body-font-weight,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphFontWeight)}
      )
    );
    --block-heading-paragraph-font-size: var(
      --ds-block-heading-paragraph-font-size,
      var(--ds-body-font-size, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphFontSize)})
    );
    --block-heading-paragraph-line-height: var(
      --ds-block-heading-paragraph-line-height,
      var(
        --ds-body-line-height,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphLineHeight)}
      )
    );
    --block-heading-paragraph-letter-spacing: var(
      --ds-block-heading-paragraph-letter-spacing,
      var(
        --ds-body-letter-spacing,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphLetterSpacing)}
      )
    );
    --block-heading-paragraph-margin: var(
      --ds-block-heading-paragraph-margin,
      var(--ds-spacing-5, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphMargin)})
    );
    --block-heading-paragraph-margin-right: var(
      --ds-block-heading-paragraph-margin-right,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphMarginRight)}
    );
    --block-heading-paragraph-margin-left: var(
      --ds-block-heading-paragraph-margin-left,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphMarginLeft)}
    );
    --block-heading-paragraph-width: var(
      --ds-block-heading-paragraph-width,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.paragraphWidth)}
    );
    color: var(--block-heading-paragraph-color);
    margin: var(--block-heading-paragraph-margin)
      var(--block-heading-paragraph-margin-right) 0
      var(--block-heading-paragraph-margin-left);
    font-weight: var(--block-heading-paragraph-font-weight);
    font-size: var(--block-heading-paragraph-font-size);
    line-height: var(--block-heading-paragraph-line-height);
    letter-spacing: var(--block-heading-paragraph-letter-spacing);
    margin-bottom: 0;
    width: var(--block-heading-paragraph-width);
  }

  .block-heading__button-group {
    margin: var(--root-spacing-xl) 0 0;
  }
  ::slotted([slot='links']) {
    margin: var(
        --ds-block-heading-links-margin,
        var(--ds-spacing-6, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.linksMargin)})
      )
      0 0;
    justify-content: var(
      --ds-block-heading-text-align,
      ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.textAlign)}
    );
  }

  .block-heading__cta {
    color: var(--_link-color);
    position: relative;
    text-decoration: none;
    display: inline-block;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  .block-heading__cta::after {
    content: '';
    right: 0.4375rem;
  }
  .block-heading__cta::after {
    font-family: MWF-FLUENT-ICONS;
    line-height: 1;
    top: calc(50% + 0.0625em);
    margin-top: -0.5em;
    transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    font-weight: 600;
  }

  .block-heading--alignment-centered {
    --block-heading-text-align: center;

    .block-heading__slot {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  ::slotted([slot='footnote']) {
    --block-heading-footnote-color: var(
      --ds-block-heading-footnote-color,
      var(
        --ds-theme-foreground-base-subtle,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.footnoteColor)}
      )
    );
    --block-heading-footnote-font-weight: var(
      --ds-block-heading-footnote-font-weight,
      var(
        --ds-body-font-weight,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.footnoteFontWeight)}
      )
    );
    --block-heading-footnote-font-size: var(
      --ds-block-heading-footnote-font-size,
      var(
        --ds-body-xs-font-size,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.footnoteFontSize)}
      )
    );
    --block-heading-footnote-line-height: var(
      --ds-block-heading-footnote-line-height,
      var(
        --ds-body-xs-line-height,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.footnoteLineHeight)}
      )
    );
    --block-heading-footnote-letter-spacing: var(
      --ds-block-heading-footnote-letter-spacing,
      var(
        --ds-body-xs-letter-spacing,
        ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.footnoteLetterSpacing)}
      )
    );
    --block-heading-footnote-margin: var(
      --ds-block-heading-footnote-margin,
      var(--ds-spacing-6, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.footnoteMargin)})
    );

    color: var(--block-heading-footnote-color);
    margin: var(--block-heading-footnote-margin) 0 0;
    font-weight: var(--block-heading-footnote-font-weight);
    font-size: var(--block-heading-footnote-font-size);
    line-height: var(--block-heading-footnote-line-height);
    letter-spacing: var(--block-heading-footnote-letter-spacing);
    margin-bottom: 0;
  }
  :host([center-text]) .block-heading *,
  :host([center-text]) .block-heading ::slotted(*) {
    text-align: center;
  }
  :host([center-text]) .block-heading ::slotted([slot='links']) {
    display: flex;
    justify-content: center;
  }

  ::slotted([slot='card']) {
    display: flex;
    margin: var(
        --ds-block-heading-slot-margin,
        var(--ds-spacing-8, ${(0,lit/* unsafeCSS */.$m)(cssPropDefaults.slotMargin)})
      )
      0 0;
  }
`);

// EXTERNAL MODULE: ./src/util/define-elements.ts
var define_elements = __webpack_require__(5270);
;// CONCATENATED MODULE: ./src/components/block-heading/index.ts





let BlockHeading = class BlockHeading extends lit/* LitElement */.oi {
    constructor() {
        super(...arguments);
        this.centerText = false;
    }
    render() {
        return (0,lit/* html */.dy) ` <div class="block-heading">
      <slot name="eyebrow" class="block-heading__eyebrow"></slot>
      <slot name="title" class="block-heading__title"></slot>
      <slot name="paragraph" class="block-heading__paragraph"></slot>
      <slot name="links" class="block-heading__link-group"></slot>
      <slot name="card" class="block-heading__slot"></slot>
      <slot name="footnote" class="block-heading__footnote"></slot>
    </div>`;
    }
};
BlockHeading.styles = [block_heading_styles];
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)({ attribute: 'center-text' })
], BlockHeading.prototype, "centerText", void 0);
BlockHeading = (0,tslib_es6/* __decorate */.gn)([
    (0,define_elements/* defineCustomElement */.M)('cascade-block-heading')
], BlockHeading);



/***/ }),

/***/ 5270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* eslint-disable no-negated-condition, no-undef, no-console */
/**
 * Class decorator factory that checks whether a custom element is already registered.
 * If it is not, it defines the decorated class as a custom element.
 *
 * ```js
 * @defineCustomElement('my-element')
 * class MyElement extends LitElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The tag name of the custom element to define.
 */
const defineCustomElement = (tagName) => (classOrTarget, context) => {
    if (customElements.get(tagName)) {
        console.warn(`${tagName} is already defined.`);
        return;
    }
    if (context !== undefined) {
        context.addInitializer(() => {
            customElements.define(tagName, classOrTarget);
        });
    }
    else {
        customElements.define(tagName, classOrTarget);
    }
};


/***/ }),

/***/ 8701:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $m: () => (/* binding */ r),
/* harmony export */   ec: () => (/* binding */ S),
/* harmony export */   i1: () => (/* binding */ c),
/* harmony export */   iv: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports CSSResult, supportsAdoptingStyleSheets */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(s,t))}return t}toString(){return this.cssText}}const r=t=>new n("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n(o,t,s)},S=(s,o)=>{if(e)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o)}},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;
//# sourceMappingURL=css-tag.js.map


/***/ }),

/***/ 5713:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ t)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};
//# sourceMappingURL=custom-element.js.map


/***/ }),

/***/ 760:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony export standardProperty */
/* harmony import */ var _reactive_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8732);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:!0,type:String,converter:_reactive_element_js__WEBPACK_IMPORTED_MODULE_0__/* .defaultConverter */ .Ts,reflect:!1,hasChanged:_reactive_element_js__WEBPACK_IMPORTED_MODULE_0__/* .notEqual */ .Qu},r=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+n)};function n(t){return(e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}
//# sourceMappingURL=property.js.map


/***/ }),

/***/ 9158:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(760);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return (0,_property_js__WEBPACK_IMPORTED_MODULE_0__/* .property */ .C)({...r,state:!0,attribute:!1})}
//# sourceMappingURL=state.js.map


/***/ }),

/***/ 8732:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $m: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.$m),
/* harmony export */   Qu: () => (/* binding */ f),
/* harmony export */   Ts: () => (/* binding */ u),
/* harmony export */   fl: () => (/* binding */ b),
/* harmony export */   iv: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.iv)
/* harmony export */ });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8701);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i,defineProperty:e,getOwnPropertyDescriptor:r,getOwnPropertyNames:h,getOwnPropertySymbols:o,getPrototypeOf:n}=Object,a=globalThis,c=a.trustedTypes,l=c?c.emptyScript:"",p=a.reactiveElementPolyfillSupport,d=(t,s)=>t,u={toAttribute(t,s){switch(s){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,s)=>!i(t,s),y={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),a.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e(this.prototype,t,r)}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;const t=n(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){const t=this.properties,s=[...h(t),...o(t)];for(const i of s)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__/* .getCompatibleStyle */ .i1)(s))}else void 0!==s&&i.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__/* .getCompatibleStyle */ .i1)(s));return i}static _$Eu(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__/* .adoptStyles */ .ec)(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f)(this[t],s))return;this.P(t,s,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d("elementProperties")]=new Map,b[d("finalized")]=new Map,p?.({ReactiveElement:b}),(a.reactiveElementVersions??=[]).push("2.0.4");
//# sourceMappingURL=reactive-element.js.map


/***/ }),

/***/ 8922:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $m: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.$m),
/* harmony export */   Ld: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.Ld),
/* harmony export */   dy: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.dy),
/* harmony export */   iv: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.iv),
/* harmony export */   oi: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony export _$LE */
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8732);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3692);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__/* .ReactiveElement */ .fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,lit_html__WEBPACK_IMPORTED_MODULE_1__/* .render */ .sY)(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return lit_html__WEBPACK_IMPORTED_MODULE_1__/* .noChange */ .Jb}}s._$litElement$=!0,s[("finalized","finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const r=globalThis.litElementPolyfillSupport;r?.({LitElement:s});const o={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(globalThis.litElementVersions??=[]).push("4.0.4");
//# sourceMappingURL=lit-element.js.map


/***/ }),

/***/ 3692:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jb: () => (/* binding */ w),
/* harmony export */   Ld: () => (/* binding */ T),
/* harmony export */   dy: () => (/* binding */ x),
/* harmony export */   sY: () => (/* binding */ j)
/* harmony export */ });
/* unused harmony exports _$LH, svg */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),b=y(2),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(l()),this.S(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const z={P:e,A:h,C:o,M:1,L:P,R:S,D:u,V:N,I:M,H:R,N:H,U:I,B:k,F:L},Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.2");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{})}return h._$AI(t),h};
//# sourceMappingURL=lit-html.js.map


/***/ }),

/***/ 9662:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cb: () => (/* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   Mo: () => (/* reexport safe */ _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_3__.M),
/* harmony export */   SB: () => (/* reexport safe */ _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_1__.S)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5713);
/* harmony import */ var _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(760);
/* harmony import */ var _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9158);

//# sourceMappingURL=decorators.js.map


/***/ }),

/***/ 5862:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $m: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.$m),
/* harmony export */   Ld: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.Ld),
/* harmony export */   dy: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.dy),
/* harmony export */   iv: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.iv),
/* harmony export */   oi: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.oi)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8732);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3692);
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8922);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7582:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gn: () => (/* binding */ __decorate)
/* harmony export */ });
/* unused harmony exports __extends, __assign, __rest, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  TechSpecs: () => (/* binding */ TechSpecs)
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(7582);
// EXTERNAL MODULE: ./node_modules/lit/index.js
var lit = __webpack_require__(5862);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js
var decorators = __webpack_require__(9662);
;// CONCATENATED MODULE: ./src/components/tech-specs/tech-specs-styles.ts

const techSpecsStyles = (0,lit/* css */.iv) `
  :host {
    --spacing-0: var(--ds-spacing-0, 0);
    --spacing-2: var(--ds-spacing-2, 0.5rem);
    --spacing-3: var(--ds-spacing-3, 1rem);
    --spacing-4-5: 2rem;
    --spacing-5: var(--ds-spacing-5, 3rem);

    --foreground-neutral-strong: var(
      --ds-theme-foreground-neutral-strong,
      black
    );
    --border-neutral-fade: var(--ds-theme-border-neutral-fade, #d2d2d2);
    --button-bg-color: rgba(84, 64, 241, 1);
    --button-border-color: transperant;

    font-size: 16px;
    color: var(--foreground-neutral-strong);
    :host([center-text]) .block-heading ::slotted(*) {
      color: var(--foreground-neutral-strong);
    }
  }
  .theme-night {
    background-color: var(--ds-color-black, black);
    --foreground-neutral-strong: var(
      --ds-theme-foreground-neutral-strong,
      white
    );
    --border-neutral-fade: var(--ds-theme-border-neutral-fade, #858585);
    --badge-text-color: black;
    --button-bg-color: var(--ds-color-black, black);
    --button-brder-color: var(--ds-theme-foreground-neutral-strong, white);
  }

  moray-button {
    --ds-action-trigger-color: var(--foreground-neutral-strong);
  }
  table {
    width: 100%;
    table-layout: fixed;
  }
  table,
  th,
  td {
    border: none;
  }
  td {
    padding: var(--spacing-3);
  }
  .hidden {
    display: none !important;
  }
  .header {
    margin: var(--spacing-0);
    border-bottom: 1px solid var(--border-neutral-fade);
  }
  .block-heading > * {
    margin: var(--spacing-3) 0;
  }
  h3 {
    font-size: 2rem;
    margin: var(--spacing-3) var(--spacing-0);
  }
  tr.separators td {
    position: relative;
  }
  tr.separators td.separators::before {
    content: '';
    width: 10%;
    height: 1px;
    background: var(--border-neutral-fade);
    position: absolute;
    top: 0;
    left: 45%;
  }
  .tech-spec-root {
    display: grid;
  }
  .tech-spec-cell.separators {
    border-bottom: 1px solid var(--border-neutral-fade);
    margin-bottom: 1em;
  }
  .table,
  .table-cell,
  .table-header {
    text-align: left;
  }

  .table {
    border-collapse: collapse;
    width: 100%;
  }

  tr {
    border-bottom: 0.5px solid var(--ds-theme-foreground-neutral-strong, white);
  }

  .table-cell {
    padding: 15px;
  }
  .btn-group {
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex-direction: row;
    flex-wrap: wrap;
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
  }

  .btn {
    padding: 0px 16px;
    word-wrap: break-word;
    background: var(--button-bg-color);
    border-radius: 6px;
    text-decoration: none;
    display: inline-block;
    border: 0.1rem solid var(--button-brder-color);
    cursor: pointer;
  }
  .ts-table-header {
    letter-spacing: 0em;
    margin: 0;
  }
  .ts-main {
    margin-top: 24px;
    padding: 0 0.75rem;
  }
  .ts-main:focus {
    outline: 0.1875rem dotted currentColor;
  }
  .block-heading {
    color: white;
  }
`;

;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/registration-Ac3YpkNH.mjs
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const T = globalThis, j = T.ShadowRoot && (T.ShadyCSS === void 0 || T.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, D = Symbol(), B = /* @__PURE__ */ new WeakMap();
let Y = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== D)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (j && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = B.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && B.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ot = (n) => new Y(typeof n == "string" ? n : n + "", void 0, D), Ct = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((s, i, o) => s + ((r) => {
    if (r._$cssResult$ === !0)
      return r.cssText;
    if (typeof r == "number")
      return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + n[o + 1], n[0]);
  return new Y(e, n, D);
}, ht = (n, t) => {
  if (j)
    n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else
    for (const e of t) {
      const s = document.createElement("style"), i = T.litNonce;
      i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, n.appendChild(s);
    }
}, W = j ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules)
    e += s.cssText;
  return ot(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: lt, defineProperty: at, getOwnPropertyDescriptor: ct, getOwnPropertyNames: dt, getOwnPropertySymbols: pt, getPrototypeOf: $t } = Object, f = globalThis, V = f.trustedTypes, ut = V ? V.emptyScript : "", M = f.reactiveElementPolyfillSupport, b = (n, t) => n, I = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? ut : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, tt = (n, t) => !lt(n, t), q = { attribute: !0, type: String, converter: I, reflect: !1, hasChanged: tt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), f.litPropertyMetadata ?? (f.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class g extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = q) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && at(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: o } = ct(this.prototype, t) ?? { get() {
      return this[e];
    }, set(r) {
      this[e] = r;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(r) {
      const a = i == null ? void 0 : i.call(this);
      o.call(this, r), this.requestUpdate(t, a, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? q;
  }
  static _$Ei() {
    if (this.hasOwnProperty(b("elementProperties")))
      return;
    const t = $t(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(b("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(b("properties"))) {
      const e = this.properties, s = [...dt(e), ...pt(e)];
      for (const i of s)
        this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0)
        for (const [s, i] of e)
          this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s)
        e.unshift(W(i));
    } else
      t !== void 0 && e.push(W(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys())
      this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return ht(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) == null ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EC(t, e) {
    var o;
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const r = (((o = s.converter) == null ? void 0 : o.toAttribute) !== void 0 ? s.converter : I).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(i) : this.setAttribute(i, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const r = s.getPropertyOptions(i), a = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((o = r.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? r.converter : I;
      this._$Em = i, this[i] = a.fromAttribute(e, r.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      if (s ?? (s = this.constructor.getPropertyOptions(t)), !(s.hasChanged ?? tt)(this[t], e))
        return;
      this.P(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, s) {
    this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, r] of this._$Ep)
          this[o] = r;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0)
        for (const [o, r] of i)
          r.wrapped !== !0 || this._$AL.has(o) || this[o] === void 0 || this.P(o, this[o], r);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((i) => {
        var o;
        return (o = i.hostUpdate) == null ? void 0 : o.call(i);
      }), this.update(e)) : this._$EU();
    } catch (i) {
      throw t = !1, this._$EU(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
g.elementStyles = [], g.shadowRootOptions = { mode: "open" }, g[b("elementProperties")] = /* @__PURE__ */ new Map(), g[b("finalized")] = /* @__PURE__ */ new Map(), M == null || M({ ReactiveElement: g }), (f.reactiveElementVersions ?? (f.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w = globalThis, N = w.trustedTypes, J = N ? N.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, et = "$lit$", _ = `lit$${(Math.random() + "").slice(9)}$`, st = "?" + _, _t = `<${st}>`, y = document, C = () => y.createComment(""), P = (n) => n === null || typeof n != "object" && typeof n != "function", it = Array.isArray, ft = (n) => it(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", k = `[ 	
\f\r]`, S = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, K = /-->/g, Z = />/g, A = RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), F = /'/g, G = /"/g, nt = /^(?:script|style|textarea|title)$/i, At = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), Pt = At(1), v = Symbol.for("lit-noChange"), d = Symbol.for("lit-nothing"), Q = /* @__PURE__ */ new WeakMap(), m = y.createTreeWalker(y, 129);
function rt(n, t) {
  if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return J !== void 0 ? J.createHTML(t) : t;
}
const mt = (n, t) => {
  const e = n.length - 1, s = [];
  let i, o = t === 2 ? "<svg>" : "", r = S;
  for (let a = 0; a < e; a++) {
    const h = n[a];
    let c, p, l = -1, $ = 0;
    for (; $ < h.length && (r.lastIndex = $, p = r.exec(h), p !== null); )
      $ = r.lastIndex, r === S ? p[1] === "!--" ? r = K : p[1] !== void 0 ? r = Z : p[2] !== void 0 ? (nt.test(p[2]) && (i = RegExp("</" + p[2], "g")), r = A) : p[3] !== void 0 && (r = A) : r === A ? p[0] === ">" ? (r = i ?? S, l = -1) : p[1] === void 0 ? l = -2 : (l = r.lastIndex - p[2].length, c = p[1], r = p[3] === void 0 ? A : p[3] === '"' ? G : F) : r === G || r === F ? r = A : r === K || r === Z ? r = S : (r = A, i = void 0);
    const u = r === A && n[a + 1].startsWith("/>") ? " " : "";
    o += r === S ? h + _t : l >= 0 ? (s.push(c), h.slice(0, l) + et + h.slice(l) + _ + u) : h + _ + (l === -2 ? a : u);
  }
  return [rt(n, o + (n[e] || "<?>") + (t === 2 ? "</svg>" : "")), s];
};
class U {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let o = 0, r = 0;
    const a = t.length - 1, h = this.parts, [c, p] = mt(t, e);
    if (this.el = U.createElement(c, s), m.currentNode = this.el.content, e === 2) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (i = m.nextNode()) !== null && h.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes())
          for (const l of i.getAttributeNames())
            if (l.endsWith(et)) {
              const $ = p[r++], u = i.getAttribute(l).split(_), H = /([.?@])?(.*)/.exec($);
              h.push({ type: 1, index: o, name: H[2], strings: u, ctor: H[1] === "." ? gt : H[1] === "?" ? vt : H[1] === "@" ? Et : O }), i.removeAttribute(l);
            } else
              l.startsWith(_) && (h.push({ type: 6, index: o }), i.removeAttribute(l));
        if (nt.test(i.tagName)) {
          const l = i.textContent.split(_), $ = l.length - 1;
          if ($ > 0) {
            i.textContent = N ? N.emptyScript : "";
            for (let u = 0; u < $; u++)
              i.append(l[u], C()), m.nextNode(), h.push({ type: 2, index: ++o });
            i.append(l[$], C());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === st)
          h.push({ type: 2, index: o });
        else {
          let l = -1;
          for (; (l = i.data.indexOf(_, l + 1)) !== -1; )
            h.push({ type: 7, index: o }), l += _.length - 1;
        }
      o++;
    }
  }
  static createElement(t, e) {
    const s = y.createElement("template");
    return s.innerHTML = t, s;
  }
}
function E(n, t, e = n, s) {
  var r, a;
  if (t === v)
    return t;
  let i = s !== void 0 ? (r = e._$Co) == null ? void 0 : r[s] : e._$Cl;
  const o = P(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== o && ((a = i == null ? void 0 : i._$AO) == null || a.call(i, !1), o === void 0 ? i = void 0 : (i = new o(n), i._$AT(n, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = i : e._$Cl = i), i !== void 0 && (t = E(n, i._$AS(n, t.values), i, s)), t;
}
class yt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? y).importNode(e, !0);
    m.currentNode = i;
    let o = m.nextNode(), r = 0, a = 0, h = s[0];
    for (; h !== void 0; ) {
      if (r === h.index) {
        let c;
        h.type === 2 ? c = new x(o, o.nextSibling, this, t) : h.type === 1 ? c = new h.ctor(o, h.name, h.strings, this, t) : h.type === 6 && (c = new St(o, this, t)), this._$AV.push(c), h = s[++a];
      }
      r !== (h == null ? void 0 : h.index) && (o = m.nextNode(), r++);
    }
    return m.currentNode = y, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class x {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = E(this, t, e), P(t) ? t === d || t == null || t === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : t !== this._$AH && t !== v && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : ft(t) ? this.k(t) : this._(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
  }
  _(t) {
    this._$AH !== d && P(this._$AH) ? this._$AA.nextSibling.data = t : this.T(y.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var o;
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = U.createElement(rt(s.h, s.h[0]), this.options)), s);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === i)
      this._$AH.p(e);
    else {
      const r = new yt(i, this), a = r.u(this.options);
      r.p(e), this.T(a), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = Q.get(t.strings);
    return e === void 0 && Q.set(t.strings, e = new U(t)), e;
  }
  k(t) {
    it(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const o of t)
      i === e.length ? e.push(s = new x(this.S(C()), this.S(C()), this, this.options)) : s = e[i], s._$AI(o), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class O {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, o) {
    this.type = 1, this._$AH = d, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = d;
  }
  _$AI(t, e = this, s, i) {
    const o = this.strings;
    let r = !1;
    if (o === void 0)
      t = E(this, t, e, 0), r = !P(t) || t !== this._$AH && t !== v, r && (this._$AH = t);
    else {
      const a = t;
      let h, c;
      for (t = o[0], h = 0; h < o.length - 1; h++)
        c = E(this, a[s + h], e, h), c === v && (c = this._$AH[h]), r || (r = !P(c) || c !== this._$AH[h]), c === d ? t = d : t !== d && (t += (c ?? "") + o[h + 1]), this._$AH[h] = c;
    }
    r && !i && this.j(t);
  }
  j(t) {
    t === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class gt extends O {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === d ? void 0 : t;
  }
}
class vt extends O {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== d);
  }
}
class Et extends O {
  constructor(t, e, s, i, o) {
    super(t, e, s, i, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = E(this, t, e, 0) ?? d) === v)
      return;
    const s = this._$AH, i = t === d && s !== d || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, o = t !== d && (s === d || i);
    i && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class St {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    E(this, t);
  }
}
const L = w.litHtmlPolyfillSupport;
L == null || L(U, x), (w.litHtmlVersions ?? (w.litHtmlVersions = [])).push("3.1.2");
const bt = (n, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const o = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = i = new x(t.insertBefore(C(), o), o, void 0, e ?? {});
  }
  return i._$AI(n), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class R extends g {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = bt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return v;
  }
}
var X;
R._$litElement$ = !0, R.finalized = !0, (X = globalThis.litElementHydrateSupport) == null || X.call(globalThis, { LitElement: R });
const z = globalThis.litElementPolyfillSupport;
z == null || z({ LitElement: R });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.4");
/**
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
 */
const Ut = (n) => (t, e) => {
  if (customElements.get(n)) {
    console.warn(`${n} is already defined.`);
    return;
  }
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(n, t);
  }) : customElements.define(n, t);
};


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/vfi-CyPinwDN.mjs

const o = Ct`var(--ds-vfi-outline-width, 0.1875rem)`, i = Ct`var(--ds-vfi-outline-style, dotted)`, s = Ct`var(--ds-vfi-outline-offset, 0.25rem)`, vfi_CyPinwDN_f = Ct`calc(calc(${o} + 0.1875rem) * -1)`, c = Ct`calc(calc(${o}) * -1)`, l = Ct`var(--ds-vfi-text-color, currentcolor ${i} ${o})`, e = Ct`
  outline: ${l};
`, r = Ct`
  ${e}
  outline-offset: ${vfi_CyPinwDN_f};
`, vfi_CyPinwDN_v = Ct`
  ${e}
  outline-offset: ${s};
`;


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/variables-BKxyUZOC.mjs
const a = "#e6e6e6", variables_BKxyUZOC_o = "#d2d2d2", variables_BKxyUZOC_r = "#a2a2a2", variables_BKxyUZOC_e = "#757575", variables_BKxyUZOC_s = "transparent", n = "#000", t = "#fff", variables_BKxyUZOC_c = "#ffb900", variables_BKxyUZOC_m = "0 0 0.25rem 0 rgba(0, 0, 0, 0.12), 0 0 0.25rem 0 rgba(0, 0, 0, 0.12)", variables_BKxyUZOC_g = "0 0.063rem 0.25rem 0 rgba(0, 0, 0, 0.12), 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.12)", variables_BKxyUZOC_l = "0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.12), 0 0.25rem 1rem 0 rgba(0, 0, 0, 0.12)", variables_BKxyUZOC_d = "0 0 0 0 rgba(0, 0, 0, 0.12), 0 0 0 0 rgba(0, 0, 0, 0.12)", u = "0", h = "0.25rem", variables_BKxyUZOC_b = "60rem", variables_BKxyUZOC_f = "0", variables_BKxyUZOC_T = "0.25rem", variables_BKxyUZOC_i = "0.5rem", p = "1rem", variables_BKxyUZOC_S = "1.5rem", variables_BKxyUZOC_B = "0.75rem", variables_BKxyUZOC_N = "#0067b8", variables_BKxyUZOC_C = "rgba(0, 0, 0, 0.1)", variables_BKxyUZOC_k = "rgba(0, 103, 184, 0.15)", variables_BKxyUZOC_A = "#fff", variables_BKxyUZOC_F = "#f2f2f2", variables_BKxyUZOC_y = "#0067b8", variables_BKxyUZOC_D = "#fff", variables_BKxyUZOC_G = "#fff", variables_BKxyUZOC_R = "#0067b8", variables_BKxyUZOC_v = "#000", variables_BKxyUZOC_w = "#000", variables_BKxyUZOC_x = "#0067b8", variables_BKxyUZOC_P = "#757575", variables_BKxyUZOC_j = "#d2d2d2";


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/button-DC9AV08H.mjs



const button_DC9AV08H_n = {
  actionTrigger: "action-trigger",
  button: "button",
  buttonFaint: "button--faint",
  buttonOutline: "button--outline",
  buttonLink: "button--link",
  mediaControl: "media-control",
  mediaControlLight: "media-control--light"
}, button_DC9AV08H_i = {
  small: "small",
  medium: "medium",
  large: "large"
}, button_DC9AV08H_t = {
  gap: "0.4375em",
  fontWeight: "600",
  borderWidth: "0.125rem",
  borderColor: variables_BKxyUZOC_s,
  borderRadius: h,
  backgroundColor: variables_BKxyUZOC_N,
  color: variables_BKxyUZOC_G,
  depth: variables_BKxyUZOC_d,
  hoverBorderColor: variables_BKxyUZOC_s,
  hoverBackgroundColor: variables_BKxyUZOC_N,
  hoverBackgroundImage: `linear-gradient(var(--ds-theme-background-accent-strong-hover, ${variables_BKxyUZOC_C}), var(--ds-theme-background-accent-strong-hover, ${variables_BKxyUZOC_C}))`,
  hoverColor: variables_BKxyUZOC_G,
  hoverDepth: variables_BKxyUZOC_m,
  disabledOpacity: "0.3",
  defaultPaddingBlockEnd: "0.625rem",
  defaultPaddingBlockStart: "0.625rem",
  defaultPaddingInlineEnd: variables_BKxyUZOC_B,
  defaultPaddingInlineStart: variables_BKxyUZOC_B,
  defaultFontSize: "1rem",
  smallPaddingBlockEnd: "0.5625rem",
  smallPaddingBlockStart: "0.5625rem",
  smallPaddingInlineEnd: variables_BKxyUZOC_B,
  smallPaddingInlineStart: variables_BKxyUZOC_B,
  smallFontSize: "0.875rem",
  mediumPaddingBlockEnd: "0.625rem",
  mediumPaddingBlockStart: "0.625rem",
  mediumPaddingInlineEnd: variables_BKxyUZOC_B,
  mediumPaddingInlineStart: variables_BKxyUZOC_B,
  mediumFontSize: "1rem",
  largePaddingBlockEnd: "0.8125rem",
  largePaddingBlockStart: "0.8125rem",
  largePaddingInlineEnd: variables_BKxyUZOC_B,
  largePaddingInlineStart: variables_BKxyUZOC_B,
  largeFontSize: "1.125rem",
  pillBorderRadius: variables_BKxyUZOC_b,
  outlineBorderColor: "currentcolor",
  outlineBackgroundColor: variables_BKxyUZOC_s,
  outlineColor: variables_BKxyUZOC_R,
  outlineHoverBorderColor: "currentcolor",
  outlineHoverBackgroundColor: variables_BKxyUZOC_s,
  outlineHoverBackgroundImage: `linear-gradient(var(--ds-theme-background-accent-subtle-normal, ${variables_BKxyUZOC_k}), var(--ds-theme-background-accent-subtle-normal, ${variables_BKxyUZOC_k}))`,
  outlineHoverColor: variables_BKxyUZOC_R,
  faintBorderColor: variables_BKxyUZOC_s,
  faintBackgroundColor: variables_BKxyUZOC_s,
  faintBackgroundImage: `linear-gradient(var(--ds-theme-background-accent-subtle-normal, ${variables_BKxyUZOC_k}), var(--ds-theme-background-accent-subtle-normal, ${variables_BKxyUZOC_k}))`,
  faintColor: variables_BKxyUZOC_R,
  faintHoverBorderColor: variables_BKxyUZOC_s,
  faintHoverBackgroundColor: variables_BKxyUZOC_s,
  faintHoverBackgroundImage: "none",
  faintHoverColor: variables_BKxyUZOC_R,
  linkColor: variables_BKxyUZOC_R,
  linkInactiveColor: variables_BKxyUZOC_e,
  // TODO: replace with theme token when available
  activeBorderColor: variables_BKxyUZOC_x,
  activeBackgroundColor: variables_BKxyUZOC_A,
  activeBackgroundImage: `linear-gradient(var(--ds-theme-background-accent-subtle-normal, ${variables_BKxyUZOC_k}), var(--ds-theme-background-accent-subtle-normal, ${variables_BKxyUZOC_k}))`,
  activeColor: variables_BKxyUZOC_R,
  outlineActiveBorderColor: variables_BKxyUZOC_s,
  outlineActiveBackgroundColor: variables_BKxyUZOC_y,
  outlineActiveBackgroundImage: "none",
  outlineActiveColor: variables_BKxyUZOC_G,
  faintActiveBorderColor: variables_BKxyUZOC_s,
  faintActiveBackgroundColor: variables_BKxyUZOC_y,
  faintActiveBackgroundImage: "none",
  faintActiveColor: variables_BKxyUZOC_G
}, button_DC9AV08H_P = Ct`
  /**
 * Remove the default 'border-radius' that macOS Chrome adds
 * Details at https://github.com/twbs/bootstrap/issues/24093
 */
  border-radius: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  display: inline-flex;
  align-items: center;
  border: 0 solid transparent;
  cursor: pointer;
`, button_DC9AV08H_S = Ct`
  :host([appearance^='${ot(button_DC9AV08H_n.button)}']) a,
  :host([appearance^='${ot(button_DC9AV08H_n.button)}']) button {
    justify-content: center;
    gap: var(--ds-button-gap, ${ot(button_DC9AV08H_t.gap)});
    font-weight: var(--ds-button-font-weight, ${ot(button_DC9AV08H_t.fontWeight)});
    border-width: var(--ds-button-border-width, ${ot(button_DC9AV08H_t.borderWidth)});
    border-color: var(
      --ds-button-border-color,
      var(--ds-color-transparent, ${ot(button_DC9AV08H_t.borderColor)})
    );
    border-radius: var(
      --ds-button-border-radius,
      var(--ds-radii-10, ${ot(button_DC9AV08H_t.borderRadius)})
    );
    background-color: var(
      --ds-button-background-color,
      var(
        --ds-theme-background-accent-strong-normal,
        ${ot(button_DC9AV08H_t.backgroundColor)}
      )
    );
    color: var(
      --ds-button-color,
      var(--ds-theme-foreground-accent-strong-normal, ${ot(button_DC9AV08H_t.color)})
    );
    text-decoration: none;
    line-height: 1;
    padding-inline-end: var(
      --ds-button-default-padding-inline-end,
      ${ot(button_DC9AV08H_t.defaultPaddingInlineEnd)}
    );
    padding-inline-start: var(
      --ds-button-default-padding-inline-start,
      ${ot(button_DC9AV08H_t.defaultPaddingInlineEnd)}
    );
    padding-block-end: var(
      --ds-button-default-padding-block-end,
      ${ot(button_DC9AV08H_t.defaultPaddingBlockEnd)}
    );
    padding-block-start: var(
      --ds-button-default-padding-block-start,
      ${ot(button_DC9AV08H_t.defaultPaddingBlockStart)}
    );
    font-size: var(
      --ds-button-default-font-size,
      ${ot(button_DC9AV08H_t.defaultFontSize)}
    );
    box-shadow: var(
      --ds-button-box-shadow,
      var(--ds-depth-none, ${ot(button_DC9AV08H_t.depth)})
    );
  }

  :host([appearance^='${ot(button_DC9AV08H_n.button)}']) a:focus,
  :host([appearance^='${ot(button_DC9AV08H_n.button)}']) button:focus {
    ${r}
  }

  :host([appearance^='${ot(button_DC9AV08H_n.button)}']:not([disabled])) a:hover,
  :host([appearance^='${ot(button_DC9AV08H_n.button)}']:not([disabled])) button:hover,
  :host([appearance^='${ot(button_DC9AV08H_n.button)}']:not([disabled])) a:focus,
  :host([appearance^='${ot(button_DC9AV08H_n.button)}']:not([disabled])) button:focus {
    border-color: var(
      --ds-button-hover-border-color,
      var(--ds-color-transparent, ${ot(button_DC9AV08H_t.hoverBorderColor)})
    );
    background-color: var(
      --ds-button-hover-background-color,
      var(
        --ds-theme-background-accent-strong-normal,
        ${ot(button_DC9AV08H_t.hoverBackgroundColor)}
      )
    );
    background-image: var(
      --ds-button-hover-background-image,
      ${ot(button_DC9AV08H_t.hoverBackgroundImage)}
    );
    color: var(
      --ds-button-hover-color,
      var(
        --ds-theme-foreground-accent-strong-normal,
        ${ot(button_DC9AV08H_t.hoverColor)}
      )
    );
    box-shadow: var(
      --ds-button-hover-box-shadow,
      var(--ds-depth-4, ${ot(button_DC9AV08H_t.hoverDepth)})
    );
  }

  /* TODO: button only styles (do not apply to anchor styled buttons)
   *  - inactive
   *  - disabled
   *  - link button
   *  - active
   */

  /* ------- Button disabled -------- */

  :host([appearance^='${ot(button_DC9AV08H_n.button)}'][disabled]) button {
    opacity: var(--ds-button-disabled-opacity, ${ot(button_DC9AV08H_t.disabledOpacity)});
    background-image: none;
    box-shadow: none;
  }

  /* ------- Button active -------- */

  :host([appearance='${ot(button_DC9AV08H_n.button)}'][active]:not([disabled])) button {
    border-color: var(
      --ds-button-active-border-color,
      var(
        --ds-theme-border-accent-strong-normal,
        ${ot(button_DC9AV08H_t.activeBorderColor)}
      )
    );
    background-color: var(
      --ds-button-active-background-color,
      var(
        --ds-theme-background-neutral-fade,
        ${ot(button_DC9AV08H_t.activeBackgroundColor)}
      )
    );
    background-image: var(
      --ds-button-active-background-image,
      ${ot(button_DC9AV08H_t.activeBackgroundImage)}
    );
    color: var(
      --ds-button-active-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${ot(button_DC9AV08H_t.activeColor)}
      )
    );
  }

  /* ------- Button active HCM -------- */

  :host(
      [appearance^='${ot(button_DC9AV08H_n.button)}']:not(
          [appearance='${ot(button_DC9AV08H_n.buttonLink)}']
        )[active]:not([disabled])
    )
    button {
    @media (forced-colors: active) {
      color: CanvasText;
      background-color: SelectedItem;
    }
  }

  /* ------- Button small -------- */

  :host(
      [appearance^='${ot(button_DC9AV08H_n.button)}'][size='${ot(button_DC9AV08H_i.small)}']
    )
    a,
  :host(
      [appearance^='${ot(button_DC9AV08H_n.button)}'][size='${ot(button_DC9AV08H_i.small)}']
    )
    button {
    padding-inline-end: var(
      --ds-button-small-padding-inline-end,
      ${ot(button_DC9AV08H_t.smallPaddingInlineEnd)}
    );
    padding-inline-start: var(
      --ds-button-small-padding-inline-start,
      ${ot(button_DC9AV08H_t.smallPaddingInlineEnd)}
    );
    padding-block-end: var(
      --ds-button-small-padding-block-end,
      ${ot(button_DC9AV08H_t.smallPaddingBlockEnd)}
    );
    padding-block-start: var(
      --ds-button-small-padding-block-end,
      ${ot(button_DC9AV08H_t.smallPaddingBlockEnd)}
    );
    font-size: var(--ds-button-small-font-size, ${ot(button_DC9AV08H_t.smallFontSize)});
  }

  /* ------- Button medium -------- */

  :host(
      [appearance^='${ot(button_DC9AV08H_n.button)}'][size='${ot(button_DC9AV08H_i.medium)}']
    )
    a,
  :host(
      [appearance^='${ot(button_DC9AV08H_n.button)}'][size='${ot(button_DC9AV08H_i.medium)}']
    )
    button {
    padding-inline-end: var(
      --ds-button-medium-padding-inline-end,
      ${ot(button_DC9AV08H_t.mediumPaddingInlineEnd)}
    );
    padding-inline-start: var(
      --ds-button-medium-padding-inline-start,
      ${ot(button_DC9AV08H_t.mediumPaddingInlineEnd)}
    );
    padding-block-end: var(
      --ds-button-medium-padding-block-end,
      ${ot(button_DC9AV08H_t.mediumPaddingBlockEnd)}
    );
    padding-block-start: var(
      --ds-button-medium-padding-block-end,
      ${ot(button_DC9AV08H_t.mediumPaddingBlockEnd)}
    );
    font-size: var(
      --ds-button-medium-font-size,
      ${ot(button_DC9AV08H_t.mediumFontSize)}
    );
  }

  /* ------- Button large -------- */

  :host(
      [appearance^='${ot(button_DC9AV08H_n.button)}'][size='${ot(button_DC9AV08H_i.large)}']
    )
    a,
  :host(
      [appearance^='${ot(button_DC9AV08H_n.button)}'][size='${ot(button_DC9AV08H_i.large)}']
    )
    button {
    padding-inline-end: var(
      --ds-button-large-padding-inline-end,
      ${ot(button_DC9AV08H_t.largePaddingInlineEnd)}
    );
    padding-inline-start: var(
      --ds-button-large-padding-inline-start,
      ${ot(button_DC9AV08H_t.largePaddingInlineEnd)}
    );
    padding-block-end: var(
      --ds-button-large-padding-block-end,
      ${ot(button_DC9AV08H_t.largePaddingBlockEnd)}
    );
    padding-block-start: var(
      --ds-button-large-padding-block-end,
      ${ot(button_DC9AV08H_t.largePaddingBlockEnd)}
    );
    font-size: var(--ds-button-large-font-size, ${ot(button_DC9AV08H_t.largeFontSize)});
  }

  /* ------- Button block -------- */

  :host([appearance^='${ot(button_DC9AV08H_n.button)}'][block]) a,
  :host([appearance^='${ot(button_DC9AV08H_n.button)}'][block]) button {
    display: flex;
    width: 100%;
  }

  /* ------- Button pill -------- */

  :host([appearance^='${ot(button_DC9AV08H_n.button)}'][pill]) a,
  :host([appearance^='${ot(button_DC9AV08H_n.button)}'][pill]) button {
    border-radius: var(
      --ds-button-pill-border-radius,
      var(--ds-radii-pill, ${ot(button_DC9AV08H_t.pillBorderRadius)})
    );
  }

  /* ------- Button outline -------- */

  :host([appearance^='${ot(button_DC9AV08H_n.buttonOutline)}']) a,
  :host([appearance^='${ot(button_DC9AV08H_n.buttonOutline)}']) button {
    background-color: var(
      --ds-button-outline-background-color,
      var(--ds-color-transparent, ${ot(button_DC9AV08H_t.outlineBackgroundColor)})
    );
    color: var(
      --ds-button-outline-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${ot(button_DC9AV08H_t.outlineColor)}
      )
    );
    border-color: var(
      --ds-button-outline-border-color,
      ${ot(button_DC9AV08H_t.outlineBorderColor)}
    );
  }

  :host([appearance^='${ot(button_DC9AV08H_n.buttonOutline)}']:not([disabled])) a:hover,
  :host([appearance^='${ot(button_DC9AV08H_n.buttonOutline)}']:not([disabled])) button:hover,
  :host([appearance^='${ot(button_DC9AV08H_n.buttonOutline)}']:not([disabled])) a:focus,
  :host([appearance^='${ot(button_DC9AV08H_n.buttonOutline)}']:not([disabled])) button:focus {
    border-color: var(
      --ds-button-outline-hover-border-color,
      ${ot(button_DC9AV08H_t.outlineHoverBorderColor)}
    );
    background-color: var(
      --ds-button-outline-hover-background-color,
      var(--ds-color-transparent, ${ot(button_DC9AV08H_t.outlineHoverBackgroundColor)})
    );
    background-image: var(
      --ds-button-outline-hover-background-image,
      ${ot(button_DC9AV08H_t.outlineHoverBackgroundImage)}
    );
    color: var(
      --ds-button-outline-hover-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${ot(button_DC9AV08H_t.outlineHoverColor)}
      )
    );
    box-shadow: none;
  }

  /* ------- Button outline active -------- */

  :host([appearance^='${ot(button_DC9AV08H_n.buttonOutline)}'][active]) button,
  :host([appearance^='${ot(button_DC9AV08H_n.buttonOutline)}'][active]) button:focus,
  :host([appearance^='${ot(button_DC9AV08H_n.buttonOutline)}'][active]) button:hover {
    color: var(
      --ds-button-outline-active-color,
      var(
        --ds-theme-foreground-accent-strong-normal,
        ${ot(button_DC9AV08H_t.outlineActiveColor)}
      )
    );
    border-color: var(
      --ds-button-outline-active-border-color,
      ${ot(button_DC9AV08H_t.outlineActiveBorderColor)}
    );
    background-color: var(
      --ds-button-outline-active-background-color,
      var(
        --ds-theme-background-base-color,
        ${ot(button_DC9AV08H_t.outlineActiveBackgroundColor)}
      )
    );
    background-image: var(
      --ds-button-outline-active-background-image,
      ${ot(button_DC9AV08H_t.outlineActiveBackgroundImage)}
    );
  }

  /* ------- Button faint -------- */

  :host([appearance^='${ot(button_DC9AV08H_n.buttonFaint)}']) a,
  :host([appearance^='${ot(button_DC9AV08H_n.buttonFaint)}']) button {
    background-color: var(
      --ds-button-faint-background-color,
      var(--ds-color-transparent, ${ot(button_DC9AV08H_t.faintBackgroundColor)})
    );
    background-image: var(
      --ds-button-faint-background-image,
      ${ot(button_DC9AV08H_t.faintBackgroundImage)}
    );
    color: var(
      --ds-button-faint-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${ot(button_DC9AV08H_t.faintColor)}
      )
    );
    border-color: var(
      --ds-button-faint-border-color,
      var(--ds-color-transparent, ${ot(button_DC9AV08H_t.faintBorderColor)})
    );
  }

  :host([appearance^='${ot(button_DC9AV08H_n.buttonFaint)}']:not([disabled])) a:hover,
  :host([appearance^='${ot(button_DC9AV08H_n.buttonFaint)}']:not([disabled])) button:hover,
  :host([appearance^='${ot(button_DC9AV08H_n.buttonFaint)}']:not([disabled])) a:focus,
  :host([appearance^='${ot(button_DC9AV08H_n.buttonFaint)}']:not([disabled])) button:focus {
    border-color: var(
      --ds-button-faint-hover-border-color,
      var(--ds-color-transparent, ${ot(button_DC9AV08H_t.faintHoverBorderColor)})
    );
    background-color: var(
      --ds-button-faint-hover-background-color,
      var(--ds-color-transparent, ${ot(button_DC9AV08H_t.faintHoverBackgroundColor)})
    );
    background-image: var(
      --ds-button-faint-hover-background-image,
      ${ot(button_DC9AV08H_t.faintHoverBackgroundImage)}
    );
    color: var(
      --ds-button-faint-hover-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${ot(button_DC9AV08H_t.faintHoverColor)}
      )
    );
  }

  /* ------- Button faint active -------- */

  :host([appearance^='${ot(button_DC9AV08H_n.buttonFaint)}'][active]) button,
  :host([appearance^='${ot(button_DC9AV08H_n.buttonFaint)}'][active]) button:focus,
  :host([appearance^='${ot(button_DC9AV08H_n.buttonFaint)}'][active]) button:hover {
    color: var(
      --ds-button-faint-active-color,
      var(
        --ds-theme-foreground-accent-strong-normal,
        ${ot(button_DC9AV08H_t.faintActiveColor)}
      )
    );
    border-color: var(
      --ds-button-faint-active-border-color,
      var(--ds-color-transparent, ${ot(button_DC9AV08H_t.faintActiveBorderColor)})
    );
    background-color: var(
      --ds-button-faint-active-background-color,
      var(
        --ds-theme-background-base-color,
        ${ot(button_DC9AV08H_t.faintActiveBackgroundColor)}
      )
    );
    background-image: var(
      --ds-button-faint-active-background-image,
      ${ot(button_DC9AV08H_t.faintActiveBackgroundImage)}
    );
  }

  /* ------- Button link -------- */

  :host([appearance^='${ot(button_DC9AV08H_n.buttonLink)}']) button,
  :host([appearance^='${ot(button_DC9AV08H_n.buttonLink)}']:not([disabled])) button:hover,
  :host([appearance^='${ot(button_DC9AV08H_n.buttonLink)}']:not([disabled])) button:focus {
    border: none;
    background: transparent;
    border-radius: 0;
    color: var(
      --ds-button-link-color,
      var(--ds-theme-foreground-accent-subtle-normal, ${ot(button_DC9AV08H_t.linkColor)})
    );
    text-decoration: underline;
    box-shadow: none;
  }

  :host([appearance^='${ot(button_DC9AV08H_n.buttonLink)}'][inactive]) button,
  :host([appearance^='${ot(button_DC9AV08H_n.buttonLink)}'][inactive]:not([disabled]))
    button:hover,
  :host([appearance^='${ot(button_DC9AV08H_n.buttonLink)}'][inactive]:not([disabled]))
    button:focus {
    opacity: 1;
    text-decoration: none;
    color: var(
      --ds-button-link-inactive-color,
      var(--ds-color-gray-500, ${ot(button_DC9AV08H_t.linkInactiveColor)})
    );
    cursor: default;
  }
`;


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/action-trigger-BLNa8TwK.mjs




const action_trigger_BLNa8TwK_t = {
  paddingBlock: "0",
  paddingInline: "0",
  gap: "0.4375em",
  fontWeight: "600",
  fontSize: "1rem",
  color: variables_BKxyUZOC_R,
  // TODO: Work Item 11127 update to inactive color token when it becomes available
  inactiveColor: variables_BKxyUZOC_P,
  disabledOpacity: "0.3"
}, action_trigger_BLNa8TwK_p = Ct`
  :host([appearance^='${ot(button_DC9AV08H_n.actionTrigger)}']) a,
  :host([appearance^='${ot(button_DC9AV08H_n.actionTrigger)}']) button {
    border: none;
    padding-block: var(
      --ds-action-trigger-padding-block,
      ${ot(action_trigger_BLNa8TwK_t.paddingBlock)}
    );
    padding-inline: var(
      --ds-action-trigger-padding-inline,
      ${ot(action_trigger_BLNa8TwK_t.paddingInline)}
    );
    background: transparent;
    gap: var(--ds-action-trigger-gap, ${ot(action_trigger_BLNa8TwK_t.gap)});
    font-weight: var(
      --ds-action-trigger-font-weight,
      ${ot(action_trigger_BLNa8TwK_t.fontWeight)}
    );
    font-size: var(
      --ds-action-trigger-font-size,
      ${ot(action_trigger_BLNa8TwK_t.fontSize)}
    );
    color: var(
      --ds-action-trigger-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${ot(action_trigger_BLNa8TwK_t.color)}
      )
    );
    text-decoration: underline;
  }

  :host([appearance^='${ot(button_DC9AV08H_n.actionTrigger)}']) a:focus,
  :host([appearance^='${ot(button_DC9AV08H_n.actionTrigger)}']) button:focus {
    ${vfi_CyPinwDN_v}
  }

  /* TODO: disabled and inactive styles for button only, they should not apply to anchors */

  :host([appearance^='${ot(button_DC9AV08H_n.actionTrigger)}'])
    a.action-trigger--no-underline,
  :host([appearance^='${ot(button_DC9AV08H_n.actionTrigger)}'])
    button.action-trigger--no-underline {
    text-decoration: none;
  }

  :host([appearance^='${ot(button_DC9AV08H_n.actionTrigger)}'][disabled]) button {
    opacity: var(
      --ds-action-trigger-disabled-opacity,
      ${ot(action_trigger_BLNa8TwK_t.disabledOpacity)}
    );
    background-image: none;
    box-shadow: none;
  }

  :host([appearance='${ot(button_DC9AV08H_n.actionTrigger)}'].inactive) button {
    color: var(
      --ds-action-trigger-inactive-color,
      ${ot(action_trigger_BLNa8TwK_t.inactiveColor)}
    );
    text-decoration: none;
  }
`;


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/property-CfNGmgjg.mjs

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const property_CfNGmgjg_d = { attribute: !0, type: String, converter: I, reflect: !1, hasChanged: tt }, property_CfNGmgjg_h = (r = property_CfNGmgjg_d, n, t) => {
  const { kind: s, metadata: a } = t;
  let o = globalThis.litPropertyMetadata.get(a);
  if (o === void 0 && globalThis.litPropertyMetadata.set(a, o = /* @__PURE__ */ new Map()), o.set(t.name, r), s === "accessor") {
    const { name: e } = t;
    return { set(i) {
      const c = n.get.call(this);
      n.set.call(this, i), this.requestUpdate(e, c, r);
    }, init(i) {
      return i !== void 0 && this.P(e, void 0, r), i;
    } };
  }
  if (s === "setter") {
    const { name: e } = t;
    return function(i) {
      const c = this[e];
      n.call(this, i), this.requestUpdate(e, c, r);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function property_CfNGmgjg_f(r) {
  return (n, t) => typeof t == "object" ? property_CfNGmgjg_h(r, n, t) : ((s, a, o) => {
    const e = a.hasOwnProperty(o);
    return a.constructor.createProperty(o, e ? { ...s, wrapped: !0 } : s), e ? Object.getOwnPropertyDescriptor(a, o) : void 0;
  })(r, n, t);
}


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/state-B9yJz8Xo.mjs

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function state_B9yJz8Xo_n(t) {
  return property_CfNGmgjg_f({ ...t, state: !0, attribute: !1 });
}


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/base-CwU3eNq-.mjs
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const base_CwU3eNq_r = (t, o, e) => (e.configurable = !0, e.enumerable = !0, Reflect.decorate && typeof o != "object" && Object.defineProperty(t, o, e), e);


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/query-assigned-elements-BAj4hztX.mjs

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function query_assigned_elements_BAj4hztX_d(t) {
  return (c, i) => {
    const { slot: r, selector: o } = t ?? {}, l = "slot" + (r ? `[name=${r}]` : ":not([name])");
    return base_CwU3eNq_r(c, i, { get() {
      var s;
      const e = (s = this.renderRoot) == null ? void 0 : s.querySelector(l), n = (e == null ? void 0 : e.assignedElements(t)) ?? [];
      return o === void 0 ? n : n.filter((m) => m.matches(o));
    } });
  };
}


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/query-assigned-nodes-jfm_gNrB.mjs

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function query_assigned_nodes_jfm_gNrB_m(t) {
  return (n, s) => {
    const { slot: o } = t ?? {}, u = "slot" + (o ? `[name=${o}]` : ":not([name])");
    return base_CwU3eNq_r(n, s, { get() {
      var r;
      const e = (r = this.renderRoot) == null ? void 0 : r.querySelector(u);
      return (e == null ? void 0 : e.assignedNodes(t)) ?? [];
    } });
  };
}


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/class-map-B6E0u-KE.mjs

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const class_map_B6E0u_KE_a = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, class_map_B6E0u_KE_c = (e) => (...t) => ({ _$litDirective$: e, values: t });
class class_map_B6E0u_KE_d {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, r, n) {
    this._$Ct = t, this._$AM = r, this._$Ci = n;
  }
  _$AS(t, r) {
    return this.update(t, r);
  }
  update(t, r) {
    return this.render(...r);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const class_map_B6E0u_KE_u = class_map_B6E0u_KE_c(class extends class_map_B6E0u_KE_d {
  constructor(e) {
    var t;
    if (super(e), e.type !== class_map_B6E0u_KE_a.ATTRIBUTE || e.name !== "class" || ((t = e.strings) == null ? void 0 : t.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
  }
  update(e, [t]) {
    var n, i;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((s) => s !== "")));
      for (const s in t)
        t[s] && !((n = this.nt) != null && n.has(s)) && this.st.add(s);
      return this.render(t);
    }
    const r = e.element.classList;
    for (const s of this.st)
      s in t || (r.remove(s), this.st.delete(s));
    for (const s in t) {
      const o = !!t[s];
      o === this.st.has(s) || (i = this.nt) != null && i.has(s) || (o ? (r.add(s), this.st.add(s)) : (r.remove(s), this.st.delete(s)));
    }
    return v;
  }
});


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/if-defined-BrcqGSt5.mjs

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const if_defined_BrcqGSt5_m = (o) => o ?? d;


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/components/button/index.js











const button_m = {
  colorLight: t,
  colorDark: n,
  depth: variables_BKxyUZOC_g,
  size: "3rem",
  sizeLarge: "4.5rem",
  vfiStyle: "dashed",
  borderWidth: "0.25rem"
}, button_i = {
  light: Ct`var(--ds-media-control-color-light, var(--ds-color-white, ${ot(
    button_m.colorLight
  )}))`,
  dark: Ct`var(--ds-media-control-color-dark, var(--ds-color-black, ${ot(
    button_m.colorDark
  )}))`,
  size: Ct`var(--ds-media-control-size, ${ot(button_m.size)})`,
  sizeLarge: Ct`var(--ds-media-control-size-large, ${ot(
    button_m.sizeLarge
  )})`,
  borderOffset: Ct`calc(var(--ds-media-control-border-width, ${ot(
    button_m.borderWidth
  )}) * 2)`,
  iconAdjuster: "1.18"
}, button_T = Ct`
  /* stylelint-disable value-keyword-case */
  button {
    ${button_DC9AV08H_P}
  }

  :host([disabled]) button,
  :host(.inactive) button {
    cursor: default;
  }

  /* Action trigger */

  ${action_trigger_BLNa8TwK_p}

  /* Button */

  ${button_DC9AV08H_S}

  /* Media control */

  :host([appearance^='${ot(button_DC9AV08H_n.mediaControl)}']) button {
    height: ${ot(button_i.size)};
    width: ${ot(button_i.size)};
    font-size: calc(
      ${ot(button_i.size)} * ${ot(button_i.iconAdjuster)} -
        ${ot(button_i.borderOffset)}
    );
    border-radius: 50%;
    justify-content: center;
    padding: 0;
    color: ${ot(button_i.dark)};
    background-color: ${ot(button_i.light)};
    box-shadow: var(
      --ds-media-control-depth,
      var(--ds-depth-8, ${ot(button_m.depth)})
    );
  }

  :host([appearance^='${ot(button_DC9AV08H_n.mediaControl)}']) button:focus {
    ${e}
    outline-style: var(--ds-media-control-vfi-style, ${ot(
  button_m.vfiStyle
)});
    outline-offset: calc(
      var(--ds-media-control-border-width, ${ot(button_m.borderWidth)}) /
        -2 - 1px
    );
  }

  :host(
      [appearance^='${ot(button_DC9AV08H_n.mediaControl)}'][size='${ot(
  button_DC9AV08H_i.large
)}']
    )
    button {
    height: ${ot(button_i.sizeLarge)};
    width: ${ot(button_i.sizeLarge)};
    font-size: calc(
      ${ot(button_i.sizeLarge)} * ${ot(button_i.iconAdjuster)} -
        ${ot(button_i.borderOffset)}
    );
  }

  :host([appearance^='${ot(button_DC9AV08H_n.mediaControl)}'][appearance*='--light']) button {
    color: ${ot(button_i.light)};
    background-color: ${ot(button_i.dark)};
  }
`;
var button_L = Object.defineProperty, button_A = Object.getOwnPropertyDescriptor, button_a = (n, t, u, d) => {
  for (var r = d > 1 ? void 0 : d ? button_A(t, u) : t, c = n.length - 1, h; c >= 0; c--)
    (h = n[c]) && (r = (d ? h(t, u, r) : h(r)) || r);
  return d && r && button_L(t, u, r), r;
};
const button_j = (n) => {
  class t extends n {
    constructor() {
      super(...arguments), this.ariaDisabled = null, this.ariaHasPopup = null, this.ariaExpanded = null, this.ariaPressed = null, this.autoFocus = !1, this.disabled = !1, this.formNoValidate = !1;
    }
    /**
     * @internal not to be used by consumers
     * @param content - Inner content of the button
     * @param classname - Map of classes and booleans to determine of they should be applied
     * @param part - Name of the wrapper part
     * @returns - moray-button
     */
    renderButton(d, r, c = "base") {
      const h = { ...r };
      return Pt`
        <button
          class=${class_map_B6E0u_KE_u(h)}
          part=${c}
          aria-disabled="${if_defined_BrcqGSt5_m(this.ariaDisabled)}"
          aria-haspopup="${if_defined_BrcqGSt5_m(this.ariaHasPopup)}"
          aria-expanded="${if_defined_BrcqGSt5_m(this.ariaExpanded)}"
          aria-pressed="${if_defined_BrcqGSt5_m(this.ariaPressed)}"
          ?autofocus="${this.autoFocus}"
          ?disabled="${this.disabled}"
          form="${if_defined_BrcqGSt5_m(this.form)}"
          formaction="${if_defined_BrcqGSt5_m(this.formAction)}"
          formmethod="${if_defined_BrcqGSt5_m(this.formMethod)}"
          ?formnovalidate="${this.formNoValidate}"
          formtarget="${if_defined_BrcqGSt5_m(this.formTarget)}"
          name="${if_defined_BrcqGSt5_m(this.name)}"
          popovertarget="${if_defined_BrcqGSt5_m(this.popoverTarget)}"
          popovertargetaction="${if_defined_BrcqGSt5_m(this.popoverTargetAction)}"
          type="${if_defined_BrcqGSt5_m(this.type)}"
          value="${if_defined_BrcqGSt5_m(this.value)}"
        >
          ${d}
        </button>
      `;
    }
  }
  return button_a([
    property_CfNGmgjg_f({ attribute: "aria-disabled" })
  ], t.prototype, "ariaDisabled", 2), button_a([
    property_CfNGmgjg_f({ attribute: "aria-haspopup" })
  ], t.prototype, "ariaHasPopup", 2), button_a([
    property_CfNGmgjg_f({ attribute: "aria-expanded" })
  ], t.prototype, "ariaExpanded", 2), button_a([
    property_CfNGmgjg_f({ attribute: "aria-pressed" })
  ], t.prototype, "ariaPressed", 2), button_a([
    property_CfNGmgjg_f({ attribute: "autofocus", type: Boolean })
  ], t.prototype, "autoFocus", 2), button_a([
    property_CfNGmgjg_f({ type: Boolean })
  ], t.prototype, "disabled", 2), button_a([
    property_CfNGmgjg_f({})
  ], t.prototype, "form", 2), button_a([
    property_CfNGmgjg_f({ attribute: "formaction" })
  ], t.prototype, "formAction", 2), button_a([
    property_CfNGmgjg_f({ attribute: "formenctype" })
  ], t.prototype, "formEncType", 2), button_a([
    property_CfNGmgjg_f({ attribute: "formmethod" })
  ], t.prototype, "formMethod", 2), button_a([
    property_CfNGmgjg_f({ attribute: "formnovalidate", type: Boolean })
  ], t.prototype, "formNoValidate", 2), button_a([
    property_CfNGmgjg_f({ attribute: "formtarget" })
  ], t.prototype, "formTarget", 2), button_a([
    property_CfNGmgjg_f({})
  ], t.prototype, "name", 2), button_a([
    property_CfNGmgjg_f({ attribute: "popovertarget" })
  ], t.prototype, "popoverTarget", 2), button_a([
    property_CfNGmgjg_f({ attribute: "popovertargetaction" })
  ], t.prototype, "popoverTargetAction", 2), button_a([
    property_CfNGmgjg_f({})
  ], t.prototype, "type", 2), button_a([
    property_CfNGmgjg_f({})
  ], t.prototype, "value", 2), t;
};
var button_F = Object.defineProperty, button_M = Object.getOwnPropertyDescriptor, button_p = (n, t, u, d) => {
  for (var r = d > 1 ? void 0 : d ? button_M(t, u) : t, c = n.length - 1, h; c >= 0; c--)
    (h = n[c]) && (r = (d ? h(t, u, r) : h(r)) || r);
  return d && r && button_F(t, u, r), r;
};
const button_k = "moray-button";
let button_s = class extends button_j(R) {
  constructor() {
    super(...arguments), this.active = !1, this.inactive = !1, this.block = !1, this.pill = !1, this._firstSlotEmpty = !0, this._lastSlotEmpty = !0, this._slottedImgIcon = !1;
  }
  _handleSlotChange() {
    this._firstSlotEmpty = this._firstSlot.length === 0, this._lastSlotEmpty = this._lastSlot.length === 0, this._slottedImgIcon = this._checkSlotsForImgIcon();
  }
  _checkSlotsForImgIcon() {
    return [...this._defaultSlot, ...this._firstSlot, ...this._lastSlot].some(
      (n) => n.nodeName.toLowerCase() === "img" || n.nodeName.toLowerCase() === "moray-icon"
    );
  }
  render() {
    const n = {
      "action-trigger--no-underline": this.appearance === button_DC9AV08H_n.actionTrigger && this._slottedImgIcon
    };
    return this.renderButton(
      Pt`
        <span
          part="first"
          class="first"
          style="${this._firstSlotEmpty ? "display: none" : d}"
        >
          <slot name="first" @slotchange=${this._handleSlotChange}></slot>
        </span>
        <slot @slotchange=${this._handleSlotChange}></slot>
        <span part="last" class="last" style="${this._lastSlotEmpty ? "display: none" : d}">
          <slot name="last" @slotchange=${this._handleSlotChange}></slot>
        </span>
      `,
      n
    );
  }
};
button_s.shadowRootOptions = { ...R.shadowRootOptions, delegatesFocus: !0 };
button_s.styles = button_T;
button_p([
  property_CfNGmgjg_f({ reflect: !0 })
], button_s.prototype, "appearance", 2);
button_p([
  property_CfNGmgjg_f({ type: Boolean, reflect: !0 })
], button_s.prototype, "active", 2);
button_p([
  property_CfNGmgjg_f({ type: Boolean, reflect: !0 })
], button_s.prototype, "inactive", 2);
button_p([
  property_CfNGmgjg_f({ type: Boolean, reflect: !0 })
], button_s.prototype, "block", 2);
button_p([
  property_CfNGmgjg_f({ type: Boolean, reflect: !0 })
], button_s.prototype, "pill", 2);
button_p([
  property_CfNGmgjg_f({ reflect: !0 })
], button_s.prototype, "size", 2);
button_p([
  query_assigned_elements_BAj4hztX_d()
], button_s.prototype, "_defaultSlot", 2);
button_p([
  query_assigned_nodes_jfm_gNrB_m({ slot: "first" })
], button_s.prototype, "_firstSlot", 2);
button_p([
  query_assigned_nodes_jfm_gNrB_m({ slot: "last" })
], button_s.prototype, "_lastSlot", 2);
button_p([
  state_B9yJz8Xo_n()
], button_s.prototype, "_firstSlotEmpty", 2);
button_p([
  state_B9yJz8Xo_n()
], button_s.prototype, "_lastSlotEmpty", 2);
button_p([
  state_B9yJz8Xo_n()
], button_s.prototype, "_slottedImgIcon", 2);
button_s = button_p([
  Ut(button_k)
], button_s);


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/components/icon/index.js



const icon_e = {
  sizes: {
    default: "1em",
    xsmall: "0.8125em",
    small: "1em",
    medium: "1.25em",
    large: "1.5em"
  }
}, icon_p = Ct`
  :host {
    display: inline-block;
    width: var(--ds-icon-size-default, ${ot(icon_e.sizes.default)});
    min-width: var(--ds-icon-size-default, ${ot(icon_e.sizes.default)});
    height: var(--ds-icon-size-default, ${ot(icon_e.sizes.default)});
    min-height: var(--ds-icon-size-default, ${ot(icon_e.sizes.default)});
    box-sizing: content-box;
  }

  :host([size='xsmall']) {
    width: var(--ds-icon-size-xsmall, ${ot(icon_e.sizes.xsmall)});
    min-width: var(--ds-icon-size-xsmall, ${ot(icon_e.sizes.xsmall)});
    height: var(--ds-icon-size-xsmall, ${ot(icon_e.sizes.xsmall)});
    min-height: var(--ds-icon-size-xsmall, ${ot(icon_e.sizes.xsmall)});
  }

  :host([size='small']) {
    width: var(--ds-icon-size-small, ${ot(icon_e.sizes.small)});
    min-width: var(--ds-icon-size-small, ${ot(icon_e.sizes.small)});
    height: var(--ds-icon-size-small, ${ot(icon_e.sizes.small)});
    min-height: var(--ds-icon-size-small, ${ot(icon_e.sizes.small)});
  }

  :host([size='medium']) {
    width: var(--ds-icon-size-medium, ${ot(icon_e.sizes.medium)});
    min-width: var(--ds-icon-size-medium, ${ot(icon_e.sizes.medium)});
    height: var(--ds-icon-size-medium, ${ot(icon_e.sizes.medium)});
    min-height: var(--ds-icon-size-medium, ${ot(icon_e.sizes.medium)});
  }

  :host([size='large']) {
    width: var(--ds-icon-size-large, ${ot(icon_e.sizes.large)});
    min-width: var(--ds-icon-size-large, ${ot(icon_e.sizes.large)});
    height: var(--ds-icon-size-large, ${ot(icon_e.sizes.large)});
    min-height: var(--ds-icon-size-large, ${ot(icon_e.sizes.large)});
  }

  svg,
  ::slotted(svg) {
    display: block;
    height: 100%;
    width: 100%;
    fill: currentColor;
  }
`, icon_f = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 5c-.38 0-.7.28-.74.65l-.01.1v3.5h-3.5a.75.75 0 0 0-.1 1.5h3.6v3.5a.75.75 0 0 0 1.5.1v-3.6h3.5a.75.75 0 0 0 .1-1.5h-3.6v-3.5A.75.75 0 0 0 12 7Z"/></svg>', icon_x = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM12 7c.41 0 .75.34.75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5c0-.41.34-.75.75-.75Z"/></svg>', icon_Z = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.28 10.3a1 1 0 0 0 1.43 1.4L11 6.33V20a1 1 0 1 0 2 0V6.33l5.28 5.37a1 1 0 0 0 1.43-1.4l-6.82-6.93c-.5-.5-1.3-.5-1.78 0L4.28 10.3Z"/></svg>', icon_b = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.2 10.73a.75.75 0 0 0 1.1 1.04l5.95-6.25v14.73a.75.75 0 0 0 1.5 0V5.52l5.95 6.25a.75.75 0 0 0 1.1-1.04l-7.08-7.42a1 1 0 0 0-1.44 0L4.2 10.73Z"/></svg>', icon_z = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m8.5 16.59-3.8-3.8a1 1 0 0 0-1.4 1.42l4.5 4.5a1 1 0 0 0 1.4 0l11-11a1 1 0 0 0-1.4-1.42L8.5 16.6Z"/></svg>', icon_M = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.53 12.97a.75.75 0 0 0-1.06 1.06l4.5 4.5c.3.3.77.3 1.06 0l11-11a.75.75 0 0 0-1.06-1.06L8.5 16.94l-3.97-3.97Z"/></svg>', icon_B = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.3 8.3a1 1 0 0 1 1.4 0l6.3 6.29 6.3-6.3a1 1 0 1 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1 0-1.42Z"/></svg>', icon_L = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.22 8.47c.3-.3.77-.3 1.06 0L12 15.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-7.25 7.25c-.3.3-.77.3-1.06 0L4.22 9.53a.75.75 0 0 1 0-1.06Z"/></svg>', $ = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.7 4.3a1 1 0 0 1 0 1.4L9.42 12l6.3 6.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 0Z"/></svg>', icon_y = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.53 4.22c.3.3.3.77 0 1.06L8.81 12l6.72 6.72a.75.75 0 1 1-1.06 1.06l-7.25-7.25a.75.75 0 0 1 0-1.06l7.25-7.25c.3-.3.77-.3 1.06 0Z"/></svg>', icon_A = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 4.3a1 1 0 0 0 0 1.4l6.29 6.3-6.3 6.3a1 1 0 1 0 1.42 1.4l7-7a1 1 0 0 0 0-1.4l-7-7a1 1 0 0 0-1.42 0Z"/></svg>', icon_C = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.47 4.22c-.3.3-.3.77 0 1.06L15.19 12l-6.72 6.72a.75.75 0 1 0 1.06 1.06l7.25-7.25c.3-.3.3-.77 0-1.06L9.53 4.22a.75.75 0 0 0-1.06 0Z"/></svg>', icon_I = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.3 15.7a1 1 0 0 0 1.4 0L12 9.42l6.3 6.3a1 1 0 0 0 1.4-1.42l-7-7a1 1 0 0 0-1.4 0l-7 7a1 1 0 0 0 0 1.42Z"/></svg>', icon_O = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.22 15.53c.3.3.77.3 1.06 0L12 8.81l6.72 6.72a.75.75 0 1 0 1.06-1.06l-7.25-7.25a.75.75 0 0 0-1.06 0l-7.25 7.25c-.3.3-.3.77 0 1.06Z"/></svg>', icon_P = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"/></svg>', icon_S = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"/></svg>', icon_j = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.21 4.39.08-.1a1 1 0 0 1 1.32-.08l.1.08L12 10.6l6.3-6.3a1 1 0 1 1 1.4 1.42L13.42 12l6.3 6.3a1 1 0 0 1 .08 1.31l-.08.1a1 1 0 0 1-1.32.08l-.1-.08L12 13.4l-6.3 6.3a1 1 0 0 1-1.4-1.42L10.58 12l-6.3-6.3a1 1 0 0 1-.08-1.31l.08-.1-.08.1Z"/></svg>', icon_D = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.4 4.55.07-.08a.75.75 0 0 1 .98-.07l.08.07L12 10.94l6.47-6.47a.75.75 0 1 1 1.06 1.06L13.06 12l6.47 6.47c.27.27.3.68.07.98l-.07.08a.75.75 0 0 1-.98.07l-.08-.07L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 0 1-.07-.98l.07-.08-.07.08Z"/></svg>', icon_V = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.5 6.25v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 1.5 0Zm4.5 0v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 1.5 0Z"/></svg>', icon_k = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 8.25a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5Zm4.5 0a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"/></svg>', icon_q = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm8.86-3.85A1.25 1.25 0 0 0 9 9.25v5.5c0 .95 1.02 1.56 1.86 1.1l5.75-3.2a.75.75 0 0 0 0-1.3l-5.75-3.2Z"/></svg>', H = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.86 8.15A1.25 1.25 0 0 0 9 9.25v5.5c0 .95 1.02 1.56 1.86 1.1l5.75-3.2a.75.75 0 0 0 0-1.3l-5.75-3.2ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"/></svg>', icon_R = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-7a7 7 0 1 0 4.2 12.6l5.1 5.1a1 1 0 0 0 1.4-1.4l-5.1-5.1A7 7 0 0 0 10 3Z"/></svg>', icon_E = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 10a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM10 3a7 7 0 1 0 4.4 12.45l5.32 5.33a.75.75 0 1 0 1.06-1.06l-5.33-5.33A7 7 0 0 0 10 3Z"/></svg>', icon_F = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 0 1-1.96 1.42L12 18.86l-4.72 2.48a1.35 1.35 0 0 1-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78Z"/></svg>', icon_G = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 0 1-1.96 1.42L12 18.86l-4.72 2.48a1.35 1.35 0 0 1-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78Zm1.2.94L9.75 8.6c-.2.4-.58.68-1.02.74l-5.05.74 3.66 3.56c.32.3.46.76.39 1.2l-.87 5.02 4.52-2.37c.4-.2.86-.2 1.26 0l4.51 2.37-.86-5.03c-.07-.43.07-.88.39-1.2l3.65-3.55-5.05-.74a1.35 1.35 0 0 1-1.01-.74L12 4.04Z"/></svg>', icon_J = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm-4.25 9.25a.75.75 0 0 0-.1 1.5h8.6a.75.75 0 0 0 .1-1.5h-8.6Z"/></svg>', icon_K = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm4.25 7.75a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h8.5Z"/></svg>', icon_N = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.03 3.66a2.25 2.25 0 0 1 3.94 0l7.74 14A2.25 2.25 0 0 1 19.74 21H4.25a2.25 2.25 0 0 1-1.97-3.34l7.75-14ZM13 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-.26-7.85a.75.75 0 0 0-1.5.1v4.5l.02.1a.75.75 0 0 0 1.49-.1v-4.5l-.01-.1Z"/></svg>', icon_Q = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-.26-7.85a.75.75 0 0 0-1.5.1l.01 4.5v.1a.75.75 0 0 0 1.5-.1v-4.5l-.01-.1Zm1.23-5.5a2.25 2.25 0 0 0-3.94 0L2.3 17.67A2.25 2.25 0 0 0 4.26 21h15.49c1.71 0 2.8-1.84 1.96-3.34l-7.74-14Zm-2.63.74a.75.75 0 0 1 1.32 0l7.74 14a.75.75 0 0 1-.65 1.11H4.25a.75.75 0 0 1-.65-1.11l7.74-14Z"/></svg>', icon_c = /* @__PURE__ */ Object.assign({
  "../../../../../../node_modules/@fluentui/svg-icons/icons/add_circle_24_filled.svg": icon_f,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/add_circle_24_regular.svg": icon_x,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/arrow_up_24_filled.svg": icon_Z,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/arrow_up_24_regular.svg": icon_b,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/checkmark_24_filled.svg": icon_z,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/checkmark_24_regular.svg": icon_M,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_down_24_filled.svg": icon_B,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_down_24_regular.svg": icon_L,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_left_24_filled.svg": $,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_left_24_regular.svg": icon_y,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_right_24_filled.svg": icon_A,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_right_24_regular.svg": icon_C,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_up_24_filled.svg": icon_I,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_up_24_regular.svg": icon_O,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/circle_24_filled.svg": icon_P,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/circle_24_regular.svg": icon_S,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/dismiss_24_filled.svg": icon_j,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/dismiss_24_regular.svg": icon_D,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/pause_circle_24_filled.svg": icon_V,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/pause_circle_24_regular.svg": icon_k,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/play_circle_24_filled.svg": icon_q,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/play_circle_24_regular.svg": H,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/search_24_filled.svg": icon_R,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/search_24_regular.svg": icon_E,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/star_24_filled.svg": icon_F,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/star_24_regular.svg": icon_G,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/subtract_circle_24_filled.svg": icon_J,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/subtract_circle_24_regular.svg": icon_K,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/warning_24_filled.svg": icon_N,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/warning_24_regular.svg": icon_Q
}), icon_T = Object.keys(icon_c), icon_U = (i = "") => icon_T.includes(i), icon_W = ({ name: i = "", filled: t }) => {
  const v = `../../../../../../node_modules/@fluentui/svg-icons/icons/${i.replace("-", "_").toLowerCase()}_24_${t ? "filled" : "regular"}.svg`;
  return icon_U(v) ? icon_c[v] : "";
};
var icon_X = Object.defineProperty, icon_Y = Object.getOwnPropertyDescriptor, icon_a = (i, t, n, l) => {
  for (var o = l > 1 ? void 0 : l ? icon_Y(t, n) : t, v = i.length - 1, h; v >= 0; v--)
    (h = i[v]) && (o = (l ? h(t, n, o) : h(o)) || o);
  return l && o && icon_X(t, n, o), o;
};
const s0 = "moray-icon";
let icon_g = class extends R {
  constructor() {
    super(...arguments), this.filled = !1, this.ariaLabel = null;
  }
  updated(i) {
    i.has("ariaLabel") && this._setAriaAttrs(), i.has("icon") && this.setIcon();
  }
  /** Sets the Icon. */
  setIcon() {
    var i;
    if (this._slotContents && this._slotContents.length === 0 && this.icon) {
      const t = icon_W({
        name: this.icon,
        filled: this.filled
      }), n = t && new DOMParser().parseFromString(t, "text/html"), l = n && n.body.querySelector("svg");
      l && (this.removeIcon(), (i = this.shadowRoot) == null || i.append(l));
    }
  }
  /** Removes the Icon. */
  removeIcon() {
    var t;
    const i = (t = this.shadowRoot) == null ? void 0 : t.querySelector("svg");
    i == null || i.remove();
  }
  _setAriaAttrs() {
    this.ariaLabel ? (this.setAttribute("role", "img"), this.removeAttribute("aria-hidden")) : (this.setAttribute("aria-hidden", "true"), this.removeAttribute("role"));
  }
  render() {
    return Pt` <slot></slot> `;
  }
};
icon_g.styles = [icon_p];
icon_a([
  property_CfNGmgjg_f()
], icon_g.prototype, "icon", 2);
icon_a([
  property_CfNGmgjg_f()
], icon_g.prototype, "size", 2);
icon_a([
  property_CfNGmgjg_f({ type: Boolean })
], icon_g.prototype, "filled", 2);
icon_a([
  property_CfNGmgjg_f({ attribute: "aria-label" })
], icon_g.prototype, "ariaLabel", 2);
icon_a([
  query_assigned_elements_BAj4hztX_d()
], icon_g.prototype, "_slotContents", 2);
icon_g = icon_a([
  Ut(s0)
], icon_g);


// EXTERNAL MODULE: ./src/components/block-heading/index.ts + 1 modules
var block_heading = __webpack_require__(8358);
// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js
var lit_html = __webpack_require__(3692);
;// CONCATENATED MODULE: ./node_modules/lit-html/directive.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const directive_t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},directive_e=t=>(...e)=>({_$litDirective$:t,values:e});class directive_i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
//# sourceMappingURL=directive.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/directives/unsafe-html.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class unsafe_html_e extends directive_i{constructor(i){if(super(i),this.it=lit_html/* nothing */.Ld,i.type!==directive_t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===lit_html/* nothing */.Ld||null==r)return this._t=void 0,this.it=r;if(r===lit_html/* noChange */.Jb)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const unsafe_html_o=directive_e(unsafe_html_e);
//# sourceMappingURL=unsafe-html.js.map

;// CONCATENATED MODULE: ./node_modules/lit/directives/unsafe-html.js

//# sourceMappingURL=unsafe-html.js.map

;// CONCATENATED MODULE: ./src/components/tech-specs/index.ts








let TechSpecs = class TechSpecs extends lit/* LitElement */.oi {
    constructor() {
        super(...arguments);
        /**
         * The visual color theme.
         *
         * @remarks
         * HTML Attribute: theme
         */
        this.theme = 'day';
        this.product = [];
        this.techSpecsExpanded = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.product = [this.availableProduct];
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    render() {
        const icon = this.techSpecsExpanded ? 'subtract-circle' : 'add-circle';
        return (0,lit/* html */.dy) `
      <div class="theme-${this.theme}">
        <div class="specs-and-stats__block-heading">
          <slot name="block-heading"></slot>
        </div>

        <div
          id="contents"
          class="tech-spec-root ${this.techSpecsExpanded ? '' : 'hidden'}"
        >
          ${this._renderTechSpecsSection()}
          <div id="ts-footnote">
            <slot name="ts-footnote"></slot>
          </div>
        </div>
        <div class="btn-group">
          <moray-button
            class="btn"
            appearance="action-trigger"
            @click=${this._toggleTechSpecs}
            aria-expanded=${this.techSpecsExpanded}
          >
            <moray-icon
              icon="${icon}"
              style="color:white"
              size="large"
            ></moray-icon>
            ${this.techSpecsExpanded
            ? (0,lit/* html */.dy) `<slot name="ts-buttontxt-less"></slot>`
            : (0,lit/* html */.dy) `<slot name="ts-buttontxt-more"></slot>`}
          </moray-button>
        </div>
      </div>
    `;
    }
    _renderTechSpecsSection() {
        return (0,lit/* html */.dy) `
      <div class="ts-main" id="techspecs" tabindex="-1" aria-hidden="true">
        <table class="table">
          <th class="ts-table-header"><slot name="ts-table-header"></slot></th>
          <tbody>
            ${this._renderTechSpecsRows()}
          </tbody>
        </table>
      </div>
    `;
    }
    _renderTechSpecsRows() {
        const techSpecsRows = invert2DArray(this.product.map((p) => p?.techSpecs ?? []));
        return (0,lit/* html */.dy) `
      ${techSpecsRows.map((rowSpecs) => (0,lit/* html */.dy) `
          <tr class="table-row">
            ${rowSpecs.map((spec, colIdx) => (0,lit/* html */.dy) `
                ${colIdx === 0 && spec
            ? (0,lit/* html */.dy) `<td class="table-cell">
                      <h4>${unsafe_html_o(spec.header)}</h4>
                    </td>`
            : lit/* nothing */.Ld}
              `)}
            ${rowSpecs.map((spec) => (0,lit/* html */.dy) `
                ${!spec
            ? lit/* nothing */.Ld
            : (0,lit/* html */.dy) `<td class="table-cell">
                      <p>
                        ${spec.contents.map((content) => (0,lit/* html */.dy) ` ${unsafe_html_o(content)} `)}
                      </p>
                    </td> `}
              `)}
          </tr>
        `)}
    `;
    }
    _toggleTechSpecs() {
        this.techSpecsExpanded = !this.techSpecsExpanded;
    }
};
TechSpecs.styles = [techSpecsStyles];
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)()
], TechSpecs.prototype, "theme", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* property */.Cb)({ attribute: 'product', type: Object })
], TechSpecs.prototype, "availableProduct", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* state */.SB)()
], TechSpecs.prototype, "product", void 0);
(0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* state */.SB)()
], TechSpecs.prototype, "techSpecsExpanded", void 0);
TechSpecs = (0,tslib_es6/* __decorate */.gn)([
    (0,decorators/* customElement */.Mo)('cascade-tech-specs')
], TechSpecs);

function invert2DArray(things) {
    const maxRowLength = things.reduce((max, arr) => Math.max(max, arr.length), 0);
    const inverted = [];
    for (let i = 0; i < maxRowLength; i++) {
        inverted.push([]);
        for (let j = 0; j < things.length; j++) {
            inverted[i].push(i < things[j].length ? things[j][i] : null);
        }
    }
    return inverted;
}

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map