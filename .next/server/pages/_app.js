module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query/hydration */ "react-query/hydration");
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query_hydration__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_State_AppState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/State/AppState */ "./src/State/AppState.tsx");

var _jsxFileName = "/home/jidayyy/francebleu/pages/_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_4__["QueryClient"]();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_query__WEBPACK_IMPORTED_MODULE_4__["QueryClientProvider"], {
    client: queryClient,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_query_hydration__WEBPACK_IMPORTED_MODULE_5__["Hydrate"], {
      state: pageProps.dehydratedState,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_State_AppState__WEBPACK_IMPORTED_MODULE_6__["AppContextWrapper"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/State/AppState.tsx":
/*!********************************!*\
  !*** ./src/State/AppState.tsx ***!
  \********************************/
/*! exports provided: useAppContext, AppContextWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppContext", function() { return useAppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContextWrapper", function() { return AppContextWrapper; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _datas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datas */ "./src/datas.ts");

var _jsxFileName = "/home/jidayyy/francebleu/src/State/AppState.tsx";


const AppContextDefault = {
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
const AppState = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(AppContextDefault);
function useAppContext() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AppState);
}
function AppContextWrapper({
  children
}) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: index,
    1: setIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: onListen,
    1: setOnListen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_datas__WEBPACK_IMPORTED_MODULE_2__["default"][index].url);
  const {
    0: isPlaying,
    1: setIsPlaying
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: duration,
    1: setDuration
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: currentTime,
    1: setCurrentTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: volume,
    1: setVolume
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.5);
  const {
    0: trackCount,
    1: setTrackCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: count,
    1: setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppState.Provider, {
    value: {
      tracks: _datas__WEBPACK_IMPORTED_MODULE_2__["default"],
      isPlaying,
      trackCount,
      setTrackCount,
      setIsPlaying,
      isLoading,
      setIsLoading,
      setOnListen,
      volume,
      setVolume,
      count,
      setCount,
      onListen,
      index,
      setIndex,
      setDuration,
      setCurrentTime,
      duration,
      currentTime
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/datas.ts":
/*!**********************!*\
  !*** ./src/datas.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// make an array with 10 different Tracks
const Tracks = [{
  id: 1,
  name: "Que se passe-t-il sur terre ? ( Partie 1 )",
  description: "Episode 1 description",
  url: "./audio/episode1.mp4"
}, {
  id: 2,
  name: "Que se passe-t-il sur terre ? ( Partie 2 )",
  description: "Episode 2 description",
  url: "./audio/episode2.mp4"
}, {
  id: 3,
  name: "Cette planète a changé",
  description: "Episode 3 description",
  url: "/audio/episode3.mp4"
}, {
  id: 4,
  name: "Des masques et des drones",
  description: "Episode 4 description",
  url: "/audio/episode4.mp4"
}, {
  id: 5,
  name: "Conversations à distance",
  description: "Episode 5 description",
  url: "/audio/episode5.mp4"
}, {
  id: 6,
  name: "On veut sortir !",
  description: "Episode 6 description",
  url: "/audio/episode6.mp4"
}, {
  id: 7,
  name: "Nostalgie de voyages",
  description: "Episode 7 description",
  url: "/audio/episode7.mp4"
}, {
  id: 8,
  name: "Des transports et des tests",
  description: "Episode 8 description",
  url: "/audio/episode8.mp4"
}, {
  id: 9,
  name: "Un peu de bilan",
  description: "Episode 9 description",
  url: "/audio/episode9.mp4"
}, {
  id: 10,
  name: "Est-ce que c'est fini?",
  description: "Episode 10 description",
  url: "/audio/episode10.mp4"
}];
/* harmony default export */ __webpack_exports__["default"] = (Tracks);

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-query");

/***/ }),

/***/ "react-query/hydration":
/*!****************************************!*\
  !*** external "react-query/hydration" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-query/hydration");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YXRlL0FwcFN0YXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1xdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5L2h5ZHJhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudCIsImRlaHlkcmF0ZWRTdGF0ZSIsIkFwcENvbnRleHREZWZhdWx0IiwiaXNQbGF5aW5nIiwiaXNMb2FkaW5nIiwidHJhY2tzIiwidm9sdW1lIiwic2V0SXNMb2FkaW5nIiwiaW5kZXgiLCJvbkxpc3RlbiIsInVybCIsImNvdW50Iiwic2V0Q291bnQiLCJ0cmFja0NvdW50Iiwic2V0T25MaXN0ZW4iLCJzZXRWb2x1bWUiLCJzZXRJbmRleCIsInNldElzUGxheWluZyIsInNldER1cmF0aW9uIiwic2V0Q3VycmVudFRpbWUiLCJzZXRUcmFja0NvdW50IiwiZHVyYXRpb24iLCJjdXJyZW50VGltZSIsIkFwcFN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dFdyYXBwZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiVHJhY2tzIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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LEtBQUcsRUFBRTtBQUpULENBdkRXLENBQWY7QUE4RGVvQixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XG5pbXBvcnQgXCJAc3R5bGVzL2dsb2JhbC5jc3NcIjtcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBIeWRyYXRlIH0gZnJvbSBcInJlYWN0LXF1ZXJ5L2h5ZHJhdGlvblwiO1xuaW1wb3J0IHsgQXBwQ29udGV4dFdyYXBwZXIgfSBmcm9tIFwic3JjL1N0YXRlL0FwcFN0YXRlXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAgICAgIDxIeWRyYXRlIHN0YXRlPXtwYWdlUHJvcHMuZGVoeWRyYXRlZFN0YXRlfT5cbiAgICAgICAgICAgICAgICA8QXBwQ29udGV4dFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L0FwcENvbnRleHRXcmFwcGVyPlxuICAgICAgICAgICAgPC9IeWRyYXRlPlxuICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHtcbiAgICBjcmVhdGVDb250ZXh0LFxuICAgIERpc3BhdGNoLFxuICAgIFNldFN0YXRlQWN0aW9uLFxuICAgIHVzZUNvbnRleHQsXG4gICAgdXNlRWZmZWN0LFxuICAgIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0cmFja3MgZnJvbSBcIi4uL2RhdGFzXCI7XG5pbnRlcmZhY2UgVHJhY2sge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgVHJhY2tDIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICAgIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xuICAgIHNldElzTG9hZGluZzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+IHwgbnVsbDtcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gICAgdHJhY2tzOiBUcmFja1tdO1xuICAgIG9uTGlzdGVuOiBzdHJpbmc7XG4gICAgc2V0T25MaXN0ZW46IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+O1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgc2V0SW5kZXg6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xuICAgIHNldElzUGxheWluZzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xuICAgIGlzUGxheWluZzogYm9vbGVhbjtcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIGN1cnJlbnRUaW1lOiBudW1iZXI7XG4gICAgc2V0RHVyYXRpb246IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xuICAgIHNldFZvbHVtZTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG4gICAgc2V0Q3VycmVudFRpbWU6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xuICAgIHNldFRyYWNrQ291bnQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFtdPj47XG4gICAgdHJhY2tDb3VudDogVHJhY2tDW10gfCBudWxsO1xuICAgIHZvbHVtZTogbnVtYmVyO1xuICAgIGNvdW50OiBudW1iZXI7XG4gICAgc2V0Q291bnQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xufVxuXG5jb25zdCBBcHBDb250ZXh0RGVmYXVsdDogQXBwU3RhdGUgPSB7XG4gICAgaXNQbGF5aW5nOiBmYWxzZSxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgIHRyYWNrczogdHJhY2tzLFxuICAgIHZvbHVtZTogMC41LFxuICAgIHNldElzTG9hZGluZzogbnVsbCxcbiAgICBpbmRleDogMCxcbiAgICBvbkxpc3RlbjogdHJhY2tzWzBdLnVybCxcbiAgICBjb3VudDogMCxcbiAgICBzZXRDb3VudDogbnVsbCBhcyB1bmtub3duIGFzIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+LFxuICAgIHRyYWNrQ291bnQ6IG51bGwsXG4gICAgc2V0T25MaXN0ZW46IG51bGwgYXMgdW5rbm93biBhcyBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PixcbiAgICBzZXRWb2x1bWU6IG51bGwgYXMgdW5rbm93biBhcyBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXI+PixcbiAgICBzZXRJbmRleDogbnVsbCBhcyB1bmtub3duIGFzIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+LFxuICAgIHNldElzUGxheWluZzogbnVsbCBhcyB1bmtub3duIGFzIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PixcbiAgICBzZXREdXJhdGlvbjogbnVsbCBhcyB1bmtub3duIGFzIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+LFxuICAgIHNldEN1cnJlbnRUaW1lOiBudWxsIGFzIHVua25vd24gYXMgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj4sXG4gICAgc2V0VHJhY2tDb3VudDogbnVsbCBhcyB1bmtub3duIGFzIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFtdPj4sXG4gICAgZHVyYXRpb246IDAsXG4gICAgY3VycmVudFRpbWU6IDAsXG59O1xuXG5jb25zdCBBcHBTdGF0ZSA9IGNyZWF0ZUNvbnRleHQ8QXBwU3RhdGU+KEFwcENvbnRleHREZWZhdWx0KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKTogQXBwU3RhdGUge1xuICAgIHJldHVybiB1c2VDb250ZXh0KEFwcFN0YXRlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBBcHBDb250ZXh0V3JhcHBlcih7XG4gICAgY2hpbGRyZW4sXG59OiB7XG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn0pOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtvbkxpc3Rlbiwgc2V0T25MaXN0ZW5dID0gdXNlU3RhdGUodHJhY2tzW2luZGV4XS51cmwpO1xuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbY3VycmVudFRpbWUsIHNldEN1cnJlbnRUaW1lXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt2b2x1bWUsIHNldFZvbHVtZV0gPSB1c2VTdGF0ZSgwLjUpO1xuICAgIGNvbnN0IFt0cmFja0NvdW50LCBzZXRUcmFja0NvdW50XSA9IHVzZVN0YXRlPFtdPihbXSk7XG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwcFN0YXRlLlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgIHRyYWNrcyxcbiAgICAgICAgICAgICAgICBpc1BsYXlpbmcsXG4gICAgICAgICAgICAgICAgdHJhY2tDb3VudCxcbiAgICAgICAgICAgICAgICBzZXRUcmFja0NvdW50LFxuICAgICAgICAgICAgICAgIHNldElzUGxheWluZyxcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgIHNldE9uTGlzdGVuLFxuICAgICAgICAgICAgICAgIHZvbHVtZSxcbiAgICAgICAgICAgICAgICBzZXRWb2x1bWUsXG4gICAgICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICAgICAgc2V0Q291bnQsXG4gICAgICAgICAgICAgICAgb25MaXN0ZW4sXG4gICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgc2V0SW5kZXgsXG4gICAgICAgICAgICAgICAgc2V0RHVyYXRpb24sXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFRpbWUsXG4gICAgICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQXBwU3RhdGUuUHJvdmlkZXI+XG4gICAgKTtcbn1cbiIsIi8vIG1ha2UgYW4gYXJyYXkgd2l0aCAxMCBkaWZmZXJlbnQgVHJhY2tzXG5jb25zdCBUcmFja3MgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogXCJRdWUgc2UgcGFzc2UtdC1pbCBzdXIgdGVycmUgPyAoIFBhcnRpZSAxIClcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRXBpc29kZSAxIGRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHVybDogXCIuL2F1ZGlvL2VwaXNvZGUxLm1wNFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogXCJRdWUgc2UgcGFzc2UtdC1pbCBzdXIgdGVycmUgPyAoIFBhcnRpZSAyIClcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRXBpc29kZSAyIGRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHVybDogXCIuL2F1ZGlvL2VwaXNvZGUyLm1wNFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogXCJDZXR0ZSBwbGFuw6h0ZSBhIGNoYW5nw6lcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRXBpc29kZSAzIGRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHVybDogXCIvYXVkaW8vZXBpc29kZTMubXA0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBuYW1lOiBcIkRlcyBtYXNxdWVzIGV0IGRlcyBkcm9uZXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRXBpc29kZSA0IGRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHVybDogXCIvYXVkaW8vZXBpc29kZTQubXA0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiBcIkNvbnZlcnNhdGlvbnMgw6AgZGlzdGFuY2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRXBpc29kZSA1IGRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHVybDogXCIvYXVkaW8vZXBpc29kZTUubXA0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICBuYW1lOiBcIk9uIHZldXQgc29ydGlyICFcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRXBpc29kZSA2IGRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHVybDogXCIvYXVkaW8vZXBpc29kZTYubXA0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICBuYW1lOiBcIk5vc3RhbGdpZSBkZSB2b3lhZ2VzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkVwaXNvZGUgNyBkZXNjcmlwdGlvblwiLFxuICAgICAgICB1cmw6IFwiL2F1ZGlvL2VwaXNvZGU3Lm1wNFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogOCxcbiAgICAgICAgbmFtZTogXCJEZXMgdHJhbnNwb3J0cyBldCBkZXMgdGVzdHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRXBpc29kZSA4IGRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHVybDogXCIvYXVkaW8vZXBpc29kZTgubXA0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA5LFxuICAgICAgICBuYW1lOiBcIlVuIHBldSBkZSBiaWxhblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFcGlzb2RlIDkgZGVzY3JpcHRpb25cIixcbiAgICAgICAgdXJsOiBcIi9hdWRpby9lcGlzb2RlOS5tcDRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEwLFxuICAgICAgICBuYW1lOiBcIkVzdC1jZSBxdWUgYydlc3QgZmluaT9cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRXBpc29kZSAxMCBkZXNjcmlwdGlvblwiLFxuICAgICAgICB1cmw6IFwiL2F1ZGlvL2VwaXNvZGUxMC5tcDRcIixcbiAgICB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IFRyYWNrcztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXF1ZXJ5L2h5ZHJhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==