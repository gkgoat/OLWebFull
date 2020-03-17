webpackHotUpdate("static/development/pages/desktop.js",{

/***/ "./pages/desktop/index.js":
/*!********************************!*\
  !*** ./pages/desktop/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Desktop; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_shadow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-shadow */ "./node_modules/react-shadow/dist/react-shadow.esm.js");
/* harmony import */ var _src_Window_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/Window.js */ "./src/Window.js");
/* harmony import */ var _src_Iframe_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/Iframe.js */ "./src/Iframe.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../index.js */ "./pages/index.js");
/* harmony import */ var _3desktop_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../3desktop/index.js */ "./pages/3desktop/index.js");
/* harmony import */ var _src_DiscordPolyfill_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../src/DiscordPolyfill.js */ "./src/DiscordPolyfill.js");
/* harmony import */ var _discord_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../discord/index.js */ "./pages/discord/index.js");
/* harmony import */ var _src_appi_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../src/appi.js */ "./src/appi.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var node_polyglot__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! node-polyglot */ "./node_modules/node-polyglot/index.js");
/* harmony import */ var node_polyglot__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(node_polyglot__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_test_renderer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-test-renderer */ "./node_modules/react-test-renderer/index.js");
/* harmony import */ var react_test_renderer__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_test_renderer__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _src_main_worker_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../src/main.worker.js */ "./src/main.worker.js");
/* harmony import */ var _src_main_worker_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_src_main_worker_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _src_browser_loader_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../src/browser_loader.js */ "./src/browser_loader.js");
/* harmony import */ var _prezi_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../prezi.js */ "./pages/prezi.js");
/* harmony import */ var _src_cw_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../src/cw.js */ "./src/cw.js");
/* harmony import */ var _src_handler_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../src/handler.js */ "./src/handler.js");
/* harmony import */ var _src_Inspector_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../src/Inspector.js */ "./src/Inspector.js");










var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;





















var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ErrorBoundary);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(ErrorBoundary).call(this, props));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {}
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return __jsx("h1", null, "Something went wrong.");
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

var Inspector = ramda__WEBPACK_IMPORTED_MODULE_20__["pipe"](function (props) {
  return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, props, props.lib);
}, _src_Inspector_js__WEBPACK_IMPORTED_MODULE_28__["default"]);

var DefaultDOMCanvas = function DefaultDOMCanvas(props) {
  return __jsx("canvas", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, props, {
    ref: props.onCanvas
  }));
};

var List = function List(props) {
  return __jsx("div", null, props.all.map(function (v) {
    return __jsx("div", {
      className: props.selected === v ? 'selected' : '',
      onClick: props.onSelect.bind(null, v),
      key: v
    });
  }));
};

var ExtensionLib;
__webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../../ol-ex/lib.js */ "./ol-ex/lib.js")).then(function (v) {
  return ExtensionLib = v;
})["catch"](function (err) {});

