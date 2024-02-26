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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-helpers-nextjs */ \"(app-pages-browser)/./node_modules/@supabase/auth-helpers-nextjs/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst cards = [\n    {\n        category: \"Reliable Schemas\",\n        title: \"What Zombies Can Teach You About Food\",\n        imageUrl: \"https://source.unsplash.com/Lki74Jj7H-U/400x300\",\n        description: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi aperiam, amet cupiditate?\"\n    },\n    {\n        category: \"Client-based Adoption\",\n        title: \"Old School Art\",\n        imageUrl: \"https://source.unsplash.com/L9_6GOv40_E/400x300\",\n        description: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus.\"\n    },\n    {\n        category: \"Intellectual Capital\",\n        title: \"5 Things To Do About Rain\",\n        imageUrl: \"https://source.unsplash.com/7JX0-bfiuxQ/400x300\",\n        description: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.\"\n    }\n];\nconst getData = async ()=>{\n    const supabase = (0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__.createClientComponentClient)();\n    let { data, error } = await supabase.rpc(\"get_top_liked_posts\");\n    if (error) console.error(error);\n    return data;\n};\nconst BlogRow = async ()=>{\n    _s();\n    const [isData, setIsData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const data = await getData();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsData(data);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap items-center justify-between mb-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mr-10 text-2xl text-black font-bold leading-none md:text-2xl\",\n                        children: \"Continually Scale Results\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        className: \"block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600\",\n                        children: \"View Posts\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap -mx-4\",\n                children: data.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: post.imageURL,\n                                alt: \"Card img\",\n                                className: \"object-cover object-center w-full h-48\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-grow\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"triangle\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"#\",\n                                                        className: \"inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600\",\n                                                        children: post.category\n                                                    }, void 0, false, {\n                                                        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"#\",\n                                                        className: \"block mb-4 text-2xl font-bold text-black leading-tight hover:underline hover:text-blue-600\",\n                                                        children: post.title\n                                                    }, void 0, false, {\n                                                        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"mb-4\",\n                                                        children: post.description\n                                                    }, void 0, false, {\n                                                        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"#\",\n                                                    className: \"inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600\",\n                                                    children: \"Read More\"\n                                                }, void 0, false, {\n                                                    fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, post.post_id, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Malindi_tours/src/components/BlogPostRow/BlogRow.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BlogRow, \"GXjiuzYWFk4FXPdUGKKL/Vqfh84=\");\n_c = BlogRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogRow);\nvar _c;\n$RefreshReg$(_c, \"BlogRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Jsb2dQb3N0Um93L0Jsb2dSb3cudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBRWlDO0FBQ2xEO0FBa0IxQixNQUFNSSxRQUFnQjtJQUNwQjtRQUNFQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUFhO0lBQ2Y7SUFDQTtRQUNFSCxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUFhO0lBQ2Y7SUFDQTtRQUNFSCxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUFhO0lBQ2Y7Q0FDRDtBQUNELE1BQU1DLFVBQVU7SUFDZCxNQUFNQyxXQUFXUiwwRkFBMkJBO0lBQzVDLElBQUksRUFBRVMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNRixTQUFTRyxHQUFHLENBQUM7SUFDekMsSUFBSUQsT0FBT0UsUUFBUUYsS0FBSyxDQUFDQTtJQUN6QixPQUFPRDtBQUNUO0FBRUEsTUFBTUksVUFBb0I7O0lBQ3hCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHakIsK0NBQVFBLENBQWlCO0lBQ3JELE1BQU1XLE9BQU8sTUFBTUY7SUFDbkJSLGdEQUFTQSxDQUFDO1FBQ1JnQixVQUFVTjtJQUNaLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDTztRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQStEOzs7Ozs7a0NBRzdFLDhEQUFDRzt3QkFBRUMsTUFBSzt3QkFBSUosV0FBVTtrQ0FBaUg7Ozs7Ozs7Ozs7OzswQkFJekksOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNaUixLQUFLYSxHQUFHLENBQUMsQ0FBQ0MscUJBQ1QsOERBQUNMO3dCQUF1QkQsV0FBVTs7MENBQ2hDLDhEQUFDTztnQ0FBSUMsS0FBS0YsS0FBS0csUUFBUTtnQ0FBRUMsS0FBSTtnQ0FBV1YsV0FBVTs7Ozs7OzBDQUNsRCw4REFBQ0M7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDQzt3Q0FBSUQsV0FBVTs7Ozs7O2tEQUNmLDhEQUFDQzt3Q0FBSUQsV0FBVTs7MERBQ2IsOERBQUNDOztrRUFDQyw4REFBQ0U7d0RBQUVDLE1BQUs7d0RBQUlKLFdBQVU7a0VBQWlHTSxLQUFLcEIsUUFBUTs7Ozs7O2tFQUNwSSw4REFBQ2lCO3dEQUFFQyxNQUFLO3dEQUFJSixXQUFVO2tFQUE4Rk0sS0FBS25CLEtBQUs7Ozs7OztrRUFDOUgsOERBQUN3Qjt3REFBRVgsV0FBVTtrRUFBUU0sS0FBS2pCLFdBQVc7Ozs7Ozs7Ozs7OzswREFFdkMsOERBQUNZOzBEQUNDLDRFQUFDRTtvREFBRUMsTUFBSztvREFBSUosV0FBVTs4REFBd0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFYNUlNLEtBQUtNLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQmhDO0dBdENNaEI7S0FBQUE7QUF3Q04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmxvZ1Bvc3RSb3cvQmxvZ1Jvdy50c3g/NWE1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gJ0AvYXBwL2xpYi9zdXBhYmFzZSc7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnRDb21wb25lbnRDbGllbnQgfSBmcm9tICdAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLW5leHRqcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgQ2FyZCB7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgUG9zdCB7XG4gIC8vIERlZmluZSB0aGUgc3RydWN0dXJlIG9mIGEgUG9zdCByb3dcbiAgcG9zdF9pZDogc3RyaW5nO1xuICBwb3N0X2NvbnRlbnQ6IHN0cmluZztcbiAgaW1hZ2VVUkw6c3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xufVxuXG5jb25zdCBjYXJkczogQ2FyZFtdID0gW1xuICB7XG4gICAgY2F0ZWdvcnk6ICdSZWxpYWJsZSBTY2hlbWFzJyxcbiAgICB0aXRsZTogJ1doYXQgWm9tYmllcyBDYW4gVGVhY2ggWW91IEFib3V0IEZvb2QnLFxuICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL0xraTc0Smo3SC1VLzQwMHgzMDAnLFxuICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE51bGxhIGRlbGVjdHVzIGNvcnBvcmlzIGNvbW1vZGkgYXBlcmlhbSwgYW1ldCBjdXBpZGl0YXRlPycsXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ0NsaWVudC1iYXNlZCBBZG9wdGlvbicsXG4gICAgdGl0bGU6ICdPbGQgU2Nob29sIEFydCcsXG4gICAgaW1hZ2VVcmw6ICdodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vTDlfNkdPdjQwX0UvNDAweDMwMCcsXG4gICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTnVsbGEgZGVsZWN0dXMuJyxcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnSW50ZWxsZWN0dWFsIENhcGl0YWwnLFxuICAgIHRpdGxlOiAnNSBUaGluZ3MgVG8gRG8gQWJvdXQgUmFpbicsXG4gICAgaW1hZ2VVcmw6ICdodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vN0pYMC1iZml1eFEvNDAweDMwMCcsXG4gICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZSwgbmVxdWUuIEVpdXMsIGVhIHBvc3NpbXVzLicsXG4gIH0sXG5dO1xuY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpPT4gIHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnRDb21wb25lbnRDbGllbnQ8RGF0YWJhc2U+KClcbiAgbGV0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnJwYygnZ2V0X3RvcF9saWtlZF9wb3N0cycpXG4gIGlmIChlcnJvcikgY29uc29sZS5lcnJvcihlcnJvcilcbiAgcmV0dXJuIGRhdGFcbn1cblxuY29uc3QgQmxvZ1JvdzogUmVhY3QuRkMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IFtpc0RhdGEsIHNldElzRGF0YV0gPSB1c2VTdGF0ZTwgUG9zdFtdIHwgbnVsbD4obnVsbClcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzRGF0YShkYXRhKVxuICB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG1heC13LTZ4bCBtaW4taC1zY3JlZW4gcHgtNCBweS0xMCBteC1hdXRvIHNtOnB4LTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi04XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtci0xMCB0ZXh0LTJ4bCB0ZXh0LWJsYWNrIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmUgbWQ6dGV4dC0yeGxcIj5cbiAgICAgICAgICBDb250aW51YWxseSBTY2FsZSBSZXN1bHRzXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcGItMSBtdC0yIHRleHQtYmFzZSBmb250LWJsYWNrIHRleHQtYmx1ZS02MDAgdXBwZXJjYXNlIGJvcmRlci1iIGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItYmx1ZS02MDBcIj5cbiAgICAgICAgICBWaWV3IFBvc3RzXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbXgtNFwiPlxuICAgICAgICB7ZGF0YS5tYXAoKHBvc3Q6UG9zdCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwb3N0LnBvc3RfaWR9IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1mdWxsIG1iLTggc206dy0xLzIgcHgtNCBsZzp3LTEvMyBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5pbWFnZVVSTH0gYWx0PVwiQ2FyZCBpbWdcIiBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciB3LWZ1bGwgaC00OFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ncm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpYW5nbGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBweC00IHB5LTYgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCB0ZXh0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1iLTQgdGV4dC14cyBmb250LWJvbGQgY2FwaXRhbGl6ZSBib3JkZXItYi0yIGJvcmRlci1ibHVlLTYwMCBob3Zlcjp0ZXh0LWJsdWUtNjAwXCI+e3Bvc3QuY2F0ZWdvcnl9PC9hPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBtYi00IHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrIGxlYWRpbmctdGlnaHQgaG92ZXI6dW5kZXJsaW5lIGhvdmVyOnRleHQtYmx1ZS02MDBcIj57cG9zdC50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00XCI+e3Bvc3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBwYi0xIG10LTIgdGV4dC1iYXNlIGZvbnQtYmxhY2sgdGV4dC1ibHVlLTYwMCB1cHBlcmNhc2UgYm9yZGVyLWIgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1ibHVlLTYwMFwiPlJlYWQgTW9yZTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nUm93O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlQ2xpZW50Q29tcG9uZW50Q2xpZW50IiwiUmVhY3QiLCJjYXJkcyIsImNhdGVnb3J5IiwidGl0bGUiLCJpbWFnZVVybCIsImRlc2NyaXB0aW9uIiwiZ2V0RGF0YSIsInN1cGFiYXNlIiwiZGF0YSIsImVycm9yIiwicnBjIiwiY29uc29sZSIsIkJsb2dSb3ciLCJpc0RhdGEiLCJzZXRJc0RhdGEiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJhIiwiaHJlZiIsIm1hcCIsInBvc3QiLCJpbWciLCJzcmMiLCJpbWFnZVVSTCIsImFsdCIsInAiLCJwb3N0X2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/BlogPostRow/BlogRow.tsx\n"));

/***/ })

});