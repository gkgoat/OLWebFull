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
          theRef.current.innerText = 'click to continue' + strip(res);
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (c) {
            setTimeout(c.bind(null, false), 4000);
            theRef.current.addEventListener('click', function a() {
              c(true);
              theRef.current.removeEventListener('click', a);
            });
          }));

        case 5:
          confirmed = _context.sent;
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
//# sourceMappingURL=desktop.js.e94176428530ff974038.hot-update.js.map