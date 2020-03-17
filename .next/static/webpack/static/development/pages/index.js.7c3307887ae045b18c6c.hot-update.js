webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Window_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Window.js */ "./src/Window.js");
/* harmony import */ var _src_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/lang.js */ "./src/lang.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var changeLanguage = global.localStorage && _src_lang_js__WEBPACK_IMPORTED_MODULE_3__["default"].bind(null, localStorage.setItem.bind(localStorage, 'lang'));
/*products && products.map(p => (<Row key = {p.id}><Col><Tabs defaultActiveKey = {'try'}><Tab eventKey = {'try'}>{p.try(React,{noWelcome: true})}</Tab></Tabs></Col></Row>))*/

function MainWelcomePage() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var theRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  return __jsx("div", null, __jsx("p", {
    ref: theRef
  }), __jsx("h3", null, "Desktop ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/desktop"
  }, __jsx("a", null, "here"))), global.localStorage && (localStorage.getItem('lang') || !localStorage.getItem('lang') && localStorage.getItem('lang-temp')) || __jsx("span", null, __jsx("button", {
    onClick: changeLanguage && changeLanguage.bind(null, theRef)
  }, "Confirm Language")), __jsx("h1", null, "Welcome To Smalltalk", props.user ? ',' : '.', " ", props.user && props.user.name || '', props.user && '.'), __jsx("div", null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, null)));
}

/* harmony default export */ __webpack_exports__["default"] = (MainWelcomePage);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=index.js.7c3307887ae045b18c6c.hot-update.js.map