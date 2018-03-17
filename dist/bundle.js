/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./js/gradient/gradientConstructor.js":
/*!********************************************!*\
  !*** ./js/gradient/gradientConstructor.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass gradientConstructor {\n\n  constructor(container) {\n    this.container = container;\n    this.isRunning = true;\n  }\n\n  stop() {\n    this.isRunning = false;\n  }\n\n  start() {\n    // borrowed/stolen from https://codepen.io/13twelve/pen/xLoiH\n\n    const that = this;\n\n    // target to give background to\n    var $div = this.container;\n    // rgb vals of the gradients\n    var gradients = [\n      { start: [169, 251, 220], stop: [255, 64, 118] },\n      { start: [212, 157, 169], stop: [212, 157, 169] },\n      { start: [255, 64, 118], stop: [255, 64, 118] },\n      { start: [169, 251, 220], stop: [255, 64, 118] },\n      // { start: [10, 10, 10], stop: [60, 60, 60] },\n      // { start: [30, 30, 30], stop: [40, 40, 40] },\n      // { start: [60, 60, 60], stop: [20, 20, 20] }\n    ];\n    // how long for each transition\n    var transition_time = 4;\n\n    // internal type vars\n    var currentIndex = 0; // where we are in the gradients array\n    var nextIndex = 1; // what index of the gradients array is next\n    var steps_count = 0; // steps counter\n    var steps_total = Math.round(transition_time * 60); // total amount of steps\n    var rgb_steps = {\n      start: [0, 0, 0],\n      stop: [0, 0, 0]\n    }; // how much to alter each rgb value\n    var rgb_values = {\n      start: [0, 0, 0],\n      stop: [0, 0, 0]\n    }; // the current rgb values, gets altered by rgb steps on each interval\n    var prefixes = [\"-webkit-\", \"-moz-\", \"-o-\", \"-ms-\", \"\"]; // for looping through adding styles\n    var div_style = $div.style; // short cut to actually adding styles\n    var color1, color2;\n\n    // sets next current and next index of gradients array\n    function set_next(num) {\n      return (num + 1 < gradients.length) ? num + 1 : 0;\n    }\n\n    // work out how big each rgb step is\n    function calc_step_size(a, b) {\n      return (a - b) / steps_total;\n    }\n\n    // populate the rgb_values and rgb_steps objects\n    function calc_steps() {\n      for (var key in rgb_values) {\n        if (rgb_values.hasOwnProperty(key)) {\n          for (var i = 0; i < 3; i++) {\n            rgb_values[key][i] = gradients[currentIndex][key][i];\n            rgb_steps[key][i] = calc_step_size(gradients[nextIndex][key][i], rgb_values[key][i]);\n          }\n        }\n      }\n    }\n\n    // update current rgb vals, update DOM element with new CSS background\n    function updateGradient() {\n      // update the current rgb vals\n      for (var key in rgb_values) {\n        if (rgb_values.hasOwnProperty(key)) {\n          for (var i = 0; i < 3; i++) {\n            rgb_values[key][i] += rgb_steps[key][i];\n          }\n        }\n      }\n\n      // generate CSS rgb values\n      var t_color1 = \"rgb(\" + (rgb_values.start[0] | 0) + \",\" + (rgb_values.start[1] | 0) + \",\" + (rgb_values.start[2] | 0) + \")\";\n      var t_color2 = \"rgb(\" + (rgb_values.stop[0] | 0) + \",\" + (rgb_values.stop[1] | 0) + \",\" + (rgb_values.stop[2] | 0) + \")\";\n\n      // has anything changed on this interation\n      if (t_color1 != color1 || t_color2 != color2) {\n\n        // update cols strings\n        color1 = t_color1;\n        color2 = t_color2;\n\n        // update DOM element style attribute\n        div_style.backgroundImage = \"-webkit-gradient(linear, left bottom, right top, from(\" + color1 + \"), to(\" + color2 + \"))\";\n        for (var i = 0; i < 4; i++) {\n          div_style.backgroundImage = prefixes[i] + \"linear-gradient(45deg, \" + color1 + \", \" + color2 + \")\";\n        }\n      }\n\n      // we did another step\n      steps_count++;\n\n      // did we do too many steps?\n      if (steps_count > steps_total) {\n        // reset steps count\n        steps_count = 0;\n        // set new indexs\n        currentIndex = set_next(currentIndex);\n        nextIndex = set_next(nextIndex);\n\n        if (that.isRunning === false) {\n          gradients[nextIndex] = { start: [0, 0, 0], stop: [0, 0, 0] };\n        }\n        // calc steps\n        calc_steps();\n      }\n\n      if (div_style.backgroundImage.indexOf(\"gradient\") != -1) {\n        window.requestAnimationFrame(updateGradient)\n      }\n    }\n\n    // initial step calc\n    calc_steps();\n\n    // go go go!\n    window.requestAnimationFrame(updateGradient);\n\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gradientConstructor);\n\n\n\n\n//# sourceURL=webpack:///./js/gradient/gradientConstructor.js?");

/***/ }),