var Desktop =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Desktop, _React$Component2);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Desktop, [{
    key: "document",
    get: function get() {
      try {
        return document;
      } catch (err) {
        return null;
      }
    }
  }]);

  function Desktop() {
    var _this2;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Desktop);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Desktop).call(this, props));
    _this2.state = {
      usesSingleWindow: false,
      currentWindow: undefined,
      objectTagSheet: {},
      HotTable: null,
      appDataMap: new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a(),
      windows: [],
      d_a: undefined,
      javaPackage: undefined,
      jlink: undefined,
      ex: undefined
    };
    _this2.state = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, _this2.state, function () {
      try {
        return {
          javaPackage: Packages.com.smalltalkland.slandroid,
          jlink: jlink
        };
      } catch (err) {
        return {};
      }
    }());
    _this2.aapi_ = react__WEBPACK_IMPORTED_MODULE_10___default.a && Object(_src_appi_js__WEBPACK_IMPORTED_MODULE_19__["default"])(react__WEBPACK_IMPORTED_MODULE_10___default.a)(props.mode);

    _this2.aapi = function (code) {
      return _this2.aapi_(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), _this2.addWindow.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2)))(code);
    };

    _this2.renderExWinPossibly = function () {
      return __jsx("span", null);
    };

    var f;

    try {
      f = fetch;
    } catch (err) {
      f = function f() {
        return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject();
      };
    }

    ;
    f('/pages/api/usr').then(function (r) {
      return r.text();
    }).then(function (t) {})["catch"](function (err) {});

    try {
      if (navigator) __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @handsontable/react */ "./node_modules/@handsontable/react/es/react-handsontable.js")).then(function (m) {
        return _this2.mounted && _this2.setState({
          HotTable: m.HotTable
        });
      });
    } catch (err) {}

    ;
    __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! react-mutation-observer */ "./node_modules/react-mutation-observer/lib/index.js", 7)).then(function (m) {
      return _this2.setState({
        d_a: m
      });
    })["catch"](function (err) {});
    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Desktop, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (prevProps.mode !== this.props.mode) this.aapi_ = Object(_src_appi_js__WEBPACK_IMPORTED_MODULE_19__["default"])(react__WEBPACK_IMPORTED_MODULE_10___default.a)(this.props.mode);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "addWindow",
    value: function addWindow(w) {
      var _this3 = this;

      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (c) {
        return _this3.setState(function (s) {
          return {
            windows: s.windows.concat([w])
          };
        }, c);
      });
    }
  }, {
    key: "removeWindow",
    value: function removeWindow(w) {
      var _this4 = this;

      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (c) {
        return _this4.setState(function (s) {
          return {
            windows: s.windows.filter(function (sw) {
              return sw.id !== w.id;
            })
          };
        });
      });
    }
  }, {
    key: "renderExWin",
    value: function renderExWin(Div, Window) {
      return __jsx(Window, null, __jsx(Div, null));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var document = this.document;
      var wrap = ramda__WEBPACK_IMPORTED_MODULE_20__["identity"];
      var HotTable;

      try {
        if (navigator) HotTable = this.state.HotTable;
      } catch (err) {
        HotTable = function HotTable(props) {
          return __jsx("span", null);
        };
      }

      ;
      var isBrowser = false;

      try {
        navigator;
        isBrowser = true;
      } catch (err) {}

      ;
      var discord = this.discord;
      var Div = this.props.div || react_shadow__WEBPACK_IMPORTED_MODULE_12__["default"].div;
      var Window = this.props.Window || _src_Window_js__WEBPACK_IMPORTED_MODULE_13__["default"];
      var Iframe = this.props.Iframe || _src_Iframe_js__WEBPACK_IMPORTED_MODULE_14__["default"];
      var DOMCanvas = this.props.Canvas || DefaultDOMCanvas;

      var MyMutationObserver = this.props.Observer || this.state.d_a && this.state.d_a.MutationObserver || function (props) {
        return props.children;
      };

      MyMutationObserver = function (Old) {
        return function (props) {
          return Old && __jsx(Old, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, props, {
            subtree: true
          }), props.children);
        };
      }(MyMutationObserver);

      MyMutationObserver = MyMutationObserver || function (props) {
        return props.children;
      };

      var lib = {
        List: List,
        div: Div,
        Div: Div,
        Window: Window,
        Iframe: Iframe,
        MutationObserver: MyMutationObserver,
        useEventListener: _src_handler_js__WEBPACK_IMPORTED_MODULE_27__["default"],
        DOMInterop: {
          DOMCanvas: DOMCanvas
        },
        cw: _src_cw_js__WEBPACK_IMPORTED_MODULE_26__["default"],
        desk: {
          getDeskProps: function getDeskProps() {
            return _this5.props;
          }
        },
        TextArea: isBrowser || document ? 'textarea' : null,
        Tabs: isBrowser || document ? {
          Tabs: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Tabs"],
          Tab: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Tab"]
        } : null
      };
      var windows = (this.props.windows || []).concat(this.props.div === null ? [{
        id: 'welcome',
        render: function render(React) {
          return __jsx(_index_js__WEBPACK_IMPORTED_MODULE_15__["default"], null);
        }
      }] : []).concat(discord ? [{
        id: 'discord',
        render: function render(React, lib) {
          var theDiscord = Object(_discord_index_js__WEBPACK_IMPORTED_MODULE_18__["default"])(React, react__WEBPACK_IMPORTED_MODULE_10__["useState"]);
          return __jsx(lib.Div, null, __jsx("theDiscord", {
            lib: lib,
            discord: discord
          }));
        }
      }] : []).concat(isBrowser && _3desktop_index_js__WEBPACK_IMPORTED_MODULE_16__["default"] ? [{
        id: 'three',
        render: function render(rct) {
          return __jsx(ErrorBoundary, null, __jsx(_3desktop_index_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
            dcls: Desktop,
            linkParent: _this5
          }));
        }
      }] : []) //.concat(isBrowser ? [{id: 'prezi',render: rct => Prezi.w(<div><Prezi noDesktop = {true}></Prezi></div>)}] : [])
      .concat(Iframe.canRenderHTML && ExtensionLib ? [{
        id: 'langs',
        render: function render(r) {
          return __jsx(Iframe.html, {
            src: function () {
              try {
                return location.hostname + '/lang/' + lang;
              } catch (err) {
                return '';
              }
            }(),
            windowRef: function windowRef(win) {
              ExtensionLib.dr(win.document.querySelector('#firstHeading'));
            }
          });
        }
      }] : []).concat(this.constructor.wins.map(function (w) {
        return w(_this5, lib);
      })).concat([]).concat(this.state.windows).concat([{
        id: 'self',
        render: function render(React, lib) {
          return __jsx(Inspector, {
            lib: lib,
            obj: _this5
          });
        }
      }]);

      var rw = function rw(w) {
        return __jsx(MyMutationObserver, {
          key: w.id
        }, __jsx(Window, null, __jsx(MyMutationObserver, null, w.render(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, react__WEBPACK_IMPORTED_MODULE_10___default.a, react__WEBPACK_IMPORTED_MODULE_10__), lib, _this5.state.appDataMap.get(w.id), function (v) {
          _this5.setState({
            appDataMap: new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a(_this5.state.appDataMap).set(w.id, v)
          });
        }))));
      };

      if (this.props.w) wrap = ramda__WEBPACK_IMPORTED_MODULE_20__["pipe"](wrap, this.props.w.bind(null, lib));
      if (this.state.usesSingleWindow) wrap = ramda__WEBPACK_IMPORTED_MODULE_20__["pipe"](wrap, function (e) {
        return __jsx(MyMutationObserver, null, __jsx(Div, null, _this5.state.currentWindow ? rw(_this5.state.currentWindow) : _this5.props.children));
      });
      if (this.props.isWatch) wrap = ramda__WEBPACK_IMPORTED_MODULE_20__["pipe"](wrap, function (e) {
        return __jsx(MyMutationObserver, null, __jsx(Div, null, __jsx(_this5.props.Watch, null, __jsx(MyMutationObserver, null, e.props.children[0].props.children[0].props.children))));
      });
      if (this.props.head === 'less') wrap = ramda__WEBPACK_IMPORTED_MODULE_20__["pipe"](wrap, react_test_renderer__WEBPACK_IMPORTED_MODULE_22__["create"]);
      if (this.props.head === 'embed') wrap = ramda__WEBPACK_IMPORTED_MODULE_20__["pipe"](wrap, function (e) {
        e.props.children[0].props.children.map(function (c) {
          return c.key === 'sutils' ? c.props.children[0].props.children[0].props.children[0].children.map(function (nc) {
            return ReactDOM.render(nc, function (e) {
              var _document$querySelect;

              e.classList.add('ol');
              var existing = document.querySelector('.sprite-info_group_14-B_').querySelector('.ol');
              if (existing) return existing;
              (_document$querySelect = document.querySelector('.sprite-info_group_14-B_')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.appendChild(e);
              return e;
            }(document.createElement('div')));
          }) : null;
        });
      });
      if (this.props.connextToEx) wrap = ramda__WEBPACK_IMPORTED_MODULE_20__["pipe"](wrap, function (e) {
        return _this5.props.ex ? function () {
          _this5.setState(function (s, p) {
            return {
              ex: p.ex
            };
          });

          return e;
        }() : __jsx(_src_browser_loader_js__WEBPACK_IMPORTED_MODULE_24__["default"], null, function (v) {
          _this5.setState({
            ex: v
          });

          return e;
        });
      });
      return wrap(__jsx(MyMutationObserver, null, __jsx(Div, null, this.props.children, __jsx(Window, null, HotTable && __jsx(HotTable, null)), this.renderExWinPossibly(Div, Window), windows.map(rw))));
    }
  }, {
    key: "discord",
    get: function get() {
      return this.props.discord || Object(_src_DiscordPolyfill_js__WEBPACK_IMPORTED_MODULE_17__["default"])(this);
    }
  }]);

  return Desktop;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()(Desktop, {
  wins: []
});

/***/ })

})
//# sourceMappingURL=desktop.js.88e2eb1f28dd4415d228.hot-update.js.map