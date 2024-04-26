/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../Library/node_modules/@vimeo/player/dist/player.es.js":
/*!******************************************************************!*\
  !*** ../../Library/node_modules/@vimeo/player/dist/player.es.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/*! @vimeo/player v2.16.3 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 * @module lib/functions
 */

/**
 * Check to see this is a node environment.
 * @type {Boolean}
 */

/* global global */
var isNode = typeof __webpack_require__.g !== 'undefined' && {}.toString.call(__webpack_require__.g) === '[object global]';
/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */

function getMethodName(prop, type) {
  if (prop.indexOf(type.toLowerCase()) === 0) {
    return prop;
  }

  return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
}
/**
 * Check to see if the object is a DOM Element.
 *
 * @param {*} element The object to check.
 * @return {boolean}
 */

function isDomElement(element) {
  return Boolean(element && element.nodeType === 1 && 'nodeName' in element && element.ownerDocument && element.ownerDocument.defaultView);
}
/**
 * Check to see whether the value is a number.
 *
 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
 * @param {*} value The value to check.
 * @param {boolean} integer Check if the value is an integer.
 * @return {boolean}
 */

function isInteger(value) {
  // eslint-disable-next-line eqeqeq
  return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
}
/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */

function isVimeoUrl(url) {
  return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(url);
}
/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */

function getVimeoUrl() {
  var oEmbedParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var id = oEmbedParameters.id;
  var url = oEmbedParameters.url;
  var idOrUrl = id || url;

  if (!idOrUrl) {
    throw new Error('An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.');
  }

  if (isInteger(idOrUrl)) {
    return "https://vimeo.com/".concat(idOrUrl);
  }

  if (isVimeoUrl(idOrUrl)) {
    return idOrUrl.replace('http:', 'https:');
  }

  if (id) {
    throw new TypeError("\u201C".concat(id, "\u201D is not a valid video id."));
  }

  throw new TypeError("\u201C".concat(idOrUrl, "\u201D is not a vimeo.com url."));
}

var arrayIndexOfSupport = typeof Array.prototype.indexOf !== 'undefined';
var postMessageSupport = typeof window !== 'undefined' && typeof window.postMessage !== 'undefined';

if (!isNode && (!arrayIndexOfSupport || !postMessageSupport)) {
  throw new Error('Sorry, the Vimeo Player API is not available in this browser.');
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*!
 * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
(function (self) {

  if (self.WeakMap) {
    return;
  }

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  var defineProperty = function (object, name, value) {
    if (Object.defineProperty) {
      Object.defineProperty(object, name, {
        configurable: true,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };

  self.WeakMap = function () {
    // ECMA-262 23.3 WeakMap Objects
    function WeakMap() {
      if (this === void 0) {
        throw new TypeError("Constructor WeakMap requires 'new'");
      }

      defineProperty(this, '_id', genId('_WeakMap')); // ECMA-262 23.3.1.1 WeakMap([iterable])

      if (arguments.length > 0) {
        // Currently, WeakMap `iterable` argument is not supported
        throw new TypeError('WeakMap iterable is not supported');
      }
    } // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)


    defineProperty(WeakMap.prototype, 'delete', function (key) {
      checkInstance(this, 'delete');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        delete key[this._id];
        return true;
      }

      return false;
    }); // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)

    defineProperty(WeakMap.prototype, 'get', function (key) {
      checkInstance(this, 'get');

      if (!isObject(key)) {
        return void 0;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        return entry[1];
      }

      return void 0;
    }); // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)

    defineProperty(WeakMap.prototype, 'has', function (key) {
      checkInstance(this, 'has');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        return true;
      }

      return false;
    }); // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)

    defineProperty(WeakMap.prototype, 'set', function (key, value) {
      checkInstance(this, 'set');

      if (!isObject(key)) {
        throw new TypeError('Invalid value used as weak map key');
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        entry[1] = value;
        return this;
      }

      defineProperty(key, this._id, [key, value]);
      return this;
    });

    function checkInstance(x, methodName) {
      if (!isObject(x) || !hasOwnProperty.call(x, '_id')) {
        throw new TypeError(methodName + ' method called on incompatible receiver ' + typeof x);
      }
    }

    function genId(prefix) {
      return prefix + '_' + rand() + '.' + rand();
    }

    function rand() {
      return Math.random().toString().substring(2);
    }

    defineProperty(WeakMap, '_polyfill', true);
    return WeakMap;
  }();

  function isObject(x) {
    return Object(x) === x;
  }
})(typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : commonjsGlobal);

var npo_src = createCommonjsModule(function (module) {
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
(function UMD(name, context, definition) {
  // special form of UMD for polyfilling across evironments
  context[name] = context[name] || definition();

  if (module.exports) {
    module.exports = context[name];
  }
})("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {

  var builtInProp,
      cycle,
      scheduling_queue,
      ToString = Object.prototype.toString,
      timer = typeof setImmediate != "undefined" ? function timer(fn) {
    return setImmediate(fn);
  } : setTimeout; // dammit, IE8.

  try {
    Object.defineProperty({}, "x", {});

    builtInProp = function builtInProp(obj, name, val, config) {
      return Object.defineProperty(obj, name, {
        value: val,
        writable: true,
        configurable: config !== false
      });
    };
  } catch (err) {
    builtInProp = function builtInProp(obj, name, val) {
      obj[name] = val;
      return obj;
    };
  } // Note: using a queue instead of array for efficiency


  scheduling_queue = function Queue() {
    var first, last, item;

    function Item(fn, self) {
      this.fn = fn;
      this.self = self;
      this.next = void 0;
    }

    return {
      add: function add(fn, self) {
        item = new Item(fn, self);

        if (last) {
          last.next = item;
        } else {
          first = item;
        }

        last = item;
        item = void 0;
      },
      drain: function drain() {
        var f = first;
        first = last = cycle = void 0;

        while (f) {
          f.fn.call(f.self);
          f = f.next;
        }
      }
    };
  }();

  function schedule(fn, self) {
    scheduling_queue.add(fn, self);

    if (!cycle) {
      cycle = timer(scheduling_queue.drain);
    }
  } // promise duck typing


  function isThenable(o) {
    var _then,
        o_type = typeof o;

    if (o != null && (o_type == "object" || o_type == "function")) {
      _then = o.then;
    }

    return typeof _then == "function" ? _then : false;
  }

  function notify() {
    for (var i = 0; i < this.chain.length; i++) {
      notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
    }

    this.chain.length = 0;
  } // NOTE: This is a separate function to isolate
  // the `try..catch` so that other code can be
  // optimized better


  function notifyIsolated(self, cb, chain) {
    var ret, _then;

    try {
      if (cb === false) {
        chain.reject(self.msg);
      } else {
        if (cb === true) {
          ret = self.msg;
        } else {
          ret = cb.call(void 0, self.msg);
        }

        if (ret === chain.promise) {
          chain.reject(TypeError("Promise-chain cycle"));
        } else if (_then = isThenable(ret)) {
          _then.call(ret, chain.resolve, chain.reject);
        } else {
          chain.resolve(ret);
        }
      }
    } catch (err) {
      chain.reject(err);
    }
  }

  function resolve(msg) {
    var _then,
        self = this; // already triggered?


    if (self.triggered) {
      return;
    }

    self.triggered = true; // unwrap

    if (self.def) {
      self = self.def;
    }

    try {
      if (_then = isThenable(msg)) {
        schedule(function () {
          var def_wrapper = new MakeDefWrapper(self);

          try {
            _then.call(msg, function $resolve$() {
              resolve.apply(def_wrapper, arguments);
            }, function $reject$() {
              reject.apply(def_wrapper, arguments);
            });
          } catch (err) {
            reject.call(def_wrapper, err);
          }
        });
      } else {
        self.msg = msg;
        self.state = 1;

        if (self.chain.length > 0) {
          schedule(notify, self);
        }
      }
    } catch (err) {
      reject.call(new MakeDefWrapper(self), err);
    }
  }

  function reject(msg) {
    var self = this; // already triggered?

    if (self.triggered) {
      return;
    }

    self.triggered = true; // unwrap

    if (self.def) {
      self = self.def;
    }

    self.msg = msg;
    self.state = 2;

    if (self.chain.length > 0) {
      schedule(notify, self);
    }
  }

  function iteratePromises(Constructor, arr, resolver, rejecter) {
    for (var idx = 0; idx < arr.length; idx++) {
      (function IIFE(idx) {
        Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
          resolver(idx, msg);
        }, rejecter);
      })(idx);
    }
  }

  function MakeDefWrapper(self) {
    this.def = self;
    this.triggered = false;
  }

  function MakeDef(self) {
    this.promise = self;
    this.state = 0;
    this.triggered = false;
    this.chain = [];
    this.msg = void 0;
  }

  function Promise(executor) {
    if (typeof executor != "function") {
      throw TypeError("Not a function");
    }

    if (this.__NPO__ !== 0) {
      throw TypeError("Not a promise");
    } // instance shadowing the inherited "brand"
    // to signal an already "initialized" promise


    this.__NPO__ = 1;
    var def = new MakeDef(this);

    this["then"] = function then(success, failure) {
      var o = {
        success: typeof success == "function" ? success : true,
        failure: typeof failure == "function" ? failure : false
      }; // Note: `then(..)` itself can be borrowed to be used against
      // a different promise constructor for making the chained promise,
      // by substituting a different `this` binding.

      o.promise = new this.constructor(function extractChain(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        o.resolve = resolve;
        o.reject = reject;
      });
      def.chain.push(o);

      if (def.state !== 0) {
        schedule(notify, def);
      }

      return o.promise;
    };

    this["catch"] = function $catch$(failure) {
      return this.then(void 0, failure);
    };

    try {
      executor.call(void 0, function publicResolve(msg) {
        resolve.call(def, msg);
      }, function publicReject(msg) {
        reject.call(def, msg);
      });
    } catch (err) {
      reject.call(def, err);
    }
  }

  var PromisePrototype = builtInProp({}, "constructor", Promise,
  /*configurable=*/
  false); // Note: Android 4 cannot use `Object.defineProperty(..)` here

  Promise.prototype = PromisePrototype; // built-in "brand" to signal an "uninitialized" promise

  builtInProp(PromisePrototype, "__NPO__", 0,
  /*configurable=*/
  false);
  builtInProp(Promise, "resolve", function Promise$resolve(msg) {
    var Constructor = this; // spec mandated checks
    // note: best "isPromise" check that's practical for now

    if (msg && typeof msg == "object" && msg.__NPO__ === 1) {
      return msg;
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      resolve(msg);
    });
  });
  builtInProp(Promise, "reject", function Promise$reject(msg) {
    return new this(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      reject(msg);
    });
  });
  builtInProp(Promise, "all", function Promise$all(arr) {
    var Constructor = this; // spec mandated checks

    if (ToString.call(arr) != "[object Array]") {
      return Constructor.reject(TypeError("Not an array"));
    }

    if (arr.length === 0) {
      return Constructor.resolve([]);
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      var len = arr.length,
          msgs = Array(len),
          count = 0;
      iteratePromises(Constructor, arr, function resolver(idx, msg) {
        msgs[idx] = msg;

        if (++count === len) {
          resolve(msgs);
        }
      }, reject);
    });
  });
  builtInProp(Promise, "race", function Promise$race(arr) {
    var Constructor = this; // spec mandated checks

    if (ToString.call(arr) != "[object Array]") {
      return Constructor.reject(TypeError("Not an array"));
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      iteratePromises(Constructor, arr, function resolver(idx, msg) {
        resolve(msg);
      }, reject);
    });
  });
  return Promise;
});
});

/**
 * @module lib/callbacks
 */
var callbackMap = new WeakMap();
/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */

function storeCallback(player, name, callback) {
  var playerCallbacks = callbackMap.get(player.element) || {};

  if (!(name in playerCallbacks)) {
    playerCallbacks[name] = [];
  }

  playerCallbacks[name].push(callback);
  callbackMap.set(player.element, playerCallbacks);
}
/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */

function getCallbacks(player, name) {
  var playerCallbacks = callbackMap.get(player.element) || {};
  return playerCallbacks[name] || [];
}
/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */

function removeCallback(player, name, callback) {
  var playerCallbacks = callbackMap.get(player.element) || {};

  if (!playerCallbacks[name]) {
    return true;
  } // If no callback is passed, remove all callbacks for the event


  if (!callback) {
    playerCallbacks[name] = [];
    callbackMap.set(player.element, playerCallbacks);
    return true;
  }

  var index = playerCallbacks[name].indexOf(callback);

  if (index !== -1) {
    playerCallbacks[name].splice(index, 1);
  }

  callbackMap.set(player.element, playerCallbacks);
  return playerCallbacks[name] && playerCallbacks[name].length === 0;
}
/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */

function shiftCallbacks(player, name) {
  var playerCallbacks = getCallbacks(player, name);

  if (playerCallbacks.length < 1) {
    return false;
  }

  var callback = playerCallbacks.shift();
  removeCallback(player, name, callback);
  return callback;
}
/**
 * Move callbacks associated with an element to another element.
 *
 * @param {HTMLElement} oldElement The old element.
 * @param {HTMLElement} newElement The new element.
 * @return {void}
 */

function swapCallbacks(oldElement, newElement) {
  var playerCallbacks = callbackMap.get(oldElement);
  callbackMap.set(newElement, playerCallbacks);
  callbackMap.delete(oldElement);
}

/**
 * @module lib/embed
 */
var oEmbedParameters = ['autopause', 'autoplay', 'background', 'byline', 'color', 'controls', 'dnt', 'height', 'id', 'interactiveparams', 'keyboard', 'loop', 'maxheight', 'maxwidth', 'muted', 'playsinline', 'portrait', 'responsive', 'speed', 'texttrack', 'title', 'transparent', 'url', 'width'];
/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */

function getOEmbedParameters(element) {
  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return oEmbedParameters.reduce(function (params, param) {
    var value = element.getAttribute("data-vimeo-".concat(param));

    if (value || value === '') {
      params[param] = value === '' ? 1 : value;
    }

    return params;
  }, defaults);
}
/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */

function createEmbed(_ref, element) {
  var html = _ref.html;

  if (!element) {
    throw new TypeError('An element must be provided');
  }

  if (element.getAttribute('data-vimeo-initialized') !== null) {
    return element.querySelector('iframe');
  }

  var div = document.createElement('div');
  div.innerHTML = html;
  element.appendChild(div.firstChild);
  element.setAttribute('data-vimeo-initialized', 'true');
  return element.querySelector('iframe');
}
/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */

function getOEmbedData(videoUrl) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var element = arguments.length > 2 ? arguments[2] : undefined;
  return new Promise(function (resolve, reject) {
    if (!isVimeoUrl(videoUrl)) {
      throw new TypeError("\u201C".concat(videoUrl, "\u201D is not a vimeo.com url."));
    }

    var url = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(videoUrl));

    for (var param in params) {
      if (params.hasOwnProperty(param)) {
        url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
      }
    }

    var xhr = 'XDomainRequest' in window ? new XDomainRequest() : new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
      if (xhr.status === 404) {
        reject(new Error("\u201C".concat(videoUrl, "\u201D was not found.")));
        return;
      }

      if (xhr.status === 403) {
        reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
        return;
      }

      try {
        var json = JSON.parse(xhr.responseText); // Check api response for 403 on oembed

        if (json.domain_status_code === 403) {
          // We still want to create the embed to give users visual feedback
          createEmbed(json, element);
          reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
          return;
        }

        resolve(json);
      } catch (error) {
        reject(error);
      }
    };

    xhr.onerror = function () {
      var status = xhr.status ? " (".concat(xhr.status, ")") : '';
      reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
    };

    xhr.send();
  });
}
/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */

function initializeEmbeds() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var elements = [].slice.call(parent.querySelectorAll('[data-vimeo-id], [data-vimeo-url]'));

  var handleError = function handleError(error) {
    if ('console' in window && console.error) {
      console.error("There was an error creating an embed: ".concat(error));
    }
  };

  elements.forEach(function (element) {
    try {
      // Skip any that have data-vimeo-defer
      if (element.getAttribute('data-vimeo-defer') !== null) {
        return;
      }

      var params = getOEmbedParameters(element);
      var url = getVimeoUrl(params);
      getOEmbedData(url, params, element).then(function (data) {
        return createEmbed(data, element);
      }).catch(handleError);
    } catch (error) {
      handleError(error);
    }
  });
}
/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */

function resizeEmbeds() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  // Prevent execution if users include the player.js script multiple times.
  if (window.VimeoPlayerResizeEmbeds_) {
    return;
  }

  window.VimeoPlayerResizeEmbeds_ = true;

  var onMessage = function onMessage(event) {
    if (!isVimeoUrl(event.origin)) {
      return;
    } // 'spacechange' is fired only on embeds with cards


    if (!event.data || event.data.event !== 'spacechange') {
      return;
    }

    var iframes = parent.querySelectorAll('iframe');

    for (var i = 0; i < iframes.length; i++) {
      if (iframes[i].contentWindow !== event.source) {
        continue;
      } // Change padding-bottom of the enclosing div to accommodate
      // card carousel without distorting aspect ratio


      var space = iframes[i].parentElement;
      space.style.paddingBottom = "".concat(event.data.data[0].bottom, "px");
      break;
    }
  };

  window.addEventListener('message', onMessage);
}

/**
 * @module lib/postmessage
 */
/**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */

function parseMessageData(data) {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (error) {
      // If the message cannot be parsed, throw the error as a warning
      console.warn(error);
      return {};
    }
  }

  return data;
}
/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {object} params The parameters to send to the player.
 * @return {void}
 */

function postMessage(player, method, params) {
  if (!player.element.contentWindow || !player.element.contentWindow.postMessage) {
    return;
  }

  var message = {
    method: method
  };

  if (params !== undefined) {
    message.value = params;
  } // IE 8 and 9 do not support passing messages, so stringify them


  var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, '$1'));

  if (ieVersion >= 8 && ieVersion < 10) {
    message = JSON.stringify(message);
  }

  player.element.contentWindow.postMessage(message, player.origin);
}
/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */

function processData(player, data) {
  data = parseMessageData(data);
  var callbacks = [];
  var param;

  if (data.event) {
    if (data.event === 'error') {
      var promises = getCallbacks(player, data.data.method);
      promises.forEach(function (promise) {
        var error = new Error(data.data.message);
        error.name = data.data.name;
        promise.reject(error);
        removeCallback(player, data.data.method, promise);
      });
    }

    callbacks = getCallbacks(player, "event:".concat(data.event));
    param = data.data;
  } else if (data.method) {
    var callback = shiftCallbacks(player, data.method);

    if (callback) {
      callbacks.push(callback);
      param = data.value;
    }
  }

  callbacks.forEach(function (callback) {
    try {
      if (typeof callback === 'function') {
        callback.call(player, param);
        return;
      }

      callback.resolve(param);
    } catch (e) {// empty
    }
  });
}

/* MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Terms */
function initializeScreenfull() {
  var fn = function () {
    var val;
    var fnMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], // New WebKit
    ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], // Old WebKit
    ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
    var i = 0;
    var l = fnMap.length;
    var ret = {};

    for (; i < l; i++) {
      val = fnMap[i];

      if (val && val[1] in document) {
        for (i = 0; i < val.length; i++) {
          ret[fnMap[0][i]] = val[i];
        }

        return ret;
      }
    }

    return false;
  }();

  var eventNameMap = {
    fullscreenchange: fn.fullscreenchange,
    fullscreenerror: fn.fullscreenerror
  };
  var screenfull = {
    request: function request(element) {
      return new Promise(function (resolve, reject) {
        var onFullScreenEntered = function onFullScreenEntered() {
          screenfull.off('fullscreenchange', onFullScreenEntered);
          resolve();
        };

        screenfull.on('fullscreenchange', onFullScreenEntered);
        element = element || document.documentElement;
        var returnPromise = element[fn.requestFullscreen]();

        if (returnPromise instanceof Promise) {
          returnPromise.then(onFullScreenEntered).catch(reject);
        }
      });
    },
    exit: function exit() {
      return new Promise(function (resolve, reject) {
        if (!screenfull.isFullscreen) {
          resolve();
          return;
        }

        var onFullScreenExit = function onFullScreenExit() {
          screenfull.off('fullscreenchange', onFullScreenExit);
          resolve();
        };

        screenfull.on('fullscreenchange', onFullScreenExit);
        var returnPromise = document[fn.exitFullscreen]();

        if (returnPromise instanceof Promise) {
          returnPromise.then(onFullScreenExit).catch(reject);
        }
      });
    },
    on: function on(event, callback) {
      var eventName = eventNameMap[event];

      if (eventName) {
        document.addEventListener(eventName, callback);
      }
    },
    off: function off(event, callback) {
      var eventName = eventNameMap[event];

      if (eventName) {
        document.removeEventListener(eventName, callback);
      }
    }
  };
  Object.defineProperties(screenfull, {
    isFullscreen: {
      get: function get() {
        return Boolean(document[fn.fullscreenElement]);
      }
    },
    element: {
      enumerable: true,
      get: function get() {
        return document[fn.fullscreenElement];
      }
    },
    isEnabled: {
      enumerable: true,
      get: function get() {
        // Coerce to boolean in case of old WebKit
        return Boolean(document[fn.fullscreenEnabled]);
      }
    }
  });
  return screenfull;
}

var playerMap = new WeakMap();
var readyMap = new WeakMap();
var screenfull = {};

var Player = /*#__PURE__*/function () {
  /**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */
  function Player(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Player);

    /* global jQuery */
    if (window.jQuery && element instanceof jQuery) {
      if (element.length > 1 && window.console && console.warn) {
        console.warn('A jQuery object with multiple elements was passed, using the first element.');
      }

      element = element[0];
    } // Find an element by ID


    if (typeof document !== 'undefined' && typeof element === 'string') {
      element = document.getElementById(element);
    } // Not an element!


    if (!isDomElement(element)) {
      throw new TypeError('You must pass either a valid element or a valid id.');
    } // Already initialized an embed in this div, so grab the iframe


    if (element.nodeName !== 'IFRAME') {
      var iframe = element.querySelector('iframe');

      if (iframe) {
        element = iframe;
      }
    } // iframe url is not a Vimeo url


    if (element.nodeName === 'IFRAME' && !isVimeoUrl(element.getAttribute('src') || '')) {
      throw new Error('The player element passed isn’t a Vimeo embed.');
    } // If there is already a player object in the map, return that


    if (playerMap.has(element)) {
      return playerMap.get(element);
    }

    this._window = element.ownerDocument.defaultView;
    this.element = element;
    this.origin = '*';
    var readyPromise = new npo_src(function (resolve, reject) {
      _this._onMessage = function (event) {
        if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) {
          return;
        }

        if (_this.origin === '*') {
          _this.origin = event.origin;
        }

        var data = parseMessageData(event.data);
        var isError = data && data.event === 'error';
        var isReadyError = isError && data.data && data.data.method === 'ready';

        if (isReadyError) {
          var error = new Error(data.data.message);
          error.name = data.data.name;
          reject(error);
          return;
        }

        var isReadyEvent = data && data.event === 'ready';
        var isPingResponse = data && data.method === 'ping';

        if (isReadyEvent || isPingResponse) {
          _this.element.setAttribute('data-ready', 'true');

          resolve();
          return;
        }

        processData(_this, data);
      };

      _this._window.addEventListener('message', _this._onMessage);

      if (_this.element.nodeName !== 'IFRAME') {
        var params = getOEmbedParameters(element, options);
        var url = getVimeoUrl(params);
        getOEmbedData(url, params, element).then(function (data) {
          var iframe = createEmbed(data, element); // Overwrite element with the new iframe,
          // but store reference to the original element

          _this.element = iframe;
          _this._originalElement = element;
          swapCallbacks(element, iframe);
          playerMap.set(_this.element, _this);
          return data;
        }).catch(reject);
      }
    }); // Store a copy of this Player in the map

    readyMap.set(this, readyPromise);
    playerMap.set(this.element, this); // Send a ping to the iframe so the ready promise will be resolved if
    // the player is already ready.

    if (this.element.nodeName === 'IFRAME') {
      postMessage(this, 'ping');
    }

    if (screenfull.isEnabled) {
      var exitFullscreen = function exitFullscreen() {
        return screenfull.exit();
      };

      this.fullscreenchangeHandler = function () {
        if (screenfull.isFullscreen) {
          storeCallback(_this, 'event:exitFullscreen', exitFullscreen);
        } else {
          removeCallback(_this, 'event:exitFullscreen', exitFullscreen);
        } // eslint-disable-next-line


        _this.ready().then(function () {
          postMessage(_this, 'fullscreenchange', screenfull.isFullscreen);
        });
      };

      screenfull.on('fullscreenchange', this.fullscreenchangeHandler);
    }

    return this;
  }
  /**
   * Get a promise for a method.
   *
   * @param {string} name The API method to call.
   * @param {Object} [args={}] Arguments to send via postMessage.
   * @return {Promise}
   */


  _createClass(Player, [{
    key: "callMethod",
    value: function callMethod(name) {
      var _this2 = this;

      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new npo_src(function (resolve, reject) {
        // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return
        return _this2.ready().then(function () {
          storeCallback(_this2, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this2, name, args);
        }).catch(reject);
      });
    }
    /**
     * Get a promise for the value of a player property.
     *
     * @param {string} name The property name
     * @return {Promise}
     */

  }, {
    key: "get",
    value: function get(name) {
      var _this3 = this;

      return new npo_src(function (resolve, reject) {
        name = getMethodName(name, 'get'); // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return

        return _this3.ready().then(function () {
          storeCallback(_this3, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this3, name);
        }).catch(reject);
      });
    }
    /**
     * Get a promise for setting the value of a player property.
     *
     * @param {string} name The API method to call.
     * @param {mixed} value The value to set.
     * @return {Promise}
     */

  }, {
    key: "set",
    value: function set(name, value) {
      var _this4 = this;

      return new npo_src(function (resolve, reject) {
        name = getMethodName(name, 'set');

        if (value === undefined || value === null) {
          throw new TypeError('There must be a value to set.');
        } // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return


        return _this4.ready().then(function () {
          storeCallback(_this4, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this4, name, value);
        }).catch(reject);
      });
    }
    /**
     * Add an event listener for the specified event. Will call the
     * callback with a single parameter, `data`, that contains the data for
     * that event.
     *
     * @param {string} eventName The name of the event.
     * @param {function(*)} callback The function to call when the event fires.
     * @return {void}
     */

  }, {
    key: "on",
    value: function on(eventName, callback) {
      if (!eventName) {
        throw new TypeError('You must pass an event name.');
      }

      if (!callback) {
        throw new TypeError('You must pass a callback function.');
      }

      if (typeof callback !== 'function') {
        throw new TypeError('The callback must be a function.');
      }

      var callbacks = getCallbacks(this, "event:".concat(eventName));

      if (callbacks.length === 0) {
        this.callMethod('addEventListener', eventName).catch(function () {// Ignore the error. There will be an error event fired that
          // will trigger the error callback if they are listening.
        });
      }

      storeCallback(this, "event:".concat(eventName), callback);
    }
    /**
     * Remove an event listener for the specified event. Will remove all
     * listeners for that event if a `callback` isn’t passed, or only that
     * specific callback if it is passed.
     *
     * @param {string} eventName The name of the event.
     * @param {function} [callback] The specific callback to remove.
     * @return {void}
     */

  }, {
    key: "off",
    value: function off(eventName, callback) {
      if (!eventName) {
        throw new TypeError('You must pass an event name.');
      }

      if (callback && typeof callback !== 'function') {
        throw new TypeError('The callback must be a function.');
      }

      var lastCallback = removeCallback(this, "event:".concat(eventName), callback); // If there are no callbacks left, remove the listener

      if (lastCallback) {
        this.callMethod('removeEventListener', eventName).catch(function (e) {// Ignore the error. There will be an error event fired that
          // will trigger the error callback if they are listening.
        });
      }
    }
    /**
     * A promise to load a new video.
     *
     * @promise LoadVideoPromise
     * @fulfill {number} The video with this id or url successfully loaded.
     * @reject {TypeError} The id was not a number.
     */

    /**
     * Load a new video into this embed. The promise will be resolved if
     * the video is successfully loaded, or it will be rejected if it could
     * not be loaded.
     *
     * @param {number|string|object} options The id of the video, the url of the video, or an object with embed options.
     * @return {LoadVideoPromise}
     */

  }, {
    key: "loadVideo",
    value: function loadVideo(options) {
      return this.callMethod('loadVideo', options);
    }
    /**
     * A promise to perform an action when the Player is ready.
     *
     * @todo document errors
     * @promise LoadVideoPromise
     * @fulfill {void}
     */

    /**
     * Trigger a function when the player iframe has initialized. You do not
     * need to wait for `ready` to trigger to begin adding event listeners
     * or calling other methods.
     *
     * @return {ReadyPromise}
     */

  }, {
    key: "ready",
    value: function ready() {
      var readyPromise = readyMap.get(this) || new npo_src(function (resolve, reject) {
        reject(new Error('Unknown player. Probably unloaded.'));
      });
      return npo_src.resolve(readyPromise);
    }
    /**
     * A promise to add a cue point to the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point to use for removeCuePoint.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Add a cue point to the player.
     *
     * @param {number} time The time for the cue point.
     * @param {object} [data] Arbitrary data to be returned with the cue point.
     * @return {AddCuePointPromise}
     */

  }, {
    key: "addCuePoint",
    value: function addCuePoint(time) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.callMethod('addCuePoint', {
        time: time,
        data: data
      });
    }
    /**
     * A promise to remove a cue point from the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point that was removed.
     * @reject {InvalidCuePoint} The cue point with the specified id was not
     *         found.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Remove a cue point from the video.
     *
     * @param {string} id The id of the cue point to remove.
     * @return {RemoveCuePointPromise}
     */

  }, {
    key: "removeCuePoint",
    value: function removeCuePoint(id) {
      return this.callMethod('removeCuePoint', id);
    }
    /**
     * A representation of a text track on a video.
     *
     * @typedef {Object} VimeoTextTrack
     * @property {string} language The ISO language code.
     * @property {string} kind The kind of track it is (captions or subtitles).
     * @property {string} label The human‐readable label for the track.
     */

    /**
     * A promise to enable a text track.
     *
     * @promise EnableTextTrackPromise
     * @fulfill {VimeoTextTrack} The text track that was enabled.
     * @reject {InvalidTrackLanguageError} No track was available with the
     *         specified language.
     * @reject {InvalidTrackError} No track was available with the specified
     *         language and kind.
     */

    /**
     * Enable the text track with the specified language, and optionally the
     * specified kind (captions or subtitles).
     *
     * When set via the API, the track language will not change the viewer’s
     * stored preference.
     *
     * @param {string} language The two‐letter language code.
     * @param {string} [kind] The kind of track to enable (captions or subtitles).
     * @return {EnableTextTrackPromise}
     */

  }, {
    key: "enableTextTrack",
    value: function enableTextTrack(language, kind) {
      if (!language) {
        throw new TypeError('You must pass a language.');
      }

      return this.callMethod('enableTextTrack', {
        language: language,
        kind: kind
      });
    }
    /**
     * A promise to disable the active text track.
     *
     * @promise DisableTextTrackPromise
     * @fulfill {void} The track was disabled.
     */

    /**
     * Disable the currently-active text track.
     *
     * @return {DisableTextTrackPromise}
     */

  }, {
    key: "disableTextTrack",
    value: function disableTextTrack() {
      return this.callMethod('disableTextTrack');
    }
    /**
     * A promise to pause the video.
     *
     * @promise PausePromise
     * @fulfill {void} The video was paused.
     */

    /**
     * Pause the video if it’s playing.
     *
     * @return {PausePromise}
     */

  }, {
    key: "pause",
    value: function pause() {
      return this.callMethod('pause');
    }
    /**
     * A promise to play the video.
     *
     * @promise PlayPromise
     * @fulfill {void} The video was played.
     */

    /**
     * Play the video if it’s paused. **Note:** on iOS and some other
     * mobile devices, you cannot programmatically trigger play. Once the
     * viewer has tapped on the play button in the player, however, you
     * will be able to use this function.
     *
     * @return {PlayPromise}
     */

  }, {
    key: "play",
    value: function play() {
      return this.callMethod('play');
    }
    /**
     * Request that the player enters fullscreen.
     * @return {Promise}
     */

  }, {
    key: "requestFullscreen",
    value: function requestFullscreen() {
      if (screenfull.isEnabled) {
        return screenfull.request(this.element);
      }

      return this.callMethod('requestFullscreen');
    }
    /**
     * Request that the player exits fullscreen.
     * @return {Promise}
     */

  }, {
    key: "exitFullscreen",
    value: function exitFullscreen() {
      if (screenfull.isEnabled) {
        return screenfull.exit();
      }

      return this.callMethod('exitFullscreen');
    }
    /**
     * Returns true if the player is currently fullscreen.
     * @return {Promise}
     */

  }, {
    key: "getFullscreen",
    value: function getFullscreen() {
      if (screenfull.isEnabled) {
        return npo_src.resolve(screenfull.isFullscreen);
      }

      return this.get('fullscreen');
    }
    /**
     * Request that the player enters picture-in-picture.
     * @return {Promise}
     */

  }, {
    key: "requestPictureInPicture",
    value: function requestPictureInPicture() {
      return this.callMethod('requestPictureInPicture');
    }
    /**
     * Request that the player exits picture-in-picture.
     * @return {Promise}
     */

  }, {
    key: "exitPictureInPicture",
    value: function exitPictureInPicture() {
      return this.callMethod('exitPictureInPicture');
    }
    /**
     * Returns true if the player is currently picture-in-picture.
     * @return {Promise}
     */

  }, {
    key: "getPictureInPicture",
    value: function getPictureInPicture() {
      return this.get('pictureInPicture');
    }
    /**
     * A promise to unload the video.
     *
     * @promise UnloadPromise
     * @fulfill {void} The video was unloaded.
     */

    /**
     * Return the player to its initial state.
     *
     * @return {UnloadPromise}
     */

  }, {
    key: "unload",
    value: function unload() {
      return this.callMethod('unload');
    }
    /**
     * Cleanup the player and remove it from the DOM
     *
     * It won't be usable and a new one should be constructed
     *  in order to do any operations.
     *
     * @return {Promise}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this5 = this;

      return new npo_src(function (resolve) {
        readyMap.delete(_this5);
        playerMap.delete(_this5.element);

        if (_this5._originalElement) {
          playerMap.delete(_this5._originalElement);

          _this5._originalElement.removeAttribute('data-vimeo-initialized');
        }

        if (_this5.element && _this5.element.nodeName === 'IFRAME' && _this5.element.parentNode) {
          // If we've added an additional wrapper div, remove that from the DOM.
          // If not, just remove the iframe element.
          if (_this5.element.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== _this5.element.parentNode) {
            _this5.element.parentNode.parentNode.removeChild(_this5.element.parentNode);
          } else {
            _this5.element.parentNode.removeChild(_this5.element);
          }
        } // If the clip is private there is a case where the element stays the
        // div element. Destroy should reset the div and remove the iframe child.


        if (_this5.element && _this5.element.nodeName === 'DIV' && _this5.element.parentNode) {
          _this5.element.removeAttribute('data-vimeo-initialized');

          var iframe = _this5.element.querySelector('iframe');

          if (iframe && iframe.parentNode) {
            // If we've added an additional wrapper div, remove that from the DOM.
            // If not, just remove the iframe element.
            if (iframe.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== iframe.parentNode) {
              iframe.parentNode.parentNode.removeChild(iframe.parentNode);
            } else {
              iframe.parentNode.removeChild(iframe);
            }
          }
        }

        _this5._window.removeEventListener('message', _this5._onMessage);

        if (screenfull.isEnabled) {
          screenfull.off('fullscreenchange', _this5.fullscreenchangeHandler);
        }

        resolve();
      });
    }
    /**
     * A promise to get the autopause behavior of the video.
     *
     * @promise GetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */

    /**
     * Get the autopause behavior for this player.
     *
     * @return {GetAutopausePromise}
     */

  }, {
    key: "getAutopause",
    value: function getAutopause() {
      return this.get('autopause');
    }
    /**
     * A promise to set the autopause behavior of the video.
     *
     * @promise SetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */

    /**
     * Enable or disable the autopause behavior of this player.
     *
     * By default, when another video is played in the same browser, this
     * player will automatically pause. Unless you have a specific reason
     * for doing so, we recommend that you leave autopause set to the
     * default (`true`).
     *
     * @param {boolean} autopause
     * @return {SetAutopausePromise}
     */

  }, {
    key: "setAutopause",
    value: function setAutopause(autopause) {
      return this.set('autopause', autopause);
    }
    /**
     * A promise to get the buffered property of the video.
     *
     * @promise GetBufferedPromise
     * @fulfill {Array} Buffered Timeranges converted to an Array.
     */

    /**
     * Get the buffered property of the video.
     *
     * @return {GetBufferedPromise}
     */

  }, {
    key: "getBuffered",
    value: function getBuffered() {
      return this.get('buffered');
    }
    /**
     * @typedef {Object} CameraProperties
     * @prop {number} props.yaw - Number between 0 and 360.
     * @prop {number} props.pitch - Number between -90 and 90.
     * @prop {number} props.roll - Number between -180 and 180.
     * @prop {number} props.fov - The field of view in degrees.
     */

    /**
     * A promise to get the camera properties of the player.
     *
     * @promise GetCameraPromise
     * @fulfill {CameraProperties} The camera properties.
     */

    /**
     * For 360° videos get the camera properties for this player.
     *
     * @return {GetCameraPromise}
     */

  }, {
    key: "getCameraProps",
    value: function getCameraProps() {
      return this.get('cameraProps');
    }
    /**
     * A promise to set the camera properties of the player.
     *
     * @promise SetCameraPromise
     * @fulfill {Object} The camera was successfully set.
     * @reject {RangeError} The range was out of bounds.
     */

    /**
     * For 360° videos set the camera properties for this player.
     *
     * @param {CameraProperties} camera The camera properties
     * @return {SetCameraPromise}
     */

  }, {
    key: "setCameraProps",
    value: function setCameraProps(camera) {
      return this.set('cameraProps', camera);
    }
    /**
     * A representation of a chapter.
     *
     * @typedef {Object} VimeoChapter
     * @property {number} startTime The start time of the chapter.
     * @property {object} title The title of the chapter.
     * @property {number} index The place in the order of Chapters. Starts at 1.
     */

    /**
     * A promise to get chapters for the video.
     *
     * @promise GetChaptersPromise
     * @fulfill {VimeoChapter[]} The chapters for the video.
     */

    /**
     * Get an array of all the chapters for the video.
     *
     * @return {GetChaptersPromise}
     */

  }, {
    key: "getChapters",
    value: function getChapters() {
      return this.get('chapters');
    }
    /**
     * A promise to get the currently active chapter.
     *
     * @promise GetCurrentChaptersPromise
     * @fulfill {VimeoChapter|undefined} The current chapter for the video.
     */

    /**
     * Get the currently active chapter for the video.
     *
     * @return {GetCurrentChaptersPromise}
     */

  }, {
    key: "getCurrentChapter",
    value: function getCurrentChapter() {
      return this.get('currentChapter');
    }
    /**
     * A promise to get the color of the player.
     *
     * @promise GetColorPromise
     * @fulfill {string} The hex color of the player.
     */

    /**
     * Get the color for this player.
     *
     * @return {GetColorPromise}
     */

  }, {
    key: "getColor",
    value: function getColor() {
      return this.get('color');
    }
    /**
     * A promise to set the color of the player.
     *
     * @promise SetColorPromise
     * @fulfill {string} The color was successfully set.
     * @reject {TypeError} The string was not a valid hex or rgb color.
     * @reject {ContrastError} The color was set, but the contrast is
     *         outside of the acceptable range.
     * @reject {EmbedSettingsError} The owner of the player has chosen to
     *         use a specific color.
     */

    /**
     * Set the color of this player to a hex or rgb string. Setting the
     * color may fail if the owner of the video has set their embed
     * preferences to force a specific color.
     *
     * @param {string} color The hex or rgb color string to set.
     * @return {SetColorPromise}
     */

  }, {
    key: "setColor",
    value: function setColor(color) {
      return this.set('color', color);
    }
    /**
     * A representation of a cue point.
     *
     * @typedef {Object} VimeoCuePoint
     * @property {number} time The time of the cue point.
     * @property {object} data The data passed when adding the cue point.
     * @property {string} id The unique id for use with removeCuePoint.
     */

    /**
     * A promise to get the cue points of a video.
     *
     * @promise GetCuePointsPromise
     * @fulfill {VimeoCuePoint[]} The cue points added to the video.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Get an array of the cue points added to the video.
     *
     * @return {GetCuePointsPromise}
     */

  }, {
    key: "getCuePoints",
    value: function getCuePoints() {
      return this.get('cuePoints');
    }
    /**
     * A promise to get the current time of the video.
     *
     * @promise GetCurrentTimePromise
     * @fulfill {number} The current time in seconds.
     */

    /**
     * Get the current playback position in seconds.
     *
     * @return {GetCurrentTimePromise}
     */

  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.get('currentTime');
    }
    /**
     * A promise to set the current time of the video.
     *
     * @promise SetCurrentTimePromise
     * @fulfill {number} The actual current time that was set.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     */

    /**
     * Set the current playback position in seconds. If the player was
     * paused, it will remain paused. Likewise, if the player was playing,
     * it will resume playing once the video has buffered.
     *
     * You can provide an accurate time and the player will attempt to seek
     * to as close to that time as possible. The exact time will be the
     * fulfilled value of the promise.
     *
     * @param {number} currentTime
     * @return {SetCurrentTimePromise}
     */

  }, {
    key: "setCurrentTime",
    value: function setCurrentTime(currentTime) {
      return this.set('currentTime', currentTime);
    }
    /**
     * A promise to get the duration of the video.
     *
     * @promise GetDurationPromise
     * @fulfill {number} The duration in seconds.
     */

    /**
     * Get the duration of the video in seconds. It will be rounded to the
     * nearest second before playback begins, and to the nearest thousandth
     * of a second after playback begins.
     *
     * @return {GetDurationPromise}
     */

  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.get('duration');
    }
    /**
     * A promise to get the ended state of the video.
     *
     * @promise GetEndedPromise
     * @fulfill {boolean} Whether or not the video has ended.
     */

    /**
     * Get the ended state of the video. The video has ended if
     * `currentTime === duration`.
     *
     * @return {GetEndedPromise}
     */

  }, {
    key: "getEnded",
    value: function getEnded() {
      return this.get('ended');
    }
    /**
     * A promise to get the loop state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the player is set to loop.
     */

    /**
     * Get the loop state of the player.
     *
     * @return {GetLoopPromise}
     */

  }, {
    key: "getLoop",
    value: function getLoop() {
      return this.get('loop');
    }
    /**
     * A promise to set the loop state of the player.
     *
     * @promise SetLoopPromise
     * @fulfill {boolean} The loop state that was set.
     */

    /**
     * Set the loop state of the player. When set to `true`, the player
     * will start over immediately once playback ends.
     *
     * @param {boolean} loop
     * @return {SetLoopPromise}
     */

  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      return this.set('loop', loop);
    }
    /**
     * A promise to set the muted state of the player.
     *
     * @promise SetMutedPromise
     * @fulfill {boolean} The muted state that was set.
     */

    /**
     * Set the muted state of the player. When set to `true`, the player
     * volume will be muted.
     *
     * @param {boolean} muted
     * @return {SetMutedPromise}
     */

  }, {
    key: "setMuted",
    value: function setMuted(muted) {
      return this.set('muted', muted);
    }
    /**
     * A promise to get the muted state of the player.
     *
     * @promise GetMutedPromise
     * @fulfill {boolean} Whether or not the player is muted.
     */

    /**
     * Get the muted state of the player.
     *
     * @return {GetMutedPromise}
     */

  }, {
    key: "getMuted",
    value: function getMuted() {
      return this.get('muted');
    }
    /**
     * A promise to get the paused state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the video is paused.
     */

    /**
     * Get the paused state of the player.
     *
     * @return {GetLoopPromise}
     */

  }, {
    key: "getPaused",
    value: function getPaused() {
      return this.get('paused');
    }
    /**
     * A promise to get the playback rate of the player.
     *
     * @promise GetPlaybackRatePromise
     * @fulfill {number} The playback rate of the player on a scale from 0.5 to 2.
     */

    /**
     * Get the playback rate of the player on a scale from `0.5` to `2`.
     *
     * @return {GetPlaybackRatePromise}
     */

  }, {
    key: "getPlaybackRate",
    value: function getPlaybackRate() {
      return this.get('playbackRate');
    }
    /**
     * A promise to set the playbackrate of the player.
     *
     * @promise SetPlaybackRatePromise
     * @fulfill {number} The playback rate was set.
     * @reject {RangeError} The playback rate was less than 0.5 or greater than 2.
     */

    /**
     * Set the playback rate of the player on a scale from `0.5` to `2`. When set
     * via the API, the playback rate will not be synchronized to other
     * players or stored as the viewer's preference.
     *
     * @param {number} playbackRate
     * @return {SetPlaybackRatePromise}
     */

  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(playbackRate) {
      return this.set('playbackRate', playbackRate);
    }
    /**
     * A promise to get the played property of the video.
     *
     * @promise GetPlayedPromise
     * @fulfill {Array} Played Timeranges converted to an Array.
     */

    /**
     * Get the played property of the video.
     *
     * @return {GetPlayedPromise}
     */

  }, {
    key: "getPlayed",
    value: function getPlayed() {
      return this.get('played');
    }
    /**
     * A promise to get the qualities available of the current video.
     *
     * @promise GetQualitiesPromise
     * @fulfill {Array} The qualities of the video.
     */

    /**
     * Get the qualities of the current video.
     *
     * @return {GetQualitiesPromise}
     */

  }, {
    key: "getQualities",
    value: function getQualities() {
      return this.get('qualities');
    }
    /**
     * A promise to get the current set quality of the video.
     *
     * @promise GetQualityPromise
     * @fulfill {string} The current set quality.
     */

    /**
     * Get the current set quality of the video.
     *
     * @return {GetQualityPromise}
     */

  }, {
    key: "getQuality",
    value: function getQuality() {
      return this.get('quality');
    }
    /**
     * A promise to set the video quality.
     *
     * @promise SetQualityPromise
     * @fulfill {number} The quality was set.
     * @reject {RangeError} The quality is not available.
     */

    /**
     * Set a video quality.
     *
     * @param {string} quality
     * @return {SetQualityPromise}
     */

  }, {
    key: "setQuality",
    value: function setQuality(quality) {
      return this.set('quality', quality);
    }
    /**
     * A promise to get the seekable property of the video.
     *
     * @promise GetSeekablePromise
     * @fulfill {Array} Seekable Timeranges converted to an Array.
     */

    /**
     * Get the seekable property of the video.
     *
     * @return {GetSeekablePromise}
     */

  }, {
    key: "getSeekable",
    value: function getSeekable() {
      return this.get('seekable');
    }
    /**
     * A promise to get the seeking property of the player.
     *
     * @promise GetSeekingPromise
     * @fulfill {boolean} Whether or not the player is currently seeking.
     */

    /**
     * Get if the player is currently seeking.
     *
     * @return {GetSeekingPromise}
     */

  }, {
    key: "getSeeking",
    value: function getSeeking() {
      return this.get('seeking');
    }
    /**
     * A promise to get the text tracks of a video.
     *
     * @promise GetTextTracksPromise
     * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.
     */

    /**
     * Get an array of the text tracks that exist for the video.
     *
     * @return {GetTextTracksPromise}
     */

  }, {
    key: "getTextTracks",
    value: function getTextTracks() {
      return this.get('textTracks');
    }
    /**
     * A promise to get the embed code for the video.
     *
     * @promise GetVideoEmbedCodePromise
     * @fulfill {string} The `<iframe>` embed code for the video.
     */

    /**
     * Get the `<iframe>` embed code for the video.
     *
     * @return {GetVideoEmbedCodePromise}
     */

  }, {
    key: "getVideoEmbedCode",
    value: function getVideoEmbedCode() {
      return this.get('videoEmbedCode');
    }
    /**
     * A promise to get the id of the video.
     *
     * @promise GetVideoIdPromise
     * @fulfill {number} The id of the video.
     */

    /**
     * Get the id of the video.
     *
     * @return {GetVideoIdPromise}
     */

  }, {
    key: "getVideoId",
    value: function getVideoId() {
      return this.get('videoId');
    }
    /**
     * A promise to get the title of the video.
     *
     * @promise GetVideoTitlePromise
     * @fulfill {number} The title of the video.
     */

    /**
     * Get the title of the video.
     *
     * @return {GetVideoTitlePromise}
     */

  }, {
    key: "getVideoTitle",
    value: function getVideoTitle() {
      return this.get('videoTitle');
    }
    /**
     * A promise to get the native width of the video.
     *
     * @promise GetVideoWidthPromise
     * @fulfill {number} The native width of the video.
     */

    /**
     * Get the native width of the currently‐playing video. The width of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoWidthPromise}
     */

  }, {
    key: "getVideoWidth",
    value: function getVideoWidth() {
      return this.get('videoWidth');
    }
    /**
     * A promise to get the native height of the video.
     *
     * @promise GetVideoHeightPromise
     * @fulfill {number} The native height of the video.
     */

    /**
     * Get the native height of the currently‐playing video. The height of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoHeightPromise}
     */

  }, {
    key: "getVideoHeight",
    value: function getVideoHeight() {
      return this.get('videoHeight');
    }
    /**
     * A promise to get the vimeo.com url for the video.
     *
     * @promise GetVideoUrlPromise
     * @fulfill {number} The vimeo.com url for the video.
     * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.
     */

    /**
     * Get the vimeo.com url for the video.
     *
     * @return {GetVideoUrlPromise}
     */

  }, {
    key: "getVideoUrl",
    value: function getVideoUrl() {
      return this.get('videoUrl');
    }
    /**
     * A promise to get the volume level of the player.
     *
     * @promise GetVolumePromise
     * @fulfill {number} The volume level of the player on a scale from 0 to 1.
     */

    /**
     * Get the current volume level of the player on a scale from `0` to `1`.
     *
     * Most mobile devices do not support an independent volume from the
     * system volume. In those cases, this method will always return `1`.
     *
     * @return {GetVolumePromise}
     */

  }, {
    key: "getVolume",
    value: function getVolume() {
      return this.get('volume');
    }
    /**
     * A promise to set the volume level of the player.
     *
     * @promise SetVolumePromise
     * @fulfill {number} The volume was set.
     * @reject {RangeError} The volume was less than 0 or greater than 1.
     */

    /**
     * Set the volume of the player on a scale from `0` to `1`. When set
     * via the API, the volume level will not be synchronized to other
     * players or stored as the viewer’s preference.
     *
     * Most mobile devices do not support setting the volume. An error will
     * *not* be triggered in that situation.
     *
     * @param {number} volume
     * @return {SetVolumePromise}
     */

  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      return this.set('volume', volume);
    }
  }]);

  return Player;
}(); // Setup embed only if this is not a node environment


if (!isNode) {
  screenfull = initializeScreenfull();
  initializeEmbeds();
  resizeEmbeds();
}

/* harmony default export */ __webpack_exports__["default"] = (Player);


/***/ }),

/***/ "../../Library/Shared/ts/api/campaign-manager/settings-manager.ts":
/*!************************************************************************!*\
  !*** ../../Library/Shared/ts/api/campaign-manager/settings-manager.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSettingByCode": function() { return /* binding */ getSettingByCode; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../Library/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);

var getSettingByCode = (settingCode, useCampaignSetting) => {
  var campaignSetting = useCampaignSetting != null ? useCampaignSetting : false;
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", response => resolve(xhr.response));
    xhr.addEventListener("error", response => reject(xhr.response));
    xhr.open("GET", "/Shared/Services/SettingService.ashx?s=" + settingCode + "&cs=" + campaignSetting);
    xhr.send();
  });
};

/***/ }),

/***/ "../../Library/Shared/ts/api/carousel/slide/adapters/fade-slide-carousel.ts":
/*!**********************************************************************************!*\
  !*** ../../Library/Shared/ts/api/carousel/slide/adapters/fade-slide-carousel.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FadeSlideCarouselAdapter; }
/* harmony export */ });
/* harmony import */ var Shared_ts_api_carousel_slide_adapters_slide_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/api/carousel/slide/adapters/slide-carousel */ "../../Library/Shared/ts/api/carousel/slide/adapters/slide-carousel.ts");

class FadeSlideCarouselAdapter extends Shared_ts_api_carousel_slide_adapters_slide_carousel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * An adapter Api that implements the IFadeCarousel contract while communicating with the Slide Js Api
   * @param container Element
   */
  constructor(container) {
    super(container);
  }
  /**
   * Disables the Carousel's auto-scroll rotation behavior and enables shim mode
   */


  initialize() {
    var _this$api, _this$api2;

    (_this$api = this.api) == null ? void 0 : _this$api.setShim(true);
    (_this$api2 = this.api) == null ? void 0 : _this$api2.handleRotation(false);
  }

}

/***/ }),

/***/ "../../Library/Shared/ts/api/carousel/slide/adapters/responsive-slide-carousel.ts":
/*!****************************************************************************************!*\
  !*** ../../Library/Shared/ts/api/carousel/slide/adapters/responsive-slide-carousel.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ResponsiveSlideCarouselAdapter; }
/* harmony export */ });
/* harmony import */ var Shared_ts_api_carousel_slide_adapters_slide_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/api/carousel/slide/adapters/slide-carousel */ "../../Library/Shared/ts/api/carousel/slide/adapters/slide-carousel.ts");

class ResponsiveSlideCarouselAdapter extends Shared_ts_api_carousel_slide_adapters_slide_carousel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * An adapter Api that implements the IResponsiveCarousel contract while communicating with the Slide Js Api
   * @param container Element
   */
  constructor(container) {
    super(container);
    this.stepIndex = 0;
    this.steps = 1;
  }

}

/***/ }),

/***/ "../../Library/Shared/ts/api/carousel/slide/adapters/slide-carousel.ts":
/*!*****************************************************************************!*\
  !*** ../../Library/Shared/ts/api/carousel/slide/adapters/slide-carousel.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SlideCarouselAdapter; }
/* harmony export */ });
/* harmony import */ var Shared_ts_api_carousel_slide_slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/api/carousel/slide/slide */ "../../Library/Shared/ts/api/carousel/slide/slide.ts");

class SlideCarouselAdapter {
  /**
   * An adapter Api that implements the ICarousel contract while communicating with the Slide Js Api
   * @param container Element
   */
  constructor(container) {
    var _this$api, _this$api2;

    this.api = void 0;
    this.container = void 0;
    this.parent = void 0;
    this.children = void 0;
    this.container = container;
    this.api = this.create(container);
    this.parent = (_this$api = this.api) == null ? void 0 : _this$api.parent;
    this.children = (_this$api2 = this.api) == null ? void 0 : _this$api2.children;
  }

  create(element) {
    var result;

    if (element) {
      var id = element.querySelector('[id][class*="slide__into"]');

      if (id) {
        result = Shared_ts_api_carousel_slide_slide__WEBPACK_IMPORTED_MODULE_0__["default"].into(id, {
          root: element
        }, api => {
          var _api$root;

          (_api$root = api.root) == null ? void 0 : _api$root.classList.add("slide--is-ready");
          return api;
        });
      } else {
        console.error({
          message: "An element requires the class name 'slide__into' and requires an id attribute. No element was found from the container element context.",
          element
        });
      }
    }

    return result;
  }

  isAuto() {
    var _this$api$isAuto, _this$api3;

    return (_this$api$isAuto = (_this$api3 = this.api) == null ? void 0 : _this$api3.isAuto()) != null ? _this$api$isAuto : false;
  }

  setAuto(status) {
    var _this$api4;

    (_this$api4 = this.api) == null ? void 0 : _this$api4.setAuto(status);
  }

  play(persistCurrentIndex) {
    var _this$api5;

    (_this$api5 = this.api) == null ? void 0 : _this$api5.play(persistCurrentIndex);
  }

  pause() {
    var _this$api6;

    (_this$api6 = this.api) == null ? void 0 : _this$api6.pause();
  }

  prev() {
    var _this$api7;

    (_this$api7 = this.api) == null ? void 0 : _this$api7.prev();
  }

  next() {
    var _this$api8;

    (_this$api8 = this.api) == null ? void 0 : _this$api8.next();
  }

  goto(index) {
    var _this$api9;

    (_this$api9 = this.api) == null ? void 0 : _this$api9.goto(index);
  }

  watch(task) {
    var _this$api10;

    (_this$api10 = this.api) == null ? void 0 : _this$api10.watch(task);
  }

  nextIndex() {
    var _this$api11;

    return (_this$api11 = this.api) == null ? void 0 : _this$api11.nextIndex();
  }

  currentIndex() {
    var _this$api12;

    return (_this$api12 = this.api) == null ? void 0 : _this$api12.currentIndex();
  }

  prevIndex() {
    var _this$api13;

    return (_this$api13 = this.api) == null ? void 0 : _this$api13.prevIndex();
  }

  countChildren() {
    var _this$api14;

    return (_this$api14 = this.api) == null ? void 0 : _this$api14.countChildren();
  }

  getDelay() {
    var _this$api15;

    return (_this$api15 = this.api) == null ? void 0 : _this$api15.getDelay();
  }

  setDelay(delay) {
    var _this$api16;

    return (_this$api16 = this.api) == null ? void 0 : _this$api16.setDelay(delay);
  }

  getIndex(index) {
    var _this$api17;

    return (_this$api17 = this.api) == null ? void 0 : _this$api17.getIndex(index);
  }

  setIndex(index) {
    var _this$api18;

    (_this$api18 = this.api) == null ? void 0 : _this$api18.setIndex(index);
  }

}

/***/ }),

/***/ "../../Library/Shared/ts/api/carousel/slide/adapters/vimeo-slide-carousel.ts":
/*!***********************************************************************************!*\
  !*** ../../Library/Shared/ts/api/carousel/slide/adapters/vimeo-slide-carousel.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VimeoSlideCarouselAdapter; }
/* harmony export */ });
/* harmony import */ var Shared_ts_api_carousel_slide_adapters_slide_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/api/carousel/slide/adapters/slide-carousel */ "../../Library/Shared/ts/api/carousel/slide/adapters/slide-carousel.ts");

class VimeoSlideCarouselAdapter extends Shared_ts_api_carousel_slide_adapters_slide_carousel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * An adapter Api that implements the IVimeoCarousel contract while communicating with the Slide Js Api
   * @param container Element
   */
  constructor(container) {
    super(container);
  }

}

/***/ }),

/***/ "../../Library/Shared/ts/api/carousel/slide/slide.ts":
/*!***********************************************************!*\
  !*** ../../Library/Shared/ts/api/carousel/slide/slide.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Slide */
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "../../Library/node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__);



// @ts-nocheck
var generate = function generate(properties, o) {
  var x = Object.defineProperties(o || {}, properties);
  return x;
};

var toArray = function toArray(collection) {
  return Array.from(collection);
};

var slide = generate({
  defaults: {
    value: generate({
      delay: {
        value: 3000
      },
      noScroll: {
        value: "slide__into--no-scroll"
      },
      error: {
        value: "The passed error code could not be found."
      }
    })
  },
  docs: {
    value: generate({
      error: {
        value: "https://github.com/jamiedraws/Slide/wiki/Slide.js#api-errors"
      }
    })
  },
  errors: {
    value: generate({
      "ERR-E": {
        value: "The passed 'element' must be an element."
      },
      "ERR-P": {
        value: "The passed 'element' could not be found."
      },
      "ERR-N": {
        value: "The passed 'element' is not a node element."
      },
      "ERR-X": {
        value: "The passed 'index' is not a number."
      },
      "ERR-M": {
        value: "The passed error 'code' or 'message' is not a string."
      },
      "ERR-C": {
        value: "The passed error 'code' is not a string."
      }
    })
  },
  team: {
    value: []
  },
  request: {
    value: function value(id) {
      return this.team[id];
    }
  },
  observer: {
    value: function value(parent, children, cb) {
      if (window.hasOwnProperty("IntersectionObserver")) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0 && entry.isIntersecting) {
              var items = toArray(children);

              var _index = items.indexOf(entry.target);

              cb(_index);
            }
          });
        }, {
          root: parent,
          rootMargin: "0px",
          threshold: 0.9
        });
        return function (children) {
          var items = toArray(children);
          items.forEach(function (item) {
            io.observe(item);
          });
        };
      } else {
        return function () {
          var noScroll = slide.defaults.noScroll;
          this.shim = true;
          this.parent.classList.add(noScroll);
        };
      }
    }
  },
  manager: {
    value: generate({
      config: {
        value: function value(options) {
          var self = this;

          if (typeof options === "object") {
            Object.keys(options).forEach(function (option) {
              Object.defineProperty(self, option, {
                enumerable: true,
                value: options[option]
              });
            });
          }
        }
      },
      create: {
        value: function value(api, id, parent, config) {
          var self = Object.create(api);
          Object.defineProperties(self, {
            name: {
              set: function set(parent) {
                this.parent = parent;
              },
              get: function get() {
                return this.parent.id;
              }
            },
            id: {
              value: id
            }
          });
          self.name = parent;
          this.config.call(self, config);
          return self;
        }
      },
      assign: {
        value: function value() {
          var self = Object.create(this);
          self.index = 0;
          self.shim = false;
          self.auto = false;
          self.handleRotation = true;
          self.timer = 0;
          self.delay = slide.defaults.delay;
          self.scrollIntoViewOptions = {
            block: "nearest",
            inline: "start"
          };
          return self;
        }
      },
      observer: {
        value: function value(parent, children) {
          var self = this;
          return slide.observer(parent, children, function (index) {
            self.setIndex(index);
            self.setCallback();
          });
        }
      },
      getIndex: {
        value: function value(index) {
          var result = this.index;
          var children = this.children.length;

          if (typeof index === "number") {
            result = index;
          }

          if (result === children) {
            result = 0;
          } else if (result < 0) {
            result = children - 1;
          }

          return result;
        }
      },
      setIndex: {
        value: function value(index) {
          this.index = this.getIndex(index);
        }
      },
      setRotation: {
        value: function value() {
          var item = this.children[this.index];
          item.scrollIntoView(this.scrollIntoViewOptions);
        }
      },
      isValidNumber: {
        value: function value(number) {
          return typeof number === "number" && !isNaN(number);
        }
      },
      setDelay: {
        value: function value(time) {
          var parseTime = parseInt(time);
          var illegal = !this.isValidNumber(parseTime) || parseTime < slide.defaults.delay;

          if (illegal) {
            parseTime = this.delay;
          }

          this.delay = parseTime;
        }
      },
      setCallback: {
        value: function value() {
          if (typeof this.handleCallback === "function") {
            this.handleCallback(this.index, this.getIndex(this.index - 1), this.getIndex(this.index + 1));
          }
        }
      },
      setTimer: {
        value: function value(cb) {
          if (this.auto) {
            this.timer = setTimeout(cb, this.delay);
          } else {
            clearTimeout(this.timer);
          }
        }
      },
      routeCallback: {
        value: function value(cb) {
          if (this.shim) {
            this.setCallback(cb);
          }

          cb();
        }
      },
      setTask: {
        value: function value(index) {
          var self = this;
          self.setDelay();
          self.setIndex(index);

          if (this.handleRotation) {
            self.setRotation();
          }

          self.routeCallback(function () {
            self.setTimer(function () {
              self.setTask(self.index + 1);
            });
          });
        }
      }
    })
  },
  api: {
    value: generate({
      parent: {
        set: function set(parent) {
          this.validateNodeElement(parent);
          var worker = slide.request(this.id);
          worker.id = this.id;
          worker.parent = parent;
          var children = parent.children;

          if (children.length === 0) {
            var shadowRoot = parent.getRootNode();

            if (shadowRoot instanceof ShadowRoot) {
              children = shadowRoot.host.querySelectorAll("[slot=\"slide\"]");
            }
          }

          worker.observe = worker.observer(worker.parent, children);
          this.children = children;
        },
        get: function get() {
          var worker = slide.request(this.id);
          return worker.parent;
        }
      },
      validateNodeElement: {
        value: function value(element) {
          if (typeof element !== "object") {
            this.getError("ERR-E");
          }

          if (element === null) {
            this.getError("ERR-P");
          }

          if (element.nodeType !== 1) {
            this.getError("ERR-N");
          }

          return true;
        }
      },
      toArray: {
        value: toArray
      },
      children: {
        set: function set(children) {
          var worker = slide.request(this.id);
          worker.children = children;
          worker.observe(worker.children);
        },
        get: function get() {
          var worker = slide.request(this.id);
          return worker.children;
        }
      },
      isAuto: {
        value: function value() {
          var worker = slide.request(this.id);
          return worker.auto;
        }
      },
      setAuto: {
        value: function value(status) {
          var worker = slide.request(this.id);

          if (typeof status === "boolean") {
            worker.auto = status;
          }
        }
      },
      setScrollIntoView: {
        value: function value(options) {
          var worker = slide.request(this.id);

          if (typeof options === "object" || typeof options === "boolean") {
            worker.scrollIntoViewOptions = options;
          }
        }
      },
      watch: {
        value: function value(task) {
          var worker = slide.request(this.id);
          worker.handleCallback = task.bind(this);

          if (!("IntersectionObserver" in window)) {
            worker.setCallback();
          }
        }
      },
      countChildren: {
        value: function value() {
          return this.children.length;
        }
      },
      getDelay: {
        value: function value() {
          var worker = slide.request(this.id);
          return worker.delay;
        }
      },
      setDelay: {
        value: function value(delay) {
          var worker = slide.request(this.id);
          worker.setDelay(delay);
        }
      },
      setError: {
        value: function value(code, message) {
          if (typeof code === "string" && typeof message === "string") {
            Object.defineProperty(slide.errors, code, {
              value: message
            });
          } else {
            this.getError("ERR-M");
          }
        }
      },
      getError: {
        value: function value(code) {
          if (typeof code !== "string") {
            code = "ERR-C";
          }

          var error = slide.errors[code] || slide.defaults.error;
          var help = slide.docs.error;
          var message = code + ": " + error + " / " + help;
          throw message;
        }
      },
      hasError: {
        value: function value(code) {
          return slide.errors.hasOwnProperty(code);
        }
      },
      config: {
        value: function value(options) {
          var worker = slide.request(this.id);
          worker.config.call(this, options);
        }
      },
      setShim: {
        enumerable: true,
        value: function value(status) {
          var worker = slide.request(this.id);

          if (typeof status === "boolean") {
            worker.shim = status;
          }
        }
      },
      play: {
        enumerable: true,
        value: function value(persistCurrentIndex) {
          var worker = slide.request(this.id);
          var index = typeof persistCurrentIndex === "boolean" && persistCurrentIndex ? worker.index : worker.index + 1;
          this.pause();
          worker.auto = true;
          worker.setTask(index);
        }
      },
      pause: {
        enumerable: true,
        value: function value() {
          var worker = slide.request(this.id);
          worker.auto = false;
          clearTimeout(worker.timer);
        }
      },
      prev: {
        enumerable: true,
        value: function value() {
          var worker = slide.request(this.id);
          this.pause();
          worker.setTask(worker.index - 1);
        }
      },
      next: {
        enumerable: true,
        value: function value() {
          var worker = slide.request(this.id);
          this.pause();
          worker.setTask(worker.index + 1);
        }
      },
      prevIndex: {
        value: function value() {
          var worker = slide.request(this.id);
          return worker.getIndex(worker.index - 1);
        }
      },
      nextIndex: {
        value: function value() {
          var worker = slide.request(this.id);
          return worker.getIndex(worker.index + 1);
        }
      },
      currentIndex: {
        value: function value() {
          var worker = slide.request(this.id);
          return worker.index;
        }
      },
      getIndex: {
        value: function value(index) {
          if (typeof index !== "number") {
            this.getError("ERR-X");
          }

          var worker = slide.request(this.id);
          return worker.getIndex(index);
        }
      },
      setIndex: {
        value: function value(index) {
          if (typeof index !== "number") {
            this.getError("ERR-X");
          }

          var worker = slide.request(this.id);
          return worker.setIndex(index);
        }
      },
      handleRotation: {
        value: function value(status) {
          var worker = slide.request(this.id);

          if (typeof status === "boolean") {
            worker.handleRotation = status;
          }
        }
      },
      goto: {
        enumerable: true,
        value: function value(index) {
          if (typeof index !== "number") {
            this.getError("ERR-X");
          }

          var worker = slide.request(this.id);
          this.pause();
          worker.setIndex(index);
          worker.setTask();
        }
      }
    })
  },
  interface: {
    value: generate({
      into: {
        value: function value(parent, init, app) {
          var worker = slide.manager.assign();
          var task = app;
          var options = {};
          slide.team.push(worker);

          if (typeof init === "function") {
            task = init;
          }

          if (typeof init === "object") {
            options = init;
          } else if (typeof app === "object") {
            options = app;
          }

          var ui = slide.manager.create(slide.api, slide.team.length - 1, parent, options);
          return task.call(ui, ui);
        }
      },
      proto: {
        value: function value(parameters) {
          if (typeof parameters === "object") {
            Object.create(slide.api, parameters);
            Object.keys(parameters).forEach(function (parameter) {
              Object.defineProperty(slide.api, parameter, {
                writable: false,
                configurable: false,
                enumerable: true,
                value: parameters[parameter]
              });
            });
          }
        }
      }
    })
  }
});
var Slide = slide.interface;
/* harmony default export */ __webpack_exports__["default"] = (Slide);

/***/ }),

/***/ "../../Library/Shared/ts/api/express-checkout/braintree-checkout.ts":
/*!**************************************************************************!*\
  !*** ../../Library/Shared/ts/api/express-checkout/braintree-checkout.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BraintreeCheckout; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Shared/ts/utils/capture-element */ "../../Library/Shared/ts/utils/capture-element.ts");




/**
 * Represents the task function that will execute with access to the Braintree hosted field element that was inserted into the document.
 */

class BraintreeCheckout {
  /**
   * Represents the container of the payment controls that will integrate with Braintree.
   */

  /**
   * Represents a key-value pair relationship between the element id containing the Braintree hosted field and the task function that will execute.
   */

  /**
   * Represents a key-value pair relationship between the event name and the task function that will execute based on the Braintree hosted field's validity state.
   */

  /**
   * Represents a collection of Braintree hosted field elements
   */

  /**
   * Takes a fieldset element, representing a container of the payment controls that will integrate with Braintree, and notifies the developer when the Braintree hosted fields have been inserted into the document.
   * @param fieldset HTMLFieldSetElement
   */
  constructor(fieldset) {
    this.fieldset = void 0;
    this.taskRepository = new Map();
    this.eventRepository = new Map();
    this.fieldset = fieldset;
    if (!this.fieldset) return;
    BraintreeCheckout.captureHostedFields(this);
  }
  /**
   * Captures the fieldset element and observes for the Braintree hosted fields to insert into the document. The corresponding task function that matches the inserted Braintree hosted field by the element id will then execute back to the developer. Once all task functions have executed, the observation will be terminated.
   * @param context BraintreeCheckout
   */


  static captureHostedFields(context) {
    var captureHostedFields = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_3__["default"](context.fieldset);
    captureHostedFields.subscribe("childList", record => {
      var hostedField = this.getHostedFieldFromRecord(record);
      if (!hostedField) return;
      var task = context.taskRepository.get(hostedField.id);
      if (!task) return;
      this.hostedFields.push(hostedField);
      task(hostedField);
      context.taskRepository.delete(hostedField.id);
      if (context.taskRepository.size !== 0) return;
      captureHostedFields.disconnect();
      this.validateHostedFields(context);
    });
  }
  /**
   * Takes a MutationRecord and searches the added nodes for the Braintree hosted field. Returns the hosted field element if found, otherwise undefined is returned.
   * @param record MutationRecord
   * @returns Element | undefined
   */


  static getHostedFieldFromRecord(record) {
    var elements = Array.from(record.addedNodes).filter(node => node.nodeType === Node.ELEMENT_NODE);
    return elements.find(element => element.classList.contains("btHostedField") && element.id !== "");
  }
  /**
   * Emits the valid event that is mapped to a particular Braintree hosted field element.
   * @param hostedField Element
   * @param context BraintreeCheckout
   * @returns void
   */


  static publishValidHostedField(hostedField, context) {
    var task = context.eventRepository.get("valid");
    if (!task) return;
    task(hostedField);
  }
  /**
   * Emits the invalid event that is mapped to a particular Braintree hosted field element.
   * @param hostedField Element
   * @param context BraintreeCheckout
   * @returns void
   */


  static publishInvalidHostedField(hostedField, context) {
    var task = context.eventRepository.get("invalid");
    if (!task) return;
    task(hostedField);
  }
  /**
   * Emits the default event that is mapped to a particular Braintree hosted field element.
   * @param hostedField Element
   * @param context BraintreeCheckout
   * @returns void
   */


  static publishDefaultHostedField(hostedField, context) {
    var task = context.eventRepository.get("default");
    if (!task) return;
    task(hostedField);
  }
  /**
   * Iterates all hosted field elements and captures the element's attribute list and responds accordingly based on it's validity state.
   * @param context BraintreeCheckout
   */


  static validateHostedFields(context) {
    this.hostedFields.forEach(hostedField => {
      var captureHostedField = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_3__["default"](hostedField);
      captureHostedField.subscribe("attributes", record => {
        if (record.attributeName !== "class") return;
        captureHostedField.disconnect();

        switch (true) {
          case hostedField.classList.contains("braintree-hosted-fields-invalid"):
            this.publishInvalidHostedField(hostedField, context);
            break;

          case hostedField.classList.contains("braintree-hosted-fields-valid"):
            this.publishValidHostedField(hostedField, context);
            break;

          default:
            this.publishDefaultHostedField(hostedField, context);
            break;
        }

        captureHostedField.connect();
      });
    });
  }
  /**
   * Takes the id of the element containing the Braintree hosted field and establishes a task to be executed once the hosted field element is inserted into the document.
   * @param id string
   * @param task BraintreeCheckoutHostedFieldTask
   */


  subscribe(id, task) {
    if (!this.taskRepository.has(id)) {
      this.taskRepository.set(id, task);
    }
  }
  /**
   * Takes the name of event, expressed either as `default`, `valid` or `invalid` and executes a task based on the Braintree hosted field's validity state.
   * @param event string
   * @param task BraintreeCheckoutHostedFieldTask
   */


  on(event, task) {
    if (!this.eventRepository.has(event)) {
      this.eventRepository.set(event, task);
    }
  }

}
BraintreeCheckout.hostedFields = [];

/***/ }),

/***/ "../../Library/Shared/ts/api/express-checkout/express-checkout.ts":
/*!************************************************************************!*\
  !*** ../../Library/Shared/ts/api/express-checkout/express-checkout.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ExpressCheckout; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../Library/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../../Library/node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../../Library/node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "../../Library/node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../../Library/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../../Library/node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../Library/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var Shared_ts_utils_element_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Shared/ts/utils/element-controller */ "../../Library/Shared/ts/utils/element-controller.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Library/Shared/ts/utils/html.ts");
/* harmony import */ var Shared_ts_api_campaign_manager_settings_manager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Shared/ts/api/campaign-manager/settings-manager */ "../../Library/Shared/ts/api/campaign-manager/settings-manager.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }














class ExpressCheckout {
  /**
   * Represents the root element
   */

  /**
   * Represents an array of elements that are associated with a controller
   */

  /**
   * Represents an array of elements containing the `orderType` radio
   */

  /**
   * Represents an array of controller elements
   */

  /**
   * Represents an instance of the `ExpressCheckout` interface
   */
  get elementController() {
    return ExpressCheckout.elementController.get(this);
  }
  /**
   * Represents a key-value pair between a controller element and a string array of element ids
   */


  /**
   * Utilizes `ElementController` to toggle elements based on a certain `orderType` value. Controller elements are mapped to a radio group containing the `orderType` id.
   * @param root HTMLElement
   */
  constructor(root) {
    this.root = void 0;
    this.elements = [];
    this.checkoutOptions = [];
    this.controllers = [];
    this.root = root != null ? root : document.querySelector("form");

    if (this.root) {
      this.root.classList.add("element-controller");
      this.root.classList.add("express-checkout");
      this.elements = Array.from(this.root.querySelectorAll("[data-express-checkout-order-type]"));
      this.checkoutOptions = Array.from(this.root.querySelectorAll(".checkout-option"));
      this.controllers = Array.from(this.root.querySelectorAll('[name="OrderType"]'));
      this.controllers.forEach(controller => {
        controller.classList.add("element-controller__controller");
      });
    }

    ExpressCheckout.initialize(this);
  }
  /**
   * Iterates through controllers and assigns a new array, iterates through elements and adds the `orderType` to the appropriate controller, iterates through controllers and updates the `aria-controls` attribute based on the element id list.
   * @param context ExpressCheckout
   */


  static initialize(context) {
    context.controllers.forEach(controller => {
      this.controllerRepository.set(controller, []);
    });
    context.elements.forEach(element => {
      context.addOrderTypeToControllerByElement(element);
    });
    context.controllers.forEach(controller => {
      context.updateControllerByOrderType(controller.id);
    });
    context.checkoutOptions.forEach(checkoutOption => {
      this.addRadioGUIByCheckoutOption(checkoutOption);
    });
    this.processElementControllerByContext(context);
  }
  /**
   * Creates a new instance of the `ElementController` and assigns the click event to update the element states by the active controller.
   * @param context ExpressCheckout
   */


  static processElementControllerByContext(context) {
    var elementController = new Shared_ts_utils_element_controller__WEBPACK_IMPORTED_MODULE_10__["default"](context.root);
    elementController.controllers.forEach(controller => {
      controller.addEventListener("click", () => {
        elementController.toggleElementsByController(controller);
      });
    });
    elementController.controllers.filter(controller => controller.getAttribute("checked")).forEach(controller => {
      elementController.toggleElementsByController(controller);
    });
    this.elementController.set(context, elementController);
  }
  /**
   * Takes the `orderType` and the `elementId` and adds it to the element Id list repository.
   * @param orderType string
   * @param elementId string
   * @returns void
   */


  addElementIdByOrderType(orderType, elementId) {
    var controller = this.getControllerByOrderType(orderType);
    if (!controller) return;
    var elementIds = this.getElementIdListByOrderType(orderType);
    if (!elementIds) return;
    elementIds.push(elementId);
    ExpressCheckout.controllerRepository.set(controller, elementIds);
  }
  /**
   * Takes an element and extracts the `OrderType` from the `data-express-checkout-order-type` attribute along with the element's id and assigns it to the appropriate controller.
   * @param element Element
   * @returns void
   */


  addOrderTypeToControllerByElement(element) {
    var orderType = element.getAttribute("data-express-checkout-order-type");

    if (!orderType) {
      console.error({
        message: "The '[data-express-checkout-order-type] attribute is required on the element",
        element
      });
      return;
    }

    if (element.id === "") {
      console.error({
        message: "The 'id' is requied on the element",
        element
      });
      return;
    }

    element.classList.add("express-checkout__element");
    orderType.split(" ").forEach(ot => this.addElementIdByOrderType(ot, element.id));
  }
  /**
   * Takes an `orderType` and returns the controller based on a match between the `orderType` and the controller id. Otherwise, undefined is returned.
   * @param orderType string
   * @returns HTMLInputElement | undefined
   */


  getControllerByOrderType(orderType) {
    return this.controllers.find(controller => controller.id.match(new RegExp(orderType, "gi")));
  }
  /**
   * Takes an `orderType` and returns the element id list associated with the controller. Otherwise, undefined is returned.
   * @param orderType string
   * @returns string[] | undefined
   */


  getElementIdListByOrderType(orderType) {
    var controller = this.getControllerByOrderType(orderType);
    if (!controller) return;
    return this.getElementIdListByController(controller);
  }
  /**
   * Takes a controller element and returns the element id list associated with the controller. Otherwise, undefined is returned.
   * @param controller HTMLInputElement
   * @returns string[] | undefined
   */


  getElementIdListByController(controller) {
    return ExpressCheckout.controllerRepository.get(controller);
  }
  /**
   * Takes an `orderType` and retrieves the list of element id references and updates the appropriate controller's `aria-controls`
   * @param orderType string
   * @returns void
   */


  updateControllerByOrderType(orderType) {
    var controller = this.getControllerByOrderType(orderType);
    if (!controller) return;
    var elementIds = this.getElementIdListByController(controller);
    if (!elementIds) return;
    controller == null ? void 0 : controller.setAttribute("aria-controls", elementIds.join(" "));
  }
  /**
   * Using an element with the attribute `data-express-checkout-buttons`, all order types besides the card will attempt to pull for the appropriate checkout image from the campaign manager settings page and insert it into the HTML
   * @returns void
   */


  createCheckoutButtonGUI() {
    var _this$root;

    var placeholder = (_this$root = this.root) == null ? void 0 : _this$root.querySelector("[data-express-checkout-buttons]");
    if (!placeholder) return;
    var orderTypes = this.controllers.filter(controller => controller.id !== "otCARD").map(controller => controller.id);
    orderTypes.forEach(orderType => {
      var code = orderType.replace(/^ot/, "");
      (0,Shared_ts_api_campaign_manager_settings_manager__WEBPACK_IMPORTED_MODULE_12__.getSettingByCode)(code + ".AcceptOfferButtonDownImageUrl").then(value => {
        var _this$root2;

        placeholder.insertAdjacentHTML("beforeend", "<span id=\"AcceptOffer" + code + "\" data-express-checkout-order-type=\"" + orderType + "\">\n                            <img src=\"" + value + "\" loading=\"lazy\">\n                        </span>");
        var element = (_this$root2 = this.root) == null ? void 0 : _this$root2.querySelector("#AcceptOffer" + code);
        if (!element) return;
        this.addOrderTypeToControllerByElement(element);
        this.updateControllerByOrderType(orderType);
      });
    });
  }

  updateCreditCardImages() {
    var _this = this;

    return _asyncToGenerator(function* () {
      var checkoutOption = _this.checkoutOptions.find(checkoutOption => /CARD/gi.test(checkoutOption.id));

      if (!checkoutOption) {
        throw {
          message: "The credit card checkout option is not available."
        };
      }

      var label = checkoutOption.querySelector('label[for="otCARD"]');

      if (!label) {
        throw {
          message: "An attempt to update the credit card images was made but the HTML placeholder element could not be found."
        };
      }

      var garbageImages = Array.from(label.querySelectorAll("img"));
      garbageImages.forEach(image => image.remove());
      var cards = yield (0,Shared_ts_api_campaign_manager_settings_manager__WEBPACK_IMPORTED_MODULE_12__.getSettingByCode)("DTM.ClientSites.Order.AllowedCardTypes");
      var images = cards.split(",").map(card => (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_11__.createElement)("img", {
        src: "/shared/images/payment/" + card + ".svg",
        alt: card + " accepted.",
        width: "37",
        height: "37",
        loading: "lazy"
      }));
      images.forEach(image => label.append(image));
    })();
  }
  /**
   * Returns a new HTMLSpanElement with the `express-checkout__radio` class.
   * @returns HTMLSpanElement
   */


  static createRadioGUI() {
    var radio = document.createElement("span");
    radio.classList.add("express-checkout__radio");
    return radio;
  }
  /**
   * Takes a `checkoutOption` element and adds an HTMLSpanElement representing the radio GUI to it.
   * @param checkoutOption Element
   */


  static addRadioGUIByCheckoutOption(checkoutOption) {
    var radio = this.createRadioGUI();
    var label = checkoutOption.querySelector("label");
    checkoutOption.classList.add("express-checkout__checkout-option");
    label == null ? void 0 : label.classList.add("express-checkout__label");
    label == null ? void 0 : label.insertAdjacentElement("afterbegin", radio);
  }

}
ExpressCheckout.controllerRepository = new WeakMap();
ExpressCheckout.elementController = new WeakMap();

/***/ }),

/***/ "../../Library/Shared/ts/api/express-checkout/stripe-checkout.ts":
/*!***********************************************************************!*\
  !*** ../../Library/Shared/ts/api/express-checkout/stripe-checkout.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StripeCheckout; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Shared/ts/utils/capture-element */ "../../Library/Shared/ts/utils/capture-element.ts");




/**
 * Represents the task function that will execute with access to the Stripe hosted field element that was inserted into the document.
 */

class StripeCheckout {
  /**
   * Represents the container of the payment controls that will integrate with Stripe.
   */

  /**
   * Represents a key-value pair relationship between the element id containing the Stripe hosted field and the task function that will execute.
   */

  /**
   * Represents a key-value pair relationship between the event name and the task function that will execute based on the Stripe hosted field's validity state.
   */

  /**
   * Represents a collection of Stripe hosted field elements
   */

  /**
   * Takes a fieldset element, representing a container of the payment controls that will integrate with Stripe, and notifies the developer when the Stripe hosted fields have been inserted into the document.
   * @param fieldset HTMLFieldSetElement
   */
  constructor(fieldset) {
    this.fieldset = void 0;
    this.taskRepository = new Map();
    this.eventRepository = new Map();
    this.fieldset = fieldset;
    if (!this.fieldset) return;
    StripeCheckout.captureHostedFields(this);
  }

  queryHostedFields() {
    if (this.taskRepository.size === 0) return;
    Array.from(this.taskRepository.entries()).forEach(entry => {
      var id = entry[0];
      var task = entry[1];
      var hostedField = this.fieldset.querySelector("#" + id);
      if (!hostedField) return;
      StripeCheckout.hostedFields.push(hostedField);
      task(hostedField);
      this.taskRepository.delete(id);
      if (this.taskRepository.size !== 0) return;
      StripeCheckout.validateHostedFields(this);
    });
  }
  /**
   * Captures the fieldset element and observes for the Stripe hosted fields to insert into the document. The corresponding task function that matches the inserted Stripe hosted field by the element id will then execute back to the developer. Once all task functions have executed, the observation will be terminated.
   * @param context StripeCheckout
   */


  static captureHostedFields(context) {
    var captureHostedFields = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_3__["default"](context.fieldset);
    captureHostedFields.subscribe("childList", record => {
      var hostedField = this.getHostedFieldFromRecord(record);
      if (!hostedField) return;
      var task = context.taskRepository.get(hostedField.id);
      if (!task) return;
      this.hostedFields.push(hostedField);
      task(hostedField);
      context.taskRepository.delete(hostedField.id);
      if (context.taskRepository.size !== 0) return;
      captureHostedFields.disconnect();
      this.validateHostedFields(context);
    });
  }
  /**
   * Takes a MutationRecord and searches the added nodes for the Stripe hosted field. Returns the hosted field element if found, otherwise undefined is returned.
   * @param record MutationRecord
   * @returns Element | undefined
   */


  static getHostedFieldFromRecord(record) {
    var elements = Array.from(record.addedNodes).filter(node => node.nodeType === Node.ELEMENT_NODE);
    return elements.find(element => element.classList.contains("stripeHostedField") && element.id !== "");
  }
  /**
   * Emits the valid event that is mapped to a particular Stripe hosted field element.
   * @param hostedField Element
   * @param context StripeCheckout
   * @returns void
   */


  static publishValidHostedField(hostedField, context) {
    var task = context.eventRepository.get("valid");
    if (!task) return;
    task(hostedField);
  }
  /**
   * Emits the focus event that is mapped to a particular Stripe hosted field element.
   * @param hostedField Element
   * @param context StripeCheckout
   * @returns void
   */


  static publishFocusHostedField(hostedField, context) {
    var task = context.eventRepository.get("focus");
    if (!task) return;
    task(hostedField);
  }
  /**
   * Emits the empty event that is mapped to a particular Stripe hosted field element.
   * @param hostedField Element
   * @param context StripeCheckout
   * @returns void
   */


  static publishEmptyHostedField(hostedField, context) {
    var task = context.eventRepository.get("empty");
    if (!task) return;
    task(hostedField);
  }
  /**
   * Emits the invalid event that is mapped to a particular Stripe hosted field element.
   * @param hostedField Element
   * @param context StripeCheckout
   * @returns void
   */


  static publishInvalidHostedField(hostedField, context) {
    var task = context.eventRepository.get("invalid");
    if (!task) return;
    task(hostedField);
  }
  /**
   * Emits the default event that is mapped to a particular Stripe hosted field element.
   * @param hostedField Element
   * @param context StripeCheckout
   * @returns void
   */


  static publishDefaultHostedField(hostedField, context) {
    var task = context.eventRepository.get("default");
    if (!task) return;
    task(hostedField);
  }
  /**
   * Iterates all hosted field elements and captures the element's attribute list and responds accordingly based on it's validity state.
   * @param context StripeCheckout
   */


  static validateHostedFields(context) {
    this.hostedFields.forEach(hostedField => {
      var captureHostedField = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_3__["default"](hostedField);
      captureHostedField.subscribe("attributes", record => {
        if (record.attributeName !== "class") return;
        captureHostedField.disconnect();

        switch (true) {
          case hostedField.classList.contains("StripeElement--invalid"):
            this.publishInvalidHostedField(hostedField, context);
            break;

          case hostedField.classList.contains("StripeElement--complete"):
            this.publishValidHostedField(hostedField, context);
            break;

          case hostedField.classList.contains("StripeElement--focus"):
            this.publishFocusHostedField(hostedField, context);
            break;

          case hostedField.classList.contains("StripeElement--empty"):
            this.publishEmptyHostedField(hostedField, context);
            break;

          default:
            this.publishDefaultHostedField(hostedField, context);
            break;
        }

        captureHostedField.connect();
      });
    });
  }
  /**
   * Takes the id of the element containing the Stripe hosted field and establishes a task to be executed once the hosted field element is inserted into the document.
   * @param id string
   * @param task StripeCheckoutHostedFieldTask
   */


  subscribe(id, task) {
    if (!this.taskRepository.has(id)) {
      this.taskRepository.set(id, task);
    }
  }
  /**
   * Takes the name of event, expressed either as `default`, `valid` or `invalid` and executes a task based on the Stripe hosted field's validity state.
   * @param event string
   * @param task StripeCheckoutHostedFieldTask
   */


  on(event, task) {
    if (!this.eventRepository.has(event)) {
      this.eventRepository.set(event, task);
    }
  }

}
StripeCheckout.hostedFields = [];

/***/ }),

/***/ "../../Library/Shared/ts/api/media-player/vimeo-media-player.ts":
/*!**********************************************************************!*\
  !*** ../../Library/Shared/ts/api/media-player/vimeo-media-player.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VimeoMediaPlayerAdapter; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "../../Library/node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Shared_ts_utils_vimeo_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/ts/utils/vimeo-manager */ "../../Library/Shared/ts/utils/vimeo-manager.ts");


class VimeoMediaPlayerAdapter {
  /**
   * Represents the Vimeo iframe
   */

  /**
   * Represents the Vimeo Player
   */

  /**
   * This adapter communicates between the Media Player class and the Vimeo Manager class and enables the methods to load a new video, play a current video and pause a current video through Vimeo
   */
  constructor(root) {
    this.root = void 0;
    this.iframe = void 0;
    this.player = null;
    var vm = new Shared_ts_utils_vimeo_manager__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.root = root;
    this.iframe = root.querySelector("iframe");

    if (this.iframe) {
      this.player = vm.createPlayerByIframe(this.iframe);
    }
  }

  play() {
    var _this$player;

    (_this$player = this.player) == null ? void 0 : _this$player.play();
  }

  pause() {
    var _this$player2;

    (_this$player2 = this.player) == null ? void 0 : _this$player2.pause();
  }

  load(id) {
    var _this$player3;

    (_this$player3 = this.player) == null ? void 0 : _this$player3.loadVideo(parseInt(id));
  }

}

/***/ }),

/***/ "../../Library/Shared/ts/api/modal/modal-dialog-iframe.ts":
/*!****************************************************************!*\
  !*** ../../Library/Shared/ts/api/modal/modal-dialog-iframe.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModalDialogIframe; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Shared_ts_components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/ts/components/modal */ "../../Library/Shared/ts/components/modal.ts");
/* harmony import */ var Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Shared/ts/observers/intersection */ "../../Library/Shared/ts/observers/intersection.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Library/Shared/ts/utils/html.ts");


// components
 // observers

 // utils


class ModalDialogIframe {
  constructor() {}

  initializeCapture() {
    addEventListener("click", event => {
      var _target$closest;

      var target = event.target;
      var controller = (_target$closest = target.closest("[data-modal-dialog-id]")) != null ? _target$closest : target;
      if (!this.isValidController(controller)) return;
      var modal = ModalDialogIframe.processModalDialogIframeByController(controller);

      if (modal) {
        modal.open();
      }
    });
  }

  isValidController(controller) {
    return ModalDialogIframe.requiredAttributes.every(attribute => controller.hasAttribute(attribute));
  }

  initializeObserver() {
    (0,Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_3__.observer)("[data-modal-dialog-iframe][data-modal-dialog-actor=open]", {
      inRange: controller => {
        controller.addEventListener("click", event => {
          event.preventDefault();
          ModalDialogIframe.processModalDialogIframeByController(controller);
        });
      }
    });
  }

  static hasContainerInRepository(controller) {
    var result = false;
    var id = this.getModalDialogControllerId(controller);
    if (!id) return result;
    var container = document.getElementById(id);
    if (!container) return result;
    return this.containerControllerRepository.has(container);
  }

  static processModalDialogIframeByController(controller) {
    if (!this.hasContainerInRepository(controller)) {
      var id = this.getModalDialogControllerId(controller);
      var title = this.getModalDialogControllerTitle(controller);
      var source = this.getModalDialogControllerSource(controller);

      if (id && title && source) {
        var _this$containerContro, _container$getAttribu;

        var fragment = this.createModalDialogIframeContainerFragment(id, title, source);
        document.body.appendChild(fragment);
        var container = document.getElementById(id);
        if (!container) return;
        var controllers = (_this$containerContro = this.containerControllerRepository.get(container)) != null ? _this$containerContro : [];
        controllers.push(controller);
        this.containerControllerRepository.set(container, controllers);
        var modal = new Shared_ts_components_modal__WEBPACK_IMPORTED_MODULE_2__["default"](container, {
          ariaLabel: (_container$getAttribu = container.getAttribute("aria-label")) != null ? _container$getAttribu : "",
          templateModifier: controller.getAttribute("data-modal-dialog-template-modifier")
        });
        addEventListener("message", event => {
          try {
            var message = JSON.parse(event.data);

            if (message.id === id && message.title === title && message.source === source && message.actor === "close") {
              modal.close();
            }
          } catch (e) {
            if (e instanceof Error) {
              console.warn(e.message);
            }
          }
        });
        return modal;
      }
    }
  }

  static getModalDialogControllerId(controller) {
    var id = controller.getAttribute("data-modal-dialog-id");

    if (!id) {
      console.error({
        message: "An id value was not found for the attribute [data-modal-dialog-id].",
        controller
      });
    }

    return id;
  }

  static getModalDialogControllerTitle(controller) {
    var title = controller.getAttribute("data-modal-dialog-title");

    if (!title) {
      console.error({
        message: "A title value was not found for the attribute [data-modal-dialog-title].",
        controller
      });
    }

    return title;
  }

  static getModalDialogControllerSource(controller) {
    var _controller$getAttrib, _controller$getAttrib2;

    var source = (_controller$getAttrib = controller.getAttribute("data-modal-dialog-iframe")) != null ? _controller$getAttrib : "";
    source = source === "" ? (_controller$getAttrib2 = controller.getAttribute("href")) != null ? _controller$getAttrib2 : "" : source;

    if (!source) {
      console.error({
        message: "A src value was not found for the attribute [href] or [data-modal-dialog-iframe].",
        controller
      });
    }

    return source;
  }

  static createModalDialogIframeContainerFragment(id, title, source) {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_4__.renderTemplate)("\n            <section id=\"" + id + "\" aria-label=\"" + title + "\" class=\"view modal-dialog modal-dialog--iframe section\">\n                <div class=\"view__in modal-dialog__in section__in\">\n                    <div class=\"defer modal-dialog__iframe\">\n                        <iframe src=\"" + source + "\" title=\"" + title + "\" tabindex=\"0\"></iframe>\n                    </div>\n                </div>\n            </section>\n        ");
  }

}
ModalDialogIframe.containerControllerRepository = new WeakMap();
ModalDialogIframe.requiredAttributes = ["data-modal-dialog-iframe", "data-modal-dialog-id", "data-modal-dialog-actor", "data-modal-dialog-title"];

/***/ }),

/***/ "../../Library/Shared/ts/api/validate/validate-common.ts":
/*!***************************************************************!*\
  !*** ../../Library/Shared/ts/api/validate/validate-common.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ValidateCommon; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "../../Library/node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Shared_ts_utils_validate_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/ts/utils/validate-event */ "../../Library/Shared/ts/utils/validate-event.ts");



class ValidateCommon extends Shared_ts_utils_validate_event__WEBPACK_IMPORTED_MODULE_2__["default"] {
  /**
   * Represents an array of error objects containing pairs for messages and jQuery elements
   */
  get errors() {
    var errors = ValidateCommon.getErrors();
    errors.forEach(error => {
      var control = error.element.get(0);

      if (!(control != null && control.hasAttribute(this.attribute))) {
        control == null ? void 0 : control.setAttribute(this.attribute, "true");
      }
    });
    return errors;
  }
  /**
   * Responsible for providing towards the event argument in the common.js validateForm function
   */


  /**
   * Provides the ability to apply validation rules from common.js through the Validate interface. Inheriting from the Validate interface, configuration settings include the ability to provide a specific element to represent the form to validate for, a CSS namespace to customize the presentation and an attribute to discern which form controls are required. Additionally, event type mapping can be provided to customize the validation experience.
   * @param config IValidateCommonConfig
   */
  constructor(config) {
    super(config);
    this.errors;

    this.validateInputEvent = event => {
      this.validateControlAgainstCommon(event.target);
    };

    this.validateComboboxEvent = event => {
      this.validateControlAgainstCommon(event.target);
    };

    ValidateCommon.initializeCapture(this);
  }
  /**
   * Enable direct validation
   */


  validateOnDemand() {
    this.validateAllAgainstCommon();
    this.setFocusOnInvalidControl();
    this.processControlEvents();
  }
  /**
   * Takes an element and determines if that element is valid or invalid based on the error array
   * @param control HTMLInputElement | HTMLSelectElement
   */


  validateControlAgainstCommon(control) {
    this.validateControl(control, control => !this.errors.some(error => error.element.get().includes(control)));
  }
  /**
   * Determines if all required elements are valid or invalid based on the error array
   */


  validateAllAgainstCommon() {
    this.validateAll(control => !this.errors.some(error => error.element.get().includes(control)));
  }
  /**
   * Interfaces with the validateForm function from common.js and returns an array of errors containing pairs of messages and jQuery objects
   * @returns IValidateCommonErrorResponse[]
   */


  static getErrors() {
    var errors;

    if (typeof validateForm === "function") {
      errors = validateForm(this.event, false, true);
    }

    return Array.isArray(errors) ? errors : [];
  }

}
ValidateCommon.event = document.createEvent("Event");

/***/ }),

/***/ "../../Library/Shared/ts/applications/form.ts":
/*!****************************************************!*\
  !*** ../../Library/Shared/ts/applications/form.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeValidateEventNavigator": function() { return /* binding */ initializeValidateEventNavigator; }
/* harmony export */ });
/* unused harmony exports initializeGlobalValidateEventMap, initializeModalDialogIframe, initializeExpressCheckout, validateInputRules, validateComboboxRules, validateTextareaRules, initializeValidateEvent, ValidateEventHTTPResponseType, initializeValidateEventWithAjaxSubmit, processRequestByFormAction, validatePromoCode, validatePromoCodeWhenVisible, initializeValidateEventWithPromoCode, initializeValidateCommon, initializeValidateCommonWithActionCodeRadioGroup, initializeQuestionCodeCheckboxes, initializeValidateCommonWithStripe, initializeValidateCommonWithBraintree, getHiddenFormControlsByElement, addAttributeToFormControls, removeAttributeFromFormControls, validateByElementController, updateFieldsetViewByElementController, validateByNavigator, initializeValidateEventThenSubscribe, relocateThenValidateUpsellActionQuantities, validatePromoCodeAroundStatusScreen */
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../Library/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "../../Library/node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../Library/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../../Library/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "../../Library/node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "../../Library/node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../../Library/node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "../../Library/node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var Shared_ts_api_express_checkout_stripe_checkout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Shared/ts/api/express-checkout/stripe-checkout */ "../../Library/Shared/ts/api/express-checkout/stripe-checkout.ts");
/* harmony import */ var Shared_ts_api_express_checkout_braintree_checkout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Shared/ts/api/express-checkout/braintree-checkout */ "../../Library/Shared/ts/api/express-checkout/braintree-checkout.ts");
/* harmony import */ var Shared_ts_api_validate_validate_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Shared/ts/api/validate/validate-common */ "../../Library/Shared/ts/api/validate/validate-common.ts");
/* harmony import */ var Shared_ts_api_modal_modal_dialog_iframe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Shared/ts/api/modal/modal-dialog-iframe */ "../../Library/Shared/ts/api/modal/modal-dialog-iframe.ts");
/* harmony import */ var Shared_ts_api_express_checkout_express_checkout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! Shared/ts/api/express-checkout/express-checkout */ "../../Library/Shared/ts/api/express-checkout/express-checkout.ts");
/* harmony import */ var Shared_ts_applications_template__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! Shared/ts/applications/template */ "../../Library/Shared/ts/applications/template.ts");
/* harmony import */ var Shared_ts_components_status_screen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! Shared/ts/components/status-screen */ "../../Library/Shared/ts/components/status-screen.ts");
/* harmony import */ var Shared_ts_utils_data__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! Shared/ts/utils/data */ "../../Library/Shared/ts/utils/data.ts");
/* harmony import */ var Shared_ts_utils_element_controller__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! Shared/ts/utils/element-controller */ "../../Library/Shared/ts/utils/element-controller.ts");
/* harmony import */ var Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! Shared/ts/utils/capture-element */ "../../Library/Shared/ts/utils/capture-element.ts");
/* harmony import */ var Shared_ts_utils_validate_event__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! Shared/ts/utils/validate-event */ "../../Library/Shared/ts/utils/validate-event.ts");
/* harmony import */ var Shared_ts_utils_upsell_action_quantity_reloactor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! Shared/ts/utils/upsell-action-quantity-reloactor */ "../../Library/Shared/ts/utils/upsell-action-quantity-reloactor.ts");











// api




 // applications

 // interfaces

// components
 // utils







class CartChangeException {
  constructor(message) {
    this.name = "CartChangeException";
    this.message = void 0;
    this.message = message;
  }

}

var initializeGlobalValidateEventMap = () => {
  var map = new WeakMap();
  window.forms = map;
  return map;
};
var initializeModalDialogIframe = () => {
  var modalDialogIframe = new Shared_ts_api_modal_modal_dialog_iframe__WEBPACK_IMPORTED_MODULE_14__["default"]();
  modalDialogIframe.initializeObserver();
  modalDialogIframe.initializeCapture();
};
var initializeExpressCheckout = root => {
  return new Promise((resolve, reject) => {
    addEventListener("ECDrawFormComplete", event => {
      var ec = new Shared_ts_api_express_checkout_express_checkout__WEBPACK_IMPORTED_MODULE_15__["default"](root);
      ec.createCheckoutButtonGUI();
      (0,Shared_ts_applications_template__WEBPACK_IMPORTED_MODULE_16__.initializeToolTip)();
      resolve(ec);
    });
  });
};
var validateInputRules = control => {
  var isValid = control.validity.valid;
  if (!isValid) return false;
  var isEmpty = control.value === "";
  if (isEmpty) return false;
  var pattern = control.getAttribute("data-pattern");

  if (pattern) {
    var regex = new RegExp(pattern);
    var hasValidPattern = regex.test(control.value);
    return hasValidPattern;
  }

  if (control.type === "checkbox") {
    return Array.from(document.querySelectorAll("input[type=\"checkbox\"][name=\"" + control.name + "\"]")).some(input => input.checked);
  }

  if (control.type === "radio") {
    return Array.from(document.querySelectorAll("input[type=\"radio\"][name=\"" + control.name + "\"]")).some(input => input.checked);
  }

  return true;
};
var validateComboboxRules = control => {
  return control.validity.valid;
};
var validateTextareaRules = control => {
  return control.validity.valid;
};
var initializeValidateEvent = function initializeValidateEvent(form, submit, attribute) {
  if (attribute === void 0) {
    attribute = "data-required";
  }

  var validateEvent = new Shared_ts_utils_validate_event__WEBPACK_IMPORTED_MODULE_21__["default"]({
    form,
    attribute,
    inputEvents: ["blur", "change"],
    invalidInputEvents: ["keyup", "blur", "change"],
    comboboxEvents: ["change", "blur"],
    textareaEvents: ["blur", "change"],
    invalidTextareaEvents: ["keyup", "blur", "change"],
    submit
  });

  validateEvent.validateInputEvent = event => {
    validateEvent.validateControl(event.target, validateInputRules);
  };

  validateEvent.validateComboboxEvent = event => {
    validateEvent.validateControl(event.target, validateComboboxRules);
  };

  validateEvent.validateTextareaEvent = event => {
    validateEvent.validateControl(event.target, validateTextareaRules);
  };

  validateEvent.processInputEvents();
  validateEvent.processComboboxEvents();
  validateEvent.processTextareaEvents();
  return validateEvent;
};
var ValidateEventHTTPResponseType;

(function (ValidateEventHTTPResponseType) {
  ValidateEventHTTPResponseType["Submit"] = "submit";
  ValidateEventHTTPResponseType["Success"] = "success";
  ValidateEventHTTPResponseType["Fail"] = "fail";
})(ValidateEventHTTPResponseType || (ValidateEventHTTPResponseType = {}));

var initializeValidateEventWithAjaxSubmit = (form, submit, outputResponseHandler, attribute) => {
  var _validateEvent$submit;

  var validateEvent = initializeValidateEvent(form, submit, attribute);
  var outputResponse = (0,Shared_ts_utils_data__WEBPACK_IMPORTED_MODULE_18__.isFunction)(outputResponseHandler) ? outputResponseHandler : (message, status) => console.debug(message, status);
  validateEvent.processInputEvents();
  validateEvent.processComboboxEvents();
  (_validateEvent$submit = validateEvent.submit) == null ? void 0 : _validateEvent$submit.addEventListener("click", event => {
    var _validateEvent$form$g, _validateEvent$form;

    event.preventDefault();
    validateEvent.validateInputs(validateInputRules);
    validateEvent.validateComboboxes(validateComboboxRules);

    if (!validateEvent.isValidForm()) {
      validateEvent.setFocusOnInvalidControl();
      return;
    }

    outputResponse((_validateEvent$form$g = (_validateEvent$form = validateEvent.form) == null ? void 0 : _validateEvent$form.getAttribute("data-message-status")) != null ? _validateEvent$form$g : "Submitting request", ValidateEventHTTPResponseType.Submit);
    processRequestByFormAction(form).then(response => {
      var _validateEvent$form$g2, _validateEvent$form2, _validateEvent$form$g3, _validateEvent$form3;

      switch (response.status) {
        case 200:
          outputResponse((_validateEvent$form$g2 = (_validateEvent$form2 = validateEvent.form) == null ? void 0 : _validateEvent$form2.getAttribute("data-message-success")) != null ? _validateEvent$form$g2 : "Request was sent successfully", ValidateEventHTTPResponseType.Success);
          break;

        default:
          outputResponse((_validateEvent$form$g3 = (_validateEvent$form3 = validateEvent.form) == null ? void 0 : _validateEvent$form3.getAttribute("data-message-error")) != null ? _validateEvent$form$g3 : "Request was sent but may not be successful", ValidateEventHTTPResponseType.Fail);
          break;
      }
    }).catch(error => console.error(error));
  });
  return validateEvent;
};
var processRequestByFormAction = form => {
  return new Promise((resolve, reject) => {
    var action = form.action;
    if (!action || action === "") reject({
      message: "The value for the action attribute was not provided for the following form",
      form
    });
    var method = form.method;
    if (!method || method === "") reject({
      message: "The value for the method attribute was not provided for the following form",
      form
    });
    var request = fetch(action, {
      method: method.toUpperCase(),
      body: new FormData(form)
    });
    request.then(response => resolve(response)).catch(error => reject(error));
  });
};
var validatePromoCode = predicate => {
  var router = Object.create(null);
  window.addEventListener("CartChange", event => {
    var _cart$promoCodeTarget, _cart$errors$shift;

    var cart = event.detail;
    var meetsCondition;

    try {
      var _predicate;

      meetsCondition = (_predicate = predicate == null ? void 0 : predicate(cart)) != null ? _predicate : false;
    } catch (error) {
      return console.debug(error);
    }

    var promoCode = cart.promoCode;
    if (!promoCode) return;

    switch (true) {
      case meetsCondition:
        router == null ? void 0 : router.pass == null ? void 0 : router.pass(promoCode);
        break;

      case promoCode.toLowerCase() === ((_cart$promoCodeTarget = cart.promoCodeTarget) == null ? void 0 : _cart$promoCodeTarget.toLowerCase()):
        router == null ? void 0 : router.pass == null ? void 0 : router.pass(promoCode);
        break;

      case cart.promoCode !== "":
        var error = (_cart$errors$shift = cart.errors.shift()) != null ? _cart$errors$shift : "An error occurred";
        router == null ? void 0 : router.fail == null ? void 0 : router.fail(error);
        break;

      default:
        router == null ? void 0 : router.default == null ? void 0 : router.default();
        break;
    }

    router == null ? void 0 : router.finally == null ? void 0 : router.finally();
  });
  return Object.create({
    default: function _default(task) {
      router.default = task;
      return this;
    },
    pass: function pass(task) {
      router.pass = task;
      return this;
    },
    fail: function fail(task) {
      router.fail = task;
      return this;
    },
    finally: function _finally(task) {
      router.finally = task;
      return this;
    }
  });
};
var validatePromoCodeWhenVisible = function validatePromoCodeWhenVisible(predicate, selector) {
  if (selector === void 0) {
    selector = ".ddlPromoButton";
  }

  return validatePromoCode(cart => {
    var _predicate2;

    var element = document.querySelector(selector);
    if (!element) throw new CartChangeException("The document selector (" + selector + ") did not return an HTML element.");
    var activeElement = document.activeElement;
    if (activeElement !== element) throw new CartChangeException("The target HTML element, represented by the document selector (" + selector + "), does not match the document's active HTML element. This exception may be an intentional attempt to prevent inappropriate behavior.");
    return (_predicate2 = predicate == null ? void 0 : predicate(cart)) != null ? _predicate2 : false;
  });
};
var initializeValidateEventWithPromoCode = (form, submit) => {
  var validateEvent = initializeValidateEvent(form, submit);
  var promoInput = validateEvent.inputs.find(input => input.id === "promoCode");

  if (promoInput) {
    window.addEventListener("CartChange", event => {
      var cart = event.detail;

      if (cart.promoCode === "") {
        validateEvent.setControlToDefault(promoInput);
        return;
      }

      validateEvent.validateControl(promoInput, control => {
        var _cart$promoCode, _cart$promoCodeTarget2;

        return ((_cart$promoCode = cart.promoCode) == null ? void 0 : _cart$promoCode.toLowerCase()) === ((_cart$promoCodeTarget2 = cart.promoCodeTarget) == null ? void 0 : _cart$promoCodeTarget2.toLowerCase());
      });
    });
  }

  return validateEvent;
};
var initializeValidateCommon = (form, submit) => {
  var validateCommon = new Shared_ts_api_validate_validate_common__WEBPACK_IMPORTED_MODULE_13__["default"]({
    form,
    attribute: "data-required",
    inputEvents: ["blur", "change"],
    invalidInputEvents: ["keyup", "blur", "change"],
    comboboxEvents: ["change", "blur"],
    submit
  });
  validateCommon.validateOnSubmit();
  validateCommon.processInputEvents();
  validateCommon.processComboboxEvents();
  return validateCommon;
};
var initializeValidateCommonWithActionCodeRadioGroup = (form, submit) => {
  var validateCommon = initializeValidateCommon(form, submit);

  window.onFormPreValidation = event => {
    var _actionCodeErrorMessa, _actionCodeErrorMessa2;

    var errors = [];
    var defaultActionCodeInput = validateCommon.inputs.find(input => input.getAttribute("name") === "ActionCode0");
    if (!defaultActionCodeInput) return errors;
    var isActionCodeChecked = validateCommon.inputs.filter(input => input.getAttribute("name") === "ActionCode0").some(input => input.checked);
    if (isActionCodeChecked) return errors;
    var actionCodeErrorMessage = document.querySelector("#action-code-error-message");

    if (!actionCodeErrorMessage) {
      console.error({
        message: "A validation message must be provided in the HTML document for the following HTMLInputElement",
        element: defaultActionCodeInput
      });
    }

    var message = (_actionCodeErrorMessa = actionCodeErrorMessage == null ? void 0 : (_actionCodeErrorMessa2 = actionCodeErrorMessage.textContent) == null ? void 0 : _actionCodeErrorMessa2.trim()) != null ? _actionCodeErrorMessa : "Please select an option";
    errors.push({
      message,
      element: $(defaultActionCodeInput)
    });
    return errors;
  };

  return validateCommon;
};
var initializeQuestionCodeCheckboxes = () => {
  var questionCodes = Array.from(document.querySelectorAll('[id^="QuestionCode"]'));
  var ids = questionCodes.map(questionCode => {
    var _questionCode$getAttr;

    return (_questionCode$getAttr = questionCode.getAttribute("id")) == null ? void 0 : _questionCode$getAttr.replace("QuestionCode", "");
  }).filter(id => id !== "" || id !== undefined);
  var checkboxes = ids.map(id => document.getElementById(id)).filter(checkbox => checkbox !== undefined || checkbox !== null);
  checkboxes.forEach(checkbox => {
    var questionCode = questionCodes.find(questionCode => {
      var _questionCode$getAttr2, _checkbox$getAttribut;

      return (_questionCode$getAttr2 = questionCode.getAttribute("id")) == null ? void 0 : _questionCode$getAttr2.includes((_checkbox$getAttribut = checkbox == null ? void 0 : checkbox.getAttribute("id")) != null ? _checkbox$getAttribut : "");
    });
    if (!questionCode) return;
    checkbox == null ? void 0 : checkbox.addEventListener("change", event => {
      questionCode.value = checkbox.checked.toString();
    });
  });
};
var initializeValidateCommonWithStripe = form => {
  var validateCommon = initializeValidateCommon(form, document.querySelector("#stripeSubmit"));
  if (!validateCommon.form) return;
  var captureForm = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_20__["default"](validateCommon.form);
  captureForm.subscribe("childList", record => {
    var elements = Array.from(record.addedNodes).filter(node => node.nodeType === Node.ELEMENT_NODE);
    var submit = elements.find(element => element.id === "stripeSubmit");

    if (submit) {
      captureForm.disconnect();
      validateCommon.submit = submit;
      validateCommon.validateOnSubmit();
    }
  });
  var fieldset = document.querySelector("#paymentInformation");
  if (!fieldset) return;
  var stripe = new Shared_ts_api_express_checkout_stripe_checkout__WEBPACK_IMPORTED_MODULE_11__["default"](fieldset);
  stripe.subscribe("CardNumberHostedField", hostedField => hostedField.classList.add("form__field"));
  stripe.subscribe("CardCvv2HostedField", hostedField => hostedField.classList.add("form__field"));
  stripe.subscribe("CardExpirationHostedField", hostedField => {
    hostedField.classList.add("form__field");
    var cardExpYear = document.querySelector("#CardExpirationYearCt");

    if (cardExpYear) {
      cardExpYear.remove();
    }

    var cardExpDateButton = document.querySelector("#CardExpirationCt .form__button");

    if (cardExpDateButton) {
      cardExpDateButton.remove();
    }
  });
  stripe.queryHostedFields();
  stripe.on("default", hostedField => {
    var target = validateCommon.getTargetByControl(hostedField);
    validateCommon.setControlToDefault(target);
  });
  stripe.on("invalid", hostedField => {
    var target = validateCommon.getTargetByControl(hostedField);
    validateCommon.setControlToInvalid(target);
  });
  stripe.on("valid", hostedField => {
    var target = validateCommon.getTargetByControl(hostedField);
    validateCommon.setControlToValid(target);
  });
  return validateCommon;
};
var initializeValidateCommonWithBraintree = form => {
  var validateCommon = initializeValidateCommon(form, document.querySelector("#braintreeSubmit"));
  if (!validateCommon.form) return;
  var captureForm = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_20__["default"](validateCommon.form);
  captureForm.subscribe("childList", record => {
    var elements = Array.from(record.addedNodes).filter(node => node.nodeType === Node.ELEMENT_NODE);
    var submit = elements.find(element => element.id === "braintreeSubmit");

    if (submit) {
      captureForm.disconnect();
      validateCommon.submit = submit;
      validateCommon.validateOnSubmit();
    }
  });
  var fieldset = document.querySelector("#paymentInformation");
  if (!fieldset) return;
  var bt = new Shared_ts_api_express_checkout_braintree_checkout__WEBPACK_IMPORTED_MODULE_12__["default"](fieldset);
  bt.subscribe("CardNumberHostedField", hostedField => hostedField.classList.add("form__field"));
  bt.subscribe("CardCvv2HostedField", hostedField => hostedField.classList.add("form__field"));
  bt.subscribe("CardExpirationHostedField", hostedField => {
    var cardExpYear = document.querySelector("#CardExpirationYearCt");

    if (cardExpYear) {
      cardExpYear.remove();
    }

    var cardExpDateButton = document.querySelector("#CardExpirationCt .form__button");

    if (cardExpDateButton) {
      cardExpDateButton.remove();
    }
  });
  bt.on("default", hostedField => {
    var target = validateCommon.getTargetByControl(hostedField);
    validateCommon.setControlToDefault(target);
  });
  bt.on("invalid", hostedField => {
    var target = validateCommon.getTargetByControl(hostedField);
    validateCommon.setControlToInvalid(target);
  });
  bt.on("valid", hostedField => {
    var target = validateCommon.getTargetByControl(hostedField);
    validateCommon.setControlToValid(target);
  });
  return validateCommon;
};
var getHiddenFormControlsByElement = element => {
  return Array.from(element.querySelectorAll("input, select, textarea"));
};
var addAttributeToFormControls = (elements, attribute) => {
  elements.forEach(element => element.setAttribute(attribute, "true"));
};
var removeAttributeFromFormControls = (elements, attribute) => {
  elements.forEach(element => element.removeAttribute(attribute));
};
var validateByElementController = validateEvent => {
  var _validateEvent$form$q, _validateEvent$form4;

  var candidates = Array.from((_validateEvent$form$q = (_validateEvent$form4 = validateEvent.form) == null ? void 0 : _validateEvent$form4.querySelectorAll(".element-controller")) != null ? _validateEvent$form$q : []);
  candidates.forEach(candidate => {
    var elementController = new Shared_ts_utils_element_controller__WEBPACK_IMPORTED_MODULE_19__["default"](candidate);
    elementController.controllers.forEach(controller => {
      controller.addEventListener("change", event => {
        elementController.toggleElementsByController(controller);
      });
    });
    elementController.elements.forEach(element => {
      if (!element) return;
      var captureElement = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_20__["default"](element);
      var formControls = getHiddenFormControlsByElement(element);
      captureElement.subscribe("attributes", record => {
        if (record.attributeName === "data-element-controller-name") {
          var hasControllerName = element.hasAttribute("data-element-controller-name");
          hasControllerName ? addAttributeToFormControls(formControls, validateEvent.attribute) : removeAttributeFromFormControls(formControls, validateEvent.attribute);
          validateEvent.captureComboboxes();
          validateEvent.captureInputs();
          validateEvent.captureTextareas();
          validateEvent.processComboboxEvents();
          validateEvent.processInputEvents();
          validateEvent.processTextareaEvents();
        }
      });
    });
  });
};
var initializeValidateEventNavigator = function initializeValidateEventNavigator(form, submit, afterInitAction) {
  if (afterInitAction === void 0) {
    afterInitAction = () => {};
  }

  var validateEvent = initializeValidateEvent(form, submit, "required");
  var elementController = new Shared_ts_utils_element_controller__WEBPACK_IMPORTED_MODULE_19__["default"](form); //validateByElementController(validateEvent);

  var navigators = Array.from(form.querySelectorAll("[data-fieldset-navigator]"));
  var nextNavigators = navigators.filter(navigator => navigator.getAttribute("data-fieldset-navigator") === "next");
  nextNavigators.forEach(navigator => {
    navigator.addEventListener("click", event => validateByNavigator(validateEvent, navigator).then(() => updateFieldsetViewByElementController(elementController, navigator)));
  });
  var prevNavigators = navigators.filter(navigator => navigator.getAttribute("data-fieldset-navigator") === "prev");
  prevNavigators.forEach(navigator => {
    navigator.addEventListener("click", event => {
      updateFieldsetViewByElementController(elementController, navigator);
    });
  });
  afterInitAction({
    validateEvent,
    elementController,
    navigators,
    nextNavigators,
    prevNavigators
  });
  return new Promise((resolve, reject) => {
    submit.addEventListener("click", event => {
      event.preventDefault();
      validateEvent.validateAll();

      if (validateEvent.isValidForm()) {
        resolve(form);
      }
    });
  });
};
var updateFieldsetViewByElementController = (elementController, navigator) => {
  var controller = elementController.controllers.find(controller => controller === navigator);
  if (!controller) return;
  elementController.toggleElementsByController(controller);
};
var validateByNavigator = (validateEvent, navigator) => {
  return new Promise((resolve, reject) => {
    var controls = validateEvent.getRequiredControls().filter(control => control.closest("fieldset") === navigator.closest("fieldset"));
    controls.forEach(control => validateEvent.validateControl(control));
    var isValid = controls.every(control => validateEvent.isValidControl(control));

    if (isValid) {
      resolve();
    } else {
      validateEvent.setFocusOnInvalidControl(controls);
    }
  });
};
var initializeValidateEventThenSubscribe = () => {};
var relocateThenValidateUpsellActionQuantities = selector => {
  var form = document.querySelector(selector);
  if (!form) return;
  var upsellActionQuantityRelocator = new Shared_ts_utils_upsell_action_quantity_reloactor__WEBPACK_IMPORTED_MODULE_22__["default"](form); // todo: add client-side validation
};
var validatePromoCodeAroundStatusScreen = () => {
  var _validateEvent$submit2;

  var form = document.querySelector("[data-validate-promo-code]");
  if (!form) return;
  var statusContainer = document.querySelector("#promo-code-validation-status");
  if (!statusContainer) return;
  var statusScreen = new Shared_ts_components_status_screen__WEBPACK_IMPORTED_MODULE_17__["default"]("inline", statusContainer);
  var wasValidated = false;
  var capturePromoCode;
  var validateEvent = initializeValidateEvent(form, form.querySelector('button[type="button"]'));
  var input = validateEvent.inputs.find(input => input.id === "promoCode");
  input == null ? void 0 : input.addEventListener("keyup", event => {
    if (wasValidated) {
      wasValidated = false;
      statusScreen.close();
    }

    capturePromoCode && input.value === capturePromoCode ? statusScreen.open() : statusScreen.close();
  });
  (_validateEvent$submit2 = validateEvent.submit) == null ? void 0 : _validateEvent$submit2.addEventListener("click", event => {
    validateEvent.validateInputs(validateInputRules);

    if (validateEvent.isValidForm()) {
      statusScreen.busy("Checking...");
    }
  });
  validatePromoCode().pass(promoCode => {
    statusScreen.done("Code " + promoCode + " was successfully redeemed.");
  }).fail(error => {
    statusScreen.problem(error);
  }).finally(() => {
    capturePromoCode = input == null ? void 0 : input.value;
    wasValidated = true;
  });
};

/***/ }),

/***/ "../../Library/Shared/ts/applications/media-player.ts":
/*!************************************************************!*\
  !*** ../../Library/Shared/ts/applications/media-player.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeVimeoMediaPlayer": function() { return /* binding */ initializeVimeoMediaPlayer; }
/* harmony export */ });
/* unused harmony exports initializeVimeoMediaPlayerByCapture, initializeVimeoMediaPlayerByObserver, initializeVimeoMediaPlayerWithIframeByObserver */
/* harmony import */ var Shared_ts_components_media_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/components/media-player */ "../../Library/Shared/ts/components/media-player.ts");
/* harmony import */ var Shared_ts_api_media_player_vimeo_media_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/ts/api/media-player/vimeo-media-player */ "../../Library/Shared/ts/api/media-player/vimeo-media-player.ts");
/* harmony import */ var Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/ts/observers/intersection */ "../../Library/Shared/ts/observers/intersection.ts");
/* harmony import */ var Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Shared/ts/utils/capture-element */ "../../Library/Shared/ts/utils/capture-element.ts");
/* harmony import */ var Shared_ts_utils_load_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Shared/ts/utils/load-item */ "../../Library/Shared/ts/utils/load-item.ts");
// components
 // adapters

 // observers

 // utils



var initializeVimeoMediaPlayer = candidate => {
  if (!candidate) return;
  new Shared_ts_components_media_player__WEBPACK_IMPORTED_MODULE_0__["default"](new Shared_ts_api_media_player_vimeo_media_player__WEBPACK_IMPORTED_MODULE_1__["default"](candidate));
};
var initializeVimeoMediaPlayerByCapture = (candidate, iframePlaceholder, placeholderAttribute) => {
  var captureCandidate = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_3__["default"](iframePlaceholder);
  captureCandidate.subscribe("childList", record => {
    var iframe = Array.from(record.addedNodes).filter(node => node.nodeType === Node.ELEMENT_NODE).find(node => node.nodeName.toLowerCase() === "iframe");
    if (!iframe) return;
    if (iframe.src !== iframePlaceholder.getAttribute(placeholderAttribute)) return;
    initializeVimeoMediaPlayer(candidate);
  });
};
var initializeVimeoMediaPlayerByObserver = (candidateSelector, placeholderAttribute) => {
  (0,Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_2__.observer)(candidateSelector, {
    inRange: candidate => {
      var placeholder = candidate.querySelector("[" + placeholderAttribute + "]");
      if (!placeholder) return;
      initializeVimeoMediaPlayerByCapture(candidate, placeholder, placeholderAttribute);
      new Shared_ts_utils_load_item__WEBPACK_IMPORTED_MODULE_4__["default"](placeholder, {
        tag: "iframe",
        src: placeholderAttribute
      });
    }
  });
};
var initializeVimeoMediaPlayerWithIframeByObserver = (candidateSelector, placeholderAttribute) => {
  (0,Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_2__.observer)(candidateSelector, {
    inRange: candidate => {
      var placeholder = candidate.querySelector("[" + placeholderAttribute + "]");
      if (!placeholder) return;
      initializeVimeoMediaPlayerByCapture(candidate, placeholder, placeholderAttribute);
    }
  });
};

/***/ }),

/***/ "../../Library/Shared/ts/applications/template.ts":
/*!********************************************************!*\
  !*** ../../Library/Shared/ts/applications/template.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeBase": function() { return /* binding */ initializeBase; },
/* harmony export */   "initializeToolTip": function() { return /* binding */ initializeToolTip; },
/* harmony export */   "initializeMicrosite": function() { return /* binding */ initializeMicrosite; }
/* harmony export */ });
/* harmony import */ var Shared_ts_components_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/components/tooltip */ "../../Library/Shared/ts/components/tooltip.ts");
/* harmony import */ var Shared_ts_components_fingerprint_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/ts/components/fingerprint-nav */ "../../Library/Shared/ts/components/fingerprint-nav.ts");
/* harmony import */ var Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/ts/observers/intersection */ "../../Library/Shared/ts/observers/intersection.ts");
/* harmony import */ var Shared_ts_utils_load_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Shared/ts/utils/load-item */ "../../Library/Shared/ts/utils/load-item.ts");
// components

 // observers

 // utils


var initializeBase = () => {
  initializeToolTip();
  (0,Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_2__.observer)("[data-src-iframe]", {
    inRange: element => new Shared_ts_utils_load_item__WEBPACK_IMPORTED_MODULE_3__["default"](element, {
      src: "data-src-iframe",
      tag: "iframe"
    })
  });
};
var initializeToolTip = () => {
  new Shared_ts_components_tooltip__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelectorAll(".link"), "link--is-active");
};
var initializeMicrosite = () => {
  var fp = new Shared_ts_components_fingerprint_nav__WEBPACK_IMPORTED_MODULE_1__["default"]();
  fp.hideWhenElementsInView("form");
};

/***/ }),

/***/ "../../Library/Shared/ts/components/carousel.ts":
/*!******************************************************!*\
  !*** ../../Library/Shared/ts/components/carousel.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Carousel; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "../../Library/node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Shared/ts/observers/intersection */ "../../Library/Shared/ts/observers/intersection.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Library/Shared/ts/utils/html.ts");






class Carousel {
  /**
   * Represents the CSS class name for the selected thumbnail button
   */

  /**
   * Represents the relationship between the carousel's container element and it's connected Carousel interface
   */

  /**
   * Represents the relationship between the carousel's container element and it's connected event interface
   */

  /**
   * Represents the relationship between the carousel's container element and it's connected control interface
   */

  /**
   * Represents the element containing the carousel along with other user-interface components
   */

  /**
   * Takes a carousel interface and integrates it with basic play controls
   * @param context ICarousel
   */
  constructor(context) {
    this.container = void 0;
    this.container = context.container;
    Carousel.baseInitialize(context, this);
    Carousel.observeContainer(context, this);
  }
  /**
   * Takes the ICarousel interface and uses the container element as a key to establish a new context to the interface. Next, a new watch callback is established that will notify observers on each rotation.
   * @param context ICarousel
   */


  static baseInitialize(context, carousel) {
    if (!context.container) return;
    Carousel.context.set(context.container, context);
    Carousel.events.set(context.container, []);
    context.watch(() => {
      Carousel.push(context, "rotation");
    });
  }
  /**
   * Filters through all events matching a specified name and invokes the handler callback function
   * @param context ICarousel
   * @param name string
   */


  static push(context, name) {
    if (!context.container) return;
    var events = Carousel.events.get(context.container);
    if (!events) return;
    events.filter(event => event.name === name).forEach(event => event.handler(context.currentIndex(), context.prevIndex(), context.nextIndex()));
  }
  /**
   * Adds an event to be captured where a handler callback function can be invoked
   * @param name string
   * @param handler function
   */


  on(name, handler) {
    if (!this.container) return;
    var events = Carousel.events.get(this.container);
    if (!events) return;
    events.push({
      name: name,
      handler: handler
    });
  }
  /**
   * Removes an event from being captured
   * @param name string
   * @param handler function
   */


  off(name, handler) {
    if (!this.container) return;
    var events = Carousel.events.get(this.container);
    if (!events) return;
    var result = events.find(event => event.name === name && event.handler === handler);
    if (!result) return;
    var index = events.indexOf(result);
    events.splice(index, 1);
  }
  /**
   * Takes the carousel's container element as a key to look up it's connected carousel interface and returns the interface.
   * @param container Element
   * @returns ICarousel
   */


  static getContext(container) {
    return this.context.get(container);
  }
  /**
   * Takes the ICarousel interface and reads in any available key-value pairs from the "data-carousel-config" HTML attribute into an attribute processor.
   * @param context ICarousel
   */


  static updateAttributes(context, carousel) {
    if (!context.container) return;
    var config = context.container.getAttribute("data-carousel-config");

    if (config) {
      try {
        carousel.processAttributes(JSON.parse(config), context);
      } catch (error) {
        console.warn(error);
      }
    }
  }
  /**
   * Takes the ICarouselConfig interface and converts key-value pairs into a string representation of the carousel configuration. This configuration replaces the previous configuration on data-carousel-config attribute.
   * @param config ICarouselConfig
   */


  setAttributes(config) {
    var container = this.container;

    try {
      container.dataset.carouselConfig = JSON.stringify(config);
    } catch (error) {
      console.warn(error);
    }
  }
  /**
   * Takes an ICarouselConfig interface along with an ICarousel interface and processes specific keys to operate using its values
   * @param config ICarouselConfig
   * @param context ICarousel
   */


  processAttributes(config, context) {
    if (config.auto) {
      context.setAuto(config.auto);
    }

    if (config.delay) {
      context.setDelay(config.delay);
    }
  }
  /**
   * Takes the ICarousel interface, creates a new mutation observer on the container element and observes for attribute changes which will call the updateAttributes method
   * @param context ICarousel
   */


  static observeContainer(context, carousel) {
    if (!context.container) return;
    this.updateAttributes(context, carousel);
    var observer = new MutationObserver(mutationRecords => {
      Carousel.updateAttributes(context, carousel);
    });
    observer.observe(context.container, {
      attributes: true
    });
  }
  /**
   * Navigates to a designated slide.
   * @param index number
   */


  goto(index) {
    if (!this.container) return;
    var context = Carousel.getContext(this.container);
    if (!context) return;
    context.goto(index);
  }
  /**
   * Plays the carousel continuously.
   */


  play(persistCurrentIndex) {
    if (!this.container) return;
    var context = Carousel.getContext(this.container);
    if (!context) return;
    context.play(persistCurrentIndex);
  }
  /**
   * Pauses the carousel
   */


  pause() {
    if (!this.container) return;
    var context = Carousel.getContext(this.container);
    if (!context) return;
    context.pause();
  }
  /**
   * Advances the carousel to the next slide
   */


  next() {
    if (!this.container) return;
    var context = Carousel.getContext(this.container);
    if (!context) return;
    context.next();
  }
  /**
   * Advances the carousel to the previous slide
   */


  prev() {
    if (!this.container) return;
    var context = Carousel.getContext(this.container);
    if (!context) return;
    context.prev();
  }
  /**
   * Enables the carousel to play continuously when the carousel's container element intersects the viewport; otherwise, the carousel will automatically pause.
   */


  autoplay() {
    var _context$parent;

    if (!this.container) return;
    var self = this;
    var context = Carousel.getContext(this.container);
    if (!context) return;
    var id = (_context$parent = context.parent) == null ? void 0 : _context$parent.id;
    var rangeControl = false;
    (0,Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_4__.observer)("#" + id, {
      inRange: record => {
        if (!rangeControl) {
          rangeControl = true;
          self.play(true);
        }
      },
      outRange: record => {
        if (rangeControl) {
          rangeControl = false;
          self.pause();
        }
      },
      unObserve: false,
      options: {
        threshold: [0.75]
      }
    });
  }
  /**
   * Enables the carousel to activate the previous and next methods through user-interface components
   */


  enablePrevNextControls() {
    var _context$container, _context$container2;

    if (!this.container) return;
    var context = Carousel.getContext(this.container);
    if (!context) return;
    var prevButton = (_context$container = context.container) == null ? void 0 : _context$container.querySelector(".slide__prev");
    var nextButton = (_context$container2 = context.container) == null ? void 0 : _context$container2.querySelector(".slide__next");
    prevButton == null ? void 0 : prevButton.addEventListener("click", this.prev.bind(context));
    nextButton == null ? void 0 : nextButton.addEventListener("click", this.next.bind(context));
  }
  /**
   * Enables the carousel to activate the play and pause methods through user-interface components
   */


  enablePlayPauseControls() {
    var _context$container3, _context$container4;

    if (!this.container) return;
    var context = Carousel.getContext(this.container);
    if (!context) return;
    var playButton = (_context$container3 = context.container) == null ? void 0 : _context$container3.querySelector(".slide__play");
    var pauseButton = (_context$container4 = context.container) == null ? void 0 : _context$container4.querySelector(".slide__pause");
    playButton == null ? void 0 : playButton.addEventListener("click", event => this.play());
    pauseButton == null ? void 0 : pauseButton.addEventListener("click", this.pause.bind(context));
  }
  /**
   * Uses the array of thumbnail buttons to locate the previous button with the thumbnail CSS class name and removes it. Then, assigns the CSS class name to the current thumbnail button.
   * @param thumbnailButton Element
   * @param thumbnailButtons Element[]
   */


  static updateThumbnailNavigationMarker(thumbnailButton, thumbnailButtons) {
    var previousButton = thumbnailButtons.find(thumbnailButton => thumbnailButton.classList.contains(Carousel.currentThumbnailCSSClassName));

    if (previousButton) {
      previousButton.classList.remove(Carousel.currentThumbnailCSSClassName);
    }

    if (thumbnailButton) {
      thumbnailButton.classList.add(Carousel.currentThumbnailCSSClassName);
    }
  }
  /**
   * Takes an thumbnailButton element and extracts the index value from it and navigates the carousel to the specified index
   * @param thumbnailButton Element
   * @param context ICarousel
   */


  static updateThumbnailNavigation(thumbnailButton, context) {
    var _thumbnailButton$getA;

    var index = parseInt((_thumbnailButton$getA = thumbnailButton.getAttribute("data-slide-index")) != null ? _thumbnailButton$getA : "");
    context.goto(index);
  }
  /**
   * Uses an index number to target a specific thumbnailButton element and then updates the thumbnail navigation marker with that element
   * @param index number
   * @param context ICarousel
   */


  static updateThumbnailNavigationMarkerByIndex(index, context) {
    if (!context.container) return;
    var hasThumbnailButtons = Carousel.thumbnails.has(context.container);

    if (hasThumbnailButtons) {
      var thumbnailButtons = Carousel.thumbnails.get(context.container);
      var currentButton = thumbnailButtons == null ? void 0 : thumbnailButtons.find(thumbnailButton => {
        var _thumbnailButton$getA2;

        return parseInt((_thumbnailButton$getA2 = thumbnailButton.getAttribute("data-slide-index")) != null ? _thumbnailButton$getA2 : "") === index;
      });
      if (!currentButton || !thumbnailButtons) return;
      Carousel.updateThumbnailNavigationMarker(currentButton, thumbnailButtons);
    }
  }
  /**
   * Enables the carousel to activate thumbnail controls through user-interface components
   */


  enableThumbnailControls(eventCallback) {
    if (!this.container) return;
    var thumbnailButtons = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_5__.enumerateElements)(this.container.querySelectorAll(".slide__thumbnail"));

    if (thumbnailButtons.length === 0) {
      var shadowRoot = this.container.getRootNode();

      if (shadowRoot instanceof ShadowRoot) {
        thumbnailButtons = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_5__.enumerateElements)(shadowRoot.host.querySelectorAll(".slide__thumbnail"));
      }
    }

    Carousel.thumbnails.set(this.container, thumbnailButtons);
    thumbnailButtons.forEach(thumbnailButton => {
      thumbnailButton.addEventListener("click", event => {
        var currentButton = event.target;
        Carousel.updateThumbnailNavigation(currentButton, this);
        Carousel.updateThumbnailNavigationMarker(currentButton, thumbnailButtons);
        if (typeof eventCallback === "function") eventCallback(event);
      });
    });
    var context = Carousel.getContext(this.container);
    if (!context) return;
    this.on("rotation", currentIndex => {
      if (currentIndex === undefined) return;
      Carousel.updateThumbnailNavigationMarkerByIndex(currentIndex, context);
    });
  }

}
Carousel.currentThumbnailCSSClassName = "slide__thumbnail--is-selected";
Carousel.context = new WeakMap();
Carousel.events = new WeakMap();
Carousel.controls = new WeakMap();
Carousel.thumbnails = new WeakMap();

/***/ }),

/***/ "../../Library/Shared/ts/components/fade-carousel.ts":
/*!***********************************************************!*\
  !*** ../../Library/Shared/ts/components/fade-carousel.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FadeCarousel; }
/* harmony export */ });
/* harmony import */ var Shared_ts_components_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/components/carousel */ "../../Library/Shared/ts/components/carousel.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Library/Shared/ts/utils/html.ts");


class FadeCarousel extends Shared_ts_components_carousel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Represents the current slide CSS class name
   */

  /**
   * Extends the Carousel's base functionality by visually animating it as a fader.
   * @param elements HTMLList
   */
  constructor(context) {
    super(context);
    FadeCarousel.initialize(context);
  }
  /**
   * Takes in the FadeCarousel instance and iterates through each element. For each element, the first slide is set as the current slide and a new watch callback function is estabilished.
   * @param context IFadeCarousel
   */


  static initialize(context) {
    if (context.children === undefined) return;
    context.initialize();
    FadeCarousel.createWatch(context);
    FadeCarousel.setSlideToCurrent(context.children.item(0));
  }
  /**
   * Takes the Fade Carousel interface context and establishes a new watch callback function that will change on each rotation
   * @param context IFadeCarousel
   */


  static createWatch(context) {
    var counter = 1;
    var children = context.countChildren();
    context.watch(currentIndex => {
      if (context.parent === undefined || context.children === undefined || children === undefined) return;
      FadeCarousel.push(context, "rotation");

      if (counter > children) {
        FadeCarousel.updateCurrentSlide(context.parent, context.children.item(currentIndex));
      }

      if (counter === children) {
        context.setIndex(0);
        FadeCarousel.updateThumbnailNavigationMarkerByIndex(0, context);
      }

      if (counter <= children) {
        counter++;
      }
    });
  }
  /**
   * Takes the parent and attempts to locate the previous slide and remove the current slide CSS class from it and adds the current slide CSS class to the current slide element.
   * @param parent Element
   * @param slide Element
   */


  static updateCurrentSlide(parent, slide) {
    var previousSlide = parent.querySelector("." + this.currentSlideCSSClassName);

    if ((0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_1__.elementExists)(previousSlide)) {
      previousSlide == null ? void 0 : previousSlide.classList.remove(this.currentSlideCSSClassName);
    }

    this.setSlideToCurrent(slide);
  }
  /**
   * Assigns the current slide CSS class name to the target slide element
   * @param slides Element
   */


  static setSlideToCurrent(slide) {
    slide == null ? void 0 : slide.classList.add(this.currentSlideCSSClassName);
  }

}
FadeCarousel.currentSlideCSSClassName = "slide__item--current";

/***/ }),

/***/ "../../Library/Shared/ts/components/fingerprint-nav.ts":
/*!*************************************************************!*\
  !*** ../../Library/Shared/ts/components/fingerprint-nav.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FingerPrintNav; }
/* harmony export */ });
/* harmony import */ var Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/observers/intersection */ "../../Library/Shared/ts/observers/intersection.ts");
/* harmony import */ var Shared_ts_utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/ts/utils/data */ "../../Library/Shared/ts/utils/data.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Library/Shared/ts/utils/html.ts");



class FingerPrintNav {
  /**
   * Represents the root fingerprint nav element
   */

  /**
   * Represents the CSS class name for the invisible state to the fingerprint nav element
   */

  /**
   * Takes an HTMLElement to represent the fingerprint nav root element and a CSS class name to represent the invisible state of the element. Support includes abilities to control visibility state on observable elements and direct access to control visibility state.
   * @param root HTMLElement
   * @param name string
   */
  constructor(root, name) {
    if (root === void 0) {
      root = document.querySelector(".fp-nav");
    }

    if (name === void 0) {
      name = "fp-nav--is-hidden";
    }

    this.root = void 0;
    this.name = void 0;
    this.root = root;
    this.name = name;
  }
  /**
   * Establishes an observer on all elements matching the selector and connects the inRange and outRange callback functions to control the root element's visibility state.
   * @param selector string
   * @param inRange () => void
   * @param outRange () => void
   * @param self FingerPrintNav
   */


  static updateWhenElementsInView(selector, _inRange, _outRange, self) {
    if ((0,Shared_ts_utils_data__WEBPACK_IMPORTED_MODULE_1__.isString)(selector)) {
      (0,Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_0__.observer)(selector, {
        inRange: element => _inRange(self),
        outRange: element => _outRange(self),
        unObserve: false
      });
    }
  }
  /**
   * Queries the document to find all elements that match the selector and shows the fingerprint nav element when any element has intersected the viewport.
   * @param selector string
   */


  showWhenElementsInView(selector) {
    FingerPrintNav.updateWhenElementsInView(selector, this.show.bind(this), this.hide.bind(this), this);
  }
  /**
   * Queries the document to find all elements that match the selector and hides the fingerprint nav element when any element has intersected the viewport.
   * @param selector string
   */


  hideWhenElementsInView(selector) {
    FingerPrintNav.updateWhenElementsInView(selector, this.hide.bind(this), this.show.bind(this), this);
  }
  /**
   * Removes the invisible state from the fingerprint nav element
   */


  show() {
    if ((0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_2__.elementExists)(this.root)) {
      var _this$root;

      (_this$root = this.root) == null ? void 0 : _this$root.classList.remove(this.name);
    }
  }
  /**
   * Adds the invisible state to the fingerprint nav element
   */


  hide() {
    if ((0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_2__.elementExists)(this.root)) {
      var _this$root2;

      (_this$root2 = this.root) == null ? void 0 : _this$root2.classList.add(this.name);
    }
  }

}

/***/ }),

/***/ "../../Library/Shared/ts/components/media-player.ts":
/*!**********************************************************!*\
  !*** ../../Library/Shared/ts/components/media-player.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MediaPlayer; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);



class MediaPlayer {
  /**
   * A user-interface consisting of an element representing a media player and a collection of controls that can communicate directly to the media player.
   * @param context IMediaPlayerAdapter
   */
  constructor(context) {
    MediaPlayer.adapter.set(this, context);
    MediaPlayer.registerControllerEvents(context);
  }
  /**
   * Enumerates all controllers and adds an event listener to each controller where the event will load in a new media
   * @param context IMediaPlayerAdapter
   */


  static registerControllerEvents(context) {
    var buttons = context.root.querySelectorAll("[data-media-player-video-id]");
    Array.from(buttons).forEach(button => button.addEventListener("click", event => this.processControllerEvent(button, context)));
  }
  /**
   * Retrieves the unique identifier from the controller element and loads in the new media
   * @param controller HTMLElement
   * @param context MediaPlayer
   */


  static processControllerEvent(controller, context) {
    var id = controller.getAttribute("data-media-player-video-id");
    if (!id) return;
    context.load(id);
  }
  /**
   * Returns the media player adapter
   * @param context MediaPlayer
   * @returns IMediaPlayerAdapter
   */


  static getAdapterByContext(context) {
    return this.adapter.get(context);
  }
  /**
   * Loads in new media where the unique identifier represents the new media content
   * @param id string
   */


  load(id) {
    var adapter = MediaPlayer.getAdapterByContext(this);
    if (!adapter) return;
    adapter.load(id);
  }
  /**
   * Plays the current media
   */


  play() {
    var adapter = MediaPlayer.getAdapterByContext(this);
    if (!adapter) return;
    adapter.play();
  }
  /**
   * Pauses the current media
   */


  pause() {
    var adapter = MediaPlayer.getAdapterByContext(this);
    if (!adapter) return;
    adapter.pause();
  }

}
MediaPlayer.adapter = new WeakMap();

/***/ }),

/***/ "../../Library/Shared/ts/components/modal.ts":
/*!***************************************************!*\
  !*** ../../Library/Shared/ts/components/modal.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Modal; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../Library/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Shared_ts_utils_focus_trap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Shared/ts/utils/focus-trap */ "../../Library/Shared/ts/utils/focus-trap.ts");
/* harmony import */ var Shared_ts_utils_inert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Shared/ts/utils/inert */ "../../Library/Shared/ts/utils/inert.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Library/Shared/ts/utils/html.ts");
/* harmony import */ var Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Shared/ts/observers/event */ "../../Library/Shared/ts/observers/event.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





// interfaces
// utils




(0,Shared_ts_utils_inert__WEBPACK_IMPORTED_MODULE_5__["default"])();
class Modal {
  /**
   * Represents the key-value relationship between a string (representing the root element id) and it's associated Modal instance.
   */

  /**
   * Represents the key-value relationship between a Modal instance and it's associated actor element.
   */

  /**
   * Represents the key-value relationship between a Modal instance and it's associated root element.
   */

  /**
   * Represents the key-value relationship between a Modal instance and it's associated HTML template.
   */

  /**
   * Represents the key-value relationship between a Modal instance and a FocusTrap instance.
   */

  /**
   * Represents the body element.
   */

  /**
   * Represents status whether the click event listener on the body element has already been registered.
   */

  /**
   * Represents status whether there are any open modals on the screen.
   */

  /**
   * Represents status whether current URL parameters may control displaying a modal dialog.
   */

  /**
   * Allows an HTMLElement to operate as a modal dialog. Buttons equipped with the data-modal-dialog-id="{RootId}" and data-modal-dialog-actor="{open|close}" attributes will be able to communicate with the modal and control it's visibility state. Programmatic communication with the modal is also accessible through the open and close methods.
   * @param root HTMLElement
   */
  constructor(root, userConfig) {
    if (root === void 0) {
      root = document.getElementById("#modal");
    }

    this.canCloseByEscKey = true;

    if (root && (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_6__.elementExists)(root) && Modal.isRootChildOfBody(root)) {
      var _config$id, _config$uiBackdrop;

      var config = userConfig != null ? userConfig : {};
      var template = Modal.createHTMLTemplate(root, config);
      Modal.template.set(this, template);
      Modal.root.set(this, template.container);
      Modal.context.set((_config$id = config.id) != null ? _config$id : root.id, this);
      Modal.processAriaAttributes(template.container, config);
      var uiBackdrop = (_config$uiBackdrop = config == null ? void 0 : config.uiBackdrop) != null ? _config$uiBackdrop : true;
      Modal.manageModalEvents(this, uiBackdrop);
    }
  }

  static getTemplateByContext(context) {
    return this.template.get(context);
  }
  /**
   * Determines if the root is a direct child of the document body. This relationship is required for a modal to operate appropriately as to ensure all of the other children in the document body are inert when a modal is active.
   * @param root HTMLElement
   * @returns boolean
   */


  static isRootChildOfBody(root) {
    var result = root.parentElement === this.body;

    if (!result) {
      console.error("A modal must be a direct child of the document body. Aborting support for this element.", {
        root
      });
    }

    return result;
  }
  /**
   * Iterates through the body element's children and determines if all obscure elements will be inert.
   */


  static manageInertState() {
    var children = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_6__.enumerateElements)(this.body.children);

    if (this.anyOpenModalsStatus) {
      children.filter(child => child.classList.contains("modal-dialog--is-active")).forEach(this.removeInertState);
      children.filter(child => !child.classList.contains("modal-dialog--is-active")).forEach(this.addInertState);
    } else {
      children.forEach(this.removeInertState);
    }
  }
  /**
   * Iterates through the body element's children and removes the inert attribute.
   * @param children Element
   */


  static removeInertState(child) {
    child.removeAttribute("inert");
    child.removeAttribute("aria-hidden");
    var actors = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_6__.enumerateElements)(child.querySelectorAll("[data-modal-dialog-actor]"));
    actors.forEach(actor => actor.removeAttribute("disabled"));
  }
  /**
   * Iterates through the body element's children and adds the inert attribute.
   * @param children Element
   */


  static addInertState(child) {
    child.setAttribute("inert", "true");
    child.setAttribute("aria-hidden", "true");
    var actors = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_6__.enumerateElements)(child.querySelectorAll("[data-modal-dialog-actor]"));
    actors.forEach(actor => actor.setAttribute("disabled", "true"));
  }
  /**
   * Creates a new HTMLElement container that provides appropriate accessibility attributes and CSS class identifiers.
   * @returns HTMLElement
   */


  static createContainer(id, role, templateModifier) {
    if (role === void 0) {
      role = "dialog";
    }

    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_6__.createElement)("div", {
      role: role,
      hidden: "hidden",
      tabindex: "-1",
      "aria-modal": "true",
      "data-modal-dialog-parent-id": id,
      class: "modal-dialog modal-dialog--container modal-dialog--is-disabled modal-dialog--is-hidden modal-dialog--" + id + " modal-dialog--" + templateModifier
    });
  }
  /**
   * Creates a new HTMLElement backdrop that provides appropriate accessibility attributes and CSS class identifiers.
   * @returns HTMLElement
   */


  static createBackdrop(id) {
    return this.registerCloseAttributes((0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_6__.createElement)("div", {
      role: "presentation",
      class: "modal-dialog__backdrop",
      "aria-hidden": "true"
    }), id);
  }
  /**
   * Takes an HTMLElement and provides essential attributes to enable the element to close a modal.
   * @param element HTMLElement
   * @param id string
   * @returns HTMLElement
   */


  static registerCloseAttributes(element, id) {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_6__.setElementAttributes)(element, {
      "data-modal-dialog-actor": "close",
      "data-modal-dialog-id": id,
      "aria-label": "Close dialog"
    });
  }
  /**
   * Creates an HTMLElement button and provides appropriate accessibility attributes and CSS class identifiers.
   * @param id string
   * @returns HTMLElement
   */


  static createCloseButton(id) {
    return this.registerCloseAttributes((0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_6__.createElement)("button", {
      type: "button",
      class: "modal-dialog__close"
    }), id);
  }
  /**
   * Creates an element to represent the modal dialog stage.
   * @returns HTMLElement
   */


  static createStage() {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_6__.createElement)("div", {
      // role: "document",
      class: "modal-dialog__stage"
    });
  }

  static createContent() {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_6__.createElement)("div", {
      class: "modal-dialog__content"
    });
  }

  static createViewport() {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_6__.createElement)("div", {
      class: "modal-dialog__viewport"
    });
  }
  /**
   * Takes the root element and encloses it within a new container element that is equipped with appropriate accessibility attributes and CSS class identifiers.
   * @param root HTMLElement
   * @returns HTMLElement
   */


  static createHTMLTemplate(root, config) {
    var _config$id2, _config$templateModif;

    var id = (_config$id2 = config.id) != null ? _config$id2 : root.id;
    var container = this.createContainer(id, config.role, (_config$templateModif = config.templateModifier) != null ? _config$templateModif : "base");
    var viewport = this.createViewport();
    var content = this.createContent();
    var stage = this.createStage();
    var backdrop = this.createBackdrop(id);
    var closeButton = this.createCloseButton(id);
    root.insertAdjacentElement("afterend", container);
    container.insertAdjacentElement("beforeend", backdrop);
    container.insertAdjacentElement("afterbegin", viewport);
    viewport.insertAdjacentElement("afterbegin", stage);
    stage.insertAdjacentElement("beforeend", closeButton);
    stage.insertAdjacentElement("afterbegin", content);
    content.insertAdjacentElement("beforeend", root);
    return {
      container,
      viewport,
      content,
      stage,
      backdrop,
      closeButton
    };
  }
  /**
   * Determines if user-provided ARIA attributes are referencing elements within the modal's scope. An error message will be reported for any mismatches between the reference and the element.
   * @param container HTMLElement
   * @param config IModalConfig
   */


  static processAriaAttributes(container, config) {
    if (config.ariaLabelledBy) {
      this.connectAriaReferenceToElementId(container, "aria-labelledby", config.ariaLabelledBy);
    }

    if (config.ariaDescribedBy) {
      this.connectAriaReferenceToElementId(container, "aria-describedby", config.ariaDescribedBy);
    }

    if (config.ariaLabel) {
      container.setAttribute("aria-label", config.ariaLabel);
    }

    if (!config.ariaLabel && !config.ariaLabelledBy) {
      console.error("There is no label for this modal.", {
        container
      });
    }
  }
  /**
   * Determines if an element representing the ARIA value exists in the document. If an element exists, the container will reference the element via ARIA attribute; otherwise, an error will be reported of the disconnect.
   * @param container HTMLElement
   * @param attribute string
   * @param value string
   */


  static connectAriaReferenceToElementId(container, attribute, value) {
    if ((0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_6__.elementExists)(container.querySelector("#" + value))) {
      container.setAttribute(attribute, value);
    } else {
      console.error("There is no element id that matches " + attribute + " value " + value + ".", {
        container
      });
    }
  }
  /**
   * Makes the modal dialog visible on screen by removing the "modal-dialog--is-disabled" class.
   * @param root HTMLElement
   */


  static makeRootVisible(root) {
    return new Promise((resolve, reject) => {
      var presenter = this.getPresentationElementByContextRootElement(root);

      var handler = event => {
        if (event.target !== presenter) return;
        root.removeEventListener("transitionend", handler);
        resolve();
      };

      root.addEventListener("transitionend", handler);
      root.classList.remove("modal-dialog--is-disabled");
      root.classList.remove("modal-dialog--is-hidden");
      root.removeAttribute("hidden");
    });
  }
  /**
   * Makes the modal dialog invisible on screen by adding the "modal-dialog--is-disabled" class.
   * @param root HTMLElement
   */


  static makeRootInvisible(root) {
    return new Promise((resolve, reject) => {
      root.classList.add("modal-dialog--is-hidden");
      var presenter = this.getPresentationElementByContextRootElement(root);

      var handler = event => {
        if (event.target !== presenter) return;
        root.classList.add("modal-dialog--is-disabled");
        root.setAttribute("hidden", "hidden");
        root.removeEventListener("transitionend", handler);
        resolve();
      };

      root.addEventListener("transitionend", handler);
    });
  }
  /**
   * Determines if the modal dialog is visible through the "modal-dialog--is-disabled" class.
   * @param root HTMLElement
   * @returns boolean
   */


  static isRootVisible(root) {
    return !root.classList.contains("modal-dialog--is-disabled");
  }
  /**
   * Takes an actor element and extracts the value from the "data-modal-dialog-actor" attribute.
   * @param actor HTMLElement
   * @returns string
   */


  static getActionByActor(actor) {
    var _actor$getAttribute;

    return ((_actor$getAttribute = actor.getAttribute("data-modal-dialog-actor")) != null ? _actor$getAttribute : "").toLowerCase();
  }
  /**
   * Captures the element that contains the ".modal-dialog--is-active" class and retrieves the Modal instance that is associated with the modal dialog element.
   * @returns Modal
   */


  static getContextByActiveRoot() {
    var root = document.querySelector(".modal-dialog--is-active");
    return this.getContextByActorParentId(root);
  }
  /**
   * Takes an actor element as the keyword to retrieve its associated Modal instance.
   * @param actor HTMLElement
   * @returns Modal
   */


  static getContextByActorId(actor) {
    var _actor$getAttribute2;

    return this.context.get((_actor$getAttribute2 = actor.getAttribute("data-modal-dialog-id")) != null ? _actor$getAttribute2 : "");
  }
  /**
   * Takes an actor element as the keyword to retrieve its associated Modal instance.
   * @param actor HTMLElement
   * @returns Modal
   */


  static getContextByActorParentId(actor) {
    var _actor$getAttribute3;

    return this.context.get((_actor$getAttribute3 = actor == null ? void 0 : actor.getAttribute("data-modal-dialog-parent-id")) != null ? _actor$getAttribute3 : "");
  }
  /**
   * Takes an actor element to retrieve its associated Modal instance, opens the modal and sets focus to the first focusable element within that modal.
   * @param actor HTMLElement
   */


  static handleOpenEvent(actor) {
    var context = this.getContextByActorId(actor);
    if (!context) return;
    this.handleOpenState(context, actor);
  }
  /**
   * Takes an actor element to retrieve its associated Modal instance, retrieves the actor that opened the modal, closes the modal, and sets focus back to the actor that opened the modal.
   * @param actor HTMLElement
   */


  static handleCloseEvent(actor) {
    var context = this.getContextByActorId(actor);
    if (!context) return;
    this.closeEvent.detail.actor = actor;
    this.handleCloseState(context);
  }
  /**
   * Closes the active modal dialog when the captured key command satifies the required keyboard name.
   * @param key string
   * @param event KeyboardEvent
   */


  static handleCloseEventByKey(key, event) {
    var _event$key;

    if (((_event$key = event.key) == null ? void 0 : _event$key.toLowerCase()) === key.toLowerCase()) {
      var context = this.getContextByActiveRoot();
      if (!context || !context.canCloseByEscKey) return;
      this.closeEvent.detail.key = key;
      this.handleCloseState(context);
    }
  }
  /**
   * Adds a click event listener on the body element to capture actor elements, process the action from that actor element and channel the actor into either the open event or close event. Adds keyup event listeners to capture the "escape" key and triggers the close event.
   */


  static setGlobalEvents() {
    this.body.addEventListener("click", event => {
      var _target$closest;

      var target = event.target;
      var actor = (_target$closest = target.closest("[data-modal-dialog-id]")) != null ? _target$closest : target;
      var action = Modal.getActionByActor(actor);

      switch (action) {
        case "open":
          event.preventDefault();
          Modal.handleOpenEvent(actor);
          break;

        case "close":
          Modal.handleCloseEvent(actor);
          break;
      }
    });
    addEventListener("keyup", this.handleCloseEventByKey.bind(this, "escape"));
    addEventListener("keyup", this.handleCloseEventByKey.bind(this, "esc"));
    addEventListener("hashchange", event => {
      this.controlByUrlParameters = true;
      this.handleOpenEventByUrl(true);
    });
    addEventListener("load", event => {
      this.controlByUrlParameters = true;
      this.handleOpenEventByUrl(true);
    });
  }
  /**
   * Compares the current window URL hash fragment with any HTML element candidate that contains a matching fragment. If a match is found and the element is elected as an actor, the modal dialog will attempt to open on screen.
   * @param directResponse booelean
   * @returns void
   */


  static handleOpenEventByUrl(directResponse) {
    if (directResponse === void 0) {
      directResponse = false;
    }

    if (!this.controlByUrlParameters) return;
    var candidates = Array.from(document.querySelectorAll("[data-modal-dialog-url-contains]"));
    var patterns = candidates.map(candidate => candidate.getAttribute("data-modal-dialog-url-contains")).filter(pattern => !!pattern);
    var match = patterns.find(pattern => window.location.hash === pattern);
    if (!match) return;
    var actor = candidates.find(candidate => candidate.getAttribute("data-modal-dialog-url-contains") === match && !!candidate.getAttribute("data-modal-dialog-id"));
    if (!actor) return;
    var context = this.getContextByActiveRoot();
    context == null ? void 0 : context.close();

    if (directResponse) {
      requestAnimationFrame(() => {
        actor.focus();
        requestAnimationFrame(() => actor.click());
        addEventListener("modal::open", event => {
          this.controlByUrlParameters = false;
        }, {
          once: true
        });
      });
    }

    addEventListener("modal::close", event => {
      if (!this.controlByUrlParameters) return;
      requestAnimationFrame(() => {
        actor.focus();
        requestAnimationFrame(() => actor.click());
        this.controlByUrlParameters = false;
      });
    }, {
      once: true
    });
    var currentContext = Modal.getContextByActorId(actor);
    if (currentContext) return;
    this.handleOpenEventByActorObserver(actor).catch(error => {
      this.handleOpenEventByActorParentObserver(actor).catch(error => console.debug(error));
    });
  }
  /**
   * Takes an actor and observes it within the viewport. Once captured, the actor will submit a click event and attempt to display the modal dialog on screen.
   * @param actor HTMLElement
   * @returns Promise<void>
   */


  static handleOpenEventByActorObserver(actor) {
    return new Promise((resolve, reject) => {
      var io = new IntersectionObserver(records => {
        var condition = records.find(record => record.isIntersecting);
        if (!condition) return;
        io.disconnect();
        actor.focus();
        requestAnimationFrame(() => actor.click());
        var context = Modal.getContextByActorId(actor);
        !!context ? resolve() : reject({
          message: "A modal dialog context could not be found for the given HTML element",
          actor
        });
      });
      io.observe(actor);
    });
  }
  /**
   * Takes an actor and observes the document body for any childList mutations in an attempt to intercept modal dialog containers to render in the document. Once captured, the container is compared with the actor by it's id and attempts to display a modal dialog on screen.
   * @param actor HTMLElement
   * @returns Promise<void>
   */


  static handleOpenEventByActorParentObserver(actor) {
    return new Promise((resolve, reject) => {
      var mo = new MutationObserver(records => {
        var container = records.map(record => Array.from(record.addedNodes).filter(node => node.nodeType === Node.ELEMENT_NODE).find(element => element.hasAttribute("data-modal-dialog-parent-id"))).find(element => !!element && !!element.getAttribute("data-modal-dialog-parent-id") === !!actor.getAttribute("data-modal-dialog-id"));
        if (!container) return;
        mo.disconnect();
        actor.focus();
        requestAnimationFrame(() => actor.click());
        var context = Modal.getContextByActorId(actor);
        !!context ? resolve() : reject({
          message: "A modal dialog context could not be found for the given HTML element",
          actor
        });
      });
      mo.observe(document.body, {
        childList: true
      });
    });
  }
  /**
   * Adds a blur event to the modal dialog assigning the first focusable element as the next focusable element. Adds a click event to the modal dialog stage area to determine if pointer-device targets the backdrop area and will close the modal if true.
   * @param context Modal
   */


  static setInstanceEvents(context) {
    var template = this.template.get(context);
    if (!template) return;
    var root = this.root.get(context);
    if (!root) return;
    var backdropEvent = (0,Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_7__.createEvent)(window, "modal::backdrop");
    root.addEventListener("click", event => {
      var target = event.target;
      var stage = target.closest(".modal-dialog__stage");

      if (stage !== template.stage && target.closest(".modal-dialog")) {
        this.closeEvent.detail.actor = target;
        Modal.handleCloseState(context);
        dispatchEvent(backdropEvent);
      }
    });
  }
  /**
   * Manages both global events and Modal instance events.
   * @param context Modal
   */


  static manageModalEvents(context, uiBackdrop) {
    if (uiBackdrop) {
      this.setInstanceEvents(context);
    }

    if (!this.eventListenerStatus) {
      this.eventListenerStatus = true;
      this.setGlobalEvents();
    }
  }
  /**
   * Uses a CSS custom property representing a CSS selector to determine which element should be assigned as the presenter for displaying the modal dialog.
   * @param root
   * @returns HTMLElement | null
   */


  static getPresentationElementByContextRootElement(root) {
    var selector = getComputedStyle(root).getPropertyValue("--presentation-selector");
    return selector !== "" ? root.querySelector(selector) : root.querySelector(".modal-dialog__backdrop");
  }
  /**
   * Takes a Modal instance to retrieve the root element, activates the modal on screen, sets focus to the first focusable element.
   * @param context Modal
   */


  static handleOpenState(context, actor) {
    var _root$getAttribute,
        _this = this;

    var root = this.root.get(context);
    if (!root) return;
    var template = this.template.get(context);
    if (!template) return;
    var focus = new Shared_ts_utils_focus_trap__WEBPACK_IMPORTED_MODULE_4__["default"](template.stage);
    if (!focus) return;
    this.focus.set(context, focus);
    this.makeActive(context);
    this.manageInertState();
    focus.on();
    this.addParentIdToActors(focus.focusElements, (_root$getAttribute = root.getAttribute("data-modal-dialog-parent-id")) != null ? _root$getAttribute : "");
    this.makeRootVisible(root).then(() => {
      requestAnimationFrame( /*#__PURE__*/_asyncToGenerator(function* () {
        var firstElement = yield focus.getFirstVisibleFocusElement();

        _this.updateScrollBody();

        firstElement.focus();
        var openActor = actor != null ? actor : document.activeElement;
        Modal.actor.set(context, openActor);
        (0,Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_7__.createEvent)(window, "modal::open");
        Modal.openEvent.detail.root = root;
        Modal.openEvent.detail.actor = openActor;
        Modal.openEvent.detail.focusElement = firstElement;
        dispatchEvent(Modal.openEvent);
      }));
    });
  }
  /**
   * Takes a Modal instance to retrieve the root element and deactivates the modal on screen.
   * @param context Modal
   */


  static handleCloseState(context) {
    var root = this.root.get(context);
    if (!root) return;
    var focus = this.focus.get(context);
    if (!focus) return;
    focus.off();
    var openActor = this.actor.get(context);
    if (!openActor) return;
    this.makeRootInvisible(root).then(() => {
      var modal = this.getContextByActorParentId(openActor);

      if (modal) {
        this.makeActive(modal);
      }

      this.updateFocusStateByActor(openActor);
      this.updateScrollBody();
      this.manageInertState();
      openActor == null ? void 0 : openActor.focus();
      (0,Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_7__.createEvent)(window, "modal::close");
      Modal.closeEvent.detail.root = root;
      Modal.closeEvent.detail.focusElement = openActor;
      dispatchEvent(Modal.closeEvent);
    });
  }
  /**
   * Iterates through all Modal instances, determines the current Modal instance and adds the "modal-dialog--is-active" class to the modal dialog. Any other modal dialog will have the "modal-dialog--is-active" removed.
   * @param context Modal
   */


  static makeActive(context) {
    this.context.forEach(modal => {
      var root = Modal.root.get(modal);
      if (!root) return;
      var action = context === modal ? "add" : "remove";
      root.classList[action]("modal-dialog--is-active");
    });
  }
  /**
   * Determines if the actor communicating with a modal dialog is not related to the same modal dialog. If the condition is met, the actor is set as the open actor.
   * @param context Modal
   * @param actor HTMLElement
   */


  static updateOpenActor(context, actor) {
    if (actor.getAttribute("data-modal-dialog-id") !== actor.getAttribute("data-modal-dialog-parent-id")) {
      this.actor.set(context, actor);
    }
  }
  /**
   * Filters all focusable elements that contain the "data-modal-dialog-id" and assigns the "data-modal-dialog-parent-id" attribute to match the modal dialog id.
   * @param elements Element[]
   * @param id string
   */


  static addParentIdToActors(elements, id) {
    elements.filter(element => element.hasAttribute("data-modal-dialog-id") && !element.hasAttribute("data-modal-dialog-parent-id")).forEach(element => element.setAttribute("data-modal-dialog-parent-id", id));
  }
  /**
   * Takes an actor to retrieve the Modal instance. If any Modal instances are open, retrieve the FocusTrap instance and enable focus trap navigation.
   * @param actor HTMLElement
   */


  static updateFocusStateByActor(actor) {
    var context = this.getContextByActorParentId(actor);

    if (context && this.anyOpenModalsStatus) {
      var focus = this.focus.get(context);
      if (!focus) return;
      focus.on();
    }
  }
  /**
   * Iterates through all of the Modal instances and retrives each root element to determine if the modal dialog is visible.
   * @returns boolean
   */


  static anyOpenModals() {
    Modal.anyOpenModalsStatus = false;
    this.context.forEach(context => {
      var root = Modal.root.get(context);

      if (root && Modal.isRootVisible(root)) {
        Modal.anyOpenModalsStatus = true;
      }
    });
    return Modal.anyOpenModalsStatus;
  }
  /**
   * Applies the "modal-dialog--is-open" class to the body element to disable document scrolling when any modal is open.
   */


  static updateScrollBody() {
    if (this.anyOpenModals()) {
      this.body.classList.add("modal-dialog--is-open");
    } else {
      this.body.classList.remove("modal-dialog--is-open");
    }
  }
  /**
   * Opens the modal
   */


  open() {
    Modal.handleOpenState(this, document.activeElement);
  }
  /**
   * Closes the modal
   */


  close() {
    Modal.handleCloseState(this);
  }
  /**
   * Enables the user to close the active Modal instance by pressing the "escape" key.
   */


}
Modal.context = new Map();
Modal.actor = new WeakMap();
Modal.root = new WeakMap();
Modal.template = new WeakMap();
Modal.focus = new WeakMap();
Modal.openEvent = new CustomEvent("modal-dialog::open", {
  detail: {}
});
Modal.closeEvent = new CustomEvent("modal-dialog::close", {
  detail: {}
});
Modal.body = document.body;
Modal.eventListenerStatus = false;
Modal.anyOpenModalsStatus = false;
Modal.controlByUrlParameters = false;

/***/ }),

/***/ "../../Library/Shared/ts/components/responsive-carousel.ts":
/*!*****************************************************************!*\
  !*** ../../Library/Shared/ts/components/responsive-carousel.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ResponsiveCarousel; }
/* harmony export */ });
/* harmony import */ var Shared_ts_components_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/components/carousel */ "../../Library/Shared/ts/components/carousel.ts");

class ResponsiveCarousel extends Shared_ts_components_carousel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Extends base carousel's functionality by allowing carousel to advance by x-number of steps
   * @param context IResponsiveCarousel
   */
  constructor(context) {
    super(context);
    ResponsiveCarousel.initialize(context);
  }

  static initialize(context) {
    context.watch(currentIndex => {
      ResponsiveCarousel.push(context, "rotation");

      if (context.steps === 1) {
        context.stepIndex = currentIndex;
      }
    });
  }
  /**
   * Takes an IResponsiveCarouselConfig interface and converts key-value pairs into a string representation of the carousel configuration. This configuration replaces the previous configuration on data-carousel-config attribute.
   * @param config IResponsiveCarouselConfig
   */


  setAttributes(config) {
    var container = this.container;

    try {
      container.dataset.carouselConfig = JSON.stringify(config);
    } catch (error) {
      console.warn(error);
    }
  }
  /**
   * Takes an IResponsiveCarouselConfig interface along with an ICarousel interface and processes specific keys to operate using its values
   * @param config IResponsiveCarouselConfig
   * @param context ICarousel
   */


  processAttributes(config, context) {
    if (config.steps) {
      context.steps = config.steps;
    }
  }

  play() {
    if (!this.container) return;
    var context = ResponsiveCarousel.getContext(this.container);
    context.play();
  }

  next() {
    if (!this.container) return;
    var context = ResponsiveCarousel.getContext(this.container);
    var sum = context.countChildren();
    if (sum === undefined) return;
    context.stepIndex += context.steps;

    if (context.stepIndex >= sum) {
      context.stepIndex = 0;
    }

    context.goto(context.stepIndex);
  }

  prev() {
    if (!this.container) return;
    var context = ResponsiveCarousel.getContext(this.container);
    var sum = context.countChildren();
    if (sum === undefined) return;

    if (context.stepIndex === 0) {
      context.stepIndex = sum - context.steps;
      context.goto(context.stepIndex);
      return;
    }

    context.stepIndex -= context.steps;

    if (context.stepIndex < 0) {
      context.stepIndex = 0;
      context.goto(context.stepIndex);
      return;
    }

    context.goto(context.stepIndex);
  }

}

/***/ }),

/***/ "../../Library/Shared/ts/components/status-screen.ts":
/*!***********************************************************!*\
  !*** ../../Library/Shared/ts/components/status-screen.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StatusScreen; }
/* harmony export */ });
/* unused harmony exports initializeGlobalStatusScreen, getStatusScreenOrCreate */
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../Library/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "../../Library/node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Shared/ts/utils/capture-element */ "../../Library/Shared/ts/utils/capture-element.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Library/Shared/ts/utils/html.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





// utils


class StatusScreen {
  /**
   * Represents the HTML scope
   */

  /**
   * Represents the HTMLElement container for the StatusScreen UI
   */
  get element() {
    return new Promise((resolve, reject) => {
      var element = StatusScreen.elementRepository.get(this);
      element ? resolve(element) : reject({
        message: "The HTMLElement for the StatusScreen could not be retrieved under the following scope",
        scope: this.scope
      });
    });
  }
  /**
   * Represents the key-value relationship between the current StatusScreen context and the HTML element container
   */


  /**
   * Presents a UI view to the user that represents the status of a background task and provides the ability to assign the view to states such as; busy, done and problem to represent the appropriate status of the task.
   * @param id string
   * @param scope HTMLElement
   */
  constructor(id, scope) {
    if (id === void 0) {
      id = "default";
    }

    if (scope === void 0) {
      scope = document.body;
    }

    this.scope = void 0;
    this.allowSequenceGenerator = false;
    this.scope = scope;
    var element = StatusScreen.initializeTemplate(id, this);
    StatusScreen.captureElement(element);
    StatusScreen.initializeEvents(element, this);
  }
  /**
   * Represents the custom event dispatcher when the StatusScreen HTMLElement activates the "update" state.
   */


  /**
   * Manages which state method to execute
   * @param element HTMLElement
   */
  static delegateState(element) {
    var _element$getAttribute;

    var state = (_element$getAttribute = element.getAttribute("data-status-screen-state")) == null ? void 0 : _element$getAttribute.toLowerCase();

    switch (state) {
      case "busy":
        this.handleBusyState(element);
        break;

      case "done":
        this.handleDoneState(element);
        break;

      case "problem":
        this.handleProblemState(element);
        break;
    }
  }
  /**
   * Manages the text attributes necessary to animate the output text
   * @param element HTMLElement
   * @param controller HTMLElement
   * @returns void
   */


  static controlTextAttributes(element, controller) {
    var _output$textContent;

    var output = element.querySelector("output");
    if (!output) return;
    var text = (_output$textContent = output.textContent) == null ? void 0 : _output$textContent.trim();

    if (!text) {
      output.textContent = controller.getAttribute("data-status-screen-input");
      return;
    }

    controller.setAttribute("data-status-screen-output", text);
    element.classList.add("status-screen--receive-text-input");
    element.dispatchEvent(this.updateEvent);
  }
  /**
   * Manages the output text
   * @param element HTMLElement
   * @returns void
   */


  static controlOutputText(element) {
    var controller = element.querySelector(".status-screen__output");
    var output = element.querySelector("output");
    if (!output || !controller) return;
    output.textContent = controller.getAttribute("data-status-screen-input");
    element.classList.remove("status-screen--update-output", "status-screen--receive-text-input");
  }
  /**
   * Establishes a mutation observer on the status screen element and manages the visibility state, the task-flow state and the output text
   * @param element HTMLElement
   */


  static captureElement(element) {
    var captureElement = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_4__["default"](element);
    captureElement.subscribe("attributes", record => {
      if (record.attributeName === "class" && element.classList.contains("status-screen--update-output")) {
        this.controlOutputText(element);
      }

      if (record.attributeName === "data-status-screen-input") {
        this.controlTextAttributes(element, record.target);
      }

      if (record.attributeName === "data-status-screen-state") {
        this.delegateState(element);
      }

      if (record.attributeName === "hidden") {
        element.hasAttribute("hidden") ? this.handleCloseState(element) : this.handleOpenState(element);
      }
    });
  }
  /**
   * Initializes all of the events necessary for the status screen UI to operate
   * @param element HTMLElement
   */


  static initializeEvents(element, context) {
    var _element$querySelecto, _element$querySelecto2, _element$querySelecto3;

    (_element$querySelecto = element.querySelector(".status-screen__screen")) == null ? void 0 : _element$querySelecto.addEventListener("transitionend", event => {
      if (!element.classList.contains("status-screen--is-hidden")) return;
      element.setAttribute("hidden", "true");
    });
    (_element$querySelecto2 = element.querySelector(".status-screen__output")) == null ? void 0 : _element$querySelecto2.addEventListener("animationend", event => {
      var _event$animationName;

      if (((_event$animationName = event.animationName) == null ? void 0 : _event$animationName.toLowerCase()) === "status-screen-fade-translate-text-out") {
        element.classList.add("status-screen--update-output");
      }
    });
    addEventListener("keyup", event => {
      var _event$key;

      var escape = ((_event$key = event.key) == null ? void 0 : _event$key.toLowerCase()) === "escape";
      if (!escape || !this.closeOnCondition(element)) return;
      context.close();
    });
    element.addEventListener("click", event => {
      if (!this.closeOnCondition(element)) return;
      context.close();
    });
    (_element$querySelecto3 = element.querySelector(".status-screen__close")) == null ? void 0 : _element$querySelecto3.addEventListener("click", event => {
      if (!this.closeOnCondition(element)) return;
      context.close();
    });
  }
  /**
   * Determines if the status screen UI is in the problem or done state
   * @param element HTMLElement
   * @returns boolean
   */


  static closeOnCondition(element) {
    var _element$getAttribute2;

    var state = (_element$getAttribute2 = element.getAttribute("data-status-screen-state")) == null ? void 0 : _element$getAttribute2.toLowerCase();
    return state === "problem" || state === "done";
  }
  /**
   * Updates the status screen UI to render the open state view
   * @param element HTMLElement
   */


  static handleOpenState(element) {
    element.classList.remove("status-screen--is-hidden");
    element.dispatchEvent(this.openEvent);
  }
  /**
   * Updates the status screen UI to render the close state view
   * @param element HTMLElement
   */


  static handleCloseState(element) {
    element.classList.add("status-screen--is-hidden");
    element.dispatchEvent(this.closeEvent);
  }
  /**
   * Updates the status screen UI to render the busy state view
   * @param element HTMLElement
   */


  static handleBusyState(element) {
    var _element$querySelecto4;

    element.classList.remove("status-screen--is-hidden", "status-screen--is-done", "status-screen--is-problem");
    element.classList.add("status-screen--is-busy");
    (_element$querySelecto4 = element.querySelector(".status-screen__close")) == null ? void 0 : _element$querySelecto4.setAttribute("disabled", "true");
    element.dispatchEvent(this.busyEvent);
  }
  /**
   * Updates the status screen UI to render the done state view
   * @param element HTMLElement
   */


  static handleDoneState(element) {
    var _element$querySelecto5;

    element.classList.remove("status-screen--is-hidden", "status-screen--is-busy", "status-screen--is-problem");
    element.classList.add("status-screen--is-done");
    (_element$querySelecto5 = element.querySelector(".status-screen__close")) == null ? void 0 : _element$querySelecto5.removeAttribute("disabled");
    element.dispatchEvent(this.doneEvent);
  }
  /**
   * Updates the status screen UI to render the problem state view
   * @param element HTMLElement
   */


  static handleProblemState(element) {
    var _element$querySelecto6;

    element.classList.remove("status-screen--is-hidden", "status-screen--is-busy", "status-screen--is-done");
    element.classList.add("status-screen--is-problem");
    (_element$querySelecto6 = element.querySelector(".status-screen__close")) == null ? void 0 : _element$querySelecto6.removeAttribute("disabled");
    element.dispatchEvent(this.problemEvent);
  }
  /**
   * Returns the HTML element
   * @param id string
   * @returns HTMLElement | null
   */


  static getElementById(id) {
    return document.getElementById(id);
  }
  /**
   * Attempts to retrieve the HTML element that is associated with the StatusScreen context
   * @param context StatusScreen
   * @returns HTMLElement | null | undefined
   */


  static getElementByContext(context) {
    return this.elementRepository.get(context);
  }
  /**
   * Elects an HTML template as the status screen Ui
   * @param id string
   * @param context StatusScreen
   * @returns HTMLElement
   */


  static initializeTemplate(id, context) {
    var element = this.getElementByContext(context);
    if (element) return element;
    element = this.getElementById(id);

    if (!element) {
      var template = this.createTemplate(id);
      context.scope.appendChild(template);
      element = this.getElementById(id);
    }

    if (element) {
      this.elementRepository.set(context, element);
      this.contextRepository.set(element, context);
    }

    return element;
  }
  /**
   * Creates an HTML template of the status screen UI. The document fragment of that template is returned.
   * @param id string
   * @returns DocumentFragment
   */


  static createTemplate(id) {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_5__.renderTemplate)("<div id=\"" + id + "\" class=\"status-screen status-screen--is-hidden status-screen--" + id + "\" hidden>\n            <div class=\"status-screen__screen\">\n                <div class=\"status-screen__status\">\n                    <div class=\"status-screen__status-positive\">\n                        <div class=\"status-screen__circle-icon\">\n                            <svg viewBox=\"0 0 52 52\"><circle cx=\"26\" cy=\"26\" r=\"25\"></circle><path d=\"M14.1 27.2l7.1 7.2 16.7-16.8\"></path></svg>\n                        </div>\n                    </div>\n                    <div class=\"status-screen__status-negative\">\n                        <div class=\"status-screen__cross\"></div>\n                    </div>\n                </div>\n                <div class=\"status-screen__output\" data-status-screen-output=\"\">\n                    <output role=\"status\"></output>\n                </div>\n            </div>\n            <button type=\"button\" class=\"status-screen__close status-screen__cross\" aria-label=\"Close\"></button>\n        </div>");
  }
  /**
   * Reports a debug-error to the developer
   * @param message string
   */


  static reportUIDebug(message) {
    console.debug({
      message,
      for: "StatusScreen Api"
    });
  }
  /**
   * Determines whether the sequence generator should resume or pause.
   */


  /**
   * Assigns a custom CSS class name to the element.
   * @param className string
   * @returns void
   */
  addCSSClass(className) {
    var element = StatusScreen.getElementByContext(this);
    if (!element) return;
    element.classList.add(className);
  }
  /**
   * Updates the text in the status screen UI
   * @param text string
   * @returns void
   */


  update(text) {
    var element = StatusScreen.getElementByContext(this);
    if (!element) return;

    if (!text) {
      return StatusScreen.reportUIDebug("A text message must be provided when calling the 'update' method so that the status may be accessible to the user. Aborting task.");
    }

    var controller = element.querySelector("[data-status-screen-output]");
    if (!controller) return;
    controller.setAttribute("data-status-screen-input", text);
  }
  /**
   * Updates the StatusScreen text using a sequence object where each record contains the text message and the interval that represents how long the message will be displayed for.
   * @param sequence IStatusScreenUpdateSequenceRecord[]
   */


  updateSequence(sequence) {
    var _this = this;

    return _asyncToGenerator(function* () {
      return new Promise((resolve, reject) => {
        var generator = _this.generateSequence(sequence);

        var getNextMessage = () => {
          if (!_this.allowSequenceGenerator) return reject({
            message: "The sequence generator was interrupted",
            sequence
          });
          var message = generator.next();
          message.done ? resolve() : message.value.then(getNextMessage);
        };

        _this.allowSequenceGenerator = true;
        getNextMessage();
      });
    })();
  }

  *generateSequence(sequence) {
    var context = this;

    var _loop = function* _loop(record) {
      context.update(record.message);
      yield new Promise((resolve, reject) => {
        var _record$interval;

        return setTimeout(() => {
          return context.allowSequenceGenerator ? resolve(null) : reject({
            message: "The sequence generator was interrupted",
            sequence
          });
        }, (_record$interval = record.interval) != null ? _record$interval : 5000);
      });
    };

    for (var record of sequence) {
      yield* _loop(record);
    }
  }
  /**
   * Renders the status screen UI visible in the viewport
   * @returns void
   */


  open() {
    var _element$textContent;

    var element = StatusScreen.getElementByContext(this);
    if (!element) return;
    var text = (_element$textContent = element.textContent) == null ? void 0 : _element$textContent.trim();

    if (!text) {
      return StatusScreen.reportUIDebug("An output element must contain a text node when calling the 'open' method so that the status may be accessible to the user. Aborting task.");
    }

    var state = element.hasAttribute("data-status-screen-state");

    if (!state) {
      return StatusScreen.reportUIDebug("A state must be assigned when calling the 'open' method. Aborting task.");
    }

    element.removeAttribute("hidden");
  }
  /**
   * Renders the status screen UI invisible in the viewport
   * @returns void
   */


  close() {
    var element = StatusScreen.getElementByContext(this);
    if (!element) return;
    element.classList.add("status-screen--is-hidden");
    this.allowSequenceGenerator = false;
  }
  /**
   * Assigns a "busy" state to the status screen UI and provides a status message to inform the user of the reason
   * @param text string
   * @returns void
   */


  busy(text) {
    var element = StatusScreen.getElementByContext(this);
    if (!element) return;

    if (!text) {
      return StatusScreen.reportUIDebug("A text message must be provided when calling the 'busy' method so that the status may be accessible to the user. Aborting task.");
    }

    element.setAttribute("data-status-screen-state", "busy");
    this.update(text);
    requestAnimationFrame(this.open.bind(this));
    this.allowSequenceGenerator = false;
  }
  /**
   * Assigns a "done" state to the status screen UI and provides a status message to inform the user of the reason
   * @param text string
   * @returns void
   */


  done(text) {
    var element = StatusScreen.getElementByContext(this);
    if (!element) return;

    if (!text) {
      return StatusScreen.reportUIDebug("A text message must be provided when calling the 'done' method so that the status may be accessible to the user. Aborting task.");
    }

    element.setAttribute("data-status-screen-state", "done");
    this.update(text);
    requestAnimationFrame(this.open.bind(this));
    this.allowSequenceGenerator = false;
  }
  /**
   * Assigns a "problem" state to the status screen UI and provides a status message to inform the user of the reason
   * @param text string
   * @returns void
   */


  problem(text) {
    var element = StatusScreen.getElementByContext(this);
    if (!element) return;

    if (!text) {
      return StatusScreen.reportUIDebug("A text message must be provided when calling the 'problem' method so that the status may be accessible to the user. Aborting task.");
    }

    element.setAttribute("data-status-screen-state", "problem");
    this.update(text);
    requestAnimationFrame(this.open.bind(this));
    this.allowSequenceGenerator = false;
  }

}
StatusScreen.elementRepository = new WeakMap();
StatusScreen.contextRepository = new WeakMap();
StatusScreen.updateEvent = new CustomEvent("update", {});
StatusScreen.openEvent = new CustomEvent("open", {});
StatusScreen.closeEvent = new CustomEvent("close", {});
StatusScreen.busyEvent = new CustomEvent("busy", {});
StatusScreen.doneEvent = new CustomEvent("done", {});
StatusScreen.problemEvent = new CustomEvent("problem", {});

/**
 * Establishes global access to the default StatusScreen Api
 * @returns StatusScreen
 */
var initializeGlobalStatusScreen = () => {
  var statusScreen = new StatusScreen();
  window.statusScreen = statusScreen;
  return statusScreen;
};
/**
 * Establishes a global repository to scoped StatusScreen repositories
 */

var getStatusScreenOrCreate = function getStatusScreenOrCreate(id, scope) {
  if (scope === void 0) {
    scope = document.body;
  }

  var repositoryExists = ("statusScreenRepository" in window);

  if (!repositoryExists) {
    window.statusScreenRepository = new WeakMap();
    window.statusScreenRepository.set(document.body, new StatusScreen());
  }

  var statusScreenExists = window.statusScreenRepository.get(scope);
  if (statusScreenExists) return statusScreenExists;
  var statusScreen = new StatusScreen(id, scope);
  window.statusScreenRepository.set(scope, statusScreen);
  return statusScreen;
};

/***/ }),

/***/ "../../Library/Shared/ts/components/tooltip.ts":
/*!*****************************************************!*\
  !*** ../../Library/Shared/ts/components/tooltip.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ToolTip; }
/* harmony export */ });
/* harmony import */ var Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/observers/event */ "../../Library/Shared/ts/observers/event.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Library/Shared/ts/utils/html.ts");


class ToolTip {
  // Represents the current target element
  // Represents the list of observable elements
  // Represents the visible state class name

  /**
   * Establishes functionality to add a visible state class to a target element that is either hovered over or focused and removes the visible state class from the target element when it's hovered out or unfocused.
   * @param name string
   * @param elements HTMLList
   */
  constructor(elements, name) {
    if (elements === void 0) {
      elements = document.querySelectorAll(".tooltip");
    }

    if (name === void 0) {
      name = "tooltip--is-visible";
    }

    this.element = void 0;
    this.elements = void 0;
    this.name = void 0;
    this.name = name;
    this.elements = elements;
    this.element = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_1__.enumerateElements)(this.elements)[0];
    ToolTip.setVisibleEvents(this);
    ToolTip.setInvisibleEvents(this);
  }
  /**
   * Adds the visible state class to the current element.
   */


  makeVisible() {
    var _this$element;

    (_this$element = this.element) == null ? void 0 : _this$element.classList.add(this.name);
  }
  /**
   * Removes the visible state class from the current element.
   */


  makeInvisible() {
    var _this$element2;

    (_this$element2 = this.element) == null ? void 0 : _this$element2.classList.remove(this.name);
  }
  /**
   * Updates the element property to either the Event.target as an HTMLElement or defaults to the previous HTMLElement.
   * @param self ToolTip
   * @param event Event
   */


  static setElementToEventTargetOrDefault(self, event) {
    var _ref;

    self.element = (_ref = event.target) != null ? _ref : self.element;
  }
  /**
   * This event listener callback attempts to update the element property with the Event.target and then adds the visible state class to the element target.
   * @param self ToolTip
   * @param event Event
   */


  static processVisibleEvents(self, event) {
    ToolTip.setElementToEventTargetOrDefault(self, event);
    self.makeVisible();
  }
  /**
   * This event listener callback attempts to update the element property with the Event.target and then removes the visible state class from the element target.
   * @param self ToolTip
   * @param event Event
   */


  static processInvisibleEvents(self, event) {
    ToolTip.setElementToEventTargetOrDefault(self, event);
    self.makeInvisible();
  }
  /**
   * Registers the "mouseenter" and "focus" event listeners to add the visible state class to the target element.
   * @param self ToolTip
   */


  static setVisibleEvents(self) {
    (0,Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_0__.listen)(self.elements, this.processVisibleEvents.bind(self, self), "mouseenter");
    (0,Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_0__.listen)(self.elements, this.processVisibleEvents.bind(self, self), "focus");
  }
  /**
   * Registers the "mouseleave", "listen" and "keydown" event listeners to remove the visible state class from the target element. The default keyboard command to trigger is the "escape" key.
   * @param self ToolTip
   */


  static setInvisibleEvents(self) {
    (0,Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_0__.listen)(self.elements, this.processInvisibleEvents.bind(self, self), "mouseleave");
    (0,Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_0__.listen)(self.elements, this.processInvisibleEvents.bind(self, self), "blur");
    addEventListener("keydown", self.makeInvisibleByKey.bind(self, "escape"));
    addEventListener("keydown", self.makeInvisibleByKey.bind(self, "esc"));
  }
  /**
   * Removes the visible state class from the target element when the captured key command satifies the required keyboard name.
   * @param key string
   * @param event KeyboardEvent
   */


  makeInvisibleByKey(key, event) {
    var _event$key;

    if (((_event$key = event.key) == null ? void 0 : _event$key.toLowerCase()) === key.toLowerCase()) {
      this.makeInvisible();
    }
  }

}

/***/ }),

/***/ "../../Library/Shared/ts/components/vimeo-carousel.ts":
/*!************************************************************!*\
  !*** ../../Library/Shared/ts/components/vimeo-carousel.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VimeoCarousel; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../Library/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../Library/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../../Library/node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../../Library/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var Shared_ts_utils_vimeo_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Shared/ts/utils/vimeo-manager */ "../../Library/Shared/ts/utils/vimeo-manager.ts");
/* harmony import */ var Shared_ts_components_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Shared/ts/components/carousel */ "../../Library/Shared/ts/components/carousel.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Library/Shared/ts/utils/html.ts");









class VimeoCarousel extends Shared_ts_components_carousel__WEBPACK_IMPORTED_MODULE_7__["default"] {
  /**
   * Represents the VimeoManager instance
   */

  /**
   * Represents the relationship between the IVimeoCarousel interface and it's connected IVimeoCarouselRepository interface
   */

  /**
   * Represents the endpoint URL for the Vimeo Player
   */

  /**
   * Extends the Carousel's base functionality by allowing Vimeo background video to automatically advance to the next slide once the video finishes.
   * @param elements HTMLList
   */
  constructor(context) {
    super(context);
    VimeoCarousel.initialize(context);
  }
  /**
   * Takes the IVimeoCarousel interface and creates a connection to a new Vimeo Repository interface and then establishes a watch operation for each rotation
   * @param context VimeoCarousel
   */


  static initialize(context) {
    VimeoCarousel.connectCarouselApiToVimeoRepository(context);
    VimeoCarousel.createWatch(context);
  }
  /**
   * Takes the IVimeoCarousel interface and sets it as a key to create a new Vimeo Repository interface
   * @param context IVimeoCarousel
   */


  static connectCarouselApiToVimeoRepository(context) {
    this.vimeoRepository.set(context, {
      isInitialized: false,
      isIframeProcessed: new WeakMap(),
      isAutoplay: false
    });
  }
  /**
   * Takes the IVimeoCarousel interface context and establishes a watch callback for each rotation. For each rotation, the previous and next slide's Vimeo iframe should pause while the current slide should determine if there is a Vimeo iframe element that can be interacted with.
   * @param context IVimeoCarousel
   */


  static createWatch(context) {
    var repo = VimeoCarousel.vimeoRepository.get(context);
    if (!repo) return;
    context.watch((currentIndex, previousIndex, nextIndex) => {
      var _context$children, _context$children2, _context$children3;

      VimeoCarousel.push(context, "rotation");
      var previousSlide = (_context$children = context.children) == null ? void 0 : _context$children.item(previousIndex);
      if (!previousSlide) return;
      VimeoCarousel.pauseVimeo(previousSlide).catch(error => console.info(error));
      var currentSlide = (_context$children2 = context.children) == null ? void 0 : _context$children2.item(currentIndex);
      if (!currentSlide) return;
      VimeoCarousel.processPosterImage(currentSlide).then(() => VimeoCarousel.initializeCarouselVimeoApi(context, repo)).catch(error => console.info(error));
      VimeoCarousel.processCurrentVimeoIframe(currentSlide, context, repo).catch(() => VimeoCarousel.initializeCarouselVimeoApi(context, repo));
      var nextSlide = (_context$children3 = context.children) == null ? void 0 : _context$children3.item(nextIndex);
      if (!nextSlide) return;
      VimeoCarousel.processPosterImage(nextSlide).catch(error => console.info(error));
      VimeoCarousel.pauseVimeo(nextSlide).catch(error => console.info(error));
    });
  }
  /**
   * If the Vimeo iframe has not been processed yet, initialize the Vimeo iframe and determine if the Vimeo Carousel is initialized. Otherwise, access the current Vimeo iframe and process playback events. The IVimeoCarousel interface will be returned through the Promise resolve state.
   * @param slide Element
   * @param context IVimeoCarousel
   * @param repo IVimeoCarouselRepository
   * @returns Promise<IVimeoCarousel>
   */


  static processCurrentVimeoIframe(slide, context, repo) {
    return new Promise((resolve, reject) => {
      if (!repo.isIframeProcessed.has(slide)) {
        repo.isIframeProcessed.set(slide, true);
        VimeoCarousel.initializeVimeoIframe(slide, context, repo).then(context => {
          VimeoCarousel.manageAutoPlayEvent(slide, context, repo);

          if (!repo.isInitialized) {
            VimeoCarousel.initializeCarouselVimeoApi(context, repo);
            resolve(context);
          }
        }).catch(error => {
          VimeoCarousel.fallbackAutoPlayEvent(context);
          reject(error);
        });
      } else {
        VimeoCarousel.getVimeoIframeOrCreate(slide).then(iframe => {
          VimeoCarousel.setVimeoAutoplayStatus(iframe, context, repo);
          VimeoCarousel.manageAutoPlayEvent(slide, context, repo);
        }).catch(error => reject(error));
      }
    });
  }
  /**
   * Takes a placeholder element and attempts to retrieve the 9-digit Vimeo Id by either the `data-vimeo-carousel-id`, `data-vimeo-id`. If obtainable, the 9-digit Vimeo Id is returned; otherwise, null is returned.
   * @param placeholder Element
   * @returns string | null
   */


  static getVimeoIdByPlaceholder(placeholder) {
    if (placeholder.hasAttribute("data-vimeo-carousel-id")) {
      var _placeholder$getAttri, _placeholder$getAttri2;

      var match = (_placeholder$getAttri = (_placeholder$getAttri2 = placeholder.getAttribute("data-vimeo-carousel-id")) == null ? void 0 : _placeholder$getAttri2.match(/^\d{9}/i)) != null ? _placeholder$getAttri : [];

      if (match.length === 1) {
        return match.shift();
      }
    }

    if (placeholder.hasAttribute("data-vimeo-id")) {
      var _placeholder$getAttri3;

      return this.vimeoManager.getIdByUrl((_placeholder$getAttri3 = placeholder.getAttribute("data-vimeo-id")) != null ? _placeholder$getAttri3 : "");
    }

    if (placeholder.hasAttribute("data-vimeo-url")) {
      var _placeholder$getAttri4;

      return this.vimeoManager.getIdByUrl((_placeholder$getAttri4 = placeholder.getAttribute("data-vimeo-url")) != null ? _placeholder$getAttri4 : "");
    }
  }
  /**
   * Takes a slide element and returns the Vimeo placeholder element.
   * @param slide Element
   * @returns Element
   */


  static getVimeoPlaceholderBySlide(slide) {
    var _ref, _slide$querySelector;

    return (_ref = (_slide$querySelector = slide.querySelector("[data-vimeo-carousel-id]")) != null ? _slide$querySelector : slide.querySelector("[data-vimeo-id]")) != null ? _ref : slide.querySelector("[data-vimeo-url]");
  }
  /**
   * Takes a slide element and determines if a poster image element hasn't been inserted into the document. If determined, a new image element will be created and referenced to the poster thumbnail image that is associated with the Vimeo Id. The created image will then be inserted into the document next to the Vimeo Iframe element.
   * @param slide Element
   */


  static processPosterImage(slide) {
    return new Promise((resolve, reject) => {
      var _this$vimeoManager$ge;

      var placeholder = this.getVimeoPlaceholderBySlide(slide);

      if (!placeholder) {
        return reject({
          message: "The placeholder for the current slide could not be obtained.",
          slide
        });
      }

      var iframe = slide.querySelector("iframe");
      var id = (_this$vimeoManager$ge = this.vimeoManager.getIdByIframe(iframe)) != null ? _this$vimeoManager$ge : this.getVimeoIdByPlaceholder(placeholder);

      if (!id) {
        return reject({
          message: "The Vimeo Id for the current slide could not be obtained.",
          slide
        });
      }

      var coords = slide.getBoundingClientRect();
      this.vimeoManager.generatePosterImage(id, {
        width: Math.ceil(coords.width).toString(),
        height: Math.ceil(coords.height).toString()
      }).then(src => {
        var image = slide.querySelector("img");

        if (image) {
          return reject({
            message: "A poster image for the current slide already exists.",
            slide,
            image
          });
        }

        var img = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_8__.createElement)("img", {
          src,
          alt: ""
        });

        switch (true) {
          case (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_8__.elementExists)(iframe):
            iframe.insertAdjacentElement("beforebegin", img);
            break;

          case (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_8__.elementExists)(placeholder):
            placeholder.insertAdjacentElement("afterbegin", img);
            break;
        }

        img.onload = event => resolve();

        img.onerror = event => reject(event);
      }).catch(error => reject({
        message: "The poster image could not be obtained for Vimeo Id " + id,
        slide
      }));
    });
  }
  /**
   * Enables the autoplay status and attempts to play the current Vimeo iframe if the Vimeo iframe is a background video.
   * @param slide Element
   * @param context IVimeoCarousel
   * @param repo IVimeoCarouselRepository
   */


  static manageAutoPlayEvent(slide, context, repo) {
    if (repo.isAutoplay) {
      context.setAuto(true);
      VimeoCarousel.playVimeo(slide).catch(error => VimeoCarousel.fallbackAutoPlayEvent(context));
    }
  }
  /**
   * Determines if the Slide auto play mode is enabled and invokes the play method while persisting the current index.
   * @param context IVimeoCarousel
   */


  static fallbackAutoPlayEvent(context) {
    if (context.isAuto()) {
      context.play(true);
    }
  }
  /**
   * Fetches the Vimeo iframe element along with the Vimeo Player and determines if the Vimeo iframe contains a background video; then, it processes the Vimeo Player event listeners. If a Vimeo iframe element could not be found, attempt to determine if a Vimeo iframe element will be available through the placeholder element. The IVimeoCarousel interface object will be returned through the Promise resolve state. Through the Promise reject state, an error response will be logged if the Vimeo iframe could not be loaded or if there is no placeholder for a Vimeo iframe element.
   * @param slide Element
   * @param context IVimeoCarousel
   * @returns Promise<IVimeoCarousel>
   */


  static initializeVimeoIframe(slide, context, repo) {
    return new Promise((resolve, reject) => {
      VimeoCarousel.getVimeoIframeOrCreate(slide).then(iframe => {
        context.pause();
        VimeoCarousel.getVimeoPlayer(iframe).then(player => {
          VimeoCarousel.setVimeoAutoplayStatus(iframe, context, repo);
          VimeoCarousel.processVimeoPlayerEvent(player, context, repo);
        });
        resolve(context);

        iframe.onerror = () => reject({
          message: "Vimeo iframe initialization failure",
          slide: slide
        });
      }).catch(error => {
        VimeoCarousel.processPlaceholder(slide, context, repo);
        reject(error);
      });
    });
  }
  /**
   * Creates a new Vimeo Player instance using the placeholder element [data-vimeo-id] attribute along with the element id. Afterwards, processes the Vimeo autoplay status and events.
   * @param slide Element
   * @param context IVimeoCarousel
   * @param repo IVimeoCarouselRepository
   */


  static processPlaceholder(slide, context, repo) {
    var placeholder = this.getVimeoPlaceholderBySlide(slide);

    if (placeholder && (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_8__.elementExists)(placeholder)) {
      if (placeholder.hasAttribute("data-vimeo-id") || placeholder.hasAttribute("data-vimeo-url")) {
        var _this$vimeoManager$ge2, _placeholder$getAttri5, _placeholder$getAttri6;

        var elementId = placeholder.id;
        var vimeoId = (_this$vimeoManager$ge2 = this.vimeoManager.getIdByUrl((_placeholder$getAttri5 = placeholder.getAttribute("data-vimeo-id")) != null ? _placeholder$getAttri5 : "")) != null ? _this$vimeoManager$ge2 : this.vimeoManager.getIdByUrl((_placeholder$getAttri6 = placeholder.getAttribute("data-vimeo-url")) != null ? _placeholder$getAttri6 : "");
        if (!vimeoId) return;
        var player = VimeoCarousel.vimeoManager.createPlayerById(elementId, vimeoId);
        VimeoCarousel.setVimeoAutoplayStatus(placeholder, context, repo);
        VimeoCarousel.processVimeoPlayerEvent(player, context, repo);
      }
    }
  }
  /**
   * Takes an element, either a placeholder element or a Vimeo iframe element, and determines if the Vimeo Player is a background video.
   * @param element Element
   * @param context IVimeoCarousel
   * @param repo IVimeoCarouselRepository
   */


  static setVimeoAutoplayStatus(element, context, repo) {
    if (element.hasAttribute("src")) {
      var src = element.getAttribute("src");
      repo.isAutoplay = src != null && src.match(/(autoplay|background)=1/g) ? true : false;
      return;
    }

    if (element.hasAttribute("data-vimeo-background")) {
      var attr = element.getAttribute("data-vimeo-background");
      repo.isAutoplay = attr != null && attr.match("true") ? true : false;
      return;
    }

    repo.isAutoplay = false;
  }
  /**
   * Takes the Vimeo Player and adds the "ended" event listener. When this event fires, access the next slide through the IVimeoCarousel interface object and attempt to restart the Vimeo iframe element. If a Vimeo iframe element is within the next slide and the Slide is in autoplay mode, advance the Slide by one; otherwise, if the Slide is in autoplay mode, enable autoplay.
   * @param player Player
   * @param context IVimeoCarousel
   * @param repo IVimeoCarouselRepository
   */


  static processVimeoPlayerEvent(player, context, repo) {
    player.on("play", data => {
      if (context.isAuto()) {
        context.pause();
        context.setAuto(true);
      }
    });
    player.on("ended", data => {
      var _context$children4, _context$nextIndex;

      var nextSlide = (_context$children4 = context.children) == null ? void 0 : _context$children4.item((_context$nextIndex = context.nextIndex()) != null ? _context$nextIndex : -1);
      if (!nextSlide) return;
      VimeoCarousel.restartVimeo(nextSlide).then(() => {
        if (context.isAuto()) {
          context.next();
        }
      }).catch(() => {
        if (context.isAuto()) {
          context.play();
        }
      });
    });
  }
  /**
   * Takes the IVimeoCarousel interface object along with it's connected repository. The repository's initialization status is set to true and the slide's root element receives the "slide--ready-for-vimeo" CSS class name.
   * @param context IVimeoCarousel
   * @param repo IVimeoCarouselRepository
   */


  static initializeCarouselVimeoApi(context, repo) {
    if (!repo.isInitialized) {
      var _context$container;

      repo.isInitialized = true;
      (_context$container = context.container) == null ? void 0 : _context$container.classList.add("slide--ready-for-vimeo");
    }
  }
  /**
   * Takes a slide element and returns the Vimeo iframe element. Either the existing Vimeo iframe element will be returned or a new Vimeo iframe element will be created. The Vimeo iframe element will be returned through the Promise resolve state. Through the Promise reject state, an error response will be logged either when the Vimeo iframe element could not be created or when the placeholder doesn't contain the [data-vimeo-carousel-id] attribute.
   * @param slide Element
   * @returns Promise<HTMLIFrameElement>
   */


  static getVimeoIframeOrCreate(slide) {
    return new Promise((resolve, reject) => {
      VimeoCarousel.getVimeoIframe(slide).then(iframe => resolve(iframe)).catch(error => {
        var placeholder = slide.querySelector("[data-vimeo-carousel-id]");

        if (placeholder && (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_8__.elementExists)(placeholder)) {
          VimeoCarousel.createIframe(placeholder).then(iframe => {
            VimeoCarousel.setIframeByPlaceholder(placeholder, iframe);
            resolve(iframe);
          }).catch(error => reject("A Vimeo iframe could not be created. Reason: " + error));
        } else {
          reject({
            message: "[data-vimeo-carousel-id] was not found within the current slide",
            slide: slide
          });
        }
      });
    });
  }
  /**
   * Takes a slide element and returns a Vimeo iframe element if the element exists.
   * @param slide Element
   * @returns Promise<HTMLIFrameElement>
   */


  static getVimeoIframe(slide) {
    return new Promise((resolve, reject) => {
      var iframe = slide.querySelector(VimeoCarousel.vimeoPlayerIframeEndpoint);
      (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_8__.elementExists)(iframe) ? resolve(iframe) : reject({
        message: "Vimeo iframe element was not found within the current slide",
        slide: slide
      });
    });
  }
  /**
   * Takes a Vimeo iframe element and returns it's connected player either from the Vimeo Player WeakMap repository or by new creation. The Vimeo Player is returned through the Promise resolve state. Through the Promise reject state, an error response, indicating the Vimeo Player could not be created, will be returned.
   * @param iframe HTMLIFrameElement
   * @returns Promise<Player>
   */


  static getVimeoPlayer(iframe) {
    return new Promise((resolve, reject) => {
      var _VimeoCarousel$vimeoM;

      var player = (_VimeoCarousel$vimeoM = VimeoCarousel.vimeoManager.getPlayerByIframe(iframe)) != null ? _VimeoCarousel$vimeoM : VimeoCarousel.vimeoManager.createPlayerByIframe(iframe);

      if (player) {
        resolve(player);
      } else {
        reject("A Vimeo Player instance could not be created.");
      }
    });
  }
  /**
   * Takes a slide element and attempts to play a Vimeo video. If the Vimeo iframe is found, the video will restart before it plays. The Player will be returned through the Promise resolve state. Through the Promise reject state, the error response will be returned either when the Vimeo video could not be restarted or when the Vimeo video could not play.
   * @param slide
   * @returns Promise<Player>
   */


  static playVimeo(slide) {
    return new Promise((resolve, reject) => {
      VimeoCarousel.restartVimeo(slide).then(player => {
        player.play().then(() => resolve(player)).catch(error => reject(error));
      }).catch(error => reject(error));
    });
  }
  /**
   * Takes a slide element and attempts to restart a Vimeo video. The Player will be returned through the Promise resolve state. Through the Promise reject state, an error response will be returned either when the Vimeo iframe element could not be returned, when the Vimeo Player could not be returned or when the Vimeo video could not be restarted.
   * @param slide Element
   * @returns Promise<Player>
   */


  static restartVimeo(slide) {
    return new Promise((resolve, reject) => {
      VimeoCarousel.getVimeoIframeOrCreate(slide).then(iframe => {
        VimeoCarousel.getVimeoPlayer(iframe).then(player => {
          player.setCurrentTime(0).catch(error => reject(error));
          resolve(player);
        }).catch(error => reject(error));
      }).catch(error => reject(error));
    });
  }
  /**
   * Takes a slide element and attempts to pause a Vimeo video. If the Vimeo iframe is found, the video will restart before it pauses. The Player will be returned through the Promise resolve state. Through the Promise reject state, an error response will be returned either when the Vimeo video could not be restarted or when the Vimeo video could not be paused.
   * @param slide HTMLElement
   * @returns Promise<Player>
   */


  static pauseVimeo(slide) {
    return new Promise((resolve, reject) => {
      this.restartVimeo(slide).then(player => {
        player.pause().catch(error => reject(error));
        resolve(player);
      }).catch(error => reject(error));
    });
  }
  /**
   * Create a method that takes a placeholder element with the [data-vimeo-carousel-id] attribute and creates a new Vimeo iframe element and Vimeo Player object using an Vimeo Id number extraction. The Vimeo iframe element is returned through the Promise resolve state. Through the Promise reject state, an error response is logged when the Vimeo iframe element could not be created.
   * @param element HTMLElement
   * @returns Promise<HTMLIFrameElement>
   */


  static createIframe(element) {
    return new Promise((resolve, reject) => {
      var _element$getAttribute;

      var id = (_element$getAttribute = element.getAttribute("data-vimeo-carousel-id")) != null ? _element$getAttribute : "";

      if (id === "") {
        reject({
          message: "The value assigned to [data-vimeo-carousel-id] was blank. A Vimeo player cannot be initialized without a valid Vimeo id",
          element
        });
      }

      VimeoCarousel.vimeoManager.createIframeById(id).then(iframe => {
        VimeoCarousel.vimeoManager.createPlayerByIframe(iframe);
        resolve(iframe);
      }).catch(error => reject(error));
    });
  }
  /**
   * Takes a Vimeo iframe element and appends it to the placeholder element.
   * @param element HTMLElement
   * @param iframe HTMLIFrameElement
   */


  static setIframeByPlaceholder(element, iframe) {
    if (!element) return;
    var hasIframe = element.querySelector(this.vimeoPlayerIframeEndpoint);
    if (hasIframe) return;
    element.appendChild(iframe);
  }
  /**
   * Resumes playing the Vimeo video and then advances to the next slide.
   */


  play(persistCurrentIndex) {
    var _context$children5, _context$currentIndex;

    if (!this.container) return;
    var context = VimeoCarousel.getContext(this.container);
    context.setAuto(true);
    var currentSlide = (_context$children5 = context.children) == null ? void 0 : _context$children5.item((_context$currentIndex = context.currentIndex()) != null ? _context$currentIndex : -1);
    if (!currentSlide) return;
    VimeoCarousel.getVimeoIframe(currentSlide).then(iframe => {
      VimeoCarousel.getVimeoPlayer(iframe).then(player => {
        player.play().catch(error => console.warn(error));
      });
    }).catch(error => {
      context.play(persistCurrentIndex);
    });
  }
  /**
   * Pauses the Vimeo video and the carousel
   */


  pause() {
    var _context$children6, _context$currentIndex2;

    if (!this.container) return;
    var context = VimeoCarousel.getContext(this.container);
    context.pause();
    var currentSlide = (_context$children6 = context.children) == null ? void 0 : _context$children6.item((_context$currentIndex2 = context.currentIndex()) != null ? _context$currentIndex2 : -1);
    if (!currentSlide) return;
    VimeoCarousel.getVimeoIframe(currentSlide).then(iframe => {
      VimeoCarousel.getVimeoPlayer(iframe).then(player => {
        player.pause().catch(error => console.warn(error));
      });
    });
  }

}
VimeoCarousel.vimeoManager = new Shared_ts_utils_vimeo_manager__WEBPACK_IMPORTED_MODULE_6__["default"]();
VimeoCarousel.vimeoRepository = new WeakMap();
VimeoCarousel.vimeoPlayerIframeEndpoint = 'iframe[src^="https://player.vimeo.com/video/"]';

/***/ }),

/***/ "../../Library/Shared/ts/observers/event.ts":
/*!**************************************************!*\
  !*** ../../Library/Shared/ts/observers/event.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listen": function() { return /* binding */ listen; },
/* harmony export */   "createEvent": function() { return /* binding */ createEvent; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Library/Shared/ts/utils/html.ts");


/**
 * Iterates through an array of HTML elements and adds an event listener to each element.
 * @param elements HTMLList
 * @param listener (this: Element, ev: Event) => any
 * @param type keyof GlobalEventHandlersEventMap
 */

var listen = (elements, listener, type) => {
  if (!type) return;
  (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_1__.enumerateElements)(elements).forEach(element => {
    element.addEventListener(type, listener);
  });
};
var createEvent = (elem, eventName) => {
  //Needed for IE Support: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent#Browser_Compatibility
  //https://stackoverflow.com/a/49071358/79677
  var event;

  if (typeof Event === "function") {
    event = new Event(eventName);
  } else {
    event = document.createEvent("Event");
    event.initEvent(eventName, true, true);
  }

  elem.dispatchEvent(event);
  return event;
};

/***/ }),

/***/ "../../Library/Shared/ts/observers/intersection.ts":
/*!*********************************************************!*\
  !*** ../../Library/Shared/ts/observers/intersection.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observer": function() { return /* binding */ observer; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Library/Shared/ts/utils/html.ts");


/**
 * IntersectionObserverConfig allows an optional inRange callback function to execute when an element intersects inside the viewport, allows an optional outRange callback function to execute when an element intersects outside the viewport, an optional boolean to unobserve elements and an optional configuration object to customize the Intersection Observer API behavior.
 */

/**
 * Handles observation of load items through the bounding client rectangle interface. This process will be used if the current browser does not support the Intersection Observer Api.
 * @param loadItems Element[]
 * @param config IntersectionObserverConfig
 */
var observeByBoundingClientRect = (loadItems, config) => {
  var active = false;

  var process = () => {
    if (active === false) {
      active = true;
      setTimeout(() => {
        loadItems.forEach(loadItem => {
          if (inView(loadItem)) {
            var _config$unObserve;

            config == null ? void 0 : config.inRange == null ? void 0 : config.inRange(loadItem);

            if ((_config$unObserve = config == null ? void 0 : config.unObserve) != null ? _config$unObserve : true) {
              loadItems = loadItems.filter(image => {
                return image !== loadItem;
              });

              if (loadItems.length === 0) {
                document.removeEventListener("scroll", process);
                window.removeEventListener("resize", process);
                window.removeEventListener("orientationchange", process);
              }
            }
          } else {
            config == null ? void 0 : config.outRange == null ? void 0 : config.outRange(loadItem);
          }
        });
        active = false;
      }, 200);
    }
  };

  document.addEventListener("scroll", process);
  window.addEventListener("resize", process);
  window.addEventListener("orientationchange", process);
  window.addEventListener("DOMContentLoaded", process);
};
/**
 * Determines if the element is in the viewport and is visible based on it's display state and it's bounding client rectangle coordinates.
 * @param loadItem HTMLElement
 * @returns boolean
 */


var inView = loadItem => {
  return loadItem.getBoundingClientRect().top <= window.innerHeight && loadItem.getBoundingClientRect().bottom >= 0 && loadItem.style.display !== "none";
};
/**
 * Handles observeration of load item elements through the Intersection Observer Api
 * @param loadItems Element[]
 * @param config IntersectionObserverConfig
 */


var observeByApi = (loadItems, config) => {
  var loadItemObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0 && entry.isIntersecting) {
        var _config$unObserve2;

        config == null ? void 0 : config.inRange == null ? void 0 : config.inRange(entry.target, entry);

        if ((_config$unObserve2 = config == null ? void 0 : config.unObserve) != null ? _config$unObserve2 : true) {
          loadItemObserver.unobserve(entry.target);
        }
      } else {
        config == null ? void 0 : config.outRange == null ? void 0 : config.outRange(entry.target, entry);
      }
    });
  }, config == null ? void 0 : config.options);
  loadItems.forEach(function (loadItem) {
    loadItemObserver.observe(loadItem);
  });
};
/**
 * Observer applies a string that represents a Document Element and observes when the element intersects in and out of the browser viewport. Optional configuration is provided through the IntersectionObserverConfig interface.
 * @param selector string = "[data-observe]"
 * @param config IntersectionObserverConfig
 */


var observer = function observer(selector, config) {
  if (selector === void 0) {
    selector = "[data-observe]";
  }

  var loadItems = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_1__.enumerateElements)(document.querySelectorAll(selector));
  if (!config) return;

  if ("IntersectionObserver" in window) {
    observeByApi(loadItems, config);
  } else {
    observeByBoundingClientRect(loadItems, config);
  }
};

/***/ }),

/***/ "../../Library/Shared/ts/observers/media-query.ts":
/*!********************************************************!*\
  !*** ../../Library/Shared/ts/observers/media-query.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MediaQuery; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);


class MediaQuery {
  /**
   * Using a media query string (identical to that of a CSS media query) and executes a inbound method, when the condition is met, and an outbound method, when the condition is not met.
   * @param mediaQuery string
   */
  constructor(mediaQuery) {
    this.mediaQueryList = void 0;
    this.mediaQueryList = matchMedia(mediaQuery);
    MediaQuery.initialize(this.mediaQueryList);
  }

  static initialize(mediaQueryList) {
    this.controller.set(mediaQueryList, []);
    this.repository.set(mediaQueryList, {
      isEventsProcessed: false
    });
  }

  static getController(mediaQueryList) {
    return this.controller.get(mediaQueryList);
  }

  static getRepository(mediaQueryList) {
    return this.repository.get(mediaQueryList);
  }

  static processEvents(context) {
    var repository = this.getRepository(context.mediaQueryList);
    if (!repository) return;

    if (!repository.isEventsProcessed) {
      repository.isEventsProcessed = true;
      this.observe(context.mediaQueryList);
      var hasEventListener = ("addEventListener" in context.mediaQueryList);

      if (hasEventListener) {
        context.mediaQueryList.addEventListener("change", event => {
          MediaQuery.observe(event.target);
        });
      }

      if (!hasEventListener) {
        context.mediaQueryList.addListener(event => {
          MediaQuery.observe(event);
        });
      }
    }
  }

  static observe(mediaQueryList) {
    var controller = this.getController(mediaQueryList);
    if (!controller) return;

    if (mediaQueryList.matches) {
      var response = controller.find(control => control.name === "inbound");
      response == null ? void 0 : response.task(mediaQueryList);
    } else {
      var _response = controller.find(control => control.name === "outbound");

      _response == null ? void 0 : _response.task(mediaQueryList);
    }
  }

  static pushTask(name, task, context) {
    var controller = this.getController(context.mediaQueryList);
    if (!controller) return;
    controller.push({
      name: name,
      task: task
    });
    this.processEvents(context);
  }
  /**
   * This method executes when a media query condition is met
   * @param task MediaQueryTask
   * @returns MediaQuery
   */


  inbound(task) {
    MediaQuery.pushTask("inbound", task, this);
    return this;
  }
  /**
   * This method executes when a media query condition is not met
   * @param task MediaQueryTask
   * @returns MediaQuery
   */


  outbound(task) {
    MediaQuery.pushTask("outbound", task, this);
    return this;
  }

}
MediaQuery.controller = new WeakMap();
MediaQuery.repository = new WeakMap();

/***/ }),

/***/ "../../Library/Shared/ts/patterns/pubsub.ts":
/*!**************************************************!*\
  !*** ../../Library/Shared/ts/patterns/pubsub.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PubSub; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../../Library/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);




class PubSub {
  /**
   * Represents the relationship between the PubSub instance and the id that is used to generate unique tokens
   */

  /**
   * Represents the relationship between the PubSub instance and the IPubSubEvents object
   */

  /**
   * A publish/subscribe, pub-sub, interface that enables the ability to subscribe multiple different tasks to a common event name, the ability to publish different data to all subscribers of the common event name, and the ability to unsubscribe from a common event name.
   */
  constructor() {
    PubSub.id.set(this, -1);
    PubSub.events.set(this, {});
  }
  /**
   * Takes the event name along with any data and publishes the data to all of the subscribers. Returns true if the publish operation was successful; otherwise, returns false.
   * @param event string
   * @param record MutationRecord
   * @returns boolean
   */


  publish(event, data) {
    var events = PubSub.events.get(this);

    if (!events) {
      return false;
    }

    if (!events[event]) {
      return false;
    }

    var subscribers = events[event];
    subscribers.forEach(function (subscriber) {
      subscriber.task(data);
    });
    return true;
  }
  /**
   * Uses an event name and a callback function to make a subscription. In turn, calling the publish method on this event name will execute the callback function. A unique token is returned that can be used to unsubscribe from the system.
   * @param event string
   * @param task PubSubTask
   * @returns string
   */


  subscribe(event, task) {
    var token = "";
    var id = PubSub.id.get(this);
    var events = PubSub.events.get(this);

    if (events && id !== undefined) {
      if (!events[event]) {
        events[event] = [];
      }

      if (id !== undefined) {
        PubSub.id.set(this, id += 1);
        token = id.toString();
        events[event].push({
          token: token,
          task: task
        });
      }
    }

    return token;
  }
  /**
   * Uses a unique token to unsubscribe a callback function from an event name. The token is returned if the unsubscription operation is successful; otherwise, null is returned.
   * @param token string
   * @returns string
   */


  unsubscribe(token) {
    var found = false;
    var events = PubSub.events.get(this);

    if (events) {
      found = Object.keys(events).some(event => {
        return events[event].some((subscriber, index) => {
          var areEqual = subscriber.token === token.toString();

          if (areEqual) {
            events[event].splice(index, 1);
          }

          return areEqual;
        });
      });
    }

    return found ? token : undefined;
  }

}
PubSub.id = new WeakMap();
PubSub.events = new WeakMap();

/***/ }),

/***/ "../../Library/Shared/ts/utils/capture-element.ts":
/*!********************************************************!*\
  !*** ../../Library/Shared/ts/utils/capture-element.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CaptureElement; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Shared_ts_patterns_pubsub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Shared/ts/patterns/pubsub */ "../../Library/Shared/ts/patterns/pubsub.ts");




class CaptureElement {
  /**
   * Represents the element that will be registered to a new MutationObserver instance
   */

  /**
   * Represents the relationship between the CaptureElement instance and the MutationObserver instance
   */

  /**
   * Represents the relationship between the CaptureElement instance and the PubSub instance
   */

  /**
   * CaptureElement is a publish/subscribe, pub-sub, interface that can be controlled by an element that is registered to a new MutationObserver instance. Subscription names are mapped to the Mutation Observer's observable types that are defined in the MutationObserverInit dictionary. When an observable type is captured on the element, a callback function will be executed back to the author where the MutationRecord information can be accessed.
   * @param element Element
   */
  constructor(element) {
    this.element = void 0;
    this.element = element;
    var pubsub = new Shared_ts_patterns_pubsub__WEBPACK_IMPORTED_MODULE_3__["default"]();
    var observer = CaptureElement.createObserver(element, records => {
      records.forEach(record => {
        switch (record.type) {
          case "characterData":
            pubsub.publish("characterData", record);
            break;

          case "attributes":
            pubsub.publish("attributes", record);
            break;

          case "childList":
            pubsub.publish("childList", record);
            break;
        }
      });
    });
    CaptureElement.pubsub.set(this, pubsub);
    CaptureElement.observers.set(this, observer);
  }
  /**
   * Takes the element along with the callback function and returns the new MutationObserver object
   * @param element Element
   * @param callback MutationCallback
   * @returns MutationObserver
   */


  static createObserver(element, callback) {
    var observer = new MutationObserver(callback);
    observer.observe(element, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true
    });
    return observer;
  }
  /**
   * Uses an event name and a callback function to make a subscription. In turn, calling the publish method on this event name will execute the callback function. A unique token is returned that can be used to unsubscribe from the system.
   * @param event CaputerElementEventName
   * @param task CaptureElementTask
   * @returns string
   */


  subscribe(event, task) {
    var pubsub = CaptureElement.pubsub.get(this);
    return pubsub == null ? void 0 : pubsub.subscribe(event, task);
  }
  /**
   * Uses a unique token to unsubscribe a callback function from an event name. The token is returned if the unsubscription operation is successful; otherwise, null is returned.
   * @param token string
   * @returns string
   */


  unsubscribe(token) {
    var pubsub = CaptureElement.pubsub.get(this);
    return pubsub == null ? void 0 : pubsub.unsubscribe(token);
  }
  /**
   * Closes the connection to the element's MutationObserver
   */


  disconnect() {
    var observer = CaptureElement.observers.get(this);
    observer == null ? void 0 : observer.disconnect();
  }
  /**
   * Opens the connection to the element's MutationObserver
   */


  connect() {
    var observer = CaptureElement.observers.get(this);
    observer == null ? void 0 : observer.observe(this.element, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true
    });
  }

}
CaptureElement.observers = new WeakMap();
CaptureElement.pubsub = new WeakMap();

/***/ }),

/***/ "../../Library/Shared/ts/utils/data.ts":
/*!*********************************************!*\
  !*** ../../Library/Shared/ts/utils/data.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFunction": function() { return /* binding */ isFunction; },
/* harmony export */   "isString": function() { return /* binding */ isString; },
/* harmony export */   "isObject": function() { return /* binding */ isObject; }
/* harmony export */ });
/* unused harmony exports isNumber, isArray, isNullOrUndefined */
var isFunction = type => {
  return typeof type === "function";
};
var isString = type => {
  return typeof type === "string";
};
var isNumber = type => {
  return typeof type === "number";
};
var isArray = type => {
  return Array.isArray(type);
};
var isObject = type => {
  return type === Object(type) && !isArray(type);
};
var isNullOrUndefined = type => {
  return type !== null && typeof type !== "undefined";
};

/***/ }),

/***/ "../../Library/Shared/ts/utils/disclosure.ts":
/*!***************************************************!*\
  !*** ../../Library/Shared/ts/utils/disclosure.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Disclosure; }
/* harmony export */ });
/* harmony import */ var Shared_ts_utils_element_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/utils/element-controller */ "../../Library/Shared/ts/utils/element-controller.ts");

class Disclosure extends Shared_ts_utils_element_controller__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * An extension of the `ElementController` interface, `Disclosure` aims to provide an accessible user-interface where a `controller` can expand or collapse an array of `elements` based on an id list reference by the `aria-controls` attribute. This interface aims to meet the essential requirements provided by the W3C Aria best practices.
   *
   * https://w3c.github.io/aria-practices/#disclosure
   * @param root Element | null | undefined
   */
  constructor(root) {
    super(root);
  }
  /**
   * Initializes a controller
   * @param context Disclosure
   * @param controller Element
   */


  initializeController(context, controller) {
    var relatedElements = this.getRelatedElementsByController(controller);
    var isExpanded = context.isControllerExpanded(controller);
    isExpanded ? Disclosure.addElementStateByElements(relatedElements, controller) : Disclosure.removeElementStateByElements(relatedElements);
  }
  /**
   * Takes a controller element and toggles the visibilty state towards all elements that are referenced in the controller
   * @param controller Element
   */


  toggleElementsByController(controller) {
    this.isControllerExpanded(controller) ? this.removeControllerState(controller) : this.addControllerState(controller);
  }

}

/***/ }),

/***/ "../../Library/Shared/ts/utils/element-controller.ts":
/*!***********************************************************!*\
  !*** ../../Library/Shared/ts/utils/element-controller.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ElementController; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "../../Library/node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../Library/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../../Library/node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Shared/ts/utils/capture-element */ "../../Library/Shared/ts/utils/capture-element.ts");





class ElementController {
  /**
   * Represents the root that will contain all elements and controllers as descedent elements
   */

  /**
   * Represents an array of controller elements where each controller is responsible for managing the state of the elements through the `aria-controls` attribute
   */

  /**
   * Represents an array of elements where each element can be controlled by a controller element through the `id` attribute
   */

  /**
   * Enables the ability for controller elements that are equipped with the `aria-controls` attribute to control the state of other elements by a reference to it's `id` attribute.
   * @param root Element | null | undefined
   */
  constructor(root) {
    var _this$root;

    this.root = void 0;
    this.controllers = [];
    this.elements = void 0;
    this.root = root != null ? root : document.querySelector(".element-controller");

    if (!((_this$root = this.root) != null && _this$root.classList.contains("element-controller"))) {
      var _this$root2;

      (_this$root2 = this.root) == null ? void 0 : _this$root2.classList.add("element-controller");
    }

    if (this.root) {
      this.controllers = Array.from(this.root.querySelectorAll(".element-controller__controller[aria-controls]")).filter(controller => controller.closest(".element-controller") === this.root);
    }

    this.elements = [];
    ElementController.initialize(this);
  }
  /**
   * Initializes the process
   * @param context ElementController
   */


  static initialize(context) {
    this.setElementsByContext(context);

    if (context.root) {
      var captureElement = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_4__["default"](context.root);
      captureElement.subscribe("attributes", record => {
        if (record.attributeName === "aria-controls") {
          this.setElementsByContext(context);
        }

        var controller = context.controllers.find(controller => controller === record.target);
        if (!controller) return;

        if (record.attributeName === ElementController.getControllerExpandedAttribute(controller)) {
          context.initializeController(context, controller);
        }
      });
    }

    this.initializeControllers(context);
  }
  /**
   * Initializes all controllers
   * @param context ElementController
   */


  static initializeControllers(context) {
    context.controllers.forEach(controller => {
      context.initializeController(context, controller);
      context.isControllerExpanded(controller) ? context.addControllerState(controller) : context.removeControllerState(controller);
    });
  }
  /**
   * Initializes a controller
   * @param context ElementController
   * @param controller Element
   */


  initializeController(context, controller) {
    var relatedElements = context.getRelatedElementsByController(controller);
    var unrelatedElements = context.getUnrelatedElementsByController(controller);
    var isExpanded = context.isControllerExpanded(controller);

    if (isExpanded) {
      ElementController.updateControllerStatesByContext(context, controller);
      ElementController.addElementStateByElements(relatedElements, controller);
      ElementController.removeElementStateByElements(unrelatedElements);
    }
  }
  /**
   * Iterates through an array of elements and assigns the controller `id` as a value to the `data-element-controller-name` attribute, then sets the `aria-hidden` attribute to `false`
   * @param elements (Element | undefined | null)[]
   * @param controller Element
   */


  static addElementStateByElements(elements, controller) {
    elements.forEach(element => {
      element == null ? void 0 : element.setAttribute("data-element-controller-name", controller.id);
      element == null ? void 0 : element.setAttribute("aria-hidden", "false");
    });
  }
  /**
   * Takes the controller and sets the `aria-expanded` attribute to `true`
   * @param controller Element
   */


  addControllerState(controller) {
    controller.setAttribute(ElementController.getControllerExpandedAttribute(controller), "true");
  }
  /**
   * Takes the controller and sets the `aria-expanded` attribute to `false`
   * @param controller Element
   */


  removeControllerState(controller) {
    controller.setAttribute(ElementController.getControllerExpandedAttribute(controller), "false");
  }

  static getControllerExpandedAttribute(controller) {
    return ElementController.isControllerRoleCheckboxOrRadio(controller) ? "aria-checked" : "aria-expanded";
  }

  static isControllerRoleCheckboxOrRadio(controller) {
    var _controller$getAttrib;

    var isInput = controller.nodeName.toLowerCase() === "input";
    var type = ((_controller$getAttrib = controller.getAttribute("type")) != null ? _controller$getAttrib : "").toLowerCase();
    return isInput && (type === "checkbox" || type === "radio");
  }
  /**
   * Iterates through an array of elements and removes the `data-element-controller-name` attribute and sets the `aria-hidden` attribute to `true`
   * @param elements (Element | undefined | null)[]
   */


  static removeElementStateByElements(elements) {
    elements.forEach(element => {
      element == null ? void 0 : element.removeAttribute("data-element-controller-name");
      element == null ? void 0 : element.setAttribute("aria-hidden", "true");
    });
  }
  /**
   * Iterates through all controllers and attempts to capture and store all matching elements that can be controlled
   * @param context ElementController
   */


  static setElementsByContext(context) {
    context.controllers.forEach(controller => {
      var elements = this.getContainersByControllerIds(context.getIdsByController(controller), controller, context);
      elements.forEach(element => {
        if (!context.elements.includes(element)) {
          context.elements.push(element);
        }
      });
    });
  }
  /**
   * Iterates through an array of id values and attempts to capture the DOM element by that id and returns each element into a new element array. If an element cannot be found in the document, an error message will be reported to the browser console informing the developer of a mismatch.
   * @param ids string[]
   * @param controller Element
   * @param context ElementController
   * @returns Element[]
   */


  static getContainersByControllerIds(ids, controller, context) {
    var filterIds = ids.filter(id => id !== "");
    return Array.from(filterIds, id => {
      var _context$getElementBy, _context$root;

      var element = (_context$getElementBy = context.getElementById(id)) != null ? _context$getElementBy : (_context$root = context.root) == null ? void 0 : _context$root.querySelector("#" + id);

      if (!element) {
        console.error({
          message: "The element id, " + id + ", referenced within the current controller could not be found in the document.",
          controller
        });
      }

      return element;
    });
  }
  /**
   * Filters out all controllers from the controller context and sets the `aria-expanded` state to `false`.
   * @param context ElementController
   * @param controllerContext Element
   */


  static updateControllerStatesByContext(context, controllerContext) {
    context.controllers.filter(controller => controller !== controllerContext).forEach(controller => controller.setAttribute(this.getControllerExpandedAttribute(controller), "false"));
  }
  /**
   * Determines if the controller is expanded through the `aria-expanded` attribute
   * @param controller Element
   * @returns boolean
   */


  isControllerExpanded(controller) {
    return controller.getAttribute(ElementController.getControllerExpandedAttribute(controller)) === "true";
  }
  /**
   * Returns a new array of elements that are related to the id list referenced by the controller
   * @param controller Element
   * @returns (Element | undefined | null)[]
   */


  getRelatedElementsByController(controller) {
    var ids = this.getIdsByController(controller);
    return this.elements.filter(element => {
      var _element$id;

      return ids.includes((_element$id = element == null ? void 0 : element.id) != null ? _element$id : "");
    });
  }
  /**
   * Returns a new array of elements that aren't related to the id list referenced by the controller
   * @param controller Element
   * @returns (Element | undefined | null)[]
   */


  getUnrelatedElementsByController(controller) {
    var ids = this.getIdsByController(controller);
    return this.elements.filter(element => {
      var _element$id2;

      return !ids.includes((_element$id2 = element == null ? void 0 : element.id) != null ? _element$id2 : "");
    });
  }
  /**
   * Takes a controller element and returns a string array of all id references
   * @param controller Element
   * @returns string[]
   */


  getIdsByController(controller) {
    var _controller$getAttrib2;

    return ((_controller$getAttrib2 = controller.getAttribute("aria-controls")) != null ? _controller$getAttrib2 : "").split(" ");
  }
  /**
   * Returns a matching element from the elements array by a given id
   * @param id string
   * @returns Element
   */


  getElementById(id) {
    return this.elements.find(element => (element == null ? void 0 : element.id) === id);
  }
  /**
   * Takes a controller element, adds the controller state and updates the elements on the view
   * @param controller Element
   */


  toggleElementsByController(controller) {
    this.addControllerState(controller);
  }

}

/***/ }),

/***/ "../../Library/Shared/ts/utils/focus-manager.ts":
/*!******************************************************!*\
  !*** ../../Library/Shared/ts/utils/focus-manager.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FocusManager; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Library/Shared/ts/utils/html.ts");



class FocusManager {
  /**
   * Represents the internal root WeakMap interface that communicates with the public root accessor.
   */

  /**
   * Uses the FocusManager instance as a key to return the root HTMLElement.
   * @param key FocusManager
   * @returns HTMLElement
   */
  static getRoot(key) {
    return this.root.get(key);
  }
  /**
   * Represents all focusable elements within the root context.
   */


  /**
   * Uses a root element to determine all of the focusable elements that exist within the root context. All focusable elements are returned as a new array and can be accessed. Support includes operations to enable and disable focus trap navigation.
   * @param root HTMLElement
   */
  constructor(root) {
    if (root === void 0) {
      root = document.querySelector("body");
    }

    this.focusElements = [];

    if (!(0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_2__.elementExists)(root)) {
      throw new Error("FocusManager failed to determine if the passed element exists.");
    }

    FocusManager.root.set(this, root);
    this.updateElements();
  }
  /**
   * Queries the document to fetch all focusable elements within the root context. The returned NodeList will be converted into an array and be accessible through the "HTMLElements" property.
   */


  updateElements() {
    var root = FocusManager.root.get(this);

    if (root) {
      this.focusElements = this.getElements();
    }
  }

  getElements() {
    var root = FocusManager.root.get(this);
    return root ? Array.from(root.querySelectorAll("button, [href]:not(link):not(base):not(use), input, select, textarea, [tabindex]:not([data-root-boundary])")) : [];
  }
  /**
   * Returns the first focusable element within the root context.
   * @returns Element
   */


  firstElement() {
    return this.focusElements[0];
  }
  /**
   * Returns the last focusable element within the root context.
   * @returns Element
   */


  lastElement() {
    return this.focusElements[this.focusElements.length - 1];
  }
  /**
   * Returns the next element or the first element from the focus element array
   * @param element HTMLElement
   * @returns HTMLElement
   */


  nextElement(element) {
    var index = this.focusElements.indexOf(element) + 1;
    return index <= this.focusElements.length - 1 ? this.focusElements[index] : this.firstElement();
  }
  /**
   * Returns the previous element or the last element from the focus element array
   * @param element HTMLElement
   * @returns HTMLElement
   */


  previousElement(element) {
    var index = this.focusElements.indexOf(element) - 1;
    return index >= 0 ? this.focusElements[index] : this.lastElement();
  }

}
FocusManager.root = new WeakMap();

/***/ }),

/***/ "../../Library/Shared/ts/utils/focus-trap.ts":
/*!***************************************************!*\
  !*** ../../Library/Shared/ts/utils/focus-trap.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FocusTrap; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../Library/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "../../Library/node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Shared_ts_utils_focus_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/ts/utils/focus-manager */ "../../Library/Shared/ts/utils/focus-manager.ts");



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


class FocusTrap extends Shared_ts_utils_focus_manager__WEBPACK_IMPORTED_MODULE_2__["default"] {
  /**
   * Represents the current FocusTrap interface. It should be noted that one FocusTrap should be accessible where it's properties can be mapped to the active user-interface.
   */

  /**
   * Extends the base functionality of the FocusManager interface by providing support to enable/disable focus trap navigation.
   * @param root HTMLElement
   */
  constructor(root) {
    if (root === void 0) {
      root = document.querySelector("body");
    }

    super(root);
    FocusTrap.setRootBoundaries(this);
  }
  /**
   * Fetches the root boundary element by an id.
   * @param id string
   * @returns HTMLElement
   */


  static getRootBoundaryElement(id, context) {
    var root = this.getRoot(context);
    return root ? root.querySelector("[data-root-boundary=\"" + id + "\"]") : null;
  }
  /**
   * Manages the focus event listeners based on a switch. The switch defaults to true meaning, the first and last focusable elements will add an event listener. Switching to false will remove the event listeners from the first and last focusable elements.
   * @param self FocusTrap
   * @param eventOn boolean
   */


  static manageFocusEvents(context, eventOn) {
    if (eventOn === void 0) {
      eventOn = true;
    }

    this.context = context;
    var first = this.getRootBoundaryElement("first", context);
    var last = this.getRootBoundaryElement("last", context);

    if (first && eventOn) {
      first.addEventListener("focus", this.handleFirstFocusEvent);
    }

    if (last && eventOn) {
      last.addEventListener("focus", this.handleLastFocusEvent);
    }

    if (first && !eventOn) {
      first.removeEventListener("focus", this.handleFirstFocusEvent);
    }

    if (last && !eventOn) {
      last.removeEventListener("focus", this.handleLastFocusEvent);
    }
  }
  /**
   * Takes a focus element and determines whether the element or it's ancestor element is considered hidden by checking for the hidden attribute, the aria-hidden attribute or whether the CSS display none style is set.
   * @param focusElement HTMLElement
   * @returns boolean
   */


  static isFocusElementVisible(focusElement) {
    var _ref, _focusElement$closest;

    var hiddenElement = focusElement.hasAttribute("hidden") || focusElement.getAttribute("aria-hidden") === "true" || getComputedStyle(focusElement).display === "none";
    if (hiddenElement) return false;
    var hiddenAncestorElement = (_ref = (_focusElement$closest = focusElement.closest("[aria-hidden=\"true\"]")) != null ? _focusElement$closest : focusElement.closest("[hidden]")) != null ? _ref : focusElement.closest("[style*=\"display:none\"]");
    return hiddenAncestorElement ? false : true;
  }
  /**
   * Resolves the first visible focus element as a promise.
   * @returns Promise<HTMLElement>
   */


  getFirstVisibleFocusElement() {
    var _this = this;

    return _asyncToGenerator(function* () {
      return new Promise((resolve, reject) => {
        var element = _this.focusElements.find(element => FocusTrap.isFocusElementVisible(element));

        element ? resolve(element) : reject({
          message: "The first focus element could not be retrieved appropriately nor determined whether it's visible in the current DOM location."
        });
      });
    })();
  }
  /**
   * Resolves the last visible focus element as a promise.
   * @returns Promise<HTMLElement>
   */


  getLastVisibleFocusElement() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      return new Promise((resolve, reject) => {
        var element = _this2.focusElements.reverse().find(element => FocusTrap.isFocusElementVisible(element));

        element ? resolve(element) : reject({
          message: "The last focus element could not be retrieved appropriately nor determined whether it's visible in the current DOM location."
        });
      });
    })();
  }
  /**
   * Signature event listener callback function that handles the first focusable element. This will set focus back to the last focusable element.
   * @param event FocusEvent
   */


  static handleFirstFocusEvent(event) {
    return _asyncToGenerator(function* () {
      var focusElement = yield FocusTrap.context.getLastVisibleFocusElement();
      focusElement.focus();
    })();
  }
  /**
   * Signature event listener callback function that handles the last focusable element. This will set focus back to the first focusable element.
   * @param event FocusEvent
   */


  static handleLastFocusEvent(event) {
    return _asyncToGenerator(function* () {
      var focusElement = yield FocusTrap.context.getFirstVisibleFocusElement();
      focusElement.focus();
    })();
  }
  /**
   * Creates a tabindex boundary within the modal to manage focus trap.
   * @param root HTMLElement
   */


  static setRootBoundaries(context) {
    var root = FocusTrap.root.get(context);
    if (!root) return;
    var first = this.getRootBoundaryElement("first", context);

    if (!first) {
      root.insertAdjacentElement("afterbegin", this.createBoundaryElement("first"));
    }

    var last = this.getRootBoundaryElement("last", context);

    if (!last) {
      root.insertAdjacentElement("beforeend", this.createBoundaryElement("last"));
    }
  }
  /**
   * Creates a new focusable element that can be provided to Modal.setRootBoundaries.
   * @returns HTMLElement
   */


  static createBoundaryElement(id) {
    if (id === void 0) {
      id = "";
    }

    var element = document.createElement("div");
    element.setAttribute("data-root-boundary", id);
    element.setAttribute("aria-hidden", "true");
    element.setAttribute("tabindex", "0");
    return element;
  }
  /**
   * Enables support for focus trap navigation between the first and last focusable elements.
   */


  on() {
    FocusTrap.manageFocusEvents(this, true);
  }
  /**
   * Disables support for focus trap navigation between the first and last focusable elements.
   */


  off() {
    FocusTrap.manageFocusEvents(this, false);
  }

}
FocusTrap.context = void 0;

/***/ }),

/***/ "../../Library/Shared/ts/utils/html.ts":
/*!*********************************************!*\
  !*** ../../Library/Shared/ts/utils/html.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": function() { return /* binding */ createElement; },
/* harmony export */   "setElementAttributes": function() { return /* binding */ setElementAttributes; },
/* harmony export */   "renderTemplate": function() { return /* binding */ renderTemplate; },
/* harmony export */   "appendElement": function() { return /* binding */ appendElement; },
/* harmony export */   "elementExists": function() { return /* binding */ elementExists; },
/* harmony export */   "enumerateElements": function() { return /* binding */ enumerateElements; }
/* harmony export */ });
/* unused harmony exports convertFragmentToHTMLElement, getJSONByElementAttribute */
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Shared_ts_utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/ts/utils/data */ "../../Library/Shared/ts/utils/data.ts");


var div = document.createElement("div");
/**
 * createElement takes a string tag name along with an optional object of attributes and returns a new HTMLElement.
 * @param tag string
 * @param attributes object
 * @return HTMLElement
 */

var createElement = (tag, attributes) => {
  var element = document.createElement(tag);
  return setElementAttributes(element, attributes);
};
/**
 * Takes an object representing an attribute key-value pair and assigns it to an HTMLElement. The HTMLElement will be returned.
 * @param element HTMLElement
 * @param attributes T
 * @returns HTMLElement
 */

var setElementAttributes = (element, attributes) => {
  if (attributes && Shared_ts_utils_data__WEBPACK_IMPORTED_MODULE_1__.isObject(attributes)) {
    Object.keys(attributes).forEach(attribute => {
      element.setAttribute(attribute, attributes[attribute]);
    });
  }

  return element;
};
/**
 * Takes a string representing an HTML template and converts it into a document fragment. The document fragment is returned.
 * @param template string
 * @returns DocumentFragment
 */

var renderTemplate = template => {
  var range = document.createRange();
  return range.createContextualFragment(template);
};
/**
 * Takes a document fragment and converts it into an HTML element. The Element is returned.
 * @param fragment DocumentFragment
 * @returns Element | null
 */

var convertFragmentToHTMLElement = fragment => {
  div.appendChild(fragment);
  return div.lastElementChild;
};
/**
 * appendElement takes an HTMLElement and appends it to the document body. The same element is then returned.
 * @param element HTMLElement
 * @return HTMLElement
 */

var appendElement = element => {
  document.body.appendChild(element);
  return element;
};
/**
 * elementExists takes an HTMLItem and will return true if the item exists either in the document body or in the document head.
 * @param element HTMLItem
 * @return boolean
 */

var elementExists = element => {
  return document.body.contains(element) || document.head.contains(element);
};
/**
 * enumerateElements takes an HTMLList and returns an element array.
 * @param elements HTMLList
 * @return Element[]
 */

var enumerateElements = elements => {
  var ar = [].slice.call(elements);
  return ar;
};
/**
 * Attempts to convert a JSON string value of an HTML attribute into JSON format.
 * @param element Element | null
 * @param attribute string
 * @returns JSON object
 */

var getJSONByElementAttribute = (element, attribute) => {
  var json = {};
  if (!element || !attribute) return json;

  try {
    var value = element.getAttribute(attribute);
    json = value !== null ? JSON.parse(value) : json;
  } catch (e) {
    var message = e instanceof Error ? e.message : String(e);
    console.debug(message);
  }

  return json;
};

/***/ }),

/***/ "../../Library/Shared/ts/utils/inert.ts":
/*!**********************************************!*\
  !*** ../../Library/Shared/ts/utils/inert.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
// @ts-nocheck

/*
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
var enableInertSupport = () => {
  if (!("inert" in HTMLElement.prototype)) {
    Object.defineProperty(HTMLElement.prototype, "inert", {
      enumerable: true,

      /**
       * @return {boolean}
       * @this {Element}
       */
      get: function get() {
        return this.hasAttribute("inert");
      },

      /**
       * @param {boolean} inert
       * @this {Element}
       */
      set: function set(inert) {
        if (inert) {
          this.setAttribute("inert", "");
        } else {
          this.removeAttribute("inert");
        }
      }
    });
    window.addEventListener("load", function () {
      function applyStyle(css) {
        var style = document.createElement("style");
        style.type = "text/css"; // @ts-ignore: Unreachable code error

        if (style.styleSheet) {
          // @ts-ignore: Unreachable code error
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);
      }

      var css = "/*[inert]*/*[inert]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}";
      applyStyle(css);
      /**
       * Sends a fake tab event. This is only supported by some browsers.
       *
       * @param {boolean=} opt_shiftKey whether to send this tab with shiftKey
       */

      var dispatchTabEvent = function dispatchTabEvent(opt_shiftKey) {
        var ev = null;

        try {
          ev = new KeyboardEvent("keydown", {
            keyCode: 9,
            // @ts-ignore: Unreachable code error
            which: 9,
            key: "Tab",
            code: "Tab",
            // @ts-ignore: Unreachable code error
            keyIdentifier: "U+0009",
            shiftKey: !!opt_shiftKey,
            bubbles: true
          });
        } catch (e) {
          try {
            // Internet Explorer
            ev = document.createEvent("KeyboardEvent");
            ev.initKeyboardEvent("keydown", true, true, window, "Tab", 0, opt_shiftKey ? "Shift" : "", false, "en");
          } catch (e) {}
        }

        if (ev) {
          try {
            Object.defineProperty(ev, "keyCode", {
              value: 9
            });
          } catch (e) {}

          document.dispatchEvent(ev);
        }
      };
      /**
       * Determines whether the specified element is inert, and returns the element
       * which caused this state. This is limited to, but may include, the body
       * element.
       *
       * @param {Element} e to check
       * @return {Element} element is made inert by, if any
       */


      var madeInertBy = function madeInertBy(e) {
        while (e && e !== document.documentElement) {
          if (e.hasAttribute("inert")) {
            return e;
          }

          e = e.parentElement;
        }

        return null;
      };
      /**
       * Finds the nearest shadow root from an element that's within said shadow root.
       *
       * TODO(samthor): We probably want to find the highest shadow root.
       *
       * @param {Element} e to check
       * @return {Node} shadow root, if any
       */


      var findShadowRoot = function findShadowRoot(e) {
        return null;
      };

      if (window.ShadowRoot) {
        findShadowRoot = function findShadowRoot(e) {
          while (e && e !== document.documentElement) {
            if (e instanceof window.ShadowRoot) {
              return e;
            }

            e = e.parentNode;
          }

          return null;
        };
      }
      /**
       * Returns the target of the passed event. If there's a path (shadow DOM only), then prefer it.
       *
       * @param {!Event} event
       * @return {Element} target of event
       */


      var targetForEvent = function targetForEvent(event) {
        var p = event.path;
        return (
          /** @type {Element} */
          p && p[0] || event.target
        );
      }; // Hold onto the last tab direction: next (tab) or previous (shift-tab). This
      // can be used to step over inert elements in the correct direction. Mouse
      // or non-tab events should reset this and inert events should focus nothing.


      var lastTabDirection = 0;
      document.addEventListener("keydown", function (ev) {
        if (ev.keyCode === 9) {
          lastTabDirection = ev.shiftKey ? -1 : +1;
        } else {
          lastTabDirection = 0;
        }
      });
      document.addEventListener("mousedown", function (ev) {
        lastTabDirection = 0;
      }); // Retain the currently focused shadowRoot.

      var focusedShadowRoot = null;

      var updateFocusedShadowRoot = function updateFocusedShadowRoot(root) {
        if (root == focusedShadowRoot) {
          return;
        }

        if (focusedShadowRoot) {
          if (!(focusedShadowRoot instanceof window.ShadowRoot)) {
            throw new Error("not shadow root: " + focusedShadowRoot);
          }

          focusedShadowRoot.removeEventListener("focusin", shadowFocusHandler, true); // remove
        }

        if (root) {
          root.addEventListener("focusin", shadowFocusHandler, true); // add
        }

        focusedShadowRoot = root;
      };
      /**
       * Focus handler on a Shadow DOM host. This traps focus events within that root.
       *
       * @param {!Event} ev
       */


      var shadowFocusHandler = function shadowFocusHandler(ev) {
        // ignore "direct" focus, we only want shadow root focus
        var last = ev.path[ev.path.length - 1];

        if (last ===
        /** @type {*} */
        window) {
          return;
        }

        sharedFocusHandler(targetForEvent(ev));
        ev.preventDefault();
        ev.stopPropagation();
      };
      /**
       * Called indirectly by both the regular focus handler and Shadow DOM host focus handler. This
       * is the bulk of the polyfill which prevents focus.
       *
       * @param {Element} target focused on
       */


      var sharedFocusHandler = function sharedFocusHandler(target) {
        var inertElement = madeInertBy(target);

        if (!inertElement) {
          return;
        } // If the page has been tabbed recently, then focus the next element
        // in the known direction (if available).


        if (document.hasFocus() && lastTabDirection !== 0) {
          var getFocused = function getFocused() {
            return (focusedShadowRoot || document).activeElement;
          }; // Send a fake tab event to enumerate through the browser's view of
          // focusable elements. This is supported in some browsers (not Firefox).


          var previous = getFocused();
          dispatchTabEvent(lastTabDirection < 0 ? true : false);

          if (previous != getFocused()) {
            return;
          } // Otherwise, enumerate through adjacent elements to find the next
          // focusable element. This won't respect any custom tabIndex.


          var filter =
          /** @type {NodeFilter} */
          {
            /**
             * @param {Node} node
             * @return {number}
             */
            acceptNode: function acceptNode(node) {
              if (!node || !node.focus || node.tabIndex < 0) {
                return NodeFilter.FILTER_SKIP; // look at descendants
              }

              var contained = inertElement.contains(node);
              return contained ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
            }
          };
          var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, filter);
          walker.currentNode = inertElement;
          var nextFunc = Math.sign(lastTabDirection) === -1 ? walker.previousNode : walker.nextNode;
          var next = nextFunc.bind(walker);

          for (var candidate; candidate = next();) {
            candidate.focus();

            if (getFocused() !== previous) {
              return;
            }
          } // FIXME: If a focusable element can't be found here, it's likely to mean
          // that this is the start or end of the page. Blurring is then not quite
          // right, as it prevents access to the browser chrome.

        } // Otherwise, immediately blur the targeted element. Technically, this
        // still generates focus and blur events on the element. This is (probably)
        // the price to pay for this polyfill.


        target.blur();
      }; // The 'focusin' event bubbles, but instead, use 'focus' with useCapture set
      // to true as this is supported in Firefox. Additionally, target the body so
      // this doesn't generate superfluous events on document itself.


      document.body.addEventListener("focus", function (ev) {
        var target = targetForEvent(ev);
        updateFocusedShadowRoot(target == ev.target ? null : findShadowRoot(target));
        sharedFocusHandler(target); // either real DOM node or shadow node
      }, true); // Use a capturing click listener as both a safety fallback where pointer-events is not
      // available (IE10 and below), and to prevent accessKey access to inert elements.
      // TODO(samthor): Note that pointer-events polyfills trap more mouse events, e.g.-
      //   https://github.com/kmewhort/pointer_events_polyfill

      document.addEventListener("click", function (ev) {
        var target = targetForEvent(ev);

        if (madeInertBy(target)) {
          ev.preventDefault();
          ev.stopPropagation();
        }
      }, true);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (enableInertSupport);

/***/ }),

/***/ "../../Library/Shared/ts/utils/load-item.ts":
/*!**************************************************!*\
  !*** ../../Library/Shared/ts/utils/load-item.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoadItem; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../Library/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Library/Shared/ts/utils/html.ts");





class LoadItem {
  /**
   * Represents the placeholder element
   */

  /**
   * Represents the name of the HTML element
   */

  /**
   * Represents the name of the source value
   */

  /**
   * Represents the name of the loading strategy
   */

  /**
   * Represents the name of the error handling strategy
   */

  /**
   * Represents the key-value pair of attribute names and values that will be mapped to the current element
   */

  /**
   * Represents the key-value pair collection of additional HTML elements and attributes
   */

  /**
   * Represents the key-value pair relationship between the LoadItem instance and the controller task array
   */

  /**
   * Using an existing HTML element as a placeholder container, a new HTML element can be created and customized through the config interface. The new element will be inserted into the placeholder afterwards. Depending on the network response, either a success or failure status will be assigned to the placeholder and the new element.
   * @param placeholder Element
   * @param config ILoadItemConfig
   */
  constructor(placeholder, config) {
    var _config$tag, _config$src, _config$onloadname, _config$onerrorname, _JSON$parse, _placeholder$getAttri, _JSON$parse2, _placeholder$getAttri2;

    this.placeholder = void 0;
    this.tag = void 0;
    this.src = void 0;
    this.onloadname = void 0;
    this.onerrorname = void 0;
    this.attributes = void 0;
    this.tagsGroup = void 0;
    this.placeholder = placeholder;
    this.tag = (_config$tag = config == null ? void 0 : config.tag) != null ? _config$tag : "img";
    this.src = placeholder.getAttribute((_config$src = config == null ? void 0 : config.src) != null ? _config$src : "data-src-img");
    this.onloadname = (_config$onloadname = config == null ? void 0 : config.onloadname) != null ? _config$onloadname : "onload";
    this.onerrorname = (_config$onerrorname = config == null ? void 0 : config.onerrorname) != null ? _config$onerrorname : "onerror";
    this.attributes = (_JSON$parse = JSON.parse((_placeholder$getAttri = placeholder.getAttribute("data-attr")) != null ? _placeholder$getAttri : "{}")) != null ? _JSON$parse : {};
    this.tagsGroup = (_JSON$parse2 = JSON.parse((_placeholder$getAttri2 = placeholder.getAttribute("data-tag")) != null ? _placeholder$getAttri2 : "{}")) != null ? _JSON$parse2 : {};

    if (!LoadItem.isRendered(this)) {
      LoadItem.initalize(this);
    }
  }

  static isRendered(context) {
    return context.placeholder.classList.contains("load-item--success");
  }
  /**
   * Gets the current element and performs the setup work on the placeholder, the element and optionally other elements defined in the 'data-tag' attribute
   * @param context LoadItem
   */


  static initalize(context) {
    var element = this.getElement(context);
    this.processPlaceholder(context);
    this.processElement(element, context.attributes, context);
    this.processTags(context);
    this.controller.set(context, []);
  }
  /**
   * Returns the controller's task array
   * @param context LoadItem
   * @returns ILoadItemController[]
   */


  static getController(context) {
    return this.controller.get(context);
  }
  /**
   * Determines if the current element already exists and applies additional attributes defined in the 'data-attr' attribute. Otherwise, the current element will be created along with the attributes. The current element is returned.
   * @param context LoadItem
   * @returns HTMLElement
   */


  static getElement(context) {
    var element = this.getElementByPlaceholder(context);
    element = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_4__.elementExists)(element) ? (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_4__.setElementAttributes)(element, {
      src: context.src,
      class: "load-item__progress"
    }) : this.addElement(this.preloadElement(context), context);
    return element;
  }
  /**
   * Takes the element and loads it into the document. Depending on the network response, the element is rendered on screen or error handling is applied.
   * @param element HTMLElement
   * @param attributes {}
   * @param context LoadItem
   */


  static processElement(element, attributes, context) {
    element = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_4__.setElementAttributes)(element, attributes);
    this.loadElement(element, context).then(() => this.renderElement(element, context)).catch(error => this.handleError(element, context));
  }
  /**
   * Uses the tag property as a selector from the placeholder and returns the element.
   * @param context LoadItem
   * @returns HTMLElement
   */


  static getElementByPlaceholder(context) {
    return context.placeholder.querySelector(context.tag);
  }
  /**
   * A new element is created using the tag property along with the source property. The element is returned.
   * @param context LoadItem
   * @returns HTMLElement
   */


  static preloadElement(context) {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_4__.createElement)(context.tag, {
      src: context.src,
      alt: "",
      class: "load-item__progress"
    });
  }
  /**
   * Assigns the failure status to the placeholder and the element. A warning will be reported to the browser console providing the source that triggered the network response along with the HTML element that it would be applied to.
   * @param element HTMLElement
   * @param context LoadItem
   */


  static handleError(element, context) {
    context.placeholder.classList.add("load-item--failure");
    element.classList.remove("load-item__progress");
    console.error("Cound not load the resource", {
      src: context.src,
      for: element
    });
    var controller = this.getController(context);

    if (controller) {
      var response = controller.find(control => control.name === "error");
      response == null ? void 0 : response.task();
    }
  }
  /**
   * Inserts the current element into the placeholder in the document.
   * @param element HTMLElement
   * @param context LoadItem
   * @returns HTMLElement
   */


  static addElement(element, context) {
    context.placeholder.insertAdjacentElement("afterbegin", element);
    return element;
  }
  /**
   * Takes the current element and assigns the loading strategy properties to it. A promise is returned where it will resolve on a successful network response and it will reject on a failed network response.
   * @param element HTMLElement
   * @param context LoadItem
   * @returns Promise<HTMLElement>
   */


  static loadElement(element, context) {
    return new Promise((resolve, reject) => {
      element.onload = () => resolve(element);

      element.onerror = () => reject(element);
    });
  }
  /**
   * Assigns the success status on the placeholder element and the current element
   * @param element HTMLElement
   * @param context LoadItem
   */


  static renderElement(element, context) {
    context.placeholder.classList.add("load-item--success");
    element.classList.add("load-item__success");
    var controller = this.getController(context);

    if (controller) {
      var response = controller.find(control => control.name === "load");
      response == null ? void 0 : response.task(element);
    }
  }
  /**
   * Constructs a new object and pushes it into the controller's task array
   * @param name string
   * @param task LoadItemTask
   * @param context LoadItem
   */


  static pushTask(name, task, context) {
    var controller = this.getController(context);

    if (controller) {
      controller.push({
        name: name,
        task: task
      });
    }
  }
  /**
   * The load-item class is assigned to the placeholder element
   * @param context LoadItem
   */


  static processPlaceholder(context) {
    context.placeholder.classList.add("load-item");
  }
  /**
   * Reads through the 'data-tag' attribute and generates new HTML elements along with attributes. Each new element will then be prepended into the placeholder element.
   * @param context LoadItem
   */


  static processTags(context) {
    Object.keys(context.tagsGroup).forEach(tags => {
      var tag = context.tagsGroup[tags];
      tag.forEach(attributes => this.processElement(this.addElement((0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_4__.createElement)(tags), context), attributes, context));
    });
  }
  /**
   * Adds a new task to the queue stack to be called when the item has succeeded to load
   * @param task LoadItemTask
   * @returns LoadItem
   */


  load(task) {
    LoadItem.pushTask("load", task, this);
    return this;
  }
  /**
   * Adds a new task to the "error" queue stack to be called when the item has failed to load
   * @param task LoadItemTask
   * @returns LoadItem
   */


  error(task) {
    LoadItem.pushTask("error", task, this);
    return this;
  }

}
LoadItem.controller = new WeakMap();

/***/ }),

/***/ "../../Library/Shared/ts/utils/resource.ts":
/*!*************************************************!*\
  !*** ../../Library/Shared/ts/utils/resource.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAppendScript": function() { return /* binding */ createAppendScript; }
/* harmony export */ });
/* unused harmony exports createStylesheet, createScript, createAppendStylesheet */
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Library/Shared/ts/utils/html.ts");

var createStylesheet = src => {
  return Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    href: src
  });
};
var createScript = src => {
  return Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_0__.createElement("script", {
    src: src
  });
};
var createAppendStylesheet = src => {
  var element = createStylesheet(src);
  return Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_0__.appendElement(element);
};
var createAppendScript = src => {
  var element = createScript(src);
  return Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_0__.appendElement(element);
};

/***/ }),

/***/ "../../Library/Shared/ts/utils/upsell-action-quantity-reloactor.ts":
/*!*************************************************************************!*\
  !*** ../../Library/Shared/ts/utils/upsell-action-quantity-reloactor.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UpsellActionQuantityRelocator; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "../../Library/node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../Library/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../../Library/node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);






class UpsellActionQuantityRelocator {
  constructor(form) {
    this.form = void 0;
    this.actionQuantities = [];
    this.form = form;
    this.actionQuantities = this.captureActionQuantities();
    this.processActionQuantities();
  }

  static reportUIError(message, element) {
    console.error({
      message,
      element
    });
  }

  captureActionQuantities() {
    var comboboxes = Array.from(this.form.querySelectorAll("select[name^=\"ActionQuantity\"]"));
    comboboxes.forEach(combobox => {
      var _combobox$getAttribut;

      var index = (_combobox$getAttribut = combobox.getAttribute("name")) == null ? void 0 : _combobox$getAttribut.replace("ActionQuantity", "").trim();
      var actionType = document.querySelector("input[id=\"ActionType" + index + "\"]");
      var actionCode = document.querySelector("input[id=\"ActionCode" + index + "\"]");

      if (actionType && actionCode) {
        UpsellActionQuantityRelocator.actionCodeTypeRepository.set(combobox, {
          actionCode,
          actionType
        });
      }
    });
    return comboboxes;
  }

  processActionQuantities() {
    this.actionQuantities.forEach(actionQuantity => {
      var placeholder = this.getPlaceholderByActionQuantity(actionQuantity);
      if (!placeholder) return;
      this.handlePlaceholderCombobox(placeholder, actionQuantity);
      this.handlePlaceholderLabels(placeholder, actionQuantity);
      this.handleHiddenInputs(placeholder, actionQuantity);
      this.removeOriginalContainer(actionQuantity);
    });
  }

  getPlaceholderByActionQuantity(actionQuantity) {
    var placeholder = document.querySelector("[data-action-quantity-placeholder-id=\"" + actionQuantity.id + "\"]");

    if (!placeholder) {
      UpsellActionQuantityRelocator.reportUIError("No placeholder element is available for " + actionQuantity.id, actionQuantity);
      return;
    }

    return placeholder;
  }

  handlePlaceholderLabels(placeholder, actionQuantity) {
    var labels = Array.from(placeholder.querySelectorAll("label"));
    labels.forEach(label => label.setAttribute("for", actionQuantity.id));

    if (labels.length === 0) {
      UpsellActionQuantityRelocator.reportUIError("No label elements are available for " + actionQuantity.id, placeholder);
    }
  }

  handlePlaceholderCombobox(placeholder, actionQuantity) {
    var combobox = placeholder.querySelector("select");

    if (!combobox) {
      UpsellActionQuantityRelocator.reportUIError("No select element is available to replace with " + actionQuantity.id, placeholder);
      return;
    }

    var classList = combobox.getAttribute("class");

    if (classList) {
      actionQuantity.setAttribute("class", classList);
    }

    combobox.replaceWith(actionQuantity);
  }

  handleHiddenInputs(placeholder, actionQuantity) {
    var repo = UpsellActionQuantityRelocator.actionCodeTypeRepository.get(actionQuantity);
    if (!repo) return;
    placeholder.insertAdjacentElement("beforeend", repo.actionCode);
    placeholder.insertAdjacentElement("beforeend", repo.actionType);
  }

  removeOriginalContainer(actionQuantity) {
    var repo = UpsellActionQuantityRelocator.actionCodeTypeRepository.get(actionQuantity);
    if (!repo) return;
    var container = this.form.querySelector("[id$=\"" + repo.actionCode.value + "\"]");
    if (!container) return;
    container.remove();
  }

}
UpsellActionQuantityRelocator.actionCodeTypeRepository = new WeakMap();

/***/ }),

/***/ "../../Library/Shared/ts/utils/validate-event.ts":
/*!*******************************************************!*\
  !*** ../../Library/Shared/ts/utils/validate-event.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ValidateEvent; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "../../Library/node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/ts/utils/capture-element */ "../../Library/Shared/ts/utils/capture-element.ts");
/* harmony import */ var Shared_ts_utils_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Shared/ts/utils/validate */ "../../Library/Shared/ts/utils/validate.ts");




class ValidateEvent extends Shared_ts_utils_validate__WEBPACK_IMPORTED_MODULE_3__["default"] {
  /**
   * Represents a list of event types that can be assigned to perform validation on the HTMLInputElement type
   */

  /**
   * Represets a list of event types that can be assigned to perform validation on the HTMLInputElement type when invalid
   */

  /**
   * Represents a list of event types that can be assigned to perform validation on the HTMLSelectElement type
   */

  /**
   * Represets a list of event types that can be assigned to perform validation on the HTMLSelectElement type when invalid
   */

  /**
   * Represents a list of event types that can be assigned to perform validation on the HTMLTextAreaElement type
   */

  /**
   * Represets a list of event types that can be assigned to perform validation on the HTMLTextAreaElement type when invalid
   */

  /**
   * Reference name to the input event handler method that can be added and removed from the input element
   */

  /**
   * Reference name to the combobox event handler method that can be added and removed from the combobox element
   */

  /**
   * Reference name to the textarea event handler method that can be added and removed from the textarea element
   */

  /**
   * Provides the ability to apply validation rules from common.js through the Validate interface. Inheriting from the Validate interface, configuration settings include the ability to provide a specific element to represent the form to validate for, a CSS namespace to customize the presentation and an attribute to discern which form controls are required. Additionally, event type mapping can be provided to customize the validation experience.
   * @param config IValidateEventConfig
   */
  constructor(config) {
    var _config$inputEvents, _config$comboboxEvent, _config$textareaEvent, _config$invalidInputE, _config$invalidCombob, _config$invalidTextar;

    super(config);
    this.inputEvents = void 0;
    this.invalidInputEvents = void 0;
    this.comboboxEvents = void 0;
    this.invalidComboboxEvents = void 0;
    this.textareaEvents = void 0;
    this.invalidTextareaEvents = void 0;
    this.validateInputEvent = void 0;
    this.validateComboboxEvent = void 0;
    this.validateTextareaEvent = void 0;
    this.inputEvents = (_config$inputEvents = config == null ? void 0 : config.inputEvents) != null ? _config$inputEvents : [];
    this.comboboxEvents = (_config$comboboxEvent = config == null ? void 0 : config.comboboxEvents) != null ? _config$comboboxEvent : [];
    this.textareaEvents = (_config$textareaEvent = config == null ? void 0 : config.textareaEvents) != null ? _config$textareaEvent : [];
    this.invalidInputEvents = (_config$invalidInputE = config == null ? void 0 : config.invalidInputEvents) != null ? _config$invalidInputE : this.inputEvents;
    this.invalidComboboxEvents = (_config$invalidCombob = config == null ? void 0 : config.invalidComboboxEvents) != null ? _config$invalidCombob : this.comboboxEvents;
    this.invalidTextareaEvents = (_config$invalidTextar = config == null ? void 0 : config.invalidTextareaEvents) != null ? _config$invalidTextar : this.textareaEvents;

    this.validateInputEvent = event => {
      this.validateControl(event.target);
    };

    this.validateComboboxEvent = event => {
      this.validateControl(event.target);
    };

    this.validateTextareaEvent = event => {
      this.validateControl(event.target);
    };

    ValidateEvent.initializeCapture(this);
  }
  /**
   * Establishes a mutation observer on the form element and observes attribute changes on all required controls. Changes to the attributes will determine the flow control of valid/invalid event mapping.
   * @param context ValidateEvent
   * @returns void
   */


  static initializeCapture(context) {
    if (!context.form) return;
    var captureForm = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_2__["default"](context.form);
    var controls = context.getRequiredControls();
    captureForm.subscribe("attributes", record => {
      var control = record.target;
      if (!controls.includes(control)) return;
      var nodeName = control.nodeName.toLowerCase();

      if (context.isInvalidControl(control)) {
        switch (nodeName) {
          case "input":
            ValidateEvent.assignInvalidInputEvents(control, context);
            break;

          case "select":
            ValidateEvent.assignInvalidComboEvents(control, context);
            break;

          case "textarea":
            ValidateEvent.assignInvalidTextareaEvents(control, context);
            break;
        }
      }
    });
  }
  /**
   * Enable direct validation
   */


  validateOnDemand() {
    this.setFocusOnInvalidControl();
    this.processControlEvents();
  }
  /**
   * Enable validation based on the form's submit element's "click" event
   */


  validateOnSubmit() {
    var _this$submit;

    (_this$submit = this.submit) == null ? void 0 : _this$submit.addEventListener("click", () => {
      this.validateOnDemand();
    });
  }
  /**
   * Enable validation based on whether the captured element is the submit element
   */


  validateOnSubmitDelegation() {
    var _this$form;

    (_this$form = this.form) == null ? void 0 : _this$form.addEventListener("click", event => {
      var target = event.target;

      if (target === this.submit) {
        this.validateOnDemand();
      }
    });
  }
  /**
   * Enable event listeners mapping to each of the provided event types on input, combobox and textarea elements
   */


  processControlEvents() {
    this.processInputEvents();
    this.processComboboxEvents();
    this.processTextareaEvents();
  }
  /**
   * Removes all invalid input events and adds all valid input events to the control
   * @param input HTMLInputElement
   * @param context ValidateEvent
   */


  static assignValidInputEvents(input, context) {
    context.invalidInputEvents.forEach(event => {
      input.removeEventListener(event, context.validateInputEvent);
    });
    context.inputEvents.forEach(event => {
      input.removeEventListener(event, context.validateInputEvent);
      input.addEventListener(event, context.validateInputEvent);
    });
  }
  /**
   * Removes all valid input events and adds all invalid input events to the control
   * @param input HTMLInputElement
   * @param context ValidateEvent
   */


  static assignInvalidInputEvents(input, context) {
    context.inputEvents.forEach(event => {
      input.removeEventListener(event, context.validateInputEvent);
    });
    context.invalidInputEvents.forEach(event => {
      input.removeEventListener(event, context.validateInputEvent);
      input.addEventListener(event, context.validateInputEvent);
    });
  }
  /**
   * Removes all invalid combobox events and adds all valid combobox events to the control
   * @param combobox HTMLSelectElement
   * @param context ValidateEvent
   */


  static assignValidComboboxEvents(combobox, context) {
    context.invalidComboboxEvents.forEach(event => {
      combobox.removeEventListener(event, context.validateComboboxEvent);
    });
    context.comboboxEvents.forEach(event => {
      combobox.removeEventListener(event, context.validateComboboxEvent);
      combobox.addEventListener(event, context.validateComboboxEvent);
    });
  }
  /**
   * Removes all valid combobox events and adds all invalid combobox events to the control
   * @param combobox HTMLSelectElement
   * @param context ValidateEvent
   */


  static assignInvalidComboEvents(combobox, context) {
    context.comboboxEvents.forEach(event => {
      combobox.removeEventListener(event, context.validateComboboxEvent);
    });
    context.invalidComboboxEvents.forEach(event => {
      combobox.removeEventListener(event, context.validateComboboxEvent);
      combobox.addEventListener(event, context.validateComboboxEvent);
    });
  }
  /**
   * Removes all invalid textarea events and adds all valid textarea events to the control
   * @param textarea HTMLTextAreaElement
   * @param context ValidateEvent
   */


  static assignValidTextareaEvents(textarea, context) {
    context.invalidTextareaEvents.forEach(event => {
      textarea.removeEventListener(event, context.validateTextareaEvent);
    });
    context.textareaEvents.forEach(event => {
      textarea.removeEventListener(event, context.validateTextareaEvent);
      textarea.addEventListener(event, context.validateTextareaEvent);
    });
  }
  /**
   * Removes all valid textarea events and adds all invalid textarea events to the control
   * @param textarea HTMLTextAreaElement
   * @param context ValidateEvent
   */


  static assignInvalidTextareaEvents(textarea, context) {
    context.invalidTextareaEvents.forEach(event => {
      textarea.removeEventListener(event, context.validateTextareaEvent);
    });
    context.textareaEvents.forEach(event => {
      textarea.removeEventListener(event, context.validateTextareaEvent);
      textarea.addEventListener(event, context.validateTextareaEvent);
    });
  }
  /**
   * Enable event listeners mapping to each of the provided event types on input elements
   */


  processInputEvents() {
    this.getValidRequiredInputs().forEach(input => ValidateEvent.assignValidInputEvents(input, this));
    this.getInvalidRequiredInputs().forEach(input => ValidateEvent.assignInvalidInputEvents(input, this));
  }
  /**
   * Enable event listeners mapping to each of the provided event types on combobox elements
   */


  processComboboxEvents() {
    this.getValidRequiredComboboxes().forEach(combobox => ValidateEvent.assignValidComboboxEvents(combobox, this));
    this.getInvalidRequiredComboboxes().forEach(combobox => ValidateEvent.assignInvalidComboEvents(combobox, this));
  }
  /**
   * Enable event listeners mapping to each of the provided event types on textarea elements
   */


  processTextareaEvents() {
    this.getValidRequiredTextareas().forEach(textarea => ValidateEvent.assignValidTextareaEvents(textarea, this));
    this.getInvalidRequiredTextareas().forEach(textarea => ValidateEvent.assignInvalidTextareaEvents(textarea, this));
  }

}

/***/ }),

/***/ "../../Library/Shared/ts/utils/validate.ts":
/*!*************************************************!*\
  !*** ../../Library/Shared/ts/utils/validate.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Validate; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "../../Library/node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var element_closest_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! element-closest/browser */ "../../Library/node_modules/element-closest/browser.js");
/* harmony import */ var element_closest_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(element_closest_browser__WEBPACK_IMPORTED_MODULE_2__);



class Validate {
  /**
   * Represents the form element
   */

  /**
   * Represents an array of all combobox (select) controls
   */

  /**
   * Represents an array of all input controls
   */

  /**
   * Represents an array of all textarea elements
   */

  /**
   * Represents an array of controls that are neither combobox nor input controls
   */

  /**
   * Represents the current form submit button
   */

  /**
   * Represents the CSS namespace that is responsible for rendering each controls valid and invalid state. Defaults to *message*
   */

  /**
   * Represents the HTML attribute that will determine when a control is considered valid or invalid. Defaults to *required*
   */
  constructor(config) {
    var _config$form, _config$submit, _this$form, _config$namespace, _config$attribute;

    this.form = void 0;
    this.comboboxes = [];
    this.inputs = [];
    this.textareas = [];
    this.controlTargets = [];
    this.submit = void 0;
    this.namespace = void 0;
    this.attribute = void 0;
    this.form = (_config$form = config == null ? void 0 : config.form) != null ? _config$form : document.querySelector("form");
    this.submit = (_config$submit = config == null ? void 0 : config.submit) != null ? _config$submit : (_this$form = this.form) == null ? void 0 : _this$form.querySelector("[type=\"submit\"]");
    this.captureComboboxes();
    this.captureInputs();
    this.captureTextareas();
    this.namespace = (_config$namespace = config == null ? void 0 : config.namespace) != null ? _config$namespace : "message";
    this.attribute = (_config$attribute = config == null ? void 0 : config.attribute) != null ? _config$attribute : "required";
    this.getRequiredControls().filter(control => !control.hasAttribute("required")).forEach(control => {
      control.setAttribute("aria-required", "true");
      control.setAttribute("aria-invalid", "true");
    });
  }
  /**
   * Takes an element and updates the CSS rules in order to render the valid state
   * @param control Element
   */


  setControlToValid(control) {
    control.classList.remove(this.namespace + "__is-invalid");
    control.classList.add(this.namespace + "__is-valid");
  }
  /**
   * Takes an element and updates the CSS rules in order to render the invalid state
   * @param control Element
   */


  setControlToInvalid(control) {
    control.classList.remove(this.namespace + "__is-valid");
    control.classList.add(this.namespace + "__is-invalid");
  }
  /**
   * Takes an element and removes the CSS rules in order to render the default state
   * @param control Element
   */


  setControlToDefault(control) {
    control.classList.remove(this.namespace + "__is-valid");
    control.classList.remove(this.namespace + "__is-invalid");
  }
  /**
   * Refreshes the combobox array with a new array containing all combobox (select) controls in the current form
   */


  captureComboboxes() {
    if (!this.form) return;
    this.comboboxes = Array.from(this.form.querySelectorAll("select"));
  }
  /**
   * Refreshes the input array with a new array containing all input controls in the current form
   */


  captureInputs() {
    if (!this.form) return;
    this.inputs = Array.from(this.form.querySelectorAll("input"));
  }
  /**
   * Refreshes the textarea array with a new array containing all textarea controls in the current form
   */


  captureTextareas() {
    if (!this.form) return;
    this.textareas = Array.from(this.form.querySelectorAll("textarea"));
  }
  /**
   * Accesses the first invalid control and attempts to set focus to it
   */


  setFocusOnInvalidControl(candidates) {
    var controls = candidates != null ? candidates : this.getRequiredControls();
    var control = controls.find(control => this.getTargetByControl(control).classList.contains(this.namespace + "__is-invalid"));

    if (control) {
      requestAnimationFrame(() => {
        control.focus();
        control.scrollIntoView();
      });
    }
  }
  /**
   * Takes either an input or combobox element and determines the nearest element that can handle rendering the control's valid and invalid state via CSS
   * @param control HTMLInputElement or HTMLSelectElement
   */


  validateControl(control, predicate) {
    var target = this.getTargetByControl(control);
    var checkValidity = typeof predicate === "function" ? predicate(control) : control.checkValidity();
    checkValidity ? this.setControlToValid(target) : this.setControlToInvalid(target);
    var isRequiredControl = this.getRequiredControls().find(requiredControl => requiredControl === control);

    if (isRequiredControl && !control.hasAttribute("required")) {
      control.setAttribute("aria-invalid", checkValidity ? "false" : "true");
    }
  }

  validateControlTarget(controlTarget, predicate) {
    var hasPredicate = typeof predicate === "function";
    if (!hasPredicate) return;
    predicate(controlTarget) ? this.setControlToValid(controlTarget) : this.setControlToInvalid(controlTarget);
  }
  /**
   * Takes an input or combobox element and determines if the control is invalid
   * @param control HTMLInputElement | HTMLSelectElement
   * @returns boolean
   */


  isValidControl(control) {
    var target = this.getTargetByControl(control);
    return target.classList.contains(this.namespace + "__is-valid") || !this.isInvalidControl(control);
  }
  /**
   * Takes an input or combobox element and determines if the control is valid
   * @param control HTMLInputElement | HTMLSelectElement
   * @returns boolean
   */


  isInvalidControl(control) {
    var target = this.getTargetByControl(control);
    return this.isInvalidControlTarget(target);
  }
  /**
   * Determines if the control is valid based on the class name match from the control target element
   * @param target ValidateControlTarget
   * @returns boolean
   */


  isValidControlTarget(target) {
    return !this.isInvalidControlTarget(target);
  }
  /**
   * Determines if the control is invalid based on the class name match from the control target element
   * @param target ValidateControlTarget
   * @returns boolean
   */


  isInvalidControlTarget(target) {
    return target.classList.contains(this.namespace + "__is-invalid");
  }
  /**
   * Returns the closest element that matches the CSS class namespace or defaults to the control itself
   * @param control HTMLInputElement or HTMLSelectElement
   * @returns Element | T
   */


  getTargetByControl(control) {
    var _control$closest;

    return (_control$closest = control.closest("." + this.namespace + "__select")) != null ? _control$closest : control;
  }
  /**
   * Returns the closest element that matches the CSS class namespace
   * @param target ValidateControlTarget
   * @returns HTMLElement | null
   */


  getScopeByTarget(target) {
    return target.closest("." + this.namespace);
  }
  /**
   * Returns the valid message string associated with the target
   * @param target ValidateControlTarget
   * @returns string
   */


  getValidMessageByTarget(target) {
    var _this$getScopeByTarge, _this$getScopeByTarge2, _this$getScopeByTarge3, _this$getScopeByTarge4;

    return (_this$getScopeByTarge = (_this$getScopeByTarge2 = this.getScopeByTarget(target)) == null ? void 0 : (_this$getScopeByTarge3 = _this$getScopeByTarge2.querySelector("." + this.namespace + "__invalid")) == null ? void 0 : (_this$getScopeByTarge4 = _this$getScopeByTarge3.textContent) == null ? void 0 : _this$getScopeByTarge4.trim()) != null ? _this$getScopeByTarge : "";
  }
  /**
   * Sets a specified validation message to a control to accomodate a specific validation rule.
   * @param target ValidateControlTarget
   * @param message string
   * @returns void
   */


  setInvalidMessageByTarget(target, message) {
    var _this$getScopeByTarge5;

    var element = (_this$getScopeByTarge5 = this.getScopeByTarget(target)) == null ? void 0 : _this$getScopeByTarge5.querySelector("." + this.namespace + "__invalid");
    if (!element) return;
    element.textContent = message;
  }
  /**
   * Returns the invalid message string associated with the target
   * @param target ValidateControlTarget
   * @returns string
   */


  getInvalidMessageByTarget(target) {
    var _this$getScopeByTarge6, _this$getScopeByTarge7, _this$getScopeByTarge8, _this$getScopeByTarge9;

    return (_this$getScopeByTarge6 = (_this$getScopeByTarge7 = this.getScopeByTarget(target)) == null ? void 0 : (_this$getScopeByTarge8 = _this$getScopeByTarge7.querySelector("." + this.namespace + "__invalid")) == null ? void 0 : (_this$getScopeByTarge9 = _this$getScopeByTarge8.textContent) == null ? void 0 : _this$getScopeByTarge9.trim()) != null ? _this$getScopeByTarge6 : "";
  }
  /**
   * Returns a new array containing both input and combobox elements that contain the attribute that represents the required state
   * @returns ValidateControl[]
   */


  getRequiredControls() {
    if (!this.form) return [];
    return Array.from(this.form.querySelectorAll("[" + this.attribute + "], [data-group-required]"));
  }
  /**
   * Returns all invalid and required controls
   * @returns ValidateControl[]
   */


  getInvalidRequiredControls() {
    return this.getRequiredControls().filter(control => this.isInvalidControl(control));
  }
  /**
   * Returns all valid and required controls
   * @returns ValidateControl[]
   */


  getValidRequiredControls() {
    return this.getRequiredControls().filter(control => this.isValidControl(control));
  }
  /**
   * Returns all invalid and required target elements
   * @returns ValidateControlTarget[]
   */


  getInvalidRequiredTargets() {
    return this.getInvalidRequiredControls().map(control => this.getTargetByControl(control));
  }
  /**
   * Returns all valid and required target elements
   * @returns ValidateControlTarget[]
   */


  getValidRequiredTargets() {
    return this.getValidRequiredControls().map(control => this.getTargetByControl(control));
  }
  /**
   * Returns a new array of input elements that contain the attribute that represents the required state
   * @returns HTMLInputElement[]
   */


  getRequiredInputs() {
    var inputs = this.inputs.filter(input => input.hasAttribute(this.attribute) || input.hasAttribute("data-group-required"));
    inputs.filter(input => input.type === "radio").forEach(radio => this.inputs.filter(input => input.name === radio.name && input !== radio).forEach(input => inputs.push(input)));
    inputs.filter(input => input.type === "checkbox").forEach(checkbox => {
      var group = this.inputs.filter(input => input.name === checkbox.name);
      group.filter(input => input !== checkbox).forEach(input => inputs.push(input));

      if (group.length > 1 && this.attribute === "required") {
        group.forEach(input => {
          input.removeAttribute("required");
          input.setAttribute("data-group-required", input.name);
        });
      }
    });
    var uniqueInputs = inputs.filter(function (item, pos) {
      return inputs.indexOf(item) == pos;
    });
    return uniqueInputs;
  }
  /**
   * Returns all invalid and required input controls
   * @returns HTMLInputElement[]
   */


  getInvalidRequiredInputs() {
    return this.getRequiredInputs().filter(input => this.isInvalidControl(input));
  }
  /**
   * Returns all valid and required input controls
   * @returns HTMLInputElement[]
   */


  getValidRequiredInputs() {
    return this.getRequiredInputs().filter(input => this.isValidControl(input));
  }
  /**
   * Returns a new array of combobox elements that contain the attribute that represents the required state
   * @returns HTMLSelectElement[]
   */


  getRequiredComboboxes() {
    return this.comboboxes.filter(combobox => combobox.hasAttribute(this.attribute));
  }
  /**
   * Returns all invalid and required combobox controls
   * @returns HTMLSelectElement[]
   */


  getInvalidRequiredComboboxes() {
    return this.getRequiredComboboxes().filter(combobox => this.isInvalidControl(combobox));
  }
  /**
   * Returns all valid and required combobox controls
   * @returns HTMLSelectElement[]
   */


  getValidRequiredComboboxes() {
    return this.getRequiredComboboxes().filter(combobox => this.isValidControl(combobox));
  }
  /**
   * Returns a new array of textarea elements that contain the attribute that represents the required state
   * @returns HTMLTextAreaElement[]
   */


  getRequiredTextareas() {
    return this.textareas.filter(textarea => textarea.hasAttribute(this.attribute));
  }
  /**
   * Returns all invalid and required textarea controls
   * @returns HTMLTextAreaElement[]
   */


  getInvalidRequiredTextareas() {
    return this.getRequiredTextareas().filter(textarea => this.isInvalidControl(textarea));
  }
  /**
   * Returns all valid and required textarea controls
   * @returns HTMLTextAreaElement[]
   */


  getValidRequiredTextareas() {
    return this.getRequiredTextareas().filter(textarea => this.isValidControl(textarea));
  }
  /**
   * Iterates through all required combobox elements and validates each combobox
   */


  validateComboboxes(predicate) {
    this.getRequiredComboboxes().forEach(combobox => this.validateControl(combobox, predicate));
  }
  /**
   * Iterates through all required controllers elements and validates each combobox
   */


  validateControls(predicate) {
    this.getRequiredControls().forEach(control => {
      this.validateControl(control, predicate);
    });
  }
  /**
   * Iterates through all required control target elements and validates each combobox
   */


  validateControlTargets(predicate) {
    this.controlTargets.forEach(controlTarget => {
      this.validateControlTarget(controlTarget, predicate);
    });
  }
  /**
   * Iterates through all required input elements and validates each input
   */


  validateInputs(predicate) {
    this.getRequiredInputs().forEach(input => this.validateControl(input, predicate));
  }
  /**
   * Iterates through all required textarea elements and validates each textarea
   */


  validateTextareas(predicate) {
    this.getRequiredTextareas().forEach(textarea => this.validateControl(textarea, predicate));
  }
  /**
   * Iterates through all required combobox and input elements and validates each element
   */


  validateAll(predicate) {
    this.validateInputs(predicate);
    this.validateComboboxes(predicate);
    this.validateTextareas(predicate);
    this.validateControlTargets(predicate);
  }
  /**
   * Determines if the entire form is considered valid
   * @returns boolean
   */


  isValidForm() {
    return this.getInvalidRequiredControls().length === 0;
  }

}

/***/ }),

/***/ "../../Library/Shared/ts/utils/vimeo-manager.ts":
/*!******************************************************!*\
  !*** ../../Library/Shared/ts/utils/vimeo-manager.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VimeoManager; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../Library/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../Library/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../../Library/node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../../Library/node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vimeo_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vimeo/player */ "../../Library/node_modules/@vimeo/player/dist/player.es.js");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Library/Shared/ts/utils/html.ts");
/* harmony import */ var Shared_ts_utils_resource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Shared/ts/utils/resource */ "../../Library/Shared/ts/utils/resource.ts");










class VimeoManager {
  /**
   * Represents the network endpoint for the Vimeo Player SDK library
   */

  /**
   * Represents the relationship between the Vimeo iframe element and the XMLHttpRequest object that it is connected to
   */

  /**
   * Represents the relationship between the Vimeo iframe element and the Vimeo Player instance that it is connected to
   */

  /**
   * Represents the relationship between the Vimeo Player instance and the Vimeo iframe element that it is connected to
   */

  /**
   * Creates a manager interface providing the ability to create, set and get a Vimeo iframe, a Vimeo Player instance and a Vimeo oEmbed object.
   */
  constructor() {}
  /**
   * Uses the Vimeo video id to make an oEmbed request. A promise object is returned where the resolve contains the XMLHttpRequest object.
   * @param id string
   * @returns Promise<XMLHttpRequest>
   */


  static requestoEmbed(id) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("load", () => resolve(xhr));
      xhr.addEventListener("error", () => reject("The request could not be completed with " + id));
      xhr.open("GET", "https://vimeo.com/api/oembed.json?url=https://vimeo.com/" + id);
      xhr.send();
    });
  }
  /**
   * Creates a new script element with a source pointing to the 3rd-party Vimeo Player SDK file
   * @returns Promise
   */


  requestPlayer() {
    var context = this;
    return new Promise((resolve, reject) => {
      if (!context.hasPlayerInstalled()) {
        var player = (0,Shared_ts_utils_resource__WEBPACK_IMPORTED_MODULE_9__.createAppendScript)(VimeoManager.vimeoPlayerSDKEndPoint);

        player.onload = () => resolve("success");

        player.onerror = () => reject("The request to " + VimeoManager.vimeoPlayerSDKEndPoint + " could not be completed.");
      }
    });
  }
  /**
   * Determines if the 3rd-party Vimeo Player SDK file exists in the document
   * @returns boolean
   */


  hasPlayerInstalled() {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_8__.elementExists)(document.querySelector("script[src^=\"" + VimeoManager.vimeoPlayerSDKEndPoint + "\"]"));
  }
  /**
   * Uses the Vimeo video id to create a Vimeo iframe element through an oEmbed request.
   * @param id string
   * @returns Promise<HTMLIFrameElement>
   */


  createIframeById(id) {
    var context = this;
    return new Promise((resolve, reject) => {
      var element = document.createElement("div");
      context.createoEmbedById(id).then(xhr => {
        var response = JSON.parse(xhr.response);
        element.innerHTML = response.html;
        var iframe = element.firstChild;
        VimeoManager.oEmbedRepo.set(iframe, xhr);
        resolve(iframe);
      }).catch(error => reject(error));
    });
  }
  /**
   * Uses the Vimeo video id to make an oEmbed request. A promise object is returned where the resolve state contains the oEmbed data stored in an XMLHttpRequest object.
   * @param id string
   * @returns Promise<XMLHttpRequest>
   */


  createoEmbedById(id) {
    return new Promise((resolve, reject) => {
      VimeoManager.requestoEmbed(id).then(xhr => resolve(xhr)).catch(error => reject(error));
    });
  }
  /**
   * Takes the Vimeo iframe element as a key to look up it's connected oEmbed data stored in an XMLHttpRequest object via the oEmbed WeakMap Repository.
   * @param iframe HTMLIFrameElement
   * @returns XMLHttpRequest
   */


  getoEmbedByIframe(iframe) {
    return VimeoManager.oEmbedRepo.get(iframe);
  }
  /**
   * Creates a new Vimeo Player instance by using the placeholder element id, the Vimeo video id and an optional object of Vimeo video parameters.
   * @param elementId string
   * @param id string
   * @param options any
   * @returns Player
   */


  createPlayerById(elementId, id, options) {
    var config = options != null ? options : {};
    config.id = id;
    var player = new _vimeo_player__WEBPACK_IMPORTED_MODULE_7__["default"](elementId, config);
    VimeoManager.setIframePlayerRepo(id, elementId, player);
    return player;
  }
  /**
   * Takes the Vimeo CDN image URL and transforms it by replacing the width by height bit at the end of the URL with query parameters where `mw` represents the width, `mh` represents the height and `q` represents the quality. The transformed URL is returned.
   * @param url string
   * @param width string
   * @param height string
   * @param quality string
   * @returns string
   */


  static transformPosterImageUrl(url, width, height, quality) {
    var path = url.split(/_\d{1,5}|x\d{1,5}/g)[0];
    path = path + "?mw=" + width + "&mh=" + height + "&q=" + quality;
    return path;
  }
  /**
   * Takes a Vimeo Id and returns the current Vimeo poster thumbnail image.
   */


  generatePosterImage(id, imageSpecs) {
    var context = this;
    return new Promise((resolve, reject) => {
      context.createoEmbedById(id).then(response => {
        var _imageSpecs$width, _imageSpecs$height, _imageSpecs$quality;

        var data = JSON.parse(response.response);
        var image = VimeoManager.transformPosterImageUrl(data.thumbnail_url, (_imageSpecs$width = imageSpecs == null ? void 0 : imageSpecs.width) != null ? _imageSpecs$width : data.width, (_imageSpecs$height = imageSpecs == null ? void 0 : imageSpecs.height) != null ? _imageSpecs$height : data.height, (_imageSpecs$quality = imageSpecs == null ? void 0 : imageSpecs.quality) != null ? _imageSpecs$quality : "70");
        resolve(image);
      }).catch(error => reject(error));
    });
  }
  /**
   * Takes a Vimeo Iframe element and extracts the 9-digit Vimeo Id
   * @param iframe HTMLIFrameElement
   * @returns string | null
   */


  getIdByIframe(iframe) {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_8__.elementExists)(iframe) ? this.getIdByUrl(iframe.src) : undefined;
  }
  /**
   * Takes a Vimeo Player URL and extracts the 9-digit Vimeo Id
   * @param url string
   * @returns string | null
   */


  getIdByUrl(url) {
    var _url$match;

    var id = undefined;
    var match = (_url$match = url.match(/\/player.vimeo.com\/video\/\d{9}/gi)) != null ? _url$match : [];

    if (match.length === 1) {
      var _match$shift;

      id = (_match$shift = match.shift()) == null ? void 0 : _match$shift.split(/\/player.vimeo.com\/video\//).pop();
    }

    return id;
  }
  /**
   * Takes the Vimeo video id, the placeholder element id and the Vimeo Player instance and captures when the Vimeo iframe element is inserted into the document. The captured Vimeo iframe element along with the Vimeo instance is the added into both the Vimeo Player WeakMap repository and the Vimeo iframe WeakMap repository.
   * @param id string
   * @param elementId string
   * @param player Player
   */


  static setIframePlayerRepo(id, elementId, player) {
    this.observePlaceholder(document.querySelector("#" + elementId), {
      childList: true
    }).then(records => {
      records.forEach(record => {
        var iframe = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_8__.enumerateElements)(record.addedNodes).find(node => {
          var _node$getAttribute;

          return ((_node$getAttribute = node.getAttribute("src")) != null ? _node$getAttribute : "").match(id);
        });

        if (iframe) {
          VimeoManager.setPlayerByIframe(iframe, player);
        }
      });
    });
  }
  /**
   * Creates a new MutationObserver interface on the placeholder element and will observe the element. A promise object is returned where the resolve state contains the mutation record array.
   * @param placeholder HTMLElement
   * @param options MutationObserverInit
   * @returns Promise<MutationRecord[]>
   */


  static observePlaceholder(placeholder, options) {
    return new Promise((resolve, reject) => {
      var observer = new MutationObserver((records, observer) => {
        resolve(records);
        observer.disconnect();
      });
      observer.observe(placeholder, options != null ? options : {});
    });
  }
  /**
   * Takes the Vimeo iframe element and connects to a new Vimeo Player instance.
   * @param iframe HTMLIFrameElement
   * @returns Player
   */


  createPlayerByIframe(iframe) {
    var player = new _vimeo_player__WEBPACK_IMPORTED_MODULE_7__["default"](iframe);
    VimeoManager.setPlayerByIframe(iframe, player);
    return player;
  }
  /**
   * Takes the Vimeo iframe element and the Vimeo Player instance and connects each to their respective WeakMap repository.
   * @param iframe HTMLIFrameElement
   * @param player Player
   */


  static setPlayerByIframe(iframe, player) {
    this.playerRepo.set(iframe, player);
    this.iframeRepo.set(player, iframe);
  }
  /**
   * Takes the Vimeo iframe element as a key to look up it's connected Vimeo Player instance through the Vimeo Player WeakMap repository.
   * @param iframe HTMLIFrameElement
   * @returns Player
   */


  getPlayerByIframe(iframe) {
    return VimeoManager.playerRepo.get(iframe);
  }
  /**
   * Takes the Vimeo Player instance as a key to look up it's connected Vimeo iframe element through the Vimeo iframe WeakMap repository.
   * @param player Player
   * @returns HTMLIFrameElement
   */


  getIframeByPlayer(player) {
    return VimeoManager.iframeRepo.get(player);
  }

}
VimeoManager.vimeoPlayerSDKEndPoint = "https://player.vimeo.com/api/player.js";
VimeoManager.oEmbedRepo = new WeakMap();
VimeoManager.playerRepo = new WeakMap();
VimeoManager.iframeRepo = new WeakMap();

/***/ }),

/***/ "../../Library/node_modules/core-js/internals/a-callable.js":
/*!******************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/a-callable.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "../../Library/node_modules/core-js/internals/try-to-string.js");

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/a-constructor.js":
/*!*********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/a-constructor.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "../../Library/node_modules/core-js/internals/is-constructor.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "../../Library/node_modules/core-js/internals/try-to-string.js");

var TypeError = global.TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");

var String = global.String;
var TypeError = global.TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../../Library/node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../Library/node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = (__webpack_require__(/*! ../internals/string-multibyte */ "../../Library/node_modules/core-js/internals/string-multibyte.js").charAt);

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/an-instance.js":
/*!*******************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "../../Library/node_modules/core-js/internals/object-is-prototype-of.js");

var TypeError = global.TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw TypeError('Incorrect invocation');
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/an-object.js":
/*!*****************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/an-object.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../Library/node_modules/core-js/internals/is-object.js");

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "../../Library/node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../../Library/node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/array-includes.js":
/*!**********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../Library/node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../Library/node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../../Library/node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../Library/node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../Library/node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../Library/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../../Library/node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../../Library/node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/array-slice-simple.js":
/*!**************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/array-slice-simple.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../Library/node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../../Library/node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../../Library/node_modules/core-js/internals/create-property.js");

var Array = global.Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/array-slice.js":
/*!*******************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/array-slice.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../../Library/node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "../../Library/node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../Library/node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "../../Library/node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/classof.js":
/*!***************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/classof.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../../Library/node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "../../Library/node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../Library/node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../../Library/node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../Library/node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../Library/node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ "../../Library/node_modules/core-js/internals/iterators-core.js").IteratorPrototype);
var create = __webpack_require__(/*! ../internals/object-create */ "../../Library/node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../Library/node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../Library/node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../Library/node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../Library/node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../Library/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../Library/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************************/
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/create-property.js":
/*!***********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/create-property.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../../Library/node_modules/core-js/internals/to-property-key.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../Library/node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../Library/node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../Library/node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../Library/node_modules/core-js/internals/function-call.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../Library/node_modules/core-js/internals/is-pure.js");
var FunctionName = __webpack_require__(/*! ../internals/function-name */ "../../Library/node_modules/core-js/internals/function-name.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "../../Library/node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../Library/node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../Library/node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../Library/node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../Library/node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../Library/node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../Library/node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "../../Library/node_modules/core-js/internals/iterators-core.js");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/descriptors.js":
/*!*******************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../Library/node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************************/
/***/ (function(module) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/dom-token-list-prototype.js":
/*!********************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../../Library/node_modules/core-js/internals/document-create-element.js");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/engine-is-browser.js":
/*!*************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/engine-is-browser.js ***!
  \*************************************************************************/
/***/ (function(module) {

module.exports = typeof window == 'object';


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/engine-is-ios-pebble.js":
/*!****************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/engine-is-ios-pebble.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../Library/node_modules/core-js/internals/engine-user-agent.js");
var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/engine-is-ios.js":
/*!*********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/engine-is-ios.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../Library/node_modules/core-js/internals/engine-user-agent.js");

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/engine-is-node.js":
/*!**********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/engine-is-node.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../Library/node_modules/core-js/internals/classof-raw.js");
var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/engine-is-webos-webkit.js":
/*!******************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/engine-is-webos-webkit.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../Library/node_modules/core-js/internals/engine-user-agent.js");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../Library/node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../Library/node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************************/
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/export.js":
/*!**************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/export.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../Library/node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../Library/node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../Library/node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../Library/node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../../Library/node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../Library/node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/fails.js":
/*!*************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/fails.js ***!
  \*************************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "../../Library/node_modules/core-js/modules/es.regexp.exec.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../Library/node_modules/core-js/internals/redefine.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "../../Library/node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../Library/node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/flatten-into-array.js":
/*!**************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/flatten-into-array.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../../Library/node_modules/core-js/internals/is-array.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../../Library/node_modules/core-js/internals/length-of-array-like.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../Library/node_modules/core-js/internals/function-bind-context.js");

var TypeError = global.TypeError;

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        elementLen = lengthOfArrayLike(element);
        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/function-apply.js":
/*!**********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/function-apply.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../../Library/node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../../Library/node_modules/core-js/internals/a-callable.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../../Library/node_modules/core-js/internals/function-bind-native.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/function-bind-native.js":
/*!****************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/function-bind-native.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/function-call.js":
/*!*********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/function-call.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../../Library/node_modules/core-js/internals/function-bind-native.js");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/function-name.js":
/*!*********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/function-name.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../Library/node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../Library/node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/function-uncurry-this.js":
/*!*****************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/function-uncurry-this.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../../Library/node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/get-built-in.js":
/*!********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "../../Library/node_modules/core-js/internals/classof.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../../Library/node_modules/core-js/internals/get-method.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../Library/node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/get-iterator.js":
/*!********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../Library/node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../../Library/node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../Library/node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "../../Library/node_modules/core-js/internals/try-to-string.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../../Library/node_modules/core-js/internals/get-iterator-method.js");

var TypeError = global.TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/get-method.js":
/*!******************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/get-method.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../../Library/node_modules/core-js/internals/a-callable.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/get-substitution.js":
/*!************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../Library/node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/global.js":
/*!**************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/global.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/has-own-property.js":
/*!************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/has-own-property.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../Library/node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/host-report-errors.js":
/*!**************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/html.js":
/*!************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/html.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../Library/node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../Library/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../../Library/node_modules/core-js/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../Library/node_modules/core-js/internals/classof-raw.js");

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../Library/node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../Library/node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../../Library/node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/internal-state.js":
/*!**********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "../../Library/node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../Library/node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../Library/node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../Library/node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "../../Library/node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../Library/node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../Library/node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../Library/node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/is-array.js":
/*!****************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/is-array.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../Library/node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/is-callable.js":
/*!*******************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/is-callable.js ***!
  \*******************************************************************/
/***/ (function(module) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/is-constructor.js":
/*!**********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/is-constructor.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof */ "../../Library/node_modules/core-js/internals/classof.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../Library/node_modules/core-js/internals/get-built-in.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../Library/node_modules/core-js/internals/inspect-source.js");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/is-forced.js":
/*!*****************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/is-object.js":
/*!*****************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/is-object.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/is-pure.js":
/*!***************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/is-pure.js ***!
  \***************************************************************/
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../Library/node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../Library/node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/is-symbol.js":
/*!*****************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../Library/node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "../../Library/node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../../Library/node_modules/core-js/internals/use-symbol-as-uid.js");

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/iterate.js":
/*!***************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/iterate.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../Library/node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../Library/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../Library/node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "../../Library/node_modules/core-js/internals/try-to-string.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "../../Library/node_modules/core-js/internals/is-array-iterator-method.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../../Library/node_modules/core-js/internals/length-of-array-like.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "../../Library/node_modules/core-js/internals/object-is-prototype-of.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "../../Library/node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../../Library/node_modules/core-js/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "../../Library/node_modules/core-js/internals/iterator-close.js");

var TypeError = global.TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(/*! ../internals/function-call */ "../../Library/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../Library/node_modules/core-js/internals/an-object.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../../Library/node_modules/core-js/internals/get-method.js");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../../Library/node_modules/core-js/internals/object-create.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../Library/node_modules/core-js/internals/object-get-prototype-of.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../Library/node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../Library/node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/iterators.js":
/*!*****************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/iterators.js ***!
  \*****************************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/length-of-array-like.js":
/*!****************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/length-of-array-like.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__(/*! ../internals/to-length */ "../../Library/node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/microtask.js":
/*!*****************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/microtask.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../Library/node_modules/core-js/internals/function-bind-context.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../Library/node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var macrotask = (__webpack_require__(/*! ../internals/task */ "../../Library/node_modules/core-js/internals/task.js").set);
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "../../Library/node_modules/core-js/internals/engine-is-ios.js");
var IS_IOS_PEBBLE = __webpack_require__(/*! ../internals/engine-is-ios-pebble */ "../../Library/node_modules/core-js/internals/engine-is-ios-pebble.js");
var IS_WEBOS_WEBKIT = __webpack_require__(/*! ../internals/engine-is-webos-webkit */ "../../Library/node_modules/core-js/internals/engine-is-webos-webkit.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "../../Library/node_modules/core-js/internals/engine-is-node.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/native-promise-constructor.js":
/*!**********************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/native-promise-constructor.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");

module.exports = global.Promise;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../Library/node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../Library/node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/new-promise-capability.js":
/*!******************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../../Library/node_modules/core-js/internals/a-callable.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "../../Library/node_modules/core-js/internals/is-regexp.js");

var TypeError = global.TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../Library/node_modules/core-js/internals/to-string.js");
var trim = (__webpack_require__(/*! ../internals/string-trim */ "../../Library/node_modules/core-js/internals/string-trim.js").trim);
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "../../Library/node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/object-assign.js":
/*!*********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../Library/node_modules/core-js/internals/descriptors.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../Library/node_modules/core-js/internals/function-call.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../Library/node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../../Library/node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../Library/node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../Library/node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../Library/node_modules/core-js/internals/indexed-object.js");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/object-create.js":
/*!*********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/object-create.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../Library/node_modules/core-js/internals/an-object.js");
var definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ "../../Library/node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../Library/node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../Library/node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "../../Library/node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../../Library/node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../Library/node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../Library/node_modules/core-js/internals/descriptors.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "../../Library/node_modules/core-js/internals/v8-prototype-define-bug.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../Library/node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../Library/node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../Library/node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../Library/node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../Library/node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../Library/node_modules/core-js/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "../../Library/node_modules/core-js/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../Library/node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../../Library/node_modules/core-js/internals/to-property-key.js");

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../Library/node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../Library/node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../Library/node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../Library/node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../Library/node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../../Library/node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../Library/node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../Library/node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../Library/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../Library/node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../Library/node_modules/core-js/internals/has-own-property.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../Library/node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../Library/node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "../../Library/node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var Object = global.Object;
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/object-is-prototype-of.js":
/*!******************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/object-is-prototype-of.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../Library/node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../Library/node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__(/*! ../internals/array-includes */ "../../Library/node_modules/core-js/internals/array-includes.js").indexOf);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../Library/node_modules/core-js/internals/hidden-keys.js");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/object-keys.js":
/*!*******************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../Library/node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../Library/node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../Library/node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../../Library/node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*****************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../Library/node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../Library/node_modules/core-js/internals/is-object.js");

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/own-keys.js":
/*!****************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/own-keys.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../Library/node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../../Library/node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../../Library/node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../Library/node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/perform.js":
/*!***************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/perform.js ***!
  \***************************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/promise-resolve.js":
/*!***********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../Library/node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../Library/node_modules/core-js/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "../../Library/node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/queue.js":
/*!*************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/queue.js ***!
  \*************************************************************/
/***/ (function(module) {

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/redefine-all.js":
/*!********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "../../Library/node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/redefine.js":
/*!****************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/redefine.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../Library/node_modules/core-js/internals/has-own-property.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../Library/node_modules/core-js/internals/create-non-enumerable-property.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../Library/node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../Library/node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../Library/node_modules/core-js/internals/internal-state.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "../../Library/node_modules/core-js/internals/function-name.js").CONFIGURABLE);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../Library/node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../Library/node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../Library/node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "../../Library/node_modules/core-js/internals/regexp-exec.js");

var TypeError = global.TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(/*! ../internals/function-call */ "../../Library/node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../Library/node_modules/core-js/internals/to-string.js");
var regexpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "../../Library/node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "../../Library/node_modules/core-js/internals/regexp-sticky-helpers.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../../Library/node_modules/core-js/internals/shared.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../../Library/node_modules/core-js/internals/object-create.js");
var getInternalState = (__webpack_require__(/*! ../internals/internal-state */ "../../Library/node_modules/core-js/internals/internal-state.js").get);
var UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ "../../Library/node_modules/core-js/internals/regexp-unsupported-dot-all.js");
var UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ "../../Library/node_modules/core-js/internals/regexp-unsupported-ncg.js");

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../Library/node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/regexp-unsupported-dot-all.js":
/*!**********************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/regexp-unsupported-dot-all.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/regexp-unsupported-ncg.js":
/*!******************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/regexp-unsupported-ncg.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/set-global.js":
/*!******************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/set-global.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/set-species.js":
/*!*******************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/set-species.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../Library/node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../Library/node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../Library/node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "../../Library/node_modules/core-js/internals/object-define-property.js").f);
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../Library/node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/shared-key.js":
/*!******************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/shared-key.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "../../Library/node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../Library/node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/shared-store.js":
/*!********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/shared-store.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../Library/node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/shared.js":
/*!**************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/shared.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../Library/node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../../Library/node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.21.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../Library/node_modules/core-js/internals/an-object.js");
var aConstructor = __webpack_require__(/*! ../internals/a-constructor */ "../../Library/node_modules/core-js/internals/a-constructor.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../../Library/node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../Library/node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../Library/node_modules/core-js/internals/require-object-coercible.js");

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "../../Library/node_modules/core-js/internals/function-name.js").PROPER);
var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "../../Library/node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/string-trim.js":
/*!*******************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../Library/node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../Library/node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "../../Library/node_modules/core-js/internals/whitespaces.js");

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/task.js":
/*!************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/task.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "../../Library/node_modules/core-js/internals/function-apply.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../Library/node_modules/core-js/internals/function-bind-context.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../Library/node_modules/core-js/internals/has-own-property.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");
var html = __webpack_require__(/*! ../internals/html */ "../../Library/node_modules/core-js/internals/html.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "../../Library/node_modules/core-js/internals/array-slice.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../../Library/node_modules/core-js/internals/document-create-element.js");
var validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ "../../Library/node_modules/core-js/internals/validate-arguments-length.js");
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "../../Library/node_modules/core-js/internals/engine-is-ios.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "../../Library/node_modules/core-js/internals/engine-is-node.js");

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../../Library/node_modules/core-js/internals/to-integer-or-infinity.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../Library/node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../Library/node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/to-integer-or-infinity.js":
/*!******************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \******************************************************************************/
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/to-length.js":
/*!*****************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/to-length.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../../Library/node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/to-object.js":
/*!*****************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/to-object.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../Library/node_modules/core-js/internals/require-object-coercible.js");

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/to-primitive.js":
/*!********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../Library/node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../Library/node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../../Library/node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../../Library/node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "../../Library/node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/to-property-key.js":
/*!***********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../Library/node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../../Library/node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/to-string.js":
/*!*****************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/to-string.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var classof = __webpack_require__(/*! ../internals/classof */ "../../Library/node_modules/core-js/internals/classof.js");

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/try-to-string.js":
/*!*********************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/try-to-string.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/uid.js":
/*!***********************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/uid.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../Library/node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!*******************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../Library/node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/validate-arguments-length.js":
/*!*********************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/validate-arguments-length.js ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");

var TypeError = global.TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../../Library/node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../Library/node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../Library/node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../Library/node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../../Library/node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "../../Library/node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************************!*\
  !*** ../../Library/node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************************/
/***/ (function(module) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/es.array.flat.js":
/*!*******************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/es.array.flat.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../Library/node_modules/core-js/internals/export.js");
var flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ "../../Library/node_modules/core-js/internals/flatten-into-array.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../Library/node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../../Library/node_modules/core-js/internals/length-of-array-like.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../../Library/node_modules/core-js/internals/to-integer-or-infinity.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../../Library/node_modules/core-js/internals/array-species-create.js");

// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg));
    return A;
  }
});


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../Library/node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../Library/node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../Library/node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../Library/node_modules/core-js/internals/internal-state.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "../../Library/node_modules/core-js/internals/object-define-property.js").f);
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../../Library/node_modules/core-js/internals/define-iterator.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../Library/node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../Library/node_modules/core-js/internals/descriptors.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/es.array.reverse.js":
/*!**********************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/es.array.reverse.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../Library/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../../Library/node_modules/core-js/internals/is-array.js");

var un$Reverse = uncurryThis([].reverse);
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray(this)) this.length = this.length;
    return un$Reverse(this);
  }
});


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/es.array.unscopables.flat.js":
/*!*******************************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/es.array.unscopables.flat.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../Library/node_modules/core-js/internals/add-to-unscopables.js");

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flat');


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../../Library/node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "../../Library/node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../../Library/node_modules/core-js/internals/export.js");
var $parseInt = __webpack_require__(/*! ../internals/number-parse-int */ "../../Library/node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/es.promise.finally.js":
/*!************************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/es.promise.finally.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../Library/node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../Library/node_modules/core-js/internals/is-pure.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "../../Library/node_modules/core-js/internals/native-promise-constructor.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../Library/node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "../../Library/node_modules/core-js/internals/species-constructor.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "../../Library/node_modules/core-js/internals/promise-resolve.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../Library/node_modules/core-js/internals/redefine.js");

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  // eslint-disable-next-line unicorn/no-thenable -- required for testing
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = isCallable(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromise)) {
  var method = getBuiltIn('Promise').prototype['finally'];
  if (NativePromise.prototype['finally'] !== method) {
    redefine(NativePromise.prototype, 'finally', method, { unsafe: true });
  }
}


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/es.promise.js":
/*!****************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/es.promise.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../Library/node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../Library/node_modules/core-js/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../Library/node_modules/core-js/internals/get-built-in.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../Library/node_modules/core-js/internals/function-call.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "../../Library/node_modules/core-js/internals/native-promise-constructor.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../Library/node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "../../Library/node_modules/core-js/internals/redefine-all.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../Library/node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../Library/node_modules/core-js/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "../../Library/node_modules/core-js/internals/set-species.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../../Library/node_modules/core-js/internals/a-callable.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../Library/node_modules/core-js/internals/is-object.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../../Library/node_modules/core-js/internals/an-instance.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../Library/node_modules/core-js/internals/inspect-source.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../../Library/node_modules/core-js/internals/iterate.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "../../Library/node_modules/core-js/internals/check-correctness-of-iteration.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "../../Library/node_modules/core-js/internals/species-constructor.js");
var task = (__webpack_require__(/*! ../internals/task */ "../../Library/node_modules/core-js/internals/task.js").set);
var microtask = __webpack_require__(/*! ../internals/microtask */ "../../Library/node_modules/core-js/internals/microtask.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "../../Library/node_modules/core-js/internals/promise-resolve.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "../../Library/node_modules/core-js/internals/host-report-errors.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "../../Library/node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "../../Library/node_modules/core-js/internals/perform.js");
var Queue = __webpack_require__(/*! ../internals/queue */ "../../Library/node_modules/core-js/internals/queue.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../Library/node_modules/core-js/internals/internal-state.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../Library/node_modules/core-js/internals/is-forced.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");
var IS_BROWSER = __webpack_require__(/*! ../internals/engine-is-browser */ "../../Library/node_modules/core-js/internals/engine-is-browser.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "../../Library/node_modules/core-js/internals/engine-is-node.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../Library/node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';

var getInternalState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var NativePromisePrototype = NativePromise && NativePromise.prototype;
var PromiseConstructor = NativePromise;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromisePrototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromisePrototype = PromiseConstructor.prototype;
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromisePrototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    // eslint-disable-next-line unicorn/no-thenable -- safe
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      if (state.state == PENDING) state.reactions.add(reaction);
      else microtask(function () {
        callReaction(reaction, state);
      });
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromise) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });

      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
      redefine(NativePromisePrototype, 'catch', PromisePrototype['catch'], { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/es.regexp.constructor.js":
/*!***************************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/es.regexp.constructor.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../Library/node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../Library/node_modules/core-js/internals/is-forced.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "../../Library/node_modules/core-js/internals/inherit-if-required.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../Library/node_modules/core-js/internals/create-non-enumerable-property.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "../../Library/node_modules/core-js/internals/object-define-property.js").f);
var getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ "../../Library/node_modules/core-js/internals/object-get-own-property-names.js").f);
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "../../Library/node_modules/core-js/internals/object-is-prototype-of.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "../../Library/node_modules/core-js/internals/is-regexp.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../Library/node_modules/core-js/internals/to-string.js");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "../../Library/node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "../../Library/node_modules/core-js/internals/regexp-sticky-helpers.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../Library/node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../Library/node_modules/core-js/internals/has-own-property.js");
var enforceInternalState = (__webpack_require__(/*! ../internals/internal-state */ "../../Library/node_modules/core-js/internals/internal-state.js").enforce);
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "../../Library/node_modules/core-js/internals/set-species.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");
var UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ "../../Library/node_modules/core-js/internals/regexp-unsupported-dot-all.js");
var UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ "../../Library/node_modules/core-js/internals/regexp-unsupported-ncg.js");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = global.SyntaxError;
var getFlags = uncurryThis(regExpFlags);
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only propper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr = chr + charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxy(keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../Library/node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "../../Library/node_modules/core-js/internals/regexp-exec.js");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "../../Library/node_modules/core-js/internals/function-name.js").PROPER);
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../Library/node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../Library/node_modules/core-js/internals/an-object.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "../../Library/node_modules/core-js/internals/object-is-prototype-of.js");
var $toString = __webpack_require__(/*! ../internals/to-string */ "../../Library/node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "../../Library/node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var n$ToString = RegExpPrototype[TO_STRING];
var getFlags = uncurryThis(regExpFlags);

var NOT_GENERIC = fails(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && isPrototypeOf(RegExpPrototype, R) && !('flags' in RegExpPrototype) ? getFlags(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../Library/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "../../Library/node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../Library/node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../Library/node_modules/core-js/internals/to-string.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "../../Library/node_modules/core-js/internals/correct-is-regexp-logic.js");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "../../Library/node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "../../Library/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../Library/node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../Library/node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../Library/node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../Library/node_modules/core-js/internals/require-object-coercible.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../../Library/node_modules/core-js/internals/get-method.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "../../Library/node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "../../Library/node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(/*! ../internals/function-apply */ "../../Library/node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../Library/node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "../../Library/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../Library/node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../Library/node_modules/core-js/internals/is-callable.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../../Library/node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../Library/node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../Library/node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../Library/node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "../../Library/node_modules/core-js/internals/advance-string-index.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../../Library/node_modules/core-js/internals/get-method.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "../../Library/node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "../../Library/node_modules/core-js/internals/regexp-exec-abstract.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(/*! ../internals/function-apply */ "../../Library/node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../Library/node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../Library/node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "../../Library/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "../../Library/node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../Library/node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../Library/node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "../../Library/node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "../../Library/node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../Library/node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../Library/node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../../Library/node_modules/core-js/internals/get-method.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "../../Library/node_modules/core-js/internals/array-slice-simple.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "../../Library/node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "../../Library/node_modules/core-js/internals/regexp-exec.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "../../Library/node_modules/core-js/internals/regexp-sticky-helpers.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../Library/node_modules/core-js/internals/fails.js");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../Library/node_modules/core-js/internals/export.js");
var $trim = (__webpack_require__(/*! ../internals/string-trim */ "../../Library/node_modules/core-js/internals/string-trim.js").trim);
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "../../Library/node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "../../Library/node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "../../Library/node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "../../Library/node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../Library/node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************************!*\
  !*** ../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../Library/node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "../../Library/node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "../../Library/node_modules/core-js/internals/dom-token-list-prototype.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../Library/node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../Library/node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ "../../Library/node_modules/element-closest/browser.js":
/*!*************************************************************!*\
  !*** ../../Library/node_modules/element-closest/browser.js ***!
  \*************************************************************/
/***/ (function() {

!function(e){var t=e.Element.prototype;"function"!=typeof t.matches&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),o=0;t[o]&&t[o]!==this;)++o;return Boolean(t[o])}),"function"!=typeof t.closest&&(t.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window);


/***/ }),

/***/ "./ts/utils/cart-controller.ts":
/*!*************************************!*\
  !*** ./ts/utils/cart-controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "../../Library/node_modules/tslib/tslib.es6.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../Library/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../../Library/node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../../Library/node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../Library/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "../../Library/node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6__);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try {
    var info = gen[key](arg);
    var value = info.value;
}
catch (error) {
    reject(error);
    return;
} if (info.done) {
    resolve(value);
}
else {
    Promise.resolve(value).then(_next, _throw);
} }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var CartController = /** @class */ (function () {
    function CartController() {
        this.route = void 0;
        this.sections = [];
        this.parser = void 0;
        // global Shopify route
        this.route = window.Shopify.routes.root; // queries HTML elements that contain `data-id` value that maps to the section id from Shopify
        this.sections = Array.from(document.querySelectorAll("[data-id]")).map(function (section) { return section.dataset.id; }); // instance of DOM Parser API
        this.parser = new DOMParser();
    } // takes either a string or a string array of section id values that will be added to the sections array.
    CartController.prototype.addSections = function (sections) {
        var ids = Array.isArray(sections) ? sections : sections.replace(/\s/g, "").split(",");
        this.sections = this.sections.concat(ids);
    }; // takes the sections object returned from the Section Rendering API result within the HTTP response object and attempts to render the DOM.
    CartController.prototype.renderSections = function (sections) {
        var e_1, _a;
        if (!sections)
            return;
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__values)(Object.entries(sections)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__read)(_c.value, 2), id = _d[0], html = _d[1];
                this.renderSection(id, html);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }; // takes a Shopify section id along with the html text string and attempts to render the DOM with that string.
    CartController.prototype.renderSection = function (id, html) {
        var _section$querySelecto, _section$querySelecto2, _element$querySelecto;
        var section = this.parser.parseFromString(html, "text/html");
        var sectionHTML = (_section$querySelecto = (_section$querySelecto2 = section.querySelector(".js-contents")) == null ? void 0 : _section$querySelecto2.innerHTML) != null ? _section$querySelecto : section.textContent;
        if (!sectionHTML)
            return;
        var element = document.querySelector("#shopify-section-" + id);
        if (!element)
            return;
        var container = (_element$querySelecto = element.querySelector(".js-contents")) != null ? _element$querySelecto : element;
        if (!container)
            return;
        container.innerHTML = sectionHTML;
    }; // takes a Shopify product's variant id along with a quantity and makes a HTTP POST request to the `cart/add` endpoint.
    CartController.prototype.addItem = function (variantId, quantity) {
        var _this = this;
        return _asyncToGenerator(function () {
            var request, response;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(_this.route + "cart/add", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            },
                            body: JSON.stringify({
                                id: variantId,
                                quantity: quantity,
                                sections: _this.sections
                            })
                        })];
                    case 1:
                        request = _a.sent();
                        return [4 /*yield*/, request.json()];
                    case 2:
                        response = _a.sent();
                        _this.renderSections(response.sections);
                        return [2 /*return*/, response];
                }
            });
        })();
    }; // takes a Shopify product's variant id along with a 0 quantity and makes an HTTP POST request to the `cart/change` endpoint.
    CartController.prototype.removeItem = function (variantId) {
        var _this2 = this;
        return _asyncToGenerator(function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _this2.updateItem({
                            id: variantId,
                            quantity: 0
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        })();
    }; // takes a Shopify product's variant id along with a quantity and makes an HTTP POST request to the `cart/change` endpoint.
    CartController.prototype.updateItem = function (item) {
        var _this3 = this;
        return _asyncToGenerator(function () {
            var request, response;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(_this3.route + "cart/change", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            },
                            body: JSON.stringify(Object.assign({}, item, {
                                sections: _this3.sections
                            }))
                        })];
                    case 1:
                        request = _a.sent();
                        return [4 /*yield*/, request.json()];
                    case 2:
                        response = _a.sent();
                        _this3.renderSections(response.sections);
                        return [2 /*return*/, response];
                }
            });
        })();
    }; // takes an object containing key-value pairs where the key is a Shopify product variant id and the value is the quantity and makes an HTTP POST request to the `cart/update` endpoint.
    CartController.prototype.updateItems = function (items) {
        var _this4 = this;
        return _asyncToGenerator(function () {
            var request, response;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(_this4.route + "cart/update", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            },
                            body: JSON.stringify(Object.assign({}, items, {
                                sections: _this4.sections
                            }))
                        })];
                    case 1:
                        request = _a.sent();
                        return [4 /*yield*/, request.json()];
                    case 2:
                        response = _a.sent();
                        _this4.renderSections(response.sections);
                        return [2 /*return*/, response];
                }
            });
        })();
    }; // Makes an HTTP GET request to the `/cart` endpoint to fetch the updated Shopify customer cart.
    CartController.prototype.getCart = function () {
        var _this5 = this;
        return _asyncToGenerator(function () {
            var result;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(_this5.route + "cart", {
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        if (result.status === 200)
                            return [2 /*return*/, result.json()];
                        throw new Error("Failed to get request, Shopify returned " + result.status + " " + result.statusText);
                }
            });
        })();
    };
    return CartController;
}());
/* harmony default export */ __webpack_exports__["default"] = (CartController);


/***/ }),

/***/ "./ts/utils/form.ts":
/*!**************************!*\
  !*** ./ts/utils/form.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "../../Library/node_modules/tslib/tslib.es6.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../Library/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Shared_ts_applications_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Shared/ts/applications/form */ "../../Library/Shared/ts/applications/form.ts");
/* harmony import */ var Shared_ts_components_status_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Shared/ts/components/status-screen */ "../../Library/Shared/ts/components/status-screen.ts");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try {
    var info = gen[key](arg);
    var value = info.value;
}
catch (error) {
    reject(error);
    return;
} if (info.done) {
    resolve(value);
}
else {
    Promise.resolve(value).then(_next, _throw);
} }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



// applications
 // components

var Form = /** @class */ (function () {
    function Form(id) {
        var _this_1 = this;
        this.form = document.querySelector("form#" + id);
        this.form.then(function (form) {
            _this_1.submit = form.querySelector("[type=\"submit\"]");
        });
        this.initializeValidationRules();
        this.initializeStatusScreen();
    }
    Object.defineProperty(Form.prototype, "form", {
        get: function () {
            var _this_1 = this;
            return new Promise(function (resolve, reject) {
                var value = Form.form.get(_this_1);
                value ? resolve(value) : reject("Failed to get HTMLFormElement.");
            });
        },
        set: function (form) {
            Form.form.set(this, form);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "submit", {
        get: function () {
            var _this_1 = this;
            return new Promise(function (resolve, reject) {
                var value = Form.submit.get(_this_1);
                value ? resolve(value) : reject("Failed to get HTMLButtonElement.");
            });
        },
        set: function (submit) {
            Form.submit.set(this, submit);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "parameters", {
        get: function () {
            var _this_1 = this;
            return new Promise(function (resolve, reject) {
                var value = Form.parameters.get(_this_1);
                value ? resolve(value) : reject("Failed to get parameters.");
            });
        },
        set: function (parameters) {
            Form.parameters.set(this, parameters);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "statusScreen", {
        get: function () {
            var _this_1 = this;
            return new Promise(function (resolve, reject) {
                var value = Form.statusScreen.get(_this_1);
                value ? resolve(value) : reject("Failed to get status screen.");
            });
        },
        set: function (statusScreen) {
            Form.statusScreen.set(this, statusScreen);
        },
        enumerable: false,
        configurable: true
    });
    Form.prototype.initializeStatusScreen = function () {
        var _this = this;
        return _asyncToGenerator(function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
                _this.statusScreen = new Shared_ts_components_status_screen__WEBPACK_IMPORTED_MODULE_4__["default"]();
                return [2 /*return*/];
            });
        })();
    };
    Form.prototype.initializeValidationRules = function () {
        var _this2 = this;
        return _asyncToGenerator(function () {
            var form, submit;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _this2.form];
                    case 1:
                        form = _a.sent();
                        return [4 /*yield*/, _this2.submit];
                    case 2:
                        submit = _a.sent();
                        return [4 /*yield*/, (0,Shared_ts_applications_form__WEBPACK_IMPORTED_MODULE_3__.initializeValidateEventNavigator)(form, submit, function (parameters) {
                                _this2.parameters = parameters;
                            })];
                    case 3:
                        _a.sent();
                        _this2.handleNetworkTransaction();
                        return [2 /*return*/];
                }
            });
        })();
    };
    Form.prototype.handleNetworkTransaction = function () {
        return _asyncToGenerator(function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
            return [2 /*return*/];
        }); })();
    };
    return Form;
}());
/* harmony default export */ __webpack_exports__["default"] = (Form);
Form.form = new WeakMap();
Form.submit = new WeakMap();
Form.parameters = new WeakMap();
Form.statusScreen = new WeakMap();


/***/ }),

/***/ "./ts/utils/offer-controller.ts":
/*!**************************************!*\
  !*** ./ts/utils/offer-controller.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "../../Library/node_modules/tslib/tslib.es6.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "../../Library/node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../../Library/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../Library/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cart_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-controller */ "./ts/utils/cart-controller.ts");
/* harmony import */ var _product_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-controller */ "./ts/utils/product-controller.ts");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try {
    var info = gen[key](arg);
    var value = info.value;
}
catch (error) {
    reject(error);
    return;
} if (info.done) {
    resolve(value);
}
else {
    Promise.resolve(value).then(_next, _throw);
} }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var OfferController = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(OfferController, _super);
    function OfferController(context) {
        var _this_1 = _super.call(this) || this;
        _this_1.context = void 0;
        _this_1.cart = void 0;
        _this_1.products = void 0;
        _this_1.offerCheckbox = void 0;
        _this_1.offerCombobox = void 0;
        _this_1.deluxeCheckbox = void 0;
        _this_1.context = context != null ? context : document;
        _this_1.offerCheckbox = context == null ? void 0 : context.querySelector("#ActionCheckbox0");
        _this_1.offerCombobox = context == null ? void 0 : context.querySelector("#ActionQuantity0");
        _this_1.deluxeCheckbox = context == null ? void 0 : context.querySelector("#DeluxeCheckbox");
        _this_1.cart = _this_1.getCart();
        _this_1.products = new _product_controller__WEBPACK_IMPORTED_MODULE_4__["default"]();
        return _this_1;
    }
    OfferController.prototype.handleOffer = function () {
        var _this = this;
        return _asyncToGenerator(function () {
            var offerCheckbox, offerCombobox, singleOffer, doubleOffer, fee, changeToSingleOffer, changeToDoubleOffer, handleOfferQuantity, cart, singleItemInCart, doubleItemInCart;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        offerCheckbox = _this.offerCheckbox;
                        if (!offerCheckbox)
                            return [2 /*return*/];
                        offerCombobox = _this.offerCombobox;
                        if (!offerCombobox)
                            return [2 /*return*/];
                        return [4 /*yield*/, _this.products.getProductVariantBySku("AABPC")];
                    case 1:
                        singleOffer = _a.sent();
                        return [4 /*yield*/, _this.products.getProductVariantBySku("AABPCTV")];
                    case 2:
                        doubleOffer = _a.sent();
                        return [4 /*yield*/, _this.products.getProductVariantBySku("AABPCFEE")];
                    case 3:
                        fee = _a.sent();
                        changeToSingleOffer = function (quantity) {
                            var _a;
                            _this.updateItems({
                                updates: (_a = {},
                                    _a[singleOffer.id] = quantity,
                                    _a[doubleOffer.id] = 0,
                                    _a[fee.id] = 0,
                                    _a)
                            });
                        };
                        changeToDoubleOffer = function (quantity) {
                            var _a;
                            _this.updateItems({
                                updates: (_a = {},
                                    _a[singleOffer.id] = 0,
                                    _a[doubleOffer.id] = quantity,
                                    _a[fee.id] = quantity,
                                    _a)
                            });
                        };
                        handleOfferQuantity = function () {
                            var quantity = parseInt(offerCombobox.value);
                            offerCheckbox.checked ? changeToDoubleOffer(quantity) : changeToSingleOffer(quantity);
                        };
                        offerCombobox.addEventListener("change", function (event) { return handleOfferQuantity(); });
                        offerCheckbox.addEventListener("change", function (event) { return handleOfferQuantity(); });
                        return [4 /*yield*/, _this.cart];
                    case 4:
                        cart = _a.sent();
                        singleItemInCart = cart.items.find(function (item) { return item.variant_id === singleOffer.id; });
                        if (singleItemInCart) {
                            offerCheckbox.checked = false;
                            offerCheckbox.setAttribute("aria-checked", "false");
                            offerCombobox.value = singleItemInCart.quantity.toString();
                            return [2 /*return*/];
                        }
                        doubleItemInCart = cart.items.find(function (item) { return item.variant_id === doubleOffer.id; });
                        if (doubleItemInCart) {
                            offerCheckbox.checked = true;
                            offerCombobox.value = doubleItemInCart.quantity.toString();
                            return [2 /*return*/];
                        }
                        if (offerCheckbox.checked) {
                            handleOfferQuantity();
                        }
                        return [2 /*return*/];
                }
            });
        })();
    };
    OfferController.prototype.handleDeluxeOffer = function () {
        var _this2 = this;
        return _asyncToGenerator(function () {
            var deluxeCheckbox, deluxeOffer, cart, itemInCart;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deluxeCheckbox = _this2.deluxeCheckbox;
                        if (!deluxeCheckbox)
                            return [2 /*return*/];
                        return [4 /*yield*/, _this2.products.getProductVariantBySku("VOOMMINI")];
                    case 1:
                        deluxeOffer = _a.sent();
                        deluxeCheckbox.addEventListener("change", /*#__PURE__*/ function () {
                            var _ref = _asyncToGenerator(function (event) {
                                var id, quantity;
                                var _a;
                                return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
                                    id = deluxeOffer.id.toString();
                                    quantity = deluxeCheckbox.checked ? 1 : 0;
                                    _this2.updateItems({
                                        updates: (_a = {},
                                            _a[id] = quantity,
                                            _a)
                                    });
                                    return [2 /*return*/];
                                });
                            });
                            return function (_x) {
                                return _ref.apply(this, arguments);
                            };
                        }());
                        return [4 /*yield*/, _this2.cart];
                    case 2:
                        cart = _a.sent();
                        itemInCart = cart.items.find(function (item) { return item.variant_id === deluxeOffer.id; });
                        if (!itemInCart)
                            return [2 /*return*/];
                        deluxeCheckbox.checked = true;
                        return [2 /*return*/];
                }
            });
        })();
    };
    return OfferController;
}(_cart_controller__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (OfferController);


/***/ }),

/***/ "./ts/utils/product-controller.ts":
/*!****************************************!*\
  !*** ./ts/utils/product-controller.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "../../Library/node_modules/tslib/tslib.es6.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../Library/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.flat.js */ "../../Library/node_modules/core-js/modules/es.array.flat.js");
/* harmony import */ var core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat.js */ "../../Library/node_modules/core-js/modules/es.array.unscopables.flat.js");
/* harmony import */ var core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "../../Library/node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../Library/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try {
    var info = gen[key](arg);
    var value = info.value;
}
catch (error) {
    reject(error);
    return;
} if (info.done) {
    resolve(value);
}
else {
    Promise.resolve(value).then(_next, _throw);
} }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






// declare global {
// 	interface Window {
// 		Shopify: {
// 			routes: {
// 				root: string;
// 			};
// 		};
// 	}
// }
var ProductController = /** @class */ (function () {
    function ProductController() {
        this.route = void 0;
        // global Shopify route
        this.route = window.Shopify.routes.root;
    } // Makes an HTTP GET request to the `/products` endpoint to fetch the Shopify products JSON data.
    Object.defineProperty(ProductController.prototype, "products", {
        get: function () {
            var _this_1 = this;
            return new Promise(function (resolve, reject) {
                var value = ProductController.products.get(_this_1);
                if (value)
                    return resolve(value);
                _this_1.getProducts().then(function (products) {
                    _this_1.products = products;
                    resolve(products);
                }).catch(function (error) { return console.debug(error); });
            });
        },
        set: function (value) {
            ProductController.products.set(this, value);
        },
        enumerable: false,
        configurable: true
    });
    ProductController.prototype.getProducts = function () {
        var _this = this;
        return _asyncToGenerator(function () {
            var result, products;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(_this.route + "products.json", {
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        if (!(result.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, result.json()];
                    case 2:
                        products = _a.sent();
                        return [2 /*return*/, products.products];
                    case 3: throw new Error("Failed to get request, Shopify returned " + result.status + " " + result.statusText);
                }
            });
        })();
    };
    ProductController.prototype.getProductVariants = function () {
        var _this2 = this;
        return _asyncToGenerator(function () {
            var products;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _this2.products];
                    case 1:
                        products = _a.sent();
                        return [2 /*return*/, products.map(function (product) { return product.variants; }).flat()];
                }
            });
        })();
    };
    ProductController.prototype.getProductVariantBySku = function (sku) {
        var _this3 = this;
        return _asyncToGenerator(function () {
            var variants, variant;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _this3.getProductVariants()];
                    case 1:
                        variants = _a.sent();
                        variant = variants.find(function (variant) { return variant.sku === sku; });
                        if (variant)
                            return [2 /*return*/, variant];
                        throw "Product variant could not be found";
                }
            });
        })();
    };
    ProductController.prototype.getProductVariantsBySkus = function (skus) {
        var _this4 = this;
        return _asyncToGenerator(function () {
            var variants, results;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _this4.getProductVariants()];
                    case 1:
                        variants = _a.sent();
                        results = variants.filter(function (variant) { return skus.includes(variant.sku); });
                        if (results.length > 0)
                            return [2 /*return*/, results];
                        throw "Product variants could not be found";
                }
            });
        })();
    };
    return ProductController;
}());
/* harmony default export */ __webpack_exports__["default"] = (ProductController);
ProductController.products = new WeakMap();


/***/ }),

/***/ "../../Library/node_modules/tslib/tslib.es6.js":
/*!*****************************************************!*\
  !*** ../../Library/node_modules/tslib/tslib.es6.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; }
/* harmony export */ });
/* unused harmony exports __assign, __rest, __decorate, __param, __metadata, __awaiter, __createBinding, __exportStar, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/*! *****************************************************************************
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
/* global Reflect, Promise */

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
        while (_) try {
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
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***********************!*\
  !*** ./assets/dtm.ts ***!
  \***********************/
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ "../../Library/node_modules/tslib/tslib.es6.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../Library/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../Library/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Shared_ts_applications_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/ts/applications/template */ "../../Library/Shared/ts/applications/template.ts");
/* harmony import */ var Shared_ts_components_fade_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Shared/ts/components/fade-carousel */ "../../Library/Shared/ts/components/fade-carousel.ts");
/* harmony import */ var Shared_ts_components_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Shared/ts/components/responsive-carousel */ "../../Library/Shared/ts/components/responsive-carousel.ts");
/* harmony import */ var Shared_ts_components_vimeo_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Shared/ts/components/vimeo-carousel */ "../../Library/Shared/ts/components/vimeo-carousel.ts");
/* harmony import */ var Shared_ts_api_carousel_slide_adapters_fade_slide_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Shared/ts/api/carousel/slide/adapters/fade-slide-carousel */ "../../Library/Shared/ts/api/carousel/slide/adapters/fade-slide-carousel.ts");
/* harmony import */ var Shared_ts_api_carousel_slide_adapters_responsive_slide_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Shared/ts/api/carousel/slide/adapters/responsive-slide-carousel */ "../../Library/Shared/ts/api/carousel/slide/adapters/responsive-slide-carousel.ts");
/* harmony import */ var Shared_ts_api_carousel_slide_adapters_vimeo_slide_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Shared/ts/api/carousel/slide/adapters/vimeo-slide-carousel */ "../../Library/Shared/ts/api/carousel/slide/adapters/vimeo-slide-carousel.ts");
/* harmony import */ var Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Shared/ts/observers/intersection */ "../../Library/Shared/ts/observers/intersection.ts");
/* harmony import */ var Shared_ts_observers_media_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Shared/ts/observers/media-query */ "../../Library/Shared/ts/observers/media-query.ts");
/* harmony import */ var Shared_ts_utils_disclosure__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Shared/ts/utils/disclosure */ "../../Library/Shared/ts/utils/disclosure.ts");
/* harmony import */ var Shared_ts_applications_media_player__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Shared/ts/applications/media-player */ "../../Library/Shared/ts/applications/media-player.ts");
/* harmony import */ var ts_utils_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ts/utils/form */ "./ts/utils/form.ts");
/* harmony import */ var ts_utils_offer_controller__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ts/utils/offer-controller */ "./ts/utils/offer-controller.ts");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try {
    var info = gen[key](arg);
    var value = info.value;
}
catch (error) {
    reject(error);
    return;
} if (info.done) {
    resolve(value);
}
else {
    Promise.resolve(value).then(_next, _throw);
} }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


// applications

(0,Shared_ts_applications_template__WEBPACK_IMPORTED_MODULE_2__.initializeBase)();
(0,Shared_ts_applications_template__WEBPACK_IMPORTED_MODULE_2__.initializeMicrosite)(); // components


 // adapters


 // observers
 // utils





(0,Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_9__.observer)(".slide--fade", {
    inRange: function (element) {
        var carousel = new Shared_ts_components_fade_carousel__WEBPACK_IMPORTED_MODULE_3__["default"](new Shared_ts_api_carousel_slide_adapters_fade_slide_carousel__WEBPACK_IMPORTED_MODULE_6__["default"](element));
        carousel.setAttributes({
            delay: 6000
        });
        carousel.autoplay();
        carousel.enablePrevNextControls();
    }
});
(0,Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_9__.observer)(".slide--responsive", {
    inRange: function (element) {
        var carousel = new Shared_ts_components_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__["default"](new Shared_ts_api_carousel_slide_adapters_responsive_slide_carousel__WEBPACK_IMPORTED_MODULE_7__["default"](element));
        carousel.enablePrevNextControls();
        new Shared_ts_observers_media_query__WEBPACK_IMPORTED_MODULE_10__["default"]("(min-width: 41.875rem)").inbound(function (task) { return carousel.setAttributes({
            steps: 2
        }); }).outbound(function (task) { return carousel.setAttributes({
            steps: 1
        }); });
        new Shared_ts_observers_media_query__WEBPACK_IMPORTED_MODULE_10__["default"]("(min-width: 60.3125rem)").inbound(function (task) { return carousel.setAttributes({
            steps: 3
        }); }).outbound(function (task) { return carousel.setAttributes({
            steps: 2
        }); });
    }
});
(0,Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_9__.observer)(".slide--testimonials", {
    inRange: function (element) {
        var carousel = new Shared_ts_components_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__["default"](new Shared_ts_api_carousel_slide_adapters_responsive_slide_carousel__WEBPACK_IMPORTED_MODULE_7__["default"](element));
        carousel.enablePrevNextControls();
        new Shared_ts_observers_media_query__WEBPACK_IMPORTED_MODULE_10__["default"]("(min-width: 41.875rem)").inbound(function (task) { return carousel.setAttributes({
            steps: 2
        }); }).outbound(function (task) { return carousel.setAttributes({
            steps: 1
        }); });
        new Shared_ts_observers_media_query__WEBPACK_IMPORTED_MODULE_10__["default"]("(min-width: 60.3125rem)").inbound(function (task) { return carousel.setAttributes({
            steps: 3
        }); }).outbound(function (task) { return carousel.setAttributes({
            steps: 2
        }); });
        new Shared_ts_observers_media_query__WEBPACK_IMPORTED_MODULE_10__["default"]("(min-width: 75rem)").inbound(function (task) { return carousel.setAttributes({
            steps: 4
        }); }).outbound(function (task) { return carousel.setAttributes({
            steps: 3
        }); });
    }
});
(0,Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_9__.observer)(".slide--vimeo-carousel", {
    inRange: function (element) {
        var carousel = new Shared_ts_components_vimeo_carousel__WEBPACK_IMPORTED_MODULE_5__["default"](new Shared_ts_api_carousel_slide_adapters_vimeo_slide_carousel__WEBPACK_IMPORTED_MODULE_8__["default"](element));
        carousel.autoplay();
        carousel.enablePrevNextControls();
    }
});
(0,Shared_ts_applications_media_player__WEBPACK_IMPORTED_MODULE_12__.initializeVimeoMediaPlayer)(document.querySelector(".media-player"));
var disclosure = new Shared_ts_utils_disclosure__WEBPACK_IMPORTED_MODULE_11__["default"]();
disclosure.controllers.forEach(function (controller) {
    controller.addEventListener("click", function (event) {
        disclosure.toggleElementsByController(controller);
    });
});
var OfferForm = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__extends)(OfferForm, _super);
    function OfferForm(id) {
        var _this_1 = _super.call(this, id) || this;
        _this_1.initializeOfferRules();
        return _this_1;
    }
    OfferForm.prototype.initializeOfferRules = function () {
        var _this = this;
        return _asyncToGenerator(function () {
            var form, offer;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _this.form];
                    case 1:
                        form = _a.sent();
                        offer = new ts_utils_offer_controller__WEBPACK_IMPORTED_MODULE_14__["default"](form);
                        offer.handleOffer();
                        return [2 /*return*/];
                }
            });
        })();
    };
    OfferForm.prototype.handleNetworkTransaction = function () {
        var _this2 = this;
        return _asyncToGenerator(function () {
            var form, statusScreen;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _this2.form];
                    case 1:
                        form = _a.sent();
                        return [4 /*yield*/, _this2.statusScreen];
                    case 2:
                        statusScreen = _a.sent();
                        statusScreen.busy("Please wait...");
                        form.submit();
                        return [2 /*return*/];
                }
            });
        })();
    };
    return OfferForm;
}(ts_utils_form__WEBPACK_IMPORTED_MODULE_13__["default"]));
new OfferForm("offer-selection");

}();
/******/ })()
;
//# sourceMappingURL=dtm.js.map