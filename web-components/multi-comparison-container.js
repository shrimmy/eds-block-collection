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
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MultiComparisonContainerElement: () => (/* binding */ MultiComparisonContainerElement)
});

;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.mjs
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

/* harmony default export */ const tslib_es6 = ({
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

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/css-tag.js
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const css_tag_t=globalThis,e=css_tag_t.ShadowRoot&&(void 0===css_tag_t.ShadyCSS||css_tag_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(s,t))}return t}toString(){return this.cssText}}const r=t=>new n("string"==typeof t?t:t+"",void 0,s),css_tag_i=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n(o,t,s)},S=(s,o)=>{if(e)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=css_tag_t.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o)}},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;
//# sourceMappingURL=css-tag.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/reactive-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:reactive_element_i,defineProperty:reactive_element_e,getOwnPropertyDescriptor:reactive_element_r,getOwnPropertyNames:h,getOwnPropertySymbols:reactive_element_o,getPrototypeOf:reactive_element_n}=Object,reactive_element_a=globalThis,reactive_element_c=reactive_element_a.trustedTypes,l=reactive_element_c?reactive_element_c.emptyScript:"",p=reactive_element_a.reactiveElementPolyfillSupport,d=(t,s)=>t,u={toAttribute(t,s){switch(s){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,s)=>!reactive_element_i(t,s),y={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),reactive_element_a.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&reactive_element_e(this.prototype,t,r)}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=reactive_element_r(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;const t=reactive_element_n(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){const t=this.properties,s=[...h(t),...reactive_element_o(t)];for(const i of s)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c(s))}else void 0!==s&&i.push(c(s));return i}static _$Eu(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f)(this[t],s))return;this.P(t,s,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d("elementProperties")]=new Map,b[d("finalized")]=new Map,p?.({ReactiveElement:b}),(reactive_element_a.reactiveElementVersions??=[]).push("2.0.4");
//# sourceMappingURL=reactive-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lit_html_t=globalThis,lit_html_i=lit_html_t.trustedTypes,lit_html_s=lit_html_i?lit_html_i.createPolicy("lit-html",{createHTML:t=>t}):void 0,lit_html_e="$lit$",lit_html_h=`lit$${(Math.random()+"").slice(9)}$`,lit_html_o="?"+lit_html_h,lit_html_n=`<${lit_html_o}>`,lit_html_r=document,lit_html_l=()=>lit_html_r.createComment(""),lit_html_c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,lit_html_a=Array.isArray,lit_html_u=t=>lit_html_a(t)||"function"==typeof t?.[Symbol.iterator],lit_html_d="[ \t\n\f\r]",lit_html_f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${lit_html_d}(?:([^\\s"'>=/]+)(${lit_html_d}*=${lit_html_d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),lit_html_p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,lit_html_y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=lit_html_y(1),lit_html_b=lit_html_y(2),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=lit_html_r.createTreeWalker(lit_html_r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==lit_html_s?lit_html_s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=lit_html_f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===lit_html_f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??lit_html_f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:lit_html_p):c===g||c===lit_html_p?c=m:c===v||c===_?c=lit_html_f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===lit_html_f?s+lit_html_n:d>=0?(o.push(a),s.slice(0,d)+lit_html_e+s.slice(d)+lit_html_h+x):s+lit_html_h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(lit_html_e)){const i=v[a++],s=r.getAttribute(t).split(lit_html_h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(lit_html_h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(lit_html_h),s=t.length-1;if(s>0){r.textContent=lit_html_i?lit_html_i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],lit_html_l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],lit_html_l())}}}else if(8===r.nodeType)if(r.data===lit_html_o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(lit_html_h,t+1));)d.push({type:7,index:c}),t+=lit_html_h.length-1}c++}}static createElement(t,i){const s=lit_html_r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=lit_html_c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class lit_html_S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??lit_html_r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=lit_html_r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),lit_html_c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):lit_html_u(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==T&&lit_html_c(this._$AH)?this._$AA.nextSibling.data=t:this.T(lit_html_r.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new lit_html_S(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}k(t){lit_html_a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(lit_html_l()),this.S(lit_html_l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!lit_html_c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!lit_html_c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const z={P:lit_html_e,A:lit_html_h,C:lit_html_o,M:1,L:P,R:lit_html_S,D:lit_html_u,V:N,I:M,H:R,N:H,U:I,B:k,F:L},Z=lit_html_t.litHtmlPolyfillSupport;Z?.(V,M),(lit_html_t.litHtmlVersions??=[]).push("3.1.2");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(lit_html_l(),t),t,void 0,s??{})}return h._$AI(t),h};
//# sourceMappingURL=lit-html.js.map

;// CONCATENATED MODULE: ./node_modules/lit-element/lit-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lit_element_s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}}lit_element_s._$litElement$=!0,lit_element_s[("finalized","finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});const lit_element_r=globalThis.litElementPolyfillSupport;lit_element_r?.({LitElement:lit_element_s});const lit_element_o={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(globalThis.litElementVersions??=[]).push("4.0.4");
//# sourceMappingURL=lit-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit/index.js

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/custom-element.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const custom_element_t=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};
//# sourceMappingURL=custom-element.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/property.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const property_o={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f},property_r=(t=property_o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+n)};function property_n(t){return(e,o)=>"object"==typeof o?property_r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}
//# sourceMappingURL=property.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/state.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function state_r(r){return t({...r,state:!0,attribute:!1})}
//# sourceMappingURL=state.js.map

;// CONCATENATED MODULE: ./node_modules/lit/decorators.js

//# sourceMappingURL=decorators.js.map

;// CONCATENATED MODULE: ./src/components/multi-comparison-container/multi-comparison-container-styles.ts

const multiCompareStyles = css_tag_i `
  .multi-comparison-title-section {
    width: 100%;
    margin-right: var(--ds-title-section-margin-right-default, unset);
    margin-left: var(--ds-title-section-margin-left-default, unset);
    padding-right: var(--ds-title-section-padding-right-default, unset);
    padding-left: var(--ds-title-section-padding-left-default, unset);
  }

  @media (min-width: 1084px) {
    .multi-comparison-title-section {
      padding-right: var(--ds-title-section-padding-right-large, unset);
      padding-left: var(--ds-title-section-padding-left-large, unset);
      width: var(--ds-title-section-width-large, 90%);
      box-sizing: content-box;
    }
  }
  @media (min-width: 1400px) {
    .multi-comparison-title-section {
      max-width: 1600px;
    }
  }

  .multi-comparison-component {
    padding-top: var(--ds-theme-padding-top, 50px);
    padding-bottom: var(--ds-theme-padding-bottom, 50px);
    padding-right: var(--ds-theme-padding-right);
    padding-left: var(--ds-theme-padding-left);
  }
`;

