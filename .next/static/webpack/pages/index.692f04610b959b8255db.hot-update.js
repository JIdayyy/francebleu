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
      state.setTrackCount(data);
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
      lineNumber: 96,
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
        lineNumber: 104,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
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
        lineNumber: 111,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
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
        lineNumber: 118,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
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
        lineNumber: 125,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-white font-bold mx-4",
      children: state.isPlaying && Object(_hooks_useConvert_js__WEBPACK_IMPORTED_MODULE_4__["default"])(audioRef.current.duration - audioRef.current.currentTime)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
      ref: audioRef,
      src: state.onListen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWJhci9pbmRleC50c3giXSwibmFtZXMiOlsiUGxheWJhciIsImF1ZGlvUmVmIiwidXNlUmVmIiwic3RhdGUiLCJ1c2VBcHBDb250ZXh0IiwiY29uc29sZSIsImxvZyIsInVzZVF1ZXJ5IiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwidGhlbiIsInIiLCJkYXRhIiwib25TdWNjZXNzIiwic2V0VHJhY2tDb3VudCIsImlzTG9hZGluZyIsImVycm9yIiwicmVmZXRjaCIsImNvbnRyb2xzIiwicGxheSIsInNldElzUGxheWluZyIsInBhdXNlIiwiZm9yd2FyZCIsImluZGV4IiwidHJhY2tzIiwibGVuZ3RoIiwic2V0SW5kZXgiLCJzZXRPbkxpc3RlbiIsInVybCIsImMiLCJiYWNrd2FyZCIsInZvbHVtZSIsImUiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwic2V0Vm9sdW1lIiwiY3VycmVudCIsInVzZUVmZmVjdCIsImxvYWQiLCJpc1BsYXlpbmciLCJwdXQiLCJpZCIsInRpbWVyIiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50VGltZSIsInNldEN1cnJlbnRUaW1lIiwiTWF0aCIsImZsb29yIiwic2V0RHVyYXRpb24iLCJkdXJhdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJDb252ZXJ0Iiwib25MaXN0ZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxPQUFULEdBQWdDO0FBQUE7O0FBQUE7O0FBQ25DLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBMEIsSUFBMUIsQ0FBdkI7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLHdFQUFhLEVBQTNCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaOztBQUhtQyxrQkFJU0ksNERBQVEsQ0FDaEQsVUFEZ0QsRUFFaEQ7QUFBQSxXQUNJQyw0Q0FBSyxDQUNBQyxHQURMLENBQ1NDLGlDQURULEVBRUtDLElBRkwsQ0FFVSxVQUFDQyxDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDQyxJQUFUO0FBQUEsS0FGVixDQURKO0FBQUEsR0FGZ0QsRUFNaEQ7QUFDSUMsYUFBUyxFQUFFLG1CQUFDRCxJQUFELEVBQVU7QUFDakJWLFdBQUssQ0FBQ1ksYUFBTixDQUFvQkYsSUFBcEI7QUFDSDtBQUhMLEdBTmdELENBSmpCO0FBQUEsTUFJM0JBLElBSjJCLGFBSTNCQSxJQUoyQjtBQUFBLE1BSXJCRyxTQUpxQixhQUlyQkEsU0FKcUI7QUFBQSxNQUlWQyxLQUpVLGFBSVZBLEtBSlU7QUFBQSxNQUlIQyxPQUpHLGFBSUhBLE9BSkc7O0FBaUJuQyxNQUFNQyxRQUFRLEdBQUc7QUFDYkMsUUFBSSxFQUFFO0FBQUEsYUFBTWpCLEtBQUssQ0FBQ2tCLFlBQU4sQ0FBbUIsSUFBbkIsQ0FBTjtBQUFBLEtBRE87QUFFYkMsU0FBSyxFQUFFO0FBQUEsYUFBTW5CLEtBQUssQ0FBQ2tCLFlBQU4sQ0FBbUIsS0FBbkIsQ0FBTjtBQUFBLEtBRk07QUFHYkUsV0FBTyxFQUFFLG1CQUFNO0FBQ1gsVUFBSXBCLEtBQUssQ0FBQ3FCLEtBQU4sS0FBZ0JyQixLQUFLLENBQUNzQixNQUFOLENBQWFDLE1BQWIsR0FBc0IsQ0FBMUMsRUFBNkM7QUFDekN2QixhQUFLLENBQUN3QixRQUFOLENBQWUsQ0FBZjtBQUNBLGVBQU94QixLQUFLLENBQUN5QixXQUFOLENBQWtCekIsS0FBSyxDQUFDc0IsTUFBTixDQUFhdEIsS0FBSyxDQUFDcUIsS0FBbkIsRUFBMEJLLEdBQTVDLENBQVA7QUFDSDs7QUFDRDFCLFdBQUssQ0FBQ3dCLFFBQU4sQ0FBZSxVQUFDRyxDQUFEO0FBQUEsZUFBT0EsQ0FBQyxHQUFHLENBQVg7QUFBQSxPQUFmO0FBQ0EzQixXQUFLLENBQUN5QixXQUFOLENBQWtCekIsS0FBSyxDQUFDc0IsTUFBTixDQUFhdEIsS0FBSyxDQUFDcUIsS0FBbkIsRUFBMEJLLEdBQTVDO0FBQ0gsS0FWWTtBQVdiRSxZQUFRLEVBQUUsb0JBQU07QUFDWixVQUFJNUIsS0FBSyxDQUFDcUIsS0FBTixLQUFnQixDQUFwQixFQUF1QjtBQUNuQnJCLGFBQUssQ0FBQ3dCLFFBQU4sQ0FBZXhCLEtBQUssQ0FBQ3NCLE1BQU4sQ0FBYUMsTUFBYixHQUFzQixDQUFyQztBQUNBLGVBQU92QixLQUFLLENBQUN5QixXQUFOLENBQWtCekIsS0FBSyxDQUFDc0IsTUFBTixDQUFhdEIsS0FBSyxDQUFDcUIsS0FBbkIsRUFBMEJLLEdBQTVDLENBQVA7QUFDSDs7QUFDRDFCLFdBQUssQ0FBQ3dCLFFBQU4sQ0FBZSxVQUFDRyxDQUFEO0FBQUEsZUFBT0EsQ0FBQyxHQUFHLENBQVg7QUFBQSxPQUFmO0FBQ0EzQixXQUFLLENBQUN5QixXQUFOLENBQWtCekIsS0FBSyxDQUFDc0IsTUFBTixDQUFhdEIsS0FBSyxDQUFDcUIsS0FBbkIsRUFBMEJLLEdBQTVDO0FBQ0gsS0FsQlk7QUFtQmJHLFVBQU0sRUFBRSxnQkFBQ0MsQ0FBRCxFQUE0QztBQUNoRCxVQUFJQyxRQUFRLENBQUNELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQVIsR0FBMkIsQ0FBL0IsRUFBa0M7QUFDOUJqQyxhQUFLLENBQUNrQyxTQUFOLENBQWdCLENBQWhCO0FBQ0EsZUFBUXBDLFFBQVEsQ0FBQ3FDLE9BQVQsQ0FBa0JOLE1BQWxCLEdBQTJCN0IsS0FBSyxDQUFDNkIsTUFBekM7QUFDSDs7QUFDRDdCLFdBQUssQ0FBQ2tDLFNBQU4sQ0FBZ0JILFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBUixHQUEyQixHQUEzQztBQUNBbkMsY0FBUSxDQUFDcUMsT0FBVCxDQUFrQk4sTUFBbEIsR0FBMkI3QixLQUFLLENBQUM2QixNQUFqQztBQUNIO0FBMUJZLEdBQWpCO0FBNkJBTyx5REFBUyxDQUFDLFlBQU07QUFBQTs7QUFDWix5QkFBQXRDLFFBQVEsQ0FBQ3FDLE9BQVQsd0VBQWtCRSxJQUFsQjs7QUFDQSxRQUFJckMsS0FBSyxDQUFDc0MsU0FBTixLQUFvQixJQUF4QixFQUE4QjtBQUFBOztBQUMxQmpDLGtEQUFLLENBQUNrQyxHQUFOLFdBQ09oQyxpQ0FEUCxjQUVRUCxLQUFLLENBQUNzQixNQUFOLENBQWF0QixLQUFLLENBQUNxQixLQUFuQixFQUEwQm1CLEVBRmxDO0FBS0F6QixhQUFPO0FBQ1BmLFdBQUssQ0FBQ1ksYUFBTixDQUFvQkYsSUFBcEI7QUFDQSw0QkFBQVosUUFBUSxDQUFDcUMsT0FBVCwwRUFBa0JsQixJQUFsQjtBQUNIO0FBQ0osR0FaUSxFQVlOLENBQUNqQixLQUFLLENBQUNxQixLQUFQLEVBQWNyQixLQUFLLENBQUNzQyxTQUFwQixDQVpNLENBQVQ7QUFjQUYseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSXBDLEtBQUssQ0FBQ3NDLFNBQVYsRUFBcUI7QUFDakIsVUFBTUcsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFdBQVAsQ0FBbUIsWUFBTTtBQUNuQyxZQUFJN0MsUUFBUSxDQUFDcUMsT0FBVCxDQUFrQlMsV0FBbEIsR0FBZ0MsQ0FBcEMsRUFBdUM7QUFDbkM1QyxlQUFLLENBQUM2QyxjQUFOLENBQ0lDLElBQUksQ0FBQ0MsS0FBTCxDQUFXakQsUUFBUSxDQUFDcUMsT0FBVCxDQUFrQlMsV0FBN0IsQ0FESjtBQUdBNUMsZUFBSyxDQUFDZ0QsV0FBTixDQUNJRixJQUFJLENBQUNDLEtBQUwsQ0FBV2pELFFBQVEsQ0FBQ3FDLE9BQVQsQ0FBa0JjLFFBQTdCLENBREo7QUFHSDs7QUFDRCxlQUFPLFlBQVk7QUFDZkMsdUJBQWEsQ0FBQ1QsS0FBRCxDQUFiO0FBQ0gsU0FGRDtBQUdILE9BWmEsRUFZWCxHQVpXLENBQWQ7QUFhSDtBQUNKLEdBaEJRLEVBZ0JOLENBQUMzQyxRQUFELENBaEJNLENBQVQ7QUFrQkFzQyx5REFBUyxDQUFDLFlBQU07QUFBQTs7QUFDWixRQUNJLHVCQUFBdEMsUUFBUSxDQUFDcUMsT0FBVCwwRUFBa0JTLFdBQWxCLDZCQUFrQzlDLFFBQVEsQ0FBQ3FDLE9BQTNDLHVEQUFrQyxtQkFBa0JjLFFBQXBELEtBQ0FqRCxLQUFLLENBQUNzQyxTQUZWLEVBR0U7QUFDRXRCLGNBQVEsQ0FBQ0ksT0FBVDtBQUNIO0FBQ0osR0FQUSxFQU9OLENBQUN0QixRQUFELENBUE0sQ0FBVDtBQVNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGtIQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQSxnQkFDS0UsS0FBSyxDQUFDc0MsU0FBTixJQUFtQmEsb0VBQU8sdUJBQUNyRCxRQUFRLENBQUNxQyxPQUFWLHVEQUFDLG1CQUFrQlMsV0FBbkI7QUFEL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0k7QUFDSSxlQUFTLEVBQUMsNkNBRGQ7QUFFSSxhQUFPLEVBQUU1QixRQUFRLENBQUNZLFFBRnRCO0FBQUEsNkJBSUkscUVBQUMsaURBQUQ7QUFBTyxXQUFHLEVBQUMscUJBQVg7QUFBaUMsYUFBSyxFQUFFLEVBQXhDO0FBQTRDLGNBQU0sRUFBRTtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLEVBV0ssQ0FBQzVCLEtBQUssQ0FBQ3NDLFNBQVAsZ0JBQ0c7QUFDSSxlQUFTLEVBQUMsNkNBRGQ7QUFFSSxhQUFPLEVBQUV0QixRQUFRLENBQUNDLElBRnRCO0FBQUEsNkJBSUkscUVBQUMsaURBQUQ7QUFBTyxXQUFHLEVBQUMsaUJBQVg7QUFBNkIsYUFBSyxFQUFFLEVBQXBDO0FBQXdDLGNBQU0sRUFBRTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURILGdCQVFHO0FBQ0ksZUFBUyxFQUFDLDZDQURkO0FBRUksYUFBTyxFQUFFRCxRQUFRLENBQUNHLEtBRnRCO0FBQUEsNkJBSUkscUVBQUMsaURBQUQ7QUFBTyxXQUFHLEVBQUMsa0JBQVg7QUFBOEIsYUFBSyxFQUFFLEVBQXJDO0FBQXlDLGNBQU0sRUFBRTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CUixlQTBCSTtBQUNJLGVBQVMsRUFBQyw2Q0FEZDtBQUVJLGFBQU8sRUFBRUgsUUFBUSxDQUFDSSxPQUZ0QjtBQUFBLDZCQUlJLHFFQUFDLGlEQUFEO0FBQU8sV0FBRyxFQUFDLG9CQUFYO0FBQWdDLGFBQUssRUFBRSxFQUF2QztBQUEyQyxjQUFNLEVBQUU7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkosZUFnQ0k7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQSxnQkFDS3BCLEtBQUssQ0FBQ3NDLFNBQU4sSUFDR2Esb0VBQU8sQ0FDSHJELFFBQVEsQ0FBQ3FDLE9BQVQsQ0FBa0JjLFFBQWxCLEdBQ0luRCxRQUFRLENBQUNxQyxPQUFULENBQWtCUyxXQUZuQjtBQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQ0osZUF1Q0k7QUFBTyxTQUFHLEVBQUU5QyxRQUFaO0FBQXNCLFNBQUcsRUFBRUUsS0FBSyxDQUFDb0Q7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJDSDs7R0FsSWV2RCxPO1VBRUVJLGdFLEVBRThCRyxvRDs7O0tBSmhDUCxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY5MmYwNDYxMGI5NTliODI1NWRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gXCJzcmMvU3RhdGUvQXBwU3RhdGVcIjtcbmltcG9ydCBDb252ZXJ0IGZyb20gXCIuLi8uLi9ob29rcy91c2VDb252ZXJ0LmpzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuZXhwb3J0IGZ1bmN0aW9uIFBsYXliYXIoKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBzdGF0ZSA9IHVzZUFwcENvbnRleHQoKTtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XG4gICAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGVycm9yLCByZWZldGNoIH0gPSB1c2VRdWVyeShcbiAgICAgICAgXCJnZXRDb3VudFwiLFxuICAgICAgICAoKSA9PlxuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAuZ2V0KHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgYXMgc3RyaW5nKVxuICAgICAgICAgICAgICAgIC50aGVuKChyKSA9PiByLmRhdGEpLFxuICAgICAgICB7XG4gICAgICAgICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0VHJhY2tDb3VudChkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbnRyb2xzID0ge1xuICAgICAgICBwbGF5OiAoKSA9PiBzdGF0ZS5zZXRJc1BsYXlpbmcodHJ1ZSksXG4gICAgICAgIHBhdXNlOiAoKSA9PiBzdGF0ZS5zZXRJc1BsYXlpbmcoZmFsc2UpLFxuICAgICAgICBmb3J3YXJkOiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuaW5kZXggPT09IHN0YXRlLnRyYWNrcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0SW5kZXgoMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnNldE9uTGlzdGVuKHN0YXRlLnRyYWNrc1tzdGF0ZS5pbmRleF0udXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRlLnNldEluZGV4KChjKSA9PiBjICsgMSk7XG4gICAgICAgICAgICBzdGF0ZS5zZXRPbkxpc3RlbihzdGF0ZS50cmFja3Nbc3RhdGUuaW5kZXhdLnVybCk7XG4gICAgICAgIH0sXG4gICAgICAgIGJhY2t3YXJkOiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXRJbmRleChzdGF0ZS50cmFja3MubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnNldE9uTGlzdGVuKHN0YXRlLnRyYWNrc1tzdGF0ZS5pbmRleF0udXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRlLnNldEluZGV4KChjKSA9PiBjIC0gMSk7XG4gICAgICAgICAgICBzdGF0ZS5zZXRPbkxpc3RlbihzdGF0ZS50cmFja3Nbc3RhdGUuaW5kZXhdLnVybCk7XG4gICAgICAgIH0sXG4gICAgICAgIHZvbHVtZTogKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIDwgMykge1xuICAgICAgICAgICAgICAgIHN0YXRlLnNldFZvbHVtZSgwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGF1ZGlvUmVmLmN1cnJlbnQhLnZvbHVtZSA9IHN0YXRlLnZvbHVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGF0ZS5zZXRWb2x1bWUocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIC8gMTAwKTtcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQhLnZvbHVtZSA9IHN0YXRlLnZvbHVtZTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXVkaW9SZWYuY3VycmVudD8ubG9hZCgpO1xuICAgICAgICBpZiAoc3RhdGUuaXNQbGF5aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBheGlvcy5wdXQoXG4gICAgICAgICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vJHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudHJhY2tzW3N0YXRlLmluZGV4XS5pZFxuICAgICAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJlZmV0Y2goKTtcbiAgICAgICAgICAgIHN0YXRlLnNldFRyYWNrQ291bnQoZGF0YSk7XG4gICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50Py5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9LCBbc3RhdGUuaW5kZXgsIHN0YXRlLmlzUGxheWluZ10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlLmlzUGxheWluZykge1xuICAgICAgICAgICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhdWRpb1JlZi5jdXJyZW50IS5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc2V0Q3VycmVudFRpbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGF1ZGlvUmVmLmN1cnJlbnQhLmN1cnJlbnRUaW1lIGFzIG51bWJlciksXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnNldER1cmF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihhdWRpb1JlZi5jdXJyZW50IS5kdXJhdGlvbiBhcyBudW1iZXIpLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH0sIFthdWRpb1JlZl0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudD8uY3VycmVudFRpbWUgPT09IGF1ZGlvUmVmLmN1cnJlbnQ/LmR1cmF0aW9uICYmXG4gICAgICAgICAgICBzdGF0ZS5pc1BsYXlpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb250cm9scy5mb3J3YXJkKCk7XG4gICAgICAgIH1cbiAgICB9LCBbYXVkaW9SZWZdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgYWJzb2x1dGUgYm90dG9tLTEwIGJnLW9wYWNpdHktOTAgcC01IHJvdW5kZWQtbGcgc2hhZG93LWxnIGZsZXggaXRlbXMtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCBteC00XCI+XG4gICAgICAgICAgICAgICAge3N0YXRlLmlzUGxheWluZyAmJiBDb252ZXJ0KGF1ZGlvUmVmLmN1cnJlbnQ/LmN1cnJlbnRUaW1lKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEgdHJhbnNsYXRlLXktMVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y29udHJvbHMuYmFja3dhcmR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pY29ucy9iYWNrd2FyZC5wbmdcIiB3aWR0aD17MjJ9IGhlaWdodD17MjJ9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHshc3RhdGUuaXNQbGF5aW5nID8gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEgdHJhbnNsYXRlLXktMVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbnRyb2xzLnBsYXl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ljb25zL3BsYXkucG5nXCIgd2lkdGg9ezIyfSBoZWlnaHQ9ezIyfSAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xIHRyYW5zbGF0ZS15LTFcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb250cm9scy5wYXVzZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaWNvbnMvcGF1c2UucG5nXCIgd2lkdGg9ezIyfSBoZWlnaHQ9ezIyfSAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC0yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMSB0cmFuc2xhdGUteS0xXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb250cm9scy5mb3J3YXJkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaWNvbnMvZm9yd2FyZC5wbmdcIiB3aWR0aD17MjJ9IGhlaWdodD17MjJ9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgbXgtNFwiPlxuICAgICAgICAgICAgICAgIHtzdGF0ZS5pc1BsYXlpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgQ29udmVydChcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQhLmR1cmF0aW9uIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50IS5jdXJyZW50VGltZSxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGF1ZGlvIHJlZj17YXVkaW9SZWZ9IHNyYz17c3RhdGUub25MaXN0ZW59PjwvYXVkaW8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9