/***/ "./js/gradient/gradientControls.js":
/*!*****************************************!*\
  !*** ./js/gradient/gradientControls.js ***!
  \*****************************************/
/*! exports provided: transitionToWebcam, handleKeywordFound, startGradient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transitionToWebcam\", function() { return transitionToWebcam; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleKeywordFound\", function() { return handleKeywordFound; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startGradient\", function() { return startGradient; });\n/* harmony import */ var _gradientConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradientConstructor */ \"./js/gradient/gradientConstructor.js\");\n/* harmony import */ var _popups_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popups/helpers */ \"./js/popups/helpers.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ \"./js/helpers.js\");\n\n\n\n\nconst background = document.querySelector('scroll-container');\nconst gradient = new _gradientConstructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"](background);\nconst yesPage = document.querySelector('#yes');\nconst webcamPage = document.querySelector('#webcam-page');\n\nfunction transitionToWebcam() {\n\tgradient.stop();\n\tyesPage.classList.add('off');\n\tsetTimeout(() => {\n\t\tObject(_popups_helpers__WEBPACK_IMPORTED_MODULE_1__[\"scrollToNextPage\"])('#webcam-page');\n\t\tsetTimeout(() => {\n\t\t\twebcamPage.classList.remove('off');\n\t\t}, 200)\n\t}, 8000)\n}\n\nfunction handleKeywordFound() {\n\tconst links = document.querySelectorAll('.next');\n\tlinks.forEach(link => {\n\t\tif (Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"isScrolledIntoView\"])(link)) {\n\t\t\t// go to there\n\t\t\tlink.click();\n\t\t}\n\t})\n}\n\nfunction startGradient() {\n\tgradient.start();\n}\n\n//# sourceURL=webpack:///./js/gradient/gradientControls.js?");

/***/ }),

/***/ "./js/helpers.js":
/*!***********************!*\
  !*** ./js/helpers.js ***!
  \***********************/
/*! exports provided: isScrolledIntoView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isScrolledIntoView\", function() { return isScrolledIntoView; });\n// https://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling\nfunction isScrolledIntoView(el) {\n\tvar rect = el.getBoundingClientRect();\n\tvar elemTop = rect.top;\n\tvar elemBottom = rect.bottom;\n\n\t// Only completely visible elements return true:\n\tvar isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);\n\t// Partially visible elements return true:\n\t//isVisible = elemTop < window.innerHeight && elemBottom >= 0;\n\treturn isVisible;\n}\n\n//# sourceURL=webpack:///./js/helpers.js?");

/***/ }),

/***/ "./js/popups/getCircleFramePopups.js":
/*!*******************************************!*\
  !*** ./js/popups/getCircleFramePopups.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./js/popups/helpers.js\");\n\n\nfunction circleFramePopups() {\n\n\tconst popups = [];\n\tconst radius = 40;\n\n\tfor (let i = 0; i < 2; i += .05) {\n\t\tconst x = 40 + Math.round(radius * Math.cos(i * Math.PI));\n\t\tconst y = 40 + Math.round(radius * Math.sin(i * Math.PI));\n\n\t\tconst popOptions = {\n\t\t\twidth: '20%',\n\t\t\theight: 'auto',\n\t\t\ttop: `${y}%`,\n\t\t\tleft: `${x}%`,\n\t\t\tright: 'auto',\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\tpopups.push(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getFullPagePop\"])());\n\n\treturn popups;\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (circleFramePopups);\n\n//# sourceURL=webpack:///./js/popups/getCircleFramePopups.js?");

/***/ }),

