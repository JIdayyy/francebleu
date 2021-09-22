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
  const {
    0: isMenu,
    1: setIsMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_4__["QueryClient"]();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_query__WEBPACK_IMPORTED_MODULE_4__["QueryClientProvider"], {
    client: queryClient,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_query_hydration__WEBPACK_IMPORTED_MODULE_5__["Hydrate"], {
      state: pageProps.dehydratedState,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(src_State_AppState__WEBPACK_IMPORTED_MODULE_6__["AppContextWrapper"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
  console.log(index);
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
    lineNumber: 90,
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
  url: "./audio/episode1.mp3"
}, {
  id: 2,
  name: "Que se passe-t-il sur terre ? ( Partie 2 )",
  description: "Episode 2 description",
  url: "./audio/episode2.mp3"
}, {
  id: 3,
  name: "Cette planète a changé",
  description: "Episode 3 description",
  url: "/audio/episode3.mp3"
}, {
  id: 4,
  name: "Des masques et des drones",
  description: "Episode 4 description",
  url: "/audio/episode4.mp3"
}, {
  id: 5,
  name: "Conversations à distance",
  description: "Episode 5 description",
  url: "/audio/episode5.mp3"
}, {
  id: 6,
  name: "On veut sortir !",
  description: "Episode 6 description",
  url: "/audio/episode6.mp3"
}, {
  id: 7,
  name: "Nostalgie de voyages",
  description: "Episode 7 description",
  url: "/audio/episode7.mp3"
}, {
  id: 8,
  name: "Des transports et des tests",
  description: "Episode 8 description",
  url: "/audio/episode8.mp3"
}, {
  id: 9,
  name: "Un peu de bilan",
  description: "Episode 9 description",
  url: "/audio/episode9.mp3"
}, {
  id: 10,
  name: "Est-ce que c'est fini?",
  description: "Episode 10 description",
  url: "/audio/episode10.mp3"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YXRlL0FwcFN0YXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YXMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1xdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5L2h5ZHJhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNNZW51Iiwic2V0SXNNZW51IiwidXNlU3RhdGUiLCJxdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50IiwiZGVoeWRyYXRlZFN0YXRlIiwiQXBwQ29udGV4dERlZmF1bHQiLCJpc1BsYXlpbmciLCJpc0xvYWRpbmciLCJ0cmFja3MiLCJ2b2x1bWUiLCJzZXRJc0xvYWRpbmciLCJpbmRleCIsIm9uTGlzdGVuIiwidXJsIiwiY291bnQiLCJzZXRDb3VudCIsInRyYWNrQ291bnQiLCJzZXRPbkxpc3RlbiIsInNldFZvbHVtZSIsInNldEluZGV4Iiwic2V0SXNQbGF5aW5nIiwic2V0RHVyYXRpb24iLCJzZXRDdXJyZW50VGltZSIsInNldFRyYWNrQ291bnQiLCJkdXJhdGlvbiIsImN1cnJlbnRUaW1lIiwiQXBwU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwidXNlQXBwQ29udGV4dCIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0V3JhcHBlciIsImNoaWxkcmVuIiwiY29uc29sZSIsImxvZyIsIlRyYWNrcyIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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SSxFQUFFLGlCQUZWO0FBR0lDLGFBQVcsRUFBRSx1QkFIakI7QUFJSXhCLEtBQUcsRUFBRTtBQUpULENBakRXLEVBdURYO0FBQ0lzQixJQUFFLEVBQUUsRUFEUjtBQUVJQyxNQUFJLEVBQUUsd0JBRlY7QUFHSUMsYUFBVyxFQUFFLHdCQUhqQjtBQUlJeEIsS0FBRyxFQUFFO0FBSlQsQ0F2RFcsQ0FBZjtBQThEZXFCLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IFwiQHN0eWxlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgSHlkcmF0ZSB9IGZyb20gXCJyZWFjdC1xdWVyeS9oeWRyYXRpb25cIjtcbmltcG9ydCB7IEFwcENvbnRleHRXcmFwcGVyIH0gZnJvbSBcInNyYy9TdGF0ZS9BcHBTdGF0ZVwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIkBjb21wb25lbnRzL01lbnUvTWVudVwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IFtpc01lbnUsIHNldElzTWVudV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAgICAgIDxIeWRyYXRlIHN0YXRlPXtwYWdlUHJvcHMuZGVoeWRyYXRlZFN0YXRlfT5cbiAgICAgICAgICAgICAgICA8QXBwQ29udGV4dFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L0FwcENvbnRleHRXcmFwcGVyPlxuICAgICAgICAgICAgPC9IeWRyYXRlPlxuICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHtcbiAgICBjcmVhdGVDb250ZXh0LFxuICAgIERpc3BhdGNoLFxuICAgIFNldFN0YXRlQWN0aW9uLFxuICAgIHVzZUNvbnRleHQsXG4gICAgdXNlRWZmZWN0LFxuICAgIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0cmFja3MgZnJvbSBcIi4uL2RhdGFzXCI7XG5pbnRlcmZhY2UgVHJhY2sge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrQyB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcbiAgICBzZXRJc0xvYWRpbmc6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PiB8IG51bGw7XG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xuICAgIHRyYWNrczogVHJhY2tbXTtcbiAgICBvbkxpc3Rlbjogc3RyaW5nO1xuICAgIHNldE9uTGlzdGVuOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PjtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIHNldEluZGV4OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXI+PjtcbiAgICBzZXRJc1BsYXlpbmc6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcbiAgICBpc1BsYXlpbmc6IGJvb2xlYW47XG4gICAgZHVyYXRpb246IG51bWJlcjtcbiAgICBjdXJyZW50VGltZTogbnVtYmVyO1xuICAgIHNldER1cmF0aW9uOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXI+PjtcbiAgICBzZXRWb2x1bWU6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xuICAgIHNldEN1cnJlbnRUaW1lOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXI+PjtcbiAgICBzZXRUcmFja0NvdW50OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxbXT4+O1xuICAgIHRyYWNrQ291bnQ6IFRyYWNrQ1tdIHwgbnVsbDtcbiAgICB2b2x1bWU6IG51bWJlcjtcbiAgICBjb3VudDogbnVtYmVyO1xuICAgIHNldENvdW50OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXI+Pjtcbn1cblxuY29uc3QgQXBwQ29udGV4dERlZmF1bHQ6IEFwcFN0YXRlID0ge1xuICAgIGlzUGxheWluZzogZmFsc2UsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICB0cmFja3M6IHRyYWNrcyxcbiAgICB2b2x1bWU6IDAuNSxcbiAgICBzZXRJc0xvYWRpbmc6IG51bGwsXG4gICAgaW5kZXg6IDAsXG4gICAgb25MaXN0ZW46IHRyYWNrc1swXS51cmwsXG4gICAgY291bnQ6IDAsXG4gICAgc2V0Q291bnQ6IG51bGwgYXMgdW5rbm93biBhcyBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXI+PixcbiAgICB0cmFja0NvdW50OiBudWxsLFxuICAgIHNldE9uTGlzdGVuOiBudWxsIGFzIHVua25vd24gYXMgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj4sXG4gICAgc2V0Vm9sdW1lOiBudWxsIGFzIHVua25vd24gYXMgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj4sXG4gICAgc2V0SW5kZXg6IG51bGwgYXMgdW5rbm93biBhcyBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXI+PixcbiAgICBzZXRJc1BsYXlpbmc6IG51bGwgYXMgdW5rbm93biBhcyBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4sXG4gICAgc2V0RHVyYXRpb246IG51bGwgYXMgdW5rbm93biBhcyBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXI+PixcbiAgICBzZXRDdXJyZW50VGltZTogbnVsbCBhcyB1bmtub3duIGFzIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+LFxuICAgIHNldFRyYWNrQ291bnQ6IG51bGwgYXMgdW5rbm93biBhcyBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxbXT4+LFxuICAgIGR1cmF0aW9uOiAwLFxuICAgIGN1cnJlbnRUaW1lOiAwLFxufTtcblxuY29uc3QgQXBwU3RhdGUgPSBjcmVhdGVDb250ZXh0PEFwcFN0YXRlPihBcHBDb250ZXh0RGVmYXVsdCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcHBDb250ZXh0KCk6IEFwcFN0YXRlIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChBcHBTdGF0ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gQXBwQ29udGV4dFdyYXBwZXIoe1xuICAgIGNoaWxkcmVuLFxufToge1xuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59KTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbb25MaXN0ZW4sIHNldE9uTGlzdGVuXSA9IHVzZVN0YXRlKHRyYWNrc1tpbmRleF0udXJsKTtcbiAgICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2N1cnJlbnRUaW1lLCBzZXRDdXJyZW50VGltZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbdm9sdW1lLCBzZXRWb2x1bWVdID0gdXNlU3RhdGUoMC41KTtcbiAgICBjb25zdCBbdHJhY2tDb3VudCwgc2V0VHJhY2tDb3VudF0gPSB1c2VTdGF0ZTxbXT4oW10pO1xuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBwU3RhdGUuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgdHJhY2tzLFxuICAgICAgICAgICAgICAgIGlzUGxheWluZyxcbiAgICAgICAgICAgICAgICB0cmFja0NvdW50LFxuICAgICAgICAgICAgICAgIHNldFRyYWNrQ291bnQsXG4gICAgICAgICAgICAgICAgc2V0SXNQbGF5aW5nLFxuICAgICAgICAgICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgc2V0T25MaXN0ZW4sXG4gICAgICAgICAgICAgICAgdm9sdW1lLFxuICAgICAgICAgICAgICAgIHNldFZvbHVtZSxcbiAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICBzZXRDb3VudCxcbiAgICAgICAgICAgICAgICBvbkxpc3RlbixcbiAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICBzZXRJbmRleCxcbiAgICAgICAgICAgICAgICBzZXREdXJhdGlvbixcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50VGltZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9BcHBTdGF0ZS5Qcm92aWRlcj5cbiAgICApO1xufVxuIiwiLy8gbWFrZSBhbiBhcnJheSB3aXRoIDEwIGRpZmZlcmVudCBUcmFja3NcbmNvbnN0IFRyYWNrcyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIlF1ZSBzZSBwYXNzZS10LWlsIHN1ciB0ZXJyZSA/ICggUGFydGllIDEgKVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFcGlzb2RlIDEgZGVzY3JpcHRpb25cIixcbiAgICAgICAgdXJsOiBcIi4vYXVkaW8vZXBpc29kZTEubXAzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiBcIlF1ZSBzZSBwYXNzZS10LWlsIHN1ciB0ZXJyZSA/ICggUGFydGllIDIgKVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFcGlzb2RlIDIgZGVzY3JpcHRpb25cIixcbiAgICAgICAgdXJsOiBcIi4vYXVkaW8vZXBpc29kZTIubXAzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiBcIkNldHRlIHBsYW7DqHRlIGEgY2hhbmfDqVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFcGlzb2RlIDMgZGVzY3JpcHRpb25cIixcbiAgICAgICAgdXJsOiBcIi9hdWRpby9lcGlzb2RlMy5tcDNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6IFwiRGVzIG1hc3F1ZXMgZXQgZGVzIGRyb25lc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFcGlzb2RlIDQgZGVzY3JpcHRpb25cIixcbiAgICAgICAgdXJsOiBcIi9hdWRpby9lcGlzb2RlNC5tcDNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIG5hbWU6IFwiQ29udmVyc2F0aW9ucyDDoCBkaXN0YW5jZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFcGlzb2RlIDUgZGVzY3JpcHRpb25cIixcbiAgICAgICAgdXJsOiBcIi9hdWRpby9lcGlzb2RlNS5tcDNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIG5hbWU6IFwiT24gdmV1dCBzb3J0aXIgIVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFcGlzb2RlIDYgZGVzY3JpcHRpb25cIixcbiAgICAgICAgdXJsOiBcIi9hdWRpby9lcGlzb2RlNi5tcDNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIG5hbWU6IFwiTm9zdGFsZ2llIGRlIHZveWFnZXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRXBpc29kZSA3IGRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHVybDogXCIvYXVkaW8vZXBpc29kZTcubXAzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA4LFxuICAgICAgICBuYW1lOiBcIkRlcyB0cmFuc3BvcnRzIGV0IGRlcyB0ZXN0c1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFcGlzb2RlIDggZGVzY3JpcHRpb25cIixcbiAgICAgICAgdXJsOiBcIi9hdWRpby9lcGlzb2RlOC5tcDNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDksXG4gICAgICAgIG5hbWU6IFwiVW4gcGV1IGRlIGJpbGFuXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkVwaXNvZGUgOSBkZXNjcmlwdGlvblwiLFxuICAgICAgICB1cmw6IFwiL2F1ZGlvL2VwaXNvZGU5Lm1wM1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTAsXG4gICAgICAgIG5hbWU6IFwiRXN0LWNlIHF1ZSBjJ2VzdCBmaW5pP1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFcGlzb2RlIDEwIGRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHVybDogXCIvYXVkaW8vZXBpc29kZTEwLm1wM1wiLFxuICAgIH0sXG5dO1xuZXhwb3J0IGRlZmF1bHQgVHJhY2tzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcXVlcnkvaHlkcmF0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9