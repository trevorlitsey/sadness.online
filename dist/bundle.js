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

/***/ "./js/gradient.js":
/*!************************!*\
  !*** ./js/gradient.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// borrowed/stolen from https://codepen.io/13twelve/pen/xLoiH\n\n// target to give background to\nvar $div = document.querySelector('scroll-container');\n// rgb vals of the gradients\nvar gradients = [\n  { start: [30, 30, 30], stop: [40, 40, 40] },\n  { start: [10, 10, 10], stop: [60, 60, 60] },\n  { start: [30, 30, 30], stop: [40, 40, 40] },\n  { start: [60, 60, 60], stop: [20, 20, 20] }\n];\n// how long for each transition\nvar transition_time = 4;\n\n// internal type vars\nlet stop = false;\nvar currentIndex = 0; // where we are in the gradients array\nvar nextIndex = 1; // what index of the gradients array is next\nvar steps_count = 0; // steps counter\nvar steps_total = Math.round(transition_time * 60); // total amount of steps\nvar rgb_steps = {\n  start: [0, 0, 0],\n  stop: [0, 0, 0]\n}; // how much to alter each rgb value\nvar rgb_values = {\n  start: [0, 0, 0],\n  stop: [0, 0, 0]\n}; // the current rgb values, gets altered by rgb steps on each interval\nvar prefixes = [\"-webkit-\", \"-moz-\", \"-o-\", \"-ms-\", \"\"]; // for looping through adding styles\nvar div_style = $div.style; // short cut to actually adding styles\nvar color1, color2;\n\n// sets next current and next index of gradients array\nfunction set_next(num) {\n  return (num + 1 < gradients.length) ? num + 1 : 0;\n}\n\n// work out how big each rgb step is\nfunction calc_step_size(a, b) {\n  return (a - b) / steps_total;\n}\n\n// populate the rgb_values and rgb_steps objects\nfunction calc_steps() {\n  for (var key in rgb_values) {\n    if (rgb_values.hasOwnProperty(key)) {\n      for (var i = 0; i < 3; i++) {\n        rgb_values[key][i] = gradients[currentIndex][key][i];\n        rgb_steps[key][i] = calc_step_size(gradients[nextIndex][key][i], rgb_values[key][i]);\n      }\n    }\n  }\n}\n\n// update current rgb vals, update DOM element with new CSS background\nfunction updateGradient() {\n  // update the current rgb vals\n  for (var key in rgb_values) {\n    if (rgb_values.hasOwnProperty(key)) {\n      for (var i = 0; i < 3; i++) {\n        rgb_values[key][i] += rgb_steps[key][i];\n      }\n    }\n  }\n\n  // generate CSS rgb values\n  var t_color1 = \"rgb(\" + (rgb_values.start[0] | 0) + \",\" + (rgb_values.start[1] | 0) + \",\" + (rgb_values.start[2] | 0) + \")\";\n  var t_color2 = \"rgb(\" + (rgb_values.stop[0] | 0) + \",\" + (rgb_values.stop[1] | 0) + \",\" + (rgb_values.stop[2] | 0) + \")\";\n\n  // has anything changed on this interation\n  if (t_color1 != color1 || t_color2 != color2) {\n\n    // update cols strings\n    color1 = t_color1;\n    color2 = t_color2;\n\n    // update DOM element style attribute\n    div_style.backgroundImage = \"-webkit-gradient(linear, left bottom, right top, from(\" + color1 + \"), to(\" + color2 + \"))\";\n    for (var i = 0; i < 4; i++) {\n      div_style.backgroundImage = prefixes[i] + \"linear-gradient(45deg, \" + color1 + \", \" + color2 + \")\";\n    }\n  }\n\n  // we did another step\n  steps_count++;\n  // did we do too many steps?\n  if (steps_count > steps_total) {\n    // reset steps count\n    steps_count = 0;\n    // set new indexs\n    currentIndex = set_next(currentIndex);\n    nextIndex = set_next(nextIndex);\n    if (stop === true) {\n      gradients[nextIndex] = { start: [0, 0, 0], stop: [0, 0, 0] };\n    }\n    // calc steps\n    calc_steps();\n  }\n\n  if (div_style.backgroundImage.indexOf(\"gradient\") != -1) {\n    window.requestAnimationFrame(updateGradient)\n  }\n}\n\n// initial step calc\ncalc_steps();\n\n// go go go!\nwindow.requestAnimationFrame(updateGradient);\n\n\n\nconst yesBttn = document.querySelector('.bttn--yes');\n\nfunction colorIsBlack(grad) {\n  const black = [0, 0, 0];\n  if (grad.start[0] !== 0 || grad.start[1] !== 0 || grad.start[2] !== 0\n    || grad.stop[0] !== 0 || grad.stop[1] !== 0 || grad.stop[2] !== 0) {\n    return false;\n  } else {\n    return true;\n  }\n}\n\nyesBttn.addEventListener('click', function () {\n  stop = true;\n  document.querySelector('#yes').style.opacity = '0';\n})\n\n\n\n//# sourceURL=webpack:///./js/gradient.js?");

/***/ }),

