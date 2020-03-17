webpackHotUpdate("static/development/pages/desktop.js",{

/***/ "./src/Inspector.js":
/*!**************************!*\
  !*** ./src/Inspector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var Inspector;
/* harmony default export */ __webpack_exports__["default"] = (Inspector = ramda__WEBPACK_IMPORTED_MODULE_3__["pipe"](function (props) {
  return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, props, props.lib);
}, function (props) {
  if (props.Tabs && props.Div && props.List && props.TextArea && props.Window) {
    var _props$obj$key;

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
        key = _useState[0],
        setKey = _useState[1];

    var isReactComponent = props.obj instanceof Function;
    return __jsx(props.Tabs.Tabs, null, __jsx(props.Tabs.Tab, {
      title: 'Inspect'
    }, __jsx(props.Div, null, __jsx(props.List, {
      all: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(props.obj),
      selected: key,
      onSelect: setKey
    }), __jsx(props.Div, {
      direction: 'ttb'
    }, __jsx(props.TextArea, {
      value: (_props$obj$key = props.obj[key]) === null || _props$obj$key === void 0 ? void 0 : _props$obj$key.toString()
    }), __jsx(Inspector, {
      obj: props.obj[key]
    })))), isReactComponent && props.obj.wantsToBeInspectedAsReact ? __jsx(props.Tabs.Tab, {
      title: 'Use'
    }, __jsx(props.Window, null, __jsx(props.obj, null))) : null);
  }

  ;
  return null;
}));

/***/ })

})
//# sourceMappingURL=desktop.js.1efab3ffa7b9e96530fe.hot-update.js.map