webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/State/AppState.tsx":
/*!********************************!*\
  !*** ./src/State/AppState.tsx ***!
  \********************************/
/*! exports provided: useAppContext, AppContextWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppContext", function() { return useAppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContextWrapper", function() { return AppContextWrapper; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _datas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datas */ "./src/datas.ts");


var _jsxFileName = "/home/jidayyy/francebleu/src/State/AppState.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



var AppContextDefault = {
  isPlaying: false,
  isLoading: false,
  tracks: _datas__WEBPACK_IMPORTED_MODULE_2__["default"],
  volume: 0.5,
  setIsLoading: null,
  index: 0,
  onListen: _datas__WEBPACK_IMPORTED_MODULE_2__["default"][0].url,
  trackCount: null,
  setOnListen: null,
  setVolume: null,
  setIndex: null,
  setIsPlaying: null,
  setDuration: null,
  setCurrentTime: null,
  setTrackCount: null,
  duration: 0,
  currentTime: 0
};
var AppState = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(AppContextDefault);
_c = AppState;
function useAppContext() {
  _s();

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AppState);
}

_s(useAppContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

function AppContextWrapper(_ref) {
  _s2();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      index = _useState2[0],
      setIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_datas__WEBPACK_IMPORTED_MODULE_2__["default"][index].url),
      onListen = _useState3[0],
      setOnListen = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isPlaying = _useState4[0],
      setIsPlaying = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      duration = _useState5[0],
      setDuration = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentTime = _useState6[0],
      setCurrentTime = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.5),
      volume = _useState7[0],
      setVolume = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      trackCount = _useState8[0],
      setTrackCount = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      count = _useState9[0],
      setCount = _useState9[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppState.Provider, {
    value: {
      tracks: _datas__WEBPACK_IMPORTED_MODULE_2__["default"],
      isPlaying: isPlaying,
      trackCount: trackCount,
      setTrackCount: setTrackCount,
      setIsPlaying: setIsPlaying,
      isLoading: isLoading,
      setIsLoading: setIsLoading,
      setOnListen: setOnListen,
      volume: volume,
      setVolume: setVolume,
      onListen: onListen,
      index: index,
      setIndex: setIndex,
      setDuration: setDuration,
      setCurrentTime: setCurrentTime,
      duration: duration,
      currentTime: currentTime
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 9
  }, this);
}

_s2(AppContextWrapper, "8AUQi11753ey9StSAqKS2hNr0MQ=");

_c2 = AppContextWrapper;

var _c, _c2;

