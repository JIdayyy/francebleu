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
  count: 0,
  setCount: null,
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
      count: count,
      setCount: setCount,
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
    lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1N0YXRlL0FwcFN0YXRlLnRzeCJdLCJuYW1lcyI6WyJBcHBDb250ZXh0RGVmYXVsdCIsImlzUGxheWluZyIsImlzTG9hZGluZyIsInRyYWNrcyIsInZvbHVtZSIsInNldElzTG9hZGluZyIsImluZGV4Iiwib25MaXN0ZW4iLCJ1cmwiLCJjb3VudCIsInNldENvdW50IiwidHJhY2tDb3VudCIsInNldE9uTGlzdGVuIiwic2V0Vm9sdW1lIiwic2V0SW5kZXgiLCJzZXRJc1BsYXlpbmciLCJzZXREdXJhdGlvbiIsInNldEN1cnJlbnRUaW1lIiwic2V0VHJhY2tDb3VudCIsImR1cmF0aW9uIiwiY3VycmVudFRpbWUiLCJBcHBTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBcHBDb250ZXh0IiwidXNlQ29udGV4dCIsIkFwcENvbnRleHRXcmFwcGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQXFDQSxJQUFNQSxpQkFBMkIsR0FBRztBQUNoQ0MsV0FBUyxFQUFFLEtBRHFCO0FBRWhDQyxXQUFTLEVBQUUsS0FGcUI7QUFHaENDLFFBQU0sRUFBRUEsOENBSHdCO0FBSWhDQyxRQUFNLEVBQUUsR0FKd0I7QUFLaENDLGNBQVksRUFBRSxJQUxrQjtBQU1oQ0MsT0FBSyxFQUFFLENBTnlCO0FBT2hDQyxVQUFRLEVBQUVKLDhDQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVLLEdBUFk7QUFRaENDLE9BQUssRUFBRSxDQVJ5QjtBQVNoQ0MsVUFBUSxFQUFFLElBVHNCO0FBVWhDQyxZQUFVLEVBQUUsSUFWb0I7QUFXaENDLGFBQVcsRUFBRSxJQVhtQjtBQVloQ0MsV0FBUyxFQUFFLElBWnFCO0FBYWhDQyxVQUFRLEVBQUUsSUFic0I7QUFjaENDLGNBQVksRUFBRSxJQWRrQjtBQWVoQ0MsYUFBVyxFQUFFLElBZm1CO0FBZ0JoQ0MsZ0JBQWMsRUFBRSxJQWhCZ0I7QUFpQmhDQyxlQUFhLEVBQUUsSUFqQmlCO0FBa0JoQ0MsVUFBUSxFQUFFLENBbEJzQjtBQW1CaENDLGFBQVcsRUFBRTtBQW5CbUIsQ0FBcEM7QUFzQkEsSUFBTUMsUUFBUSxnQkFBR0MsMkRBQWEsQ0FBV3RCLGlCQUFYLENBQTlCO0tBQU1xQixRO0FBRUMsU0FBU0UsYUFBVCxHQUFtQztBQUFBOztBQUN0QyxTQUFPQyx3REFBVSxDQUFDSCxRQUFELENBQWpCO0FBQ0g7O0dBRmVFLGE7O0FBR1QsU0FBU0UsaUJBQVQsT0FJUztBQUFBOztBQUFBLE1BSFpDLFFBR1ksUUFIWkEsUUFHWTs7QUFBQSxrQkFDc0JDLHNEQUFRLENBQUMsS0FBRCxDQUQ5QjtBQUFBLE1BQ0x6QixTQURLO0FBQUEsTUFDTUcsWUFETjs7QUFBQSxtQkFFY3NCLHNEQUFRLENBQUMsQ0FBRCxDQUZ0QjtBQUFBLE1BRUxyQixLQUZLO0FBQUEsTUFFRVEsUUFGRjs7QUFBQSxtQkFHb0JhLHNEQUFRLENBQUN4Qiw4Q0FBTSxDQUFDRyxLQUFELENBQU4sQ0FBY0UsR0FBZixDQUg1QjtBQUFBLE1BR0xELFFBSEs7QUFBQSxNQUdLSyxXQUhMOztBQUFBLG1CQUlzQmUsc0RBQVEsQ0FBQyxLQUFELENBSjlCO0FBQUEsTUFJTDFCLFNBSks7QUFBQSxNQUlNYyxZQUpOOztBQUFBLG1CQUtvQlksc0RBQVEsQ0FBQyxDQUFELENBTDVCO0FBQUEsTUFLTFIsUUFMSztBQUFBLE1BS0tILFdBTEw7O0FBQUEsbUJBTTBCVyxzREFBUSxDQUFDLENBQUQsQ0FObEM7QUFBQSxNQU1MUCxXQU5LO0FBQUEsTUFNUUgsY0FOUjs7QUFBQSxtQkFPZ0JVLHNEQUFRLENBQUMsR0FBRCxDQVB4QjtBQUFBLE1BT0x2QixNQVBLO0FBQUEsTUFPR1MsU0FQSDs7QUFBQSxtQkFRd0JjLHNEQUFRLENBQUssRUFBTCxDQVJoQztBQUFBLE1BUUxoQixVQVJLO0FBQUEsTUFRT08sYUFSUDs7QUFBQSxtQkFTY1Msc0RBQVEsQ0FBUyxDQUFULENBVHRCO0FBQUEsTUFTTGxCLEtBVEs7QUFBQSxNQVNFQyxRQVRGOztBQVdaLHNCQUNJLHFFQUFDLFFBQUQsQ0FBVSxRQUFWO0FBQ0ksU0FBSyxFQUFFO0FBQ0hQLFlBQU0sRUFBTkEsOENBREc7QUFFSEYsZUFBUyxFQUFUQSxTQUZHO0FBR0hVLGdCQUFVLEVBQVZBLFVBSEc7QUFJSE8sbUJBQWEsRUFBYkEsYUFKRztBQUtISCxrQkFBWSxFQUFaQSxZQUxHO0FBTUhiLGVBQVMsRUFBVEEsU0FORztBQU9IRyxrQkFBWSxFQUFaQSxZQVBHO0FBUUhPLGlCQUFXLEVBQVhBLFdBUkc7QUFTSFIsWUFBTSxFQUFOQSxNQVRHO0FBVUhTLGVBQVMsRUFBVEEsU0FWRztBQVdISixXQUFLLEVBQUxBLEtBWEc7QUFZSEMsY0FBUSxFQUFSQSxRQVpHO0FBYUhILGNBQVEsRUFBUkEsUUFiRztBQWNIRCxXQUFLLEVBQUxBLEtBZEc7QUFlSFEsY0FBUSxFQUFSQSxRQWZHO0FBZ0JIRSxpQkFBVyxFQUFYQSxXQWhCRztBQWlCSEMsb0JBQWMsRUFBZEEsY0FqQkc7QUFrQkhFLGNBQVEsRUFBUkEsUUFsQkc7QUFtQkhDLGlCQUFXLEVBQVhBO0FBbkJHLEtBRFg7QUFBQSxjQXVCS007QUF2Qkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMkJIOztJQTFDZUQsaUI7O01BQUFBLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOGZkNWEwNjYzN2U1ZjRhMGM2YjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICAgIGNyZWF0ZUNvbnRleHQsXG4gICAgRGlzcGF0Y2gsXG4gICAgU2V0U3RhdGVBY3Rpb24sXG4gICAgdXNlQ29udGV4dCxcbiAgICB1c2VFZmZlY3QsXG4gICAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHRyYWNrcyBmcm9tIFwiLi4vZGF0YXNcIjtcbmludGVyZmFjZSBUcmFjayB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbn1cbmludGVyZmFjZSBUcmFja0Mge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XG4gICAgc2V0SXNMb2FkaW5nOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4gfCBudWxsO1xuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgICB0cmFja3M6IFRyYWNrW107XG4gICAgb25MaXN0ZW46IHN0cmluZztcbiAgICBzZXRPbkxpc3RlbjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj47XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBzZXRJbmRleDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG4gICAgc2V0SXNQbGF5aW5nOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XG4gICAgaXNQbGF5aW5nOiBib29sZWFuO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgY3VycmVudFRpbWU6IG51bWJlcjtcbiAgICBzZXREdXJhdGlvbjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG4gICAgc2V0Vm9sdW1lOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXI+PjtcbiAgICBzZXRDdXJyZW50VGltZTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG4gICAgc2V0VHJhY2tDb3VudDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248W10+PjtcbiAgICB0cmFja0NvdW50OiBUcmFja0NbXSB8IG51bGw7XG4gICAgdm9sdW1lOiBudW1iZXI7XG4gICAgY291bnQ6IG51bWJlcjtcbiAgICBzZXRDb3VudDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG59XG5cbmNvbnN0IEFwcENvbnRleHREZWZhdWx0OiBBcHBTdGF0ZSA9IHtcbiAgICBpc1BsYXlpbmc6IGZhbHNlLFxuICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgdHJhY2tzOiB0cmFja3MsXG4gICAgdm9sdW1lOiAwLjUsXG4gICAgc2V0SXNMb2FkaW5nOiBudWxsLFxuICAgIGluZGV4OiAwLFxuICAgIG9uTGlzdGVuOiB0cmFja3NbMF0udXJsLFxuICAgIGNvdW50OiAwLFxuICAgIHNldENvdW50OiBudWxsIGFzIHVua25vd24gYXMgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj4sXG4gICAgdHJhY2tDb3VudDogbnVsbCxcbiAgICBzZXRPbkxpc3RlbjogbnVsbCBhcyB1bmtub3duIGFzIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+LFxuICAgIHNldFZvbHVtZTogbnVsbCBhcyB1bmtub3duIGFzIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+LFxuICAgIHNldEluZGV4OiBudWxsIGFzIHVua25vd24gYXMgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj4sXG4gICAgc2V0SXNQbGF5aW5nOiBudWxsIGFzIHVua25vd24gYXMgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+LFxuICAgIHNldER1cmF0aW9uOiBudWxsIGFzIHVua25vd24gYXMgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj4sXG4gICAgc2V0Q3VycmVudFRpbWU6IG51bGwgYXMgdW5rbm93biBhcyBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXI+PixcbiAgICBzZXRUcmFja0NvdW50OiBudWxsIGFzIHVua25vd24gYXMgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248W10+PixcbiAgICBkdXJhdGlvbjogMCxcbiAgICBjdXJyZW50VGltZTogMCxcbn07XG5cbmNvbnN0IEFwcFN0YXRlID0gY3JlYXRlQ29udGV4dDxBcHBTdGF0ZT4oQXBwQ29udGV4dERlZmF1bHQpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpOiBBcHBTdGF0ZSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoQXBwU3RhdGUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEFwcENvbnRleHRXcmFwcGVyKHtcbiAgICBjaGlsZHJlbixcbn06IHtcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufSk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW29uTGlzdGVuLCBzZXRPbkxpc3Rlbl0gPSB1c2VTdGF0ZSh0cmFja3NbaW5kZXhdLnVybCk7XG4gICAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtjdXJyZW50VGltZSwgc2V0Q3VycmVudFRpbWVdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3ZvbHVtZSwgc2V0Vm9sdW1lXSA9IHVzZVN0YXRlKDAuNSk7XG4gICAgY29uc3QgW3RyYWNrQ291bnQsIHNldFRyYWNrQ291bnRdID0gdXNlU3RhdGU8W10+KFtdKTtcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBwU3RhdGUuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgdHJhY2tzLFxuICAgICAgICAgICAgICAgIGlzUGxheWluZyxcbiAgICAgICAgICAgICAgICB0cmFja0NvdW50LFxuICAgICAgICAgICAgICAgIHNldFRyYWNrQ291bnQsXG4gICAgICAgICAgICAgICAgc2V0SXNQbGF5aW5nLFxuICAgICAgICAgICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgc2V0T25MaXN0ZW4sXG4gICAgICAgICAgICAgICAgdm9sdW1lLFxuICAgICAgICAgICAgICAgIHNldFZvbHVtZSxcbiAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICBzZXRDb3VudCxcbiAgICAgICAgICAgICAgICBvbkxpc3RlbixcbiAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICBzZXRJbmRleCxcbiAgICAgICAgICAgICAgICBzZXREdXJhdGlvbixcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50VGltZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9BcHBTdGF0ZS5Qcm92aWRlcj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==