;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/registration-Ac3YpkNH.mjs
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const registration_Ac3YpkNH_T = globalThis, registration_Ac3YpkNH_j = registration_Ac3YpkNH_T.ShadowRoot && (registration_Ac3YpkNH_T.ShadyCSS === void 0 || registration_Ac3YpkNH_T.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, D = Symbol(), B = /* @__PURE__ */ new WeakMap();
let Y = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== D)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (registration_Ac3YpkNH_j && t === void 0) {
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
  if (registration_Ac3YpkNH_j)
    n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else
    for (const e of t) {
      const s = document.createElement("style"), i = registration_Ac3YpkNH_T.litNonce;
      i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, n.appendChild(s);
    }
}, W = registration_Ac3YpkNH_j ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
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
const { is: lt, defineProperty: at, getOwnPropertyDescriptor: ct, getOwnPropertyNames: dt, getOwnPropertySymbols: pt, getPrototypeOf: $t } = Object, registration_Ac3YpkNH_f = globalThis, registration_Ac3YpkNH_V = registration_Ac3YpkNH_f.trustedTypes, ut = registration_Ac3YpkNH_V ? registration_Ac3YpkNH_V.emptyScript : "", registration_Ac3YpkNH_M = registration_Ac3YpkNH_f.reactiveElementPolyfillSupport, registration_Ac3YpkNH_b = (n, t) => n, registration_Ac3YpkNH_I = { toAttribute(n, t) {
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
} }, tt = (n, t) => !lt(n, t), q = { attribute: !0, type: String, converter: registration_Ac3YpkNH_I, reflect: !1, hasChanged: tt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), registration_Ac3YpkNH_f.litPropertyMetadata ?? (registration_Ac3YpkNH_f.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class registration_Ac3YpkNH_g extends HTMLElement {
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
    if (this.hasOwnProperty(registration_Ac3YpkNH_b("elementProperties")))
      return;
    const t = $t(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(registration_Ac3YpkNH_b("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(registration_Ac3YpkNH_b("properties"))) {
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
      const r = (((o = s.converter) == null ? void 0 : o.toAttribute) !== void 0 ? s.converter : registration_Ac3YpkNH_I).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(i) : this.setAttribute(i, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const r = s.getPropertyOptions(i), a = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((o = r.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? r.converter : registration_Ac3YpkNH_I;
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
registration_Ac3YpkNH_g.elementStyles = [], registration_Ac3YpkNH_g.shadowRootOptions = { mode: "open" }, registration_Ac3YpkNH_g[registration_Ac3YpkNH_b("elementProperties")] = /* @__PURE__ */ new Map(), registration_Ac3YpkNH_g[registration_Ac3YpkNH_b("finalized")] = /* @__PURE__ */ new Map(), registration_Ac3YpkNH_M == null || registration_Ac3YpkNH_M({ ReactiveElement: registration_Ac3YpkNH_g }), (registration_Ac3YpkNH_f.reactiveElementVersions ?? (registration_Ac3YpkNH_f.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const registration_Ac3YpkNH_w = globalThis, registration_Ac3YpkNH_N = registration_Ac3YpkNH_w.trustedTypes, J = registration_Ac3YpkNH_N ? registration_Ac3YpkNH_N.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, et = "$lit$", registration_Ac3YpkNH_ = `lit$${(Math.random() + "").slice(9)}$`, st = "?" + registration_Ac3YpkNH_, _t = `<${st}>`, registration_Ac3YpkNH_y = document, registration_Ac3YpkNH_C = () => registration_Ac3YpkNH_y.createComment(""), registration_Ac3YpkNH_P = (n) => n === null || typeof n != "object" && typeof n != "function", it = Array.isArray, ft = (n) => it(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", registration_Ac3YpkNH_k = `[ 	
\f\r]`, registration_Ac3YpkNH_S = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, K = /-->/g, registration_Ac3YpkNH_Z = />/g, registration_Ac3YpkNH_A = RegExp(`>|${registration_Ac3YpkNH_k}(?:([^\\s"'>=/]+)(${registration_Ac3YpkNH_k}*=${registration_Ac3YpkNH_k}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), F = /'/g, G = /"/g, nt = /^(?:script|style|textarea|title)$/i, At = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), Pt = At(1), registration_Ac3YpkNH_v = Symbol.for("lit-noChange"), registration_Ac3YpkNH_d = Symbol.for("lit-nothing"), Q = /* @__PURE__ */ new WeakMap(), registration_Ac3YpkNH_m = registration_Ac3YpkNH_y.createTreeWalker(registration_Ac3YpkNH_y, 129);
function rt(n, t) {
  if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return J !== void 0 ? J.createHTML(t) : t;
}
const mt = (n, t) => {
  const e = n.length - 1, s = [];
  let i, o = t === 2 ? "<svg>" : "", r = registration_Ac3YpkNH_S;
  for (let a = 0; a < e; a++) {
    const h = n[a];
    let c, p, l = -1, $ = 0;
    for (; $ < h.length && (r.lastIndex = $, p = r.exec(h), p !== null); )
      $ = r.lastIndex, r === registration_Ac3YpkNH_S ? p[1] === "!--" ? r = K : p[1] !== void 0 ? r = registration_Ac3YpkNH_Z : p[2] !== void 0 ? (nt.test(p[2]) && (i = RegExp("</" + p[2], "g")), r = registration_Ac3YpkNH_A) : p[3] !== void 0 && (r = registration_Ac3YpkNH_A) : r === registration_Ac3YpkNH_A ? p[0] === ">" ? (r = i ?? registration_Ac3YpkNH_S, l = -1) : p[1] === void 0 ? l = -2 : (l = r.lastIndex - p[2].length, c = p[1], r = p[3] === void 0 ? registration_Ac3YpkNH_A : p[3] === '"' ? G : F) : r === G || r === F ? r = registration_Ac3YpkNH_A : r === K || r === registration_Ac3YpkNH_Z ? r = registration_Ac3YpkNH_S : (r = registration_Ac3YpkNH_A, i = void 0);
    const u = r === registration_Ac3YpkNH_A && n[a + 1].startsWith("/>") ? " " : "";
    o += r === registration_Ac3YpkNH_S ? h + _t : l >= 0 ? (s.push(c), h.slice(0, l) + et + h.slice(l) + registration_Ac3YpkNH_ + u) : h + registration_Ac3YpkNH_ + (l === -2 ? a : u);
  }
  return [rt(n, o + (n[e] || "<?>") + (t === 2 ? "</svg>" : "")), s];
};
class U {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let o = 0, r = 0;
    const a = t.length - 1, h = this.parts, [c, p] = mt(t, e);
    if (this.el = U.createElement(c, s), registration_Ac3YpkNH_m.currentNode = this.el.content, e === 2) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (i = registration_Ac3YpkNH_m.nextNode()) !== null && h.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes())
          for (const l of i.getAttributeNames())
            if (l.endsWith(et)) {
              const $ = p[r++], u = i.getAttribute(l).split(registration_Ac3YpkNH_), H = /([.?@])?(.*)/.exec($);
              h.push({ type: 1, index: o, name: H[2], strings: u, ctor: H[1] === "." ? gt : H[1] === "?" ? vt : H[1] === "@" ? Et : O }), i.removeAttribute(l);
            } else
              l.startsWith(registration_Ac3YpkNH_) && (h.push({ type: 6, index: o }), i.removeAttribute(l));
        if (nt.test(i.tagName)) {
          const l = i.textContent.split(registration_Ac3YpkNH_), $ = l.length - 1;
          if ($ > 0) {
            i.textContent = registration_Ac3YpkNH_N ? registration_Ac3YpkNH_N.emptyScript : "";
            for (let u = 0; u < $; u++)
              i.append(l[u], registration_Ac3YpkNH_C()), registration_Ac3YpkNH_m.nextNode(), h.push({ type: 2, index: ++o });
            i.append(l[$], registration_Ac3YpkNH_C());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === st)
          h.push({ type: 2, index: o });
        else {
          let l = -1;
          for (; (l = i.data.indexOf(registration_Ac3YpkNH_, l + 1)) !== -1; )
            h.push({ type: 7, index: o }), l += registration_Ac3YpkNH_.length - 1;
        }
      o++;
    }
  }
  static createElement(t, e) {
    const s = registration_Ac3YpkNH_y.createElement("template");
    return s.innerHTML = t, s;
  }
}
function registration_Ac3YpkNH_E(n, t, e = n, s) {
  var r, a;
  if (t === registration_Ac3YpkNH_v)
    return t;
  let i = s !== void 0 ? (r = e._$Co) == null ? void 0 : r[s] : e._$Cl;
  const o = registration_Ac3YpkNH_P(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== o && ((a = i == null ? void 0 : i._$AO) == null || a.call(i, !1), o === void 0 ? i = void 0 : (i = new o(n), i._$AT(n, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = i : e._$Cl = i), i !== void 0 && (t = registration_Ac3YpkNH_E(n, i._$AS(n, t.values), i, s)), t;
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
    const { el: { content: e }, parts: s } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? registration_Ac3YpkNH_y).importNode(e, !0);
    registration_Ac3YpkNH_m.currentNode = i;
    let o = registration_Ac3YpkNH_m.nextNode(), r = 0, a = 0, h = s[0];
    for (; h !== void 0; ) {
      if (r === h.index) {
        let c;
        h.type === 2 ? c = new registration_Ac3YpkNH_x(o, o.nextSibling, this, t) : h.type === 1 ? c = new h.ctor(o, h.name, h.strings, this, t) : h.type === 6 && (c = new St(o, this, t)), this._$AV.push(c), h = s[++a];
      }
      r !== (h == null ? void 0 : h.index) && (o = registration_Ac3YpkNH_m.nextNode(), r++);
    }
    return registration_Ac3YpkNH_m.currentNode = registration_Ac3YpkNH_y, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class registration_Ac3YpkNH_x {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = registration_Ac3YpkNH_d, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
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
    t = registration_Ac3YpkNH_E(this, t, e), registration_Ac3YpkNH_P(t) ? t === registration_Ac3YpkNH_d || t == null || t === "" ? (this._$AH !== registration_Ac3YpkNH_d && this._$AR(), this._$AH = registration_Ac3YpkNH_d) : t !== this._$AH && t !== registration_Ac3YpkNH_v && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : ft(t) ? this.k(t) : this._(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
  }
  _(t) {
    this._$AH !== registration_Ac3YpkNH_d && registration_Ac3YpkNH_P(this._$AH) ? this._$AA.nextSibling.data = t : this.T(registration_Ac3YpkNH_y.createTextNode(t)), this._$AH = t;
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
      i === e.length ? e.push(s = new registration_Ac3YpkNH_x(this.S(registration_Ac3YpkNH_C()), this.S(registration_Ac3YpkNH_C()), this, this.options)) : s = e[i], s._$AI(o), i++;
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
    this.type = 1, this._$AH = registration_Ac3YpkNH_d, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = registration_Ac3YpkNH_d;
  }
  _$AI(t, e = this, s, i) {
    const o = this.strings;
    let r = !1;
    if (o === void 0)
      t = registration_Ac3YpkNH_E(this, t, e, 0), r = !registration_Ac3YpkNH_P(t) || t !== this._$AH && t !== registration_Ac3YpkNH_v, r && (this._$AH = t);
    else {
      const a = t;
      let h, c;
      for (t = o[0], h = 0; h < o.length - 1; h++)
        c = registration_Ac3YpkNH_E(this, a[s + h], e, h), c === registration_Ac3YpkNH_v && (c = this._$AH[h]), r || (r = !registration_Ac3YpkNH_P(c) || c !== this._$AH[h]), c === registration_Ac3YpkNH_d ? t = registration_Ac3YpkNH_d : t !== registration_Ac3YpkNH_d && (t += (c ?? "") + o[h + 1]), this._$AH[h] = c;
    }
    r && !i && this.j(t);
  }
  j(t) {
    t === registration_Ac3YpkNH_d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class gt extends O {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === registration_Ac3YpkNH_d ? void 0 : t;
  }
}
class vt extends O {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== registration_Ac3YpkNH_d);
  }
}
class Et extends O {
  constructor(t, e, s, i, o) {
    super(t, e, s, i, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = registration_Ac3YpkNH_E(this, t, e, 0) ?? registration_Ac3YpkNH_d) === registration_Ac3YpkNH_v)
      return;
    const s = this._$AH, i = t === registration_Ac3YpkNH_d && s !== registration_Ac3YpkNH_d || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, o = t !== registration_Ac3YpkNH_d && (s === registration_Ac3YpkNH_d || i);
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
    registration_Ac3YpkNH_E(this, t);
  }
}
const registration_Ac3YpkNH_L = registration_Ac3YpkNH_w.litHtmlPolyfillSupport;
registration_Ac3YpkNH_L == null || registration_Ac3YpkNH_L(U, registration_Ac3YpkNH_x), (registration_Ac3YpkNH_w.litHtmlVersions ?? (registration_Ac3YpkNH_w.litHtmlVersions = [])).push("3.1.2");
const bt = (n, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const o = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = i = new registration_Ac3YpkNH_x(t.insertBefore(registration_Ac3YpkNH_C(), o), o, void 0, e ?? {});
  }
  return i._$AI(n), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class registration_Ac3YpkNH_R extends registration_Ac3YpkNH_g {
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
    return registration_Ac3YpkNH_v;
  }
}
var X;
registration_Ac3YpkNH_R._$litElement$ = !0, registration_Ac3YpkNH_R.finalized = !0, (X = globalThis.litElementHydrateSupport) == null || X.call(globalThis, { LitElement: registration_Ac3YpkNH_R });
const registration_Ac3YpkNH_z = globalThis.litElementPolyfillSupport;
registration_Ac3YpkNH_z == null || registration_Ac3YpkNH_z({ LitElement: registration_Ac3YpkNH_R });
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


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/property-CfNGmgjg.mjs

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const property_CfNGmgjg_d = { attribute: !0, type: String, converter: registration_Ac3YpkNH_I, reflect: !1, hasChanged: tt }, property_CfNGmgjg_h = (r = property_CfNGmgjg_d, n, t) => {
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


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/vfi-CyPinwDN.mjs

const vfi_CyPinwDN_o = Ct`var(--ds-vfi-outline-width, 0.1875rem)`, vfi_CyPinwDN_i = Ct`var(--ds-vfi-outline-style, dotted)`, vfi_CyPinwDN_s = Ct`var(--ds-vfi-outline-offset, 0.25rem)`, vfi_CyPinwDN_f = Ct`calc(calc(${vfi_CyPinwDN_o} + 0.1875rem) * -1)`, vfi_CyPinwDN_c = Ct`calc(calc(${vfi_CyPinwDN_o}) * -1)`, vfi_CyPinwDN_l = Ct`var(--ds-vfi-text-color, currentcolor ${vfi_CyPinwDN_i} ${vfi_CyPinwDN_o})`, vfi_CyPinwDN_e = Ct`
  outline: ${vfi_CyPinwDN_l};
`, vfi_CyPinwDN_r = Ct`
  ${vfi_CyPinwDN_e}
  outline-offset: ${vfi_CyPinwDN_f};
`, vfi_CyPinwDN_v = Ct`
  ${vfi_CyPinwDN_e}
  outline-offset: ${vfi_CyPinwDN_s};
`;


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/transitions-iiKWrCzx.mjs

const transitions_iiKWrCzx_r = {
  d0: "0ms",
  d100: "100ms",
  d150: "150ms",
  d200: "200ms",
  d250: "250ms",
  d300: "300ms",
  d400: "400ms",
  d500: "500ms",
  d600: "600ms",
  d700: "700ms",
  d800: "800ms"
}, transitions_iiKWrCzx_o = {
  custom: "cubic-bezier(0.19, 1, 0.22, 1)",
  accelerateMax: "cubic-bezier(0.9, 0.1, 1, 0.2)",
  accelerateMid: "cubic-bezier(1, 0, 1, 1)",
  accelerateMin: "cubic-bezier(0.8, 0, 0.78, 1)",
  decelerateMax: "cubic-bezier(0.1, 0.9, 0.2, 1)",
  decelerateMid: "cubic-bezier(0, 0, 0, 1)",
  decelerateMin: "cubic-bezier(0.33, 0, 0.1, 1)",
  easyEase: "cubic-bezier(0.33, 0, 0.67, 1)",
  linear: "cubic-bezier(0.25, 0.25, 0.75, 0.75)",
  maxEasyEase: "cubic-bezier(0.8, 0, 0.2, 1)"
}, transitions_iiKWrCzx_t = {
  d100: "100ms",
  d200: "200ms",
  d300: "300ms",
  d400: "400ms"
}, transitions_iiKWrCzx_c = (e) => {
  const s = `transition: ${e};`;
  return Ct`
    ${ot(s)}

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `;
}, transitions_iiKWrCzx_d = (e) => {
  const s = `animation: ${e};`;
  return a`
    ${i(s)}

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `;
}, transitions_iiKWrCzx_m = (e) => a`
  .collapse {
    ${transitions_iiKWrCzx_c(`var(--ds-transition-collapse, ${e})`)}
  }

  .collapse:not(.show) {
    display: none;
  }
`, transitions_iiKWrCzx_l = (e, s) => a`
  .collapsing {
    height: 0;
    overflow: hidden;
    opacity: 0;
    transform: var(--ds-collapse-base-collapsing-transform, ${i(e)});

    ${transitions_iiKWrCzx_c(`var(--ds-transition-collapsing, ${s})`)}
  }
`, transitions_iiKWrCzx_b = Ct`
  ${transitions_iiKWrCzx_c("var(--ds-transition-fade, opacity 0.15s linear)")}
`;


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/variables-BKxyUZOC.mjs
const variables_BKxyUZOC_a = "#e6e6e6", variables_BKxyUZOC_o = "#d2d2d2", variables_BKxyUZOC_r = "#a2a2a2", variables_BKxyUZOC_e = "#757575", variables_BKxyUZOC_s = "transparent", variables_BKxyUZOC_n = "#000", variables_BKxyUZOC_t = "#fff", variables_BKxyUZOC_c = "#ffb900", variables_BKxyUZOC_m = "0 0 0.25rem 0 rgba(0, 0, 0, 0.12), 0 0 0.25rem 0 rgba(0, 0, 0, 0.12)", variables_BKxyUZOC_g = "0 0.063rem 0.25rem 0 rgba(0, 0, 0, 0.12), 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.12)", variables_BKxyUZOC_l = "0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.12), 0 0.25rem 1rem 0 rgba(0, 0, 0, 0.12)", variables_BKxyUZOC_d = "0 0 0 0 rgba(0, 0, 0, 0.12), 0 0 0 0 rgba(0, 0, 0, 0.12)", variables_BKxyUZOC_u = "0", variables_BKxyUZOC_h = "0.25rem", variables_BKxyUZOC_b = "60rem", variables_BKxyUZOC_f = "0", variables_BKxyUZOC_T = "0.25rem", variables_BKxyUZOC_i = "0.5rem", variables_BKxyUZOC_p = "1rem", variables_BKxyUZOC_S = "1.5rem", variables_BKxyUZOC_B = "0.75rem", variables_BKxyUZOC_N = "#0067b8", variables_BKxyUZOC_C = "rgba(0, 0, 0, 0.1)", variables_BKxyUZOC_k = "rgba(0, 103, 184, 0.15)", variables_BKxyUZOC_A = "#fff", variables_BKxyUZOC_F = "#f2f2f2", variables_BKxyUZOC_y = "#0067b8", variables_BKxyUZOC_D = "#fff", variables_BKxyUZOC_G = "#fff", variables_BKxyUZOC_R = "#0067b8", variables_BKxyUZOC_v = "#000", variables_BKxyUZOC_w = "#000", variables_BKxyUZOC_x = "#0067b8", variables_BKxyUZOC_P = "#757575", variables_BKxyUZOC_j = "#d2d2d2";


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/screenreaders-CBXfuHx-.mjs

const screenreaders_CBXfuHx_o = Ct`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px; // Fix for https://github.com/twbs/bootstrap/issues/25686
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px); // rect(0,0,0,0) can cause issues with some versions of Safari
  white-space: nowrap;
  border: 0;
`;


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/components/tabs/tab/index.js






const tab_t = {
  columnGap: variables_BKxyUZOC_i,
  rowGap: variables_BKxyUZOC_i,
  flexDirection: "row",
  fontSize: "1rem",
  fontWeight: "600",
  lineHeight: "1.25rem",
  textDecoration: "none",
  // TODO: Work Item 10959 update to theme token when available
  color: "#505050",
  backgroundColor: variables_BKxyUZOC_F,
  borderBlockStartColor: variables_BKxyUZOC_j,
  borderBlockEndColor: variables_BKxyUZOC_j,
  borderInlineStartColor: variables_BKxyUZOC_j,
  borderInlineEndColor: variables_BKxyUZOC_j,
  borderBlockStartWidth: "0.125rem",
  borderBlockEndWidth: "0",
  borderInlineStartWidth: "0.125rem",
  borderInlineEndWidth: "0.125rem",
  borderStartStartRadius: "0.25rem",
  borderStartEndRadius: "0.25rem",
  borderEndEndRadius: "0",
  borderEndStartRadius: "0",
  marginBlockEnd: "0",
  marginInlineStart: "0",
  paddingBlockStart: variables_BKxyUZOC_i,
  paddingBlockEnd: variables_BKxyUZOC_i,
  paddingInlineStart: variables_BKxyUZOC_B,
  paddingInlineEnd: variables_BKxyUZOC_B,
  // active
  activeZIndex: "1",
  activeColor: variables_BKxyUZOC_v,
  activeBackgroundColor: variables_BKxyUZOC_D,
  // TODO: Work Item 10959 update to theme token when available
  activeBorderBlockStartColor: "#505050",
  activeBorderBlockEndColor: "transparent",
  // TODO: Work Item 10959 update to theme token when available
  activeBorderInlineStartColor: "#505050",
  // TODO: Work Item 10959 update to theme token when available
  activeBorderInlineEndColor: "#505050",
  activeMarginBlockStart: "0",
  activeMarginBlockEnd: "0",
  // inactive hover
  hoverColor: variables_BKxyUZOC_v,
  hoverBackgroundColor: variables_BKxyUZOC_F,
  hoverMarginBlockStart: "0",
  hoverPaddingBlockStart: "0",
  // image
  imageContainerPosition: "static",
  imageContainerMargin: "0",
  imageContainerOutline: "none",
  imageOutlineColor: "currentcolor",
  imageActiveAfterContent: "none",
  imageActiveAfterDisplay: "none",
  imageActiveAfterPosition: "static",
  imageActiveAfterBorderRadius: "0.25rem",
  imageActiveAfterMarginTop: "0.1875rem",
  imageActiveAfterBorderWidth: "0.125rem",
  imageActiveAfterBorderColor: "transparent",
  imageActiveAfterBorderStyle: "solid",
  // image slot
  imageSlotBorderStartStartRadius: "0",
  imageSlotBorderStartEndRadius: "0",
  imageSlotBorderEndEndRadius: "0",
  imageSlotBorderEndStartRadius: "0",
  imageSlotBorderBlockStartWidth: "0",
  imageSlotBorderBlockEndWidth: "0",
  imageSlotBorderInlineStartWidth: "0",
  imageSlotBorderInlineEndWidth: "0",
  imageSlotBorderStyle: "solid",
  imageSlotBorderColor: "transparent",
  imageSlotPaddingBlockStart: "0",
  imageSlotPaddingBlockEnd: "0",
  imageSlotPaddingInlineStart: "0",
  imageSlotPaddingInlineEnd: "0",
  imageSlotFilter: "none",
  imageSlotDisplay: "contents",
  imageSlotOutline: "none",
  // label slot
  labelSlotOpacity: "1"
}, tab_w = Ct`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    max-width: 14.25rem;
    min-height: 1.4rem;
    column-gap: var(
      --ds-tab-column-gap,
      var(--ds-spacing-2, ${ot(tab_t.columnGap)})
    );
    row-gap: var(--ds-tab-row-gap, var(--ds-spacing-2, ${ot(tab_t.rowGap)}));

    font-size: var(--ds-tab-font-size, ${ot(tab_t.fontSize)});
    font-weight: var(--ds-tab-font-weight, ${ot(tab_t.fontWeight)});
    text-decoration: var(--ds-tab-text-decoration, ${ot(tab_t.textDecoration)});
    line-height: var(--ds-tab-line-height, ${ot(tab_t.lineHeight)});

    color: var(--ds-tab-color, ${ot(tab_t.color)});
    background-color: var(
      --ds-tab-background-color,
      var(--ds-theme-background-neutral-color, ${ot(tab_t.backgroundColor)})
    );

    border-block-start-color: var(
      --ds-tab-border-block-start-color,
      var(--ds-theme-border-neutral-fade, ${ot(tab_t.borderBlockStartColor)})
    );
    border-block-end-color: var(
      --ds-tab-border-block-end-color,
      var(--ds-theme-border-neutral-fade, ${ot(tab_t.borderBlockEndColor)})
    );
    border-inline-start-color: var(
      --ds-tab-border-inline-start-color,
      var(--ds-theme-border-neutral-fade, ${ot(tab_t.borderInlineStartColor)})
    );
    border-inline-end-color: var(
      --ds-tab-border-inline-end-color,
      var(--ds-theme-border-neutral-fade, ${ot(tab_t.borderInlineEndColor)})
    );

    border-style: solid;

    border-block-start-width: var(
      --ds-tab-border-block-start-width,
      ${ot(tab_t.borderBlockStartWidth)}
    );
    border-block-end-width: var(
      --ds-tab-border-block-end-width,
      ${ot(tab_t.borderBlockEndWidth)}
    );
    border-inline-start-width: var(
      --ds-tab-border-inline-start-width,
      ${ot(tab_t.borderInlineStartWidth)}
    );
    border-inline-end-width: var(
      --ds-tab-border-inline-end-width,
      ${ot(tab_t.borderInlineEndWidth)}
    );

    border-start-start-radius: var(
      --ds-tab-border-start-start-radius,
      ${ot(tab_t.borderStartStartRadius)}
    );
    border-start-end-radius: var(
      --ds-tab-border-start-end-radius,
      ${ot(tab_t.borderStartEndRadius)}
    );
    border-end-end-radius: var(
      --ds-tab-border-end-end-radius,
      ${ot(tab_t.borderEndEndRadius)}
    );
    border-end-start-radius: var(
      --ds-tab-border-end-start-radius,
      ${ot(tab_t.borderEndStartRadius)}
    );

    margin-block-end: var(--ds-tab-margin-block-end, ${ot(tab_t.marginBlockEnd)});
    padding-block-start: var(
      --ds-tab-padding-block-start,
      var(--ds-spacing-2, ${ot(tab_t.paddingBlockStart)})
    );
    padding-block-end: var(
      --ds-tab-padding-block-end,
      var(--ds-spacing-2, ${ot(tab_t.paddingBlockEnd)})
    );
    padding-inline-start: var(
      --ds-tab-padding-inline-start,
      var(--ds-spacing-g, ${ot(tab_t.paddingInlineStart)})
    );
    padding-inline-end: var(
      --ds-tab-padding-inline-end,
      var(--ds-spacing-g, ${ot(tab_t.paddingInlineEnd)})
    );
  }

  :host([active]) {
    z-index: var(--ds-tab-active-color, ${ot(tab_t.activeZIndex)});
    color: var(--ds-tab-active-color, ${ot(tab_t.activeColor)});
    background-color: var(
      --ds-tab-active-background-color,
      ${ot(tab_t.activeBackgroundColor)}
    );

    border-block-start-color: var(
      --ds-tab-active-border-block-start-color,
      ${ot(tab_t.activeBorderBlockStartColor)}
    );
    border-block-end-color: var(
      --ds-tab-active-border-block-end-color,
      ${ot(tab_t.activeBorderBlockEndColor)}
    );
    border-inline-start-color: var(
      --ds-tab-active-border-inline-end-color,
      ${ot(tab_t.activeBorderInlineStartColor)}
    );
    border-inline-end-color: var(
      --ds-tab-active-border-inline-end-color,
      ${ot(tab_t.activeBorderInlineEndColor)}
    );

    margin-block-start: var(
      --ds-tab-active-margin-block-start,
      ${ot(tab_t.activeMarginBlockStart)}
    );
    margin-block-end: var(
      --ds-tab-active-margin-block-end,
      ${ot(tab_t.activeMarginBlockEnd)}
    );
  }

  :host([active]:hover),
  :host([active]:focus) {
    color: var(--ds-tab-active-hover-color, var(--ds-tab-active-color));
    background-color: var(
      --ds-tab-active-hover-background-color,
      var(--ds-tab-active-background-color)
    );
  }

  :host(:not([active]):hover),
  :host(:not([active]):focus) {
    color: var(--ds-tab-hover-color, ${ot(tab_t.hoverColor)});
    background-color: var(
      --ds-tab-hover-background-color,
      ${ot(tab_t.hoverBackgroundColor)}
    );
    margin-block-start: var(
      --ds-tab-hover-margin-block-start,
      ${ot(tab_t.hoverMarginBlockStart)}
    );
    padding-block-start: var(
      --ds-tab-hover-padding-block-start,
      ${ot(tab_t.hoverPaddingBlockStart)}
    );
  }

  :host(:not(:first-child)) {
    margin-inline-start: var(--ds-tab-margin-inline-start, 0);
  }

  /* TODO: rewrite animation to avoid animating all */
  :host(:not(:focus)) {
    ${transitions_iiKWrCzx_c("all 125ms ease-in-out")}
  }

  .sr-only {
    display: block;

    ${screenreaders_CBXfuHx_o}
  }

  :host([active])::after {
    content: var(--ds-tab-active-after-content, none);
    background-color: var(--ds-tab-active-after-background-color, transparent);
    height: var(--ds-tab-active-after-height, 0);
    width: var(--ds-tab-active-after-width, 0);
    left: var(--ds-tab-active-after-left, 0);
    bottom: var(--ds-tab-active-after-bottom, 0);
    border-start-start-radius: var(--ds-tab-active-after-border-start-start-radius, 0);
    border-start-end-radius: var(--ds-tab-active-after-border-start-end-radius, 0);
    border-end-end-radius: var(--ds-tab-active-after-outline-border-end-end-radius, 0);
    border-end-start-radius: var(--ds-tab-active-after-border-end-start-radius, 0);
    position: absolute;
  }

  :host(:focus) {
    ${vfi_CyPinwDN_e}
    outline-offset: var(--ds-tab-outline-offset, ${vfi_CyPinwDN_f});
  }

  slot:not([name])::slotted(*) {
    opacity: var(--ds-tab-label-slot-opacity, ${ot(tab_t.labelSlotOpacity)});
  }

  slot[name='image']::slotted(*) {
    filter: var(--ds-tab-image-filter, ${ot(tab_t.imageSlotFilter)});
  }

  .image {
    display: var(--ds-tab-image-display, ${ot(tab_t.imageSlotDisplay)});
    border-style: var(
      --ds-tab-image-border-style,
      ${ot(tab_t.imageSlotBorderStyle)}
    );
    border-color: var(
      --ds-tab-image-border-color,
      ${ot(tab_t.imageSlotBorderColor)}
    );
    border-block-start-width: var(
      --ds-tab-image-border-block-start-width,
      ${ot(tab_t.imageSlotBorderBlockStartWidth)}
    );
    border-block-end-width: var(
      --ds-tab-image-border-block-end-width,
      ${ot(tab_t.imageSlotBorderBlockEndWidth)}
    );
    border-inline-start-width: var(
      --ds-tab-image-border-inline-start-width,
      ${ot(tab_t.imageSlotBorderInlineStartWidth)}
    );
    border-inline-end-width: var(
      --ds-tab-image-border-inline-end-width,
      ${ot(tab_t.imageSlotBorderInlineEndWidth)}
    );
    border-start-start-radius: var(
      --ds-tab-image-border-start-start-radius,
      ${ot(tab_t.imageSlotBorderStartStartRadius)}
    );
    border-start-end-radius: var(
      --ds-tab-image-border-start-end-radius,
      ${ot(tab_t.imageSlotBorderStartEndRadius)}
    );
    border-end-start-radius: var(
      --ds-tab-image-border-end-start-radius,
      ${ot(tab_t.imageSlotBorderEndStartRadius)}
    );
    border-end-end-radius: var(
      --ds-tab-image-border-end-end-radius,
      ${ot(tab_t.imageSlotBorderEndEndRadius)}
    );
    padding-block-start: var(
      --ds-tab-image-padding-block-start,
      ${ot(tab_t.imageSlotPaddingBlockStart)}
    );
    padding-block-end: var(
      --ds-tab-image-padding-block-end,
      ${ot(tab_t.imageSlotPaddingBlockEnd)}
    );
    padding-inline-start: var(
      --ds-tab-image-padding-inline-start,
      ${ot(tab_t.imageSlotPaddingInlineStart)}
    );
    padding-inline-end: var(
      --ds-tab-image-padding-inline-end,
      ${ot(tab_t.imageSlotPaddingInlineEnd)}
    );
    outline: var(--ds-tab-image-outline, ${ot(tab_t.imageSlotOutline)});
    outline-color: var(
      --ds-tab-image-outline-color,
      ${ot(tab_t.imageOutlineColor)}
    );
    position: var(--ds-tab-image-position, ${ot(tab_t.imageContainerPosition)});
    margin: var(--ds-tab-image-margin, ${ot(tab_t.imageContainerMargin)});
  }

  .image::after {
    content: var(
      --ds-tab-image-after-content,
      ${ot(tab_t.imageActiveAfterContent)}
    );
    display: var(
      --ds-tab-image-after-display,
      ${ot(tab_t.imageActiveAfterDisplay)}
    );
    position: var(
      --ds-tab-image-after-position,
      ${ot(tab_t.imageActiveAfterPosition)}
    );
    width: 100%;
    box-sizing: border-box;
    margin-top: var(
      --ds-tab-image-after-margin-top,
      ${ot(tab_t.imageActiveAfterMarginTop)}
    );
    border-radius: var(
      --ds-tab-image-after-border-radius,
      ${ot(tab_t.imageActiveAfterBorderRadius)}
    );
    border-width: var(
      --ds-tab-image-after-border-width,
      ${ot(tab_t.imageActiveAfterBorderWidth)}
    );
    border-color: var(
      --ds-tab-image-after-border-color,
      ${ot(tab_t.imageActiveAfterBorderColor)}
    );
    border-style: var(
      --ds-tab-image-after-border-style,
      ${ot(tab_t.imageActiveAfterBorderStyle)}
    );
  }
`;
var tab_y = Object.defineProperty, tab_A = Object.getOwnPropertyDescriptor, tab_g = (o, e, s, i) => {
  for (var a = i > 1 ? void 0 : i ? tab_A(e, s) : e, b = o.length - 1, c; b >= 0; b--)
    (c = o[b]) && (a = (i ? c(e, s, a) : c(a)) || a);
  return i && a && tab_y(e, s, a), a;
};
const tab_P = "moray-tab";
let tab_W = 0, tab_d = class extends registration_Ac3YpkNH_R {
  constructor() {
    super(), this._componentId = ++tab_W, this._panelIdFallback = `tab${this._componentId}`, this._componentIdFallback = `${this._panelIdFallback}-tab`, this.active = !1, this.tabPanelId = null, this.addEventListener("mouseover", this._handleMouseEvent), this.addEventListener("mouseleave", this._handleMouseEvent);
  }
  willUpdate() {
    this.id = this.id.length > 0 ? this.id : this._componentIdFallback, this.tabPanelId = this.tabPanelId && this.tabPanelId.length > 0 ? this.tabPanelId : this._panelIdFallback, this.setAttribute("tabindex", this.active ? "0" : "-1");
  }
  _handleMouseEvent(o) {
    o.preventDefault();
    const e = {
      bubbles: !0,
      compose: !0
    };
    this.dispatchEvent(new CustomEvent(`tab${o.type}`, e));
  }
  render() {
    return Pt`
      <div class="image" part="image">
        <slot name="image"></slot>
      </div>
      <slot part="base"></slot>
    `;
  }
};
tab_d.styles = tab_w;
tab_g([
  property_CfNGmgjg_f({ type: Boolean, reflect: !0 })
], tab_d.prototype, "active", 2);
tab_g([
  property_CfNGmgjg_f({ attribute: "tab-panel-id" })
], tab_d.prototype, "tabPanelId", 2);
tab_d = tab_g([
  Ut(tab_P)
], tab_d);


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


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/keyboard-DX8Uc3JA.mjs
const keyboard_DX8Uc3JA_A = {
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CLEAR: "Clear",
  END: "End",
  ENTER: "Enter",
  ESC: "Escape",
  HOME: "Home",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SPACE: " ",
  TAB: "Tab"
};


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/localize.controller-DBuC7-PW.mjs
const localize_controller_DBuC7_PW_e = /* @__PURE__ */ new Set(), localize_controller_DBuC7_PW_s = new MutationObserver(localize_controller_DBuC7_PW_a);
let localize_controller_DBuC7_PW_n = document.documentElement.dir || "ltr", localize_controller_DBuC7_PW_o = document.documentElement.lang || navigator.language;
localize_controller_DBuC7_PW_s.observe(document.documentElement, {
  attributes: !0,
  attributeFilter: ["dir", "lang"]
});
function localize_controller_DBuC7_PW_a() {
  localize_controller_DBuC7_PW_n = document.documentElement.dir || "ltr", localize_controller_DBuC7_PW_o = document.documentElement.lang || navigator.language, [...localize_controller_DBuC7_PW_e.keys()].forEach((t) => {
    typeof t.requestUpdate == "function" && t.requestUpdate();
  });
}
class localize_controller_DBuC7_PW_d {
  constructor(r) {
    this._host = r, this._host.addController(this);
  }
  hostConnected() {
    localize_controller_DBuC7_PW_e.add(this._host);
  }
  hostDisconnected() {
    localize_controller_DBuC7_PW_e.delete(this._host);
  }
  /**
   * Gets the host element's directionality as determined by the `dir` attribute. The return value is transformed to
   * lowercase.
   * @returns {string} The directionality of the host element.
   */
  dir() {
    return `${this._host.dir || localize_controller_DBuC7_PW_n}`.toLowerCase();
  }
  /**
   * Gets the host element's language as determined by the `lang` attribute. The return value is transformed to
   * lowercase.
   * @returns {string} The language of the host element.
   */
  lang() {
    return `${this._host.lang || localize_controller_DBuC7_PW_o}`.toLowerCase();
  }
}


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/helpers-uHZJbBPu.mjs
const helpers_uHZJbBPu_r = [
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "a[href]",
  "button:not([disabled])",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])'
], helpers_uHZJbBPu_a = [...helpers_uHZJbBPu_r, '[tabindex]:not([tabindex^="-"]):not([disabled])'], helpers_uHZJbBPu_l = (t, e, n = !1) => {
  const o = t.getRootNode();
  return o instanceof ShadowRoot ? n ? o.querySelectorAll(e) : o.querySelector(e) : n ? document.querySelectorAll(e) : document.querySelector(e);
}, helpers_uHZJbBPu_d = (t, e = null) => {
  const n = getComputedStyle(t);
  if (!e)
    return t.offsetHeight;
  let o = t.offsetHeight;
  return e.cssSelectors.forEach((s) => {
    !s.toLowerCase().includes("top") && !s.toLowerCase().includes("bottom") ? o += parseInt(n[s + "Top"], 10) + parseInt(n[s + "Bottom"], 10) : s && (o += parseInt(n[s], 10));
  }), o;
}, helpers_uHZJbBPu_i = (t) => t.offsetHeight, helpers_uHZJbBPu_c = (t = document) => Array.from(t.querySelectorAll(helpers_uHZJbBPu_a.join(", ")));


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/transitions-4VkAEkzc.mjs
const transitions_4VkAEkzc_e = "transitionend", transitions_4VkAEkzc_l = (t) => {
  if (!t)
    return 0;
  let n = getComputedStyle(t)["transition-duration"], a = getComputedStyle(t)["transition-delay"];
  const o = parseFloat(n), i = parseFloat(a);
  return !o && !i ? 0 : (n = n.split(",")[0], a = a.split(",")[0], (parseFloat(n) + parseFloat(a)) * 1e3);
}, transitions_4VkAEkzc_s = (t) => {
  t.dispatchEvent(new Event(transitions_4VkAEkzc_e));
}, transitions_4VkAEkzc_d = (t, r = 0) => {
  let n = !1;
  const o = r + 5;
  function i() {
    n = !0, t.removeEventListener(transitions_4VkAEkzc_e, i);
  }
  t.addEventListener(transitions_4VkAEkzc_e, i), setTimeout(() => {
    n || transitions_4VkAEkzc_s(t);
  }, o);
};


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/components/tabs/tab-list/index.js











const tab_list_P = {
  center: "center",
  start: "start"
}, tab_list_o = {
  image: "image",
  imageUnderline: "image--underline",
  outline: "outline",
  standard: "standard",
  underline: "underline"
}, tab_list_ = {
  hide: "onHide",
  hidden: "onHidden",
  show: "onShow",
  shown: "onShown"
}, tab_list_e = {
  activeBorderBlockEndColor: "transparent",
  activeBorderBlockEndStyle: "none",
  activeBorderBlockEndWidth: "0",
  activeAfterBackgroundColor: variables_BKxyUZOC_x,
  listBackgroundColor: "none",
  listPaddingBlock: "0",
  listPaddingInline: "0",
  listBorderStartStartRadius: "0",
  listBorderStartEndRadius: "0",
  listBorderEndEndRadius: "0",
  listBorderEndStartRadius: "0",
  listInnerRowGap: "0",
  listInnerColumnGap: "0",
  listOuterBorderBlockEndColor: "#505050",
  listOuterBorderBlockEndStyle: "solid",
  listUnderlineOuterBorderBlockEndColor: "#858585",
  listUnderlineOuterBorderBlockEndStyle: "solid",
  listUnderlineOuterBorderBlockEndWidth: "0.0625rem",
  listSharedLabelMinHeight: "1rem",
  listTabPadding: "0.1875rem",
  listTabImageBorderRadius: "0.625rem",
  listTabImageBorderWidth: "0.1875rem",
  listTabImagePadding: "0.1875rem",
  listTabImageFilter: "grayscale(100%)",
  listTabImageActiveBorderColor: variables_BKxyUZOC_x,
  // TODO Work Item 10981 update to theme token when available
  listTabImageHoverBorderColor: variables_BKxyUZOC_r,
  listTabHoverColor: variables_BKxyUZOC_P,
  listImageUnderlineActiveAfterBorderColor: variables_BKxyUZOC_x,
  listImageUnderlineHoverAfterBorderColor: variables_BKxyUZOC_r,
  // Tab Image Underline
  // overrides
  listImageOutlineColor: variables_BKxyUZOC_v,
  listImageUnderlineActiveAfterDisplay: "block",
  listImageUnderlineActiveAfterPosition: "absolute",
  listImageUnderlineActiveAfterBorderRadius: "0.25rem",
  listImageUnderlineContainerPosition: "relative"
}, tab_list_T = "var(--ds-tab-border-block-start-width, 0.125rem)", tab_list_S = "var(--ds-tab-border-block-start-width, 0.125rem)", tab_list_L = "var(--ds-tab-margin-block-start, var(--ds-spacing-1, 0.25rem))", tab_list_C = "var(--ds-tab-padding-block-start, var(--ds-spacing-g, 0.5rem))", tab_list_R = `var(--ds-tab-hover-padding-block-start, calc(${tab_list_C} + ${tab_list_L}))`, tab_list_V = `var(--ds-tab-active-padding-block-start, calc(${tab_list_R} + ${tab_list_T}))`, tab_list_J = Ct`
  :host,
  .base {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    background-color: var(
      --ds-tab-list-background-color,
      ${ot(tab_list_e.listBackgroundColor)}
    );
    padding-block: var(--ds-tab-list-padding-block, ${ot(tab_list_e.listPaddingBlock)});
    padding-inline: var(
      --ds-tab-list-padding-inline,
      ${ot(tab_list_e.listPaddingInline)}
    );
    border-start-start-radius: var(
      --ds-tab-list-border-start-start-radius,
      ${ot(tab_list_e.listBorderStartStartRadius)}
    );
    border-start-end-radius: var(
      --ds-tab-list-border-start-end-radius,
      ${ot(tab_list_e.listBorderStartEndRadius)}
    );
    border-end-end-radius: var(
      --ds-tab-list-border-end-end-radius,
      ${ot(tab_list_e.listBorderEndEndRadius)}
    );
    border-end-start-radius: var(
      --ds-tab-list-border-end-start-radius,
      ${ot(tab_list_e.listBorderEndStartRadius)}
    );
  }

  .base {
    flex-direction: column;
  }

  .base slot {
    display: flex;
    column-gap: var(
      --ds-tab-list-inner-column-gap,
      ${ot(tab_list_e.listInnerColumnGap)}
    );
    row-gap: var(--ds-tab-list-inner-row-gap, ${ot(tab_list_e.listInnerRowGap)});
  }

  :host([alignment='${ot(tab_list_P.start)}']) {
    justify-content: start;
  }

  :host([shared-label]) .tab-list-shared-label {
    min-height: var(
      --ds-tab-list-shared-label-min-height,
      ${ot(tab_list_e.listSharedLabelMinHeight)}
    );
  }

  :host([appearance='${ot(tab_list_o.standard)}']) {
    border-block-end-color: var(
      --ds-tab-list-outer-border-block-end-color,
      var(
        --ds-theme-border-neutral-pure,
        ${ot(tab_list_e.listOuterBorderBlockEndColor)}
      )
    );
    border-block-end-style: var(
      --ds-tab-list-outer-border-block-end-style,
      ${ot(tab_list_e.listOuterBorderBlockEndStyle)}
    );
    border-block-end-width: var(
      --ds-tab-list-outer-border-block-end-width,
      ${ot(tab_list_T)}
    );
  }

  :host([appearance='${ot(tab_list_o.standard)}']) ::slotted(moray-tab) {
    color: var(--ds-tab-color, var(--ds-theme-foreground-gray-600, #505050));
    background-color: var(
      --ds-tab-background-color,
      var(--ds-theme-background-neutral-color, #f2f2f2)
    );
    border-block-start-color: var(
      --ds-tab-border-block-start-color,
      var(--ds-theme-border-neutral-fade, #e6e6e6)
    );
    border-block-end-color: var(--ds-tab-border-block-end-color, transparent);
    border-inline-start-color: var(
      --ds-tab-border-inline-start-color,
      var(--ds-theme-border-neutral-fade, #e6e6e6)
    );
    border-inline-end-color: var(
      --ds-tab-border-inline-end-color,
      var(--ds-theme-border-neutral-fade, #e6e6e6)
    );
    border-block-start-width: var(--ds-tab-border-block-start-width, 0.125rem);
    /* stylelint-disable value-keyword-case */
    border-block-end-width: ${ot(tab_list_T)};
    border-inline-start-width: ${ot(tab_list_S)};
    border-inline-end-width: var(--ds-tab-border-block-start-width, 0.125rem);
    border-start-start-radius: var(--ds-tab-border-start-start-radius, var(--ds-radii-10, 0.25rem));
    border-start-end-radius: var(--ds-tab-border-start-end-radius, var(--ds-radii-10, 0.25rem));
    border-end-end-radius: var(--ds-tab-border-end-end-radius, var(--ds-radii-0, 0));
    border-end-start-radius: var(--ds-tab-border-end-start-radius, var(--ds-radii-0, 0));
    margin-block-start: ${ot(tab_list_L)};
    margin-inline-start: calc(${ot(tab_list_S)} * -1);
    padding-block-start: ${ot(tab_list_C)};
    padding-block-end: var(--ds-tab-padding-block-end, var(--ds-spacing-2, 0.5rem));
    padding-inline-start: var(--ds-tab-padding-inline-start, var(--ds-spacing-g, 0.75rem));
    padding-inline-end: var(--ds-tab-padding-inline-end, var(--ds-spacing-g, 0.75rem));
    /* stylelint-enable value-keyword-case */
  }

  :host([appearance='${ot(tab_list_o.standard)}']) ::slotted(moray-tab[active]) {
    z-index: var(--ds-tab-active-z-index, 1);
    color: var(--ds-tab-active-color, var(--ds-theme-foreground-neutral-strong, #000));
    background-color: var(
      --ds-tab-active-background-color,
      var(--ds-theme-background-neutral-fade, #fff)
    );
    border-block-start-color: var(
      --ds-tab-active-border-block-start-color,
      var(--ds-theme-border-neutral-pure, #505050)
    );
    border-block-end-color: var(
      --ds-tab-active-border-block-end-color,
      ${ot(tab_list_e.activeBorderBlockEndColor)}
    );
    border-block-end-width: var(
      --ds-tab-active-border-block-end-width,
      ${ot(tab_list_e.activeBorderBlockEndWidth)}
    );
    border-block-end-style: var(
      --ds-tab-active-border-block-end-style,
      ${ot(tab_list_e.activeBorderBlockEndStyle)}
    );
    border-inline-start-color: var(
      --ds-tab-active-border-inline-start-color,
      var(--ds-theme-border-neutral-pure, #505050)
    );
    border-inline-end-color: var(
      --ds-tab-active-border-inline-end-color,
      var(--ds-theme-border-neutral-pure, #505050)
    );
    margin-block-start: var(--ds-tab-active-margin-block-start, var(--ds-spacing-0, 0));
    margin-block-end: var(
      --ds-tab-active-margin-block-end,
      calc(${ot(tab_list_T)} * -1)
    );
    padding-block-start: var(
      --ds-tab-active-padding-block-start,
      ${ot(tab_list_V)}
    );
  }

  :host([appearance='${ot(tab_list_o.standard)}'])
    ::slotted(moray-tab:not([active]):hover),
  :host([appearance='${ot(tab_list_o.standard)}'])
    ::slotted(moray-tab:not([active]):focus) {
    color: var(--ds-tab-hover-color, var(--ds-theme-foreground-neutral-strong, #000));
    background-color: var(
      --ds-tab-hover-background-color,
      var(--ds-theme-background-neutral-color, #f2f2f2)
    );
    margin-block-start: var(--ds-tab-hover-margin-block-start, var(--ds-spacing-0, 0));
    padding-block-start: var(
      --ds-tab-hove-padding-block-start,
      ${ot(tab_list_R)}
    );
  }

  /* Tab Outline */
  :host([appearance='${ot(tab_list_o.outline)}']) .base {
    background-color: var(
      --ds-tab-list-inner-background-color,
      var(--ds-tab-background-color, var(--ds-theme-background-gray-200, #e6e6e6))
    );
    padding-block: var(--ds-tab-list-inner-padding-block, var(--ds-spacing-0, 0));
    padding-inline: var(--ds-tab-list-inner-padding-inline, var(--ds-spacing-0, 0));
    border-start-start-radius: var(
      --ds-tab-list-inner-border-start-start-radius,
      var(--ds-tab-border-start-end-radius, var(--ds-radii-30, 0.75rem))
    );
    border-start-end-radius: var(
      --ds-tab-list-inner-border-start-end-radius,
      var(--ds-tab-border-start-end-radius, var(--ds-radii-30, 0.75rem))
    );
    border-end-end-radius: var(
      --ds-tab-list-inner-border-end-end-radius,
      var(--ds-tab-border-end-start-radius, var(--ds-radii-30, 0.75rem))
    );
    border-end-start-radius: var(
      --ds-tab-list-inner-border-end-start-radius,
      var(--ds-tab-border-end-end-radius, var(--ds-radii-30, 0.75rem))
    );
  }

  :host([appearance='${ot(tab_list_o.outline)}']) ::slotted(moray-tab) {
    color: var(--ds-tab-color, var(--ds-color-gray-600, #505050));
    background-color: var(--ds-tab-background-color, var(--ds-theme-background-gray-200, #e6e6e6));
    border-block-start-color: var(
      --ds-tab-border-block-start-color,
      var(--ds-theme-border-neutral-subtle, #e6e6e6)
    );
    border-block-end-color: var(
      --ds-tab-border-block-end-color,
      var(--ds-theme-border-neutral-subtle, #e6e6e6)
    );
    border-inline-start-color: var(
      --ds-tab-border-inline-start-color,
      var(--ds-theme-border-neutral-subtle, #e6e6e6)
    );
    border-inline-end-color: var(
      --ds-tab-border-inline-end-color,
      var(--ds-theme-border-neutral-subtle, #e6e6e6)
    );
    border-block-start-width: var(--ds-tab-border-block-start-width, 0.125rem);
    border-block-end-width: var(--ds-tab-border-block-end-width, 0.125rem);
    border-inline-start-width: var(--ds-tab-border-inline-start-width, 0.125rem);
    border-inline-end-width: var(--ds-tab-border-inline-start-width, 0.125rem);
    border-start-start-radius: var(--ds-tab-border-start-start-radius, var(--ds-radii-30, 0.75rem));
    border-start-end-radius: var(--ds-tab-border-start-start-radius, var(--ds-radii-30, 0.75rem));
    border-end-end-radius: var(--ds-tab-border-start-start-radius, var(--ds-radii-30, 0.75rem));
    border-end-start-radius: var(--ds-tab-border-start-start-radius, var(--ds-radii-30, 0.75rem));
    margin-block-end: var(--ds-tab-margin-block-end, var(--ds-spacing-0, 0));
    margin-inline-start: var(--ds-tab-margin-inline-start, var(--ds-spacing-0, 0));
    padding-block-start: var(--ds-tab-padding-block-start, var(--ds-spacing-1, 0.25rem));
    padding-block-end: var(--ds-tab-padding-block-end, var(--ds-spacing-1, 0.25rem));
  }

  :host([appearance='${ot(tab_list_o.outline)}']) ::slotted(moray-tab[active]) {
    color: var(--ds-tab-active-color, var(--ds-theme-foreground-neutral-strong, #000));
    background-color: var(
      --ds-tab-active-background-color,
      var(--ds-theme-background-neutral-fade, #fff)
    );
    border-block-start-color: var(
      --ds-tab-active-outline-border-block-start-color,
      var(--ds-theme-border-accent-strong-normal, #0067b8)
    );
    border-block-end-color: var(
      --ds-tab-active-outline-border-block-end-color,
      var(--ds-theme-border-accent-strong-normal, #0067b8)
    );
    border-inline-start-color: var(
      --ds-active-tab-border-inline-start-color,
      var(--ds-theme-border-accent-strong-normal, #0067b8)
    );
    border-inline-end-color: var(
      --ds-tab-active-border-inline-end-color,
      var(--ds-theme-border-accent-strong-normal, #0067b8)
    );
  }

  :host([appearance='${ot(tab_list_o.outline)}'])
    ::slotted(moray-tab:not([active]):hover),
  :host([appearance='${ot(tab_list_o.outline)}'])
    ::slotted(moray-tab:not([active]):focus) {
    color: var(--ds-tab-hover-color, var(--ds-theme-foreground-neutral-strong, #000));
    background-color: var(
      --ds-tab-hover-background-color,
      var(--ds-theme-background-gray-200, #e6e6e6)
    );
  }

  :host([appearance='${ot(tab_list_o.outline)}']) ::slotted(moray-tab[active]:hover),
  :host([appearance='${ot(tab_list_o.outline)}']) ::slotted(moray-tab[active]:focus) {
    border-block-start-color: var(
      --ds-tab-active-outline-border-block-start-color,
      var(--ds-theme-border-accent-strong-normal, #0067b8)
    );
    border-block-end-color: var(
      --ds-tab-active-outline-border-block-end-color,
      var(--ds-theme-border-accent-strong-normal, #0067b8)
    );
    border-inline-start-color: var(
      --ds-active-tab-border-inline-start-color,
      var(--ds-theme-border-accent-strong-normal, #0067b8)
    );
    border-inline-end-color: var(
      --ds-tab-active-border-inline-end-color,
      var(--ds-theme-border-accent-strong-normal, #0067b8)
    );
  }

  /* Tab underline */
  :host([appearance='${ot(tab_list_o.underline)}']) {
    border-block-end-color: var(
      --ds-tab-list-underline-outer-border-block-end-color,
      ${ot(tab_list_e.listUnderlineOuterBorderBlockEndColor)}
    );
    border-block-end-style: var(
      --ds-tab-list-underline-outer-border-block-end-style,
      ${ot(tab_list_e.listUnderlineOuterBorderBlockEndStyle)}
    );
    border-block-end-width: var(
      --ds-tab-list-underline-outer-border-block-end-width,
      ${ot(tab_list_e.listUnderlineOuterBorderBlockEndWidth)}
    );
  }

  :host([appearance='${ot(tab_list_o.underline)}']) ::slotted(moray-tab) {
    color: var(--ds-tab-color, var(--ds-theme-forground-gray-600, #505050));
    background-color: var(--ds-tab-background-color, var(--ds-theme-background-neutral-fade, #fff));
    border-block-start-color: var(--ds-tab-border-block-start-color, transparent);
    border-block-end-color: var(--ds-tab-border-block-end-color, transparent);
    border-inline-start-color: var(--ds-tab-border-inline-start-color, transparent);
    border-inline-end-color: var(--ds-tab-border-inline-end-color, transparent);
    border-block-start-width: var(--ds-tab-border-block-start-width, 0);
    border-block-end-width: var(--ds-tab-border-block-end-width, 0.0625rem);
    border-inline-start-width: var(--ds-tab-border-inline-start-width, 0);
    border-inline-end-width: var(--ds-tab-border-inline-end-width, 0);
    border-start-start-radius: var(--ds-tab-border-start-start-radius, 0.375rem);
    border-start-end-radius: var(--ds-tab-border-start-end-radius, 0.375rem);
    border-end-end-radius: var(--ds-tab-border-end-end-radius, var(--ds-radii-0, 0));
    border-end-start-radius: var(--ds-tab-border-end-start-radius, var(--ds-radii-0, 0));
    margin-block-end: var(--ds-tab-margin-block-end, var(--ds-spacing-0, 0));
    margin-inline-start: var(--ds-tab-margin-inline-start, 0.0625rem);
    margin-inline-end: var(--ds-tab-margin-inline-end, 0.0625rem);
    padding-block-start: var(--ds-tab-padding-block-start, 0.375rem);
    padding-block-end: var(--ds-tab-padding-block-end, 0.375rem);
  }

  :host([appearance='${ot(tab_list_o.underline)}']) ::slotted(moray-tab([active])) {
    color: var(--ds-tab-active-color, var(--ds-theme-foreground-gray-900, #171717));
    background-color: var(
      --ds-tab-active-background-color,
      var(--ds-theme-background-neutral-fade, #fff)
    );
  }

  :host([appearance='${ot(tab_list_o.underline)}'])
    ::slotted(moray-tab:not([active]):hover),
  :host([appearance='${ot(tab_list_o.underline)}'])
    ::slotted(moray-tab:not([active]):focus) {
    color: var(--ds-tab-hover-color, var(--ds-theme-foreground-gray-900, #171717));
    background-color: var(
      --ds-tab-hover-background-color,
      var(--ds-theme-background-gray-200, #e6e6e6)
    );
  }

  :host([appearance='${ot(tab_list_o.underline)}'])
    ::slotted(moray-tab[active]:hover),
  :host([appearance='${ot(tab_list_o.underline)}'])
    ::slotted(moray-tab[active]:focus) {
    color: var(--ds-tab-active-hover-color, var(--ds-theme-foreground-gray-900, #171717));
    background-color: var(
      --ds-tab-active-hover-background-color,
      var(--ds-theme-background-gray-200, #e6e6e6)
    );
  }

  :host([appearance='${ot(tab_list_o.underline)}'])
    ::slotted(moray-tab[active])::after {
    content: var(--ds-tab-active-after-content, '');
    background-color: var(
      --ds-tab-active-after-background-color,
      var(--ds-theme-background-color, ${ot(tab_list_e.activeAfterBackgroundColor)})
    );
    height: var(--ds-tab-active-after-height, 0.25rem);
    width: var(--ds-tab-active-after-width, 100%);
    left: var(--ds-tab-active-after-left, 0);
    bottom: var(--ds-tab-active-after-bottom, -0.125rem);
    border-start-start-radius: var(--ds-tab-active-border-start-start-radius, 0.125rem);
    border-start-end-radius: var(--ds-tab-active-border-start-end-radius, 0.125rem);
    border-end-end-radius: var(--ds-tab-active-border-end-end-radius, var(--ds-radii-0, 0));
    border-end-start-radius: var(--ds-tab-active-border-end-start-radius, var(--ds-radii-0, 0));
  }

  :host([appearance='${ot(tab_list_o.underline)}']) ::slotted(moray-tab:focus) {
    outline-offset: var(--ds-tab-outline-offset, ${vfi_CyPinwDN_c});
  }

  /* Tab Image and Tab Image Underline */
  :host([appearance^='${ot(tab_list_o.image)}']) ::slotted(moray-tab) {
    flex-direction: column;
    background-color: transparent;
    border: 0;
    padding: var(--ds-tab-list-tab-padding, ${ot(tab_list_e.listTabPadding)});

    --ds-tab-image-display: block;
    --ds-tab-image-border-color: transparent;
    --ds-tab-image-filter: var(
      --ds-tab-list-tab-image-filter,
      ${ot(tab_list_e.listTabImageFilter)}
    );
    --ds-tab-label-slot-opacity: 0;
    --ds-img-border-start-start-radius: calc(
      var(
          --ds-tab-list-tab-image-border-radius,
          ${ot(tab_list_e.listTabImageBorderRadius)}
        ) / 2
    );
    --ds-img-border-start-end-radius: calc(
      var(
          --ds-tab-list-tab-image-border-radius,
          ${ot(tab_list_e.listTabImageBorderRadius)}
        ) / 2
    );
    --ds-img-border-end-end-radius: calc(
      var(
          --ds-tab-list-tab-image-border-radius,
          ${ot(tab_list_e.listTabImageBorderRadius)}
        ) / 2
    );
    --ds-img-border-end-start-radius: calc(
      var(
          --ds-tab-list-tab-image-border-radius,
          ${ot(tab_list_e.listTabImageBorderRadius)}
        ) / 2
    );
  }

  :host([appearance^='${ot(tab_list_o.image)}']) ::slotted(moray-tab:hover),
  :host([appearance^='${ot(tab_list_o.image)}']) ::slotted(moray-tab:focus) {
    --ds-tab-image-border-color: var(
      --ds-tab-list-tab-image-hover-border-color,
      ${ot(tab_list_e.listTabImageHoverBorderColor)}
    );
    --ds-tab-label-slot-opacity: 1;
    --ds-tab-hover-color: var(
      --ds-tab-list-tab-hover-color,
      var(--ds-theme-border-neutral-pure, ${ot(tab_list_e.listTabHoverColor)})
    );
  }

  :host([appearance^='${ot(tab_list_o.image)}']) ::slotted(moray-tab:focus) {
    outline: none !important;

    --ds-tab-image-outline: var(--ds-tab-list-image-slot-outline, ${ot(vfi_CyPinwDN_l)});
    --ds-tab-image-outline-color: var(
      --ds-tab-list-image-outline-color,
      var(--ds-theme-foreground-neutral-strong, ${ot(tab_list_e.listImageOutlineColor)})
    );
  }

  :host([appearance^='${ot(tab_list_o.image)}']) ::slotted(moray-tab[active]) {
    --ds-tab-label-slot-opacity: 1;
  }

  /* Tab Image */
  :host([appearance='${ot(tab_list_o.image)}']) ::slotted(moray-tab) {
    --ds-tab-image-border-start-start-radius: var(
      --ds-tab-list-tab-image-border-radius,
      ${ot(tab_list_e.listTabImageBorderRadius)}
    );
    --ds-tab-image-border-start-end-radius: var(
      --ds-tab-list-tab-image-border-radius,
      ${ot(tab_list_e.listTabImageBorderRadius)}
    );
    --ds-tab-image-border-end-start-radius: var(
      --ds-tab-list-tab-image-border-radius,
      ${ot(tab_list_e.listTabImageBorderRadius)}
    );
    --ds-tab-image-border-end-end-radius: var(
      --ds-tab-list-tab-image-border-radius,
      ${ot(tab_list_e.listTabImageBorderRadius)}
    );
    --ds-tab-image-border-block-start-width: var(
      --ds-tab-list-tab-image-border-width,
      ${ot(tab_list_e.listTabImageBorderWidth)}
    );
    --ds-tab-image-border-block-end-width: var(
      --ds-tab-list-tab-image-border-width,
      ${ot(tab_list_e.listTabImageBorderWidth)}
    );
    --ds-tab-image-border-inline-start-width: var(
      --ds-tab-list-tab-image-border-width,
      ${ot(tab_list_e.listTabImageBorderWidth)}
    );
    --ds-tab-image-border-inline-end-width: var(
      --ds-tab-list-tab-image-border-width,
      ${ot(tab_list_e.listTabImageBorderWidth)}
    );
    --ds-tab-image-padding-block-start: var(
      --ds-tab-list-tab-image-padding,
      ${ot(tab_list_e.listTabImagePadding)}
    );
    --ds-tab-image-padding-block-end: var(
      --ds-tab-list-tab-image-padding,
      ${ot(tab_list_e.listTabImagePadding)}
    );
    --ds-tab-image-padding-inline-start: var(
      --ds-tab-list-tab-image-padding,
      ${ot(tab_list_e.listTabImagePadding)}
    );
    --ds-tab-image-padding-inline-end: var(
      --ds-tab-list-tab-image-padding,
      ${ot(tab_list_e.listTabImagePadding)}
    );
  }

  :host([appearance='${ot(tab_list_o.image)}']) ::slotted(moray-tab[active]) {
    --ds-tab-image-border-color: var(
      --ds-tab-list-tab-image-active-border-color,
      var(
        --ds-theme-border-accent-strong-normal,
        ${ot(tab_list_e.listTabImageActiveBorderColor)}
      )
    );
    --ds-tab-image-filter: none;
  }

  /* Tab Image Underline */
  :host([appearance^='${ot(tab_list_o.image)}'][appearance*='--underline'])
    ::slotted(moray-tab) {
    --ds-tab-image-after-content: '';
    --ds-tab-image-after-display: var(
      --ds-tab-list-image-underline-active-after-display,
      ${ot(tab_list_e.listImageUnderlineActiveAfterDisplay)}
    );
    --ds-tab-image-after-position: var(
      --ds-tab-list-image-underline-active-after-position,
      ${ot(tab_list_e.listImageUnderlineActiveAfterPosition)}
    );
    --ds-tab-image-position: var(
      --ds-tab-list-image-underline-position,
      ${ot(tab_list_e.listImageUnderlineContainerPosition)}
    );
    --ds-tab-image-margin: var(--ds-tab-list-image-underline-margin, 0.375rem);
    --ds-tab-image-border-start-start-radius: var(
      --ds-tab-list-tab-image-border-radius,
      ${ot(tab_list_e.listImageUnderlineActiveAfterBorderRadius)}
    );
    --ds-tab-image-border-start-end-radius: var(
      --ds-tab-list-tab-image-border-radius,
      ${ot(tab_list_e.listImageUnderlineActiveAfterBorderRadius)}
    );
    --ds-tab-image-border-end-start-radius: var(
      --ds-tab-list-tab-image-border-radius,
      ${ot(tab_list_e.listImageUnderlineActiveAfterBorderRadius)}
    );
    --ds-tab-image-border-end-end-radius: var(
      --ds-tab-list-tab-image-border-radius,
      ${ot(tab_list_e.listImageUnderlineActiveAfterBorderRadius)}
    );
  }

  :host([appearance^='${ot(tab_list_o.image)}'][appearance*='--underline'])
    ::slotted(moray-tab:not([active]):hover) {
    --ds-tab-image-after-border-color: var(
      --ds-tab-list-image-underline-hover-after-border-color,
      ${ot(tab_list_e.listImageUnderlineHoverAfterBorderColor)}
    );
  }

  :host([appearance^='${ot(tab_list_o.image)}'][appearance*='--underline'])
    ::slotted(moray-tab[active]) {
    --ds-tab-image-after-border-color: var(
      --ds-tab-list-image-underline-active-after-border-color,
      ${ot(tab_list_e.listImageUnderlineActiveAfterBorderColor)}
    );
  }
`;
var tab_list_Q = Object.defineProperty, tab_list_X = Object.getOwnPropertyDescriptor, tab_list_l = (r, d, t, s) => {
  for (var i = s > 1 ? void 0 : s ? tab_list_X(d, t) : d, h = r.length - 1, u; h >= 0; h--)
    (u = r[h]) && (i = (s ? u(d, t, i) : u(i)) || i);
  return s && i && tab_list_Q(d, t, i), i;
};
const tab_list_Y = "moray-tab-list";
let tab_list_n = class extends registration_Ac3YpkNH_R {
  constructor() {
    super(...arguments), this.localize = new localize_controller_DBuC7_PW_d(this), this._tabLabelList = [], this.alignment = tab_list_P.center, this.appearance = tab_list_o.standard, this.defaultTabIndex = 0, this.updateHistory = !1, this.sharedLabel = !1, this._tabs = [], this._tabPanels = [], this._activeTabIndex = 0, this._tabSharedLabel = [], this._activeTabPanelIndex = 0, this._handlePopState = () => {
      const { hash: r } = window.location;
      if (r.length > 0 && this._tabs.length > 0) {
        const d = this._tabPanels.find((t) => t.id === r.slice(1));
        if (d && d.tab)
          this._setActiveTab(d.tab), this._handleScrollAndFocus(this._activeTab);
        else {
          const t = this._tabPanels.find(
            (s) => s.slotItems.find((i) => i.id === r.slice(1))
          );
          t && t.tab && (this._setActiveTab(t.tab), this._handleScrollAndFocus(this._activeTab));
        }
      } else
        this._setActiveTab(this._tabs[this.defaultTabIndex]);
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "tablist"), window.addEventListener("popstate", this._handlePopState), this._initialHash = window.location.hash;
  }
  disconnectedCallback() {
    window.removeEventListener("popstate", this._handlePopState), super.disconnectedCallback();
  }
  _setTabSharedLabel(r) {
    this.sharedLabel && (this._tabLabelList.length === 0 && this._tabs.forEach((d) => {
      this._tabLabelList[d.id] = d.textContent || "";
    }), this._tabSharedLabel = [r.id, this._tabLabelList[r.id]]);
  }
  _renderShareLabel() {
    const r = "sr-only";
    return this._tabs.forEach((d) => {
      var s;
      const t = (s = d.shadowRoot) == null ? void 0 : s.querySelector("slot:not([name])");
      this.sharedLabel ? t == null || t.classList.add(r) : t == null || t.classList.remove(r);
    }), this.sharedLabel ? Pt`<div class="tab-list-shared-label">${this._tabSharedLabel[1]}</div>` : "";
  }
  _handleMouseOver(r) {
    r.preventDefault();
    const d = r.target;
    if (d) {
      if (d === this._defaultSlot[0] && this._activeTab && this._activeTab.id !== this._tabSharedLabel[0]) {
        this._setTabSharedLabel(this._activeTab);
        return;
      }
      if (d !== this._defaultSlot[0] && d.id && d.id !== this._tabSharedLabel[0]) {
        const t = d;
        t !== null && this._setTabSharedLabel(t);
      }
    }
  }
  _handleMouseLeave(r) {
    r.preventDefault(), this._activeTab && this._activeTab.id !== this._tabSharedLabel[0] && this._setTabSharedLabel(this._activeTab);
  }
  _handleScrollAndFocus(r) {
    r && r.addEventListener(
      transitions_4VkAEkzc_e,
      () => {
        r && (r.scrollIntoView(!0), r.focus());
      },
      { once: !0 }
    );
  }
  _handleClick(r) {
    const t = r.target.closest(tab_P);
    t !== null && this._setActiveTab(t);
  }
  _handleKeyDown(r) {
    const t = r.target.closest(tab_P);
    switch (r.key) {
      case keyboard_DX8Uc3JA_A.SPACE:
      case keyboard_DX8Uc3JA_A.ENTER: {
        t !== null && (this._setActiveTab(t), r.preventDefault());
        break;
      }
      case keyboard_DX8Uc3JA_A.HOME:
      case keyboard_DX8Uc3JA_A.END:
      case keyboard_DX8Uc3JA_A.ARROW_LEFT:
      case keyboard_DX8Uc3JA_A.ARROW_RIGHT: {
        this._handleDirectionKey(r.key), r.preventDefault();
        break;
      }
      case keyboard_DX8Uc3JA_A.TAB: {
        this._activeTab && (this._activeTab.setAttribute("tabindex", "0"), this._setTabSharedLabel(this._activeTab)), this._handleTabKey(r);
        break;
      }
    }
  }
  _handleDirectionKey(r) {
    const d = this._tabs.find((s) => s.matches(":focus")), t = this.localize.dir() === "rtl";
    if ((d == null ? void 0 : d.tagName.toLowerCase()) === tab_P) {
      let s = this._tabs.indexOf(d);
      switch (r) {
        case keyboard_DX8Uc3JA_A.HOME: {
          s = 0;
          break;
        }
        case keyboard_DX8Uc3JA_A.END: {
          s = this._tabs.length - 1;
          break;
        }
        case (t ? keyboard_DX8Uc3JA_A.ARROW_RIGHT : keyboard_DX8Uc3JA_A.ARROW_LEFT): {
          s--;
          break;
        }
        case (t ? keyboard_DX8Uc3JA_A.ARROW_LEFT : keyboard_DX8Uc3JA_A.ARROW_RIGHT): {
          s++;
          break;
        }
      }
      s < 0 && (s = this._tabs.length - 1), s > this._tabs.length - 1 && (s = 0);
      const i = this._tabs[s];
      i.focus(), this._setTabSharedLabel(i);
    }
  }
  _handleTabKey(r) {
    const d = this._tabs.find((t) => t.matches(":focus"));
    d && this._tabs.indexOf(d) > this._activeTabIndex && !this.sharedLabel && (this._tabPanels[this._activeTabPanelIndex].focus(), r.preventDefault());
  }
  _setActiveTab(r) {
    var d;
    if (r !== this._activeTab) {
      const t = this._activeTab;
      this._activeTab = r;
      const s = new CustomEvent(tab_list_.hide, {
        detail: {
          relatedTarget: this._activeTab
        }
      }), i = new CustomEvent(tab_list_.show, {
        detail: {
          relatedTarget: t
        }
      });
      if (t && t.dispatchEvent(s), this._activeTab.dispatchEvent(i), i.defaultPrevented || s.defaultPrevented)
        return;
      this._tabs.forEach((c, g) => {
        var f;
        c === this._activeTab ? (c.active = !0, c.setAttribute("aria-selected", "true"), this._activeTabIndex = g, this._activeTabPanelIndex = g) : (c.active = !1, c.setAttribute("aria-selected", "false"), (f = this._tabPanels[g]) == null || f.base.classList.remove("show"));
      });
      const h = new CustomEvent(tab_list_.hidden, {
        detail: {
          relatedTarget: this._activeTab
        }
      }), u = new CustomEvent(tab_list_.shown, {
        detail: {
          relatedTarget: t
        }
      });
      t && t.dispatchEvent(h), this._activeTab.dispatchEvent(u);
      const { hash: p } = window.location, y = `#${this._activeTab.tabPanelId}`, { title: w } = document, { state: I } = window.history, x = !p && this._activeTabIndex !== this.defaultTabIndex, O = p && this._tabPanels[this._activeTabPanelIndex] && !this._tabPanels[this._activeTabPanelIndex].querySelector(p);
      if ((x || O && p !== y) && (this.updateHistory ? window.history.pushState(I, w, y) : window.history.replaceState(I, w, y)), this._tabPanels.length > 0) {
        const c = this._tabPanels[this._activeTabPanelIndex];
        if (c) {
          const g = (d = c.shadowRoot) == null ? void 0 : d.querySelector(
            ".base"
          ), f = transitions_4VkAEkzc_l(g);
          c.addEventListener(
            transitions_4VkAEkzc_e,
            () => this._completeTransitionEnd(c),
            {
              once: !0
            }
          ), transitions_4VkAEkzc_d(c, f);
        }
      }
    }
  }
  _completeTransitionEnd(r) {
    this._tabPanels.forEach((d) => {
      d === r ? d.active = !0 : d.active = !1;
    });
  }
  _handleSlotChange(r) {
    const d = r.target;
    this._tabs = [...d.assignedElements()].filter(
      (s) => s.tagName.toLowerCase() === tab_P
    );
    let t = null;
    this._tabs.forEach((s) => {
      s.setAttribute("role", "tab");
      const i = helpers_uHZJbBPu_l(s, `#${s.tabPanelId}`);
      i && (this._tabPanels.push(i), s.setAttribute("aria-controls", s.tabPanelId || ""), i.setAttribute("aria-labelledby", s.id)), s.active && (t = s);
    }), t ? (this._activeTabIndex = this._tabs.indexOf(t), this.defaultTabIndex = this._activeTabIndex, this._setTabSharedLabel(t)) : this._activeTabIndex = this.defaultTabIndex, this._initialHash ? (this._initialHash = "", this._handlePopState()) : this._setActiveTab(this._tabs[this._activeTabIndex]);
  }
  /**
   * Activates the Tab, shows the corresponding Tab Panel, deactivates sibling Tabs, and hides sibling Tab Panels.
   */
  show(r) {
    const d = this._tabs.find((t) => t.tabPanelId === r);
    d && this._setActiveTab(d);
  }
  render() {
    return Pt`
      <div
        part="base"
        class="base"
        @click="${this._handleClick}"
        @keydown="${this._handleKeyDown}"
        @tabmouseover="${this.sharedLabel ? this._handleMouseOver : null}"
        @tabmouseleave="${this.sharedLabel ? this._handleMouseLeave : null}"
      >
        ${this._renderShareLabel()}
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `;
  }
};
tab_list_n.styles = tab_list_J;
tab_list_l([
  property_CfNGmgjg_f({ reflect: !0 })
], tab_list_n.prototype, "alignment", 2);
tab_list_l([
  property_CfNGmgjg_f({ reflect: !0 })
], tab_list_n.prototype, "appearance", 2);
tab_list_l([
  property_CfNGmgjg_f({ attribute: "default-tab-index", type: Number })
], tab_list_n.prototype, "defaultTabIndex", 2);
tab_list_l([
  property_CfNGmgjg_f({ attribute: "update-history", type: Boolean })
], tab_list_n.prototype, "updateHistory", 2);
tab_list_l([
  property_CfNGmgjg_f({ reflect: !0, attribute: "shared-label", type: Boolean })
], tab_list_n.prototype, "sharedLabel", 2);
tab_list_l([
  query_assigned_nodes_jfm_gNrB_m()
], tab_list_n.prototype, "_defaultSlot", 2);
tab_list_l([
  state_B9yJz8Xo_n()
], tab_list_n.prototype, "_tabs", 2);
tab_list_l([
  state_B9yJz8Xo_n()
], tab_list_n.prototype, "_tabPanels", 2);
tab_list_l([
  state_B9yJz8Xo_n()
], tab_list_n.prototype, "_activeTab", 2);
tab_list_l([
  state_B9yJz8Xo_n()
], tab_list_n.prototype, "_activeTabIndex", 2);
tab_list_l([
  state_B9yJz8Xo_n()
], tab_list_n.prototype, "_tabSharedLabel", 2);
tab_list_l([
  state_B9yJz8Xo_n()
], tab_list_n.prototype, "_activeTabPanelIndex", 2);
tab_list_l([
  state_B9yJz8Xo_n()
], tab_list_n.prototype, "_initialHash", 2);
tab_list_n = tab_list_l([
  Ut(tab_list_Y)
], tab_list_n);


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/query-BFAhq-I0.mjs

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function query_BFAhq_I0_d(l, u) {
  return (r, o, c) => {
    const s = (n) => {
      var e;
      return ((e = n.renderRoot) == null ? void 0 : e.querySelector(l)) ?? null;
    };
    if (u) {
      const { get: n, set: e } = typeof o == "object" ? r : c ?? (() => {
        const t = Symbol();
        return { get() {
          return this[t];
        }, set(h) {
          this[t] = h;
        } };
      })();
      return base_CwU3eNq_r(r, o, { get() {
        let t = n.call(this);
        return t === void 0 && (t = s(this), (t !== null || this.hasUpdated) && e.call(this, t)), t;
      } });
    }
    return base_CwU3eNq_r(r, o, { get() {
      return s(this);
    } });
  };
}


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
    return registration_Ac3YpkNH_v;
  }
});


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/components/tabs/tab-panel/index.js











const tab_panel_U = {
  opacity: "0",
  display: "none",
  activeOpacity: "1",
  activeDisplay: "block"
}, Ue = Ct`
  :host .base {
    display: var(--ds-tab-panel-display, ${ot(tab_panel_U.display)});
  }

  :host([active]) .base {
    display: var(--ds-tab-panel-active-display, ${ot(tab_panel_U.activeDisplay)});
  }

  /* Placeholder styles */
  :host :focus {
    ${vfi_CyPinwDN_e}
  }

  .base {
    ${transitions_iiKWrCzx_b}
  }

  .base:not(.show) {
    opacity: var(--ds-tab-panel-opacity, ${ot(tab_panel_U.opacity)});
  }

  .sr-button:not(:active):not(:focus) {
    ${screenreaders_CBXfuHx_o}
  }
`;
var tab_panel_j = function(e, t) {
  return tab_panel_j = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, tab_panel_j(e, t);
};
function tab_panel_M(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  tab_panel_j(e, t);
  function i() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i());
}
var tab_panel_m = function() {
  return tab_panel_m = Object.assign || function(t) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
  }, tab_panel_m.apply(this, arguments);
};
function De(e, t) {
  var i = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (i[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (i[r[n]] = e[r[n]]);
  return i;
}
function tab_panel_D(e, t, i) {
  if (i || arguments.length === 2)
    for (var r = 0, n = t.length, a; r < n; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var tab_panel_p;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(tab_panel_p || (tab_panel_p = {}));
var tab_panel_x;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(tab_panel_x || (tab_panel_x = {}));
var tab_panel_A;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(tab_panel_A || (tab_panel_A = {}));
function ee(e) {
  return e.type === tab_panel_x.literal;
}
function Fe(e) {
  return e.type === tab_panel_x.argument;
}
function le(e) {
  return e.type === tab_panel_x.number;
}
function fe(e) {
  return e.type === tab_panel_x.date;
}
function pe(e) {
  return e.type === tab_panel_x.time;
}
function ce(e) {
  return e.type === tab_panel_x.select;
}
function be(e) {
  return e.type === tab_panel_x.plural;
}
function Ve(e) {
  return e.type === tab_panel_x.pound;
}
function me(e) {
  return e.type === tab_panel_x.tag;
}
function xe(e) {
  return !!(e && typeof e == "object" && e.type === tab_panel_A.number);
}
function tab_panel_W(e) {
  return !!(e && typeof e == "object" && e.type === tab_panel_A.dateTime);
}
var Ee = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Xe = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function ke(e) {
  var t = {};
  return e.replace(Xe, function(i) {
    var r = i.length;
    switch (i[0]) {
      case "G":
        t.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = r === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][r - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = r < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), t;
}
var je = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function We(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(je).filter(function(l) {
    return l.length > 0;
  }), i = [], r = 0, n = t; r < n.length; r++) {
    var a = n[r], s = a.split("/");
    if (s.length === 0)
      throw new Error("Invalid number skeleton");
    for (var o = s[0], f = s.slice(1), u = 0, h = f; u < h.length; u++) {
      var c = h[u];
      if (c.length === 0)
        throw new Error("Invalid number skeleton");
    }
    i.push({ stem: o, options: f });
  }
  return i;
}
function ze(e) {
  return e.replace(/^(.*?)-/, "");
}
var te = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, ve = /^(@+)?(\+|#+)?[rs]?$/g, Ze = /(\*)(0+)|(#+)(0+)|(0+)/g, ge = /^(0+)$/;
function re(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(ve, function(i, r, n) {
    return typeof n != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : n === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof n == "string" ? n.length : 0)), "";
  }), t;
}
function de(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function $e(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var i = e.slice(0, 2);
    if (i === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : i === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !ge.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function ie(e) {
  var t = {}, i = de(e);
  return i || t;
}
function Je(e) {
  for (var t = {}, i = 0, r = e; i < r.length; i++) {
    var n = r[i];
    switch (n.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = n.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = ze(n.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = tab_panel_m(tab_panel_m(tab_panel_m({}, t), { notation: "scientific" }), n.options.reduce(function(f, u) {
          return tab_panel_m(tab_panel_m({}, f), ie(u));
        }, {}));
        continue;
      case "engineering":
        t = tab_panel_m(tab_panel_m(tab_panel_m({}, t), { notation: "engineering" }), n.options.reduce(function(f, u) {
          return tab_panel_m(tab_panel_m({}, f), ie(u));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(n.options[0]);
        continue;
      case "rounding-mode-floor":
        t.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        t.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        t.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        t.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        t.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        t.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        t.roundingMode = "halfExpand";
        continue;
      case "integer-width":
        if (n.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        n.options[0].replace(Ze, function(f, u, h, c, l, E) {
          if (u)
            t.minimumIntegerDigits = h.length;
          else {
            if (c && l)
              throw new Error("We currently do not support maximum integer digits");
            if (E)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (ge.test(n.stem)) {
      t.minimumIntegerDigits = n.stem.length;
      continue;
    }
    if (te.test(n.stem)) {
      if (n.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      n.stem.replace(te, function(f, u, h, c, l, E) {
        return h === "*" ? t.minimumFractionDigits = u.length : c && c[0] === "#" ? t.maximumFractionDigits = c.length : l && E ? (t.minimumFractionDigits = l.length, t.maximumFractionDigits = l.length + E.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var a = n.options[0];
      a === "w" ? t = tab_panel_m(tab_panel_m({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = tab_panel_m(tab_panel_m({}, t), re(a)));
      continue;
    }
    if (ve.test(n.stem)) {
      t = tab_panel_m(tab_panel_m({}, t), re(n.stem));
      continue;
    }
    var s = de(n.stem);
    s && (t = tab_panel_m(tab_panel_m({}, t), s));
    var o = $e(n.stem);
    o && (t = tab_panel_m(tab_panel_m({}, t), o));
  }
  return t;
}
var tab_panel_C = {
  "001": [
    "H",
    "h"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AD: [
    "H",
    "hB"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  AS: [
    "h",
    "H"
  ],
  AT: [
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  AX: [
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BI: [
    "H",
    "h"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  BO: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  BQ: [
    "H"
  ],
  BR: [
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BT: [
    "h",
    "H"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BY: [
    "H",
    "h"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CD: [
    "hB",
    "H"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  CI: [
    "H",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CL: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CP: [
    "H"
  ],
  CR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CU: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CV: [
    "H",
    "hB"
  ],
  CW: [
    "H",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CZ: [
    "H"
  ],
  DE: [
    "H",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DJ: [
    "h",
    "H"
  ],
  DK: [
    "H"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EC: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  EE: [
    "H",
    "hB"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  FI: [
    "H"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FO: [
    "H",
    "h"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  GF: [
    "H",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GH: [
    "h",
    "H"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GL: [
    "H",
    "h"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GT: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HN: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  HR: [
    "H",
    "hB"
  ],
  HU: [
    "H",
    "h"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  ID: [
    "H"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IN: [
    "h",
    "H"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  IS: [
    "H"
  ],
  IT: [
    "H",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JP: [
    "H",
    "K",
    "h"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LS: [
    "h",
    "H"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  MF: [
    "H",
    "hB"
  ],
  MG: [
    "H",
    "h"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ML: [
    "H"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MT: [
    "H",
    "h"
  ],
  MU: [
    "H",
    "h"
  ],
  MV: [
    "H",
    "h"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MX: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NC: [
    "H",
    "hB"
  ],
  NE: [
    "H"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NI: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  NL: [
    "H",
    "hB"
  ],
  NO: [
    "H",
    "h"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PE: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  PG: [
    "h",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  PL: [
    "H",
    "h"
  ],
  PM: [
    "H",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PT: [
    "H",
    "hB"
  ],
  PW: [
    "h",
    "H"
  ],
  PY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  RU: [
    "H"
  ],
  RW: [
    "H",
    "h"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SE: [
    "H"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  SO: [
    "h",
    "H"
  ],
  SR: [
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  SV: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TH: [
    "H",
    "h"
  ],
  TJ: [
    "H",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TM: [
    "H",
    "h"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  TR: [
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VN: [
    "H",
    "h"
  ],
  VU: [
    "h",
    "H"
  ],
  WF: [
    "H",
    "hB"
  ],
  WS: [
    "h",
    "H"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YT: [
    "H",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZW: [
    "H",
    "h"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "es-BO": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-EC": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-PE": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ]
};
function Qe(e, t) {
  for (var i = "", r = 0; r < e.length; r++) {
    var n = e.charAt(r);
    if (n === "j") {
      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === n; )
        a++, r++;
      var s = 1 + (a & 1), o = a < 2 ? 1 : 3 + (a >> 1), f = "a", u = qe(t);
      for ((u == "H" || u == "k") && (o = 0); o-- > 0; )
        i += f;
      for (; s-- > 0; )
        i = u + i;
    } else
      n === "J" ? i += "H" : i += n;
  }
  return i;
}
function qe(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var i = e.language, r;
  i !== "root" && (r = e.maximize().region);
  var n = tab_panel_C[r || ""] || tab_panel_C[i || ""] || tab_panel_C["".concat(i, "-001")] || tab_panel_C["001"];
  return n[0];
}
var tab_panel_F, Ye = new RegExp("^".concat(Ee.source, "*")), Ke = new RegExp("".concat(Ee.source, "*$"));
function tab_panel_b(e, t) {
  return { start: e, end: t };
}
var tab_panel_et = !!String.prototype.startsWith && "_a".startsWith("a", 1), tab_panel_tt = !!String.fromCodePoint, tab_panel_rt = !!Object.fromEntries, tab_panel_it = !!String.prototype.codePointAt, tab_panel_nt = !!String.prototype.trimStart, tab_panel_at = !!String.prototype.trimEnd, tab_panel_st = !!Number.isSafeInteger, tab_panel_ht = tab_panel_st ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, tab_panel_z = !0;
try {
  var tab_panel_ot = He("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  tab_panel_z = ((tab_panel_F = tab_panel_ot.exec("a")) === null || tab_panel_F === void 0 ? void 0 : tab_panel_F[0]) === "a";
} catch {
  tab_panel_z = !1;
}
var ne = tab_panel_et ? (
  // Native
  function(t, i, r) {
    return t.startsWith(i, r);
  }
) : (
  // For IE11
  function(t, i, r) {
    return t.slice(r, r + i.length) === i;
  }
), tab_panel_Z = tab_panel_tt ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], i = 0; i < arguments.length; i++)
      t[i] = arguments[i];
    for (var r = "", n = t.length, a = 0, s; n > a; ) {
      if (s = t[a++], s > 1114111)
        throw RangeError(s + " is not a valid code point");
      r += s < 65536 ? String.fromCharCode(s) : String.fromCharCode(((s -= 65536) >> 10) + 55296, s % 1024 + 56320);
    }
    return r;
  }
), ae = (
  // native
  tab_panel_rt ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var i = {}, r = 0, n = t; r < n.length; r++) {
        var a = n[r], s = a[0], o = a[1];
        i[s] = o;
      }
      return i;
    }
  )
), ye = tab_panel_it ? (
  // Native
  function(t, i) {
    return t.codePointAt(i);
  }
) : (
  // IE 11
  function(t, i) {
    var r = t.length;
    if (!(i < 0 || i >= r)) {
      var n = t.charCodeAt(i), a;
      return n < 55296 || n > 56319 || i + 1 === r || (a = t.charCodeAt(i + 1)) < 56320 || a > 57343 ? n : (n - 55296 << 10) + (a - 56320) + 65536;
    }
  }
), tab_panel_ut = tab_panel_nt ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Ye, "");
  }
), tab_panel_lt = tab_panel_at ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Ke, "");
  }
);
function He(e, t) {
  return new RegExp(e, t);
}
var tab_panel_$;
if (tab_panel_z) {
  var se = He("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  tab_panel_$ = function(t, i) {
    var r;
    se.lastIndex = i;
    var n = se.exec(t);
    return (r = n[1]) !== null && r !== void 0 ? r : "";
  };
} else
  tab_panel_$ = function(t, i) {
    for (var r = []; ; ) {
      var n = ye(t, i);
      if (n === void 0 || _e(n) || tab_panel_bt(n))
        break;
      r.push(n), i += n >= 65536 ? 2 : 1;
    }
    return tab_panel_Z.apply(void 0, r);
  };
var tab_panel_ft = (
  /** @class */
  function() {
    function e(t, i) {
      i === void 0 && (i = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!i.ignoreTag, this.locale = i.locale, this.requiresOtherClause = !!i.requiresOtherClause, this.shouldParseSkeletons = !!i.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, i, r) {
      for (var n = []; !this.isEOF(); ) {
        var a = this.char();
        if (a === 123) {
          var s = this.parseArgument(t, r);
          if (s.err)
            return s;
          n.push(s.val);
        } else {
          if (a === 125 && t > 0)
            break;
          if (a === 35 && (i === "plural" || i === "selectordinal")) {
            var o = this.clonePosition();
            this.bump(), n.push({
              type: tab_panel_x.pound,
              location: tab_panel_b(o, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(tab_panel_p.UNMATCHED_CLOSING_TAG, tab_panel_b(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && tab_panel_J(this.peek() || 0)) {
            var s = this.parseTag(t, i);
            if (s.err)
              return s;
            n.push(s.val);
          } else {
            var s = this.parseLiteral(t, i);
            if (s.err)
              return s;
            n.push(s.val);
          }
        }
      }
      return { val: n, err: null };
    }, e.prototype.parseTag = function(t, i) {
      var r = this.clonePosition();
      this.bump();
      var n = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: tab_panel_x.literal,
            value: "<".concat(n, "/>"),
            location: tab_panel_b(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(t + 1, i, !0);
        if (a.err)
          return a;
        var s = a.val, o = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !tab_panel_J(this.char()))
            return this.error(tab_panel_p.INVALID_TAG, tab_panel_b(o, this.clonePosition()));
          var f = this.clonePosition(), u = this.parseTagName();
          return n !== u ? this.error(tab_panel_p.UNMATCHED_CLOSING_TAG, tab_panel_b(f, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: tab_panel_x.tag,
              value: n,
              children: s,
              location: tab_panel_b(r, this.clonePosition())
            },
            err: null
          } : this.error(tab_panel_p.INVALID_TAG, tab_panel_b(o, this.clonePosition())));
        } else
          return this.error(tab_panel_p.UNCLOSED_TAG, tab_panel_b(r, this.clonePosition()));
      } else
        return this.error(tab_panel_p.INVALID_TAG, tab_panel_b(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && tab_panel_ct(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, i) {
      for (var r = this.clonePosition(), n = ""; ; ) {
        var a = this.tryParseQuote(i);
        if (a) {
          n += a;
          continue;
        }
        var s = this.tryParseUnquoted(t, i);
        if (s) {
          n += s;
          continue;
        }
        var o = this.tryParseLeftAngleBracket();
        if (o) {
          n += o;
          continue;
        }
        break;
      }
      var f = tab_panel_b(r, this.clonePosition());
      return {
        val: { type: tab_panel_x.literal, value: n, location: f },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !tab_panel_pt(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (t === "plural" || t === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var i = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var r = this.char();
        if (r === 39)
          if (this.peek() === 39)
            i.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          i.push(r);
        this.bump();
      }
      return tab_panel_Z.apply(void 0, i);
    }, e.prototype.tryParseUnquoted = function(t, i) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (i === "plural" || i === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), tab_panel_Z(r));
    }, e.prototype.parseArgument = function(t, i) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(tab_panel_p.EXPECT_ARGUMENT_CLOSING_BRACE, tab_panel_b(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(tab_panel_p.EMPTY_ARGUMENT, tab_panel_b(r, this.clonePosition()));
      var n = this.parseIdentifierIfPossible().value;
      if (!n)
        return this.error(tab_panel_p.MALFORMED_ARGUMENT, tab_panel_b(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(tab_panel_p.EXPECT_ARGUMENT_CLOSING_BRACE, tab_panel_b(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: tab_panel_x.argument,
              // value does not include the opening and closing braces.
              value: n,
              location: tab_panel_b(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(tab_panel_p.EXPECT_ARGUMENT_CLOSING_BRACE, tab_panel_b(r, this.clonePosition())) : this.parseArgumentOptions(t, i, n, r);
        default:
          return this.error(tab_panel_p.MALFORMED_ARGUMENT, tab_panel_b(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), i = this.offset(), r = tab_panel_$(this.message, i), n = i + r.length;
      this.bumpTo(n);
      var a = this.clonePosition(), s = tab_panel_b(t, a);
      return { value: r, location: s };
    }, e.prototype.parseArgumentOptions = function(t, i, r, n) {
      var a, s = this.clonePosition(), o = this.parseIdentifierIfPossible().value, f = this.clonePosition();
      switch (o) {
        case "":
          return this.error(tab_panel_p.EXPECT_ARGUMENT_TYPE, tab_panel_b(s, f));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var h = this.clonePosition(), c = this.parseSimpleArgStyleIfPossible();
            if (c.err)
              return c;
            var l = tab_panel_lt(c.val);
            if (l.length === 0)
              return this.error(tab_panel_p.EXPECT_ARGUMENT_STYLE, tab_panel_b(this.clonePosition(), this.clonePosition()));
            var E = tab_panel_b(h, this.clonePosition());
            u = { style: l, styleLocation: E };
          }
          var g = this.tryParseArgumentClose(n);
          if (g.err)
            return g;
          var y = tab_panel_b(n, this.clonePosition());
          if (u && ne(u == null ? void 0 : u.style, "::", 0)) {
            var B = tab_panel_ut(u.style.slice(2));
            if (o === "number") {
              var c = this.parseNumberSkeletonFromString(B, u.styleLocation);
              return c.err ? c : {
                val: { type: tab_panel_x.number, value: r, location: y, style: c.val },
                err: null
              };
            } else {
              if (B.length === 0)
                return this.error(tab_panel_p.EXPECT_DATE_TIME_SKELETON, y);
              var P = B;
              this.locale && (P = Qe(B, this.locale));
              var l = {
                type: tab_panel_A.dateTime,
                pattern: P,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? ke(P) : {}
              }, S = o === "date" ? tab_panel_x.date : tab_panel_x.time;
              return {
                val: { type: S, value: r, location: y, style: l },
                err: null
              };
            }
          }
          return {
            val: {
              type: o === "number" ? tab_panel_x.number : o === "date" ? tab_panel_x.date : tab_panel_x.time,
              value: r,
              location: y,
              style: (a = u == null ? void 0 : u.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var H = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(tab_panel_p.EXPECT_SELECT_ARGUMENT_OPTIONS, tab_panel_b(H, tab_panel_m({}, H)));
          this.bumpSpace();
          var N = this.parseIdentifierIfPossible(), T = 0;
          if (o !== "select" && N.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(tab_panel_p.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, tab_panel_b(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var c = this.tryParseDecimalInteger(tab_panel_p.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, tab_panel_p.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (c.err)
              return c;
            this.bumpSpace(), N = this.parseIdentifierIfPossible(), T = c.val;
          }
          var L = this.tryParsePluralOrSelectOptions(t, o, i, N);
          if (L.err)
            return L;
          var g = this.tryParseArgumentClose(n);
          if (g.err)
            return g;
          var K = tab_panel_b(n, this.clonePosition());
          return o === "select" ? {
            val: {
              type: tab_panel_x.select,
              value: r,
              options: ae(L.val),
              location: K
            },
            err: null
          } : {
            val: {
              type: tab_panel_x.plural,
              value: r,
              options: ae(L.val),
              offset: T,
              pluralType: o === "plural" ? "cardinal" : "ordinal",
              location: K
            },
            err: null
          };
        }
        default:
          return this.error(tab_panel_p.INVALID_ARGUMENT_TYPE, tab_panel_b(s, f));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(tab_panel_p.EXPECT_ARGUMENT_CLOSING_BRACE, tab_panel_b(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, i = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var n = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(tab_panel_p.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, tab_panel_b(n, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
            else
              return {
                val: this.message.slice(i.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(i.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, i) {
      var r = [];
      try {
        r = We(t);
      } catch {
        return this.error(tab_panel_p.INVALID_NUMBER_SKELETON, i);
      }
      return {
        val: {
          type: tab_panel_A.number,
          tokens: r,
          location: i,
          parsedOptions: this.shouldParseSkeletons ? Je(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, i, r, n) {
      for (var a, s = !1, o = [], f = /* @__PURE__ */ new Set(), u = n.value, h = n.location; ; ) {
        if (u.length === 0) {
          var c = this.clonePosition();
          if (i !== "select" && this.bumpIf("=")) {
            var l = this.tryParseDecimalInteger(tab_panel_p.EXPECT_PLURAL_ARGUMENT_SELECTOR, tab_panel_p.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (l.err)
              return l;
            h = tab_panel_b(c, this.clonePosition()), u = this.message.slice(c.offset, this.offset());
          } else
            break;
        }
        if (f.has(u))
          return this.error(i === "select" ? tab_panel_p.DUPLICATE_SELECT_ARGUMENT_SELECTOR : tab_panel_p.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, h);
        u === "other" && (s = !0), this.bumpSpace();
        var E = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(i === "select" ? tab_panel_p.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : tab_panel_p.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, tab_panel_b(this.clonePosition(), this.clonePosition()));
        var g = this.parseMessage(t + 1, i, r);
        if (g.err)
          return g;
        var y = this.tryParseArgumentClose(E);
        if (y.err)
          return y;
        o.push([
          u,
          {
            value: g.val,
            location: tab_panel_b(E, this.clonePosition())
          }
        ]), f.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, h = a.location;
      }
      return o.length === 0 ? this.error(i === "select" ? tab_panel_p.EXPECT_SELECT_ARGUMENT_SELECTOR : tab_panel_p.EXPECT_PLURAL_ARGUMENT_SELECTOR, tab_panel_b(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(tab_panel_p.MISSING_OTHER_CLAUSE, tab_panel_b(this.clonePosition(), this.clonePosition())) : { val: o, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, i) {
      var r = 1, n = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, s = 0; !this.isEOF(); ) {
        var o = this.char();
        if (o >= 48 && o <= 57)
          a = !0, s = s * 10 + (o - 48), this.bump();
        else
          break;
      }
      var f = tab_panel_b(n, this.clonePosition());
      return a ? (s *= r, tab_panel_ht(s) ? { val: s, err: null } : this.error(i, f)) : this.error(t, f);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var i = ye(this.message, t);
      if (i === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return i;
    }, e.prototype.error = function(t, i) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: i
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (ne(this.message, t, this.offset())) {
        for (var i = 0; i < t.length; i++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var i = this.offset(), r = this.message.indexOf(t, i);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var i = this.offset();
        if (i === t)
          break;
        if (i > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && _e(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), i = this.offset(), r = this.message.charCodeAt(i + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function tab_panel_J(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function tab_panel_pt(e) {
  return tab_panel_J(e) || e === 47;
}
function tab_panel_ct(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function _e(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function tab_panel_bt(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function tab_panel_Q(e) {
  e.forEach(function(t) {
    if (delete t.location, ce(t) || be(t))
      for (var i in t.options)
        delete t.options[i].location, tab_panel_Q(t.options[i].value);
    else
      le(t) && xe(t.style) || (fe(t) || pe(t)) && tab_panel_W(t.style) ? delete t.style.location : me(t) && tab_panel_Q(t.children);
  });
}
function tab_panel_mt(e, t) {
  t === void 0 && (t = {}), t = tab_panel_m({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var i = new tab_panel_ft(e, t).parse();
  if (i.err) {
    var r = SyntaxError(tab_panel_p[i.err.kind]);
    throw r.location = i.err.location, r.originalMessage = i.err.message, r;
  }
  return t != null && t.captureLocation || tab_panel_Q(i.val), i.val;
}
function tab_panel_V(e, t) {
  var i = t && t.cache ? t.cache : tab_panel_yt, r = t && t.serializer ? t.serializer : tab_panel_dt, n = t && t.strategy ? t.strategy : tab_panel_Et;
  return n(e, {
    cache: i,
    serializer: r
  });
}
function xt(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Be(e, t, i, r) {
  var n = xt(r) ? r : i(r), a = t.get(n);
  return typeof a > "u" && (a = e.call(this, r), t.set(n, a)), a;
}
function Te(e, t, i) {
  var r = Array.prototype.slice.call(arguments, 3), n = i(r), a = t.get(n);
  return typeof a > "u" && (a = e.apply(this, r), t.set(n, a)), a;
}
function tab_panel_q(e, t, i, r, n) {
  return i.bind(t, e, r, n);
}
function tab_panel_Et(e, t) {
  var i = e.length === 1 ? Be : Te;
  return tab_panel_q(e, this, i, t.cache.create(), t.serializer);
}
function tab_panel_vt(e, t) {
  return tab_panel_q(e, this, Te, t.cache.create(), t.serializer);
}
function tab_panel_gt(e, t) {
  return tab_panel_q(e, this, Be, t.cache.create(), t.serializer);
}
var tab_panel_dt = function() {
  return JSON.stringify(arguments);
};
function tab_panel_Y() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
tab_panel_Y.prototype.get = function(e) {
  return this.cache[e];
};
tab_panel_Y.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var tab_panel_yt = {
  create: function() {
    return new tab_panel_Y();
  }
}, tab_panel_X = {
  variadic: tab_panel_vt,
  monadic: tab_panel_gt
}, tab_panel_I;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(tab_panel_I || (tab_panel_I = {}));
var tab_panel_w = (
  /** @class */
  function(e) {
    tab_panel_M(t, e);
    function t(i, r, n) {
      var a = e.call(this, i) || this;
      return a.code = r, a.originalMessage = n, a;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), he = (
  /** @class */
  function(e) {
    tab_panel_M(t, e);
    function t(i, r, n, a) {
      return e.call(this, 'Invalid values for "'.concat(i, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), tab_panel_I.INVALID_VALUE, a) || this;
    }
    return t;
  }(tab_panel_w)
), Ht = (
  /** @class */
  function(e) {
    tab_panel_M(t, e);
    function t(i, r, n) {
      return e.call(this, 'Value for "'.concat(i, '" must be of type ').concat(r), tab_panel_I.INVALID_VALUE, n) || this;
    }
    return t;
  }(tab_panel_w)
), tab_panel_t = (
  /** @class */
  function(e) {
    tab_panel_M(t, e);
    function t(i, r) {
      return e.call(this, 'The intl string context variable "'.concat(i, '" was not provided to the string "').concat(r, '"'), tab_panel_I.MISSING_VALUE, r) || this;
    }
    return t;
  }(tab_panel_w)
), tab_panel_v;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(tab_panel_v || (tab_panel_v = {}));
function Bt(e) {
  return e.length < 2 ? e : e.reduce(function(t, i) {
    var r = t[t.length - 1];
    return !r || r.type !== tab_panel_v.literal || i.type !== tab_panel_v.literal ? t.push(i) : r.value += i.value, t;
  }, []);
}
function Tt(e) {
  return typeof e == "function";
}
function tab_panel_R(e, t, i, r, n, a, s) {
  if (e.length === 1 && ee(e[0]))
    return [
      {
        type: tab_panel_v.literal,
        value: e[0].value
      }
    ];
  for (var o = [], f = 0, u = e; f < u.length; f++) {
    var h = u[f];
    if (ee(h)) {
      o.push({
        type: tab_panel_v.literal,
        value: h.value
      });
      continue;
    }
    if (Ve(h)) {
      typeof a == "number" && o.push({
        type: tab_panel_v.literal,
        value: i.getNumberFormat(t).format(a)
      });
      continue;
    }
    var c = h.value;
    if (!(n && c in n))
      throw new tab_panel_t(c, s);
    var l = n[c];
    if (Fe(h)) {
      (!l || typeof l == "string" || typeof l == "number") && (l = typeof l == "string" || typeof l == "number" ? String(l) : ""), o.push({
        type: typeof l == "string" ? tab_panel_v.literal : tab_panel_v.object,
        value: l
      });
      continue;
    }
    if (fe(h)) {
      var E = typeof h.style == "string" ? r.date[h.style] : tab_panel_W(h.style) ? h.style.parsedOptions : void 0;
      o.push({
        type: tab_panel_v.literal,
        value: i.getDateTimeFormat(t, E).format(l)
      });
      continue;
    }
    if (pe(h)) {
      var E = typeof h.style == "string" ? r.time[h.style] : tab_panel_W(h.style) ? h.style.parsedOptions : r.time.medium;
      o.push({
        type: tab_panel_v.literal,
        value: i.getDateTimeFormat(t, E).format(l)
      });
      continue;
    }
    if (le(h)) {
      var E = typeof h.style == "string" ? r.number[h.style] : xe(h.style) ? h.style.parsedOptions : void 0;
      E && E.scale && (l = l * (E.scale || 1)), o.push({
        type: tab_panel_v.literal,
        value: i.getNumberFormat(t, E).format(l)
      });
      continue;
    }
    if (me(h)) {
      var g = h.children, y = h.value, B = n[y];
      if (!Tt(B))
        throw new Ht(y, "function", s);
      var P = tab_panel_R(g, t, i, r, n, a), S = B(P.map(function(T) {
        return T.value;
      }));
      Array.isArray(S) || (S = [S]), o.push.apply(o, S.map(function(T) {
        return {
          type: typeof T == "string" ? tab_panel_v.literal : tab_panel_v.object,
          value: T
        };
      }));
    }
    if (ce(h)) {
      var H = h.options[l] || h.options.other;
      if (!H)
        throw new he(h.value, l, Object.keys(h.options), s);
      o.push.apply(o, tab_panel_R(H.value, t, i, r, n));
      continue;
    }
    if (be(h)) {
      var H = h.options["=".concat(l)];
      if (!H) {
        if (!Intl.PluralRules)
          throw new tab_panel_w(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, tab_panel_I.MISSING_INTL_API, s);
        var N = i.getPluralRules(t, { type: h.pluralType }).select(l - (h.offset || 0));
        H = h.options[N] || h.options.other;
      }
      if (!H)
        throw new he(h.value, l, Object.keys(h.options), s);
      o.push.apply(o, tab_panel_R(H.value, t, i, r, n, l - (h.offset || 0)));
      continue;
    }
  }
  return Bt(o);
}
function tab_panel_St(e, t) {
  return t ? tab_panel_m(tab_panel_m(tab_panel_m({}, e || {}), t || {}), Object.keys(e).reduce(function(i, r) {
    return i[r] = tab_panel_m(tab_panel_m({}, e[r]), t[r] || {}), i;
  }, {})) : e;
}
function tab_panel_At(e, t) {
  return t ? Object.keys(e).reduce(function(i, r) {
    return i[r] = tab_panel_St(e[r], t[r]), i;
  }, tab_panel_m({}, e)) : e;
}
function tab_panel_k(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, i) {
          e[t] = i;
        }
      };
    }
  };
}
function It(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: tab_panel_V(function() {
      for (var t, i = [], r = 0; r < arguments.length; r++)
        i[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, tab_panel_D([void 0], i, !1)))();
    }, {
      cache: tab_panel_k(e.number),
      strategy: tab_panel_X.variadic
    }),
    getDateTimeFormat: tab_panel_V(function() {
      for (var t, i = [], r = 0; r < arguments.length; r++)
        i[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, tab_panel_D([void 0], i, !1)))();
    }, {
      cache: tab_panel_k(e.dateTime),
      strategy: tab_panel_X.variadic
    }),
    getPluralRules: tab_panel_V(function() {
      for (var t, i = [], r = 0; r < arguments.length; r++)
        i[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, tab_panel_D([void 0], i, !1)))();
    }, {
      cache: tab_panel_k(e.pluralRules),
      strategy: tab_panel_X.variadic
    })
  };
}
var tab_panel_Pt = (
  /** @class */
  function() {
    function e(t, i, r, n) {
      var a = this;
      if (i === void 0 && (i = e.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(f) {
        var u = a.formatToParts(f);
        if (u.length === 1)
          return u[0].value;
        var h = u.reduce(function(c, l) {
          return !c.length || l.type !== tab_panel_v.literal || typeof c[c.length - 1] != "string" ? c.push(l.value) : c[c.length - 1] += l.value, c;
        }, []);
        return h.length <= 1 ? h[0] || "" : h;
      }, this.formatToParts = function(f) {
        return tab_panel_R(a.ast, a.locales, a.formatters, a.formats, f, void 0, a.message);
      }, this.resolvedOptions = function() {
        var f;
        return {
          locale: ((f = a.resolvedLocale) === null || f === void 0 ? void 0 : f.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = i, this.resolvedLocale = e.resolveLocale(i), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var s = n || {};
        s.formatters;
        var o = De(s, ["formatters"]);
        this.ast = e.__parse(t, tab_panel_m(tab_panel_m({}, o), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = tab_panel_At(e.formats, r), this.formatters = n && n.formatters || It(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      if (!(typeof Intl.Locale > "u")) {
        var i = Intl.NumberFormat.supportedLocalesOf(t);
        return i.length > 0 ? new Intl.Locale(i[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
      }
    }, e.__parse = tab_panel_mt, e.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, e;
  }()
), Nt = Object.defineProperty, Lt = Object.getOwnPropertyDescriptor, tab_panel_Ct = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Lt(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (n = (r ? s(t, i, n) : s(n)) || n);
  return r && n && Nt(t, i, n), n;
};
const Rt = (e) => {
  class t extends e {
    constructor() {
      super(...arguments), this.localize = new localize_controller_DBuC7_PW_d(this), this.translations = {};
    }
    /**
     * Localizes a string using the provided key and interpolations.
     * If the key is not found in the `translations` object, the `fallback` is used.
     *
     * To use this method in a component:
     *
     * ```ts
     * this.msg('greeting', 'Hello {first} {last}!', { first: this.firstName, last: this.lastName })
     * ```
     *
     * Users of the component can then provide their own translations via the `translations` attribute:
     *
     * ```html
     * <my-component translations='{"greeting": "Bonjour {first} {last}!"}'></my-component>
     * ```
     * @internal not to be used by consumers
     * @param key translation key
     * @param fallback fallback string if the key is not found
     * @param interpolations optional object with keys and values to interpolate
     * @returns localized string
     */
    msg(r, n, a = {}) {
      var f;
      if (!r || !this.localize.lang())
        return "";
      const s = ((f = this.translations) == null ? void 0 : f[r]) || n;
      return new tab_panel_Pt(s, this.localize.lang()).format(a);
    }
  }
  return tab_panel_Ct([
    property_CfNGmgjg_f({ type: Object })
  ], t.prototype, "translations", 2), t;
};
var Ot = Object.defineProperty, Mt = Object.getOwnPropertyDescriptor, tab_panel_ = (e, t, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Mt(t, i) : t, a = e.length - 1, s; a >= 0; a--)
    (s = e[a]) && (n = (r ? s(t, i, n) : s(n)) || n);
  return r && n && Ot(t, i, n), n;
};
const wt = "moray-tab-panel";
let Gt = 0, tab_panel_d = class extends Rt(registration_Ac3YpkNH_R) {
  constructor() {
    super(...arguments), this._attrId = ++Gt, this._componentIdFallback = `tab${this._attrId}`, this._tabIdFallback = `${this._componentIdFallback}-tab`, this.active = !1, this.tabId = null, this.tabLabel = null, this.tab = null, this._show = !0;
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "tabpanel"), this.setAttribute("tabindex", "0");
  }
  willUpdate() {
    var e;
    this.id = this.id.length > 0 ? this.id : this._componentIdFallback, this.tabId = this.tabId && this.tabId.length > 0 ? this.tabId : this._tabIdFallback, this.tab = helpers_uHZJbBPu_l(this, `#${this.tabId}`), this.tabLabel = this.tabLabel && this.tabLabel.length > 0 ? this.tabLabel : (e = this.tab) == null ? void 0 : e.textContent;
  }
  async updated(e) {
    e.has("active") && (await this.updateComplete, helpers_uHZJbBPu_i(this.base), this._show = this.active);
  }
  _handleClick(e) {
    this.tab && this.tab.focus(), e.preventDefault();
  }
  render() {
    const e = { show: this._show };
    return Pt`
      <div part="base" class="base ${class_map_B6E0u_KE_u(e)}" tabindex="0">
        <slot></slot>
        <!-- TODO: potentially leverage a separate SR only focusable button component? -->
        <button part="sr-button" class="sr-button" @click="${this._handleClick}">
          ${this.msg("back", "Back to {label}", { label: this.tabLabel || "tab" })}
        </button>
      </div>
    `;
  }
};
tab_panel_d.shadowRootOptions = { ...registration_Ac3YpkNH_R.shadowRootOptions, delegatesFocus: !0 };
tab_panel_d.styles = Ue;
tab_panel_([
  property_CfNGmgjg_f({ type: Boolean, reflect: !0 })
], tab_panel_d.prototype, "active", 2);
tab_panel_([
  property_CfNGmgjg_f({ attribute: "tab-id" })
], tab_panel_d.prototype, "tabId", 2);
tab_panel_([
  property_CfNGmgjg_f({ attribute: "tab-label" })
], tab_panel_d.prototype, "tabLabel", 2);
tab_panel_([
  state_B9yJz8Xo_n()
], tab_panel_d.prototype, "tab", 2);
tab_panel_([
  state_B9yJz8Xo_n()
], tab_panel_d.prototype, "_show", 2);
tab_panel_([
  query_BFAhq_I0_d(".base")
], tab_panel_d.prototype, "base", 2);
tab_panel_([
  query_assigned_elements_BAj4hztX_d({ flatten: !0 })
], tab_panel_d.prototype, "slotItems", 2);
tab_panel_d = tab_panel_([
  Ut(wt)
], tab_panel_d);


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/components/tabs/tab-panel-group/index.js


const tab_panel_group_t = {
  marginBlockStart: "3rem",
  dividerMarginBlockStart: "3rem",
  dividerBorderWidth: "0.125rem",
  dividerBorderStyle: "solid",
  dividerBorderColor: "#757575"
}, tab_panel_group_u = Ct`
  :host {
    display: block;
    margin-block-start: var(
      --ds-tab-panel-group-margin-block-start,
      ${ot(tab_panel_group_t.marginBlockStart)}
    );
  }

  .divider {
    margin-block-start: var(
      --ds-tab-panel-group-divider-margin-block-start,
      ${ot(tab_panel_group_t.dividerMarginBlockStart)}
    );
    border-top-width: var(
      --ds-tab-panel-group-divider-border-width,
      ${ot(tab_panel_group_t.dividerBorderWidth)}
    );
    border-top-style: var(
      --ds-tab-panel-group-divider-border-style,
      ${ot(tab_panel_group_t.dividerBorderStyle)}
    );
    border-top-color: var(
      --ds-tab-panel-group-divider-border-color,
      ${ot(tab_panel_group_t.dividerBorderColor)}
    );
  }
`;
var tab_panel_group_y = Object.defineProperty, tab_panel_group_B = Object.getOwnPropertyDescriptor, tab_panel_group_n = (p, d, a, o) => {
  for (var r = o > 1 ? void 0 : o ? tab_panel_group_B(d, a) : d, s = p.length - 1, l; s >= 0; s--)
    (l = p[s]) && (r = (o ? l(d, a, r) : l(r)) || r);
  return o && r && tab_panel_group_y(d, a, r), r;
};
const tab_panel_group_f = "moray-tab-panel-group";
let tab_panel_group_i = class extends registration_Ac3YpkNH_R {
  constructor() {
    super(...arguments), this.divider = !1;
  }
  render() {
    return Pt`
      <div part="base">
        <slot></slot>
        <!-- TODO: potentially leverage a separate divider component? -->
        ${this.divider ? Pt`<div part="divider" class="divider"></div>` : ""}
      </div>
    `;
  }
};
tab_panel_group_i.styles = tab_panel_group_u;
tab_panel_group_n([
  property_CfNGmgjg_f({ type: Boolean, reflect: !0 })
], tab_panel_group_i.prototype, "divider", 2);
tab_panel_group_i = tab_panel_group_n([
  Ut(tab_panel_group_f)
], tab_panel_group_i);


;// CONCATENATED MODULE: ./src/components/multi-comparison-container/index.ts








let MultiComparisonContainerElement = class MultiComparisonContainerElement extends lit_element_s {
    render() {
        return x `
      <div id="Multi Comparison Component" class="multi-comparison-component">
        <div class="multi-comparison-title-section">
          <slot name="title"></slot>
          <slot name="tab-content"> </slot>
        </div>
        <slot name="footer"></slot>
      </div>
    `;
    }
};
MultiComparisonContainerElement.styles = [multiCompareStyles];
MultiComparisonContainerElement = __decorate([
    custom_element_t('cascade-multi-comparison-container')
], MultiComparisonContainerElement);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map