/***/ "./js/popups/getFullCoverPopups.js":
/*!*****************************************!*\
  !*** ./js/popups/getFullCoverPopups.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getFullCoverPopups() {\n\tconst popups = [];\n\tlet direction = true;\n\tlet j;\n\tfor (let i = -5; i < 100; i += 15) {\n\t\tdirection ? j = -5 : j = 95;\n\t\twhile (j > -10 && j < 100) {\n\t\t\tconst popOptions = {\n\t\t\t\twidth: `${20}%`,\n\t\t\t\theight: 'auto',\n\t\t\t\ttop: `${i}%`,\n\t\t\t\tleft: `${j}%`,\n\t\t\t\tright: 'auto'\n\t\t\t}\n\t\t\tpopups.push(popOptions);\n\t\t\tdirection ? j += 12 : j -= 12;\n\t\t}\n\t\tdirection = !direction;\n\t}\n\n\treturn popups;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getFullCoverPopups);\n\n//# sourceURL=webpack:///./js/popups/getFullCoverPopups.js?");

/***/ }),

/***/ "./js/popups/getPictureFramePopups.js":
/*!********************************************!*\
  !*** ./js/popups/getPictureFramePopups.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction getPictureFramePopups() {\n\n\tconst popups = [];\n\n\t// top\n\tfor (let i = -5; i < 100; i += 15) {\n\t\tconst popOptions = {\n\t\t\twidth: '20%',\n\t\t\theight: 'auto',\n\t\t\ttop: '-5%',\n\t\t\tleft: `${i}%`,\n\t\t\tright: 'auto',\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\t// right\n\tfor (let i = 10; i < 100; i += 15) {\n\t\tconst popOptions = {\n\t\t\twidth: 'auto',\n\t\t\theight: '20%',\n\t\t\ttop: `${i}%`,\n\t\t\tleft: '85%',\n\t\t\tright: 'auto',\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\t// bottom\n\tfor (let i = 85; i > 0; i -= 15) {\n\t\tconst popOptions = {\n\t\t\twidth: '20%',\n\t\t\theight: 'auto',\n\t\t\ttop: '85%',\n\t\t\tleft: `${i}%`,\n\t\t\tright: 'auto',\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\t// left\n\tfor (let i = 85; i > 0; i -= 15) {\n\t\tconst popOptions = {\n\t\t\twidth: 'auto',\n\t\t\theight: '20%',\n\t\t\ttop: `${i}%`,\n\t\t\tleft: 'auto',\n\t\t\tright: '85%',\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\treturn popups;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getPictureFramePopups);\n\n\n//# sourceURL=webpack:///./js/popups/getPictureFramePopups.js?");

/***/ }),

/***/ "./js/popups/getSquigglePopups.js":
/*!****************************************!*\
  !*** ./js/popups/getSquigglePopups.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getSquigglePopups() {\n\n\tconst popups = [];\n\n\tlet direction = true;\n\tlet j = 45;\n\tfor (let i = 0; i < 100; i += 2) {\n\t\tconst popOptions = {\n\t\t\twidth: '20%',\n\t\t\theight: 'auto',\n\t\t\ttop: `${j}%`,\n\t\t\tleft: `${i}%`,\n\t\t\tright: 'auto',\n\t\t}\n\t\tpopups.push(popOptions);\n\t\tdirection ? j -= 3 : j += 3;\n\t\tif (j > 52) {\n\t\t\tdirection = true;\n\t\t}\n\t\tif (j < 32) {\n\t\t\tdirection = false;\n\t\t}\n\t}\n\n\tfor (let i = 0; i < 100; i += 4) {\n\t\tconst popOptions = {\n\t\t\twidth: '20%',\n\t\t\ttop: `2%`,\n\t\t\tright: `${i}%`,\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\tfor (let i = 0; i < 100; i += 4) {\n\t\tconst popOptions = {\n\t\t\twidth: '20%',\n\t\t\tbottom: '2%',\n\t\t\tleft: `${i}%`,\n\t\t\tright: `auto`,\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\treturn popups;\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getSquigglePopups);\n\n//# sourceURL=webpack:///./js/popups/getSquigglePopups.js?");

/***/ }),

/***/ "./js/popups/getXFramePopups.js":
/*!**************************************!*\
  !*** ./js/popups/getXFramePopups.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getXFramePopups() {\n\n\tconst popups = [];\n\n\tfor (let i = 0; i < 100; i += 5) {\n\t\tconst popOptions = {\n\t\t\twidth: '20%',\n\t\t\theight: 'auto',\n\t\t\ttop: `${i}%`,\n\t\t\tleft: `${i}%`,\n\t\t\tright: 'auto',\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\tfor (let i = 100; i > 0; i -= 5) {\n\t\tconst popOptions = {\n\t\t\twidth: '20%',\n\t\t\theight: 'auto',\n\t\t\ttop: `${100 - i}%`,\n\t\t\tleft: `auto`,\n\t\t\tright: `${100 - i}%`,\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\treturn popups;\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getXFramePopups);\n\n//# sourceURL=webpack:///./js/popups/getXFramePopups.js?");

/***/ }),

