"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blog/[category]/page",{

/***/ "(app-pages-browser)/./src/components/Category/PostCard.tsx":
/*!**********************************************!*\
  !*** ./src/components/Category/PostCard.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst PostCard = (param)=>{\n    let { title, date, imageUrl, description } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"#\",\n        className: \"max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                role: \"presentation\",\n                className: \"object-cover w-full h-44 dark:bg-gray-500 transition-transform duration-300 transform hover:scale-110\",\n                src: imageUrl\n            }, void 0, false, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Category/PostCard.tsx\",\n                lineNumber: 10,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-6 space-y-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-2xl font-semibold group-hover:underline group-focus:underline\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Category/PostCard.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-xs dark:text-gray-400\",\n                        children: date\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Category/PostCard.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Category/PostCard.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Category/PostCard.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Malindi_tours/src/components/Category/PostCard.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NhdGVnb3J5L1Bvc3RDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFPQSxNQUFNQSxXQUEyQjtRQUFDLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBRTt5QkFDcEUsOERBQUNDO1FBQUVDLE1BQUs7UUFBSUMsV0FBVTs7MEJBQ3JCLDhEQUFDQztnQkFDRUMsTUFBSztnQkFDTEYsV0FBVTtnQkFDVkcsS0FBS1A7Ozs7OzswQkFFUCw4REFBQ1E7Z0JBQUlKLFdBQVU7O2tDQUNiLDhEQUFDSzt3QkFBR0wsV0FBVTtrQ0FBc0VOOzs7Ozs7a0NBQ3BGLDhEQUFDWTt3QkFBS04sV0FBVTtrQ0FBOEJMOzs7Ozs7a0NBQzlDLDhEQUFDWTtrQ0FBR1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FWTko7QUFjTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeS9Qb3N0Q2FyZC50c3g/ZWNlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgUG9zdCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkYXRlOiBzdHJpbmc7XG4gICAgaW1hZ2VVcmw6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB9XG4gIFxuY29uc3QgUG9zdENhcmQ6IFJlYWN0LkZDPFBvc3Q+ID0gKHsgdGl0bGUsIGRhdGUsIGltYWdlVXJsLCBkZXNjcmlwdGlvbiB9KSA9PiAoXG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtYXgtdy1zbSBteC1hdXRvIGdyb3VwIGhvdmVyOm5vLXVuZGVybGluZSBmb2N1czpuby11bmRlcmxpbmUgZGFyazpiZy1ncmF5LTkwMFwiPlxuICAgICA8aW1nXG4gICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgdy1mdWxsIGgtNDQgZGFyazpiZy1ncmF5LTUwMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMFwiXG4gICAgICAgIHNyYz17aW1hZ2VVcmx9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgc3BhY2UteS0yXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIGdyb3VwLWhvdmVyOnVuZGVybGluZSBncm91cC1mb2N1czp1bmRlcmxpbmVcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBkYXJrOnRleHQtZ3JheS00MDBcIj57ZGF0ZX08L3NwYW4+XG4gICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2E+XG4gICk7XG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwibmFtZXMiOlsiUG9zdENhcmQiLCJ0aXRsZSIsImRhdGUiLCJpbWFnZVVybCIsImRlc2NyaXB0aW9uIiwiYSIsImhyZWYiLCJjbGFzc05hbWUiLCJpbWciLCJyb2xlIiwic3JjIiwiZGl2IiwiaDMiLCJzcGFuIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Category/PostCard.tsx\n"));

/***/ })

});