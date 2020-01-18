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
var _jsxFileName = "D:\\Graham\\ObjectLand\\main\\OLWebFull\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function MainWelcomePage() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  function changeLanguage() {
    var lang = prompt('language');
    var win = self.open('https://'.concat(lang.concat('.wikipedia.org')));
    self.addEventListener(function a(evt) {
      if (evt.source !== win) return;
      var data = evt.data;
      if (!['confirm', 'cancel'].includes(data)) return;
      self.removeEventListener('message', a);
      if (data === 'confirm') localStorage.setItem('lang', lang);
    });
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Desktop ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/desktop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "here"))), localStorage && (localStorage.getItem('lang') || !localStorage.getItem('lang') && localStorage.getItem('lang-temp')) || __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("button", {
    onClick: changeLanguage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Confirm Language")), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Welcome To ObjectLand", props.user ? ',' : '.', " ", props.user && props.user.name || '', props.user && '.'), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Pureness"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "ObjectLand's Squeak runtime is pure. ObjectLand's JavaScript runtime is mostly pure"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Pure means that:", __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Everything is an object and it takes things from something"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Every object holds state, which are objects"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Every object communicates by sending messages to other objects")))));
}

/* harmony default export */ __webpack_exports__["default"] = (MainWelcomePage);

/***/ })

})
//# sourceMappingURL=desktop.js.7cf0e2153a271dd746c4.hot-update.js.map