/***/ "./js/popups/handlePopupClick.js":
/*!***************************************!*\
  !*** ./js/popups/handlePopupClick.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./js/popups/helpers.js\");\n/* harmony import */ var _getPictureFramePopups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPictureFramePopups */ \"./js/popups/getPictureFramePopups.js\");\n/* harmony import */ var _getFullCoverPopups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getFullCoverPopups */ \"./js/popups/getFullCoverPopups.js\");\n/* harmony import */ var _getCircleFramePopups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getCircleFramePopups */ \"./js/popups/getCircleFramePopups.js\");\n/* harmony import */ var _getXFramePopups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getXFramePopups */ \"./js/popups/getXFramePopups.js\");\n/* harmony import */ var _getSquigglePopups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getSquigglePopups */ \"./js/popups/getSquigglePopups.js\");\n\n\n\n\n\n\n\nlet lastPattern;\n\nfunction handlePopupClick(e) {\n\n\t// abort if link not clicked\n\tif (e.target.name !== 'trigger') return;\n\tthis.setAttribute('disabled', 'disabled');\n\te.preventDefault();\n\n\tconst container = this;\n\tconst scrollTarget = e.target.hash;\n\tconst pattern = container.dataset.pattern;\n\n\tif (lastPattern === pattern) return;\n\n\tlet popups;\n\n\tswitch (pattern) {\n\t\tcase 'picture-frame':\n\t\t\tpopups = Object(_getPictureFramePopups__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\t\t\tbreak;\n\t\tcase 'full-cover':\n\t\t\tpopups = Object(_getFullCoverPopups__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\t\t\tbreak;\n\t\tcase 'circle-frame':\n\t\t\tpopups = Object(_getCircleFramePopups__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\t\t\tbreak;\n\t\tcase 'x-frame':\n\t\t\tpopups = Object(_getXFramePopups__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\t\t\tbreak;\n\t\tcase 'squiggle':\n\t\t\tpopups = Object(_getSquigglePopups__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\t\t\tbreak;\n\t}\n\n\tlastPattern = pattern;\n\n\tObject(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"paintPopups\"])(container, popups, scrollTarget);\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handlePopupClick);\n\n//# sourceURL=webpack:///./js/popups/handlePopupClick.js?");

/***/ }),

/***/ "./js/popups/helpers.js":
/*!******************************!*\
  !*** ./js/popups/helpers.js ***!
  \******************************/
/*! exports provided: scrollToNextPage, getContainerWidthAndHeight, getImgSrc, insertRandomPopup, insertPlacedPopup, getFullPagePop, paintPopups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollToNextPage\", function() { return scrollToNextPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getContainerWidthAndHeight\", function() { return getContainerWidthAndHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getImgSrc\", function() { return getImgSrc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertRandomPopup\", function() { return insertRandomPopup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertPlacedPopup\", function() { return insertPlacedPopup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFullPagePop\", function() { return getFullPagePop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paintPopups\", function() { return paintPopups; });\nfunction scrollToNextPage(hash) {\n\treturn document.querySelector(hash).scrollIntoView();\n}\n\nfunction getContainerWidthAndHeight(container) {\n\tconst containerWidth = container.getBoundingClientRect().width;\n\tconst containerHeight = container.getBoundingClientRect().height;\n\treturn { containerWidth, containerHeight };\n}\n\nfunction getImgSrc() {\n\tconst num = Math.round(Math.random() * 149);\n\tif (num >= 99 && num <= 145) {\n\t\treturn `dist/images/${num}.gif`;\n\t} else {\n\t\treturn `dist/images/${num}.jpg`;\n\t}\n}\n\nfunction insertRandomPopup(node) {\n\tconst width = Math.round(Math.random() * 300 + 100);\n\tconst top = (node.getBoundingClientRect().height - width) * Math.random();\n\tconst left = (node.getBoundingClientRect().width - width) * Math.random();\n\tconst img = `<img src=\"${getImgSrc()}\" style=\"position: absolute; left: ${left}px; top: ${top}px; width: ${width}px;\"></img>`;\n\twindow.requestAnimationFrame(() => {\n\t\tnode.innerHTML += img;\n\t})\n}\n\nfunction insertPlacedPopup(node, popOptions) {\n\tlet { width, height, top, bottom, left, right } = popOptions;\n\tif (!width) width = 'auto';\n\tif (!height) height = 'auto';\n\tif (!top) top = 'auto';\n\tif (!bottom) bottom = 'auto';\n\tif (!left) left = 'auto';\n\tif (!right) right = 'auto';\n\tconst img = `<img src=\"${getImgSrc()}\" style=\"position: absolute; left: ${left}; right: ${right}; top: ${top}; bottom: ${bottom}; width: ${width}; height: ${height}\"></img>`;\n\twindow.requestAnimationFrame(() => {\n\t\tnode.innerHTML += img;\n\t})\n}\n\nfunction getFullPagePop() {\n\treturn {\n\t\twidth: '100%',\n\t\theight: '100%',\n\t\ttop: '0',\n\t\tleft: '0',\n\t\tright: 'auto',\n\t}\n}\n\nfunction paintPopups(container, popups, scrollTarget) {\n\tlet index = 0;\n\tconst interval = setInterval(() => {\n\t\tif (index == popups.length - 1) {\n\t\t\tclearInterval(interval);\n\t\t\tsetTimeout(() => {\n\t\t\t\tscrollToNextPage(scrollTarget);\n\t\t\t}, 1600)\n\t\t}\n\t\tinsertPlacedPopup(container, popups[index]);\n\t\tindex++;\n\t}, 50)\n}\n\n//# sourceURL=webpack:///./js/popups/helpers.js?");

/***/ }),

