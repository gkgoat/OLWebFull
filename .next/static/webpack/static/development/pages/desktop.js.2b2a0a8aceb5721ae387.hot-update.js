webpackHotUpdate("static/development/pages/desktop.js",{

/***/ "./pages/prezi.js":
/*!************************!*\
  !*** ./pages/prezi.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _desktop_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop/index.js */ "./pages/desktop/index.js");
/* harmony import */ var reveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reveal */ "./node_modules/reveal/index.js");
/* harmony import */ var reveal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reveal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_bind_this_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/bind_this.js */ "./src/bind_this.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.js */ "./pages/index.js");
/* harmony import */ var _src_Iframe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/Iframe.js */ "./src/Iframe.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(function (props) {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(reveal__WEBPACK_IMPORTED_MODULE_4___default.a.initialize.bind(reveal__WEBPACK_IMPORTED_MODULE_4___default.a));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("section", null, "Welcome to Smalltalk!"), __jsx("section", null, __jsx("h1", null, "Projects"), __jsx(_src_Iframe_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: 'about:blank',
    winReact: __jsx("html", null, __jsx("body", null, __jsx(_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onlyProjects: true
    }))))
  })), __jsx("section", null, __jsx("h1", null, "Main Page:"), __jsx(_src_Iframe_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: 'about:blank',
    winReact: __jsx("html", null, __jsx("body", null, __jsx(_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], props)))
  })), __jsx("section", null, props.noDesktop ? null : __jsx(_desktop_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], props)));
}, {
  w: Object(_src_bind_this_js__WEBPACK_IMPORTED_MODULE_5__["default"])(function (to, e) {
    return __jsx("div", {
      className: 'reveal'
    }, __jsx("div", {
      className: 'slides'
    }, e.children.filter(function (c) {
      return c.type !== to;
    }), " ", e.children.filter(function (c) {
      return c.type === to;
    }).map(function (c) {
      return __jsx("div", null, c);
    })));
  })
}));

/***/ })

})
//# sourceMappingURL=desktop.js.2b2a0a8aceb5721ae387.hot-update.js.map