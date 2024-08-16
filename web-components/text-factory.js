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
  TextFactory: () => (/* binding */ TextFactory)
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

;// CONCATENATED MODULE: ./src/util/define-elements.ts
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


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/if-defined-BrcqGSt5.mjs

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const if_defined_BrcqGSt5_m = (o) => o ?? registration_Ac3YpkNH_d;


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
  borderRadius: variables_BKxyUZOC_h,
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
    ${vfi_CyPinwDN_r}
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


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/close-DSImWicy.mjs




const close_DSImWicy_r = {
  padding: variables_BKxyUZOC_i,
  backgroundColor: "transparent",
  border: "0",
  color: variables_BKxyUZOC_w
}, close_DSImWicy_p = Ct`
  .close {
    ${button_DC9AV08H_P}
    display: inline-flex;
    appearance: none;
    cursor: pointer;
    background-color: var(
      --ds-close-background-color,
      ${ot(close_DSImWicy_r.backgroundColor)}
    );
    padding: var(--ds-close-padding, ${ot(close_DSImWicy_r.padding)});
    border: var(--ds-close-border, ${ot(close_DSImWicy_r.border)});
    color: var(
      --ds-close-color,
      var(--ds-theme-foreground-neutral-icon, ${ot(close_DSImWicy_r.color)})
    );

    /* Ensure minimum target size even with smaller content */
    min-width: 36px;
    min-height: 36px;
    justify-content: center;
    align-items: center;
  }

  .close:focus {
    ${vfi_CyPinwDN_v}
  }

  .close:hover {
    cursor: pointer;
  }
`;


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


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/index-BrpNeah-.mjs





