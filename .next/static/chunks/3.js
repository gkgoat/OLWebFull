(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/chrome-promise/chrome-promise.js":
/*!*******************************************************!*\
  !*** ./node_modules/chrome-promise/chrome-promise.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chrome-promise
 * https://github.com/tfoxy/chrome-promise
 *
 * Copyright 2015 Tomás Fox
 * Released under the MIT license
 */

(function(root, factory) {
  if (true) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(this || root);
  } else { var name, script; }
}(typeof self !== 'undefined' ? self : this, function(root) {
  'use strict';
  var slice = Array.prototype.slice,
      hasOwnProperty = Object.prototype.hasOwnProperty;

  // Temporary hacky fix to make TypeScript `import` work
  ChromePromise.default = ChromePromise;

  return ChromePromise;

  ////////////////

  function ChromePromise(options) {
    options = options || {};
    var chrome = options.chrome || root.chrome;
    var Promise = options.Promise || root.Promise;
    var runtime = chrome.runtime;
    var self = this;
    if (!self) throw new Error('ChromePromise must be called with new keyword');

    fillProperties(chrome, self);

    if (chrome.permissions) {
      chrome.permissions.onAdded.addListener(permissionsAddedListener);
    }

    ////////////////

    function setPromiseFunction(fn, thisArg) {

      return function() {
        var args = slice.call(arguments);

        return new Promise(function(resolve, reject) {
          args.push(callback);

          fn.apply(thisArg, args);

          function callback() {
            var err = runtime.lastError;
            var results = slice.call(arguments);
            if (err) {
              reject(err);
            } else {
              switch (results.length) {
                case 0:
                  resolve();
                  break;
                case 1:
                  resolve(results[0]);
                  break;
                default:
                  resolve(results);
              }
            }
          }
        });

      };

    }

    function fillProperties(source, target) {
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          var val;
          // Sometime around Chrome v71, certain deprecated methods on the
          // extension APIs started using proxies to throw an error if the
          // deprecated methods were accessed, regardless of whether they
          // were invoked or not.  That would cause this code to throw, even
          // if no one was actually invoking that method.
          try {
            val = source[key];
          } catch(err) {
           continue;
          }
          var type = typeof val;

          if (type === 'object' && !(val instanceof ChromePromise)) {
            target[key] = {};
            fillProperties(val, target[key]);
          } else if (type === 'function') {
            target[key] = setPromiseFunction(val, source);
          } else {
            target[key] = val;
          }
        }
      }
    }

    function permissionsAddedListener(perms) {
      if (perms.permissions && perms.permissions.length) {
        var approvedPerms = {};
        perms.permissions.forEach(function(permission) {
          var api = /^[^.]+/.exec(permission);
          if (api in chrome) {
            approvedPerms[api] = chrome[api];
          }
        });
        fillProperties(approvedPerms, self);
      }
    }
  }
}));


/***/ }),

/***/ "./node_modules/chrome-promise/index.js":
/*!**********************************************!*\
  !*** ./node_modules/chrome-promise/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ChromePromise = __webpack_require__(/*! ./chrome-promise */ "./node_modules/chrome-promise/chrome-promise.js");

var chromep = new ChromePromise();
// Temporary hacky fix to make TypeScript `import` work
chromep.default = chromep;

module.exports = chromep;


/***/ })

}]);
//# sourceMappingURL=3.js.map