/***/ "./js/popup.js":
/*!*********************!*\
  !*** ./js/popup.js ***!
  \*********************/
/*! exports provided: generateRandomPopups, fullCoverPopups, pictureFramePopups, circleFramePopups, xFramePopups, squigglePopups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateRandomPopups\", function() { return generateRandomPopups; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fullCoverPopups\", function() { return fullCoverPopups; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pictureFramePopups\", function() { return pictureFramePopups; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"circleFramePopups\", function() { return circleFramePopups; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"xFramePopups\", function() { return xFramePopups; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"squigglePopups\", function() { return squigglePopups; });\nfunction scrollToNextPage(hash) {\n\treturn document.querySelector(hash).scrollIntoView();\n}\n\nfunction getContainerWidthAndHeight(container) {\n\tconst containerWidth = container.getBoundingClientRect().width;\n\tconst containerHeight = container.getBoundingClientRect().height;\n\treturn { containerWidth, containerHeight };\n}\n\nfunction getImgSrc() {\n\tconst num = Math.round(Math.random() * 149);\n\tif (num >= 99 && num <= 145) {\n\t\treturn `images/${num}.gif`;\n\t} else {\n\t\treturn `images/${num}.jpg`;\n\t}\n}\n\nfunction insertRandomPopup(node) {\n\tconst width = Math.round(Math.random() * 300 + 100);\n\tconst top = (node.getBoundingClientRect().height - width) * Math.random();\n\tconst left = (node.getBoundingClientRect().width - width) * Math.random();\n\tconst img = `<img src=\"${getImgSrc()}\" style=\"position: absolute; left: ${left}px; top: ${top}px; width: ${width}px;\"></img>`;\n\tnode.innerHTML += img\n}\n\nfunction insertPlacedPopup(node, popOptions) {\n\tconst { width, height, top, left, right } = popOptions;\n\tconst img = `<img src=\"${getImgSrc()}\" style=\"position: absolute; left: ${left}; right: ${right}; top: ${top}; width: ${width}; height: ${height}\"></img>`;\n\tnode.innerHTML += img\n}\n\nfunction paintPopups(container, popups, scrollTarget) {\n\tlet index = 0;\n\tconst interval = setInterval(() => {\n\t\tif (index == popups.length - 1) {\n\t\t\tclearInterval(interval);\n\t\t\tsetTimeout(() => {\n\t\t\t\tscrollToNextPage(scrollTarget);\n\t\t\t}, 1600)\n\t\t}\n\t\tinsertPlacedPopup(container, popups[index]);\n\t\tindex++;\n\t}, 50)\n}\n\nfunction getFullPagePop() {\n\treturn {\n\t\twidth: '100%',\n\t\theight: '100%',\n\t\ttop: '0',\n\t\tleft: '0',\n\t\tright: 'auto',\n\t}\n}\n\nfunction generateRandomPopups(e) {\n\n\t// abort if link not clicked\n\tif (e.target.name !== 'trigger') return;\n\n\te.preventDefault();\n\n\tconst container = this;\n\tconst popNum = Number(container.dataset.pop);\n\n\tlet i = 0;\n\tconst interval = setInterval(() => {\n\t\tinsertRandomPopup(container);\n\t\ti++;\n\t\tif (i === popNum) {\n\t\t\tclearInterval(interval);\n\t\t\tfullPagePop(container);\n\t\t\tsetTimeout(() => {\n\t\t\t\tscrollToNextPage(e.target.hash);\n\t\t\t}, 2000)\n\t\t}\n\t}, 100)\n}\n\nfunction fullCoverPopups(e) {\n\te.preventDefault();\n\n\tconst container = this;\n\tconst scrollTarget = e.target.hash;\n\n\tconst popups = [];\n\tlet direction = true;\n\tlet j;\n\tfor (let i = -5; i < 100; i += 15) {\n\t\tdirection ? j = -5 : j = 95;\n\t\twhile (j > -10 && j < 100) {\n\t\t\tpopOptions = {\n\t\t\t\twidth: `${20}%`,\n\t\t\t\theight: 'auto',\n\t\t\t\ttop: `${i}%`,\n\t\t\t\tleft: `${j}%`,\n\t\t\t\tright: 'auto'\n\t\t\t}\n\t\t\tpopups.push(popOptions);\n\t\t\tdirection ? j += 12 : j -= 12;\n\t\t}\n\t\tdirection = !direction;\n\t}\n\n\t// do work\n\tpaintPopups(container, popups, scrollTarget);\n}\n\nfunction pictureFramePopups(e) {\n\n\tconsole.log('picture frame!');\n\n\t// abort if link not clicked\n\tif (e.target.name !== 'trigger') return;\n\tthis.disabled = true;\n\n\te.preventDefault();\n\n\tconst container = this;\n\tconst scrollTarget = e.target.hash;\n\n\tconst popups = [];\n\n\t// top\n\tfor (let i = -5; i < 100; i += 15) {\n\t\tpopOptions = {\n\t\t\twidth: '20%',\n\t\t\theight: 'auto',\n\t\t\ttop: '-5%',\n\t\t\tleft: `${i}%`,\n\t\t\tright: 'auto',\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\t// right\n\tfor (let i = 10; i < 100; i += 15) {\n\t\tpopOptions = {\n\t\t\twidth: 'auto',\n\t\t\theight: '20%',\n\t\t\ttop: `${i}%`,\n\t\t\tleft: '85%',\n\t\t\tright: 'auto',\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\t// bottom\n\tfor (let i = 85; i > 0; i -= 15) {\n\t\tpopOptions = {\n\t\t\twidth: '20%',\n\t\t\theight: 'auto',\n\t\t\ttop: '85%',\n\t\t\tleft: `${i}%`,\n\t\t\tright: 'auto',\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\t// left\n\tfor (let i = 85; i > 0; i -= 15) {\n\t\tpopOptions = {\n\t\t\twidth: 'auto',\n\t\t\theight: '20%',\n\t\t\ttop: `${i}%`,\n\t\t\tleft: 'auto',\n\t\t\tright: '85%',\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\tpaintPopups(container, popups, scrollTarget);\n}\n\n\nfunction circleFramePopups(e) {\n\n\t// abort if link not clicked\n\tif (e.target.name !== 'trigger') return;\n\n\te.preventDefault();\n\n\tconst container = this;\n\tconst scrollTarget = e.target.hash;\n\n\tconst popups = [];\n\tconst radius = 40;\n\n\tfor (let i = 0; i < 2; i += .05) {\n\t\tconst x = 40 + Math.round(radius * Math.cos(i * Math.PI));\n\t\tconst y = 40 + Math.round(radius * Math.sin(i * Math.PI));\n\n\t\tconst popOptions = {\n\t\t\twidth: '20%',\n\t\t\theight: 'auto',\n\t\t\ttop: `${y}%`,\n\t\t\tleft: `${x}%`,\n\t\t\tright: 'auto',\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\tpopups.push(getFullPagePop());\n\n\tpaintPopups(container, popups, scrollTarget);\n\n}\n\nfunction xFramePopups(e) {\n\n\t// abort if link not clicked\n\tif (e.target.name !== 'trigger') return;\n\n\te.preventDefault();\n\n\tconst container = this;\n\tconst scrollTarget = e.target.hash;\n\n\tconst popups = [];\n\n\tfor (let i = 0; i < 100; i += 5) {\n\t\tconst popOptions = {\n\t\t\twidth: '20%',\n\t\t\theight: 'auto',\n\t\t\ttop: `${i}%`,\n\t\t\tleft: `${i}%`,\n\t\t\tright: 'auto',\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\tfor (let i = 100; i > 0; i -= 5) {\n\t\tconst popOptions = {\n\t\t\twidth: '20%',\n\t\t\theight: 'auto',\n\t\t\ttop: `${100 - i}%`,\n\t\t\tleft: `auto`,\n\t\t\tright: `${100 - i}%`,\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\tpaintPopups(container, popups, scrollTarget);\n\n}\n\nfunction squigglePopups(e) {\n\n\t// abort if link not clicked\n\tif (e.target.name !== 'trigger') return;\n\n\te.preventDefault();\n\n\tconst container = this;\n\tconst scrollTarget = e.target.hash;\n\n\tconst popups = [];\n\n\tlet direction = true;\n\tlet j = 50;\n\tfor (let i = 0; i < 100; i += 2) {\n\t\tconst popOptions = {\n\t\t\twidth: '20%',\n\t\t\theight: 'auto',\n\t\t\ttop: `${j}%`,\n\t\t\tleft: `${i}%`,\n\t\t\tright: 'auto',\n\t\t}\n\t\tpopups.push(popOptions);\n\t\tdirection ? j -= 3 : j += 3;\n\t\tif (j > 60) {\n\t\t\tdirection = true;\n\t\t}\n\t\tif (j < 40) {\n\t\t\tdirection = false;\n\t\t}\n\t}\n\n\tfor (let i = 0; i < 100; i += 4) {\n\t\tconst popOptions = {\n\t\t\twidth: '20%',\n\t\t\theight: 'auto',\n\t\t\ttop: `10%`,\n\t\t\tleft: 'auto',\n\t\t\tright: `${i}%`,\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\tfor (let i = 0; i < 100; i += 4) {\n\t\tconst popOptions = {\n\t\t\twidth: '20%',\n\t\t\theight: 'auto',\n\t\t\ttop: `80%`,\n\t\t\tleft: `${i}%`,\n\t\t\tright: `auto`,\n\t\t}\n\t\tpopups.push(popOptions);\n\t}\n\n\tpaintPopups(container, popups, scrollTarget);\n\n}\n\n//# sourceURL=webpack:///./js/popup.js?");

/***/ }),

