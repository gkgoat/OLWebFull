webpackHotUpdate("static\\development\\pages\\desktop.js",{

/***/ "./src/lang.js":
/*!*********************!*\
  !*** ./src/lang.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return changeLanguage; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\Graham\\ObjectLand\\main\\OLWebFull\\src\\lang.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function strip(html) {
  var doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}

function changeLanguage(set, theRef) {
  var lang, win, confirmed;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function changeLanguage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          lang = prompt('language');
          win = open('https://'.concat(lang.concat('.wikipedia.org')), {
            mode: 'cors'
          });
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (c) {
            ReactDOM.render(__jsx("p", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              },
              __self: this
            }, __jsx("button", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              },
              __self: this
            }, "Confirm")));
          }));

        case 4:
          confirmed = _context.sent;
          if (confirmed) set(lang);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

/***/ })

})
//# sourceMappingURL=desktop.js.34542be8f75d924d966e.hot-update.js.map