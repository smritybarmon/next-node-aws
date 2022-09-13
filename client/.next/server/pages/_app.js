/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n// Router.onRouterChangeStart = (url) => NProgress.start();\n// Router.onRouterChangeComplete = (url) => NProgress.done();\n// Router.onRouterChangeError = (url) => NProgress.done();\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const handleStart = (url)=>{\n            console.log(`Loading: ${url}`);\n            nprogress__WEBPACK_IMPORTED_MODULE_2___default().start();\n        };\n        const handleStop = ()=>{\n            nprogress__WEBPACK_IMPORTED_MODULE_2___default().done();\n        };\n        router.events.on(\"routeChangeStart\", handleStart);\n        router.events.on(\"routeChangeComplete\", handleStop);\n        router.events.on(\"routeChangeError\", handleStop);\n        return ()=>{\n            router.events.off(\"routeChangeStart\", handleStart);\n            router.events.off(\"routeChangeComplete\", handleStop);\n            router.events.off(\"routeChangeError\", handleStop);\n        };\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/sonjoy/Desktop/next-node-aws/client/pages/_app.js\",\n        lineNumber: 34,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNHO0FBQ0Q7QUFDTztBQUNOO0FBRWxDLDJEQUEyRDtBQUMzRCw2REFBNkQ7QUFDN0QsMERBQTBEO0FBRTFELFNBQVNHLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLE1BQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUUxQkMsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTUssV0FBVyxHQUFHLENBQUNDLEdBQUcsR0FBSztZQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUVGLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQlIsc0RBQWUsRUFBRSxDQUFDO1NBQ25CO1FBRUQsTUFBTVksVUFBVSxHQUFHLElBQU07WUFDdkJaLHFEQUFjLEVBQUUsQ0FBQztTQUNsQjtRQUVETSxNQUFNLENBQUNRLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLGtCQUFrQixFQUFFUixXQUFXLENBQUMsQ0FBQztRQUNsREQsTUFBTSxDQUFDUSxNQUFNLENBQUNDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRUgsVUFBVSxDQUFDLENBQUM7UUFDcEROLE1BQU0sQ0FBQ1EsTUFBTSxDQUFDQyxFQUFFLENBQUMsa0JBQWtCLEVBQUVILFVBQVUsQ0FBQyxDQUFDO1FBRWpELE9BQU8sSUFBTTtZQUNYTixNQUFNLENBQUNRLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLGtCQUFrQixFQUFFVCxXQUFXLENBQUMsQ0FBQztZQUNuREQsTUFBTSxDQUFDUSxNQUFNLENBQUNFLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRUosVUFBVSxDQUFDLENBQUM7WUFDckROLE1BQU0sQ0FBQ1EsTUFBTSxDQUFDRSxHQUFHLENBQUMsa0JBQWtCLEVBQUVKLFVBQVUsQ0FBQyxDQUFDO1NBQ25ELENBQUM7S0FDSCxFQUFFO1FBQUNOLE1BQU07S0FBQyxDQUFDLENBQUM7SUFDYixxQkFBTyw4REFBQ0YsU0FBUztRQUFFLEdBQUdDLFNBQVM7Ozs7O1lBQUksQ0FBQztDQUNyQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW5vZGUtYXdzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XG5pbXBvcnQgXCJucHJvZ3Jlc3MvbnByb2dyZXNzLmNzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gUm91dGVyLm9uUm91dGVyQ2hhbmdlU3RhcnQgPSAodXJsKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKTtcbi8vIFJvdXRlci5vblJvdXRlckNoYW5nZUNvbXBsZXRlID0gKHVybCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcbi8vIFJvdXRlci5vblJvdXRlckNoYW5nZUVycm9yID0gKHVybCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU3RhcnQgPSAodXJsKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgTG9hZGluZzogJHt1cmx9YCk7XG4gICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcbiAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgfTtcblxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGhhbmRsZVN0YXJ0KTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVTdG9wKTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCBoYW5kbGVTdG9wKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlU3RhcnQpO1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZVN0b3ApO1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUVycm9yXCIsIGhhbmRsZVN0b3ApO1xuICAgIH07XG4gIH0sIFtyb3V0ZXJdKTtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIk5Qcm9ncmVzcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaGFuZGxlU3RhcnQiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJoYW5kbGVTdG9wIiwiZG9uZSIsImV2ZW50cyIsIm9uIiwib2ZmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();