/***/ "./js/scripts.js":
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradient */ \"./js/gradient.js\");\n/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gradient__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _webcam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webcam */ \"./js/webcam.js\");\n/* harmony import */ var _webcam__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_webcam__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _welcomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcomePage */ \"./js/welcomePage.js\");\n/* harmony import */ var _welcomePage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_welcomePage__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup */ \"./js/popup.js\");\n\n\n\n\n\nconst randomTriggers = document.querySelectorAll('.trigger--random');\nconst fullCoverTriggers = document.querySelectorAll('.trigger--full-cover');\nconst pictureFrameTriggers = document.querySelectorAll('.trigger--picture-frame');\nconst circleFrameTriggers = document.querySelectorAll('.trigger--circle-frame');\nconst xFrameTriggers = document.querySelectorAll('.trigger--x-frame');\nconst squiggleTriggers = document.querySelectorAll('.trigger--squiggle');\n\nrandomTriggers.forEach(trigger => trigger.addEventListener('click', _popup__WEBPACK_IMPORTED_MODULE_3__[\"generateRandomPopups\"]));\nfullCoverTriggers.forEach(trigger => trigger.addEventListener('click', _popup__WEBPACK_IMPORTED_MODULE_3__[\"fullCoverPopups\"]));\npictureFrameTriggers.forEach(trigger => trigger.addEventListener('click', _popup__WEBPACK_IMPORTED_MODULE_3__[\"pictureFramePopups\"]));\ncircleFrameTriggers.forEach(trigger => trigger.addEventListener('click', _popup__WEBPACK_IMPORTED_MODULE_3__[\"circleFramePopups\"]));\nxFrameTriggers.forEach(trigger => trigger.addEventListener('click', _popup__WEBPACK_IMPORTED_MODULE_3__[\"xFramePopups\"]));\nsquiggleTriggers.forEach(trigger => trigger.addEventListener('click', _popup__WEBPACK_IMPORTED_MODULE_3__[\"squigglePopups\"]));\n\n// where to scroll on default\n// setTimeout(() => {\n// \tdocument.getElementById('keep-going').scrollIntoView();\n// }, 300)\n\n\n//# sourceURL=webpack:///./js/scripts.js?");

