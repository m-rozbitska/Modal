// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1NTxh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d213dc572307d71e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"dasVU":[function(require,module,exports) {
/*
 Copyright (C) Federico Zivolo 2020
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var global = arguments[3];
var e = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator;
const t = function() {
    const t = [
        "Edge",
        "Trident",
        "Firefox"
    ];
    for(let o = 0; o < t.length; o += 1)if (e && 0 <= navigator.userAgent.indexOf(t[o])) return 1;
    return 0;
}();
function o(e) {
    let t = !1;
    return ()=>{
        t || (t = !0, window.Promise.resolve().then(()=>{
            t = !1, e();
        }));
    };
}
function n(e) {
    let o = !1;
    return ()=>{
        o || (o = !0, setTimeout(()=>{
            o = !1, e();
        }, t));
    };
}
const i = e && window.Promise;
var r = i ? o : n;
function p(e) {
    return e && "[object Function]" === ({}).toString.call(e);
}
function d(e, t) {
    if (1 !== e.nodeType) return [];
    const o = e.ownerDocument.defaultView, n = o.getComputedStyle(e, null);
    return t ? n[t] : n;
}
function s(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
}
function f(e) {
    if (!e) return document.body;
    switch(e.nodeName){
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body;
    }
    const { overflow: t , overflowX: o , overflowY: n  } = d(e);
    return /(auto|scroll|overlay)/.test(t + n + o) ? e : f(s(e));
}
function a(e) {
    return e && e.referenceNode ? e.referenceNode : e;
}
const l = e && !!(window.MSInputMethodContext && document.documentMode), m = e && /MSIE 10/.test(navigator.userAgent);
function h(e) {
    return 11 === e ? l : 10 === e ? m : l || m;
}
function c(e) {
    if (!e) return document.documentElement;
    const t = h(10) ? document.body : null;
    let o = e.offsetParent || null;
    for(; o === t && e.nextElementSibling;)o = (e = e.nextElementSibling).offsetParent;
    const n = o && o.nodeName;
    return n && "BODY" !== n && "HTML" !== n ? -1 !== [
        "TH",
        "TD",
        "TABLE"
    ].indexOf(o.nodeName) && "static" === d(o, "position") ? c(o) : o : e ? e.ownerDocument.documentElement : document.documentElement;
}
function u(e) {
    const { nodeName: t  } = e;
    return "BODY" !== t && ("HTML" === t || c(e.firstElementChild) === e);
}
function g(e) {
    return null === e.parentNode ? e : g(e.parentNode);
}
function b(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    const o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = o ? e : t, i = o ? t : e, r = document.createRange();
    r.setStart(n, 0), r.setEnd(i, 0);
    const { commonAncestorContainer: p  } = r;
    if (e !== p && t !== p || n.contains(i)) return u(p) ? p : c(p);
    const d = g(e);
    return d.host ? b(d.host, t) : b(e, g(t).host);
}
function w(e, t = "top") {
    const o = "top" === t ? "scrollTop" : "scrollLeft", n = e.nodeName;
    if ("BODY" === n || "HTML" === n) {
        const t = e.ownerDocument.documentElement, n = e.ownerDocument.scrollingElement || t;
        return n[o];
    }
    return e[o];
}
function y(e, t, o = !1) {
    const n = w(t, "top"), i = w(t, "left"), r = o ? -1 : 1;
    return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e;
}
function E(e, t) {
    const o = "x" === t ? "Left" : "Top", n = "Left" == o ? "Right" : "Bottom";
    return parseFloat(e[`border${o}Width`]) + parseFloat(e[`border${n}Width`]);
}
function x(e, t, o, n) {
    return Math.max(t[`offset${e}`], t[`scroll${e}`], o[`client${e}`], o[`offset${e}`], o[`scroll${e}`], h(10) ? parseInt(o[`offset${e}`]) + parseInt(n[`margin${"Height" === e ? "Top" : "Left"}`]) + parseInt(n[`margin${"Height" === e ? "Bottom" : "Right"}`]) : 0);
}
function v(e) {
    const t = e.body, o = e.documentElement, n = h(10) && getComputedStyle(o);
    return {
        height: x("Height", t, o, n),
        width: x("Width", t, o, n)
    };
}
var O = Object.assign || function(e) {
    for(var t, o = 1; o < arguments.length; o++)for(var n in t = arguments[o], t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e;
};
function L(e) {
    return O({}, e, {
        right: e.left + e.width,
        bottom: e.top + e.height
    });
}
function S(e) {
    let t = {};
    try {
        if (h(10)) {
            t = e.getBoundingClientRect();
            const o = w(e, "top"), n = w(e, "left");
            t.top += o, t.left += n, t.bottom += o, t.right += n;
        } else t = e.getBoundingClientRect();
    } catch (t) {}
    const o = {
        left: t.left,
        top: t.top,
        width: t.right - t.left,
        height: t.bottom - t.top
    }, n = "HTML" === e.nodeName ? v(e.ownerDocument) : {}, i = n.width || e.clientWidth || o.width, r = n.height || e.clientHeight || o.height;
    let p = e.offsetWidth - i, s = e.offsetHeight - r;
    if (p || s) {
        const t = d(e);
        p -= E(t, "x"), s -= E(t, "y"), o.width -= p, o.height -= s;
    }
    return L(o);
}
function T(e, t, o = !1) {
    var n = Math.max;
    const i = h(10), r = "HTML" === t.nodeName, p = S(e), s = S(t), a = f(e), l = d(t), m = parseFloat(l.borderTopWidth), c = parseFloat(l.borderLeftWidth);
    o && r && (s.top = n(s.top, 0), s.left = n(s.left, 0));
    let u = L({
        top: p.top - s.top - m,
        left: p.left - s.left - c,
        width: p.width,
        height: p.height
    });
    if (u.marginTop = 0, u.marginLeft = 0, !i && r) {
        const e = parseFloat(l.marginTop), t = parseFloat(l.marginLeft);
        u.top -= m - e, u.bottom -= m - e, u.left -= c - t, u.right -= c - t, u.marginTop = e, u.marginLeft = t;
    }
    return (i && !o ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (u = y(u, t)), u;
}
function D(e, t = !1) {
    var o = Math.max;
    const n = e.ownerDocument.documentElement, i = T(e, n), r = o(n.clientWidth, window.innerWidth || 0), p = o(n.clientHeight, window.innerHeight || 0), d = t ? 0 : w(n), s = t ? 0 : w(n, "left"), f = {
        top: d - i.top + i.marginTop,
        left: s - i.left + i.marginLeft,
        width: r,
        height: p
    };
    return L(f);
}
function C(e) {
    const t = e.nodeName;
    if ("BODY" === t || "HTML" === t) return !1;
    if ("fixed" === d(e, "position")) return !0;
    const o = s(e);
    return !!o && C(o);
}
function N(e) {
    if (!e || !e.parentElement || h()) return document.documentElement;
    let t = e.parentElement;
    for(; t && "none" === d(t, "transform");)t = t.parentElement;
    return t || document.documentElement;
}
function P(e, t, o, n, i = !1) {
    let r = {
        top: 0,
        left: 0
    };
    const p = i ? N(e) : b(e, a(t));
    if ("viewport" === n) r = D(p, i);
    else {
        let o;
        "scrollParent" === n ? (o = f(s(t)), "BODY" === o.nodeName && (o = e.ownerDocument.documentElement)) : "window" === n ? o = e.ownerDocument.documentElement : o = n;
        const d = T(o, p, i);
        if ("HTML" === o.nodeName && !C(p)) {
            const { height: t , width: o  } = v(e.ownerDocument);
            r.top += d.top - d.marginTop, r.bottom = t + d.top, r.left += d.left - d.marginLeft, r.right = o + d.left;
        } else r = d;
    }
    o = o || 0;
    const d = "number" == typeof o;
    return r.left += d ? o : o.left || 0, r.top += d ? o : o.top || 0, r.right -= d ? o : o.right || 0, r.bottom -= d ? o : o.bottom || 0, r;
}
function B({ width: e , height: t  }) {
    return e * t;
}
function H(e, t, o, n, i, r = 0) {
    if (-1 === e.indexOf("auto")) return e;
    const p = P(o, n, r, i), d = {
        top: {
            width: p.width,
            height: t.top - p.top
        },
        right: {
            width: p.right - t.right,
            height: p.height
        },
        bottom: {
            width: p.width,
            height: p.bottom - t.bottom
        },
        left: {
            width: t.left - p.left,
            height: p.height
        }
    }, s = Object.keys(d).map((e)=>O({
            key: e
        }, d[e], {
            area: B(d[e])
        })).sort((e, t)=>t.area - e.area), f = s.filter(({ width: e , height: t  })=>e >= o.clientWidth && t >= o.clientHeight), a = 0 < f.length ? f[0].key : s[0].key, l = e.split("-")[1];
    return a + (l ? `-${l}` : "");
}
function W(e, t, o, n = null) {
    const i = n ? N(t) : b(t, a(o));
    return T(o, i, n);
}
function k(e) {
    const t = e.ownerDocument.defaultView, o = t.getComputedStyle(e), n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0), i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0), r = {
        width: e.offsetWidth + i,
        height: e.offsetHeight + n
    };
    return r;
}
function A(e) {
    const t = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    return e.replace(/left|right|bottom|top/g, (e)=>t[e]);
}
function M(e, t, o) {
    o = o.split("-")[0];
    const n = k(e), i = {
        width: n.width,
        height: n.height
    }, r = -1 !== [
        "right",
        "left"
    ].indexOf(o), p = r ? "top" : "left", d = r ? "left" : "top", s = r ? "height" : "width", f = r ? "width" : "height";
    return i[p] = t[p] + t[s] / 2 - n[s] / 2, i[d] = o === d ? t[d] - n[f] : t[A(d)], i;
}
function F(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
}
function I(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex((e)=>e[t] === o);
    const n = F(e, (e)=>e[t] === o);
    return e.indexOf(n);
}
function R(e, t, o) {
    const n = void 0 === o ? e : e.slice(0, I(e, "name", o));
    return n.forEach((e)=>{
        e["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        const o = e["function"] || e.fn;
        e.enabled && p(o) && (t.offsets.popper = L(t.offsets.popper), t.offsets.reference = L(t.offsets.reference), t = o(t, e));
    }), t;
}
function U() {
    if (this.state.isDestroyed) return;
    let e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
    };
    e.offsets.reference = W(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = H(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = M(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = R(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
}
function Y(e, t) {
    return e.some(({ name: e , enabled: o  })=>o && e === t);
}
function V(e) {
    const t = [
        !1,
        "ms",
        "Webkit",
        "Moz",
        "O"
    ], o = e.charAt(0).toUpperCase() + e.slice(1);
    for(let n = 0; n < t.length; n++){
        const i = t[n], r = i ? `${i}${o}` : e;
        if ("undefined" != typeof document.body.style[r]) return r;
    }
    return null;
}
function j() {
    return this.state.isDestroyed = !0, Y(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[V("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
}
function K(e) {
    const t = e.ownerDocument;
    return t ? t.defaultView : window;
}
function q(e, t, o, n) {
    const i = "BODY" === e.nodeName, r = i ? e.ownerDocument.defaultView : e;
    r.addEventListener(t, o, {
        passive: !0
    }), i || q(f(r.parentNode), t, o, n), n.push(r);
}
function z(e, t, o, n) {
    o.updateBound = n, K(e).addEventListener("resize", o.updateBound, {
        passive: !0
    });
    const i = f(e);
    return q(i, "scroll", o.updateBound, o.scrollParents), o.scrollElement = i, o.eventsEnabled = !0, o;
}
function G() {
    this.state.eventsEnabled || (this.state = z(this.reference, this.options, this.state, this.scheduleUpdate));
}
function _(e, t) {
    return K(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((e)=>{
        e.removeEventListener("scroll", t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
}
function X() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = _(this.reference, this.state));
}
function J(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
}
function Q(e, t) {
    Object.keys(t).forEach((o)=>{
        let n = "";
        -1 !== [
            "width",
            "height",
            "top",
            "right",
            "bottom",
            "left"
        ].indexOf(o) && J(t[o]) && (n = "px"), e.style[o] = t[o] + n;
    });
}
function Z(e, t) {
    Object.keys(t).forEach(function(o) {
        const n = t[o];
        !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
}
function $(e) {
    return Q(e.instance.popper, e.styles), Z(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Q(e.arrowElement, e.arrowStyles), e;
}
function ee(e, t, o, n, i) {
    const r = W(i, t, e, o.positionFixed), p = H(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
    return t.setAttribute("x-placement", p), Q(t, {
        position: o.positionFixed ? "fixed" : "absolute"
    }), o;
}
function te(e, t) {
    const { popper: o , reference: n  } = e.offsets, { round: i , floor: r  } = Math, p = (e)=>e, d = i(n.width), s = i(o.width), f = -1 !== [
        "left",
        "right"
    ].indexOf(e.placement), a = -1 !== e.placement.indexOf("-"), l = t ? f || a || d % 2 == s % 2 ? i : r : p, m = t ? i : p;
    return {
        left: l(1 == d % 2 && 1 == s % 2 && !a && t ? o.left - 1 : o.left),
        top: m(o.top),
        bottom: m(o.bottom),
        right: l(o.right)
    };
}
const oe = e && /Firefox/i.test(navigator.userAgent);
function ne(e, t) {
    const { x: o , y: n  } = t, { popper: i  } = e.offsets, r = F(e.instance.modifiers, (e)=>"applyStyle" === e.name).gpuAcceleration;
    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
    const p = void 0 === r ? t.gpuAcceleration : r, d = c(e.instance.popper), s = S(d), f = {
        position: i.position
    }, a = te(e, 2 > window.devicePixelRatio || !oe), l = "bottom" === o ? "top" : "bottom", m = "right" === n ? "left" : "right", h = V("transform");
    let u, g;
    if (g = "bottom" == l ? "HTML" === d.nodeName ? -d.clientHeight + a.bottom : -s.height + a.bottom : a.top, u = "right" == m ? "HTML" === d.nodeName ? -d.clientWidth + a.right : -s.width + a.right : a.left, p && h) f[h] = `translate3d(${u}px, ${g}px, 0)`, f[l] = 0, f[m] = 0, f.willChange = "transform";
    else {
        const e = "bottom" == l ? -1 : 1, t = "right" == m ? -1 : 1;
        f[l] = g * e, f[m] = u * t, f.willChange = `${l}, ${m}`;
    }
    const b = {
        "x-placement": e.placement
    };
    return e.attributes = O({}, b, e.attributes), e.styles = O({}, f, e.styles), e.arrowStyles = O({}, e.offsets.arrow, e.arrowStyles), e;
}
function ie(e, t, o) {
    const n = F(e, ({ name: e  })=>e === t), i = !!n && e.some((e)=>e.name === o && e.enabled && e.order < n.order);
    if (!i) {
        const e = `\`${t}\``, n = `\`${o}\``;
        console.warn(`${n} modifier is required by ${e} modifier in order to work, be sure to include it before ${e}!`);
    }
    return i;
}
function re(e, t) {
    if (!ie(e.instance.modifiers, "arrow", "keepTogether")) return e;
    let o = t.element;
    if ("string" == typeof o) {
        if (o = e.instance.popper.querySelector(o), !o) return e;
    } else if (!e.instance.popper.contains(o)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
    const n = e.placement.split("-")[0], { popper: i , reference: r  } = e.offsets, p = -1 !== [
        "left",
        "right"
    ].indexOf(n), s = p ? "height" : "width", f = p ? "Top" : "Left", a = f.toLowerCase(), l = p ? "left" : "top", m = p ? "bottom" : "right", h = k(o)[s];
    r[m] - h < i[a] && (e.offsets.popper[a] -= i[a] - (r[m] - h)), r[a] + h > i[m] && (e.offsets.popper[a] += r[a] + h - i[m]), e.offsets.popper = L(e.offsets.popper);
    const c = r[a] + r[s] / 2 - h / 2, u = d(e.instance.popper), g = parseFloat(u[`margin${f}`]), b = parseFloat(u[`border${f}Width`]);
    let w = c - e.offsets.popper[a] - g - b;
    return w = Math.max(Math.min(i[s] - h, w), 0), e.arrowElement = o, e.offsets.arrow = {
        [a]: Math.round(w),
        [l]: ""
    }, e;
}
function pe(e) {
    if ("end" === e) return "start";
    return "start" === e ? "end" : e;
}
var de = [
    "auto-start",
    "auto",
    "auto-end",
    "top-start",
    "top",
    "top-end",
    "right-start",
    "right",
    "right-end",
    "bottom-end",
    "bottom",
    "bottom-start",
    "left-end",
    "left",
    "left-start"
];
const se = de.slice(3);
function fe(e, t = !1) {
    const o = se.indexOf(e), n = se.slice(o + 1).concat(se.slice(0, o));
    return t ? n.reverse() : n;
}
const ae = {
    FLIP: "flip",
    CLOCKWISE: "clockwise",
    COUNTERCLOCKWISE: "counterclockwise"
};
function le(e, t) {
    if (Y(e.instance.modifiers, "inner")) return e;
    if (e.flipped && e.placement === e.originalPlacement) return e;
    const o = P(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed);
    let n = e.placement.split("-")[0], i = A(n), r = e.placement.split("-")[1] || "", p = [];
    switch(t.behavior){
        case ae.FLIP:
            p = [
                n,
                i
            ];
            break;
        case ae.CLOCKWISE:
            p = fe(n);
            break;
        case ae.COUNTERCLOCKWISE:
            p = fe(n, !0);
            break;
        default:
            p = t.behavior;
    }
    return p.forEach((d, s)=>{
        if (n !== d || p.length === s + 1) return e;
        n = e.placement.split("-")[0], i = A(n);
        const f = e.offsets.popper, a = e.offsets.reference, l = Math.floor, m = "left" === n && l(f.right) > l(a.left) || "right" === n && l(f.left) < l(a.right) || "top" === n && l(f.bottom) > l(a.top) || "bottom" === n && l(f.top) < l(a.bottom), h = l(f.left) < l(o.left), c = l(f.right) > l(o.right), u = l(f.top) < l(o.top), g = l(f.bottom) > l(o.bottom), b = "left" === n && h || "right" === n && c || "top" === n && u || "bottom" === n && g, w = -1 !== [
            "top",
            "bottom"
        ].indexOf(n), y = !!t.flipVariations && (w && "start" === r && h || w && "end" === r && c || !w && "start" === r && u || !w && "end" === r && g), E = !!t.flipVariationsByContent && (w && "start" === r && c || w && "end" === r && h || !w && "start" === r && g || !w && "end" === r && u), x = y || E;
        (m || b || x) && (e.flipped = !0, (m || b) && (n = p[s + 1]), x && (r = pe(r)), e.placement = n + (r ? "-" + r : ""), e.offsets.popper = O({}, e.offsets.popper, M(e.instance.popper, e.offsets.reference, e.placement)), e = R(e.instance.modifiers, e, "flip"));
    }), e;
}
function me(e) {
    const { popper: t , reference: o  } = e.offsets, n = e.placement.split("-")[0], i = Math.floor, r = -1 !== [
        "top",
        "bottom"
    ].indexOf(n), p = r ? "right" : "bottom", d = r ? "left" : "top", s = r ? "width" : "height";
    return t[p] < i(o[d]) && (e.offsets.popper[d] = i(o[d]) - t[s]), t[d] > i(o[p]) && (e.offsets.popper[d] = i(o[p])), e;
}
function he(e, t, o, n) {
    var i = Math.max;
    const r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), p = +r[1], d = r[2];
    if (!p) return e;
    if (0 === d.indexOf("%")) {
        let e;
        switch(d){
            case "%p":
                e = o;
                break;
            case "%":
            case "%r":
            default:
                e = n;
        }
        const i = L(e);
        return i[t] / 100 * p;
    }
    if ("vh" === d || "vw" === d) {
        let e;
        return e = "vh" === d ? i(document.documentElement.clientHeight, window.innerHeight || 0) : i(document.documentElement.clientWidth, window.innerWidth || 0), e / 100 * p;
    }
    return p;
}
function ce(e, t, o, n) {
    const i = [
        0,
        0
    ], r = -1 !== [
        "right",
        "left"
    ].indexOf(n), p = e.split(/(\+|\-)/).map((e)=>e.trim()), d = p.indexOf(F(p, (e)=>-1 !== e.search(/,|\s/)));
    p[d] && -1 === p[d].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    const s = /\s*,\s*|\s+/;
    let f = -1 === d ? [
        p
    ] : [
        p.slice(0, d).concat([
            p[d].split(s)[0]
        ]),
        [
            p[d].split(s)[1]
        ].concat(p.slice(d + 1))
    ];
    return f = f.map((e, n)=>{
        const i = (1 === n ? !r : r) ? "height" : "width";
        let p = !1;
        return e.reduce((e, t)=>"" === e[e.length - 1] && -1 !== [
                "+",
                "-"
            ].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t), []).map((e)=>he(e, i, t, o));
    }), f.forEach((e, t)=>{
        e.forEach((o, n)=>{
            J(o) && (i[t] += o * ("-" === e[n - 1] ? -1 : 1));
        });
    }), i;
}
function ue(e, { offset: t  }) {
    const { placement: o , offsets: { popper: n , reference: i  }  } = e, r = o.split("-")[0];
    let p;
    return p = J(+t) ? [
        +t,
        0
    ] : ce(t, n, i, r), "left" === r ? (n.top += p[0], n.left -= p[1]) : "right" === r ? (n.top += p[0], n.left += p[1]) : "top" === r ? (n.left += p[0], n.top -= p[1]) : "bottom" === r && (n.left += p[0], n.top += p[1]), e.popper = n, e;
}
function ge(e, t) {
    let o = t.boundariesElement || c(e.instance.popper);
    e.instance.reference === o && (o = c(o));
    const n = V("transform"), i = e.instance.popper.style, { top: r , left: p , [n]: d  } = i;
    i.top = "", i.left = "", i[n] = "";
    const s = P(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
    i.top = r, i.left = p, i[n] = d, t.boundaries = s;
    const f = t.priority;
    let a = e.offsets.popper;
    const l = {
        primary (e) {
            let o = a[e];
            return a[e] < s[e] && !t.escapeWithReference && (o = Math.max(a[e], s[e])), {
                [e]: o
            };
        },
        secondary (e) {
            const o = "right" === e ? "left" : "top";
            let n = a[o];
            return a[e] > s[e] && !t.escapeWithReference && (n = Math.min(a[o], s[e] - ("right" === e ? a.width : a.height))), {
                [o]: n
            };
        }
    };
    return f.forEach((e)=>{
        const t = -1 === [
            "left",
            "top"
        ].indexOf(e) ? "secondary" : "primary";
        a = O({}, a, l[t](e));
    }), e.offsets.popper = a, e;
}
function be(e) {
    const t = e.placement, o = t.split("-")[0], n = t.split("-")[1];
    if (n) {
        const { reference: t , popper: i  } = e.offsets, r = -1 !== [
            "bottom",
            "top"
        ].indexOf(o), p = r ? "left" : "top", d = r ? "width" : "height", s = {
            start: {
                [p]: t[p]
            },
            end: {
                [p]: t[p] + t[d] - i[d]
            }
        };
        e.offsets.popper = O({}, i, s[n]);
    }
    return e;
}
function we(e) {
    if (!ie(e.instance.modifiers, "hide", "preventOverflow")) return e;
    const t = e.offsets.reference, o = F(e.instance.modifiers, (e)=>"preventOverflow" === e.name).boundaries;
    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
        if (!0 === e.hide) return e;
        e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
    } else {
        if (!1 === e.hide) return e;
        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
    }
    return e;
}
function ye(e) {
    const t = e.placement, o = t.split("-")[0], { popper: n , reference: i  } = e.offsets, r = -1 !== [
        "left",
        "right"
    ].indexOf(o), p = -1 === [
        "top",
        "left"
    ].indexOf(o);
    return n[r ? "left" : "top"] = i[o] - (p ? n[r ? "width" : "height"] : 0), e.placement = A(t), e.offsets.popper = L(n), e;
}
var Ee = {
    shift: {
        order: 100,
        enabled: !0,
        fn: be
    },
    offset: {
        order: 200,
        enabled: !0,
        fn: ue,
        offset: 0
    },
    preventOverflow: {
        order: 300,
        enabled: !0,
        fn: ge,
        priority: [
            "left",
            "right",
            "top",
            "bottom"
        ],
        padding: 5,
        boundariesElement: "scrollParent"
    },
    keepTogether: {
        order: 400,
        enabled: !0,
        fn: me
    },
    arrow: {
        order: 500,
        enabled: !0,
        fn: re,
        element: "[x-arrow]"
    },
    flip: {
        order: 600,
        enabled: !0,
        fn: le,
        behavior: "flip",
        padding: 5,
        boundariesElement: "viewport",
        flipVariations: !1,
        flipVariationsByContent: !1
    },
    inner: {
        order: 700,
        enabled: !1,
        fn: ye
    },
    hide: {
        order: 800,
        enabled: !0,
        fn: we
    },
    computeStyle: {
        order: 850,
        enabled: !0,
        fn: ne,
        gpuAcceleration: !0,
        x: "bottom",
        y: "right"
    },
    applyStyle: {
        order: 900,
        enabled: !0,
        fn: $,
        onLoad: ee,
        gpuAcceleration: void 0
    }
}, xe = {
    placement: "bottom",
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: ()=>{},
    onUpdate: ()=>{},
    modifiers: Ee
};
class ve {
    constructor(e, t, o = {}){
        this.scheduleUpdate = ()=>requestAnimationFrame(this.update), this.update = r(this.update.bind(this)), this.options = O({}, ve.Defaults, o), this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
        }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(O({}, ve.Defaults.modifiers, o.modifiers)).forEach((e)=>{
            this.options.modifiers[e] = O({}, ve.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {});
        }), this.modifiers = Object.keys(this.options.modifiers).map((e)=>O({
                name: e
            }, this.options.modifiers[e])).sort((e, t)=>e.order - t.order), this.modifiers.forEach((e)=>{
            e.enabled && p(e.onLoad) && e.onLoad(this.reference, this.popper, this.options, e, this.state);
        }), this.update();
        const n = this.options.eventsEnabled;
        n && this.enableEventListeners(), this.state.eventsEnabled = n;
    }
    update() {
        return U.call(this);
    }
    destroy() {
        return j.call(this);
    }
    enableEventListeners() {
        return G.call(this);
    }
    disableEventListeners() {
        return X.call(this);
    }
}
ve.Utils = ("undefined" == typeof window ? global : window).PopperUtils, ve.placements = de, ve.Defaults = xe;
exports.default = ve;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3sBoE"}]},["1NTxh","dasVU"], "dasVU", "parcelRequire94c2")

//# sourceMappingURL=index.2307d71e.js.map
