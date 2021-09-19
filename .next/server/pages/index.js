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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Playlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Playlist */ "./src/components/Playlist/index.tsx");
/* harmony import */ var _components_Playbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Playbar */ "./src/components/Playbar/index.tsx");
/* harmony import */ var src_State_AppState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/State/AppState */ "./src/State/AppState.tsx");

var _jsxFileName = "/home/jidayyy/francebleu/pages/index.tsx";






const Home = () => {
  const state = Object(src_State_AppState__WEBPACK_IMPORTED_MODULE_5__["useAppContext"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full z-0 relative flex flex-col items-center align-middle justify-center h-screen",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "absolute hidden sm:flex z-50 top-10 left-10",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "https://www.lezardsquibougent.com/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
          width: 130,
          height: 50,
          src: "/logo.webp",
          quality: 100
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "z-0 relative w-full h-full",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "z-0",
        layout: "fill",
        src: "/bgalien.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "absolute text-sm items-center align-middle justify-between top-0 sm:top-40 flex flex-col text-gray-200 font-bold bg-black rounded-lg bg-opacity-90 p-5",
      children: [state.tracks[state.index].name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "font-normal",
        children: ["( ", state.count, " \xE9coutes )"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "z-50 absolute text-white sm:w-96 bg-black bg-opacity-90 rounded-lg p-10",
      children: "Un feuilleton propos\xE9 par la Compagnie L\xE9zards qui Bougent, imagin\xE9 et \xE9crit par les jeunes de l'Espace Socio-Culturel Municipal et de la Maison de la Vie Citoyenne Saint-\xC9tienne de Bayonne, et interpr\xE9t\xE9 par les \xE9l\xE8ves de l'\xE9cole de th\xE9\xE2tre Scaramuccia de Saint-Jean de Luz."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Playlist__WEBPACK_IMPORTED_MODULE_3__["Playlist"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Playbar__WEBPACK_IMPORTED_MODULE_4__["Playbar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ "./src/components/Playbar/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Playbar/index.tsx ***!
  \******************************************/
/*! exports provided: Playbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Playbar", function() { return Playbar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_State_AppState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/State/AppState */ "./src/State/AppState.tsx");
/* harmony import */ var _hooks_useConvert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useConvert.js */ "./src/hooks/useConvert.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/home/jidayyy/francebleu/src/components/Playbar/index.tsx";






function Playbar() {
  var _audioRef$current5;

  const audioRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const state = Object(src_State_AppState__WEBPACK_IMPORTED_MODULE_3__["useAppContext"])();
  const {
    data,
    isLoading,
    error,
    refetch
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_6__["useQuery"])("getCount", () => axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("http://localhost:3000/api/count").then(r => r.data), {
    onSuccess: data => {
      state.setTrackCount(data);
      state.setCount(data[state.index].count);
    }
  });
  const controls = {
    play: () => state.setIsPlaying(true),
    pause: () => state.setIsPlaying(false),
    forward: () => {
      if (state.index === state.tracks.length - 1) {
        state.setIndex(0);
        return state.setOnListen(state.tracks[state.index].url);
      }

      state.setIndex(c => c + 1);
      state.setOnListen(state.tracks[state.index].url);
    },
    backward: () => {
      if (state.index === 0) {
        state.setIndex(state.tracks.length - 1);
        return state.setOnListen(state.tracks[state.index].url);
      }

      state.setIndex(c => c - 1);
      state.setOnListen(state.tracks[state.index].url);
    },
    volume: e => {
      if (parseInt(e.target.value) < 3) {
        state.setVolume(0);
        return audioRef.current.volume = state.volume;
      }

      state.setVolume(parseInt(e.target.value) / 100);
      audioRef.current.volume = state.volume;
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    var _audioRef$current;

    (_audioRef$current = audioRef.current) === null || _audioRef$current === void 0 ? void 0 : _audioRef$current.load();

    if (state.isPlaying === true) {
      var _audioRef$current2;

      axios__WEBPACK_IMPORTED_MODULE_5___default.a.put(`${"http://localhost:3000/api/count"}/${state.tracks[state.index].id}`);
      refetch();
      state.setCount(data[state.index].count);
      state.setTrackCount(data);
      (_audioRef$current2 = audioRef.current) === null || _audioRef$current2 === void 0 ? void 0 : _audioRef$current2.play();
    }

    if (!isLoading) {
      state.setCount(data[state.index].count);
    }
  }, [state.index, state.isPlaying]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (state.isPlaying) {
      const timer = window.setInterval(() => {
        if (audioRef.current.currentTime > 0) {
          state.setCurrentTime(Math.floor(audioRef.current.currentTime));
          state.setDuration(Math.floor(audioRef.current.duration));
        }

        return function () {
          clearInterval(timer);
        };
      }, 1000);
    }
  }, [audioRef, state.isPlaying]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    var _audioRef$current3, _audioRef$current4;

    if (((_audioRef$current3 = audioRef.current) === null || _audioRef$current3 === void 0 ? void 0 : _audioRef$current3.currentTime) === ((_audioRef$current4 = audioRef.current) === null || _audioRef$current4 === void 0 ? void 0 : _audioRef$current4.duration) && state.isPlaying) {
      controls.forward();
    }
  }, [audioRef]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-black absolute bottom-10 bg-opacity-90 p-5 rounded-lg shadow-lg flex items-center align-middle justify-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-white font-bold mx-4",
      children: state.isPlaying && audioRef.current.currentTime > 0 ? Object(_hooks_useConvert_js__WEBPACK_IMPORTED_MODULE_4__["default"])((_audioRef$current5 = audioRef.current) === null || _audioRef$current5 === void 0 ? void 0 : _audioRef$current5.currentTime) : "00:00"
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
        lineNumber: 111,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
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
        lineNumber: 118,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
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
        lineNumber: 125,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
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
        lineNumber: 132,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-white font-bold mx-4",
      children: state.isPlaying && audioRef.current.currentTime > 0 ? Object(_hooks_useConvert_js__WEBPACK_IMPORTED_MODULE_4__["default"])(audioRef.current.duration - audioRef.current.currentTime) : "00:00"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
      ref: audioRef,
      src: state.onListen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Playlist/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Playlist/index.tsx ***!
  \*******************************************/
/*! exports provided: Playlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Playlist", function() { return Playlist; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_State_AppState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/State/AppState */ "./src/State/AppState.tsx");

var _jsxFileName = "/home/jidayyy/francebleu/src/components/Playlist/index.tsx";

function Playlist() {
  const state = Object(src_State_AppState__WEBPACK_IMPORTED_MODULE_1__["useAppContext"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "bg-black absolute top-10 hidden lg:top-1/3 rounded-lg left-20 lg:flex flex-col items-center align-middle justify-center h-96 text-gray-400 z-40",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "py-5",
      children: state.tracks.map(track => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "my-2 hover:bg-gray-900 w-full px-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: () => state.setIndex(track.id - 1),
          children: track.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
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

/***/ "./src/hooks/useConvert.js":
/*!*********************************!*\
  !*** ./src/hooks/useConvert.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const secondsToHms = d => {
  d = Number(d);
  let m = Math.floor(d % 3600 / 60);
  let s = Math.floor(d % 3600 % 60);
  return "0" + m + ":" + s;
};

/* harmony default export */ __webpack_exports__["default"] = (secondsToHms);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9TdGF0ZS9BcHBTdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGxheWJhci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGxheWxpc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9kYXRhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlQ29udmVydC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJnbG9iYWwiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsImxvYWRlcnMiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiZGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwibG9hZGVyIiwicGF0aCIsImRvbWFpbnMiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImEiLCJzaXplcyIsImxheW91dCIsInBlcmNlbnRTaXplcyIsIm0iLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwid2lkdGhzIiwicyIsImtpbmQiLCJ3aWR0aCIsInciLCJwIiwic3JjU2V0IiwiZ2V0V2lkdGhzIiwibGFzdCIsImkiLCJzcmMiLCJsb2FkIiwicm9vdCIsIlZBTElEX0xPQURFUlMiLCJjb25maWdMb2FkZXIiLCJ1bm9wdGltaXplZCIsInByaW9yaXR5IiwiYWxsIiwicmVzdCIsInVuc2l6ZWQiLCJCb29sZWFuIiwiSlNPTiIsImxvYWRpbmciLCJpc0xhenkiLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3aWR0aEludCIsImdldEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25zb2xlIiwiY29uZmlnRG9tYWlucyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInNldFJlZiIsImVsIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImNhbGxiYWNrIiwiSG9tZSIsInN0YXRlIiwidXNlQXBwQ29udGV4dCIsInRyYWNrcyIsImluZGV4IiwibmFtZSIsImNvdW50IiwiQXBwQ29udGV4dERlZmF1bHQiLCJpc1BsYXlpbmciLCJpc0xvYWRpbmciLCJ2b2x1bWUiLCJzZXRJc0xvYWRpbmciLCJvbkxpc3RlbiIsInVybCIsInNldENvdW50IiwidHJhY2tDb3VudCIsInNldE9uTGlzdGVuIiwic2V0Vm9sdW1lIiwic2V0SW5kZXgiLCJzZXRJc1BsYXlpbmciLCJzZXREdXJhdGlvbiIsInNldEN1cnJlbnRUaW1lIiwic2V0VHJhY2tDb3VudCIsImR1cmF0aW9uIiwiY3VycmVudFRpbWUiLCJBcHBTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dFdyYXBwZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiUGxheWJhciIsImF1ZGlvUmVmIiwidXNlUmVmIiwiZGF0YSIsImVycm9yIiwicmVmZXRjaCIsInVzZVF1ZXJ5IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiciIsIm9uU3VjY2VzcyIsImNvbnRyb2xzIiwicGxheSIsInBhdXNlIiwiZm9yd2FyZCIsImxlbmd0aCIsImMiLCJiYWNrd2FyZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImN1cnJlbnQiLCJ1c2VFZmZlY3QiLCJwdXQiLCJ0aW1lciIsIndpbmRvdyIsInNldEludGVydmFsIiwiZmxvb3IiLCJjbGVhckludGVydmFsIiwiQ29udmVydCIsIlBsYXlsaXN0IiwibWFwIiwidHJhY2siLCJUcmFja3MiLCJkZXNjcmlwdGlvbiIsInNlY29uZHNUb0htcyIsImQiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFNQTs7QUFFQSxVQUFtQztBQUNqQztBQUFFQSxRQUFELHNCQUFDQSxHQUFELElBQUNBO0FBR0o7O0FBQUEsTUFBTUMsb0JBQW9CLEdBQUcsa0JBQTdCLFNBQTZCLENBQTdCO0FBYUEsTUFBTUMsT0FBTyxHQUFHLFFBR2QsQ0FDQSxVQURBLFdBQ0EsQ0FEQSxFQUVBLGVBRkEsZ0JBRUEsQ0FGQSxFQUdBLFdBSEEsWUFHQSxDQUhBLEVBSUEsWUFQRixhQU9FLENBSkEsQ0FIYyxDQUFoQjtBQVVBLE1BQU1DLG1CQUFtQixHQUFHLDZDQUE1QixTQUE0QixDQUE1QjtBQXNDQSxNQUFNO0FBQ0pDLGFBQVcsRUFEUDtBQUVKQyxZQUFVLEVBRk47QUFHSkMsUUFBTSxFQUhGO0FBSUpDLE1BQUksRUFKQTtBQUtKQyxTQUFPLEVBTEg7QUFBQSxJQU9GQywwSkFBeURDLGFBUDdELG1CLENBUUE7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQUMsR0FBRCxtQkFBdUIsR0FBeEMsZ0JBQWlCLENBQWpCO0FBQ0FDLGlCQUFpQixDQUFqQkEsS0FBdUIsVUFBVUMsQ0FBQyxHQUFsQ0Q7QUFDQUQsUUFBUSxDQUFSQSxLQUFjLFVBQVVFLENBQUMsR0FBekJGOztBQUVBLHlDQUl5QztBQUN2QyxNQUFJRyxLQUFLLEtBQUtDLE1BQU0sS0FBTkEsVUFBcUJBLE1BQU0sS0FBekMsWUFBUyxDQUFULEVBQTZEO0FBQzNEO0FBQ0EsVUFBTUMsWUFBWSxHQUFHLENBQUMsR0FBR0YsS0FBSyxDQUFMQSxTQUFKLG9CQUFJQSxDQUFKLE1BQStDRyxDQUFELElBQ2pFQyxRQUFRLENBQUNELENBQUMsQ0FEWixDQUNZLENBQUYsQ0FEVyxDQUFyQjs7QUFHQSxRQUFJRCxZQUFZLENBQWhCLFFBQXlCO0FBQ3ZCLFlBQU1HLGFBQWEsR0FBR0MsSUFBSSxDQUFKQSxJQUFTLEdBQVRBLGdCQUF0QjtBQUNBLGFBQU87QUFDTEMsY0FBTSxFQUFFVixRQUFRLENBQVJBLE9BQ0xXLENBQUQsSUFBT0EsQ0FBQyxJQUFJVixpQkFBaUIsQ0FBakJBLENBQWlCLENBQWpCQSxHQUZULGFBQ0dELENBREg7QUFJTFksWUFBSSxFQUpOO0FBQU8sT0FBUDtBQU9GOztBQUFBLFdBQU87QUFBRUYsWUFBTSxFQUFSO0FBQW9CRSxVQUFJLEVBQS9CO0FBQU8sS0FBUDtBQUVGOztBQUFBLE1BQ0UsNkJBQ0FSLE1BQU0sS0FETixVQUVBQSxNQUFNLEtBSFIsY0FJRTtBQUNBLFdBQU87QUFBRU0sWUFBTSxFQUFSO0FBQTZCRSxVQUFJLEVBQXhDO0FBQU8sS0FBUDtBQUdGOztBQUFBLFFBQU1GLE1BQU0sR0FBRyxDQUNiLEdBQUcsU0FDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUUcsS0FBSyxHQUFHO0FBQWhCO0FBQUEsUUFDR0MsQ0FBRCxJQUFPZCxRQUFRLENBQVJBLEtBQWVlLENBQUQsSUFBT0EsQ0FBQyxJQUF0QmYsTUFBZ0NBLFFBQVEsQ0FBQ0EsUUFBUSxDQUFSQSxTQVh0RCxDQVdxRCxDQURqRCxDQVRDLENBRFUsQ0FBZjtBQWVBLFNBQU87QUFBQTtBQUFVWSxRQUFJLEVBQXJCO0FBQU8sR0FBUDtBQW1CRjs7QUFBQSwwQkFBMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUI7QUFBMEIsQ0FBMUIsRUFRdUM7QUFDckMsbUJBQWlCO0FBQ2YsV0FBTztBQUFBO0FBQU9JLFlBQU0sRUFBYjtBQUEwQmIsV0FBSyxFQUF0QztBQUFPLEtBQVA7QUFHRjs7QUFBQSxRQUFNO0FBQUE7QUFBQTtBQUFBLE1BQW1CYyxTQUFTLGdCQUFsQyxLQUFrQyxDQUFsQztBQUNBLFFBQU1DLElBQUksR0FBR1IsTUFBTSxDQUFOQSxTQUFiO0FBRUEsU0FBTztBQUNMUCxTQUFLLEVBQUUsVUFBVVMsSUFBSSxLQUFkLGdCQURGO0FBRUxJLFVBQU0sRUFBRU4sTUFBTSxDQUFOQSxJQUVKLFVBQ0csR0FBRWYsTUFBTSxDQUFDO0FBQUE7QUFBQTtBQUFnQmtCLFdBQUssRUFBdEI7QUFBQyxLQUFELENBQTZCLElBQ3BDRCxJQUFJLEtBQUpBLFVBQW1CTyxDQUFDLEdBQUcsQ0FDeEIsR0FBRVAsSUFMREYsU0FGSCxJQUVHQSxDQUZIO0FBV0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FVLE9BQUcsRUFBRXpCLE1BQU0sQ0FBQztBQUFBO0FBQUE7QUFBZ0JrQixXQUFLLEVBQUVILE1BQU0sQ0FqQjNDLElBaUIyQztBQUE3QixLQUFEO0FBakJOLEdBQVA7QUFxQkY7O0FBQUEsbUJBQWdEO0FBQzlDLE1BQUksYUFBSixVQUEyQjtBQUN6QjtBQUVGOztBQUFBLE1BQUksYUFBSixVQUEyQjtBQUN6QixXQUFPSCxRQUFRLElBQWYsRUFBZSxDQUFmO0FBRUY7O0FBQUE7QUFHRjs7QUFBQSx5Q0FBMkQ7QUFDekQsUUFBTWMsSUFBSSxHQUFHOUIsT0FBTyxDQUFQQSxJQUFiLFlBQWFBLENBQWI7O0FBQ0EsWUFBVTtBQUNSLFdBQU84QixJQUFJO0FBQUdDLFVBQUksRUFBUDtBQUFBLE9BQVgsV0FBVyxFQUFYO0FBRUY7O0FBQUEsUUFBTSxVQUNILHlEQUF3REMscUNBRXZELGVBQWNDLFlBSGxCLEVBQU0sQ0FBTjtBQU9hOztBQUFBLHFCQWNBO0FBQUEsTUFkZTtBQUFBO0FBQUE7QUFHNUJDLGVBQVcsR0FIaUI7QUFJNUJDLFlBQVEsR0FKb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVk1Qi9CLFVBQU0sR0Fac0I7QUFBQSxNQWNmO0FBQUEsTUFEVmdDLEdBQ1U7QUFDYixNQUFJQyxJQUF5QixHQUE3QjtBQUNBLE1BQUl4QixNQUFnQyxHQUFHRCxLQUFLLGtCQUE1QztBQUNBLE1BQUkwQixPQUFPLEdBQVg7O0FBQ0EsTUFBSSxhQUFKLE1BQXVCO0FBQ3JCQSxXQUFPLEdBQUdDLE9BQU8sQ0FBQ0YsSUFBSSxDQUF0QkMsT0FBaUIsQ0FBakJBLENBRHFCLENBRXJCOztBQUNBLFdBQU9ELElBQUksQ0FBWCxTQUFXLENBQVg7QUFIRixTQUlPLElBQUksWUFBSixNQUFzQjtBQUMzQjtBQUNBLFFBQUlBLElBQUksQ0FBUixRQUFpQnhCLE1BQU0sR0FBR3dCLElBQUksQ0FBYnhCLE9BRlUsQ0FJM0I7O0FBQ0EsV0FBT3dCLElBQUksQ0FBWCxRQUFXLENBQVg7QUFHRjs7QUFBQSxZQUEyQztBQUN6QyxRQUFJLENBQUosS0FBVTtBQUNSLFlBQU0sVUFDSCwwSEFBeUhHLElBQUksQ0FBSkEsVUFDeEg7QUFBQTtBQUFBO0FBRHdIQTtBQUN4SCxPQUR3SEEsQ0FENUgsRUFBTSxDQUFOO0FBTUY7O0FBQUEsUUFBSSxDQUFDdkMsbUJBQW1CLENBQW5CQSxTQUFMLE1BQUtBLENBQUwsRUFBMkM7QUFDekMsWUFBTSxVQUNILG1CQUFrQjRCLEdBQUksOENBQTZDaEIsTUFBTyxzQkFBcUJaLG1CQUFtQixDQUFuQkEscUJBRGxHLEdBQU0sQ0FBTjtBQU1GOztBQUFBLFFBQUksQ0FBQ0Ysb0JBQW9CLENBQXBCQSxTQUFMLE9BQUtBLENBQUwsRUFBNkM7QUFDM0MsWUFBTSxVQUNILG1CQUFrQjhCLEdBQUksK0NBQThDWSxPQUFRLHNCQUFxQjFDLG9CQUFvQixDQUFwQkEscUJBRHBHLEdBQU0sQ0FBTjtBQU1GOztBQUFBLFFBQUlvQyxRQUFRLElBQUlNLE9BQU8sS0FBdkIsUUFBb0M7QUFDbEMsWUFBTSxVQUNILG1CQUFrQlosR0FEckIsaUZBQU0sQ0FBTjtBQUlGOztBQUFBLGlCQUFhO0FBQ1gsWUFBTSxVQUNILG1CQUFrQkEsR0FEckIsaUdBQU0sQ0FBTjtBQUlIO0FBRUQ7O0FBQUEsTUFBSWEsTUFBTSxHQUNSLGNBQWNELE9BQU8sS0FBUEEsVUFBc0IsbUJBRHRDLFdBQ0UsQ0FERjs7QUFFQSxNQUFJWixHQUFHLElBQUlBLEdBQUcsQ0FBSEEsV0FBWCxPQUFXQSxDQUFYLEVBQW9DO0FBQ2xDO0FBQ0FLLGVBQVcsR0FBWEE7QUFDQVEsVUFBTSxHQUFOQTtBQUdGOztBQUFBLFFBQU0sMEJBQTBCLHNDQUFrQztBQUNoRUMsY0FBVSxFQURzRDtBQUVoRUMsWUFBUSxFQUFFLENBRlo7QUFBa0UsR0FBbEMsQ0FBaEM7QUFJQSxRQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFFQSxRQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBdkIsS0FBdUIsQ0FBdkI7QUFDQSxRQUFNQyxTQUFTLEdBQUdELE1BQU0sQ0FBeEIsTUFBd0IsQ0FBeEI7QUFDQSxRQUFNRSxVQUFVLEdBQUdGLE1BQU0sQ0FBekIsT0FBeUIsQ0FBekI7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFJRyxRQUFxQyxHQUFHO0FBQzFDQyxZQUFRLEVBRGtDO0FBRTFDQyxPQUFHLEVBRnVDO0FBRzFDQyxRQUFJLEVBSHNDO0FBSTFDQyxVQUFNLEVBSm9DO0FBSzFDQyxTQUFLLEVBTHFDO0FBTzFDQyxhQUFTLEVBUGlDO0FBUTFDQyxXQUFPLEVBUm1DO0FBUzFDQyxVQUFNLEVBVG9DO0FBVTFDQyxVQUFNLEVBVm9DO0FBWTFDQyxXQUFPLEVBWm1DO0FBYTFDdEMsU0FBSyxFQWJxQztBQWMxQ3VDLFVBQU0sRUFkb0M7QUFlMUNDLFlBQVEsRUFma0M7QUFnQjFDQyxZQUFRLEVBaEJrQztBQWlCMUNDLGFBQVMsRUFqQmlDO0FBa0IxQ0MsYUFBUyxFQWxCaUM7QUFBQTtBQUE1QztBQUE0QyxHQUE1Qzs7QUF1QkEsTUFDRSxtQ0FDQSxxQkFEQSxlQUVBcEQsTUFBTSxLQUhSLFFBSUU7QUFDQTtBQUNBLFVBQU1xRCxRQUFRLEdBQUdsQixTQUFTLEdBQTFCO0FBQ0EsVUFBTW1CLFVBQVUsR0FBR0MsS0FBSyxDQUFMQSxRQUFLLENBQUxBLFlBQTRCLEdBQUVGLFFBQVEsR0FBRyxHQUE1RDs7QUFDQSxRQUFJckQsTUFBTSxLQUFWLGNBQTZCO0FBQzNCO0FBQ0F3RCxrQkFBWSxHQUFHO0FBQ2JULGVBQU8sRUFETTtBQUViVSxnQkFBUSxFQUZLO0FBR2JuQixnQkFBUSxFQUhLO0FBS2JLLGlCQUFTLEVBTEk7QUFNYkcsY0FBTSxFQU5SVTtBQUFlLE9BQWZBO0FBUUFFLGdCQUFVLEdBQUc7QUFBRVgsZUFBTyxFQUFUO0FBQW9CSixpQkFBUyxFQUE3QjtBQUFiZTtBQUFhLE9BQWJBO0FBVkYsV0FXTyxJQUFJMUQsTUFBTSxLQUFWLGFBQTRCO0FBQ2pDO0FBQ0F3RCxrQkFBWSxHQUFHO0FBQ2JULGVBQU8sRUFETTtBQUViRyxnQkFBUSxFQUZLO0FBR2JPLGdCQUFRLEVBSEs7QUFJYm5CLGdCQUFRLEVBSks7QUFLYkssaUJBQVMsRUFMSTtBQU1iRyxjQUFNLEVBTlJVO0FBQWUsT0FBZkE7QUFRQUUsZ0JBQVUsR0FBRztBQUNYZixpQkFBUyxFQURFO0FBRVhJLGVBQU8sRUFGSTtBQUdYRyxnQkFBUSxFQUhWUTtBQUFhLE9BQWJBO0FBS0FDLGNBQVEsR0FBSSxlQUFjMUIsUUFBUyxhQUFZRSxTQUEvQ3dCO0FBZkssV0FnQkEsSUFBSTNELE1BQU0sS0FBVixTQUF3QjtBQUM3QjtBQUNBd0Qsa0JBQVksR0FBRztBQUNiQyxnQkFBUSxFQURLO0FBRWJkLGlCQUFTLEVBRkk7QUFHYkksZUFBTyxFQUhNO0FBSWJULGdCQUFRLEVBSks7QUFLYjdCLGFBQUssRUFMUTtBQU1idUMsY0FBTSxFQU5SUTtBQUFlLE9BQWZBO0FBU0g7QUE5Q0QsU0E4Q08sSUFDTCxtQ0FDQSxxQkFEQSxlQUVBeEQsTUFBTSxLQUhELFFBSUw7QUFDQTtBQUNBd0QsZ0JBQVksR0FBRztBQUNiVCxhQUFPLEVBRE07QUFFYlUsY0FBUSxFQUZLO0FBSWJuQixjQUFRLEVBSks7QUFLYkMsU0FBRyxFQUxVO0FBTWJDLFVBQUksRUFOUztBQU9iQyxZQUFNLEVBUE87QUFRYkMsV0FBSyxFQVJRO0FBVWJDLGVBQVMsRUFWSTtBQVdiRyxZQUFNLEVBWFJVO0FBQWUsS0FBZkE7QUFOSyxTQW1CQTtBQUNMO0FBQ0EsY0FBMkM7QUFDekMsWUFBTSxVQUNILG1CQUFrQnhDLEdBRHJCLHlFQUFNLENBQU47QUFJSDtBQUVEOztBQUFBLE1BQUk0QyxhQUFnQyxHQUFHO0FBQ3JDNUMsT0FBRyxFQURrQztBQUdyQ0osVUFBTSxFQUgrQjtBQUlyQ2IsU0FBSyxFQUpQO0FBQXVDLEdBQXZDOztBQU9BLGlCQUFlO0FBQ2I2RCxpQkFBYSxHQUFHQyxnQkFBZ0IsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUkvQnBELFdBQUssRUFKMEI7QUFLL0JxRCxhQUFPLEVBTHdCO0FBQUE7QUFBakNGO0FBQWlDLEtBQUQsQ0FBaENBO0FBV0Y7O0FBQUEsZUFBYTtBQUNYSixnQkFBWSxHQUFaQTtBQUNBRSxjQUFVLEdBQVZBO0FBQ0FyQixZQUFRLEdBQVJBO0FBRUY7O0FBQUEsc0JBQ0U7QUFBSyxTQUFLLEVBQVY7QUFBQSxLQUNHcUIsVUFBVSxnQkFDVDtBQUFLLFNBQUssRUFBVjtBQUFBLEtBQ0dDLFFBQVEsZ0JBQ1A7QUFDRSxTQUFLLEVBQUU7QUFDTFQsY0FBUSxFQURIO0FBRUxILGFBQU8sRUFGRjtBQUdMRCxZQUFNLEVBSEQ7QUFJTEQsWUFBTSxFQUpEO0FBS0xELGFBQU8sRUFOWDtBQUNTLEtBRFQ7QUFRRSxPQUFHLEVBUkw7QUFTRSxtQkFURjtBQVVFLFFBQUksRUFWTjtBQVdFLE9BQUcsRUFBRyw2QkFBNEIsK0JBWjdCO0FBQ1AsSUFETyxHQUZGLElBQ1QsQ0FEUyxHQURiLE1Bb0JHLDJCQUNDLDREQUNFLDREQUVNaUIsZ0JBQWdCLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFJbkJwRCxTQUFLLEVBSmM7QUFLbkJxRCxXQUFPLEVBTFk7QUFBQTtBQUZ2QjtBQUV1QixHQUFELENBRnRCO0FBV0UsT0FBRyxFQVhMO0FBWUUsWUFBUSxFQVpWO0FBYUUsU0FBSyxFQWJQO0FBY0UsU0FBSyxFQWRQO0FBZUUsYUFBUyxFQXJDakI7QUFzQk0sS0FERixDQXJCSixlQXlDRTtBQUdFLFlBQVEsRUFIVjtBQUlFLGFBQVMsRUFKWDtBQUtFLE9BQUcsRUFMTDtBQU1FLFNBQUssRUEvQ1Q7QUF5Q0UsS0F6Q0YsRUFpREd4QyxRQUFRO0FBQUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQUMsTUFBRCw0QkFDRTtBQUNFLE9BQUcsRUFDRCxZQUNBc0MsYUFBYSxDQURiLE1BRUFBLGFBQWEsQ0FGYixTQUdBQSxhQUFhLENBTGpCO0FBT0UsT0FBRyxFQVBMO0FBUUUsTUFBRSxFQVJKO0FBU0UsUUFBSSxFQUFFQSxhQUFhLENBQWJBLHFCQUFtQ0EsYUFBYSxDQUFDNUMsR0FUekQsQ0FVRTtBQVZGO0FBV0UsZUFBVyxFQUFFNEMsYUFBYSxDQUFDaEQsTUFYN0IsQ0FZRTtBQVpGO0FBYUUsY0FBVSxFQUFFZ0QsYUFBYSxDQXBCdEI7QUFPTCxJQURGLENBTk8sR0FsRGIsSUFDRSxDQURGO0FBOEVGLEMsQ0FBQTs7O0FBRUEsMkJBQTJDO0FBQ3pDLFNBQU81QyxHQUFHLENBQUhBLENBQUcsQ0FBSEEsV0FBaUJBLEdBQUcsQ0FBSEEsTUFBakJBLENBQWlCQSxDQUFqQkEsR0FBUDtBQUdGOztBQUFBLHFCQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFyQjtBQUFxQixDQUFyQixFQUtvQztBQUNsQztBQUNBLFFBQU0rQyxNQUFNLEdBQUcsMkJBQTJCLE9BQTFDLEtBQWUsQ0FBZjtBQUNBLE1BQUlDLFlBQVksR0FBaEI7O0FBQ0EsZUFBYTtBQUNYRCxVQUFNLENBQU5BLEtBQVksT0FBWkE7QUFHRjs7QUFBQSxNQUFJQSxNQUFNLENBQVYsUUFBbUI7QUFDakJDLGdCQUFZLEdBQUcsTUFBTUQsTUFBTSxDQUFOQSxLQUFyQkMsR0FBcUJELENBQXJCQztBQUVGOztBQUFBLFNBQVEsR0FBRTlDLElBQUssR0FBRStDLFlBQVksS0FBTSxHQUFFRCxZQUFyQztBQUdGOztBQUFBLHNCQUFzQjtBQUFBO0FBQUE7QUFBdEI7QUFBc0IsQ0FBdEIsRUFBNkU7QUFDM0UsU0FBUSxHQUFFOUMsSUFBSyxHQUFFK0MsWUFBWSxLQUFNLFlBQVd4RCxLQUE5QztBQUdGOztBQUFBLDBCQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUEwQixDQUExQixFQUtvQztBQUNsQztBQUNBLFFBQU1zRCxNQUFNLEdBQUcsc0JBQXNCLE9BQXRCLE9BQW9DLFFBQVFELE9BQU8sSUFBbEUsTUFBbUQsQ0FBcEMsQ0FBZjtBQUNBLE1BQUlFLFlBQVksR0FBR0QsTUFBTSxDQUFOQSxZQUFuQjtBQUNBLFNBQVEsR0FBRTdDLElBQUssR0FBRThDLFlBQWEsR0FBRUMsWUFBWSxLQUE1QztBQUdGOztBQUFBLHVCQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUF2QjtBQUF1QixDQUF2QixFQUtvQztBQUNsQyxZQUEyQztBQUN6QyxVQUFNQyxhQUFhLEdBQW5CLEdBRHlDLENBR3pDOztBQUNBLFFBQUksQ0FBSixLQUFVQSxhQUFhLENBQWJBO0FBQ1YsUUFBSSxDQUFKLE9BQVlBLGFBQWEsQ0FBYkE7O0FBRVosUUFBSUEsYUFBYSxDQUFiQSxTQUFKLEdBQThCO0FBQzVCLFlBQU0sVUFDSCxvQ0FBbUNBLGFBQWEsQ0FBYkEsVUFFbEMsZ0dBQStGdkMsSUFBSSxDQUFKQSxVQUMvRjtBQUFBO0FBQUE7QUFEK0ZBO0FBQy9GLE9BRCtGQSxDQUhuRyxFQUFNLENBQU47QUFTRjs7QUFBQSxRQUFJWCxHQUFHLENBQUhBLFdBQUosSUFBSUEsQ0FBSixFQUEwQjtBQUN4QixZQUFNLFVBQ0gsd0JBQXVCQSxHQUQxQiwwR0FBTSxDQUFOO0FBS0Y7O0FBQUEsUUFBSSxDQUFDQSxHQUFHLENBQUhBLFdBQUQsR0FBQ0EsQ0FBRCxJQUFKLGVBQTJDO0FBQ3pDOztBQUNBLFVBQUk7QUFDRm1ELGlCQUFTLEdBQUcsUUFBWkEsR0FBWSxDQUFaQTtBQUNBLE9BRkYsQ0FFRSxZQUFZO0FBQ1pDLGVBQU8sQ0FBUEE7QUFDQSxjQUFNLFVBQ0gsd0JBQXVCcEQsR0FEMUIsaUlBQU0sQ0FBTjtBQUtGOztBQUFBLFVBQUksQ0FBQ3FELGFBQWEsQ0FBYkEsU0FBdUJGLFNBQVMsQ0FBckMsUUFBS0UsQ0FBTCxFQUFpRDtBQUMvQyxjQUFNLFVBQ0gscUJBQW9CckQsR0FBSSxrQ0FBaUNtRCxTQUFTLENBQUNHLFFBQXBFLCtEQUFDLEdBREgsOEVBQU0sQ0FBTjtBQUtIO0FBQ0Y7QUFFRDs7QUFBQSxTQUFRLEdBQUVwRCxJQUFLLFFBQU9xRCxrQkFBa0IsS0FBTSxNQUFLOUQsS0FBTSxNQUFLcUQsT0FBTyxJQUFJLEVBQXpFO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2akJNLE1BQU1VLG1CQUFtQixHQUM3QiwrQkFBK0JDLElBQUksQ0FBcEMsbUJBQUMsSUFDRCxjQUVrQjtBQUNoQixNQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBaEIsR0FBWUEsRUFBWjtBQUNBLFNBQU9DLFVBQVUsQ0FBQyxZQUFZO0FBQzVCQyxNQUFFLENBQUM7QUFDREMsZ0JBQVUsRUFEVDtBQUVEQyxtQkFBYSxFQUFFLFlBQVk7QUFDekIsZUFBTzFFLElBQUksQ0FBSkEsT0FBWSxNQUFNc0UsSUFBSSxDQUFKQSxRQUF6QixLQUFtQixDQUFadEUsQ0FBUDtBQUhKd0U7QUFBRyxLQUFELENBQUZBO0FBRGUsS0FBakIsQ0FBaUIsQ0FBakI7QUFORzs7OztBQWdCQSxNQUFNRyxrQkFBa0IsR0FDNUIsK0JBQStCUCxJQUFJLENBQXBDLGtCQUFDLElBQ0QsY0FBeUM7QUFDdkMsU0FBT1EsWUFBWSxDQUFuQixFQUFtQixDQUFuQjtBQUhHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNQOztBQUNBOztBQWNBLE1BQU1DLHVCQUF1QixHQUFHLGdDQUFoQzs7QUFFTyx5QkFBNEM7QUFBQTtBQUE1QztBQUE0QyxDQUE1QyxFQUdxRDtBQUMxRCxRQUFNQyxVQUFtQixHQUFHcEQsUUFBUSxJQUFJLENBQXhDO0FBRUEsUUFBTXFELFNBQVMsR0FBRyxXQUFsQixNQUFrQixHQUFsQjtBQUNBLFFBQU0sd0JBQXdCLHFCQUE5QixLQUE4QixDQUE5QjtBQUVBLFFBQU1DLE1BQU0sR0FBRyx3QkFDWkMsRUFBRCxJQUFrQjtBQUNoQixRQUFJRixTQUFTLENBQWIsU0FBdUI7QUFDckJBLGVBQVMsQ0FBVEE7QUFDQUEsZUFBUyxDQUFUQTtBQUdGOztBQUFBLFFBQUlELFVBQVUsSUFBZCxTQUEyQjs7QUFFM0IsUUFBSUcsRUFBRSxJQUFJQSxFQUFFLENBQVosU0FBc0I7QUFDcEJGLGVBQVMsQ0FBVEEsVUFBb0JHLE9BQU8sS0FFeEJ2RCxTQUFELElBQWVBLFNBQVMsSUFBSXdELFVBQVUsQ0FGYixTQUVhLENBRmIsRUFHekI7QUFIRko7QUFHRSxPQUh5QixDQUEzQkE7QUFNSDtBQWhCWSxLQWlCYix5QkFqQkYsT0FpQkUsQ0FqQmEsQ0FBZjtBQW9CQSx3QkFBVSxNQUFNO0FBQ2QsUUFBSSxDQUFKLHlCQUE4QjtBQUM1QixVQUFJLENBQUosU0FBYztBQUNaLGNBQU1LLFlBQVksR0FBRyw4Q0FBb0IsTUFBTUQsVUFBVSxDQUF6RCxJQUF5RCxDQUFwQyxDQUFyQjtBQUNBLGVBQU8sTUFBTSw2Q0FBYixZQUFhLENBQWI7QUFFSDtBQUNGO0FBUEQsS0FPRyxDQVBILE9BT0csQ0FQSDtBQVNBLFNBQU8sU0FBUCxPQUFPLENBQVA7QUFHRjs7QUFBQSw2Q0FJYztBQUNaLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE2QkUsY0FBYyxDQUFqRCxPQUFpRCxDQUFqRDtBQUNBQyxVQUFRLENBQVJBO0FBRUFDLFVBQVEsQ0FBUkE7QUFDQSxTQUFPLHFCQUEyQjtBQUNoQ0QsWUFBUSxDQUFSQTtBQUNBQyxZQUFRLENBQVJBLG1CQUZnQyxDQUloQzs7QUFDQSxRQUFJRCxRQUFRLENBQVJBLFNBQUosR0FBeUI7QUFDdkJDLGNBQVEsQ0FBUkE7QUFDQUMsZUFBUyxDQUFUQTtBQUVIO0FBVEQ7QUFZRjs7QUFBQSxNQUFNQSxTQUFTLEdBQUcsSUFBbEIsR0FBa0IsRUFBbEI7O0FBQ0EsaUNBQXdFO0FBQ3RFLFFBQU1DLEVBQUUsR0FBR0MsT0FBTyxDQUFQQSxjQUFYO0FBQ0EsTUFBSUMsUUFBUSxHQUFHSCxTQUFTLENBQVRBLElBQWYsRUFBZUEsQ0FBZjs7QUFDQSxnQkFBYztBQUNaO0FBR0Y7O0FBQUEsUUFBTUYsUUFBUSxHQUFHLElBQWpCLEdBQWlCLEVBQWpCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLHlCQUEwQkssT0FBRCxJQUFhO0FBQ3JEQSxXQUFPLENBQVBBLFFBQWlCQyxLQUFELElBQVc7QUFDekIsWUFBTUMsUUFBUSxHQUFHUixRQUFRLENBQVJBLElBQWFPLEtBQUssQ0FBbkMsTUFBaUJQLENBQWpCO0FBQ0EsWUFBTTNELFNBQVMsR0FBR2tFLEtBQUssQ0FBTEEsa0JBQXdCQSxLQUFLLENBQUxBLG9CQUExQzs7QUFDQSxVQUFJQyxRQUFRLElBQVosV0FBMkI7QUFDekJBLGdCQUFRLENBQVJBLFNBQVEsQ0FBUkE7QUFFSDtBQU5ERjtBQURlLEtBQWpCLE9BQWlCLENBQWpCO0FBVUFKLFdBQVMsQ0FBVEEsUUFFR0csUUFBUSxHQUFHO0FBQUE7QUFBQTtBQUZkSDtBQUVjLEdBRmRBO0FBUUE7QUFDRCxDOzs7Ozs7Ozs7OztBQzNHRCxpQkFBaUIsbUJBQU8sQ0FBQyxxRUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOUM7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNTyxJQUFjLEdBQUcsTUFBTTtBQUN6QixRQUFNQyxLQUFLLEdBQUdDLHdFQUFhLEVBQTNCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMscUZBQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyw2Q0FBZjtBQUFBLDZCQUNJO0FBQUcsWUFBSSxFQUFDLG9DQUFSO0FBQUEsK0JBQ0kscUVBQUMsaURBQUQ7QUFDSSxlQUFLLEVBQUUsR0FEWDtBQUVJLGdCQUFNLEVBQUUsRUFGWjtBQUdJLGFBQUcsRUFBQyxZQUhSO0FBSUksaUJBQU8sRUFBRTtBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVdJO0FBQUssZUFBUyxFQUFDLDRCQUFmO0FBQUEsNkJBQ0kscUVBQUMsaURBQUQ7QUFBTyxpQkFBUyxFQUFDLEtBQWpCO0FBQXVCLGNBQU0sRUFBQyxNQUE5QjtBQUFxQyxXQUFHLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEosZUFjSTtBQUFLLGVBQVMsRUFBQyx3SkFBZjtBQUFBLGlCQUNLRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUYsS0FBSyxDQUFDRyxLQUFuQixFQUEwQkMsSUFEL0IsZUFFSTtBQUFNLGlCQUFTLEVBQUMsYUFBaEI7QUFBQSx5QkFBaUNKLEtBQUssQ0FBQ0ssS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSixlQWtCSTtBQUFLLGVBQVMsRUFBQyx5RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkosZUF5QkkscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6QkosZUEwQkkscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUE4QkgsQ0FqQ0Q7O0FBbUNlTixtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBUUE7QUFxQ0EsTUFBTU8saUJBQTJCLEdBQUc7QUFDaENDLFdBQVMsRUFBRSxLQURxQjtBQUVoQ0MsV0FBUyxFQUFFLEtBRnFCO0FBR2hDTixRQUFNLEVBQUVBLDhDQUh3QjtBQUloQ08sUUFBTSxFQUFFLEdBSndCO0FBS2hDQyxjQUFZLEVBQUUsSUFMa0I7QUFNaENQLE9BQUssRUFBRSxDQU55QjtBQU9oQ1EsVUFBUSxFQUFFVCw4Q0FBTSxDQUFDLENBQUQsQ0FBTixDQUFVVSxHQVBZO0FBUWhDUCxPQUFLLEVBQUUsQ0FSeUI7QUFTaENRLFVBQVEsRUFBRSxJQVRzQjtBQVVoQ0MsWUFBVSxFQUFFLElBVm9CO0FBV2hDQyxhQUFXLEVBQUUsSUFYbUI7QUFZaENDLFdBQVMsRUFBRSxJQVpxQjtBQWFoQ0MsVUFBUSxFQUFFLElBYnNCO0FBY2hDQyxjQUFZLEVBQUUsSUFka0I7QUFlaENDLGFBQVcsRUFBRSxJQWZtQjtBQWdCaENDLGdCQUFjLEVBQUUsSUFoQmdCO0FBaUJoQ0MsZUFBYSxFQUFFLElBakJpQjtBQWtCaENDLFVBQVEsRUFBRSxDQWxCc0I7QUFtQmhDQyxhQUFXLEVBQUU7QUFuQm1CLENBQXBDO0FBc0JBLE1BQU1DLFFBQVEsZ0JBQUdDLDJEQUFhLENBQVduQixpQkFBWCxDQUE5QjtBQUVPLFNBQVNMLGFBQVQsR0FBbUM7QUFDdEMsU0FBT3lCLHdEQUFVLENBQUNGLFFBQUQsQ0FBakI7QUFDSDtBQUNNLFNBQVNHLGlCQUFULENBQTJCO0FBQzlCQztBQUQ4QixDQUEzQixFQUlTO0FBQ1osUUFBTTtBQUFBLE9BQUNwQixTQUFEO0FBQUEsT0FBWUU7QUFBWixNQUE0Qm1CLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDMUIsS0FBRDtBQUFBLE9BQVFjO0FBQVIsTUFBb0JZLHNEQUFRLENBQUMsQ0FBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDbEIsUUFBRDtBQUFBLE9BQVdJO0FBQVgsTUFBMEJjLHNEQUFRLENBQUMzQiw4Q0FBTSxDQUFDQyxLQUFELENBQU4sQ0FBY1MsR0FBZixDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDTCxTQUFEO0FBQUEsT0FBWVc7QUFBWixNQUE0Qlcsc0RBQVEsQ0FBQyxLQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNQLFFBQUQ7QUFBQSxPQUFXSDtBQUFYLE1BQTBCVSxzREFBUSxDQUFDLENBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ04sV0FBRDtBQUFBLE9BQWNIO0FBQWQsTUFBZ0NTLHNEQUFRLENBQUMsQ0FBRCxDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDcEIsTUFBRDtBQUFBLE9BQVNPO0FBQVQsTUFBc0JhLHNEQUFRLENBQUMsR0FBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDZixVQUFEO0FBQUEsT0FBYU87QUFBYixNQUE4QlEsc0RBQVEsQ0FBSyxFQUFMLENBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUN4QixLQUFEO0FBQUEsT0FBUVE7QUFBUixNQUFvQmdCLHNEQUFRLENBQVMsQ0FBVCxDQUFsQztBQUVBLHNCQUNJLHFFQUFDLFFBQUQsQ0FBVSxRQUFWO0FBQ0ksU0FBSyxFQUFFO0FBQ0gzQiw0REFERztBQUVISyxlQUZHO0FBR0hPLGdCQUhHO0FBSUhPLG1CQUpHO0FBS0hILGtCQUxHO0FBTUhWLGVBTkc7QUFPSEUsa0JBUEc7QUFRSEssaUJBUkc7QUFTSE4sWUFURztBQVVITyxlQVZHO0FBV0hYLFdBWEc7QUFZSFEsY0FaRztBQWFIRixjQWJHO0FBY0hSLFdBZEc7QUFlSGMsY0FmRztBQWdCSEUsaUJBaEJHO0FBaUJIQyxvQkFqQkc7QUFrQkhFLGNBbEJHO0FBbUJIQztBQW5CRyxLQURYO0FBQUEsY0F1QktLO0FBdkJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJCSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNFLE9BQVQsR0FBZ0M7QUFBQTs7QUFDbkMsUUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUEwQixJQUExQixDQUF2QjtBQUNBLFFBQU1oQyxLQUFLLEdBQUdDLHdFQUFhLEVBQTNCO0FBRUEsUUFBTTtBQUFFZ0MsUUFBRjtBQUFRekIsYUFBUjtBQUFtQjBCLFNBQW5CO0FBQTBCQztBQUExQixNQUFzQ0MsNERBQVEsQ0FDaEQsVUFEZ0QsRUFFaEQsTUFDSUMsNENBQUssQ0FDQUMsR0FETCxDQUNTakosaUNBRFQsRUFFS2tKLElBRkwsQ0FFV0MsQ0FBRCxJQUFPQSxDQUFDLENBQUNQLElBRm5CLENBSDRDLEVBTWhEO0FBQ0lRLGFBQVMsRUFBR1IsSUFBRCxJQUFVO0FBQ2pCakMsV0FBSyxDQUFDcUIsYUFBTixDQUFvQlksSUFBcEI7QUFDQWpDLFdBQUssQ0FBQ2EsUUFBTixDQUFlb0IsSUFBSSxDQUFDakMsS0FBSyxDQUFDRyxLQUFQLENBQUosQ0FBa0JFLEtBQWpDO0FBQ0g7QUFKTCxHQU5nRCxDQUFwRDtBQWNBLFFBQU1xQyxRQUFRLEdBQUc7QUFDYkMsUUFBSSxFQUFFLE1BQU0zQyxLQUFLLENBQUNrQixZQUFOLENBQW1CLElBQW5CLENBREM7QUFFYjBCLFNBQUssRUFBRSxNQUFNNUMsS0FBSyxDQUFDa0IsWUFBTixDQUFtQixLQUFuQixDQUZBO0FBR2IyQixXQUFPLEVBQUUsTUFBTTtBQUNYLFVBQUk3QyxLQUFLLENBQUNHLEtBQU4sS0FBZ0JILEtBQUssQ0FBQ0UsTUFBTixDQUFhNEMsTUFBYixHQUFzQixDQUExQyxFQUE2QztBQUN6QzlDLGFBQUssQ0FBQ2lCLFFBQU4sQ0FBZSxDQUFmO0FBQ0EsZUFBT2pCLEtBQUssQ0FBQ2UsV0FBTixDQUFrQmYsS0FBSyxDQUFDRSxNQUFOLENBQWFGLEtBQUssQ0FBQ0csS0FBbkIsRUFBMEJTLEdBQTVDLENBQVA7QUFDSDs7QUFDRFosV0FBSyxDQUFDaUIsUUFBTixDQUFnQjhCLENBQUQsSUFBT0EsQ0FBQyxHQUFHLENBQTFCO0FBQ0EvQyxXQUFLLENBQUNlLFdBQU4sQ0FBa0JmLEtBQUssQ0FBQ0UsTUFBTixDQUFhRixLQUFLLENBQUNHLEtBQW5CLEVBQTBCUyxHQUE1QztBQUNILEtBVlk7QUFXYm9DLFlBQVEsRUFBRSxNQUFNO0FBQ1osVUFBSWhELEtBQUssQ0FBQ0csS0FBTixLQUFnQixDQUFwQixFQUF1QjtBQUNuQkgsYUFBSyxDQUFDaUIsUUFBTixDQUFlakIsS0FBSyxDQUFDRSxNQUFOLENBQWE0QyxNQUFiLEdBQXNCLENBQXJDO0FBQ0EsZUFBTzlDLEtBQUssQ0FBQ2UsV0FBTixDQUFrQmYsS0FBSyxDQUFDRSxNQUFOLENBQWFGLEtBQUssQ0FBQ0csS0FBbkIsRUFBMEJTLEdBQTVDLENBQVA7QUFDSDs7QUFDRFosV0FBSyxDQUFDaUIsUUFBTixDQUFnQjhCLENBQUQsSUFBT0EsQ0FBQyxHQUFHLENBQTFCO0FBQ0EvQyxXQUFLLENBQUNlLFdBQU4sQ0FBa0JmLEtBQUssQ0FBQ0UsTUFBTixDQUFhRixLQUFLLENBQUNHLEtBQW5CLEVBQTBCUyxHQUE1QztBQUNILEtBbEJZO0FBbUJiSCxVQUFNLEVBQUd3QyxDQUFELElBQTRDO0FBQ2hELFVBQUluSixRQUFRLENBQUNtSixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFSLEdBQTJCLENBQS9CLEVBQWtDO0FBQzlCbkQsYUFBSyxDQUFDZ0IsU0FBTixDQUFnQixDQUFoQjtBQUNBLGVBQVFlLFFBQVEsQ0FBQ3FCLE9BQVQsQ0FBa0IzQyxNQUFsQixHQUEyQlQsS0FBSyxDQUFDUyxNQUF6QztBQUNIOztBQUNEVCxXQUFLLENBQUNnQixTQUFOLENBQWdCbEgsUUFBUSxDQUFDbUosQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUixHQUEyQixHQUEzQztBQUNBcEIsY0FBUSxDQUFDcUIsT0FBVCxDQUFrQjNDLE1BQWxCLEdBQTJCVCxLQUFLLENBQUNTLE1BQWpDO0FBQ0g7QUExQlksR0FBakI7QUE2QkE0Qyx5REFBUyxDQUFDLE1BQU07QUFBQTs7QUFDWix5QkFBQXRCLFFBQVEsQ0FBQ3FCLE9BQVQsd0VBQWtCeEksSUFBbEI7O0FBQ0EsUUFBSW9GLEtBQUssQ0FBQ08sU0FBTixLQUFvQixJQUF4QixFQUE4QjtBQUFBOztBQUMxQjhCLGtEQUFLLENBQUNpQixHQUFOLENBQ0ssR0FBRWpLLGlDQUFnQyxJQUMvQjJHLEtBQUssQ0FBQ0UsTUFBTixDQUFhRixLQUFLLENBQUNHLEtBQW5CLEVBQTBCVixFQUM3QixFQUhMO0FBS0EwQyxhQUFPO0FBQ1BuQyxXQUFLLENBQUNhLFFBQU4sQ0FBZW9CLElBQUksQ0FBQ2pDLEtBQUssQ0FBQ0csS0FBUCxDQUFKLENBQWtCRSxLQUFqQztBQUNBTCxXQUFLLENBQUNxQixhQUFOLENBQW9CWSxJQUFwQjtBQUNBLDRCQUFBRixRQUFRLENBQUNxQixPQUFULDBFQUFrQlQsSUFBbEI7QUFDSDs7QUFDRCxRQUFJLENBQUNuQyxTQUFMLEVBQWdCO0FBQ1pSLFdBQUssQ0FBQ2EsUUFBTixDQUFlb0IsSUFBSSxDQUFDakMsS0FBSyxDQUFDRyxLQUFQLENBQUosQ0FBa0JFLEtBQWpDO0FBQ0g7QUFDSixHQWhCUSxFQWdCTixDQUFDTCxLQUFLLENBQUNHLEtBQVAsRUFBY0gsS0FBSyxDQUFDTyxTQUFwQixDQWhCTSxDQUFUO0FBa0JBOEMseURBQVMsQ0FBQyxNQUFNO0FBQ1osUUFBSXJELEtBQUssQ0FBQ08sU0FBVixFQUFxQjtBQUNqQixZQUFNZ0QsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFdBQVAsQ0FBbUIsTUFBTTtBQUNuQyxZQUFJMUIsUUFBUSxDQUFDcUIsT0FBVCxDQUFrQjdCLFdBQWxCLEdBQWdDLENBQXBDLEVBQXVDO0FBQ25DdkIsZUFBSyxDQUFDb0IsY0FBTixDQUNJcEgsSUFBSSxDQUFDMEosS0FBTCxDQUFXM0IsUUFBUSxDQUFDcUIsT0FBVCxDQUFrQjdCLFdBQTdCLENBREo7QUFHQXZCLGVBQUssQ0FBQ21CLFdBQU4sQ0FDSW5ILElBQUksQ0FBQzBKLEtBQUwsQ0FBVzNCLFFBQVEsQ0FBQ3FCLE9BQVQsQ0FBa0I5QixRQUE3QixDQURKO0FBR0g7O0FBQ0QsZUFBTyxZQUFZO0FBQ2ZxQyx1QkFBYSxDQUFDSixLQUFELENBQWI7QUFDSCxTQUZEO0FBR0gsT0FaYSxFQVlYLElBWlcsQ0FBZDtBQWFIO0FBQ0osR0FoQlEsRUFnQk4sQ0FBQ3hCLFFBQUQsRUFBVy9CLEtBQUssQ0FBQ08sU0FBakIsQ0FoQk0sQ0FBVDtBQWtCQThDLHlEQUFTLENBQUMsTUFBTTtBQUFBOztBQUNaLFFBQ0ksdUJBQUF0QixRQUFRLENBQUNxQixPQUFULDBFQUFrQjdCLFdBQWxCLDZCQUFrQ1EsUUFBUSxDQUFDcUIsT0FBM0MsdURBQWtDLG1CQUFrQjlCLFFBQXBELEtBQ0F0QixLQUFLLENBQUNPLFNBRlYsRUFHRTtBQUNFbUMsY0FBUSxDQUFDRyxPQUFUO0FBQ0g7QUFDSixHQVBRLEVBT04sQ0FBQ2QsUUFBRCxDQVBNLENBQVQ7QUFTQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxrSEFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQUEsZ0JBQ0svQixLQUFLLENBQUNPLFNBQU4sSUFBbUJ3QixRQUFRLENBQUNxQixPQUFULENBQWtCN0IsV0FBbEIsR0FBZ0MsQ0FBbkQsR0FDS3FDLG9FQUFPLHVCQUFDN0IsUUFBUSxDQUFDcUIsT0FBVix1REFBQyxtQkFBa0I3QixXQUFuQixDQURaLEdBRUs7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFPSTtBQUNJLGVBQVMsRUFBQyw2Q0FEZDtBQUVJLGFBQU8sRUFBRW1CLFFBQVEsQ0FBQ00sUUFGdEI7QUFBQSw2QkFJSSxxRUFBQyxpREFBRDtBQUFPLFdBQUcsRUFBQyxxQkFBWDtBQUFpQyxhQUFLLEVBQUUsRUFBeEM7QUFBNEMsY0FBTSxFQUFFO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosRUFhSyxDQUFDaEQsS0FBSyxDQUFDTyxTQUFQLGdCQUNHO0FBQ0ksZUFBUyxFQUFDLDZDQURkO0FBRUksYUFBTyxFQUFFbUMsUUFBUSxDQUFDQyxJQUZ0QjtBQUFBLDZCQUlJLHFFQUFDLGlEQUFEO0FBQU8sV0FBRyxFQUFDLGlCQUFYO0FBQTZCLGFBQUssRUFBRSxFQUFwQztBQUF3QyxjQUFNLEVBQUU7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESCxnQkFRRztBQUNJLGVBQVMsRUFBQyw2Q0FEZDtBQUVJLGFBQU8sRUFBRUQsUUFBUSxDQUFDRSxLQUZ0QjtBQUFBLDZCQUlJLHFFQUFDLGlEQUFEO0FBQU8sV0FBRyxFQUFDLGtCQUFYO0FBQThCLGFBQUssRUFBRSxFQUFyQztBQUF5QyxjQUFNLEVBQUU7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQlIsZUE0Qkk7QUFDSSxlQUFTLEVBQUMsNkNBRGQ7QUFFSSxhQUFPLEVBQUVGLFFBQVEsQ0FBQ0csT0FGdEI7QUFBQSw2QkFJSSxxRUFBQyxpREFBRDtBQUFPLFdBQUcsRUFBQyxvQkFBWDtBQUFnQyxhQUFLLEVBQUUsRUFBdkM7QUFBMkMsY0FBTSxFQUFFO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUJKLGVBa0NJO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQUEsZ0JBQ0s3QyxLQUFLLENBQUNPLFNBQU4sSUFBbUJ3QixRQUFRLENBQUNxQixPQUFULENBQWtCN0IsV0FBbEIsR0FBZ0MsQ0FBbkQsR0FDS3FDLG9FQUFPLENBQ0g3QixRQUFRLENBQUNxQixPQUFULENBQWtCOUIsUUFBbEIsR0FDSVMsUUFBUSxDQUFDcUIsT0FBVCxDQUFrQjdCLFdBRm5CLENBRFosR0FLSztBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQ0osZUEwQ0k7QUFBTyxTQUFHLEVBQUVRLFFBQVo7QUFBc0IsU0FBRyxFQUFFL0IsS0FBSyxDQUFDVztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBOENILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSkQ7QUFFTyxTQUFTa0QsUUFBVCxHQUFpQztBQUNwQyxRQUFNN0QsS0FBSyxHQUFHQyx3RUFBYSxFQUEzQjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlKQUFmO0FBQUEsMkJBQ0k7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBLGdCQUNLRCxLQUFLLENBQUNFLE1BQU4sQ0FBYTRELEdBQWIsQ0FBa0JDLEtBQUQsaUJBQ2Q7QUFBSSxpQkFBUyxFQUFDLG9DQUFkO0FBQUEsK0JBQ0k7QUFBUSxpQkFBTyxFQUFFLE1BQU0vRCxLQUFLLENBQUNpQixRQUFOLENBQWU4QyxLQUFLLENBQUN0RSxFQUFOLEdBQVcsQ0FBMUIsQ0FBdkI7QUFBQSxvQkFDS3NFLEtBQUssQ0FBQzNEO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFhSCxDOzs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUNBLE1BQU00RCxNQUFNLEdBQUcsQ0FDWDtBQUNJdkUsSUFBRSxFQUFFLENBRFI7QUFFSVcsTUFBSSxFQUFFLDRDQUZWO0FBR0k2RCxhQUFXLEVBQUUsdUJBSGpCO0FBSUlyRCxLQUFHLEVBQUU7QUFKVCxDQURXLEVBT1g7QUFDSW5CLElBQUUsRUFBRSxDQURSO0FBRUlXLE1BQUksRUFBRSw0Q0FGVjtBQUdJNkQsYUFBVyxFQUFFLHVCQUhqQjtBQUlJckQsS0FBRyxFQUFFO0FBSlQsQ0FQVyxFQWFYO0FBQ0luQixJQUFFLEVBQUUsQ0FEUjtBQUVJVyxNQUFJLEVBQUUsd0JBRlY7QUFHSTZELGFBQVcsRUFBRSx1QkFIakI7QUFJSXJELEtBQUcsRUFBRTtBQUpULENBYlcsRUFtQlg7QUFDSW5CLElBQUUsRUFBRSxDQURSO0FBRUlXLE1BQUksRUFBRSwyQkFGVjtBQUdJNkQsYUFBVyxFQUFFLHVCQUhqQjtBQUlJckQsS0FBRyxFQUFFO0FBSlQsQ0FuQlcsRUF5Qlg7QUFDSW5CLElBQUUsRUFBRSxDQURSO0FBRUlXLE1BQUksRUFBRSwwQkFGVjtBQUdJNkQsYUFBVyxFQUFFLHVCQUhqQjtBQUlJckQsS0FBRyxFQUFFO0FBSlQsQ0F6QlcsRUErQlg7QUFDSW5CLElBQUUsRUFBRSxDQURSO0FBRUlXLE1BQUksRUFBRSxrQkFGVjtBQUdJNkQsYUFBVyxFQUFFLHVCQUhqQjtBQUlJckQsS0FBRyxFQUFFO0FBSlQsQ0EvQlcsRUFxQ1g7QUFDSW5CLElBQUUsRUFBRSxDQURSO0FBRUlXLE1BQUksRUFBRSxzQkFGVjtBQUdJNkQsYUFBVyxFQUFFLHVCQUhqQjtBQUlJckQsS0FBRyxFQUFFO0FBSlQsQ0FyQ1csRUEyQ1g7QUFDSW5CLElBQUUsRUFBRSxDQURSO0FBRUlXLE1BQUksRUFBRSw2QkFGVjtBQUdJNkQsYUFBVyxFQUFFLHVCQUhqQjtBQUlJckQsS0FBRyxFQUFFO0FBSlQsQ0EzQ1csRUFpRFg7QUFDSW5CLElBQUUsRUFBRSxDQURSO0FBRUlXLE1BQUksRUFBRSxpQkFGVjtBQUdJNkQsYUFBVyxFQUFFLHVCQUhqQjtBQUlJckQsS0FBRyxFQUFFO0FBSlQsQ0FqRFcsRUF1RFg7QUFDSW5CLElBQUUsRUFBRSxFQURSO0FBRUlXLE1BQUksRUFBRSx3QkFGVjtBQUdJNkQsYUFBVyxFQUFFLHdCQUhqQjtBQUlJckQsS0FBRyxFQUFFO0FBSlQsQ0F2RFcsQ0FBZjtBQThEZW9ELHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBLE1BQU1FLFlBQVksR0FBSUMsQ0FBRCxJQUFPO0FBQ3hCQSxHQUFDLEdBQUdDLE1BQU0sQ0FBQ0QsQ0FBRCxDQUFWO0FBQ0EsTUFBSXRLLENBQUMsR0FBR0csSUFBSSxDQUFDMEosS0FBTCxDQUFZUyxDQUFDLEdBQUcsSUFBTCxHQUFhLEVBQXhCLENBQVI7QUFDQSxNQUFJakssQ0FBQyxHQUFHRixJQUFJLENBQUMwSixLQUFMLENBQVlTLENBQUMsR0FBRyxJQUFMLEdBQWEsRUFBeEIsQ0FBUjtBQUNBLFNBQU8sTUFBTXRLLENBQU4sR0FBVSxHQUFWLEdBQWdCSyxDQUF2QjtBQUNILENBTEQ7O0FBTWVnSywyRUFBZixFOzs7Ozs7Ozs7OztBQ05BLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9oZWFkJ1xuaW1wb3J0IHsgdG9CYXNlNjQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NCdcbmltcG9ydCB7XG4gIEltYWdlQ29uZmlnLFxuICBpbWFnZUNvbmZpZ0RlZmF1bHQsXG4gIExvYWRlclZhbHVlLFxuICBWQUxJRF9MT0FERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgOyhnbG9iYWwgYXMgYW55KS5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlXG59XG5cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gWydsYXp5JywgJ2VhZ2VyJywgdW5kZWZpbmVkXSBhcyBjb25zdFxudHlwZSBMb2FkaW5nVmFsdWUgPSB0eXBlb2YgVkFMSURfTE9BRElOR19WQUxVRVNbbnVtYmVyXVxuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlciA9IChyZXNvbHZlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXJQcm9wcyA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgd2lkdGg6IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG59XG5cbnR5cGUgRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMgPSBJbWFnZUxvYWRlclByb3BzICYgeyByb290OiBzdHJpbmcgfVxuXG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcDxcbiAgTG9hZGVyVmFsdWUsXG4gIChwcm9wczogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuPihbXG4gIFsnaW1naXgnLCBpbWdpeExvYWRlcl0sXG4gIFsnY2xvdWRpbmFyeScsIGNsb3VkaW5hcnlMb2FkZXJdLFxuICBbJ2FrYW1haScsIGFrYW1haUxvYWRlcl0sXG4gIFsnZGVmYXVsdCcsIGRlZmF1bHRMb2FkZXJdLFxuXSlcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIEltZ0VsZW1lbnRTdHlsZSA9IE5vbk51bGxhYmxlPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ11bJ3N0eWxlJ10+XG5cbmV4cG9ydCB0eXBlIEltYWdlUHJvcHMgPSBPbWl0PFxuICBKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddLFxuICAnc3JjJyB8ICdzcmNTZXQnIHwgJ3JlZicgfCAnd2lkdGgnIHwgJ2hlaWdodCcgfCAnbG9hZGluZycgfCAnc3R5bGUnXG4+ICYge1xuICBzcmM6IHN0cmluZ1xuICBsb2FkZXI/OiBJbWFnZUxvYWRlclxuICBxdWFsaXR5PzogbnVtYmVyIHwgc3RyaW5nXG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2FkaW5nPzogTG9hZGluZ1ZhbHVlXG4gIHVub3B0aW1pemVkPzogYm9vbGVhblxuICBvYmplY3RGaXQ/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdEZpdCddXG4gIG9iamVjdFBvc2l0aW9uPzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RQb3NpdGlvbiddXG59ICYgKFxuICAgIHwge1xuICAgICAgICB3aWR0aD86IG5ldmVyXG4gICAgICAgIGhlaWdodD86IG5ldmVyXG4gICAgICAgIC8qKiBAZGVwcmVjYXRlZCBVc2UgYGxheW91dD1cImZpbGxcImAgaW5zdGVhZCAqL1xuICAgICAgICB1bnNpemVkOiB0cnVlXG4gICAgICB9XG4gICAgfCB7IHdpZHRoPzogbmV2ZXI7IGhlaWdodD86IG5ldmVyOyBsYXlvdXQ6ICdmaWxsJyB9XG4gICAgfCB7XG4gICAgICAgIHdpZHRoOiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgbGF5b3V0PzogRXhjbHVkZTxMYXlvdXRWYWx1ZSwgJ2ZpbGwnPlxuICAgICAgfVxuICApXG5cbmNvbnN0IHtcbiAgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzLFxuICBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzLFxuICBsb2FkZXI6IGNvbmZpZ0xvYWRlcixcbiAgcGF0aDogY29uZmlnUGF0aCxcbiAgZG9tYWluczogY29uZmlnRG9tYWlucyxcbn0gPVxuICAoKHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIGFzIGFueSkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZSxcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbLi4uc2l6ZXMubWF0Y2hBbGwoLyhefFxccykoMT9cXGQ/XFxkKXZ3L2cpXS5tYXAoKG0pID0+XG4gICAgICBwYXJzZUludChtWzJdKVxuICAgIClcbiAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxXG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcihcbiAgICAgICAgICAocykgPT4gcyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgKSxcbiAgICAgICAga2luZDogJ3cnLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB3aWR0aHM6IGFsbFNpemVzLCBraW5kOiAndycgfVxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8XG4gICAgbGF5b3V0ID09PSAnZmlsbCcgfHxcbiAgICBsYXlvdXQgPT09ICdyZXNwb25zaXZlJ1xuICApIHtcbiAgICByZXR1cm4geyB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLCBraW5kOiAndycgfVxuICB9XG5cbiAgY29uc3Qgd2lkdGhzID0gW1xuICAgIC4uLm5ldyBTZXQoXG4gICAgICAvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICBbd2lkdGgsIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi9dLm1hcChcbiAgICAgICAgKHcpID0+IGFsbFNpemVzLmZpbmQoKHApID0+IHAgPj0gdykgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgIClcbiAgICApLFxuICBdXG4gIHJldHVybiB7IHdpZHRocywga2luZDogJ3gnIH1cbn1cblxudHlwZSBHZW5JbWdBdHRyc0RhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgbG9hZGVyOiBJbWFnZUxvYWRlclxuICB3aWR0aD86IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG4gIHNpemVzPzogc3RyaW5nXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHNyY1NldDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQsXG4gIGxheW91dCxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG4gIHNpemVzLFxuICBsb2FkZXIsXG59OiBHZW5JbWdBdHRyc0RhdGEpOiBHZW5JbWdBdHRyc1Jlc3VsdCB7XG4gIGlmICh1bm9wdGltaXplZCkge1xuICAgIHJldHVybiB7IHNyYywgc3JjU2V0OiB1bmRlZmluZWQsIHNpemVzOiB1bmRlZmluZWQgfVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aHMsIGtpbmQgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcylcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgcmV0dXJuIHtcbiAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICBzcmNTZXQ6IHdpZHRoc1xuICAgICAgLm1hcChcbiAgICAgICAgKHcsIGkpID0+XG4gICAgICAgICAgYCR7bG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICAgIH0ke2tpbmR9YFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG5cbiAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICBzcmM6IGxvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KSxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbnQoeDogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcilcbiAgaWYgKGxvYWQpIHtcbiAgICByZXR1cm4gbG9hZCh7IHJvb3Q6IGNvbmZpZ1BhdGgsIC4uLmxvYWRlclByb3BzIH0pXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtWQUxJRF9MT0FERVJTLmpvaW4oXG4gICAgICAnLCAnXG4gICAgKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2Uoe1xuICBzcmMsXG4gIHNpemVzLFxuICB1bm9wdGltaXplZCA9IGZhbHNlLFxuICBwcmlvcml0eSA9IGZhbHNlLFxuICBsb2FkaW5nLFxuICBjbGFzc05hbWUsXG4gIHF1YWxpdHksXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIG9iamVjdEZpdCxcbiAgb2JqZWN0UG9zaXRpb24sXG4gIGxvYWRlciA9IGRlZmF1bHRJbWFnZUxvYWRlcixcbiAgLi4uYWxsXG59OiBJbWFnZVByb3BzKSB7XG4gIGxldCByZXN0OiBQYXJ0aWFsPEltYWdlUHJvcHM+ID0gYWxsXG4gIGxldCBsYXlvdXQ6IE5vbk51bGxhYmxlPExheW91dFZhbHVlPiA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYydcbiAgbGV0IHVuc2l6ZWQgPSBmYWxzZVxuICBpZiAoJ3Vuc2l6ZWQnIGluIHJlc3QpIHtcbiAgICB1bnNpemVkID0gQm9vbGVhbihyZXN0LnVuc2l6ZWQpXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0Wyd1bnNpemVkJ11cbiAgfSBlbHNlIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0XG5cbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ2xheW91dCddXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghc3JjKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyB3aWR0aCwgaGVpZ2h0LCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHVuc2l6ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGRlcHJlY2F0ZWQgXCJ1bnNpemVkXCIgcHJvcGVydHksIHdoaWNoIHdhcyByZW1vdmVkIGluIGZhdm9yIG9mIHRoZSBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eWBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaXNMYXp5ID1cbiAgICAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpXG4gIGlmIChzcmMgJiYgc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgIHVub3B0aW1pemVkID0gdHJ1ZVxuICAgIGlzTGF6eSA9IGZhbHNlXG4gIH1cblxuICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9IHVzZUludGVyc2VjdGlvbjxIVE1MSW1hZ2VFbGVtZW50Pih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgICBkaXNhYmxlZDogIWlzTGF6eSxcbiAgfSlcbiAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkXG5cbiAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpXG4gIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpXG4gIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSlcblxuICBsZXQgd3JhcHBlclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN2Zzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBpbWdTdHlsZTogSW1nRWxlbWVudFN0eWxlIHwgdW5kZWZpbmVkID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHshaXNWaXNpYmxlICYmIChcbiAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgey4uLmdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICAgIGxvYWRlcixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgICAgIHNpemVzPXtzaXplc31cbiAgICAgICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICApfVxuICAgICAgPGltZ1xuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgey4uLmltZ0F0dHJpYnV0ZXN9XG4gICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgcmVmPXtzZXRSZWZ9XG4gICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgIC8+XG4gICAgICB7cHJpb3JpdHkgPyAoXG4gICAgICAgIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAgICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAnX19uaW1nLScgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyYyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zaXplc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBhcz1cImltYWdlXCJcbiAgICAgICAgICAgIGhyZWY9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmN9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzcmNzZXQ9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0fVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzaXplcz17aW1nQXR0cmlidXRlcy5zaXplc31cbiAgICAgICAgICA+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vL0JVSUxUIElOIExPQURFUlNcblxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjXG59XG5cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG4gIGNvbnN0IHBhcmFtcyA9IFsnYXV0bz1mb3JtYXQnLCAnZml0PW1heCcsICd3PScgKyB3aWR0aF1cbiAgbGV0IHBhcmFtc1N0cmluZyA9ICcnXG4gIGlmIChxdWFsaXR5KSB7XG4gICAgcGFyYW1zLnB1c2goJ3E9JyArIHF1YWxpdHkpXG4gIH1cblxuICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgIHBhcmFtc1N0cmluZyA9ICc/JyArIHBhcmFtcy5qb2luKCcmJylcbiAgfVxuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWBcbn1cblxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gXG59XG5cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICBjb25zdCBwYXJhbXMgPSBbJ2ZfYXV0bycsICdjX2xpbWl0JywgJ3dfJyArIHdpZHRoLCAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKV1cbiAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLydcbiAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgK1xuICAgICAgICAgICAgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IHsgUGxheWxpc3QgfSBmcm9tIFwiQGNvbXBvbmVudHMvUGxheWxpc3RcIjtcbmltcG9ydCB7IFBsYXliYXIgfSBmcm9tIFwiQGNvbXBvbmVudHMvUGxheWJhclwiO1xuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gXCJzcmMvU3RhdGUvQXBwU3RhdGVcIjtcbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gdXNlQXBwQ29udGV4dCgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgei0wIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBoaWRkZW4gc206ZmxleCB6LTUwIHRvcC0xMCBsZWZ0LTEwXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxlemFyZHNxdWlib3VnZW50LmNvbS9cIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvLndlYnBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTAgcmVsYXRpdmUgdy1mdWxsIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJ6LTBcIiBsYXlvdXQ9XCJmaWxsXCIgc3JjPVwiL2JnYWxpZW4uanBnXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0ZXh0LXNtIGl0ZW1zLWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1iZXR3ZWVuIHRvcC0wIHNtOnRvcC00MCBmbGV4IGZsZXgtY29sIHRleHQtZ3JheS0yMDAgZm9udC1ib2xkIGJnLWJsYWNrIHJvdW5kZWQtbGcgYmctb3BhY2l0eS05MCBwLTVcIj5cbiAgICAgICAgICAgICAgICB7c3RhdGUudHJhY2tzW3N0YXRlLmluZGV4XS5uYW1lfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+KCB7c3RhdGUuY291bnR9IMOpY291dGVzICk8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei01MCBhYnNvbHV0ZSB0ZXh0LXdoaXRlIHNtOnctOTYgYmctYmxhY2sgYmctb3BhY2l0eS05MCByb3VuZGVkLWxnIHAtMTBcIj5cbiAgICAgICAgICAgICAgICBVbiBmZXVpbGxldG9uIHByb3Bvc8OpIHBhciBsYSBDb21wYWduaWUgTMOpemFyZHMgcXVpIEJvdWdlbnQsXG4gICAgICAgICAgICAgICAgaW1hZ2luw6kgZXQgw6ljcml0IHBhciBsZXMgamV1bmVzIGRlIGwnRXNwYWNlIFNvY2lvLUN1bHR1cmVsXG4gICAgICAgICAgICAgICAgTXVuaWNpcGFsIGV0IGRlIGxhIE1haXNvbiBkZSBsYSBWaWUgQ2l0b3llbm5lIFNhaW50LcOJdGllbm5lIGRlXG4gICAgICAgICAgICAgICAgQmF5b25uZSwgZXQgaW50ZXJwcsOpdMOpIHBhciBsZXMgw6lsw6h2ZXMgZGUgbCfDqWNvbGUgZGUgdGjDqcOidHJlXG4gICAgICAgICAgICAgICAgU2NhcmFtdWNjaWEgZGUgU2FpbnQtSmVhbiBkZSBMdXouXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxQbGF5bGlzdCAvPlxuICAgICAgICAgICAgPFBsYXliYXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QsIHtcbiAgICBjcmVhdGVDb250ZXh0LFxuICAgIERpc3BhdGNoLFxuICAgIFNldFN0YXRlQWN0aW9uLFxuICAgIHVzZUNvbnRleHQsXG4gICAgdXNlRWZmZWN0LFxuICAgIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0cmFja3MgZnJvbSBcIi4uL2RhdGFzXCI7XG5pbnRlcmZhY2UgVHJhY2sge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgVHJhY2tDIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICAgIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xuICAgIHNldElzTG9hZGluZzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+IHwgbnVsbDtcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gICAgdHJhY2tzOiBUcmFja1tdO1xuICAgIG9uTGlzdGVuOiBzdHJpbmc7XG4gICAgc2V0T25MaXN0ZW46IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+O1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgc2V0SW5kZXg6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xuICAgIHNldElzUGxheWluZzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xuICAgIGlzUGxheWluZzogYm9vbGVhbjtcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIGN1cnJlbnRUaW1lOiBudW1iZXI7XG4gICAgc2V0RHVyYXRpb246IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xuICAgIHNldFZvbHVtZTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG4gICAgc2V0Q3VycmVudFRpbWU6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xuICAgIHNldFRyYWNrQ291bnQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFtdPj47XG4gICAgdHJhY2tDb3VudDogVHJhY2tDW10gfCBudWxsO1xuICAgIHZvbHVtZTogbnVtYmVyO1xuICAgIGNvdW50OiBudW1iZXI7XG4gICAgc2V0Q291bnQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xufVxuXG5jb25zdCBBcHBDb250ZXh0RGVmYXVsdDogQXBwU3RhdGUgPSB7XG4gICAgaXNQbGF5aW5nOiBmYWxzZSxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgIHRyYWNrczogdHJhY2tzLFxuICAgIHZvbHVtZTogMC41LFxuICAgIHNldElzTG9hZGluZzogbnVsbCxcbiAgICBpbmRleDogMCxcbiAgICBvbkxpc3RlbjogdHJhY2tzWzBdLnVybCxcbiAgICBjb3VudDogMCxcbiAgICBzZXRDb3VudDogbnVsbCBhcyB1bmtub3duIGFzIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+LFxuICAgIHRyYWNrQ291bnQ6IG51bGwsXG4gICAgc2V0T25MaXN0ZW46IG51bGwgYXMgdW5rbm93biBhcyBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PixcbiAgICBzZXRWb2x1bWU6IG51bGwgYXMgdW5rbm93biBhcyBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXI+PixcbiAgICBzZXRJbmRleDogbnVsbCBhcyB1bmtub3duIGFzIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+LFxuICAgIHNldElzUGxheWluZzogbnVsbCBhcyB1bmtub3duIGFzIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PixcbiAgICBzZXREdXJhdGlvbjogbnVsbCBhcyB1bmtub3duIGFzIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+LFxuICAgIHNldEN1cnJlbnRUaW1lOiBudWxsIGFzIHVua25vd24gYXMgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj4sXG4gICAgc2V0VHJhY2tDb3VudDogbnVsbCBhcyB1bmtub3duIGFzIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFtdPj4sXG4gICAgZHVyYXRpb246IDAsXG4gICAgY3VycmVudFRpbWU6IDAsXG59O1xuXG5jb25zdCBBcHBTdGF0ZSA9IGNyZWF0ZUNvbnRleHQ8QXBwU3RhdGU+KEFwcENvbnRleHREZWZhdWx0KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKTogQXBwU3RhdGUge1xuICAgIHJldHVybiB1c2VDb250ZXh0KEFwcFN0YXRlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBBcHBDb250ZXh0V3JhcHBlcih7XG4gICAgY2hpbGRyZW4sXG59OiB7XG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn0pOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtvbkxpc3Rlbiwgc2V0T25MaXN0ZW5dID0gdXNlU3RhdGUodHJhY2tzW2luZGV4XS51cmwpO1xuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbY3VycmVudFRpbWUsIHNldEN1cnJlbnRUaW1lXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt2b2x1bWUsIHNldFZvbHVtZV0gPSB1c2VTdGF0ZSgwLjUpO1xuICAgIGNvbnN0IFt0cmFja0NvdW50LCBzZXRUcmFja0NvdW50XSA9IHVzZVN0YXRlPFtdPihbXSk7XG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwcFN0YXRlLlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgIHRyYWNrcyxcbiAgICAgICAgICAgICAgICBpc1BsYXlpbmcsXG4gICAgICAgICAgICAgICAgdHJhY2tDb3VudCxcbiAgICAgICAgICAgICAgICBzZXRUcmFja0NvdW50LFxuICAgICAgICAgICAgICAgIHNldElzUGxheWluZyxcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgIHNldE9uTGlzdGVuLFxuICAgICAgICAgICAgICAgIHZvbHVtZSxcbiAgICAgICAgICAgICAgICBzZXRWb2x1bWUsXG4gICAgICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICAgICAgc2V0Q291bnQsXG4gICAgICAgICAgICAgICAgb25MaXN0ZW4sXG4gICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgc2V0SW5kZXgsXG4gICAgICAgICAgICAgICAgc2V0RHVyYXRpb24sXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFRpbWUsXG4gICAgICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQXBwU3RhdGUuUHJvdmlkZXI+XG4gICAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSBcInNyYy9TdGF0ZS9BcHBTdGF0ZVwiO1xuaW1wb3J0IENvbnZlcnQgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUNvbnZlcnQuanNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5leHBvcnQgZnVuY3Rpb24gUGxheWJhcigpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudCB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IHN0YXRlID0gdXNlQXBwQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGVycm9yLCByZWZldGNoIH0gPSB1c2VRdWVyeShcbiAgICAgICAgXCJnZXRDb3VudFwiLFxuICAgICAgICAoKSA9PlxuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAuZ2V0KHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgYXMgc3RyaW5nKVxuICAgICAgICAgICAgICAgIC50aGVuKChyKSA9PiByLmRhdGEpLFxuICAgICAgICB7XG4gICAgICAgICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0VHJhY2tDb3VudChkYXRhKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXRDb3VudChkYXRhW3N0YXRlLmluZGV4XS5jb3VudCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBjb250cm9scyA9IHtcbiAgICAgICAgcGxheTogKCkgPT4gc3RhdGUuc2V0SXNQbGF5aW5nKHRydWUpLFxuICAgICAgICBwYXVzZTogKCkgPT4gc3RhdGUuc2V0SXNQbGF5aW5nKGZhbHNlKSxcbiAgICAgICAgZm9yd2FyZDogKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXRlLmluZGV4ID09PSBzdGF0ZS50cmFja3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnNldEluZGV4KDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5zZXRPbkxpc3RlbihzdGF0ZS50cmFja3Nbc3RhdGUuaW5kZXhdLnVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGF0ZS5zZXRJbmRleCgoYykgPT4gYyArIDEpO1xuICAgICAgICAgICAgc3RhdGUuc2V0T25MaXN0ZW4oc3RhdGUudHJhY2tzW3N0YXRlLmluZGV4XS51cmwpO1xuICAgICAgICB9LFxuICAgICAgICBiYWNrd2FyZDogKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXRlLmluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2V0SW5kZXgoc3RhdGUudHJhY2tzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5zZXRPbkxpc3RlbihzdGF0ZS50cmFja3Nbc3RhdGUuaW5kZXhdLnVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGF0ZS5zZXRJbmRleCgoYykgPT4gYyAtIDEpO1xuICAgICAgICAgICAgc3RhdGUuc2V0T25MaXN0ZW4oc3RhdGUudHJhY2tzW3N0YXRlLmluZGV4XS51cmwpO1xuICAgICAgICB9LFxuICAgICAgICB2b2x1bWU6IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSA8IDMpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZXRWb2x1bWUoMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChhdWRpb1JlZi5jdXJyZW50IS52b2x1bWUgPSBzdGF0ZS52b2x1bWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdGUuc2V0Vm9sdW1lKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSAvIDEwMCk7XG4gICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50IS52b2x1bWUgPSBzdGF0ZS52b2x1bWU7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQ/LmxvYWQoKTtcbiAgICAgICAgaWYgKHN0YXRlLmlzUGxheWluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYXhpb3MucHV0KFxuICAgICAgICAgICAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9LyR7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnRyYWNrc1tzdGF0ZS5pbmRleF0uaWRcbiAgICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZWZldGNoKCk7XG4gICAgICAgICAgICBzdGF0ZS5zZXRDb3VudChkYXRhW3N0YXRlLmluZGV4XS5jb3VudCk7XG4gICAgICAgICAgICBzdGF0ZS5zZXRUcmFja0NvdW50KGRhdGEpO1xuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudD8ucGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICBzdGF0ZS5zZXRDb3VudChkYXRhW3N0YXRlLmluZGV4XS5jb3VudCk7XG4gICAgICAgIH1cbiAgICB9LCBbc3RhdGUuaW5kZXgsIHN0YXRlLmlzUGxheWluZ10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlLmlzUGxheWluZykge1xuICAgICAgICAgICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhdWRpb1JlZi5jdXJyZW50IS5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc2V0Q3VycmVudFRpbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGF1ZGlvUmVmLmN1cnJlbnQhLmN1cnJlbnRUaW1lIGFzIG51bWJlciksXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnNldER1cmF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihhdWRpb1JlZi5jdXJyZW50IS5kdXJhdGlvbiBhcyBudW1iZXIpLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9LCBbYXVkaW9SZWYsIHN0YXRlLmlzUGxheWluZ10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudD8uY3VycmVudFRpbWUgPT09IGF1ZGlvUmVmLmN1cnJlbnQ/LmR1cmF0aW9uICYmXG4gICAgICAgICAgICBzdGF0ZS5pc1BsYXlpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb250cm9scy5mb3J3YXJkKCk7XG4gICAgICAgIH1cbiAgICB9LCBbYXVkaW9SZWZdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgYWJzb2x1dGUgYm90dG9tLTEwIGJnLW9wYWNpdHktOTAgcC01IHJvdW5kZWQtbGcgc2hhZG93LWxnIGZsZXggaXRlbXMtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCBteC00XCI+XG4gICAgICAgICAgICAgICAge3N0YXRlLmlzUGxheWluZyAmJiBhdWRpb1JlZi5jdXJyZW50IS5jdXJyZW50VGltZSA+IDBcbiAgICAgICAgICAgICAgICAgICAgPyBDb252ZXJ0KGF1ZGlvUmVmLmN1cnJlbnQ/LmN1cnJlbnRUaW1lKVxuICAgICAgICAgICAgICAgICAgICA6IFwiMDA6MDBcIn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEgdHJhbnNsYXRlLXktMVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y29udHJvbHMuYmFja3dhcmR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pY29ucy9iYWNrd2FyZC5wbmdcIiB3aWR0aD17MjJ9IGhlaWdodD17MjJ9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHshc3RhdGUuaXNQbGF5aW5nID8gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEgdHJhbnNsYXRlLXktMVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbnRyb2xzLnBsYXl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ljb25zL3BsYXkucG5nXCIgd2lkdGg9ezIyfSBoZWlnaHQ9ezIyfSAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xIHRyYW5zbGF0ZS15LTFcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb250cm9scy5wYXVzZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaWNvbnMvcGF1c2UucG5nXCIgd2lkdGg9ezIyfSBoZWlnaHQ9ezIyfSAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC0yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMSB0cmFuc2xhdGUteS0xXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb250cm9scy5mb3J3YXJkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaWNvbnMvZm9yd2FyZC5wbmdcIiB3aWR0aD17MjJ9IGhlaWdodD17MjJ9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgbXgtNFwiPlxuICAgICAgICAgICAgICAgIHtzdGF0ZS5pc1BsYXlpbmcgJiYgYXVkaW9SZWYuY3VycmVudCEuY3VycmVudFRpbWUgPiAwXG4gICAgICAgICAgICAgICAgICAgID8gQ29udmVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudCEuZHVyYXRpb24gLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudCEuY3VycmVudFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IFwiMDA6MDBcIn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGF1ZGlvIHJlZj17YXVkaW9SZWZ9IHNyYz17c3RhdGUub25MaXN0ZW59PjwvYXVkaW8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCJpbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSBcInNyYy9TdGF0ZS9BcHBTdGF0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gUGxheWxpc3QoKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IHN0YXRlID0gdXNlQXBwQ29udGV4dCgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBhYnNvbHV0ZSB0b3AtMTAgaGlkZGVuIGxnOnRvcC0xLzMgcm91bmRlZC1sZyBsZWZ0LTIwIGxnOmZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlciBoLTk2IHRleHQtZ3JheS00MDAgei00MFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInB5LTVcIj5cbiAgICAgICAgICAgICAgICB7c3RhdGUudHJhY2tzLm1hcCgodHJhY2spID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LTIgaG92ZXI6YmctZ3JheS05MDAgdy1mdWxsIHB4LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc3RhdGUuc2V0SW5kZXgodHJhY2suaWQgLSAxKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYWNrLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCIvLyBtYWtlIGFuIGFycmF5IHdpdGggMTAgZGlmZmVyZW50IFRyYWNrc1xuY29uc3QgVHJhY2tzID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6IFwiUXVlIHNlIHBhc3NlLXQtaWwgc3VyIHRlcnJlID8gKCBQYXJ0aWUgMSApXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkVwaXNvZGUgMSBkZXNjcmlwdGlvblwiLFxuICAgICAgICB1cmw6IFwiLi9hdWRpby9lcGlzb2RlMS5tcDRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6IFwiUXVlIHNlIHBhc3NlLXQtaWwgc3VyIHRlcnJlID8gKCBQYXJ0aWUgMiApXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkVwaXNvZGUgMiBkZXNjcmlwdGlvblwiLFxuICAgICAgICB1cmw6IFwiLi9hdWRpby9lcGlzb2RlMi5tcDRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6IFwiQ2V0dGUgcGxhbsOodGUgYSBjaGFuZ8OpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkVwaXNvZGUgMyBkZXNjcmlwdGlvblwiLFxuICAgICAgICB1cmw6IFwiL2F1ZGlvL2VwaXNvZGUzLm1wNFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogXCJEZXMgbWFzcXVlcyBldCBkZXMgZHJvbmVzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkVwaXNvZGUgNCBkZXNjcmlwdGlvblwiLFxuICAgICAgICB1cmw6IFwiL2F1ZGlvL2VwaXNvZGU0Lm1wNFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogXCJDb252ZXJzYXRpb25zIMOgIGRpc3RhbmNlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkVwaXNvZGUgNSBkZXNjcmlwdGlvblwiLFxuICAgICAgICB1cmw6IFwiL2F1ZGlvL2VwaXNvZGU1Lm1wNFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNixcbiAgICAgICAgbmFtZTogXCJPbiB2ZXV0IHNvcnRpciAhXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkVwaXNvZGUgNiBkZXNjcmlwdGlvblwiLFxuICAgICAgICB1cmw6IFwiL2F1ZGlvL2VwaXNvZGU2Lm1wNFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNyxcbiAgICAgICAgbmFtZTogXCJOb3N0YWxnaWUgZGUgdm95YWdlc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFcGlzb2RlIDcgZGVzY3JpcHRpb25cIixcbiAgICAgICAgdXJsOiBcIi9hdWRpby9lcGlzb2RlNy5tcDRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDgsXG4gICAgICAgIG5hbWU6IFwiRGVzIHRyYW5zcG9ydHMgZXQgZGVzIHRlc3RzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkVwaXNvZGUgOCBkZXNjcmlwdGlvblwiLFxuICAgICAgICB1cmw6IFwiL2F1ZGlvL2VwaXNvZGU4Lm1wNFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogOSxcbiAgICAgICAgbmFtZTogXCJVbiBwZXUgZGUgYmlsYW5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRXBpc29kZSA5IGRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHVybDogXCIvYXVkaW8vZXBpc29kZTkubXA0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMCxcbiAgICAgICAgbmFtZTogXCJFc3QtY2UgcXVlIGMnZXN0IGZpbmk/XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkVwaXNvZGUgMTAgZGVzY3JpcHRpb25cIixcbiAgICAgICAgdXJsOiBcIi9hdWRpby9lcGlzb2RlMTAubXA0XCIsXG4gICAgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBUcmFja3M7XG4iLCJjb25zdCBzZWNvbmRzVG9IbXMgPSAoZCkgPT4ge1xuICAgIGQgPSBOdW1iZXIoZCk7XG4gICAgbGV0IG0gPSBNYXRoLmZsb29yKChkICUgMzYwMCkgLyA2MCk7XG4gICAgbGV0IHMgPSBNYXRoLmZsb29yKChkICUgMzYwMCkgJSA2MCk7XG4gICAgcmV0dXJuIFwiMFwiICsgbSArIFwiOlwiICsgcztcbn07XG5leHBvcnQgZGVmYXVsdCBzZWNvbmRzVG9IbXM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==