webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Playlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Playlist */ "./src/components/Playlist/index.tsx");
/* harmony import */ var _components_Playbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Playbar */ "./src/components/Playbar/index.tsx");
/* harmony import */ var src_State_AppState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/State/AppState */ "./src/State/AppState.tsx");


var _jsxFileName = "/home/jidayyy/francebleu/pages/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Home = function Home() {
  _s();

  var state = Object(src_State_AppState__WEBPACK_IMPORTED_MODULE_5__["useAppContext"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      count = _useState[0],
      setCount = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (state.trackCount[state.index]) {
      setCount(state.trackCount[state.index].count);
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full z-0 relative flex flex-col items-center align-middle justify-center h-screen",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
      width: 150,
      height: 75,
      src: "/logo.webp"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "z-0 relative w-full h-full",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "z-0",
        layout: "fill",
        src: "/bgalien.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "absolute top-10 flex flex-col text-white font-bold bg-black rounded-lg bg-opacity-90 p-5",
      children: [state.tracks[state.index].name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "font-normal",
        children: ["( Cet \xE9pisode \xE0 \xE9t\xE9 \xE9cout\xE9 ", count, "fois )"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "z-50 absolute text-white w-96 bg-black bg-opacity-90 rounded-lg p-10",
      children: "Un feuilleton propos\xE9 par la Compagnie L\xE9zards qui Bougent, imagin\xE9 et \xE9crit par les jeunes de l'Espace Socio-Culturel Municipal et de la Maison de la Vie Citoyenne Saint-\xC9tienne de Bayonne, et interpr\xE9t\xE9 par les \xE9l\xE8ves de l'\xE9cole de th\xE9\xE2tre Scaramuccia de Saint-Jean de Luz."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Playlist__WEBPACK_IMPORTED_MODULE_3__["Playlist"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Playbar__WEBPACK_IMPORTED_MODULE_4__["Playbar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, _this);
};

_s(Home, "kJu6RYeqK25HXb48J5pRXM7OrmA=", false, function () {
  return [src_State_AppState__WEBPACK_IMPORTED_MODULE_5__["useAppContext"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJzdGF0ZSIsInVzZUFwcENvbnRleHQiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJ1c2VFZmZlY3QiLCJ0cmFja0NvdW50IiwiaW5kZXgiLCJ0cmFja3MiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLEtBQUssR0FBR0Msd0VBQWEsRUFBM0I7O0FBRHlCLGtCQUVDQyxzREFBUSxDQUFnQixJQUFoQixDQUZUO0FBQUEsTUFFbEJDLEtBRmtCO0FBQUEsTUFFWEMsUUFGVzs7QUFHekJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlMLEtBQUssQ0FBQ00sVUFBTixDQUFrQk4sS0FBSyxDQUFDTyxLQUF4QixDQUFKLEVBQW9DO0FBQ2hDSCxjQUFRLENBQUNKLEtBQUssQ0FBQ00sVUFBTixDQUFrQk4sS0FBSyxDQUFDTyxLQUF4QixFQUErQkosS0FBaEMsQ0FBUjtBQUNIO0FBQ0osR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQUtBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHFGQUFmO0FBQUEsNEJBQ0kscUVBQUMsaURBQUQ7QUFBTyxXQUFLLEVBQUUsR0FBZDtBQUFtQixZQUFNLEVBQUUsRUFBM0I7QUFBK0IsU0FBRyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFDLDRCQUFmO0FBQUEsNkJBQ0kscUVBQUMsaURBQUQ7QUFBTyxpQkFBUyxFQUFDLEtBQWpCO0FBQXVCLGNBQU0sRUFBQyxNQUE5QjtBQUFxQyxXQUFHLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUtJO0FBQUssZUFBUyxFQUFDLDBGQUFmO0FBQUEsaUJBQ0tILEtBQUssQ0FBQ1EsTUFBTixDQUFhUixLQUFLLENBQUNPLEtBQW5CLEVBQTBCRSxJQUQvQixlQUVJO0FBQU0saUJBQVMsRUFBQyxhQUFoQjtBQUFBLG9FQUNnQ04sS0FEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUFZSTtBQUFLLGVBQVMsRUFBQyxzRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpKLGVBbUJJLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkosZUFvQkkscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdCSCxDQWhDRDs7R0FBTUosSTtVQUNZRSxnRTs7O0tBRFpGLEk7QUFrQ1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU3MzlkYTUxZDE3ODJiZjI4YWU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmltcG9ydCB7IFBsYXlsaXN0IH0gZnJvbSBcIkBjb21wb25lbnRzL1BsYXlsaXN0XCI7XG5pbXBvcnQgeyBQbGF5YmFyIH0gZnJvbSBcIkBjb21wb25lbnRzL1BsYXliYXJcIjtcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwic3JjL1N0YXRlL0FwcFN0YXRlXCI7XG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IHVzZUFwcENvbnRleHQoKTtcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS50cmFja0NvdW50IVtzdGF0ZS5pbmRleF0pIHtcbiAgICAgICAgICAgIHNldENvdW50KHN0YXRlLnRyYWNrQ291bnQhW3N0YXRlLmluZGV4XS5jb3VudCk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgei0wIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlblwiPlxuICAgICAgICAgICAgPEltYWdlIHdpZHRoPXsxNTB9IGhlaWdodD17NzV9IHNyYz1cIi9sb2dvLndlYnBcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTAgcmVsYXRpdmUgdy1mdWxsIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJ6LTBcIiBsYXlvdXQ9XCJmaWxsXCIgc3JjPVwiL2JnYWxpZW4uanBnXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMTAgZmxleCBmbGV4LWNvbCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBiZy1ibGFjayByb3VuZGVkLWxnIGJnLW9wYWNpdHktOTAgcC01XCI+XG4gICAgICAgICAgICAgICAge3N0YXRlLnRyYWNrc1tzdGF0ZS5pbmRleF0ubmFtZX1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgICAgICAoIENldCDDqXBpc29kZSDDoCDDqXTDqSDDqWNvdXTDqSB7Y291bnR9XG4gICAgICAgICAgICAgICAgICAgIGZvaXMgKVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTUwIGFic29sdXRlIHRleHQtd2hpdGUgdy05NiBiZy1ibGFjayBiZy1vcGFjaXR5LTkwIHJvdW5kZWQtbGcgcC0xMFwiPlxuICAgICAgICAgICAgICAgIFVuIGZldWlsbGV0b24gcHJvcG9zw6kgcGFyIGxhIENvbXBhZ25pZSBMw6l6YXJkcyBxdWkgQm91Z2VudCxcbiAgICAgICAgICAgICAgICBpbWFnaW7DqSBldCDDqWNyaXQgcGFyIGxlcyBqZXVuZXMgZGUgbCdFc3BhY2UgU29jaW8tQ3VsdHVyZWxcbiAgICAgICAgICAgICAgICBNdW5pY2lwYWwgZXQgZGUgbGEgTWFpc29uIGRlIGxhIFZpZSBDaXRveWVubmUgU2FpbnQtw4l0aWVubmUgZGVcbiAgICAgICAgICAgICAgICBCYXlvbm5lLCBldCBpbnRlcnByw6l0w6kgcGFyIGxlcyDDqWzDqHZlcyBkZSBsJ8OpY29sZSBkZSB0aMOpw6J0cmVcbiAgICAgICAgICAgICAgICBTY2FyYW11Y2NpYSBkZSBTYWludC1KZWFuIGRlIEx1ei5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFBsYXlsaXN0IC8+XG4gICAgICAgICAgICA8UGxheWJhciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=