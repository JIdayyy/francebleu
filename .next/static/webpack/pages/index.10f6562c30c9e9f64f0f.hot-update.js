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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full z-0 relative flex flex-col items-center align-middle justify-center h-screen",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
      width: 150,
      height: 75,
      src: "/logo.webp"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "z-0 relative w-full h-full",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "z-0",
        layout: "fill",
        src: "/bgalien.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "absolute top-10 flex flex-col text-white font-bold bg-black rounded-lg bg-opacity-90 p-5",
      children: [state.tracks[state.index].name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "font-normal",
        children: ["( Cet \xE9pisode \xE0 \xE9t\xE9 \xE9cout\xE9", " ", state.trackCount[0].count && state.trackCount[state.index].count, "fois )"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "z-50 absolute text-white w-96 bg-black bg-opacity-90 rounded-lg p-10",
      children: "Un feuilleton propos\xE9 par la Compagnie L\xE9zards qui Bougent, imagin\xE9 et \xE9crit par les jeunes de l'Espace Socio-Culturel Municipal et de la Maison de la Vie Citoyenne Saint-\xC9tienne de Bayonne, et interpr\xE9t\xE9 par les \xE9l\xE8ves de l'\xE9cole de th\xE9\xE2tre Scaramuccia de Saint-Jean de Luz."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Playlist__WEBPACK_IMPORTED_MODULE_3__["Playlist"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Playbar__WEBPACK_IMPORTED_MODULE_4__["Playbar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, _this);
};

_s(Home, "NrZSMaRi5B9MZn9psTPVmcx4xdg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJzdGF0ZSIsInVzZUFwcENvbnRleHQiLCJ0cmFja3MiLCJpbmRleCIsIm5hbWUiLCJ0cmFja0NvdW50IiwiY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFBQTs7QUFDekIsTUFBTUMsS0FBSyxHQUFHQyx3RUFBYSxFQUEzQjtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHFGQUFmO0FBQUEsNEJBQ0kscUVBQUMsaURBQUQ7QUFBTyxXQUFLLEVBQUUsR0FBZDtBQUFtQixZQUFNLEVBQUUsRUFBM0I7QUFBK0IsU0FBRyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFDLDRCQUFmO0FBQUEsNkJBQ0kscUVBQUMsaURBQUQ7QUFBTyxpQkFBUyxFQUFDLEtBQWpCO0FBQXVCLGNBQU0sRUFBQyxNQUE5QjtBQUFxQyxXQUFHLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUtJO0FBQUssZUFBUyxFQUFDLDBGQUFmO0FBQUEsaUJBQ0tELEtBQUssQ0FBQ0UsTUFBTixDQUFhRixLQUFLLENBQUNHLEtBQW5CLEVBQTBCQyxJQUQvQixlQUVJO0FBQU0saUJBQVMsRUFBQyxhQUFoQjtBQUFBLG1FQUMrQixHQUQvQixFQUVLSixLQUFLLENBQUNLLFVBQU4sQ0FBaUIsQ0FBakIsRUFBb0JDLEtBQXBCLElBQ0dOLEtBQUssQ0FBQ0ssVUFBTixDQUFpQkwsS0FBSyxDQUFDRyxLQUF2QixFQUE4QkcsS0FIdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUFjSTtBQUFLLGVBQVMsRUFBQyxzRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRKLGVBcUJJLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkosZUFzQkkscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBCSCxDQTVCRDs7R0FBTVAsSTtVQUNZRSxnRTs7O0tBRFpGLEk7QUE4QlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEwZjY1NjJjMzBjOWU5ZjY0ZjBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IHsgUGxheWxpc3QgfSBmcm9tIFwiQGNvbXBvbmVudHMvUGxheWxpc3RcIjtcbmltcG9ydCB7IFBsYXliYXIgfSBmcm9tIFwiQGNvbXBvbmVudHMvUGxheWJhclwiO1xuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gXCJzcmMvU3RhdGUvQXBwU3RhdGVcIjtcbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gdXNlQXBwQ29udGV4dCgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHotMCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXIgaC1zY3JlZW5cIj5cbiAgICAgICAgICAgIDxJbWFnZSB3aWR0aD17MTUwfSBoZWlnaHQ9ezc1fSBzcmM9XCIvbG9nby53ZWJwXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0wIHJlbGF0aXZlIHctZnVsbCBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiei0wXCIgbGF5b3V0PVwiZmlsbFwiIHNyYz1cIi9iZ2FsaWVuLmpwZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEwIGZsZXggZmxleC1jb2wgdGV4dC13aGl0ZSBmb250LWJvbGQgYmctYmxhY2sgcm91bmRlZC1sZyBiZy1vcGFjaXR5LTkwIHAtNVwiPlxuICAgICAgICAgICAgICAgIHtzdGF0ZS50cmFja3Nbc3RhdGUuaW5kZXhdLm5hbWV9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgKCBDZXQgw6lwaXNvZGUgw6Agw6l0w6kgw6ljb3V0w6l7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtzdGF0ZS50cmFja0NvdW50WzBdLmNvdW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS50cmFja0NvdW50W3N0YXRlLmluZGV4XS5jb3VudH1cbiAgICAgICAgICAgICAgICAgICAgZm9pcyApXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotNTAgYWJzb2x1dGUgdGV4dC13aGl0ZSB3LTk2IGJnLWJsYWNrIGJnLW9wYWNpdHktOTAgcm91bmRlZC1sZyBwLTEwXCI+XG4gICAgICAgICAgICAgICAgVW4gZmV1aWxsZXRvbiBwcm9wb3PDqSBwYXIgbGEgQ29tcGFnbmllIEzDqXphcmRzIHF1aSBCb3VnZW50LFxuICAgICAgICAgICAgICAgIGltYWdpbsOpIGV0IMOpY3JpdCBwYXIgbGVzIGpldW5lcyBkZSBsJ0VzcGFjZSBTb2Npby1DdWx0dXJlbFxuICAgICAgICAgICAgICAgIE11bmljaXBhbCBldCBkZSBsYSBNYWlzb24gZGUgbGEgVmllIENpdG95ZW5uZSBTYWludC3DiXRpZW5uZSBkZVxuICAgICAgICAgICAgICAgIEJheW9ubmUsIGV0IGludGVycHLDqXTDqSBwYXIgbGVzIMOpbMOodmVzIGRlIGwnw6ljb2xlIGRlIHRow6nDonRyZVxuICAgICAgICAgICAgICAgIFNjYXJhbXVjY2lhIGRlIFNhaW50LUplYW4gZGUgTHV6LlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8UGxheWxpc3QgLz5cbiAgICAgICAgICAgIDxQbGF5YmFyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==