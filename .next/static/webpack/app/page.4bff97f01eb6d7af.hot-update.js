"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/BlogPostRow/BlogRow.tsx":
/*!************************************************!*\
  !*** ./src/components/BlogPostRow/BlogRow.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-helpers-nextjs */ \"(app-pages-browser)/./node_modules/@supabase/auth-helpers-nextjs/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst cards = [\n    {\n        category: \"Reliable Schemas\",\n        title: \"What Zombies Can Teach You About Food\",\n        imageUrl: \"https://source.unsplash.com/Lki74Jj7H-U/400x300\",\n        description: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi aperiam, amet cupiditate?\"\n    },\n    {\n        category: \"Client-based Adoption\",\n        title: \"Old School Art\",\n        imageUrl: \"https://source.unsplash.com/L9_6GOv40_E/400x300\",\n        description: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus.\"\n    },\n    {\n        category: \"Intellectual Capital\",\n        title: \"5 Things To Do About Rain\",\n        imageUrl: \"https://source.unsplash.com/7JX0-bfiuxQ/400x300\",\n        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.\"\n    }\n];\nconst getData = async ()=>{\n    const supabase = (0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__.createClientComponentClient)();\n    let { data, error } = await supabase.rpc(\"get_top_liked_posts\");\n    if (error) console.error(error);\n    return data;\n};\nconst BlogRow = async ()=>{\n    _s();\n    const [isData, setIsData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const data = await getData();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap items-center justify-between mb-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mr-10 text-2xl text-black font-bold leading-none md:text-2xl\",\n                        children: \"Continually Scale Results\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        className: \"block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600\",\n                        children: \"View Posts\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap -mx-4\",\n                children: data.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: post.imageURL,\n                                alt: \"Card img\",\n                                className: \"object-cover object-center w-full h-48\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-grow\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"triangle\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"#\",\n                                                        className: \"inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600\",\n                                                        children: post.category\n                                                    }, void 0, false, {\n                                                        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"#\",\n                                                        className: \"block mb-4 text-2xl font-bold text-black leading-tight hover:underline hover:text-blue-600\",\n                                                        children: post.title\n                                                    }, void 0, false, {\n                                                        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"mb-4\",\n                                                        children: post.description\n                                                    }, void 0, false, {\n                                                        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"#\",\n                                                    className: \"inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600\",\n                                                    children: \"Read More\"\n                                                }, void 0, false, {\n                                                    fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, post.post_id, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BlogRow, \"88yGZcOsRX8w56TKo5pJLw+kyWk=\");\n_c = BlogRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogRow);\nvar _c;\n$RefreshReg$(_c, \"BlogRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Jsb2dQb3N0Um93L0Jsb2dSb3cudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBRWlDO0FBQ2xEO0FBa0IxQixNQUFNRyxRQUFnQjtJQUNwQjtRQUNFQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUFhO0lBQ2Y7SUFDQTtRQUNFSCxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUFhO0lBQ2Y7SUFDQTtRQUNFSCxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUFhO0lBQ2Y7Q0FDRDtBQUNELE1BQU1DLFVBQVU7SUFDZCxNQUFNQyxXQUFXUiwwRkFBMkJBO0lBQzVDLElBQUksRUFBRVMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNRixTQUFTRyxHQUFHLENBQUM7SUFDekMsSUFBSUQsT0FBT0UsUUFBUUYsS0FBSyxDQUFDQTtJQUN6QixPQUFPRDtBQUNUO0FBRUEsTUFBTUksVUFBb0I7O0lBQ3hCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHaEIsK0NBQVFBLENBQWM7SUFDbEQsTUFBTVUsT0FBTyxNQUFNRjtJQUNuQixxQkFDRSw4REFBQ1M7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFHRixXQUFVO2tDQUErRDs7Ozs7O2tDQUc3RSw4REFBQ0c7d0JBQUVDLE1BQUs7d0JBQUlKLFdBQVU7a0NBQWlIOzs7Ozs7Ozs7Ozs7MEJBSXpJLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWlIsS0FBS2EsR0FBRyxDQUFDLENBQUNDLHFCQUNULDhEQUFDTDt3QkFBdUJELFdBQVU7OzBDQUNoQyw4REFBQ087Z0NBQUlDLEtBQUtGLEtBQUtHLFFBQVE7Z0NBQUVDLEtBQUk7Z0NBQVdWLFdBQVU7Ozs7OzswQ0FDbEQsOERBQUNDO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ0M7d0NBQUlELFdBQVU7Ozs7OztrREFDZiw4REFBQ0M7d0NBQUlELFdBQVU7OzBEQUNiLDhEQUFDQzs7a0VBQ0MsOERBQUNFO3dEQUFFQyxNQUFLO3dEQUFJSixXQUFVO2tFQUFpR00sS0FBS3BCLFFBQVE7Ozs7OztrRUFDcEksOERBQUNpQjt3REFBRUMsTUFBSzt3REFBSUosV0FBVTtrRUFBOEZNLEtBQUtuQixLQUFLOzs7Ozs7a0VBQzlILDhEQUFDd0I7d0RBQUVYLFdBQVU7a0VBQVFNLEtBQUtqQixXQUFXOzs7Ozs7Ozs7Ozs7MERBRXZDLDhEQUFDWTswREFDQyw0RUFBQ0U7b0RBQUVDLE1BQUs7b0RBQUlKLFdBQVU7OERBQXdIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBWDVJTSxLQUFLTSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7O0FBb0JoQztHQW5DTWhCO0tBQUFBO0FBcUNOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Jsb2dQb3N0Um93L0Jsb2dSb3cudHN4PzVhNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tICdAL2FwcC9saWIvc3VwYWJhc2UnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50Q29tcG9uZW50Q2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL2F1dGgtaGVscGVycy1uZXh0anMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIENhcmQge1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBpbWFnZVVybDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuaW50ZXJmYWNlIFBvc3Qge1xuICAvLyBEZWZpbmUgdGhlIHN0cnVjdHVyZSBvZiBhIFBvc3Qgcm93XG4gIHBvc3RfaWQ6IHN0cmluZztcbiAgcG9zdF9jb250ZW50OiBzdHJpbmc7XG4gIGltYWdlVVJMOnN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbn1cblxuY29uc3QgY2FyZHM6IENhcmRbXSA9IFtcbiAge1xuICAgIGNhdGVnb3J5OiAnUmVsaWFibGUgU2NoZW1hcycsXG4gICAgdGl0bGU6ICdXaGF0IFpvbWJpZXMgQ2FuIFRlYWNoIFlvdSBBYm91dCBGb29kJyxcbiAgICBpbWFnZVVybDogJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9Ma2k3NEpqN0gtVS80MDB4MzAwJyxcbiAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOdWxsYSBkZWxlY3R1cyBjb3Jwb3JpcyBjb21tb2RpIGFwZXJpYW0sIGFtZXQgY3VwaWRpdGF0ZT8nLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdDbGllbnQtYmFzZWQgQWRvcHRpb24nLFxuICAgIHRpdGxlOiAnT2xkIFNjaG9vbCBBcnQnLFxuICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL0w5XzZHT3Y0MF9FLzQwMHgzMDAnLFxuICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE51bGxhIGRlbGVjdHVzLicsXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ0ludGVsbGVjdHVhbCBDYXBpdGFsJyxcbiAgICB0aXRsZTogJzUgVGhpbmdzIFRvIERvIEFib3V0IFJhaW4nLFxuICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tLzdKWDAtYmZpdXhRLzQwMHgzMDAnLFxuICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJhdGlvbmUsIG5lcXVlLiBFaXVzLCBlYSBwb3NzaW11cy4nLFxuICB9LFxuXTtcbmNvbnN0IGdldERhdGEgPSBhc3luYyAoKT0+ICB7XG4gIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50Q29tcG9uZW50Q2xpZW50PERhdGFiYXNlPigpXG4gIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5ycGMoJ2dldF90b3BfbGlrZWRfcG9zdHMnKVxuICBpZiAoZXJyb3IpIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gIHJldHVybiBkYXRhXG59XG5cbmNvbnN0IEJsb2dSb3c6IFJlYWN0LkZDID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBbaXNEYXRhLCBzZXRJc0RhdGFdID0gdXNlU3RhdGU8UG9zdCB8IG51bGw+KG51bGwpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKClcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG1heC13LTZ4bCBtaW4taC1zY3JlZW4gcHgtNCBweS0xMCBteC1hdXRvIHNtOnB4LTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi04XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtci0xMCB0ZXh0LTJ4bCB0ZXh0LWJsYWNrIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmUgbWQ6dGV4dC0yeGxcIj5cbiAgICAgICAgICBDb250aW51YWxseSBTY2FsZSBSZXN1bHRzXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcGItMSBtdC0yIHRleHQtYmFzZSBmb250LWJsYWNrIHRleHQtYmx1ZS02MDAgdXBwZXJjYXNlIGJvcmRlci1iIGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItYmx1ZS02MDBcIj5cbiAgICAgICAgICBWaWV3IFBvc3RzXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbXgtNFwiPlxuICAgICAgICB7ZGF0YS5tYXAoKHBvc3Q6UG9zdCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwb3N0LnBvc3RfaWR9IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1mdWxsIG1iLTggc206dy0xLzIgcHgtNCBsZzp3LTEvMyBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5pbWFnZVVSTH0gYWx0PVwiQ2FyZCBpbWdcIiBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciB3LWZ1bGwgaC00OFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ncm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpYW5nbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBweC00IHB5LTYgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCB0ZXh0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1iLTQgdGV4dC14cyBmb250LWJvbGQgY2FwaXRhbGl6ZSBib3JkZXItYi0yIGJvcmRlci1ibHVlLTYwMCBob3Zlcjp0ZXh0LWJsdWUtNjAwXCI+e3Bvc3QuY2F0ZWdvcnl9PC9hPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBtYi00IHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrIGxlYWRpbmctdGlnaHQgaG92ZXI6dW5kZXJsaW5lIGhvdmVyOnRleHQtYmx1ZS02MDBcIj57cG9zdC50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00XCI+e3Bvc3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBwYi0xIG10LTIgdGV4dC1iYXNlIGZvbnQtYmxhY2sgdGV4dC1ibHVlLTYwMCB1cHBlcmNhc2UgYm9yZGVyLWIgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1ibHVlLTYwMFwiPlJlYWQgTW9yZTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nUm93O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3JlYXRlQ2xpZW50Q29tcG9uZW50Q2xpZW50IiwiUmVhY3QiLCJjYXJkcyIsImNhdGVnb3J5IiwidGl0bGUiLCJpbWFnZVVybCIsImRlc2NyaXB0aW9uIiwiZ2V0RGF0YSIsInN1cGFiYXNlIiwiZGF0YSIsImVycm9yIiwicnBjIiwiY29uc29sZSIsIkJsb2dSb3ciLCJpc0RhdGEiLCJzZXRJc0RhdGEiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJhIiwiaHJlZiIsIm1hcCIsInBvc3QiLCJpbWciLCJzcmMiLCJpbWFnZVVSTCIsImFsdCIsInAiLCJwb3N0X2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/BlogPostRow/BlogRow.tsx\n"));

/***/ })

});