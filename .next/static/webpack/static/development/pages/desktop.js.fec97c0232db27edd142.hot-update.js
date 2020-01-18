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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);


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
          win = open('https://'.concat(lang.concat('.wikipedia.org')));
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (c) {
            react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(__jsx("p", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              },
              __self: this
            }, __jsx("button", {
              onClick: c.bind(null, true),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              },
              __self: this
            }, "Confirm"), __jsx("button", {
              onClick: c.bind(null, false),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              },
              __self: this
            }, "Cancel")), theRef.current);
          }));

        case 4:
          confirmed = _context.sent;
          win.close();
          if (confirmed) set(lang);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

/***/ })

})
//# sourceMappingURL=desktop.js.fec97c0232db27edd142.hot-update.js.map