/***/ }),

/***/ "./js/webcam.js":
/*!**********************!*\
  !*** ./js/webcam.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function renderWebCam(canvas) {\n\n\tconst video = document.createElement('video');\n\tconst ctx = canvas.getContext('2d');\n\n\tfunction getVideo() {\n\t\tnavigator.mediaDevices.getUserMedia({ video: true, audio: false })\n\t\t\t.then(localMediaStream => {\n\t\t\t\tvideo.src = window.URL.createObjectURL(localMediaStream);\n\t\t\t\tvideo.play();\n\t\t\t})\n\t\t\t.catch(err => {\n\t\t\t\tconsole.error(`cannot get user video!`, err);\n\t\t\t});\n\t}\n\n\tfunction paintToCanvas() {\n\t\tconst width = video.videoWidth;\n\t\tconst height = video.videoHeight;\n\t\tcanvas.width = width;\n\t\tcanvas.height = height;\n\n\t\treturn setInterval(() => {\n\t\t\tctx.drawImage(video, 0, 0, width, height);\n\t\t\t// take the pixels out\n\t\t\tlet pixels = ctx.getImageData(0, 0, width, height);\n\t\t\t// mess with them\n\t\t\tpixels = rgb(pixels);\n\n\t\t\tctx.globalAlpha = 1;\n\n\t\t\t// put them back\n\t\t\tctx.putImageData(pixels, 0, 0);\n\t\t}, 16);\n\t}\n\n\tfunction rgb(pixels) {\n\t\tfor (let i = 0; i < pixels.data.length; i += 4) {\n\t\t\tpixels.data[i + 0] = pixels.data[i + 0] - 50; // RED\n\t\t\tpixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN\n\t\t\tpixels.data[i + 2] = pixels.data[i + 2] - 50; // Blue\n\t\t}\n\t\treturn pixels;\n\t}\n\n\tgetVideo();\n\n\tvideo.addEventListener('canplay', paintToCanvas);\n\n}\n\nconst webcamCanvas = document.getElementById('webcam');\n\nrenderWebCam(webcamCanvas);\n\n//# sourceURL=webpack:///./js/webcam.js?");

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