$RefreshReg$(_c, "AppState");
$RefreshReg$(_c2, "AppContextWrapper");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1N0YXRlL0FwcFN0YXRlLnRzeCJdLCJuYW1lcyI6WyJBcHBDb250ZXh0RGVmYXVsdCIsImlzUGxheWluZyIsImlzTG9hZGluZyIsInRyYWNrcyIsInZvbHVtZSIsInNldElzTG9hZGluZyIsImluZGV4Iiwib25MaXN0ZW4iLCJ1cmwiLCJ0cmFja0NvdW50Iiwic2V0T25MaXN0ZW4iLCJzZXRWb2x1bWUiLCJzZXRJbmRleCIsInNldElzUGxheWluZyIsInNldER1cmF0aW9uIiwic2V0Q3VycmVudFRpbWUiLCJzZXRUcmFja0NvdW50IiwiZHVyYXRpb24iLCJjdXJyZW50VGltZSIsIkFwcFN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dFdyYXBwZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiY291bnQiLCJzZXRDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQW1DQSxJQUFNQSxpQkFBMkIsR0FBRztBQUNoQ0MsV0FBUyxFQUFFLEtBRHFCO0FBRWhDQyxXQUFTLEVBQUUsS0FGcUI7QUFHaENDLFFBQU0sRUFBRUEsOENBSHdCO0FBSWhDQyxRQUFNLEVBQUUsR0FKd0I7QUFLaENDLGNBQVksRUFBRSxJQUxrQjtBQU1oQ0MsT0FBSyxFQUFFLENBTnlCO0FBT2hDQyxVQUFRLEVBQUVKLDhDQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVLLEdBUFk7QUFRaENDLFlBQVUsRUFBRSxJQVJvQjtBQVNoQ0MsYUFBVyxFQUFFLElBVG1CO0FBVWhDQyxXQUFTLEVBQUUsSUFWcUI7QUFXaENDLFVBQVEsRUFBRSxJQVhzQjtBQVloQ0MsY0FBWSxFQUFFLElBWmtCO0FBYWhDQyxhQUFXLEVBQUUsSUFibUI7QUFjaENDLGdCQUFjLEVBQUUsSUFkZ0I7QUFlaENDLGVBQWEsRUFBRSxJQWZpQjtBQWdCaENDLFVBQVEsRUFBRSxDQWhCc0I7QUFpQmhDQyxhQUFXLEVBQUU7QUFqQm1CLENBQXBDO0FBb0JBLElBQU1DLFFBQVEsZ0JBQUdDLDJEQUFhLENBQVdwQixpQkFBWCxDQUE5QjtLQUFNbUIsUTtBQUVDLFNBQVNFLGFBQVQsR0FBbUM7QUFBQTs7QUFDdEMsU0FBT0Msd0RBQVUsQ0FBQ0gsUUFBRCxDQUFqQjtBQUNIOztHQUZlRSxhOztBQUdULFNBQVNFLGlCQUFULE9BSVM7QUFBQTs7QUFBQSxNQUhaQyxRQUdZLFFBSFpBLFFBR1k7O0FBQUEsa0JBQ3NCQyxzREFBUSxDQUFDLEtBQUQsQ0FEOUI7QUFBQSxNQUNMdkIsU0FESztBQUFBLE1BQ01HLFlBRE47O0FBQUEsbUJBRWNvQixzREFBUSxDQUFDLENBQUQsQ0FGdEI7QUFBQSxNQUVMbkIsS0FGSztBQUFBLE1BRUVNLFFBRkY7O0FBQUEsbUJBR29CYSxzREFBUSxDQUFDdEIsOENBQU0sQ0FBQ0csS0FBRCxDQUFOLENBQWNFLEdBQWYsQ0FINUI7QUFBQSxNQUdMRCxRQUhLO0FBQUEsTUFHS0csV0FITDs7QUFBQSxtQkFJc0JlLHNEQUFRLENBQUMsS0FBRCxDQUo5QjtBQUFBLE1BSUx4QixTQUpLO0FBQUEsTUFJTVksWUFKTjs7QUFBQSxtQkFLb0JZLHNEQUFRLENBQUMsQ0FBRCxDQUw1QjtBQUFBLE1BS0xSLFFBTEs7QUFBQSxNQUtLSCxXQUxMOztBQUFBLG1CQU0wQlcsc0RBQVEsQ0FBQyxDQUFELENBTmxDO0FBQUEsTUFNTFAsV0FOSztBQUFBLE1BTVFILGNBTlI7O0FBQUEsbUJBT2dCVSxzREFBUSxDQUFDLEdBQUQsQ0FQeEI7QUFBQSxNQU9MckIsTUFQSztBQUFBLE1BT0dPLFNBUEg7O0FBQUEsbUJBUXdCYyxzREFBUSxDQUFLLEVBQUwsQ0FSaEM7QUFBQSxNQVFMaEIsVUFSSztBQUFBLE1BUU9PLGFBUlA7O0FBQUEsbUJBU2NTLHNEQUFRLENBQVMsQ0FBVCxDQVR0QjtBQUFBLE1BU0xDLEtBVEs7QUFBQSxNQVNFQyxRQVRGOztBQVVaLHNCQUNJLHFFQUFDLFFBQUQsQ0FBVSxRQUFWO0FBQ0ksU0FBSyxFQUFFO0FBQ0h4QixZQUFNLEVBQU5BLDhDQURHO0FBRUhGLGVBQVMsRUFBVEEsU0FGRztBQUdIUSxnQkFBVSxFQUFWQSxVQUhHO0FBSUhPLG1CQUFhLEVBQWJBLGFBSkc7QUFLSEgsa0JBQVksRUFBWkEsWUFMRztBQU1IWCxlQUFTLEVBQVRBLFNBTkc7QUFPSEcsa0JBQVksRUFBWkEsWUFQRztBQVFISyxpQkFBVyxFQUFYQSxXQVJHO0FBU0hOLFlBQU0sRUFBTkEsTUFURztBQVVITyxlQUFTLEVBQVRBLFNBVkc7QUFXSEosY0FBUSxFQUFSQSxRQVhHO0FBWUhELFdBQUssRUFBTEEsS0FaRztBQWFITSxjQUFRLEVBQVJBLFFBYkc7QUFjSEUsaUJBQVcsRUFBWEEsV0FkRztBQWVIQyxvQkFBYyxFQUFkQSxjQWZHO0FBZ0JIRSxjQUFRLEVBQVJBLFFBaEJHO0FBaUJIQyxpQkFBVyxFQUFYQTtBQWpCRyxLQURYO0FBQUEsY0FxQktNO0FBckJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXlCSDs7SUF2Q2VELGlCOztNQUFBQSxpQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmIxYWFjMWU3ZWQzNzNkYTg4YTE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgICBjcmVhdGVDb250ZXh0LFxuICAgIERpc3BhdGNoLFxuICAgIFNldFN0YXRlQWN0aW9uLFxuICAgIHVzZUNvbnRleHQsXG4gICAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHRyYWNrcyBmcm9tIFwiLi4vZGF0YXNcIjtcbmludGVyZmFjZSBUcmFjayB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbn1cbmludGVyZmFjZSBUcmFja0Mge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XG4gICAgc2V0SXNMb2FkaW5nOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4gfCBudWxsO1xuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgICB0cmFja3M6IFRyYWNrW107XG4gICAgb25MaXN0ZW46IHN0cmluZztcbiAgICBzZXRPbkxpc3RlbjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj47XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBzZXRJbmRleDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG4gICAgc2V0SXNQbGF5aW5nOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XG4gICAgaXNQbGF5aW5nOiBib29sZWFuO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgY3VycmVudFRpbWU6IG51bWJlcjtcbiAgICBzZXREdXJhdGlvbjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG4gICAgc2V0Vm9sdW1lOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXI+PjtcbiAgICBzZXRDdXJyZW50VGltZTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG4gICAgc2V0VHJhY2tDb3VudDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248W10+PjtcbiAgICB0cmFja0NvdW50OiBUcmFja0NbXSB8IG51bGw7XG4gICAgdm9sdW1lOiBudW1iZXI7XG59XG5cbmNvbnN0IEFwcENvbnRleHREZWZhdWx0OiBBcHBTdGF0ZSA9IHtcbiAgICBpc1BsYXlpbmc6IGZhbHNlLFxuICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgdHJhY2tzOiB0cmFja3MsXG4gICAgdm9sdW1lOiAwLjUsXG4gICAgc2V0SXNMb2FkaW5nOiBudWxsLFxuICAgIGluZGV4OiAwLFxuICAgIG9uTGlzdGVuOiB0cmFja3NbMF0udXJsLFxuICAgIHRyYWNrQ291bnQ6IG51bGwsXG4gICAgc2V0T25MaXN0ZW46IG51bGwgYXMgdW5rbm93biBhcyBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PixcbiAgICBzZXRWb2x1bWU6IG51bGwgYXMgdW5rbm93biBhcyBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXI+PixcbiAgICBzZXRJbmRleDogbnVsbCBhcyB1bmtub3duIGFzIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+LFxuICAgIHNldElzUGxheWluZzogbnVsbCBhcyB1bmtub3duIGFzIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PixcbiAgICBzZXREdXJhdGlvbjogbnVsbCBhcyB1bmtub3duIGFzIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+LFxuICAgIHNldEN1cnJlbnRUaW1lOiBudWxsIGFzIHVua25vd24gYXMgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj4sXG4gICAgc2V0VHJhY2tDb3VudDogbnVsbCBhcyB1bmtub3duIGFzIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFtdPj4sXG4gICAgZHVyYXRpb246IDAsXG4gICAgY3VycmVudFRpbWU6IDAsXG59O1xuXG5jb25zdCBBcHBTdGF0ZSA9IGNyZWF0ZUNvbnRleHQ8QXBwU3RhdGU+KEFwcENvbnRleHREZWZhdWx0KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKTogQXBwU3RhdGUge1xuICAgIHJldHVybiB1c2VDb250ZXh0KEFwcFN0YXRlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBBcHBDb250ZXh0V3JhcHBlcih7XG4gICAgY2hpbGRyZW4sXG59OiB7XG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn0pOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtvbkxpc3Rlbiwgc2V0T25MaXN0ZW5dID0gdXNlU3RhdGUodHJhY2tzW2luZGV4XS51cmwpO1xuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbY3VycmVudFRpbWUsIHNldEN1cnJlbnRUaW1lXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt2b2x1bWUsIHNldFZvbHVtZV0gPSB1c2VTdGF0ZSgwLjUpO1xuICAgIGNvbnN0IFt0cmFja0NvdW50LCBzZXRUcmFja0NvdW50XSA9IHVzZVN0YXRlPFtdPihbXSk7XG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBcHBTdGF0ZS5Qcm92aWRlclxuICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICB0cmFja3MsXG4gICAgICAgICAgICAgICAgaXNQbGF5aW5nLFxuICAgICAgICAgICAgICAgIHRyYWNrQ291bnQsXG4gICAgICAgICAgICAgICAgc2V0VHJhY2tDb3VudCxcbiAgICAgICAgICAgICAgICBzZXRJc1BsYXlpbmcsXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyxcbiAgICAgICAgICAgICAgICBzZXRPbkxpc3RlbixcbiAgICAgICAgICAgICAgICB2b2x1bWUsXG4gICAgICAgICAgICAgICAgc2V0Vm9sdW1lLFxuICAgICAgICAgICAgICAgIG9uTGlzdGVuLFxuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgIHNldEluZGV4LFxuICAgICAgICAgICAgICAgIHNldER1cmF0aW9uLFxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRUaW1lLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0FwcFN0YXRlLlByb3ZpZGVyPlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9