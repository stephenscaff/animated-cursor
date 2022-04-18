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
})({"kwnZB":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7e87443527ad7d95";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"86ByF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _src = require("../../src");
var _srcDefault = parcelHelpers.interopDefault(_src);
'use strict';
const ac = _srcDefault.default();
ac.init();

},{"../../src":"8lqZg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _animatedCursorJs = require("./animated-cursor.js");
var _animatedCursorJsDefault = parcelHelpers.interopDefault(_animatedCursorJs);
exports.default = _animatedCursorJsDefault.default;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./animated-cursor.js":"gL4Wz"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gL4Wz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lerp = require("./utils/lerp");
var _lerpDefault = parcelHelpers.interopDefault(_lerp);
var _hasExitedViewport = require("./utils/has-exited-viewport");
var _hasExitedViewportDefault = parcelHelpers.interopDefault(_hasExitedViewport);
var _hexToRgb = require("./utils/hex-to-rgb");
var _hexToRgbDefault = parcelHelpers.interopDefault(_hexToRgb);
var _setStyles = require("./utils/set-styles");
var _setStylesDefault = parcelHelpers.interopDefault(_setStyles);
'use strict';
const defaultOptions = {
    cursorInnerSelector: '#cursor-inner',
    cursorOuterSelector: '#cursor-outer',
    hasRequiredStyles: true,
    color: '#D3245C',
    outerAlpha: 0.3,
    size: {
        inner: 8,
        outer: 40
    },
    hoverScale: {
        inner: 0.75,
        outer: 1.5
    },
    clickScale: {
        inner: 1.5,
        outer: 0.13
    },
    trailingSpeed: 0.2,
    clickables: [
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
    ]
};
/**
 * Animated Cursor
 * Creates a custom animated cursor consisting of an outer and inner circles/dots.
 * Outer dot has trailing animation effect.
 * Dots scale when hovering on clickables, or clicking.
 *
 * @param {Object} options 
 * @returns 
 */ function AnimatedCursor(options) {
    // merge defaults with user options
    let opts = Object.assign({}, defaultOptions, options);
    let settings = {
        cursorInner: document.querySelector(opts.cursorInnerSelector),
        cursorOuter: document.querySelector(opts.cursorOuterSelector),
        hasRequiredStyles: opts.hasRequiredStyles,
        targetPos: {
            x: 0.5,
            y: 0.5
        },
        cursorPos: {
            x: 0.5,
            y: 0.5
        },
        endX: window.innerWidth / 2,
        endY: window.innerHeight / 2,
        raf: requestAnimationFrame(animateOuterCursor),
        cursorVisible: true,
        isScaled: false,
        isClicking: false
    };
    /**
   * Init 
   * Kicks off all the things
   * @public
   */ function init() {
        bindEvents();
        startCursor();
        if (settings.hasRequiredStyles) setCursorStyles();
        setCursorColor();
        setCursorSize();
    }
    /**
   * Bind Main Events
   * Handles primary mouse and click events
   */ function bindEvents() {
        window.addEventListener('mousemove', onMouseMove);
        document.querySelectorAll(opts.clickables.join(',')).forEach((el)=>onClickableHover(el)
        );
        document.addEventListener('mousedown', ()=>{
            settings.isClicking = true;
            setScale();
        });
        document.addEventListener('mouseup', ()=>{
            settings.isScaled = false;
            settings.isClicking = false;
            setScale();
        });
        document.addEventListener('mouseleave', (e)=>{
            if (_hasExitedViewportDefault.default(e)) {
                settings.isVisible = false;
                toggleVisibility();
            }
        });
    }
    /**
   * Start Cursor
   * Begins cursor visibility state
   */ function startCursor() {
        settings.isVisible = false;
        toggleVisibility();
    }
    /**
   * on Mouse Move 
   * Handles the cursor mouse event, sending x,y coords to animation events.
   * Uses RAF loop for outer/trailing cursor animation.
   * @param {Event} e - mousemove event 
   */ function onMouseMove(e) {
        settings.isVisible = true;
        toggleVisibility();
        //get normalized mouse coordinates [0, 1]
        settings.targetPos.x = e.clientX;
        settings.targetPos.y = e.clientY;
        animateInnerCursor(e.clientY, e.clientX);
        // trigger loop if no loop is active
        if (!settings.raf) settings.raf = requestAnimationFrame(animateOuterCursor);
    }
    /**
   * Animate Inner Cursor 
   * @param {Number} y - y coords
   * @param {Number} x - x coords
   */ function animateInnerCursor(y, x) {
        settings.cursorInner.style.top = `${y}px`;
        settings.cursorInner.style.left = `${x}px`;
    }
    /**
   * Animate Outer Cursor 
   * Outer cursor trailing animation. Uses lerp
   * @returns 
   */ function animateOuterCursor() {
        //calculate lerped values
        settings.cursorPos.x = _lerpDefault.default(settings.cursorPos.x, settings.targetPos.x, opts.trailingSpeed);
        settings.cursorPos.y = _lerpDefault.default(settings.cursorPos.y, settings.targetPos.y, opts.trailingSpeed);
        settings.cursorOuter.style.top = `${settings.cursorPos.y}px`;
        settings.cursorOuter.style.left = `${settings.cursorPos.x}px`;
        //cancel loop if mouse stops moving
        const delta = Math.sqrt(Math.pow(settings.targetPos.x - settings.cursorPos.x, 2) + Math.pow(settings.targetPos.y - settings.cursorPos.y, 2));
        if (delta < 0.001) {
            window.cancelAnimationFrame(settings.raf);
            settings.raf = null;
            return;
        }
        //or continue looping if mouse is moving
        settings.raf = requestAnimationFrame(animateOuterCursor);
    }
    function onClickableHover(el) {
        el.style.cursor = 'none';
        el.addEventListener('mouseover', ()=>{
            settings.isScaled = true;
            setScale();
        });
        el.addEventListener('mouseout', ()=>{
            settings.isScaled = false;
            setScale();
        });
    }
    /**
   * Toggle Visibility 
   * 
   */ function toggleVisibility() {
        if (settings.isVisible) {
            settings.cursorInner.style.opacity = 1;
            settings.cursorOuter.style.opacity = 1;
        } else {
            settings.cursorInner.style.opacity = 0;
            settings.cursorOuter.style.opacity = 0;
        }
    }
    /**
   * Set Required Cursor Styles
   */ function setCursorStyles() {
        const styles = {
            'pointer-events': 'none',
            'position': 'fixed',
            'border-radius': '50%',
            'opacity': 0,
            'transform': 'translate(-50%, -50%)',
            'transition': 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
        };
        _setStylesDefault.default('#cursor-inner', styles);
        _setStylesDefault.default('#cursor-outer', styles);
    }
    /**
   * Set Scale Effect
   */ function setScale() {
        if (settings.isClicking) {
            settings.cursorInner.style.transform = `translate(-50%, -50%) scale(${opts.clickScale.inner})`;
            settings.cursorOuter.style.transform = `translate(-50%, -50%) scale(${opts.clickScale.outer})`;
        } else if (settings.isScaled) {
            settings.cursorInner.style.transform = `translate(-50%, -50%) scale(${opts.hoverScale.inner})`;
            settings.cursorOuter.style.transform = `translate(-50%, -50%) scale(${opts.hoverScale.outer})`;
        } else {
            settings.cursorInner.style.transform = 'translate(-50%, -50%) scale(1)';
            settings.cursorOuter.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    }
    /**
   * Set Cursor Color
   */ function setCursorColor() {
        const colorInner = _hexToRgbDefault.default(opts.color);
        const colorOuter = _hexToRgbDefault.default(opts.color, opts.outerAlpha);
        settings.cursorInner.style.setProperty('background-color', colorInner);
        settings.cursorOuter.style.setProperty('background-color', colorOuter);
    }
    /**
   * Set Cursor Sizes
   */ function setCursorSize() {
        settings.cursorInner.style.setProperty('width', `${opts.size.inner}px`);
        settings.cursorInner.style.setProperty('height', `${opts.size.inner}px`);
        settings.cursorOuter.style.setProperty('width', `${opts.size.outer}px`);
        settings.cursorOuter.style.setProperty('height', `${opts.size.outer}px`);
    }
    return {
        init: init
    };
}
AnimatedCursor.options = defaultOptions;
exports.default = AnimatedCursor;

},{"./utils/lerp":"29c7x","./utils/has-exited-viewport":"dFz2H","./utils/hex-to-rgb":"f3xdV","./utils/set-styles":"2fU8I","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"29c7x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function lerp(a, b, n) {
    return (1 - n) * a + n * b;
}
exports.default = lerp;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dFz2H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function hasExitedViewport(event) {
    return event.clientY <= 0 || event.clientX <= 0 || event.clientX >= window.innerWidth || event.clientY >= window.innerHeight;
}
exports.default = hasExitedViewport;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f3xdV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function hexToRGB(hex, alpha) {
    // const r = parseInt(hex.slice(1, 3), 16)
    // const g = parseInt(hex.slice(3, 5), 16)
    // const b = parseInt(hex.slice(5, 7), 16)
    hex = hex.replace('#', '');
    const r = parseInt(hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
    const g = parseInt(hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
    const b = parseInt(hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
    if (alpha) return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    return `rgb(${r}, ${g}, ${b})`;
}
exports.default = hexToRGB;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2fU8I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setStyles(objId, propertyObject) {
    var elem = document.querySelector(objId);
    for(var property in propertyObject)elem.style[property] = propertyObject[property];
}
exports.default = setStyles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kwnZB","86ByF"], "86ByF", "parcelRequire1176")

//# sourceMappingURL=index.27ad7d95.js.map
