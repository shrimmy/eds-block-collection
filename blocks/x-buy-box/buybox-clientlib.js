/*
 For license information please see buybox.min.js.LICENSE.txt */
 'use strict';
 (()=>{
     function Ja(Q) {
         var I = Zi[Q];
         if (void 0 !== I)
             return I.exports;
         I = Zi[Q] = {
             id: Q,
             loaded: !1,
             exports: {}
         };
         return oj[Q].call(I.exports, I, I.exports, Ja),
         I.loaded = !0,
         I.exports
     }
     var oj = {
         4859: function(Q, I, C) {
             var v = this && this.__assign || function() {
                 return v = Object.assign || function(K) {
                     for (var A, J = 1, w = arguments.length; J < w; J++)
                         for (var u in A = arguments[J])
                             Object.prototype.hasOwnProperty.call(A, u) && (K[u] = A[u]);
                     return K
                 }
                 ,
                 v.apply(this, arguments)
             }
               , z = this && this.__awaiter || function(K, A, J, w) {
                 return new (J || (J = Promise))(function(u, L) {
                     function O(U) {
                         try {
                             R(w.next(U))
                         } catch (S) {
                             L(S)
                         }
                     }
                     function F(U) {
                         try {
                             R(w.throw(U))
                         } catch (S) {
                             L(S)
                         }
                     }
                     function R(U) {
                         var S;
                         U.done ? u(U.value) : (S = U.value,
                         S instanceof J ? S : new J(function(N) {
                             N(S)
                         }
                         )).then(O, F)
                     }
                     R((w = w.apply(K, A || [])).next())
                 }
                 )
             }
               , H = this && this.__generator || function(K, A) {
                 function J(R) {
                     return function(U) {
                         return function(S) {
                             if (w)
                                 throw new TypeError("Generator is already executing.");
                             for (; F; )
                                 try {
                                     if (w = 1,
                                     u && (L = 2 & S[0] ? u.return : S[0] ? u.throw || ((L = u.return) && L.call(u),
                                     0) : u.next) && !(L = L.call(u, S[1])).done)
                                         return L;
                                     switch (u = 0,
                                     L && (S = [2 & S[0], L.value]),
                                     S[0]) {
                                     case 0:
                                     case 1:
                                         L = S;
                                         break;
                                     case 4:
                                         return F.label++,
                                         {
                                             value: S[1],
                                             done: !1
                                         };
                                     case 5:
                                         F.label++;
                                         u = S[1];
                                         S = [0];
                                         continue;
                                     case 7:
                                         S = F.ops.pop();
                                         F.trys.pop();
                                         continue;
                                     default:
                                         if (!(L = F.trys,
                                         (L = 0 < L.length && L[L.length - 1]) || 6 !== S[0] && 2 !== S[0])) {
                                             F = 0;
                                             continue
                                         }
                                         if (3 === S[0] && (!L || S[1] > L[0] && S[1] < L[3]))
                                             F.label = S[1];
                                         else if (6 === S[0] && F.label < L[1])
                                             F.label = L[1],
                                             L = S;
                                         else if (L && F.label < L[2])
                                             F.label = L[2],
                                             F.ops.push(S);
                                         else {
                                             L[2] && F.ops.pop();
                                             F.trys.pop();
                                             continue
                                         }
                                     }
                                     S = A.call(K, F)
                                 } catch (N) {
                                     S = [6, N],
                                     u = 0
                                 } finally {
                                     w = L = 0
                                 }
                             if (5 & S[0])
                                 throw S[1];
                             return {
                                 value: S[0] ? S[1] : void 0,
                                 done: !0
                             }
                         }([R, U])
                     }
                 }
                 var w, u, L, O, F = {
                     label: 0,
                     sent: function() {
                         if (1 & L[0])
                             throw L[1];
                         return L[1]
                     },
                     trys: [],
                     ops: []
                 };
                 return O = {
                     next: J(0),
                     throw: J(1),
                     return: J(2)
                 },
                 "function" == typeof Symbol && (O[Symbol.iterator] = function() {
                     return this
                 }
                 ),
                 O
             }
             ;
             Object.defineProperty(I, "__esModule", {
                 value: !0
             });
             I.preFetchBuyNow = I.makeWindowListener = I.invokeRedeemInFrame = I.invokePurchaseInFrame = void 0;
             var P = C(8544);
             I.invokePurchaseInFrame = function(K, A) {
                 return z(this, void 0, void 0, function() {
                     var J, w, u;
                     return H(this, function(L) {
                         switch (L.label) {
                         case 0:
                             if (!K.name)
                                 throw Error('purchase-sdk: target iframe must have unique "name" attribute set');
                             return J = {
                                 usePurchaseSdk: !0
                             },
                             (w = document.createElement("form")).target = K.name,
                             w.action = "https://www.microsoft.com/store/buynow?ms-cv\x3d" + encodeURIComponent(A.cV) + "\x26noCanonical\x3dtrue\x26market\x3d" + A.market + "\x26locale\x3d" + A.locale,
                             w.method = "post",
                             w.appendChild((0,
                             P.createInput)("data", v(v({
                                 products: A.products
                             }, A.campaignOptions), {
                                 catalogClientType: A.catalogClientType,
                                 clientType: A.clientType,
                                 clientVersion: A.clientVersion,
                                 osVersion: A.osVersion,
                                 purchaseAppVersion: A.purchaseAppVersion,
                                 data: J,
                                 layout: A.layout,
                                 cssOverride: A.cssOverride,
                                 theme: A.theme,
                                 uuid: A.uuid,
                                 isAddAsyncPIFailed: A.isAddAsyncPIFailed,
                                 selectEnv: A.selectEnv,
                                 scenario: A.scenario || "",
                                 attachRecordId: A.attachRecordId,
                                 deviceContext: A.deviceContext,
                                 deviceSerialNumber: A.deviceSerialNumber,
                                 suppressGiftThankYouPage: A.suppressGiftThankYouPage,
                                 isTelemetryEnabled: A.isTelemetryEnabled,
                                 clientDebugInfo: A.clientDebugInfo,
                                 disableBuyNowFocusTrap: A.disableBuyNowFocusTrap,
                                 gifteeType: A.gifteeType,
                                 gifteeValue: A.gifteeValue,
                                 gamertagImageUrl: A.gamertagImageUrl,
                                 modernGamertag: A.modernGamertag
                             }))).appendChild(A.authToken ? (0,
                             P.createInput)("auth", {
                                 Ticket: A.authToken
                             }) : (0,
                             P.createInput)("auth", {
                                 XToken: A.xToken
                             })),
                             u = new Promise(function(O) {
                                 return window.addEventListener("message", function(F) {
                                     var R, U;
                                     if ("https://www.microsoft.com" === F.origin) {
                                         if (-1 === (null === (U = null === (R = A.campaignOptions) || void 0 === R ? void 0 : R.flights) || void 0 === U ? void 0 : U.indexOf("sc_pidl.piselect")))
                                             "ReactPurchaseReadyToRender" === F.data && O();
                                         else {
                                             R = null;
                                             try {
                                                 R = F.data.message
                                             } catch (S) {}
                                             R && "selectPiLoaded" === R && O()
                                         }
                                         w && w.remove()
                                     }
                                 }, !0)
                             }
                             ),
                             K.appendChild(w),
                             w.submit(),
                             [4, u];
                         case 1:
                             return L.sent(),
                             [2, !0]
                         }
                     })
                 })
             }
             ;
             I.invokeRedeemInFrame = function(K, A) {
                 return z(this, void 0, void 0, function() {
                     var J, w, u;
                     return H(this, function(L) {
                         switch (L.label) {
                         case 0:
                             if (!K.name)
                                 throw Error('purchase-sdk: target iframe must have unique "name" attribute set');
                             return J = {
                                 usePurchaseSdk: !0
                             },
                             (w = document.createElement("form")).target = K.name,
                             w.action = "https://www.microsoft.com/store/redeemnow?ms-cv\x3d" + encodeURIComponent(A.cV) + "\x26noCanonical\x3dtrue\x26market\x3d" + A.market + "\x26locale\x3d" + A.locale,
                             w.method = "post",
                             w.appendChild((0,
                             P.createInput)("data", v(v({}, A.campaignOptions), {
                                 data: J,
                                 isRedeem: !0,
                                 clientType: A.clientType,
                                 layout: A.layout,
                                 cssOverride: A.cssOverride,
                                 theme: A.theme,
                                 clientVersion: A.clientVersion,
                                 catalogClientType: A.catalogClientType,
                                 osVersion: A.osVersion,
                                 purchaseAppVersion: A.purchaseAppVersion,
                                 selectEnv: A.selectEnv,
                                 isTelemetryEnabled: A.isTelemetryEnabled,
                                 disableBuyNowFocusTrap: A.disableBuyNowFocusTrap,
                                 uuid: A.uuid,
                                 tokenString: A.tokenString,
                                 scenario: A.scenario,
                                 offerId: A.offerId,
                                 productId: A.productId,
                                 skuId: A.skuId,
                                 s2sToken: A.s2sToken,
                                 suppressRedeemThankYouPage: A.suppressRedeemThankYouPage
                             }))).appendChild(A.authToken ? (0,
                             P.createInput)("auth", {
                                 Ticket: A.authToken
                             }) : (0,
                             P.createInput)("auth", {
                                 XToken: A.xToken
                             })),
                             u = new Promise(function(O) {
                                 return window.addEventListener("message", function(F) {
                                     "https://www.microsoft.com" === F.origin && ("ReactPurchaseReadyToRender" === F.data && O(),
                                     w && w.remove())
                                 }, !0)
                             }
                             ),
                             K.appendChild(w),
                             w.submit(),
                             [4, u];
                         case 1:
                             return L.sent(),
                             [2, !0]
                         }
                     })
                 })
             }
             ;
             I.makeWindowListener = function(K) {
                 return function(A) {
                     var J, w, u;
                     if ("https://www.microsoft.com" === A.origin)
                         switch (A = A.data,
                         A.message) {
                         case "done":
                             K.done(A);
                             break;
                         case "openUrl":
                             K.openUrl ? K.openUrl(A) : window.location.href = A.url;
                             break;
                         case "stageChanged":
                             null === (J = K.stageChanged) || void 0 === J || J.call(K, A);
                             break;
                         case "status":
                             null === (w = K.status) || void 0 === w || w.call(K, A);
                             break;
                         case "sizeChanged":
                             null === (u = K.sizeChanged) || void 0 === u || u.call(K, A)
                         }
                 }
             }
             ;
             I.preFetchBuyNow = function(K) {
                 K.src = "https://www.microsoft.com/en-us/store/purchase/prod/buynow-essential-js"
             }
         },
         8544: (Q,I)=>{
             Object.defineProperty(I, "__esModule", {
                 value: !0
             });
             I.extraData = I.createInput = void 0;
             I.createInput = function(C, v, z) {
                 var H = document.createElement("input");
                 return H.name = C,
                 H.type = "hidden",
                 H.value = v ? JSON.stringify(v) : null != z ? z : "",
                 H
             }
             ;
             I.extraData = function(C) {
                 return {
                     usePurchaseSdk: !0,
                     clientType: C
                 }
             }
         }
         ,
         3770: (Q,I,C)=>{
             Q.exports = C(2494).default
         }
         ,
         2494: (Q,I,C)=>{
             function v(R) {
                 return !R.response && !!R.code && "ECONNABORTED" !== R.code && (0,
                 u.default)(R)
             }
             function z(R) {
                 return "ECONNABORTED" !== R.code && (!R.response || 500 <= R.response.status && 599 >= R.response.status)
             }
             function H(R) {
                 return !!R.config && z(R) && -1 !== F.indexOf(R.config.method)
             }
             function P(R) {
                 return v(R) || H(R)
             }
             function K() {
                 return 0
             }
             function A(R) {
                 var U = R[L] || {};
                 return U.retryCount = U.retryCount || 0,
                 R[L] = U,
                 U
             }
             function J(R, U) {
                 R.interceptors.request.use(function(S) {
                     return A(S).lastRequestTime = Date.now(),
                     S
                 });
                 R.interceptors.response.use(null, function(S) {
                     var N = S.config;
                     if (!N)
                         return Promise.reject(S);
                     var ba = Object.assign({}, U, N[L])
                       , na = ba.retries;
                     na = void 0 === na ? 3 : na;
                     var ea = ba.retryCondition;
                     ea = void 0 === ea ? P : ea;
                     var ka = ba.retryDelay;
                     ka = void 0 === ka ? K : ka;
                     ba = ba.shouldResetTimeout;
                     ba = void 0 !== ba && ba;
                     var ha = A(N);
                     if (ea(S) && ha.retryCount < na) {
                         ha.retryCount += 1;
                         var aa = ka(ha.retryCount, S);
                         if (function(sa, Na) {
                             sa.defaults.agent === Na.agent && delete Na.agent;
                             sa.defaults.httpAgent === Na.httpAgent && delete Na.httpAgent;
                             sa.defaults.httpsAgent === Na.httpsAgent && delete Na.httpsAgent
                         }(R, N),
                         !ba && N.timeout && ha.lastRequestTime)
                             S = Date.now() - ha.lastRequestTime,
                             N.timeout = Math.max(N.timeout - S - aa, 1);
                         return N.transformRequest = [function(sa) {
                             return sa
                         }
                         ],
                         new Promise(function(sa) {
                             return setTimeout(function() {
                                 return sa(R(N))
                             }, aa)
                         }
                         )
                     }
                     return Promise.reject(S)
                 })
             }
             I.default = J;
             var w, u = (w = C(1111)) && w.__esModule ? w : {
                 default: w
             }, L = "axios-retry", O = ["get", "head", "options"], F = O.concat(["put", "delete"]);
             J.isNetworkError = v;
             J.isSafeRequestError = function(R) {
                 return !!R.config && z(R) && -1 !== O.indexOf(R.config.method)
             }
             ;
             J.isIdempotentRequestError = H;
             J.isNetworkOrIdempotentRequestError = P;
             J.exponentialDelay = function() {
                 var R = 100 * Math.pow(2, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0);
                 return R + .2 * R * Math.random()
             }
             ;
             J.isRetryableError = z
         }
         ,
         2505: (Q,I,C)=>{
             Q.exports = C(8015)
         }
         ,
         5592: (Q,I,C)=>{
             var v = C(9516)
               , z = C(7522)
               , H = C(3948)
               , P = C(9106)
               , K = C(9615)
               , A = C(2012)
               , J = C(4202)
               , w = C(7763);
             Q.exports = function(u) {
                 return new Promise(function(L, O) {
                     function F() {
                         if (N) {
                             var ea = "getAllResponseHeaders"in N ? A(N.getAllResponseHeaders()) : null;
                             z(L, O, {
                                 data: S && "text" !== S && "json" !== S ? N.response : N.responseText,
                                 status: N.status,
                                 statusText: N.statusText,
                                 headers: ea,
                                 config: u,
                                 request: N
                             });
                             N = null
                         }
                     }
                     var R = u.data
                       , U = u.headers
                       , S = u.responseType;
                     v.isFormData(R) && delete U["Content-Type"];
                     var N = new XMLHttpRequest;
                     if (u.auth) {
                         var ba = u.auth.username || ""
                           , na = u.auth.password ? unescape(encodeURIComponent(u.auth.password)) : "";
                         U.Authorization = "Basic " + btoa(ba + ":" + na)
                     }
                     ba = K(u.baseURL, u.url);
                     (N.open(u.method.toUpperCase(), P(ba, u.params, u.paramsSerializer), !0),
                     N.timeout = u.timeout,
                     "onloadend"in N ? N.onloadend = F : N.onreadystatechange = function() {
                         N && 4 === N.readyState && (0 !== N.status || N.responseURL && 0 === N.responseURL.indexOf("file:")) && setTimeout(F)
                     }
                     ,
                     N.onabort = function() {
                         N && (O(w("Request aborted", u, "ECONNABORTED", N)),
                         N = null)
                     }
                     ,
                     N.onerror = function() {
                         O(w("Network Error", u, null, N));
                         N = null
                     }
                     ,
                     N.ontimeout = function() {
                         var ea = "timeout of " + u.timeout + "ms exceeded";
                         u.timeoutErrorMessage && (ea = u.timeoutErrorMessage);
                         O(w(ea, u, u.transitional && u.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", N));
                         N = null
                     }
                     ,
                     v.isStandardBrowserEnv()) && (ba = (u.withCredentials || J(ba)) && u.xsrfCookieName ? H.read(u.xsrfCookieName) : void 0) && (U[u.xsrfHeaderName] = ba);
                     "setRequestHeader"in N && v.forEach(U, function(ea, ka) {
                         void 0 === R && "content-type" === ka.toLowerCase() ? delete U[ka] : N.setRequestHeader(ka, ea)
                     });
                     v.isUndefined(u.withCredentials) || (N.withCredentials = !!u.withCredentials);
                     S && "json" !== S && (N.responseType = u.responseType);
                     "function" == typeof u.onDownloadProgress && N.addEventListener("progress", u.onDownloadProgress);
                     "function" == typeof u.onUploadProgress && N.upload && N.upload.addEventListener("progress", u.onUploadProgress);
                     u.cancelToken && u.cancelToken.promise.then(function(ea) {
                         N && (N.abort(),
                         O(ea),
                         N = null)
                     });
                     R || (R = null);
                     N.send(R)
                 }
                 )
             }
         }
         ,
         8015: (Q,I,C)=>{
             function v(J) {
                 J = new P(J);
                 var w = H(P.prototype.request, J);
                 return z.extend(w, P.prototype, J),
                 z.extend(w, J),
                 w
             }
             var z = C(9516)
               , H = C(9012)
               , P = C(5155)
               , K = C(5343)
               , A = v(C(6987));
             A.Axios = P;
             A.create = function(J) {
                 return v(K(A.defaults, J))
             }
             ;
             A.Cancel = C(1928);
             A.CancelToken = C(3191);
             A.isCancel = C(3864);
             A.all = function(J) {
                 return Promise.all(J)
             }
             ;
             A.spread = C(7980);
             A.isAxiosError = C(5019);
             Q.exports = A;
             Q.exports.default = A
         }
         ,
         1928: Q=>{
             function I(C) {
                 this.message = C
             }
             I.prototype.toString = function() {
                 return "Cancel" + (this.message ? ": " + this.message : "")
             }
             ;
             I.prototype.__CANCEL__ = !0;
             Q.exports = I
         }
         ,
         3191: (Q,I,C)=>{
             function v(H) {
                 if ("function" != typeof H)
                     throw new TypeError("executor must be a function.");
                 var P;
                 this.promise = new Promise(function(A) {
                     P = A
                 }
                 );
                 var K = this;
                 H(function(A) {
                     K.reason || (K.reason = new z(A),
                     P(K.reason))
                 })
             }
             var z = C(1928);
             v.prototype.throwIfRequested = function() {
                 if (this.reason)
                     throw this.reason;
             }
             ;
             v.source = function() {
                 var H;
                 return {
                     token: new v(function(P) {
                         H = P
                     }
                     ),
                     cancel: H
                 }
             }
             ;
             Q.exports = v
         }
         ,
         3864: Q=>{
             Q.exports = function(I) {
                 return !(!I || !I.__CANCEL__)
             }
         }
         ,
         5155: (Q,I,C)=>{
             function v(w) {
                 this.defaults = w;
                 this.interceptors = {
                     request: new H,
                     response: new H
                 }
             }
             I = C(9516);
             var z = C(9106)
               , H = C(3471)
               , P = C(4490)
               , K = C(5343)
               , A = C(4841)
               , J = A.validators;
             v.prototype.request = function(w, u) {
                 "string" == typeof w ? (w = u || {}).url = w : w = w || {};
                 (w = K(this.defaults, w)).method ? w.method = w.method.toLowerCase() : this.defaults.method ? w.method = this.defaults.method.toLowerCase() : w.method = "get";
                 u = w.transitional;
                 void 0 !== u && A.assertOptions(u, {
                     silentJSONParsing: J.transitional(J.boolean, "1.0.0"),
                     forcedJSONParsing: J.transitional(J.boolean, "1.0.0"),
                     clarifyTimeoutError: J.transitional(J.boolean, "1.0.0")
                 }, !1);
                 var L = []
                   , O = !0;
                 this.interceptors.request.forEach(function(N) {
                     "function" == typeof N.runWhen && !1 === N.runWhen(w) || (O = O && N.synchronous,
                     L.unshift(N.fulfilled, N.rejected))
                 });
                 var F, R = [];
                 if (this.interceptors.response.forEach(function(N) {
                     R.push(N.fulfilled, N.rejected)
                 }),
                 !O) {
                     u = [P, void 0];
                     Array.prototype.unshift.apply(u, L);
                     u = u.concat(R);
                     for (F = Promise.resolve(w); u.length; )
                         F = F.then(u.shift(), u.shift());
                     return F
                 }
                 for (u = w; L.length; ) {
                     var U = L.shift()
                       , S = L.shift();
                     try {
                         u = U(u)
                     } catch (N) {
                         S(N);
                         break
                     }
                 }
                 try {
                     F = P(u)
                 } catch (N) {
                     return Promise.reject(N)
                 }
                 for (; R.length; )
                     F = F.then(R.shift(), R.shift());
                 return F
             }
             ;
             v.prototype.getUri = function(w) {
                 return w = K(this.defaults, w),
                 z(w.url, w.params, w.paramsSerializer).replace(/^\?/, "")
             }
             ;
             I.forEach(["delete", "get", "head", "options"], function(w) {
                 v.prototype[w] = function(u, L) {
                     return this.request(K(L || {}, {
                         method: w,
                         url: u,
                         data: (L || {}).data
                     }))
                 }
             });
             I.forEach(["post", "put", "patch"], function(w) {
                 v.prototype[w] = function(u, L, O) {
                     return this.request(K(O || {}, {
                         method: w,
                         url: u,
                         data: L
                     }))
                 }
             });
             Q.exports = v
         }
         ,
         3471: (Q,I,C)=>{
             function v() {
                 this.handlers = []
             }
             var z = C(9516);
             v.prototype.use = function(H, P, K) {
                 return this.handlers.push({
                     fulfilled: H,
                     rejected: P,
                     synchronous: !!K && K.synchronous,
                     runWhen: K ? K.runWhen : null
                 }),
                 this.handlers.length - 1
             }
             ;
             v.prototype.eject = function(H) {
                 this.handlers[H] && (this.handlers[H] = null)
             }
             ;
             v.prototype.forEach = function(H) {
                 z.forEach(this.handlers, function(P) {
                     null !== P && H(P)
                 })
             }
             ;
             Q.exports = v
         }
         ,
         9615: (Q,I,C)=>{
             var v = C(9137)
               , z = C(4680);
             Q.exports = function(H, P) {
                 return H && !v(P) ? z(H, P) : P
             }
         }
         ,
         7763: (Q,I,C)=>{
             var v = C(5449);
             Q.exports = function(z, H, P, K, A) {
                 return v(Error(z), H, P, K, A)
             }
         }
         ,
         4490: (Q,I,C)=>{
             var v = C(9516)
               , z = C(2881)
               , H = C(3864)
               , P = C(6987);
             Q.exports = function(K) {
                 K.cancelToken && K.cancelToken.throwIfRequested();
                 return K.headers = K.headers || {},
                 K.data = z.call(K, K.data, K.headers, K.transformRequest),
                 K.headers = v.merge(K.headers.common || {}, K.headers[K.method] || {}, K.headers),
                 v.forEach("delete get head post put patch common".split(" "), function(A) {
                     delete K.headers[A]
                 }),
                 (K.adapter || P.adapter)(K).then(function(A) {
                     K.cancelToken && K.cancelToken.throwIfRequested();
                     return A.data = z.call(K, A.data, A.headers, K.transformResponse),
                     A
                 }, function(A) {
                     H(A) || (K.cancelToken && K.cancelToken.throwIfRequested(),
                     A && A.response && (A.response.data = z.call(K, A.response.data, A.response.headers, K.transformResponse)));
                     return Promise.reject(A)
                 })
             }
         }
         ,
         5449: Q=>{
             Q.exports = function(I, C, v, z, H) {
                 return I.config = C,
                 v && (I.code = v),
                 I.request = z,
                 I.response = H,
                 I.isAxiosError = !0,
                 I.toJSON = function() {
                     return {
                         message: this.message,
                         name: this.name,
                         description: this.description,
                         number: this.number,
                         fileName: this.fileName,
                         lineNumber: this.lineNumber,
                         columnNumber: this.columnNumber,
                         stack: this.stack,
                         config: this.config,
                         code: this.code
                     }
                 }
                 ,
                 I
             }
         }
         ,
         5343: (Q,I,C)=>{
             var v = C(9516);
             Q.exports = function(z, H) {
                 function P(F, R) {
                     return v.isPlainObject(F) && v.isPlainObject(R) ? v.merge(F, R) : v.isPlainObject(R) ? v.merge({}, R) : v.isArray(R) ? R.slice() : R
                 }
                 function K(F) {
                     v.isUndefined(H[F]) ? v.isUndefined(z[F]) || (A[F] = P(void 0, z[F])) : A[F] = P(z[F], H[F])
                 }
                 H = H || {};
                 var A = {}
                   , J = ["url", "method", "data"]
                   , w = ["headers", "auth", "proxy", "params"]
                   , u = "baseURL transformRequest transformResponse paramsSerializer timeout timeoutMessage withCredentials adapter responseType xsrfCookieName xsrfHeaderName onUploadProgress onDownloadProgress decompress maxContentLength maxBodyLength maxRedirects transport httpAgent httpsAgent cancelToken socketPath responseEncoding".split(" ")
                   , L = ["validateStatus"];
                 v.forEach(J, function(F) {
                     v.isUndefined(H[F]) || (A[F] = P(void 0, H[F]))
                 });
                 v.forEach(w, K);
                 v.forEach(u, function(F) {
                     v.isUndefined(H[F]) ? v.isUndefined(z[F]) || (A[F] = P(void 0, z[F])) : A[F] = P(void 0, H[F])
                 });
                 v.forEach(L, function(F) {
                     F in H ? A[F] = P(z[F], H[F]) : F in z && (A[F] = P(void 0, z[F]))
                 });
                 var O = J.concat(w).concat(u).concat(L);
                 J = Object.keys(z).concat(Object.keys(H)).filter(function(F) {
                     return -1 === O.indexOf(F)
                 });
                 return v.forEach(J, K),
                 A
             }
         }
         ,
         7522: (Q,I,C)=>{
             var v = C(7763);
             Q.exports = function(z, H, P) {
                 var K = P.config.validateStatus;
                 P.status && K && !K(P.status) ? H(v("Request failed with status code " + P.status, P.config, null, P.request, P)) : z(P)
             }
         }
         ,
         2881: (Q,I,C)=>{
             var v = C(9516)
               , z = C(6987);
             Q.exports = function(H, P, K) {
                 var A = this || z;
                 return v.forEach(K, function(J) {
                     H = J.call(A, H, P)
                 }),
                 H
             }
         }
         ,
         6987: (Q,I,C)=>{
             function v(w, u) {
                 !z.isUndefined(w) && z.isUndefined(w["Content-Type"]) && (w["Content-Type"] = u)
             }
             var z = C(9516), H = C(7018), P = C(5449), K = {
                 "Content-Type": "application/x-www-form-urlencoded"
             }, A, J = {
                 transitional: {
                     silentJSONParsing: !0,
                     forcedJSONParsing: !0,
                     clarifyTimeoutError: !1
                 },
                 adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (A = C(5592)),
                 A),
                 transformRequest: [function(w, u) {
                     H(u, "Accept");
                     H(u, "Content-Type");
                     if (!(z.isFormData(w) || z.isArrayBuffer(w) || z.isBuffer(w) || z.isStream(w) || z.isFile(w) || z.isBlob(w)))
                         if (z.isArrayBufferView(w))
                             w = w.buffer;
                         else if (z.isURLSearchParams(w))
                             w = (v(u, "application/x-www-form-urlencoded;charset\x3dutf-8"),
                             w.toString());
                         else if (z.isObject(w) || u && "application/json" === u["Content-Type"]) {
                             v(u, "application/json");
                             a: {
                                 if (z.isString(w))
                                     try {
                                         var L = ((0,
                                         JSON.parse)(w),
                                         z.trim(w));
                                         break a
                                     } catch (O) {
                                         if ("SyntaxError" !== O.name)
                                             throw O;
                                     }
                                 L = (0,
                                 JSON.stringify)(w)
                             }
                             w = L
                         }
                     return w
                 }
                 ],
                 transformResponse: [function(w) {
                     var u = this.transitional
                       , L = u && u.forcedJSONParsing;
                     if ((u = !(u && u.silentJSONParsing) && "json" === this.responseType) || L && z.isString(w) && w.length)
                         try {
                             return JSON.parse(w)
                         } catch (O) {
                             if (u) {
                                 if ("SyntaxError" === O.name)
                                     throw P(O, this, "E_JSON_PARSE");
                                 throw O;
                             }
                         }
                     return w
                 }
                 ],
                 timeout: 0,
                 xsrfCookieName: "XSRF-TOKEN",
                 xsrfHeaderName: "X-XSRF-TOKEN",
                 maxContentLength: -1,
                 maxBodyLength: -1,
                 validateStatus: function(w) {
                     return 200 <= w && 300 > w
                 },
                 headers: {
                     common: {
                         Accept: "application/json, text/plain, */*"
                     }
                 }
             };
             z.forEach(["delete", "get", "head"], function(w) {
                 J.headers[w] = {}
             });
             z.forEach(["post", "put", "patch"], function(w) {
                 J.headers[w] = z.merge(K)
             });
             Q.exports = J
         }
         ,
         9012: Q=>{
             Q.exports = function(I, C) {
                 return function() {
                     for (var v = Array(arguments.length), z = 0; z < v.length; z++)
                         v[z] = arguments[z];
                     return I.apply(C, v)
                 }
             }
         }
         ,
         9106: (Q,I,C)=>{
             function v(H) {
                 return encodeURIComponent(H).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
             }
             var z = C(9516);
             Q.exports = function(H, P, K) {
                 if (!P)
                     return H;
                 if (K)
                     P = K(P);
                 else if (z.isURLSearchParams(P))
                     P = P.toString();
                 else {
                     var A = [];
                     z.forEach(P, function(J, w) {
                         null != J && (z.isArray(J) ? w += "[]" : J = [J],
                         z.forEach(J, function(u) {
                             z.isDate(u) ? u = u.toISOString() : z.isObject(u) && (u = JSON.stringify(u));
                             A.push(v(w) + "\x3d" + v(u))
                         }))
                     });
                     P = A.join("\x26")
                 }
                 P && (K = H.indexOf("#"),
                 -1 !== K && (H = H.slice(0, K)),
                 H += (-1 === H.indexOf("?") ? "?" : "\x26") + P);
                 return H
             }
         }
         ,
         4680: Q=>{
             Q.exports = function(I, C) {
                 return C ? I.replace(/\/+$/, "") + "/" + C.replace(/^\/+/, "") : I
             }
         }
         ,
         3948: (Q,I,C)=>{
             var v = C(9516);
             Q.exports = v.isStandardBrowserEnv() ? {
                 write: function(z, H, P, K, A, J) {
                     var w = [];
                     w.push(z + "\x3d" + encodeURIComponent(H));
                     v.isNumber(P) && w.push("expires\x3d" + (new Date(P)).toGMTString());
                     v.isString(K) && w.push("path\x3d" + K);
                     v.isString(A) && w.push("domain\x3d" + A);
                     !0 === J && w.push("secure");
                     document.cookie = w.join("; ")
                 },
                 read: function(z) {
                     return (z = document.cookie.match(new RegExp("(^|;\\s*)(" + z + ")\x3d([^;]*)"))) ? decodeURIComponent(z[3]) : null
                 },
                 remove: function(z) {
                     this.write(z, "", Date.now() - 864E5)
                 }
             } : {
                 write: function() {},
                 read: function() {
                     return null
                 },
                 remove: function() {}
             }
         }
         ,
         9137: Q=>{
             Q.exports = function(I) {
                 return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(I)
             }
         }
         ,
         5019: Q=>{
             Q.exports = function(I) {
                 return "object" == typeof I && !0 === I.isAxiosError
             }
         }
         ,
         4202: (Q,I,C)=>{
             var v = C(9516);
             Q.exports = v.isStandardBrowserEnv() ? function() {
                 function z(A) {
                     return P && (K.setAttribute("href", A),
                     A = K.href),
                     K.setAttribute("href", A),
                     {
                         href: K.href,
                         protocol: K.protocol ? K.protocol.replace(/:$/, "") : "",
                         host: K.host,
                         search: K.search ? K.search.replace(/^\?/, "") : "",
                         hash: K.hash ? K.hash.replace(/^#/, "") : "",
                         hostname: K.hostname,
                         port: K.port,
                         pathname: "/" === K.pathname.charAt(0) ? K.pathname : "/" + K.pathname
                     }
                 }
                 var H, P = /(msie|trident)/i.test(navigator.userAgent), K = document.createElement("a");
                 return H = z(window.location.href),
                 function(A) {
                     A = v.isString(A) ? z(A) : A;
                     return A.protocol === H.protocol && A.host === H.host
                 }
             }() : function() {
                 return !0
             }
         }
         ,
         7018: (Q,I,C)=>{
             var v = C(9516);
             Q.exports = function(z, H) {
                 v.forEach(z, function(P, K) {
                     K !== H && K.toUpperCase() === H.toUpperCase() && (z[H] = P,
                     delete z[K])
                 })
             }
         }
         ,
         2012: (Q,I,C)=>{
             var v = C(9516)
               , z = "age authorization content-length content-type etag expires from host if-modified-since if-unmodified-since last-modified location max-forwards proxy-authorization referer retry-after user-agent".split(" ");
             Q.exports = function(H) {
                 var P, K, A, J = {};
                 return H ? (v.forEach(H.split("\n"), function(w) {
                     (A = w.indexOf(":"),
                     P = v.trim(w.substr(0, A)).toLowerCase(),
                     K = v.trim(w.substr(A + 1)),
                     !P) || J[P] && 0 <= z.indexOf(P) || (J[P] = "set-cookie" === P ? (J[P] ? J[P] : []).concat([K]) : J[P] ? J[P] + ", " + K : K)
                 }),
                 J) : J
             }
         }
         ,
         7980: Q=>{
             Q.exports = function(I) {
                 return function(C) {
                     return I.apply(null, C)
                 }
             }
         }
         ,
         4841: (Q,I,C)=>{
             function v(A, J) {
                 J = J ? J.split(".") : K;
                 A = A.split(".");
                 for (var w = 0; 3 > w; w++) {
                     if (J[w] > A[w])
                         return !0;
                     if (J[w] < A[w])
                         break
                 }
                 return !1
             }
             var z = C(4198)
               , H = {};
             "object boolean number function string symbol".split(" ").forEach(function(A, J) {
                 H[A] = function(w) {
                     return typeof w === A || "a" + (1 > J ? "n " : " ") + A
                 }
             });
             var P = {}
               , K = z.version.split(".");
             H.transitional = function(A, J, w) {
                 function u(O, F) {
                     return "[Axios v" + z.version + "] Transitional option '" + O + "'" + F + (w ? ". " + w : "")
                 }
                 var L = J && v(J);
                 return function(O, F, R) {
                     if (!1 === A)
                         throw Error(u(F, " has been removed in " + J));
                     return L && !P[F] && (P[F] = !0,
                     console.warn(u(F, " has been deprecated since v" + J + " and will be removed in the near future"))),
                     !A || A(O, F, R)
                 }
             }
             ;
             Q.exports = {
                 isOlderVersion: v,
                 assertOptions: function(A, J, w) {
                     if ("object" != typeof A)
                         throw new TypeError("options must be an object");
                     for (var u = Object.keys(A), L = u.length; 0 < L--; ) {
                         var O = u[L]
                           , F = J[O];
                         if (F) {
                             var R = A[O];
                             F = void 0 === R || F(R, O, A);
                             if (!0 !== F)
                                 throw new TypeError("option " + O + " must be " + F);
                         } else if (!0 !== w)
                             throw Error("Unknown option " + O);
                     }
                 },
                 validators: H
             }
         }
         ,
         9516: (Q,I,C)=>{
             function v(u) {
                 return "[object Array]" === w.call(u)
             }
             function z(u) {
                 return void 0 === u
             }
             function H(u) {
                 return null !== u && "object" == typeof u
             }
             function P(u) {
                 if ("[object Object]" !== w.call(u))
                     return !1;
                 u = Object.getPrototypeOf(u);
                 return null === u || u === Object.prototype
             }
             function K(u) {
                 return "[object Function]" === w.call(u)
             }
             function A(u, L) {
                 if (null != u)
                     if ("object" != typeof u && (u = [u]),
                     v(u))
                         for (var O = 0, F = u.length; O < F; O++)
                             L.call(null, u[O], O, u);
                     else
                         for (O in u)
                             Object.prototype.hasOwnProperty.call(u, O) && L.call(null, u[O], O, u)
             }
             var J = C(9012)
               , w = Object.prototype.toString;
             Q.exports = {
                 isArray: v,
                 isArrayBuffer: function(u) {
                     return "[object ArrayBuffer]" === w.call(u)
                 },
                 isBuffer: function(u) {
                     return null !== u && !z(u) && null !== u.constructor && !z(u.constructor) && "function" == typeof u.constructor.isBuffer && u.constructor.isBuffer(u)
                 },
                 isFormData: function(u) {
                     return "undefined" != typeof FormData && u instanceof FormData
                 },
                 isArrayBufferView: function(u) {
                     return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(u) : u && u.buffer && u.buffer instanceof ArrayBuffer
                 },
                 isString: function(u) {
                     return "string" == typeof u
                 },
                 isNumber: function(u) {
                     return "number" == typeof u
                 },
                 isObject: H,
                 isPlainObject: P,
                 isUndefined: z,
                 isDate: function(u) {
                     return "[object Date]" === w.call(u)
                 },
                 isFile: function(u) {
                     return "[object File]" === w.call(u)
                 },
                 isBlob: function(u) {
                     return "[object Blob]" === w.call(u)
                 },
                 isFunction: K,
                 isStream: function(u) {
                     return H(u) && K(u.pipe)
                 },
                 isURLSearchParams: function(u) {
                     return "undefined" != typeof URLSearchParams && u instanceof URLSearchParams
                 },
                 isStandardBrowserEnv: function() {
                     return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                 },
                 forEach: A,
                 merge: function L() {
                     function O(S, N) {
                         P(F[N]) && P(S) ? F[N] = L(F[N], S) : P(S) ? F[N] = L({}, S) : v(S) ? F[N] = S.slice() : F[N] = S
                     }
                     for (var F = {}, R = 0, U = arguments.length; R < U; R++)
                         A(arguments[R], O);
                     return F
                 },
                 extend: function(L, O, F) {
                     return A(O, function(R, U) {
                         L[U] = F && "function" == typeof R ? J(R, F) : R
                     }),
                     L
                 },
                 trim: function(L) {
                     return L.trim ? L.trim() : L.replace(/^\s+|\s+$/g, "")
                 },
                 stripBOM: function(L) {
                     return 65279 === L.charCodeAt(0) && (L = L.slice(1)),
                     L
                 }
             }
         }
         ,
         4146: (Q,I,C)=>{
             function v(R) {
                 return z.isMemo(R) ? K : A[R.$$typeof] || H
             }
             var z = C(4363)
               , H = {
                 childContextTypes: !0,
                 contextType: !0,
                 contextTypes: !0,
                 defaultProps: !0,
                 displayName: !0,
                 getDefaultProps: !0,
                 getDerivedStateFromError: !0,
                 getDerivedStateFromProps: !0,
                 mixins: !0,
                 propTypes: !0,
                 type: !0
             }
               , P = {
                 name: !0,
                 length: !0,
                 prototype: !0,
                 caller: !0,
                 callee: !0,
                 arguments: !0,
                 arity: !0
             }
               , K = {
                 $$typeof: !0,
                 compare: !0,
                 defaultProps: !0,
                 displayName: !0,
                 propTypes: !0,
                 type: !0
             }
               , A = {};
             A[z.ForwardRef] = {
                 $$typeof: !0,
                 render: !0,
                 defaultProps: !0,
                 displayName: !0,
                 propTypes: !0
             };
             var J = Object.defineProperty
               , w = Object.getOwnPropertyNames
               , u = Object.getOwnPropertySymbols
               , L = Object.getOwnPropertyDescriptor
               , O = Object.getPrototypeOf
               , F = Object.prototype;
             Q.exports = function ba(U, S, N) {
                 if ("string" != typeof S) {
                     if (F) {
                         var na = O(S);
                         na && na !== F && ba(U, na, N)
                     }
                     na = w(S);
                     u && (na = na.concat(u(S)));
                     for (var ea = v(U), ka = v(S), ha = 0; ha < na.length; ++ha) {
                         var aa = na[ha];
                         if (!(P[aa] || N && N[aa] || ka && ka[aa] || ea && ea[aa])) {
                             var sa = L(S, aa);
                             try {
                                 J(U, aa, sa)
                             } catch (Na) {}
                         }
                     }
                 }
                 return U
             }
         }
         ,
         311: Q=>{
             Q.exports = function(I, C, v, z, H, P, K, A) {
                 if (!I) {
                     if (void 0 === C)
                         I = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                     else {
                         var J = [v, z, H, P, K, A]
                           , w = 0;
                         (I = Error(C.replace(/%s/g, function() {
                             return J[w++]
                         }))).name = "Invariant Violation"
                     }
                     throw I.framesToPop = 1,
                     I;
                 }
             }
         }
         ,
         1111: Q=>{
             var I = "ETIMEDOUT ECONNRESET EADDRINUSE ESOCKETTIMEDOUT ECONNREFUSED EPIPE EHOSTUNREACH EAI_AGAIN".split(" ")
               , C = "ENOTFOUND ENETUNREACH UNABLE_TO_GET_ISSUER_CERT UNABLE_TO_GET_CRL UNABLE_TO_DECRYPT_CERT_SIGNATURE UNABLE_TO_DECRYPT_CRL_SIGNATURE UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY CERT_SIGNATURE_FAILURE CRL_SIGNATURE_FAILURE CERT_NOT_YET_VALID CERT_HAS_EXPIRED CRL_NOT_YET_VALID CRL_HAS_EXPIRED ERROR_IN_CERT_NOT_BEFORE_FIELD ERROR_IN_CERT_NOT_AFTER_FIELD ERROR_IN_CRL_LAST_UPDATE_FIELD ERROR_IN_CRL_NEXT_UPDATE_FIELD OUT_OF_MEM DEPTH_ZERO_SELF_SIGNED_CERT SELF_SIGNED_CERT_IN_CHAIN UNABLE_TO_GET_ISSUER_CERT_LOCALLY UNABLE_TO_VERIFY_LEAF_SIGNATURE CERT_CHAIN_TOO_LONG CERT_REVOKED INVALID_CA PATH_LENGTH_EXCEEDED INVALID_PURPOSE CERT_UNTRUSTED CERT_REJECTED".split(" ");
             Q.exports = function(v) {
                 return !v || !v.code || -1 !== I.indexOf(v.code) || -1 === C.indexOf(v.code)
             }
         }
         ,
         5228: Q=>{
             var I = Object.getOwnPropertySymbols
               , C = Object.prototype.hasOwnProperty
               , v = Object.prototype.propertyIsEnumerable;
             Q.exports = function() {
                 try {
                     if (!Object.assign)
                         return !1;
                     var z = new String("abc");
                     if (z[5] = "de",
                     "5" === Object.getOwnPropertyNames(z)[0])
                         return !1;
                     var H = {};
                     for (z = 0; 10 > z; z++)
                         H["_" + String.fromCharCode(z)] = z;
                     if ("0123456789" !== Object.getOwnPropertyNames(H).map(function(K) {
                         return H[K]
                     }).join(""))
                         return !1;
                     var P = {};
                     return "abcdefghijklmnopqrst".split("").forEach(function(K) {
                         P[K] = K
                     }),
                     "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, P)).join("")
                 } catch (K) {
                     return !1
                 }
             }() ? Object.assign : function(z, H) {
                 var P;
                 if (null == z)
                     throw new TypeError("Object.assign cannot be called with null or undefined");
                 var K = Object(z);
                 for (var A = 1; A < arguments.length; A++) {
                     for (var J in P = Object(arguments[A]))
                         C.call(P, J) && (K[J] = P[J]);
                     if (I) {
                         var w = I(P);
                         for (var u = 0; u < w.length; u++)
                             v.call(P, w[u]) && (K[w[u]] = P[w[u]])
                     }
                 }
                 return K
             }
         }
         ,
         2694: (Q,I,C)=>{
             function v() {}
             function z() {}
             var H = C(6925);
             z.resetWarningCache = v;
             Q.exports = function() {
                 function P(J, w, u, L, O, F) {
                     if (F !== H)
                         throw J = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"),
                         J.name = "Invariant Violation",
                         J;
                 }
                 function K() {
                     return P
                 }
                 P.isRequired = P;
                 var A = {
                     array: P,
                     bool: P,
                     func: P,
                     number: P,
                     object: P,
                     string: P,
                     symbol: P,
                     any: P,
                     arrayOf: K,
                     element: P,
                     elementType: P,
                     instanceOf: K,
                     node: P,
                     objectOf: K,
                     oneOf: K,
                     oneOfType: K,
                     shape: K,
                     exact: K,
                     checkPropTypes: z,
                     resetWarningCache: v
                 };
                 return A.PropTypes = A,
                 A
             }
         }
         ,
         5556: (Q,I,C)=>{
             Q.exports = C(2694)()
         }
         ,
         6925: Q=>{
             Q.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
         }
         ,
         2551: (Q,I,C)=>{
             function v(a) {
                 for (var b = a.message, h = "https://reactjs.org/docs/error-decoder.html?invariant\x3d" + b, l = 1; l < arguments.length; l++)
                     h += "\x26args[]\x3d" + encodeURIComponent(arguments[l]);
                 return a.message = "Minified React error #" + b + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
                 a
             }
             function z() {
                 if (te)
                     for (var a in hd) {
                         var b = hd[a]
                           , h = te.indexOf(a);
                         if (!(-1 < h))
                             throw v(Error(96), a);
                         if (!ue[h]) {
                             if (!b.extractEvents)
                                 throw v(Error(97), a);
                             for (var l in ue[h] = b,
                             h = b.eventTypes) {
                                 var m = void 0
                                   , t = h[l]
                                   , x = b
                                   , B = l;
                                 if (pf.hasOwnProperty(B))
                                     throw v(Error(99), B);
                                 pf[B] = t;
                                 var M = t.phasedRegistrationNames;
                                 if (M) {
                                     for (m in M)
                                         M.hasOwnProperty(m) && H(M[m], x, B);
                                     m = !0
                                 } else
                                     t.registrationName ? (H(t.registrationName, x, B),
                                     m = !0) : m = !1;
                                 if (!m)
                                     throw v(Error(98), l, a);
                             }
                         }
                     }
             }
             function H(a, b, h) {
                 if (pc[a])
                     throw v(Error(100), a);
                 pc[a] = b;
                 qf[a] = b.eventTypes[h].dependencies
             }
             function P(a, b, h, l, m, t, x, B, M) {
                 var V = Array.prototype.slice.call(arguments, 3);
                 try {
                     b.apply(h, V)
                 } catch (la) {
                     this.onError(la)
                 }
             }
             function K(a, b, h, l, m, t, x, B, M) {
                 Xb = !1;
                 ve = null;
                 P.apply(rf, arguments)
             }
             function A(a, b, h) {
                 var l = a.type || "unknown-event";
                 a.currentTarget = Hg(h);
                 (function(m, t, x, B, M, V, la, Ha, La) {
                     if (K.apply(this, arguments),
                     Xb) {
                         if (!Xb)
                             throw v(Error(198));
                         var Ra = ve;
                         Xb = !1;
                         ve = null;
                         Fd || (Fd = !0,
                         sf = Ra)
                     }
                 }
                 )(l, b, void 0, a);
                 a.currentTarget = null
             }
             function J(a, b) {
                 if (null == b)
                     throw v(Error(30));
                 return null == a ? b : Array.isArray(a) ? Array.isArray(b) ? (a.push.apply(a, b),
                 a) : (a.push(b),
                 a) : Array.isArray(b) ? [a].concat(b) : [a, b]
             }
             function w(a, b, h) {
                 Array.isArray(a) ? a.forEach(b, h) : a && b.call(h, a)
             }
             function u(a) {
                 if (a) {
                     var b = a._dispatchListeners
                       , h = a._dispatchInstances;
                     if (Array.isArray(b))
                         for (var l = 0; l < b.length && !a.isPropagationStopped(); l++)
                             A(a, b[l], h[l]);
                     else
                         b && A(a, b, h);
                     a._dispatchListeners = null;
                     a._dispatchInstances = null;
                     a.isPersistent() || a.constructor.release(a)
                 }
             }
             function L(a) {
                 if (null !== a && (Gd = J(Gd, a)),
                 a = Gd,
                 Gd = null,
                 a) {
                     if (w(a, u),
                     Gd)
                         throw v(Error(95));
                     if (Fd)
                         throw a = sf,
                         Fd = !1,
                         sf = null,
                         a;
                 }
             }
             function O(a, b) {
                 var h = a.stateNode;
                 if (!h)
                     return null;
                 var l = id(h);
                 if (!l)
                     return null;
                 h = l[b];
                 a: switch (b) {
                 case "onClick":
                 case "onClickCapture":
                 case "onDoubleClick":
                 case "onDoubleClickCapture":
                 case "onMouseDown":
                 case "onMouseDownCapture":
                 case "onMouseMove":
                 case "onMouseMoveCapture":
                 case "onMouseUp":
                 case "onMouseUpCapture":
                     (l = !l.disabled) || (l = !("button" === (a = a.type) || "input" === a || "select" === a || "textarea" === a));
                     a = !l;
                     break a;
                 default:
                     a = !1
                 }
                 if (a)
                     return null;
                 if (h && "function" != typeof h)
                     throw v(Error(231), b, typeof h);
                 return h
             }
             function F(a) {
                 if (a[fc])
                     return a[fc];
                 for (; !a[fc]; ) {
                     if (!a.parentNode)
                         return null;
                     a = a.parentNode
                 }
                 return 5 === (a = a[fc]).tag || 6 === a.tag ? a : null
             }
             function R(a) {
                 return !(a = a[fc]) || 5 !== a.tag && 6 !== a.tag ? null : a
             }
             function U(a) {
                 if (5 === a.tag || 6 === a.tag)
                     return a.stateNode;
                 throw v(Error(33));
             }
             function S(a) {
                 return a[we] || null
             }
             function N(a) {
                 do
                     a = a.return;
                 while (a && 5 !== a.tag);
                 return a || null
             }
             function ba(a, b, h) {
                 (b = O(a, h.dispatchConfig.phasedRegistrationNames[b])) && (h._dispatchListeners = J(h._dispatchListeners, b),
                 h._dispatchInstances = J(h._dispatchInstances, a))
             }
             function na(a) {
                 if (a && a.dispatchConfig.phasedRegistrationNames) {
                     for (var b = a._targetInst, h = []; b; )
                         h.push(b),
                         b = N(b);
                     for (b = h.length; 0 < b--; )
                         ba(h[b], "captured", a);
                     for (b = 0; b < h.length; b++)
                         ba(h[b], "bubbled", a)
                 }
             }
             function ea(a, b, h) {
                 a && h && h.dispatchConfig.registrationName && (b = O(a, h.dispatchConfig.registrationName)) && (h._dispatchListeners = J(h._dispatchListeners, b),
                 h._dispatchInstances = J(h._dispatchInstances, a))
             }
             function ka(a) {
                 a && a.dispatchConfig.registrationName && ea(a._targetInst, null, a)
             }
             function ha(a) {
                 w(a, na)
             }
             function aa(a, b) {
                 var h = {};
                 return h[a.toLowerCase()] = b.toLowerCase(),
                 h["Webkit" + a] = "webkit" + b,
                 h["Moz" + a] = "moz" + b,
                 h
             }
             function sa(a) {
                 if (tf[a])
                     return tf[a];
                 if (!jd[a])
                     return a;
                 var b, h = jd[a];
                 for (b in h)
                     if (h.hasOwnProperty(b) && b in Ig)
                         return tf[a] = h[b];
                 return a
             }
             function Na() {
                 if (xe)
                     return xe;
                 var a, b, h = uf, l = h.length, m = "value"in Lc ? Lc.value : Lc.textContent, t = m.length;
                 for (a = 0; a < l && h[a] === m[a]; a++)
                     ;
                 var x = l - a;
                 for (b = 1; b <= x && h[l - b] === m[t - b]; b++)
                     ;
                 return xe = m.slice(a, 1 < b ? 1 - b : void 0)
             }
             function bb() {
                 return !0
             }
             function gb() {
                 return !1
             }
             function cb(a, b, h, l) {
                 for (var m in this.dispatchConfig = a,
                 this._targetInst = b,
                 this.nativeEvent = h,
                 a = this.constructor.Interface)
                     a.hasOwnProperty(m) && ((b = a[m]) ? this[m] = b(h) : "target" === m ? this.target = l : this[m] = h[m]);
                 return this.isDefaultPrevented = (null != h.defaultPrevented ? h.defaultPrevented : !1 === h.returnValue) ? bb : gb,
                 this.isPropagationStopped = gb,
                 this
             }
             function vb(a, b, h, l) {
                 if (this.eventPool.length) {
                     var m = this.eventPool.pop();
                     return this.call(m, a, b, h, l),
                     m
                 }
                 return new this(a,b,h,l)
             }
             function Rb(a) {
                 if (!(a instanceof this))
                     throw v(Error(279));
                 a.destructor();
                 10 > this.eventPool.length && this.eventPool.push(a)
             }
             function rb(a) {
                 a.eventPool = [];
                 a.getPooled = vb;
                 a.release = Rb
             }
             function Ea(a, b) {
                 switch (a) {
                 case "keyup":
                     return -1 !== Jg.indexOf(b.keyCode);
                 case "keydown":
                     return 229 !== b.keyCode;
                 case "keypress":
                 case "mousedown":
                 case "blur":
                     return !0;
                 default:
                     return !1
                 }
             }
             function Pa(a) {
                 return "object" == typeof (a = a.detail) && "data"in a ? a.data : null
             }
             function wb(a) {
                 if (a = Kg(a)) {
                     if ("function" != typeof Ib)
                         throw v(Error(280));
                     var b = id(a.stateNode);
                     Ib(a.stateNode, a.type, b)
                 }
             }
             function ia(a) {
                 Mc ? Nc ? Nc.push(a) : Nc = [a] : Mc = a
             }
             function n() {
                 if (Mc) {
                     var a = Mc
                       , b = Nc;
                     if (Nc = Mc = null,
                     wb(a),
                     b)
                         for (a = 0; a < b.length; a++)
                             wb(b[a])
                 }
             }
             function xb(a, b) {
                 return a(b)
             }
             function jb(a, b, h, l) {
                 return a(b, h, l)
             }
             function D() {}
             function W() {
                 null === Mc && null === Nc || (D(),
                 n())
             }
             function fa(a) {
                 var b = a && a.nodeName && a.nodeName.toLowerCase();
                 return "input" === b ? !!hi[a.type] : "textarea" === b
             }
             function pa(a) {
                 return (a = a.target || a.srcElement || window).correspondingUseElement && (a = a.correspondingUseElement),
                 3 === a.nodeType ? a.parentNode : a
             }
             function ua(a) {
                 if (!qc)
                     return !1;
                 var b = (a = "on" + a)in document;
                 return b || ((b = document.createElement("div")).setAttribute(a, "return;"),
                 b = "function" == typeof b[a]),
                 b
             }
             function za(a) {
                 var b = a.type;
                 return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b)
             }
             function Qa(a) {
                 a._valueTracker || (a._valueTracker = function(b) {
                     var h = za(b) ? "checked" : "value"
                       , l = Object.getOwnPropertyDescriptor(b.constructor.prototype, h)
                       , m = "" + b[h];
                     if (!b.hasOwnProperty(h) && void 0 !== l && "function" == typeof l.get && "function" == typeof l.set) {
                         var t = l.get
                           , x = l.set;
                         return Object.defineProperty(b, h, {
                             configurable: !0,
                             get: function() {
                                 return t.call(this)
                             },
                             set: function(B) {
                                 m = "" + B;
                                 x.call(this, B)
                             }
                         }),
                         Object.defineProperty(b, h, {
                             enumerable: l.enumerable
                         }),
                         {
                             getValue: function() {
                                 return m
                             },
                             setValue: function(B) {
                                 m = "" + B
                             },
                             stopTracking: function() {
                                 b._valueTracker = null;
                                 delete b[h]
                             }
                         }
                     }
                 }(a))
             }
             function Ta(a) {
                 if (!a)
                     return !1;
                 var b = a._valueTracker;
                 if (!b)
                     return !0;
                 var h = b.getValue()
                   , l = "";
                 return a && (l = za(a) ? a.checked ? "true" : "false" : a.value),
                 (a = l) !== h && (b.setValue(a),
                 !0)
             }
             function hb(a) {
                 return null === a || "object" != typeof a ? null : "function" == typeof (a = Lg && a[Lg] || a["@@iterator"]) ? a : null
             }
             function $a(a) {
                 if (null == a)
                     return null;
                 if ("function" == typeof a)
                     return a.displayName || a.name || null;
                 if ("string" == typeof a)
                     return a;
                 switch (a) {
                 case rc:
                     return "Fragment";
                 case kd:
                     return "Portal";
                 case ye:
                     return "Profiler";
                 case Mg:
                     return "StrictMode";
                 case Hd:
                     return "Suspense";
                 case vf:
                     return "SuspenseList"
                 }
                 if ("object" == typeof a)
                     switch (a.$$typeof) {
                     case wf:
                         return "Context.Consumer";
                     case Id:
                         return "Context.Provider";
                     case xf:
                         var b = a.render;
                         return b = b.displayName || b.name || "",
                         a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");
                     case yf:
                         return $a(a.type);
                     case zf:
                         if (a = 1 === a._status ? a._result : null)
                             return $a(a)
                     }
                 return null
             }
             function Af(a) {
                 var b = "";
                 do {
                     a: switch (a.tag) {
                     case 3:
                     case 4:
                     case 6:
                     case 7:
                     case 10:
                     case 9:
                         var h = "";
                         break a;
                     default:
                         var l = a._debugOwner
                           , m = a._debugSource
                           , t = $a(a.type);
                         h = null;
                         l && (h = $a(l.type));
                         l = t;
                         t = "";
                         m ? t = " (at " + m.fileName.replace(Jd, "") + ":" + m.lineNumber + ")" : h && (t = " (created by " + h + ")");
                         h = "\n    in " + (l || "Unknown") + t
                     }
                     b += h;
                     a = a.return
                 } while (a);
                 return b
             }
             function Db(a, b, h, l, m, t) {
                 this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
                 this.attributeName = l;
                 this.attributeNamespace = m;
                 this.mustUseProperty = h;
                 this.propertyName = a;
                 this.type = b;
                 this.sanitizeURL = t
             }
             function Bf(a) {
                 return a[1].toUpperCase()
             }
             function Cf(a, b, h, l) {
                 var m = sb.hasOwnProperty(b) ? sb[b] : null;
                 (null !== m ? 0 === m.type : !l && 2 < b.length && ("o" === b[0] || "O" === b[0]) && ("n" === b[1] || "N" === b[1])) || (function(t, x, B, M) {
                     var V;
                     if (!(V = null == x))
                         a: if (null !== B && 0 === B.type)
                             V = !1;
                         else
                             switch (typeof x) {
                             case "function":
                             case "symbol":
                                 V = !0;
                                 break a;
                             case "boolean":
                                 V = !M && (null !== B ? !B.acceptsBooleans : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t);
                                 break a;
                             default:
                                 V = !1
                             }
                     if (V)
                         return !0;
                     if (M)
                         return !1;
                     if (null !== B)
                         switch (B.type) {
                         case 3:
                             return !x;
                         case 4:
                             return !1 === x;
                         case 5:
                             return isNaN(x);
                         case 6:
                             return isNaN(x) || 1 > x
                         }
                     return !1
                 }(b, h, m, l) && (h = null),
                 l || null === m ? function(t) {
                     return !!Df.call(Ng, t) || !Df.call(Og, t) && (ii.test(t) ? Ng[t] = !0 : (Og[t] = !0,
                     !1))
                 }(b) && (null === h ? a.removeAttribute(b) : a.setAttribute(b, "" + h)) : m.mustUseProperty ? a[m.propertyName] = null === h ? 3 !== m.type && "" : h : (b = m.attributeName,
                 l = m.attributeNamespace,
                 null === h ? a.removeAttribute(b) : (h = 3 === (m = m.type) || 4 === m && !0 === h ? "" : "" + h,
                 l ? a.setAttributeNS(l, b, h) : a.setAttribute(b, h))))
             }
             function gc(a) {
                 switch (typeof a) {
                 case "boolean":
                 case "number":
                 case "object":
                 case "string":
                 case "undefined":
                     return a;
                 default:
                     return ""
                 }
             }
             function Kd(a, b) {
                 var h = b.checked;
                 return Eb({}, b, {
                     defaultChecked: void 0,
                     defaultValue: void 0,
                     value: void 0,
                     checked: null != h ? h : a._wrapperState.initialChecked
                 })
             }
             function ld(a, b) {
                 var h = null == b.defaultValue ? "" : b.defaultValue
                   , l = null != b.checked ? b.checked : b.defaultChecked;
                 h = gc(null != b.value ? b.value : h);
                 a._wrapperState = {
                     initialChecked: l,
                     initialValue: h,
                     controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
                 }
             }
             function Pg(a, b) {
                 null != (b = b.checked) && Cf(a, "checked", b, !1)
             }
             function Ef(a, b) {
                 Pg(a, b);
                 var h = gc(b.value)
                   , l = b.type;
                 if (null != h)
                     "number" === l ? (0 === h && "" === a.value || a.value != h) && (a.value = "" + h) : a.value !== "" + h && (a.value = "" + h);
                 else if ("submit" === l || "reset" === l)
                     return void a.removeAttribute("value");
                 b.hasOwnProperty("value") ? Ka(a, b.type, h) : b.hasOwnProperty("defaultValue") && Ka(a, b.type, gc(b.defaultValue));
                 null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked)
             }
             function Qg(a, b, h) {
                 if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
                     var l = b.type;
                     if (!("submit" !== l && "reset" !== l || void 0 !== b.value && null !== b.value))
                         return;
                     b = "" + a._wrapperState.initialValue;
                     h || b === a.value || (a.value = b);
                     a.defaultValue = b
                 }
                 "" !== (h = a.name) && (a.name = "");
                 a.defaultChecked = !a.defaultChecked;
                 a.defaultChecked = !!a._wrapperState.initialChecked;
                 "" !== h && (a.name = h)
             }
             function Ka(a, b, h) {
                 "number" === b && a.ownerDocument.activeElement === a || (null == h ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + h && (a.defaultValue = "" + h))
             }
             function Ff(a, b, h) {
                 return (a = cb.getPooled(Rg.change, a, b, h)).type = "change",
                 ia(h),
                 ha(a),
                 a
             }
             function Ld(a) {
                 L(a)
             }
             function md(a) {
                 if (Ta(U(a)))
                     return a
             }
             function Sg(a, b) {
                 if ("change" === a)
                     return b
             }
             function ze() {
                 Ae && (Ae.detachEvent("onpropertychange", Gf),
                 Md = Ae = null)
             }
             function Gf(a) {
                 if ("value" === a.propertyName && md(Md))
                     if (a = Ff(Md, a, pa(a)),
                     Yb)
                         L(a);
                     else {
                         Yb = !0;
                         try {
                             xb(Ld, a)
                         } finally {
                             Yb = !1,
                             W()
                         }
                     }
             }
             function Hf(a, b, h) {
                 "focus" === a ? (ze(),
                 Md = h,
                 (Ae = b).attachEvent("onpropertychange", Gf)) : "blur" === a && ze()
             }
             function Tg(a) {
                 if ("selectionchange" === a || "keyup" === a || "keydown" === a)
                     return md(Md)
             }
             function If(a, b) {
                 if ("click" === a)
                     return md(b)
             }
             function Ug(a, b) {
                 if ("input" === a || "change" === a)
                     return md(b)
             }
             function Jf(a) {
                 var b = this.nativeEvent;
                 return b.getModifierState ? b.getModifierState(a) : !!(a = ji[a]) && !!b[a]
             }
             function Be() {
                 return Jf
             }
             function Oc(a, b) {
                 return a === b && (0 !== a || 1 / a == 1 / b) || a != a && b != b
             }
             function Nd(a, b) {
                 if (Oc(a, b))
                     return !0;
                 if ("object" != typeof a || null === a || "object" != typeof b || null === b)
                     return !1;
                 var h = Object.keys(a)
                   , l = Object.keys(b);
                 if (h.length !== l.length)
                     return !1;
                 for (l = 0; l < h.length; l++)
                     if (!ki.call(b, h[l]) || !Oc(a[h[l]], b[h[l]]))
                         return !1;
                 return !0
             }
             function Kf(a, b) {
                 return {
                     responder: a,
                     props: b
                 }
             }
             function Ma(a) {
                 var b = a;
                 if (a.alternate)
                     for (; b.return; )
                         b = b.return;
                 else {
                     if (2 & b.effectTag)
                         return 1;
                     for (; b.return; )
                         if (2 & (b = b.return).effectTag)
                             return 1
                 }
                 return 3 === b.tag ? 2 : 3
             }
             function Ce(a) {
                 if (2 !== Ma(a))
                     throw v(Error(188));
             }
             function Lf(a) {
                 if (a = function(h) {
                     var l = h.alternate;
                     if (!l) {
                         if (3 === (l = Ma(h)))
                             throw v(Error(188));
                         return 1 === l ? null : h
                     }
                     for (var m = h, t = l; ; ) {
                         var x = m.return;
                         if (null === x)
                             break;
                         var B = x.alternate;
                         if (null === B) {
                             if (null !== (t = x.return)) {
                                 m = t;
                                 continue
                             }
                             break
                         }
                         if (x.child === B.child) {
                             for (B = x.child; B; ) {
                                 if (B === m)
                                     return Ce(x),
                                     h;
                                 if (B === t)
                                     return Ce(x),
                                     l;
                                 B = B.sibling
                             }
                             throw v(Error(188));
                         }
                         if (m.return !== t.return)
                             m = x,
                             t = B;
                         else {
                             for (var M = !1, V = x.child; V; ) {
                                 if (V === m) {
                                     M = !0;
                                     m = x;
                                     t = B;
                                     break
                                 }
                                 if (V === t) {
                                     M = !0;
                                     t = x;
                                     m = B;
                                     break
                                 }
                                 V = V.sibling
                             }
                             if (!M) {
                                 for (V = B.child; V; ) {
                                     if (V === m) {
                                         M = !0;
                                         m = B;
                                         t = x;
                                         break
                                     }
                                     if (V === t) {
                                         M = !0;
                                         t = B;
                                         m = x;
                                         break
                                     }
                                     V = V.sibling
                                 }
                                 if (!M)
                                     throw v(Error(189));
                             }
                         }
                         if (m.alternate !== t)
                             throw v(Error(190));
                     }
                     if (3 !== m.tag)
                         throw v(Error(188));
                     return m.stateNode.current === m ? h : l
                 }(a),
                 !a)
                     return null;
                 for (var b = a; ; ) {
                     if (5 === b.tag || 6 === b.tag)
                         return b;
                     if (b.child)
                         b.child.return = b,
                         b = b.child;
                     else {
                         if (b === a)
                             break;
                         for (; !b.sibling; ) {
                             if (!b.return || b.return === a)
                                 return null;
                             b = b.return
                         }
                         b.sibling.return = b.return;
                         b = b.sibling
                     }
                 }
                 return null
             }
             function De(a) {
                 var b = a.keyCode;
                 return "charCode"in a ? 0 === (a = a.charCode) && 13 === b && (a = 13) : a = b,
                 10 === a && (a = 13),
                 32 <= a || 13 === a ? a : 0
             }
             function Vg(a) {
                 var b = a.targetInst
                   , h = b;
                 do {
                     if (!h) {
                         a.ancestors.push(h);
                         break
                     }
                     var l;
                     for (l = h; l.return; )
                         l = l.return;
                     if (!(l = 3 !== l.tag ? null : l.stateNode.containerInfo))
                         break;
                     a.ancestors.push(h);
                     h = F(l)
                 } while (h);
                 for (h = 0; h < a.ancestors.length; h++) {
                     b = a.ancestors[h];
                     var m = pa(a.nativeEvent);
                     l = a.topLevelType;
                     for (var t = a.nativeEvent, x = null, B = 0; B < ue.length; B++) {
                         var M = ue[B];
                         M && (M = M.extractEvents(l, b, t, m)) && (x = J(x, M))
                     }
                     L(x)
                 }
             }
             function db(a, b) {
                 Od(b, a, !1)
             }
             function Od(a, b, h) {
                 switch (Wg(b)) {
                 case 0:
                     var l = li.bind(null, b, 1);
                     break;
                 case 1:
                     l = mi.bind(null, b, 1);
                     break;
                 default:
                     l = ob.bind(null, b, 1)
                 }
                 h ? a.addEventListener(b, l, !0) : a.addEventListener(b, l, !1)
             }
             function li(a, b, h) {
                 Yb || D();
                 var l = ob
                   , m = Yb;
                 Yb = !0;
                 try {
                     jb(l, a, b, h)
                 } finally {
                     (Yb = m) || W()
                 }
             }
             function mi(a, b, h) {
                 ob(a, b, h)
             }
             function ob(a, b, h) {
                 if (Pd) {
                     if (null === (b = F(b = pa(h))) || "number" != typeof b.tag || 2 === Ma(b) || (b = null),
                     Qd.length) {
                         var l = Qd.pop();
                         l.topLevelType = a;
                         l.nativeEvent = h;
                         l.targetInst = b;
                         a = l
                     } else
                         a = {
                             topLevelType: a,
                             nativeEvent: h,
                             targetInst: b,
                             ancestors: []
                         };
                     try {
                         if (h = a,
                         Yb)
                             Vg(h);
                         else {
                             Yb = !0;
                             try {
                                 Mf(Vg, h, void 0)
                             } finally {
                                 Yb = !1,
                                 W()
                             }
                         }
                     } finally {
                         a.topLevelType = null,
                         a.nativeEvent = null,
                         a.targetInst = null,
                         a.ancestors.length = 0,
                         10 > Qd.length && Qd.push(a)
                     }
                 }
             }
             function Nf(a) {
                 var b = Xg.get(a);
                 return void 0 === b && (b = new Set,
                 Xg.set(a, b)),
                 b
             }
             function Ee(a) {
                 if (void 0 === (a = a || ("undefined" != typeof document ? document : void 0)))
                     return null;
                 try {
                     return a.activeElement || a.body
                 } catch (b) {
                     return a.body
                 }
             }
             function Rd(a) {
                 for (; a && a.firstChild; )
                     a = a.firstChild;
                 return a
             }
             function Of(a, b) {
                 var h, l = Rd(a);
                 for (a = 0; l; ) {
                     if (3 === l.nodeType) {
                         if (h = a + l.textContent.length,
                         a <= b && h >= b)
                             return {
                                 node: l,
                                 offset: b - a
                             };
                         a = h
                     }
                     a: {
                         for (; l; ) {
                             if (l.nextSibling) {
                                 l = l.nextSibling;
                                 break a
                             }
                             l = l.parentNode
                         }
                         l = void 0
                     }
                     l = Rd(l)
                 }
             }
             function Pf(a, b) {
                 return !(!a || !b) && (a === b || (!a || 3 !== a.nodeType) && (b && 3 === b.nodeType ? Pf(a, b.parentNode) : "contains"in a ? a.contains(b) : !!a.compareDocumentPosition && !!(16 & a.compareDocumentPosition(b))))
             }
             function Qf() {
                 for (var a = window, b = Ee(); b instanceof a.HTMLIFrameElement; ) {
                     try {
                         var h = "string" == typeof b.contentWindow.location.href
                     } catch (l) {
                         h = !1
                     }
                     if (!h)
                         break;
                     b = Ee((a = b.contentWindow).document)
                 }
                 return b
             }
             function Fe(a) {
                 var b = a && a.nodeName && a.nodeName.toLowerCase();
                 return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable)
             }
             function hc(a, b) {
                 var h = b.window === b ? b.document : 9 === b.nodeType ? b : b.ownerDocument;
                 return Rf || null == nd || nd !== Ee(h) ? null : ("selectionStart"in (h = nd) && Fe(h) ? h = {
                     start: h.selectionStart,
                     end: h.selectionEnd
                 } : h = {
                     anchorNode: (h = (h.ownerDocument && h.ownerDocument.defaultView || window).getSelection()).anchorNode,
                     anchorOffset: h.anchorOffset,
                     focusNode: h.focusNode,
                     focusOffset: h.focusOffset
                 },
                 od && Nd(od, h) ? null : (od = h,
                 (a = cb.getPooled(kb.select, Pc, a, b)).type = "select",
                 a.target = nd,
                 ha(a),
                 a))
             }
             function pd(a, b) {
                 return a = Eb({
                     children: void 0
                 }, b),
                 (b = function(h) {
                     var l = "";
                     return Ge.Children.forEach(h, function(m) {
                         null != m && (l += m)
                     }),
                     l
                 }(b.children)) && (a.children = b),
                 a
             }
             function sc(a, b, h, l) {
                 if (a = a.options,
                 b) {
                     b = {};
                     for (var m = 0; m < h.length; m++)
                         b["$" + h[m]] = !0;
                     for (h = 0; h < a.length; h++)
                         m = b.hasOwnProperty("$" + a[h].value),
                         a[h].selected !== m && (a[h].selected = m),
                         m && l && (a[h].defaultSelected = !0)
                 } else {
                     h = "" + gc(h);
                     b = null;
                     for (m = 0; m < a.length; m++) {
                         if (a[m].value === h)
                             return a[m].selected = !0,
                             void (l && (a[m].defaultSelected = !0));
                         null !== b || a[m].disabled || (b = a[m])
                     }
                     null !== b && (b.selected = !0)
                 }
             }
             function Oa(a, b) {
                 if (null != b.dangerouslySetInnerHTML)
                     throw v(Error(91));
                 return Eb({}, b, {
                     value: void 0,
                     defaultValue: void 0,
                     children: "" + a._wrapperState.initialValue
                 })
             }
             function ic(a, b) {
                 var h = b.value;
                 if (null == h) {
                     if (h = b.defaultValue,
                     null != (b = b.children)) {
                         if (null != h)
                             throw v(Error(92));
                         if (Array.isArray(b)) {
                             if (!(1 >= b.length))
                                 throw v(Error(93));
                             b = b[0]
                         }
                         h = b
                     }
                     null == h && (h = "")
                 }
                 a._wrapperState = {
                     initialValue: gc(h)
                 }
             }
             function He(a, b) {
                 var h = gc(b.value)
                   , l = gc(b.defaultValue);
                 null != h && ((h = "" + h) !== a.value && (a.value = h),
                 null == b.defaultValue && a.defaultValue !== h && (a.defaultValue = h));
                 null != l && (a.defaultValue = "" + l)
             }
             function Aa(a) {
                 var b = a.textContent;
                 b === a._wrapperState.initialValue && (a.value = b)
             }
             function Qc(a) {
                 switch (a) {
                 case "svg":
                     return "http://www.w3.org/2000/svg";
                 case "math":
                     return "http://www.w3.org/1998/Math/MathML";
                 default:
                     return "http://www.w3.org/1999/xhtml"
                 }
             }
             function tc(a, b) {
                 return null == a || "http://www.w3.org/1999/xhtml" === a ? Qc(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a
             }
             function yb(a, b) {
                 if (b) {
                     var h = a.firstChild;
                     if (h && h === a.lastChild && 3 === h.nodeType)
                         return void (h.nodeValue = b)
                 }
                 a.textContent = b
             }
             function Zb(a, b, h) {
                 return null == b || "boolean" == typeof b || "" === b ? "" : h || "number" != typeof b || 0 === b || Sd.hasOwnProperty(a) && Sd[a] ? ("" + b).trim() : b + "px"
             }
             function Sf(a, b) {
                 for (var h in a = a.style,
                 b)
                     if (b.hasOwnProperty(h)) {
                         var l = 0 === h.indexOf("--")
                           , m = Zb(h, b[h], l);
                         "float" === h && (h = "cssFloat");
                         l ? a.setProperty(h, m) : a[h] = m
                     }
             }
             function qd(a, b) {
                 if (b) {
                     if (ni[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
                         throw v(Error(137), a, "");
                     if (null != b.dangerouslySetInnerHTML) {
                         if (null != b.children)
                             throw v(Error(60));
                         if ("object" != typeof b.dangerouslySetInnerHTML || !("__html"in b.dangerouslySetInnerHTML))
                             throw v(Error(61));
                     }
                     if (null != b.style && "object" != typeof b.style)
                         throw v(Error(62), "");
                 }
             }
             function Ie(a, b) {
                 if (-1 === a.indexOf("-"))
                     return "string" == typeof b.is;
                 switch (a) {
                 case "annotation-xml":
                 case "color-profile":
                 case "font-face":
                 case "font-face-src":
                 case "font-face-uri":
                 case "font-face-format":
                 case "font-face-name":
                 case "missing-glyph":
                     return !1;
                 default:
                     return !0
                 }
             }
             function $b(a, b) {
                 var h = Nf(a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument);
                 b = qf[b];
                 for (var l = 0; l < b.length; l++) {
                     var m = b[l];
                     if (!h.has(m)) {
                         switch (m) {
                         case "scroll":
                             Od(a, "scroll", !0);
                             break;
                         case "focus":
                         case "blur":
                             Od(a, "focus", !0);
                             Od(a, "blur", !0);
                             h.add("blur");
                             h.add("focus");
                             break;
                         case "cancel":
                         case "close":
                             ua(m) && Od(a, m, !0);
                             break;
                         case "invalid":
                         case "submit":
                         case "reset":
                             break;
                         default:
                             -1 === Td.indexOf(m) && db(m, a)
                         }
                         h.add(m)
                     }
                 }
             }
             function Je() {}
             function Rc(a, b) {
                 switch (a) {
                 case "button":
                 case "input":
                 case "select":
                 case "textarea":
                     return !!b.autoFocus
                 }
                 return !1
             }
             function jc(a, b) {
                 return "textarea" === a || "option" === a || "noscript" === a || "string" == typeof b.children || "number" == typeof b.children || "object" == typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html
             }
             function Ud(a) {
                 for (; null != a; a = a.nextSibling) {
                     var b = a.nodeType;
                     if (1 === b || 3 === b)
                         break
                 }
                 return a
             }
             function Wa(a) {
                 0 > uc || (a.current = Tf[uc],
                 Tf[uc] = null,
                 uc--)
             }
             function lb(a, b) {
                 uc++;
                 Tf[uc] = a.current;
                 a.current = b
             }
             function rd(a, b) {
                 var h = a.type.contextTypes;
                 if (!h)
                     return vc;
                 var l = a.stateNode;
                 if (l && l.__reactInternalMemoizedUnmaskedChildContext === b)
                     return l.__reactInternalMemoizedMaskedChildContext;
                 var m, t = {};
                 for (m in h)
                     t[m] = b[m];
                 return l && ((a = a.stateNode).__reactInternalMemoizedUnmaskedChildContext = b,
                 a.__reactInternalMemoizedMaskedChildContext = t),
                 t
             }
             function ta(a, b, h) {
                 if (qb.current !== vc)
                     throw v(Error(168));
                 lb(qb, b);
                 lb(zb, h)
             }
             function Yg(a, b, h) {
                 var l = a.stateNode;
                 if (a = b.childContextTypes,
                 "function" != typeof l.getChildContext)
                     return h;
                 for (var m in l = l.getChildContext())
                     if (!(m in a))
                         throw v(Error(108), $a(b) || "Unknown", m);
                 return Eb({}, h, l)
             }
             function Ke(a) {
                 a = a.stateNode;
                 return a = a && a.__reactInternalMemoizedMergedChildContext || vc,
                 Sc = qb.current,
                 lb(qb, a),
                 lb(zb, zb.current),
                 !0
             }
             function Zg(a, b, h) {
                 var l = a.stateNode;
                 if (!l)
                     throw v(Error(169));
                 h ? (b = Yg(a, b, Sc),
                 l.__reactInternalMemoizedMergedChildContext = b,
                 Wa(zb),
                 Wa(qb),
                 lb(qb, b)) : Wa(zb);
                 lb(zb, h)
             }
             function Vd() {
                 switch (oi()) {
                 case Le:
                     return 99;
                 case $g:
                     return 98;
                 case ah:
                     return 97;
                 case wc:
                     return 96;
                 case Xa:
                     return 95;
                 default:
                     throw v(Error(332));
                 }
             }
             function bh(a) {
                 switch (a) {
                 case 99:
                     return Le;
                 case 98:
                     return $g;
                 case 97:
                     return ah;
                 case 96:
                     return wc;
                 case 95:
                     return Xa;
                 default:
                     throw v(Error(332));
                 }
             }
             function xc(a, b) {
                 return a = bh(a),
                 pi(a, b)
             }
             function sd(a, b, h) {
                 return a = bh(a),
                 Wd(a, b, h)
             }
             function ib(a) {
                 return null === G ? (G = [a],
                 e = Wd(Le, Xd)) : G.push(a),
                 Me
             }
             function Mb() {
                 null !== e && ch(e);
                 Xd()
             }
             function Xd() {
                 if (!g && null !== G) {
                     g = !0;
                     var a = 0;
                     try {
                         var b = G;
                         xc(99, function() {
                             for (; a < b.length; a++) {
                                 var h = b[a];
                                 do
                                     h = h(!0);
                                 while (null !== h)
                             }
                         });
                         G = null
                     } catch (h) {
                         throw null !== G && (G = G.slice(a + 1)),
                         Wd(Le, Mb),
                         h;
                     } finally {
                         g = !1
                     }
                 }
             }
             function Uf(a, b) {
                 return 1073741823 === b ? 99 : 1 === b ? 95 : 0 >= (a = 10 * (1073741821 - b) - 10 * (1073741821 - a)) ? 99 : 250 >= a ? 98 : 5250 >= a ? 97 : 95
             }
             function Sb(a, b) {
                 if (a && a.defaultProps)
                     for (var h in b = Eb({}, b),
                     a = a.defaultProps)
                         void 0 === b[h] && (b[h] = a[h]);
                 return b
             }
             function dh(a, b) {
                 a = a.type._context;
                 lb(f, a._currentValue);
                 a._currentValue = b
             }
             function Ne(a) {
                 var b = f.current;
                 Wa(f);
                 a.type._context._currentValue = b
             }
             function eh(a, b) {
                 for (; null !== a; ) {
                     var h = a.alternate;
                     if (a.childExpirationTime < b)
                         a.childExpirationTime = b,
                         null !== h && h.childExpirationTime < b && (h.childExpirationTime = b);
                     else {
                         if (!(null !== h && h.childExpirationTime < b))
                             break;
                         h.childExpirationTime = b
                     }
                     a = a.return
                 }
             }
             function td(a, b) {
                 k = a;
                 q = r = null;
                 null !== (a = a.dependencies) && null !== a.firstContext && (a.expirationTime >= b && (Tc = !0),
                 a.firstContext = null)
             }
             function ac(a, b) {
                 if (q !== a && !1 !== b && 0 !== b)
                     if ("number" == typeof b && 1073741823 !== b || (q = a,
                     b = 1073741823),
                     b = {
                         context: a,
                         observedBits: b,
                         next: null
                     },
                     null === r) {
                         if (null === k)
                             throw v(Error(308));
                         r = b;
                         k.dependencies = {
                             expirationTime: 0,
                             firstContext: b,
                             responders: null
                         }
                     } else
                         r = r.next = b;
                 return a._currentValue
             }
             function Oe(a) {
                 return {
                     baseState: a,
                     firstUpdate: null,
                     lastUpdate: null,
                     firstCapturedUpdate: null,
                     lastCapturedUpdate: null,
                     firstEffect: null,
                     lastEffect: null,
                     firstCapturedEffect: null,
                     lastCapturedEffect: null
                 }
             }
             function Vf(a) {
                 return {
                     baseState: a.baseState,
                     firstUpdate: a.firstUpdate,
                     lastUpdate: a.lastUpdate,
                     firstCapturedUpdate: null,
                     lastCapturedUpdate: null,
                     firstEffect: null,
                     lastEffect: null,
                     firstCapturedEffect: null,
                     lastCapturedEffect: null
                 }
             }
             function yc(a, b) {
                 return {
                     expirationTime: a,
                     suspenseConfig: b,
                     tag: 0,
                     payload: null,
                     callback: null,
                     next: null,
                     nextEffect: null
                 }
             }
             function zc(a, b) {
                 null === a.lastUpdate ? a.firstUpdate = a.lastUpdate = b : (a.lastUpdate.next = b,
                 a.lastUpdate = b)
             }
             function Nb(a, b) {
                 var h = a.alternate;
                 if (null === h) {
                     var l = a.updateQueue
                       , m = null;
                     null === l && (l = a.updateQueue = Oe(a.memoizedState))
                 } else
                     l = a.updateQueue,
                     m = h.updateQueue,
                     null === l ? null === m ? (l = a.updateQueue = Oe(a.memoizedState),
                     m = h.updateQueue = Oe(h.memoizedState)) : l = a.updateQueue = Vf(m) : null === m && (m = h.updateQueue = Vf(l));
                 null === m || l === m ? zc(l, b) : null === l.lastUpdate || null === m.lastUpdate ? (zc(l, b),
                 zc(m, b)) : (zc(l, b),
                 m.lastUpdate = b)
             }
             function Tb(a, b) {
                 var h = a.updateQueue;
                 null === (h = null === h ? a.updateQueue = Oe(a.memoizedState) : fh(a, h)).lastCapturedUpdate ? h.firstCapturedUpdate = h.lastCapturedUpdate = b : (h.lastCapturedUpdate.next = b,
                 h.lastCapturedUpdate = b)
             }
             function fh(a, b) {
                 var h = a.alternate;
                 return null !== h && b === h.updateQueue && (b = a.updateQueue = Vf(b)),
                 b
             }
             function gh(a, b, h, l, m, t) {
                 switch (h.tag) {
                 case 1:
                     return "function" == typeof (a = h.payload) ? a.call(t, l, m) : a;
                 case 3:
                     a.effectTag = -2049 & a.effectTag | 64;
                 case 0:
                     if (null == (m = "function" == typeof (a = h.payload) ? a.call(t, l, m) : a))
                         break;
                     return Eb({}, l, m);
                 case 2:
                     E = !0
                 }
                 return l
             }
             function Yd(a, b, h, l, m) {
                 E = !1;
                 for (var t = (b = fh(a, b)).baseState, x = null, B = 0, M = b.firstUpdate, V = t; null !== M; ) {
                     var la = M.expirationTime;
                     la < m ? (null === x && (x = M,
                     t = V),
                     B < la && (B = la)) : (hh(la, M.suspenseConfig),
                     V = gh(a, 0, M, V, h, l),
                     null !== M.callback && (a.effectTag |= 32,
                     M.nextEffect = null,
                     null === b.lastEffect ? b.firstEffect = b.lastEffect = M : (b.lastEffect.nextEffect = M,
                     b.lastEffect = M)));
                     M = M.next
                 }
                 la = null;
                 for (M = b.firstCapturedUpdate; null !== M; ) {
                     var Ha = M.expirationTime;
                     Ha < m ? (null === la && (la = M,
                     null === x && (t = V)),
                     B < Ha && (B = Ha)) : (V = gh(a, 0, M, V, h, l),
                     null !== M.callback && (a.effectTag |= 32,
                     M.nextEffect = null,
                     null === b.lastCapturedEffect ? b.firstCapturedEffect = b.lastCapturedEffect = M : (b.lastCapturedEffect.nextEffect = M,
                     b.lastCapturedEffect = M)));
                     M = M.next
                 }
                 null === x && (b.lastUpdate = null);
                 null === la ? b.lastCapturedUpdate = null : a.effectTag |= 32;
                 null === x && null === la && (t = V);
                 b.baseState = t;
                 b.firstUpdate = x;
                 b.firstCapturedUpdate = la;
                 a.expirationTime = B;
                 a.memoizedState = V
             }
             function Pe(a, b, h) {
                 null !== b.firstCapturedUpdate && (null !== b.lastUpdate && (b.lastUpdate.next = b.firstCapturedUpdate,
                 b.lastUpdate = b.lastCapturedUpdate),
                 b.firstCapturedUpdate = b.lastCapturedUpdate = null);
                 ih(b.firstEffect, h);
                 b.firstEffect = b.lastEffect = null;
                 ih(b.firstCapturedEffect, h);
                 b.firstCapturedEffect = b.lastCapturedEffect = null
             }
             function ih(a, b) {
                 for (; null !== a; ) {
                     var h = a.callback;
                     if (null !== h) {
                         a.callback = null;
                         var l = b;
                         if ("function" != typeof h)
                             throw v(Error(191), h);
                         h.call(l)
                     }
                     a = a.nextEffect
                 }
             }
             function Zd(a, b, h, l) {
                 h = null == (h = h(l, b = a.memoizedState)) ? b : Eb({}, b, h);
                 a.memoizedState = h;
                 null !== (l = a.updateQueue) && 0 === a.expirationTime && (l.baseState = h)
             }
             function jh(a, b, h, l, m, t, x) {
                 return "function" == typeof (a = a.stateNode).shouldComponentUpdate ? a.shouldComponentUpdate(l, t, x) : !b.prototype || !b.prototype.isPureReactComponent || !Nd(h, l) || !Nd(m, t)
             }
             function Qe(a, b, h) {
                 var l = !1
                   , m = vc
                   , t = b.contextType;
                 return "object" == typeof t && null !== t ? t = ac(t) : (m = null != b.childContextTypes ? Sc : qb.current,
                 t = (l = null != (l = b.contextTypes)) ? rd(a, m) : vc),
                 b = new b(h,t),
                 a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null,
                 b.updater = T,
                 a.stateNode = b,
                 b._reactInternalFiber = a,
                 l && ((a = a.stateNode).__reactInternalMemoizedUnmaskedChildContext = m,
                 a.__reactInternalMemoizedMaskedChildContext = t),
                 b
             }
             function $d(a, b, h, l) {
                 a = b.state;
                 "function" == typeof b.componentWillReceiveProps && b.componentWillReceiveProps(h, l);
                 "function" == typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(h, l);
                 b.state !== a && T.enqueueReplaceState(b, b.state, null)
             }
             function Re(a, b, h, l) {
                 var m = a.stateNode;
                 m.props = h;
                 m.state = a.memoizedState;
                 m.refs = p;
                 var t = b.contextType;
                 "object" == typeof t && null !== t ? m.context = ac(t) : (t = null != b.childContextTypes ? Sc : qb.current,
                 m.context = rd(a, t));
                 null !== (t = a.updateQueue) && (Yd(a, t, h, m, l),
                 m.state = a.memoizedState);
                 "function" == typeof (t = b.getDerivedStateFromProps) && (Zd(a, b, t, h),
                 m.state = a.memoizedState);
                 "function" == typeof b.getDerivedStateFromProps || "function" == typeof m.getSnapshotBeforeUpdate || "function" != typeof m.UNSAFE_componentWillMount && "function" != typeof m.componentWillMount || (b = m.state,
                 "function" == typeof m.componentWillMount && m.componentWillMount(),
                 "function" == typeof m.UNSAFE_componentWillMount && m.UNSAFE_componentWillMount(),
                 b !== m.state && T.enqueueReplaceState(m, m.state, null),
                 null !== (t = a.updateQueue) && (Yd(a, t, h, m, l),
                 m.state = a.memoizedState));
                 "function" == typeof m.componentDidMount && (a.effectTag |= 4)
             }
             function ae(a, b, h) {
                 if (null !== (a = h.ref) && "function" != typeof a && "object" != typeof a) {
                     if (h._owner) {
                         h = h._owner;
                         var l = void 0;
                         if (h) {
                             if (1 !== h.tag)
                                 throw v(Error(309));
                             l = h.stateNode
                         }
                         if (!l)
                             throw v(Error(147), a);
                         var m = "" + a;
                         return null !== b && null !== b.ref && "function" == typeof b.ref && b.ref._stringRef === m ? b.ref : (b = function(t) {
                             var x = l.refs;
                             x === p && (x = l.refs = {});
                             null === t ? delete x[m] : x[m] = t
                         }
                         ,
                         b._stringRef = m,
                         b)
                     }
                     if ("string" != typeof a)
                         throw v(Error(284));
                     if (!h._owner)
                         throw v(Error(290), a);
                 }
                 return a
             }
             function be(a, b) {
                 if ("textarea" !== a.type)
                     throw v(Error(31), "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, "");
             }
             function kh(a) {
                 function b(Y, X) {
                     if (a) {
                         var ca = Y.lastEffect;
                         null !== ca ? (ca.nextEffect = X,
                         Y.lastEffect = X) : Y.firstEffect = Y.lastEffect = X;
                         X.nextEffect = null;
                         X.effectTag = 8
                     }
                 }
                 function h(Y, X) {
                     if (!a)
                         return null;
                     for (; null !== X; )
                         b(Y, X),
                         X = X.sibling;
                     return null
                 }
                 function l(Y, X) {
                     for (Y = new Map; null !== X; )
                         null !== X.key ? Y.set(X.key, X) : Y.set(X.index, X),
                         X = X.sibling;
                     return Y
                 }
                 function m(Y, X, ca) {
                     return (Y = Uc(Y, X)).index = 0,
                     Y.sibling = null,
                     Y
                 }
                 function t(Y, X, ca) {
                     return Y.index = ca,
                     a ? null !== (ca = Y.alternate) ? (ca = ca.index) < X ? (Y.effectTag = 2,
                     X) : ca : (Y.effectTag = 2,
                     X) : X
                 }
                 function x(Y) {
                     return a && null === Y.alternate && (Y.effectTag = 2),
                     Y
                 }
                 function B(Y, X, ca, oa) {
                     return null === X || 6 !== X.tag ? ((X = Wf(ca, Y.mode, oa)).return = Y,
                     X) : ((X = m(X, ca)).return = Y,
                     X)
                 }
                 function M(Y, X, ca, oa) {
                     return null !== X && X.elementType === ca.type ? ((oa = m(X, ca.props)).ref = ae(Y, X, ca),
                     oa.return = Y,
                     oa) : ((oa = Se(ca.type, ca.key, ca.props, null, Y.mode, oa)).ref = ae(Y, X, ca),
                     oa.return = Y,
                     oa)
                 }
                 function V(Y, X, ca, oa) {
                     return null === X || 4 !== X.tag || X.stateNode.containerInfo !== ca.containerInfo || X.stateNode.implementation !== ca.implementation ? ((X = Xf(ca, Y.mode, oa)).return = Y,
                     X) : ((X = m(X, ca.children || [])).return = Y,
                     X)
                 }
                 function la(Y, X, ca, oa, qa) {
                     return null === X || 7 !== X.tag ? ((X = Ac(ca, Y.mode, oa, qa)).return = Y,
                     X) : ((X = m(X, ca)).return = Y,
                     X)
                 }
                 function Ha(Y, X, ca) {
                     if ("string" == typeof X || "number" == typeof X)
                         return (X = Wf("" + X, Y.mode, ca)).return = Y,
                         X;
                     if ("object" == typeof X && null !== X) {
                         switch (X.$$typeof) {
                         case Vc:
                             return (ca = Se(X.type, X.key, X.props, null, Y.mode, ca)).ref = ae(Y, null, X),
                             ca.return = Y,
                             ca;
                         case kd:
                             return (X = Xf(X, Y.mode, ca)).return = Y,
                             X
                         }
                         if (ja(X) || hb(X))
                             return (X = Ac(X, Y.mode, ca, null)).return = Y,
                             X;
                         be(Y, X)
                     }
                     return null
                 }
                 function La(Y, X, ca, oa) {
                     var qa = null !== X ? X.key : null;
                     if ("string" == typeof ca || "number" == typeof ca)
                         return null !== qa ? null : B(Y, X, "" + ca, oa);
                     if ("object" == typeof ca && null !== ca) {
                         switch (ca.$$typeof) {
                         case Vc:
                             return ca.key === qa ? ca.type === rc ? la(Y, X, ca.props.children, oa, qa) : M(Y, X, ca, oa) : null;
                         case kd:
                             return ca.key === qa ? V(Y, X, ca, oa) : null
                         }
                         if (ja(ca) || hb(ca))
                             return null !== qa ? null : la(Y, X, ca, oa, null);
                         be(Y, ca)
                     }
                     return null
                 }
                 function Ra(Y, X, ca, oa, qa) {
                     if ("string" == typeof oa || "number" == typeof oa)
                         return B(X, Y.get(ca) || null, "" + oa, qa);
                     if ("object" == typeof oa && null !== oa) {
                         switch (oa.$$typeof) {
                         case Vc:
                             return Y = Y.get(null === oa.key ? ca : oa.key) || null,
                             oa.type === rc ? la(X, Y, oa.props.children, qa, oa.key) : M(X, Y, oa, qa);
                         case kd:
                             return V(X, Y.get(null === oa.key ? ca : oa.key) || null, oa, qa)
                         }
                         if (ja(oa) || hb(oa))
                             return la(X, Y.get(ca) || null, oa, qa, null);
                         be(X, oa)
                     }
                     return null
                 }
                 function ud(Y, X, ca, oa) {
                     for (var qa = null, Sa = null, Ca = X, ab = X = 0, Da = null; null !== Ca && ab < ca.length; ab++) {
                         Ca.index > ab ? (Da = Ca,
                         Ca = null) : Da = Ca.sibling;
                         var ra = La(Y, Ca, ca[ab], oa);
                         if (null === ra) {
                             null === Ca && (Ca = Da);
                             break
                         }
                         a && Ca && null === ra.alternate && b(Y, Ca);
                         X = t(ra, X, ab);
                         null === Sa ? qa = ra : Sa.sibling = ra;
                         Sa = ra;
                         Ca = Da
                     }
                     if (ab === ca.length)
                         return h(Y, Ca),
                         qa;
                     if (null === Ca) {
                         for (; ab < ca.length; ab++)
                             null !== (Ca = Ha(Y, ca[ab], oa)) && (X = t(Ca, X, ab),
                             null === Sa ? qa = Ca : Sa.sibling = Ca,
                             Sa = Ca);
                         return qa
                     }
                     for (Ca = l(Y, Ca); ab < ca.length; ab++)
                         null !== (Da = Ra(Ca, Y, ab, ca[ab], oa)) && (a && null !== Da.alternate && Ca.delete(null === Da.key ? ab : Da.key),
                         X = t(Da, X, ab),
                         null === Sa ? qa = Da : Sa.sibling = Da,
                         Sa = Da);
                     return a && Ca.forEach(function(Ba) {
                         return b(Y, Ba)
                     }),
                     qa
                 }
                 function Yf(Y, X, ca, oa) {
                     var qa = hb(ca);
                     if ("function" != typeof qa)
                         throw v(Error(150));
                     if (null == (ca = qa.call(ca)))
                         throw v(Error(151));
                     for (var Sa = qa = null, Ca = X, ab = X = 0, Da = null, ra = ca.next(); null !== Ca && !ra.done; ab++,
                     ra = ca.next()) {
                         Ca.index > ab ? (Da = Ca,
                         Ca = null) : Da = Ca.sibling;
                         var Ba = La(Y, Ca, ra.value, oa);
                         if (null === Ba) {
                             null === Ca && (Ca = Da);
                             break
                         }
                         a && Ca && null === Ba.alternate && b(Y, Ca);
                         X = t(Ba, X, ab);
                         null === Sa ? qa = Ba : Sa.sibling = Ba;
                         Sa = Ba;
                         Ca = Da
                     }
                     if (ra.done)
                         return h(Y, Ca),
                         qa;
                     if (null === Ca) {
                         for (; !ra.done; ab++,
                         ra = ca.next())
                             null !== (ra = Ha(Y, ra.value, oa)) && (X = t(ra, X, ab),
                             null === Sa ? qa = ra : Sa.sibling = ra,
                             Sa = ra);
                         return qa
                     }
                     for (Ca = l(Y, Ca); !ra.done; ab++,
                     ra = ca.next())
                         null !== (ra = Ra(Ca, Y, ab, ra.value, oa)) && (a && null !== ra.alternate && Ca.delete(null === ra.key ? ab : ra.key),
                         X = t(ra, X, ab),
                         null === Sa ? qa = ra : Sa.sibling = ra,
                         Sa = ra);
                     return a && Ca.forEach(function(Ab) {
                         return b(Y, Ab)
                     }),
                     qa
                 }
                 return function(Y, X, ca, oa) {
                     var qa = "object" == typeof ca && null !== ca && ca.type === rc && null === ca.key;
                     qa && (ca = ca.props.children);
                     var Sa = "object" == typeof ca && null !== ca;
                     if (Sa)
                         switch (ca.$$typeof) {
                         case Vc:
                             a: {
                                 Sa = ca.key;
                                 for (qa = X; null !== qa; ) {
                                     if (qa.key === Sa) {
                                         if (7 === qa.tag ? ca.type === rc : qa.elementType === ca.type) {
                                             h(Y, qa.sibling);
                                             (X = m(qa, ca.type === rc ? ca.props.children : ca.props)).ref = ae(Y, qa, ca);
                                             X.return = Y;
                                             Y = X;
                                             break a
                                         }
                                         h(Y, qa);
                                         break
                                     }
                                     b(Y, qa);
                                     qa = qa.sibling
                                 }
                                 ca.type === rc ? ((X = Ac(ca.props.children, Y.mode, oa, ca.key)).return = Y,
                                 Y = X) : ((oa = Se(ca.type, ca.key, ca.props, null, Y.mode, oa)).ref = ae(Y, X, ca),
                                 oa.return = Y,
                                 Y = oa)
                             }
                             return x(Y);
                         case kd:
                             a: {
                                 for (qa = ca.key; null !== X; ) {
                                     if (X.key === qa) {
                                         if (4 === X.tag && X.stateNode.containerInfo === ca.containerInfo && X.stateNode.implementation === ca.implementation) {
                                             h(Y, X.sibling);
                                             (X = m(X, ca.children || [])).return = Y;
                                             Y = X;
                                             break a
                                         }
                                         h(Y, X);
                                         break
                                     }
                                     b(Y, X);
                                     X = X.sibling
                                 }
                                 (X = Xf(ca, Y.mode, oa)).return = Y;
                                 Y = X
                             }
                             return x(Y)
                         }
                     if ("string" == typeof ca || "number" == typeof ca)
                         return ca = "" + ca,
                         null !== X && 6 === X.tag ? (h(Y, X.sibling),
                         (X = m(X, ca)).return = Y,
                         Y = X) : (h(Y, X),
                         (X = Wf(ca, Y.mode, oa)).return = Y,
                         Y = X),
                         x(Y);
                     if (ja(ca))
                         return ud(Y, X, ca, oa);
                     if (hb(ca))
                         return Yf(Y, X, ca, oa);
                     if (Sa && be(Y, ca),
                     void 0 === ca && !qa)
                         switch (Y.tag) {
                         case 1:
                         case 0:
                             throw Y = Y.type,
                             v(Error(152), Y.displayName || Y.name || "Component");
                         }
                     return h(Y, X)
                 }
             }
             function Wc(a) {
                 if (a === ma)
                     throw v(Error(174));
                 return a
             }
             function Zf(a, b) {
                 lb(ya, b);
                 lb(Ia, a);
                 lb(wa, ma);
                 a = b.nodeType;
                 switch (a) {
                 case 9:
                 case 11:
                     b = (b = b.documentElement) ? b.namespaceURI : tc(null, "");
                     break;
                 default:
                     b = tc(b = (a = 8 === a ? b.parentNode : b).namespaceURI || null, a.tagName)
                 }
                 Wa(wa);
                 lb(wa, b)
             }
             function vd(a) {
                 Wa(wa);
                 Wa(Ia);
                 Wa(ya)
             }
             function lh(a) {
                 Wc(ya.current);
                 var b = Wc(wa.current)
                   , h = tc(b, a.type);
                 b !== h && (lb(Ia, a),
                 lb(wa, h))
             }
             function $f(a) {
                 Ia.current === a && (Wa(wa),
                 Wa(Ia))
             }
             function Te(a) {
                 for (var b = a; null !== b; ) {
                     if (13 === b.tag) {
                         if (null !== b.memoizedState)
                             return b
                     } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
                         if (64 & b.effectTag)
                             return b
                     } else if (null !== b.child) {
                         b.child.return = b;
                         b = b.child;
                         continue
                     }
                     if (b === a)
                         break;
                     for (; null === b.sibling; ) {
                         if (null === b.return || b.return === a)
                             return null;
                         b = b.return
                     }
                     b.sibling.return = b.return;
                     b = b.sibling
                 }
                 return null
             }
             function Ub() {
                 throw v(Error(321));
             }
             function ag(a, b) {
                 if (null === b)
                     return !1;
                 for (var h = 0; h < b.length && h < a.length; h++)
                     if (!Oc(a[h], b[h]))
                         return !1;
                 return !0
             }
             function bg(a, b, h, l, m, t) {
                 if (Bc = t,
                 Jb = b,
                 pb = null !== a ? a.memoizedState : null,
                 kc.current = null === pb ? pj : $i,
                 b = h(l, m),
                 Xc) {
                     do
                         Xc = !1,
                         Yc += 1,
                         pb = null !== a ? a.memoizedState : null,
                         Cc = Dc,
                         Bb = Fb = eb = null,
                         kc.current = $i,
                         b = h(l, m);
                     while (Xc);
                     lc = null;
                     Yc = 0
                 }
                 if (kc.current = Ue,
                 (a = Jb).memoizedState = Dc,
                 a.expirationTime = Ob,
                 a.updateQueue = Bb,
                 a.effectTag |= wd,
                 a = null !== eb && null !== eb.next,
                 Bc = 0,
                 Cc = Fb = Dc = pb = eb = Jb = null,
                 Ob = 0,
                 Bb = null,
                 wd = 0,
                 a)
                     throw v(Error(300));
                 return b
             }
             function mh() {
                 kc.current = Ue;
                 Bc = 0;
                 Cc = Fb = Dc = pb = eb = Jb = null;
                 Ob = 0;
                 Bb = null;
                 wd = 0;
                 Xc = !1;
                 lc = null;
                 Yc = 0
             }
             function xd() {
                 var a = {
                     memoizedState: null,
                     baseState: null,
                     queue: null,
                     baseUpdate: null,
                     next: null
                 };
                 return null === Fb ? Dc = Fb = a : Fb = Fb.next = a,
                 Fb
             }
             function ce() {
                 if (null !== Cc)
                     Cc = (Fb = Cc).next,
                     pb = null !== (eb = pb) ? eb.next : null;
                 else {
                     if (null === pb)
                         throw v(Error(310));
                     var a = {
                         memoizedState: (eb = pb).memoizedState,
                         baseState: eb.baseState,
                         queue: eb.queue,
                         baseUpdate: eb.baseUpdate,
                         next: null
                     };
                     Fb = null === Fb ? Dc = a : Fb.next = a;
                     pb = eb.next
                 }
                 return Fb
             }
             function Ve(a, b) {
                 return "function" == typeof b ? b(a) : b
             }
             function Ec(a) {
                 var b = ce()
                   , h = b.queue;
                 if (null === h)
                     throw v(Error(311));
                 if (h.lastRenderedReducer = a,
                 0 < Yc) {
                     var l = h.dispatch;
                     if (null !== lc) {
                         var m = lc.get(h);
                         if (void 0 !== m) {
                             lc.delete(h);
                             var t = b.memoizedState;
                             do
                                 t = a(t, m.action),
                                 m = m.next;
                             while (null !== m);
                             return Oc(t, b.memoizedState) || (Tc = !0),
                             b.memoizedState = t,
                             b.baseUpdate === h.last && (b.baseState = t),
                             h.lastRenderedState = t,
                             [t, l]
                         }
                     }
                     return [b.memoizedState, l]
                 }
                 l = h.last;
                 var x = b.baseUpdate;
                 if (t = b.baseState,
                 null !== x ? (null !== l && (l.next = null),
                 l = x.next) : l = null !== l ? l.next : null,
                 null !== l) {
                     var B = m = null
                       , M = l
                       , V = !1;
                     do {
                         var la = M.expirationTime;
                         la < Bc ? (V || (V = !0,
                         B = x,
                         m = t),
                         la > Ob && (Ob = la)) : (hh(la, M.suspenseConfig),
                         t = M.eagerReducer === a ? M.eagerState : a(t, M.action));
                         x = M;
                         M = M.next
                     } while (null !== M && M !== l);
                     V || (B = x,
                     m = t);
                     Oc(t, b.memoizedState) || (Tc = !0);
                     b.memoizedState = t;
                     b.baseUpdate = B;
                     b.baseState = m;
                     h.lastRenderedState = t
                 }
                 return [b.memoizedState, h.dispatch]
             }
             function We(a, b, h, l) {
                 return a = {
                     tag: a,
                     create: b,
                     destroy: h,
                     deps: l,
                     next: null
                 },
                 null === Bb ? (Bb = {
                     lastEffect: null
                 }).lastEffect = a.next = a : null === (b = Bb.lastEffect) ? Bb.lastEffect = a.next = a : (h = b.next,
                 b.next = a,
                 a.next = h,
                 Bb.lastEffect = a),
                 a
             }
             function Xe(a, b, h, l) {
                 var m = xd();
                 wd |= a;
                 m.memoizedState = We(b, h, void 0, void 0 === l ? null : l)
             }
             function de(a, b, h, l) {
                 var m = ce();
                 l = void 0 === l ? null : l;
                 var t = void 0;
                 if (null !== eb) {
                     var x = eb.memoizedState;
                     if (t = x.destroy,
                     null !== l && ag(l, x.deps))
                         return void We(Za, h, t, l)
                 }
                 wd |= a;
                 m.memoizedState = We(b, h, t, l)
             }
             function nh(a, b) {
                 return "function" == typeof b ? (a = a(),
                 b(a),
                 function() {
                     b(null)
                 }
                 ) : null != b ? (a = a(),
                 b.current = a,
                 function() {
                     b.current = null
                 }
                 ) : void 0
             }
             function oh() {}
             function ph(a, b, h) {
                 if (!(25 > Yc))
                     throw v(Error(301));
                 var l = a.alternate;
                 if (a === Jb || null !== l && l === Jb)
                     if (Xc = !0,
                     a = {
                         expirationTime: Bc,
                         suspenseConfig: null,
                         action: h,
                         eagerReducer: null,
                         eagerState: null,
                         next: null
                     },
                     null === lc && (lc = new Map),
                     void 0 === (h = lc.get(b)))
                         lc.set(b, a);
                     else {
                         for (b = h; null !== b.next; )
                             b = b.next;
                         b.next = a
                     }
                 else {
                     var m = bc()
                       , t = y.suspense;
                     t = {
                         expirationTime: m = Fc(m, a, t),
                         suspenseConfig: t,
                         action: h,
                         eagerReducer: null,
                         eagerState: null,
                         next: null
                     };
                     var x = b.last;
                     if (null === x)
                         t.next = t;
                     else {
                         var B = x.next;
                         null !== B && (t.next = B);
                         x.next = t
                     }
                     if (b.last = t,
                     0 === a.expirationTime && (null === l || 0 === l.expirationTime) && null !== (l = b.lastRenderedReducer))
                         try {
                             var M = b.lastRenderedState
                               , V = l(M, h);
                             if (t.eagerReducer = l,
                             t.eagerState = V,
                             Oc(V, M))
                                 return
                         } catch (la) {}
                     ee(a, m)
                 }
             }
             function fe(a, b) {
                 var h = cc(5, null, null, 0);
                 h.elementType = "DELETED";
                 h.type = "DELETED";
                 h.stateNode = b;
                 h.return = a;
                 h.effectTag = 8;
                 null !== a.lastEffect ? (a.lastEffect.nextEffect = h,
                 a.lastEffect = h) : a.firstEffect = a.lastEffect = h
             }
             function qh(a, b) {
                 switch (a.tag) {
                 case 5:
                     var h = a.type;
                     return null !== (b = 1 !== b.nodeType || h.toLowerCase() !== b.nodeName.toLowerCase() ? null : b) && (a.stateNode = b,
                     !0);
                 case 6:
                     return null !== (b = "" === a.pendingProps || 3 !== b.nodeType ? null : b) && (a.stateNode = b,
                     !0);
                 default:
                     return !1
                 }
             }
             function rh(a) {
                 if (Zc) {
                     var b = yd;
                     if (b) {
                         var h = b;
                         if (!qh(a, b)) {
                             if (!(b = Ud(h.nextSibling)) || !qh(a, b))
                                 return a.effectTag |= 2,
                                 Zc = !1,
                                 void (mc = a);
                             fe(mc, h)
                         }
                         mc = a;
                         yd = Ud(b.firstChild)
                     } else
                         a.effectTag |= 2,
                         Zc = !1,
                         mc = a
                 }
             }
             function Ye(a) {
                 for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 18 !== a.tag; )
                     a = a.return;
                 mc = a
             }
             function zd(a) {
                 if (a !== mc)
                     return !1;
                 if (!Zc)
                     return Ye(a),
                     Zc = !0,
                     !1;
                 var b = a.type;
                 if (5 !== a.tag || "head" !== b && "body" !== b && !jc(b, a.memoizedProps))
                     for (b = yd; b; )
                         fe(a, b),
                         b = Ud(b.nextSibling);
                 return Ye(a),
                 yd = mc ? Ud(a.stateNode.nextSibling) : null,
                 !0
             }
             function Pb(a, b, h, l) {
                 b.child = null === a ? Z(b, null, h, l) : da(b, a.child, h, l)
             }
             function $c(a, b, h, l, m) {
                 h = h.render;
                 var t = b.ref;
                 return td(b, m),
                 l = bg(a, b, h, l, t, m),
                 null === a || Tc ? (b.effectTag |= 1,
                 Pb(a, b, l, m),
                 b.child) : (b.updateQueue = a.updateQueue,
                 b.effectTag &= -517,
                 a.expirationTime <= m && (a.expirationTime = 0),
                 nc(a, b, m))
             }
             function ad(a, b, h, l, m, t) {
                 if (null === a) {
                     var x = h.type;
                     return "function" != typeof x || cg(x) || void 0 !== x.defaultProps || null !== h.compare || void 0 !== h.defaultProps ? ((a = Se(h.type, null, l, null, b.mode, t)).ref = b.ref,
                     a.return = b,
                     b.child = a) : (b.tag = 15,
                     b.type = x,
                     sh(a, b, x, l, m, t))
                 }
                 return x = a.child,
                 m < t && (m = x.memoizedProps,
                 (null !== (h = h.compare) ? h : Nd)(m, l) && a.ref === b.ref) ? nc(a, b, t) : (b.effectTag |= 1,
                 (a = Uc(x, l)).ref = b.ref,
                 a.return = b,
                 b.child = a)
             }
             function sh(a, b, h, l, m, t) {
                 return null !== a && Nd(a.memoizedProps, l) && a.ref === b.ref && (Tc = !1,
                 m < t) ? nc(a, b, t) : Ze(a, b, h, l, t)
             }
             function th(a, b) {
                 var h = b.ref;
                 (null === a && null !== h || null !== a && a.ref !== h) && (b.effectTag |= 128)
             }
             function Ze(a, b, h, l, m) {
                 var t = null != h.childContextTypes ? Sc : qb.current;
                 return t = rd(b, t),
                 td(b, m),
                 h = bg(a, b, h, l, t, m),
                 null === a || Tc ? (b.effectTag |= 1,
                 Pb(a, b, h, m),
                 b.child) : (b.updateQueue = a.updateQueue,
                 b.effectTag &= -517,
                 a.expirationTime <= m && (a.expirationTime = 0),
                 nc(a, b, m))
             }
             function Gc(a, b, h, l, m) {
                 if (null != h.childContextTypes) {
                     var t = !0;
                     Ke(b)
                 } else
                     t = !1;
                 if (td(b, m),
                 null === b.stateNode)
                     null !== a && (a.alternate = null,
                     b.alternate = null,
                     b.effectTag |= 2),
                     Qe(b, h, l),
                     Re(b, h, l, m),
                     l = !0;
                 else if (null === a) {
                     var x = b.stateNode
                       , B = b.memoizedProps;
                     x.props = B;
                     var M = x.context
                       , V = h.contextType;
                     "object" == typeof V && null !== V ? V = ac(V) : V = rd(b, V = null != h.childContextTypes ? Sc : qb.current);
                     var la = h.getDerivedStateFromProps
                       , Ha = "function" == typeof la || "function" == typeof x.getSnapshotBeforeUpdate;
                     Ha || "function" != typeof x.UNSAFE_componentWillReceiveProps && "function" != typeof x.componentWillReceiveProps || (B !== l || M !== V) && $d(b, x, l, V);
                     E = !1;
                     var La = b.memoizedState;
                     M = x.state = La;
                     var Ra = b.updateQueue;
                     null !== Ra && (Yd(b, Ra, l, x, m),
                     M = b.memoizedState);
                     B !== l || La !== M || zb.current || E ? ("function" == typeof la && (Zd(b, h, la, l),
                     M = b.memoizedState),
                     (B = E || jh(b, h, B, l, La, M, V)) ? (Ha || "function" != typeof x.UNSAFE_componentWillMount && "function" != typeof x.componentWillMount || ("function" == typeof x.componentWillMount && x.componentWillMount(),
                     "function" == typeof x.UNSAFE_componentWillMount && x.UNSAFE_componentWillMount()),
                     "function" == typeof x.componentDidMount && (b.effectTag |= 4)) : ("function" == typeof x.componentDidMount && (b.effectTag |= 4),
                     b.memoizedProps = l,
                     b.memoizedState = M),
                     x.props = l,
                     x.state = M,
                     x.context = V,
                     l = B) : ("function" == typeof x.componentDidMount && (b.effectTag |= 4),
                     l = !1)
                 } else
                     x = b.stateNode,
                     B = b.memoizedProps,
                     x.props = b.type === b.elementType ? B : Sb(b.type, B),
                     M = x.context,
                     "object" == typeof (V = h.contextType) && null !== V ? V = ac(V) : V = rd(b, V = null != h.childContextTypes ? Sc : qb.current),
                     (Ha = "function" == typeof (la = h.getDerivedStateFromProps) || "function" == typeof x.getSnapshotBeforeUpdate) || "function" != typeof x.UNSAFE_componentWillReceiveProps && "function" != typeof x.componentWillReceiveProps || (B !== l || M !== V) && $d(b, x, l, V),
                     E = !1,
                     M = b.memoizedState,
                     La = x.state = M,
                     null !== (Ra = b.updateQueue) && (Yd(b, Ra, l, x, m),
                     La = b.memoizedState),
                     B !== l || M !== La || zb.current || E ? ("function" == typeof la && (Zd(b, h, la, l),
                     La = b.memoizedState),
                     (la = E || jh(b, h, B, l, M, La, V)) ? (Ha || "function" != typeof x.UNSAFE_componentWillUpdate && "function" != typeof x.componentWillUpdate || ("function" == typeof x.componentWillUpdate && x.componentWillUpdate(l, La, V),
                     "function" == typeof x.UNSAFE_componentWillUpdate && x.UNSAFE_componentWillUpdate(l, La, V)),
                     "function" == typeof x.componentDidUpdate && (b.effectTag |= 4),
                     "function" == typeof x.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" != typeof x.componentDidUpdate || B === a.memoizedProps && M === a.memoizedState || (b.effectTag |= 4),
                     "function" != typeof x.getSnapshotBeforeUpdate || B === a.memoizedProps && M === a.memoizedState || (b.effectTag |= 256),
                     b.memoizedProps = l,
                     b.memoizedState = La),
                     x.props = l,
                     x.state = La,
                     x.context = V,
                     l = la) : ("function" != typeof x.componentDidUpdate || B === a.memoizedProps && M === a.memoizedState || (b.effectTag |= 4),
                     "function" != typeof x.getSnapshotBeforeUpdate || B === a.memoizedProps && M === a.memoizedState || (b.effectTag |= 256),
                     l = !1);
                 return ge(a, b, h, l, t, m)
             }
             function ge(a, b, h, l, m, t) {
                 th(a, b);
                 var x = !!(64 & b.effectTag);
                 if (!l && !x)
                     return m && Zg(b, h, !1),
                     nc(a, b, t);
                 l = b.stateNode;
                 qj.current = b;
                 var B = x && "function" != typeof h.getDerivedStateFromError ? null : l.render();
                 return b.effectTag |= 1,
                 null !== a && x ? (b.child = da(b, a.child, null, t),
                 b.child = da(b, null, B, t)) : Pb(a, b, B, t),
                 b.memoizedState = l.state,
                 m && Zg(b, h, !0),
                 b.child
             }
             function $e(a) {
                 var b = a.stateNode;
                 b.pendingContext ? ta(0, b.pendingContext, b.pendingContext !== b.context) : b.context && ta(0, b.context, !1);
                 Zf(a, b.containerInfo)
             }
             function af(a, b, h) {
                 var l, m = b.mode, t = b.pendingProps, x = Ga.current, B = null, M = !1;
                 if ((l = !!(64 & b.effectTag)) || (l = !!(x & Ya) && (null === a || null !== a.memoizedState)),
                 l ? (B = rj,
                 M = !0,
                 b.effectTag &= -65) : null !== a && null === a.memoizedState || void 0 === t.fallback || !0 === t.unstable_avoidThisFallback || (x |= Ua),
                 lb(Ga, x & xa),
                 null === a)
                     if (M) {
                         if (t = t.fallback,
                         (a = Ac(null, m, 0, null)).return = b,
                         !(2 & b.mode))
                             for (M = null !== b.memoizedState ? b.child.child : b.child,
                             a.child = M; null !== M; )
                                 M.return = a,
                                 M = M.sibling;
                         (h = Ac(t, m, h, null)).return = b;
                         a.sibling = h;
                         m = a
                     } else
                         m = h = Z(b, null, t.children, h);
                 else {
                     if (null !== a.memoizedState)
                         if (m = (x = a.child).sibling,
                         M) {
                             if (t = t.fallback,
                             (h = Uc(x, x.pendingProps)).return = b,
                             !(2 & b.mode) && (M = null !== b.memoizedState ? b.child.child : b.child) !== x.child)
                                 for (h.child = M; null !== M; )
                                     M.return = h,
                                     M = M.sibling;
                             (t = Uc(m, t, m.expirationTime)).return = b;
                             h.sibling = t;
                             m = h;
                             h.childExpirationTime = 0;
                             h = t
                         } else
                             m = h = da(b, x.child, t.children, h);
                     else if (x = a.child,
                     M) {
                         if (M = t.fallback,
                         (t = Ac(null, m, 0, null)).return = b,
                         t.child = x,
                         null !== x && (x.return = t),
                         !(2 & b.mode))
                             for (x = null !== b.memoizedState ? b.child.child : b.child,
                             t.child = x; null !== x; )
                                 x.return = t,
                                 x = x.sibling;
                         (h = Ac(M, m, h, null)).return = b;
                         t.sibling = h;
                         h.effectTag |= 2;
                         m = t;
                         t.childExpirationTime = 0
                     } else
                         h = m = da(b, x, t.children, h);
                     b.stateNode = a.stateNode
                 }
                 return b.memoizedState = B,
                 b.child = m,
                 h
             }
             function Ad(a, b, h, l, m) {
                 var t = a.memoizedState;
                 null === t ? a.memoizedState = {
                     isBackwards: b,
                     rendering: null,
                     last: l,
                     tail: h,
                     tailExpiration: 0,
                     tailMode: m
                 } : (t.isBackwards = b,
                 t.rendering = null,
                 t.last = l,
                 t.tail = h,
                 t.tailExpiration = 0,
                 t.tailMode = m)
             }
             function dg(a, b, h) {
                 var l = b.pendingProps
                   , m = l.revealOrder
                   , t = l.tail;
                 if (Pb(a, b, l.children, h),
                 (l = Ga.current) & Ya)
                     l = l & xa | Ya,
                     b.effectTag |= 64;
                 else {
                     if (null !== a && 64 & a.effectTag)
                         a: for (a = b.child; null !== a; ) {
                             if (13 === a.tag) {
                                 if (null !== a.memoizedState) {
                                     a.expirationTime < h && (a.expirationTime = h);
                                     var x = a.alternate;
                                     null !== x && x.expirationTime < h && (x.expirationTime = h);
                                     eh(a.return, h)
                                 }
                             } else if (null !== a.child) {
                                 a.child.return = a;
                                 a = a.child;
                                 continue
                             }
                             if (a === b)
                                 break a;
                             for (; null === a.sibling; ) {
                                 if (null === a.return || a.return === b)
                                     break a;
                                 a = a.return
                             }
                             a.sibling.return = a.return;
                             a = a.sibling
                         }
                     l &= xa
                 }
                 if (lb(Ga, l),
                 2 & b.mode)
                     switch (m) {
                     case "forwards":
                         h = b.child;
                         for (m = null; null !== h; )
                             null !== (l = h.alternate) && null === Te(l) && (m = h),
                             h = h.sibling;
                         null === (h = m) ? (m = b.child,
                         b.child = null) : (m = h.sibling,
                         h.sibling = null);
                         Ad(b, !1, m, h, t);
                         break;
                     case "backwards":
                         h = null;
                         m = b.child;
                         for (b.child = null; null !== m; ) {
                             if (null !== (l = m.alternate) && null === Te(l)) {
                                 b.child = m;
                                 break
                             }
                             l = m.sibling;
                             m.sibling = h;
                             h = m;
                             m = l
                         }
                         Ad(b, !0, h, null, t);
                         break;
                     case "together":
                         Ad(b, !1, null, null, void 0);
                         break;
                     default:
                         b.memoizedState = null
                     }
                 else
                     b.memoizedState = null;
                 return b.child
             }
             function nc(a, b, h) {
                 if (null !== a && (b.dependencies = a.dependencies),
                 b.childExpirationTime < h)
                     return null;
                 if (null !== a && b.child !== a.child)
                     throw v(Error(153));
                 if (null !== b.child) {
                     h = Uc(a = b.child, a.pendingProps, a.expirationTime);
                     b.child = h;
                     for (h.return = b; null !== a.sibling; )
                         a = a.sibling,
                         (h = h.sibling = Uc(a, a.pendingProps, a.expirationTime)).return = b;
                     h.sibling = null
                 }
                 return b.child
             }
             function bf(a, b) {
                 switch (a.tailMode) {
                 case "hidden":
                     b = a.tail;
                     for (var h = null; null !== b; )
                         null !== b.alternate && (h = b),
                         b = b.sibling;
                     null === h ? a.tail = null : h.sibling = null;
                     break;
                 case "collapsed":
                     h = a.tail;
                     for (var l = null; null !== h; )
                         null !== h.alternate && (l = h),
                         h = h.sibling;
                     null === l ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : l.sibling = null
                 }
             }
             function he(a) {
                 switch (a.tag) {
                 case 1:
                     null != a.type.childContextTypes && (Wa(zb),
                     Wa(qb));
                     var b = a.effectTag;
                     return 2048 & b ? (a.effectTag = -2049 & b | 64,
                     a) : null;
                 case 3:
                     vd();
                     Wa(zb);
                     Wa(qb);
                     if (64 & (b = a.effectTag))
                         throw v(Error(285));
                     return a.effectTag = -2049 & b | 64,
                     a;
                 case 5:
                     return $f(a),
                     null;
                 case 13:
                     return Wa(Ga),
                     2048 & (b = a.effectTag) ? (a.effectTag = -2049 & b | 64,
                     a) : null;
                 default:
                     return null;
                 case 19:
                     return Wa(Ga),
                     null;
                 case 4:
                     return vd(),
                     null;
                 case 10:
                     return Ne(a),
                     null
                 }
             }
             function cf(a, b) {
                 return {
                     value: a,
                     source: b,
                     stack: Af(b)
                 }
             }
             function df(a, b) {
                 var h = b.source
                   , l = b.stack;
                 null === l && null !== h && (l = Af(h));
                 null !== h && $a(h.type);
                 b = b.value;
                 null !== a && 1 === a.tag && $a(a.type);
                 try {
                     console.error(b)
                 } catch (m) {
                     setTimeout(function() {
                         throw m;
                     })
                 }
             }
             function uh(a) {
                 var b = a.ref;
                 if (null !== b)
                     if ("function" == typeof b)
                         try {
                             b(null)
                         } catch (h) {
                             bd(a, h)
                         }
                     else
                         b.current = null
             }
             function ie(a, b, h) {
                 if (null !== (h = null !== (h = h.updateQueue) ? h.lastEffect : null)) {
                     var l = h = h.next;
                     do {
                         if ((l.tag & a) !== Za) {
                             var m = l.destroy;
                             l.destroy = void 0;
                             void 0 !== m && m()
                         }
                         (l.tag & b) !== Za && (m = l.create,
                         l.destroy = m());
                         l = l.next
                     } while (l !== h)
                 }
             }
             function ef(a, b) {
                 switch ("function" == typeof qi && qi(a),
                 a.tag) {
                 case 0:
                 case 11:
                 case 14:
                 case 15:
                     var h = a.updateQueue;
                     if (null !== h && null !== (h = h.lastEffect)) {
                         var l = h.next;
                         xc(97 < b ? 97 : b, function() {
                             var m = l;
                             do {
                                 var t = m.destroy;
                                 if (void 0 !== t) {
                                     var x = a;
                                     try {
                                         t()
                                     } catch (B) {
                                         bd(x, B)
                                     }
                                 }
                                 m = m.next
                             } while (m !== l)
                         })
                     }
                     break;
                 case 1:
                     uh(a);
                     "function" == typeof (b = a.stateNode).componentWillUnmount && function(m, t) {
                         try {
                             t.props = m.memoizedProps,
                             t.state = m.memoizedState,
                             t.componentWillUnmount()
                         } catch (x) {
                             bd(m, x)
                         }
                     }(a, b);
                     break;
                 case 5:
                     uh(a);
                     break;
                 case 4:
                     vh(a, b)
                 }
             }
             function cd(a, b) {
                 for (var h = a; ; )
                     if (ef(h, b),
                     null !== h.child && 4 !== h.tag)
                         h.child.return = h,
                         h = h.child;
                     else {
                         if (h === a)
                             break;
                         for (; null === h.sibling; ) {
                             if (null === h.return || h.return === a)
                                 return;
                             h = h.return
                         }
                         h.sibling.return = h.return;
                         h = h.sibling
                     }
             }
             function ff(a) {
                 return 5 === a.tag || 3 === a.tag || 4 === a.tag
             }
             function gf(a) {
                 a: {
                     for (var b = a.return; null !== b; ) {
                         if (ff(b)) {
                             var h = b;
                             break a
                         }
                         b = b.return
                     }
                     throw v(Error(160));
                 }
                 switch (b = h.stateNode,
                 h.tag) {
                 case 5:
                     var l = !1;
                     break;
                 case 3:
                 case 4:
                     b = b.containerInfo;
                     l = !0;
                     break;
                 default:
                     throw v(Error(161));
                 }
                 16 & h.effectTag && (yb(b, ""),
                 h.effectTag &= -17);
                 h = a;
                 a: b: for (; ; ) {
                     for (; null === h.sibling; ) {
                         if (null === h.return || ff(h.return)) {
                             h = null;
                             break a
                         }
                         h = h.return
                     }
                     h.sibling.return = h.return;
                     for (h = h.sibling; 5 !== h.tag && 6 !== h.tag && 18 !== h.tag; ) {
                         if (2 & h.effectTag)
                             continue b;
                         if (null === h.child || 4 === h.tag)
                             continue b;
                         h.child.return = h;
                         h = h.child
                     }
                     if (!(2 & h.effectTag)) {
                         h = h.stateNode;
                         break a
                     }
                 }
                 for (var m = a; ; ) {
                     var t = 5 === m.tag || 6 === m.tag;
                     if (t || 20 === m.tag) {
                         var x = t ? m.stateNode : m.stateNode.instance;
                         if (h)
                             if (l) {
                                 var B = x;
                                 x = h;
                                 8 === (t = b).nodeType ? t.parentNode.insertBefore(B, x) : t.insertBefore(B, x)
                             } else
                                 b.insertBefore(x, h);
                         else
                             l ? (8 === (B = b).nodeType ? (t = B.parentNode).insertBefore(x, B) : (t = B).appendChild(x),
                             null != (B = B._reactRootContainer) || null !== t.onclick || (t.onclick = Je)) : b.appendChild(x)
                     } else if (4 !== m.tag && null !== m.child) {
                         m.child.return = m;
                         m = m.child;
                         continue
                     }
                     if (m === a)
                         break;
                     for (; null === m.sibling; ) {
                         if (null === m.return || m.return === a)
                             return;
                         m = m.return
                     }
                     m.sibling.return = m.return;
                     m = m.sibling
                 }
             }
             function vh(a, b) {
                 for (var h = a, l = !1, m = void 0, t = void 0; ; ) {
                     if (!l) {
                         l = h.return;
                         a: for (; ; ) {
                             if (null === l)
                                 throw v(Error(160));
                             switch (m = l.stateNode,
                             l.tag) {
                             case 5:
                                 t = !1;
                                 break a;
                             case 3:
                             case 4:
                                 m = m.containerInfo;
                                 t = !0;
                                 break a
                             }
                             l = l.return
                         }
                         l = !0
                     }
                     if (5 === h.tag || 6 === h.tag)
                         if (cd(h, b),
                         t) {
                             var x = m
                               , B = h.stateNode;
                             8 === x.nodeType ? x.parentNode.removeChild(B) : x.removeChild(B)
                         } else
                             m.removeChild(h.stateNode);
                     else if (20 === h.tag)
                         B = h.stateNode.instance,
                         cd(h, b),
                         t ? 8 === (x = m).nodeType ? x.parentNode.removeChild(B) : x.removeChild(B) : m.removeChild(B);
                     else if (4 === h.tag) {
                         if (null !== h.child) {
                             m = h.stateNode.containerInfo;
                             t = !0;
                             h.child.return = h;
                             h = h.child;
                             continue
                         }
                     } else if (ef(h, b),
                     null !== h.child) {
                         h.child.return = h;
                         h = h.child;
                         continue
                     }
                     if (h === a)
                         break;
                     for (; null === h.sibling; ) {
                         if (null === h.return || h.return === a)
                             return;
                         4 === (h = h.return).tag && (l = !1)
                     }
                     h.sibling.return = h.return;
                     h = h.sibling
                 }
             }
             function wh(a, b) {
                 switch (b.tag) {
                 case 0:
                 case 11:
                 case 14:
                 case 15:
                     ie(fb, mb, b);
                     break;
                 case 1:
                 case 3:
                 case 12:
                 case 17:
                 case 20:
                     break;
                 case 5:
                     var h = b.stateNode;
                     if (null != h) {
                         var l = b.memoizedProps
                           , m = null !== a ? a.memoizedProps : l;
                         a = b.type;
                         var t = b.updateQueue;
                         if (b.updateQueue = null,
                         null !== t) {
                             h[we] = l;
                             "input" === a && "radio" === l.type && null != l.name && Pg(h, l);
                             Ie(a, m);
                             b = Ie(a, l);
                             for (m = 0; m < t.length; m += 2) {
                                 var x = t[m]
                                   , B = t[m + 1];
                                 "style" === x ? Sf(h, B) : "dangerouslySetInnerHTML" === x ? xh(h, B) : "children" === x ? yb(h, B) : Cf(h, x, B, b)
                             }
                             switch (a) {
                             case "input":
                                 Ef(h, l);
                                 break;
                             case "textarea":
                                 He(h, l);
                                 break;
                             case "select":
                                 b = h._wrapperState.wasMultiple,
                                 h._wrapperState.wasMultiple = !!l.multiple,
                                 null != (a = l.value) ? sc(h, !!l.multiple, a, !1) : b !== !!l.multiple && (null != l.defaultValue ? sc(h, !!l.multiple, l.defaultValue, !0) : sc(h, !!l.multiple, l.multiple ? [] : "", !1))
                             }
                         }
                     }
                     break;
                 case 6:
                     if (null === b.stateNode)
                         throw v(Error(162));
                     b.stateNode.nodeValue = b.memoizedProps;
                     break;
                 case 13:
                     if (h = b,
                     null === b.memoizedState ? l = !1 : (l = !0,
                     h = b.child,
                     ri = d()),
                     null !== h)
                         a: for (a = h; ; ) {
                             if (5 === a.tag)
                                 t = a.stateNode,
                                 l ? "function" == typeof (t = t.style).setProperty ? t.setProperty("display", "none", "important") : t.display = "none" : (t = a.stateNode,
                                 m = null != (m = a.memoizedProps.style) && m.hasOwnProperty("display") ? m.display : null,
                                 t.style.display = Zb("display", m));
                             else if (6 === a.tag)
                                 a.stateNode.nodeValue = l ? "" : a.memoizedProps;
                             else {
                                 if (13 === a.tag && null !== a.memoizedState) {
                                     (t = a.child.sibling).return = a;
                                     a = t;
                                     continue
                                 }
                                 if (null !== a.child) {
                                     a.child.return = a;
                                     a = a.child;
                                     continue
                                 }
                             }
                             if (a === h)
                                 break a;
                             for (; null === a.sibling; ) {
                                 if (null === a.return || a.return === h)
                                     break a;
                                 a = a.return
                             }
                             a.sibling.return = a.return;
                             a = a.sibling
                         }
                     hf(b);
                     break;
                 case 19:
                     hf(b);
                     break;
                 default:
                     throw v(Error(163));
                 }
             }
             function hf(a) {
                 var b = a.updateQueue;
                 if (null !== b) {
                     a.updateQueue = null;
                     var h = a.stateNode;
                     null === h && (h = a.stateNode = new sj);
                     b.forEach(function(l) {
                         var m = yh.bind(null, a, l);
                         h.has(l) || (h.add(l),
                         l.then(m, m))
                     })
                 }
             }
             function zh(a, b, h) {
                 (h = yc(h, null)).tag = 3;
                 h.payload = {
                     element: null
                 };
                 var l = b.value;
                 return h.callback = function() {
                     Ah || (Ah = !0,
                     si = l);
                     df(a, b)
                 }
                 ,
                 h
             }
             function Bh(a, b, h) {
                 (h = yc(h, null)).tag = 3;
                 var l = a.type.getDerivedStateFromError;
                 if ("function" == typeof l) {
                     var m = b.value;
                     h.payload = function() {
                         return df(a, b),
                         l(m)
                     }
                 }
                 var t = a.stateNode;
                 return null !== t && "function" == typeof t.componentDidCatch && (h.callback = function() {
                     "function" != typeof l && (null === Bd ? Bd = new Set([this]) : Bd.add(this),
                     df(a, b));
                     var x = b.stack;
                     this.componentDidCatch(b.value, {
                         componentStack: null !== x ? x : ""
                     })
                 }
                 ),
                 h
             }
             function bc() {
                 return (Fa & (Hc | Ic)) !== tb ? 1073741821 - (d() / 10 | 0) : 0 !== Ch ? Ch : Ch = 1073741821 - (d() / 10 | 0)
             }
             function Fc(a, b, h) {
                 if (!(2 & (b = b.mode)))
                     return 1073741823;
                 var l = Vd();
                 if (!(4 & b))
                     return 99 === l ? 1073741823 : 1073741822;
                 if ((Fa & Hc) !== tb)
                     return oc;
                 if (null !== h)
                     a = 1073741821 - 25 * (1 + ((1073741821 - a + (0 | h.timeoutMs || 5E3) / 10) / 25 | 0));
                 else
                     switch (l) {
                     case 99:
                         a = 1073741823;
                         break;
                     case 98:
                         a = 1073741821 - 10 * (1 + ((1073741821 - a + 15) / 10 | 0));
                         break;
                     case 97:
                     case 96:
                         a = 1073741821 - 25 * (1 + ((1073741821 - a + 500) / 25 | 0));
                         break;
                     case 95:
                         a = 1;
                         break;
                     default:
                         throw v(Error(326));
                     }
                 return null !== je && a === oc && --a,
                 a
             }
             function ee(a, b) {
                 if (50 < eg)
                     throw eg = 0,
                     ti = null,
                     v(Error(185));
                 if (null !== (a = jf(a, b))) {
                     a.pingTime = 0;
                     var h = Vd();
                     if (1073741823 === b)
                         if ((Fa & ui) !== tb && (Fa & (Hc | Ic)) === tb)
                             for (var l = Gb(a, 1073741823, !0); null !== l; )
                                 l = l(!0);
                         else
                             dc(a, 99, 1073741823),
                             Fa === tb && Mb();
                     else
                         dc(a, h, b);
                     (4 & Fa) === tb || 98 !== h && 99 !== h || (null === ke ? ke = new Map([[a, b]]) : (void 0 === (h = ke.get(a)) || h > b) && ke.set(a, b))
                 }
             }
             function jf(a, b) {
                 a.expirationTime < b && (a.expirationTime = b);
                 var h = a.alternate;
                 null !== h && h.expirationTime < b && (h.expirationTime = b);
                 var l = a.return
                   , m = null;
                 if (null === l && 3 === a.tag)
                     m = a.stateNode;
                 else
                     for (; null !== l; ) {
                         if (h = l.alternate,
                         l.childExpirationTime < b && (l.childExpirationTime = b),
                         null !== h && h.childExpirationTime < b && (h.childExpirationTime = b),
                         null === l.return && 3 === l.tag) {
                             m = l.stateNode;
                             break
                         }
                         l = l.return
                     }
                 return null !== m && (b > m.firstPendingTime && (m.firstPendingTime = b),
                 0 === (a = m.lastPendingTime) || b < a) && (m.lastPendingTime = b),
                 m
             }
             function dc(a, b, h) {
                 if (a.callbackExpirationTime < h) {
                     var l = a.callbackNode;
                     null !== l && l !== Me && ch(l);
                     a.callbackExpirationTime = h;
                     1073741823 === h ? a.callbackNode = ib(fg.bind(null, a, Gb.bind(null, a, h))) : (l = null,
                     1 !== h && (l = {
                         timeout: 10 * (1073741821 - h) - d()
                     }),
                     a.callbackNode = sd(b, fg.bind(null, a, Gb.bind(null, a, h)), l))
                 }
             }
             function fg(a, b, h) {
                 var l = a.callbackNode
                   , m = null;
                 try {
                     return null !== (m = b(h)) ? fg.bind(null, a, m) : null
                 } finally {
                     null === m && l === a.callbackNode && (a.callbackNode = null,
                     a.callbackExpirationTime = 0)
                 }
             }
             function gg() {
                 (Fa & (1 | Hc | Ic)) === tb && (function() {
                     if (null !== ke) {
                         var a = ke;
                         ke = null;
                         a.forEach(function(b, h) {
                             ib(Gb.bind(null, h, b))
                         });
                         Mb()
                     }
                 }(),
                 Cd())
             }
             function Dh(a, b) {
                 var h = Fa;
                 Fa |= 1;
                 try {
                     return a(b)
                 } finally {
                     (Fa = h) === tb && Mb()
                 }
             }
             function hg(a, b, h, l) {
                 var m = Fa;
                 Fa |= 4;
                 try {
                     return xc(98, a.bind(null, b, h, l))
                 } finally {
                     (Fa = m) === tb && Mb()
                 }
             }
             function le(a, b) {
                 var h = Fa;
                 Fa &= -2;
                 Fa |= ui;
                 try {
                     return a(b)
                 } finally {
                     (Fa = h) === tb && Mb()
                 }
             }
             function Jc(a, b) {
                 a.finishedWork = null;
                 a.finishedExpirationTime = 0;
                 var h = a.timeoutHandle;
                 if (-1 !== h && (a.timeoutHandle = -1,
                 vi(h)),
                 null !== Va)
                     for (h = Va.return; null !== h; ) {
                         var l = h;
                         switch (l.tag) {
                         case 1:
                             null != l.type.childContextTypes && (Wa(zb),
                             Wa(qb));
                             break;
                         case 3:
                             vd();
                             Wa(zb);
                             Wa(qb);
                             break;
                         case 5:
                             $f(l);
                             break;
                         case 4:
                             vd();
                             break;
                         case 13:
                         case 19:
                             Wa(Ga);
                             break;
                         case 10:
                             Ne(l)
                         }
                         h = h.return
                     }
                 je = a;
                 Va = Uc(a.current, null);
                 oc = b;
                 Kb = me;
                 ig = dd = 1073741823;
                 Eh = null;
                 jg = !1
             }
             function Gb(a, b, h) {
                 if ((Fa & (Hc | Ic)) !== tb)
                     throw v(Error(327));
                 if (a.firstPendingTime < b)
                     return null;
                 if (h && a.finishedExpirationTime === b)
                     return Kc.bind(null, a);
                 if (Cd(),
                 a !== je || b !== oc)
                     Jc(a, b);
                 else if (Kb === Fh)
                     if (jg)
                         Jc(a, b);
                     else {
                         var l = a.lastPendingTime;
                         if (l < b)
                             return Gb.bind(null, a, l)
                     }
                 if (null !== Va) {
                     l = Fa;
                     Fa |= Hc;
                     var m = Gh.current;
                     if (null === m && (m = Ue),
                     Gh.current = Ue,
                     h) {
                         if (1073741823 !== b) {
                             var t = bc();
                             if (t < b)
                                 return Fa = l,
                                 q = r = k = null,
                                 Gh.current = m,
                                 Gb.bind(null, a, t)
                         }
                     } else
                         Ch = 0;
                     for (; ; )
                         try {
                             if (h)
                                 for (; null !== Va; )
                                     Va = kg(Va);
                             else
                                 for (; null !== Va && !wi(); )
                                     Va = kg(Va);
                             break
                         } catch (ud) {
                             q = r = k = null;
                             if (mh(),
                             null === (t = Va) || null === t.return)
                                 throw Jc(a, b),
                                 Fa = l,
                                 ud;
                             a: {
                                 var x = a
                                   , B = t.return
                                   , M = t
                                   , V = ud
                                   , la = oc;
                                 if (M.effectTag |= 1024,
                                 M.firstEffect = M.lastEffect = null,
                                 null !== V && "object" == typeof V && "function" == typeof V.then) {
                                     var Ha = V
                                       , La = !!(Ga.current & Ua);
                                     V = B;
                                     do {
                                         var Ra;
                                         if ((Ra = 13 === V.tag) && (null !== V.memoizedState ? Ra = !1 : Ra = void 0 !== (Ra = V.memoizedProps).fallback && (!0 !== Ra.unstable_avoidThisFallback || !La)),
                                         Ra) {
                                             if (null === (B = V.updateQueue) ? ((B = new Set).add(Ha),
                                             V.updateQueue = B) : B.add(Ha),
                                             !(2 & V.mode)) {
                                                 V.effectTag |= 64;
                                                 M.effectTag &= -1957;
                                                 1 === M.tag && (null === M.alternate ? M.tag = 17 : ((la = yc(1073741823, null)).tag = 2,
                                                 Nb(M, la)));
                                                 M.expirationTime = 1073741823;
                                                 break a
                                             }
                                             M = x;
                                             x = la;
                                             null === (La = M.pingCache) ? (La = M.pingCache = new tj,
                                             B = new Set,
                                             La.set(Ha, B)) : void 0 === (B = La.get(Ha)) && (B = new Set,
                                             La.set(Ha, B));
                                             B.has(x) || (B.add(x),
                                             M = Hh.bind(null, M, Ha, x),
                                             Ha.then(M, M));
                                             V.effectTag |= 2048;
                                             V.expirationTime = la;
                                             break a
                                         }
                                         V = V.return
                                     } while (null !== V);
                                     V = Error(($a(M.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a \x3cSuspense fallback\x3d...\x3e component higher in the tree to provide a loading indicator or placeholder to display." + Af(M))
                                 }
                                 Kb !== xi && (Kb = aj);
                                 V = cf(V, M);
                                 M = B;
                                 do {
                                     switch (M.tag) {
                                     case 3:
                                         M.effectTag |= 2048;
                                         M.expirationTime = la;
                                         Tb(M, la = zh(M, V, la));
                                         break a;
                                     case 1:
                                         if (Ha = V,
                                         x = M.type,
                                         B = M.stateNode,
                                         !(64 & M.effectTag || "function" != typeof x.getDerivedStateFromError && (null === B || "function" != typeof B.componentDidCatch || null !== Bd && Bd.has(B)))) {
                                             M.effectTag |= 2048;
                                             M.expirationTime = la;
                                             Tb(M, la = Bh(M, Ha, la));
                                             break a
                                         }
                                     }
                                     M = M.return
                                 } while (null !== M)
                             }
                             Va = lg(t)
                         }
                     Fa = l;
                     q = r = k = null;
                     if (Gh.current = m,
                     null !== Va)
                         return Gb.bind(null, a, b)
                 }
                 if (a.finishedWork = a.current.alternate,
                 a.finishedExpirationTime = b,
                 function(ud, Yf) {
                     var Y = ud.firstBatch;
                     return !!(null !== Y && Y._defer && Y._expirationTime >= Yf) && (sd(97, function() {
                         return Y._onComplete(),
                         null
                     }),
                     !0)
                 }(a, b))
                     return null;
                 switch (je = null,
                 Kb) {
                 case me:
                     throw v(Error(328));
                 case aj:
                     return (l = a.lastPendingTime) < b ? Gb.bind(null, a, l) : h ? Kc.bind(null, a) : (Jc(a, b),
                     ib(Gb.bind(null, a, b)),
                     null);
                 case Ih:
                     return 1073741823 === dd && !h && 10 < (h = ri + bj - d()) ? jg ? (Jc(a, b),
                     Gb.bind(null, a, b)) : (l = a.lastPendingTime) < b ? Gb.bind(null, a, l) : (a.timeoutHandle = mg(Kc.bind(null, a), h),
                     null) : Kc.bind(null, a);
                 case Fh:
                     if (!h) {
                         if (jg)
                             return Jc(a, b),
                             Gb.bind(null, a, b);
                         if ((h = a.lastPendingTime) < b)
                             return Gb.bind(null, a, h);
                         if (1073741823 !== ig ? h = 10 * (1073741821 - ig) - d() : 1073741823 === dd ? h = 0 : (h = 10 * (1073741821 - dd) - 5E3,
                         0 > (h = (l = d()) - h) && (h = 0),
                         (b = 10 * (1073741821 - b) - l) < (h = (120 > h ? 120 : 480 > h ? 480 : 1080 > h ? 1080 : 1920 > h ? 1920 : 3E3 > h ? 3E3 : 4320 > h ? 4320 : 1960 * uj(h / 1960)) - h) && (h = b)),
                         10 < h)
                             return a.timeoutHandle = mg(Kc.bind(null, a), h),
                             null
                     }
                     return Kc.bind(null, a);
                 case xi:
                     return !h && 1073741823 !== dd && null !== Eh && (l = dd,
                     0 >= (b = 0 | (m = Eh).busyMinDurationMs) ? b = 0 : (h = 0 | m.busyDelayMs,
                     b = (l = d() - (10 * (1073741821 - l) - (0 | m.timeoutMs || 5E3))) <= h ? 0 : h + b - l),
                     10 < b) ? (a.timeoutHandle = mg(Kc.bind(null, a), b),
                     null) : Kc.bind(null, a);
                 default:
                     throw v(Error(329));
                 }
             }
             function hh(a, b) {
                 a < dd && 1 < a && (dd = a);
                 null !== b && a < ig && 1 < a && (ig = a,
                 Eh = b)
             }
             function kg(a) {
                 var b = cj(a.alternate, a, oc);
                 return a.memoizedProps = a.pendingProps,
                 null === b && (b = lg(a)),
                 dj.current = null,
                 b
             }
             function lg(a) {
                 Va = a;
                 do {
                     var b = Va.alternate;
                     if (a = Va.return,
                     1024 & Va.effectTag) {
                         if (null !== (b = he(Va)))
                             return b.effectTag &= 1023,
                             b;
                         null !== a && (a.firstEffect = a.lastEffect = null,
                         a.effectTag |= 1024)
                     } else {
                         a: {
                             var h = b
                               , l = oc
                               , m = (b = Va).pendingProps;
                             switch (b.tag) {
                             case 2:
                             case 16:
                             case 15:
                             case 0:
                             case 11:
                             case 7:
                             case 8:
                             case 12:
                             case 9:
                             case 14:
                             case 18:
                             case 20:
                                 break;
                             case 1:
                             case 17:
                                 null != b.type.childContextTypes && (Wa(zb),
                                 Wa(qb));
                                 break;
                             case 3:
                                 vd();
                                 Wa(zb);
                                 Wa(qb);
                                 (l = b.stateNode).pendingContext && (l.context = l.pendingContext,
                                 l.pendingContext = null);
                                 null !== h && null !== h.child || (zd(b),
                                 b.effectTag &= -3);
                                 yi(b);
                                 break;
                             case 5:
                                 $f(b);
                                 l = Wc(ya.current);
                                 var t = b.type;
                                 if (null !== h && null != b.stateNode)
                                     ej(h, b, t, m, l),
                                     h.ref !== b.ref && (b.effectTag |= 128);
                                 else if (m) {
                                     var x = Wc(wa.current);
                                     if (zd(b)) {
                                         m = void 0;
                                         t = (h = b).stateNode;
                                         var B = h.type
                                           , M = h.memoizedProps;
                                         switch (t[fc] = h,
                                         t[we] = M,
                                         B) {
                                         case "iframe":
                                         case "object":
                                         case "embed":
                                             db("load", t);
                                             break;
                                         case "video":
                                         case "audio":
                                             for (var V = 0; V < Td.length; V++)
                                                 db(Td[V], t);
                                             break;
                                         case "source":
                                             db("error", t);
                                             break;
                                         case "img":
                                         case "image":
                                         case "link":
                                             db("error", t);
                                             db("load", t);
                                             break;
                                         case "form":
                                             db("reset", t);
                                             db("submit", t);
                                             break;
                                         case "details":
                                             db("toggle", t);
                                             break;
                                         case "input":
                                             ld(t, M);
                                             db("invalid", t);
                                             $b(l, "onChange");
                                             break;
                                         case "select":
                                             t._wrapperState = {
                                                 wasMultiple: !!M.multiple
                                             };
                                             db("invalid", t);
                                             $b(l, "onChange");
                                             break;
                                         case "textarea":
                                             ic(t, M),
                                             db("invalid", t),
                                             $b(l, "onChange")
                                         }
                                         for (m in qd(B, M),
                                         V = null,
                                         M)
                                             M.hasOwnProperty(m) && (x = M[m],
                                             "children" === m ? "string" == typeof x ? t.textContent !== x && (V = ["children", x]) : "number" == typeof x && t.textContent !== "" + x && (V = ["children", "" + x]) : pc.hasOwnProperty(m) && null != x && $b(l, m));
                                         switch (B) {
                                         case "input":
                                             Qa(t);
                                             Qg(t, M, !0);
                                             break;
                                         case "textarea":
                                             Qa(t);
                                             Aa(t);
                                             break;
                                         case "select":
                                         case "option":
                                             break;
                                         default:
                                             "function" == typeof M.onClick && (t.onclick = Je)
                                         }
                                         l = V;
                                         h.updateQueue = l;
                                         null !== l && (b.effectTag |= 4)
                                     } else {
                                         M = t;
                                         h = m;
                                         B = b;
                                         V = 9 === l.nodeType ? l : l.ownerDocument;
                                         x === ng.html && (x = Qc(M));
                                         x === ng.html ? "script" === M ? ((M = V.createElement("div")).innerHTML = "\x3cscript\x3e\x3c/script\x3e",
                                         V = M.removeChild(M.firstChild)) : "string" == typeof h.is ? V = V.createElement(M, {
                                             is: h.is
                                         }) : (V = V.createElement(M),
                                         "select" === M && (M = V,
                                         h.multiple ? M.multiple = !0 : h.size && (M.size = h.size))) : V = V.createElementNS(x, M);
                                         (M = V)[fc] = B;
                                         M[we] = h;
                                         fj(h = M, b, !1, !1);
                                         B = h;
                                         var la = l
                                           , Ha = Ie(t, m);
                                         switch (t) {
                                         case "iframe":
                                         case "object":
                                         case "embed":
                                             db("load", B);
                                             l = m;
                                             break;
                                         case "video":
                                         case "audio":
                                             for (l = 0; l < Td.length; l++)
                                                 db(Td[l], B);
                                             l = m;
                                             break;
                                         case "source":
                                             db("error", B);
                                             l = m;
                                             break;
                                         case "img":
                                         case "image":
                                         case "link":
                                             db("error", B);
                                             db("load", B);
                                             l = m;
                                             break;
                                         case "form":
                                             db("reset", B);
                                             db("submit", B);
                                             l = m;
                                             break;
                                         case "details":
                                             db("toggle", B);
                                             l = m;
                                             break;
                                         case "input":
                                             ld(B, m);
                                             l = Kd(B, m);
                                             db("invalid", B);
                                             $b(la, "onChange");
                                             break;
                                         case "option":
                                             l = pd(B, m);
                                             break;
                                         case "select":
                                             B._wrapperState = {
                                                 wasMultiple: !!m.multiple
                                             };
                                             l = Eb({}, m, {
                                                 value: void 0
                                             });
                                             db("invalid", B);
                                             $b(la, "onChange");
                                             break;
                                         case "textarea":
                                             ic(B, m);
                                             l = Oa(B, m);
                                             db("invalid", B);
                                             $b(la, "onChange");
                                             break;
                                         default:
                                             l = m
                                         }
                                         qd(t, l);
                                         M = void 0;
                                         V = t;
                                         x = B;
                                         var La = l;
                                         for (M in La)
                                             if (La.hasOwnProperty(M)) {
                                                 var Ra = La[M];
                                                 "style" === M ? Sf(x, Ra) : "dangerouslySetInnerHTML" === M ? null != (Ra = Ra ? Ra.__html : void 0) && xh(x, Ra) : "children" === M ? "string" == typeof Ra ? ("textarea" !== V || "" !== Ra) && yb(x, Ra) : "number" == typeof Ra && yb(x, "" + Ra) : "suppressContentEditableWarning" !== M && "suppressHydrationWarning" !== M && "autoFocus" !== M && (pc.hasOwnProperty(M) ? null != Ra && $b(la, M) : null != Ra && Cf(x, M, Ra, Ha))
                                             }
                                         switch (t) {
                                         case "input":
                                             Qa(B);
                                             Qg(B, m, !1);
                                             break;
                                         case "textarea":
                                             Qa(B);
                                             Aa(B);
                                             break;
                                         case "option":
                                             null != m.value && B.setAttribute("value", "" + gc(m.value));
                                             break;
                                         case "select":
                                             l = B;
                                             B = m;
                                             l.multiple = !!B.multiple;
                                             null != (M = B.value) ? sc(l, !!B.multiple, M, !1) : null != B.defaultValue && sc(l, !!B.multiple, B.defaultValue, !0);
                                             break;
                                         default:
                                             "function" == typeof l.onClick && (B.onclick = Je)
                                         }
                                         Rc(t, m) && (b.effectTag |= 4);
                                         b.stateNode = h
                                     }
                                     null !== b.ref && (b.effectTag |= 128)
                                 } else if (null === b.stateNode)
                                     throw v(Error(166));
                                 break;
                             case 6:
                                 if (h && null != b.stateNode)
                                     gj(h, b, h.memoizedProps, m);
                                 else {
                                     if ("string" != typeof m && null === b.stateNode)
                                         throw v(Error(166));
                                     h = Wc(ya.current);
                                     Wc(wa.current);
                                     zd(b) ? (l = b.stateNode,
                                     h = b.memoizedProps,
                                     l[fc] = b,
                                     l.nodeValue !== h && (b.effectTag |= 4)) : (l = b,
                                     (h = (9 === h.nodeType ? h : h.ownerDocument).createTextNode(m))[fc] = b,
                                     l.stateNode = h)
                                 }
                                 break;
                             case 13:
                                 if (Wa(Ga),
                                 m = b.memoizedState,
                                 64 & b.effectTag) {
                                     b.expirationTime = l;
                                     break a
                                 }
                                 l = null !== m;
                                 m = !1;
                                 null === h ? zd(b) : (m = null !== (t = h.memoizedState),
                                 l || null === t || null !== (t = h.child.sibling) && (null !== (B = b.firstEffect) ? (b.firstEffect = t,
                                 t.nextEffect = B) : (b.firstEffect = b.lastEffect = t,
                                 t.nextEffect = null),
                                 t.effectTag = 8));
                                 l && !m && 2 & b.mode && (null === h && !0 !== b.memoizedProps.unstable_avoidThisFallback || Ga.current & Ua ? Kb === me && (Kb = Ih) : Kb !== me && Kb !== Ih || (Kb = Fh));
                                 (l || m) && (b.effectTag |= 4);
                                 break;
                             case 4:
                                 vd();
                                 yi(b);
                                 break;
                             case 10:
                                 Ne(b);
                                 break;
                             case 19:
                                 if (Wa(Ga),
                                 null === (m = b.memoizedState))
                                     break;
                                 if (t = !!(64 & b.effectTag),
                                 null === (B = m.rendering))
                                     if (t)
                                         bf(m, !1);
                                     else {
                                         if (Kb !== me || null !== h && 64 & h.effectTag)
                                             for (h = b.child; null !== h; ) {
                                                 if (null !== (B = Te(h))) {
                                                     b.effectTag |= 64;
                                                     bf(m, !1);
                                                     null !== (h = B.updateQueue) && (b.updateQueue = h,
                                                     b.effectTag |= 4);
                                                     b.firstEffect = b.lastEffect = null;
                                                     for (h = b.child; null !== h; )
                                                         t = l,
                                                         (m = h).effectTag &= 2,
                                                         m.nextEffect = null,
                                                         m.firstEffect = null,
                                                         m.lastEffect = null,
                                                         null === (B = m.alternate) ? (m.childExpirationTime = 0,
                                                         m.expirationTime = t,
                                                         m.child = null,
                                                         m.memoizedProps = null,
                                                         m.memoizedState = null,
                                                         m.updateQueue = null,
                                                         m.dependencies = null) : (m.childExpirationTime = B.childExpirationTime,
                                                         m.expirationTime = B.expirationTime,
                                                         m.child = B.child,
                                                         m.memoizedProps = B.memoizedProps,
                                                         m.memoizedState = B.memoizedState,
                                                         m.updateQueue = B.updateQueue,
                                                         t = B.dependencies,
                                                         m.dependencies = null === t ? null : {
                                                             expirationTime: t.expirationTime,
                                                             firstContext: t.firstContext,
                                                             responders: t.responders
                                                         }),
                                                         h = h.sibling;
                                                     lb(Ga, Ga.current & xa | Ya);
                                                     b = b.child;
                                                     break a
                                                 }
                                                 h = h.sibling
                                             }
                                     }
                                 else {
                                     if (!t)
                                         if (null !== (h = Te(B))) {
                                             if (b.effectTag |= 64,
                                             t = !0,
                                             bf(m, !0),
                                             null === m.tail && "hidden" === m.tailMode) {
                                                 null !== (l = h.updateQueue) && (b.updateQueue = l,
                                                 b.effectTag |= 4);
                                                 null !== (b = b.lastEffect = m.lastEffect) && (b.nextEffect = null);
                                                 break
                                             }
                                         } else
                                             d() > m.tailExpiration && 1 < l && (b.effectTag |= 64,
                                             t = !0,
                                             bf(m, !1),
                                             b.expirationTime = b.childExpirationTime = l - 1);
                                     m.isBackwards ? (B.sibling = b.child,
                                     b.child = B) : (null !== (l = m.last) ? l.sibling = B : b.child = B,
                                     m.last = B)
                                 }
                                 if (null !== m.tail) {
                                     0 === m.tailExpiration && (m.tailExpiration = d() + 500);
                                     l = m.tail;
                                     m.rendering = l;
                                     m.tail = l.sibling;
                                     m.lastEffect = b.lastEffect;
                                     l.sibling = null;
                                     h = Ga.current;
                                     lb(Ga, t ? h & xa | Ya : h & xa);
                                     b = l;
                                     break a
                                 }
                                 break;
                             default:
                                 throw v(Error(156));
                             }
                             b = null
                         }
                         if (l = Va,
                         1 === oc || 1 !== l.childExpirationTime) {
                             h = 0;
                             for (m = l.child; null !== m; )
                                 (t = m.expirationTime) > h && (h = t),
                                 (B = m.childExpirationTime) > h && (h = B),
                                 m = m.sibling;
                             l.childExpirationTime = h
                         }
                         if (null !== b)
                             return b;
                         null !== a && !(1024 & a.effectTag) && (null === a.firstEffect && (a.firstEffect = Va.firstEffect),
                         null !== Va.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = Va.firstEffect),
                         a.lastEffect = Va.lastEffect),
                         1 < Va.effectTag && (null !== a.lastEffect ? a.lastEffect.nextEffect = Va : a.firstEffect = Va,
                         a.lastEffect = Va))
                     }
                     if (null !== (b = Va.sibling))
                         return b;
                     Va = a
                 } while (null !== Va);
                 return Kb === me && (Kb = xi),
                 null
             }
             function Kc(a) {
                 var b = Vd();
                 return xc(99, zi.bind(null, a, b)),
                 null !== og && sd(97, function() {
                     return Cd(),
                     null
                 }),
                 null
             }
             function zi(a, b) {
                 if (Cd(),
                 (Fa & (Hc | Ic)) !== tb)
                     throw v(Error(327));
                 var h = a.finishedWork
                   , l = a.finishedExpirationTime;
                 if (null === h)
                     return null;
                 if (a.finishedWork = null,
                 a.finishedExpirationTime = 0,
                 h === a.current)
                     throw v(Error(177));
                 a.callbackNode = null;
                 a.callbackExpirationTime = 0;
                 var m = h.expirationTime
                   , t = h.childExpirationTime;
                 if (m = t > m ? t : m,
                 a.firstPendingTime = m,
                 m < a.lastPendingTime && (a.lastPendingTime = m),
                 a === je && (Va = je = null,
                 oc = 0),
                 1 < h.effectTag ? null !== h.lastEffect ? (h.lastEffect.nextEffect = h,
                 m = h.firstEffect) : m = h : m = h.firstEffect,
                 null !== m) {
                     t = Fa;
                     Fa |= Ic;
                     dj.current = null;
                     pg = Pd;
                     var x = Qf();
                     if (Fe(x)) {
                         if ("selectionStart"in x)
                             var B = {
                                 start: x.selectionStart,
                                 end: x.selectionEnd
                             };
                         else
                             a: {
                                 var M = (B = (B = x.ownerDocument) && B.defaultView || window).getSelection && B.getSelection();
                                 if (M && 0 !== M.rangeCount) {
                                     B = M.anchorNode;
                                     var V = M.anchorOffset
                                       , la = M.focusNode;
                                     M = M.focusOffset;
                                     try {
                                         B.nodeType,
                                         la.nodeType
                                     } catch (kf) {
                                         B = null;
                                         break a
                                     }
                                     var Ha = 0
                                       , La = -1
                                       , Ra = -1
                                       , ud = 0
                                       , Yf = 0
                                       , Y = x
                                       , X = null;
                                     b: for (; ; ) {
                                         for (var ca; Y !== B || 0 !== V && 3 !== Y.nodeType || (La = Ha + V),
                                         Y !== la || 0 !== M && 3 !== Y.nodeType || (Ra = Ha + M),
                                         3 === Y.nodeType && (Ha += Y.nodeValue.length),
                                         null !== (ca = Y.firstChild); )
                                             X = Y,
                                             Y = ca;
                                         for (; ; ) {
                                             if (Y === x)
                                                 break b;
                                             if (X === B && ++ud === V && (La = Ha),
                                             X === la && ++Yf === M && (Ra = Ha),
                                             null !== (ca = Y.nextSibling))
                                                 break;
                                             X = (Y = X).parentNode
                                         }
                                         Y = ca
                                     }
                                     B = -1 === La || -1 === Ra ? null : {
                                         start: La,
                                         end: Ra
                                     }
                                 } else
                                     B = null
                             }
                         B = B || {
                             start: 0,
                             end: 0
                         }
                     } else
                         B = null;
                     qg = {
                         focusedElem: x,
                         selectionRange: B
                     };
                     Pd = !1;
                     va = m;
                     do
                         try {
                             for (; null !== va; ) {
                                 if (256 & va.effectTag) {
                                     var oa = va.alternate;
                                     switch ((x = va).tag) {
                                     case 0:
                                     case 11:
                                     case 15:
                                         ie(ub, Za, x);
                                         break;
                                     case 1:
                                         if (256 & x.effectTag && null !== oa) {
                                             var qa = oa.memoizedProps
                                               , Sa = oa.memoizedState
                                               , Ca = x.stateNode
                                               , ab = Ca.getSnapshotBeforeUpdate(x.elementType === x.type ? qa : Sb(x.type, qa), Sa);
                                             Ca.__reactInternalSnapshotBeforeUpdate = ab
                                         }
                                         break;
                                     case 3:
                                     case 5:
                                     case 6:
                                     case 4:
                                     case 17:
                                         break;
                                     default:
                                         throw v(Error(163));
                                     }
                                 }
                                 va = va.nextEffect
                             }
                         } catch (kf) {
                             if (null === va)
                                 throw v(Error(330));
                             bd(va, kf);
                             va = va.nextEffect
                         }
                     while (null !== va);
                     va = m;
                     do
                         try {
                             for (oa = b; null !== va; ) {
                                 var Da = va.effectTag;
                                 if (16 & Da && yb(va.stateNode, ""),
                                 128 & Da) {
                                     var ra = va.alternate;
                                     if (null !== ra) {
                                         var Ba = ra.ref;
                                         null !== Ba && ("function" == typeof Ba ? Ba(null) : Ba.current = null)
                                     }
                                 }
                                 switch (14 & Da) {
                                 case 2:
                                     gf(va);
                                     va.effectTag &= -3;
                                     break;
                                 case 6:
                                     gf(va);
                                     va.effectTag &= -3;
                                     wh(va.alternate, va);
                                     break;
                                 case 4:
                                     wh(va.alternate, va);
                                     break;
                                 case 8:
                                     vh(qa = va, oa);
                                     qa.return = null;
                                     qa.child = null;
                                     qa.memoizedState = null;
                                     qa.updateQueue = null;
                                     qa.dependencies = null;
                                     var Ab = qa.alternate;
                                     null !== Ab && (Ab.return = null,
                                     Ab.child = null,
                                     Ab.memoizedState = null,
                                     Ab.updateQueue = null,
                                     Ab.dependencies = null)
                                 }
                                 va = va.nextEffect
                             }
                         } catch (kf) {
                             if (null === va)
                                 throw v(Error(330));
                             bd(va, kf);
                             va = va.nextEffect
                         }
                     while (null !== va);
                     if (Ba = qg,
                     ra = Qf(),
                     Da = Ba.focusedElem,
                     oa = Ba.selectionRange,
                     ra !== Da && Da && Da.ownerDocument && Pf(Da.ownerDocument.documentElement, Da)) {
                         null !== oa && Fe(Da) && (ra = oa.start,
                         void 0 === (Ba = oa.end) && (Ba = ra),
                         "selectionStart"in Da ? (Da.selectionStart = ra,
                         Da.selectionEnd = Math.min(Ba, Da.value.length)) : (Ba = (ra = Da.ownerDocument || document) && ra.defaultView || window).getSelection && (Ba = Ba.getSelection(),
                         qa = Da.textContent.length,
                         Ab = Math.min(oa.start, qa),
                         oa = void 0 === oa.end ? Ab : Math.min(oa.end, qa),
                         !Ba.extend && Ab > oa && (qa = oa,
                         oa = Ab,
                         Ab = qa),
                         qa = Of(Da, Ab),
                         Sa = Of(Da, oa),
                         qa && Sa && (1 !== Ba.rangeCount || Ba.anchorNode !== qa.node || Ba.anchorOffset !== qa.offset || Ba.focusNode !== Sa.node || Ba.focusOffset !== Sa.offset) && ((ra = ra.createRange()).setStart(qa.node, qa.offset),
                         Ba.removeAllRanges(),
                         Ab > oa ? (Ba.addRange(ra),
                         Ba.extend(Sa.node, Sa.offset)) : (ra.setEnd(Sa.node, Sa.offset),
                         Ba.addRange(ra)))));
                         ra = [];
                         for (Ba = Da; Ba = Ba.parentNode; )
                             1 === Ba.nodeType && ra.push({
                                 element: Ba,
                                 left: Ba.scrollLeft,
                                 top: Ba.scrollTop
                             });
                         "function" == typeof Da.focus && Da.focus();
                         for (Da = 0; Da < ra.length; Da++)
                             (Ba = ra[Da]).element.scrollLeft = Ba.left,
                             Ba.element.scrollTop = Ba.top
                     }
                     qg = null;
                     Pd = !!pg;
                     pg = null;
                     a.current = h;
                     va = m;
                     do
                         try {
                             for (Da = l; null !== va; ) {
                                 var Ai = va.effectTag;
                                 if (36 & Ai) {
                                     var rg = va.alternate;
                                     switch (Ba = Da,
                                     (ra = va).tag) {
                                     case 0:
                                     case 11:
                                     case 15:
                                         ie(Vb, nb, ra);
                                         break;
                                     case 1:
                                         var Jh = ra.stateNode;
                                         if (4 & ra.effectTag)
                                             if (null === rg)
                                                 Jh.componentDidMount();
                                             else {
                                                 var vj = ra.elementType === ra.type ? rg.memoizedProps : Sb(ra.type, rg.memoizedProps);
                                                 Jh.componentDidUpdate(vj, rg.memoizedState, Jh.__reactInternalSnapshotBeforeUpdate)
                                             }
                                         var hj = ra.updateQueue;
                                         null !== hj && Pe(0, hj, Jh);
                                         break;
                                     case 3:
                                         var ij = ra.updateQueue;
                                         if (null !== ij) {
                                             if (Ab = null,
                                             null !== ra.child)
                                                 switch (ra.child.tag) {
                                                 case 5:
                                                 case 1:
                                                     Ab = ra.child.stateNode
                                                 }
                                             Pe(0, ij, Ab)
                                         }
                                         break;
                                     case 5:
                                         var wj = ra.stateNode;
                                         null === rg && 4 & ra.effectTag && (Ba = wj,
                                         Rc(ra.type, ra.memoizedProps) && Ba.focus());
                                         break;
                                     case 6:
                                     case 4:
                                     case 12:
                                     case 13:
                                     case 19:
                                     case 17:
                                     case 20:
                                         break;
                                     default:
                                         throw v(Error(163));
                                     }
                                 }
                                 if (128 & Ai) {
                                     var Kh = va.ref;
                                     if (null !== Kh) {
                                         var jj = va.stateNode;
                                         "function" == typeof Kh ? Kh(jj) : Kh.current = jj
                                     }
                                 }
                                 512 & Ai && (Bi = !0);
                                 va = va.nextEffect
                             }
                         } catch (kf) {
                             if (null === va)
                                 throw v(Error(330));
                             bd(va, kf);
                             va = va.nextEffect
                         }
                     while (null !== va);
                     va = null;
                     Ci();
                     Fa = t
                 } else
                     a.current = h;
                 if (Bi)
                     Bi = !1,
                     og = a,
                     Di = l,
                     Ei = b;
                 else
                     for (va = m; null !== va; )
                         b = va.nextEffect,
                         va.nextEffect = null,
                         va = b;
                 if (0 !== (b = a.firstPendingTime) ? dc(a, Uf(bc(), b), b) : Bd = null,
                 "function" == typeof Fi && Fi(h.stateNode, l),
                 1073741823 === b ? a === ti ? eg++ : (eg = 0,
                 ti = a) : eg = 0,
                 Ah)
                     throw Ah = !1,
                     a = si,
                     si = null,
                     a;
                 return (Fa & ui) !== tb || Mb(),
                 null
             }
             function Cd() {
                 if (null === og)
                     return !1;
                 var a = og
                   , b = Di
                   , h = Ei;
                 return og = null,
                 Di = 0,
                 Ei = 90,
                 xc(97 < h ? 97 : h, Gi.bind(null, a, b))
             }
             function Gi(a) {
                 if ((Fa & (Hc | Ic)) !== tb)
                     throw v(Error(331));
                 var b = Fa;
                 Fa |= Ic;
                 for (a = a.current.firstEffect; null !== a; ) {
                     try {
                         var h = a;
                         if (512 & h.effectTag)
                             switch (h.tag) {
                             case 0:
                             case 11:
                             case 15:
                                 ie(Wb, Za, h),
                                 ie(Za, Cb, h)
                             }
                     } catch (l) {
                         if (null === a)
                             throw v(Error(330));
                         bd(a, l)
                     }
                     h = a.nextEffect;
                     a.nextEffect = null;
                     a = h
                 }
                 return Fa = b,
                 Mb(),
                 !0
             }
             function Lh(a, b, h) {
                 Nb(a, zh(a, cf(h, b), 1073741823));
                 null !== (a = jf(a, 1073741823)) && dc(a, 99, 1073741823)
             }
             function bd(a, b) {
                 if (3 === a.tag)
                     Lh(a, a, b);
                 else
                     for (var h = a.return; null !== h; ) {
                         if (3 === h.tag) {
                             Lh(h, a, b);
                             break
                         }
                         if (1 === h.tag) {
                             var l = h.stateNode;
                             if ("function" == typeof h.type.getDerivedStateFromError || "function" == typeof l.componentDidCatch && (null === Bd || !Bd.has(l))) {
                                 Nb(h, Bh(h, cf(b, a), 1073741823));
                                 null !== (h = jf(h, 1073741823)) && dc(h, 99, 1073741823);
                                 break
                             }
                         }
                         h = h.return
                     }
             }
             function Hh(a, b, h) {
                 var l = a.pingCache;
                 null !== l && l.delete(b);
                 je === a && oc === h ? Kb === Fh || Kb === Ih && 1073741823 === dd && d() - ri < bj ? Jc(a, oc) : jg = !0 : a.lastPendingTime < h || 0 !== (b = a.pingTime) && b < h || (a.pingTime = h,
                 a.finishedExpirationTime === h && (a.finishedExpirationTime = 0,
                 a.finishedWork = null),
                 dc(a, Uf(bc(), h), h))
             }
             function yh(a, b) {
                 var h = a.stateNode;
                 null !== h && h.delete(b);
                 h = Uf(h = bc(), b = Fc(h, a, null));
                 null !== (a = jf(a, b)) && dc(a, h, b)
             }
             function Hi(a, b, h, l) {
                 this.tag = a;
                 this.key = h;
                 this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
                 this.index = 0;
                 this.ref = null;
                 this.pendingProps = b;
                 this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
                 this.mode = l;
                 this.effectTag = 0;
                 this.lastEffect = this.firstEffect = this.nextEffect = null;
                 this.childExpirationTime = this.expirationTime = 0;
                 this.alternate = null
             }
             function cc(a, b, h, l) {
                 return new Hi(a,b,h,l)
             }
             function cg(a) {
                 return !(!(a = a.prototype) || !a.isReactComponent)
             }
             function Uc(a, b) {
                 var h = a.alternate;
                 return null === h ? ((h = cc(a.tag, b, a.key, a.mode)).elementType = a.elementType,
                 h.type = a.type,
                 h.stateNode = a.stateNode,
                 h.alternate = a,
                 a.alternate = h) : (h.pendingProps = b,
                 h.effectTag = 0,
                 h.nextEffect = null,
                 h.firstEffect = null,
                 h.lastEffect = null),
                 h.childExpirationTime = a.childExpirationTime,
                 h.expirationTime = a.expirationTime,
                 h.child = a.child,
                 h.memoizedProps = a.memoizedProps,
                 h.memoizedState = a.memoizedState,
                 h.updateQueue = a.updateQueue,
                 b = a.dependencies,
                 h.dependencies = null === b ? null : {
                     expirationTime: b.expirationTime,
                     firstContext: b.firstContext,
                     responders: b.responders
                 },
                 h.sibling = a.sibling,
                 h.index = a.index,
                 h.ref = a.ref,
                 h
             }
             function Se(a, b, h, l, m, t) {
                 var x = 2;
                 if (l = a,
                 "function" == typeof a)
                     cg(a) && (x = 1);
                 else if ("string" == typeof a)
                     x = 5;
                 else
                     a: switch (a) {
                     case rc:
                         return Ac(h.children, m, t, b);
                     case Mh:
                         x = 8;
                         m |= 7;
                         break;
                     case Mg:
                         x = 8;
                         m |= 1;
                         break;
                     case ye:
                         return (a = cc(12, h, b, 8 | m)).elementType = ye,
                         a.type = ye,
                         a.expirationTime = t,
                         a;
                     case Hd:
                         return (a = cc(13, h, b, m)).type = Hd,
                         a.elementType = Hd,
                         a.expirationTime = t,
                         a;
                     case vf:
                         return (a = cc(19, h, b, m)).elementType = vf,
                         a.expirationTime = t,
                         a;
                     default:
                         if ("object" == typeof a && null !== a)
                             switch (a.$$typeof) {
                             case Id:
                                 x = 10;
                                 break a;
                             case wf:
                                 x = 9;
                                 break a;
                             case xf:
                                 x = 11;
                                 break a;
                             case yf:
                                 x = 14;
                                 break a;
                             case zf:
                                 x = 16;
                                 l = null;
                                 break a
                             }
                         throw v(Error(130), null == a ? a : typeof a, "");
                     }
                 return (b = cc(x, h, b, m)).elementType = a,
                 b.type = l,
                 b.expirationTime = t,
                 b
             }
             function Ac(a, b, h, l) {
                 return (a = cc(7, a, l, b)).expirationTime = h,
                 a
             }
             function Wf(a, b, h) {
                 return (a = cc(6, a, null, b)).expirationTime = h,
                 a
             }
             function Xf(a, b, h) {
                 return (b = cc(4, null !== a.children ? a.children : [], a.key, b)).expirationTime = h,
                 b.stateNode = {
                     containerInfo: a.containerInfo,
                     pendingChildren: null,
                     implementation: a.implementation
                 },
                 b
             }
             function Ii(a, b, h) {
                 this.tag = b;
                 this.current = null;
                 this.containerInfo = a;
                 this.pingCache = this.pendingChildren = null;
                 this.finishedExpirationTime = 0;
                 this.finishedWork = null;
                 this.timeoutHandle = -1;
                 this.pendingContext = this.context = null;
                 this.hydrate = h;
                 this.callbackNode = this.firstBatch = null;
                 this.pingTime = this.lastPendingTime = this.firstPendingTime = this.callbackExpirationTime = 0
             }
             function Nh(a, b, h) {
                 return a = new Ii(a,b,h),
                 b = cc(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0),
                 a.current = b,
                 b.stateNode = a
             }
             function Oh(a, b, h, l, m, t) {
                 var x = b.current;
                 a: if (h) {
                     b: {
                         if (2 !== Ma(h = h._reactInternalFiber) || 1 !== h.tag)
                             throw v(Error(170));
                         var B = h;
                         do {
                             switch (B.tag) {
                             case 3:
                                 B = B.stateNode.context;
                                 break b;
                             case 1:
                                 if (null != B.type.childContextTypes) {
                                     B = B.stateNode.__reactInternalMemoizedMergedChildContext;
                                     break b
                                 }
                             }
                             B = B.return
                         } while (null !== B);
                         throw v(Error(171));
                     }
                     if (1 === h.tag) {
                         var M = h.type;
                         if (null != M.childContextTypes) {
                             h = Yg(h, M, B);
                             break a
                         }
                     }
                     h = B
                 } else
                     h = vc;
                 return null === b.context ? b.context = h : b.pendingContext = h,
                 b = t,
                 (m = yc(l, m)).payload = {
                     element: a
                 },
                 null !== (b = void 0 === b ? null : b) && (m.callback = b),
                 Nb(x, m),
                 ee(x, l),
                 l
             }
             function lf(a, b, h, l) {
                 var m = b.current
                   , t = bc()
                   , x = y.suspense;
                 return Oh(a, b, h, Fc(t, m, x), x, l)
             }
             function sg(a) {
                 return (a = a.current).child ? (a.child.tag,
                 a.child.stateNode) : null
             }
             function ne(a) {
                 var b = 1073741821 - 25 * (1 + ((1073741821 - bc() + 500) / 25 | 0));
                 b <= kj && --b;
                 this._expirationTime = kj = b;
                 this._root = a;
                 this._callbacks = this._next = null;
                 this._hasChildren = this._didComplete = !1;
                 this._children = null;
                 this._defer = !0
             }
             function oe() {
                 this._callbacks = null;
                 this._didCommit = !1;
                 this._onCommit = this._onCommit.bind(this)
             }
             function Dd(a, b, h) {
                 this._internalRoot = Nh(a, b, h)
             }
             function ed(a, b) {
                 this._internalRoot = Nh(a, 2, b)
             }
             function fd(a) {
                 return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue))
             }
             function mf(a, b, h, l, m) {
                 var t = h._reactRootContainer
                   , x = void 0;
                 if (t) {
                     if (x = t._internalRoot,
                     "function" == typeof m) {
                         var B = m;
                         m = function() {
                             var V = sg(x);
                             B.call(V)
                         }
                     }
                     lf(b, x, a, m)
                 } else {
                     if (t = h._reactRootContainer = function(V, la) {
                         if (la || (la = !(!(la = V ? 9 === V.nodeType ? V.documentElement : V.firstChild : null) || 1 !== la.nodeType || !la.hasAttribute("data-reactroot"))),
                         !la)
                             for (var Ha; Ha = V.lastChild; )
                                 V.removeChild(Ha);
                         return new Dd(V,0,la)
                     }(h, l),
                     x = t._internalRoot,
                     "function" == typeof m) {
                         var M = m;
                         m = function() {
                             var V = sg(x);
                             M.call(V)
                         }
                     }
                     le(function() {
                         lf(b, x, a, m)
                     })
                 }
                 return sg(x)
             }
             function pe(a, b) {
                 var h = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                 if (!fd(b))
                     throw v(Error(200));
                 return function(l, m, t) {
                     var x = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                     return {
                         $$typeof: kd,
                         key: null == x ? null : "" + x,
                         children: l,
                         containerInfo: m,
                         implementation: t
                     }
                 }(a, b, null, h)
             }
             var Ge = C(6540)
               , Eb = C(5228)
               , Qb = C(9982);
             if (!Ge)
                 throw v(Error(227));
             var te = null
               , hd = {}
               , ue = []
               , pf = {}
               , pc = {}
               , qf = {}
               , Xb = !1
               , ve = null
               , Fd = !1
               , sf = null
               , rf = {
                 onError: function(a) {
                     Xb = !0;
                     ve = a
                 }
             }
               , id = null
               , Kg = null
               , Hg = null
               , Gd = null
               , tg = {
                 injectEventPluginOrder: function(a) {
                     if (te)
                         throw v(Error(101));
                     te = Array.prototype.slice.call(a);
                     z()
                 },
                 injectEventPluginsByName: function(a) {
                     var b, h = !1;
                     for (b in a)
                         if (a.hasOwnProperty(b)) {
                             var l = a[b];
                             if (!hd.hasOwnProperty(b) || hd[b] !== l) {
                                 if (hd[b])
                                     throw v(Error(102), b);
                                 hd[b] = l;
                                 h = !0
                             }
                         }
                     h && z()
                 }
             }
               , Ph = Math.random().toString(36).slice(2)
               , fc = "__reactInternalInstance$" + Ph
               , we = "__reactEventHandlers$" + Ph
               , qc = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement)
               , jd = {
                 animationend: aa("Animation", "AnimationEnd"),
                 animationiteration: aa("Animation", "AnimationIteration"),
                 animationstart: aa("Animation", "AnimationStart"),
                 transitionend: aa("Transition", "TransitionEnd")
             }
               , tf = {}
               , Ig = {};
             qc && (Ig = document.createElement("div").style,
             "AnimationEvent"in window || (delete jd.animationend.animation,
             delete jd.animationiteration.animation,
             delete jd.animationstart.animation),
             "TransitionEvent"in window || delete jd.transitionend.transition);
             var Qh = sa("animationend")
               , Rh = sa("animationiteration")
               , Sh = sa("animationstart")
               , Th = sa("transitionend")
               , Td = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
               , Lc = null
               , uf = null
               , xe = null;
             Eb(cb.prototype, {
                 preventDefault: function() {
                     this.defaultPrevented = !0;
                     var a = this.nativeEvent;
                     a && (a.preventDefault ? a.preventDefault() : "unknown" != typeof a.returnValue && (a.returnValue = !1),
                     this.isDefaultPrevented = bb)
                 },
                 stopPropagation: function() {
                     var a = this.nativeEvent;
                     a && (a.stopPropagation ? a.stopPropagation() : "unknown" != typeof a.cancelBubble && (a.cancelBubble = !0),
                     this.isPropagationStopped = bb)
                 },
                 persist: function() {
                     this.isPersistent = bb
                 },
                 isPersistent: gb,
                 destructor: function() {
                     var a, b = this.constructor.Interface;
                     for (a in b)
                         this[a] = null;
                     this.nativeEvent = this._targetInst = this.dispatchConfig = null;
                     this.isPropagationStopped = this.isDefaultPrevented = gb;
                     this._dispatchInstances = this._dispatchListeners = null
                 }
             });
             cb.Interface = {
                 type: null,
                 target: null,
                 currentTarget: function() {
                     return null
                 },
                 eventPhase: null,
                 bubbles: null,
                 cancelable: null,
                 timeStamp: function(a) {
                     return a.timeStamp || Date.now()
                 },
                 defaultPrevented: null,
                 isTrusted: null
             };
             cb.extend = function(a) {
                 function b() {}
                 function h() {
                     return l.apply(this, arguments)
                 }
                 var l = this;
                 b.prototype = l.prototype;
                 var m = new b;
                 return Eb(m, h.prototype),
                 h.prototype = m,
                 h.prototype.constructor = h,
                 h.Interface = Eb({}, l.Interface, a),
                 h.extend = l.extend,
                 rb(h),
                 h
             }
             ;
             rb(cb);
             var Ji = cb.extend({
                 data: null
             })
               , Ki = cb.extend({
                 data: null
             })
               , Jg = [9, 13, 27, 32]
               , ug = qc && "CompositionEvent"in window
               , gd = null;
             qc && "documentMode"in document && (gd = document.documentMode);
             var vg = qc && "TextEvent"in window && !gd
               , wg = qc && (!ug || gd && 8 < gd && 11 >= gd)
               , Uh = String.fromCharCode(32)
               , ec = {
                 beforeInput: {
                     phasedRegistrationNames: {
                         bubbled: "onBeforeInput",
                         captured: "onBeforeInputCapture"
                     },
                     dependencies: ["compositionend", "keypress", "textInput", "paste"]
                 },
                 compositionEnd: {
                     phasedRegistrationNames: {
                         bubbled: "onCompositionEnd",
                         captured: "onCompositionEndCapture"
                     },
                     dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
                 },
                 compositionStart: {
                     phasedRegistrationNames: {
                         bubbled: "onCompositionStart",
                         captured: "onCompositionStartCapture"
                     },
                     dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
                 },
                 compositionUpdate: {
                     phasedRegistrationNames: {
                         bubbled: "onCompositionUpdate",
                         captured: "onCompositionUpdateCapture"
                     },
                     dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
                 }
             }
               , xg = !1
               , Ed = !1
               , Li = {
                 eventTypes: ec,
                 extractEvents: function(a, b, h, l) {
                     var m = void 0
                       , t = void 0;
                     if (ug)
                         a: {
                             switch (a) {
                             case "compositionstart":
                                 m = ec.compositionStart;
                                 break a;
                             case "compositionend":
                                 m = ec.compositionEnd;
                                 break a;
                             case "compositionupdate":
                                 m = ec.compositionUpdate;
                                 break a
                             }
                             m = void 0
                         }
                     else
                         Ed ? Ea(a, h) && (m = ec.compositionEnd) : "keydown" === a && 229 === h.keyCode && (m = ec.compositionStart);
                     return m ? (wg && "ko" !== h.locale && (Ed || m !== ec.compositionStart ? m === ec.compositionEnd && Ed && (t = Na()) : (uf = "value"in (Lc = l) ? Lc.value : Lc.textContent,
                     Ed = !0)),
                     m = Ji.getPooled(m, b, h, l),
                     t ? m.data = t : null !== (t = Pa(h)) && (m.data = t),
                     ha(m),
                     t = m) : t = null,
                     (a = vg ? function(x, B) {
                         switch (x) {
                         case "compositionend":
                             return Pa(B);
                         case "keypress":
                             return 32 !== B.which ? null : (xg = !0,
                             Uh);
                         case "textInput":
                             return (x = B.data) === Uh && xg ? null : x;
                         default:
                             return null
                         }
                     }(a, h) : function(x, B) {
                         if (Ed)
                             return "compositionend" === x || !ug && Ea(x, B) ? (x = Na(),
                             xe = uf = Lc = null,
                             Ed = !1,
                             x) : null;
                         switch (x) {
                         default:
                             return null;
                         case "keypress":
                             if (!(B.ctrlKey || B.altKey || B.metaKey) || B.ctrlKey && B.altKey) {
                                 if (B.char && 1 < B.char.length)
                                     return B.char;
                                 if (B.which)
                                     return String.fromCharCode(B.which)
                             }
                             return null;
                         case "compositionend":
                             return wg && "ko" !== B.locale ? null : B.data
                         }
                     }(a, h)) ? ((b = Ki.getPooled(ec.beforeInput, b, h, l)).data = a,
                     ha(b)) : b = null,
                     null === t ? b : null === b ? t : [t, b]
                 }
             }
               , Ib = null
               , Mc = null
               , Nc = null
               , Mf = xb
               , Yb = !1
               , hi = {
                 color: !0,
                 date: !0,
                 datetime: !0,
                 "datetime-local": !0,
                 email: !0,
                 month: !0,
                 number: !0,
                 password: !0,
                 range: !0,
                 search: !0,
                 tel: !0,
                 text: !0,
                 time: !0,
                 url: !0,
                 week: !0
             }
               , Lb = Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
             Lb.hasOwnProperty("ReactCurrentDispatcher") || (Lb.ReactCurrentDispatcher = {
                 current: null
             });
             Lb.hasOwnProperty("ReactCurrentBatchConfig") || (Lb.ReactCurrentBatchConfig = {
                 suspense: null
             });
             var Jd = /^(.*)[\\\/]/
               , Hb = "function" == typeof Symbol && Symbol.for
               , Vc = Hb ? Symbol.for("react.element") : 60103
               , kd = Hb ? Symbol.for("react.portal") : 60106
               , rc = Hb ? Symbol.for("react.fragment") : 60107
               , Mg = Hb ? Symbol.for("react.strict_mode") : 60108
               , ye = Hb ? Symbol.for("react.profiler") : 60114
               , Id = Hb ? Symbol.for("react.provider") : 60109
               , wf = Hb ? Symbol.for("react.context") : 60110
               , Mh = Hb ? Symbol.for("react.concurrent_mode") : 60111
               , xf = Hb ? Symbol.for("react.forward_ref") : 60112
               , Hd = Hb ? Symbol.for("react.suspense") : 60113
               , vf = Hb ? Symbol.for("react.suspense_list") : 60120
               , yf = Hb ? Symbol.for("react.memo") : 60115
               , zf = Hb ? Symbol.for("react.lazy") : 60116;
             Hb && Symbol.for("react.fundamental");
             Hb && Symbol.for("react.responder");
             var Lg = "function" == typeof Symbol && Symbol.iterator
               , ii = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
               , Df = Object.prototype.hasOwnProperty
               , Og = {}
               , Ng = {}
               , sb = {};
             "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
                 sb[a] = new Db(a,0,!1,a,null,!1)
             });
             [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
                 var b = a[0];
                 sb[b] = new Db(b,1,!1,a[1],null,!1)
             });
             ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
                 sb[a] = new Db(a,2,!1,a.toLowerCase(),null,!1)
             });
             ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
                 sb[a] = new Db(a,2,!1,a,null,!1)
             });
             "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
                 sb[a] = new Db(a,3,!1,a.toLowerCase(),null,!1)
             });
             ["checked", "multiple", "muted", "selected"].forEach(function(a) {
                 sb[a] = new Db(a,3,!0,a,null,!1)
             });
             ["capture", "download"].forEach(function(a) {
                 sb[a] = new Db(a,4,!1,a,null,!1)
             });
             ["cols", "rows", "size", "span"].forEach(function(a) {
                 sb[a] = new Db(a,6,!1,a,null,!1)
             });
             ["rowSpan", "start"].forEach(function(a) {
                 sb[a] = new Db(a,5,!1,a.toLowerCase(),null,!1)
             });
             var yg = /[\-:]([a-z])/g;
             "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
                 var b = a.replace(yg, Bf);
                 sb[b] = new Db(b,1,!1,a,null,!1)
             });
             "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
                 var b = a.replace(yg, Bf);
                 sb[b] = new Db(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)
             });
             ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
                 var b = a.replace(yg, Bf);
                 sb[b] = new Db(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)
             });
             ["tabIndex", "crossOrigin"].forEach(function(a) {
                 sb[a] = new Db(a,1,!1,a.toLowerCase(),null,!1)
             });
             sb.xlinkHref = new Db("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);
             ["src", "href", "action", "formAction"].forEach(function(a) {
                 sb[a] = new Db(a,1,!1,a.toLowerCase(),null,!0)
             });
             var Rg = {
                 change: {
                     phasedRegistrationNames: {
                         bubbled: "onChange",
                         captured: "onChangeCapture"
                     },
                     dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
                 }
             }
               , Ae = null
               , Md = null
               , zg = !1;
             qc && (zg = ua("input") && (!document.documentMode || 9 < document.documentMode));
             var Vh = {
                 eventTypes: Rg,
                 _isInputEventSupported: zg,
                 extractEvents: function(a, b, h, l) {
                     var m = b ? U(b) : window
                       , t = void 0
                       , x = void 0
                       , B = m.nodeName && m.nodeName.toLowerCase();
                     if ("select" === B || "input" === B && "file" === m.type ? t = Sg : fa(m) ? zg ? t = Ug : (t = Tg,
                     x = Hf) : (B = m.nodeName) && "input" === B.toLowerCase() && ("checkbox" === m.type || "radio" === m.type) && (t = If),
                     t && (t = t(a, b)))
                         return Ff(t, h, l);
                     x && x(a, m, b);
                     "blur" === a && (a = m._wrapperState) && a.controlled && "number" === m.type && Ka(m, "number", m.value)
                 }
             }
               , qe = cb.extend({
                 view: null,
                 detail: null
             })
               , ji = {
                 Alt: "altKey",
                 Control: "ctrlKey",
                 Meta: "metaKey",
                 Shift: "shiftKey"
             }
               , Wh = 0
               , Xh = 0
               , Yh = !1
               , Zh = !1
               , re = qe.extend({
                 screenX: null,
                 screenY: null,
                 clientX: null,
                 clientY: null,
                 pageX: null,
                 pageY: null,
                 ctrlKey: null,
                 shiftKey: null,
                 altKey: null,
                 metaKey: null,
                 getModifierState: Be,
                 button: null,
                 buttons: null,
                 relatedTarget: function(a) {
                     return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement)
                 },
                 movementX: function(a) {
                     if ("movementX"in a)
                         return a.movementX;
                     var b = Wh;
                     return Wh = a.screenX,
                     Yh ? "mousemove" === a.type ? a.screenX - b : 0 : (Yh = !0,
                     0)
                 },
                 movementY: function(a) {
                     if ("movementY"in a)
                         return a.movementY;
                     var b = Xh;
                     return Xh = a.screenY,
                     Zh ? "mousemove" === a.type ? a.screenY - b : 0 : (Zh = !0,
                     0)
                 }
             })
               , $h = re.extend({
                 pointerId: null,
                 width: null,
                 height: null,
                 pressure: null,
                 tangentialPressure: null,
                 tiltX: null,
                 tiltY: null,
                 twist: null,
                 pointerType: null,
                 isPrimary: null
             })
               , se = {
                 mouseEnter: {
                     registrationName: "onMouseEnter",
                     dependencies: ["mouseout", "mouseover"]
                 },
                 mouseLeave: {
                     registrationName: "onMouseLeave",
                     dependencies: ["mouseout", "mouseover"]
                 },
                 pointerEnter: {
                     registrationName: "onPointerEnter",
                     dependencies: ["pointerout", "pointerover"]
                 },
                 pointerLeave: {
                     registrationName: "onPointerLeave",
                     dependencies: ["pointerout", "pointerover"]
                 }
             }
               , Mi = {
                 eventTypes: se,
                 extractEvents: function(a, b, h, l) {
                     var m = "mouseover" === a || "pointerover" === a
                       , t = "mouseout" === a || "pointerout" === a;
                     if (m && (h.relatedTarget || h.fromElement) || !t && !m || (m = l.window === l ? l : (m = l.ownerDocument) ? m.defaultView || m.parentWindow : window,
                     t ? (t = b,
                     b = (b = h.relatedTarget || h.toElement) ? F(b) : null) : t = null,
                     t === b))
                         return null;
                     var x = void 0
                       , B = void 0
                       , M = void 0
                       , V = void 0;
                     "mouseout" === a || "mouseover" === a ? (x = re,
                     B = se.mouseLeave,
                     M = se.mouseEnter,
                     V = "mouse") : "pointerout" !== a && "pointerover" !== a || (x = $h,
                     B = se.pointerLeave,
                     M = se.pointerEnter,
                     V = "pointer");
                     var la = null == t ? m : U(t);
                     if (m = null == b ? m : U(b),
                     (a = x.getPooled(B, t, h, l)).type = V + "leave",
                     a.target = la,
                     a.relatedTarget = m,
                     (h = x.getPooled(M, b, h, l)).type = V + "enter",
                     h.target = m,
                     h.relatedTarget = la,
                     l = b,
                     t && l)
                         a: {
                             m = l;
                             V = 0;
                             for (x = b = t; x; x = N(x))
                                 V++;
                             x = 0;
                             for (M = m; M; M = N(M))
                                 x++;
                             for (; 0 < V - x; )
                                 b = N(b),
                                 V--;
                             for (; 0 < x - V; )
                                 m = N(m),
                                 x--;
                             for (; V--; ) {
                                 if (b === m || b === m.alternate)
                                     break a;
                                 b = N(b);
                                 m = N(m)
                             }
                             b = null
                         }
                     else
                         b = null;
                     m = b;
                     for (b = []; t && t !== m && (null === (V = t.alternate) || V !== m); )
                         b.push(t),
                         t = N(t);
                     for (t = []; l && l !== m && (null === (V = l.alternate) || V !== m); )
                         t.push(l),
                         l = N(l);
                     for (l = 0; l < b.length; l++)
                         ea(b[l], "bubbled", a);
                     for (l = t.length; 0 < l--; )
                         ea(t[l], "captured", h);
                     return [a, h]
                 }
             }
               , ki = Object.prototype.hasOwnProperty;
             new Map;
             new Map;
             new Set;
             new Map;
             var Ni = cb.extend({
                 animationName: null,
                 elapsedTime: null,
                 pseudoElement: null
             })
               , Ag = cb.extend({
                 clipboardData: function(a) {
                     return "clipboardData"in a ? a.clipboardData : window.clipboardData
                 }
             })
               , Oi = qe.extend({
                 relatedTarget: null
             })
               , Pi = {
                 Esc: "Escape",
                 Spacebar: " ",
                 Left: "ArrowLeft",
                 Up: "ArrowUp",
                 Right: "ArrowRight",
                 Down: "ArrowDown",
                 Del: "Delete",
                 Win: "OS",
                 Menu: "ContextMenu",
                 Apps: "ContextMenu",
                 Scroll: "ScrollLock",
                 MozPrintableKey: "Unidentified"
             }
               , ai = {
                 8: "Backspace",
                 9: "Tab",
                 12: "Clear",
                 13: "Enter",
                 16: "Shift",
                 17: "Control",
                 18: "Alt",
                 19: "Pause",
                 20: "CapsLock",
                 27: "Escape",
                 32: " ",
                 33: "PageUp",
                 34: "PageDown",
                 35: "End",
                 36: "Home",
                 37: "ArrowLeft",
                 38: "ArrowUp",
                 39: "ArrowRight",
                 40: "ArrowDown",
                 45: "Insert",
                 46: "Delete",
                 112: "F1",
                 113: "F2",
                 114: "F3",
                 115: "F4",
                 116: "F5",
                 117: "F6",
                 118: "F7",
                 119: "F8",
                 120: "F9",
                 121: "F10",
                 122: "F11",
                 123: "F12",
                 144: "NumLock",
                 145: "ScrollLock",
                 224: "Meta"
             }
               , Qi = qe.extend({
                 key: function(a) {
                     if (a.key) {
                         var b = Pi[a.key] || a.key;
                         if ("Unidentified" !== b)
                             return b
                     }
                     return "keypress" === a.type ? 13 === (a = De(a)) ? "Enter" : String.fromCharCode(a) : "keydown" === a.type || "keyup" === a.type ? ai[a.keyCode] || "Unidentified" : ""
                 },
                 location: null,
                 ctrlKey: null,
                 shiftKey: null,
                 altKey: null,
                 metaKey: null,
                 repeat: null,
                 locale: null,
                 getModifierState: Be,
                 charCode: function(a) {
                     return "keypress" === a.type ? De(a) : 0
                 },
                 keyCode: function(a) {
                     return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0
                 },
                 which: function(a) {
                     return "keypress" === a.type ? De(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0
                 }
             })
               , Ri = re.extend({
                 dataTransfer: null
             })
               , Si = qe.extend({
                 touches: null,
                 targetTouches: null,
                 changedTouches: null,
                 altKey: null,
                 metaKey: null,
                 ctrlKey: null,
                 shiftKey: null,
                 getModifierState: Be
             })
               , Ti = cb.extend({
                 propertyName: null,
                 elapsedTime: null,
                 pseudoElement: null
             })
               , Ui = re.extend({
                 deltaX: function(a) {
                     return "deltaX"in a ? a.deltaX : "wheelDeltaX"in a ? -a.wheelDeltaX : 0
                 },
                 deltaY: function(a) {
                     return "deltaY"in a ? a.deltaY : "wheelDeltaY"in a ? -a.wheelDeltaY : "wheelDelta"in a ? -a.wheelDelta : 0
                 },
                 deltaZ: null,
                 deltaMode: null
             })
               , bi = [["blur", "blur", 0], ["cancel", "cancel", 0], ["click", "click", 0], ["close", "close", 0], ["contextmenu", "contextMenu", 0], ["copy", "copy", 0], ["cut", "cut", 0], ["auxclick", "auxClick", 0], ["dblclick", "doubleClick", 0], ["dragend", "dragEnd", 0], ["dragstart", "dragStart", 0], ["drop", "drop", 0], ["focus", "focus", 0], ["input", "input", 0], ["invalid", "invalid", 0], ["keydown", "keyDown", 0], ["keypress", "keyPress", 0], ["keyup", "keyUp", 0], ["mousedown", "mouseDown", 0], ["mouseup", "mouseUp", 0], ["paste", "paste", 0], ["pause", "pause", 0], ["play", "play", 0], ["pointercancel", "pointerCancel", 0], ["pointerdown", "pointerDown", 0], ["pointerup", "pointerUp", 0], ["ratechange", "rateChange", 0], ["reset", "reset", 0], ["seeked", "seeked", 0], ["submit", "submit", 0], ["touchcancel", "touchCancel", 0], ["touchend", "touchEnd", 0], ["touchstart", "touchStart", 0], ["volumechange", "volumeChange", 0], ["drag", "drag", 1], ["dragenter", "dragEnter", 1], ["dragexit", "dragExit", 1], ["dragleave", "dragLeave", 1], ["dragover", "dragOver", 1], ["mousemove", "mouseMove", 1], ["mouseout", "mouseOut", 1], ["mouseover", "mouseOver", 1], ["pointermove", "pointerMove", 1], ["pointerout", "pointerOut", 1], ["pointerover", "pointerOver", 1], ["scroll", "scroll", 1], ["toggle", "toggle", 1], ["touchmove", "touchMove", 1], ["wheel", "wheel", 1], ["abort", "abort", 2], [Qh, "animationEnd", 2], [Rh, "animationIteration", 2], [Sh, "animationStart", 2], ["canplay", "canPlay", 2], ["canplaythrough", "canPlayThrough", 2], ["durationchange", "durationChange", 2], ["emptied", "emptied", 2], ["encrypted", "encrypted", 2], ["ended", "ended", 2], ["error", "error", 2], ["gotpointercapture", "gotPointerCapture", 2], ["load", "load", 2], ["loadeddata", "loadedData", 2], ["loadedmetadata", "loadedMetadata", 2], ["loadstart", "loadStart", 2], ["lostpointercapture", "lostPointerCapture", 2], ["playing", "playing", 2], ["progress", "progress", 2], ["seeking", "seeking", 2], ["stalled", "stalled", 2], ["suspend", "suspend", 2], ["timeupdate", "timeUpdate", 2], [Th, "transitionEnd", 2], ["waiting", "waiting", 2]]
               , ci = {}
               , nf = {}
               , Bg = 0;
             for (; Bg < bi.length; Bg++) {
                 var Cg = bi[Bg]
                   , di = Cg[0]
                   , Dg = Cg[1]
                   , Vi = Cg[2]
                   , of = "on" + (Dg[0].toUpperCase() + Dg.slice(1))
                   , ei = {
                     phasedRegistrationNames: {
                         bubbled: of,
                         captured: of + "Capture"
                     },
                     dependencies: [di],
                     eventPriority: Vi
                 };
                 ci[Dg] = ei;
                 nf[di] = ei
             }
             var fi = {
                 eventTypes: ci,
                 getEventPriority: function(a) {
                     return void 0 !== (a = nf[a]) ? a.eventPriority : 2
                 },
                 extractEvents: function(a, b, h, l) {
                     var m = nf[a];
                     if (!m)
                         return null;
                     switch (a) {
                     case "keypress":
                         if (0 === De(h))
                             return null;
                     case "keydown":
                     case "keyup":
                         a = Qi;
                         break;
                     case "blur":
                     case "focus":
                         a = Oi;
                         break;
                     case "click":
                         if (2 === h.button)
                             return null;
                     case "auxclick":
                     case "dblclick":
                     case "mousedown":
                     case "mousemove":
                     case "mouseup":
                     case "mouseout":
                     case "mouseover":
                     case "contextmenu":
                         a = re;
                         break;
                     case "drag":
                     case "dragend":
                     case "dragenter":
                     case "dragexit":
                     case "dragleave":
                     case "dragover":
                     case "dragstart":
                     case "drop":
                         a = Ri;
                         break;
                     case "touchcancel":
                     case "touchend":
                     case "touchmove":
                     case "touchstart":
                         a = Si;
                         break;
                     case Qh:
                     case Rh:
                     case Sh:
                         a = Ni;
                         break;
                     case Th:
                         a = Ti;
                         break;
                     case "scroll":
                         a = qe;
                         break;
                     case "wheel":
                         a = Ui;
                         break;
                     case "copy":
                     case "cut":
                     case "paste":
                         a = Ag;
                         break;
                     case "gotpointercapture":
                     case "lostpointercapture":
                     case "pointercancel":
                     case "pointerdown":
                     case "pointermove":
                     case "pointerout":
                     case "pointerover":
                     case "pointerup":
                         a = $h;
                         break;
                     default:
                         a = cb
                     }
                     return ha(b = a.getPooled(m, b, h, l)),
                     b
                 }
             }
               , Wg = fi.getEventPriority
               , Qd = []
               , Pd = !0
               , Xg = new ("function" == typeof WeakMap ? WeakMap : Map)
               , Wi = qc && "documentMode"in document && 11 >= document.documentMode
               , kb = {
                 select: {
                     phasedRegistrationNames: {
                         bubbled: "onSelect",
                         captured: "onSelectCapture"
                     },
                     dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
                 }
             }
               , nd = null
               , Pc = null
               , od = null
               , Rf = !1
               , Xi = {
                 eventTypes: kb,
                 extractEvents: function(a, b, h, l) {
                     var m, t = l.window === l ? l.document : 9 === l.nodeType ? l : l.ownerDocument;
                     if (!(m = !t)) {
                         a: {
                             t = Nf(t);
                             m = qf.onSelect;
                             for (var x = 0; x < m.length; x++)
                                 if (!t.has(m[x])) {
                                     t = !1;
                                     break a
                                 }
                             t = !0
                         }
                         m = !t
                     }
                     if (m)
                         return null;
                     switch (t = b ? U(b) : window,
                     a) {
                     case "focus":
                         (fa(t) || "true" === t.contentEditable) && (nd = t,
                         Pc = b,
                         od = null);
                         break;
                     case "blur":
                         od = Pc = nd = null;
                         break;
                     case "mousedown":
                         Rf = !0;
                         break;
                     case "contextmenu":
                     case "mouseup":
                     case "dragend":
                         return Rf = !1,
                         hc(h, l);
                     case "selectionchange":
                         if (Wi)
                             break;
                     case "keydown":
                     case "keyup":
                         return hc(h, l)
                     }
                     return null
                 }
             };
             tg.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
             id = S;
             Kg = R;
             Hg = U;
             tg.injectEventPluginsByName({
                 SimpleEventPlugin: fi,
                 EnterLeaveEventPlugin: Mi,
                 ChangeEventPlugin: Vh,
                 SelectEventPlugin: Xi,
                 BeforeInputEventPlugin: Li
             });
             var ng = {
                 html: "http://www.w3.org/1999/xhtml",
                 mathml: "http://www.w3.org/1998/Math/MathML",
                 svg: "http://www.w3.org/2000/svg"
             }, Eg, Fg = void 0, xh = (Eg = function(a, b) {
                 if (a.namespaceURI !== ng.svg || "innerHTML"in a)
                     a.innerHTML = b;
                 else {
                     (Fg = Fg || document.createElement("div")).innerHTML = "\x3csvg\x3e" + b + "\x3c/svg\x3e";
                     for (b = Fg.firstChild; a.firstChild; )
                         a.removeChild(a.firstChild);
                     for (; b.firstChild; )
                         a.appendChild(b.firstChild)
                 }
             }
             ,
             "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(a, b, h, l) {
                 MSApp.execUnsafeLocalFunction(function() {
                     return Eg(a, b)
                 })
             }
             : Eg), Sd = {
                 animationIterationCount: !0,
                 borderImageOutset: !0,
                 borderImageSlice: !0,
                 borderImageWidth: !0,
                 boxFlex: !0,
                 boxFlexGroup: !0,
                 boxOrdinalGroup: !0,
                 columnCount: !0,
                 columns: !0,
                 flex: !0,
                 flexGrow: !0,
                 flexPositive: !0,
                 flexShrink: !0,
                 flexNegative: !0,
                 flexOrder: !0,
                 gridArea: !0,
                 gridRow: !0,
                 gridRowEnd: !0,
                 gridRowSpan: !0,
                 gridRowStart: !0,
                 gridColumn: !0,
                 gridColumnEnd: !0,
                 gridColumnSpan: !0,
                 gridColumnStart: !0,
                 fontWeight: !0,
                 lineClamp: !0,
                 lineHeight: !0,
                 opacity: !0,
                 order: !0,
                 orphans: !0,
                 tabSize: !0,
                 widows: !0,
                 zIndex: !0,
                 zoom: !0,
                 fillOpacity: !0,
                 floodOpacity: !0,
                 stopOpacity: !0,
                 strokeDasharray: !0,
                 strokeDashoffset: !0,
                 strokeMiterlimit: !0,
                 strokeOpacity: !0,
                 strokeWidth: !0
             }, Yi = ["Webkit", "ms", "Moz", "O"];
             Object.keys(Sd).forEach(function(a) {
                 Yi.forEach(function(b) {
                     b = b + a.charAt(0).toUpperCase() + a.substring(1);
                     Sd[b] = Sd[a]
                 })
             });
             var ni = Eb({
                 menuitem: !0
             }, {
                 area: !0,
                 base: !0,
                 br: !0,
                 col: !0,
                 embed: !0,
                 hr: !0,
                 img: !0,
                 input: !0,
                 keygen: !0,
                 link: !0,
                 meta: !0,
                 param: !0,
                 source: !0,
                 track: !0,
                 wbr: !0
             })
               , pg = null
               , qg = null
               , mg = "function" == typeof setTimeout ? setTimeout : void 0
               , vi = "function" == typeof clearTimeout ? clearTimeout : void 0;
             new Set;
             var Tf = []
               , uc = -1
               , vc = {}
               , qb = {
                 current: vc
             }
               , zb = {
                 current: !1
             }
               , Sc = vc
               , pi = Qb.unstable_runWithPriority
               , Wd = Qb.unstable_scheduleCallback
               , ch = Qb.unstable_cancelCallback
               , wi = Qb.unstable_shouldYield
               , gi = Qb.unstable_requestPaint
               , Gg = Qb.unstable_now
               , oi = Qb.unstable_getCurrentPriorityLevel
               , Le = Qb.unstable_ImmediatePriority
               , $g = Qb.unstable_UserBlockingPriority
               , ah = Qb.unstable_NormalPriority
               , wc = Qb.unstable_LowPriority
               , Xa = Qb.unstable_IdlePriority
               , Me = {}
               , Ci = void 0 !== gi ? gi : function() {}
               , G = null
               , e = null
               , g = !1
               , c = Gg()
               , d = 1E4 > c ? Gg : function() {
                 return Gg() - c
             }
               , f = {
                 current: null
             }
               , k = null
               , r = null
               , q = null
               , E = !1
               , y = Lb.ReactCurrentBatchConfig
               , p = (new Ge.Component).refs
               , T = {
                 isMounted: function(a) {
                     return !!(a = a._reactInternalFiber) && 2 === Ma(a)
                 },
                 enqueueSetState: function(a, b, h) {
                     a = a._reactInternalFiber;
                     var l = bc()
                       , m = y.suspense;
                     (m = yc(l = Fc(l, a, m), m)).payload = b;
                     null != h && (m.callback = h);
                     Nb(a, m);
                     ee(a, l)
                 },
                 enqueueReplaceState: function(a, b, h) {
                     a = a._reactInternalFiber;
                     var l = bc()
                       , m = y.suspense;
                     (m = yc(l = Fc(l, a, m), m)).tag = 1;
                     m.payload = b;
                     null != h && (m.callback = h);
                     Nb(a, m);
                     ee(a, l)
                 },
                 enqueueForceUpdate: function(a, b) {
                     a = a._reactInternalFiber;
                     var h = bc()
                       , l = y.suspense;
                     (l = yc(h = Fc(h, a, l), l)).tag = 2;
                     null != b && (l.callback = b);
                     Nb(a, l);
                     ee(a, h)
                 }
             }
               , ja = Array.isArray
               , da = kh(!0)
               , Z = kh(!1)
               , ma = {}
               , wa = {
                 current: ma
             }
               , Ia = {
                 current: ma
             }
               , ya = {
                 current: ma
             }
               , xa = 1
               , Ua = 1
               , Ya = 2
               , Ga = {
                 current: 0
             }
               , Za = 0
               , ub = 2
               , fb = 4
               , mb = 8
               , Vb = 16
               , nb = 32
               , Cb = 64
               , Wb = 128
               , kc = Lb.ReactCurrentDispatcher
               , Bc = 0
               , Jb = null
               , eb = null
               , pb = null
               , Dc = null
               , Fb = null
               , Cc = null
               , Ob = 0
               , Bb = null
               , wd = 0
               , Xc = !1
               , lc = null
               , Yc = 0
               , Ue = {
                 readContext: ac,
                 useCallback: Ub,
                 useContext: Ub,
                 useEffect: Ub,
                 useImperativeHandle: Ub,
                 useLayoutEffect: Ub,
                 useMemo: Ub,
                 useReducer: Ub,
                 useRef: Ub,
                 useState: Ub,
                 useDebugValue: Ub,
                 useResponder: Ub
             }
               , pj = {
                 readContext: ac,
                 useCallback: function(a, b) {
                     return xd().memoizedState = [a, void 0 === b ? null : b],
                     a
                 },
                 useContext: ac,
                 useEffect: function(a, b) {
                     return Xe(516, Wb | Cb, a, b)
                 },
                 useImperativeHandle: function(a, b, h) {
                     return h = null != h ? h.concat([a]) : null,
                     Xe(4, fb | nb, nh.bind(null, b, a), h)
                 },
                 useLayoutEffect: function(a, b) {
                     return Xe(4, fb | nb, a, b)
                 },
                 useMemo: function(a, b) {
                     var h = xd();
                     return b = void 0 === b ? null : b,
                     a = a(),
                     h.memoizedState = [a, b],
                     a
                 },
                 useReducer: function(a, b, h) {
                     var l = xd();
                     return b = void 0 !== h ? h(b) : b,
                     l.memoizedState = l.baseState = b,
                     a = (a = l.queue = {
                         last: null,
                         dispatch: null,
                         lastRenderedReducer: a,
                         lastRenderedState: b
                     }).dispatch = ph.bind(null, Jb, a),
                     [l.memoizedState, a]
                 },
                 useRef: function(a) {
                     return a = {
                         current: a
                     },
                     xd().memoizedState = a
                 },
                 useState: function(a) {
                     var b = xd();
                     return "function" == typeof a && (a = a()),
                     b.memoizedState = b.baseState = a,
                     a = (a = b.queue = {
                         last: null,
                         dispatch: null,
                         lastRenderedReducer: Ve,
                         lastRenderedState: a
                     }).dispatch = ph.bind(null, Jb, a),
                     [b.memoizedState, a]
                 },
                 useDebugValue: oh,
                 useResponder: Kf
             }
               , $i = {
                 readContext: ac,
                 useCallback: function(a, b) {
                     var h = ce();
                     b = void 0 === b ? null : b;
                     var l = h.memoizedState;
                     return null !== l && null !== b && ag(b, l[1]) ? l[0] : (h.memoizedState = [a, b],
                     a)
                 },
                 useContext: ac,
                 useEffect: function(a, b) {
                     return de(516, Wb | Cb, a, b)
                 },
                 useImperativeHandle: function(a, b, h) {
                     return h = null != h ? h.concat([a]) : null,
                     de(4, fb | nb, nh.bind(null, b, a), h)
                 },
                 useLayoutEffect: function(a, b) {
                     return de(4, fb | nb, a, b)
                 },
                 useMemo: function(a, b) {
                     var h = ce();
                     b = void 0 === b ? null : b;
                     var l = h.memoizedState;
                     return null !== l && null !== b && ag(b, l[1]) ? l[0] : (a = a(),
                     h.memoizedState = [a, b],
                     a)
                 },
                 useReducer: Ec,
                 useRef: function() {
                     return ce().memoizedState
                 },
                 useState: function(a) {
                     return Ec(Ve)
                 },
                 useDebugValue: oh,
                 useResponder: Kf
             }
               , mc = null
               , yd = null
               , Zc = !1
               , qj = Lb.ReactCurrentOwner
               , Tc = !1
               , rj = {}
               , fj = void 0
               , yi = void 0
               , ej = void 0
               , gj = void 0;
             fj = function(a, b) {
                 for (var h = b.child; null !== h; ) {
                     if (5 === h.tag || 6 === h.tag)
                         a.appendChild(h.stateNode);
                     else if (20 === h.tag)
                         a.appendChild(h.stateNode.instance);
                     else if (4 !== h.tag && null !== h.child) {
                         h.child.return = h;
                         h = h.child;
                         continue
                     }
                     if (h === b)
                         break;
                     for (; null === h.sibling; ) {
                         if (null === h.return || h.return === b)
                             return;
                         h = h.return
                     }
                     h.sibling.return = h.return;
                     h = h.sibling
                 }
             }
             ;
             yi = function() {}
             ;
             ej = function(a, b, h, l, m) {
                 var t = a.memoizedProps;
                 if (t !== l) {
                     var x = b.stateNode;
                     switch (Wc(wa.current),
                     a = null,
                     h) {
                     case "input":
                         t = Kd(x, t);
                         l = Kd(x, l);
                         a = [];
                         break;
                     case "option":
                         t = pd(x, t);
                         l = pd(x, l);
                         a = [];
                         break;
                     case "select":
                         t = Eb({}, t, {
                             value: void 0
                         });
                         l = Eb({}, l, {
                             value: void 0
                         });
                         a = [];
                         break;
                     case "textarea":
                         t = Oa(x, t);
                         l = Oa(x, l);
                         a = [];
                         break;
                     default:
                         "function" != typeof t.onClick && "function" == typeof l.onClick && (x.onclick = Je)
                     }
                     qd(h, l);
                     x = h = void 0;
                     var B = null;
                     for (h in t)
                         if (!l.hasOwnProperty(h) && t.hasOwnProperty(h) && null != t[h])
                             if ("style" === h) {
                                 var M = t[h];
                                 for (x in M)
                                     M.hasOwnProperty(x) && (B || (B = {}),
                                     B[x] = "")
                             } else
                                 "dangerouslySetInnerHTML" !== h && "children" !== h && "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && "autoFocus" !== h && (pc.hasOwnProperty(h) ? a || (a = []) : (a = a || []).push(h, null));
                     for (h in l) {
                         var V = l[h];
                         if (M = null != t ? t[h] : void 0,
                         l.hasOwnProperty(h) && V !== M && (null != V || null != M))
                             if ("style" === h)
                                 if (M) {
                                     for (x in M)
                                         !M.hasOwnProperty(x) || V && V.hasOwnProperty(x) || (B || (B = {}),
                                         B[x] = "");
                                     for (x in V)
                                         V.hasOwnProperty(x) && M[x] !== V[x] && (B || (B = {}),
                                         B[x] = V[x])
                                 } else
                                     B || (a || (a = []),
                                     a.push(h, B)),
                                     B = V;
                             else
                                 "dangerouslySetInnerHTML" === h ? (V = V ? V.__html : void 0,
                                 M = M ? M.__html : void 0,
                                 null != V && M !== V && (a = a || []).push(h, "" + V)) : "children" === h ? M === V || "string" != typeof V && "number" != typeof V || (a = a || []).push(h, "" + V) : "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && (pc.hasOwnProperty(h) ? (null != V && $b(m, h),
                                 a || M === V || (a = [])) : (a = a || []).push(h, V))
                     }
                     B && (a = a || []).push("style", B);
                     if (b.updateQueue = a)
                         b.effectTag |= 4
                 }
             }
             ;
             gj = function(a, b, h, l) {
                 h !== l && (b.effectTag |= 4)
             }
             ;
             var sj = "function" == typeof WeakSet ? WeakSet : Set
               , tj = "function" == typeof WeakMap ? WeakMap : Map
               , uj = Math.ceil
               , Gh = Lb.ReactCurrentDispatcher
               , dj = Lb.ReactCurrentOwner
               , tb = 0
               , ui = 8
               , Hc = 16
               , Ic = 32
               , me = 0
               , aj = 1
               , Ih = 2
               , Fh = 3
               , xi = 4
               , Fa = tb
               , je = null
               , Va = null
               , oc = 0
               , Kb = me
               , dd = 1073741823
               , ig = 1073741823
               , Eh = null
               , jg = !1
               , ri = 0
               , bj = 500
               , va = null
               , Ah = !1
               , si = null
               , Bd = null
               , Bi = !1
               , og = null
               , Ei = 90
               , Di = 0
               , ke = null
               , eg = 0
               , ti = null
               , Ch = 0
               , kj = 0
               , cj = void 0;
             cj = function(a, b, h) {
                 var l = b.expirationTime;
                 if (null !== a) {
                     var m = b.pendingProps;
                     if (a.memoizedProps !== m || zb.current)
                         Tc = !0;
                     else if (l < h) {
                         switch (Tc = !1,
                         b.tag) {
                         case 3:
                             $e(b);
                             yd = mc = null;
                             Zc = !1;
                             break;
                         case 5:
                             if (lh(b),
                             4 & b.mode && 1 !== h && m.hidden)
                                 return b.expirationTime = b.childExpirationTime = 1,
                                 null;
                             break;
                         case 1:
                             null != b.type.childContextTypes && Ke(b);
                             break;
                         case 4:
                             Zf(b, b.stateNode.containerInfo);
                             break;
                         case 10:
                             dh(b, b.memoizedProps.value);
                             break;
                         case 13:
                             if (null !== b.memoizedState)
                                 return 0 !== (l = b.child.childExpirationTime) && l >= h ? af(a, b, h) : (lb(Ga, Ga.current & xa),
                                 null !== (b = nc(a, b, h)) ? b.sibling : null);
                             lb(Ga, Ga.current & xa);
                             break;
                         case 19:
                             if (l = b.childExpirationTime >= h,
                             64 & a.effectTag) {
                                 if (l)
                                     return dg(a, b, h);
                                 b.effectTag |= 64
                             }
                             if (null !== (m = b.memoizedState) && (m.rendering = null,
                             m.tail = null),
                             lb(Ga, Ga.current),
                             !l)
                                 return null
                         }
                         return nc(a, b, h)
                     }
                 } else
                     Tc = !1;
                 switch (b.expirationTime = 0,
                 b.tag) {
                 case 2:
                     if (l = b.type,
                     null !== a && (a.alternate = null,
                     b.alternate = null,
                     b.effectTag |= 2),
                     a = b.pendingProps,
                     m = rd(b, qb.current),
                     td(b, h),
                     m = bg(null, b, l, a, m, h),
                     b.effectTag |= 1,
                     "object" == typeof m && null !== m && "function" == typeof m.render && void 0 === m.$$typeof) {
                         if (b.tag = 1,
                         mh(),
                         null != l.childContextTypes) {
                             var t = !0;
                             Ke(b)
                         } else
                             t = !1;
                         b.memoizedState = null !== m.state && void 0 !== m.state ? m.state : null;
                         var x = l.getDerivedStateFromProps;
                         "function" == typeof x && Zd(b, l, x, a);
                         m.updater = T;
                         b.stateNode = m;
                         m._reactInternalFiber = b;
                         Re(b, l, a, h);
                         b = ge(null, b, l, !0, t, h)
                     } else
                         b.tag = 0,
                         Pb(null, b, m, h),
                         b = b.child;
                     return b;
                 case 16:
                     switch (m = b.elementType,
                     null !== a && (a.alternate = null,
                     b.alternate = null,
                     b.effectTag |= 2),
                     a = b.pendingProps,
                     m = function(la) {
                         var Ha = la._result;
                         switch (la._status) {
                         case 1:
                             return Ha;
                         case 2:
                         case 0:
                             throw Ha;
                         default:
                             switch (la._status = 0,
                             (Ha = (Ha = la._ctor)()).then(function(La) {
                                 0 === la._status && (La = La.default,
                                 la._status = 1,
                                 la._result = La)
                             }, function(La) {
                                 0 === la._status && (la._status = 2,
                                 la._result = La)
                             }),
                             la._status) {
                             case 1:
                                 return la._result;
                             case 2:
                                 throw la._result;
                             }
                             throw la._result = Ha,
                             Ha;
                         }
                     }(m),
                     b.type = m,
                     t = b.tag = function(la) {
                         if ("function" == typeof la)
                             return cg(la) ? 1 : 0;
                         if (null != la) {
                             if ((la = la.$$typeof) === xf)
                                 return 11;
                             if (la === yf)
                                 return 14
                         }
                         return 2
                     }(m),
                     a = Sb(m, a),
                     t) {
                     case 0:
                         b = Ze(null, b, m, a, h);
                         break;
                     case 1:
                         b = Gc(null, b, m, a, h);
                         break;
                     case 11:
                         b = $c(null, b, m, a, h);
                         break;
                     case 14:
                         b = ad(null, b, m, Sb(m.type, a), l, h);
                         break;
                     default:
                         throw v(Error(306), m, "");
                     }
                     return b;
                 case 0:
                     return l = b.type,
                     m = b.pendingProps,
                     Ze(a, b, l, m = b.elementType === l ? m : Sb(l, m), h);
                 case 1:
                     return l = b.type,
                     m = b.pendingProps,
                     Gc(a, b, l, m = b.elementType === l ? m : Sb(l, m), h);
                 case 3:
                     if ($e(b),
                     null === (l = b.updateQueue))
                         throw v(Error(282));
                     m = null !== (m = b.memoizedState) ? m.element : null;
                     Yd(b, l, b.pendingProps, null, h);
                     (l = b.memoizedState.element) === m ? (yd = mc = null,
                     Zc = !1,
                     b = nc(a, b, h)) : (m = b.stateNode,
                     (m = (null === a || null === a.child) && m.hydrate) && (yd = Ud(b.stateNode.containerInfo.firstChild),
                     mc = b,
                     m = Zc = !0),
                     m ? (b.effectTag |= 2,
                     b.child = Z(b, null, l, h)) : (Pb(a, b, l, h),
                     yd = mc = null,
                     Zc = !1),
                     b = b.child);
                     return b;
                 case 5:
                     return lh(b),
                     null === a && rh(b),
                     l = b.type,
                     m = b.pendingProps,
                     t = null !== a ? a.memoizedProps : null,
                     x = m.children,
                     jc(l, m) ? x = null : null !== t && jc(l, t) && (b.effectTag |= 16),
                     th(a, b),
                     4 & b.mode && 1 !== h && m.hidden ? (b.expirationTime = b.childExpirationTime = 1,
                     b = null) : (Pb(a, b, x, h),
                     b = b.child),
                     b;
                 case 6:
                     return null === a && rh(b),
                     null;
                 case 13:
                     return af(a, b, h);
                 case 4:
                     return Zf(b, b.stateNode.containerInfo),
                     l = b.pendingProps,
                     null === a ? b.child = da(b, null, l, h) : Pb(a, b, l, h),
                     b.child;
                 case 11:
                     return l = b.type,
                     m = b.pendingProps,
                     $c(a, b, l, m = b.elementType === l ? m : Sb(l, m), h);
                 case 7:
                     return Pb(a, b, b.pendingProps, h),
                     b.child;
                 case 8:
                 case 12:
                     return Pb(a, b, b.pendingProps.children, h),
                     b.child;
                 case 10:
                     a: {
                         if (l = b.type._context,
                         m = b.pendingProps,
                         x = b.memoizedProps,
                         dh(b, t = m.value),
                         null !== x) {
                             var B = x.value;
                             if (0 === (t = Oc(B, t) ? 0 : 0 | ("function" == typeof l._calculateChangedBits ? l._calculateChangedBits(B, t) : 1073741823))) {
                                 if (x.children === m.children && !zb.current) {
                                     b = nc(a, b, h);
                                     break a
                                 }
                             } else
                                 for (null !== (B = b.child) && (B.return = b); null !== B; ) {
                                     var M = B.dependencies;
                                     if (null !== M) {
                                         x = B.child;
                                         for (var V = M.firstContext; null !== V; ) {
                                             if (V.context === l && V.observedBits & t) {
                                                 1 === B.tag && ((V = yc(h, null)).tag = 2,
                                                 Nb(B, V));
                                                 B.expirationTime < h && (B.expirationTime = h);
                                                 null !== (V = B.alternate) && V.expirationTime < h && (V.expirationTime = h);
                                                 eh(B.return, h);
                                                 M.expirationTime < h && (M.expirationTime = h);
                                                 break
                                             }
                                             V = V.next
                                         }
                                     } else
                                         x = 10 === B.tag && B.type === b.type ? null : B.child;
                                     if (null !== x)
                                         x.return = B;
                                     else
                                         for (x = B; null !== x; ) {
                                             if (x === b) {
                                                 x = null;
                                                 break
                                             }
                                             if (null !== (B = x.sibling)) {
                                                 B.return = x.return;
                                                 x = B;
                                                 break
                                             }
                                             x = x.return
                                         }
                                     B = x
                                 }
                         }
                         Pb(a, b, m.children, h);
                         b = b.child
                     }
                     return b;
                 case 9:
                     return m = b.type,
                     l = (t = b.pendingProps).children,
                     td(b, h),
                     l = l(m = ac(m, t.unstable_observedBits)),
                     b.effectTag |= 1,
                     Pb(a, b, l, h),
                     b.child;
                 case 14:
                     return t = Sb(m = b.type, b.pendingProps),
                     ad(a, b, m, t = Sb(m.type, t), l, h);
                 case 15:
                     return sh(a, b, b.type, b.pendingProps, l, h);
                 case 17:
                     return l = b.type,
                     m = b.pendingProps,
                     m = b.elementType === l ? m : Sb(l, m),
                     null !== a && (a.alternate = null,
                     b.alternate = null,
                     b.effectTag |= 2),
                     b.tag = 1,
                     null != l.childContextTypes ? (a = !0,
                     Ke(b)) : a = !1,
                     td(b, h),
                     Qe(b, l, m),
                     Re(b, l, m, h),
                     ge(null, b, l, !0, a, h);
                 case 19:
                     return dg(a, b, h)
                 }
                 throw v(Error(156));
             }
             ;
             var Fi = null
               , qi = null;
             Ib = function(a, b, h) {
                 switch (b) {
                 case "input":
                     if (Ef(a, h),
                     b = h.name,
                     "radio" === h.type && null != b) {
                         for (h = a; h.parentNode; )
                             h = h.parentNode;
                         h = h.querySelectorAll("input[name\x3d" + JSON.stringify("" + b) + '][type\x3d"radio"]');
                         for (b = 0; b < h.length; b++) {
                             var l = h[b];
                             if (l !== a && l.form === a.form) {
                                 var m = S(l);
                                 if (!m)
                                     throw v(Error(90));
                                 Ta(l);
                                 Ef(l, m)
                             }
                         }
                     }
                     break;
                 case "textarea":
                     He(a, h);
                     break;
                 case "select":
                     null != (b = h.value) && sc(a, !!h.multiple, b, !1)
                 }
             }
             ;
             ne.prototype.render = function(a) {
                 if (!this._defer)
                     throw v(Error(250));
                 this._hasChildren = !0;
                 this._children = a;
                 var b = this._root._internalRoot
                   , h = this._expirationTime
                   , l = new oe;
                 return Oh(a, b, null, h, null, l._onCommit),
                 l
             }
             ;
             ne.prototype.then = function(a) {
                 if (this._didComplete)
                     a();
                 else {
                     var b = this._callbacks;
                     null === b && (b = this._callbacks = []);
                     b.push(a)
                 }
             }
             ;
             ne.prototype.commit = function() {
                 var a = this._root._internalRoot
                   , b = a.firstBatch;
                 if (!this._defer || null === b)
                     throw v(Error(251));
                 if (this._hasChildren) {
                     var h = this._expirationTime;
                     if (b !== this) {
                         this._hasChildren && (h = this._expirationTime = b._expirationTime,
                         this.render(this._children));
                         for (var l = null, m = b; m !== this; )
                             l = m,
                             m = m._next;
                         if (null === l)
                             throw v(Error(251));
                         l._next = m._next;
                         this._next = b;
                         a.firstBatch = this
                     }
                     if (this._defer = !1,
                     b = h,
                     (Fa & (Hc | Ic)) !== tb)
                         throw v(Error(253));
                     ib(Gb.bind(null, a, b));
                     Mb();
                     b = this._next;
                     this._next = null;
                     null !== (b = a.firstBatch = b) && b._hasChildren && b.render(b._children)
                 } else
                     this._next = null,
                     this._defer = !1
             }
             ;
             ne.prototype._onComplete = function() {
                 if (!this._didComplete) {
                     this._didComplete = !0;
                     var a = this._callbacks;
                     if (null !== a)
                         for (var b = 0; b < a.length; b++)
                             (0,
                             a[b])()
                 }
             }
             ;
             oe.prototype.then = function(a) {
                 if (this._didCommit)
                     a();
                 else {
                     var b = this._callbacks;
                     null === b && (b = this._callbacks = []);
                     b.push(a)
                 }
             }
             ;
             oe.prototype._onCommit = function() {
                 if (!this._didCommit) {
                     this._didCommit = !0;
                     var a = this._callbacks;
                     if (null !== a)
                         for (var b = 0; b < a.length; b++) {
                             var h = a[b];
                             if ("function" != typeof h)
                                 throw v(Error(191), h);
                             h()
                         }
                 }
             }
             ;
             ed.prototype.render = Dd.prototype.render = function(a, b) {
                 var h = this._internalRoot
                   , l = new oe;
                 return null !== (b = void 0 === b ? null : b) && l.then(b),
                 lf(a, h, null, l._onCommit),
                 l
             }
             ;
             ed.prototype.unmount = Dd.prototype.unmount = function(a) {
                 var b = this._internalRoot
                   , h = new oe;
                 return null !== (a = void 0 === a ? null : a) && h.then(a),
                 lf(null, b, null, h._onCommit),
                 h
             }
             ;
             ed.prototype.createBatch = function() {
                 var a = new ne(this)
                   , b = a._expirationTime
                   , h = this._internalRoot
                   , l = h.firstBatch;
                 if (null === l)
                     h.firstBatch = a,
                     a._next = null;
                 else {
                     for (h = null; null !== l && l._expirationTime >= b; )
                         h = l,
                         l = l._next;
                     a._next = l;
                     null !== h && (h._next = a)
                 }
                 return a
             }
             ;
             xb = Dh;
             jb = hg;
             D = gg;
             Mf = function(a, b) {
                 var h = Fa;
                 Fa |= 2;
                 try {
                     return a(b)
                 } finally {
                     (Fa = h) === tb && Mb()
                 }
             }
             ;
             var lj = {
                 createPortal: pe,
                 findDOMNode: function(a) {
                     if (null == a)
                         a = null;
                     else if (1 !== a.nodeType) {
                         var b = a._reactInternalFiber;
                         if (void 0 === b) {
                             if ("function" == typeof a.render)
                                 throw v(Error(188));
                             throw v(Error(268), Object.keys(a));
                         }
                         a = null === (a = Lf(b)) ? null : a.stateNode
                     }
                     return a
                 },
                 hydrate: function(a, b, h) {
                     if (!fd(b))
                         throw v(Error(200));
                     return mf(null, a, b, !0, h)
                 },
                 render: function(a, b, h) {
                     if (!fd(b))
                         throw v(Error(200));
                     return mf(null, a, b, !1, h)
                 },
                 unstable_renderSubtreeIntoContainer: function(a, b, h, l) {
                     if (!fd(h))
                         throw v(Error(200));
                     if (null == a || void 0 === a._reactInternalFiber)
                         throw v(Error(38));
                     return mf(a, b, h, !1, l)
                 },
                 unmountComponentAtNode: function(a) {
                     if (!fd(a))
                         throw v(Error(40));
                     return !!a._reactRootContainer && (le(function() {
                         mf(null, null, a, !1, function() {
                             a._reactRootContainer = null
                         })
                     }),
                     !0)
                 },
                 unstable_createPortal: function() {
                     return pe.apply(void 0, arguments)
                 },
                 unstable_batchedUpdates: Dh,
                 unstable_interactiveUpdates: function(a, b, h, l) {
                     return gg(),
                     hg(a, b, h, l)
                 },
                 unstable_discreteUpdates: hg,
                 unstable_flushDiscreteUpdates: gg,
                 flushSync: function(a, b) {
                     if ((Fa & (Hc | Ic)) !== tb)
                         throw v(Error(187));
                     var h = Fa;
                     Fa |= 1;
                     try {
                         return xc(99, a.bind(null, b))
                     } finally {
                         Fa = h,
                         Mb()
                     }
                 },
                 unstable_createRoot: function(a, b) {
                     if (!fd(a))
                         throw v(Error(299), "unstable_createRoot");
                     return new ed(a,null != b && !0 === b.hydrate)
                 },
                 unstable_createSyncRoot: function(a, b) {
                     if (!fd(a))
                         throw v(Error(299), "unstable_createRoot");
                     return new Dd(a,1,null != b && !0 === b.hydrate)
                 },
                 unstable_flushControlled: function(a) {
                     var b = Fa;
                     Fa |= 1;
                     try {
                         xc(99, a)
                     } finally {
                         (Fa = b) === tb && Mb()
                     }
                 },
                 __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                     Events: [R, U, S, tg.injectEventPluginsByName, pf, ha, function(a) {
                         w(a, ka)
                     }
                     , ia, n, ob, L, Cd, {
                         current: !1
                     }]
                 }
             };
             !function(a) {
                 var b = a.findFiberByHostInstance;
                 (function(h) {
                     if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
                         return !1;
                     var l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                     if (l.isDisabled || !l.supportsFiber)
                         return !0;
                     try {
                         var m = l.inject(h);
                         Fi = function(t) {
                             try {
                                 l.onCommitFiberRoot(m, t, void 0, !(64 & ~t.current.effectTag))
                             } catch (x) {}
                         }
                         ;
                         qi = function(t) {
                             try {
                                 l.onCommitFiberUnmount(m, t)
                             } catch (x) {}
                         }
                     } catch (t) {}
                 }
                 )(Eb({}, a, {
                     overrideHookState: null,
                     overrideProps: null,
                     setSuspenseHandler: null,
                     scheduleUpdate: null,
                     currentDispatcherRef: Lb.ReactCurrentDispatcher,
                     findHostInstanceByFiber: function(h) {
                         return null === (h = Lf(h)) ? null : h.stateNode
                     },
                     findFiberByHostInstance: function(h) {
                         return b ? b(h) : null
                     },
                     findHostInstancesForRefresh: null,
                     scheduleRefresh: null,
                     scheduleRoot: null,
                     setRefreshHandler: null,
                     getCurrentFiber: null
                 }))
             }({
                 findFiberByHostInstance: F,
                 bundleType: 0,
                 version: "16.9.0",
                 rendererPackageName: "react-dom"
             });
             var mj = {
                 default: lj
             }
               , nj = mj && lj || mj;
             Q.exports = nj.default || nj
         }
         ,
         961: (Q,I,C)=>{
             !function z() {
                 if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                     try {
                         __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)
                     } catch (H) {
                         console.error(H)
                     }
             }();
             Q.exports = C(2551)
         }
         ,
         2799: (Q,I)=>{
             function C(S) {
                 if ("object" == typeof S && null !== S) {
                     var N = S.$$typeof;
                     switch (N) {
                     case z:
                         switch (S = S.type) {
                         case u:
                         case L:
                         case P:
                         case A:
                         case K:
                         case F:
                             return S;
                         default:
                             switch (S = S && S.$$typeof) {
                             case w:
                             case O:
                             case J:
                                 return S;
                             default:
                                 return N
                             }
                         }
                     case U:
                     case R:
                     case H:
                         return N
                     }
                 }
             }
             function v(S) {
                 return C(S) === L
             }
             Object.defineProperty(I, "__esModule", {
                 value: !0
             });
             var z = (Q = "function" == typeof Symbol && Symbol.for) ? Symbol.for("react.element") : 60103
               , H = Q ? Symbol.for("react.portal") : 60106
               , P = Q ? Symbol.for("react.fragment") : 60107
               , K = Q ? Symbol.for("react.strict_mode") : 60108
               , A = Q ? Symbol.for("react.profiler") : 60114
               , J = Q ? Symbol.for("react.provider") : 60109
               , w = Q ? Symbol.for("react.context") : 60110
               , u = Q ? Symbol.for("react.async_mode") : 60111
               , L = Q ? Symbol.for("react.concurrent_mode") : 60111
               , O = Q ? Symbol.for("react.forward_ref") : 60112
               , F = Q ? Symbol.for("react.suspense") : 60113
               , R = Q ? Symbol.for("react.memo") : 60115
               , U = Q ? Symbol.for("react.lazy") : 60116;
             I.typeOf = C;
             I.AsyncMode = u;
             I.ConcurrentMode = L;
             I.ContextConsumer = w;
             I.ContextProvider = J;
             I.Element = z;
             I.ForwardRef = O;
             I.Fragment = P;
             I.Lazy = U;
             I.Memo = R;
             I.Portal = H;
             I.Profiler = A;
             I.StrictMode = K;
             I.Suspense = F;
             I.isValidElementType = function(S) {
                 return "string" == typeof S || "function" == typeof S || S === P || S === L || S === A || S === K || S === F || "object" == typeof S && null !== S && (S.$$typeof === U || S.$$typeof === R || S.$$typeof === J || S.$$typeof === w || S.$$typeof === O)
             }
             ;
             I.isAsyncMode = function(S) {
                 return v(S) || C(S) === u
             }
             ;
             I.isConcurrentMode = v;
             I.isContextConsumer = function(S) {
                 return C(S) === w
             }
             ;
             I.isContextProvider = function(S) {
                 return C(S) === J
             }
             ;
             I.isElement = function(S) {
                 return "object" == typeof S && null !== S && S.$$typeof === z
             }
             ;
             I.isForwardRef = function(S) {
                 return C(S) === O
             }
             ;
             I.isFragment = function(S) {
                 return C(S) === P
             }
             ;
             I.isLazy = function(S) {
                 return C(S) === U
             }
             ;
             I.isMemo = function(S) {
                 return C(S) === R
             }
             ;
             I.isPortal = function(S) {
                 return C(S) === H
             }
             ;
             I.isProfiler = function(S) {
                 return C(S) === A
             }
             ;
             I.isStrictMode = function(S) {
                 return C(S) === K
             }
             ;
             I.isSuspense = function(S) {
                 return C(S) === F
             }
         }
         ,
         4363: (Q,I,C)=>{
             Q.exports = C(2799)
         }
         ,
         8989: (Q,I)=>{
             function C(U) {
                 if ("object" == typeof U && null !== U) {
                     var S = U.$$typeof;
                     switch (S) {
                     case v:
                         switch (U = U.type) {
                         case w:
                         case u:
                         case H:
                         case K:
                         case P:
                         case O:
                             return U;
                         default:
                             switch (U = U && U.$$typeof) {
                             case J:
                             case L:
                             case R:
                             case F:
                             case A:
                                 return U;
                             default:
                                 return S
                             }
                         }
                     case z:
                         return S
                     }
                 }
             }
             var v = (Q = "function" == typeof Symbol && Symbol.for) ? Symbol.for("react.element") : 60103
               , z = Q ? Symbol.for("react.portal") : 60106
               , H = Q ? Symbol.for("react.fragment") : 60107
               , P = Q ? Symbol.for("react.strict_mode") : 60108
               , K = Q ? Symbol.for("react.profiler") : 60114
               , A = Q ? Symbol.for("react.provider") : 60109
               , J = Q ? Symbol.for("react.context") : 60110
               , w = Q ? Symbol.for("react.async_mode") : 60111
               , u = Q ? Symbol.for("react.concurrent_mode") : 60111
               , L = Q ? Symbol.for("react.forward_ref") : 60112
               , O = Q ? Symbol.for("react.suspense") : 60113;
             Q && Symbol.for("react.suspense_list");
             var F = Q ? Symbol.for("react.memo") : 60115
               , R = Q ? Symbol.for("react.lazy") : 60116;
             Q && Symbol.for("react.fundamental");
             Q && Symbol.for("react.responder");
             Q && Symbol.for("react.scope");
             I.isContextConsumer = function(U) {
                 return C(U) === J
             }
         }
         ,
         4737: (Q,I,C)=>{
             Q.exports = C(8989)
         }
         ,
         5287: (Q,I,C)=>{
             function v(D) {
                 for (var W = D.message, fa = "https://reactjs.org/docs/error-decoder.html?invariant\x3d" + W, pa = 1; pa < arguments.length; pa++)
                     fa += "\x26args[]\x3d" + encodeURIComponent(arguments[pa]);
                 return D.message = "Minified React error #" + W + "; visit " + fa + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
                 D
             }
             function z(D, W, fa) {
                 this.props = D;
                 this.context = W;
                 this.refs = rb;
                 this.updater = fa || Rb
             }
             function H() {}
             function P(D, W, fa) {
                 this.props = D;
                 this.context = W;
                 this.refs = rb;
                 this.updater = fa || Rb
             }
             function K(D, W, fa) {
                 var pa = void 0
                   , ua = {}
                   , za = null
                   , Qa = null;
                 if (null != W)
                     for (pa in void 0 !== W.ref && (Qa = W.ref),
                     void 0 !== W.key && (za = "" + W.key),
                     W)
                         ia.call(W, pa) && !n.hasOwnProperty(pa) && (ua[pa] = W[pa]);
                 var Ta = arguments.length - 2;
                 if (1 === Ta)
                     ua.children = fa;
                 else if (1 < Ta) {
                     for (var hb = Array(Ta), $a = 0; $a < Ta; $a++)
                         hb[$a] = arguments[$a + 2];
                     ua.children = hb
                 }
                 if (D && D.defaultProps)
                     for (pa in Ta = D.defaultProps)
                         void 0 === ua[pa] && (ua[pa] = Ta[pa]);
                 return {
                     $$typeof: na,
                     type: D,
                     key: za,
                     ref: Qa,
                     props: ua,
                     _owner: wb.current
                 }
             }
             function A(D) {
                 return "object" == typeof D && null !== D && D.$$typeof === na
             }
             function J(D, W, fa, pa) {
                 if (jb.length) {
                     var ua = jb.pop();
                     return ua.result = D,
                     ua.keyPrefix = W,
                     ua.func = fa,
                     ua.context = pa,
                     ua.count = 0,
                     ua
                 }
                 return {
                     result: D,
                     keyPrefix: W,
                     func: fa,
                     context: pa,
                     count: 0
                 }
             }
             function w(D) {
                 D.result = null;
                 D.keyPrefix = null;
                 D.func = null;
                 D.context = null;
                 D.count = 0;
                 10 > jb.length && jb.push(D)
             }
             function u(D, W, fa, pa) {
                 var ua = typeof D;
                 "undefined" !== ua && "boolean" !== ua || (D = null);
                 var za = !1;
                 if (null === D)
                     za = !0;
                 else
                     switch (ua) {
                     case "string":
                     case "number":
                         za = !0;
                         break;
                     case "object":
                         switch (D.$$typeof) {
                         case na:
                         case ea:
                             za = !0
                         }
                     }
                 if (za)
                     return fa(pa, D, "" === W ? "." + O(D, 0) : W),
                     1;
                 if (za = 0,
                 W = "" === W ? "." : W + ":",
                 Array.isArray(D))
                     for (var Qa = 0; Qa < D.length; Qa++) {
                         var Ta = W + O(ua = D[Qa], Qa);
                         za += u(ua, Ta, fa, pa)
                     }
                 else if (null === D || "object" != typeof D ? Ta = null : Ta = "function" == typeof (Ta = vb && D[vb] || D["@@iterator"]) ? Ta : null,
                 "function" == typeof Ta)
                     for (D = Ta.call(D),
                     Qa = 0; !(ua = D.next()).done; )
                         za += u(ua = ua.value, W + O(ua, Qa++), fa, pa);
                 else if ("object" === ua)
                     throw fa = "" + D,
                     v(Error(31), "[object Object]" === fa ? "object with keys {" + Object.keys(D).join(", ") + "}" : fa, "");
                 return za
             }
             function L(D, W, fa) {
                 return null == D ? 0 : u(D, "", W, fa)
             }
             function O(D, W) {
                 return "object" == typeof D && null !== D && null != D.key ? function(fa) {
                     var pa = {
                         "\x3d": "\x3d0",
                         ":": "\x3d2"
                     };
                     return "$" + ("" + fa).replace(/[=:]/g, function(ua) {
                         return pa[ua]
                     })
                 }(D.key) : W.toString(36)
             }
             function F(D, W) {
                 D.func.call(D.context, W, D.count++)
             }
             function R(D, W, fa) {
                 var pa = D.result
                   , ua = D.keyPrefix;
                 D = D.func.call(D.context, W, D.count++);
                 Array.isArray(D) ? U(D, pa, fa, function(za) {
                     return za
                 }) : null != D && (A(D) && (D = function(za, Qa) {
                     return {
                         $$typeof: na,
                         type: za.type,
                         key: Qa,
                         ref: za.ref,
                         props: za.props,
                         _owner: za._owner
                     }
                 }(D, ua + (!D.key || W && W.key === D.key ? "" : ("" + D.key).replace(xb, "$\x26/") + "/") + fa)),
                 pa.push(D))
             }
             function U(D, W, fa, pa, ua) {
                 var za = "";
                 null != fa && (za = ("" + fa).replace(xb, "$\x26/") + "/");
                 L(D, R, W = J(W, za, pa, ua));
                 w(W)
             }
             function S() {
                 var D = Ea.current;
                 if (null === D)
                     throw v(Error(321));
                 return D
             }
             var N = C(5228)
               , ba = "function" == typeof Symbol && Symbol.for
               , na = ba ? Symbol.for("react.element") : 60103
               , ea = ba ? Symbol.for("react.portal") : 60106;
             I = ba ? Symbol.for("react.fragment") : 60107;
             C = ba ? Symbol.for("react.strict_mode") : 60108;
             var ka = ba ? Symbol.for("react.profiler") : 60114
               , ha = ba ? Symbol.for("react.provider") : 60109
               , aa = ba ? Symbol.for("react.context") : 60110
               , sa = ba ? Symbol.for("react.forward_ref") : 60112
               , Na = ba ? Symbol.for("react.suspense") : 60113
               , bb = ba ? Symbol.for("react.suspense_list") : 60120
               , gb = ba ? Symbol.for("react.memo") : 60115
               , cb = ba ? Symbol.for("react.lazy") : 60116;
             ba && Symbol.for("react.fundamental");
             ba && Symbol.for("react.responder");
             var vb = "function" == typeof Symbol && Symbol.iterator
               , Rb = {
                 isMounted: function() {
                     return !1
                 },
                 enqueueForceUpdate: function() {},
                 enqueueReplaceState: function() {},
                 enqueueSetState: function() {}
             }
               , rb = {};
             z.prototype.isReactComponent = {};
             z.prototype.setState = function(D, W) {
                 if ("object" != typeof D && "function" != typeof D && null != D)
                     throw v(Error(85));
                 this.updater.enqueueSetState(this, D, W, "setState")
             }
             ;
             z.prototype.forceUpdate = function(D) {
                 this.updater.enqueueForceUpdate(this, D, "forceUpdate")
             }
             ;
             H.prototype = z.prototype;
             ba = P.prototype = new H;
             ba.constructor = P;
             N(ba, z.prototype);
             ba.isPureReactComponent = !0;
             var Ea = {
                 current: null
             }
               , Pa = {
                 suspense: null
             }
               , wb = {
                 current: null
             }
               , ia = Object.prototype.hasOwnProperty
               , n = {
                 key: !0,
                 ref: !0,
                 __self: !0,
                 __source: !0
             }
               , xb = /\/+/g
               , jb = [];
             I = {
                 Children: {
                     map: function(D, W, fa) {
                         if (null == D)
                             return D;
                         var pa = [];
                         return U(D, pa, null, W, fa),
                         pa
                     },
                     forEach: function(D, W, fa) {
                         if (null == D)
                             return D;
                         L(D, F, W = J(null, null, W, fa));
                         w(W)
                     },
                     count: function(D) {
                         return L(D, function() {
                             return null
                         }, null)
                     },
                     toArray: function(D) {
                         var W = [];
                         return U(D, W, null, function(fa) {
                             return fa
                         }),
                         W
                     },
                     only: function(D) {
                         if (!A(D))
                             throw v(Error(143));
                         return D
                     }
                 },
                 createRef: function() {
                     return {
                         current: null
                     }
                 },
                 Component: z,
                 PureComponent: P,
                 createContext: function(D, W) {
                     return void 0 === W && (W = null),
                     (D = {
                         $$typeof: aa,
                         _calculateChangedBits: W,
                         _currentValue: D,
                         _currentValue2: D,
                         _threadCount: 0,
                         Provider: null,
                         Consumer: null
                     }).Provider = {
                         $$typeof: ha,
                         _context: D
                     },
                     D.Consumer = D
                 },
                 forwardRef: function(D) {
                     return {
                         $$typeof: sa,
                         render: D
                     }
                 },
                 lazy: function(D) {
                     return {
                         $$typeof: cb,
                         _ctor: D,
                         _status: -1,
                         _result: null
                     }
                 },
                 memo: function(D, W) {
                     return {
                         $$typeof: gb,
                         type: D,
                         compare: void 0 === W ? null : W
                     }
                 },
                 useCallback: function(D, W) {
                     return S().useCallback(D, W)
                 },
                 useContext: function(D, W) {
                     return S().useContext(D, W)
                 },
                 useEffect: function(D, W) {
                     return S().useEffect(D, W)
                 },
                 useImperativeHandle: function(D, W, fa) {
                     return S().useImperativeHandle(D, W, fa)
                 },
                 useDebugValue: function() {},
                 useLayoutEffect: function(D, W) {
                     return S().useLayoutEffect(D, W)
                 },
                 useMemo: function(D, W) {
                     return S().useMemo(D, W)
                 },
                 useReducer: function(D, W, fa) {
                     return S().useReducer(D, W, fa)
                 },
                 useRef: function(D) {
                     return S().useRef(D)
                 },
                 useState: function(D) {
                     return S().useState(D)
                 },
                 Fragment: I,
                 Profiler: ka,
                 StrictMode: C,
                 Suspense: Na,
                 unstable_SuspenseList: bb,
                 createElement: K,
                 cloneElement: function(D, W, fa) {
                     if (null == D)
                         throw v(Error(267), D);
                     var pa = void 0
                       , ua = N({}, D.props)
                       , za = D.key
                       , Qa = D.ref
                       , Ta = D._owner;
                     if (null != W) {
                         void 0 !== W.ref && (Qa = W.ref,
                         Ta = wb.current);
                         void 0 !== W.key && (za = "" + W.key);
                         var hb = void 0;
                         for (pa in D.type && D.type.defaultProps && (hb = D.type.defaultProps),
                         W)
                             ia.call(W, pa) && !n.hasOwnProperty(pa) && (ua[pa] = void 0 === W[pa] && void 0 !== hb ? hb[pa] : W[pa])
                     }
                     if (1 === (pa = arguments.length - 2))
                         ua.children = fa;
                     else if (1 < pa) {
                         hb = Array(pa);
                         for (var $a = 0; $a < pa; $a++)
                             hb[$a] = arguments[$a + 2];
                         ua.children = hb
                     }
                     return {
                         $$typeof: na,
                         type: D.type,
                         key: za,
                         ref: Qa,
                         props: ua,
                         _owner: Ta
                     }
                 },
                 createFactory: function(D) {
                     var W = K.bind(null, D);
                     return W.type = D,
                     W
                 },
                 isValidElement: A,
                 version: "16.9.0",
                 unstable_withSuspenseConfig: function(D, W) {
                     var fa = Pa.suspense;
                     Pa.suspense = void 0 === W ? null : W;
                     try {
                         D()
                     } finally {
                         Pa.suspense = fa
                     }
                 },
                 __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                     ReactCurrentDispatcher: Ea,
                     ReactCurrentBatchConfig: Pa,
                     ReactCurrentOwner: wb,
                     IsSomeRendererActing: {
                         current: !1
                     },
                     assign: N
                 }
             };
             I = (C = {
                 default: I
             },
             I) || C;
             Q.exports = I.default || I
         }
         ,
         6540: (Q,I,C)=>{
             Q.exports = C(5287)
         }
         ,
         7463: (Q,I)=>{
             function C(D, W) {
                 var fa = D.next;
                 if (fa === D)
                     Ea = null;
                 else {
                     D === Ea && (Ea = fa);
                     var pa = D.previous;
                     pa.next = fa;
                     fa.previous = pa
                 }
                 D.next = D.previous = null;
                 fa = D.callback;
                 pa = ia;
                 var ua = wb;
                 ia = D.priorityLevel;
                 wb = D;
                 try {
                     var za = D.expirationTime <= W;
                     switch (ia) {
                     case 1:
                         var Qa = fa(za);
                         break;
                     case 2:
                     case 3:
                     case 4:
                     case 5:
                         Qa = fa(za)
                     }
                 } catch (Ta) {
                     throw Ta;
                 } finally {
                     ia = pa,
                     wb = ua
                 }
                 if ("function" == typeof Qa)
                     if (W = D.expirationTime,
                     D.callback = Qa,
                     null === Ea)
                         Ea = D.next = D.previous = D;
                     else {
                         Qa = null;
                         za = Ea;
                         do {
                             if (W <= za.expirationTime) {
                                 Qa = za;
                                 break
                             }
                             za = za.next
                         } while (za !== Ea);
                         null === Qa ? Qa = Ea : Qa === Ea && (Ea = D);
                         (W = Qa.previous).next = Qa.previous = D;
                         D.next = Qa;
                         D.previous = W
                     }
             }
             function v(D) {
                 if (null !== Pa && Pa.startTime <= D) {
                     do {
                         var W = Pa
                           , fa = W.next;
                         if (W === fa)
                             Pa = null;
                         else {
                             Pa = fa;
                             var pa = W.previous;
                             pa.next = fa;
                             fa.previous = pa
                         }
                         W.next = W.previous = null;
                         K(W, W.expirationTime)
                     } while (null !== Pa && Pa.startTime <= D)
                 }
             }
             function z(D) {
                 jb = !1;
                 v(D);
                 xb || (null !== Ea ? (xb = !0,
                 A(H)) : null !== Pa && J(z, Pa.startTime - D))
             }
             function H(D, W) {
                 xb = !1;
                 jb && (jb = !1,
                 w());
                 v(W);
                 n = !0;
                 try {
                     if (D) {
                         if (null !== Ea) {
                             do
                                 C(Ea, W),
                                 v(W = I.unstable_now());
                             while (null !== Ea && !u())
                         }
                     } else
                         for (; null !== Ea && Ea.expirationTime <= W; )
                             C(Ea, W),
                             v(W = I.unstable_now());
                     return null !== Ea || (null !== Pa && J(z, Pa.startTime - W),
                     !1)
                 } finally {
                     n = !1
                 }
             }
             function P(D) {
                 switch (D) {
                 case 1:
                     return -1;
                 case 2:
                     return 250;
                 case 5:
                     return 1073741823;
                 case 4:
                     return 1E4;
                 default:
                     return 5E3
                 }
             }
             function K(D, W) {
                 if (null === Ea)
                     Ea = D.next = D.previous = D;
                 else {
                     var fa = null
                       , pa = Ea;
                     do {
                         if (W < pa.expirationTime) {
                             fa = pa;
                             break
                         }
                         pa = pa.next
                     } while (pa !== Ea);
                     null === fa ? fa = Ea : fa === Ea && (Ea = D);
                     (W = fa.previous).next = fa.previous = D;
                     D.next = fa;
                     D.previous = W
                 }
             }
             Object.defineProperty(I, "__esModule", {
                 value: !0
             });
             var A = void 0
               , J = void 0
               , w = void 0
               , u = void 0;
             Q = void 0;
             if (I.unstable_now = void 0,
             I.unstable_forceFrameRate = void 0,
             "undefined" == typeof window || "function" != typeof MessageChannel) {
                 var L = null
                   , O = null
                   , F = function() {
                     if (null !== L)
                         try {
                             var D = I.unstable_now();
                             L(!0, D);
                             L = null
                         } catch (W) {
                             throw setTimeout(F, 0),
                             W;
                         }
                 };
                 I.unstable_now = function() {
                     return Date.now()
                 }
                 ;
                 A = function(D) {
                     null !== L ? setTimeout(A, 0, D) : (L = D,
                     setTimeout(F, 0))
                 }
                 ;
                 J = function(D, W) {
                     O = setTimeout(D, W)
                 }
                 ;
                 w = function() {
                     clearTimeout(O)
                 }
                 ;
                 u = function() {
                     return !1
                 }
                 ;
                 Q = I.unstable_forceFrameRate = function() {}
             } else {
                 var R = window.performance
                   , U = window.Date
                   , S = window.setTimeout
                   , N = window.clearTimeout
                   , ba = window.requestAnimationFrame;
                 Q = window.cancelAnimationFrame;
                 "undefined" != typeof console && ("function" != typeof ba && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
                 "function" != typeof Q && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
                 I.unstable_now = "object" == typeof R && "function" == typeof R.now ? function() {
                     return R.now()
                 }
                 : function() {
                     return U.now()
                 }
                 ;
                 var na = !1
                   , ea = null
                   , ka = -1
                   , ha = -1
                   , aa = 33.33
                   , sa = -1
                   , Na = -1
                   , bb = 0
                   , gb = !1;
                 u = function() {
                     return I.unstable_now() >= bb
                 }
                 ;
                 Q = function() {}
                 ;
                 I.unstable_forceFrameRate = function(D) {
                     0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : 0 < D ? (aa = Math.floor(1E3 / D),
                     gb = !0) : (aa = 33.33,
                     gb = !1)
                 }
                 ;
                 var cb = function() {
                     if (null !== ea) {
                         var D = I.unstable_now()
                           , W = 0 < bb - D;
                         try {
                             ea(W, D) || (ea = null)
                         } catch (fa) {
                             throw Rb.postMessage(null),
                             fa;
                         }
                     }
                 }
                   , vb = new MessageChannel
                   , Rb = vb.port2;
                 vb.port1.onmessage = cb;
                 var rb = function(D) {
                     if (null === ea)
                         Na = sa = -1,
                         na = !1;
                     else {
                         na = !0;
                         ba(function(pa) {
                             N(ka);
                             rb(pa)
                         });
                         var W = function() {
                             bb = I.unstable_now() + aa / 2;
                             cb();
                             ka = S(W, 3 * aa)
                         };
                         if (ka = S(W, 3 * aa),
                         -1 !== sa && .1 < D - sa) {
                             var fa = D - sa;
                             !gb && -1 !== Na && fa < aa && Na < aa && 8.33 > (aa = fa < Na ? Na : fa) && (aa = 8.33);
                             Na = fa
                         }
                         sa = D;
                         bb = D + aa;
                         Rb.postMessage(null)
                     }
                 };
                 A = function(D) {
                     ea = D;
                     na || (na = !0,
                     ba(function(W) {
                         rb(W)
                     }))
                 }
                 ;
                 J = function(D, W) {
                     ha = S(function() {
                         D(I.unstable_now())
                     }, W)
                 }
                 ;
                 w = function() {
                     N(ha);
                     ha = -1
                 }
             }
             var Ea = null
               , Pa = null
               , wb = null
               , ia = 3
               , n = !1
               , xb = !1
               , jb = !1;
             I.unstable_ImmediatePriority = 1;
             I.unstable_UserBlockingPriority = 2;
             I.unstable_NormalPriority = 3;
             I.unstable_IdlePriority = 5;
             I.unstable_LowPriority = 4;
             I.unstable_runWithPriority = function(D, W) {
                 switch (D) {
                 case 1:
                 case 2:
                 case 3:
                 case 4:
                 case 5:
                     break;
                 default:
                     D = 3
                 }
                 var fa = ia;
                 ia = D;
                 try {
                     return W()
                 } finally {
                     ia = fa
                 }
             }
             ;
             I.unstable_next = function(D) {
                 switch (ia) {
                 case 1:
                 case 2:
                 case 3:
                     var W = 3;
                     break;
                 default:
                     W = ia
                 }
                 var fa = ia;
                 ia = W;
                 try {
                     return D()
                 } finally {
                     ia = fa
                 }
             }
             ;
             I.unstable_scheduleCallback = function(D, W, fa) {
                 var pa = I.unstable_now();
                 if ("object" == typeof fa && null !== fa) {
                     var ua = fa.delay;
                     ua = "number" == typeof ua && 0 < ua ? pa + ua : pa;
                     fa = "number" == typeof fa.timeout ? fa.timeout : P(D)
                 } else
                     fa = P(D),
                     ua = pa;
                 if (D = {
                     callback: W,
                     priorityLevel: D,
                     startTime: ua,
                     expirationTime: fa = ua + fa,
                     next: null,
                     previous: null
                 },
                 ua > pa) {
                     if (fa = ua,
                     null === Pa)
                         Pa = D.next = D.previous = D;
                     else {
                         W = null;
                         var za = Pa;
                         do {
                             if (fa < za.startTime) {
                                 W = za;
                                 break
                             }
                             za = za.next
                         } while (za !== Pa);
                         null === W ? W = Pa : W === Pa && (Pa = D);
                         (fa = W.previous).next = W.previous = D;
                         D.next = W;
                         D.previous = fa
                     }
                     null === Ea && Pa === D && (jb ? w() : jb = !0,
                     J(z, ua - pa))
                 } else
                     K(D, fa),
                     xb || n || (xb = !0,
                     A(H));
                 return D
             }
             ;
             I.unstable_cancelCallback = function(D) {
                 var W = D.next;
                 if (null !== W) {
                     if (D === W)
                         D === Ea ? Ea = null : D === Pa && (Pa = null);
                     else {
                         D === Ea ? Ea = W : D === Pa && (Pa = W);
                         var fa = D.previous;
                         fa.next = W;
                         W.previous = fa
                     }
                     D.next = D.previous = null
                 }
             }
             ;
             I.unstable_wrapCallback = function(D) {
                 var W = ia;
                 return function() {
                     var fa = ia;
                     ia = W;
                     try {
                         return D.apply(this, arguments)
                     } finally {
                         ia = fa
                     }
                 }
             }
             ;
             I.unstable_getCurrentPriorityLevel = function() {
                 return ia
             }
             ;
             I.unstable_shouldYield = function() {
                 var D = I.unstable_now();
                 return v(D),
                 null !== wb && null !== Ea && Ea.startTime <= D && Ea.expirationTime < wb.expirationTime || u()
             }
             ;
             I.unstable_requestPaint = Q;
             I.unstable_continueExecution = function() {
                 xb || n || (xb = !0,
                 A(H))
             }
             ;
             I.unstable_pauseExecution = function() {}
             ;
             I.unstable_getFirstCallbackNode = function() {
                 return Ea
             }
         }
         ,
         9982: (Q,I,C)=>{
             Q.exports = C(7463)
         }
         ,
         9423: (Q,I,C)=>{
             C.d(I, {
                 A: ()=>v
             });
             Q = C.hmd(Q);
             const v = function(z) {
                 var H;
                 z = z.Symbol;
                 return "function" == typeof z ? z.observable ? H = z.observable : (H = z("observable"),
                 z.observable = H) : H = "@@observable",
                 H
             }("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== C.g ? C.g : Q)
         }
         ,
         9819: (Q,I,C)=>{
             C.d(I, {
                 A: ()=>K
             });
             var v;
             Q = C(6540);
             var z = C.n(Q)
               , H = C(9273)
               , P = (v = function(A, J) {
                 return v = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(w, u) {
                     w.__proto__ = u
                 }
                 || function(w, u) {
                     for (var L in u)
                         u.hasOwnProperty(L) && (w[L] = u[L])
                 }
                 ,
                 v(A, J)
             }
             ,
             function(A, J) {
                 function w() {
                     this.constructor = A
                 }
                 v(A, J);
                 A.prototype = null === J ? Object.create(J) : (w.prototype = J.prototype,
                 new w)
             }
             );
             const K = function(A) {
                 function J(w) {
                     var u = A.call(this, w) || this;
                     return u.logComponentErrors = function(L, O) {
                         var F, R;
                         "undefined" != typeof window && (L = null != L ? L : Error(null !== (F = u.props.errorMessage) && void 0 !== F ? F : "An unhandled client error occured"),
                         H.M.error(L, {
                             errorInfo: O,
                             script: null === (R = document.currentScript) || void 0 === R ? void 0 : R.getAttribute("src"),
                             errorMessage: u.props.errorMessage,
                             tag: "REACT_CLIENT_ERROR"
                         }))
                     }
                     ,
                     u.state = {
                         hasError: !1,
                         error: null
                     },
                     u
                 }
                 return P(J, A),
                 J.getDerivedStateFromError = function(w) {
                     return {
                         hasError: !0,
                         error: w
                     }
                 }
                 ,
                 J.prototype.componentDidCatch = function(w, u) {
                     console.log("An error has occured in the component : " + w.message + ":" + JSON.stringify(u));
                     this.logComponentErrors(w, u)
                 }
                 ,
                 J.prototype.render = function() {
                     return this.state.hasError ? z().createElement("h1", {
                         className: "m-5 pb-5"
                     }, "Something went wrong.") : this.props.errorMessage ? (this.logComponentErrors(null, {}),
                     z().createElement("div", {
                         className: "m-5 pb-5"
                     }, z().createElement("h1", null, "Microsoft"), z().createElement("p", null, this.props.errorMessage))) : this.props.children
                 }
                 ,
                 J
             }(z().Component)
         }
         ,
         9766: (Q,I,C)=>{
             C.d(I, {
                 A: ()=>P,
                 g: ()=>K
             });
             var v = C(6540)
               , z = C(961)
               , H = function() {
                 return H = Object.assign || function(A) {
                     for (var J, w = 1, u = arguments.length; w < u; w++)
                         for (var L in J = arguments[w])
                             Object.prototype.hasOwnProperty.call(J, L) && (A[L] = J[L]);
                     return A
                 }
                 ,
                 H.apply(this, arguments)
             }
               , P = function(A, J, w) {
                 if ("undefined" != typeof window) {
                     var u = "rootContainer_" + J;
                     J = H(H({}, window["__" + J + "__"]), {
                         overridableProps: w
                     });
                     if (u = document.getElementById(u))
                         A = v.createElement(A, H({}, J)),
                         z.hydrate(A, u)
                 }
             }
               , K = function(A, J, w) {
                 if ("undefined" != typeof window) {
                     var u = function() {
                         document.querySelectorAll("div[data-ssrmodule\x3d'" + J + "']:not([data-hydrated\x3d'true'])").forEach(function(L) {
                             if (L) {
                                 var O = decodeURIComponent(L.getAttribute("data-props"));
                                 O = JSON.parse(O);
                                 O = v.createElement(A, H(H({}, O), w));
                                 L.dataset.hydrated = "true";
                                 z.hydrate(O, L)
                             }
                         })
                     };
                     window.addEventListener("DOMContentLoaded", u);
                     window.addEventListener("MultiInstanceLazyLoadedComponentLoaded", u)
                 }
             }
         }
         ,
         9319: (Q,I,C)=>{
             function v(P, K, A) {
                 return Object.entries(A).reduce(function(J, w) {
                     var u = 2;
                     var L = "function" == typeof Symbol && w[Symbol.iterator];
                     if (L) {
                         var O;
                         w = L.call(w);
                         var F = [];
                         try {
                             for (; (void 0 === u || 0 < u--) && !(O = w.next()).done; )
                                 F.push(O.value)
                         } catch (U) {
                             var R = {
                                 error: U
                             }
                         } finally {
                             try {
                                 O && !O.done && (L = w.return) && L.call(w)
                             } finally {
                                 if (R)
                                     throw R.error;
                             }
                         }
                         u = F
                     } else
                         u = w;
                     return J.replace("{" + u[0] + "}", u[1])
                 }, K || P)
             }
             C.d(I, {
                 A: ()=>H,
                 K: ()=>v
             });
             Q = C(6540);
             var z = C.n(Q);
             const H = function(P) {
                 return z().createElement(z().Fragment, null, v(P.defaultStaticText, P.translatedStaticText, P.dynamicText))
             }
         }
         ,
         3643: (Q,I,C)=>{
             function v(O, F, R, U) {
                 switch (O) {
                 case "rtdam":
                     return function(ea, ka) {
                         var ha = ea.w
                           , aa = ea.h;
                         ea = ea.background;
                         switch (ka) {
                         case "devices":
                         case "apps":
                         case "game":
                             return "w\x3d" + ha + "\x26h\x3d" + aa + "\x26q\x3d90\x26m\x3d6\x26p\x3d48" + (ea ? "\x26b\x3d" + ea : "") + "\x26f\x3djpg\x26o\x3df\x26aim\x3dtrue"
                         }
                     }(F, R);
                 case "store-images":
                     return function(ea, ka) {
                         var ha = ea.background;
                         return "q\x3d90\x26w\x3d" + ea.w + "\x26h\x3d" + ea.h + "\x26mode\x3d" + (!0 === ka ? "scale" : "crop") + "\x26format\x3djpg\x26background\x3d" + ("transparent" === ha ? "#0078D7" : ha || "#0078D7")
                     }(F, U);
                 case "xboximg":
                     return function(ea, ka) {
                         var ha = ea.w
                           , aa = ea.h;
                         ea = ea.background;
                         switch (ka) {
                         case "apps":
                             return "purposes\x3dBoxArt\x26mode\x3dcrop\x26q\x3d90\x26h\x3d" + aa + "\x26w\x3d" + ha;
                         case "game":
                             return "purposes\x3dBoxArt\x26mode\x3dscale\x26q\x3d90\x26w\x3d" + ha;
                         case "devices":
                             return "purposes\x3dBoxArt\x26mode\x3dcrop\x26q\x3d90\x26h\x3d" + aa + "\x26w\x3d" + ha + "\x26format\x3djpg\x26background\x3d" + ea + "\x26padding\x3d0.0.0.0"
                         }
                     }(F, R);
                 case "aemdam":
                     return N = (S = F).w,
                     ba = S.h,
                     na = S.background,
                     "wid\x3d" + N + "\x26hei\x3d" + ba + "\x26qlt\x3d90" + (na ? "\x26bgc\x3d" + (0,
                     P.de)(na) : "") + "\x26extendN\x3d0.1,0.1,0.1,0.1\x26fmt\x3djpg";
                 case "interstitial":
                     return "w\x3d" + F.w + "\x26h\x3d" + F.h + "\x26q\x3d90\x26m\x3d6\x26p\x3d20\x26f\x3djpg\x26b\x3d" + F.background + "\x26o\x3df\x26aim\x3dtrue"
                 }
                 var S, N, ba, na
             }
             function z(O, F) {
                 try {
                     var R = new URL(decodeURI(O.uri));
                     return F().split("\x26").forEach(function(U) {
                         U = A(U.split("\x3d"), 2);
                         R.searchParams.append(U[0], U[1])
                     }),
                     R.href
                 } catch (U) {
                     return O.uri.includes("?") ? O.uri + "\x26" + F() : O.uri + "?" + F()
                 }
             }
             C.d(I, {
                 Ay: ()=>L
             });
             Q = C(6540);
             var H = C.n(Q)
               , P = C(1455)
               , K = function() {
                 return K = Object.assign || function(O) {
                     for (var F, R = 1, U = arguments.length; R < U; R++)
                         for (var S in F = arguments[R])
                             Object.prototype.hasOwnProperty.call(F, S) && (O[S] = F[S]);
                     return O
                 }
                 ,
                 K.apply(this, arguments)
             }
               , A = function(O, F) {
                 var R = "function" == typeof Symbol && O[Symbol.iterator];
                 if (!R)
                     return O;
                 var U;
                 O = R.call(O);
                 var S = [];
                 try {
                     for (; (void 0 === F || 0 < F--) && !(U = O.next()).done; )
                         S.push(U.value)
                 } catch (ba) {
                     var N = {
                         error: ba
                     }
                 } finally {
                     try {
                         U && !U.done && (R = O.return) && R.call(O)
                     } finally {
                         if (N)
                             throw N.error;
                     }
                 }
                 return S
             }
               , J = function(O) {
                 var F = O.image
                   , R = O.media
                   , U = O.defaultDimensions
                   , S = O.lazyLoad
                   , N = O.productType
                   , ba = O.isStoreImageScale;
                 O = O.pageTheme;
                 if (!F || !F.uri || !F.system)
                     return null;
                 !O || -1 === O.indexOf("xbox-dark") && -1 === O.indexOf("dark") || (F.background = "#FF2F2F2F");
                 var na = F.background;
                 return H().createElement("picture", null, R && Object.entries(R).map(function(ea, ka) {
                     ea = A(ea, 2);
                     var ha = ea[0]
                       , aa = ea[1];
                     return S ? H().createElement(w, {
                         key: "source-" + ka,
                         dimensions: aa,
                         image: F,
                         breakpoint: ha,
                         productType: N,
                         isStoreImageScale: ba,
                         background: na
                     }) : H().createElement("source", {
                         key: "source-" + ka,
                         srcSet: z(F, function() {
                             return v(F.system, K(K({}, aa), {
                                 background: na
                             }), N, ba)
                         }),
                         media: "(min-width: " + ha + "px)"
                     })
                 }), S ? H().createElement(u, {
                     dimensions: U,
                     image: F,
                     productType: N,
                     isStoreImageScale: ba,
                     background: na
                 }) : H().createElement("img", {
                     src: z(F, function() {
                         return v(F.system, K(K({}, U), {
                             background: na
                         }), N, ba)
                     }),
                     className: "card-img",
                     alt: ""
                 }))
             }
               , w = function(O) {
                 var F = O.dimensions
                   , R = O.image
                   , U = O.breakpoint
                   , S = O.productType
                   , N = O.isStoreImageScale
                   , ba = O.background;
                 return H().createElement("source", {
                     srcSet: "https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif",
                     "data-srcSet": z(R, function() {
                         return v(R.system, K(K({}, F), {
                             background: ba
                         }), S, N)
                     }),
                     media: "(min-width: " + U + "px)"
                 })
             }
               , u = function(O) {
                 var F = O.dimensions
                   , R = O.image
                   , U = O.productType
                   , S = O.isStoreImageScale
                   , N = O.background;
                 return H().createElement("img", {
                     src: "https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif",
                     "data-src": z(R, function() {
                         return v(R.system, K(K({}, F), {
                             background: N
                         }), U, S)
                     }),
                     className: "card-img lazy lazyload blur-up lazypreload",
                     "data-sizes": "auto",
                     alt: ""
                 })
             };
             const L = function(O) {
                 var F = O.className
                   , R = O.image
                   , U = O.secondaryImage
                   , S = O.media
                   , N = O.defaultDimensions
                   , ba = O.lazyLoadImages
                   , na = O.productType
                   , ea = O.isStoreImageScale;
                 O = O.pageTheme;
                 return H().createElement("div", {
                     className: F
                 }, H().createElement(J, {
                     image: R,
                     media: S,
                     defaultDimensions: N,
                     lazyLoad: ba,
                     productType: na,
                     isStoreImageScale: ea,
                     pageTheme: O
                 }), U && H().createElement(J, {
                     image: U,
                     media: S,
                     defaultDimensions: N,
                     lazyLoad: ba,
                     productType: na,
                     isStoreImageScale: ea
                 }))
             }
         }
         ,
         8215: (Q,I,C)=>{
             C.d(I, {
                 A: ()=>J
             });
             var v = C(6540)
               , z = C.n(v)
               , H = C(5545)
               , P = C(4509)
               , K = C(9319)
               , A = function(w, u) {
                 var L = "function" == typeof Symbol && w[Symbol.iterator];
                 if (!L)
                     return w;
                 var O;
                 w = L.call(w);
                 var F = [];
                 try {
                     for (; (void 0 === u || 0 < u--) && !(O = w.next()).done; )
                         F.push(O.value)
                 } catch (U) {
                     var R = {
                         error: U
                     }
                 } finally {
                     try {
                         O && !O.done && (L = w.return) && L.call(w)
                     } finally {
                         if (R)
                             throw R.error;
                     }
                 }
                 return F
             };
             const J = function(w) {
                 var u = w.price
                   , L = w.inAppPurchases
                   , O = w.subscriptionBadgeText;
                 w = w.localizedTexts;
                 var F = (0,
                 v.useContext)(P.gS)
                   , R = F && F.locale && F.locale.toLowerCase();
                 if (!u || !u.currentPrice)
                     return z().createElement(z().Fragment, null);
                 var U = (0,
                 H.zH)(w, "OFFERS_IN_APP_PURCHASES", "Offers in app purchases")
                   , S = (0,
                 H.zH)(w, "INCLUDED_WITH_SUBSCRIPTION", "with")
                   , N = u.screenReaderText + (O ? " " + S + " " + O : "");
                 F = function() {
                     var ea = u.originalPrice ? '\x3cspan class\x3d"text-line-through text-muted"\x3e' + u.originalPrice + "\x3c/span\x3e " : ""
                       , ka = '\x3cspan class\x3d"font-weight-semibold"\x3e' + S + "\x3c/span\x3e";
                     ka = "" + u.currentPrice + (L ? '\x3csup class\x3d"small"\x3e\x3cspan aria-hidden\x3d"true"\x3e+\x3c/span\x3e\x3c/sup\x3e' : "") + (O ? " " + ka : "");
                     var ha = R && R.toLowerCase();
                     ["ja-jp", "ko-kr", "zh-hk"].includes(ha) && O && ("ja-jp" === ha && (ka = "" + ("\u542b\u307e\u308c\u308b" === u.currentPrice ? "\u306b\u542b\u307e\u308c\u307e\u3059" : u.currentPrice) + (L ? '\x3csup class\x3d"small"\x3e\x3cspan aria-hidden\x3d"true"\x3e+\x3c/span\x3e\x3c/sup\x3e' : "")),
                     "ko-kr" === ha && (ka = "" + ("\ud3ec\ud568" === u.currentPrice ? "\ub2e4\uc74c \uba64\ubc84\uc2ed\uc5d0 \ud3ec\ud568" : u.currentPrice) + (L ? '\x3csup class\x3d"small"\x3e\x3cspan aria-hidden\x3d"true"\x3e+\x3c/span\x3e\x3c/sup\x3e' : "")),
                     "zh-hk" === ha && (ka = "" + ("\u96a8\u9644" === u.currentPrice ? "\u96a8\u9644\u65bc" : u.currentPrice) + (L ? '\x3csup class\x3d"small"\x3e\x3cspan aria-hidden\x3d"true"\x3e+\x3c/span\x3e\x3c/sup\x3e' : "")));
                     return ea + ('\x3cspan class\x3d"font-weight-semibold"\x3e' + ka + "\x3c/span\x3e")
                 }();
                 var ba = u.fromText ? u.fromText.trim() : "";
                 w = "ja-jp" === R && "{price} {from}";
                 F = {
                     from: ba,
                     price: F
                 };
                 var na = (0,
                 K.K)("{from} {price}", w, F);
                 w = function() {
                     return !!O && z().createElement(z().Fragment, null, z().createElement("div", {
                         "aria-hidden": "true"
                     }, z().createElement("span", {
                         className: "badge bg-gray-500 mt-2 mb-2"
                     }, O)))
                 }
                 ;
                 F = function() {
                     return z().createElement(z().Fragment, null, z().createElement("p", {
                         className: "sr-only"
                     }, N, !!L && z().createElement("span", null, U)))
                 }
                 ;
                 ba = function() {
                     return z().createElement(z().Fragment, null, z().createElement("p", {
                         "aria-hidden": "true",
                         dangerouslySetInnerHTML: {
                             __html: na
                         }
                     }))
                 }
                 ;
                 ba = A("ja-jp" === (R && R.toLowerCase()) && O ? [z().createElement(w, null), z().createElement(F, null), z().createElement(ba, null)] : [z().createElement(F, null), z().createElement(ba, null), z().createElement(w, null)], 3);
                 w = ba[0];
                 F = ba[1];
                 ba = ba[2];
                 return z().createElement(z().Fragment, null, w, F, ba)
             }
         }
         ,
         5457: (Q,I,C)=>{
             C.d(I, {
                 A: ()=>z
             });
             Q = C(6540);
             var v = C.n(Q);
             const z = function(H) {
                 var P = H.text;
                 H.preOrder;
                 return !!P && v().createElement("span", {
                     className: "badge bg-yellow mb-2 product-cards-savings-badge"
                 }, P)
             }
         }
         ,
         5278: (Q,I,C)=>{
             C.d(I, {
                 A: ()=>z
             });
             Q = C(6540);
             var v = C.n(Q);
             const z = function(H) {
                 var P = H.text
                   , K = H.pdpUri;
                 H = H.productHeadingTagLevel;
                 H = void 0 === H ? "h4" : H;
                 var A = 60 < P.length ? P.substr(0, 57) + "..." : P;
                 return v().createElement(H, {
                     className: "base mb-2 h6"
                 }, v().createElement("a", {
                     href: K,
                     "aria-label": P,
                     "data-bi-mto": "true"
                 }, A))
             }
         }
         ,
         6900: (Q,I,C)=>{
             C.d(I, {
                 A: ()=>w
             });
             Q = C(6540);
             var v = C.n(Q)
               , z = C(3643)
               , H = C(5457)
               , P = C(5278)
               , K = C(8215)
               , A = C(169)
               , J = function() {
                 for (var u = [], L = 0; L < arguments.length; L++) {
                     var O = u.concat, F;
                     var R = F = void 0
                       , U = arguments[L]
                       , S = void 0
                       , N = "function" == typeof Symbol && U[Symbol.iterator];
                     if (N) {
                         U = N.call(U);
                         var ba = [];
                         try {
                             for (; (void 0 === S || 0 < S--) && !(R = U.next()).done; )
                                 ba.push(R.value)
                         } catch (na) {
                             F = {
                                 error: na
                             }
                         } finally {
                             try {
                                 R && !R.done && (N = U.return) && N.call(U)
                             } finally {
                                 if (F)
                                     throw F.error;
                             }
                         }
                         F = ba
                     } else
                         F = U;
                     u = O.call(u, F)
                 }
                 return u
             };
             const w = function(u) {
                 var L, O = u.primaryBadgeText || u.preOrder, F = (L = ["card-body", "px-3"],
                 (O ? L : J(L, ["pt-3"])).join(" "));
                 return v().createElement(A.A, {
                     title: u.title,
                     listDisplayName: u.listDisplayName,
                     productId: u.productId,
                     compName: u.compName,
                     idx: u.idx,
                     pdpUri: u.pdpUri,
                     carouselIndex: u.carouselIndex,
                     isStacked: u.isStacked,
                     analyticsTaggingOverrides: u.analyticsTaggingOverrides
                 }, v().createElement(z.Ay, {
                     className: "img-flex-auto",
                     image: u.image,
                     media: {
                         1400: {
                             w: "256",
                             h: "256"
                         },
                         1084: {
                             w: "200",
                             h: "200"
                         },
                         860: {
                             w: "256",
                             h: "256"
                         },
                         540: {
                             w: "270",
                             h: "270"
                         }
                     },
                     defaultDimensions: {
                         w: "256",
                         h: "256"
                     },
                     lazyLoadImages: u.lazyLoadImages,
                     productType: "apps",
                     isStoreImageScale: u.isStoreImageScale,
                     pageTheme: u.pageTheme
                 }), O && v().createElement("div", {
                     className: "card-header pt-3 px-3"
                 }, v().createElement(H.A, {
                     text: u.primaryBadgeText,
                     preOrder: u.preOrder
                 })), v().createElement("div", {
                     className: F
                 }, v().createElement(P.A, {
                     text: u.title,
                     pdpUri: u.pdpUri,
                     productHeadingTagLevel: u.productHeadingTagLevel
                 }), v().createElement(K.A, {
                     price: u.price,
                     inAppPurchases: u.price && u.price.inAppPurchases,
                     localizedTexts: u.localized
                 })))
             }
         }
         ,
         6051: (Q,I,C)=>{
             function v(N) {
                 N = N.val;
                 return H().createElement("ul", {
                     className: "m-0 p-0 pl-4"
                 }, N.content.map(function(ba) {
                     return H().createElement("li", null, ba)
                 }))
             }
             function z(N) {
                 N = N.val;
                 return H().createElement("span", {
                     style: {
                         display: "block"
                     }
                 }, N.content)
             }
             C.d(I, {
                 A: ()=>S
             });
             Q = C(6540);
             var H = C.n(Q)
               , P = C(3643)
               , K = C(5457)
               , A = C(5545);
             const J = function(N) {
                 N = N.localized;
                 return H().createElement("span", {
                     className: "badge bg-black out-of-stock-badge mb-2"
                 }, (0,
                 A.zH)(N, "OUT_OF_STOCK", "Out of stock"))
             };
             var w = C(5278)
               , u = C(8215)
               , L = C(9319)
               , O = function() {
                 for (var N = [], ba = 0; ba < arguments.length; ba++) {
                     var na = N.concat, ea;
                     var ka = ea = void 0
                       , ha = arguments[ba]
                       , aa = void 0
                       , sa = "function" == typeof Symbol && ha[Symbol.iterator];
                     if (sa) {
                         ha = sa.call(ha);
                         var Na = [];
                         try {
                             for (; (void 0 === aa || 0 < aa--) && !(ka = ha.next()).done; )
                                 Na.push(ka.value)
                         } catch (bb) {
                             ea = {
                                 error: bb
                             }
                         } finally {
                             try {
                                 ka && !ka.done && (sa = ha.return) && sa.call(ha)
                             } finally {
                                 if (ea)
                                     throw ea.error;
                             }
                         }
                         ea = Na
                     } else
                         ea = ha;
                     N = na.call(N, ea)
                 }
                 return N
             };
             const F = function(N) {
                 var ba = N.hide
                   , na = N.description
                   , ea = N.title;
                 N = N.localizedTexts;
                 if (!na)
                     return H().createElement(H().Fragment, null);
                 var ka = na.showReadMore;
                 na = na.visibleText.reduce(function(ha, aa) {
                     var sa = aa.match(/^\s*[\u2022\u25cf]/);
                     return sa ? (aa = aa.substring(sa[0].length),
                     (sa = ha[ha.length - 1]) && "bullets" === sa.type ? (sa.content.push(aa),
                     O(ha)) : O(ha, [{
                         type: "bullets",
                         content: [aa]
                     }])) : O(ha, [{
                         type: "line",
                         content: aa
                     }])
                 }, []);
                 return !ba && H().createElement("div", {
                     className: "mb-2"
                 }, H().createElement("p", null, na.map(function(ha) {
                     return "bullets" === ha.type ? H().createElement(v, {
                         val: ha
                     }) : H().createElement(z, {
                         val: ha
                     })
                 }), ka && H().createElement("span", {
                     className: "sr-only"
                 }, H().createElement(L.A, {
                     defaultStaticText: "Select {title} for more information.",
                     translatedStaticText: N && N.SELECT_PRODUCT_FOR_MORE,
                     dynamicText: {
                         title: ea
                     }
                 }))))
             };
             var R = C(169)
               , U = function() {
                 for (var N = [], ba = 0; ba < arguments.length; ba++) {
                     var na = N.concat, ea;
                     var ka = ea = void 0
                       , ha = arguments[ba]
                       , aa = void 0
                       , sa = "function" == typeof Symbol && ha[Symbol.iterator];
                     if (sa) {
                         ha = sa.call(ha);
                         var Na = [];
                         try {
                             for (; (void 0 === aa || 0 < aa--) && !(ka = ha.next()).done; )
                                 Na.push(ka.value)
                         } catch (bb) {
                             ea = {
                                 error: bb
                             }
                         } finally {
                             try {
                                 ka && !ka.done && (sa = ha.return) && sa.call(ha)
                             } finally {
                                 if (ea)
                                     throw ea.error;
                             }
                         }
                         ea = Na
                     } else
                         ea = ha;
                     N = na.call(N, ea)
                 }
                 return N
             };
             const S = function(N) {
                 var ba, na = N.primaryBadgeText || N.preOrder || !1 === N.inStock, ea = (ba = ["card-body", "px-3"],
                 (na ? ba : U(ba, ["pt-3"])).join(" "));
                 return H().createElement(R.A, {
                     title: N.title,
                     listDisplayName: N.listDisplayName,
                     productId: N.productId,
                     compName: N.compName,
                     idx: N.idx,
                     pdpUri: N.pdpUri,
                     carouselIndex: N.carouselIndex,
                     isStacked: N.isStacked,
                     analyticsTaggingOverrides: N.analyticsTaggingOverrides
                 }, H().createElement(P.Ay, {
                     className: "img-flex-auto",
                     image: N.image,
                     media: {
                         1400: {
                             w: "310",
                             h: "254"
                         },
                         1084: {
                             w: "242",
                             h: "199"
                         },
                         860: {
                             w: "256",
                             h: "210"
                         },
                         540: {
                             w: "270",
                             h: "222"
                         }
                     },
                     defaultDimensions: {
                         w: "256",
                         h: "207"
                     },
                     lazyLoadImages: N.lazyLoadImages,
                     productType: "devices",
                     isStoreImageScale: N.isStoreImageScale,
                     pageTheme: N.pageTheme
                 }), na && H().createElement("div", {
                     className: "card-header pt-3 px-3"
                 }, !1 !== N.inStock && H().createElement(K.A, {
                     text: N.primaryBadgeText,
                     preOrder: N.preOrder
                 }), !1 === N.inStock && H().createElement(J, {
                     localized: N.localized
                 })), H().createElement("div", {
                     className: ea
                 }, H().createElement(w.A, {
                     text: N.title,
                     pdpUri: N.pdpUri,
                     productHeadingTagLevel: N.productHeadingTagLevel
                 }), H().createElement(u.A, {
                     price: N.price
                 }), H().createElement(F, {
                     hide: N.isCondensed,
                     description: N.description,
                     title: N.title,
                     localizedTexts: N.localized
                 })))
             }
         }
         ,
         4367: (Q,I,C)=>{
             C.d(I, {
                 A: ()=>w
             });
             Q = C(6540);
             var v = C.n(Q)
               , z = C(3643)
               , H = C(5457)
               , P = C(5278)
               , K = C(8215)
               , A = C(169)
               , J = function() {
                 for (var u = [], L = 0; L < arguments.length; L++) {
                     var O = u.concat, F;
                     var R = F = void 0
                       , U = arguments[L]
                       , S = void 0
                       , N = "function" == typeof Symbol && U[Symbol.iterator];
                     if (N) {
                         U = N.call(U);
                         var ba = [];
                         try {
                             for (; (void 0 === S || 0 < S--) && !(R = U.next()).done; )
                                 ba.push(R.value)
                         } catch (na) {
                             F = {
                                 error: na
                             }
                         } finally {
                             try {
                                 R && !R.done && (N = U.return) && N.call(U)
                             } finally {
                                 if (F)
                                     throw F.error;
                             }
                         }
                         F = ba
                     } else
                         F = U;
                     u = O.call(u, F)
                 }
                 return u
             };
             const w = function(u) {
                 var L, O = u.primaryBadgeText || u.preOrder || u.secondaryBadgeText, F = (L = ["card-body", "px-3"],
                 (O ? L : J(L, ["pt-3"])).join(" "));
                 return v().createElement(A.A, {
                     title: u.title,
                     listDisplayName: u.listDisplayName,
                     productId: u.productId,
                     compName: u.compName,
                     idx: u.idx,
                     pdpUri: u.pdpUri,
                     carouselIndex: u.carouselIndex,
                     isStacked: u.isStacked,
                     analyticsTaggingOverrides: u.analyticsTaggingOverrides
                 }, v().createElement(z.Ay, {
                     className: "img-flex-auto",
                     image: u.image,
                     media: {
                         1400: {
                             w: "256",
                             h: "384"
                         },
                         1084: {
                             w: "200",
                             h: "300"
                         },
                         860: {
                             w: "256",
                             h: "384"
                         },
                         540: {
                             w: "270",
                             h: "405"
                         }
                     },
                     defaultDimensions: {
                         w: "256",
                         h: "384"
                     },
                     lazyLoadImages: u.lazyLoadImages,
                     productType: "game",
                     isStoreImageScale: u.isStoreImageScale,
                     pageTheme: u.pageTheme
                 }), O && v().createElement("div", {
                     className: "card-header pt-3 px-3 d-flex flex-wrap",
                     style: {
                         columnGap: "0.25rem"
                     }
                 }, v().createElement(H.A, {
                     text: u.primaryBadgeText,
                     preOrder: u.preOrder
                 }), v().createElement("span", {
                     className: "badge bg-black mb-2"
                 }, u.secondaryBadgeText)), v().createElement("div", {
                     className: F
                 }, v().createElement(P.A, {
                     text: u.title,
                     pdpUri: u.pdpUri,
                     productHeadingTagLevel: u.productHeadingTagLevel
                 }), v().createElement(K.A, {
                     price: u.price,
                     inAppPurchases: u.price && u.price.inAppPurchases,
                     subscriptionBadgeText: u.subscriptionBadgeText,
                     localizedTexts: u.localized
                 })))
             }
         }
         ,
         4509: (Q,I,C)=>{
             C.d(I, {
                 ZX: ()=>na,
                 gS: ()=>ba
             });
             Q = C(6540);
             var v = C.n(Q)
               , z = C(9819)
               , H = C(6900)
               , P = C(6051)
               , K = C(4367)
               , A = C(2172)
               , J = C(7882);
             I = C(9766);
             var w = C(5545)
               , u = C(3779)
               , L = C(3068);
             const O = function(ea) {
                 var ka = ea.children
                   , ha = ea.activePageUrl
                   , aa = ea.tProducts
                   , sa = ea.length
                   , Na = ea.offset
                   , bb = ea.localized;
                 ea = ea.style;
                 var gb = (0,
                 w.zH)(bb, "SHOWING_START_HYPHEN_END_OF_TOTAL_ITEMS", "Showing {0} - {1} of {2} items")
                   , cb = "" + (Na + 1)
                   , vb = "" + (Na + sa)
                   , Rb = "" + aa
                   , rb = (0,
                 w.oW)(gb, [cb, vb, Rb]);
                 gb = function() {
                     return v().createElement("div", {
                         id: "status-container-1"
                     }, v().createElement("span", {
                         id: "status-msg-1",
                         "aria-live": "polite",
                         className: "sr-only"
                     }, rb), v().createElement("span", {
                         "aria-hidden": "true"
                     }, rb))
                 }
                 ;
                 return v().createElement(L.A, {
                     activePageUrl: ha,
                     limit: 90,
                     offset: Na,
                     results: {
                         length: sa
                     },
                     staticTexts: bb,
                     totalResults: aa
                 }, v().createElement("section", null, v().createElement(gb, null), v().createElement("ul", {
                     className: ea
                 }, ka), v().createElement(gb, null), v().createElement("div", {
                     className: "pt-3 pb-2 "
                 }, v().createElement("section", null, v().createElement("div", {
                     className: "row"
                 }, v().createElement("div", {
                     className: "col-12"
                 }, v().createElement("div", {
                     className: "divider border-neutral-200"
                 }))))), v().createElement(u.A, {
                     skipQspName: "skipitems"
                 })))
             };
             var F, R = function(ea) {
                 return (ea = ea.seoString) ? v().createElement("script", {
                     type: "application/ld+json",
                     dangerouslySetInnerHTML: {
                         __html: ea
                     }
                 }) : null
             }, U = C(3630), S = (F = function(ea, ka) {
                 return F = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(ha, aa) {
                     ha.__proto__ = aa
                 }
                 || function(ha, aa) {
                     for (var sa in aa)
                         aa.hasOwnProperty(sa) && (ha[sa] = aa[sa])
                 }
                 ,
                 F(ea, ka)
             }
             ,
             function(ea, ka) {
                 function ha() {
                     this.constructor = ea
                 }
                 F(ea, ka);
                 ea.prototype = null === ka ? Object.create(ka) : (ha.prototype = ka.prototype,
                 new ha)
             }
             ), N = function() {
                 return N = Object.assign || function(ea) {
                     for (var ka, ha = 1, aa = arguments.length; ha < aa; ha++)
                         for (var sa in ka = arguments[ha])
                             Object.prototype.hasOwnProperty.call(ka, sa) && (ea[sa] = ka[sa]);
                     return ea
                 }
                 ,
                 N.apply(this, arguments)
             }, ba = (0,
             Q.createContext)({
                 locale: ""
             }), na = function(ea) {
                 function ka(ha) {
                     var aa = ea.call(this, ha) || this;
                     return aa.mapStandardCards = function(sa) {
                         return aa.props.cards.map(function(Na, bb) {
                             return v().createElement(sa, N({
                                 key: "card-" + bb
                             }, Na, {
                                 lazyLoadImages: aa.props.lazyLoadImages,
                                 carouselIndex: aa.props.carouselPrefix ? aa.props.carouselPrefix + aa.state.carouselIndex : aa.state.carouselIndex,
                                 localized: aa.props.localizedText,
                                 isStacked: aa.props.isStacked,
                                 pageTheme: aa.props.pageTheme
                             }))
                         })
                     }
                     ,
                     aa.mapCards = function() {
                         switch (aa.props.productType) {
                         case "apps":
                             return aa.mapStandardCards(H.A);
                         case "devices":
                             return aa.mapStandardCards(P.A);
                         case "game":
                             return aa.mapStandardCards(K.A)
                         }
                     }
                     ,
                     aa.Channel = function() {
                         return aa.props.isStacked ? v().createElement(O, {
                             activePageUrl: aa.props.activePageUrl,
                             tProducts: aa.props.totalProducts,
                             length: aa.props.cards.length,
                             offset: aa.props.offset,
                             localized: aa.props.localizedText,
                             style: aa.props.channelStyle
                         }, v().createElement(v().Fragment, null, aa.mapCards())) : v().createElement(J.A, {
                             carouselIndex: aa.props.carouselPrefix ? aa.props.carouselPrefix + aa.state.carouselIndex : aa.state.carouselIndex,
                             style: aa.props.channelStyle
                         }, v().createElement(v().Fragment, null, aa.mapCards()))
                     }
                     ,
                     aa.ProductCardsContent = function() {
                         return aa.props.isStacked ? v().createElement(aa.Channel, null) : v().createElement(A.A, {
                             analyticsTaggingInfo: aa.props.analyticsTaggingInfo,
                             ariaLabel: aa.props.ariaLabel,
                             carouselIndex: aa.props.carouselPrefix ? aa.props.carouselPrefix + aa.state.carouselIndex : aa.state.carouselIndex,
                             compName: aa.props.compName,
                             headingSize: aa.props.headingSize,
                             headingTagLevel: aa.props.headingTagLevel || "h2",
                             hideHeader: aa.props.hideHeader,
                             hideStatus: aa.props.hideStatus,
                             listDisplayName: aa.props.listDisplayName,
                             listName: aa.props.listName,
                             listType: aa.props.listType,
                             locale: aa.props.locale,
                             localized: aa.props.localizedText,
                             platform: aa.props.platform,
                             productType: "game" === aa.props.productType ? "games" : aa.props.productType
                         }, v().createElement(aa.Channel, null))
                     }
                     ,
                     aa.ComingSoon = function() {
                         return aa.props.isStacked ? v().createElement("div", null, v().createElement("h2", null, aa.props.localizedText.NO_RESULTS_FOUND || "No results found")) : v().createElement("h2", null, aa.props.localizedText.MORE_PRODUCTS_COMING_SOON || "More products coming soon")
                     }
                     ,
                     aa.state = {
                         carouselIndex: aa.props.uuid
                     },
                     aa
                 }
                 return S(ka, ea),
                 ka.prototype.componentDidMount = function() {
                     if (void 0 === this.state.carouselIndex && "undefined" != typeof window) {
                         var ha = typeof window.numberOfProductCardCarouselsOnPage;
                         "undefined" === ha || "number" !== ha || window.numberOfProductCardCarouselsOnPage >= Number.MAX_SAFE_INTEGER ? window.numberOfProductCardCarouselsOnPage = 0 : window.numberOfProductCardCarouselsOnPage++;
                         this.setState({
                             carouselIndex: window.numberOfProductCardCarouselsOnPage
                         })
                     }
                     this.props.addToCartHash && this.props.exposeAddToCartHash && ("undefined" == typeof window || window.addToCartHash || (null === document || void 0 === document ? 0 : document.querySelector(".buybox")) || (0,
                     U.FT)(this.props.addToCartHash))
                 }
                 ,
                 ka.prototype.render = function() {
                     var ha = this.props.cards && 0 < this.props.cards.length;
                     return v().createElement("div", null, v().createElement(ba.Provider, {
                         value: {
                             locale: this.props.locale
                         }
                     }, v().createElement(z.A, {
                         errorMessage: this.props.error
                     }, v().createElement(R, {
                         seoString: this.props.seoString
                     }), ha ? v().createElement(this.ProductCardsContent, null) : v().createElement(this.ComingSoon, null))))
                 }
                 ,
                 ka
             }(Q.Component);
             (0,
             I.g)(na, "ProductCards", {})
         }
         ,
         2172: (Q,I,C)=>{
             C.d(I, {
                 A: ()=>J
             });
             var v = C(6540)
               , z = C.n(v)
               , H = C(5545)
               , P = C(2908)
               , K = function() {
                 return K = Object.assign || function(w) {
                     for (var u, L = 1, O = arguments.length; L < O; L++)
                         for (var F in u = arguments[L])
                             Object.prototype.hasOwnProperty.call(u, F) && (w[F] = u[F]);
                     return w
                 }
                 ,
                 K.apply(this, arguments)
             }
               , A = function(w, u) {
                 return function() {
                     !0 === u ? new window.mwfExtensions.CarouselShowAll({
                         el: w
                     }) : new window.mwf.Carousel({
                         el: w
                     })
                 }
             };
             const J = function(w) {
                 var u = (0,
                 v.useRef)()
                   , L = w.analyticsTaggingInfo
                   , O = w.carouselIndex
                   , F = w.listName
                   , R = w.listDisplayName
                   , U = w.locale
                   , S = w.headingSize
                   , N = w.headingTagLevel
                   , ba = w.hideHeader
                   , na = w.hideStatus
                   , ea = w.children
                   , ka = w.localized
                   , ha = w.listType
                   , aa = w.platform
                   , sa = w.productType
                   , Na = w.ariaLabel
                   , bb = w.compName
                   , gb = w.ctaTextOverride
                   , cb = w.ctaUrlOverride
                   , vb = w.inlineCta
                   , Rb = w.noLoop
                   , rb = w.ctaAnalyticsTaggingOverrides
                   , Ea = w.enableShowAllCard;
                 w = (0,
                 H.zH)(ka, "SLIDESHOW", "slideshow");
                 var Pa = (0,
                 H.zH)(ka, "SHOWING_START_THROUGH_END_OF_TOTAL_ITEMS", "Showing %{start} through %{end} of %{total} items");
                 gb = gb || (0,
                 H.zH)(ka, "SEE_ALL", "See all");
                 var wb = (0,
                 H.zH)(ka, "SKIP", "Skip")
                   , ia = (0,
                 H.zH)(ka, "PREVIOUS_SLIDE", "Previous slide")
                   , n = (0,
                 H.zH)(ka, "NEXT_SLIDE", "Next slide")
                   , xb = (0,
                 H.zH)(ka, "BACK_TO_NEXT_AND_PREVIOUS_CONTROLS", "Back to Next and Previous controls")
                   , jb = (0,
                 H.zH)(ka, "END_OF", "End of");
                 (0,
                 v.useEffect)(function() {
                     if (void 0 !== O) {
                         if (Ea) {
                             var hb = A(u.current, !0);
                             return (0,
                             P.q)(hb),
                             function() {
                                 document.removeEventListener("mwfCarouselExtensionsInitialized", hb)
                             }
                         }
                         var $a = A(u.current);
                         return (0,
                         P.C)($a),
                         function() {
                             document.removeEventListener("mwfInitialized", $a)
                         }
                     }
                 }, [O]);
                 var D = void 0 === O ? void 0 : "status-container-" + O
                   , W = void 0 === O ? void 0 : "status-msg-" + O
                   , fa = void 0 === O ? void 0 : "product-cards-carousel-" + O
                   , pa = void 0 === O ? void 0 : "controls-" + O
                   , ua = void 0 === O ? void 0 : "controls-next-" + O
                   , za = void 0 === O ? void 0 : "skip-" + O
                   , Qa = (0,
                 v.useRef)(null)
                   , Ta = function(hb) {
                     var $a = rb ? K(K({}, rb), {
                         actionType: "click" === hb.type ? "CL" : "CR"
                     }) : {};
                     "object" == typeof window.telemetry && !0 === window.telemetry.webAnalyticsPlugin.isInitialized() && window.telemetry.webAnalyticsPlugin.capturePageAction(Qa.current, $a);
                     "click" === hb.type && (window.location.href = cb)
                 };
                 return z().createElement("div", {
                     className: "row"
                 }, z().createElement("div", {
                     className: "col-12 px-0 px-md-g"
                 }, z().createElement("section", {
                     "aria-label": ba ? Na : R,
                     "aria-roledescription": w
                 }, z().createElement("div", {
                     className: "px-g px-md-0"
                 }, z().createElement("div", {
                     className: vb ? "row d-flex align-items-center" : "row"
                 }, !ba && z().createElement("div", {
                     className: vb ? "col-auto d-inline-block" : "col-12 col-md-8"
                 }, z().createElement(N, {
                     className: vb ? "d-inline-block mb-2 " + (S || "") : "mb-2 " + (S || "")
                 }, R)), !na && z().createElement("div", {
                     className: vb ? "col-auto d-inline-block" : "col-12 d-none"
                 }, z().createElement("div", {
                     id: D,
                     className: vb ? "d-none" : "float-left mr-3"
                 }, z().createElement("span", {
                     id: W,
                     "aria-live": "polite"
                 }, Pa)), "mostGifted" !== F && z().createElement("a", {
                     href: cb || ("curated" === ha ? "https://www.microsoft.com/" + U.toLowerCase() + "/store/collections/" + F : "https://www.microsoft.com/" + U.toLowerCase() + "/store/" + F + "/" + sa + "/" + aa),
                     className: vb ? "cta text-decoration-none pl-2 product-cards-see-all-link d-inline-block" : "cta float-left product-cards-see-all-link",
                     "aria-label": gb + " " + R,
                     "data-bi-cN": L ? void 0 : gb,
                     "data-bi-ecN": L ? void 0 : "See all",
                     "data-bi-hN": L ? void 0 : R,
                     "data-bi-cT": L ? void 0 : "Link",
                     "data-bi-pA": L ? void 0 : "Body",
                     "data-bi-compNm": L ? void 0 : bb,
                     "data-bi-mto": rb ? "true" : void 0,
                     "data-bi-bhvr": L ? void 0 : 0,
                     onClick: rb ? Ta : void 0,
                     onContextMenu: rb ? Ta : void 0,
                     ref: Qa
                 }, gb, z().createElement("span", {
                     className: "glyph",
                     "aria-hidden": "true"
                 }))))), z().createElement("div", {
                     ref: u,
                     id: fa,
                     className: "carousel slide carousel-product-card",
                     "data-mount": "",
                     "data-loop": Rb ? "false" : "true",
                     "data-status": D
                 }, z().createElement("a", {
                     href: "#" + za,
                     className: "btn btn-link sr-only-focusable w-100 position-absolute"
                 }, wb + " " + R), z().createElement("div", null, z().createElement("div", {
                     className: "carousel-controls"
                 }, z().createElement("button", {
                     id: pa,
                     type: "button",
                     title: (0,
                     H.zH)(ka, "PREVIOUS", "Previous"),
                     "data-m": L ? L.prevArrow : void 0,
                     "data-bi-cN": !L && ka ? (0,
                     H.zH)(ka, "CAROUSEL_BACK", "Carousel back") : void 0,
                     "data-bi-ecN": L ? void 0 : "Carousel back",
                     "data-bi-hN": L ? void 0 : R,
                     "data-bi-bhvr": L ? void 0 : 1,
                     "data-bi-cT": L ? void 0 : "Button",
                     "data-bi-pA": L ? void 0 : "Body",
                     "data-bi-compNm": L ? void 0 : bb,
                     className: "carousel-control-prev my-4 my-md-5",
                     "data-slide": "prev"
                 }, z().createElement("span", {
                     className: "sr-only"
                 }, ia)), z().createElement("button", {
                     id: ua,
                     type: "button",
                     title: (0,
                     H.zH)(ka, "NEXT", "Next"),
                     "data-m": L && L.nextArrow,
                     "data-bi-cN": !L && ka ? (0,
                     H.zH)(ka, "CAROUSEL_FORWARD", "Carousel forward") : void 0,
                     "data-bi-ecN": L ? void 0 : "Carousel forward",
                     "data-bi-hN": L ? void 0 : R,
                     "data-bi-bhvr": L ? void 0 : 3,
                     "data-bi-cT": L ? void 0 : "Button",
                     "data-bi-pA": L ? void 0 : "Body",
                     "data-bi-compNm": L ? void 0 : bb,
                     className: "carousel-control-next my-4 my-md-5",
                     "data-slide": "next"
                 }, z().createElement("span", {
                     className: "sr-only"
                 }, n))), z().createElement("div", {
                     className: "carousel-inner"
                 }, ea)), z().createElement("a", {
                     href: "#" + pa,
                     className: "btn btn-link sr-only-focusable w-100 position-absolute bottom-0"
                 }, xb))), z().createElement("a", {
                     id: za,
                     className: "sr-only",
                     tabIndex: -1
                 }, jb, " ", R)))
             }
         }
         ,
         169: (Q,I,C)=>{
             C.d(I, {
                 A: ()=>A
             });
             var v, z = C(6540), H = C.n(z), P = (v = function(J, w) {
                 return v = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(u, L) {
                     u.__proto__ = L
                 }
                 || function(u, L) {
                     for (var O in L)
                         L.hasOwnProperty(O) && (u[O] = L[O])
                 }
                 ,
                 v(J, w)
             }
             ,
             function(J, w) {
                 function u() {
                     this.constructor = J
                 }
                 v(J, w);
                 J.prototype = null === w ? Object.create(w) : (u.prototype = w.prototype,
                 new u)
             }
             ), K = function() {
                 return K = Object.assign || function(J) {
                     for (var w, u = 1, L = arguments.length; u < L; u++)
                         for (var O in w = arguments[u])
                             Object.prototype.hasOwnProperty.call(w, O) && (J[O] = w[O]);
                     return J
                 }
                 ,
                 K.apply(this, arguments)
             };
             const A = function(J) {
                 function w(u) {
                     var L = J.call(this, u) || this;
                     return L.handleClick = function(O) {
                         var F = L.cardRef.current
                           , R = {};
                         if (F && F.dataset) {
                             var U = F.dataset;
                             R = K(K({}, R), {
                                 id: F.getAttribute("id"),
                                 cN: U.biCn,
                                 cT: U.biCt,
                                 bhvr: U.biBhvr,
                                 mto: U.biMto,
                                 pa: U.biPa,
                                 hn: U.biHn,
                                 compnm: U.biCompnm,
                                 carpos: U.biCarpos,
                                 prdname: U.biPrdname,
                                 pid: U.biPid
                             })
                         }
                         null != O && O.target instanceof HTMLAnchorElement && (R = K(K({}, R), {
                             cT: "cta"
                         }));
                         F = L.props.analyticsTaggingOverrides ? K(K({}, L.props.analyticsTaggingOverrides), {
                             actionType: "click" === O.type ? "CL" : "CR",
                             targetUri: L.props.pdpUri,
                             content: R
                         }) : {
                             targetUri: L.props.pdpUri,
                             content: R
                         };
                         "object" == typeof window.telemetry && !0 === window.telemetry.webAnalyticsPlugin.isInitialized() && window.telemetry.webAnalyticsPlugin.capturePageAction(L.cardRef.current, F);
                         L.props.analyticsTaggingOverrides ? "click" === O.type && (window.location.href = L.props.pdpUri) : window.location.href = L.props.pdpUri
                     }
                     ,
                     L.cardRef = (0,
                     z.createRef)(),
                     L
                 }
                 return P(w, J),
                 w.prototype.render = function() {
                     var u = void 0 === this.props.carouselIndex ? void 0 : "card-" + this.props.idx + "-" + this.props.carouselIndex;
                     return this.props.isStacked ? H().createElement("li", {
                         className: "col mb-4 px-2"
                     }, H().createElement("div", {
                         id: u,
                         ref: this.cardRef,
                         className: this.props.classOverrides || "card h-100 material-card depth-4 depth-8-hover pb-4",
                         "data-bi-cN": this.props.title,
                         "data-bi-hN": this.props.listDisplayName,
                         "data-bi-bhvr": 0,
                         "data-bi-cT": "Product Card",
                         "data-bi-pid": this.props.productId,
                         "data-bi-prdname": this.props.title,
                         "data-bi-carpos": this.props.idx,
                         "data-bi-pa": "Body",
                         "data-bi-compnm": this.props.compName,
                         "data-bi-mto": this.props.analyticsTaggingOverrides ? "true" : void 0,
                         onClick: this.handleClick,
                         onContextMenu: this.props.analyticsTaggingOverrides ? this.handleClick : void 0,
                         style: {
                             cursor: "pointer"
                         }
                     }, this.props.children)) : H().createElement("div", {
                         className: "col slide-item" + (this.props.isShowAllCard ? " slide-item-showall" : "") + " px-2"
                     }, H().createElement("div", {
                         id: u,
                         ref: this.cardRef,
                         className: this.props.classOverrides || "card h-100 material-card depth-4 depth-8-hover pb-4",
                         "data-bi-cN": this.props.title,
                         "data-bi-hN": this.props.listDisplayName,
                         "data-bi-bhvr": 0,
                         "data-bi-cT": "Product Card",
                         "data-bi-pid": this.props.productId,
                         "data-bi-prdname": this.props.title,
                         "data-bi-carpos": this.props.idx,
                         "data-bi-pa": "Body",
                         "data-bi-compnm": this.props.compName,
                         "data-bi-mto": this.props.analyticsTaggingOverrides ? "true" : void 0,
                         onClick: this.handleClick,
                         onContextMenu: this.props.analyticsTaggingOverrides ? this.handleClick : void 0,
                         style: {
                             cursor: "pointer"
                         }
                     }, this.props.children))
                 }
                 ,
                 w
             }(z.Component)
         }
         ,
         7882: (Q,I,C)=>{
             C.d(I, {
                 A: ()=>z
             });
             Q = C(6540);
             var v = C.n(Q);
             const z = function(H) {
                 var P = H.carouselIndex
                   , K = H.style;
                 H = H.children;
                 return v().createElement("section", {
                     className: "carousel-item active",
                     tabIndex: 0,
                     "aria-labelledby": void 0 === P ? void 0 : "status-msg-" + P,
                     "aria-roledescription": void 0 === P ? void 0 : "slide"
                 }, v().createElement("div", {
                     className: "container"
                 }, v().createElement("div", {
                     className: K
                 }, H)))
             }
         }
         ,
         3779: (Q,I,C)=>{
             C.d(I, {
                 A: ()=>O
             });
             var v = C(6540)
               , z = C.n(v)
               , H = C(3068)
               , P = function() {
                 return P = Object.assign || function(F) {
                     for (var R, U = 1, S = arguments.length; U < S; U++)
                         for (var N in R = arguments[U])
                             Object.prototype.hasOwnProperty.call(R, N) && (F[N] = R[N]);
                     return F
                 }
                 ,
                 P.apply(this, arguments)
             }
               , K = z().createContext({})
               , A = function() {
                 var F = (0,
                 v.useContext)(H.T).staticTexts
                   , R = (0,
                 v.useContext)(K)
                   , U = R.activePage
                   , S = R.href;
                 R = R.variant;
                 var N = 1 === U;
                 return z().createElement(z().Fragment, null, z().createElement(u, {
                     disabled: N,
                     href: S(U - 1),
                     text: F.Previous
                 }), z().createElement(u, {
                     active: N,
                     href: S(1),
                     text: "1"
                 }), "start" != R && z().createElement(L, null))
             }
               , J = function() {
                 var F = (0,
                 v.useContext)(K)
                   , R = F.activePage
                   , U = F.href
                   , S = F.lastPage
                   , N = F.variant;
                 if (2 >= S)
                     return z().createElement(z().Fragment, null);
                 F = function() {
                     var ba = function(na, ea) {
                         return na = 0 > na ? 0 : na,
                         Array(na).fill(null).map(function(ka, ha) {
                             return ea + ha
                         })
                     };
                     switch (N) {
                     case "start":
                         return ba(Math.min(S - 2, 5), 2);
                     case "middle":
                         return ba(3, R - 1);
                     case "end":
                         return ba(4, S - 4)
                     }
                 }();
                 return z().createElement(z().Fragment, null, F.map(function(ba, na) {
                     return z().createElement(u, {
                         key: "page-" + na,
                         active: ba === R,
                         href: U(ba),
                         text: "" + ba
                     })
                 }))
             }
               , w = function() {
                 var F = (0,
                 v.useContext)(H.T).staticTexts
                   , R = (0,
                 v.useContext)(K)
                   , U = R.activePage
                   , S = R.href
                   , N = R.lastPage;
                 R = R.variant;
                 var ba = Math.min(N, U - U % 20 + ("middle" === R && 19 == U % 20 ? 40 : 20));
                 N = U === N;
                 return z().createElement(z().Fragment, null, "end" !== R && 7 < ba && z().createElement(L, null), 1 < ba && z().createElement(u, {
                     active: N,
                     href: S(ba),
                     text: "" + ba
                 }), z().createElement(u, {
                     disabled: N,
                     href: S(U + 1),
                     text: F.Next
                 }))
             }
               , u = function(F) {
                 var R, U = F.disabled;
                 U = void 0 !== U && U;
                 var S = F.href
                   , N = F.active;
                 N = void 0 !== N && N;
                 F = F.text;
                 var ba = U ? "span" : "a"
                   , na = (0,
                 v.useContext)(H.T).analyticsTaggingOverrides;
                 U = (R = ["page-item"],
                 N && R.push("active"),
                 U && R.push("disabled"),
                 R.join(" "));
                 var ea = (0,
                 v.useRef)()
                   , ka = function(ha, aa, sa) {
                     var Na = na ? P(P({}, na), {
                         actionType: "click" === ha.type ? "CL" : "CR"
                     }) : {};
                     "object" == typeof window.telemetry && !0 === window.telemetry.webAnalyticsPlugin.isInitialized() && window.telemetry.webAnalyticsPlugin.capturePageAction(aa, Na);
                     "click" === ha.type && (window.location.href = sa)
                 };
                 return z().createElement("li", {
                     className: U
                 }, z().createElement(ba, {
                     className: "page-link",
                     href: "a" === ba ? S : void 0,
                     "aria-current": N ? "page" : void 0,
                     "data-bi-mto": na ? "true" : void 0,
                     onClick: "a" === ba && na ? function(ha) {
                         ha.preventDefault();
                         ka(ha, ea.current, S)
                     }
                     : void 0,
                     onContextMenu: "a" === ba && na ? function(ha) {
                         ka(ha, ea.current, S)
                     }
                     : void 0,
                     ref: ea
                 }, z().createElement("span", null, F)))
             }
               , L = function() {
                 return z().createElement("li", {
                     className: "page-item disabled ellipsis"
                 }, z().createElement("span", {
                     className: "page-link text-body"
                 }, "..."))
             };
             const O = function(F) {
                 F = F.skipQspName;
                 var R = void 0 === F ? "skip" : F
                   , U = (0,
                 v.useContext)(H.T)
                   , S = U.activePageUrl
                   , N = U.limit
                   , ba = U.staticTexts;
                 F = Math.floor(U.offset / N) + 1;
                 U = Math.ceil(U.totalResults / N);
                 var na = F < (7 === U ? 8 : 7) ? "start" : F < U - 4 ? "middle" : "end";
                 ba = (1 === U ? ba["Pagination for search results: {numPages} page"] || "Pagination for search results: {numPages} page" : ba["Pagination for search results: {numPages} pages"] || "Pagination for search results: {numPages} pages").replace("{numPages}", "" + U);
                 return z().createElement("nav", {
                     "aria-label": ba
                 }, z().createElement("ul", {
                     className: "pagination"
                 }, z().createElement(K.Provider, {
                     value: {
                         activePage: F,
                         href: function(ea) {
                             var ka = new URL(S);
                             return 1 < ea ? ka.searchParams.set(R, "" + (ea - 1) * N) : ka.searchParams.delete(R),
                             ka.href
                         },
                         lastPage: U,
                         variant: na
                     }
                 }, z().createElement(A, null), z().createElement(J, null), z().createElement(w, null))))
             }
         }
         ,
         3068: (Q,I,C)=>{
             C.d(I, {
                 A: ()=>K,
                 T: ()=>H
             });
             Q = C(6540);
             var v = C.n(Q)
               , z = function() {
                 return z = Object.assign || function(A) {
                     for (var J, w = 1, u = arguments.length; w < u; w++)
                         for (var L in J = arguments[w])
                             Object.prototype.hasOwnProperty.call(J, L) && (A[L] = J[L]);
                     return A
                 }
                 ,
                 z.apply(this, arguments)
             }
               , H = v().createContext({})
               , P = {
                 Previous: "Previous",
                 Next: "Next",
                 "{start}-{end} of {total} results": "{start}-{end} of {total} results",
                 "Pagination for search results: {numPages} page": "Pagination for search results: {numPages} page",
                 "Pagination for search results: {numPages} pages": "Pagination for search results: {numPages} pages"
             };
             const K = function(A) {
                 var J = A.activePageUrl
                   , w = A.children
                   , u = A.limit
                   , L = A.offset
                   , O = A.results
                   , F = A.staticTexts
                   , R = A.totalResults;
                 A = A.analyticsTaggingOverrides;
                 return v().createElement(H.Provider, {
                     value: {
                         activePageUrl: J,
                         limit: u,
                         offset: L,
                         results: O,
                         staticTexts: z(z({}, P), F),
                         totalResults: R,
                         analyticsTaggingOverrides: A
                     }
                 }, w)
             }
         }
         ,
         3630: (Q,I,C)=>{
             C.d(I, {
                 FT: ()=>z,
                 OW: ()=>v
             });
             var v = function(H) {
                 var P = function(K) {
                     if (!document.cookie)
                         return "";
                     var A = document.cookie.split("; ").find(function(J) {
                         return J.startsWith(K)
                     });
                     return A ? A.split("\x3d")[1] : ""
                 }("cartMuid");
                 P && "" !== P || function(K, A, J) {
                     var w = new Date
                       , u = window.location.hostname && window.location.hostname.toLowerCase();
                     w.setTime(w.getTime() + 864E5 * J);
                     K = K + "\x3d" + A + "; expires\x3d" + w.toUTCString() + "; path\x3d/; SameSite\x3dnone; Secure";
                     document.cookie = "www.microsoft.com" !== u ? K + "; domain\x3d.microsoft.com" : K
                 }("cartMuid", H, 365)
             }
               , z = function(H) {
                 "undefined" != typeof window && (window.addToCartHash = H)
             }
         }
         ,
         5545: (Q,I,C)=>{
             function v(H, P) {
                 return H ? P.reduce(function(K, A, J) {
                     return K.replace("{" + J + "}", A)
                 }, H) : ""
             }
             function z(H, P, K) {
                 return "SHOWING_START_THROUGH_END_OF_TOTAL_ITEMS" == P ? H && H[P] ? v(H[P], ["%{start}", "%{end}", "%{total}"]) : K : H && H[P] ? H[P] : K
             }
             C.d(I, {
                 oW: ()=>v,
                 zH: ()=>z
             })
         }
         ,
         2908: (Q,I,C)=>{
             function v(H) {
                 window.mwf ? H() : document && document.addEventListener("mwfInitialized", function(P) {
                     H()
                 })
             }
             function z(H) {
                 window.mwfExtensions ? H() : document && document.addEventListener("mwfCarouselExtensionsInitialized", function(P) {
                     H()
                 })
             }
             C.d(I, {
                 C: ()=>v,
                 q: ()=>z
             })
         }
         ,
         1455: (Q,I,C)=>{
             function v(J) {
                 return (J = J.replace(/%23|#/g, "")).slice(2) + J.slice(0, 2)
             }
             function z(J) {
                 return !(!J || !J.includes("cdn-dynmedia") && !J.includes("scene7.com"))
             }
             C.d(I, {
                 RM: ()=>K,
                 de: ()=>v,
                 jl: ()=>A,
                 kn: ()=>z,
                 qn: ()=>P
             });
             var H = function(J) {
                 var w = "function" == typeof Symbol && Symbol.iterator
                   , u = w && J[w]
                   , L = 0;
                 if (u)
                     return u.call(J);
                 if (J && "number" == typeof J.length)
                     return {
                         next: function() {
                             return J && L >= J.length && (J = void 0),
                             {
                                 value: J && J[L++],
                                 done: !J
                             }
                         }
                     };
                 throw new TypeError(w ? "Object is not iterable." : "Symbol.iterator is not defined.");
             }
               , P = function(J) {
                 if (!J)
                     return !1;
                 J = J.split("-")[0];
                 return !!"zh ja ko th lo my km".split(" ").includes(J)
             }
               , K = function(J, w) {
                 var u, L = J.matchAll(/[0-9a-zA-Z]+/g);
                 if (0 >= w)
                     return "";
                 if (w >= J.length)
                     return J;
                 var O = w;
                 try {
                     for (var F = H(L), R = F.next(); !R.done; R = F.next()) {
                         var U = R.value;
                         if (w <= U.index) {
                             O = w;
                             break
                         }
                         if (w <= U.index + U[0].length) {
                             O = U.index;
                             break
                         }
                     }
                 } catch (N) {
                     var S = {
                         error: N
                     }
                 } finally {
                     try {
                         R && !R.done && (u = F.return) && u.call(F)
                     } finally {
                         if (S)
                             throw S.error;
                     }
                 }
                 return J.slice(0, O)
             }
               , A = function(J, w) {
                 if (w >= J.length)
                     return J;
                 if (0 === w)
                     return "";
                 var u = new RegExp(/[\s\-]/);
                 if (u.test(J[w]))
                     return J.slice(0, w);
                 for (--w; 0 <= w; w--)
                     if (u.test(J[w]))
                         return J.slice(0, w + 1);
                 return ""
             }
         }
         ,
         9273: (Q,I,C)=>{
             C.d(I, {
                 M: ()=>v
             });
             var v = function() {
                 function z() {}
                 return z.trace = function(H, P, K) {
                     "undefined" != typeof window && window.telemetry && window.telemetry.telemetryLog && window.telemetry.telemetryLog.trace(H, P, K)
                 }
                 ,
                 z.event = function(H, P) {
                     "undefined" != typeof window && window.telemetry && window.telemetry.telemetryLog && window.telemetry.telemetryLog.event(H, P)
                 }
                 ,
                 z.error = function(H, P) {
                     "undefined" != typeof window && window.telemetry && window.telemetry.telemetryLog && window.telemetry.telemetryLog.error(H, P)
                 }
                 ,
                 z.dependency = function(H, P, K, A, J, w) {
                     "undefined" != typeof window && window.telemetry && window.telemetry.telemetryLog && window.telemetry.telemetryLog.dependency(H, P, K, A, J, w)
                 }
                 ,
                 z
             }()
         }
         ,
         9797: Q=>{
             function I() {
                 var v = Date.now()
                   , z = I.last || v;
                 return I.last = v > z ? v : z + 1
             }
             var C = "undefined" != typeof process && process.pid ? process.pid.toString(36) : "";
             Q.exports = Q.exports.default = function(v, z) {
                 return (v || "") + "" + C + I().toString(36) + (z || "")
             }
             ;
             Q.exports.process = function(v, z) {
                 return (v || "") + C + I().toString(36) + (z || "")
             }
             ;
             Q.exports.time = function(v, z) {
                 return (v || "") + I().toString(36) + (z || "")
             }
         }
         ,
         4198: Q=>{
             Q.exports = JSON.parse('{"_args":[["axios@0.21.4","/mnt/vss/_work/1/s/react-app"]],"_from":"axios@0.21.4","_id":"axios@0.21.4","_inBundle":false,"_integrity":"sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg\x3d\x3d","_location":"/axios","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"axios@0.21.4","name":"axios","escapedName":"axios","rawSpec":"0.21.4","saveSpec":null,"fetchSpec":"0.21.4"},"_requiredBy":["/"],"_resolved":"https://microsoftit.pkgs.visualstudio.com/OneITVSO/_packaging/CSM-SITES-AEMFoundations/npm/registry/axios/-/axios-0.21.4.tgz","_spec":"0.21.4","_where":"/mnt/vss/_work/1/s/react-app","author":{"name":"Matt Zabriskie"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"bugs":{"url":"https://github.com/axios/axios/issues"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}],"dependencies":{"follow-redirects":"^1.14.0"},"description":"Promise based HTTP client for the browser and node.js","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"homepage":"https://axios-http.com","jsdelivr":"dist/axios.min.js","keywords":["xhr","http","ajax","promise","node"],"license":"MIT","main":"index.js","name":"axios","repository":{"type":"git","url":"git+https://github.com/axios/axios.git"},"scripts":{"build":"NODE_ENV\x3dproduction grunt build","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","examples":"node ./examples/server.js","fix":"eslint --fix lib/**/*.js","postversion":"git push \x26\x26 git push --tags","preversion":"npm test","start":"node ./sandbox/server.js","test":"grunt test","version":"npm run build \x26\x26 grunt version \x26\x26 git add -A dist \x26\x26 git add CHANGELOG.md bower.json package.json"},"typings":"./index.d.ts","unpkg":"dist/axios.min.js","version":"0.21.4"}')
         }
     }
       , Zi = {};
     Ja.n = Q=>{
         var I = Q && Q.__esModule ? ()=>Q.default : ()=>Q;
         return Ja.d(I, {
             a: I
         }),
         I
     }
     ;
     Ja.d = (Q,I)=>{
         for (var C in I)
             Ja.o(I, C) && !Ja.o(Q, C) && Object.defineProperty(Q, C, {
                 enumerable: !0,
                 get: I[C]
             })
     }
     ;
     Ja.g = function() {
         if ("object" == typeof globalThis)
             return globalThis;
         try {
             return this || (new Function("return this"))()
         } catch (Q) {
             if ("object" == typeof window)
                 return window
         }
     }();
     Ja.hmd = Q=>((Q = Object.create(Q)).children || (Q.children = []),
     Object.defineProperty(Q, "exports", {
         enumerable: !0,
         set: ()=>{
             throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + Q.id);
         }
     }),
     Q);
     Ja.o = (Q,I)=>Object.prototype.hasOwnProperty.call(Q, I);
     var xj = {};
     (()=>{
         function Q(G) {
             var e = G.store
               , g = G.context;
             G = G.children;
             var c = (0,
             ia.useMemo)(function() {
                 var f = new pa(e);
                 return f.onStateChange = f.notifyNestedSubs,
                 {
                     store: e,
                     subscription: f
                 }
             }, [e])
               , d = (0,
             ia.useMemo)(function() {
                 return e.getState()
             }, [e]);
             (0,
             ia.useEffect)(function() {
                 var f = c.subscription;
                 return f.trySubscribe(),
                 d !== e.getState() && f.notifyNestedSubs(),
                 function() {
                     f.tryUnsubscribe();
                     f.onStateChange = null
                 }
             }, [c, d]);
             g = g || D;
             return n().createElement(g.Provider, {
                 value: c
             }, G)
         }
         function I() {
             return I = Object.assign || function(G) {
                 for (var e = 1; e < arguments.length; e++) {
                     var g = arguments[e], c;
                     for (c in g)
                         Object.prototype.hasOwnProperty.call(g, c) && (G[c] = g[c])
                 }
                 return G
             }
             ,
             I.apply(this, arguments)
         }
         function C(G, e) {
             if (null == G)
                 return {};
             var g, c = {}, d = Object.keys(G);
             for (g = 0; g < d.length; g++) {
                 var f = d[g];
                 0 <= e.indexOf(f) || (c[f] = G[f])
             }
             return c
         }
         function v(G, e) {
             return [e.payload, G[1] + 1]
         }
         function z(G, e) {
             void 0 === e && (e = {});
             var g = e.getDisplayName
               , c = void 0 === g ? function(T) {
                 return "ConnectAdvanced(" + T + ")"
             }
             : g;
             g = e.methodName;
             var d = void 0 === g ? "connectAdvanced" : g;
             g = e.renderCountProp;
             var f = void 0 === g ? void 0 : g;
             g = e.shouldHandleStateChanges;
             var k = void 0 === g || g;
             g = e.storeKey;
             var r = void 0 === g ? "store" : g;
             g = e.withRef;
             g = void 0 !== g && g;
             var q = e.forwardRef
               , E = void 0 !== q && q;
             q = e.context;
             var y = void 0 === q ? D : q
               , p = C(e, "getDisplayName methodName renderCountProp shouldHandleStateChanges storeKey withRef forwardRef context".split(" "));
             Ta()(void 0 === f, "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
             Ta()(!g, "withRef is removed. To access the wrapped instance, use a ref on the connected component");
             Ta()("store" === r, "storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: \x3cProvider context\x3d{MyContext}\x3e\x3cConnectedComponent context\x3d{MyContext} /\x3e\x3c/Provider\x3e. You may also pass a {context : MyContext} option to connect");
             return function(T) {
                 function ja(ya) {
                     var xa = (0,
                     ia.useMemo)(function() {
                         var Ob = ya.forwardedRef
                           , Bb = C(ya, ["forwardedRef"]);
                         return [ya.context, Ob, Bb]
                     }, [ya])
                       , Ua = xa[0]
                       , Ya = xa[1]
                       , Ga = xa[2]
                       , Za = (0,
                     ia.useMemo)(function() {
                         return Ua && Ua.Consumer && (0,
                         hb.isContextConsumer)(n().createElement(Ua.Consumer, null)) ? Ua : y
                     }, [Ua, y])
                       , ub = (0,
                     ia.useContext)(Za)
                       , fb = !!ya.store && !!ya.store.getState && !!ya.store.dispatch;
                     xa = !!ub && !!ub.store;
                     Ta()(fb || xa, 'Could not find "store" in the context of "' + Z + '". Either wrap the root component in a \x3cProvider\x3e, or pass a custom React context provider to \x3cProvider\x3e and the corresponding React context consumer to ' + Z + " in connect options.");
                     var mb = fb ? ya.store : ub.store
                       , Vb = (0,
                     ia.useMemo)(function() {
                         return G(mb.dispatch, ma)
                     }, [mb]);
                     xa = (0,
                     ia.useMemo)(function() {
                         if (!k)
                             return Db;
                         var Ob = new pa(mb,fb ? null : ub.subscription)
                           , Bb = Ob.notifyNestedSubs.bind(Ob);
                         return [Ob, Bb]
                     }, [mb, fb, ub]);
                     var nb = xa[0]
                       , Cb = xa[1]
                       , Wb = (0,
                     ia.useMemo)(function() {
                         return fb ? ub : I({}, ub, {
                             subscription: nb
                         })
                     }, [fb, ub, nb]);
                     xa = (0,
                     ia.useReducer)(v, Af, Bf);
                     var kc = xa[0][0]
                       , Bc = xa[1];
                     if (kc && kc.error)
                         throw kc.error;
                     var Jb = (0,
                     ia.useRef)()
                       , eb = (0,
                     ia.useRef)(Ga)
                       , pb = (0,
                     ia.useRef)()
                       , Dc = (0,
                     ia.useRef)(!1)
                       , Fb = wa(function() {
                         return pb.current && Ga === eb.current ? pb.current : Vb(mb.getState(), Ga)
                     }, [mb, kc, Ga]);
                     $a(function() {
                         eb.current = Ga;
                         Jb.current = Fb;
                         Dc.current = !1;
                         pb.current && (pb.current = null,
                         Cb())
                     });
                     $a(function() {
                         if (k) {
                             var Ob = !1
                               , Bb = null
                               , wd = function() {
                                 if (!Ob) {
                                     var Xc, lc = mb.getState();
                                     try {
                                         var Yc = Vb(lc, eb.current)
                                     } catch (Ue) {
                                         Bb = Xc = Ue
                                     }
                                     Xc || (Bb = null);
                                     Yc === Jb.current ? Dc.current || Cb() : (Jb.current = Yc,
                                     pb.current = Yc,
                                     Dc.current = !0,
                                     Bc({
                                         type: "STORE_UPDATED",
                                         payload: {
                                             error: Xc
                                         }
                                     }))
                                 }
                             };
                             nb.onStateChange = wd;
                             nb.trySubscribe();
                             wd();
                             return function() {
                                 if (Ob = !0,
                                 nb.tryUnsubscribe(),
                                 nb.onStateChange = null,
                                 Bb)
                                     throw Bb;
                             }
                         }
                     }, [mb, nb, Vb]);
                     var Cc = (0,
                     ia.useMemo)(function() {
                         return n().createElement(T, I({}, Fb, {
                             ref: Ya
                         }))
                     }, [Ya, T, Fb]);
                     return (0,
                     ia.useMemo)(function() {
                         return k ? n().createElement(Za.Provider, {
                             value: Wb
                         }, Cc) : Cc
                     }, [Za, Cc, Wb])
                 }
                 var da = T.displayName || T.name || "Component"
                   , Z = c(da)
                   , ma = I({}, p, {
                     getDisplayName: c,
                     methodName: d,
                     renderCountProp: f,
                     shouldHandleStateChanges: k,
                     storeKey: r,
                     displayName: Z,
                     wrappedComponentName: da,
                     WrappedComponent: T
                 })
                   , wa = (da = p.pure) ? ia.useMemo : function(ya) {
                     return ya()
                 }
                   , Ia = da ? n().memo(ja) : ja;
                 return (Ia.WrappedComponent = T,
                 Ia.displayName = Z,
                 E) ? (da = n().forwardRef(function(ya, xa) {
                     return n().createElement(Ia, I({}, ya, {
                         forwardedRef: xa
                     }))
                 }),
                 da.displayName = Z,
                 da.WrappedComponent = T,
                 za()(da, T)) : za()(Ia, T)
             }
         }
         function H(G, e) {
             return G === e ? 0 !== G || 0 !== e || 1 / G == 1 / e : G != G && e != e
         }
         function P(G, e) {
             if (H(G, e))
                 return !0;
             if ("object" != typeof G || null === G || "object" != typeof e || null === e)
                 return !1;
             var g = Object.keys(G)
               , c = Object.keys(e);
             if (g.length !== c.length)
                 return !1;
             for (c = 0; c < g.length; c++)
                 if (!Cf.call(e, g[c]) || !H(G[g[c]], e[g[c]]))
                     return !1;
             return !0
         }
         function K(G, e) {
             return function() {
                 return e(G.apply(this, arguments))
             }
         }
         function A(G) {
             return function(e, g) {
                 function c() {
                     return d
                 }
                 var d = G(e, g);
                 return c.dependsOnOwnProps = !1,
                 c
             }
         }
         function J(G) {
             return null !== G.dependsOnOwnProps && void 0 !== G.dependsOnOwnProps ? !!G.dependsOnOwnProps : 1 !== G.length
         }
         function w(G, e) {
             return function(g, c) {
                 c.displayName;
                 var d = function(f, k) {
                     return d.dependsOnOwnProps ? d.mapToProps(f, k) : d.mapToProps(f)
                 };
                 return d.dependsOnOwnProps = !0,
                 d.mapToProps = function(f, k) {
                     d.mapToProps = G;
                     d.dependsOnOwnProps = J(G);
                     var r = d(f, k);
                     return "function" == typeof r && (d.mapToProps = r,
                     d.dependsOnOwnProps = J(r),
                     r = d(f, k)),
                     r
                 }
                 ,
                 d
             }
         }
         function u(G, e, g) {
             return I({}, g, {}, G, {}, e)
         }
         function L(G, e, g, c) {
             return function(d, f) {
                 return g(G(d, f), e(c, f), f)
             }
         }
         function O(G, e, g, c, d) {
             var f, k, r, q, E, y = d.areStatesEqual, p = d.areOwnPropsEqual, T = d.areStatePropsEqual, ja = !1;
             return function(da, Z) {
                 if (ja) {
                     var ma, wa, Ia = !p(Z, k), ya = !y(da, f);
                     da = (f = da,
                     k = Z,
                     Ia && ya ? (r = G(f, k),
                     e.dependsOnOwnProps && (q = e(c, k)),
                     E = g(r, q, k)) : Ia ? (G.dependsOnOwnProps && (r = G(f, k)),
                     e.dependsOnOwnProps && (q = e(c, k)),
                     E = g(r, q, k)) : ya ? (ma = G(f, k),
                     wa = !T(ma, r),
                     r = ma,
                     wa && (E = g(r, q, k)),
                     E) : E)
                 } else
                     da = (r = G(f = da, k = Z),
                     q = e(c, k),
                     E = g(r, q, k),
                     ja = !0,
                     E);
                 return da
             }
         }
         function F(G, e) {
             var g = e.initMapStateToProps
               , c = e.initMapDispatchToProps
               , d = e.initMergeProps;
             e = C(e, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);
             g = g(G, e);
             c = c(G, e);
             d = d(G, e);
             return (e.pure ? O : L)(g, c, d, G, e)
         }
         function R(G, e, g) {
             for (var c = e.length - 1; 0 <= c; c--) {
                 var d = e[c](G);
                 if (d)
                     return d
             }
             return function(f, k) {
                 throw Error("Invalid value of type " + typeof G + " for " + g + " argument when connecting component " + k.wrappedComponentName + ".");
             }
         }
         function U(G, e) {
             return G === e
         }
         function S() {
             var G = (0,
             ia.useContext)(D);
             return Ta()(G, "could not find react-redux context value; please ensure the component is wrapped in a \x3cProvider\x3e"),
             G
         }
         function N(G) {
             void 0 === G && (G = D);
             var e = G === D ? S : function() {
                 return (0,
                 ia.useContext)(G)
             }
             ;
             return function() {
                 return e().store
             }
         }
         function ba(G, e) {
             var g = {
                 cN: void 0,
                 cT: "Link",
                 bhvr: "0",
                 pa: "Body",
                 compnm: "Buy Box",
                 ecn: void 0
             };
             G.querySelectorAll("a").forEach(function(c) {
                 g.cN = c.textContent;
                 g.ecn = c.textContent;
                 var d = sd(sd({}, g), e);
                 c.setAttribute("data-m", JSON.stringify(d))
             })
         }
         function na(G, e) {
             return $e(this, void 0, void 0, function() {
                 var g, c, d, f, k, r, q, E, y, p, T, ja, da, Z, ma, wa, Ia, ya, xa, Ua, Ya, Ga;
                 return af(this, function(Za) {
                     switch (Za.label) {
                     case 0:
                         return c = (g = e || {}).addToCartHash,
                         d = g.enableUcsExp,
                         f = void 0 !== d && d,
                         k = g.isBusinessUserSignedIn,
                         Za = r = new URLSearchParams(window.location.search),
                         q = ef(Za, "cartPPE") ? "ppe" : ef(Za, "cartPERF") ? "perf" : ef(Za, "cartINT") ? "staging" : "prod",
                         E = Ad(window.location.href, ["activetab", "Invisibiliarevelare", "cartPPE", "enableucs"]),
                         y = Date.now(),
                         T = (p = c || {}).atcHash,
                         ja = p.cV,
                         da = p.muid,
                         [4, uh(G, q, T, ja, f, k, da)];
                     case 1:
                         return Z = Za.sent(),
                         ma = "",
                         ma = k ? "https://wwwppe.microsoft.com/$locale/store/business/cart".replace("$locale", G.locale) : "https://www.microsoft.com/$locale/store/buy".replace("$locale", G.locale),
                         wa = E ? ma + "?" + E : ma,
                         Ia = Z.code,
                         ya = Z.status,
                         xa = Z.reason,
                         Ua = Z.cvValue,
                         Ya = Z.type,
                         200 !== ya || null === Ia ? [3, 3] : (y += 1,
                         [4, ie(G.locale, Ia, xa, y)]);
                     case 2:
                         Ga = Za.sent(),
                         Za.label = 3;
                     case 3:
                         return [2, {
                             redirectCartUrl: wa,
                             code: Ia,
                             status: ya,
                             cvValue: Ua,
                             errorMessage: Ga,
                             type: Ya
                         }]
                     }
                 })
             })
         }
         function ea(G) {
             "undefined" != typeof document && (ka("#" + G + ' [data-mount\x3d"carousel"]'),
             function(e) {
                 (0,
                 gd.C)(function() {
                     mwf.Popover.getInstances().forEach(function(g) {
                         var c;
                         return (null === (c = g.el.closest(".modal")) || void 0 === c ? void 0 : c.id) === e ? g.remove() : null
                     });
                     document.querySelectorAll("#" + e + ' [data-mount\x3d"popover"]').forEach(function(g) {
                         return new mwf.Popover({
                             el: g
                         })
                     })
                 })
             }(G))
         }
         function ka(G) {
             (0,
             gd.C)(function() {
                 var e = document.querySelector(G);
                 if (e) {
                     mwf.Carousel.getInstances().forEach(function(c) {
                         var d;
                         return (null === (d = c.el) || void 0 === d ? void 0 : d.id) === e.id ? c.remove() : null
                     });
                     var g = e.querySelector(".slide-item");
                     (null == g ? 0 : g.firstElementChild) ? new mwf.Carousel({
                         el: e
                     }) : setTimeout(function() {
                         ka(G)
                     }, 100)
                 }
             })
         }
         function ha(G) {
             var e = G.getInitialHref
               , g = G.hrefDefined;
             return !G.enableQuickHrefs || g ? null : n().createElement("script", {
                 type: "application/javascript",
                 dangerouslySetInnerHTML: {
                     __html: '\n                var scripts \x3d document.getElementsByTagName("script");\n                var script \x3d scripts[scripts.length-1];\n                var el \x3d script.previousSibling;\n                var initialHref \x3d (' + e + ')();\n                el.setAttribute("href", initialHref);\n            '
                 }
             })
         }
         function aa(G) {
             G = G.children;
             return n().createElement("div", {
                 className: "row py-4 bg-neutral-100 bg-md-transparent",
                 "data-automation-test-id": "buy-box-standard-layout"
             }, G)
         }
         function sa(G) {
             G = G.children;
             return n().createElement("div", {
                 className: "d-flex flex-wrap py-4 bg-neutral-100 bg-md-transparent",
                 "data-automation-test-id": "buy-box-bundle-layout"
             }, G)
         }
         function Na(G) {
             var e = G.glyph
               , g = G.isSeparatorVisible;
             return e && e.src && (e.alt || e.title) ? n().createElement("li", {
                 className: "d-flex pb-3 align-items-center"
             }, n().createElement("div", {
                 className: "d-flex flex-column align-items-center mr-3"
             }, n().createElement("img", {
                 src: e.src,
                 alt: e.alt,
                 "data-automation-test-id": "buy-box-upsell-promo-banner-logo-img"
             }), n().createElement(function() {
                 return !!e.title && n().createElement("div", {
                     className: "small",
                     "data-automation-test-id": "buy-box-upsell-promo-banner-logo-title"
                 }, e.title)
             }, null)), n().createElement(function() {
                 return !!g && n().createElement("div", {
                     className: "glyph-prepend glyph-prepend-add mr-3",
                     "aria-hidden": "true"
                 })
             }, null)) : null
         }
         function bb(G) {
             var e = !!(G.glyphs && 0 < G.glyphs.length)
               , g = !!(G.badge && G.badge.text && G.badge.theme);
             return n().createElement("section", {
                 className: G.className
             }, n().createElement(function() {
                 return g && n().createElement("div", {
                     className: "mb-2"
                 }, n().createElement("span", {
                     className: "badge bg-" + G.badge.theme,
                     "data-automation-test-id": "buy-box-upsell-promo-banner-badge-text"
                 }, G.badge.text))
             }, null), n().createElement("h2", {
                 className: "h3",
                 "data-automation-test-id": "buy-box-upsell-promo-banner-heading"
             }, cd(G.noLineBreaks, G.heading)), n().createElement("p", {
                 className: "mb-4",
                 "data-automation-test-id": "buy-box-upsell-promo-banner-body"
             }, cd(G.noLineBreaks, G.body)), n().createElement(function() {
                 return e && n().createElement("ul", {
                     className: "d-inline-flex flex-wrap buy-box-bundle-thumbs list-inline mb-0 mt-2",
                     "data-automation-test-id": "buy-box-upsell-promo-banner-logos"
                 }, G.glyphs.map(function(c, d) {
                     return n().createElement(Na, {
                         glyph: c,
                         isSeparatorVisible: d !== G.glyphs.length - 1
                     })
                 }))
             }, null))
         }
         function gb(G) {
             var e = G.heading;
             G = G.body;
             return n().createElement("li", null, n().createElement("h3", {
                 className: "list-secondary-header mb-0",
                 "data-automation-test-id": "buy-box-upsell-secondary-info-heading"
             }, e), n().createElement("p", {
                 "data-automation-test-id": "buy-box-upsell-secondary-info-body"
             }, G))
         }
         function cb(G) {
             return !!(G.secondaryInfos && 0 < G.secondaryInfos.length) && n().createElement("div", {
                 className: "col-12 col-md-3 pt-2",
                 "data-automation-test-id": "buy-box-upsell-column-middle"
             }, n().createElement("ul", {
                 className: "list-unstyled"
             }, G.secondaryInfos.map(function(e) {
                 return n().createElement(gb, {
                     heading: e.heading,
                     body: e.body
                 })
             })))
         }
         function vb(G) {
             return !!G.link && n().createElement("a", {
                 "data-m": G.jsll,
                 className: "btn btn-primary btn-block primary-buy-button mr-1",
                 "aria-label": G.link.arialabel,
                 href: G.link.hyperlink
             }, G.link.ctatext)
         }
         function Rb(G) {
             var e = G.price
               , g = !!(G.ctas && 0 < G.ctas.length)
               , c = !!(e && e.msrp && e.leadIn);
             return n().createElement("section", {
                 className: "col-12 col-md-3 px-md-4",
                 "data-automation-test-id": "buy-box-upsell-column-right"
             }, n().createElement(function() {
                 return c && n().createElement("p", {
                     className: "mb-0 small",
                     "data-automation-test-id": "buy-box-upsell-column-right-price-leadin"
                 }, e.leadIn)
             }, null), n().createElement(function() {
                 return !!G.price && n().createElement("p", {
                     className: "h3 font-weight-normal"
                 }, n().createElement("span", {
                     className: "font-weight-semibold",
                     "data-automation-test-id": "buy-box-upsell-column-right-price"
                 }, e.msrp))
             }, null), n().createElement(function() {
                 return n().createElement(n().Fragment, null, g && G.ctas.map(function(d, f) {
                     return n().createElement(vb, {
                         key: f,
                         link: d.link,
                         jsll: d.jsll
                     })
                 }))
             }, null))
         }
         function rb(G) {
             if (!(G.heading && G.body && G.ctas && G.ctas.length))
                 return null;
             a: {
                 var e = !(!G.secondaryInfos || !G.secondaryInfos.length);
                 switch (!0) {
                 case e:
                     e = "col-12 col-md-6 px-md-4";
                     break a;
                 case !e:
                     e = "col-12 px-md-4 col-md-9";
                     break a
                 }
                 e = void 0
             }
             return n().createElement(n().Fragment, null, n().createElement(bb, {
                 className: e,
                 glyphs: G.glyphs,
                 badge: G.badge,
                 heading: G.heading,
                 body: G.body,
                 noLineBreaks: G.noLineBreaks
             }), n().createElement(cb, {
                 secondaryInfos: G.secondaryInfos
             }), n().createElement(Rb, {
                 price: G.price,
                 ctas: G.ctas
             }))
         }
         function Ea(G) {
             var e = G.upsellPromoBanner
               , g = G.promoBannerBlade
               , c = G.useProductInfo;
             G = G.noLineBreaks;
             return e && e.isVisible ? n().createElement(rb, uc({
                 noLineBreaks: G
             }, e)) : g && 0 < g.length ? n().createElement(pe, {
                 promoTexts: g,
                 isPromoBannerBlade: !0,
                 useProductTitle: c,
                 automationIdLabel: "bottom-promobanner-blade"
             }) : n().createElement(Tf, {
                 useProductTitle: c
             })
         }
         function Pa(G) {
             G = G.error;
             return !(!G || !G.length) && n().createElement("div", {
                 className: "bg-orange p-1"
             }, n().createElement("div", {
                 className: "h5"
             }, "Unexpected Error:"), G.map(function(e, g) {
                 return n().createElement("div", null, g + 1 + ") " + e)
             }))
         }
         function wb(G) {
             var e = G.children;
             G = G.containerSelector;
             if ("undefined" == typeof document)
                 return null;
             G = document.querySelector(void 0 === G ? ".sticky-show-stuck\x3e.container\x3e.row" : G);
             G || (G = document.createElement("div"),
             document.body.appendChild(G));
             return (0,
             Kf.createPortal)(e, G)
         }
         Ja.d(xj, {
             Dq: ()=>Me,
             u0: ()=>Xa
         });
         var ia = Ja(6540)
           , n = Ja.n(ia)
           , xb = Ja(5556)
           , jb = Ja.n(xb)
           , D = n().createContext(null)
           , W = function(G) {
             G()
         }
           , fa = {
             notify: function() {}
         }
           , pa = function() {
             function G(g, c) {
                 this.store = g;
                 this.parentSub = c;
                 this.unsubscribe = null;
                 this.listeners = fa;
                 this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
             }
             var e = G.prototype;
             return e.addNestedSub = function(g) {
                 return this.trySubscribe(),
                 this.listeners.subscribe(g)
             }
             ,
             e.notifyNestedSubs = function() {
                 this.listeners.notify()
             }
             ,
             e.handleChangeWrapper = function() {
                 this.onStateChange && this.onStateChange()
             }
             ,
             e.isSubscribed = function() {
                 return !!this.unsubscribe
             }
             ,
             e.trySubscribe = function() {
                 this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper),
                 this.listeners = function() {
                     var g = W
                       , c = []
                       , d = [];
                     return {
                         clear: function() {
                             c = d = null
                         },
                         notify: function() {
                             var f = c = d;
                             g(function() {
                                 for (var k = 0; k < f.length; k++)
                                     f[k]()
                             })
                         },
                         get: function() {
                             return d
                         },
                         subscribe: function(f) {
                             var k = !0;
                             return d === c && (d = c.slice()),
                             d.push(f),
                             function() {
                                 k && null !== c && (k = !1,
                                 d === c && (d = c.slice()),
                                 d.splice(d.indexOf(f), 1))
                             }
                         }
                     }
                 }())
             }
             ,
             e.tryUnsubscribe = function() {
                 this.unsubscribe && (this.unsubscribe(),
                 this.unsubscribe = null,
                 this.listeners.clear(),
                 this.listeners = fa)
             }
             ,
             G
         }();
         Q.propTypes = {
             store: jb().shape({
                 subscribe: jb().func.isRequired,
                 dispatch: jb().func.isRequired,
                 getState: jb().func.isRequired
             }),
             context: jb().object,
             children: jb().any
         };
         var ua = Ja(4146)
           , za = Ja.n(ua)
           , Qa = Ja(311)
           , Ta = Ja.n(Qa)
           , hb = Ja(4737)
           , $a = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? ia.useLayoutEffect : ia.useEffect
           , Af = []
           , Db = [null, null]
           , Bf = function() {
             return [null, 0]
         }
           , Cf = Object.prototype.hasOwnProperty
           , gc = Ja(9423)
           , Kd = function() {
             return Math.random().toString(36).substring(7).split("").join(".")
         }
           , ld = {
             INIT: "@@redux/INIT" + Kd(),
             REPLACE: "@@redux/REPLACE" + Kd(),
             PROBE_UNKNOWN_ACTION: function() {
                 return "@@redux/PROBE_UNKNOWN_ACTION" + Kd()
             }
         };
         const Pg = [function(G) {
             return "function" == typeof G ? w(G) : void 0
         }
         , function(G) {
             return G ? void 0 : A(function(e) {
                 return {
                     dispatch: e
                 }
             })
         }
         , function(G) {
             return G && "object" == typeof G ? A(function(e) {
                 if ("function" == typeof G)
                     e = K(G, e);
                 else {
                     if ("object" != typeof G || null === G)
                         throw Error("bindActionCreators expected an object or a function, instead received " + (null === G ? "null" : typeof G) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
                     var g = {}, c;
                     for (c in G) {
                         var d = G[c];
                         "function" == typeof d && (g[c] = K(d, e))
                     }
                     e = g
                 }
                 return e
             }) : void 0
         }
         ]
           , Ef = [function(G) {
             return "function" == typeof G ? w(G) : void 0
         }
         , function(G) {
             return G ? void 0 : A(function() {
                 return {}
             })
         }
         ]
           , Qg = [function(G) {
             return "function" == typeof G ? function(e) {
                 return function(g, c) {
                     c.displayName;
                     var d, f = c.pure, k = c.areMergedPropsEqual, r = !1;
                     return function(q, E, y) {
                         q = e(q, E, y);
                         return r ? f && k(q, d) || (d = q) : (r = !0,
                         d = q),
                         d
                     }
                 }
             }(G) : void 0
         }
         , function(G) {
             return G ? void 0 : function() {
                 return u
             }
         }
         ]
           , Ka = (md = (Ld = void 0 === Ff ? {} : Ff).connectHOC,
         Sg = void 0 === md ? z : md,
         ze = Ld.mapStateToPropsFactories,
         Gf = void 0 === ze ? Ef : ze,
         Hf = Ld.mapDispatchToPropsFactories,
         Tg = void 0 === Hf ? Pg : Hf,
         If = Ld.mergePropsFactories,
         Ug = void 0 === If ? Qg : If,
         Jf = Ld.selectorFactory,
         Be = void 0 === Jf ? F : Jf,
         function(G, e, g, c) {
             void 0 === c && (c = {});
             var d = c;
             c = d.pure;
             c = void 0 === c || c;
             var f = d.areStatesEqual;
             f = void 0 === f ? U : f;
             var k = d.areOwnPropsEqual;
             k = void 0 === k ? P : k;
             var r = d.areStatePropsEqual;
             r = void 0 === r ? P : r;
             var q = d.areMergedPropsEqual;
             q = void 0 === q ? P : q;
             d = C(d, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);
             var E = R(G, Gf, "mapStateToProps");
             e = R(e, Tg, "mapDispatchToProps");
             g = R(g, Ug, "mergeProps");
             return Sg(Be, I({
                 methodName: "connect",
                 getDisplayName: function(y) {
                     return "Connect(" + y + ")"
                 },
                 shouldHandleStateChanges: !!G,
                 initMapStateToProps: E,
                 initMapDispatchToProps: e,
                 initMergeProps: g,
                 pure: c,
                 areStatesEqual: f,
                 areOwnPropsEqual: k,
                 areStatePropsEqual: r,
                 areMergedPropsEqual: q
             }, d))
         }
         );
         var Ff, Ld, md, Sg, ze, Gf, Hf, Tg, If, Ug, Jf, Be;
         N();
         !function(G) {
             void 0 === G && (G = D);
             G === D || N(G)
         }();
         var Oc = function(G, e) {
             return G === e
         }
           , Nd = function(G) {
             void 0 === G && (G = D);
             var e = G === D ? S : function() {
                 return (0,
                 ia.useContext)(G)
             }
             ;
             return function(g, c) {
                 void 0 === c && (c = Oc);
                 Ta()(g, "You must pass a selector to useSelectors");
                 var d = e();
                 return function(f, k, r, q) {
                     var E = (0,
                     ia.useReducer)(function(ma) {
                         return ma + 1
                     }, 0)[1]
                       , y = (0,
                     ia.useMemo)(function() {
                         return new pa(r,q)
                     }, [r, q])
                       , p = (0,
                     ia.useRef)()
                       , T = (0,
                     ia.useRef)()
                       , ja = (0,
                     ia.useRef)();
                     try {
                         var da = f !== T.current || p.current ? f(r.getState()) : ja.current
                     } catch (ma) {
                         var Z = "An error occurred while selecting the store state: " + ma.message + ".";
                         throw p.current && (Z += "\nThe error may be correlated with this previous error:\n" + p.current.stack + "\n\nOriginal stack trace:"),
                         Error(Z);
                     }
                     return $a(function() {
                         T.current = f;
                         ja.current = da;
                         p.current = void 0
                     }),
                     $a(function() {
                         function ma() {
                             try {
                                 var wa = T.current(r.getState());
                                 if (k(wa, ja.current))
                                     return;
                                 ja.current = wa
                             } catch (Ia) {
                                 p.current = Ia
                             }
                             E({})
                         }
                         return y.onStateChange = ma,
                         y.trySubscribe(),
                         ma(),
                         function() {
                             return y.tryUnsubscribe()
                         }
                     }, [r, y]),
                     da
                 }(g, c, d.store, d.subscription)
             }
         }()
           , Kf = Ja(961);
         W = Kf.unstable_batchedUpdates;
         var Ma, Ce, Lf;
         !function(G) {
             G.PushToInstall = "InstallOnDevices";
             G.BuildABundle = "BuildABundle";
             G.AddToCart = "AddToCart";
             G.ConfigureDevice = "ConfigureDevice";
             G.Manage = "Manage";
             G.OutOfStock = "OUTOFSTOCK";
             G.NotAvailable = "NOTAVAILABLE";
             G.AddToWishlist = "AddToWishlist";
             G.Buy = "Buy"
         }(Ma || (Ma = {}));
         (function(G) {
             G.Devices = "Devices";
             G.Software = "Software";
             G.Pass = "Pass"
         }
         )(Ce || (Ce = {}));
         (Lf || (Lf = {})).ColorSelector = "colorSelector";
         var De = function() {}
           , Vg = function() {}
           , db = function() {}
           , Od = function() {}
           , li = function() {}
           , mi = function() {}
           , ob = function() {
             return ob = Object.assign || function(G) {
                 for (var e, g = 1, c = arguments.length; g < c; g++)
                     for (var d in e = arguments[g])
                         Object.prototype.hasOwnProperty.call(e, d) && (G[d] = e[d]);
                 return G
             }
             ,
             ob.apply(this, arguments)
         }
           , Nf = {
             product: null
         }
           , Ee = {
             selectedSku: ""
         }
           , Rd = {
             skuLevelMetadata: null,
             productLevel: null
         }
           , Of = function() {}
           , Pf = function(G, e) {
             var g = e.disableGallery || !G.galleryImages || G.galleryImages && 1 >= G.galleryImages.length;
             return !((e.hideTileImage || !G.displayImage) && g)
         }
           , Qf = function(G, e) {
             var g = !(e.selectorInfo && 0 < e.selectorInfo.length)
               , c = !G.ctaOverride
               , d = !G.action
               , f = !G.shippingMessage
               , k = !G.pricingMessage
               , r = !(e.promoBannerRight && 0 < e.promoBannerRight.length)
               , q = !(e.promoBannerBelowPrice && 0 < e.promoBannerBelowPrice.length);
             e = e.showBusinessUserValuePropMessage;
             return !((!G.price || !G.price.current) && g && d && f && r && k && q && c && e)
         }
           , Fe = function(G, e) {
             G = !(G.remediation && !G.affirmation);
             var g = !(e.promoBannerBlade && 0 < e.promoBannerBlade.length);
             return e.upsellPromoBanner && e.upsellPromoBanner.isVisible || !(G && g)
         };
         const hc = function f(e, g, c, d) {
             function k() {
                 if (da)
                     throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                 return p
             }
             function r(Z) {
                 if ("function" != typeof Z)
                     throw Error("Expected the listener to be a function.");
                 if (da)
                     throw Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                 var ma = !0;
                 ja === T && (ja = T.slice());
                 return ja.push(Z),
                 function() {
                     if (ma) {
                         if (da)
                             throw Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                         ma = !1;
                         ja === T && (ja = T.slice());
                         var wa = ja.indexOf(Z);
                         ja.splice(wa, 1);
                         T = null
                     }
                 }
             }
             function q(Z) {
                 if ("object" != typeof Z || null === Z)
                     var ma = !1;
                 else {
                     for (ma = Z; null !== Object.getPrototypeOf(ma); )
                         ma = Object.getPrototypeOf(ma);
                     ma = Object.getPrototypeOf(Z) === ma
                 }
                 if (!ma)
                     throw Error("Actions must be plain objects. Use custom middleware for async actions.");
                 if (void 0 === Z.type)
                     throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                 if (da)
                     throw Error("Reducers may not dispatch actions.");
                 try {
                     da = !0,
                     p = y(p, Z)
                 } finally {
                     da = !1
                 }
                 ma = T = ja;
                 for (var wa = 0; wa < ma.length; wa++)
                     (0,
                     ma[wa])();
                 return Z
             }
             var E;
             if ("function" == typeof g && "function" == typeof c || "function" == typeof c && "function" == typeof d)
                 throw Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
             if ("function" == typeof g && void 0 === c && (c = g,
             g = void 0),
             void 0 !== c) {
                 if ("function" != typeof c)
                     throw Error("Expected the enhancer to be a function.");
                 return c(f)(e, g)
             }
             if ("function" != typeof e)
                 throw Error("Expected the reducer to be a function.");
             var y = e
               , p = g
               , T = []
               , ja = T
               , da = !1;
             return q({
                 type: ld.INIT
             }),
             (E = {
                 dispatch: q,
                 subscribe: r,
                 getState: k,
                 replaceReducer: function(Z) {
                     if ("function" != typeof Z)
                         throw Error("Expected the nextReducer to be a function.");
                     y = Z;
                     q({
                         type: ld.REPLACE
                     })
                 }
             })[gc.A] = function() {
                 var Z;
                 return (Z = {
                     subscribe: function(ma) {
                         function wa() {
                             ma.next && ma.next(k())
                         }
                         if ("object" != typeof ma || null === ma)
                             throw new TypeError("Expected the observer to be an object.");
                         return wa(),
                         {
                             unsubscribe: r(wa)
                         }
                     }
                 })[gc.A] = function() {
                     return this
                 }
                 ,
                 Z
             }
             ,
             E
         }(function(e) {
             for (var g = Object.keys(e), c = {}, d = 0; d < g.length; d++) {
                 var f = g[d];
                 0;
                 "function" == typeof e[f] && (c[f] = e[f])
             }
             var k = Object.keys(c);
             try {
                 !function(q) {
                     Object.keys(q).forEach(function(E) {
                         var y = q[E];
                         if (void 0 === y(void 0, {
                             type: ld.INIT
                         }))
                             throw Error('Reducer "' + E + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                         if (void 0 === y(void 0, {
                             type: ld.PROBE_UNKNOWN_ACTION()
                         }))
                             throw Error('Reducer "' + E + "\" returned undefined when probed with a random type. Don't try to handle " + ld.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
                     })
                 }(c)
             } catch (q) {
                 var r = q
             }
             return function(q, E) {
                 if (void 0 === q && (q = {}),
                 r)
                     throw r;
                 for (var y = !1, p = {}, T = 0; T < k.length; T++) {
                     var ja = k[T]
                       , da = q[ja]
                       , Z = (0,
                     c[ja])(da, E);
                     if (void 0 === Z)
                         throw q = E && E.type,
                         Error("Given " + (q && 'action "' + String(q) + '"' || "an action") + ', reducer "' + ja + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
                     p[ja] = Z;
                     y = y || Z !== da
                 }
                 return y || k.length !== Object.keys(q).length ? p : q
             }
         }({
             addProduct: function(e, g) {
                 return void 0 === e && (e = Nf),
                 "RESET_STORE" === g.type ? ob(ob({}, e), {
                     product: Nf.product
                 }) : "ADD_PRODUCT" === g.type ? ob(ob({}, e), {
                     product: g.payload
                 }) : e
             },
             setSelectedSku: function(e, g) {
                 return void 0 === e && (e = Ee),
                 "RESET_STORE" === g.type ? ob(ob({}, e), {
                     selectedSku: Ee.selectedSku
                 }) : "SET_SELECTED_SKU" === g.type ? ob(ob({}, e), {
                     selectedSku: g.payload
                 }) : e
             },
             setUiMetadata: function(e, g) {
                 if (void 0 === e && (e = Rd),
                 "RESET_STORE" === g.type)
                     return ob(ob({}, Rd), {
                         skuLevelMetadata: Rd.skuLevelMetadata,
                         productLevel: Rd.productLevel
                     });
                 if ("SET_UI_METADATA" === g.type) {
                     var c = g.payload;
                     g = c.selectedSku;
                     c = c.buyBoxProps;
                     var d = c.product;
                     if (!e.productLevel || !e.skuLevelMetadata || !e.skuLevelMetadata[g]) {
                         var f = new De;
                         if (f.top = new Vg,
                         f.left = new db,
                         f.middle = new Od,
                         f.right = new li,
                         f.bottom = new mi,
                         d.skuInfo && 0 !== Object.keys(d.skuInfo).length) {
                             e.skuLevelMetadata || (e.skuLevelMetadata = {});
                             var k = d.skuInfo[g]
                               , r = !k.subscriptionMessage
                               , q = !k.ownershipActions;
                             f.top.visible = !(!k.ownershipStatus && q && r);
                             f.left.visible = Pf(d.skuInfo[g], c);
                             f.middle.hidePreTitle = !d.skuInfo[g].badge;
                             f.right.visible = Qf(d.skuInfo[g], c);
                             f.bottom.visible = Fe(d.skuInfo[g], c);
                             f.bottom.name = c.upsellPromoBanner && c.upsellPromoBanner.isVisible ? "bundle" : "standard";
                             e.skuLevelMetadata[g] = f;
                             g = e.skuLevelMetadata;
                             return ob(ob({}, e), {
                                 skuLevelMetadata: g
                             })
                         }
                         f.top.visible = !1;
                         f.left.visible = Pf(d, c);
                         return f.middle.hidePreTitle = !!d.badge,
                         f.right.visible = Qf(d, c),
                         f.bottom.visible = Fe(d, c),
                         f.bottom.name = c.upsellPromoBanner && c.upsellPromoBanner.isVisible ? "bundle" : "standard",
                         ob(ob({}, e), {
                             productLevel: f
                         })
                     }
                 }
                 return e
             }
         }));
         var pd, sc = Ja(9819), Oa = function(e) {
             return e.addProduct ? e.addProduct.product : null
         }, ic = function(e) {
             return e.setSelectedSku ? e.setSelectedSku.selectedSku : ""
         }, He = function(e) {
             return Oa(e) ? Oa(e).skuInfo : null
         }, Aa = function(e) {
             var g = ic(e);
             return He(e) ? He(e)[g] : null
         }, Qc = function(e) {
             return Aa(e) ? Aa(e).title : ""
         }, tc = function(e) {
             return Oa(e) ? Oa(e).productId : null
         }, yb = function(e) {
             return Oa(e) ? Oa(e).title : ""
         }, Zb = function(e) {
             return e.setUiMetadata ? e.setUiMetadata.skuLevelMetadata : null
         }, Sf = function(e) {
             var g = ic(e);
             return Zb(e) ? Zb(e)[g].middle : null
         }, qd = function(e) {
             var g = ic(e);
             return (g = Zb(e) ? Zb(e)[g].left : null) ? g : (e = e.setUiMetadata) && e.productLevel ? e.productLevel.left : null
         }, Ie = function(e) {
             return (e = Aa(e)) ? e.ownershipStatus : null
         }, $b = function(e) {
             return (e = Aa(e)) ? e.subscriptionMessage : null
         }, Je = (pd = function(e, g) {
             return pd = Object.setPrototypeOf || {
                 __proto__: []
             }instanceof Array && function(c, d) {
                 c.__proto__ = d
             }
             || function(c, d) {
                 for (var f in d)
                     d.hasOwnProperty(f) && (c[f] = d[f])
             }
             ,
             pd(e, g)
         }
         ,
         function(e, g) {
             function c() {
                 this.constructor = e
             }
             pd(e, g);
             e.prototype = null === g ? Object.create(g) : (c.prototype = g.prototype,
             new c)
         }
         );
         const Rc = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Je(g, e),
             g.prototype.render = function() {
                 return this.props.isHidden ? null : n().createElement(sc.A, null, this.props.children)
             }
             ,
             g
         }(n().Component);
         var jc = Ja(1455)
           , Ud = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Wa = function() {
             return Wa = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             Wa.apply(this, arguments)
         }
           , lb = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Ud(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.uri
                   , f = c.alt
                   , k = c.pageTheme;
                 c = "?";
                 d && -1 !== d.indexOf("?") && (c = "\x26");
                 var r = !k || -1 === k.indexOf("main-xbox-dark") && -1 === k.indexOf("main-dark") ? "%23FFFFFFFF" : "%23FF000000";
                 k = !k || -1 === k.indexOf("main-xbox-dark") && -1 === k.indexOf("main-dark") ? "%23FFFFFFFF" : "%23FF2F2F2F";
                 return n().createElement(Rc, {
                     isHidden: !d
                 }, n().createElement("picture", {
                     className: "d-flex my-0 mx-auto"
                 }, n().createElement("source", {
                     srcSet: this.getUri(d + c, "150", "150", r),
                     media: "(max-width:539px)"
                 }), n().createElement("source", {
                     srcSet: this.getUri(d + c, "200", "200", r),
                     media: "(min-width:540px) and (max-width:767px)"
                 }), n().createElement("source", {
                     srcSet: this.getUri(d + c, "270", "270", r),
                     media: "(min-width:768px) and (max-width:859px)"
                 }), n().createElement("source", {
                     srcSet: this.getUri(d + c, "270", "270", k),
                     media: "(min-width:860px) and (max-width:1083px)"
                 }), n().createElement("img", {
                     src: this.getUri(d + c, "270", "270", k),
                     alt: f,
                     "data-automation-test-id": "buy-box-product-image"
                 })))
             }
             ,
             g.prototype.getUri = function(c, d, f, k) {
                 return (0,
                 jc.kn)(c) ? c + "qlt\x3d90\x26hei\x3d" + d + "\x26wid\x3d" + f + "\x26bgc\x3d" + (0,
                 jc.de)(k) + "\x26fmt\x3djpg" : c + "q\x3d90\x26m\x3d6\x26h\x3d" + d + "\x26w\x3d" + f + "\x26b\x3d" + k + "\x26f\x3djpg\x26o\x3df\x26aim\x3dtrue"
             }
             ,
             g
         }(n().Component);
         const rd = Ka(function(e) {
             e = (Aa(e) ? Aa(e).displayImage : null) || Oa(e).displayImage;
             return Wa({}, e)
         })(lb);
         var ta = Ja(5545)
           , Yg = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Ke = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Yg(g, e),
             g.prototype.render = function() {
                 var c, d = this.props.isExternal ? null : {
                     display: "block"
                 };
                 this.props.previousPrice && (c = n().createElement("span", {
                     className: "text-line-through text-muted",
                     style: d
                 }, this.props.previousPrice));
                 var f, k = this.props.large ? "h3 font-weight-normal" : "";
                 return this.props.ariaText && (f = n().createElement("p", {
                     className: "sr-only"
                 }, this.props.ariaText)),
                 this.props.priceFormat ? n().createElement(n().Fragment, null, f, n().createElement("p", {
                     "aria-hidden": !!this.props.ariaText && "true",
                     className: k,
                     "data-automation-test-id": "buy-box-pricing-starting-from"
                 }, n().createElement("span", {
                     className: "font-weight-semibold"
                 }, (0,
                 ta.oW)(this.props.priceFormat, [this.props.currentPrice])))) : n().createElement(n().Fragment, null, f, n().createElement("p", {
                     "aria-hidden": !!this.props.ariaText && "true",
                     className: k,
                     "data-automation-test-id": "buy-box-pricing"
                 }, this.props.preText, this.props.previousPrice ? n().createElement("span", {
                     style: {
                         display: "block"
                     }
                 }, c, n().createElement("span", {
                     className: "font-weight-semibold",
                     "data-automation-test-id": "buy-box-price",
                     style: d
                 }, " ", this.props.currentPrice)) : n().createElement("span", {
                     className: "font-weight-semibold",
                     "data-automation-test-id": "buy-box-price"
                 }, this.props.currentPrice)))
             }
             ,
             g
         }(n().Component)
           , Zg = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Vd = function() {
             return Vd = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             Vd.apply(this, arguments)
         }
           , bh = function(e) {
             function g() {
                 var c = null !== e && e.apply(this, arguments) || this;
                 return c.getAriaText = function(d, f, k, r) {
                     var q = "";
                     f && k != f && (q = (0,
                     ta.zH)(d, "ORIGINAL_PRICE_WAS", "Original price was"),
                     d = (0,
                     ta.zH)(d, "AND_NOW_PRICE_IS", "and now price is"),
                     q = r ? q + " " + r.toLowerCase() + f + " " + d + " " + r.toLowerCase() + k : q + " " + f + " " + d + " " + k);
                     return q
                 }
                 ,
                 c
             }
             return Zg(g, e),
             g.prototype.render = function() {
                 var c, d = this, f = this.props.current, k = this.props, r = k.original, q = k.tax, E = k.fromText, y = k.priceFormat, p = k.isExternal;
                 return f ? (f != r && r && (c = r,
                 q && (c = c + " " + q)),
                 null != q && (f = f + " " + q),
                 n().createElement(Xa.Consumer, null, function(T) {
                     T = T.buyboxStaticStrings;
                     return n().createElement(Ke, {
                         currentPrice: f,
                         previousPrice: c,
                         large: !d.props.isExternal,
                         preText: E,
                         ariaText: d.getAriaText(T, r, f, E),
                         priceFormat: y,
                         isExternal: p
                     })
                 })) : n().createElement(n().Fragment, null)
             }
             ,
             g
         }(n().Component);
         const xc = Ka(function(e) {
             e = (Aa(e) ? Aa(e).price : null) || Oa(e).price;
             return Vd({}, e)
         })(bh);
         var sd = function() {
             return sd = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             sd.apply(this, arguments)
         }
           , ib = function(e) {
             return JSON.stringify(e)
         }
           , Mb = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Xd = function() {
             return Xd = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             Xd.apply(this, arguments)
         }
           , Uf = function(e) {
             function g() {
                 var c = null !== e && e.apply(this, arguments) || this;
                 return c.updateTaggingInformation = function(d) {
                     return Xd(Xd({}, d), {
                         hn: c.props.title,
                         ehn: c.props.title,
                         pid: c.props.productId,
                         sku: c.props.selectedSku.skuId
                     })
                 }
                 ,
                 c
             }
             return Mb(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.text
                   , f = c.classes
                   , k = c.href;
                 c = c.jsllTag;
                 var r = void 0;
                 return c && (r = ib(this.updateTaggingInformation(c))),
                 n().createElement(n().Fragment, null, d && (k ? n().createElement("p", {
                     className: f
                 }, n().createElement("a", {
                     href: k,
                     "data-m": r,
                     "data-automation-test-id": "buy-box-message-link"
                 }, d)) : n().createElement("p", {
                     className: f,
                     "data-m": r,
                     "data-automation-test-id": "buy-box-message-text"
                 }, d)))
             }
             ,
             g
         }(n().Component);
         const Sb = Ka(function(e, g) {
             return {
                 selectedSku: Aa(e),
                 title: g.useProductTitle ? yb(e) : Qc(e),
                 productId: tc(e)
             }
         })(Uf);
         var dh = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Ne = function(e, g, c) {
             var d = {
                 year: "numeric",
                 month: "long",
                 day: "numeric",
                 hour: "numeric",
                 minute: "numeric",
                 timeZone: void 0
             };
             g = null != g && null != g && "" != g ? (new Date(g)).toLocaleTimeString(c, d) : void 0;
             return null != g && null != e ? e.replace("{DateValue}", g) : ""
         }
           , eh = function(e) {
             function g(c) {
                 c = e.call(this, c) || this;
                 return "undefined" != typeof window ? c.state = {
                     pricingMessage: Ne(c.props.pricingMessage, c.props.dateValue, c.props.locale)
                 } : c.state = {
                     pricingMessage: c.props.pricingMessage
                 },
                 c
             }
             return dh(g, e),
             g.prototype.render = function() {
                 var c = this.props.pricingMessage ? -1 == this.props.pricingMessage.indexOf("{DateValue}") ? this.props.pricingMessage : Ne(this.props.pricingMessage, this.props.dateValue, this.props.locale) : "";
                 return n().createElement(n().Fragment, null, c && n().createElement(Sb, {
                     text: c,
                     useProductTitle: this.props.useProductInfo
                 }))
             }
             ,
             g
         }(n().Component);
         const td = Ka(function(e) {
             var g = function(c) {
                 var d = Aa(c);
                 return d ? d.pricingMessage : Oa(c) ? Oa(c).pricingMessage : ""
             }(e);
             e = function(c) {
                 var d = Aa(c);
                 return d ? null != d.releaseMessageDateValue ? d.releaseMessageDateValue : "" : Oa(c) && null != Oa(c).releaseMessageDateValue ? Oa(c).releaseMessageDateValue : ""
             }(e);
             return {
                 pricingMessage: g,
                 dateValue: e
             }
         })(eh);
         var ac = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }();
         const Oe = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return ac(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.primaryText
                   , f = c.secondaryText
                   , k = ["small"];
                 return k.push(c.classes),
                 n().createElement(n().Fragment, null, d && n().createElement("p", {
                     className: k.join(" ")
                 }, n().createElement("span", {
                     className: f ? "buy-box-bullet-discounts" : "",
                     "data-automation-test-id": "buy-box-price-discount"
                 }, d), f && n().createElement("span", null, f)))
             }
             ,
             g
         }(n().Component);
         var Vf = Ja(2505)
           , yc = Ja.n(Vf)
           , zc = function(e, g, c, d) {
             return new (c || (c = Promise))(function(f, k) {
                 function r(y) {
                     try {
                         E(d.next(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function q(y) {
                     try {
                         E(d.throw(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function E(y) {
                     var p;
                     y.done ? f(y.value) : (p = y.value,
                     p instanceof c ? p : new c(function(T) {
                         T(p)
                     }
                     )).then(r, q)
                 }
                 E((d = d.apply(e, g || [])).next())
             }
             )
         }
           , Nb = function(e, g) {
             function c(E) {
                 return function(y) {
                     return function(p) {
                         if (d)
                             throw new TypeError("Generator is already executing.");
                         for (; q; )
                             try {
                                 if (d = 1,
                                 f && (k = 2 & p[0] ? f.return : p[0] ? f.throw || ((k = f.return) && k.call(f),
                                 0) : f.next) && !(k = k.call(f, p[1])).done)
                                     return k;
                                 switch (f = 0,
                                 k && (p = [2 & p[0], k.value]),
                                 p[0]) {
                                 case 0:
                                 case 1:
                                     k = p;
                                     break;
                                 case 4:
                                     return q.label++,
                                     {
                                         value: p[1],
                                         done: !1
                                     };
                                 case 5:
                                     q.label++;
                                     f = p[1];
                                     p = [0];
                                     continue;
                                 case 7:
                                     p = q.ops.pop();
                                     q.trys.pop();
                                     continue;
                                 default:
                                     if (!(k = q.trys,
                                     (k = 0 < k.length && k[k.length - 1]) || 6 !== p[0] && 2 !== p[0])) {
                                         q = 0;
                                         continue
                                     }
                                     if (3 === p[0] && (!k || p[1] > k[0] && p[1] < k[3]))
                                         q.label = p[1];
                                     else if (6 === p[0] && q.label < k[1])
                                         q.label = k[1],
                                         k = p;
                                     else if (k && q.label < k[2])
                                         q.label = k[2],
                                         q.ops.push(p);
                                     else {
                                         k[2] && q.ops.pop();
                                         q.trys.pop();
                                         continue
                                     }
                                 }
                                 p = g.call(e, q)
                             } catch (T) {
                                 p = [6, T],
                                 f = 0
                             } finally {
                                 d = k = 0
                             }
                         if (5 & p[0])
                             throw p[1];
                         return {
                             value: p[0] ? p[1] : void 0,
                             done: !0
                         }
                     }([E, y])
                 }
             }
             var d, f, k, r, q = {
                 label: 0,
                 sent: function() {
                     if (1 & k[0])
                         throw k[1];
                     return k[1]
                 },
                 trys: [],
                 ops: []
             };
             return r = {
                 next: c(0),
                 throw: c(1),
                 return: c(2)
             },
             "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                 return this
             }
             ),
             r
         }
           , Tb = function() {
             function e() {}
             return e.getCompactTicket = function() {
                 return zc(this, void 0, void 0, function() {
                     return Nb(this, function(g) {
                         return window.msauth && window.msauth.AuthTicket ? [2, Promise.resolve(window.msauth.AuthTicket)] : [2, Promise.resolve(null)]
                     })
                 })
             }
             ,
             e.isUserSignedIn = function() {
                 return zc(this, void 0, void 0, function() {
                     return Nb(this, function(g) {
                         return window.msauth && window.msauth.AuthTicket ? [2, Promise.resolve(null !== window.msauth.AuthTicket)] : [2, Promise.resolve(!1)]
                     })
                 })
             }
             ,
             e.getUserName = function() {
                 return zc(this, void 0, void 0, function() {
                     return Nb(this, function(g) {
                         return window.msauth && window.msauth.FirstName ? [2, Promise.resolve(window.msauth.FirstName)] : [2, Promise.resolve(null)]
                     })
                 })
             }
             ,
             e.getUserType = function() {
                 return zc(this, void 0, void 0, function() {
                     return Nb(this, function(g) {
                         return window.msauth && window.msauth.Type ? [2, Promise.resolve(window.msauth.Type)] : [2, Promise.resolve(null)]
                     })
                 })
             }
             ,
             e.getAuthTicketEx = function() {
                 return zc(this, void 0, void 0, function() {
                     return Nb(this, function(g) {
                         return window.msauth && window.msauth.AuthTicketEx ? [2, Promise.resolve(window.msauth.AuthTicketEx)] : [2, Promise.resolve(null)]
                     })
                 })
             }
             ,
             e
         }()
           , fh = function(e, g, c, d) {
             return new (c || (c = Promise))(function(f, k) {
                 function r(y) {
                     try {
                         E(d.next(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function q(y) {
                     try {
                         E(d.throw(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function E(y) {
                     var p;
                     y.done ? f(y.value) : (p = y.value,
                     p instanceof c ? p : new c(function(T) {
                         T(p)
                     }
                     )).then(r, q)
                 }
                 E((d = d.apply(e, g || [])).next())
             }
             )
         }
           , gh = function(e, g) {
             function c(E) {
                 return function(y) {
                     return function(p) {
                         if (d)
                             throw new TypeError("Generator is already executing.");
                         for (; q; )
                             try {
                                 if (d = 1,
                                 f && (k = 2 & p[0] ? f.return : p[0] ? f.throw || ((k = f.return) && k.call(f),
                                 0) : f.next) && !(k = k.call(f, p[1])).done)
                                     return k;
                                 switch (f = 0,
                                 k && (p = [2 & p[0], k.value]),
                                 p[0]) {
                                 case 0:
                                 case 1:
                                     k = p;
                                     break;
                                 case 4:
                                     return q.label++,
                                     {
                                         value: p[1],
                                         done: !1
                                     };
                                 case 5:
                                     q.label++;
                                     f = p[1];
                                     p = [0];
                                     continue;
                                 case 7:
                                     p = q.ops.pop();
                                     q.trys.pop();
                                     continue;
                                 default:
                                     if (!(k = q.trys,
                                     (k = 0 < k.length && k[k.length - 1]) || 6 !== p[0] && 2 !== p[0])) {
                                         q = 0;
                                         continue
                                     }
                                     if (3 === p[0] && (!k || p[1] > k[0] && p[1] < k[3]))
                                         q.label = p[1];
                                     else if (6 === p[0] && q.label < k[1])
                                         q.label = k[1],
                                         k = p;
                                     else if (k && q.label < k[2])
                                         q.label = k[2],
                                         q.ops.push(p);
                                     else {
                                         k[2] && q.ops.pop();
                                         q.trys.pop();
                                         continue
                                     }
                                 }
                                 p = g.call(e, q)
                             } catch (T) {
                                 p = [6, T],
                                 f = 0
                             } finally {
                                 d = k = 0
                             }
                         if (5 & p[0])
                             throw p[1];
                         return {
                             value: p[0] ? p[1] : void 0,
                             done: !0
                         }
                     }([E, y])
                 }
             }
             var d, f, k, r, q = {
                 label: 0,
                 sent: function() {
                     if (1 & k[0])
                         throw k[1];
                     return k[1]
                 },
                 trys: [],
                 ops: []
             };
             return r = {
                 next: c(0),
                 throw: c(1),
                 return: c(2)
             },
             "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                 return this
             }
             ),
             r
         };
         const Yd = function(e) {
             return fh(void 0, void 0, void 0, function() {
                 var g, c, d;
                 return gh(this, function(f) {
                     switch (f.label) {
                     case 0:
                         return [4, Tb.getCompactTicket()];
                     case 1:
                         return g = f.sent(),
                         [4, Tb.getAuthTicketEx()];
                     case 2:
                         return c = f.sent(),
                         [4, Tb.getUserType()];
                     case 3:
                         return d = f.sent(),
                         null != g && (null != e.CompactHeaderName && null != e.CompactHeaderPrefix ? null != d && "aad" == d.toLowerCase() && e.AadHeaderPrefix && null != c ? e.headers[e.CompactHeaderName] = e.AadHeaderPrefix + c : e.headers[e.CompactHeaderName] = e.CompactHeaderPrefix + g : e.headers.compactTicket = g),
                         [2, e]
                     }
                 })
             })
         };
         var Pe = function() {
             function e() {}
             return e.getMsCV = function() {
                 return window.telemetry && window.telemetry.correlationVectorPlugin ? window.telemetry.correlationVectorPlugin.getCv() : null
             }
             ,
             e
         }()
           , ih = Ja(9797)
           , Zd = Ja.n(ih);
         const jh = function(e) {
             var g = Pe.getMsCV();
             return e.cv && e.xMSVectorId ? e.headers["MS-CV"] = null != g ? g.increment() : e.cv : e.headers["MS-CV"] = null != g ? g.increment() : Zd()("casc"),
             e
         };
         var Qe, $d = function() {
             function e() {}
             return e.getCookie = function(g) {
                 g += "\x3d";
                 if ("undefined" != typeof document) {
                     for (var c = decodeURIComponent(document.cookie).split(";"), d = 0; d < c.length; d++) {
                         var f = c[d];
                         if (0 == (f = f.trim()).indexOf(g))
                             return f.substring(g.length, f.length)
                     }
                     return ""
                 }
             }
             ,
             e
         }(), Re = new Map(Object.entries({
             "windows.desktop": "Pc",
             "windows.mobile": "Mobile",
             "windows.xbox": "Xbox",
             "windows.holographic": "Hololens",
             "windows.team": "Surface",
             mac: "Mac",
             ios: "Ios",
             android: "Android",
             "windows.windowsPhone8x": "Unknown",
             "windows.windowsPhone7x": "Unknown",
             "windows.windows8x": "Unknown",
             "windows.universal": "Unknown"
         }));
         !function(e) {
             e.Cat1 = "Cat1";
             e.Cat4 = "Cat4"
         }(Qe || (Qe = {}));
         const ae = function(e) {
             if (null != e.MUIDHeader) {
                 var g = $d.getCookie("cartMuid");
                 "" != g && (e.headers[e.MUIDHeader] = g)
             }
             return e
         };
         var be = function() {
             var e = window.crypto || window.msCrypto;
             return e && e.getRandomValues ? e.getRandomValues(new Uint32Array(1))[0] / Math.pow(16, 8) : Math.random()
         };
         const kh = function(e) {
             if (e.riskIdAppend) {
                 var g = $d.getCookie("MS0") || "xxxxxxxx-xxxx-4xxx-Rxxx-xxxxxxxxxxxx".replace(/x/g, function() {
                     return Math.floor(16 * be()).toString(16)
                 }).replace("R", (8 | Math.floor(3 * be())).toString(16));
                 if ("string" == typeof e.data) {
                     var c = JSON.parse(e.data);
                     c.riskSessionId = g;
                     e.data = JSON.stringify(c)
                 } else
                     "object" == typeof e.data && (e.data.riskSessionId = g)
             }
             return e
         }
           , Wc = function(e) {
             return e.FirstName && (e.headers.FirstName = e.FirstName),
             e
         };
         var Zf = function(e, g, c, d) {
             return new (c || (c = Promise))(function(f, k) {
                 function r(y) {
                     try {
                         E(d.next(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function q(y) {
                     try {
                         E(d.throw(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function E(y) {
                     var p;
                     y.done ? f(y.value) : (p = y.value,
                     p instanceof c ? p : new c(function(T) {
                         T(p)
                     }
                     )).then(r, q)
                 }
                 E((d = d.apply(e, g || [])).next())
             }
             )
         }
           , vd = function(e, g) {
             function c(E) {
                 return function(y) {
                     return function(p) {
                         if (d)
                             throw new TypeError("Generator is already executing.");
                         for (; q; )
                             try {
                                 if (d = 1,
                                 f && (k = 2 & p[0] ? f.return : p[0] ? f.throw || ((k = f.return) && k.call(f),
                                 0) : f.next) && !(k = k.call(f, p[1])).done)
                                     return k;
                                 switch (f = 0,
                                 k && (p = [2 & p[0], k.value]),
                                 p[0]) {
                                 case 0:
                                 case 1:
                                     k = p;
                                     break;
                                 case 4:
                                     return q.label++,
                                     {
                                         value: p[1],
                                         done: !1
                                     };
                                 case 5:
                                     q.label++;
                                     f = p[1];
                                     p = [0];
                                     continue;
                                 case 7:
                                     p = q.ops.pop();
                                     q.trys.pop();
                                     continue;
                                 default:
                                     if (!(k = q.trys,
                                     (k = 0 < k.length && k[k.length - 1]) || 6 !== p[0] && 2 !== p[0])) {
                                         q = 0;
                                         continue
                                     }
                                     if (3 === p[0] && (!k || p[1] > k[0] && p[1] < k[3]))
                                         q.label = p[1];
                                     else if (6 === p[0] && q.label < k[1])
                                         q.label = k[1],
                                         k = p;
                                     else if (k && q.label < k[2])
                                         q.label = k[2],
                                         q.ops.push(p);
                                     else {
                                         k[2] && q.ops.pop();
                                         q.trys.pop();
                                         continue
                                     }
                                 }
                                 p = g.call(e, q)
                             } catch (T) {
                                 p = [6, T],
                                 f = 0
                             } finally {
                                 d = k = 0
                             }
                         if (5 & p[0])
                             throw p[1];
                         return {
                             value: p[0] ? p[1] : void 0,
                             done: !0
                         }
                     }([E, y])
                 }
             }
             var d, f, k, r, q = {
                 label: 0,
                 sent: function() {
                     if (1 & k[0])
                         throw k[1];
                     return k[1]
                 },
                 trys: [],
                 ops: []
             };
             return r = {
                 next: c(0),
                 throw: c(1),
                 return: c(2)
             },
             "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                 return this
             }
             ),
             r
         }
           , lh = function() {
             function e() {}
             return e.isTentedPage = function() {
                 return Zf(this, void 0, void 0, function() {
                     return vd(this, function(g) {
                         return window.tentoptions && window.tentoptions.isTentedPage ? [2, Promise.resolve(window.tentoptions.isTentedPage)] : [2, Promise.resolve(null)]
                     })
                 })
             }
             ,
             e
         }()
           , $f = function(e, g, c, d) {
             return new (c || (c = Promise))(function(f, k) {
                 function r(y) {
                     try {
                         E(d.next(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function q(y) {
                     try {
                         E(d.throw(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function E(y) {
                     var p;
                     y.done ? f(y.value) : (p = y.value,
                     p instanceof c ? p : new c(function(T) {
                         T(p)
                     }
                     )).then(r, q)
                 }
                 E((d = d.apply(e, g || [])).next())
             }
             )
         }
           , Te = function(e, g) {
             function c(E) {
                 return function(y) {
                     return function(p) {
                         if (d)
                             throw new TypeError("Generator is already executing.");
                         for (; q; )
                             try {
                                 if (d = 1,
                                 f && (k = 2 & p[0] ? f.return : p[0] ? f.throw || ((k = f.return) && k.call(f),
                                 0) : f.next) && !(k = k.call(f, p[1])).done)
                                     return k;
                                 switch (f = 0,
                                 k && (p = [2 & p[0], k.value]),
                                 p[0]) {
                                 case 0:
                                 case 1:
                                     k = p;
                                     break;
                                 case 4:
                                     return q.label++,
                                     {
                                         value: p[1],
                                         done: !1
                                     };
                                 case 5:
                                     q.label++;
                                     f = p[1];
                                     p = [0];
                                     continue;
                                 case 7:
                                     p = q.ops.pop();
                                     q.trys.pop();
                                     continue;
                                 default:
                                     if (!(k = q.trys,
                                     (k = 0 < k.length && k[k.length - 1]) || 6 !== p[0] && 2 !== p[0])) {
                                         q = 0;
                                         continue
                                     }
                                     if (3 === p[0] && (!k || p[1] > k[0] && p[1] < k[3]))
                                         q.label = p[1];
                                     else if (6 === p[0] && q.label < k[1])
                                         q.label = k[1],
                                         k = p;
                                     else if (k && q.label < k[2])
                                         q.label = k[2],
                                         q.ops.push(p);
                                     else {
                                         k[2] && q.ops.pop();
                                         q.trys.pop();
                                         continue
                                     }
                                 }
                                 p = g.call(e, q)
                             } catch (T) {
                                 p = [6, T],
                                 f = 0
                             } finally {
                                 d = k = 0
                             }
                         if (5 & p[0])
                             throw p[1];
                         return {
                             value: p[0] ? p[1] : void 0,
                             done: !0
                         }
                     }([E, y])
                 }
             }
             var d, f, k, r, q = {
                 label: 0,
                 sent: function() {
                     if (1 & k[0])
                         throw k[1];
                     return k[1]
                 },
                 trys: [],
                 ops: []
             };
             return r = {
                 next: c(0),
                 throw: c(1),
                 return: c(2)
             },
             "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                 return this
             }
             ),
             r
         };
         const Ub = function(e) {
             return $f(void 0, void 0, void 0, function() {
                 var g;
                 return Te(this, function(c) {
                     switch (c.label) {
                     case 0:
                         return [4, lh.isTentedPage()];
                     case 1:
                         return null != (g = c.sent()) && "true" === g && (e.headers["x-ms-tented"] = g),
                         [2, e]
                     }
                 })
             })
         };
         var ag = Ja(3770)
           , bg = Ja.n(ag);
         const mh = function(e) {
             return "undefined" != typeof window && window.location.href.includes("cartPERF\x3dtrue") && (e.headers["x-aem-load-test"] = "true"),
             e
         }
           , xd = function(e) {
             return e.xMSVectorId && (e.headers["X-MS-Vector-Id"] = e.xMSVectorId),
             e
         }
           , ce = function(e) {
             var g = $d.getCookie("ucs_sid");
             return g && (e.headers["x-ms-ucs-sid"] = g),
             e
         };
         var Ve = function() {
             function e() {
                 this._client = yc().create()
             }
             return e.prototype.addCV = function() {
                 return this._client.interceptors.request.use(jh),
                 this
             }
             ,
             e.prototype.addAuthentication = function() {
                 return this._client.interceptors.request.use(Yd),
                 this
             }
             ,
             e.prototype.addXAuthMUID = function() {
                 return this._client.interceptors.request.use(ae),
                 this
             }
             ,
             e.prototype.addRiskSessionId = function() {
                 return this._client.interceptors.request.use(kh),
                 this
             }
             ,
             e.prototype.addFirstName = function() {
                 return this._client.interceptors.request.use(Wc),
                 this
             }
             ,
             e.prototype.addTentOptions = function() {
                 return this._client.interceptors.request.use(Ub),
                 this
             }
             ,
             e.prototype.addXAEMLoadTest = function() {
                 return this._client.interceptors.request.use(mh),
                 this
             }
             ,
             e.prototype.addXMSVectorId = function() {
                 return this._client.interceptors.request.use(xd),
                 this
             }
             ,
             e.prototype.addUcsSid = function() {
                 return this._client.interceptors.request.use(ce),
                 this
             }
             ,
             e.prototype.addRetry = function(g, c) {
                 return bg()(this._client, {
                     retries: g,
                     retryDelay: function(d, f) {
                         return c
                     }
                 }),
                 this
             }
             ,
             e.prototype.build = function() {
                 return this._client
             }
             ,
             e.RETRIES_COUNT_DEFAULT = 3,
             e.RETRY_TIMEOUT_DEFAULT = 50,
             e
         }()
           , Ec = (new Ve).addCV().addAuthentication().addXAuthMUID().addRiskSessionId().addRetry(Ve.RETRIES_COUNT_DEFAULT, Ve.RETRY_TIMEOUT_DEFAULT).addFirstName().addTentOptions().addXAEMLoadTest().addXMSVectorId().addUcsSid().build()
           , We = function(e, g, c, d) {
             return new (c || (c = Promise))(function(f, k) {
                 function r(y) {
                     try {
                         E(d.next(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function q(y) {
                     try {
                         E(d.throw(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function E(y) {
                     var p;
                     y.done ? f(y.value) : (p = y.value,
                     p instanceof c ? p : new c(function(T) {
                         T(p)
                     }
                     )).then(r, q)
                 }
                 E((d = d.apply(e, g || [])).next())
             }
             )
         }
           , Xe = function(e, g) {
             function c(E) {
                 return function(y) {
                     return function(p) {
                         if (d)
                             throw new TypeError("Generator is already executing.");
                         for (; q; )
                             try {
                                 if (d = 1,
                                 f && (k = 2 & p[0] ? f.return : p[0] ? f.throw || ((k = f.return) && k.call(f),
                                 0) : f.next) && !(k = k.call(f, p[1])).done)
                                     return k;
                                 switch (f = 0,
                                 k && (p = [2 & p[0], k.value]),
                                 p[0]) {
                                 case 0:
                                 case 1:
                                     k = p;
                                     break;
                                 case 4:
                                     return q.label++,
                                     {
                                         value: p[1],
                                         done: !1
                                     };
                                 case 5:
                                     q.label++;
                                     f = p[1];
                                     p = [0];
                                     continue;
                                 case 7:
                                     p = q.ops.pop();
                                     q.trys.pop();
                                     continue;
                                 default:
                                     if (!(k = q.trys,
                                     (k = 0 < k.length && k[k.length - 1]) || 6 !== p[0] && 2 !== p[0])) {
                                         q = 0;
                                         continue
                                     }
                                     if (3 === p[0] && (!k || p[1] > k[0] && p[1] < k[3]))
                                         q.label = p[1];
                                     else if (6 === p[0] && q.label < k[1])
                                         q.label = k[1],
                                         k = p;
                                     else if (k && q.label < k[2])
                                         q.label = k[2],
                                         q.ops.push(p);
                                     else {
                                         k[2] && q.ops.pop();
                                         q.trys.pop();
                                         continue
                                     }
                                 }
                                 p = g.call(e, q)
                             } catch (T) {
                                 p = [6, T],
                                 f = 0
                             } finally {
                                 d = k = 0
                             }
                         if (5 & p[0])
                             throw p[1];
                         return {
                             value: p[0] ? p[1] : void 0,
                             done: !0
                         }
                     }([E, y])
                 }
             }
             var d, f, k, r, q = {
                 label: 0,
                 sent: function() {
                     if (1 & k[0])
                         throw k[1];
                     return k[1]
                 },
                 trys: [],
                 ops: []
             };
             return r = {
                 next: c(0),
                 throw: c(1),
                 return: c(2)
             },
             "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                 return this
             }
             ),
             r
         }
           , de = {
             CompactHeaderName: "compactTicket",
             MUIDHeader: "MUID"
         }
           , nh = function(e, g, c, d) {
             return We(void 0, void 0, void 0, function() {
                 return Xe(this, function(f) {
                     switch (f.label) {
                     case 0:
                         return de.FirstName = e,
                         [4, Ec.post(window.msBuyBoxWishlistEndpoint + "?locale\x3d" + g + "\x26productId\x3d" + c + "\x26skuId\x3d" + d, null, de)];
                     case 1:
                         return [2, f.sent()]
                     }
                 })
             })
         }
           , oh = function(e, g, c) {
             return We(void 0, void 0, void 0, function() {
                 return Xe(this, function(d) {
                     switch (d.label) {
                     case 0:
                         return [4, Ec.get(window.msBuyBoxWishlistEndpoint + "?productId\x3d" + g + "\x26skuList\x3d" + c + "\x26locale\x3d" + e, de)];
                     case 1:
                         return [2, d.sent()]
                     }
                 })
             })
         }
           , ph = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }();
         const fe = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return ph(g, e),
             g.prototype.render = function() {
                 var c = ["modal-dialog"]
                   , d = ["modal fade"];
                 return this.props.size && c.push("modal-" + this.props.size),
                 this.props.type && c.push("modal-dialog-" + this.props.type),
                 this.props.scrollableclass && c.push(this.props.scrollableclass),
                 this.props.modalIdentifierClass && d.push(this.props.modalIdentifierClass),
                 n().createElement("div", {
                     "data-mount": "modal",
                     className: d.join(" "),
                     id: this.props.id,
                     tabIndex: -1,
                     role: "dialog",
                     "aria-labelledby": this.props.ariaLabelledbyId ? this.props.ariaLabelledbyId : "",
                     "aria-hidden": "true"
                 }, n().createElement("div", {
                     className: c.join(" "),
                     role: "document"
                 }, n().createElement("div", {
                     className: "modal-content"
                 }, this.props.children)))
             }
             ,
             g
         }(n().Component);
         var qh = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }();
         const rh = function(e) {
             function g(c) {
                 return e.call(this, c) || this
             }
             return qh(g, e),
             g.prototype.render = function() {
                 var c = this;
                 return n().createElement(Xa.Consumer, null, function(d) {
                     d = d.buyboxStaticStrings;
                     return n().createElement(fe, {
                         id: "wishlist-modal",
                         ariaLabelledbyId: "wishlistModalLabel"
                     }, n().createElement("div", {
                         className: "modal-header"
                     }, n().createElement("h2", {
                         className: "modal-title h6",
                         id: "wishlistModalLabel",
                         "data-automation-test-id": "buy-box-wishlist-modal-title"
                     }, (0,
                     ta.zH)(d, "WISH_LIST_ADDED_MESSAGE", "This was added to your wishlist.")), n().createElement("button", {
                         type: "button",
                         className: "close",
                         "data-dismiss": "modal",
                         "aria-label": (0,
                         ta.zH)(d, "CLOSE_DIALOG_WINDOW", "Close dialog window"),
                         title: (0,
                         ta.zH)(d, "CLOSE", "Close"),
                         "data-automation-test-id": "buy-box-wishlist-modal-close-button"
                     })), n().createElement("div", {
                         className: "modal-body"
                     }, n().createElement("p", {
                         "data-automation-test-id": "buy-box-wishlist-modal-body"
                     }, (0,
                     ta.oW)((0,
                     ta.zH)(d, "WISH_LIST_SHARING_MESSAGE", "You added {0} to your wish list. You can share this list with others."), [c.props.productName]))), n().createElement("div", {
                         className: "modal-footer"
                     }, n().createElement("button", {
                         type: "button",
                         className: "btn btn-secondary mr-2",
                         "data-dismiss": "modal",
                         "data-automation-test-id": "buy-box-wishlist-modal-footer-button"
                     }, (0,
                     ta.zH)(d, "CONTINUE_SHOPPING", "Continue shopping")), n().createElement("a", {
                         href: "https://www.microsoft.com/" + c.props.locale + "/store/wishlist",
                         className: "btn btn-primary",
                         "data-automation-test-id": "buy-box-wishlist-modal-footer-link"
                     }, (0,
                     ta.zH)(d, "VIEW_WISH_LIST", "View wish list"))))
                 })
             }
             ,
             g
         }(n().Component);
         var Ye = function() {
             return Ye = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             Ye.apply(this, arguments)
         }
           , zd = function(e) {
             return {
                 type: "SET_SELECTED_SKU",
                 payload: e,
                 error: !1
             }
         }
           , Pb = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , $c = function(e, g, c, d) {
             return new (c || (c = Promise))(function(f, k) {
                 function r(y) {
                     try {
                         E(d.next(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function q(y) {
                     try {
                         E(d.throw(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function E(y) {
                     var p;
                     y.done ? f(y.value) : (p = y.value,
                     p instanceof c ? p : new c(function(T) {
                         T(p)
                     }
                     )).then(r, q)
                 }
                 E((d = d.apply(e, g || [])).next())
             }
             )
         }
           , ad = function(e, g) {
             function c(E) {
                 return function(y) {
                     return function(p) {
                         if (d)
                             throw new TypeError("Generator is already executing.");
                         for (; q; )
                             try {
                                 if (d = 1,
                                 f && (k = 2 & p[0] ? f.return : p[0] ? f.throw || ((k = f.return) && k.call(f),
                                 0) : f.next) && !(k = k.call(f, p[1])).done)
                                     return k;
                                 switch (f = 0,
                                 k && (p = [2 & p[0], k.value]),
                                 p[0]) {
                                 case 0:
                                 case 1:
                                     k = p;
                                     break;
                                 case 4:
                                     return q.label++,
                                     {
                                         value: p[1],
                                         done: !1
                                     };
                                 case 5:
                                     q.label++;
                                     f = p[1];
                                     p = [0];
                                     continue;
                                 case 7:
                                     p = q.ops.pop();
                                     q.trys.pop();
                                     continue;
                                 default:
                                     if (!(k = q.trys,
                                     (k = 0 < k.length && k[k.length - 1]) || 6 !== p[0] && 2 !== p[0])) {
                                         q = 0;
                                         continue
                                     }
                                     if (3 === p[0] && (!k || p[1] > k[0] && p[1] < k[3]))
                                         q.label = p[1];
                                     else if (6 === p[0] && q.label < k[1])
                                         q.label = k[1],
                                         k = p;
                                     else if (k && q.label < k[2])
                                         q.label = k[2],
                                         q.ops.push(p);
                                     else {
                                         k[2] && q.ops.pop();
                                         q.trys.pop();
                                         continue
                                     }
                                 }
                                 p = g.call(e, q)
                             } catch (T) {
                                 p = [6, T],
                                 f = 0
                             } finally {
                                 d = k = 0
                             }
                         if (5 & p[0])
                             throw p[1];
                         return {
                             value: p[0] ? p[1] : void 0,
                             done: !0
                         }
                     }([E, y])
                 }
             }
             var d, f, k, r, q = {
                 label: 0,
                 sent: function() {
                     if (1 & k[0])
                         throw k[1];
                     return k[1]
                 },
                 trys: [],
                 ops: []
             };
             return r = {
                 next: c(0),
                 throw: c(1),
                 return: c(2)
             },
             "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                 return this
             }
             ),
             r
         }
           , sh = function(e) {
             function g(c) {
                 var d = e.call(this, c) || this;
                 return d.isUserSignedIn = function() {
                     return $c(d, void 0, void 0, function() {
                         var f, k;
                         return ad(this, function(r) {
                             switch (r.label) {
                             case 0:
                                 return r.trys.push([0, 3, , 4]),
                                 [4, Tb.isUserSignedIn()];
                             case 1:
                                 return f = r.sent(),
                                 [4, Tb.getUserName()];
                             case 2:
                                 return k = r.sent(),
                                 this.setState({
                                     isSignedIn: f,
                                     firstName: k
                                 }),
                                 [3, 4];
                             case 3:
                                 return r.sent(),
                                 this.createMutationObserver(),
                                 [3, 4];
                             case 4:
                                 return [2]
                             }
                         })
                     })
                 }
                 ,
                 d.mutationObserverCallback = function() {
                     d.checkDeferredAddToWishlist()
                 }
                 ,
                 d.createMutationObserver = function() {
                     var f = document.querySelector("#meControl");
                     !d.mutationObserver && f && (d.mutationObserver = new MutationObserver(d.mutationObserverCallback),
                     d.mutationObserver.observe(f, {
                         attributes: !1,
                         childList: !0,
                         subtree: !0
                     }))
                 }
                 ,
                 d.initAuthWorkflow = function() {
                     var f = document.querySelector("a#mectrl_main_trigger");
                     f && (f = f.getAttribute("href"),
                     -1 !== f.indexOf("ru") && (window.location.href = f))
                 }
                 ,
                 d.deferAddToWishlistAction = function() {
                     "undefined" != typeof window && window.sessionStorage.setItem("addToWishlist", d.props.selectedSku.skuId)
                 }
                 ,
                 d.clearAddToWishlistAction = function() {
                     "undefined" != typeof window && window.sessionStorage.removeItem("addToWishlist")
                 }
                 ,
                 d.checkDeferredAddToWishlist = function() {
                     return $c(d, void 0, void 0, function() {
                         var f;
                         return ad(this, function(k) {
                             switch (k.label) {
                             case 0:
                                 return [4, this.getDeferredAddSku()];
                             case 1:
                                 return (f = k.sent()) ? [4, this.processDeferredAdd(f)] : [3, 3];
                             case 2:
                                 k.sent(),
                                 k.label = 3;
                             case 3:
                                 return [2]
                             }
                         })
                     })
                 }
                 ,
                 d.getDeferredAddSku = function() {
                     return $c(d, void 0, void 0, function() {
                         return ad(this, function(f) {
                             switch (f.label) {
                             case 0:
                                 return [4, this.isUserSignedIn()];
                             case 1:
                                 return f.sent(),
                                 "undefined" != typeof window && this.state.isSignedIn ? [2, window.sessionStorage.getItem("addToWishlist")] : [2, null]
                             }
                         })
                     })
                 }
                 ,
                 d.processDeferredAdd = function(f) {
                     return $c(d, void 0, void 0, function() {
                         return ad(this, function(k) {
                             switch (k.label) {
                             case 0:
                                 return hc.dispatch(zd(f)),
                                 [4, this.onWishlistClick()];
                             case 1:
                                 return k.sent(),
                                 this.clearAddToWishlistAction(),
                                 this.mutationObserver && this.mutationObserver.disconnect(),
                                 [2]
                             }
                         })
                     })
                 }
                 ,
                 d.onWishlistClick = function() {
                     return $c(d, void 0, void 0, function() {
                         var f = this;
                         return ad(this, function(k) {
                             switch (k.label) {
                             case 0:
                                 return [4, this.isUserSignedIn()];
                             case 1:
                                 return k.sent(),
                                 this.state.isSignedIn ? this.state.isAdded || this.props.addToWishlist(this.state.firstName, this.props.locale, this.props.productId, this.props.selectedSku.skuId).then(function(r) {
                                     return (200 === r.status && r.data.isSuccess || 204 === r.status) && f.setState({
                                         isAdded: !0
                                     })
                                 }) : (this.deferAddToWishlistAction(),
                                 this.initAuthWorkflow()),
                                 [2]
                             }
                         })
                     })
                 }
                 ,
                 d.taggingInfo = function(f) {
                     return ib({
                         cN: "Wish List",
                         ecn: "WishList",
                         bhvr: "83",
                         hn: d.props.title,
                         ehn: d.props.title,
                         cT: "Link",
                         pa: "Body",
                         compnm: "Buy Box"
                     })
                 }
                 ,
                 d.state = {
                     isAdded: !1,
                     isSignedIn: !1,
                     firstName: void 0
                 },
                 d.mutationObserver = null,
                 d
             }
             return Pb(g, e),
             g.prototype.componentDidMount = function() {
                 return $c(this, void 0, void 0, function() {
                     var c;
                     return ad(this, function(d) {
                         switch (d.label) {
                         case 0:
                             return [4, this.getDeferredAddSku()];
                         case 1:
                             return (c = d.sent()) ? [4, this.processDeferredAdd(c)] : [3, 3];
                         case 2:
                             return d.sent(),
                             [3, 4];
                         case 3:
                             this.selectedSkuIsOnWishList(),
                             d.label = 4;
                         case 4:
                             return [2]
                         }
                     })
                 })
             }
             ,
             g.prototype.selectedSkuIsOnWishList = function() {
                 var c = this;
                 this.state.isSignedIn && this.props.selectedSku && this.props.selectedSku.skuId && this.props.isOnWishlist(this.props.locale, this.props.productId, this.props.selectedSku.skuId).then(function(d) {
                     var f = !1;
                     d.data.skuList && 0 < d.data.skuList.length && d.data.skuList.forEach(function(k) {
                         k.inWishList && k.sku === c.props.selectedSku.skuId && (f = !0)
                     });
                     c.setState({
                         isAdded: f
                     })
                 })
             }
             ,
             g.prototype.componentDidUpdate = function(c, d, f) {
                 c.selectedSku !== this.props.selectedSku && this.selectedSkuIsOnWishList()
             }
             ,
             g.prototype.render = function() {
                 var c = this;
                 if (!this.props.wishlist || this.props.wishlist.disabled)
                     return n().createElement(n().Fragment, null);
                 var d = function() {
                     return c.state.isAdded ? c.props.wishlist.actionTextSecondary : c.props.wishlist.actionText
                 }
                   , f = "action-trigger glyph-prepend " + (this.state.isAdded ? "glyph-prepend-heart-fill" : "glyph-prepend-heart");
                 return n().createElement(Xa.Consumer, null, function(k) {
                     k.buyboxStaticStrings;
                     return n().createElement("div", {
                         className: "d-inline-block mr-3"
                     }, !c.state.isAdded && n().createElement("button", {
                         className: f,
                         onClick: c.onWishlistClick,
                         "data-target": "#wishlist-modal",
                         "data-m": c.taggingInfo(d()),
                         "aria-label": d(),
                         "data-automation-test-id": "buy-box-wishlist-not-added-button"
                     }, d()), c.state.isAdded && n().createElement("a", {
                         className: f,
                         href: "https://www.microsoft.com/" + c.props.locale + "/store/wishlist",
                         "data-m": c.taggingInfo(d()),
                         "data-automation-test-id": "buy-box-wishlist-is-added-button"
                     }, d()), n().createElement(rh, {
                         productName: c.props.title,
                         locale: c.props.locale
                     }))
                 })
             }
             ,
             g
         }(n().Component);
         const th = Ka(function(e, g) {
             var c = Aa(e)
               , d = g.useProductTitle ? yb(e) : Qc(e);
             e = g.useProductTitle ? function(f) {
                 return Oa(f) ? Oa(f).wishlist : null
             }(e) : function(f) {
                 return Aa(f) ? Aa(f).wishlist : null
             }(e);
             return {
                 title: d,
                 selectedSku: c,
                 wishlist: e,
                 addToWishlist: nh,
                 isOnWishlist: oh
             }
         })(sh);
         var Ze = Ja(3630)
           , Gc = Ja(9273)
           , ge = function() {
             return ge = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             ge.apply(this, arguments)
         }
           , $e = function(e, g, c, d) {
             return new (c || (c = Promise))(function(f, k) {
                 function r(y) {
                     try {
                         E(d.next(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function q(y) {
                     try {
                         E(d.throw(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function E(y) {
                     var p;
                     y.done ? f(y.value) : (p = y.value,
                     p instanceof c ? p : new c(function(T) {
                         T(p)
                     }
                     )).then(r, q)
                 }
                 E((d = d.apply(e, g || [])).next())
             }
             )
         }
           , af = function(e, g) {
             function c(E) {
                 return function(y) {
                     return function(p) {
                         if (d)
                             throw new TypeError("Generator is already executing.");
                         for (; q; )
                             try {
                                 if (d = 1,
                                 f && (k = 2 & p[0] ? f.return : p[0] ? f.throw || ((k = f.return) && k.call(f),
                                 0) : f.next) && !(k = k.call(f, p[1])).done)
                                     return k;
                                 switch (f = 0,
                                 k && (p = [2 & p[0], k.value]),
                                 p[0]) {
                                 case 0:
                                 case 1:
                                     k = p;
                                     break;
                                 case 4:
                                     return q.label++,
                                     {
                                         value: p[1],
                                         done: !1
                                     };
                                 case 5:
                                     q.label++;
                                     f = p[1];
                                     p = [0];
                                     continue;
                                 case 7:
                                     p = q.ops.pop();
                                     q.trys.pop();
                                     continue;
                                 default:
                                     if (!(k = q.trys,
                                     (k = 0 < k.length && k[k.length - 1]) || 6 !== p[0] && 2 !== p[0])) {
                                         q = 0;
                                         continue
                                     }
                                     if (3 === p[0] && (!k || p[1] > k[0] && p[1] < k[3]))
                                         q.label = p[1];
                                     else if (6 === p[0] && q.label < k[1])
                                         q.label = k[1],
                                         k = p;
                                     else if (k && q.label < k[2])
                                         q.label = k[2],
                                         q.ops.push(p);
                                     else {
                                         k[2] && q.ops.pop();
                                         q.trys.pop();
                                         continue
                                     }
                                 }
                                 p = g.call(e, q)
                             } catch (T) {
                                 p = [6, T],
                                 f = 0
                             } finally {
                                 d = k = 0
                             }
                         if (5 & p[0])
                             throw p[1];
                         return {
                             value: p[0] ? p[1] : void 0,
                             done: !0
                         }
                     }([E, y])
                 }
             }
             var d, f, k, r, q = {
                 label: 0,
                 sent: function() {
                     if (1 & k[0])
                         throw k[1];
                     return k[1]
                 },
                 trys: [],
                 ops: []
             };
             return r = {
                 next: c(0),
                 throw: c(1),
                 return: c(2)
             },
             "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                 return this
             }
             ),
             r
         }
           , Ad = function(e, g) {
             return dg(e, g).searchParams.toString()
         }
           , dg = function(e, g) {
             var c = new URL(e);
             return g && c.searchParams && g.forEach(function(d) {
                 c.searchParams.has(d) && c.searchParams.delete(d)
             }),
             c
         }
           , nc = function(e, g) {
             var c = new URLSearchParams(window.location.search)
               , d = null
               , f = function(r, q) {
                 return r.forEach(function(E, y) {
                     "devicefamily" != y.toLowerCase() || (q = E)
                 }),
                 q
             }(c, g.deviceFamily)
               , k = function(r) {
                 var q = "Pc";
                 return null != r && (r = r.toLowerCase(),
                 q = Re.has(r) ? Re.get(r) : "Unknown"),
                 q
             }(f);
             return c.has("pcid") && (d = Array(c.getAll("pcid").join())),
             g.deviceFamilyInclude && (e.clientContext.deviceFamily = f,
             e.clientContext.deviceType = k),
             g.promoCodesInclude && (e.promoCodes = d),
             c.has("cid") && (e.itemsToAdd.bundles && 0 < e.itemsToAdd.bundles.length ? (e.itemsToAdd.bundles[0].heroProduct.campaignId = c.get("cid"),
             e.itemsToAdd.bundles[0].subItems.forEach(function(r, q) {
                 r.campaignId = c.get("cid")
             })) : e.itemsToAdd.items[0].campaignId = c.get("cid")),
             c.has("ocid") && (e.itemsToAdd.bundles && 0 < e.itemsToAdd.bundles.length ? (e.itemsToAdd.bundles[0].heroProduct.optionalCampaignId = c.get("ocid"),
             e.itemsToAdd.bundles[0].subItems.forEach(function(r, q) {
                 r.optionalCampaignId = c.get("ocid")
             })) : e.itemsToAdd.items[0].optionalCampaignId = c.get("ocid")),
             e
         }
           , bf = function(e, g) {
             return g && 0 < g.length && g.forEach(function(c) {
                 c.heroProduct && e.items.push(c.heroProduct);
                 c.heroProduct = null;
                 c.subItems && (c.subItems.forEach(function(d) {
                     e.items.push(d)
                 }),
                 c.subItems = [])
             }),
             e.bundles = [],
             e
         }
           , he = {
             CompactHeaderName: "Authorization",
             CompactHeaderPrefix: "WLID1.0\x3dt\x3d",
             AadHeaderPrefix: "Bearer ",
             MUIDHeader: "x-authorization-muid",
             xAemLoadTestHeader: "x-aem-load-test",
             riskIdAppend: !0,
             xMSVectorId: "",
             cv: "",
             params: {
                 appId: "AemWeb"
             },
             UcsSidHeader: "x-ms-ucs-sid",
             headers: {}
         }
           , cf = function(e, g) {
             var c, d = {
                 productId: null === (c = e.productId) || void 0 === c ? void 0 : c.toUpperCase(),
                 skuId: e.skuId,
                 availabilityId: e.availabilityId,
                 quantity: 1
             };
             return g && null !== e && null !== e.termId && (d.termId = e.termId),
             e.slotIdInclude && (d.slotid = "0"),
             d
         }
           , df = function(e, g, c, d, f, k, r, q) {
             e = {
                 locale: e,
                 productId: g,
                 skuId: c,
                 availabilityId: d,
                 slotIdInclude: !1,
                 deviceFamilyInclude: f,
                 promoCodesInclude: k,
                 bundlesInclude: !1
             };
             return r && (e.bundles = r,
             e.slotIdInclude = !0,
             e.bundlesInclude = !0),
             f && (e.deviceFamily = q),
             e
         }
           , uh = function(e, g, c, d, f, k, r) {
             return $e(void 0, void 0, void 0, function() {
                 var q, E, y, p, T, ja, da, Z, ma, wa, Ia, ya, xa, Ua, Ya, Ga, Za;
                 return af(this, function(ub) {
                     switch (ub.label) {
                     case 0:
                         q = "";
                         E = new Date;
                         y = !1;
                         var fb = e.locale, mb = fb.split("-")[1].toUpperCase(), Vb = "cart-" + mb, nb, Cb = [];
                         if ((nb = e.bundles) && 0 !== nb.length || e.items && 0 !== e.items.length) {
                             if (e.items)
                                 for (var Wb = 0; Wb < e.items.length; Wb++)
                                     Cb.push(e.items[Wb])
                         } else
                             Cb.push(e.itemsData);
                         Cb = {
                             items: Cb
                         };
                         nb = (e.bundlesInclude && (Cb.bundles = nb),
                         k && (Cb = bf(Cb, nb)),
                         Cb);
                         fb = {
                             locale: fb,
                             market: mb,
                             catalogClientType: "storeWeb",
                             friendlyName: Vb,
                             clientContext: {
                                 client: "UniversalWebStore.Cart"
                             },
                             itemsToAdd: nb
                         };
                         p = (k && (fb.billingAccountId = $d.getCookie("BillingAcctId")),
                         nc(fb, e));
                         T = {
                             code: null,
                             reason: null,
                             status: 400,
                             lineItems: [],
                             bundleLineItems: [],
                             cvValue: "",
                             type: null
                         };
                         ja = {
                             pageUrl: window.location.href,
                             envStr: g,
                             vectorId: c,
                             cv: d,
                             enableUcsExp: f,
                             success: !0
                         };
                         ub.label = 1;
                     case 1:
                         return ub.trys.push([1, 3, 4, 5]),
                         da = void 0,
                         he.xMSVectorId = c,
                         he.cv = d,
                         he.headers["X-MS-Client-Type"] = "UniversalWebStore.Cart",
                         he.headers["X-MS-Market"] = p.market,
                         "true" === (new URLSearchParams(window.location.search)).get("enableucs") && (p.flights = ["sc_ucs"]),
                         r && (0,
                         Ze.OW)(r),
                         "prod" === g ? q = "https://cart.production.store-web.dynamics.com/v1.0/cart/loadCart" : "ppe" === g ? q = "https://cart.ppe.store-web.dynamics.com/v1.0/cart/loadCart" : "perf" === g ? q = "https://cart.perf.store-web.dynamics.com/v1.0/cart/loadCart?cartPERF\x3dtrue" : "staging" === g && (q = "https://cart.staging.store-web.dynamics.com/v1.0/cart/loadCart"),
                         [4, Ec.put(q, p, he)];
                     case 2:
                         return da = ub.sent(),
                         T.status = da.status,
                         da && da.config && da.config.headers && da.config.headers["MS-CV"] && (T.cvValue = da.config.headers["MS-CV"]),
                         Z = da.data,
                         ma = Z.events,
                         Z.cart && (T.lineItems = Z.cart.lineItems,
                         T.bundleLineItems = null !== (Za = Z.cart.bundleLineItems) && void 0 !== Za ? Za : []),
                         200 === T.status && ma && (wa = ma.cart,
                         Ia = ma.lineItems,
                         ya = wa || Ia,
                         T.code = ya[0].code,
                         T.reason = ya[0].data.reason,
                         T.type = ya[0].type,
                         ja.failureCode = T.code,
                         ja.failureReason = T.reason,
                         ja.type = T.type,
                         ja.success = !1),
                         da && da.headers && (xa = da.headers["x-ms-ucs-sid"]) && (document.cookie = "ucs_sid\x3d" + xa + "; path\x3d/; SameSite\x3dnone; Secure"),
                         [3, 5];
                     case 3:
                         return Ua = ub.sent(),
                         Ya = "Failed to add items to cart.",
                         Ua.message && (Ya += " " + Ua.message),
                         ja.errorMsg = Ya,
                         ja.success = !1,
                         Ua.response ? T.status = Ua.response.status : (y = !0,
                         Gc.M.error(Error("[AddToCart]-" + Ya), ja)),
                         [3, 5];
                     case 4:
                         return y || (Ga = (new Date).getTime() - E.getTime(),
                         Gc.M.dependency("[AddToCart]", T.status, "[AddToCart]-PUT " + q, q, Ga, ja)),
                         [7];
                     case 5:
                         return [2, T]
                     }
                 })
             })
         }
           , ie = function(e, g, c, d) {
             return $e(void 0, void 0, void 0, function() {
                 var f, k, r, q, E;
                 return af(this, function(y) {
                     switch (y.label) {
                     case 0:
                         "PUR" === g && "QuantityLimitExceeded" === c && (g = "FailedToAddItem",
                         c = "MaxLineItemQuantityExceeded"),
                         f = "https://cem.services.microsoft.com/v1/$locale/errors/$code-$reason/Storefront".replace("$locale", e).replace("$code", g).replace("$reason", c),
                         k = f + "?_\x3d" + d,
                         y.label = 1;
                     case 1:
                         return y.trys.push([1, 3, , 4]),
                         [4, Ec.get(k)];
                     case 2:
                         return r = y.sent(),
                         q = r.status,
                         E = r.data,
                         200 === q ? [2, E.ShortDescription] : [2, null];
                     case 3:
                         return y.sent(),
                         [2, null];
                     case 4:
                         return [2]
                     }
                 })
             })
         }
           , ef = function(e, g) {
             return e && window.location.href.includes(g) && "true" === e.get(g)
         }
           , cd = function(e, g) {
             if (!e)
                 return gf(g);
             var c = [];
             if (!g || 0 == g.length)
                 return c;
             var d = function(k, r) {
                 c.push(r ? n().createElement("span", {
                     className: "text-break-keep-all"
                 }, k) : k)
             }
               , f = function(k, r, q) {
                 var E = q ? "\x3c/nolinebreak\x3e" : "\x3cnolinebreak\x3e"
                   , y = k.indexOf(E, r);
                 0 <= y ? (y != r && d(k.substring(r, y), q),
                 f(k, y + E.length, !q)) : r < k.length && d(k.substring(r), q)
             };
             return f(g, 0, !1),
             c
         }
           , ff = function(e, g) {
             return e && g && 0 != g.length ? g.split("\x26lt;nolinebreak\x26gt;").join('\x3cspan class\x3d"text-break-keep-all"\x3e').split("\x3cnolinebreak\x3e").join('\x3cspan class\x3d"text-break-keep-all"\x3e').split("\x26lt;/nolinebreak\x26gt;").join("\x3c/span\x3e").split("\x3c/nolinebreak\x3e").join("\x3c/span\x3e") : gf(g)
         }
           , gf = function(e) {
             return e && 0 != e.length ? e.split("\x3cnolinebreak\x3e").join("").split("\x3c/nolinebreak\x3e").join("").split("\x26lt;nolinebreak\x26gt;").join("").split("\x26lt;/nolinebreak\x26gt;").join("") : e
         }
           , vh = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , wh = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return vh(g, e),
             g.prototype.render = function() {
                 var c = cd(this.props.noLineBreaks, this.props.text);
                 return this.props.noTag ? c : n().createElement(Rc, {
                     isHidden: !this.props.text
                 }, n().createElement("h1", {
                     className: "h2",
                     "data-automation-test-id": "buy-box-product-title"
                 }, c))
             }
             ,
             g
         }(n().Component);
         const hf = Ka(function(e, g) {
             return {
                 text: g.useProductTitle ? yb(e) : Qc(e)
             }
         })(wh);
         var zh = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Bh = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return zh(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.uri
                   , f = c.alt
                   , k = c.pageTheme;
                 c = c.lazyLoad;
                 var r = "?";
                 d && -1 !== d.indexOf("?") && (r = "\x26");
                 k = !k || -1 === k.indexOf("main-xbox-dark") && -1 === k.indexOf("main-dark") ? "%23FFFFFFFF" : "%23FF2F2F2F";
                 return (0,
                 jc.kn)(d) ? (k = (0,
                 jc.de)(k),
                 c ? n().createElement("img", {
                     src: "https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif",
                     "data-src": d + r + "qlt\x3d90\x26wid\x3d1253\x26hei\x3d705\x26extendN\x3d0.12,0.12,0.12,0.12\x26bgc\x3d" + k + "\x26fmt\x3djpg",
                     className: "img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5",
                     alt: f,
                     key: f
                 }) : n().createElement("img", {
                     src: d + r + "qlt\x3d90\x26wid\x3d1253\x26hei\x3d705\x26extendN\x3d0.12,0.12,0.12,0.12\x26bgc\x3d" + k + "\x26fmt\x3djpg",
                     className: "img-fluid mb-3 mb-lg-5",
                     alt: f
                 })) : c ? n().createElement("img", {
                     src: "https://www.microsoft.com/onerfstatics/marketingsites-wcus-prod/_h/9be151e5/coreui.statics/images/1x1clear.gif",
                     "data-src": d + r + "q\x3d90\x26m\x3d6\x26h\x3d705\x26w\x3d1253\x26b\x3d" + k + "\x26f\x3djpg\x26o\x3df\x26p\x3d140\x26aim\x3dtrue",
                     className: "img-fluid lazy lazyload blur-up lazypreload mb-3 mb-lg-5",
                     alt: f,
                     key: f
                 }) : n().createElement("img", {
                     src: d + r + "q\x3d90\x26m\x3d6\x26h\x3d705\x26w\x3d1253\x26b\x3d" + k + "\x26f\x3djpg\x26o\x3df\x26p\x3d140\x26aim\x3dtrue",
                     className: "img-fluid mb-3 mb-lg-5",
                     alt: f
                 })
             }
             ,
             g
         }(n().Component)
           , bc = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Fc = function() {
             return Fc = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             Fc.apply(this, arguments)
         };
         const ee = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return bc(g, e),
             g.prototype.render = function() {
                 var c = this;
                 return n().createElement(Xa.Consumer, null, function(d) {
                     d = d.buyboxStaticStrings;
                     return n().createElement(n().Fragment, null, n().createElement("div", {
                         className: "modal-header",
                         tabIndex: -1
                     }, n().createElement("h2", {
                         className: "modal-title h6",
                         id: "buy-box-product-image-gallery-modal-label",
                         "data-automation-test-id": "buy-box-product-image-gallery-modal-title"
                     }, c.props.title), n().createElement("button", {
                         type: "button",
                         className: "close",
                         "aria-label": (0,
                         ta.zH)(d, "CLOSE_GALLERY_WINDOW", "Close gallery window"),
                         title: (0,
                         ta.zH)(d, "CLOSE", "Close"),
                         "data-dismiss": "modal",
                         "data-automation-test-id": "buy-box-product-image-gallery-modal-button"
                     })), n().createElement("div", {
                         className: "modal-body pt-1"
                     }, n().createElement("p", {
                         className: "mb-3 text-left",
                         tabIndex: 0
                     }, c.props.images.length + " " + (0,
                     ta.zH)(d, "IMAGES", "images"), " "), c.props.images.map(function(f, k) {
                         return n().createElement(Bh, Fc({}, f, {
                             key: k,
                             pageTheme: c.props.pageTheme,
                             lazyLoad: !0
                         }))
                     })))
                 })
             }
             ,
             g
         }(n().Component);
         var jf = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , dc = function() {
             return dc = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             dc.apply(this, arguments)
         };
         const fg = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return jf(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.text
                   , f = c.isButtonHidden
                   , k = c.actionUrl
                   , r = c.glyph
                   , q = c.additionalAttributes;
                 c = "action-trigger " + (r ? "glyph-prepend glyph-prepend-" + r : "") + " " + (c.additionalClasses || "") + " " + (c.disabled ? "inactive" : "");
                 r = JSON.stringify(this.props.jsllTag);
                 return k ? n().createElement("a", dc({
                     className: c,
                     href: this.props.actionUrl
                 }, this.props.additionalAttributes, {
                     "data-m": r,
                     "data-automation-test-id": "buy-box-action-trigger-uri"
                 }), d) : n().createElement("button", dc({
                     className: c,
                     onClick: this.props.onClick
                 }, q, {
                     "data-m": r,
                     "data-automation-test-id": "buy-box-action-trigger-button",
                     style: f ? {
                         display: "none"
                     } : {}
                 }), d)
             }
             ,
             g
         }(ia.PureComponent);
         var gg = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Dh = function(e) {
             function g(c) {
                 var d = e.call(this, c) || this;
                 return d._getTaggingInfo = function(f) {
                     return {
                         cN: f,
                         ecn: "Open Gallery",
                         bhvr: "0",
                         hn: d.props.title,
                         ehn: d.props.title,
                         pid: d.props.productId,
                         sku: d.props.selectedSku ? d.props.selectedSku.skuId : "",
                         cT: "Link",
                         pa: "Body",
                         compnm: "Buy Box"
                     }
                 }
                 ,
                 d
             }
             return gg(g, e),
             g.prototype.render = function() {
                 var c = this;
                 return n().createElement(Xa.Consumer, null, function(d) {
                     d = d.buyboxStaticStrings;
                     return n().createElement(n().Fragment, null, n().createElement(fe, {
                         id: "buy-box-product-image-gallery",
                         ariaLabelledbyId: "buy-box-product-image-gallery-modal-label",
                         type: "scrollable",
                         size: "xl"
                     }, n().createElement(ee, {
                         title: c.props.title,
                         images: c.props.images,
                         pageTheme: c.props.pageTheme
                     })), n().createElement(fg, {
                         text: (0,
                         ta.zH)(d, "OPEN_GALLERY", "Open gallery"),
                         disabled: !1,
                         isButtonHidden: 2 > c.props.images.length,
                         glyph: "photo-collection",
                         additionalClasses: "my-2",
                         additionalAttributes: {
                             "data-target": "#buy-box-product-image-gallery"
                         },
                         jsllTag: c._getTaggingInfo((0,
                         ta.zH)(d, "OPEN_GALLERY", "Open gallery"))
                     }))
                 })
             }
             ,
             g
         }(n().Component);
         const hg = Ka(function(e, g) {
             var c = Aa(e) ? Aa(e).galleryImages : [];
             return {
                 images: c && 0 < c.length ? c : Oa(e) ? Oa(e).galleryImages : [],
                 title: g.useProductTitle ? yb(e) : Qc(e),
                 productId: tc(e),
                 selectedSku: Aa(e)
             }
         })(Dh);
         var le = function() {
             return le = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             le.apply(this, arguments)
         }
           , Jc = function(e) {
             if (!e)
                 return null;
             e = e.split(",").map(function(g) {
                 return g.split("\x3d")
             }).filter(function(g) {
                 return 1 < g.length && g[0].trim() && g[1].trim()
             }).reduce(function(g, c) {
                 var d, f;
                 var k = 2;
                 if (f = "function" == typeof Symbol && c[Symbol.iterator]) {
                     var r;
                     c = f.call(c);
                     var q = [];
                     try {
                         for (; (void 0 === k || 0 < k--) && !(r = c.next()).done; )
                             q.push(r.value)
                     } catch (y) {
                         var E = {
                             error: y
                         }
                     } finally {
                         try {
                             r && !r.done && (f = c.return) && f.call(c)
                         } finally {
                             if (E)
                                 throw E.error;
                         }
                     }
                     f = q
                 } else
                     f = c;
                 k = f[0];
                 f = f[1];
                 return le(le({}, g), ((d = {})[k.trim()] = f.trim(),
                 d))
             }, {});
             return {
                 countryCode: e.country_code || "",
                 regionCode: e.region_code || "",
                 zip: e.zip || ""
             }
         }
           , Gb = function(e) {
             return e ? e.includes("-") ? e.split("-")[0] : e.includes("+") ? e.split("+")[0] : e : ""
         }
           , hh = function(e, g, c) {
             return null == e ? void 0 : e.map(function(d, f) {
                 return {
                     availabilityId: d.availabilityId,
                     skuId: d.skuId,
                     isDeliveryRequired: !0,
                     productId: g,
                     quantity: 1,
                     lineItemId: "item" + f,
                     catalogId: c ? 4 : 1
                 }
             })
         }
           , kg = function(e, g, c, d) {
             return new (c || (c = Promise))(function(f, k) {
                 function r(y) {
                     try {
                         E(d.next(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function q(y) {
                     try {
                         E(d.throw(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function E(y) {
                     var p;
                     y.done ? f(y.value) : (p = y.value,
                     p instanceof c ? p : new c(function(T) {
                         T(p)
                     }
                     )).then(r, q)
                 }
                 E((d = d.apply(e, g || [])).next())
             }
             )
         }
           , lg = function(e, g) {
             function c(E) {
                 return function(y) {
                     return function(p) {
                         if (d)
                             throw new TypeError("Generator is already executing.");
                         for (; q; )
                             try {
                                 if (d = 1,
                                 f && (k = 2 & p[0] ? f.return : p[0] ? f.throw || ((k = f.return) && k.call(f),
                                 0) : f.next) && !(k = k.call(f, p[1])).done)
                                     return k;
                                 switch (f = 0,
                                 k && (p = [2 & p[0], k.value]),
                                 p[0]) {
                                 case 0:
                                 case 1:
                                     k = p;
                                     break;
                                 case 4:
                                     return q.label++,
                                     {
                                         value: p[1],
                                         done: !1
                                     };
                                 case 5:
                                     q.label++;
                                     f = p[1];
                                     p = [0];
                                     continue;
                                 case 7:
                                     p = q.ops.pop();
                                     q.trys.pop();
                                     continue;
                                 default:
                                     if (!(k = q.trys,
                                     (k = 0 < k.length && k[k.length - 1]) || 6 !== p[0] && 2 !== p[0])) {
                                         q = 0;
                                         continue
                                     }
                                     if (3 === p[0] && (!k || p[1] > k[0] && p[1] < k[3]))
                                         q.label = p[1];
                                     else if (6 === p[0] && q.label < k[1])
                                         q.label = k[1],
                                         k = p;
                                     else if (k && q.label < k[2])
                                         q.label = k[2],
                                         q.ops.push(p);
                                     else {
                                         k[2] && q.ops.pop();
                                         q.trys.pop();
                                         continue
                                     }
                                 }
                                 p = g.call(e, q)
                             } catch (T) {
                                 p = [6, T],
                                 f = 0
                             } finally {
                                 d = k = 0
                             }
                         if (5 & p[0])
                             throw p[1];
                         return {
                             value: p[0] ? p[1] : void 0,
                             done: !0
                         }
                     }([E, y])
                 }
             }
             var d, f, k, r, q = {
                 label: 0,
                 sent: function() {
                     if (1 & k[0])
                         throw k[1];
                     return k[1]
                 },
                 trys: [],
                 ops: []
             };
             return r = {
                 next: c(0),
                 throw: c(1),
                 return: c(2)
             },
             "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                 return this
             }
             ),
             r
         }
           , Kc = function(e, g, c, d, f, k) {
             return kg(void 0, void 0, void 0, function() {
                 var r, q, E, y, p, T, ja;
                 return lg(this, function(da) {
                     switch (da.label) {
                     case 0:
                         return da = f ? f.toLowerCase().replace(/.*-/, "").toLowerCase() : void 0,
                         r = da,
                         q = "" + e + r + "?mode\x3dcontinueOnError",
                         k ? E = Cd(g, c.skus, c.id, r) : (Z = c.skuInfo,
                         y = Object.values(Z),
                         E = Cd(g, y, c.productId, r, null === (ja = c.action) || void 0 === ja ? void 0 : ja.action, c.type)),
                         T = (new Date).getTime(),
                         E && e ? [4, zi(q, r, E).then(function(ma) {
                             ma = bd(ma, g, d, f);
                             var wa = (new Date).getTime() - T;
                             Gc.M.event("Dcc Service call ", {
                                 url: q,
                                 timeTaken: wa
                             });
                             return ma
                         }).catch(function(ma) {
                             Hh(ma, {});
                             console.warn("Dcc service call failed!!!", ma)
                         })] : [3, 2];
                     case 1:
                         return p = da.sent(),
                         [3, 3];
                     case 2:
                         Hh("The Dcc request was not created. This can be due to skus out of stock or mismtach of locales", {}),
                         da.label = 3;
                     case 3:
                         return [2, p]
                     }
                     var Z
                 })
             })
         }
           , zi = function(e, g, c) {
             return kg(void 0, void 0, void 0, function() {
                 return lg(this, function(d) {
                     switch (d.label) {
                     case 0:
                         return [4, Ec.post(e, c, {
                             headers: {
                                 "Content-Type": "application/json"
                             }
                         })];
                     case 1:
                         return [2, d.sent()]
                     }
                 })
             })
         }
           , Cd = function(e, g, c, d, f, k) {
             var r, q, E;
             e = Jc(e);
             if (0 == (null == g ? void 0 : g.length) || null == e || 0 == c.length || (E = e.countryCode,
             d.toLowerCase() !== E.toLowerCase()) || !f && Gi(g) || f === Ma.OutOfStock || Lh(g) || k && k.toLowerCase() !== Ce.Devices.toLowerCase())
                 return null;
             d = "aad" === (null === (q = null === (r = null === window || void 0 === window ? void 0 : window.msauth) || void 0 === r ? void 0 : r.Type) || void 0 === q ? void 0 : q.toLowerCase());
             return {
                 deliveryGroups: [{
                     shipToInformation: {
                         countryCode: e ? e.countryCode : "",
                         postalCode: Gb(null == e ? void 0 : e.zip),
                         region: e ? e.regionCode : ""
                     },
                     deliveryGroupId: "sfwPdpDeliveryGroup",
                     lineItems: hh(g, c, d)
                 }],
                 orderingExperience: d ? "Commercial" : "Consumer"
             }
         }
           , Gi = function(e) {
             return e.every(function(g) {
                 var c;
                 return (null === (c = g.action) || void 0 === c ? void 0 : c.action) === Ma.OutOfStock
             })
         }
           , Lh = function(e) {
             return e.every(function(g) {
                 var c;
                 return !1 === (null === (c = g.inventory) || void 0 === c ? void 0 : c.inStock)
             })
         }
           , bd = function(e, g, c, d) {
             var f, k, r = Jc(g), q = {
                 "0001": c.SHIPPING_METHODTYPE_EXPRESS || c["express shipping"] || "express shipping",
                 "0002": c.SHIPPING_METHODTYPE_EXPEDITED || c["expedited shipping"] || "expedited shipping",
                 "0003": c.SHIPPING_METHODTYPE_SELECT || c["select shipping"] || "select shipping"
             }, E = {
                 withZipCode: {
                     withShippingMethod: c.WITH_ZIPCODE_WITH_SHIPPING_METHOD || c["Get it as soon as {0} to {1} when you choose {2}"] || "Get it as soon as {0} to {1} when you choose {2}",
                     withoutShippingMethod: c.WITH_ZIPCODE_WITHOUT_SHIPPING_METHOD || c["Get it as soon as {0} to {1}"] || "Get it as soon as {0} to {1}"
                 },
                 withoutZipCode: {
                     withShippingMethod: c.WITHOUT_ZIPCODE_WITH_SHIPPING_METHOD || c["Get it as soon as {0} when you choose {1}"] || "Get it as soon as {0} when you choose {1}",
                     withoutShippingMethod: c.WITHOUT_ZIPCODE_WITHOUT_SHIPPING_METHOD || c["Get it as soon as {0}"] || "Get it as soon as {0}"
                 }
             };
             e = null === (f = e.data) || void 0 === f ? void 0 : f.deliveryGroups[0];
             return {
                 messages: null === (k = null == e ? void 0 : e.lineItems) || void 0 === k ? void 0 : k.map(function(y) {
                     var p, T, ja, da = Gb(null == r ? void 0 : r.zip), Z = function(Ia) {
                         return !0 !== Ia.render || !0 !== Ia.isInventoryAvailable ? null : Ia.deliveryCosts.reduce(function(ya, xa) {
                             var Ua, Ya, Ga, Za;
                             return null == (null === (Ua = null == xa ? void 0 : xa.estimatedDeliveryDate) || void 0 === Ua ? void 0 : Ua.date) || "" == (null === (Ya = null == xa ? void 0 : xa.estimatedDeliveryDate) || void 0 === Ya ? void 0 : Ya.date) ? ya : null == (null === (Ga = null == ya ? void 0 : ya.estimatedDeliveryDate) || void 0 === Ga ? void 0 : Ga.date) || "" == (null === (Za = null == ya ? void 0 : ya.estimatedDeliveryDate) || void 0 === Za ? void 0 : Za.date) || new Date(xa.estimatedDeliveryDate.date) < new Date(ya.estimatedDeliveryDate.date) ? xa : ya
                         }, null)
                     }(y), ma = (null == Z ? void 0 : Z.deliveryMethodId) || "", wa = ma in q;
                     ma = q[ma] || "";
                     Z = (null === (p = null == Z ? void 0 : Z.estimatedDeliveryDate) || void 0 === p ? 0 : p.date) ? (new Date(Z.estimatedDeliveryDate.date)).toLocaleDateString(d, {
                         month: "long",
                         day: "numeric"
                     }) : "";
                     return T = Z ? function(Ia, ya, xa, Ua, Ya) {
                         return Ia ? ya ? Ya.withZipCode.withShippingMethod.replace("{0}", Ua).replace("{1}", Ia).replace("{2}", null != xa ? xa : "") : Ya.withZipCode.withoutShippingMethod.replace("{0}", Ua).replace("{1}", Ia) : ya ? Ya.withoutZipCode.withShippingMethod.replace("{0}", Ua).replace("{1}", null != xa ? xa : "") : Ya.withoutZipCode.withoutShippingMethod.replace("{0}", Ua)
                     }(da, wa, ma, Z, E) : null,
                     ja = y.skuId,
                     {
                         value: T,
                         messageType: "eddMessage",
                         skuId: ja
                     }
                 })
             }
         }
           , Hh = function(e, g) {
             Gc.M.error(Error("DccApiCall-" + e), g)
         }
           , yh = function(e, g) {
             var c = "function" == typeof Symbol && e[Symbol.iterator];
             if (!c)
                 return e;
             var d;
             e = c.call(e);
             var f = [];
             try {
                 for (; (void 0 === g || 0 < g--) && !(d = e.next()).done; )
                     f.push(d.value)
             } catch (r) {
                 var k = {
                     error: r
                 }
             } finally {
                 try {
                     d && !d.done && (c = e.return) && c.call(e)
                 } finally {
                     if (k)
                         throw k.error;
                 }
             }
             return f
         }
           , Hi = function(e) {
             var g = e.dccApiEndpoint
               , c = e.geoLocation
               , d = e.product
               , f = e.buyboxStaticStrings
               , k = e.locale
               , r = Nd(function(T) {
                 return Aa(T)
             })
               , q = yh((0,
             ia.useState)(""), 2);
             e = q[0];
             var E = q[1];
             q = yh((0,
             ia.useState)(null), 2);
             var y = q[0]
               , p = q[1];
             return (0,
             ia.useEffect)(function() {
                 if ("undefined" != typeof window) {
                     if (y) {
                         var T = null == y ? void 0 : y.messages.find(function(ja) {
                             return ja.skuId === (null == r ? void 0 : r.skuId)
                         });
                         return void E(T ? T.value : "")
                     }
                     try {
                         Kc(g, c, d, f, k).then(function(ja) {
                             ja && (p(ja),
                             ja = null == ja ? void 0 : ja.messages.find(function(da) {
                                 return da.skuId === (null == r ? void 0 : r.skuId)
                             }),
                             E(null == ja ? void 0 : ja.value))
                         })
                     } catch (ja) {
                         console.warn(ja)
                     }
                 }
             }, [r]),
             n().createElement(n().Fragment, null, e ? n().createElement("p", {
                 "data-automation-test-id": "buy-box-edd-message"
             }, e) : null)
         }
           , cc = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , cg = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return cc(g, e),
             g.prototype.render = function() {
                 var c = this.props.shippingMessage;
                 return n().createElement(n().Fragment, null, c && n().createElement("p", {
                     "data-automation-test-id": "buy-box-shipping-message"
                 }, c))
             }
             ,
             g
         }(n().Component);
         const Uc = Ka(function(e) {
             var g = Aa(e);
             return {
                 shippingMessage: g ? g.shippingMessage : Oa(e).shippingMessage
             }
         })(cg);
         var Se = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Ac = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Se(g, e),
             g.prototype.render = function() {
                 var c = this.props.euPricingMessage;
                 return n().createElement(n().Fragment, null, c && n().createElement("p", {
                     style: {
                         fontStyle: "italic"
                     },
                     "data-automation-test-id": "buy-box-eu-pricing-message"
                 }, c))
             }
             ,
             g
         }(n().Component);
         const Wf = Ka(function(e) {
             e = Aa(e);
             return {
                 euPricingMessage: e ? e.euPricingMessage : ""
             }
         })(Ac);
         var Xf = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }();
         const Ii = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Xf(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.text
                   , f = c.classes;
                 c = c.textOnly;
                 if (!d)
                     return n().createElement(n().Fragment, null);
                 var k = ["badge"];
                 return k.push(f),
                 c && k.push("p-0"),
                 n().createElement("span", {
                     className: k.join(" "),
                     "data-automation-test-id": "buy-box-badge"
                 }, d)
             }
             ,
             g
         }(n().Component);
         var Nh = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Oh = function(e) {
             function g() {
                 var c = null !== e && e.apply(this, arguments) || this;
                 return c.getBadgeText = function(d, f, k, r) {
                     return d || (f ? (0,
                     ta.oW)(f, [k]) : r ? r + " " + k : k)
                 }
                 ,
                 c
             }
             return Nh(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.savingsPrice
                   , f = c.savingsType
                   , k = c.customText
                   , r = c.customBadgeColor;
                 c = c.badgeFormat;
                 if (!d && !k)
                     return n().createElement(n().Fragment, null);
                 d = this.getBadgeText(k, c, d, f);
                 return n().createElement("div", {
                     className: "d-inline-block align-middle mr-3"
                 }, n().createElement(Ii, {
                     text: d,
                     classes: r ? "bg-" + r : "bg-yellow",
                     textOnly: !1
                 }))
             }
             ,
             g
         }(n().Component);
         const lf = Ka(function(e) {
             e = (Aa(e) ? Aa(e).badge : null) || Oa(e).badge || {};
             return {
                 savingsPrice: e.savingsPrice,
                 savingsType: e.savingsType,
                 customText: e.customText,
                 customBadgeColor: e.customBadgeColor,
                 badgeFormat: e.badgeFormat
             }
         })(Oh);
         var sg = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , ne = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return sg(g, e),
             g.prototype.render = function() {
                 var c = this.props.text;
                 return c ? n().createElement("div", {
                     className: "d-inline-block"
                 }, n().createElement("p", {
                     className: "d-inline-block mb-0",
                     "data-automation-test-id": "buy-box-publisher"
                 }, c)) : n().createElement(n().Fragment, null)
             }
             ,
             g
         }(n().Component);
         const oe = Ka(function(e) {
             return {
                 text: Aa(e) ? Aa(e).publisherName : ""
             }
         })(ne);
         var Dd = function() {
             return Dd = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             Dd.apply(this, arguments)
         }
           , ed = function(e) {
             var g = e.taggingInfo
               , c = e.link
               , d = e.color
               , f = e.additionalAttributes
               , k = e.automationIdLabel;
             e = "cta " + (d ? "text-" + d : "") + " " + (e.additionalClasses || "");
             return n().createElement(n().Fragment, null, g && c && n().createElement("a", Dd({
                 "data-m": g,
                 href: c.hyperlink,
                 className: e,
                 "aria-label": c.arialabel,
                 target: c.openInNewTab
             }, f, {
                 "data-automation-test-id": "buy-box-call-to-action-" + k
             }), c.ctatext, n().createElement("span", {
                 className: "glyph",
                 "aria-hidden": "true"
             })))
         }
           , fd = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , mf = function(e) {
             function g(c) {
                 var d = e.call(this, c) || this;
                 return d.getLinkString = function(f, k) {
                     return f && f.ctatext ? '\x3ca href\x3d"' + f.hyperlink + '" ' + (void 0 === f.arialabel || null === f.arialabel ? "" : 'aria-label\x3d"' + f.arialabel + '"') + ' target\x3d"' + ("_blank" === f.openInNewTab ? "_blank" : "_self") + '" ' + (k ? 'style \x3d "margin-right:1.5em"' : "") + ' class\x3d"cta"\x3e' + f.ctatext + '\x3cspan class\x3d"glyph" aria-hidden\x3d"true"\x3e\x3c/span\x3e\x3c/a\x3e' : ""
                 }
                 ,
                 d.adjustSpacingBetweenBodyAndLink = function(f, k, r) {
                     if (!k || "" === k)
                         return f;
                     k += r;
                     if (!f)
                         return k;
                     r = f.lastIndexOf("\x3c/p\x3e");
                     return -1 !== r ? f.substring(0, r) + "\x3c/br\x3e" + k + "\x3c/p\x3e" : f + "\x3c/br\x3e" + k
                 }
                 ,
                 d.adjustExtraSpacingBetweenBody = function(f) {
                     var k = f.indexOf("\x3cp\x3e")
                       , r = f.lastIndexOf("\x3c/p\x3e");
                     return -1 !== k && -1 !== r ? f.substring(k + 3, r) : f
                 }
                 ,
                 d.renderPromoBannerBlade = function(f, k) {
                     f = f[0];
                     var r = f.links && 0 < f.links.length ? ib({
                         cN: f.links[0].ctatext,
                         ecn: f.links[0].ctatext,
                         hn: k,
                         ehn: k,
                         bhvr: "0",
                         cT: "Link",
                         pa: "Body",
                         compnm: "Buy Box"
                     }) : "";
                     k = f.links && 1 < f.links.length ? ib({
                         cN: f.links[1].ctatext,
                         ecn: f.links[1].ctatext,
                         hn: k,
                         ehn: k,
                         bhvr: "0",
                         cT: "Link",
                         pa: "Body",
                         compnm: "Buy Box"
                     }) : "";
                     return n().createElement(n().Fragment, null, f && n().createElement("section", {
                         className: "col-12",
                         "aria-label": f.ariaLabelForSection
                     }, n().createElement("div", {
                         className: "px-md-4"
                     }, f.heading && n().createElement("span", {
                         className: "font-weight-bold",
                         "data-automation-test-id": "buy-box-promo-banner-blade-heading"
                     }, cd(d.props.noLineBreaks, f.heading)), f.body && n().createElement("div", {
                         ref: d.rteContainerLinkData[0].ref,
                         dangerouslySetInnerHTML: {
                             __html: ff(d.props.noLineBreaks, d.adjustExtraSpacingBetweenBody(f.body))
                         },
                         "data-automation-test-id": "buy-box-promo-banner-blade-body"
                     }), !f.body && n().createElement("br", null), f.links && 2 === f.links.length ? n().createElement("div", {
                         className: "link-group"
                     }, n().createElement(ed, {
                         taggingInfo: r,
                         link: f.links[0],
                         automationIdLabel: "primary"
                     }), n().createElement(ed, {
                         taggingInfo: k,
                         link: f.links[1],
                         automationIdLabel: "secondary"
                     })) : f.links && 1 === f.links.length ? n().createElement(ed, {
                         taggingInfo: r,
                         link: f.links[0],
                         automationIdLabel: "primary"
                     }) : n().createElement(n().Fragment, null))))
                 }
                 ,
                 d.renderOtherPromoBanners = function(f) {
                     f = f && f.map(function(k, r) {
                         var q = k.link
                           , E = k.secondaryLink
                           , y = !!(q && q.ctatext && E && E.ctatext);
                         return n().createElement(n().Fragment, {
                             key: "item-" + r
                         }, k && n().createElement(n().Fragment, null, k.heading && n().createElement("p", {
                             className: "mb-0"
                         }, n().createElement("span", {
                             className: "font-weight-bold",
                             "data-automation-test-id": "buy-box-" + d.props.automationIdLabel + "-heading"
                         }, cd(d.props.noLineBreaks, k.heading))), (k.body || q) && n().createElement("div", {
                             ref: d.rteContainerLinkData[r].ref,
                             dangerouslySetInnerHTML: {
                                 __html: ff(d.props.noLineBreaks, d.adjustSpacingBetweenBodyAndLink(k.body, d.getLinkString(q, y), d.getLinkString(E, !1)))
                             },
                             "data-automation-test-id": "buy-box-" + d.props.automationIdLabel + "-body"
                         })))
                     });
                     return n().createElement("div", null, f)
                 }
                 ,
                 d.rteContainerLinkData = {},
                 d.props.promoTexts && d.props.promoTexts.forEach(function(f, k) {
                     (f.body || f.link) && (d.rteContainerLinkData[k] = {
                         ref: n().createRef(),
                         item: f
                     })
                 }),
                 d
             }
             return fd(g, e),
             g.prototype.componentDidMount = function() {
                 var c = this;
                 Object.values(this.rteContainerLinkData).forEach(function(d) {
                     (d = d.ref.current) && ba(d, {
                         hn: c.props.productTitle
                     })
                 })
             }
             ,
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.promoTexts
                   , f = c.isPromoBannerBlade
                   , k = c.selectedSku
                   , r = c.useProductTitle;
                 c = c.productTitle;
                 if (!d || 0 === d.length)
                     return n().createElement(n().Fragment, null);
                 k = r ? c : k.title;
                 return 1 === d.length && f ? this.renderPromoBannerBlade(d, k) : this.renderOtherPromoBanners(d)
             }
             ,
             g
         }(n().Component);
         const pe = Ka(function(e) {
             return {
                 selectedSku: Aa(e),
                 productTitle: yb(e)
             }
         })(mf);
         var Ge = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }();
         const Eb = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Ge(g, e),
             g.prototype.render = function() {
                 if (!this.props.text)
                     return n().createElement(n().Fragment, null);
                 var c = this.props
                   , d = c.htmlTag
                   , f = c.classes
                   , k = c.text;
                 c = c.noLineBreaks;
                 return n().createElement(d, {
                     className: f ? f + " mb-0" : "mb-0"
                 }, cd(c, k))
             }
             ,
             g
         }(n().Component);
         var Qb = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , te = function(e) {
             function g(c) {
                 var d = e.call(this, c) || this;
                 return d.getRtestyle = function(f) {
                     return f && f.includes("\x3cp\x3e") && f.includes("\x3c/p\x3e")
                 }
                 ,
                 d.getMarginStyle = function(f, k) {
                     return f.length - 1 != k ? "mr-4" : ""
                 }
                 ,
                 d.rteContainerLinkData = {},
                 d.props.tags && d.props.tags.forEach(function(f, k) {
                     (f.text || f.glyph) && (d.rteContainerLinkData[k] = {
                         ref: n().createRef(),
                         item: f
                     })
                 }),
                 d
             }
             return Qb(g, e),
             g.prototype.componentDidMount = function() {
                 var c = this;
                 Object.values(this.rteContainerLinkData).forEach(function(d) {
                     (d = d.ref.current) && ba(d, {
                         hn: c.props.productTitle
                     })
                 })
             }
             ,
             g.prototype.render = function() {
                 var c = this
                   , d = this.props
                   , f = d.tags
                   , k = d.inline
                   , r = d.htmlTag
                   , q = d.noLineBreaks
                   , E = k ? "ml-2" : "ml-3";
                 return (d = (d = f && f.filter(function(y) {
                     return y.text || y.glyph
                 })) && d.map(function(y, p) {
                     var T = (k ? "mb-g" : "mb-4") + " " + (k ? "d-inline-flex" : "d-flex") + "  " + c.getMarginStyle(f, p);
                     return c.getRtestyle(y.text) ? n().createElement("li", {
                         key: p,
                         className: T
                     }, y.glyph && n().createElement("span", {
                         className: "d-flex glyph-prepend glyph-prepend-large " + (y.glyph ? y.glyph : ""),
                         "aria-hidden": "true",
                         "data-automation-test-id": "buy-box-feature-tag-glyph-" + p
                     }), n().createElement("div", {
                         className: "card " + E
                     }, n().createElement("div", {
                         className: "card-body",
                         "data-automation-test-id": "buy-box-feature-tag-text-" + p
                     }, n().createElement("div", {
                         ref: c.rteContainerLinkData[p].ref,
                         dangerouslySetInnerHTML: {
                             __html: y.text ? ff(q, y.text) : ""
                         }
                     })))) : n().createElement("li", {
                         key: p,
                         className: T
                     }, y.glyph && n().createElement("span", {
                         className: "d-flex glyph-prepend glyph-prepend-large " + (y.glyph ? y.glyph : ""),
                         "aria-hidden": "true",
                         "data-automation-test-id": "buy-box-feature-tag-glyph-" + p
                     }), n().createElement("div", {
                         className: "card " + E
                     }, n().createElement("div", {
                         className: "card-body",
                         "data-automation-test-id": "buy-box-feature-tag-text-" + p
                     }, n().createElement(Eb, {
                         htmlTag: r,
                         text: y.text ? y.text : "",
                         noLineBreaks: q
                     }))))
                 })) && 0 !== d.length ? n().createElement("div", {
                     className: "mb-3"
                 }, n().createElement("div", {
                     className: "mb-3"
                 }, n().createElement("ul", {
                     className: (k ? "d-flex flex-wrap mb-ng" : "mb-n4") + " list-unstyled"
                 }, d))) : n().createElement(n().Fragment, null)
             }
             ,
             g
         }(n().Component);
         const hd = Ka(function(e, g) {
             e = g.useProductTitle ? yb(e) : Qc(e);
             return {
                 inline: g.inline,
                 tags: g.tags,
                 htmlTag: g.htmlTag,
                 productTitle: e
             }
         })(te);
         var ue = Ja(9766)
           , pf = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , pc = function() {
             return pc = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             pc.apply(this, arguments)
         };
         const qf = function(e) {
             function g(c) {
                 var d = e.call(this, c) || this;
                 return d.handleChange = function(f) {
                     d.setState({
                         value: f.target.value
                     }, function() {
                         d.props.selectCallback(d.state.value)
                     })
                 }
                 ,
                 d.state = {
                     value: d.props.selectedId
                 },
                 d
             }
             return pf(g, e),
             g.prototype.render = function() {
                 var c = this
                   , d = Zd()()
                   , f = "custom-select";
                 this.props.wrapperClasses && (f = f + " " + this.props.wrapperClasses);
                 var k = "custom-select-input";
                 return this.props.additionalSelectClasses && (k = k + " " + this.props.additionalSelectClasses),
                 n().createElement(Xa.Consumer, null, function(r) {
                     r = r.buyboxStaticStrings;
                     return n().createElement("fieldset", {
                         className: "form-group",
                         "data-m": c.props.analyticsTaggingInfo,
                         "data-automation-test-id": "buy-box-edition-picker-fieldset"
                     }, n().createElement("div", {
                         className: "buy-box-edition-picker mb-3"
                     }, n().createElement("label", {
                         htmlFor: d,
                         className: c.props.labelClasses
                     }, r.CHOOSE_YOUR_CONFIGURATION), n().createElement("div", {
                         className: f
                     }, n().createElement("select", pc({
                         className: k,
                         value: c.state.value,
                         id: d,
                         name: "sku-selector",
                         onChange: c.handleChange
                     }, c.props.additionalAttributes, {
                         "data-automation-test-id": "buy-box-edition-picker-sku-selector"
                     }), c.props.items.map(function(q) {
                         return n().createElement("option", {
                             key: q.id,
                             value: q.id,
                             selected: c.state.value === q.id
                         }, q.title)
                     })), n().createElement("span", {
                         className: "custom-select-arrow",
                         "aria-hidden": "true"
                     }))))
                 })
             }
             ,
             g
         }(n().Component);
         var Xb = function() {
             return Xb = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             Xb.apply(this, arguments)
         }
           , ve = function(e) {
             return n().createElement(Xa.Consumer, null, function(g) {
                 g = g.buyboxStaticStrings;
                 return n().createElement("fieldset", {
                     className: "form-group",
                     "data-m": e.analyticsTaggingInfo,
                     "data-automation-test-id": "buy-box-skuchooser-fieldset"
                 }, n().createElement("legend", {
                     className: "mb-2"
                 }, (0,
                 ta.zH)(g, "CHOOSE_YOUR_CONFIGURATION", "Choose your configuration")), e.items.map(function(c, d) {
                     return n().createElement("div", {
                         className: "custom-control custom-radio",
                         key: c.id,
                         "data-automation-test-id": "buy-box-skuchooser-color-" + d
                     }, n().createElement("input", {
                         type: "radio",
                         className: "custom-control-input",
                         name: "sku-selector",
                         id: c.id,
                         value: c.id,
                         defaultChecked: e.selectedId == c.id,
                         onClick: function(f) {
                             return e.selectCallback(c.id)
                         },
                         autoComplete: "off"
                     }), n().createElement("label", {
                         htmlFor: c.id,
                         className: "custom-control-label"
                     }, n().createElement("span", {
                         className: "custom-control-glyph",
                         "aria-hidden": "true"
                     }), c.title))
                 }))
             })
         }
           , Fd = function(e) {
             return n().createElement(Xa.Consumer, null, function(g) {
                 g = g.buyboxStaticStrings;
                 return n().createElement("div", {
                     className: "mb-3"
                 }, n().createElement("div", {
                     className: ""
                 }, n().createElement("fieldset", {
                     className: "color-picker",
                     "data-mount": "color-picker",
                     "data-controls": "color-picker-image",
                     "data-m": e.analyticsTaggingInfo,
                     "data-automation-test-id": "buy-box-skuchooser-fieldset"
                 }, n().createElement("legend", {
                     className: "sr-only"
                 }, g.CHOOSE_YOUR_COLOR), e.items.map(function(c) {
                     return n().createElement(n().Fragment, {
                         key: c.id
                     }, n().createElement("input", {
                         type: "radio",
                         className: "color-picker-control",
                         name: "color-picker-control",
                         id: "color-" + c.hex,
                         "aria-label": c.title,
                         "data-color-picker-image": c.image && c.image.uri,
                         defaultChecked: e.selectedId == c.id,
                         onClick: function(d) {
                             return e.selectCallback(c.id)
                         },
                         autoComplete: "off"
                     }), n().createElement("label", {
                         htmlFor: "color-" + c.hex,
                         "aria-hidden": "true",
                         title: c.title
                     }, n().createElement("span", {
                         className: "color-picker-dot",
                         style: {
                             backgroundColor: "#" + c.hex
                         }
                     }, n().createElement("svg", {
                         viewBox: "0 0 100 100"
                     }, n().createElement("circle", {
                         cx: "50",
                         cy: "50",
                         r: "50",
                         fill: "#" + c.hex
                     }))), n().createElement("span", {
                         className: "color-picker-label"
                     }, c.title)), "\u00a0")
                 }))))
             })
         };
         const sf = function(e) {
             return 0 === e.items.length ? n().createElement(n().Fragment, null) : n().createElement(n().Fragment, null, "radioButton" === e.renderType ? 0 < e.items.length && !e.items[0].hex && n().createElement(ve, Xb({}, e)) : "", e.hideColorPicker || "radioButton" !== e.renderType ? "" : 0 < e.items.length && e.items[0].hex && n().createElement(Fd, Xb({}, e)), "dropDown" === e.renderType ? 0 < e.items.length && !e.items[0].hex && n().createElement(qf, Xb({}, e)) : "", e.hideColorPicker || "dropDown" !== e.renderType ? "" : 0 < e.items.length && e.items[0].hex && n().createElement(Fd, Xb({}, e)))
         };
         var rf = function() {
             return rf = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             rf.apply(this, arguments)
         }
           , id = function() {
             function e(g) {
                 var c = this;
                 this.subscribeForDataRequests = function() {
                     c.subscribe("GETPRODUCTINFO", c.subscribeDataRequestsCallback)
                 }
                 ;
                 this.subscribeForProductAction = function(d) {
                     c.subscribe("PRODUCTACTION", d)
                 }
                 ;
                 this.subscribeForGrabGoToggle = function(d) {
                     c.subscribe("TOGGLE-ATC-GRAB-GO", d)
                 }
                 ;
                 this.publishBuyBoxData = function(d, f) {
                     var k = hc.getState()
                       , r = null
                       , q = ""
                       , E = Aa(k)
                       , y = Oa(k)
                       , p = y.productId;
                     E ? (r = E,
                     q = E.skuId) : r = y;
                     E = yb(k);
                     y = r.title;
                     k = r.action;
                     r = r.price;
                     E = gf(c.productTitleFlag ? E : y);
                     y = [];
                     k && y.push(rf({
                         isDisabled: k.action == Ma.OutOfStock || k.action == Ma.NotAvailable
                     }, k));
                     c.publish("PRODUCTINFOUPDATE", {
                         title: E,
                         productActions: y,
                         price: r,
                         skuId: q,
                         productId: p,
                         triggerEl: d,
                         gngCallback: f
                     })
                 }
                 ;
                 this.subscribeDataRequestsCallback = function() {
                     c.publishBuyBoxData()
                 }
                 ;
                 this.subscribe = function(d, f) {
                     "undefined" != typeof document && document.addEventListener(d, f)
                 }
                 ;
                 this.publish = function(d, f) {
                     "undefined" != typeof document && (d = new CustomEvent(d,{
                         bubbles: !0,
                         detail: f
                     }),
                     document.dispatchEvent(d))
                 }
                 ;
                 this.productTitleFlag = g
             }
             return e.prototype.publishBuyBoxProductInfo = function(g, c) {
                 this.publishBuyBoxData(g, c)
             }
             ,
             e
         }()
           , Kg = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Hg = function(e) {
             function g(c) {
                 var d = e.call(this, c) || this;
                 return d.handleSelect = function(f) {
                     d.props.setSelectedSku(f);
                     var k = new Of;
                     (k.selectedSku = f,
                     k.buyBoxProps = d.props.bbProps,
                     d.props.setUiMetadata(k),
                     d.props.showNavSummary) || (k = document.querySelector(".buy-box-buy-buttons .btn[data-target]"),
                     d.eventManager.publishBuyBoxProductInfo(k));
                     d.changeNavigationUrl(f)
                 }
                 ,
                 d.changeNavigationUrl = function(f) {
                     if ("undefined" != typeof window && window.history && f && d.props.actionType === Ma.AddToCart) {
                         var k = window.location.href
                           , r = k.includes("?") ? k.split("?") : k.includes("#") ? k.split("#") : [k]
                           , q = d.modifySkuIdIfPresentInUrl(r[0], f, d.props.bbProps.isAuthor);
                         1 < r.length && (q += (k.includes("?") ? "?" : k.includes("#") ? "#" : "") + r[1]);
                         d.props.bbProps.isAuthor && (k = (new URL(q)).searchParams,
                         k.delete("skuId"),
                         k.append("skuId", f),
                         q = r[0] + "?" + k.toString());
                         window.history.pushState({}, document.title, q)
                     }
                 }
                 ,
                 d.modifySkuIdIfPresentInUrl = function(f, k, r) {
                     if (r)
                         return f;
                     r = f.split("/");
                     return r[r.length - 1].toUpperCase() === d.props.bbProps.product.productId.toUpperCase() ? f + "/" + k : (r.pop(),
                     r.join("/") + "/" + k)
                 }
                 ,
                 d.props.showNavSummary || (d.eventManager = new id(c.useProductTitle)),
                 d
             }
             return Kg(g, e),
             g.prototype.render = function() {
                 var c = this;
                 if (1 >= Object.keys(this.props.skus).length || this.props.isDualCTA)
                     return n().createElement(n().Fragment, null);
                 var d = this.props.useProductTitle ? this.props.productTitle : this.props.selectedSku.title;
                 d = ib({
                     cT: "Button",
                     hn: d,
                     ehn: d,
                     cN: "Color Picker",
                     ecn: "Color Picker",
                     bhvr: 4,
                     pa: "Body",
                     compnm: "Buy Box"
                 });
                 var f = Object.keys(this.props.bbProps.product.skuOrder).map(function(k) {
                     return parseInt(k)
                 }).sort(function(k, r) {
                     return k - r
                 }).map(function(k) {
                     return c.props.skus[c.props.bbProps.product.skuOrder[k][0]]
                 });
                 return n().createElement(sf, {
                     items: f.map(function(k) {
                         return {
                             title: k.skuButtonTitle,
                             hex: k.colorHexCode,
                             id: k.skuId,
                             image: k.displayImage
                         }
                     }),
                     selectedId: this.props.selectedSku.skuId,
                     selectCallback: this.handleSelect,
                     analyticsTaggingInfo: d,
                     renderType: 4 > f.length ? "radioButton" : "dropDown",
                     hideColorPicker: this.props.hideColorPicker
                 })
             }
             ,
             g
         }(n().Component);
         const Gd = Ka(function(e) {
             var g = He(e)
               , c = Aa(e)
               , d = yb(e);
             e = Oa(e).isDualCTA;
             var f = "";
             return c && c.action && (f = c.action.action),
             {
                 skus: g,
                 selectedSku: c,
                 productTitle: d,
                 isDualCTA: e,
                 actionType: f
             }
         }, function(e) {
             return {
                 setSelectedSku: function(g) {
                     return e(zd(g))
                 },
                 setUiMetadata: function(g) {
                     return e({
                         type: "SET_UI_METADATA",
                         payload: g,
                         error: !1
                     })
                 }
             }
         })(Hg);
         var tg = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Ph = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return tg(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.primaryText
                   , f = c.secondaryText;
                 c = c.glyph;
                 var k = n().createElement("div", {
                     className: "col-md-7 col-lg-9 mb-3 mb-md-0"
                 }, n().createElement("div", {
                     className: c ? "pl-md-4 d-flex" : ""
                 }, c && n().createElement("div", {
                     className: "align-middle glyph-prepend glyph-prepend-" + c + " border rounded-circle mr-2 bg-primary ownership-status-background text-center",
                     style: {
                         paddingRight: 0
                     }
                 }), n().createElement("div", {
                     className: "align-middle my-auto"
                 }, d && n().createElement("p", {
                     className: "font-weight-bold mb-0"
                 }, d), f && n().createElement("p", {
                     className: "small mb-0"
                 }, f))));
                 return d || f || c ? k : n().createElement(n().Fragment, null)
             }
             ,
             g
         }(n().Component)
           , fc = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , we = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return fc(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.title;
                 c = c.text;
                 return d || c ? n().createElement(Ph, {
                     glyph: "check-mark",
                     primaryText: d,
                     secondaryText: c
                 }) : n().createElement(n().Fragment, null)
             }
             ,
             g
         }(n().Component);
         const qc = Ka(function(e) {
             return {
                 title: Ie(e),
                 text: $b(e)
             }
         })(we);
         var jd = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , tf = function(e) {
             function g(c) {
                 var d = e.call(this, c) || this;
                 return d.moreTaggingInfo = ib({
                     cN: "More",
                     ecn: "More",
                     bhvr: "7",
                     hn: d.props.title,
                     ehn: d.props.title,
                     cT: "Link",
                     pa: "Body",
                     compnm: "Buy Box"
                 }),
                 d.lessTaggingInfo = ib({
                     cN: "Less",
                     ecn: "Less",
                     bhvr: "8",
                     hn: d.props.title,
                     ehn: d.props.title,
                     cT: "Link",
                     pa: "Body",
                     compnm: "Buy Box"
                 }),
                 d.setTaggingInfo = function(f) {
                     var k;
                     f.target !== d.ref.current || null !== (k = d.ref.current) && void 0 !== k && k.setAttribute("data-m", "onShow" === f.type ? d.lessTaggingInfo : d.moreTaggingInfo)
                 }
                 ,
                 d.ref = n().createRef(),
                 d
             }
             return jd(g, e),
             g.prototype.componentDidMount = function() {
                 document.addEventListener("onShow", this.setTaggingInfo);
                 document.addEventListener("onHide", this.setTaggingInfo)
             }
             ,
             g.prototype.componentWillUnmount = function() {
                 document.removeEventListener("onShow", this.setTaggingInfo);
                 document.removeEventListener("onHide", this.setTaggingInfo)
             }
             ,
             g.prototype.renderButton = function(c) {
                 return n().createElement("button", {
                     className: "action-trigger glyph-prepend mt-2 show-more-show-less-toggle",
                     id: "show-more-show-less-toggle",
                     "data-show-less-text": (0,
                     ta.zH)(c, "LESS", "Less"),
                     type: "button",
                     ref: this.ref,
                     "aria-controls": "buy-box-product-description",
                     "aria-expanded": !1,
                     "data-m": this.moreTaggingInfo,
                     "aria-label": (0,
                     ta.zH)(c, "SHOW_MORE_ABOUT", "Show more about") + " " + this.props.title,
                     "data-alternate-aria-label": (0,
                     ta.zH)(c, "SHOW_LESS_ABOUT", "Show less about") + " " + this.props.title,
                     "data-automation-test-id": "buy-box-show-more-show-less-button"
                 }, n().createElement("span", {
                     className: "glyph glyph-circle-plus",
                     "aria-hidden": "true"
                 }), (0,
                 ta.zH)(c, "MORE", "More"))
             }
             ,
             g.prototype.render = function() {
                 var c = this;
                 return n().createElement(Xa.Consumer, null, function(d) {
                     d = d.buyboxStaticStrings;
                     return n().createElement("div", {
                         "data-mount": c.props.textSecondary ? "show-more-show-less" : "",
                         className: "show-more-show-less",
                         "data-container": "showMoreShowLess",
                         "data-automation-test-id": "buy-box-show-more-show-less"
                     }, n().createElement("div", null, n().createElement("span", {
                         "data-automation-test-id": "buy-box-product-description",
                         dangerouslySetInnerHTML: {
                             __html: c.props.textPrimary
                         }
                     }), c.props.textSecondary ? n().createElement(n().Fragment, null, n().createElement("span", {
                         className: "show-more-show-less-ellipsis"
                     }, "..."), n().createElement("span", {
                         id: "buy-box-product-description",
                         className: "show-more-show-less-toggleable-content",
                         dangerouslySetInnerHTML: {
                             __html: c.props.textSecondary
                         }
                     })) : null), c.props.textSecondary ? c.renderButton(d) : null)
                 })
             }
             ,
             g
         }(ia.Component)
           , Ig = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Qh = function(e) {
             var g = "function" == typeof Symbol && Symbol.iterator
               , c = g && e[g]
               , d = 0;
             if (c)
                 return c.call(e);
             if (e && "number" == typeof e.length)
                 return {
                     next: function() {
                         return e && d >= e.length && (e = void 0),
                         {
                             value: e && e[d++],
                             done: !e
                         }
                     }
                 };
             throw new TypeError(g ? "Object is not iterable." : "Symbol.iterator is not defined.");
         }
           , Rh = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Ig(g, e),
             g.prototype.getDescriptionSplitByBullets = function(c) {
                 var d, f = "";
                 c = c.split("\n");
                 var k = !1;
                 try {
                     for (var r = Qh(c), q = r.next(); !q.done; q = r.next()) {
                         var E = q.value;
                         E.startsWith("\u2022") ? (k || (f += "\x3cul\x3e",
                         k = !0),
                         f += "\x3cli\x3e" + E.slice(1) + "\x3c/li\x3e") : (k && (f += "\x3c/ul\x3e",
                         k = !1),
                         f += E + "\n")
                     }
                 } catch (p) {
                     var y = {
                         error: p
                     }
                 } finally {
                     try {
                         q && !q.done && (d = r.return) && d.call(r)
                     } finally {
                         if (y)
                             throw y.error;
                     }
                 }
                 return k && (f += "\x3c/ul\x3e"),
                 f
             }
             ,
             g.prototype.render = function() {
                 if (!this.props.text)
                     return n().createElement(n().Fragment, null);
                 var c, d, f = this.props.authorOverride ? this.props.authorOverride : 155;
                 return this.props.text.includes("\u2022") ? c = this.getDescriptionSplitByBullets(this.props.text) : this.props.defaultShowAll ? c = this.props.text : (c = (0,
                 jc.qn)(this.props.locale) ? (0,
                 jc.RM)(this.props.text, f) : (0,
                 jc.jl)(this.props.text, f),
                 d = this.props.text.slice(c.length)),
                 n().createElement("div", {
                     style: {
                         whiteSpace: "pre-line"
                     }
                 }, n().createElement(tf, {
                     textPrimary: c,
                     textSecondary: d,
                     title: this.props.title
                 }))
             }
             ,
             g
         }(ia.Component);
         const Sh = Ka(function(e, g) {
             return {
                 text: g.useProductInfo ? function(c) {
                     return Oa(c) ? Oa(c).description : ""
                 }(e) : function(c) {
                     return Aa(c) ? Aa(c).description : ""
                 }(e),
                 title: g.useProductInfo ? yb(e) : Qc(e),
                 defaultShowAll: !!g.defaultShowAll,
                 authorOverride: g.authorOverride
             }
         })(Rh);
         var Th = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Td = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Th(g, e),
             g.prototype.render = function() {
                 return this.props.text ? n().createElement("p", {
                     "data-automation-test-id": "buy-box-affirmation-text"
                 }, this.props.text) : n().createElement(n().Fragment, null)
             }
             ,
             g
         }(n().Component);
         const Lc = Ka(function(e) {
             return {
                 text: Aa(e) ? Aa(e).affirmation : ""
             }
         })(Td);
         var uf = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }(), xe = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return uf(g, e),
             g.prototype.render = function() {
                 return n().createElement(Rc, {
                     isHidden: !this.props.showSpinner
                 }, n().createElement("div", {
                     role: "presentation",
                     tabIndex: -1,
                     className: "x-hidden-focus spinner-backdrop position-fixed"
                 }), n().createElement("div", {
                     className: "spinner-container buybox-spinner-container position-fixed"
                 }, n().createElement("div", {
                     id: "cart-loading",
                     className: "spinner buybox-spinner spinner-lg buybox-spinner-lg",
                     tabIndex: -1,
                     role: "alert",
                     "aria-live": "assertive"
                 }, n().createElement("span", {
                     className: "sr-only"
                 }, "Adding"), n().createElement("span", {
                     role: "presentation",
                     className: "spinner-dot spinner-dot-1"
                 }), n().createElement("span", {
                     role: "presentation",
                     className: "spinner-dot spinner-dot-2"
                 }), n().createElement("span", {
                     role: "presentation",
                     className: "spinner-dot spinner-dot-3"
                 }), n().createElement("span", {
                     role: "presentation",
                     className: "spinner-dot spinner-dot-4"
                 }), n().createElement("span", {
                     role: "presentation",
                     className: "spinner-dot spinner-dot-5"
                 }))))
             }
             ,
             g
         }(n().Component), Ji = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }(), Ki = function(e) {
             var g = "function" == typeof Symbol && Symbol.iterator
               , c = g && e[g]
               , d = 0;
             if (c)
                 return c.call(e);
             if (e && "number" == typeof e.length)
                 return {
                     next: function() {
                         return e && d >= e.length && (e = void 0),
                         {
                             value: e && e[d++],
                             done: !e
                         }
                     }
                 };
             throw new TypeError(g ? "Object is not iterable." : "Symbol.iterator is not defined.");
         }, Jg = {
             CV_SUPPORT_TEXT1: "If you need any additional assistance, please contact Microsoft Store Support at {0}",
             CV_SUPPORT_TEXT2: "Please save the following error code(s) so that our support advocates may be able to better assist you:",
             VIEW_CART: "View cart",
             CONTINUE_SHOPPING: "Continue shopping",
             CLOSE_DIALOG_WINDOW: "Close dialog window",
             ADD_TO_CART_SUPPORT_PHONE_NUMBER: "1-877-696-7786"
         }, ug = function(e) {
             function g(c) {
                 var d, f = e.call(this, c) || this;
                 f.isIE = !1;
                 f.locale = "en-us";
                 f.localizedStrings = {};
                 f.onCloseModal = function() {
                     if (f.setState({
                         closeModal: !0
                     }),
                     f.isIE) {
                         var y = document.querySelector("#add-to-cart") || document.querySelector(".buy-box-buy-buttons a");
                         y && y.focus()
                     }
                 }
                 ;
                 f.componentDidMount = function() {
                     var y, p = document.querySelector("#errorModal");
                     if (null !== p) {
                         var T = p.querySelectorAll('button, a[href], [tabindex]:not([tabindex\x3d"-1"])');
                         var ja = T[T.length - 1];
                         (y = p.querySelectorAll('button, a[href], [tabindex]:not([tabindex\x3d"-1"])')[0]).focus()
                     }
                     document.addEventListener("keydown", function(da) {
                         27 === da.keyCode && f.onCloseModal();
                         var Z = "Tab" === da.key || 9 === da.keyCode;
                         Z && (da.shiftKey && Z ? document.activeElement === y && (ja.focus(),
                         da.preventDefault()) : document.activeElement === ja && (y.focus(),
                         da.preventDefault()))
                     }, !1);
                     document.addEventListener("mousedown", function(da) {
                         da.preventDefault()
                     });
                     p = window.navigator.userAgent;
                     (p.includes("MSIE") || p.includes("Trident")) && (f.isIE = !0)
                 }
                 ;
                 f.renderCv = function() {
                     var y = f.localizedStrings.ADD_TO_CART_SUPPORT_PHONE_NUMBER;
                     y = ia.createElement("a", {
                         href: "tel:" + y,
                         style: {
                             fontWeight: 600
                         }
                     }, y);
                     var p = "" == f.props.cvValue ? "." : ". ";
                     if (f.localizedStrings.CV_SUPPORT_TEXT1.includes("{0}")) {
                         var T = f.localizedStrings.CV_SUPPORT_TEXT1.split(/\{0\}(.*)/);
                         y = ia.createElement(ia.Fragment, null, T[0], " ", y, T[1] + p)
                     } else
                         y = ia.createElement(ia.Fragment, null, f.localizedStrings.CV_SUPPORT_TEXT1, " ", y, p);
                     return "" !== f.props.cvValue ? ia.createElement("div", {
                         className: "modal-body "
                     }, ia.createElement("p", null, y, " ", f.localizedStrings.CV_SUPPORT_TEXT2, ia.createElement("ul", null, ia.createElement("li", null, "CV: ", f.props.cvValue)))) : ia.createElement("div", {
                         className: "modal-body "
                     }, ia.createElement("p", null, y))
                 }
                 ;
                 f.tabIndex = -1;
                 f.state = {
                     closeModal: !1
                 };
                 (c = f.props.cartUrl.match(/\/(\w{2}-\w{2})\//)) && (f.locale = c[1]);
                 try {
                     for (var k = Ki(Object.keys(Jg)), r = k.next(); !r.done; r = k.next()) {
                         var q = r.value;
                         f.localizedStrings[q] = f.props.localizedStrings && f.props.localizedStrings[q] || Jg[q];
                         "ADD_TO_CART_SUPPORT_PHONE_NUMBER" == q && "Add to cart support phone number" == f.localizedStrings[q] && (f.localizedStrings[q] = "1-877-696-7786")
                     }
                 } catch (y) {
                     var E = {
                         error: y
                     }
                 } finally {
                     try {
                         r && !r.done && (d = k.return) && d.call(k)
                     } finally {
                         if (E)
                             throw E.error;
                     }
                 }
                 return f
             }
             return Ji(g, e),
             g.prototype.componentWillUnmount = function() {
                 var c = this;
                 document.removeEventListener("keydown", function(d) {
                     c.onCloseModal()
                 }, !1);
                 document.removeEventListener("mousedown", function(d) {}, !1)
             }
             ,
             g.prototype.render = function() {
                 return ia.createElement(Rc, {
                     isHidden: this.state.closeModal
                 }, ia.createElement("div", {
                     className: "modal fade show",
                     id: "errorModal",
                     tabIndex: this.tabIndex,
                     role: "dialog",
                     "aria-labelledby": "modal-label",
                     "aria-modal": !0,
                     style: {
                         display: "block"
                     }
                 }, ia.createElement("div", {
                     className: "modal-dialog",
                     role: "document"
                 }, ia.createElement("div", {
                     className: "modal-content"
                 }, ia.createElement("div", {
                     className: "modal-header"
                 }, ia.createElement("h2", {
                     className: "modal-title h6",
                     id: "modal-label"
                 }, this.props.errorMessage), ia.createElement("button", {
                     type: "button",
                     className: "close",
                     id: "headerCloseButton",
                     "data-dismiss": "modal",
                     "aria-label": this.localizedStrings.CLOSE_DIALOG_WINDOW,
                     onClick: this.onCloseModal
                 })), this.renderCv(), ia.createElement("div", {
                     className: "modal-footer justify-content-start"
                 }, ia.createElement("button", {
                     type: "button",
                     id: "continueShoppingButton",
                     onClick: this.onCloseModal,
                     className: "btn btn-outline-primary ",
                     "data-dismiss": "modal"
                 }, this.localizedStrings.CONTINUE_SHOPPING), " ", ia.createElement("a", {
                     href: this.props.cartUrl,
                     id: "viewCartButton",
                     type: "button",
                     className: "btn btn-primary"
                 }, this.localizedStrings.VIEW_CART))))), ia.createElement("div", {
                     className: "modal-backdrop fade show"
                 }))
             }
             ,
             g
         }(ia.Component), gd = Ja(2908), vg, wg = Ja(4859);
         !function(e) {
             e[e.Verbose = 0] = "Verbose";
             e[e.Information = 1] = "Information";
             e[e.Warning = 2] = "Warning";
             e[e.Error = 3] = "Error";
             e[e.Critical = 4] = "Critical"
         }(vg || (vg = {}));
         var Uh = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , ec = function(e, g, c, d) {
             return new (c || (c = Promise))(function(f, k) {
                 function r(y) {
                     try {
                         E(d.next(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function q(y) {
                     try {
                         E(d.throw(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function E(y) {
                     var p;
                     y.done ? f(y.value) : (p = y.value,
                     p instanceof c ? p : new c(function(T) {
                         T(p)
                     }
                     )).then(r, q)
                 }
                 E((d = d.apply(e, g || [])).next())
             }
             )
         }
           , xg = function(e, g) {
             function c(E) {
                 return function(y) {
                     return function(p) {
                         if (d)
                             throw new TypeError("Generator is already executing.");
                         for (; q; )
                             try {
                                 if (d = 1,
                                 f && (k = 2 & p[0] ? f.return : p[0] ? f.throw || ((k = f.return) && k.call(f),
                                 0) : f.next) && !(k = k.call(f, p[1])).done)
                                     return k;
                                 switch (f = 0,
                                 k && (p = [2 & p[0], k.value]),
                                 p[0]) {
                                 case 0:
                                 case 1:
                                     k = p;
                                     break;
                                 case 4:
                                     return q.label++,
                                     {
                                         value: p[1],
                                         done: !1
                                     };
                                 case 5:
                                     q.label++;
                                     f = p[1];
                                     p = [0];
                                     continue;
                                 case 7:
                                     p = q.ops.pop();
                                     q.trys.pop();
                                     continue;
                                 default:
                                     if (!(k = q.trys,
                                     (k = 0 < k.length && k[k.length - 1]) || 6 !== p[0] && 2 !== p[0])) {
                                         q = 0;
                                         continue
                                     }
                                     if (3 === p[0] && (!k || p[1] > k[0] && p[1] < k[3]))
                                         q.label = p[1];
                                     else if (6 === p[0] && q.label < k[1])
                                         q.label = k[1],
                                         k = p;
                                     else if (k && q.label < k[2])
                                         q.label = k[2],
                                         q.ops.push(p);
                                     else {
                                         k[2] && q.ops.pop();
                                         q.trys.pop();
                                         continue
                                     }
                                 }
                                 p = g.call(e, q)
                             } catch (T) {
                                 p = [6, T],
                                 f = 0
                             } finally {
                                 d = k = 0
                             }
                         if (5 & p[0])
                             throw p[1];
                         return {
                             value: p[0] ? p[1] : void 0,
                             done: !0
                         }
                     }([E, y])
                 }
             }
             var d, f, k, r, q = {
                 label: 0,
                 sent: function() {
                     if (1 & k[0])
                         throw k[1];
                     return k[1]
                 },
                 trys: [],
                 ops: []
             };
             return r = {
                 next: c(0),
                 throw: c(1),
                 return: c(2)
             },
             "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                 return this
             }
             ),
             r
         }
           , Ed = function(e) {
             function g(c) {
                 c = e.call(this, c) || this;
                 return c.frameRef = n().createRef(),
                 c.messageListener = c.createMessageListener(),
                 c.state = {
                     displayBuyNow: !1
                 },
                 c
             }
             return Uh(g, e),
             g.prototype.handleCloseEvents = function(c, d, f) {
                 this.setState({
                     displayBuyNow: !1
                 });
                 this.props.eventHandler.postComplete(c, d);
                 !d && f ? Gc.M.trace("[AemBuyNow] Completed purchase with order id: " + f, vg.Information, {
                     products: this.props.products,
                     locale: this.props.locale
                 }) : d && (d.message = "[AemBuyNow] Failed to complete purchase. " + d.message,
                 Gc.M.error(d, {
                     products: this.props.products,
                     locale: this.props.locale
                 }))
             }
             ,
             g.prototype.createMessageListener = function() {
                 var c = this;
                 return (0,
                 wg.makeWindowListener)({
                     done: function(d) {
                         switch (d.status) {
                         case "cancel":
                         case "cancelXButton":
                         case "cancelEscKey":
                             c.handleCloseEvents(!1);
                             break;
                         case "success":
                             c.handleCloseEvents(!0, null, d.orderId);
                             break;
                         case "error":
                             c.handleCloseEvents(!1, {
                                 name: d.errorInfo.code,
                                 message: d.errorInfo.message
                             })
                         }
                     },
                     openUrl: function(d) {
                         window.location.href = d.url
                     }
                 })
             }
             ,
             g.prototype.initAuthWorkflow = function() {
                 var c = document.querySelector("a#mectrl_main_trigger");
                 c ? (c = c.getAttribute("href"),
                 -1 !== c.indexOf("ru") ? window.location.href = c : this.handleCloseEvents(!1, Error("Unable to get login url."))) : this.handleCloseEvents(!1, Error("Unable to get login node."))
             }
             ,
             g.prototype.getEnvStrFromURLSearchParams = function(c) {
                 return c && window.location.href.includes("buyNowPPE") && "true" === c.get("buyNowPPE") ? "ppe" : "prod"
             }
             ,
             g.prototype.triggerPurchaseIfReady = function(c) {
                 return ec(this, void 0, void 0, function() {
                     var d, f, k, r, q, E, y, p, T, ja, da, Z = this;
                     return xg(this, function(ma) {
                         switch (ma.label) {
                         case 0:
                             return d = this.props,
                             f = d.products,
                             k = d.locale,
                             r = d.cV,
                             q = d.pageTheme,
                             E = d.eventHandler,
                             [4, Tb.isUserSignedIn()];
                         case 1:
                             return ma.sent() ? [4, Tb.getCompactTicket()] : (window.sessionStorage.setItem("buyNowProducts", JSON.stringify(f)),
                             this.initAuthWorkflow(),
                             [2]);
                         case 2:
                             if (!(y = ma.sent()))
                                 return this.handleCloseEvents(!1, Error("Unable to get compact ticket.")),
                                 [2];
                             p = Pe.getMsCV() ? Pe.getMsCV().increment().toString() : r;
                             T = new URLSearchParams(window.location.search);
                             ja = this.getEnvStrFromURLSearchParams(T);
                             ma.label = 3;
                         case 3:
                             return ma.trys.push([3, 5, , 6]),
                             [4, new Promise(function(wa, Ia) {
                                 var ya = setTimeout(function() {
                                     Ia(Error("Failed to initialize the Buy Now iframe after 10s."))
                                 }, 1E4);
                                 (0,
                                 wg.invokePurchaseInFrame)(Z.frameRef.current, {
                                     authToken: y,
                                     products: c || f,
                                     locale: k,
                                     market: null == k ? void 0 : k.toLowerCase().replace(/.*-/, "").toLowerCase(),
                                     cV: p,
                                     selectEnv: "ppe" == ja ? "ppe" : void 0,
                                     layout: "Modal",
                                     clientType: "CascadeWebStore",
                                     cssOverride: "UniversalWebStore",
                                     theme: !q || q.toLowerCase().includes("light") ? "light" : "dark",
                                     campaignOptions: {
                                         flights: [],
                                         campaignId: T.get("cid") || "",
                                         optionalCampaignId: T.get("ocid") || ""
                                     }
                                 }).then(function(xa) {
                                     clearTimeout(ya);
                                     wa(xa)
                                 }).catch(function(xa) {
                                     clearTimeout(ya);
                                     Ia(xa)
                                 })
                             }
                             )];
                         case 4:
                             return ma.sent() ? (this.setState({
                                 displayBuyNow: !0
                             }),
                             E && E.postOpenModal && E.postOpenModal()) : window.location.reload(),
                             [3, 6];
                         case 5:
                             return da = ma.sent(),
                             this.handleCloseEvents(!1, da),
                             [3, 6];
                         case 6:
                             return [2]
                         }
                     })
                 })
             }
             ,
             g.prototype.componentDidMount = function() {
                 var c;
                 return ec(this, void 0, void 0, function() {
                     var d, f;
                     return xg(this, function(k) {
                         switch (k.label) {
                         case 0:
                             return [4, Tb.isUserSignedIn()];
                         case 1:
                             return d = k.sent(),
                             window.addEventListener("message", this.messageListener),
                             d && (null === window || void 0 === window ? void 0 : window.sessionStorage) && window.sessionStorage.getItem("buyNowProducts") && ((null === (c = this.props.eventHandler) || void 0 === c ? void 0 : c.preOpenModal) && this.props.eventHandler.preOpenModal(),
                             f = JSON.parse(sessionStorage.getItem("buyNowProducts")),
                             window.sessionStorage.removeItem("buyNowProducts"),
                             this.triggerPurchaseIfReady(f)),
                             [2]
                         }
                     })
                 })
             }
             ,
             g.prototype.componentWillUnmount = function() {
                 window.removeEventListener("message", this.messageListener)
             }
             ,
             g.prototype.render = function() {
                 return n().createElement(n().Fragment, null, n().createElement("div", {
                     className: this.state.displayBuyNow ? "modal fade show d-block" : "d-none",
                     id: "buy-now-modal",
                     tabIndex: -1,
                     role: "dialog",
                     "aria-label": "buy now modal",
                     "aria-modal": !0
                 }, n().createElement("div", {
                     className: "modal-dialog",
                     role: "document"
                 }, n().createElement("iframe", {
                     title: "Buy Now Frame",
                     name: "buy-now-iframe",
                     id: "buy-now-iframe",
                     className: "buy-now-iframe",
                     ref: this.frameRef
                 }))), n().createElement("div", {
                     className: this.state.displayBuyNow ? "modal-backdrop fade show" : "d-none"
                 }))
             }
             ,
             g
         }(n().Component)
           , Li = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Ib = function() {
             return Ib = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             Ib.apply(this, arguments)
         }
           , Mc = function(e, g, c, d) {
             return new (c || (c = Promise))(function(f, k) {
                 function r(y) {
                     try {
                         E(d.next(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function q(y) {
                     try {
                         E(d.throw(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function E(y) {
                     var p;
                     y.done ? f(y.value) : (p = y.value,
                     p instanceof c ? p : new c(function(T) {
                         T(p)
                     }
                     )).then(r, q)
                 }
                 E((d = d.apply(e, g || [])).next())
             }
             )
         }
           , Nc = function(e, g) {
             function c(E) {
                 return function(y) {
                     return function(p) {
                         if (d)
                             throw new TypeError("Generator is already executing.");
                         for (; q; )
                             try {
                                 if (d = 1,
                                 f && (k = 2 & p[0] ? f.return : p[0] ? f.throw || ((k = f.return) && k.call(f),
                                 0) : f.next) && !(k = k.call(f, p[1])).done)
                                     return k;
                                 switch (f = 0,
                                 k && (p = [2 & p[0], k.value]),
                                 p[0]) {
                                 case 0:
                                 case 1:
                                     k = p;
                                     break;
                                 case 4:
                                     return q.label++,
                                     {
                                         value: p[1],
                                         done: !1
                                     };
                                 case 5:
                                     q.label++;
                                     f = p[1];
                                     p = [0];
                                     continue;
                                 case 7:
                                     p = q.ops.pop();
                                     q.trys.pop();
                                     continue;
                                 default:
                                     if (!(k = q.trys,
                                     (k = 0 < k.length && k[k.length - 1]) || 6 !== p[0] && 2 !== p[0])) {
                                         q = 0;
                                         continue
                                     }
                                     if (3 === p[0] && (!k || p[1] > k[0] && p[1] < k[3]))
                                         q.label = p[1];
                                     else if (6 === p[0] && q.label < k[1])
                                         q.label = k[1],
                                         k = p;
                                     else if (k && q.label < k[2])
                                         q.label = k[2],
                                         q.ops.push(p);
                                     else {
                                         k[2] && q.ops.pop();
                                         q.trys.pop();
                                         continue
                                     }
                                 }
                                 p = g.call(e, q)
                             } catch (T) {
                                 p = [6, T],
                                 f = 0
                             } finally {
                                 d = k = 0
                             }
                         if (5 & p[0])
                             throw p[1];
                         return {
                             value: p[0] ? p[1] : void 0,
                             done: !0
                         }
                     }([E, y])
                 }
             }
             var d, f, k, r, q = {
                 label: 0,
                 sent: function() {
                     if (1 & k[0])
                         throw k[1];
                     return k[1]
                 },
                 trys: [],
                 ops: []
             };
             return r = {
                 next: c(0),
                 throw: c(1),
                 return: c(2)
             },
             "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                 return this
             }
             ),
             r
         }
           , Mf = function() {
             for (var e = [], g = 0; g < arguments.length; g++) {
                 var c = e.concat, d;
                 var f = d = void 0
                   , k = arguments[g]
                   , r = void 0
                   , q = "function" == typeof Symbol && k[Symbol.iterator];
                 if (q) {
                     k = q.call(k);
                     var E = [];
                     try {
                         for (; (void 0 === r || 0 < r--) && !(f = k.next()).done; )
                             E.push(f.value)
                     } catch (y) {
                         d = {
                             error: y
                         }
                     } finally {
                         try {
                             f && !f.done && (q = k.return) && q.call(k)
                         } finally {
                             if (d)
                                 throw d.error;
                         }
                     }
                     d = E
                 } else
                     d = k;
                 e = c.call(e, d)
             }
             return e
         }
           , Yb = function(e) {
             function g(c) {
                 var d, f = e.call(this, c) || this;
                 if (f.grabGoButtonRef = n().createRef(),
                 f.grabGoButtonData = {
                     text: "",
                     jsll: ""
                 },
                 f.buyNowModalRef = n().createRef(),
                 f.setOrignalTrigger = function(k) {
                     return f.grabGoOriginalTrigger = k
                 }
                 ,
                 f.disableClick = function(k) {
                     k.preventDefault()
                 }
                 ,
                 f.outerLinkCtaClick = function(k) {
                     document.dispatchEvent(new CustomEvent("GRAB-GO-CONFIGURE",{
                         bubbles: !0
                     }))
                 }
                 ,
                 f.onGrabGoToggled = function(k) {
                     var r = "on" === k.detail.onOff;
                     f.toggleGrabGoOuterLink(r);
                     f.setState({
                         isGrabGo: r
                     });
                     window.sessionStorage.setItem("isGrabGo", k.detail.onOff);
                     r && ea(f.props.grabGoModalId);
                     console.debug("grab-n-go toggled ", k);
                     setTimeout(function() {
                         var q;
                         if (f.props.showNavSummary)
                             f.setState(Ib(Ib({}, f.state), {
                                 triggerEl: r ? f.grabGoButtonRef.current : null,
                                 gngCallback: r ? f.setOrignalTrigger : null
                             }));
                         else {
                             var E = r ? [f.grabGoButtonRef.current, function(y) {
                                 return f.grabGoOriginalTrigger = y
                             }
                             ] : [];
                             (q = f.eventManager).publishBuyBoxProductInfo.apply(q, Mf(E))
                         }
                     }, 500)
                 }
                 ,
                 f.toggleGrabGoOuterLink = function(k) {
                     var r = function(q, E, y) {
                         var p;
                         E = new RegExp(E,"gi");
                         for (var T = 0, ja = q.attributes, da = ja.length; T < da; T++)
                             "data-bi-cn" !== ja[T].nodeName && "data-bi-ecn" !== ja[T].nodeName || q.setAttribute(ja[T].nodeName, null === (p = ja[T].nodeValue) || void 0 === p ? void 0 : p.replace(E, y))
                     };
                     Mf(Array.from(document.querySelectorAll("[data-href\x3d'#buybox-cta-proper']")), Array.from(document.querySelectorAll("[href\x3d'#buybox-cta-proper']"))).forEach(function(q) {
                         q && (q.style.cursor = "pointer",
                         q.setAttribute("tabindex", "0"),
                         q.getAttribute("data-href") || (q.setAttribute("data-href", q.getAttribute("href")),
                         q.removeAttribute("href")),
                         k ? (q.innerText = f.props.grabGoTriggerCtaText,
                         r(q, f.props.text, f.props.grabGoTriggerCtaText),
                         q.removeEventListener("click", f.outerLinkCtaClick),
                         q.onclick = function(E) {
                             var y;
                             f.grabGoOriginalTrigger = q;
                             null === (y = f.grabGoButtonRef.current) || void 0 === y || y.click()
                         }
                         ) : (q.addEventListener("click", f.outerLinkCtaClick),
                         q.removeAttribute("data-target"),
                         q.innerText = f.props.text,
                         r(q, f.props.grabGoTriggerCtaText, f.props.text)),
                         console.debug(q))
                     })
                 }
                 ,
                 f.resetFocus = function(k) {
                     if (k.target.isSameNode(document.querySelector("#" + f.props.grabGoModalId + ' button.close[data-dismiss\x3d"modal"]')) && f.grabGoOriginalTrigger) {
                         k.preventDefault();
                         k.stopPropagation();
                         f.grabGoButtonRef.current.focus({
                             preventScroll: !0
                         });
                         var r = "string" == typeof f.grabGoOriginalTrigger ? document.querySelector(f.grabGoOriginalTrigger) : f.grabGoOriginalTrigger;
                         f.grabGoOriginalTrigger = null;
                         r && setTimeout(function() {
                             return r.focus()
                         }, 500)
                     }
                 }
                 ,
                 f.state = {
                     isGrabGo: !!c.grabGoModalId && c.isGrabGoEnabled,
                     triggerEl: f.grabGoButtonRef.current,
                     gngCallback: f.setOrignalTrigger
                 },
                 c.grabGoModalId)
                     f.props.showNavSummary || (f.eventManager = new id(c.useProductInfo),
                     f.eventManager.subscribeForGrabGoToggle(f.onGrabGoToggled)),
                     f.grabGoButtonData.text = f.props.grabGoTriggerCtaText || "Shop now",
                     c = new RegExp(f.props.text,"gi"),
                     f.grabGoButtonData.jsll = null === (d = f.props.jsllTag) || void 0 === d ? void 0 : d.replace(c, f.grabGoButtonData.text);
                 return f
             }
             return Li(g, e),
             g.prototype.componentDidMount = function() {
                 var c, d;
                 if (this.props.grabGoModalId && (document.addEventListener("click", this.resetFocus),
                 (this.props.isGrabGoEnabled || (null === (d = null === (c = new URLSearchParams(location.href)) || void 0 === c ? void 0 : c.get("gng")) || void 0 === d ? void 0 : d.startsWith("true"))) && this.onGrabGoToggled({
                     detail: {
                         onOff: "on"
                     }
                 })),
                 this.props.showNavSummary)
                     this.props.grabGoModalId && document.addEventListener("TOGGLE-ATC-GRAB-GO", this.onGrabGoToggled),
                     (c = document.querySelector(".add-to-cart-sticky-modal")) && new mwf.Modal({
                         el: c,
                         displayOnInit: !1
                     })
             }
             ,
             g.prototype.componentWillUnmount = function() {
                 this.props.grabGoModalId && document.removeEventListener("TOGGLE-ATC-GRAB-GO", this.onGrabGoToggled)
             }
             ,
             g.prototype.render = function() {
                 var c = this
                   , d = this.props
                   , f = d.text
                   , k = d.renderAnchor
                   , r = d.href
                   , q = d.ariaLabel
                   , E = d.classes
                   , y = d.disabled
                   , p = d.onClickAction
                   , T = d.additionalProps
                   , ja = d.enableQuickHrefs;
                 d = d.renderAnchorWithGlyph;
                 var da = this.props.isExternal ? this.props.jsllTag.replace('"compnm":"Buy Box"', '"compnm":"Sticky Tabs"') : this.props.jsllTag;
                 return this.props.grabGoModalId && this.state.isGrabGo ? n().createElement(n().Fragment, null, n().createElement("button", Ib({
                     className: "btn " + (E || ""),
                     "aria-label": this.grabGoButtonData.text,
                     "data-target": "#" + this.props.grabGoModalId,
                     disabled: y,
                     "data-m": this.grabGoButtonData.jsll,
                     "data-automation-test-id": "grab-go-button",
                     ref: this.grabGoButtonRef
                 }, T), this.grabGoButtonData.text)) : this.props.isInterstitialModalEnabled && this.props.interstitialModalId ? n().createElement(n().Fragment, null, n().createElement("button", Ib({
                     className: "btn " + (E || ""),
                     "aria-label": q,
                     disabled: y,
                     "data-m": da,
                     onClick: function(Z) {
                         return Mc(c, void 0, void 0, function() {
                             return Nc(this, function(ma) {
                                 return this.props.onClickAction && this.props.onClickAction(Z),
                                 [2]
                             })
                         })
                     },
                     "data-automation-test-id": "buy-box-button" + ("secondaryCTA" == this.props.idPrefix ? "-" + this.props.idPrefix : "")
                 }, T), f)) : this.props.buyNowDetails ? n().createElement(n().Fragment, null, n().createElement("button", Ib({
                     className: "btn " + (E || ""),
                     "aria-label": q,
                     disabled: y,
                     "data-m": da,
                     "data-automation-test-id": "buy-now-modal-button",
                     onClick: function(Z) {
                         return Mc(c, void 0, void 0, function() {
                             return Nc(this, function(ma) {
                                 return this.props.onClickAction && this.props.onClickAction(Z),
                                 this.buyNowModalRef.current.triggerPurchaseIfReady(),
                                 [2]
                             })
                         })
                     }
                 }, T), f), n().createElement(Ed, Ib({
                     ref: this.buyNowModalRef
                 }, this.props.buyNowDetails))) : d ? n().createElement(n().Fragment, null, n().createElement("a", Ib({
                     className: "cta " + (E || ""),
                     "aria-label": q,
                     "data-m": da,
                     id: "buybox-cta-proper",
                     href: r || "javascript:void(0)",
                     onClick: p ? function(Z) {
                         ja && Z.preventDefault();
                         p(Z)
                     }
                     : null,
                     "data-automation-test-id": "buy-box-anchor-button"
                 }, T), f, " ", n().createElement("span", {
                     className: "glyph",
                     "aria-hidden": "true"
                 })), n().createElement(ha, {
                     enableQuickHrefs: this.props.enableQuickHrefs,
                     getInitialHref: this.props.getInitialHref,
                     hrefDefined: !!r
                 })) : k ? n().createElement(n().Fragment, null, n().createElement("a", Ib({
                     className: "btn " + (y ? "disabled" : "") + " " + (E || ""),
                     "aria-label": q,
                     "aria-disabled": y,
                     tabIndex: y ? -1 : void 0,
                     "data-m": da,
                     id: "buybox-cta-proper",
                     href: r || "javascript:void(0)",
                     onClick: y ? this.disableClick : p ? function(Z) {
                         ja && Z.preventDefault();
                         p(Z)
                     }
                     : null,
                     "data-automation-test-id": "buy-box-anchor-button"
                 }, T), f), n().createElement(ha, {
                     enableQuickHrefs: this.props.enableQuickHrefs,
                     getInitialHref: this.props.getInitialHref,
                     hrefDefined: !!r
                 })) : this.props.isModalEnabled && this.props.modalBody && this.props.modalLabel && this.props.modalId ? n().createElement(Xa.Consumer, null, function(Z) {
                     Z = Z.buyboxStaticStrings;
                     return n().createElement(n().Fragment, null, n().createElement("button", {
                         className: "btn " + (E || ""),
                         "aria-label": q,
                         "data-target": c.props.isExternal ? "add-to-cart-sticky-modal" : "#" + c.props.modalId,
                         disabled: y,
                         "data-m": da,
                         "data-automation-test-id": "buy-box-button"
                     }, f), !c.props.isExternal && c.getModal(Z, da, p, "add-to-cart-sticky-modal", "add-to-cart-sticky-modal"), !c.props.isExternal && c.getModal(Z, da, p, c.props.modalId, ""))
                 }) : n().createElement("button", Ib({
                     className: "btn " + (E || ""),
                     id: "buybox-cta" + (this.props.isExternal ? "" : "-proper") + ("secondaryCTA" == this.props.idPrefix ? "-" + this.props.idPrefix : ""),
                     "aria-label": q,
                     disabled: y,
                     "data-m": da,
                     onClick: p,
                     "data-automation-test-id": "buy-box-button" + ("secondaryCTA" == this.props.idPrefix ? "-" + this.props.idPrefix : "")
                 }, T), f)
             }
             ,
             g.prototype.getModal = function(c, d, f, k, r) {
                 return n().createElement(fe, {
                     id: k,
                     ariaLabelledbyId: "addToCartModalLabel-" + k,
                     scrollableclass: "modal-dialog-scrollable",
                     modalIdentifierClass: r
                 }, n().createElement("div", {
                     className: "modal-header"
                 }, n().createElement("h2", {
                     className: "modal-title sr-only",
                     id: "addToCartModalLabel-" + k,
                     "data-automation-test-id": "buy-box-addToCart-modal-title-" + k
                 }, c.BEFORE_YOU_BUY || "Before you buy"), n().createElement("button", {
                     type: "button",
                     className: "close",
                     "data-dismiss": "modal",
                     "aria-label": c.CLOSE_DIALOG_WINDOW || "Close dialog window",
                     title: "Close",
                     "data-automation-test-id": "buy-box-addToCart-modal-close-button-" + k
                 })), n().createElement("div", {
                     className: "modal-body"
                 }, n().createElement("div", {
                     "data-automation-test-id": "buy-box-addToCart-modal-body-" + k,
                     dangerouslySetInnerHTML: {
                         __html: this.props.modalBody
                     }
                 })), n().createElement("div", {
                     className: "modal-footer pb-5 justify-content-start"
                 }, n().createElement("button", {
                     type: "button",
                     className: "btn btn-primary",
                     "data-dismiss": "modal",
                     "data-automation-test-id": "buy-box-addToCart-modal-footer-button-" + k,
                     "data-m": d,
                     onClick: f
                 }, this.props.modalLabel), n().createElement("button", {
                     type: "button",
                     className: "btn btn-outline-primary mr-2",
                     "data-dismiss": "modal",
                     "data-automation-test-id": "buy-box-wishlist-modal-footer-button-" + k
                 }, c.CANCEL || "Cancel")))
             }
             ,
             g
         }(n().Component)
           , hi = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Lb = function() {
             return Lb = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             Lb.apply(this, arguments)
         }
           , Jd = function(e) {
             function g(c) {
                 var d = e.call(this, c) || this;
                 return d.setBuyOptionsToggleState = function(f) {
                     d.setState({
                         toggleExpanded: !d.state.toggleExpanded
                     })
                 }
                 ,
                 d.state = {
                     toggleExpanded: !1
                 },
                 d
             }
             return hi(g, e),
             g.prototype.render = function() {
                 var c, d = this, f = this.props.jsllTag;
                 return c = this.props.additionalBuyOptions && 0 < this.props.additionalBuyOptions.length ? "buy-box-split-buy-buttons" : "",
                 this.props.wrapperClasses && (c = c + " " + this.props.wrapperClasses),
                 n().createElement("div", {
                     className: c
                 }, n().createElement(Me.Consumer, null, function(k) {
                     var r;
                     k = k.flightedFeatures;
                     return n().createElement(n().Fragment, null, n().createElement(Yb, {
                         text: d.props.text,
                         renderAnchor: d.props.renderAnchor,
                         classes: "" + (d.props.classes ? d.props.classes : ""),
                         ariaLabel: d.props.ariaLabel,
                         disabled: d.props.disabled,
                         jsllTag: f,
                         href: d.props.href,
                         onClickAction: d.props.onClickAction,
                         additionalProps: d.props.additionalProps,
                         enableQuickHrefs: k.enableQuickHrefs,
                         getInitialHref: d.props.getInitialHref,
                         isModalEnabled: d.props.isAddtoCartModalEnabled,
                         modalBody: d.props.addtoCartModalBody,
                         modalLabel: d.props.addtoCartModalLabel,
                         modalId: d.props.modalId,
                         useProductInfo: null === (r = d.props.useProductInfo) || void 0 === r || r,
                         productId: d.props.productId,
                         grabGoModalId: d.props.grabGoModalId,
                         isGrabGoEnabled: d.props.isGrabGoEnabled,
                         grabGoTriggerCtaText: d.props.grabGoTriggerCtaText,
                         idPrefix: d.props.idPrefix,
                         buyNowDetails: d.props.buyNowDetails,
                         isExternal: d.props.isExternal,
                         renderAnchorWithGlyph: d.props.renderAnchorWithGlyph,
                         isInterstitialModalEnabled: d.props.isInterstitialModalEnabled,
                         interstitialModalId: d.props.interstitialModalId
                     }), d.renderAdditionalBuyOptions())
                 }))
             }
             ,
             g.prototype.renderAdditionalBuyOptions = function() {
                 var c = this.props
                   , d = c.additionalBuyOptions;
                 c = c.idPrefix;
                 if (this.state.toggleExpanded ? this.props.dropdownJsllTag.bhvr = "8" : this.props.dropdownJsllTag.bhvr = "7",
                 d && 0 < d.length)
                     return n().createElement("div", {
                         className: "dropdown additional-buy-options"
                     }, n().createElement("button", {
                         className: "btn btn-faint-secondary glyph-prepend glyph-prepend-more dropdown-toggle " + (this.state.toggleExpanded ? "active" : ""),
                         id: c + "mwf7cfcee00",
                         "aria-label": "Show More",
                         "data-m": ib(this.props.dropdownJsllTag),
                         "data-mount": "dropdown",
                         "aria-expanded": this.state.toggleExpanded,
                         "aria-controls": c + "mwfbf10c829",
                         onClick: this.setBuyOptionsToggleState
                     }), n().createElement("ul", {
                         className: "dropdown-menu " + (this.state.toggleExpanded ? "show" : ""),
                         id: c + "mwfbf10c829",
                         "aria-labelledby": c + "mwf7cfcee00"
                     }, d.map(function(f, k) {
                         return n().createElement("li", {
                             key: k
                         }, f.actionLink && n().createElement("a", Lb({
                             className: "dropdown-item",
                             href: f.actionLink,
                             "data-m": f.jsllTag,
                             onClick: f.onClickAction
                         }, f.additionalProps), f.text), !f.actionLink && n().createElement("button", Lb({
                             className: "dropdown-item",
                             "data-m": f.jsllTag,
                             onClick: f.onClickAction
                         }, f.additionalProps), f.text))
                     })))
             }
             ,
             g
         }(n().Component)
           , Hb = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Vc = function() {
             return Vc = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             Vc.apply(this, arguments)
         }
           , kd = function(e, g) {
             var c = "function" == typeof Symbol && e[Symbol.iterator];
             if (!c)
                 return e;
             var d;
             e = c.call(e);
             var f = [];
             try {
                 for (; (void 0 === g || 0 < g--) && !(d = e.next()).done; )
                     f.push(d.value)
             } catch (r) {
                 var k = {
                     error: r
                 }
             } finally {
                 try {
                     d && !d.done && (c = e.return) && c.call(e)
                 } finally {
                     if (k)
                         throw k.error;
                 }
             }
             return f
         }
           , rc = function(e) {
             function g(c) {
                 return e.call(this, c) || this
             }
             return Hb(g, e),
             g.prototype.render = function() {
                 var c = this
                   , d = kd(this.props.actions, 2)
                   , f = d[0]
                   , k = d[1];
                 return n().createElement(Xa.Consumer, null, function(r) {
                     r = r.buyboxStaticStrings;
                     return n().createElement(n().Fragment, null, n().createElement(Jd, Vc({}, f, {
                         idPrefix: "primaryCTA",
                         getInitialHref: c.props.actions[0].getInitialHref
                     })), n().createElement("p", {
                         className: "buy-button-separator my-2"
                     }, (0,
                     ta.zH)(r, "OR", "Or")), n().createElement(Jd, Vc({}, k, {
                         idPrefix: "secondaryCTA",
                         getInitialHref: c.props.actions[1].getInitialHref
                     })))
                 })
             }
             ,
             g
         }(n().Component);
         const Mg = function(e) {
             var g = e.hasError;
             e = e.errorMessage;
             return n().createElement(Rc, {
                 isHidden: !g
             }, n().createElement("div", {
                 className: "errorState",
                 role: "alert",
                 "aria-live": "assertive"
             }, e))
         };
         var ye = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Id = function() {
             return Id = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             Id.apply(this, arguments)
         }
           , wf = function(e, g, c, d) {
             return new (c || (c = Promise))(function(f, k) {
                 function r(y) {
                     try {
                         E(d.next(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function q(y) {
                     try {
                         E(d.throw(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function E(y) {
                     var p;
                     y.done ? f(y.value) : (p = y.value,
                     p instanceof c ? p : new c(function(T) {
                         T(p)
                     }
                     )).then(r, q)
                 }
                 E((d = d.apply(e, g || [])).next())
             }
             )
         }
           , Mh = function(e, g) {
             function c(E) {
                 return function(y) {
                     return function(p) {
                         if (d)
                             throw new TypeError("Generator is already executing.");
                         for (; q; )
                             try {
                                 if (d = 1,
                                 f && (k = 2 & p[0] ? f.return : p[0] ? f.throw || ((k = f.return) && k.call(f),
                                 0) : f.next) && !(k = k.call(f, p[1])).done)
                                     return k;
                                 switch (f = 0,
                                 k && (p = [2 & p[0], k.value]),
                                 p[0]) {
                                 case 0:
                                 case 1:
                                     k = p;
                                     break;
                                 case 4:
                                     return q.label++,
                                     {
                                         value: p[1],
                                         done: !1
                                     };
                                 case 5:
                                     q.label++;
                                     f = p[1];
                                     p = [0];
                                     continue;
                                 case 7:
                                     p = q.ops.pop();
                                     q.trys.pop();
                                     continue;
                                 default:
                                     if (!(k = q.trys,
                                     (k = 0 < k.length && k[k.length - 1]) || 6 !== p[0] && 2 !== p[0])) {
                                         q = 0;
                                         continue
                                     }
                                     if (3 === p[0] && (!k || p[1] > k[0] && p[1] < k[3]))
                                         q.label = p[1];
                                     else if (6 === p[0] && q.label < k[1])
                                         q.label = k[1],
                                         k = p;
                                     else if (k && q.label < k[2])
                                         q.label = k[2],
                                         q.ops.push(p);
                                     else {
                                         k[2] && q.ops.pop();
                                         q.trys.pop();
                                         continue
                                     }
                                 }
                                 p = g.call(e, q)
                             } catch (T) {
                                 p = [6, T],
                                 f = 0
                             } finally {
                                 d = k = 0
                             }
                         if (5 & p[0])
                             throw p[1];
                         return {
                             value: p[0] ? p[1] : void 0,
                             done: !0
                         }
                     }([E, y])
                 }
             }
             var d, f, k, r, q = {
                 label: 0,
                 sent: function() {
                     if (1 & k[0])
                         throw k[1];
                     return k[1]
                 },
                 trys: [],
                 ops: []
             };
             return r = {
                 next: c(0),
                 throw: c(1),
                 return: c(2)
             },
             "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                 return this
             }
             ),
             r
         }
           , xf = function(e) {
             function g(c) {
                 var d = e.call(this, c) || this;
                 (d.redirectCartUrl = "",
                 d.onEventSubscriptionCallback = function(f) {
                     d.props.productAction.action === Ma.AddToCart && d.props.isAddtoCartModalEnabled && d.props.addtoCartModal && d.props.addtoCartModal.primaryBody && d.props.addtoCartModal.primaryLabel || d.handleProductActionsCore(f.detail)
                 }
                 ,
                 d.onGrabGoAddToCart = function(f) {
                     var k, r = f.detail, q = r.availabilityId;
                     r = r.skuId;
                     console.debug("add to cart event: ", f);
                     d.grabGoProps.staticBundleProducts = f.detail.staticBundle;
                     d.grabGoProps.bundleId = null === (k = f.detail.staticBundle) || void 0 === k ? void 0 : k.bundleId;
                     d.handleProductActionsCore(Ma.AddToCart, q, r)
                 }
                 ,
                 d.onGrabGoConfigure = function(f) {
                     console.debug(f);
                     d.handleProductActionsCore(Ma.ConfigureDevice)
                 }
                 ,
                 d.onClickActionHandler = function(f, k, r) {
                     f && d.handleProductActionsCore(f, k, r)
                 }
                 ,
                 d.setShippingMsg = function() {
                     try {
                         window.sessionStorage.setItem("shippingMessageConfigurator", JSON.stringify({
                             msg: d.props.selectedSku.shippingMessage,
                             bigid: d.props.requestParams.productId,
                             locale: d.props.requestParams.locale
                         }))
                     } catch (f) {
                         throw Error(f.message);
                     }
                 }
                 ,
                 d.getCodeToGetQsp = function(f) {
                     f = f.toString().replace(/,/g, "|");
                     return "\n            window.location.href\n                .replace(/\x26+(" + f + ')\x3d[^\x26]*/g, "")\n                .replace(/\\?+(' + f + ')\x3d[^\x26]*\x26/g, "?")\n                .replace(/\\?+(' + f + ')\x3d[^\x26]*/g, "")\n                .match(/\\?.*/)\n        '
                 }
                 ,
                 d.getInitialHrefBuilder = function() {
                     var f = d.props.productAction.action;
                     if (f) {
                         var k = d.getTransformedProductTitle(d.props.productTitle)
                           , r = d.props.requestParams
                           , q = r.locale;
                         r = r.productId;
                         var E = ["activetab", "cartPPE", "cartPERF"];
                         switch (f) {
                         case Ma.BuildABundle:
                             return k = "https://www.microsoft.com/$locale/store/build/$productTitle/$bigId".replace("$locale", q).replace("$productTitle", k).replace("$bigId", r),
                             "\n                        function addHrefToBuild() {\n                            var queryString \x3d " + d.getCodeToGetQsp(E) + ';\n                            var finalUrl \x3d "' + k + '";\n                            if (queryString) {\n                                if (finalUrl.search(/\\?/) \x3e 0) {\n                                    queryString \x3d queryString[0].replace(/\\?/, "\x26");\n                                }\n                                finalUrl \x3d finalUrl + queryString;\n                            }\n                            return finalUrl;\n                        }\n                    ';
                         case Ma.ConfigureDevice:
                             return f = (f = d.props.selectedSku) && f.colorHexCode ? f.colorHexCode.replace("#", "") : "",
                             r = (E = d.props.requestParams.skuId) ? r + "/" + E : r,
                             k = "https://$hostname/$locale$sandboxPath/store/configure/$productTitle/$bigId".replace("$locale", q).replace("$productTitle", k).replace("$bigId", r),
                             k = new URL(k),
                             f && k.searchParams.append("selectedColor", f),
                             "\n                        function addHrefToConfigure() {\n                            var queryString \x3d " + d.getCodeToGetQsp(["activetab"]) + ';\n\n                            var configureUrl \x3d "' + k.toString() + '";\n\n                            var windowsanyIndex \x3d window.location.href.search("windowsany");\n\n                            if (windowsanyIndex \x3e 0) {\n                                var subUrl \x3d window.location.href.substr(windowsanyIndex + 1);\n                                configureUrl \x3d configureUrl\n                                    .replace("$hostname", window.location.hostname)\n                                    .replace("$sandboxPath", "/windowsany/$user")\n                                    .replace("$user", subUrl.split("/")[1]);\n                            }\n                            else if (window.location.hostname.search("localhost") \x3e\x3d 0) {\n                                configureUrl \x3d configureUrl\n                                    .replace("$hostname", "wwwdev.microsoft.com")\n                                    .replace("$sandboxPath", "");\n                            }\n                            else {\n                                configureUrl \x3d configureUrl\n                                    .replace("$hostname", window.location.hostname)\n                                    .replace("$sandboxPath", "");\n                            }\n                            \n                            var finalUrl \x3d configureUrl;\n                            if (queryString) {\n                                if (finalUrl.search(/\\?/) \x3e 0) {\n                                    queryString \x3d queryString[0].replace(/\\?/, "\x26");\n                                }\n                                finalUrl \x3d finalUrl + queryString;\n                            }\n                            return finalUrl;\n                        }\n                    ';
                         case Ma.Manage:
                             return '\n                        function addHrefToManage() {\n                            return "' + d.props.productAction.uri.toString() + '";\n                        }\n                    ';
                         default:
                             return '\n                        function addHrefToCart() {\n                            return "javascript:void(0)";\n                        }\n                    '
                         }
                     }
                 }
                 ,
                 d.handleProductActionsCore = function(f, k, r) {
                     return wf(d, void 0, void 0, function() {
                         var q, E;
                         return Mh(this, function(y) {
                             switch (y.label) {
                             case 0:
                                 switch (q = "",
                                 f) {
                                 case Ma.AddToCart:
                                     return [3, 1];
                                 case Ma.ConfigureDevice:
                                     return [3, 3];
                                 case Ma.BuildABundle:
                                     return [3, 4];
                                 case Ma.Manage:
                                     return [3, 5];
                                 case Ma.Buy:
                                     return [3, 6]
                                 }
                                 return [3, 10];
                             case 1:
                                 return [4, this.invokeAddToCart(k, r)];
                             case 2:
                                 return y.sent(),
                                 [3, 10];
                             case 3:
                                 return q = this.redirectToConfigurator(),
                                 [3, 10];
                             case 4:
                                 return q = this.redirectToBuild(),
                                 [3, 10];
                             case 5:
                                 return q = this.manageRedirect(),
                                 [3, 10];
                             case 6:
                                 return (null === (E = this.props.selectedSku) || void 0 === E ? 0 : E.enableBuyNowModal) ? (this.invokeBuyNow(),
                                 [3, 9]) : [3, 7];
                             case 7:
                                 return [4, this.invokeAddToCart(k, r)];
                             case 8:
                                 y.sent(),
                                 y.label = 9;
                             case 9:
                                 return [3, 10];
                             case 10:
                                 return q && (window.location.href = q),
                                 [2]
                             }
                         })
                     })
                 }
                 ,
                 d.manageRedirect = function() {
                     return "https://account.microsoft.com/services/"
                 }
                 ,
                 d.redirectToBuild = function() {
                     var f, k = Ad(window.location.href, ["activetab", "cartPERF"]), r = d.getTransformedProductTitle(d.props.productTitle), q = d.props.requestParams, E = q.productId;
                     return f = "https://www.microsoft.com/$locale/store/build/$productTitle/$bigId?cid\x3d\x26preview\x3d\x26previewModes\x3d".replace("$locale", q.locale).replace("$productTitle", r).replace("$bigId", E),
                     k ? f + "\x26" + k : f
                 }
                 ,
                 d.getTransformedProductTitle = function(f) {
                     var k = "";
                     f = f.replace(/[^a-zA-Z0-9]/gi, " ").split(" ");
                     for (var r = 0; r < f.length; r++)
                         "" !== f[r] && (k = k.concat(f[r], "-"));
                     return k && 0 < k.length && (k = k.substring(0, k.length - 1)),
                     k || "product"
                 }
                 ,
                 d.redirectToConfigurator = function() {
                     d.props.selectedSku && d.props.selectedSku.shippingMessage && !d.props.enableQuickHrefs && d.setShippingMsg();
                     var f = Ad(window.location.href, ["activetab"])
                       , k = d.getTransformedProductTitle(d.props.productTitle)
                       , r = d.props.selectedSku && d.props.selectedSku.colorHexCode ? d.props.selectedSku.colorHexCode.replace("#", "") : ""
                       , q = d.props.requestParams.locale
                       , E = d.props.requestParams.skuId ? d.props.requestParams.productId + "/" + d.props.requestParams.skuId : d.props.requestParams.productId;
                     if (window.location.href.includes("windowsany")) {
                         var y = window.location.href.substr(window.location.href.indexOf("windowsany") + 1).split("/")[1];
                         y = "https://$hostname/$locale/windowsany/$user/store/configure/$productTitle/$bigId?crosssellid\x3d\x26selectedColor\x3d$color".replace("$hostname", window.location.hostname).replace("$user", y)
                     } else
                         y = window.location.hostname.includes("localhost") ? "https://wwwdev.microsoft.com/$locale/store/configure/$productTitle/$bigId?crosssellid\x3d\x26selectedColor\x3d$color" : "https://$hostName/$locale/store/configure/$productTitle/$bigId?crosssellid\x3d\x26selectedColor\x3d$color".replace("$hostName", window.location.hostname);
                     return y = y.replace("$locale", q).replace("$productTitle", k).replace("$bigId", E).replace("$color", r),
                     f ? y + "\x26" + f : y
                 }
                 ,
                 d.getBuyNowDetails = function() {
                     var f, k;
                     if (null === (f = d.props.selectedSku) || void 0 === f || !f.enableBuyNowModal)
                         return null;
                     var r = d.props.requestParams;
                     f = r.productId;
                     r = r.locale;
                     var q = [];
                     return d.props.staticBundleProducts ? d.props.staticBundleProducts.cards.forEach(function(E) {
                         q.push({
                             productId: E.productId,
                             skuId: E.skuId,
                             availabilityId: E.availabilityId
                         })
                     }) : q.push({
                         productId: f,
                         skuId: d.props.selectedSku.skuId,
                         availabilityId: d.props.selectedSku.availabilityId
                     }),
                     {
                         products: q,
                         locale: r,
                         cV: null === (k = d.props.addToCartHash) || void 0 === k ? void 0 : k.cV,
                         pageTheme: d.props.pageTheme,
                         eventHandler: {
                             postComplete: function(E, y) {
                                 d.setState({
                                     showSpinner: !1,
                                     showErrorState: !!y,
                                     disableButton: E
                                 });
                                 E && window.location.reload()
                             },
                             preOpenModal: function() {
                                 d.setState({
                                     showSpinner: !0,
                                     showErrorState: !1
                                 })
                             },
                             postOpenModal: function() {
                                 d.setState({
                                     showSpinner: !1,
                                     showErrorState: !1
                                 })
                             }
                         }
                     }
                 }
                 ,
                 d.invokeBuyNow = function() {
                     d.setState({
                         showSpinner: !0
                     })
                 }
                 ,
                 d.getInterstitalUrl = function(f) {
                     var k = {
                         baseUrl: "",
                         redirectURL: ""
                     };
                     if (d.props.requestParams.enableBuyBoxInterstitial) {
                         var r = d.props.requestParams.interstitialKey ? d.props.requestParams.interstitialKey : "_";
                         k.baseUrl = "https://www.microsoft.com/$locale/store/buy".replace("$locale", f.locale);
                         k.redirectURL = k.baseUrl + "?route\x3dinterstitial\x26navigationhint\x3dinterstitial\x26p\x3d" + f.productId.toUpperCase() + "-" + f.skuId + "-" + f.availabilityId;
                         k.redirectURL = "_" !== r ? k.redirectURL + ",c-" + r : k.redirectURL
                     }
                     return k
                 }
                 ,
                 d.invokeAddToCart = function(f, k) {
                     return wf(d, void 0, void 0, function() {
                         var r, q, E, y, p, T, ja, da, Z, ma, wa, Ia, ya, xa, Ua, Ya, Ga, Za = this;
                         return Mh(this, function(ub) {
                             switch (ub.label) {
                             case 0:
                                 return this.setState({
                                     showSpinner: !0,
                                     hasError: !1
                                 }),
                                 r = this.props.requestParams,
                                 q = r.locale,
                                 E = r.deviceFamily,
                                 y = r.productId,
                                 [4, na(p = this.grabGoProps.bundleId ? function(fb, mb, Vb, nb) {
                                     var Cb, Wb, kc = mb.bundleId, Bc = {
                                         productId: null,
                                         skuId: null,
                                         quantity: 1
                                     }, Jb = [];
                                     mb.bundleProducts.forEach(function(eb) {
                                         var pb = {
                                             productId: eb.productId,
                                             skuId: eb.skuId,
                                             availabilityId: eb.availabilityId,
                                             slotid: eb.slotId,
                                             quantity: 1
                                         };
                                         fb == eb.productId || 0 == eb.slotId ? (Cb = pb.availabilityId,
                                         Wb = pb.skuId,
                                         Bc = ge({}, pb)) : Jb.push(pb)
                                     });
                                     mb = df(Vb, fb, Wb, Cb, !0, !0, [{
                                         bundleId: kc,
                                         heroProduct: Bc,
                                         subItems: Jb
                                     }], nb);
                                     return mb.itemsData = cf(mb),
                                     mb
                                 }(y, this.grabGoProps.staticBundleProducts, q, null) : this.getPayloadDetails(y, f, k, q, E), {
                                     addToCartHash: this.props.addToCartHash,
                                     enableUcsExp: this.props.enableUcsExp,
                                     isBusinessUserSignedIn: this.props.isBusinessUserSignedIn
                                 })];
                             case 1:
                                 return T = ub.sent(),
                                 ja = T.redirectCartUrl,
                                 da = T.code,
                                 Z = T.cvValue,
                                 ma = T.errorMessage,
                                 wa = T.type,
                                 Ia = T.status,
                                 this.props.requestParams.enableBuyBoxInterstitial ? (ya = this.getInterstitalUrl(p).redirectURL,
                                 xa = Ad(window.location.href, ["activetab", "Invisibiliarevelare", "cartPPE"]),
                                 this.redirectCartUrl = xa ? ya + "\x26" + xa : ya) : this.redirectCartUrl = ja,
                                 null === da || "warning" === wa ? this.props.isInterstitialModalEnabled && this.props.interstitialModalId && (200 === Ia || this.props.isAuthor) ? (Ua = document.querySelectorAll("#" + this.props.interstitialModalId),
                                 mwf.Modal.getInstances().forEach(function(fb) {
                                     Array.from(Ua).find(function(mb) {
                                         var Vb;
                                         return mb.getAttribute("id") === (null === (Vb = fb.el) || void 0 === Vb ? void 0 : Vb.id)
                                     }) && setTimeout(function() {
                                         Za.setState({
                                             hasError: !1,
                                             errorMessage: "",
                                             showSpinner: !1
                                         });
                                         fb.show()
                                     }, 2500)
                                 }),
                                 Ya = new CustomEvent("INTERSTITIAL_HERO_ADD_TO_CART",{
                                     detail: {
                                         redirectUrl: ja
                                     }
                                 }),
                                 window.dispatchEvent(Ya)) : this.closeSpinnerAndRedirect() : null === ma ? this.setState({
                                     hasError: !1,
                                     errorMessage: "",
                                     showSpinner: !1
                                 }) : (null === (Ga = document.querySelector(".modal.show button.close")) || void 0 === Ga || Ga.click(),
                                 this.setState({
                                     hasError: !0,
                                     errorMessage: ma,
                                     showSpinner: !1,
                                     cvValue: Z
                                 })),
                                 [2]
                             }
                         })
                     })
                 }
                 ,
                 d.closeSpinnerAndRedirect = function() {
                     d.setState({
                         hasError: !1,
                         errorMessage: "",
                         showSpinner: !1
                     }, function() {
                         window.location.href = d.redirectCartUrl
                     })
                 }
                 ,
                 d.grabGoProps = {
                     bundleId: "",
                     staticBundleProducts: null
                 },
                 d.state = {
                     hasError: !1,
                     showErrorState: !1,
                     errorMessage: "",
                     showSpinner: !1,
                     cvValue: "",
                     disableButton: !1
                 },
                 d.props.showNavSummary) || (new id(c.useProductTitle)).subscribeForProductAction(d.onEventSubscriptionCallback);
                 return d
             }
             return ye(g, e),
             g.prototype.componentDidMount = function() {
                 this.props.selectedSku && this.props.selectedSku.shippingMessage && this.props.enableQuickHrefs && this.setShippingMsg();
                 this.props.grabGoModalId && (document.addEventListener("GRAB-GO-ADD-TO-CART", this.onGrabGoAddToCart),
                 document.addEventListener("GRAB-GO-CONFIGURE", this.onGrabGoConfigure))
             }
             ,
             g.prototype.componentWillUnmount = function() {
                 this.props.grabGoModalId && (document.removeEventListener("GRAB-GO-ADD-TO-CART", this.onGrabGoAddToCart),
                 document.removeEventListener("GRAB-GO-CONFIGURE", this.onGrabGoConfigure))
             }
             ,
             g.prototype.getPayloadDetails = function(c, d, f, k, r) {
                 if (this.props.staticBundleProducts) {
                     var q = {
                         productId: null,
                         skuId: null,
                         quantity: 1
                     }
                       , E = [];
                     this.props.staticBundleProducts.cards.forEach(function(da) {
                         var Z = {
                             productId: da.productId,
                             skuId: da.skuId,
                             availabilityId: da.availabilityId,
                             slotid: da.slotId,
                             quantity: 1
                         };
                         c == da.productId ? (T = Z.availabilityId,
                         ja = Z.skuId,
                         q = Id({}, Z)) : E.push(Z)
                     });
                     var y = [{
                         bundleId: this.props.bundleId,
                         heroProduct: q,
                         subItems: E
                     }]
                 } else {
                     var p = this.props.selectedSku;
                     var T = d || p.availabilityId;
                     var ja = f || p.skuId
                 }
                 d = df(k, c, ja, T, !0, !0, y, r);
                 return d.itemsData = cf(d),
                 d
             }
             ,
             g.prototype.render = function() {
                 var c = this
                   , d = this.props
                   , f = d.selectedSku
                   , k = d.useProductTitle
                   , r = d.productTitle
                   , q = d.productAction;
                 return q || 0 !== this.props.dualCTAs.length ? n().createElement(Xa.Consumer, null, function(E) {
                     var y;
                     E = E.buyboxStaticStrings;
                     return n().createElement(n().Fragment, null, n().createElement("div", {
                         className: "buy-box-buy-buttons " + (c.props.isExternal ? "" : "mb-3")
                     }, c.renderProductAction(q, k, r, f, E), n().createElement(Rc, {
                         isHidden: !c.state.hasError
                     }, n().createElement(ug, {
                         errorMessage: c.state.errorMessage,
                         cartUrl: c.redirectCartUrl,
                         cvValue: c.state.cvValue,
                         localizedStrings: E
                     })), n().createElement(xe, {
                         showSpinner: c.state.showSpinner
                     })), n().createElement(Mg, {
                         hasError: (null === (y = c.props.selectedSku) || void 0 === y ? void 0 : y.enableBuyNowModal) && c.state.showErrorState,
                         errorMessage: E && E.BUY_NOW_ERROR_STATE_MESSAGE
                     }))
                 }) : n().createElement(n().Fragment, null)
             }
             ,
             g.prototype.renderProductAction = function(c, d, f, k, r) {
                 var q, E = this, y = this.props.dualCTAs, p = d ? f : k.title;
                 if (y && 0 < y.length) {
                     var T = [];
                     return this.props.dualCTAs.forEach(function(da) {
                         var Z = ib({
                             cN: da.actionText,
                             ecn: da.actionText,
                             bhvr: da.behaviorTag,
                             hn: p,
                             ehn: p,
                             pid: E.props.productId,
                             sku: da.skuId,
                             cT: "Button",
                             pa: "Body",
                             compnm: "Buy Box"
                         })
                           , ma = {
                             cN: "Dropdown Button",
                             ecn: "Dropdown Button",
                             hn: da.actionText,
                             ehn: da.actionText,
                             pid: E.props.productId,
                             sku: k.skuId,
                             cT: "Link",
                             pa: "Body",
                             compnm: "Buy Box"
                         }
                           , wa = null;
                         k.manageAction && (wa = {
                             actionLink: k.manageAction.uri,
                             text: k.manageAction.actionText,
                             jsllTag: ib({
                                 cN: k.manageAction.actionText,
                                 ecn: k.manageAction.actionText,
                                 bhvr: k.manageAction.behaviorTag,
                                 hn: f,
                                 ehn: f,
                                 pid: E.props.productId,
                                 sku: k ? k.skuId : "null",
                                 cT: "Link",
                                 pa: "Body",
                                 compnm: "Buy Box"
                             })
                         });
                         T.push({
                             text: da.actionText,
                             onClickAction: function() {
                                 return E.onClickActionHandler(da.action, da.availabilityId, da.skuId)
                             },
                             renderAnchor: !E.props.isExternal && E.props.enableQuickHrefs && da.action !== Ma.AddToCart,
                             classes: "btn-primary " + (E.props.isExternal ? "" : " btn-block"),
                             additionalBuyOptions: null !== wa ? [wa] : null,
                             disabled: da.disabled,
                             jsllTag: Z,
                             dropdownJsllTag: ma,
                             getInitialHref: E.getInitialHrefBuilder(),
                             isExternal: E.props.isExternal,
                             renderAnchorWithGlyph: !!E.showBusinessValueMessaging(c)
                         })
                     }),
                     this.props.isExternal ? n().createElement(Jd, Id({}, T[0])) : n().createElement(rc, {
                         actions: T,
                         buyboxStaticStrings: r
                     })
                 }
                 d = !!c.disabled;
                 y = k ? k.skuId : "";
                 c.actionText = this.showBusinessValueMessaging(c) ? (0,
                 ta.zH)(r, "BUSINESS_CONTINUE_WITH_A_PERSONAL_ACCOUNT", "Continue with a personal account") : c.actionText;
                 r = ib({
                     cN: c.actionText,
                     ecn: c.actionText,
                     bhvr: c.behaviorTag,
                     hn: p,
                     ehn: p,
                     pid: this.props.productId,
                     sku: y,
                     cT: "Button",
                     pa: "Body",
                     compnm: "Buy Box"
                 });
                 c.action === Ma.ConfigureDevice && (r = ib({
                     cN: c.actionText,
                     ecn: c.actionText,
                     bhvr: c.behaviorTag,
                     hn: p,
                     ehn: p,
                     pid: this.props.productId,
                     sku: y,
                     cT: "Button",
                     pa: "Body",
                     compnm: "Buy Box",
                     isConfigureProduct: 1
                 }));
                 y = {
                     cN: "Dropdown Button",
                     ecn: "Dropdown Button",
                     hn: p,
                     ehn: p,
                     pid: this.props.productId,
                     sku: y,
                     cT: "Link",
                     pa: "Body",
                     compnm: "Buy Box"
                 };
                 var ja = c.action === Ma.BuildABundle || c.action === Ma.AddToCart || c.action === Ma.Buy || c.action === Ma.ConfigureDevice ? p + " - " + c.actionText : c.actionText;
                 return n().createElement(Jd, {
                     text: c.actionText,
                     renderAnchor: !this.props.isExternal && this.props.enableQuickHrefs && c.action !== Ma.AddToCart,
                     ariaLabel: ja,
                     disabled: d || this.state.showSpinner || this.state.disableButton,
                     onClickAction: function() {
                         return E.onClickActionHandler(E.props.productAction.action)
                     },
                     jsllTag: r,
                     dropdownJsllTag: y,
                     classes: (this.showBusinessValueMessaging(c) ? "" : "btn-primary") + " " + (this.props.isExternal || this.showBusinessValueMessaging(c) ? "" : " btn-block"),
                     getInitialHref: this.getInitialHrefBuilder(),
                     isAddtoCartModalEnabled: c.action === Ma.AddToCart && this.props.isAddtoCartModalEnabled,
                     addtoCartModalBody: this.props.addtoCartModal ? this.props.addtoCartModal.primaryBody : "",
                     addtoCartModalLabel: this.props.addtoCartModal ? this.props.addtoCartModal.primaryLabel : "",
                     modalId: "modal-addToCart-primary",
                     useProductInfo: this.props.useProductTitle,
                     productId: this.props.productId,
                     isGrabGoEnabled: this.props.isGrabGoEnabled,
                     grabGoModalId: this.props.grabGoModalId,
                     grabGoTriggerCtaText: this.props.grabGoTriggerCtaText,
                     buyNowDetails: c.action === Ma.Buy && (null === (q = this.props.selectedSku) || void 0 === q ? void 0 : q.enableBuyNowModal) && this.getBuyNowDetails(),
                     isExternal: this.props.isExternal,
                     renderAnchorWithGlyph: !!this.showBusinessValueMessaging(c),
                     isInterstitialModalEnabled: this.props.isInterstitialModalEnabled,
                     interstitialModalId: this.props.interstitialModalId
                 })
             }
             ,
             g.prototype.showBusinessValueMessaging = function(c) {
                 return this.props.showBusinessUserValuePropMessage && !this.props.isBusinessUserSignedIn && c.action === Ma.ConfigureDevice
             }
             ,
             g
         }(n().Component);
         const Hd = Ka(function(e) {
             var g = Aa(e)
               , c = null;
             c = g && g.action ? g.action : function(r) {
                 return (r = Oa(r)) ? r.action : null
             }(e);
             var d = null;
             g && g.manageAction && (d = g.manageAction);
             var f = tc(e)
               , k = yb(e);
             e = function(r) {
                 var q = Oa(r)
                   , E = [];
                 return q && q.isDualCTA && q.skuOrder[0].forEach(function(y) {
                     var p = q.skuInfo[y]
                       , T = p.action;
                     p = p.availabilityId;
                     T && (T.availabilityId = p,
                     T.skuId = y,
                     E.push(T))
                 }),
                 E
             }(e);
             return {
                 selectedSku: g,
                 productTitle: k,
                 productAction: c,
                 dualCTAs: e,
                 productId: f,
                 secondaryAction: d
             }
         })(xf);
         var vf = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , yf = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return vf(g, e),
             g.prototype.render = function() {
                 var c = this
                   , d = this.props
                   , f = d.selectedSku
                   , k = d.useProductTitle
                   , r = d.product
                   , q = d = "";
                 f && f.price && (d = f.price.current,
                 q = f.price.original);
                 var E = k ? r.title : f.title
                   , y = f ? f.skuId : ""
                   , p = "";
                 k && r.price ? p = r.price.currency : f && f.price && (p = f.price.currency);
                 var T = ib({
                     ProductInfo: {
                         id: r.productId,
                         title: E,
                         prCat: r.category,
                         type: r.type,
                         family: r.family,
                         lstPrice: q,
                         rtPrice: d,
                         cur: p,
                         sku: y,
                         skuType: "Full",
                         isChild: "False"
                     }
                 });
                 return n().createElement(Xa.Consumer, null, function(ja) {
                     var da = ja.buyboxStaticStrings;
                     ja = n();
                     var Z = ja.createElement;
                     da = (0,
                     ta.oW)((0,
                     ta.zH)(da, "PRODUCT_INFORMATION", "Product Information for {0}"), [r.title]);
                     return Z.call(ja, "section", {
                         "data-tags": T,
                         className: "buy-box material-md-card",
                         "aria-label": da
                     }, c.props.children)
                 })
             }
             ,
             g
         }(n().Component);
         const zf = Ka(function(e) {
             return {
                 selectedSku: Aa(e),
                 product: Oa(e)
             }
         })(yf);
         var Lg = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , ii = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Lg(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.children;
                 c = c.isExpanded;
                 return n().createElement("div", {
                     className: c ? "row pt-4" : "row pt-4 buy-box-row"
                 }, d)
             }
             ,
             g
         }(n().Component);
         const Df = Ka(function(e) {
             e = qd(e);
             return {
                 isExpanded: !!e && !e.visible
             }
         })(ii);
         var Og = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Ng = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Og(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.children;
                 return c.sectionVisible ? n().createElement("div", {
                     className: "material-color-neutral-100"
                 }, n().createElement("div", {
                     className: "row align-items-center py-4 mb-0-last-child bg-neutral-100 bg-md-transparent"
                 }, d)) : n().createElement(n().Fragment, null)
             }
             ,
             g
         }(n().Component);
         const sb = Ka(function(e) {
             var g = Zb(e);
             e = g ? g[ic(e)].top : (e = e.setUiMetadata.productLevel) ? e.top : null;
             return {
                 sectionVisible: !e || e.visible
             }
         })(Ng);
         var yg = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Rg = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return yg(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.children;
                 return c.sectionVisible ? n().createElement("div", {
                     className: "buy-box-left-col col-lg-3 col-xl-2"
                 }, n().createElement("div", {
                     className: "buy-box-product-image pb-5 pb-md-4 pl-md-4 pr-md-2 text-center"
                 }, d)) : n().createElement(n().Fragment, null)
             }
             ,
             g
         }(n().Component);
         const Ae = Ka(function(e) {
             e = qd(e);
             return {
                 sectionVisible: !e || e.visible
             }
         })(Rg);
         var Md = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , zg = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Md(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.children;
                 c = c.isExpanded;
                 return n().createElement("div", {
                     className: c ? "col-lg-9" : "buy-box-middle-col col-lg-6 col-xl-7"
                 }, n().createElement("div", {
                     className: c ? "pb-4 px-md-4" : "pb-4 pr-md-4"
                 }, d))
             }
             ,
             g
         }(n().Component);
         const Vh = Ka(function(e) {
             e = qd(e);
             return {
                 isExpanded: !!e && !e.visible
             }
         })(zg);
         var qe = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , ji = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return qe(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.children;
                 return c.sectionVisible ? n().createElement("div", {
                     className: "mb-2"
                 }, d) : n().createElement(n().Fragment, null)
             }
             ,
             g
         }(n().Component);
         const Wh = Ka(function(e) {
             e = Sf(e);
             return {
                 sectionVisible: !e || !e.hidePreTitle
             }
         })(ji);
         var Xh = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Yh = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Xh(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.children;
                 return c.sectionVisible ? n().createElement("div", {
                     className: "mb-3"
                 }, d) : n().createElement(n().Fragment, null)
             }
             ,
             g
         }(n().Component);
         const Zh = Ka(function(e) {
             e = Sf(e);
             return {
                 sectionVisible: !e || !e.hideMetadataRow
             }
         })(Yh);
         var re = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , $h = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return re(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.IsLeftSectionEmpty
                   , f = c.children;
                 return c.sectionVisible ? n().createElement("div", {
                     className: d ? "col-lg-3" : "col-lg-3 buy-box-right-col"
                 }, n().createElement("div", {
                     className: d ? "pb-4 pr-lg-4 pl-md-4 pl-lg-0" : "pb-4 pr-lg-4"
                 }, f)) : n().createElement(n().Fragment, null)
             }
             ,
             g
         }(n().Component);
         const se = Ka(function(e) {
             var g = ic(e);
             g = Zb(e) ? Zb(e)[g].right : null;
             g || (g = (g = e.setUiMetadata) && g.productLevel ? g.productLevel.right : null);
             g = !g || g.visible;
             e = qd(e);
             return {
                 sectionVisible: g,
                 IsLeftSectionEmpty: !!e && !e.visible
             }
         })($h);
         var Mi = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , ki = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Mi(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.name
                   , f = c.children;
                 if (!c.sectionVisible)
                     return n().createElement(n().Fragment, null);
                 c = "bundle" === d ? sa : aa;
                 return n().createElement("div", {
                     className: "material-color-neutral-100"
                 }, n().createElement(c, null, f))
             }
             ,
             g
         }(n().Component);
         const Ni = Ka(function(e) {
             var g = ic(e);
             e = (g = Zb(e) ? Zb(e)[g].bottom : null) ? g : (e = e.setUiMetadata) && e.productLevel ? e.productLevel.bottom : null;
             return {
                 sectionVisible: !e || e.visible,
                 name: e.name
             }
         })(ki);
         var Ag = {
             "Windows.Xbox": "xbox-one-console",
             "Windows.Holographic": "hololens",
             "Windows.Mobile": "mobile-tablet",
             "Windows.Desktop": "this-pc",
             default: "devices-monitor-phone"
         }
           , Oi = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Pi = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Oi(g, e),
             g.prototype.render = function() {
                 var c = this;
                 return n().createElement(Xa.Consumer, null, function(d) {
                     var f = d.buyboxStaticStrings;
                     d = n();
                     var k = d.createElement;
                     var r = {
                         cN: (0,
                         ta.zH)(f, "GET_MORE_INFO", "Get more info"),
                         ecn: "Get more info",
                         bhvr: "0",
                         hn: c.props.headline,
                         ehn: c.props.headline,
                         pid: c.props.productId,
                         sku: c.props.selectedSkuId,
                         cT: "Link",
                         pa: "Body",
                         compnm: "Buy Box"
                     };
                     r = ib(r);
                     f = {
                         ctatext: (0,
                         ta.zH)(f, "GET_MORE_INFO", "Get more info"),
                         arialabel: (0,
                         ta.zH)(f, "GET_MORE_INFO", "Get more info"),
                         hyperlink: "https://go.microsoft.com/fwlink/p/?linkid\x3d858618",
                         openInNewTab: "_blank"
                     };
                     return k.call(d, ed, {
                         taggingInfo: r,
                         link: f
                     })
                 })
             }
             ,
             g
         }(n().Component);
         const ai = Ka(function(e) {
             var g = ic(e);
             return {
                 productId: tc(e),
                 selectedSkuId: g
             }
         })(Pi);
         var Qi = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }();
         const Ri = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Qi(g, e),
             g.prototype.render = function() {
                 var c = this;
                 return n().createElement(n().Fragment, null, n().createElement(Xa.Consumer, null, function(d) {
                     d = d.buyboxStaticStrings;
                     return n().createElement("p", null, (0,
                     ta.zH)(d, "INSTALL_MESSAGE", "We'll install it automatically on all the devices you select."), "\u00a0", n().createElement(ai, {
                         headline: c.props.headline
                     }))
                 }), n().createElement("ul", {
                     className: "list-unstyled"
                 }, this.props.devices.map(function(d) {
                     var f = "buybox-pti-" + d.hashedDeviceId;
                     return n().createElement("li", {
                         className: "mb-4 custom-control custom-checkbox",
                         key: f
                     }, n().createElement("input", {
                         type: "checkbox",
                         className: "custom-control-input",
                         id: f,
                         onChange: function() {
                             c.props.toggleDevice(d.deviceId)
                         }
                     }), n().createElement("label", {
                         className: "custom-control-label d-inline-flex",
                         htmlFor: f
                     }, n().createElement("span", {
                         className: "custom-control-glyph",
                         "aria-hidden": "true"
                     }), n().createElement("span", {
                         className: "ml-2 d-flex glyph-prepend glyph-prepend-large glyph-prepend-" + (d && Ag[d.deviceFamily] ? Ag[d.deviceFamily] : Ag.default),
                         "aria-hidden": "true"
                     }), n().createElement("div", {
                         className: "card ml-3"
                     }, n().createElement("div", {
                         className: "card-body"
                     }, n().createElement("h3", {
                         className: "h6"
                     }, d.deviceName), n().createElement("p", null, d.deviceDescription)))))
                 })))
             }
             ,
             g
         }(n().Component);
         var Si = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }();
         const Ti = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Si(g, e),
             g.prototype.render = function() {
                 return n().createElement(Xa.Consumer, null, function(c) {
                     c = c.buyboxStaticStrings;
                     return n().createElement("p", null, (0,
                     ta.zH)(c, "FETCH_DEVICES_ERROR", "Something happened on our end. Waiting a bit might help."))
                 })
             }
             ,
             g
         }(n().Component);
         var Ui = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }();
         const bi = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Ui(g, e),
             g.prototype.render = function() {
                 return n().createElement(Xa.Consumer, null, function(c) {
                     c = c.buyboxStaticStrings;
                     return n().createElement("p", null, (0,
                     ta.zH)(c, "INSTALL_ATTEMPT_MESSAGE", "We're attempting to install on your selected device(s)."))
                 })
             }
             ,
             g
         }(n().Component);
         var ci = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }();
         const nf = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return ci(g, e),
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.id
                   , f = c.loadingMessage;
                 c = "spinner " + (c.large ? "spinner-lg" : "") + " " + (c.className || "");
                 return n().createElement("div", {
                     id: d,
                     className: c,
                     tabIndex: -1,
                     role: "alert",
                     "aria-live": "assertive"
                 }, n().createElement("span", {
                     className: "sr-only"
                 }, f), n().createElement("span", {
                     role: "presentation",
                     className: "spinner-dot spinner-dot-1"
                 }), n().createElement("span", {
                     role: "presentation",
                     className: "spinner-dot spinner-dot-2"
                 }), n().createElement("span", {
                     role: "presentation",
                     className: "spinner-dot spinner-dot-3"
                 }), n().createElement("span", {
                     role: "presentation",
                     className: "spinner-dot spinner-dot-4"
                 }), n().createElement("span", {
                     role: "presentation",
                     className: "spinner-dot spinner-dot-5"
                 }))
             }
             ,
             g
         }(n().Component);
         var Bg = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }();
         const Cg = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Bg(g, e),
             g.prototype.render = function() {
                 return n().createElement(Xa.Consumer, null, function(c) {
                     c = c.buyboxStaticStrings;
                     return n().createElement("p", null, (0,
                     ta.zH)(c, "PTI_PUSH_ERROR", "Error"))
                 })
             }
             ,
             g
         }(n().Component);
         var di = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }();
         const Dg = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return di(g, e),
             g.prototype.render = function() {
                 var c = this;
                 return n().createElement(n().Fragment, null, n().createElement(Xa.Consumer, null, function(d) {
                     d = d.buyboxStaticStrings;
                     return n().createElement("p", null, (0,
                     ta.zH)(d, "NO_DEVICES_MESSAGE", "It looks like you don't have any applicable device(s) linked to your Microsoft account. To install, sign in on a device with your Microsoft account."), n().createElement(ai, {
                         headline: c.props.headline
                     }))
                 }))
             }
             ,
             g
         }(n().Component);
         var Vi = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , of = function() {
             return of = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             of.apply(this, arguments)
         }
           , ei = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return Vi(g, e),
             g.prototype.render = function() {
                 var c = this
                   , d = this.props.currentState === kb.FetchDevices
                   , f = this.props.currentState === kb.DisplayDevices
                   , k = this.props.currentState === kb.FetchDevicesError
                   , r = this.props.currentState === kb.NoDevices
                   , q = this.props.currentState === kb.PushDevicesToInstall
                   , E = this.props.currentState === kb.PushDevicesSuccess
                   , y = this.props.currentState === kb.PushDevicesError
                   , p = this.props.selectedDevices && 0 < this.props.selectedDevices.length
                   , T = function(Z) {
                     var ma = (0,
                     ta.zH)(Z, "WHERE_DO_YOU_WANT_TO_INSTALL", "Where do you want to install?")
                       , wa = (0,
                     ta.zH)(Z, "TRY_AGAIN", "Try that again");
                     Z = (0,
                     ta.zH)(Z, "THANK_YOU", "Thank you!");
                     switch (!0) {
                     case f:
                         return ma;
                     case k:
                         return wa;
                     case r:
                         return ma;
                     case E:
                         return Z;
                     case y:
                         return wa
                     }
                 }
                   , ja = function(Z) {
                     return (0,
                     ta.zH)(Z, "INSTALL_NOW", "Install Now")
                 }
                   , da = function(Z) {
                     return {
                         cN: ja(Z),
                         ecn: ja(Z),
                         bhvr: "93",
                         hn: T(),
                         ehn: T(),
                         pid: c.props.productId,
                         sku: c.props.selectedSkuId,
                         cT: "Link",
                         pa: "Body",
                         compnm: "Buy Box"
                     }
                 };
                 return n().createElement(Xa.Consumer, null, function(Z) {
                     Z = Z.buyboxStaticStrings;
                     return n().createElement(fe, {
                         id: "pti-modal",
                         ariaLabelledbyId: "pushToInstallModalLabel"
                     }, n().createElement("div", {
                         className: "modal-header"
                     }, !(d && q) && n().createElement("h2", {
                         className: "modal-title h6",
                         id: "pushToInstallModalLabel"
                     }, T(Z)), n().createElement("button", {
                         type: "button",
                         className: "close",
                         "data-dismiss": "modal",
                         "aria-label": (0,
                         ta.zH)(Z, "CLOSE_DIALOG_WINDOW", "Close dialog window"),
                         title: (0,
                         ta.zH)(Z, "CLOSE", "Close")
                     })), n().createElement("div", {
                         className: "modal-body"
                     }, d && n().createElement(nf, {
                         id: "push-to-install-devices",
                         className: "m-auto",
                         loadingMessage: (0,
                         ta.zH)(Z, "FETCH_DEVICES", "Fetching eligible devices"),
                         large: !0
                     }), f && n().createElement(Ri, of({}, c.props, {
                         headline: T(Z)
                     })), k && n().createElement(Ti, null), r && n().createElement(Dg, {
                         headline: T(Z)
                     }), q && n().createElement(nf, {
                         id: "push-to-install-submission",
                         className: "m-auto",
                         loadingMessage: (0,
                         ta.zH)(Z, "SUBMIT_REQUEST", "Submitting request to install product"),
                         large: !0
                     }), E && n().createElement(bi, null), y && n().createElement(Cg, null)), n().createElement("div", {
                         className: "modal-footer"
                     }, n().createElement("button", {
                         type: "button",
                         className: "btn " + (E ? "btn-primary" : "btn-secondary") + " mr-2 " + (d || q ? "d-none" : ""),
                         "data-dismiss": "modal"
                     }, E && (0,
                     ta.zH)(Z, "OK", "ok") || (f || k || r) && (0,
                     ta.zH)(Z, "CANCEL", "Cancel") || (0,
                     ta.zH)(Z, "CLOSE", "Close")), (f || r) && n().createElement("button", {
                         type: "button",
                         className: "btn btn-primary btn-install-now " + (p ? "" : "disabled"),
                         onClick: function() {
                             return p ? c.props.installOnDevices() : void 0
                         },
                         "data-m": ib(da(Z))
                     }, ja(Z)), k && n().createElement("button", {
                         type: "button",
                         className: "btn btn-primary btn-try-again",
                         onClick: function() {
                             return c.props.fetchDevices()
                         }
                     }, (0,
                     ta.zH)(Z, "TRY_AGAIN", "Try again"))))
                 })
             }
             ,
             g
         }(n().Component);
         const fi = Ka(function(e) {
             var g = ic(e);
             return {
                 productId: tc(e),
                 selectedSkuId: g
             }
         })(ei);
         var Wg = function(e, g, c, d) {
             return new (c || (c = Promise))(function(f, k) {
                 function r(y) {
                     try {
                         E(d.next(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function q(y) {
                     try {
                         E(d.throw(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function E(y) {
                     var p;
                     y.done ? f(y.value) : (p = y.value,
                     p instanceof c ? p : new c(function(T) {
                         T(p)
                     }
                     )).then(r, q)
                 }
                 E((d = d.apply(e, g || [])).next())
             }
             )
         }
           , Qd = function(e, g) {
             function c(E) {
                 return function(y) {
                     return function(p) {
                         if (d)
                             throw new TypeError("Generator is already executing.");
                         for (; q; )
                             try {
                                 if (d = 1,
                                 f && (k = 2 & p[0] ? f.return : p[0] ? f.throw || ((k = f.return) && k.call(f),
                                 0) : f.next) && !(k = k.call(f, p[1])).done)
                                     return k;
                                 switch (f = 0,
                                 k && (p = [2 & p[0], k.value]),
                                 p[0]) {
                                 case 0:
                                 case 1:
                                     k = p;
                                     break;
                                 case 4:
                                     return q.label++,
                                     {
                                         value: p[1],
                                         done: !1
                                     };
                                 case 5:
                                     q.label++;
                                     f = p[1];
                                     p = [0];
                                     continue;
                                 case 7:
                                     p = q.ops.pop();
                                     q.trys.pop();
                                     continue;
                                 default:
                                     if (!(k = q.trys,
                                     (k = 0 < k.length && k[k.length - 1]) || 6 !== p[0] && 2 !== p[0])) {
                                         q = 0;
                                         continue
                                     }
                                     if (3 === p[0] && (!k || p[1] > k[0] && p[1] < k[3]))
                                         q.label = p[1];
                                     else if (6 === p[0] && q.label < k[1])
                                         q.label = k[1],
                                         k = p;
                                     else if (k && q.label < k[2])
                                         q.label = k[2],
                                         q.ops.push(p);
                                     else {
                                         k[2] && q.ops.pop();
                                         q.trys.pop();
                                         continue
                                     }
                                 }
                                 p = g.call(e, q)
                             } catch (T) {
                                 p = [6, T],
                                 f = 0
                             } finally {
                                 d = k = 0
                             }
                         if (5 & p[0])
                             throw p[1];
                         return {
                             value: p[0] ? p[1] : void 0,
                             done: !0
                         }
                     }([E, y])
                 }
             }
             var d, f, k, r, q = {
                 label: 0,
                 sent: function() {
                     if (1 & k[0])
                         throw k[1];
                     return k[1]
                 },
                 trys: [],
                 ops: []
             };
             return r = {
                 next: c(0),
                 throw: c(1),
                 return: c(2)
             },
             "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                 return this
             }
             ),
             r
         }
           , Pd = {
             CompactHeaderName: "compactTicket"
         };
         const Xg = function(e, g) {
             return Wg(void 0, void 0, void 0, function() {
                 return Qd(this, function(c) {
                     switch (c.label) {
                     case 0:
                         return [4, Ec.get(window.msBuyBoxPTIEndpoint + "?productId\x3d" + e + "\x26locale\x3d" + g, Pd)];
                     case 1:
                         return [2, c.sent()]
                     }
                 })
             })
         }
           , Wi = function(e, g, c, d) {
             return Wg(void 0, void 0, void 0, function() {
                 var f;
                 return Qd(this, function(k) {
                     switch (k.label) {
                     case 0:
                         return f = {
                             deviceId: g,
                             productId: c
                         },
                         d && (f.skuId = d),
                         [4, Ec.post(window.msBuyBoxPTIEndpoint + "?locale\x3d" + e, f, Pd)];
                     case 1:
                         return [2, k.sent()]
                     }
                 })
             })
         };
         var kb, nd = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }(), Pc = function() {
             return Pc = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             Pc.apply(this, arguments)
         }, od = function() {
             for (var e = [], g = 0; g < arguments.length; g++) {
                 var c = e.concat, d;
                 var f = d = void 0
                   , k = arguments[g]
                   , r = void 0
                   , q = "function" == typeof Symbol && k[Symbol.iterator];
                 if (q) {
                     k = q.call(k);
                     var E = [];
                     try {
                         for (; (void 0 === r || 0 < r--) && !(f = k.next()).done; )
                             E.push(f.value)
                     } catch (y) {
                         d = {
                             error: y
                         }
                     } finally {
                         try {
                             f && !f.done && (q = k.return) && q.call(k)
                         } finally {
                             if (d)
                                 throw d.error;
                         }
                     }
                     d = E
                 } else
                     d = k;
                 e = c.call(e, d)
             }
             return e
         };
         !function(e) {
             e[e.Inactive = 0] = "Inactive";
             e[e.FetchDevices = 1] = "FetchDevices";
             e[e.DisplayDevices = 2] = "DisplayDevices";
             e[e.FetchDevicesError = 3] = "FetchDevicesError";
             e[e.NoDevices = 4] = "NoDevices";
             e[e.PushDevicesToInstall = 5] = "PushDevicesToInstall";
             e[e.PushDevicesSuccess = 6] = "PushDevicesSuccess";
             e[e.PushDevicesError = 7] = "PushDevicesError"
         }(kb || (kb = {}));
         var Rf = function(e) {
             function g(c) {
                 var d = e.call(this, c) || this;
                 return d.initialState = {
                     fetchDevices: function() {
                         var f = d.props
                           , k = f.productId
                           , r = f.locale;
                         d.setState(Pc(Pc({}, d.initialState), {
                             currentState: kb.FetchDevices
                         }));
                         Xg(k, r).then(function(q) {
                             if (200 === q.status)
                                 return Array.isArray(q.data) ? q.data : JSON.parse(q.data);
                             d.setState({
                                 currentState: kb.FetchDevicesError
                             });
                             d.logPushToInstallApiErrors("getDevices failed with status : " + q.status, {
                                 productId: k,
                                 locale: r
                             })
                         }).then(function(q) {
                             q = q.filter(function(E) {
                                 return E.isApplicable
                             });
                             d.setState({
                                 devices: q,
                                 currentState: 0 < q.length ? kb.DisplayDevices : kb.NoDevices
                             })
                         }).catch(function() {
                             d.setState({
                                 currentState: kb.FetchDevicesError
                             });
                             d.logPushToInstallApiErrors("getDevices failed", {
                                 productId: k,
                                 locale: r
                             })
                         })
                     },
                     currentState: kb.Inactive,
                     devices: [],
                     selectedDevices: [],
                     toggleDevice: function(f) {
                         var k = d.state.selectedDevices.indexOf(f);
                         -1 === k ? d.setState({
                             selectedDevices: od(d.state.selectedDevices, [f])
                         }) : (f = od(d.state.selectedDevices),
                         f.splice(k, 1),
                         d.setState({
                             selectedDevices: f
                         }))
                     },
                     installOnDevices: function() {
                         d.setState({
                             currentState: kb.PushDevicesToInstall
                         });
                         var f = d.props
                           , k = f.productId
                           , r = f.locale
                           , q = d.state.selectedDevices.length
                           , E = !1;
                         d.state.selectedDevices.map(function(y) {
                             Wi(r, y, k).then(function(p) {
                                 q--;
                                 200 === p.status || 202 === p.status ? (d.setState({
                                     currentState: kb.PushDevicesSuccess
                                 }),
                                 E = !0) : 0 !== q || E || (d.setState({
                                     currentState: kb.PushDevicesError
                                 }),
                                 d.logPushToInstallApiErrors("pushToInstall failed with status : " + p.status, {
                                     deviceId: y,
                                     productId: k,
                                     locale: r
                                 }))
                             }).catch(function() {
                                 0 != --q || E || d.setState({
                                     currentState: kb.PushDevicesError
                                 });
                                 d.logPushToInstallApiErrors("pushToInstall failed", {
                                     deviceId: y,
                                     productId: k,
                                     locale: r
                                 })
                             })
                         })
                     }
                 },
                 d.logPushToInstallApiErrors = function(f, k) {
                     Gc.M.error(Error("[PTI]-" + f), k)
                 }
                 ,
                 d.state = d.initialState,
                 d
             }
             return nd(g, e),
             g.prototype.render = function() {
                 var c = this
                   , d = this.props
                   , f = d.primary
                   , k = d.secondary
                   , r = d.productId
                   , q = d.selectedSku
                   , E = d.useProductInfo
                   , y = d.productTitle
                   , p = d.ownerShipStatusTitle;
                 d = d.subscriptionMessageText;
                 if (!f)
                     return n().createElement(n().Fragment, null);
                 var T = !1;
                 f.action === Ma.PushToInstall && (T = !0);
                 var ja, da = E ? y : q.title;
                 E = ib({
                     cN: f.actionText,
                     ecn: f.actionText,
                     bhvr: f.behaviorTag,
                     hn: da,
                     ehn: da,
                     pid: r,
                     sku: q ? q.skuId : "null",
                     cT: "Button",
                     pa: "Body",
                     compnm: "Buy Box"
                 });
                 y = {
                     cN: f.actionText,
                     ecn: f.actionText,
                     cT: "Link",
                     pa: "Body",
                     compnm: "Buy Box"
                 };
                 return k && (ja = k.map(function(Z) {
                     var ma = {
                         actionLink: Z.uri,
                         text: Z.actionText,
                         jsllTag: ib({
                             cN: Z.actionText,
                             ecn: Z.actionText,
                             bhvr: Z.behaviorTag,
                             hn: da,
                             ehn: da,
                             pid: r,
                             sku: q ? q.skuId : "null",
                             cT: "Link",
                             pa: "Body",
                             compnm: "Buy Box"
                         })
                     };
                     return Z.action === Ma.PushToInstall && (T = !0,
                     ma.onClickAction = c.state.fetchDevices,
                     ma.additionalProps = {
                         "data-target": "#pti-modal"
                     }),
                     ma
                 })),
                 n().createElement("div", {
                     className: p || d ? "col-md-5 col-lg-3" : "col-md-5 col-lg-3 offset-md-7 offset-lg-9"
                 }, n().createElement("div", {
                     className: "pr-md-4"
                 }, n().createElement(Jd, {
                     text: f.actionText,
                     renderAnchor: !0,
                     ariaLabel: f.actionText,
                     href: f.uri,
                     disabled: f.disabled,
                     additionalBuyOptions: ja,
                     classes: "btn-primary btn-block primary-buy-button mr-1",
                     jsllTag: E,
                     dropdownJsllTag: y,
                     onClickAction: f.action === Ma.PushToInstall ? this.state.fetchDevices : void 0,
                     idPrefix: "os",
                     wrapperClasses: "buy-box-buy-buttons",
                     additionalProps: f.action === Ma.PushToInstall && {
                         "data-target": "#pti-modal"
                     }
                 })), T && n().createElement(fi, Pc({}, this.state)))
             }
             ,
             g
         }(n().Component);
         const Xi = Ka(function(e) {
             var g = Aa(e)
               , c = tc(e)
               , d = yb(e)
               , f = function(r) {
                 return (r = Aa(r)) && r.ownershipActions ? r.ownershipActions.primary : null
             }(e)
               , k = function(r) {
                 return (r = Aa(r)) && r.ownershipActions ? r.ownershipActions.secondary : null
             }(e);
             return {
                 primary: f,
                 secondary: k,
                 productId: c,
                 selectedSku: g,
                 productTitle: d,
                 ownerShipStatusTitle: Ie(e),
                 subscriptionMessageText: $b(e)
             }
         })(Rf);
         var ng = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Eg = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return ng(g, e),
             g.prototype.render = function() {
                 if (!this.props.contentRating)
                     return ia.createElement(ia.Fragment, null);
                 var c = this.props.contentRating
                   , d = c.descriptors ? ia.createElement("p", {
                     className: "mb-0"
                 }, c.descriptors.join(", ")) : ""
                   , f = c.disclaimers ? ia.createElement("p", {
                     className: "mb-0"
                 }, c.disclaimers.join(", ")) : ""
                   , k = c.interactiveElements ? c.interactiveElements.map(function(r, q) {
                     return ia.createElement("p", {
                         className: "mb-0",
                         key: q
                     }, r)
                 }) : "";
                 return ia.createElement(Xa.Consumer, null, function(r) {
                     var q = ia
                       , E = q.createElement
                       , y = ia.Fragment
                       , p = r.buyboxStaticStrings;
                     r = ia;
                     var T = r.createElement
                       , ja = ia
                       , da = ja.createElement
                       , Z = ia.createElement("div", {
                         className: "mr-2"
                     }, ia.createElement("img", {
                         src: c.logoUri,
                         className: "img-fluid",
                         alt: c.ratingsBoard.longName,
                         "data-automation-test-id": "buy-box-maturity-rating-img"
                     }))
                       , ma = ia
                       , wa = ma.createElement
                       , Ia = ia
                       , ya = Ia.createElement
                       , xa = ia
                       , Ua = xa.createElement
                       , Ya = c.ratingsBoard.uri;
                     p = (0,
                     ta.oW)((0,
                     ta.zH)(p, "RATING_BOARD_MESSAGE", "Rating Board {0}, {1}. Rated {2}."), [c.ratingsBoard.name, c.longName, c.description]);
                     r = T.call(r, "div", {
                         className: "mb-3"
                     }, da.call(ja, "div", {
                         className: "d-flex"
                     }, Z, wa.call(ma, "div", null, ya.call(Ia, "p", {
                         className: "mb-0"
                     }, Ua.call(xa, "a", {
                         href: Ya,
                         "aria-label": p,
                         "data-automation-test-id": "buy-box-maturity-rating-uri"
                     }, c.ratingsBoard.name)), d, f, k)));
                     return E.call(q, y, null, r)
                 })
             }
             ,
             g
         }(ia.Component);
         const Fg = Ka(function(e) {
             return {
                 contentRating: Oa(e) ? Oa(e).contentRating : null
             }
         })(Eg);
         var xh = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Sd = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return xh(g, e),
             g.prototype.render = function() {
                 var c = this.props.ctaDescription;
                 return n().createElement(n().Fragment, null, c && n().createElement("p", {
                     className: "mb-1 mb-lg-2 h4",
                     "data-automation-test-id": "buy-box-cta-description"
                 }, c))
             }
             ,
             g
         }(n().Component);
         const Yi = Ka(function(e) {
             var g = Aa(e);
             return {
                 ctaDescription: g ? g.ctaDescription : Oa(e) ? Oa(e).ctaDescription : ""
             }
         })(Sd);
         var ni = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , pg = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return ni(g, e),
             g.prototype.render = function() {
                 var c = this.props.ctaOverride;
                 return n().createElement(n().Fragment, null, c && n().createElement("p", {
                     className: "mb-1 mb-lg-2 h4",
                     "data-automation-test-id": "buy-box-cta-override"
                 }, c))
             }
             ,
             g
         }(n().Component);
         const qg = Ka(function(e) {
             var g = Aa(e);
             return {
                 ctaOverride: g ? g.ctaOverride : Oa(e) ? Oa(e).ctaOverride : ""
             }
         })(pg);
         var mg = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , vi = function(e) {
             function g(c) {
                 c = e.call(this, c) || this;
                 return c.getQueryStringAppendedUrl = function(d) {
                     var f = dg(window.location.href, ["activetab", "aemredirect"]).toString();
                     return d + "?successurl\x3d" + f
                 }
                 ,
                 c.state = {
                     url: ""
                 },
                 c
             }
             return mg(g, e),
             g.prototype.componentDidMount = function() {
                 this.setState({
                     url: this.getQueryStringAppendedUrl(this.props.primaryHref)
                 })
             }
             ,
             g.prototype.render = function() {
                 var c = this.props
                   , d = c.text
                   , f = c.primaryCtaText
                   , k = c.primaryHref
                   , r = c.selectedSku
                   , q = c.productTitle;
                 c = c.useProductTitle ? q : r.title;
                 c = ib({
                     cN: f,
                     ecn: f,
                     hn: c,
                     ehn: c,
                     bhvr: "0",
                     cT: "Link",
                     pa: "Body",
                     compnm: "Buy Box"
                 });
                 return n().createElement(n().Fragment, null, d && n().createElement("section", {
                     className: "col-12"
                 }, n().createElement("div", {
                     className: "px-md-4"
                 }, n().createElement("p", {
                     className: "mb-0",
                     "data-automation-test-id": "buy-box-remediation-text"
                 }, d), f && k && n().createElement("a", {
                     "data-m": c,
                     href: this.state.url,
                     className: "cta  mt-2 ",
                     "data-automation-test-id": "buy-box-remediation-url"
                 }, f, n().createElement("span", {
                     className: "glyph",
                     "aria-hidden": "true"
                 })))))
             }
             ,
             g
         }(n().Component);
         const Tf = Ka(function(e) {
             var g, c, d = null, f = null, k = Aa(e), r = yb(e);
             e = (Aa(e) && !Aa(e).affirmation ? Aa(e).remediation : null) || Oa(e).remediation;
             return e && (d = e.description,
             f = e.uri,
             g = e.label,
             c = e.ariaLabel),
             {
                 selectedSku: k,
                 productTitle: r,
                 text: d,
                 primaryHref: f,
                 primaryCtaText: g,
                 primaryAriaLabel: c
             }
         })(vi);
         var uc = function() {
             return uc = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             uc.apply(this, arguments)
         }
           , vc = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , qb = function(e) {
             function g() {
                 return null !== e && e.apply(this, arguments) || this
             }
             return vc(g, e),
             g.prototype.render = function() {
                 var c = this.props.discountMessage;
                 return n().createElement(n().Fragment, null, c && n().createElement("p", {
                     "data-automation-test-id": "buy-box-discount-message"
                 }, c))
             }
             ,
             g
         }(n().Component);
         const zb = Ka(function(e) {
             e = Aa(e);
             return {
                 discountMessage: e ? e.discountMessage : ""
             }
         })(qb);
         var Sc = Ja(4509)
           , pi = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , Wd = function() {
             return Wd = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             Wd.apply(this, arguments)
         }
           , ch = function(e) {
             function g(c) {
                 return e.call(this, c) || this
             }
             return pi(g, e),
             g.prototype.render = function() {
                 var c = this;
                 return this.props.cards ? n().createElement(Xa.Consumer, null, function(d) {
                     d = d.buyboxStaticStrings;
                     return n().createElement(Sc.ZX, Wd({}, c.props, {
                         productType: "devices",
                         listName: "",
                         listDisplayName: (0,
                         ta.zH)(d, "STATIC_BUNDLE_INCLUDES", "The bundle includes"),
                         hideHeader: !1,
                         isCondensed: !1,
                         newTab: !1,
                         showCtaLink: !1,
                         cards: c.props.cards,
                         ariaLabel: c.props.ariaLabel,
                         carouselIndex: "",
                         localizedText: {},
                         isStacked: !1,
                         carouselPrefix: "static-bundles-"
                     }))
                 }) : null
             }
             ,
             g
         }(n().Component)
           , wi = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , gi = function(e, g, c, d) {
             return new (c || (c = Promise))(function(f, k) {
                 function r(y) {
                     try {
                         E(d.next(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function q(y) {
                     try {
                         E(d.throw(y))
                     } catch (p) {
                         k(p)
                     }
                 }
                 function E(y) {
                     var p;
                     y.done ? f(y.value) : (p = y.value,
                     p instanceof c ? p : new c(function(T) {
                         T(p)
                     }
                     )).then(r, q)
                 }
                 E((d = d.apply(e, g || [])).next())
             }
             )
         }
           , Gg = function(e, g) {
             function c(E) {
                 return function(y) {
                     return function(p) {
                         if (d)
                             throw new TypeError("Generator is already executing.");
                         for (; q; )
                             try {
                                 if (d = 1,
                                 f && (k = 2 & p[0] ? f.return : p[0] ? f.throw || ((k = f.return) && k.call(f),
                                 0) : f.next) && !(k = k.call(f, p[1])).done)
                                     return k;
                                 switch (f = 0,
                                 k && (p = [2 & p[0], k.value]),
                                 p[0]) {
                                 case 0:
                                 case 1:
                                     k = p;
                                     break;
                                 case 4:
                                     return q.label++,
                                     {
                                         value: p[1],
                                         done: !1
                                     };
                                 case 5:
                                     q.label++;
                                     f = p[1];
                                     p = [0];
                                     continue;
                                 case 7:
                                     p = q.ops.pop();
                                     q.trys.pop();
                                     continue;
                                 default:
                                     if (!(k = q.trys,
                                     (k = 0 < k.length && k[k.length - 1]) || 6 !== p[0] && 2 !== p[0])) {
                                         q = 0;
                                         continue
                                     }
                                     if (3 === p[0] && (!k || p[1] > k[0] && p[1] < k[3]))
                                         q.label = p[1];
                                     else if (6 === p[0] && q.label < k[1])
                                         q.label = k[1],
                                         k = p;
                                     else if (k && q.label < k[2])
                                         q.label = k[2],
                                         q.ops.push(p);
                                     else {
                                         k[2] && q.ops.pop();
                                         q.trys.pop();
                                         continue
                                     }
                                 }
                                 p = g.call(e, q)
                             } catch (T) {
                                 p = [6, T],
                                 f = 0
                             } finally {
                                 d = k = 0
                             }
                         if (5 & p[0])
                             throw p[1];
                         return {
                             value: p[0] ? p[1] : void 0,
                             done: !0
                         }
                     }([E, y])
                 }
             }
             var d, f, k, r, q = {
                 label: 0,
                 sent: function() {
                     if (1 & k[0])
                         throw k[1];
                     return k[1]
                 },
                 trys: [],
                 ops: []
             };
             return r = {
                 next: c(0),
                 throw: c(1),
                 return: c(2)
             },
             "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                 return this
             }
             ),
             r
         };
         const oi = function(e) {
             function g(c) {
                 c = e.call(this, c) || this;
                 return c.state = {
                     pageUrl: "",
                     checkUserSignIn: !1
                 },
                 c
             }
             return wi(g, e),
             g.prototype.componentDidMount = function() {
                 return gi(this, void 0, void 0, function() {
                     return Gg(this, function(c) {
                         switch (c.label) {
                         case 0:
                             return this.props.isBusinessUserSignedIn || this.setState({
                                 pageUrl: window.location.href
                             }),
                             [4, Tb.isUserSignedIn()];
                         case 1:
                             return c.sent() ? [4, Tb.getUserType()] : [3, 3];
                         case 2:
                             "msa" === c.sent().toLocaleLowerCase() && this.setState({
                                 checkUserSignIn: !0
                             }),
                             c.label = 3;
                         case 3:
                             return [2]
                         }
                     })
                 })
             }
             ,
             g.prototype.createBusinessSignInUrl = function(c) {
                 return this.props.businessUserSigninUrl + "?ru\x3d" + encodeURIComponent(c)
             }
             ,
             g.prototype.createBusinessSignUpUrl = function(c) {
                 var d, f = null === (d = this.props.locale) || void 0 === d ? void 0 : d.replace(/.*-/, "").toLowerCase();
                 return "https://prv.signup.microsoft.com/CreateAccount?origin\x3dVSBSelfServe\x26culture\x3d" + this.props.locale + "\x26country\x3d" + f + "\x26ru\x3d" + encodeURIComponent(this.createBusinessSignInUrl(c))
             }
             ,
             g.prototype.createBusinessSignUpButton = function(c, d) {
                 return n().createElement("a", {
                     className: "btn btn-primary btn-block buy-box-business-buy-buttons " + (this.isDarkMode() ? "buy-box-business-buy-buttons-color-white" : ""),
                     style: {
                         width: "100%"
                     },
                     href: this.createBusinessSignUpUrl(d)
                 }, (0,
                 ta.zH)(c, "BUSINESS_CONTINUE_AS_BUSINESS", "Continue with a business account"))
             }
             ,
             g.prototype.hasAuthoredMessage = function() {
                 return !(!this.props.businessMessage || void 0 === this.props.businessMessage.signInValueMessage || "" === this.props.businessMessage.signInValueMessage.trim())
             }
             ,
             g.prototype.isDarkMode = function() {
                 return this.props.pageTheme && -1 !== this.props.pageTheme.indexOf("main-dark")
             }
             ,
             g.prototype.shouldShowInfoIcon = function() {
                 return !this.hasAuthoredMessage() || void 0 !== this.props.businessMessage.helpText
             }
             ,
             g.prototype.render = function() {
                 var c = this;
                 return n().createElement(Xa.Consumer, null, function(d) {
                     d = d.buyboxStaticStrings;
                     return n().createElement("div", null, n().createElement("div", {
                         className: "buy-box-buy-buttons mb-2"
                     }, n().createElement("div", null, c.createBusinessSignUpButton(d, c.state.pageUrl))), n().createElement("div", {
                         className: "buy-box-business-discount-section d-flex mb-2 " + (c.isDarkMode() ? "buy-box-business-discount-section-transparant" : "")
                     }, n().createElement("div", {
                         className: "buy-box-business-discount-message"
                     }, n().createElement("span", {
                         className: "glyph glyph-business-briefcase glyph-small"
                     })), n().createElement("div", {
                         className: "buy-box-business-discount-message"
                     }, c.hasAuthoredMessage() ? n().createElement("span", {
                         dangerouslySetInnerHTML: {
                             __html: c.props.businessMessage.signInValueMessage
                         }
                     }) : n().createElement("span", null, c.state.checkUserSignIn ? (0,
                     ta.zH)(d, "BUSINESS_PRICING_ELIGIBILITY_MESSAGE", "Get discounts on eligible products and more when you buy with a business account") : n().createElement("span", {
                         dangerouslySetInnerHTML: {
                             __html: (0,
                             ta.zH)(d, "BUSINESS_MESSAGE_FOR_ANONYMOUS_USER", "Are you a business customer? Shop with a {0} work account {1} to get exclusive discounts and expert support.").replace("{0}", "\x3ca href\x3d" + c.createBusinessSignUpUrl(c.state.pageUrl) + " class\x3d'ms-rte-link' target\x3d'_blank'\x3e").replace("{1}", "\x3c/a\x3e")
                         }
                     })), c.shouldShowInfoIcon() && n().createElement(n().Fragment, null, n().createElement("span", {
                         id: "bm-ht-popover-btn",
                         "data-mount": "popover",
                         className: "btn glyph-prepend glyph-prepend-info d-inline align-middle border-0 p-0 ml-1",
                         "data-placement": "right",
                         "aria-expanded": "false",
                         "data-close-label": (0,
                         ta.zH)(d, "CLOSE", "Close"),
                         "aria-haspopup": "dialog",
                         "aria-controls": "bm-ht-popover-msg"
                     }), n().createElement("div", {
                         className: "popover fade ",
                         id: "bm-ht-popover-msg",
                         role: "dialog",
                         "aria-labelledby": "bm-ht-popover-btn"
                     }, n().createElement("button", {
                         type: "button",
                         className: "close",
                         "aria-label": (0,
                         ta.zH)(d, "CLOSE", "Close")
                     }), n().createElement("div", {
                         className: "popover-content"
                     }, n().createElement("div", {
                         className: "popover-body "
                     }, c.props.businessMessage.helpText ? n().createElement("p", null, c.props.businessMessage.helpText) : n().createElement("p", null, "Lorem ipsum dolor sit amet consecteur. Mauns ut aenean consequat quis egestas magna interdum gravida et."))))))))
                 })
             }
             ,
             g
         }(n().Component);
         var Le = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }();
         const $g = function(e) {
             function g(c) {
                 return e.call(this, c) || this
             }
             return Le(g, e),
             g.prototype.hasAuthoredMessage = function() {
                 return !(!this.props.businessMessage || void 0 === this.props.businessMessage.qtyDiscountMessage || "" === this.props.businessMessage.qtyDiscountMessage.trim())
             }
             ,
             g.prototype.render = function() {
                 var c = this;
                 return n().createElement(Xa.Consumer, null, function(d) {
                     d = d.buyboxStaticStrings;
                     return n().createElement("div", {
                         className: "mb-2"
                     }, n().createElement("div", {
                         className: "buy-box-business-discount-section d-flex"
                     }, n().createElement("div", {
                         className: "buy-box-business-discount-message"
                     }, n().createElement("span", {
                         className: "glyph glyph-business-briefcase glyph-small"
                     })), n().createElement("div", {
                         className: "buy-box-business-discount-message"
                     }, n().createElement("span", null, c.hasAuthoredMessage() ? c.props.businessMessage.qtyDiscountMessage : (0,
                     ta.zH)(d, "BUSINESS_CART_DISCOUNT_MESSAGE", "Need more? Purchase up to 25 of this item in cart.")))))
                 })
             }
             ,
             g
         }(n().Component);
         var ah = function() {
             var e = function(g, c) {
                 return e = Object.setPrototypeOf || {
                     __proto__: []
                 }instanceof Array && function(d, f) {
                     d.__proto__ = f
                 }
                 || function(d, f) {
                     for (var k in f)
                         f.hasOwnProperty(k) && (d[k] = f[k])
                 }
                 ,
                 e(g, c)
             };
             return function(g, c) {
                 function d() {
                     this.constructor = g
                 }
                 e(g, c);
                 g.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype,
                 new d)
             }
         }()
           , wc = function() {
             return wc = Object.assign || function(e) {
                 for (var g, c = 1, d = arguments.length; c < d; c++)
                     for (var f in g = arguments[c])
                         Object.prototype.hasOwnProperty.call(g, f) && (e[f] = g[f]);
                 return e
             }
             ,
             wc.apply(this, arguments)
         }
           , Xa = (0,
         ia.createContext)({
             buyboxStaticStrings: void 0
         })
           , Me = n().createContext({
             flightedFeatures: {
                 enableQuickHrefs: !1,
                 enableUcsExp: !1
             }
         })
           , Ci = function(e) {
             function g(c) {
                 var d, f = e.call(this, c) || this;
                 hc.dispatch({
                     type: "RESET_STORE"
                 });
                 hc.dispatch((d = c.product,
                 {
                     type: "ADD_PRODUCT",
                     payload: Ye({}, d),
                     error: !1
                 }));
                 d = null;
                 c.selectorInfo && 0 < c.selectorInfo.length && c.selectorInfo[0] && c.selectorInfo[0].defaultIndex && c.selectorInfo[0].selectionItems && c.selectorInfo[0].selectionItems.length > c.selectorInfo[0].defaultIndex ? d = c.selectorInfo[0].selectionItems[c.selectorInfo[0].defaultIndex].skuId : c.product.skuOrder && 0 < Object.keys(c.product.skuOrder).length && (d = c.product.skuOrder[0][0]);
                 hc.dispatch(zd(d));
                 var k = new Of;
                 return k.buyBoxProps = c,
                 k.selectedSku = d,
                 hc.dispatch({
                     type: "SET_UI_METADATA",
                     payload: k,
                     error: !1
                 }),
                 (new id(c.useProductInfo)).subscribeForDataRequests(),
                 "undefined" != typeof window && (document.title = "pdp-basepage" == document.title ? c.product.title : document.title),
                 f.state = {
                     showNavSummary: f.props.showNavSummary
                 },
                 f
             }
             return ah(g, e),
             g.prototype.componentDidMount = function() {
                 var c = this;
                 this.props.addToCartHash && this.props.exposeAddToCartHash && (0,
                 Ze.FT)(this.props.addToCartHash);
                 (0,
                 gd.C)(function() {
                     var d = !!document.querySelector("[data-component-id\x3d'5b416377bf3bb5696e990d57cfc2a674']");
                     d !== c.props.showNavSummary && c.setState({
                         showNavSummary: d
                     })
                 })
             }
             ,
             g.prototype.renderBuybox = function() {
                 var c = {
                     requestParams: this.props.requestParams,
                     useProductTitle: this.props.useProductInfo,
                     addToCartHash: this.props.addToCartHash,
                     enableQuickHrefs: this.props.enableQuickHrefs,
                     staticBundleProducts: this.props.productCards ? this.props.productCards : null,
                     bundleId: this.props.bundleId,
                     dynamicsCartLocales: this.props.dynamicsCartLocales,
                     enableUcsExp: this.props.enableUcsExp,
                     isAddtoCartModalEnabled: this.props.isAddtoCartModalEnabled,
                     addtoCartModal: this.props.addtoCartModal,
                     grabGoModalId: this.props.grabGoModalId,
                     isGrabGoEnabled: this.props.isGrabGoEnabled,
                     grabGoTriggerCtaText: this.props.grabGoTriggerCtaText,
                     pageTheme: this.props.pageTheme,
                     showNavSummary: this.state.showNavSummary,
                     isBusinessUserSignedIn: this.props.isBusinessUserSignedIn,
                     showBusinessUserValuePropMessage: this.props.showBusinessUserValuePropMessage,
                     isInterstitialModalEnabled: this.props.isInterstitialModalEnabled,
                     interstitialModalId: this.props.interstitialModalId,
                     isAuthor: this.props.isAuthor
                 };
                 return c.isBusinessUserSignedIn && this.props.product.sourceCatalog === Qe.Cat1 ? (window && (window.location.href = "/$locale/store/business-interstitial-error?status\x3dconsumeronlyproduct".replace("$locale", this.props.requestParams.locale)),
                 n().createElement(n().Fragment, null)) : this.props.useOnlyTitle ? n().createElement(Q, {
                     store: hc
                 }, n().createElement(sc.A, {
                     errorMessage: this.props.error
                 }, n().createElement(Xa.Provider, {
                     value: {
                         buyboxStaticStrings: this.props.buyboxStaticStrings
                     }
                 }, n().createElement(zf, {
                     useProductTitle: !0
                 }, n().createElement(Df, null, n().createElement(Vh, null, n().createElement(hf, {
                     useProductTitle: !0,
                     noLineBreaks: this.props.noLineBreaks
                 }))))), n().createElement(Pa, {
                     error: this.props.authorError
                 }))) : n().createElement(Q, {
                     store: hc
                 }, n().createElement(sc.A, {
                     errorMessage: this.props.error
                 }, n().createElement(Xa.Provider, {
                     value: {
                         buyboxStaticStrings: this.props.buyboxStaticStrings
                     }
                 }, n().createElement(zf, {
                     useProductTitle: this.props.useProductInfo
                 }, n().createElement(sb, null, n().createElement(qc, null), n().createElement(Xi, {
                     useProductInfo: this.props.useProductInfo,
                     locale: this.props.requestParams.locale
                 })), n().createElement(Df, null, n().createElement(Ae, null, !this.props.hideTileImage && n().createElement(rd, {
                     pageTheme: this.props.pageTheme
                 }), !this.props.disableGallery && n().createElement(hg, {
                     useProductTitle: this.props.useProductInfo,
                     pageTheme: this.props.pageTheme
                 })), n().createElement(Vh, null, n().createElement(Wh, null, n().createElement(lf, null)), n().createElement(hf, {
                     useProductTitle: this.props.useProductInfo,
                     noLineBreaks: this.props.noLineBreaks
                 }), this.state.showNavSummary && n().createElement(wb, {
                     containerSelector: ".sticky-show-stuck #title"
                 }, n().createElement(hf, {
                     useProductTitle: this.props.useProductInfo,
                     noLineBreaks: this.props.noLineBreaks,
                     noTag: !0
                 })), n().createElement(Zh, null, n().createElement(oe, null)), n().createElement(hd, {
                     tags: this.props.tags,
                     htmlTag: "p",
                     inline: !0,
                     useProductTitle: this.props.useProductInfo,
                     noLineBreaks: this.props.noLineBreaks
                 }), !this.props.hideWishlist && n().createElement("div", {
                     className: "mb-3"
                 }, n().createElement(th, {
                     useProductTitle: !1,
                     productId: this.props.product.productId,
                     locale: this.props.requestParams.locale
                 })), n().createElement("div", {
                     className: "mb-3"
                 }, n().createElement(Sh, {
                     useProductInfo: this.props.useProductInfo,
                     defaultShowAll: this.props.disableMoreOrLess,
                     authorOverride: this.props.descriptionCharacterCount,
                     locale: this.props.requestParams.locale
                 })), n().createElement(Fg, null), n().createElement(pe, {
                     promoTexts: this.props.promoBannerBelow,
                     isPromoBannerBlade: !1,
                     useProductTitle: this.props.useProductInfo,
                     noLineBreaks: this.props.noLineBreaks,
                     automationIdLabel: "promo-text-middle"
                 })), n().createElement(se, null, !this.props.hidePrice && n().createElement(xc, null), !this.props.hidePrice && this.state.showNavSummary && n().createElement(wb, {
                     containerSelector: ".sticky-show-stuck #buyBoxPrice"
                 }, n().createElement(xc, {
                     isExternal: !0
                 })), n().createElement(Wf, null), n().createElement(Oe, {
                     primaryText: void 0
                 }), n().createElement(Lc, null), n().createElement(td, {
                     useProductInfo: this.props.useProductInfo,
                     locale: this.props.requestParams.locale
                 }), n().createElement(zb, null), n().createElement(pe, {
                     promoTexts: this.props.promoBannerBelowPrice,
                     isPromoBannerBlade: !1,
                     useProductTitle: this.props.useProductInfo,
                     noLineBreaks: this.props.noLineBreaks,
                     automationIdLabel: "promo-text-right-below-price"
                 }), n().createElement(Gd, {
                     useProductTitle: this.props.useProductInfo,
                     bbProps: this.props,
                     hideColorPicker: this.props.hideColorPicker
                 }), n().createElement(qg, null), n().createElement(Yi, null), this.props.showBusinessUserValuePropMessage && !this.props.isBusinessUserSignedIn && n().createElement(oi, {
                     locale: this.props.requestParams.locale,
                     isBusinessUserSignedIn: this.props.isBusinessUserSignedIn,
                     businessMessage: this.props.businessMessage,
                     pageTheme: this.props.pageTheme,
                     businessUserSigninUrl: this.props.businessUserSigninUrl
                 }), n().createElement(Hd, wc({}, c)), this.state.showNavSummary && n().createElement(wb, {
                     containerSelector: ".sticky-show-stuck #ctaRoot"
                 }, n().createElement(Hd, wc({}, wc(wc({}, c), {
                     isExternal: !0
                 })))), this.props.showBusinessUserValuePropMessage && this.props.isBusinessUserSignedIn && n().createElement($g, {
                     businessMessage: this.props.businessMessage
                 }), !this.props.product.hideEddMessage && n().createElement(Hi, {
                     dccApiEndpoint: this.props.dccApiEndpoint,
                     geoLocation: this.props.geoLocation,
                     product: this.props.product,
                     buyboxStaticStrings: this.props.buyboxStaticStrings,
                     locale: this.props.requestParams.locale
                 }), n().createElement(Uc, null), n().createElement(pe, {
                     promoTexts: this.props.promoBannerRight,
                     isPromoBannerBlade: !1,
                     useProductTitle: this.props.useProductInfo,
                     noLineBreaks: this.props.noLineBreaks,
                     automationIdLabel: "promo-text-right"
                 }))), n().createElement(Ni, null, n().createElement(Ea, {
                     upsellPromoBanner: this.props.upsellPromoBanner,
                     promoBannerBlade: this.props.promoBannerBlade,
                     useProductInfo: this.props.useProductInfo,
                     noLineBreaks: this.props.noLineBreaks
                 }))), n().createElement("div", {
                     style: {
                         paddingTop: "48px"
                     }
                 }, n().createElement(ch, wc({}, this.props.productCards)))), n().createElement(Pa, {
                     error: this.props.authorError
                 })))
             }
             ,
             g.prototype.render = function() {
                 var c = {
                     flightedFeatures: {
                         enableQuickHrefs: this.props.enableQuickHrefs,
                         enableUcsExp: this.props.enableUcsExp
                     }
                 };
                 return n().createElement(Me.Provider, {
                     value: c
                 }, this.renderBuybox())
             }
             ,
             g
         }(n().Component);
         (0,
         ue.A)(Ci, "BuyBox", {})
     }
     )()
 }
 )();
 $(document).ready(function() {
     (function() {
         document.querySelectorAll(".buy-box sup").forEach(Ja=>{
             0 == Ja.children.length && Ja.insertAdjacentHTML("afterbegin", '\x3cspan class\x3d"sr-text"\x3eFootnote\x3c/span\x3e')
         }
         )
     }
     )()
 });
 