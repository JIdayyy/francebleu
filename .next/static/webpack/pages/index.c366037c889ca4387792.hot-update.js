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
      (_audioRef$current2 = audioRef.current) === null || _audioRef$current2 === void 0 ? void 0 : _audioRef$current2.play();
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
      }, 100);
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
      lineNumber: 95,
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
        lineNumber: 103,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
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
        lineNumber: 110,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
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
        lineNumber: 117,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
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
        lineNumber: 124,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-white font-bold mx-4",
      children: state.isPlaying && Object(_hooks_useConvert_js__WEBPACK_IMPORTED_MODULE_4__["default"])(audioRef.current.duration - audioRef.current.currentTime)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
      ref: audioRef,
      src: state.onListen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWJhci9pbmRleC50c3giXSwibmFtZXMiOlsiUGxheWJhciIsImF1ZGlvUmVmIiwidXNlUmVmIiwic3RhdGUiLCJ1c2VBcHBDb250ZXh0IiwiY29uc29sZSIsImxvZyIsInVzZVF1ZXJ5IiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwidGhlbiIsInIiLCJkYXRhIiwib25TdWNjZXNzIiwic2V0VHJhY2tDb3VudCIsImlzTG9hZGluZyIsImVycm9yIiwicmVmZXRjaCIsImNvbnRyb2xzIiwicGxheSIsInNldElzUGxheWluZyIsInBhdXNlIiwiZm9yd2FyZCIsImluZGV4IiwidHJhY2tzIiwibGVuZ3RoIiwic2V0SW5kZXgiLCJzZXRPbkxpc3RlbiIsInVybCIsImMiLCJiYWNrd2FyZCIsInZvbHVtZSIsImUiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwic2V0Vm9sdW1lIiwiY3VycmVudCIsInVzZUVmZmVjdCIsImxvYWQiLCJpc1BsYXlpbmciLCJwdXQiLCJpZCIsInRpbWVyIiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50VGltZSIsInNldEN1cnJlbnRUaW1lIiwiTWF0aCIsImZsb29yIiwic2V0RHVyYXRpb24iLCJkdXJhdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJDb252ZXJ0Iiwib25MaXN0ZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxPQUFULEdBQWdDO0FBQUE7O0FBQUE7O0FBQ25DLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBMEIsSUFBMUIsQ0FBdkI7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLHdFQUFhLEVBQTNCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaOztBQUhtQyxrQkFJU0ksNERBQVEsQ0FDaEQsVUFEZ0QsRUFFaEQ7QUFBQSxXQUNJ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QURkO0FBRUksYUFBTyxFQUFFSCxRQUFRLENBQUNJLE9BRnRCO0FBQUEsNkJBSUkscUVBQUMsaURBQUQ7QUFBTyxXQUFHLEVBQUMsb0JBQVg7QUFBZ0MsYUFBSyxFQUFFLEVBQXZDO0FBQTJDLGNBQU0sRUFBRTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCSixlQWdDSTtBQUFLLGVBQVMsRUFBQywyQkFBZjtBQUFBLGdCQUNLcEIsS0FBSyxDQUFDc0MsU0FBTixJQUNHYSxvRUFBTyxDQUNIckQsUUFBUSxDQUFDcUMsT0FBVCxDQUFrQmMsUUFBbEIsR0FDSW5ELFFBQVEsQ0FBQ3FDLE9BQVQsQ0FBa0JTLFdBRm5CO0FBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDSixlQXVDSTtBQUFPLFNBQUcsRUFBRTlDLFFBQVo7QUFBc0IsU0FBRyxFQUFFRSxLQUFLLENBQUNvRDtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMkNIOztHQWpJZXZELE87VUFFRUksZ0UsRUFFOEJHLG9EOzs7S0FKaENQLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzM2NjAzN2M4ODljYTQzODc3OTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSBcInNyYy9TdGF0ZS9BcHBTdGF0ZVwiO1xuaW1wb3J0IENvbnZlcnQgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUNvbnZlcnQuanNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5leHBvcnQgZnVuY3Rpb24gUGxheWJhcigpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IHN0YXRlID0gdXNlQXBwQ29udGV4dCgpO1xuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAgICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgZXJyb3IsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KFxuICAgICAgICBcImdldENvdW50XCIsXG4gICAgICAgICgpID0+XG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgIC5nZXQocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCBhcyBzdHJpbmcpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IHIuZGF0YSksXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9uU3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXRUcmFja0NvdW50KGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgY29udHJvbHMgPSB7XG4gICAgICAgIHBsYXk6ICgpID0+IHN0YXRlLnNldElzUGxheWluZyh0cnVlKSxcbiAgICAgICAgcGF1c2U6ICgpID0+IHN0YXRlLnNldElzUGxheWluZyhmYWxzZSksXG4gICAgICAgIGZvcndhcmQ6ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5pbmRleCA9PT0gc3RhdGUudHJhY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXRJbmRleCgwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUuc2V0T25MaXN0ZW4oc3RhdGUudHJhY2tzW3N0YXRlLmluZGV4XS51cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdGUuc2V0SW5kZXgoKGMpID0+IGMgKyAxKTtcbiAgICAgICAgICAgIHN0YXRlLnNldE9uTGlzdGVuKHN0YXRlLnRyYWNrc1tzdGF0ZS5pbmRleF0udXJsKTtcbiAgICAgICAgfSxcbiAgICAgICAgYmFja3dhcmQ6ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5pbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnNldEluZGV4KHN0YXRlLnRyYWNrcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUuc2V0T25MaXN0ZW4oc3RhdGUudHJhY2tzW3N0YXRlLmluZGV4XS51cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdGUuc2V0SW5kZXgoKGMpID0+IGMgLSAxKTtcbiAgICAgICAgICAgIHN0YXRlLnNldE9uTGlzdGVuKHN0YXRlLnRyYWNrc1tzdGF0ZS5pbmRleF0udXJsKTtcbiAgICAgICAgfSxcbiAgICAgICAgdm9sdW1lOiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChlLnRhcmdldC52YWx1ZSkgPCAzKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0Vm9sdW1lKDApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoYXVkaW9SZWYuY3VycmVudCEudm9sdW1lID0gc3RhdGUudm9sdW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRlLnNldFZvbHVtZShwYXJzZUludChlLnRhcmdldC52YWx1ZSkgLyAxMDApO1xuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudCEudm9sdW1lID0gc3RhdGUudm9sdW1lO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhdWRpb1JlZi5jdXJyZW50Py5sb2FkKCk7XG4gICAgICAgIGlmIChzdGF0ZS5pc1BsYXlpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGF4aW9zLnB1dChcbiAgICAgICAgICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS8ke1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS50cmFja3Nbc3RhdGUuaW5kZXhdLmlkXG4gICAgICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmVmZXRjaCgpO1xuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudD8ucGxheSgpO1xuICAgICAgICB9XG4gICAgfSwgW3N0YXRlLmluZGV4LCBzdGF0ZS5pc1BsYXlpbmddKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS5pc1BsYXlpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYXVkaW9SZWYuY3VycmVudCEuY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnNldEN1cnJlbnRUaW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihhdWRpb1JlZi5jdXJyZW50IS5jdXJyZW50VGltZSBhcyBudW1iZXIpLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zZXREdXJhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoYXVkaW9SZWYuY3VycmVudCEuZHVyYXRpb24gYXMgbnVtYmVyKSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9LCBbYXVkaW9SZWZdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQ/LmN1cnJlbnRUaW1lID09PSBhdWRpb1JlZi5jdXJyZW50Py5kdXJhdGlvbiAmJlxuICAgICAgICAgICAgc3RhdGUuaXNQbGF5aW5nXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29udHJvbHMuZm9yd2FyZCgpO1xuICAgICAgICB9XG4gICAgfSwgW2F1ZGlvUmVmXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIGFic29sdXRlIGJvdHRvbS0xMCBiZy1vcGFjaXR5LTkwIHAtNSByb3VuZGVkLWxnIHNoYWRvdy1sZyBmbGV4IGl0ZW1zLWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgbXgtNFwiPlxuICAgICAgICAgICAgICAgIHtzdGF0ZS5pc1BsYXlpbmcgJiYgQ29udmVydChhdWRpb1JlZi5jdXJyZW50Py5jdXJyZW50VGltZSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xIHRyYW5zbGF0ZS15LTFcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbnRyb2xzLmJhY2t3YXJkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaWNvbnMvYmFja3dhcmQucG5nXCIgd2lkdGg9ezIyfSBoZWlnaHQ9ezIyfSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7IXN0YXRlLmlzUGxheWluZyA/IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xIHRyYW5zbGF0ZS15LTFcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb250cm9scy5wbGF5fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pY29ucy9wbGF5LnBuZ1wiIHdpZHRoPXsyMn0gaGVpZ2h0PXsyMn0gLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC0yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMSB0cmFuc2xhdGUteS0xXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29udHJvbHMucGF1c2V9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ljb25zL3BhdXNlLnBuZ1wiIHdpZHRoPXsyMn0gaGVpZ2h0PXsyMn0gLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEgdHJhbnNsYXRlLXktMVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y29udHJvbHMuZm9yd2FyZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ljb25zL2ZvcndhcmQucG5nXCIgd2lkdGg9ezIyfSBoZWlnaHQ9ezIyfSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIG14LTRcIj5cbiAgICAgICAgICAgICAgICB7c3RhdGUuaXNQbGF5aW5nICYmXG4gICAgICAgICAgICAgICAgICAgIENvbnZlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50IS5kdXJhdGlvbiAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudCEuY3VycmVudFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxhdWRpbyByZWY9e2F1ZGlvUmVmfSBzcmM9e3N0YXRlLm9uTGlzdGVufT48L2F1ZGlvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==