/***/ "./js/renderWebcam.js":
/*!****************************!*\
  !*** ./js/renderWebcam.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction renderWebcam(canvas) {\n\n\tconst video = document.createElement('video');\n\tconst ctx = canvas.getContext('2d');\n\n\tfunction getVideo() {\n\t\tnavigator.mediaDevices.getUserMedia({ video: true, audio: false })\n\t\t\t.then(localMediaStream => {\n\t\t\t\tvideo.srcObject = localMediaStream;\n\t\t\t\tvideo.play();\n\t\t\t})\n\t\t\t.catch(err => {\n\t\t\t\tconsole.error(`cannot get user video!`, err);\n\t\t\t});\n\t}\n\n\tfunction paintToCanvas() {\n\t\tconst width = video.videoWidth;\n\t\tconst height = video.videoHeight;\n\t\tcanvas.width = width;\n\t\tcanvas.height = height;\n\n\t\treturn setInterval(() => {\n\t\t\tctx.drawImage(video, 0, 0, width, height);\n\t\t\t// take the pixels out\n\t\t\tlet pixels = ctx.getImageData(0, 0, width, height);\n\t\t\t// mess with them\n\t\t\tpixels = rgb(pixels);\n\n\t\t\tctx.globalAlpha = 1;\n\n\t\t\t// put them back\n\t\t\tctx.putImageData(pixels, 0, 0);\n\t\t}, 16);\n\t}\n\n\tfunction rgb(pixels) {\n\t\tfor (let i = 0; i < pixels.data.length; i += 4) {\n\t\t\tpixels.data[i + 0] = pixels.data[i + 0] - 50; // RED\n\t\t\tpixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN\n\t\t\tpixels.data[i + 2] = pixels.data[i + 2] - 50; // Blue\n\t\t}\n\t\treturn pixels;\n\t}\n\n\tgetVideo();\n\n\tvideo.addEventListener('canplay', paintToCanvas);\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderWebcam);\n\n//# sourceURL=webpack:///./js/renderWebcam.js?");

/***/ }),

