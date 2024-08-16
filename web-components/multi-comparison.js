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
  MultiComparisonElement: () => (/* binding */ MultiComparisonElement)
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
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(s,t))}return t}toString(){return this.cssText}}const r=t=>new n("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n(o,t,s)},S=(s,o)=>{if(e)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o)}},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;
//# sourceMappingURL=css-tag.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/reactive-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:reactive_element_i,defineProperty:reactive_element_e,getOwnPropertyDescriptor:reactive_element_r,getOwnPropertyNames:h,getOwnPropertySymbols:reactive_element_o,getPrototypeOf:reactive_element_n}=Object,a=globalThis,reactive_element_c=a.trustedTypes,l=reactive_element_c?reactive_element_c.emptyScript:"",p=a.reactiveElementPolyfillSupport,d=(t,s)=>t,u={toAttribute(t,s){switch(s){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,s)=>!reactive_element_i(t,s),y={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),a.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&reactive_element_e(this.prototype,t,r)}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=reactive_element_r(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;const t=reactive_element_n(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){const t=this.properties,s=[...h(t),...reactive_element_o(t)];for(const i of s)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c(s))}else void 0!==s&&i.push(c(s));return i}static _$Eu(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f)(this[t],s))return;this.P(t,s,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d("elementProperties")]=new Map,b[d("finalized")]=new Map,p?.({ReactiveElement:b}),(a.reactiveElementVersions??=[]).push("2.0.4");
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
 */function state_r(r){return property_n({...r,state:!0,attribute:!1})}
//# sourceMappingURL=state.js.map

;// CONCATENATED MODULE: ./node_modules/lit/decorators.js

//# sourceMappingURL=decorators.js.map

;// CONCATENATED MODULE: ./src/components/multi-comparison/multi-comparison-styles.ts

const multiCompareStyles = i ``;

;// CONCATENATED MODULE: ./src/constants/css-style.ts
const Viewports = Object.freeze({
    xs: 0,
    sm: 540,
    md: 860,
    lg: 1084,
    xl: 1400,
});

;// CONCATENATED MODULE: ./src/components/compare-table/table-styles.ts


/* harmony default export */ const table_styles = (i `
  .table-responsive.compare-chart {
    z-index: 1;
  }

  .compare-chart .compare-chart-table a.simple-link {
    font-weight: 600;
    text-decoration: none;
  }

  .compare-chart-component .compare-chart-title .border-bottom {
    border-bottom-width: 0.0625rem;
    border-bottom-style: solid;
    border-bottom-color: #d2d2d2;
    display: var(--title-border-bottom, none);
  }

  .compare-chart-component
    .compare-chart
    .compare-chart-sticky-content.sticky-show-stuck
    .compare-card
    .cc-card-flex-grow {
    flex: none;
  }

  @media (min-width: ${Viewports.sm}px) {
    .compare-chart-component
      .table.table-first-col-highlight
      tr
      td:nth-child(2) {
      background-color: #d9e9f5;
    }

    .compare-chart.container .table td,
    .table th {
      padding: 1.5rem 3rem;
    }

    .compare-chart-component .compare-chart-sticky-content .card.compare-card {
      padding-left: 2rem;
    }
  }

  @media (max-width: ${Viewports.md}px) {
    .table td,
    .table th {
      padding: 0;
    }

    .compare-chart-component
      .material-backdrop.container.compare-chart-sticky-content.sticky-show-stuck {
      overflow-x: scroll;
    }

    .compare-chart-component .cc-card-flex-grow .h5 {
      margin-top: 0.5rem;
    }

    .compare-chart.container .compare-chart .compare-card .link-group {
      margin-top: 1rem;
    }

    .compare-chart-component .compare-chart .sticky-show-stuck .card {
      padding-left: 0;
    }

    .compare-chart-component
      .table.table-first-col-highlight
      tr
      td:nth-child(2)
      .cc-cell-content {
      background-color: #d9e9f5;
    }

    .compare-chart.container .compare-chart-component {
      overflow-x: auto;
    }
    .compare-chart.container .compare-chart-intro.border-top {
      display: none;
      max-width: 100%;
    }
    .compare-chart.container
      .compare-chart-table
      th:first-child
      .cc-rowheader-wrapper
      > .cc-rowheader {
      position: unset;
      min-width: calc(3 * 68.3765vw);
    }

    .compare-chart-component .table tr td .cc-cell-content {
      padding: 1rem;
    }

    .compare-chart-component
      .compare-chart-table
      th:first-child
      .cc-rowheader-wrapper
      > .cc-rowheader {
      padding: 1rem;
    }

    .compare-chart.container
      .compare-chart-table
      th:first-child
      .cc-rowheader-wrapper {
      background-color: #f2f2f2;
      border-bottom: 0.0625rem solid #d2d2d2;
    }

    .compare-chart.container .compare-chart-table .cc-rowheader-shim {
      padding-bottom: 2rem;
      width: calc(200vw - 1.5rem - 1.5rem);
    }

    .compare-chart-component .compare-chart-title .border-bottom {
      display: none;
    }

    .compare-chart-component .compare-chart-table td {
      border-bottom: 0.0625rem solid #d2d2d2;
    }

    .compare-chart.container .compare-chart-3-items .compare-chart-footer,
    .compare-chart.container .compare-chart-3-items .compare-chart-head,
    .compare-chart.container
      .compare-chart-3-items
      .compare-chart-prod-card-group,
    .compare-chart.container .compare-chart-3-items .compare-chart-table,
    .compare-chart.container
      .compare-chart-3-items
      .compare-chart-table
      .cc-rowheader-wrapper {
      min-width: calc(3 * 68.3765vw);
    }

    .compare-chart-3-items .compare-chart-prod-card-group {
      border-top: 0.0625rem solid #d2d2d2;
    }

    .compare-chart.container .compare-chart-3-items .compare-chart-head {
      background-color: #fff;
    }

    .compare-chart.container .card.compare-card.material-surface {
      padding-left: 0rem;
      padding-right: 0rem;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }
  }

  .compare-chart-component .table-first-col-highlight :not(thead) > tr > th {
    background-color: transparent;
  }

  .compare-chart-component .compare-chart-prod-card-group .col:first-child,
  .compare-chart-component .compare-chart-prod-card-group .col:nth-child(3),
  .card-background {
    background-color: var(--ds-colored-row-background-color, #d9e9f5);
  }

  .compare-chart-component
    .compare-chart-synchronized-scroll.stuck-depth.sticky.sticky-direction-top.stuck
    .col:first-child {
    min-height: 8.25rem;
  }

  .compare-chart-component .compare-chart-prod-card-group .col {
    padding-right: 0%;
    padding-left: 0%;
  }

  .compare-chart-component .material-surface {
    background-color: transparent;
    color: #000;
  }

  .compare-chart.container {
    margin-top: 3rem;
    padding-top: 1rem;
  }

  .compare-chart.container .compare-chart-intro.border-top {
    border-top: 0 solid #fff;
  }

  .compare-chart.container .compare-chart-table {
    border-bottom: var(--border-width, 0.0625rem) var(--border-style, solid)
      var(--border-color, rgb(210, 210, 210));
  }

  .compare-chart.container
    table.table.table-first-col-highlight.compare-chart-table {
    margin-top: 0;
  }

  .compare-chart.container .bg-primary {
    background-color: #ffb900;
    color: #000;
  }

  @media (min-width: ${Viewports.sm}px) {
    .compare-chart.container .card.compare-card.material-surface {
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 3rem;
      padding-bottom: 3rem;
    }

    .compare-chart-component .price-one.button-margin {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .compare-chart.container .cc-card-flex-grow .h4 {
      margin-top: 0.5rem;
      margin-bottom: 0;
    }

    .container
      .compare-chart-component
      .material-backdrop.container.compare-chart-sticky-content.sticky-show-stuck {
      max-width: 1600px;
    }
  }

  .block-card .compare-chart-head .compare-chart-intro {
    padding: 0;
  }

  .container
    .compare-chart-component
    .material-backdrop.container.compare-chart-sticky-content.sticky-show-stuck
    .compare-chart-head
    .hide-at-short-viewport
    .col {
    min-height: 132px;
  }

  .compare-chart.container
    div.cc-cell-content
    .list-unstyled
    .card
    .card-footer {
    margin-top: 0;
  }

  .compare-chart.container .compare-chart .compare-chart-sticky-shim {
    padding: 0;
  }

  .compare-chart.container .cta::after {
    top: 56%;
  }

  .compare-chart.container .compare-chart .compare-card .link-group {
    display: inline-block;
  }

  .compare-chart.container
    .compare-chart-prod-card-group
    .col:not(:first-child)
    .link-group
    .btn-primary {
    background-color: transparent;
    color: #0067b8;
    border-color: currentColor;
  }

  .compare-chart.container .compare-chart .compare-card .cc-card-flex-grow {
    flex: 0;
  }

  @media only screen and (max-width: 1200px) and (min-width: 1080px) {
    .compare-chart-component .cc-card-flex-grow.pt-5 > h1,
    .compare-chart-component .cc-card-flex-grow.pt-5 > h2,
    .compare-chart-component .cc-card-flex-grow.pt-5 > h3,
    .compare-chart-component .cc-card-flex-grow.pt-5 > h4,
    .compare-chart-component .cc-card-flex-grow.pt-5 > h5,
    .compare-chart-component .cc-card-flex-grow.pt-5 > h6 {
      margin-top: 1rem;
    }
  }

  .compare-chart-component .my-2.not-available-text.value-hidden {
    display: none;
  }

  .compare-chart-component .link-group.value-hidden-new {
    display: none;
  }

  .compare-chart .fixed-sticky .show-at-short-viewport {
    display: none;
  }

  .compare-chart-intro.hide-content {
    display: none;
  }

  .compare-chart-component
    .sticky-link-group-container
    .link-group
    .inner.value-hidden {
    display: none;
  }
  .compare-chart.container .card.compare-chart-card.material-surface {
    padding: 3rem 2rem;
  }

  .compare-chart-2-items .compare-chart-prod-card-group > .row > .col {
    max-width: 50%;
  }

  .compare-chart-prod-card-group .col {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-width: 1px;
    word-wrap: break-word;
    background-clip: border-box;
  }

  .compare-card {
    height: 100%;
  }

  .material-surface {
    background-color: transparent;
    color: #000;
  }

  @media (min-width: ${Viewports.sm}px) {
    .compare-chart.container .card.compare-card.material-surface {
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
  }
  .comparechart .compare-chart {
    overflow-x: auto;
  }
  .compare-card .cc-card-flex-grow {
    flex: 0;
  }

  .compare-card .cc-card-flex-grow {
    flex: 1 1 auto;
    position: relative;
  }

  .compare-chart tr {
    border-bottom: var(--border-width, 0.0625rem) var(--border-style, solid)
      var(--border-color, rgb(210, 210, 210));
  }
`);

;// CONCATENATED MODULE: ./src/components/compare-table/table-general-styles.ts

const cssPropDefaults = {
    fontweight: 'inherit',
    textalign: 'left',
    bordercolor: '#d2d2d2',
};
const mwfstyles = i `
  .table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .border-top {
    --add-color-border-top: var(
      --ds-add-color-border-top,
      ${r(cssPropDefaults.bordercolor)}
    );

    border-top-width: 0.0625rem;
    border-top-style: solid;
    border-top-color: var(--add-color-border-top);
  }

  .compare-chart.container
    table.table.table-first-col-highlight.compare-chart-table {
    margin-top: 0;
  }

  .compare-chart-table {
    table-layout: fixed;
    overflow: hidden;
  }

  .table-caption-top caption {
    caption-side: top;
  }

  .compare-chart-table caption {
    padding: 0 0.75rem;
    max-width: calc(100vw - 1.5rem - 1.5rem);
    position: sticky;
    left: 1px;
  }

  .compare-chart-table caption.hidden {
    height: 0px;
    visibility: hidden;
  }
  @media (max-width: 859.98px) {
    .compare-chart-table caption.hidden {
      visibility: visible;
    }
  }

  .compare-chart {
    position: relative;
    overflow-x: visible;
  }

  .compare-chart > .divider {
    position: sticky;
    left: 1px;
  }

  .compare-chart .compare-chart-synchronized-scroll {
    overflow-x: auto;
  }

  .compare-chart .compare-chart-card {
    height: 100%;
  }

  .compare-chart .compare-chart-card .link-group {
    margin-top: 0;
    margin-bottom: 0;
    display: inline-block;
  }

  .compare-chart .compare-chart-card .cc-card-flex-grow {
    flex: 1 1 auto;
    position: relative;
  }

  .compare-chart [data-direction='bottom']:not(.stuck),
  .compare-chart [data-off-page] {
    position: absolute;
    left: -10000px;
  }

  .compare-chart > .sticky .compare-chart-intro {
    padding-top: 0;
    padding-bottom: 0;
  }

  .compare-chart
    > .sticky[data-direction='top']
    .compare-chart-synchronized-scroll {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .compare-chart
    > .sticky[data-direction='top']
    .compare-chart-synchronized-scroll::-webkit-scrollbar {
    display: none;
  }

  .compare-chart .compare-chart-scrollbar {
    display: none;
  }

  @media (max-width: 1083.98px) {
    .compare-chart .sticky-show-stuck .card {
      padding-top: 0.5rem;
    }

    .compare-chart .sticky-show-stuck .card > .img-flex-auto {
      display: none;
    }
  }

  @media screen and (max-height: 22.5rem) {
    .compare-chart .sticky .hide-at-short-viewport {
      display: none;
    }
  }

  @media screen and (min-height: 22.5rem) {
    .compare-chart .sticky .show-at-short-viewport {
      display: none;
    }
  }

  .compare-chart-table .sr-only-table-element {
    padding: 0;
  }

  .compare-chart-table .sr-only-table-element .sr-only-focusable {
    left: 0;
  }

  .compare-chart-table .cc-rowheader-shim {
    color: transparent;
    visibility: hidden;
    display: none;
    position: relative;
    width: calc(100vw - 1.5rem - 1.5rem);
    padding-top: 0;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    padding-bottom: 1.5rem;
  }

  .compare-chart-table.compare-chart-hidden-col-headers > thead th {
    padding: 0;
  }

  .compare-chart-table > .sticky > .material-backdrop.container {
    max-width: none;
  }

  .compare-chart-table td:last-child {
    padding-right: 0.75rem;
  }

  @media (max-width: 1083.98px) {
    .compare-chart-table td,
    .compare-chart-table th {
      --table-th-td-border-bottom-color-media-1083: var(
        --ds-table-th-td-border-bottom-color-media-1083,
        ${r(cssPropDefaults.bordercolor)}
      );

      border-bottom: 0.0625rem solid
        var(--table-th-td-border-bottom-color-media-1083);
    }

    .compare-chart-table th:first-child {
      padding: 0;
      width: 0%;
    }

    .compare-chart-table th:first-child .cc-rowheader-wrapper {
      background-color: inherit;
      width: 100vw;
    }

    .compare-chart-table th:first-child .cc-rowheader-wrapper > .cc-rowheader {
      width: calc(100vw - 1.5rem - 1.5rem);
      padding: 0.75rem 0.75rem;
      position: sticky;
      left: 1px;
    }

    .compare-chart-table td {
      overflow: hidden;
    }

    .compare-chart-table tbody .cc-rowheader-shim {
      display: block;
    }

    .compare-chart-table thead th:first-child {
      border: none;
      padding: 0;
    }
  }

  .compare-chart-table.cc-block-style {
    border-bottom: none;
    border-collapse: separate;
  }

  .compare-chart-table.cc-block-style ~ .compare-chart-table td {
    padding-left: 3rem;
    padding-right: 1.5rem;
  }

  .compare-chart-table.cc-block-style tbody th {
    --tbody-th-block-style-border-top-color-media-1083: var(
      --ds-tbody-th-block-style-border-top-color-media-1083,
      ${r(cssPropDefaults.bordercolor)}
    );
    --tbody-th-block-style-color-media-1083: var(
      --ds-tbody-th-block-style-color-media-1083,
      #000
    );
    --tbody-th-block-style-bg-media-1083: var(
      --ds-tbody-th-block-style-bg-media-1083,
      #fff
    );

    border-top: 0.0625rem solid
      var(--tbody-th-block-style-border-top-color-media-1083);
    border-bottom: none;
    background-color: var(--tbody-th-block-style-bg-media-1083);
    color: var(--tbody-th-block-style-color-media-1083);
  }

  .compare-chart-table.cc-block-style tbody th a {
    color: #0067b8;
  }

  .theme-dark .compare-chart-table.cc-block-style tbody th {
    background-color: #000;
    color: #fff;
  }

  .compare-chart-table.cc-block-style .cc-rowheader-shim,
  .compare-chart-table.cc-block-style tbody th {
    font-size: 1.25rem;
  }

  .compare-chart-table.cc-block-style thead th {
    border: none;
  }

  .compare-chart-table.cc-block-style tr:last-child td {
    border-bottom: none;
  }

  .compare-chart-table.cc-block-style td {
    padding-top: 0;
    border-bottom: none;
    height: 1px;
  }

  .compare-chart-table.cc-block-style td > .cc-cell-content {
    background-clip: padding-box;
    padding: 1.5rem;
    height: 100%;
    background-color: #f2f2f2;
    color: #000;
  }

  .compare-chart-table.cc-block-style td > .cc-cell-content a {
    color: #0067b8;
  }

  .theme-dark .compare-chart-table.cc-block-style td > .cc-cell-content {
    background-color: #171717;
    color: #fff;
  }

  .theme-dark .compare-chart-table.cc-block-style td > .cc-cell-content a {
    color: #3aa0fa;
  }

  @supports (-moz-appearance: none) {
    .compare-chart-table.cc-block-style td > .cc-cell-content {
      width: 100%;
      display: table;
    }
  }

  @media (max-width: 1083.98px) {
    .compare-chart-table.cc-block-style th:first-child > .cc-rowheader-wrapper {
      border-color: transparent;
      position: relative;
      top: -1px;
    }

    .compare-chart-table.cc-block-style
      th:first-child
      > .cc-rowheader-wrapper
      > .cc-rowheader {
      padding-bottom: 0.75rem;
    }

    .compare-chart-table.cc-block-style td > .cc-cell-content {
      padding: 0.75rem;
    }

    .compare-chart-table.cc-block-style ~ .compare-chart-table td {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    .compare-chart-table.cc-block-style .cc-highlighted-content {
      border-bottom: 0 solid transparent;
    }
  }

  .compare-chart-intro {
    flex: 1 1 0%;
  }

  compare-chart-2-items .compare-chart-prod-card-group {
    flex: 2 1 0%;
  }

  .compare-chart-2-items .compare-chart-prod-card-group > .row > .col {
    max-width: 50%;
  }

  .compare-chart-3-items .compare-chart-prod-card-group {
    flex: 3 1 0%;
  }

  .compare-chart-3-items .compare-chart-prod-card-group > .row > .col {
    max-width: 33.333%;
  }

  .compare-chart-4-items .compare-chart-prod-card-group {
    flex: 4 1 0%;
  }

  .compare-chart-4-items .compare-chart-prod-card-group > .row > .col {
    max-width: 25%;
  }

  .compare-chart-head {
    --head-border-bottom-color-media-1083: var(
      --ds-head-border-bottom-color-media-1083,
      ${r(cssPropDefaults.bordercolor)}
    );
    border-bottom: 0.0625rem solid var(--head-border-bottom-color-media-1083);
  }
  .compare-chart-footer,
  .compare-chart-head {
    display: flex;
    justify-content: space-between;
  }

  .compare-chart-footer .compare-chart-intro,
  .compare-chart-head .compare-chart-intro {
    padding: 1.5rem 0;
    max-width: calc(100vw - 1.5rem - 1.5rem);
    position: sticky;
    left: 1px;
  }

  .compare-chart-footer .compare-chart-intro.border-top,
  .compare-chart-head .compare-chart-intro.border-top {
    border-top: 0.0625rem solid #757575;
  }

  @media (max-width: 1083.98px) {
    .compare-chart-footer,
    .compare-chart-head {
      display: block;
    }

    .compare-chart-footer .compare-chart-intro.border-top,
    .compare-chart-head .compare-chart-intro.border-top {
      border-top: none;
    }

    .compare-chart-prod-card-group {
      max-width: none;
    }
  }

  @media screen and (max-width: 700px) {
    .compare-chart-3-items .compare-chart-table {
      overflow: visible;
    }

    .compare-chart-3-items .compare-chart-scrollbar {
      display: block;
    }

    .compare-chart-3-items .compare-chart-footer,
    .compare-chart-3-items .compare-chart-head,
    .compare-chart-3-items .compare-chart-prod-card-group,
    .compare-chart-3-items .compare-chart-table,
    .compare-chart-3-items .compare-chart-table .cc-rowheader-wrapper {
      min-width: calc(3 * 40vw);
    }

    .compare-chart-3-items > .sticky > .compare-chart-sticky-content {
      min-width: calc(3 * 40vw + 1.5rem);
    }
  }

  @media screen and (max-width: 830px) {
    .compare-chart-4-items .compare-chart-table {
      overflow: visible;
    }

    .compare-chart-4-items .compare-chart-scrollbar {
      display: block;
    }

    .compare-chart-4-items .compare-chart-footer,
    .compare-chart-4-items .compare-chart-head,
    .compare-chart-4-items .compare-chart-prod-card-group,
    .compare-chart-4-items .compare-chart-table,
    .compare-chart-4-items .compare-chart-table .cc-rowheader-wrapper {
      min-width: calc(4 * 40vw);
    }

    .compare-chart-4-items > .sticky > .compare-chart-sticky-content {
      min-width: calc(4 * 40vw + 1.5rem);
    }
  }

  @media screen and (max-width: 425px) {
    .compare-chart-2-items .compare-chart-table {
      overflow: visible;
    }

    .compare-chart-2-items .compare-chart-scrollbar {
      display: block;
    }

    .compare-chart-2-items .compare-chart-footer,
    .compare-chart-2-items .compare-chart-head,
    .compare-chart-2-items .compare-chart-prod-card-group,
    .compare-chart-2-items .compare-chart-table,
    .compare-chart-2-items .compare-chart-table .cc-rowheader-wrapper {
      min-width: calc(2 * 60vw);
    }

    .compare-chart-2-items > .sticky > .compare-chart-sticky-content {
      min-width: calc(2 * 60vw + 1.5rem);
    }

    .compare-chart-3-items .compare-chart-footer,
    .compare-chart-3-items .compare-chart-head,
    .compare-chart-3-items .compare-chart-prod-card-group,
    .compare-chart-3-items .compare-chart-table,
    .compare-chart-3-items .compare-chart-table .cc-rowheader-wrapper {
      min-width: calc(3 * 60vw);
    }

    .compare-chart-3-items > .sticky > .compare-chart-sticky-content {
      min-width: calc(3 * 60vw + 1.5rem);
    }

    .compare-chart-4-items .compare-chart-footer,
    .compare-chart-4-items .compare-chart-head,
    .compare-chart-4-items .compare-chart-prod-card-group,
    .compare-chart-4-items .compare-chart-table,
    .compare-chart-4-items .compare-chart-table .cc-rowheader-wrapper {
      min-width: calc(4 * 60vw);
    }

    .compare-chart-4-items > .sticky > .compare-chart-sticky-content {
      min-width: calc(4 * 60vw + 1.5rem);
    }
  }
  .border-dashed {
    border-style: dashed;
  }

  .compare-chart-prod-card-group {
    width: 100%;
  }
  .compare-chart-prod-card-group .row {
    margin-right: 0%;
    margin-left: 0%;
  }

  .compare-chart-4-items .compare-chart-intro {
    min-width: 20%;
  }
  .compare-chart-3-items .compare-chart-intro {
    min-width: 25%;
  }
  .compare-chart-2-items .compare-chart-intro {
    min-width: 33.3%;
  }
`;
const global = i `
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  .pt-5,
  .py-5 {
    padding-top: 3rem;
  }

  .material-surface {
    background-color: #f2f2f2;
    color: #000;
  }

  .mb-2,
  .my-2 {
    margin-bottom: 0.5rem;
  }

  .mt-2,
  .my-2 {
    margin-top: 0.5rem;
  }

  .table td,
  .table th {
    --table-td-th-border-bottom-color: var(
      --ds-table-td-th-border-bottom-color,
      ${r(cssPropDefaults.bordercolor)}
    );

    padding: 1.5rem 0.75rem;
    vertical-align: top;
    border-bottom: 0.0625rem solid var(--table-td-th-border-bottom-color);
    overflow-wrap: break-word;
  }

  article,
  aside,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block;
  }

  .comparechart {
    --font-weight: var(
      --ds-font-weight,
      ${r(cssPropDefaults.fontweight)}
    );
    --background-color: var(--ds-background-color);
    --comparechart-text-align: var(
      --ds-comparechart-text-align,
      ${r(cssPropDefaults.textalign)}
    );

    margin: 0;
    font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
    font-size: 1rem;
    font-weight: var(--font-weight);
    line-height: 1.5;
    color: #000;
    background-color: var(--background-color);
    text-align: var(--comparechart-text-align);
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  html:not([dir='rtl']) .ml-0,
  html:not([dir='rtl']) .mx-0 {
    margin-left: 0;
  }

  html:not([dir='rtl']) .mr-0,
  html:not([dir='rtl']) .mx-0 {
    margin-right: 0;
  }

  ::slotted([slot='comparison-card']) {
    display: flex;
    flex-wrap: wrap;
    margin-right: -0.75rem;
    margin-left: -0.75rem;
  }

  .table {
    --table-border-bottom-color: var(
      --ds-table-border-bottom-color,
      ${r(cssPropDefaults.bordercolor)}
    );
    --table-border-bottom-color: var(
      --ds-table-border-top-color,
      ${r(cssPropDefaults.bordercolor)}
    );

    width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
    border-top: 0 solid var(--table-border-top-color);
    border-bottom: 0.0625rem solid var(--table-border-bottom-color);
  }

  .table {
    border-collapse: collapse;
  }
  .table tbody th {
    --font-weight-tbody-th: var(
      --ds-font-weight-tbody-th,
      ${r(cssPropDefaults.fontweight)}
    );

    font-weight: var(--font-weight-tbody-th);
  }
  .table thead th {
    --thead-th-font-weight: var(--ds-thead-th-font-weight, bold);

    font-weight: var(--thead-th-font-weight);
  }
  .table caption {
    caption-side: bottom;
  }

  html:not([dir='rtl']) caption {
    text-align: ${r(cssPropDefaults.textalign)};
  }

  .container {
    width: 100%;
  }

  @media (min-width: 1084px) {
    .container {
      width: 90%;
      box-sizing: content-box;
    }
  }

  @media (min-width: 1400px) {
    .container {
      max-width: 1600px;
    }
  }

  .container-fluid,
  .container-xl {
    width: 100%;
  }

  @media (min-width: 1084px) {
    .container-fluid,
    .container-xl {
      width: 90%;
      box-sizing: content-box;
    }
  }

  @media (min-width: 1400px) {
    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
      max-width: 1600px;
    }
  }
`;

;// CONCATENATED MODULE: ./node_modules/lit-html/static.js

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const static_e=Symbol.for(""),static_o=t=>{if(t?.r===static_e)return t?._$litStatic$},static_i=t=>({_$litStatic$:t,r:static_e}),static_s=(t,...r)=>({_$litStatic$:r.reduce(((r,e,o)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[o+1]),t[0]),r:static_e}),static_a=new Map,static_l=t=>(r,...e)=>{const i=e.length;let s,l;const n=[],u=[];let c,$=0,f=!1;for(;$<i;){for(c=r[$];$<i&&void 0!==(l=e[$],s=static_o(l));)c+=s+r[++$],f=!0;$!==i&&u.push(l),n.push(c),$++}if($===i&&n.push(r[i]),f){const t=n.join("$$lit$$");void 0===(r=static_a.get(t))&&(n.raw=n,static_a.set(t,r=n)),e=u}return t(r,...e)},static_n=static_l(x),static_u=static_l(lit_html_b);
//# sourceMappingURL=static.js.map

;// CONCATENATED MODULE: ./node_modules/lit/static-html.js

//# sourceMappingURL=static-html.js.map

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

;// CONCATENATED MODULE: ./src/components/legos/heading/heading.styles.ts

const heading_styles_cssPropDefaults = {
    fontWeight: '600',
    marginTop: '0px',
    marginBottom: '0px',
    color: '#000',
    backgroundColor: '#fff',
    lineHeight: '1.2rem',
};
/* harmony default export */ const heading_styles = (i `
  .heading {
    font-family: inherit;
    font-weight: var(
      --ds-heading-font-weight,
      var(--ds-display-1-font-weight, cssPropDefaults.fontWeight)
    );
    margin-top: var(--ds-heading-margin-top, cssPropDefaults.marginTop);
    margin-bottom: var(
      --ds-heading-margin-bottom,
      cssPropDefaults.marginBottom
    );
    color: var(--ds-heading-color, cssPropDefaults.color);
    background-color: var(
      --ds-heading-background-color,
      var(--ds-color-transparent, cssPropDefaults.backgroundColor)
    );
    line-height: var(--ds-heading-line-height, cssPropDefaults.lineHeight);
  }

  .heading--word-break {
    word-break: var(--_heading-word-wrap);
  }

  .h6,
  h6 {
    font-size: var(--ds-heading-font-size-h6, 1.0625rem);
    margin-bottom: var(--ds-heading-margin-bottom-h6, 0.5rem);
  }

  @media (min-width: 1084px) {
    .h6,
    h6 {
      font-size: var(--ds-heading-font-size-h6-1084, 1.125rem);
      margin-bottom: var(--ds-heading-margin-bottom-h6-1084, 0.5rem);
    }
  }

  @media (min-width: 1400px) {
    .h6,
    h6 {
      font-size: var(--ds-heading-font-size-h6-1400, 1.1875rem);
      margin-bottom: var(--ds-heading-margin-bottom-h6-1400, 0.5rem);
    }
  }

  .h5,
  h5 {
    font-size: var(--ds-heading-font-size-h5, 1.125rem);
    margin-bottom: var(--ds-heading-margin-bottom-h5, 0.5rem);
  }

  @media (min-width: 1084px) {
    .h5,
    h5 {
      font-size: var(--ds-heading-font-size-h5-1084, 1.1875rem);
      margin-bottom: var(--ds-heading-margin-bottom-h5-1084, 0.5rem);
    }
  }

  @media (min-width: 1400px) {
    .h5,
    h5 {
      font-size: var(--ds-heading-font-size-h5-1400, 1.3125rem);
      margin-bottom: var(--ds-heading-margin-bottom-h5-1400, 0.5rem);
    }
  }

  .h4,
  h4 {
    font-size: var(--ds-heading-font-size-h4, 1.1875rem);
    margin-bottom: var(--ds-heading-margin-bottom-h4, 0.5rem);
  }

  @media (min-width: 1084px) {
    .h4,
    h4 {
      font-size: var(--ds-heading-font-size-h4-1084, 1.3125rem);
      margin-bottom: var(--ds-heading-margin-bottom-h4-1084, 0.5rem);
    }
  }

  @media (min-width: 1400px) {
    .h4,
    h4 {
      font-size: var(--ds-heading-font-size-h4-1400, 1.5rem);
      margin-bottom: var(--ds-heading-margin-bottom-h4-1400, 0.75rem);
    }
  }

  .h3,
  h3 {
    font-size: var(--ds-heading-font-size-h3, 1.3125rem);
    margin-bottom: var(--ds-heading-margin-bottom-h3, 0.5rem);
  }

  @media (min-width: 1084px) {
    .h3,
    h3 {
      font-size: var(--ds-heading-font-size-h3-1084, 1.5rem);
      margin-bottom: var(--ds-heading-margin-bottom-h3-1084, 0.75rem);
    }
  }

  @media (min-width: 1400px) {
    .h3,
    h3 {
      font-size: var(--ds-heading-font-size-h3-1400, 1.8125rem);
      margin-bottom: var(--ds-heading-margin-bottom-h3-1400, 1rem);
    }
  }

  .h2,
  h2 {
    font-size: var(--ds-heading-font-size-h2, 1.5rem);
    margin-bottom: var(--ds-heading-margin-bottom-h2, 0.75rem);
  }

  @media (min-width: 1084px) {
    .h2,
    h2 {
      font-size: var(--ds-heading-font-size-h2-1084, 1.8125rem);
      margin-bottom: var(--ds-heading-margin-bottom-h2-1084, 1rem);
    }
  }

  @media (min-width: 1400px) {
    .h2,
    h2 {
      font-size: var(--ds-heading-font-size-h2-1400, 2.3125rem);
      margin-bottom: var(--ds-heading-margin-bottom-h2-1400, 1.25rem);
    }
  }

  .h1,
  h1 {
    font-size: var(--ds-heading-font-size-h1, 1.8125rem);
    margin-bottom: var(--ds-heading-margin-bottom-h1, 1rem);
  }

  @media (min-width: 1084px) {
    .h1,
    h1 {
      font-size: var(--ds-heading-font-size-h1-1084, 2.3125rem);
      margin-bottom: var(--ds-heading-margin-bottom-h1-1084, 1.25rem);
    }
  }

  @media (min-width: 1400px) {
    .h1,
    h1 {
      font-size: var(--ds-heading-font-size-h1-1400, 3.125rem);
      margin-bottom: var(--ds-heading-margin-bottom-h1-1400, 1.5rem);
    }
  }

  .display-4 {
    font-size: var(--ds-heading-font-size-display-4, 2.3125rem);
    margin-bottom: var(--ds-heading-margin-bottom-display-4, 1.25rem);
  }

  @media (min-width: 1084px) {
    .display-4 {
      font-size: var(--ds-heading-font-size-display-4-1084, 3.125rem);
      margin-bottom: var(--ds-heading-margin-bottom-display-4-1084, 1.5rem);
    }
  }

  @media (min-width: 1400px) {
    .display-4 {
      font-size: var(--ds-heading-font-size-display-4-1400, 4.4375rem);
      margin-bottom: var(--ds-heading-margin-bottom-display-4-1400, 1.75rem);
    }
  }

  .display-3 {
    font-size: var(--ds-heading-font-size-display-3, 3.125rem);
    margin-bottom: var(--ds-heading-margin-bottom-display-3, 1.5rem);
  }

  @media (min-width: 1084px) {
    .display-3 {
      font-size: var(--ds-heading-font-size-display-3-1084, 4.4375rem);
      margin-bottom: var(--ds-heading-margin-bottom-display-3-1084, 1.75rem);
    }
  }

  @media (min-width: 1400px) {
    .display-3 {
      font-size: var(--ds-heading-font-size-display-3-1400, 6.5625rem);
      margin-bottom: var(--ds-heading-margin-bottom-display-3-1400, 2rem);
    }
  }

  .display-2 {
    font-size: var(--ds-heading-font-size-display-2, 4.4375rem);
    margin-bottom: var(--ds-heading-margin-bottom-display-2, 1.75rem);
  }

  @media (min-width: 1084px) {
    .display-2 {
      font-size: var(--ds-heading-font-size-display-2-1084, 6.5625rem);
      margin-bottom: var(--ds-heading-margin-bottom-display-2-1084, 2rem);
    }
  }

  @media (min-width: 1400px) {
    .display-2 {
      font-size: var(--ds-heading-font-size-display-2-1400, 10rem);
      margin-bottom: var(--ds-heading-margin-bottom-display-2-1400, 2.25rem);
    }
  }

  .display-1 {
    font-size: var(--ds-heading-font-size-display-1, 6.5625rem);
    margin-bottom: var(--ds-heading-margin-bottom-display-1, 2rem);
  }

  @media (min-width: 1084px) {
    .display-1 {
      font-size: var(--ds-heading-font-size-display-1-1084, 10rem);
      margin-bottom: var(--ds-heading-margin-bottom-display-1-1084, 2.25rem);
    }
  }

  @media (min-width: 1400px) {
    .display-1 {
      font-size: var(--ds-heading-font-size-display-1-1400, 15.5625rem);
      margin-bottom: var(--ds-heading-margin-bottom-display-1-1400, 2.5rem);
    }
  }
`);

;// CONCATENATED MODULE: ./src/components/legos/heading/index.ts






let HeadingElement = class HeadingElement extends lit_element_s {
    constructor() {
        super(...arguments);
        this.tag = 'h2';
        this.displaySize = '';
        this.ariaLevel = '';
        this.uniqueId = '';
        this.headingText = '';
        this.addTextBreakHeading = false;
        this.hideHeadingText = false;
    }
    render() {
        const heading = this.renderHeading();
        return static_n `${heading}`;
    }
    renderHeading() {
        const { tag } = this;
        this.setAriaLevelBasedOnTag();
        return static_n `<${static_i(tag)} id="${this.uniqueId || T}" role='heading' aria-level="${this.ariaLevel || T}" class="heading heading--word-break ${this.displaySize} ${this.addTextBreakHeading ? 'text-break-keep-all' : ''} ${this.hideHeadingText ? 'sr-only' : ''}">
             <slot>${this.headingText}</slot>
        </${static_i(tag)}>`;
    }
    setAriaLevelBasedOnTag() {
        switch (this.tag) {
            case 'h1':
                this.ariaLevel = '1';
                break;
            case 'h2':
                this.ariaLevel = '2';
                break;
            case 'h3':
                this.ariaLevel = '3';
                break;
            case 'h4':
                this.ariaLevel = '4';
                break;
            case 'h5':
                this.ariaLevel = '5';
                break;
            case 'h6':
                this.ariaLevel = '6';
                break;
            case 'div':
                this.ariaLevel = '';
                break;
            default:
                break;
        }
    }
};
HeadingElement.styles = heading_styles;
__decorate([
    property_n()
], HeadingElement.prototype, "tag", void 0);
__decorate([
    property_n()
], HeadingElement.prototype, "displaySize", void 0);
__decorate([
    state_r()
], HeadingElement.prototype, "ariaLevel", void 0);
__decorate([
    property_n()
], HeadingElement.prototype, "uniqueId", void 0);
__decorate([
    property_n()
], HeadingElement.prototype, "headingText", void 0);
__decorate([
    property_n({ type: Boolean })
], HeadingElement.prototype, "addTextBreakHeading", void 0);
__decorate([
    property_n({ type: Boolean })
], HeadingElement.prototype, "hideHeadingText", void 0);
HeadingElement = __decorate([
    defineCustomElement('cascade-heading')
], HeadingElement);


;// CONCATENATED MODULE: ./src/components/compare-table/table-row/index.ts

class Tablerow {
    constructor(totalColumn, rowNumber) {
        this.totalColumn = totalColumn;
        this.rowNumber = rowNumber;
        this.isColoredBackgroud = true;
        this.rowNumberlist = [];
    }
    renderIconAndText() {
        // Implement the logic to render both icon and text
        if (this.totalColumn == 2) {
            this.rowNumberlist = [1, 2];
        }
        else if (this.totalColumn == 3) {
            this.rowNumberlist = [1, 2, 3];
        }
        else if (this.totalColumn == 4) {
            this.rowNumberlist = [1, 2, 3, 4];
        }
        const cellDataTemplate = [];
        for (const i of this.rowNumberlist) {
            cellDataTemplate.push(x ` <td class="${i == 1 || i == 3 ? 'card-background' : T}">
          <div aria-hidden="true" class="cc-rowheader-shim">
            <slot name="${this.rowNumber}-h"></slot>
            <div class="font-weight-normal">
              <slot name="${this.rowNumber}-d"></slot>
            </div>
          </div>
          <div class="cc-cell-content">
            <slot name="${this.rowNumber}-${i}"></slot>
          </div>
        </td>`);
        }
        return x `
      <tr>
        <th scope="row">
          <div class="cc-rowheader-wrapper">
            <div class="cc-rowheader">
              <slot name="${this.rowNumber}-h"></slot>
              <div class="font-weight-normal">
                <slot name="${this.rowNumber}-d"></slot>
              </div>
            </div>
          </div>
        </th>
        ${cellDataTemplate}
      </tr>
    `;
    }
}

;// CONCATENATED MODULE: ./src/styles/shared/mwf-columns.styles.ts

const columnStyles = i `
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -0.75rem;
    margin-left: -0.75rem;
  }

  .no-gutters {
    margin-right: 0;
    margin-left: 0;
  }

  .no-gutters > .col,
  .no-gutters > [class*='col-'],
  .no-gutters > ::slotted(*) {
    padding-right: 0;
    padding-left: 0;
  }

  .col,
  .col-1,
  .col-10,
  .col-11,
  .col-12,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-auto,
  .col-lg,
  .col-lg-1,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-auto,
  .col-md,
  .col-md-1,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-auto,
  .col-sm,
  .col-sm-1,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-auto,
  .col-xl,
  .col-xl-1,
  .col-xl-10,
  .col-xl-11,
  .col-xl-12,
  .col-xl-2,
  .col-xl-3,
  .col-xl-4,
  .col-xl-5,
  .col-xl-6,
  .col-xl-7,
  .col-xl-8,
  .col-xl-9,
  .col-xl-auto {
    position: relative;
    width: 100%;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
  }

  .col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .row-cols-1 > *,
  .row-cols-1 > ::slotted(*) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .row-cols-2 > * {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .row-cols-3 > * {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }

  .row-cols-4 > * {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .row-cols-5 > * {
    flex: 0 0 20%;
    max-width: 20%;
  }

  .row-cols-6 > * {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .col-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }

  .col-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }

  .col-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }

  .col-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }

  .col-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }

  .col-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }

  .col-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }

  .col-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }

  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-first {
    order: -1;
  }

  .order-last {
    order: 13;
  }

  .order-0 {
    order: 0;
  }

  .order-1 {
    order: 1;
  }

  .order-2 {
    order: 2;
  }

  .order-3 {
    order: 3;
  }

  .order-4 {
    order: 4;
  }

  .order-5 {
    order: 5;
  }

  .order-6 {
    order: 6;
  }

  .order-7 {
    order: 7;
  }

  .order-8 {
    order: 8;
  }

  .order-9 {
    order: 9;
  }

  .order-10 {
    order: 10;
  }

  .order-11 {
    order: 11;
  }

  .order-12 {
    order: 12;
  }

  @media (min-width: 540px) {
    .col-sm {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }

    .row-cols-sm-1 > * {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .row-cols-sm-2 > * {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .row-cols-sm-3 > * {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }

    .row-cols-sm-4 > * {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .row-cols-sm-5 > * {
      flex: 0 0 20%;
      max-width: 20%;
    }

    .row-cols-sm-6 > * {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }

    .col-sm-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }

    .col-sm-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }

    .col-sm-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }

    .col-sm-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .col-sm-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }

    .col-sm-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }

    .col-sm-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .col-sm-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }

    .col-sm-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }

    .col-sm-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .col-sm-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }

    .col-sm-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }

    .col-sm-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .order-sm-first {
      order: -1;
    }

    .order-sm-last {
      order: 13;
    }

    .order-sm-0 {
      order: 0;
    }

    .order-sm-1 {
      order: 1;
    }

    .order-sm-2 {
      order: 2;
    }

    .order-sm-3 {
      order: 3;
    }

    .order-sm-4 {
      order: 4;
    }

    .order-sm-5 {
      order: 5;
    }

    .order-sm-6 {
      order: 6;
    }

    .order-sm-7 {
      order: 7;
    }

    .order-sm-8 {
      order: 8;
    }

    .order-sm-9 {
      order: 9;
    }

    .order-sm-10 {
      order: 10;
    }

    .order-sm-11 {
      order: 11;
    }

    .order-sm-12 {
      order: 12;
    }
  }

  @media (min-width: 860px) {
    .col-md {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }

    .row-cols-md-1 > * {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .row-cols-md-2 > *,
    .row-cols-md-2 > ::slotted(*) {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .row-cols-md-3 > * {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }

    .row-cols-md-4 > * {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .row-cols-md-5 > * {
      flex: 0 0 20%;
      max-width: 20%;
    }

    .row-cols-md-6 > * {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }

    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }

    .col-md-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }

    .col-md-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }

    .col-md-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .col-md-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }

    .col-md-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }

    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .col-md-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }

    .col-md-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }

    .col-md-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .col-md-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }

    .col-md-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }

    .col-md-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .order-md-first {
      order: -1;
    }

    .order-md-last {
      order: 13;
    }

    .order-md-0 {
      order: 0;
    }

    .order-md-1 {
      order: 1;
    }

    .order-md-2 {
      order: 2;
    }

    .order-md-3 {
      order: 3;
    }

    .order-md-4 {
      order: 4;
    }

    .order-md-5 {
      order: 5;
    }

    .order-md-6 {
      order: 6;
    }

    .order-md-7 {
      order: 7;
    }

    .order-md-8 {
      order: 8;
    }

    .order-md-9 {
      order: 9;
    }

    .order-md-10 {
      order: 10;
    }

    .order-md-11 {
      order: 11;
    }

    .order-md-12 {
      order: 12;
    }
  }

  @media (min-width: 1084px) {
    .col-lg {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }

    .row-cols-lg-1 > * {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .row-cols-lg-2 > * {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .row-cols-lg-3 > * {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }

    .row-cols-lg-4 > * {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .row-cols-lg-5 > * {
      flex: 0 0 20%;
      max-width: 20%;
    }

    .row-cols-lg-6 > * {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }

    .col-lg-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }

    .col-lg-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }

    .col-lg-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }

    .col-lg-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .col-lg-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }

    .col-lg-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }

    .col-lg-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .col-lg-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }

    .col-lg-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }

    .col-lg-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .col-lg-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }

    .col-lg-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }

    .col-lg-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .order-lg-first {
      order: -1;
    }

    .order-lg-last {
      order: 13;
    }

    .order-lg-0 {
      order: 0;
    }

    .order-lg-1 {
      order: 1;
    }

    .order-lg-2 {
      order: 2;
    }

    .order-lg-3 {
      order: 3;
    }

    .order-lg-4 {
      order: 4;
    }

    .order-lg-5 {
      order: 5;
    }

    .order-lg-6 {
      order: 6;
    }

    .order-lg-7 {
      order: 7;
    }

    .order-lg-8 {
      order: 8;
    }

    .order-lg-9 {
      order: 9;
    }

    .order-lg-10 {
      order: 10;
    }

    .order-lg-11 {
      order: 11;
    }

    .order-lg-12 {
      order: 12;
    }
  }

  @media (min-width: 1400px) {
    .col-xl {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }

    .row-cols-xl-1 > * {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .row-cols-xl-2 > * {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .row-cols-xl-3 > * {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }

    .row-cols-xl-4 > * {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .row-cols-xl-5 > * {
      flex: 0 0 20%;
      max-width: 20%;
    }

    .row-cols-xl-6 > * {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }

    .col-xl-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }

    .col-xl-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }

    .col-xl-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }

    .col-xl-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .col-xl-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }

    .col-xl-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }

    .col-xl-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .col-xl-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }

    .col-xl-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }

    .col-xl-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .col-xl-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }

    .col-xl-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }

    .col-xl-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .order-xl-first {
      order: -1;
    }

    .order-xl-last {
      order: 13;
    }

    .order-xl-0 {
      order: 0;
    }

    .order-xl-1 {
      order: 1;
    }

    .order-xl-2 {
      order: 2;
    }

    .order-xl-3 {
      order: 3;
    }

    .order-xl-4 {
      order: 4;
    }

    .order-xl-5 {
      order: 5;
    }

    .order-xl-6 {
      order: 6;
    }

    .order-xl-7 {
      order: 7;
    }

    .order-xl-8 {
      order: 8;
    }

    .order-xl-9 {
      order: 9;
    }

    .order-xl-10 {
      order: 10;
    }

    .order-xl-11 {
      order: 11;
    }

    .order-xl-12 {
      order: 12;
    }
  }
`;

;// CONCATENATED MODULE: ./src/components/compare-table/index.ts








/**
 * A component to display a chart with a heading section that take Content Cards above a <table>.
 * @attribute accessible-label-text - concatenated list of image urls joined by a separator
 * @attribute total-columns - Sets the number of columns defaults to '2' if not set. To override, pass in a integer '3' or '4
 * @attribute is-JS-enabled - disables sticky content for authoring defaults to true.
 * @attribute is-block-style - Controls the border-top of the intro section. defaults to true.
 * @attribute total-rows - Sets the number of rows in the table defaults to '1'.
 * @attribute table-aria-label - Aria-label for the table element.
 * @slot title - Provide content to display above the table.
 * @slot sticky-bar - (not available) Provide sticky bar content below inital card headers.
 * @slot comparison-card-(0-3) - Provide content for heading section rows starts at second coloumn.
 * @slot intro - Provide content for first coloumn in header row.
 * @slot description - Provide text to display below intro slot.
 * @slot table - Provide content to display below header row. Defaults to table with slots available.
 * @slot table-header-(0-3) - Provide content for the <thead> row of default table element.
 * @slot table-caption - Provide content for the <caption> of default table element.
 * @slot #-h - Provide content for the first cell of the <tbody> row of default table element. number of slots should match total-rows.
 * @slot #-1 - Provide content for the second cell of the <tbody> row of default table element. number of slots should match total-rows.
 * @slot #-2 - Provide content for the third cell of the <tbody> row of default table element. number of slots should match total-rows.
 * @slot #-3 - Provide content for the fourth cell of the <tbody> row of default table element. number of slots should match total-rows.
 * @slot #-4 - Provide content for the fifth cell of the <tbody> row of default table element. number of slots should match total-rows.
 */
let SharedTableElement = class SharedTableElement extends lit_element_s {
    constructor() {
        super(...arguments);
        this.uniqueId = '';
        this.columnTypeCss = 'compare-chart-2-items';
        this.ariaLabel = '';
        this.totalColumns = 2;
        this.JSEnabled = true;
        this.isBlockStyle = true;
        this.totalRows = 1;
        this.tableAriaLabel = '';
    }
    render() {
        this.generateStates();
        const cards = this.renderProductCards();
        const table = this.renderTable();
        const stickyBar = this.renderStickyBar();
        return x `
    <div class="comparechart" id="${this.uniqueId}">
    <div class="compare-chart container">
        <div class="compare-chart-component">
          <div class="compare-chart-title">
            <slot name="title"></slot>
                <div class="border-bottom"></div>
          </div>
                    <section class="table-responsive compare-chart ${this.columnTypeCss} compare-chart-synchronized-scroll"
                             aria-label='${this.ariaLabel || T}'>
                        ${cards}
                        ${stickyBar}
                        <slot name=table>${table}</slot>
                    </section>
                  </div>
        </div>
     </div>
     </div>
        `;
    }
    generateStates() {
        this.uniqueId = this.generateUniqueCompareChartId();
        if (this.totalColumns == 3) {
            this.columnTypeCss = 'compare-chart-3-items';
        }
        else if (this.totalColumns == 4) {
            this.columnTypeCss = 'compare-chart-4-items';
        }
    }
    generateUniqueCompareChartId() {
        const prefix = 'CompareChart';
        const randomString = Math.random().toString(36).substring(2, 10); // Generate a random alphanumeric string
        const uniqueId = `${prefix}${randomString}`;
        return uniqueId;
    }
    renderStickyBar() {
        if (!this.JSEnabled) {
            return;
        }
        return x `
      <div class="sticky-content">
        <slot name="sticky-bar"></slot>
      </div>
    `;
    }
    renderProductCards() {
        const cardSlotTemplate = [];
        for (let i = 0; i < this.totalColumns; i++) {
            cardSlotTemplate.push(x ` <div class="col">
          <div
            class="card compare-chart-card material-surface py-4 py-md-3 py-lg-4"
          >
            <div class="cc-card-flex-grow ">
              <slot name="comparison-card-${i}"></slot>
            </div>
          </div>
        </div>`);
        }
        return x `
      <div class="divider"></div>
      <div class="compare-chart-head">
        <div
          class="compare-chart-intro ${this.isBlockStyle ? 'border-top' : ''}"
        >
          <slot name="intro"></slot>
          <slot name="description"></slot>
        </div>
        <div class="compare-chart-prod-card-group">
          <div class="row mx-0">${cardSlotTemplate}</div>
        </div>
      </div>
    `;
    }
    renderTable() {
        const tableheaderTemplate = [];
        const tableRowTemplate = [];
        for (let i = 0; i < this.totalRows; i++) {
            tableRowTemplate.push(x ` ${this.renderTableRow(i)} `);
        }
        for (let i = 0; i < this.totalColumns; i++) {
            tableheaderTemplate.push(x `
        <th class="${i == 2 || i == 0 ? 'card-background' : T}">
          <div class="cc-rowheader-wrapper">
            <div class="cc-rowheader">
              <slot name="table-header-${i + 1}"> </slot>
            </div>
          </div>
        </th>
      `);
        }
        return x `
      <table class="table compare-chart-table table-caption-top mt-4 mt-md-3" ariaLabel="${this.tableAriaLabel || T}">
        <caption tabindex="0" class="hidden">
          <slot name="table-caption"></slot>
        </caption>
        <thead>
          <tr>
            <th>
              <div class="cc-rowheader-wrapper">
                <div class="cc-rowheader">
                  <slot name="table-header-0">
                </div>
              </div>
            </th>
            ${tableheaderTemplate}
          </tr>
        </thead>
        <tbody>
          ${tableRowTemplate}
        </tbody>
      </table>
    `;
    }
    renderTableRow(rowNumber) {
        const tempTableRow = new Tablerow(this.totalColumns, rowNumber);
        return tempTableRow.renderIconAndText();
    }
};
SharedTableElement.styles = [table_styles, global, mwfstyles, columnStyles];
__decorate([
    state_r()
], SharedTableElement.prototype, "uniqueId", void 0);
__decorate([
    state_r()
], SharedTableElement.prototype, "columnTypeCss", void 0);
__decorate([
    property_n({ attribute: 'accessible-label-text' })
], SharedTableElement.prototype, "ariaLabel", void 0);
__decorate([
    property_n({ attribute: 'total-columns' })
], SharedTableElement.prototype, "totalColumns", void 0);
__decorate([
    property_n({ type: Boolean, attribute: 'is-JS-enabled' })
], SharedTableElement.prototype, "JSEnabled", void 0);
__decorate([
    property_n({ type: Boolean, attribute: 'is-block-style' })
], SharedTableElement.prototype, "isBlockStyle", void 0);
__decorate([
    property_n({ type: Number, attribute: 'total-rows' })
], SharedTableElement.prototype, "totalRows", void 0);
__decorate([
    property_n({ attribute: 'table-aria-label' })
], SharedTableElement.prototype, "tableAriaLabel", void 0);
SharedTableElement = __decorate([
    custom_element_t('cascade-compare-table')
], SharedTableElement);


;// CONCATENATED MODULE: ./src/components/multi-comparison/index.ts





/**
 * A component to display a chart with a heading section that take Content Cards above a <table>.
 * @attribute accessible-label-text - concatenated list of image urls joined by a separator
 * @attribute total-columns - Sets the number of columns defaults to '2' if not set. To override, pass in a integer '3' or '4
 * @attribute is-JS-enabled - disables sticky content for authoring defaults to true.
 * @attribute is-block-style - Controls the border-top of the intro section. defaults to true.
 * @attribute total-rows - Sets the number of rows in the table defaults to '1'.
 * @attribute table-aria-label - Aria-label for the table element.
 **/
let MultiComparisonElement = class MultiComparisonElement extends lit_element_s {
    constructor() {
        super(...arguments);
        this.ariaLabel = '';
        this.totalColumns = 2;
        this.JSEnabled = true;
        this.isBlockStyle = true;
        this.totalRows = 1;
        this.tableAriaLabel = '';
    }
    render() {
        return x ` ${this.renderTable()} `;
    }
    renderTable() {
        const tableRowTemplate = [];
        const cardTemplate = [];
        const tableHeaderTemplate = this.renderTableHeader();
        for (let i = 0; i < this.totalRows; i++) {
            tableRowTemplate.push(x `<span slot="${i}-h"><slot name="${i}-h"></slot></span>
          <span slot="${i}-d"><slot name="${i}-d"></slot></span>`);
            tableRowTemplate.push(x ` ${this.renderTableRow(i)}`);
        }
        for (let i = 0; i < this.totalColumns; i++) {
            cardTemplate.push(x `
        <span slot="comparison-card-${i}">
          <slot name="comparison-card-${i}"></slot>
        </span>
      `);
        }
        return x `
      <cascade-compare-table
        total-columns="${this.totalColumns}"
        total-rows="${this.totalRows}"
        accessible-label-text="${this.ariaLabel}"
        is-JS-enabled="${this.JSEnabled}"
        is-block-style="${this.isBlockStyle}"
      >
        <span slot="table-caption"><slot name="table-caption"></slot></span>
        <span slot="intro"><slot name="intro"></slot></span>
        <span slot="title"><slot name="title"></slot></span>
        <span slot="sticky-bar"><slot name="sticky-bar"></slot></span>
        <span slot="description"><slot name="description"></slot></span>
        ${cardTemplate} ${tableRowTemplate}${tableHeaderTemplate}
      </cascade-compare-table>
    `;
    }
    renderTableHeader() {
        const tableHeaderTemplate = [];
        for (let i = 0; i <= this.totalColumns; i++) {
            tableHeaderTemplate.push(x `
        <span slot="table-header-${i}">
          <slot name="table-header-${i}"></slot>
        </span>
      `);
        }
        return x `${tableHeaderTemplate}`;
    }
    renderTableRow(rowNumber) {
        const cellDataTemplate = [];
        for (let i = 1; i <= this.totalColumns; i++) {
            cellDataTemplate.push(x `
        <span slot="${rowNumber}-${i}"
          ><slot name="${rowNumber}-${i}"></slot
        ></span>
      `);
        }
        return x `${cellDataTemplate}`;
    }
};
MultiComparisonElement.styles = [multiCompareStyles];
__decorate([
    property_n({ attribute: 'accessible-label-text' })
], MultiComparisonElement.prototype, "ariaLabel", void 0);
__decorate([
    property_n({ attribute: 'total-columns' })
], MultiComparisonElement.prototype, "totalColumns", void 0);
__decorate([
    property_n({ type: Boolean, attribute: 'is-JS-enabled' })
], MultiComparisonElement.prototype, "JSEnabled", void 0);
__decorate([
    property_n({ type: Boolean, attribute: 'is-block-style' })
], MultiComparisonElement.prototype, "isBlockStyle", void 0);
__decorate([
    property_n({ type: Number, attribute: 'total-rows' })
], MultiComparisonElement.prototype, "totalRows", void 0);
__decorate([
    property_n({ attribute: 'table-aria-label' })
], MultiComparisonElement.prototype, "tableAriaLabel", void 0);
MultiComparisonElement = __decorate([
    custom_element_t('cascade-multi-comparison')
], MultiComparisonElement);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map