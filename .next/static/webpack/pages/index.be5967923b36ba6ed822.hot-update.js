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
    setCount(state.trackCount[state.index].count);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full z-0 relative flex flex-col items-center align-middle justify-center h-screen",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
      width: 150,
      height: 75,
      src: "/logo.webp"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "z-0 relative w-full h-full",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "z-0",
        layout: "fill",
        src: "/bgalien.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "absolute top-10 flex flex-col text-white font-bold bg-black rounded-lg bg-opacity-90 p-5",
      children: [state.tracks[state.index].name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "font-normal",
        children: ["( Cet \xE9pisode \xE0 \xE9t\xE9 \xE9cout\xE9 ", count, " fois )"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "z-50 absolute text-white w-96 bg-black bg-opacity-90 rounded-lg p-10",
      children: "Un feuilleton propos\xE9 par la Compagnie L\xE9zards qui Bougent, imagin\xE9 et \xE9crit par les jeunes de l'Espace Socio-Culturel Municipal et de la Maison de la Vie Citoyenne Saint-\xC9tienne de Bayonne, et interpr\xE9t\xE9 par les \xE9l\xE8ves de l'\xE9cole de th\xE9\xE2tre Scaramuccia de Saint-Jean de Luz."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Playlist__WEBPACK_IMPORTED_MODULE_3__["Playlist"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Playbar__WEBPACK_IMPORTED_MODULE_4__["Playbar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJzdGF0ZSIsInVzZUFwcENvbnRleHQiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJ1c2VFZmZlY3QiLCJ0cmFja0NvdW50IiwiaW5kZXgiLCJ0cmFja3MiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLEtBQUssR0FBR0Msd0VBQWEsRUFBM0I7O0FBRHlCLGtCQUVDQyxzREFBUSxDQUFnQixJQUFoQixDQUZUO0FBQUEsTUFFbEJDLEtBRmtCO0FBQUEsTUFFWEMsUUFGVzs7QUFHekJDLHlEQUFTLENBQUMsWUFBTTtBQUNaRCxZQUFRLENBQUNKLEtBQUssQ0FBQ00sVUFBTixDQUFpQk4sS0FBSyxDQUFDTyxLQUF2QixFQUE4QkosS0FBL0IsQ0FBUjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxxRkFBZjtBQUFBLDRCQUNJLHFFQUFDLGlEQUFEO0FBQU8sV0FBSyxFQUFFLEdBQWQ7QUFBbUIsWUFBTSxFQUFFLEVBQTNCO0FBQStCLFNBQUcsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLGVBQVMsRUFBQyw0QkFBZjtBQUFBLDZCQUNJLHFFQUFDLGlEQUFEO0FBQU8saUJBQVMsRUFBQyxLQUFqQjtBQUF1QixjQUFNLEVBQUMsTUFBOUI7QUFBcUMsV0FBRyxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFLSTtBQUFLLGVBQVMsRUFBQywwRkFBZjtBQUFBLGlCQUNLSCxLQUFLLENBQUNRLE1BQU4sQ0FBYVIsS0FBSyxDQUFDTyxLQUFuQixFQUEwQkUsSUFEL0IsZUFFSTtBQUFNLGlCQUFTLEVBQUMsYUFBaEI7QUFBQSxvRUFDZ0NOLEtBRGhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKLGVBV0k7QUFBSyxlQUFTLEVBQUMsc0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYSixlQWtCSSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJKLGVBbUJJLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1QkgsQ0E3QkQ7O0dBQU1KLEk7VUFDWUUsZ0U7OztLQURaRixJO0FBK0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZTU5Njc5MjNiMzZiYTZlZDgyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbXBvcnQgeyBQbGF5bGlzdCB9IGZyb20gXCJAY29tcG9uZW50cy9QbGF5bGlzdFwiO1xuaW1wb3J0IHsgUGxheWJhciB9IGZyb20gXCJAY29tcG9uZW50cy9QbGF5YmFyXCI7XG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSBcInNyYy9TdGF0ZS9BcHBTdGF0ZVwiO1xuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSB1c2VBcHBDb250ZXh0KCk7XG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDb3VudChzdGF0ZS50cmFja0NvdW50W3N0YXRlLmluZGV4XS5jb3VudCk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHotMCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXIgaC1zY3JlZW5cIj5cbiAgICAgICAgICAgIDxJbWFnZSB3aWR0aD17MTUwfSBoZWlnaHQ9ezc1fSBzcmM9XCIvbG9nby53ZWJwXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0wIHJlbGF0aXZlIHctZnVsbCBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiei0wXCIgbGF5b3V0PVwiZmlsbFwiIHNyYz1cIi9iZ2FsaWVuLmpwZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEwIGZsZXggZmxleC1jb2wgdGV4dC13aGl0ZSBmb250LWJvbGQgYmctYmxhY2sgcm91bmRlZC1sZyBiZy1vcGFjaXR5LTkwIHAtNVwiPlxuICAgICAgICAgICAgICAgIHtzdGF0ZS50cmFja3Nbc3RhdGUuaW5kZXhdLm5hbWV9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgKCBDZXQgw6lwaXNvZGUgw6Agw6l0w6kgw6ljb3V0w6kge2NvdW50fSBmb2lzIClcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei01MCBhYnNvbHV0ZSB0ZXh0LXdoaXRlIHctOTYgYmctYmxhY2sgYmctb3BhY2l0eS05MCByb3VuZGVkLWxnIHAtMTBcIj5cbiAgICAgICAgICAgICAgICBVbiBmZXVpbGxldG9uIHByb3Bvc8OpIHBhciBsYSBDb21wYWduaWUgTMOpemFyZHMgcXVpIEJvdWdlbnQsXG4gICAgICAgICAgICAgICAgaW1hZ2luw6kgZXQgw6ljcml0IHBhciBsZXMgamV1bmVzIGRlIGwnRXNwYWNlIFNvY2lvLUN1bHR1cmVsXG4gICAgICAgICAgICAgICAgTXVuaWNpcGFsIGV0IGRlIGxhIE1haXNvbiBkZSBsYSBWaWUgQ2l0b3llbm5lIFNhaW50LcOJdGllbm5lIGRlXG4gICAgICAgICAgICAgICAgQmF5b25uZSwgZXQgaW50ZXJwcsOpdMOpIHBhciBsZXMgw6lsw6h2ZXMgZGUgbCfDqWNvbGUgZGUgdGjDqcOidHJlXG4gICAgICAgICAgICAgICAgU2NhcmFtdWNjaWEgZGUgU2FpbnQtSmVhbiBkZSBMdXouXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxQbGF5bGlzdCAvPlxuICAgICAgICAgICAgPFBsYXliYXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9