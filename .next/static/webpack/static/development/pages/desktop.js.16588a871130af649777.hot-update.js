webpackHotUpdate("static\\development\\pages\\desktop.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Window_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Window.js */ "./src/Window.js");
/* harmony import */ var _src_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/lang.js */ "./src/lang.js");
var _jsxFileName = "D:\\Graham\\ObjectLand\\main\\OLWebFull\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var changeLanguage = self.localStorage && _src_lang_js__WEBPACK_IMPORTED_MODULE_3__["default"].bind(null, localStorage.setItem.bind(localStorage, 'lang'));

function MainWelcomePage() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var theRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("p", {
    ref: theRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Desktop ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/desktop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "here"))), localStorage && (localStorage.getItem('lang') || !localStorage.getItem('lang') && localStorage.getItem('lang-temp')) || __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("button", {
    onClick: changeLanguage.bind(null, theRef),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Confirm Language")), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Welcome To ObjectLand", props.user ? ',' : '.', " ", props.user && props.user.name || '', props.user && '.'), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Pureness"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "ObjectLand's Squeak runtime is pure. ObjectLand's JavaScript runtime is mostly pure"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Pure means that:", __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Everything is an object and it takes things from something"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Every object holds state, which are objects"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Every object communicates by sending messages to other objects")))));
}

/* harmony default export */ __webpack_exports__["default"] = (MainWelcomePage);

/***/ })

})
//# sourceMappingURL=desktop.js.16588a871130af649777.hot-update.js.map