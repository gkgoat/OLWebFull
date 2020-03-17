webpackHotUpdate("static/development/pages/desktop.js",{

/***/ "./pages/3desktop/index.js":
/*!*********************************!*\
  !*** ./pages/3desktop/index.js ***!
  \*********************************/
/*! exports provided: Box, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_shadow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-shadow */ "./node_modules/react-shadow/dist/react-shadow.esm.js");
/* harmony import */ var node_polyglot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-polyglot */ "./node_modules/node-polyglot/index.js");
/* harmony import */ var node_polyglot__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_polyglot__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/web.js");
/* harmony import */ var three_dragcontrols__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three-dragcontrols */ "./node_modules/three-dragcontrols/lib/index.module.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Box = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function Box(props, ref) {
  // Set up state for the hovered and active state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hovered = _useState[0],
      setHover = _useState[1]; // Rotate mesh every frame, this is outside of React without overhead


  return __jsx("mesh", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    scale: (hovered ? [1.5, 1.5, 1.5] : [1, 1, 1]).map(function (v) {
      return v * props.scale;
    }),
    onPointerOver: function onPointerOver(e) {
      return setHover(true);
    },
    onPointerOut: function onPointerOut(e) {
      return setHover(false);
    }
  }), __jsx("boxBufferGeometry", {
    attach: "geometry",
    args: [1, 1, 1].map(function (v) {
      return v * props.scale;
    })
  }), __jsx("meshStandardMaterial", {
    attach: "material",
    color: props.color
  }));
});

var ThreeRef = function ThreeRef(props) {
  props.setThree(Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_4__["useThree"])());
  return null;
};

var DOMCanvas = function DOMCanvas(props) {
  return __jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_4__["Dom"], null, __jsx("canvas", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: props.onCanvas
  }, props)));
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var Desktop = props.dcls;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      three = _useState2[0],
      setThree = _useState2[1];

  if (three) var camera = three.camera,
      gl = three.gl;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      objs = _useState3[0],
      setObjs = _useState3[1];

  if (!objs) setObjs([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (gl) {
      var d = new three_dragcontrols__WEBPACK_IMPORTED_MODULE_5__["default"](objs, camera, gl.domElements);
      return d.dispose.bind(d);
    }
  }, [props.dcls, objs]);
  return __jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_4__["Canvas"], null, __jsx(Desktop, {
    Div: Box,
    Canvas: DOMCanvas,
    Window: function Window(wprops) {
      var r = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
      Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        setObjs((objs || []).concat([r.current]));
        return function () {
          return setObjs(objs.filter(function (o) {
            return o !== r.current;
          }));
        };
      });
      return __jsx(Box, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, wprops, {
        ref: r
      }));
    },
    Iframe: Box
  }), __jsx(ThreeRef, {
    setThree: setThree
  }));
});

/***/ })

})
//# sourceMappingURL=desktop.js.0d6f5b3551c1b5a540ac.hot-update.js.map