const zt = {
  top: "top",
  topEnd: "top-end",
  topStart: "top-start",
  bottom: "bottom",
  bottomEnd: "bottom-end",
  bottomStart: "bottom-start",
  right: "right",
  rightEnd: "right-end",
  rightStart: "right-start",
  left: "left",
  leftEnd: "left-end",
  leftStart: "left-start"
}, wt = {
  onShow: "onShow",
  onHide: "onHide"
}, index_BrpNeah_b = {
  bgColor: variables_BKxyUZOC_A,
  borderColor: variables_BKxyUZOC_P,
  borderWidth: "0.0625rem",
  depth: variables_BKxyUZOC_l,
  arrowSize: "1rem",
  minWidth: "8rem",
  minHeight: "4rem",
  maxWidth: "21rem"
}, Yt = Ct`
  :host([anchor]) {
    isolation: isolate;
    opacity: 0;
    border-style: solid;
    border-width: var(--ds-flyout-border-width, ${ot(index_BrpNeah_b.borderWidth)});
    border-color: var(
      --ds-flyout-border-color,
      var(--ds-theme-border-neutral-pure, ${ot(index_BrpNeah_b.borderColor)})
    );
    background-color: var(
      --ds-flyout-bg-color,
      var(--ds-theme-background-neutral-fade, ${ot(index_BrpNeah_b.bgColor)})
    );
    box-shadow: var(--ds-flyout-depth, ${ot(index_BrpNeah_b.depth)});
    position: absolute;
    width: max-content;
    min-width: var(--ds-flyout-min-width, ${ot(index_BrpNeah_b.minWidth)});
    min-height: var(--ds-flyout-min-height, ${ot(index_BrpNeah_b.minHeight)});
    max-width: var(--ds-flyout-max-width, ${ot(index_BrpNeah_b.maxWidth)});
  }

  .arrow {
    position: absolute;
    visibility: hidden;
    border-style: solid;
    border-color: var(
      --ds-flyout-border-color,
      var(--ds-theme-border-neutral-pure, ${ot(index_BrpNeah_b.borderColor)})
    );
    border-width: 0;
    background-color: var(
      --ds-flyout-bg-color,
      var(--ds-theme-background-neutral-fade, ${ot(index_BrpNeah_b.bgColor)})
    );
    width: var(--ds-flyout-arrow-size, ${ot(index_BrpNeah_b.arrowSize)});
    height: var(--ds-flyout-arrow-size, ${ot(index_BrpNeah_b.arrowSize)});
    transform: rotate(45deg);
  }

  .arrow[flyout-placement^='bottom'] {
    border-top-width: var(--ds-flyout-border-width, ${ot(index_BrpNeah_b.borderWidth)});
    border-left-width: var(--ds-flyout-border-width, ${ot(index_BrpNeah_b.borderWidth)});
  }

  .arrow[flyout-placement^='top'] {
    border-bottom-width: var(--ds-flyout-border-width, ${ot(index_BrpNeah_b.borderWidth)});
    border-right-width: var(--ds-flyout-border-width, ${ot(index_BrpNeah_b.borderWidth)});
  }

  .arrow[flyout-placement^='left'] {
    border-top-width: var(--ds-flyout-border-width, ${ot(index_BrpNeah_b.borderWidth)});
    border-right-width: var(--ds-flyout-border-width, ${ot(index_BrpNeah_b.borderWidth)});
  }

  .arrow[flyout-placement^='right'] {
    border-bottom-width: var(--ds-flyout-border-width, ${ot(index_BrpNeah_b.borderWidth)});
    border-left-width: var(--ds-flyout-border-width, ${ot(index_BrpNeah_b.borderWidth)});
  }

  .base {
    display: contents;
  }
`, index_BrpNeah_lt = Math.min, Xt = Math.max, It = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, qt = {
  start: "end",
  end: "start"
};
function index_BrpNeah_at(t, e, o) {
  return Xt(t, index_BrpNeah_lt(e, o));
}
function index_BrpNeah_J(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function index_BrpNeah_V(t) {
  return t.split("-")[0];
}
function index_BrpNeah_Q(t) {
  return t.split("-")[1];
}
function index_BrpNeah_Ct(t) {
  return t === "x" ? "y" : "x";
}
function index_BrpNeah_ut(t) {
  return t === "y" ? "height" : "width";
}
function index_BrpNeah_nt(t) {
  return ["top", "bottom"].includes(index_BrpNeah_V(t)) ? "y" : "x";
}
function index_BrpNeah_ht(t) {
  return index_BrpNeah_Ct(index_BrpNeah_nt(t));
}
function index_BrpNeah_Ut(t, e, o) {
  o === void 0 && (o = !1);
  const n = index_BrpNeah_Q(t), i = index_BrpNeah_ht(t), s = index_BrpNeah_ut(i);
  let r = i === "x" ? n === (o ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = index_BrpNeah_tt(r)), [r, index_BrpNeah_tt(r)];
}
function Gt(t) {
  const e = index_BrpNeah_tt(t);
  return [index_BrpNeah_ct(t), e, index_BrpNeah_ct(e)];
}
function index_BrpNeah_ct(t) {
  return t.replace(/start|end/g, (e) => qt[e]);
}
function Jt(t, e, o) {
  const n = ["left", "right"], i = ["right", "left"], s = ["top", "bottom"], r = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return o ? e ? i : n : e ? n : i;
    case "left":
    case "right":
      return e ? s : r;
    default:
      return [];
  }
}
function Qt(t, e, o, n) {
  const i = index_BrpNeah_Q(t);
  let s = Jt(index_BrpNeah_V(t), o === "start", n);
  return i && (s = s.map((r) => r + "-" + i), e && (s = s.concat(s.map(index_BrpNeah_ct)))), s;
}
function index_BrpNeah_tt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => It[e]);
}
function Zt(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Ot(t) {
  return typeof t != "number" ? Zt(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function index_BrpNeah_et(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function index_BrpNeah_yt(t, e, o) {
  let {
    reference: n,
    floating: i
  } = t;
  const s = index_BrpNeah_nt(e), r = index_BrpNeah_ht(e), l = index_BrpNeah_ut(r), a = index_BrpNeah_V(e), c = s === "y", u = n.x + n.width / 2 - i.width / 2, f = n.y + n.height / 2 - i.height / 2, m = n[l] / 2 - i[l] / 2;
  let d;
  switch (a) {
    case "top":
      d = {
        x: u,
        y: n.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      d = {
        x: n.x + n.width,
        y: f
      };
      break;
    case "left":
      d = {
        x: n.x - i.width,
        y: f
      };
      break;
    default:
      d = {
        x: n.x,
        y: n.y
      };
  }
  switch (index_BrpNeah_Q(e)) {
    case "start":
      d[r] -= m * (o && c ? -1 : 1);
      break;
    case "end":
      d[r] += m * (o && c ? -1 : 1);
      break;
  }
  return d;
}
const te = async (t, e, o) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: r
  } = o, l = s.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let c = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: u,
    y: f
  } = index_BrpNeah_yt(c, n, a), m = n, d = {}, h = 0;
  for (let p = 0; p < l.length; p++) {
    const {
      name: g,
      fn: w
    } = l[p], {
      x,
      y: v,
      data: C,
      reset: E
    } = await w({
      x: u,
      y: f,
      initialPlacement: n,
      placement: m,
      strategy: i,
      middlewareData: d,
      rects: c,
      platform: r,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (u = x ?? u, f = v ?? f, d = {
      ...d,
      [g]: {
        ...d[g],
        ...C
      }
    }, E && h <= 50) {
      h++, typeof E == "object" && (E.placement && (m = E.placement), E.rects && (c = E.rects === !0 ? await r.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : E.rects), {
        x: u,
        y: f
      } = index_BrpNeah_yt(c, m, a)), p = -1;
      continue;
    }
  }
  return {
    x: u,
    y: f,
    placement: m,
    strategy: i,
    middlewareData: d
  };
};
async function index_BrpNeah_At(t, e) {
  var o;
  e === void 0 && (e = {});
  const {
    x: n,
    y: i,
    platform: s,
    rects: r,
    elements: l,
    strategy: a
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: d = 0
  } = index_BrpNeah_J(e, t), h = Ot(d), g = l[m ? f === "floating" ? "reference" : "floating" : f], w = index_BrpNeah_et(await s.getClippingRect({
    element: (o = await (s.isElement == null ? void 0 : s.isElement(g))) == null || o ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: a
  })), x = f === "floating" ? {
    ...r.floating,
    x: n,
    y: i
  } : r.reference, v = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), C = await (s.isElement == null ? void 0 : s.isElement(v)) ? await (s.getScale == null ? void 0 : s.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = index_BrpNeah_et(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: v,
    strategy: a
  }) : x);
  return {
    top: (w.top - E.top + h.top) / C.y,
    bottom: (E.bottom - w.bottom + h.bottom) / C.y,
    left: (w.left - E.left + h.left) / C.x,
    right: (E.right - w.right + h.right) / C.x
  };
}
const ee = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: o,
      y: n,
      placement: i,
      rects: s,
      platform: r,
      elements: l,
      middlewareData: a
    } = e, {
      element: c,
      padding: u = 0
    } = index_BrpNeah_J(t, e) || {};
    if (c == null)
      return {};
    const f = Ot(u), m = {
      x: o,
      y: n
    }, d = index_BrpNeah_ht(i), h = index_BrpNeah_ut(d), p = await r.getDimensions(c), g = d === "y", w = g ? "top" : "left", x = g ? "bottom" : "right", v = g ? "clientHeight" : "clientWidth", C = s.reference[h] + s.reference[d] - m[d] - s.floating[h], E = m[d] - s.reference[d], B = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c));
    let R = B ? B[v] : 0;
    (!R || !await (r.isElement == null ? void 0 : r.isElement(B))) && (R = l.floating[v] || s.floating[h]);
    const H = C / 2 - E / 2, Y = R / 2 - p[h] / 2 - 1, X = index_BrpNeah_lt(f[w], Y), I = index_BrpNeah_lt(f[x], Y), S = X, q = R - p[h] - I, O = R / 2 - p[h] / 2 + H, P = index_BrpNeah_at(S, O, q), _ = !a.arrow && index_BrpNeah_Q(i) != null && O != P && s.reference[h] / 2 - (O < S ? X : I) - p[h] / 2 < 0, $ = _ ? O < S ? O - S : O - q : 0;
    return {
      [d]: m[d] + $,
      data: {
        [d]: P,
        centerOffset: O - P - $,
        ..._ && {
          alignmentOffset: $
        }
      },
      reset: _
    };
  }
}), oe = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var o, n;
      const {
        placement: i,
        middlewareData: s,
        rects: r,
        initialPlacement: l,
        platform: a,
        elements: c
      } = e, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: p = !0,
        ...g
      } = index_BrpNeah_J(t, e);
      if ((o = s.arrow) != null && o.alignmentOffset)
        return {};
      const w = index_BrpNeah_V(i), x = index_BrpNeah_V(l) === l, v = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), C = m || (x || !p ? [index_BrpNeah_tt(l)] : Gt(l));
      !m && h !== "none" && C.push(...Qt(l, p, h, v));
      const E = [l, ...C], B = await index_BrpNeah_At(e, g), R = [];
      let H = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (u && R.push(B[w]), f) {
        const S = index_BrpNeah_Ut(i, r, v);
        R.push(B[S[0]], B[S[1]]);
      }
      if (H = [...H, {
        placement: i,
        overflows: R
      }], !R.every((S) => S <= 0)) {
        var Y, X;
        const S = (((Y = s.flip) == null ? void 0 : Y.index) || 0) + 1, q = E[S];
        if (q)
          return {
            data: {
              index: S,
              overflows: H
            },
            reset: {
              placement: q
            }
          };
        let O = (X = H.filter((P) => P.overflows[0] <= 0).sort((P, _) => P.overflows[1] - _.overflows[1])[0]) == null ? void 0 : X.placement;
        if (!O)
          switch (d) {
            case "bestFit": {
              var I;
              const P = (I = H.map((_) => [_.placement, _.overflows.filter(($) => $ > 0).reduce(($, Wt) => $ + Wt, 0)]).sort((_, $) => _[1] - $[1])[0]) == null ? void 0 : I[0];
              P && (O = P);
              break;
            }
            case "initialPlacement":
              O = l;
              break;
          }
        if (i !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
async function ne(t, e) {
  const {
    placement: o,
    platform: n,
    elements: i
  } = t, s = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), r = index_BrpNeah_V(o), l = index_BrpNeah_Q(o), a = index_BrpNeah_nt(o) === "y", c = ["left", "top"].includes(r) ? -1 : 1, u = s && a ? -1 : 1, f = index_BrpNeah_J(e, t);
  let {
    mainAxis: m,
    crossAxis: d,
    alignmentAxis: h
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return l && typeof h == "number" && (d = l === "end" ? h * -1 : h), a ? {
    x: d * u,
    y: m * c
  } : {
    x: m * c,
    y: d * u
  };
}
const ie = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var o, n;
      const {
        x: i,
        y: s,
        placement: r,
        middlewareData: l
      } = e, a = await ne(e, t);
      return r === ((o = l.offset) == null ? void 0 : o.placement) && (n = l.arrow) != null && n.alignmentOffset ? {} : {
        x: i + a.x,
        y: s + a.y,
        data: {
          ...a,
          placement: r
        }
      };
    }
  };
}, re = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: o,
        y: n,
        placement: i
      } = e, {
        mainAxis: s = !0,
        crossAxis: r = !1,
        limiter: l = {
          fn: (g) => {
            let {
              x: w,
              y: x
            } = g;
            return {
              x: w,
              y: x
            };
          }
        },
        ...a
      } = index_BrpNeah_J(t, e), c = {
        x: o,
        y: n
      }, u = await index_BrpNeah_At(e, a), f = index_BrpNeah_nt(index_BrpNeah_V(i)), m = index_BrpNeah_Ct(f);
      let d = c[m], h = c[f];
      if (s) {
        const g = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", x = d + u[g], v = d - u[w];
        d = index_BrpNeah_at(x, d, v);
      }
      if (r) {
        const g = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", x = h + u[g], v = h - u[w];
        h = index_BrpNeah_at(x, h, v);
      }
      const p = l.fn({
        ...e,
        [m]: d,
        [f]: h
      });
      return {
        ...p,
        data: {
          x: p.x - o,
          y: p.y - n
        }
      };
    }
  };
}, index_BrpNeah_bt = Math.min, index_BrpNeah_U = Math.max, index_BrpNeah_ot = Math.round, index_BrpNeah_W = (t) => ({
  x: t,
  y: t
});
function index_BrpNeah_N(t) {
  return index_BrpNeah_St(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function index_BrpNeah_A(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function index_BrpNeah_F(t) {
  var e;
  return (e = (index_BrpNeah_St(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function index_BrpNeah_St(t) {
  return t instanceof Node || t instanceof index_BrpNeah_A(t).Node;
}
function index_BrpNeah_D(t) {
  return t instanceof Element || t instanceof index_BrpNeah_A(t).Element;
}
function index_BrpNeah_L(t) {
  return t instanceof HTMLElement || t instanceof index_BrpNeah_A(t).HTMLElement;
}
function xt(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof index_BrpNeah_A(t).ShadowRoot;
}
function index_BrpNeah_Z(t) {
  const {
    overflow: e,
    overflowX: o,
    overflowY: n,
    display: i
  } = index_BrpNeah_k(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + o) && !["inline", "contents"].includes(i);
}
function se(t) {
  return ["table", "td", "th"].includes(index_BrpNeah_N(t));
}
function index_BrpNeah_mt(t) {
  const e = index_BrpNeah_pt(), o = index_BrpNeah_k(t);
  return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !e && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !e && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (o.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (o.contain || "").includes(n));
}
function le(t) {
  let e = index_BrpNeah_K(t);
  for (; index_BrpNeah_L(e) && !index_BrpNeah_it(e); ) {
    if (index_BrpNeah_mt(e))
      return e;
    e = index_BrpNeah_K(e);
  }
  return null;
}
function index_BrpNeah_pt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function index_BrpNeah_it(t) {
  return ["html", "body", "#document"].includes(index_BrpNeah_N(t));
}
function index_BrpNeah_k(t) {
  return index_BrpNeah_A(t).getComputedStyle(t);
}
function index_BrpNeah_rt(t) {
  return index_BrpNeah_D(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function index_BrpNeah_K(t) {
  if (index_BrpNeah_N(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    xt(t) && t.host || // Fallback.
    index_BrpNeah_F(t)
  );
  return xt(e) ? e.host : e;
}
function kt(t) {
  const e = index_BrpNeah_K(t);
  return index_BrpNeah_it(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : index_BrpNeah_L(e) && index_BrpNeah_Z(e) ? e : kt(e);
}
function index_BrpNeah_ft(t, e, o) {
  var n;
  e === void 0 && (e = []), o === void 0 && (o = !0);
  const i = kt(t), s = i === ((n = t.ownerDocument) == null ? void 0 : n.body), r = index_BrpNeah_A(i);
  return s ? e.concat(r, r.visualViewport || [], index_BrpNeah_Z(i) ? i : [], r.frameElement && o ? index_BrpNeah_ft(r.frameElement) : []) : e.concat(i, index_BrpNeah_ft(i, [], o));
}
function Rt(t) {
  const e = index_BrpNeah_k(t);
  let o = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const i = index_BrpNeah_L(t), s = i ? t.offsetWidth : o, r = i ? t.offsetHeight : n, l = index_BrpNeah_ot(o) !== s || index_BrpNeah_ot(n) !== r;
  return l && (o = s, n = r), {
    width: o,
    height: n,
    $: l
  };
}
function index_BrpNeah_Pt(t) {
  return index_BrpNeah_D(t) ? t : t.contextElement;
}
function index_BrpNeah_j(t) {
  const e = index_BrpNeah_Pt(t);
  if (!index_BrpNeah_L(e))
    return index_BrpNeah_W(1);
  const o = e.getBoundingClientRect(), {
    width: n,
    height: i,
    $: s
  } = Rt(e);
  let r = (s ? index_BrpNeah_ot(o.width) : o.width) / n, l = (s ? index_BrpNeah_ot(o.height) : o.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: r,
    y: l
  };
}
const ae = /* @__PURE__ */ index_BrpNeah_W(0);
function index_BrpNeah_t(t) {
  const e = index_BrpNeah_A(t);
  return !index_BrpNeah_pt() || !e.visualViewport ? ae : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function ce(t, e, o) {
  return e === void 0 && (e = !1), !o || e && o !== index_BrpNeah_A(t) ? !1 : e;
}
function index_BrpNeah_G(t, e, o, n) {
  e === void 0 && (e = !1), o === void 0 && (o = !1);
  const i = t.getBoundingClientRect(), s = index_BrpNeah_Pt(t);
  let r = index_BrpNeah_W(1);
  e && (n ? index_BrpNeah_D(n) && (r = index_BrpNeah_j(n)) : r = index_BrpNeah_j(t));
  const l = ce(s, o, n) ? index_BrpNeah_t(s) : index_BrpNeah_W(0);
  let a = (i.left + l.x) / r.x, c = (i.top + l.y) / r.y, u = i.width / r.x, f = i.height / r.y;
  if (s) {
    const m = index_BrpNeah_A(s), d = n && index_BrpNeah_D(n) ? index_BrpNeah_A(n) : n;
    let h = m, p = h.frameElement;
    for (; p && n && d !== h; ) {
      const g = index_BrpNeah_j(p), w = p.getBoundingClientRect(), x = index_BrpNeah_k(p), v = w.left + (p.clientLeft + parseFloat(x.paddingLeft)) * g.x, C = w.top + (p.clientTop + parseFloat(x.paddingTop)) * g.y;
      a *= g.x, c *= g.y, u *= g.x, f *= g.y, a += v, c += C, h = index_BrpNeah_A(p), p = h.frameElement;
    }
  }
  return index_BrpNeah_et({
    width: u,
    height: f,
    x: a,
    y: c
  });
}
const fe = [":popover-open", ":modal"];
function Lt(t) {
  return fe.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function de(t) {
  let {
    elements: e,
    rect: o,
    offsetParent: n,
    strategy: i
  } = t;
  const s = i === "fixed", r = index_BrpNeah_F(n), l = e ? Lt(e.floating) : !1;
  if (n === r || l && s)
    return o;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = index_BrpNeah_W(1);
  const u = index_BrpNeah_W(0), f = index_BrpNeah_L(n);
  if ((f || !f && !s) && ((index_BrpNeah_N(n) !== "body" || index_BrpNeah_Z(r)) && (a = index_BrpNeah_rt(n)), index_BrpNeah_L(n))) {
    const m = index_BrpNeah_G(n);
    c = index_BrpNeah_j(n), u.x = m.x + n.clientLeft, u.y = m.y + n.clientTop;
  }
  return {
    width: o.width * c.x,
    height: o.height * c.y,
    x: o.x * c.x - a.scrollLeft * c.x + u.x,
    y: o.y * c.y - a.scrollTop * c.y + u.y
  };
}
function ue(t) {
  return Array.from(t.getClientRects());
}
function index_BrpNeah_$t(t) {
  return index_BrpNeah_G(index_BrpNeah_F(t)).left + index_BrpNeah_rt(t).scrollLeft;
}
function he(t) {
  const e = index_BrpNeah_F(t), o = index_BrpNeah_rt(t), n = t.ownerDocument.body, i = index_BrpNeah_U(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), s = index_BrpNeah_U(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -o.scrollLeft + index_BrpNeah_$t(t);
  const l = -o.scrollTop;
  return index_BrpNeah_k(n).direction === "rtl" && (r += index_BrpNeah_U(e.clientWidth, n.clientWidth) - i), {
    width: i,
    height: s,
    x: r,
    y: l
  };
}
function me(t, e) {
  const o = index_BrpNeah_A(t), n = index_BrpNeah_F(t), i = o.visualViewport;
  let s = n.clientWidth, r = n.clientHeight, l = 0, a = 0;
  if (i) {
    s = i.width, r = i.height;
    const c = index_BrpNeah_pt();
    (!c || c && e === "fixed") && (l = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: l,
    y: a
  };
}
function pe(t, e) {
  const o = index_BrpNeah_G(t, !0, e === "fixed"), n = o.top + t.clientTop, i = o.left + t.clientLeft, s = index_BrpNeah_L(t) ? index_BrpNeah_j(t) : index_BrpNeah_W(1), r = t.clientWidth * s.x, l = t.clientHeight * s.y, a = i * s.x, c = n * s.y;
  return {
    width: r,
    height: l,
    x: a,
    y: c
  };
}
function index_BrpNeah_vt(t, e, o) {
  let n;
  if (e === "viewport")
    n = me(t, o);
  else if (e === "document")
    n = he(index_BrpNeah_F(t));
  else if (index_BrpNeah_D(e))
    n = pe(e, o);
  else {
    const i = index_BrpNeah_t(t);
    n = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return index_BrpNeah_et(n);
}
function Dt(t, e) {
  const o = index_BrpNeah_K(t);
  return o === e || !index_BrpNeah_D(o) || index_BrpNeah_it(o) ? !1 : index_BrpNeah_k(o).position === "fixed" || Dt(o, e);
}
function ge(t, e) {
  const o = e.get(t);
  if (o)
    return o;
  let n = index_BrpNeah_ft(t, [], !1).filter((l) => index_BrpNeah_D(l) && index_BrpNeah_N(l) !== "body"), i = null;
  const s = index_BrpNeah_k(t).position === "fixed";
  let r = s ? index_BrpNeah_K(t) : t;
  for (; index_BrpNeah_D(r) && !index_BrpNeah_it(r); ) {
    const l = index_BrpNeah_k(r), a = index_BrpNeah_mt(r);
    !a && l.position === "fixed" && (i = null), (s ? !a && !i : !a && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || index_BrpNeah_Z(r) && !a && Dt(t, r)) ? n = n.filter((u) => u !== r) : i = l, r = index_BrpNeah_K(r);
  }
  return e.set(t, n), n;
}
function we(t) {
  let {
    element: e,
    boundary: o,
    rootBoundary: n,
    strategy: i
  } = t;
  const r = [...o === "clippingAncestors" ? ge(e, this._c) : [].concat(o), n], l = r[0], a = r.reduce((c, u) => {
    const f = index_BrpNeah_vt(e, u, i);
    return c.top = index_BrpNeah_U(f.top, c.top), c.right = index_BrpNeah_bt(f.right, c.right), c.bottom = index_BrpNeah_bt(f.bottom, c.bottom), c.left = index_BrpNeah_U(f.left, c.left), c;
  }, index_BrpNeah_vt(e, l, i));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function ye(t) {
  const {
    width: e,
    height: o
  } = Rt(t);
  return {
    width: e,
    height: o
  };
}
function be(t, e, o) {
  const n = index_BrpNeah_L(e), i = index_BrpNeah_F(e), s = o === "fixed", r = index_BrpNeah_G(t, !0, s, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = index_BrpNeah_W(0);
  if (n || !n && !s)
    if ((index_BrpNeah_N(e) !== "body" || index_BrpNeah_Z(i)) && (l = index_BrpNeah_rt(e)), n) {
      const f = index_BrpNeah_G(e, !0, s, e);
      a.x = f.x + e.clientLeft, a.y = f.y + e.clientTop;
    } else
      i && (a.x = index_BrpNeah_$t(i));
  const c = r.left + l.scrollLeft - a.x, u = r.top + l.scrollTop - a.y;
  return {
    x: c,
    y: u,
    width: r.width,
    height: r.height
  };
}
function index_BrpNeah_Et(t, e) {
  return !index_BrpNeah_L(t) || index_BrpNeah_k(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function Tt(t, e) {
  const o = index_BrpNeah_A(t);
  if (!index_BrpNeah_L(t) || Lt(t))
    return o;
  let n = index_BrpNeah_Et(t, e);
  for (; n && se(n) && index_BrpNeah_k(n).position === "static"; )
    n = index_BrpNeah_Et(n, e);
  return n && (index_BrpNeah_N(n) === "html" || index_BrpNeah_N(n) === "body" && index_BrpNeah_k(n).position === "static" && !index_BrpNeah_mt(n)) ? o : n || le(t) || o;
}
const xe = async function(t) {
  const e = this.getOffsetParent || Tt, o = this.getDimensions;
  return {
    reference: be(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await o(t.floating)
    }
  };
};
function ve(t) {
  return index_BrpNeah_k(t).direction === "rtl";
}
const index_BrpNeah_dt = {
  convertOffsetParentRelativeRectToViewportRelativeRect: de,
  getDocumentElement: index_BrpNeah_F,
  getClippingRect: we,
  getOffsetParent: Tt,
  getElementRects: xe,
  getClientRects: ue,
  getDimensions: ye,
  getScale: index_BrpNeah_j,
  isElement: index_BrpNeah_D,
  isRTL: ve
}, Ee = re, Ce = oe, Oe = ee, Ae = (t, e, o) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: index_BrpNeah_dt,
    ...o
  }, s = {
    ...i.platform,
    _c: n
  };
  return te(t, e, {
    ...i,
    platform: s
  });
};
function Se(t) {
  return ke(t);
}
function index_BrpNeah_st(t) {
  return t.assignedSlot ? t.assignedSlot : t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode;
}
function ke(t) {
  for (let e = t; e; e = index_BrpNeah_st(e))
    if (e instanceof Element && getComputedStyle(e).display === "none")
      return null;
  for (let e = index_BrpNeah_st(t); e; e = index_BrpNeah_st(e)) {
    if (!(e instanceof Element))
      continue;
    const o = getComputedStyle(e);
    if (o.display !== "contents" && (o.position !== "static" || o.filter !== "none" || e.tagName === "BODY"))
      return e;
  }
  return null;
}
let Re = class {
  constructor(e, o) {
    this._relativeRoot = null, this.setOptions(o), (this._host = e).addController(this);
  }
  hostConnected() {
    this._relativeRoot = this._host.parentNode instanceof ShadowRoot ? this._host.parentNode.host : this._host, this.handleClickOutside = this.handleClickOutside.bind(this), this.handleClick = this.handleClick.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), this.addEventListeners();
  }
  hostDisconnected() {
    this.removeEventListeners();
  }
  get targetElement() {
    return helpers_uHZJbBPu_l(
      this._relativeRoot || this._host,
      `#${this._options.target}`,
      !1
    );
  }
  get floatingElement() {
    return this._host;
  }
  get arrowElement() {
    return this._host.shadowRoot.querySelector(".arrow");
  }
  get middlewares() {
    const e = [
      ie(this._options.offset),
      Ee(),
      Oe({ element: this.arrowElement })
    ];
    if (this._options.flip) {
      let o;
      switch (this._options.placement) {
        case "left": {
          o = ["left", "bottom", "top", "right"];
          break;
        }
        case "right": {
          o = ["right", "bottom", "top", "left"];
          break;
        }
        case "top": {
          o = ["top", "right", "bottom", "left"];
          break;
        }
        case "bottom": {
          o = ["bottom", "right", "top", "left"];
          break;
        }
        default: {
          o = ["bottom", "right", "top", "left"];
          break;
        }
      }
      e.push(Ce({ fallbackPlacements: o }));
    }
    return e;
  }
  async updatePosition() {
    const { x: e, y: o, strategy: n, placement: i, middlewareData: s } = await Ae(
      this.targetElement,
      this.floatingElement,
      {
        placement: this._options.placement,
        middleware: this.middlewares,
        platform: {
          ...index_BrpNeah_dt,
          getOffsetParent: (l) => index_BrpNeah_dt.getOffsetParent(l, Se)
        }
      }
    );
    Object.assign(this.floatingElement.style, {
      position: n,
      left: `${e}px`,
      top: `${o}px`
    });
    const r = { top: "bottom", right: "left", bottom: "top", left: "right" }[i.split("-")[0]];
    if (s.arrow && this.arrowElement) {
      const { x: l, y: a } = s.arrow;
      Object.assign(this.arrowElement.style, {
        left: l == null ? "" : `${l}px`,
        top: a == null ? "" : `${a}px`,
        right: "",
        bottom: "",
        [r]: `${-this.arrowElement.offsetWidth / 2 - 1}px`,
        visibility: "visible",
        [`${i}`]: ""
      }), this.arrowElement.setAttribute("flyout-placement", i);
    }
  }
  setOptions(e) {
    return this._options = e, this;
  }
  // Flyout is often composed within another component,
  // so we need to check if the target is part of that parent
  isPartOfParent(e, o) {
    return !!(e.parentNode instanceof ShadowRoot && e.parentNode.host.contains(o));
  }
  addEventListeners() {
    this.targetElement && this.floatingElement && (this.floatingElement.addEventListener("keydown", this.handleKeyDown), this.targetElement.addEventListener("keydown", this.handleKeyDown), this.targetElement.addEventListener("click", this.handleClick));
  }
  removeEventListeners() {
    this.targetElement && this.floatingElement && (this.floatingElement.removeEventListener("keydown", this.handleKeyDown), this.targetElement.removeEventListener("click", this.handleClick));
  }
  setup() {
    this.targetElement.classList.add("active"), this.floatingElement.setAttribute("aria-hidden", "false"), document.addEventListener("click", this.handleClickOutside, !0);
  }
  cleanup() {
    this.targetElement.classList.remove("active"), this.floatingElement.setAttribute("aria-hidden", "true"), document.removeEventListener("click", this.handleClickOutside, !0), this.targetElement.focus();
  }
  handleClick() {
    this._host.open ? (this._host.hide(), this.cleanup()) : (this._host.show(), this.setup());
  }
  handleClickOutside(e) {
    const o = e.composedPath();
    e.button === 0 && // ignore right clicks
    this.floatingElement && this.targetElement && !o.includes(this.floatingElement) && !o.includes(this.targetElement) && (this._host.hide(), this.cleanup());
  }
  handleKeyDown(e) {
    this._host.open && e.key === keyboard_DX8Uc3JA_A.ESC && (e.stopPropagation(), this._host.hide(), this.cleanup());
  }
};
var Pe = Object.defineProperty, _e = Object.getOwnPropertyDescriptor, index_BrpNeah_M = (t, e, o, n) => {
  for (var i = n > 1 ? void 0 : n ? _e(e, o) : e, s = t.length - 1, r; s >= 0; s--)
    (r = t[s]) && (i = (n ? r(e, o, i) : r(i)) || i);
  return n && i && Pe(e, o, i), i;
};
const Le = "moray-flyout";
let index_BrpNeah_T = class extends registration_Ac3YpkNH_R {
  constructor() {
    super(...arguments), this.anchor = null, this.placement = zt.bottom, this.offset = 0, this.open = !1, this.arrow = !1, this.reflow = !1;
  }
  flyoutOptions() {
    return {
      target: this.anchor,
      placement: this.placement,
      offset: this.offset,
      flip: this.reflow
    };
  }
  async _handleOpenChange() {
    var t;
    this.open ? (await this._flyout.updatePosition(), this.style.opacity = "1", this._flyout.setup(), this.dispatchEvent(new Event(wt.onShow))) : (this.style.opacity = "0", this._flyout.cleanup(), this.dispatchEvent(new Event(wt.onHide))), (t = this._flyout) != null && t.targetElement && this._flyout.targetElement.setAttribute("aria-expanded", String(this.open));
  }
  async firstUpdated() {
    this.anchor && (this._flyout = new Re(this, this.flyoutOptions()), this._flyout.setOptions(this.flyoutOptions()), this._flyout.targetElement.getAttribute("aria-haspopup") || this._flyout.targetElement.setAttribute("aria-haspopup", "dialog"), this._flyout.targetElement.setAttribute("aria-expanded", String(this.open))), this.id && this._flyout.targetElement.setAttribute("aria-controls", this.id);
  }
  async updated(t) {
    t.has("open") && t.get("open") !== void 0 && await this._handleOpenChange();
  }
  /** Shows the Flyout. */
  show() {
    this.open = !0;
  }
  /** Hides the Flyout. */
  hide() {
    this.open = !1;
  }
  /** Toggles the open/closed state of the Flyout. */
  toggle() {
    this.open = !this.open;
  }
  render() {
    return Pt`
      <div part="base" class="base">
        <slot></slot>
        ${this.arrow ? Pt`<div part="arrow" class="arrow"></div>` : null}
      </div>
    `;
  }
};
index_BrpNeah_T.styles = [Yt];
index_BrpNeah_M([
  property_CfNGmgjg_f({ type: String })
], index_BrpNeah_T.prototype, "anchor", 2);
index_BrpNeah_M([
  property_CfNGmgjg_f({ type: String })
], index_BrpNeah_T.prototype, "placement", 2);
index_BrpNeah_M([
  property_CfNGmgjg_f({ type: Number })
], index_BrpNeah_T.prototype, "offset", 2);
index_BrpNeah_M([
  property_CfNGmgjg_f({ type: Boolean, reflect: !0 })
], index_BrpNeah_T.prototype, "open", 2);
index_BrpNeah_M([
  property_CfNGmgjg_f({ type: Boolean, reflect: !0 })
], index_BrpNeah_T.prototype, "arrow", 2);
index_BrpNeah_M([
  property_CfNGmgjg_f({ type: Boolean, reflect: !0 })
], index_BrpNeah_T.prototype, "reflow", 2);
index_BrpNeah_T = index_BrpNeah_M([
  Ut(Le)
], index_BrpNeah_T);


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
`, icon_f = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 5c-.38 0-.7.28-.74.65l-.01.1v3.5h-3.5a.75.75 0 0 0-.1 1.5h3.6v3.5a.75.75 0 0 0 1.5.1v-3.6h3.5a.75.75 0 0 0 .1-1.5h-3.6v-3.5A.75.75 0 0 0 12 7Z"/></svg>', icon_x = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM12 7c.41 0 .75.34.75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5c0-.41.34-.75.75-.75Z"/></svg>', icon_Z = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.28 10.3a1 1 0 0 0 1.43 1.4L11 6.33V20a1 1 0 1 0 2 0V6.33l5.28 5.37a1 1 0 0 0 1.43-1.4l-6.82-6.93c-.5-.5-1.3-.5-1.78 0L4.28 10.3Z"/></svg>', icon_b = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.2 10.73a.75.75 0 0 0 1.1 1.04l5.95-6.25v14.73a.75.75 0 0 0 1.5 0V5.52l5.95 6.25a.75.75 0 0 0 1.1-1.04l-7.08-7.42a1 1 0 0 0-1.44 0L4.2 10.73Z"/></svg>', icon_z = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m8.5 16.59-3.8-3.8a1 1 0 0 0-1.4 1.42l4.5 4.5a1 1 0 0 0 1.4 0l11-11a1 1 0 0 0-1.4-1.42L8.5 16.6Z"/></svg>', icon_M = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.53 12.97a.75.75 0 0 0-1.06 1.06l4.5 4.5c.3.3.77.3 1.06 0l11-11a.75.75 0 0 0-1.06-1.06L8.5 16.94l-3.97-3.97Z"/></svg>', icon_B = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.3 8.3a1 1 0 0 1 1.4 0l6.3 6.29 6.3-6.3a1 1 0 1 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1 0-1.42Z"/></svg>', icon_L = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.22 8.47c.3-.3.77-.3 1.06 0L12 15.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-7.25 7.25c-.3.3-.77.3-1.06 0L4.22 9.53a.75.75 0 0 1 0-1.06Z"/></svg>', icon_$ = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.7 4.3a1 1 0 0 1 0 1.4L9.42 12l6.3 6.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 0Z"/></svg>', icon_y = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.53 4.22c.3.3.3.77 0 1.06L8.81 12l6.72 6.72a.75.75 0 1 1-1.06 1.06l-7.25-7.25a.75.75 0 0 1 0-1.06l7.25-7.25c.3-.3.77-.3 1.06 0Z"/></svg>', icon_A = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 4.3a1 1 0 0 0 0 1.4l6.29 6.3-6.3 6.3a1 1 0 1 0 1.42 1.4l7-7a1 1 0 0 0 0-1.4l-7-7a1 1 0 0 0-1.42 0Z"/></svg>', icon_C = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.47 4.22c-.3.3-.3.77 0 1.06L15.19 12l-6.72 6.72a.75.75 0 1 0 1.06 1.06l7.25-7.25c.3-.3.3-.77 0-1.06L9.53 4.22a.75.75 0 0 0-1.06 0Z"/></svg>', icon_I = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.3 15.7a1 1 0 0 0 1.4 0L12 9.42l6.3 6.3a1 1 0 0 0 1.4-1.42l-7-7a1 1 0 0 0-1.4 0l-7 7a1 1 0 0 0 0 1.42Z"/></svg>', icon_O = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.22 15.53c.3.3.77.3 1.06 0L12 8.81l6.72 6.72a.75.75 0 1 0 1.06-1.06l-7.25-7.25a.75.75 0 0 0-1.06 0l-7.25 7.25c-.3.3-.3.77 0 1.06Z"/></svg>', icon_P = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"/></svg>', icon_S = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"/></svg>', icon_j = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.21 4.39.08-.1a1 1 0 0 1 1.32-.08l.1.08L12 10.6l6.3-6.3a1 1 0 1 1 1.4 1.42L13.42 12l6.3 6.3a1 1 0 0 1 .08 1.31l-.08.1a1 1 0 0 1-1.32.08l-.1-.08L12 13.4l-6.3 6.3a1 1 0 0 1-1.4-1.42L10.58 12l-6.3-6.3a1 1 0 0 1-.08-1.31l.08-.1-.08.1Z"/></svg>', icon_D = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.4 4.55.07-.08a.75.75 0 0 1 .98-.07l.08.07L12 10.94l6.47-6.47a.75.75 0 1 1 1.06 1.06L13.06 12l6.47 6.47c.27.27.3.68.07.98l-.07.08a.75.75 0 0 1-.98.07l-.08-.07L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 0 1-.07-.98l.07-.08-.07.08Z"/></svg>', icon_V = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.5 6.25v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 1.5 0Zm4.5 0v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 1.5 0Z"/></svg>', icon_k = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 8.25a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5Zm4.5 0a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"/></svg>', icon_q = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm8.86-3.85A1.25 1.25 0 0 0 9 9.25v5.5c0 .95 1.02 1.56 1.86 1.1l5.75-3.2a.75.75 0 0 0 0-1.3l-5.75-3.2Z"/></svg>', icon_H = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.86 8.15A1.25 1.25 0 0 0 9 9.25v5.5c0 .95 1.02 1.56 1.86 1.1l5.75-3.2a.75.75 0 0 0 0-1.3l-5.75-3.2ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"/></svg>', icon_R = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-7a7 7 0 1 0 4.2 12.6l5.1 5.1a1 1 0 0 0 1.4-1.4l-5.1-5.1A7 7 0 0 0 10 3Z"/></svg>', icon_E = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 10a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM10 3a7 7 0 1 0 4.4 12.45l5.32 5.33a.75.75 0 1 0 1.06-1.06l-5.33-5.33A7 7 0 0 0 10 3Z"/></svg>', icon_F = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 0 1-1.96 1.42L12 18.86l-4.72 2.48a1.35 1.35 0 0 1-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78Z"/></svg>', icon_G = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 0 1-1.96 1.42L12 18.86l-4.72 2.48a1.35 1.35 0 0 1-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78Zm1.2.94L9.75 8.6c-.2.4-.58.68-1.02.74l-5.05.74 3.66 3.56c.32.3.46.76.39 1.2l-.87 5.02 4.52-2.37c.4-.2.86-.2 1.26 0l4.51 2.37-.86-5.03c-.07-.43.07-.88.39-1.2l3.65-3.55-5.05-.74a1.35 1.35 0 0 1-1.01-.74L12 4.04Z"/></svg>', icon_J = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm-4.25 9.25a.75.75 0 0 0-.1 1.5h8.6a.75.75 0 0 0 .1-1.5h-8.6Z"/></svg>', icon_K = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm4.25 7.75a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h8.5Z"/></svg>', icon_N = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.03 3.66a2.25 2.25 0 0 1 3.94 0l7.74 14A2.25 2.25 0 0 1 19.74 21H4.25a2.25 2.25 0 0 1-1.97-3.34l7.75-14ZM13 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-.26-7.85a.75.75 0 0 0-1.5.1v4.5l.02.1a.75.75 0 0 0 1.49-.1v-4.5l-.01-.1Z"/></svg>', icon_Q = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-.26-7.85a.75.75 0 0 0-1.5.1l.01 4.5v.1a.75.75 0 0 0 1.5-.1v-4.5l-.01-.1Zm1.23-5.5a2.25 2.25 0 0 0-3.94 0L2.3 17.67A2.25 2.25 0 0 0 4.26 21h15.49c1.71 0 2.8-1.84 1.96-3.34l-7.74-14Zm-2.63.74a.75.75 0 0 1 1.32 0l7.74 14a.75.75 0 0 1-.65 1.11H4.25a.75.75 0 0 1-.65-1.11l7.74-14Z"/></svg>', icon_c = /* @__PURE__ */ Object.assign({
  "../../../../../../node_modules/@fluentui/svg-icons/icons/add_circle_24_filled.svg": icon_f,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/add_circle_24_regular.svg": icon_x,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/arrow_up_24_filled.svg": icon_Z,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/arrow_up_24_regular.svg": icon_b,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/checkmark_24_filled.svg": icon_z,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/checkmark_24_regular.svg": icon_M,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_down_24_filled.svg": icon_B,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_down_24_regular.svg": icon_L,
  "../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_left_24_filled.svg": icon_$,
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
  "../../../../../../node_modules/@fluentui/svg-icons/icons/play_circle_24_regular.svg": icon_H,
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
let icon_g = class extends registration_Ac3YpkNH_R {
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


;// CONCATENATED MODULE: ./node_modules/@ms-mwf/moray-web-components/dist/es/components/popover/index.js













const popover_S = {
  padding: "1.5rem 2.5rem"
}, popover_A = Ct`
  .flyout.fade {
    ${transitions_iiKWrCzx_b}
  }

  ${close_DSImWicy_p}

  .close {
    position: absolute;
    inset-inline-end: 0;
  }

  .close:focus {
    /* stylelint-disable-next-line value-keyword-case */
    outline-offset: ${vfi_CyPinwDN_f};
  }

  .body {
    padding: var(--ds-popover-padding, ${ot(popover_S.padding)});
  }
`, popover_b = {
  onShow: "onShow",
  onHide: "onHide"
};
var popover_B = Object.defineProperty, popover_O = Object.getOwnPropertyDescriptor, popover_o = (t, i, a, l) => {
  for (var r = l > 1 ? void 0 : l ? popover_O(i, a) : i, n = t.length - 1, h; n >= 0; n--)
    (h = t[n]) && (r = (l ? h(i, a, r) : h(r)) || r);
  return l && r && popover_B(i, a, r), r;
};
const popover_K = "moray-popover";
let popover_e = class extends registration_Ac3YpkNH_R {
  constructor() {
    super(...arguments), this.closeLabel = "Close dialog", this.noArrow = !1, this.noFade = !1, this.noReflow = !1, this.noTrap = !1, this.offset = 16, this.open = !1, this.placement = zt.bottom, this._tabbableElements = [], this._trapFocusWithShiftKey = (t) => {
      t.key === keyboard_DX8Uc3JA_A.TAB && t.shiftKey && (t.preventDefault(), this._tabbableElements[this._tabbableElements.length - 1].focus());
    }, this._trapFocusWithoutShiftKey = (t) => {
      t.key === keyboard_DX8Uc3JA_A.TAB && !t.shiftKey && (t.preventDefault(), this._tabbableElements[0].focus());
    };
  }
  _setTabbableElements() {
    helpers_uHZJbBPu_c(this._flyout).forEach(
      (t) => this._tabbableElements.push(t)
    ), helpers_uHZJbBPu_c(this).forEach(
      (t) => this._tabbableElements.push(t)
    );
  }
  _setFocusTrap(t = !0) {
    let i = null, a = null;
    this._setTabbableElements(), i = this._tabbableElements[0], a = this._tabbableElements[this._tabbableElements.length - 1], t ? (i.addEventListener("keydown", this._trapFocusWithShiftKey, !0), a.addEventListener("keydown", this._trapFocusWithoutShiftKey, !0)) : (i.removeEventListener("keydown", this._trapFocusWithShiftKey, !0), a.removeEventListener("keydown", this._trapFocusWithoutShiftKey, !0));
  }
  _handleOnShow() {
    this.show(), this.noTrap || this._setFocusTrap();
  }
  _handleOnHide() {
    this.hide(), this._setFocusTrap(!1);
  }
  /** Shows the Popover. */
  show() {
    this.open = !0;
  }
  /** Hides the Popover. */
  hide() {
    this.open = !1;
  }
  /** Toggles the Popover open and closed state. */
  toggle() {
    this.open = !this.open;
  }
  firstUpdated() {
    this.noTrap || (this.setAttribute("role", "dialog"), this.anchor && this.setAttribute("aria-labelledby", this.anchor));
  }
  updated(t) {
    t.has("noTrap") && (this.noTrap ? (this.removeAttribute("role"), this.removeAttribute("aria-labelledby")) : (this.setAttribute("role", "dialog"), this.anchor && this.setAttribute("aria-labelledby", this.anchor))), t.has("open") && (this.open ? (this._closeButton.focus(), this.dispatchEvent(new Event(popover_b.onShow))) : this.dispatchEvent(new Event(popover_b.onHide)));
  }
  render() {
    const t = {
      flyout: !0,
      fade: !this.noFade
    };
    return Pt`
      <moray-flyout
        part="flyout"
        class="${class_map_B6E0u_KE_u(t)}"
        anchor="${if_defined_BrcqGSt5_m(this.anchor)}"
        ?arrow="${!this.noArrow}"
        ?reflow="${!this.noReflow}"
        offset="${this.offset}"
        ?open="${this.open}"
        placement="${this.placement}"
        tabindex="-1"
        @onHide="${this._handleOnHide}"
        @onShow="${this._handleOnShow}"
      >
        <button class="close" part="close-button" @click="${this.hide}">
          <moray-icon
            aria-label="${this.closeLabel}"
            icon="dismiss"
            size="small"
            filled
          ></moray-icon>
        </button>
        <div class="body" part="body">
          <slot></slot>
        </div>
      </moray-flyout>
    `;
  }
};
popover_e.styles = [popover_A];
popover_o([
  property_CfNGmgjg_f()
], popover_e.prototype, "anchor", 2);
popover_o([
  property_CfNGmgjg_f({ attribute: "close-label" })
], popover_e.prototype, "closeLabel", 2);
popover_o([
  property_CfNGmgjg_f({ type: Boolean, attribute: "no-arrow" })
], popover_e.prototype, "noArrow", 2);
popover_o([
  property_CfNGmgjg_f({ type: Boolean, attribute: "no-fade" })
], popover_e.prototype, "noFade", 2);
popover_o([
  property_CfNGmgjg_f({ type: Boolean, attribute: "no-reflow" })
], popover_e.prototype, "noReflow", 2);
popover_o([
  property_CfNGmgjg_f({ type: Boolean, attribute: "no-trap" })
], popover_e.prototype, "noTrap", 2);
popover_o([
  property_CfNGmgjg_f({ type: Number })
], popover_e.prototype, "offset", 2);
popover_o([
  property_CfNGmgjg_f({ type: Boolean, reflect: !0 })
], popover_e.prototype, "open", 2);
popover_o([
  property_CfNGmgjg_f()
], popover_e.prototype, "placement", 2);
popover_o([
  query_BFAhq_I0_d("moray-flyout")
], popover_e.prototype, "_flyout", 2);
popover_o([
  query_BFAhq_I0_d("button.close")
], popover_e.prototype, "_closeButton", 2);
popover_o([
  state_B9yJz8Xo_n()
], popover_e.prototype, "_tabbableElements", 2);
popover_e = popover_o([
  Ut(popover_K)
], popover_e);


;// CONCATENATED MODULE: ./src/components/text-factory/text-factory.styles.ts

const cssPropDefaults = {
    alightItems: 'center',
    flexDirection: 'row',
    textMaxWidth: '100%',
    imageMaxWidth: '100%',
    imageHeight: 'auto',
    textMargin: '.20rem',
};
const textStyles = css_tag_i `
  .container {
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    justify-content: var(--ds-text-factory-justify-content);
  }
  .image {
    max-width: var(
      --ds-text-factory-image-max-width,
      cssPropDefaults.imageMaxWidth
    );
    height: var(
      --ds-text-factory-image-height,
      ${r(cssPropDefaults.imageHeight)}
    );
  }

  .text {
    max-width: var(
      --ds-text-factory-text-max-width,
      ${r(cssPropDefaults.textMaxWidth)}
    );
  }

  .text.image-right {
    margin-left: var(
      --ds-text-factory-text-margin-left,
      ${r(cssPropDefaults.textMargin)}
    );
  }
  .text.image-left {
    margin-right: var(
      --ds-text-factory-text-margin-right,
      ${r(cssPropDefaults.textMargin)}
    );
  }
`;

;// CONCATENATED MODULE: ./src/components/text-factory/text-factory.enum.ts
/* istanbul ignore file */
var TextFactoryAppearance;
(function (TextFactoryAppearance) {
    TextFactoryAppearance["Popover"] = "popover";
    TextFactoryAppearance["PopoverReverse"] = "popover-reverse";
    TextFactoryAppearance["Image"] = "image";
    TextFactoryAppearance["ImageReverse"] = "image-reverse";
})(TextFactoryAppearance || (TextFactoryAppearance = {}));

;// CONCATENATED MODULE: ./src/components/text-factory/index.ts







let TextFactory = class TextFactory extends lit_element_s {
    renderPopover() {
        return x ` <button class="button-primary" id="anchor-default">
        ${this.renderMedia()}
      </button>
      <moray-popover
        anchor="anchor-default"
        close-label="Close dialog"
        offset="16"
        placement=""
        id="popover-default"
      >
        <slot name="popover-text"></slot>
      </moray-popover>`;
    }
    renderMedia() {
        switch (this.appearance) {
            case TextFactoryAppearance.Image:
            case TextFactoryAppearance.Popover:
                return x ` <div class="container">
          <div class="image">
            <slot name="media"></slot>
          </div>
          <div class="text image-right">
            <slot name="text"></slot>
          </div>
        </div>`;
            case TextFactoryAppearance.ImageReverse:
            case TextFactoryAppearance.PopoverReverse:
                return x ` <div class="container">
          <div class="text image-left">
            <slot name="text"></slot>
          </div>
          <div class="image">
            <slot name="media"></slot>
          </div>
        </div>`;
        }
    }
    validateAppearance() {
        if (this.appearance === undefined) {
            this.appearance = TextFactoryAppearance.Image;
            return;
        }
        if (this.appearance !== TextFactoryAppearance.Image &&
            this.appearance !== TextFactoryAppearance.ImageReverse &&
            this.appearance !== TextFactoryAppearance.Popover &&
            this.appearance !== TextFactoryAppearance.PopoverReverse) {
            console.warn(`Invalid appearance: ${this.appearance}. Defaulting to ${TextFactoryAppearance.Image}`);
            this.appearance = TextFactoryAppearance.Image;
        }
    }
    render() {
        this.validateAppearance();
        switch (this.appearance) {
            case TextFactoryAppearance.Popover:
            case TextFactoryAppearance.PopoverReverse:
                return this.renderPopover();
            case TextFactoryAppearance.Image:
            case TextFactoryAppearance.ImageReverse:
                return this.renderMedia();
        }
    }
};
TextFactory.styles = textStyles;
__decorate([
    property_n({ reflect: true })
], TextFactory.prototype, "appearance", void 0);
TextFactory = __decorate([
    defineCustomElement('cascade-text-factory')
], TextFactory);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map