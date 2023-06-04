/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// JavaScript\r\nvar popup = document.getElementById(\"popup\");\r\nvar btn = document.getElementById(\"openPopupButton\");\r\nvar span = document.getElementById(\"closePopupButton\");\r\n\r\n// ボタンをクリックしたときにポップアップを開く\r\nbtn.onclick = function () {\r\n    popup.style.display = \"block\";\r\n}\r\n\r\n// × ボタンをクリックしたときにポップアップを閉じる\r\nspan.onclick = function () {\r\n    popup.style.display = \"none\";\r\n}\r\n\r\n// ユーザーがポップアップ外をクリックしたときにポップアップを閉じる\r\nwindow.onclick = function (event) {\r\n    if (event.target == popup) {\r\n        popup.style.display = \"none\";\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://popupjs/./src/components/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/components/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;