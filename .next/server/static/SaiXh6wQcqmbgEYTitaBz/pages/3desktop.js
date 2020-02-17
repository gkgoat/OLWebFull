module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+BYu":
/***/ (function(module, exports) {

module.exports = require("three-dragcontrols");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("UlYN");


/***/ }),

/***/ "8dun":
/***/ (function(module, exports) {

module.exports = require("node-polyglot");

/***/ }),

/***/ "KaC6":
/***/ (function(module, exports) {

module.exports = require("react-shadow");

/***/ }),

/***/ "L/KP":
/***/ (function(module, exports) {

module.exports = require("react-three-fiber");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UlYN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_shadow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KaC6");
/* harmony import */ var react_shadow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_shadow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _OLEx_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wzdJ");
/* harmony import */ var _OLEx_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_OLEx_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_polyglot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8dun");
/* harmony import */ var node_polyglot__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_polyglot__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("L/KP");
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var three_dragcontrols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("+BYu");
/* harmony import */ var three_dragcontrols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(three_dragcontrols__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






let Box = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function Box(props, ref) {
  // Set up state for the hovered and active state
  const {
    0: hovered,
    1: setHover
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // Rotate mesh every frame, this is outside of React without overhead

  return __jsx("mesh", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
    ref: ref,
    scale: (hovered ? [1.5, 1.5, 1.5] : [1, 1, 1]).map(v => v * props.scale),
    onPointerOver: e => setHover(true),
    onPointerOut: e => setHover(false)
  }), __jsx("boxBufferGeometry", {
    attach: "geometry",
    args: [1, 1, 1].map(v => v * props.scale)
  }), __jsx("meshStandardMaterial", {
    attach: "material",
    color: props.color
  }));
});

let ThreeRef = props => {
  props.setThree(Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__["useThree"])());
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (props => {
  let Desktop = props.dcls;
  let {
    0: {
      camera,
      gl
    },
    1: setThree
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  let {
    0: objs,
    1: setObjs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  if (!objs) setObjs([]);
  useEffect(() => {
    let d = new three_dragcontrols__WEBPACK_IMPORTED_MODULE_6___default.a(objs, camera, gl.domElements);
    return d.dispose.bind(d);
  }, [props.dcls, objs]);
  return __jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__["Canvas"], null, __jsx(Desktop, {
    Div: Box,
    Window: wprops => {
      let r = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
      useEffect(() => {
        setObjs((objs || []).concat([r.current]));
        return () => setObjs(objs.filter(o => o !== r.current));
      });
      return __jsx(Box, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, wprops, {
        ref: r
      }));
    },
    Iframe: Box
  }), __jsx(ThreeRef, {
    setThree: setThree
  }));
});

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "wzdJ":
/***/ (function(module, exports) {

!function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=0)}([function(t,r,n){"use strict";n.r(r),function(t){n.d(r,"chrome",(function(){return o})),n.d(r,"chromeSwitch",(function(){return u}));var e=function(){for(var t=0,r=0,n=arguments.length;r<n;r++)t+=arguments[r].length;var e=Array(t),o=0;for(r=0;r<n;r++)for(var u=arguments[r],i=0,c=u.length;i<c;i++,o++)e[o]=u[i];return e},o=t.chrome;function u(t,r){return function(){for(var n,u=[],i=0;i<arguments.length;i++)u[i]=arguments[i];return(n=Function.prototype.call).call.apply(n,e([o?r:t,this],u))}}}.call(this,n(1))},function(t,r){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}]);

/***/ })

/******/ });