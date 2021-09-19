webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Playbar/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Playbar/index.tsx ***!
  \******************************************/
/*! exports provided: Playbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Playbar", function() { return Playbar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_State_AppState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/State/AppState */ "./src/State/AppState.tsx");
/* harmony import */ var _hooks_useConvert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useConvert.js */ "./src/hooks/useConvert.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");


var _jsxFileName = "/home/jidayyy/francebleu/src/components/Playbar/index.tsx",
    _s = $RefreshSig$();







function Playbar() {
  _s();

  var _audioRef$current5;

  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var state = Object(src_State_AppState__WEBPACK_IMPORTED_MODULE_3__["useAppContext"])();
  console.log(state);

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_6__["useQuery"])("getCount", function () {
    return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("http://localhost:3000/api/count").then(function (r) {
      return r.data;
    });
  }, {
    onSuccess: function onSuccess(data) {
      state.setTrackCount(data);
      state.setCount(data[state.index].count);
    }
  }),
      data = _useQuery.data,
      isLoading = _useQuery.isLoading,
      error = _useQuery.error,
      refetch = _useQuery.refetch;

  var controls = {
    play: function play() {
      return state.setIsPlaying(true);
    },
    pause: function pause() {
      return state.setIsPlaying(false);
    },
    forward: function forward() {
      if (state.index === state.tracks.length - 1) {
        state.setIndex(0);
        return state.setOnListen(state.tracks[state.index].url);
      }

      state.setIndex(function (c) {
        return c + 1;
      });
      state.setOnListen(state.tracks[state.index].url);
    },
    backward: function backward() {
      if (state.index === 0) {
        state.setIndex(state.tracks.length - 1);
        return state.setOnListen(state.tracks[state.index].url);
      }

      state.setIndex(function (c) {
        return c - 1;
      });
      state.setOnListen(state.tracks[state.index].url);
    },
    volume: function volume(e) {
      if (parseInt(e.target.value) < 3) {
        state.setVolume(0);
        return audioRef.current.volume = state.volume;
      }

      state.setVolume(parseInt(e.target.value) / 100);
      audioRef.current.volume = state.volume;
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var _audioRef$current;

    (_audioRef$current = audioRef.current) === null || _audioRef$current === void 0 ? void 0 : _audioRef$current.load();

    if (state.isPlaying === true) {
      var _audioRef$current2;

      axios__WEBPACK_IMPORTED_MODULE_5___default.a.put("".concat("http://localhost:3000/api/count", "/").concat(state.tracks[state.index].id));
      refetch();
      state.setCount(data[state.index].count);
      state.setTrackCount(data);
      (_audioRef$current2 = audioRef.current) === null || _audioRef$current2 === void 0 ? void 0 : _audioRef$current2.play();
    }

    if (!isLoading) {
      state.setCount(data[state.index].count);
    }
  }, [state.index, state.isPlaying]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (state.isPlaying) {
      var timer = window.setInterval(function () {
        if (audioRef.current.currentTime > 0) {
          state.setCurrentTime(Math.floor(audioRef.current.currentTime));
          state.setDuration(Math.floor(audioRef.current.duration));
        }

        return function () {
          clearInterval(timer);
        };
      }, 1000);
    }
  }, [audioRef]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var _audioRef$current3, _audioRef$current4;

    if (((_audioRef$current3 = audioRef.current) === null || _audioRef$current3 === void 0 ? void 0 : _audioRef$current3.currentTime) === ((_audioRef$current4 = audioRef.current) === null || _audioRef$current4 === void 0 ? void 0 : _audioRef$current4.duration) && state.isPlaying) {
      controls.forward();
    }
  }, [audioRef]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-black absolute bottom-10 bg-opacity-90 p-5 rounded-lg shadow-lg flex items-center align-middle justify-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-white font-bold mx-4",
      children: state.isPlaying && Object(_hooks_useConvert_js__WEBPACK_IMPORTED_MODULE_4__["default"])((_audioRef$current5 = audioRef.current) === null || _audioRef$current5 === void 0 ? void 0 : _audioRef$current5.currentTime)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "mx-2 transform -translate-x-1 translate-y-1",
      onClick: controls.backward,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: "/icons/backward.png",
        width: 22,
        height: 22
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }, this), !state.isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "mx-2 transform -translate-x-1 translate-y-1",
      onClick: controls.play,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: "/icons/play.png",
        width: 22,
        height: 22
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "mx-2 transform -translate-x-1 translate-y-1",
      onClick: controls.pause,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: "/icons/pause.png",
        width: 22,
        height: 22
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "mx-2 transform -translate-x-1 translate-y-1",
      onClick: controls.forward,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: "/icons/forward.png",
        width: 22,
        height: 22
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-white font-bold mx-4",
      children: state.isPlaying && Object(_hooks_useConvert_js__WEBPACK_IMPORTED_MODULE_4__["default"])(audioRef.current.duration - audioRef.current.currentTime)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
      ref: audioRef,
      src: state.onListen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 9
  }, this);
}