/***/ "./js/scripts.js":
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderWebcam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderWebcam */ \"./js/renderWebcam.js\");\n/* harmony import */ var _welcomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcomePage */ \"./js/welcomePage.js\");\n/* harmony import */ var _welcomePage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_welcomePage__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _startSpeechDetection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startSpeechDetection */ \"./js/startSpeechDetection.js\");\n/* harmony import */ var _popups_handlePopupClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popups/handlePopupClick */ \"./js/popups/handlePopupClick.js\");\n/* harmony import */ var _gradient_gradientControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gradient/gradientControls */ \"./js/gradient/gradientControls.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nconst popupTriggers = document.querySelectorAll('.trigger');\nconst yesBttns = document.querySelectorAll('.bttn--yes');\nconst webcamCanvas = document.getElementById('webcam-canvas');\n\npopupTriggers.forEach(trigger => trigger.addEventListener('click', _popups_handlePopupClick__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\nyesBttns.forEach(bttn => bttn.addEventListener('click', () => {\n\tObject(_renderWebcam__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(webcamCanvas);\n\tObject(_gradient_gradientControls__WEBPACK_IMPORTED_MODULE_4__[\"transitionToWebcam\"])();\n}));\nwindow.addEventListener('load', _gradient_gradientControls__WEBPACK_IMPORTED_MODULE_4__[\"startGradient\"]);\nwindow.addEventListener('load', () => Object(_startSpeechDetection__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_gradient_gradientControls__WEBPACK_IMPORTED_MODULE_4__[\"handleKeywordFound\"]));\n\n// where to scroll on default\n// setTimeout(() => {\n// \tdocument.getElementById('yes').scrollIntoView();\n// }, 300)\n\nconsole.log('hi!!');\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/scripts.js?");

/***/ }),

/***/ "./js/startSpeechDetection.js":
/*!************************************!*\
  !*** ./js/startSpeechDetection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst startSpeechDetection = (fn) => {\n\n\t// too remember last words on page\n\tlet lastWordsTimestamp = 0;\n\n\t// initiate speech recoginiation\n\twindow.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;\n\tconst recognition = new SpeechRecognition();\n\trecognition.interimResults = true;\n\n\tconsole.log('listening');\n\n\t// listen for incoming speech\n\trecognition.addEventListener('result', e => {\n\n\t\tconst transcript = Array.from(e.results)\n\t\t\t.map(result => {\n\t\t\t\tif (result[0].isFinal = true) return result[0];\n\t\t\t})\n\t\t\t.map(result => result.transcript)\n\t\t\t.join('')\n\t\t\t.toLowerCase();\n\n\t\t// return if it has been less than 2 seconds\n\t\tif (lastWordsTimestamp >= Date.now() - 3000) return;\n\n\t\t// return if no relavent keyword is found\n\t\tif (['yes', 'true', 'start', 'begin', 'again', 'next', 'really', 'oh', 'ok'].indexOf(transcript.toLowerCase()) === -1) return;\n\n\t\t// if keyword is found call the function that was passed in\n\t\tfn();\n\n\t\tlastWordsTimestamp = Date.now();\n\n\t});\n\n\t// start over at end\n\trecognition.addEventListener('end', recognition.start);\n\n\t// rollin'\n\trecognition.start();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (startSpeechDetection);\n\n//# sourceURL=webpack:///./js/startSpeechDetection.js?");

/***/ }),

/***/ "./js/welcomePage.js":
/*!***************************!*\
  !*** ./js/welcomePage.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const sadnessDotOnline = document.querySelector('.welcome--sadnessDotOnline');\nconst letters = sadnessDotOnline.querySelectorAll('span');\n\nfunction fadeIn(letters) {\n\tlet i = 0;\n\tconst interval = setInterval(() => {\n\t\tletters[i].classList.add('on');\n\t\ti++;\n\t\tif (i === letters.length - 5) wave(letters);\n\t\tif (i === letters.length) clearInterval(interval);\n\n\t}, 100)\n}\n\nfunction wave(letters) {\n\n\tfunction remove() {\n\t\tsetTimeout(() => {\n\t\t\tthis.classList.remove('up');\n\t\t}, 80)\n\t}\n\n\tlet i = 0;\n\tconst interval = setInterval(() => {\n\t\tif (!isAnyPartOfElementInViewport(sadnessDotOnline)) reset(letters);\n\t\tconst letter = letters[i];\n\t\tletter.classList.remove('up');\n\t\tletter.classList.add('up');\n\t\tletter.addEventListener('transitionend', remove);\n\t\ti++\n\t\tif (i === letters.length) i = 0;\n\t}, 120)\n}\n\nfunction reset(letters) {\n\tletters.forEach(letter => {\n\t\tletter.classList.remove('up');\n\t})\n}\n\nfunction isAnyPartOfElementInViewport(el) {\n\n\tconst rect = el.getBoundingClientRect();\n\tconst windowHeight = (window.innerHeight || document.documentElement.clientHeight);\n\tconst windowWidth = (window.innerWidth || document.documentElement.clientWidth);\n\n\t// http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap\n\tconst vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);\n\tconst horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);\n\n\treturn (vertInView && horInView);\n}\n\n// go\nfadeIn(letters)\n\n\n//# sourceURL=webpack:///./js/welcomePage.js?");

/***/ })

/******/ });