_s(Playbar, "3W/rZOZ5Hzozao0X3+qRrBrCY20=", false, function () {
  return [src_State_AppState__WEBPACK_IMPORTED_MODULE_3__["useAppContext"], react_query__WEBPACK_IMPORTED_MODULE_6__["useQuery"]];
});

_c = Playbar;

var _c;

$RefreshReg$(_c, "Playbar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWJhci9pbmRleC50c3giXSwibmFtZXMiOlsiUGxheWJhciIsImF1ZGlvUmVmIiwidXNlUmVmIiwic3RhdGUiLCJ1c2VBcHBDb250ZXh0IiwiY29uc29sZSIsImxvZyIsInVzZVF1ZXJ5IiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwidGhlbiIsInIiLCJkYXRhIiwib25TdWNjZXNzIiwic2V0VHJhY2tDb3VudCIsInNldENvdW50IiwiaW5kZXgiLCJjb3VudCIsImlzTG9hZGluZyIsImVycm9yIiwicmVmZXRjaCIsImNvbnRyb2xzIiwicGxheSIsInNldElzUGxheWluZyIsInBhdXNlIiwiZm9yd2FyZCIsInRyYWNrcyIsImxlbmd0aCIsInNldEluZGV4Iiwic2V0T25MaXN0ZW4iLCJ1cmwiLCJjIiwiYmFja3dhcmQiLCJ2b2x1bWUiLCJlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFZvbHVtZSIsImN1cnJlbnQiLCJ1c2VFZmZlY3QiLCJsb2FkIiwiaXNQbGF5aW5nIiwicHV0IiwiaWQiLCJ0aW1lciIsIndpbmRvdyIsInNldEludGVydmFsIiwiY3VycmVudFRpbWUiLCJzZXRDdXJyZW50VGltZSIsIk1hdGgiLCJmbG9vciIsInNldER1cmF0aW9uIiwiZHVyYXRpb24iLCJjbGVhckludGVydmFsIiwiQ29udmVydCIsIm9uTGlzdGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0EsT0FBVCxHQUFnQztBQUFBOztBQUFBOztBQUNuQyxNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQTBCLElBQTFCLENBQXZCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyx3RUFBYSxFQUEzQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjs7QUFIbUMsa0JBSVNJLDREQUFRLENBQ2hELFVB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QUFwQztBQUF3QyxjQUFNLEVBQUU7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESCxnQkFRRztBQUNJLGVBQVMsRUFBQyw2Q0FEZDtBQUVJLGFBQU8sRUFBRUQsUUFBUSxDQUFDRyxLQUZ0QjtBQUFBLDZCQUlJLHFFQUFDLGlEQUFEO0FBQU8sV0FBRyxFQUFDLGtCQUFYO0FBQThCLGFBQUssRUFBRSxFQUFyQztBQUF5QyxjQUFNLEVBQUU7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQlIsZUEwQkk7QUFDSSxlQUFTLEVBQUMsNkNBRGQ7QUFFSSxhQUFPLEVBQUVILFFBQVEsQ0FBQ0ksT0FGdEI7QUFBQSw2QkFJSSxxRUFBQyxpREFBRDtBQUFPLFdBQUcsRUFBQyxvQkFBWDtBQUFnQyxhQUFLLEVBQUUsRUFBdkM7QUFBMkMsY0FBTSxFQUFFO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJKLGVBZ0NJO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQUEsZ0JBQ0t2QixLQUFLLENBQUN3QyxTQUFOLElBQ0dhLG9FQUFPLENBQ0h2RCxRQUFRLENBQUN1QyxPQUFULENBQWtCYyxRQUFsQixHQUNJckQsUUFBUSxDQUFDdUMsT0FBVCxDQUFrQlMsV0FGbkI7QUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaENKLGVBdUNJO0FBQU8sU0FBRyxFQUFFaEQsUUFBWjtBQUFzQixTQUFHLEVBQUVFLEtBQUssQ0FBQ3NEO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyQ0g7O0dBdkllekQsTztVQUVFSSxnRSxFQUU4Qkcsb0Q7OztLQUpoQ1AsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNDBlYmZkYmIxMmMxYjNmODJiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwic3JjL1N0YXRlL0FwcFN0YXRlXCI7XG5pbXBvcnQgQ29udmVydCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlQ29udmVydC5qc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmV4cG9ydCBmdW5jdGlvbiBQbGF5YmFyKCk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3Qgc3RhdGUgPSB1c2VBcHBDb250ZXh0KCk7XG4gICAgY29uc29sZS5sb2coc3RhdGUpO1xuICAgIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBlcnJvciwgcmVmZXRjaCB9ID0gdXNlUXVlcnkoXG4gICAgICAgIFwiZ2V0Q291bnRcIixcbiAgICAgICAgKCkgPT5cbiAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgLmdldChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIGFzIHN0cmluZylcbiAgICAgICAgICAgICAgICAudGhlbigocikgPT4gci5kYXRhKSxcbiAgICAgICAge1xuICAgICAgICAgICAgb25TdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnNldFRyYWNrQ291bnQoZGF0YSk7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0Q291bnQoZGF0YVtzdGF0ZS5pbmRleF0uY291bnQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgY29udHJvbHMgPSB7XG4gICAgICAgIHBsYXk6ICgpID0+IHN0YXRlLnNldElzUGxheWluZyh0cnVlKSxcbiAgICAgICAgcGF1c2U6ICgpID0+IHN0YXRlLnNldElzUGxheWluZyhmYWxzZSksXG4gICAgICAgIGZvcndhcmQ6ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5pbmRleCA9PT0gc3RhdGUudHJhY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXRJbmRleCgwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUuc2V0T25MaXN0ZW4oc3RhdGUudHJhY2tzW3N0YXRlLmluZGV4XS51cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdGUuc2V0SW5kZXgoKGMpID0+IGMgKyAxKTtcbiAgICAgICAgICAgIHN0YXRlLnNldE9uTGlzdGVuKHN0YXRlLnRyYWNrc1tzdGF0ZS5pbmRleF0udXJsKTtcbiAgICAgICAgfSxcbiAgICAgICAgYmFja3dhcmQ6ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5pbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnNldEluZGV4KHN0YXRlLnRyYWNrcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUuc2V0T25MaXN0ZW4oc3RhdGUudHJhY2tzW3N0YXRlLmluZGV4XS51cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdGUuc2V0SW5kZXgoKGMpID0+IGMgLSAxKTtcbiAgICAgICAgICAgIHN0YXRlLnNldE9uTGlzdGVuKHN0YXRlLnRyYWNrc1tzdGF0ZS5pbmRleF0udXJsKTtcbiAgICAgICAgfSxcbiAgICAgICAgdm9sdW1lOiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChlLnRhcmdldC52YWx1ZSkgPCAzKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0Vm9sdW1lKDApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoYXVkaW9SZWYuY3VycmVudCEudm9sdW1lID0gc3RhdGUudm9sdW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRlLnNldFZvbHVtZShwYXJzZUludChlLnRhcmdldC52YWx1ZSkgLyAxMDApO1xuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudCEudm9sdW1lID0gc3RhdGUudm9sdW1lO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhdWRpb1JlZi5jdXJyZW50Py5sb2FkKCk7XG4gICAgICAgIGlmIChzdGF0ZS5pc1BsYXlpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGF4aW9zLnB1dChcbiAgICAgICAgICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS8ke1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS50cmFja3Nbc3RhdGUuaW5kZXhdLmlkXG4gICAgICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmVmZXRjaCgpO1xuICAgICAgICAgICAgc3RhdGUuc2V0Q291bnQoZGF0YVtzdGF0ZS5pbmRleF0uY291bnQpO1xuICAgICAgICAgICAgc3RhdGUuc2V0VHJhY2tDb3VudChkYXRhKTtcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQ/LnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTG9hZGluZykge1xuICAgICAgICAgICAgc3RhdGUuc2V0Q291bnQoZGF0YVtzdGF0ZS5pbmRleF0uY291bnQpO1xuICAgICAgICB9XG4gICAgfSwgW3N0YXRlLmluZGV4LCBzdGF0ZS5pc1BsYXlpbmddKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS5pc1BsYXlpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYXVkaW9SZWYuY3VycmVudCEuY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnNldEN1cnJlbnRUaW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihhdWRpb1JlZi5jdXJyZW50IS5jdXJyZW50VGltZSBhcyBudW1iZXIpLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zZXREdXJhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoYXVkaW9SZWYuY3VycmVudCEuZHVyYXRpb24gYXMgbnVtYmVyKSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgfSwgW2F1ZGlvUmVmXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50Py5jdXJyZW50VGltZSA9PT0gYXVkaW9SZWYuY3VycmVudD8uZHVyYXRpb24gJiZcbiAgICAgICAgICAgIHN0YXRlLmlzUGxheWluZ1xuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnRyb2xzLmZvcndhcmQoKTtcbiAgICAgICAgfVxuICAgIH0sIFthdWRpb1JlZl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBhYnNvbHV0ZSBib3R0b20tMTAgYmctb3BhY2l0eS05MCBwLTUgcm91bmRlZC1sZyBzaGFkb3ctbGcgZmxleCBpdGVtcy1jZW50ZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIG14LTRcIj5cbiAgICAgICAgICAgICAgICB7c3RhdGUuaXNQbGF5aW5nICYmIENvbnZlcnQoYXVkaW9SZWYuY3VycmVudD8uY3VycmVudFRpbWUpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC0yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMSB0cmFuc2xhdGUteS0xXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb250cm9scy5iYWNrd2FyZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ljb25zL2JhY2t3YXJkLnBuZ1wiIHdpZHRoPXsyMn0gaGVpZ2h0PXsyMn0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgeyFzdGF0ZS5pc1BsYXlpbmcgPyAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC0yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMSB0cmFuc2xhdGUteS0xXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29udHJvbHMucGxheX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaWNvbnMvcGxheS5wbmdcIiB3aWR0aD17MjJ9IGhlaWdodD17MjJ9IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEgdHJhbnNsYXRlLXktMVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbnRyb2xzLnBhdXNlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pY29ucy9wYXVzZS5wbmdcIiB3aWR0aD17MjJ9IGhlaWdodD17MjJ9IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xIHRyYW5zbGF0ZS15LTFcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbnRyb2xzLmZvcndhcmR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pY29ucy9mb3J3YXJkLnBuZ1wiIHdpZHRoPXsyMn0gaGVpZ2h0PXsyMn0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCBteC00XCI+XG4gICAgICAgICAgICAgICAge3N0YXRlLmlzUGxheWluZyAmJlxuICAgICAgICAgICAgICAgICAgICBDb252ZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudCEuZHVyYXRpb24gLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQhLmN1cnJlbnRUaW1lLFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YXVkaW8gcmVmPXthdWRpb1JlZn0gc3JjPXtzdGF0ZS5vbkxpc3Rlbn0+PC9hdWRpbz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=