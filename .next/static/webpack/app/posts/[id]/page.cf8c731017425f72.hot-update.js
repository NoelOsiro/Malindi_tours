"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/posts/[id]/page",{

/***/ "(app-pages-browser)/./src/components/Post/MainContent.tsx":
/*!*********************************************!*\
  !*** ./src/components/Post/MainContent.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=format!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/format.mjs\");\n\n\nconst formatDate = (dateString)=>{\n    const date = new Date(dateString);\n    return (0,_barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, \"do MMMM yyyy\");\n};\nconst MainContent = (param)=>{\n    let { postData } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"col-span-2  p-6 relative md:mr-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: postData.images[0],\n                    className: \"cursor-pointer rounded-lg\",\n                    alt: \"placeholder tag\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold text-gray-800 py-6\",\n                children: postData.title\n            }, void 0, false, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-2 my-2 items-center gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-10 h-10 bg-gray-300 rounded-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: postData.profiles.avatar_url,\n                            className: \"w-10 h-10 rounded-full\",\n                            alt: \"avatar\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-black-500\",\n                        children: [\n                            \"By \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-800 font-bold cursor-pointer\",\n                                children: postData.profiles.username\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 14\n                            }, undefined),\n                            \" on \",\n                            formatDate(postData.created_at)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n                className: \"italic mt-4 font-semibold font-mono text-gray-800 border-l-4 border-gray-900 my-3 pl-2 ml-8\",\n                children: postData.description\n            }, void 0, false, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"mt-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl mb-2 font-semibold font-sans\",\n                                children: \"What is a for loop\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"my-4\",\n                                children: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente? Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"my-4\",\n                                children: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente? Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl mb-2 font-semibold font-serif\",\n                                children: \"When to Use  a for loop\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"my-4\",\n                                children: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente? Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"my-4\",\n                                children: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente? Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl mb-2 font-semibold font-serif\",\n                                children: \"How to Use  a for loop\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"my-4\",\n                                children: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente? Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"my-4\",\n                                children: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente? Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                id: \"comment\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        placeholder: \"your comment\",\n                        cols: 5,\n                        rows: 6,\n                        className: \"outline-none focus:outline-none text-xl h-20 bg-gray-100 rounded p-4 text-gray-800 font-semibold w-full\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"my-2 py-2 text-xl text-center w-full bg-blue-700 text-gray-50 hover:bg-blue-600 focus:outline-none rounded\",\n                        type: \"submit\",\n                        children: \"Comment\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MainContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainContent);\nvar _c;\n$RefreshReg$(_c, \"MainContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Bvc3QvTWFpbkNvbnRlbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFDa0M7QUFPbEMsTUFBTUMsYUFBYSxDQUFDQztJQUNoQixNQUFNQyxPQUFPLElBQUlDLEtBQUtGO0lBQ3RCLE9BQU9GLDhFQUFNQSxDQUFDRyxNQUFNO0FBQ3hCO0FBRUEsTUFBTUUsY0FBMEM7UUFBQyxFQUFFQyxRQUFRLEVBQUU7SUFDM0QscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQUlDLEtBQUtMLFNBQVNNLE1BQU0sQ0FBQyxFQUFFO29CQUFFSixXQUFVO29CQUE0QkssS0FBSTs7Ozs7Ozs7Ozs7MEJBRTFFLDhEQUFDQztnQkFBR04sV0FBVTswQkFBeUNGLFNBQVNTLEtBQUs7Ozs7OzswQkFDckUsOERBQUNOO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNFOzRCQUFJQyxLQUFLTCxTQUFTVSxRQUFRLENBQUNDLFVBQVU7NEJBQUVULFdBQVU7NEJBQXlCSyxLQUFJOzs7Ozs7Ozs7OztrQ0FFakYsOERBQUNKO3dCQUFJRCxXQUFVOzs0QkFBaUI7MENBQzNCLDhEQUFDVTtnQ0FBS1YsV0FBVTswQ0FBMENGLFNBQVNVLFFBQVEsQ0FBQ0csUUFBUTs7Ozs7OzRCQUFROzRCQUFLbEIsV0FBV0ssU0FBU2MsVUFBVTs7Ozs7Ozs7Ozs7OzswQkFHdEksOERBQUNDO2dCQUFXYixXQUFVOzBCQUNuQkYsU0FBU2dCLFdBQVc7Ozs7OzswQkFFdkIsOERBQUNDOztrQ0FDQyw4REFBQ0M7d0JBQVFoQixXQUFVOzswQ0FDakIsOERBQUNpQjtnQ0FBR2pCLFdBQVU7MENBQXdDOzs7Ozs7MENBRXRELDhEQUFDa0I7Z0NBQUVsQixXQUFVOzBDQUFPOzs7Ozs7MENBS3BCLDhEQUFDa0I7Z0NBQUVsQixXQUFVOzBDQUFPOzs7Ozs7Ozs7Ozs7a0NBTXRCLDhEQUFDZ0I7OzBDQUNDLDhEQUFDRztnQ0FBR25CLFdBQVU7MENBQXlDOzs7Ozs7MENBR3ZELDhEQUFDa0I7Z0NBQUVsQixXQUFVOzBDQUFPOzs7Ozs7MENBS3BCLDhEQUFDa0I7Z0NBQUVsQixXQUFVOzBDQUFPOzs7Ozs7Ozs7Ozs7a0NBTXRCLDhEQUFDZ0I7OzBDQUNDLDhEQUFDRztnQ0FBR25CLFdBQVU7MENBQXlDOzs7Ozs7MENBR3ZELDhEQUFDa0I7Z0NBQUVsQixXQUFVOzBDQUFPOzs7Ozs7MENBS3BCLDhEQUFDa0I7Z0NBQUVsQixXQUFVOzBDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT3hCLDhEQUFDb0I7Z0JBQUtDLElBQUc7O2tDQUNQLDhEQUFDQzt3QkFBU0MsYUFBWTt3QkFBZUMsTUFBTTt3QkFBR0MsTUFBTTt3QkFBR3pCLFdBQVU7Ozs7OztrQ0FDakUsOERBQUNDO3dCQUFJRCxXQUFVOzs7Ozs7a0NBSWYsOERBQUMwQjt3QkFBTzFCLFdBQVU7d0JBQTZHMkIsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJKO0tBMUVNOUI7QUE0RU4sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdC9NYWluQ29udGVudC50c3g/NmY5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJcG9zdERhdGEgfSBmcm9tIFwiQC9hcHAvcG9zdHMvW2lkXS9wYWdlXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmludGVyZmFjZSBNYWluQ29udGVudFByb3BzIHtcbiAgcG9zdERhdGE6IElwb3N0RGF0YVxufVxuXG5cbmNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZVN0cmluZzpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gICAgcmV0dXJuIGZvcm1hdChkYXRlLCAnZG8gTU1NTSB5eXl5Jyk7XG59O1xuXG5jb25zdCBNYWluQ29udGVudDogUmVhY3QuRkM8TWFpbkNvbnRlbnRQcm9wcz4gPSAoeyBwb3N0RGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29sLXNwYW4tMiAgcC02IHJlbGF0aXZlIG1kOm1yLTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8aW1nIHNyYz17cG9zdERhdGEuaW1hZ2VzWzBdfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnXCIgYWx0PVwicGxhY2Vob2xkZXIgdGFnXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIHB5LTZcIj57cG9zdERhdGEudGl0bGV9PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC0yIG15LTIgaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIGJnLWdyYXktMzAwIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtwb3N0RGF0YS5wcm9maWxlcy5hdmF0YXJfdXJsfSBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsXCIgYWx0PSdhdmF0YXInLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibGFjay01MDBcIj5cbiAgICAgICAgICBCeSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlclwiPntwb3N0RGF0YS5wcm9maWxlcy51c2VybmFtZX08L3NwYW4+IG9uIHtmb3JtYXREYXRlKHBvc3REYXRhLmNyZWF0ZWRfYXQpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJsb2NrcXVvdGUgY2xhc3NOYW1lPVwiaXRhbGljIG10LTQgZm9udC1zZW1pYm9sZCBmb250LW1vbm8gdGV4dC1ncmF5LTgwMCBib3JkZXItbC00IGJvcmRlci1ncmF5LTkwMCBteS0zIHBsLTIgbWwtOFwiPlxuICAgICAgICB7cG9zdERhdGEuZGVzY3JpcHRpb259XG4gICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi0yIGZvbnQtc2VtaWJvbGQgZm9udC1zYW5zXCI+V2hhdCBpcyBhIGZvciBsb29wPC9oMj5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTRcIj5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDb21tb2RpIHByb3ZpZGVudCBkb2xvcmUgdWxsYW0gZG9sb3JlbSBlYSBzZWQuIFF1aWJ1c2RhbSBoaWMgc2VxdWkgdmVyaXRhdGlzIG5pc2ksIG5lbW8gbGFib3J1bSB2b2x1cHRhdGlidXMgYXV0ZW0gbW9sbGl0aWEgc29sdXRhIHN1bnQuIERpZ25pc3NpbW9zLCByZXBlbGxhdCBzYXBpZW50ZT9cbiAgICAgICAgICAgIFVuZGUgc29sdXRhIGlzdGUgdGVuZXR1ciByZXBlbGxlbmR1cyBkb2xvciBhYiBkb2xvcmVtLCBuZXNjaXVudCB0ZW1wb3JlIHVsbGFtIGV2ZW5pZXQgb2ZmaWNpaXMgaXVyZSBzZWQuIEFwZXJpYW0gY3VscGEgdm9sdXB0YXRpYnVzLCBxdWFzIGl1c3RvIHF1aWJ1c2RhbSwgYW1ldCwgb21uaXMgcG9zc2ltdXMgZWFydW0gb3B0aW8gcmVwcmVoZW5kZXJpdCB2ZXJvIG5hbSBmdWdhLlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTRcIj5cblxuICAgICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIENvbW1vZGkgcHJvdmlkZW50IGRvbG9yZSB1bGxhbSBkb2xvcmVtIGVhIHNlZC4gUXVpYnVzZGFtIGhpYyBzZXF1aSB2ZXJpdGF0aXMgbmlzaSwgbmVtbyBsYWJvcnVtIHZvbHVwdGF0aWJ1cyBhdXRlbSBtb2xsaXRpYSBzb2x1dGEgc3VudC4gRGlnbmlzc2ltb3MsIHJlcGVsbGF0IHNhcGllbnRlP1xuICAgICAgICAgICAgVW5kZSBzb2x1dGEgaXN0ZSB0ZW5ldHVyIHJlcGVsbGVuZHVzIGRvbG9yIGFiIGRvbG9yZW0sIG5lc2NpdW50IHRlbXBvcmUgdWxsYW0gZXZlbmlldCBvZmZpY2lpcyBpdXJlIHNlZC4gQXBlcmlhbSBjdWxwYSB2b2x1cHRhdGlidXMsIHF1YXMgaXVzdG8gcXVpYnVzZGFtLCBhbWV0LCBvbW5pcyBwb3NzaW11cyBlYXJ1bSBvcHRpbyByZXByZWhlbmRlcml0IHZlcm8gbmFtIGZ1Z2EuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi0yIGZvbnQtc2VtaWJvbGQgZm9udC1zZXJpZlwiPldoZW4gdG8gVXNlICBhIGZvciBsb29wPC9oMz5cblxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktNFwiPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIENvbW1vZGkgcHJvdmlkZW50IGRvbG9yZSB1bGxhbSBkb2xvcmVtIGVhIHNlZC4gUXVpYnVzZGFtIGhpYyBzZXF1aSB2ZXJpdGF0aXMgbmlzaSwgbmVtbyBsYWJvcnVtIHZvbHVwdGF0aWJ1cyBhdXRlbSBtb2xsaXRpYSBzb2x1dGEgc3VudC4gRGlnbmlzc2ltb3MsIHJlcGVsbGF0IHNhcGllbnRlP1xuICAgICAgICAgICAgVW5kZSBzb2x1dGEgaXN0ZSB0ZW5ldHVyIHJlcGVsbGVuZHVzIGRvbG9yIGFiIGRvbG9yZW0sIG5lc2NpdW50IHRlbXBvcmUgdWxsYW0gZXZlbmlldCBvZmZpY2lpcyBpdXJlIHNlZC4gQXBlcmlhbSBjdWxwYSB2b2x1cHRhdGlidXMsIHF1YXMgaXVzdG8gcXVpYnVzZGFtLCBhbWV0LCBvbW5pcyBwb3NzaW11cyBlYXJ1bSBvcHRpbyByZXByZWhlbmRlcml0IHZlcm8gbmFtIGZ1Z2EuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktNFwiPlxuXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ29tbW9kaSBwcm92aWRlbnQgZG9sb3JlIHVsbGFtIGRvbG9yZW0gZWEgc2VkLiBRdWlidXNkYW0gaGljIHNlcXVpIHZlcml0YXRpcyBuaXNpLCBuZW1vIGxhYm9ydW0gdm9sdXB0YXRpYnVzIGF1dGVtIG1vbGxpdGlhIHNvbHV0YSBzdW50LiBEaWduaXNzaW1vcywgcmVwZWxsYXQgc2FwaWVudGU/XG4gICAgICAgICAgICBVbmRlIHNvbHV0YSBpc3RlIHRlbmV0dXIgcmVwZWxsZW5kdXMgZG9sb3IgYWIgZG9sb3JlbSwgbmVzY2l1bnQgdGVtcG9yZSB1bGxhbSBldmVuaWV0IG9mZmljaWlzIGl1cmUgc2VkLiBBcGVyaWFtIGN1bHBhIHZvbHVwdGF0aWJ1cywgcXVhcyBpdXN0byBxdWlidXNkYW0sIGFtZXQsIG9tbmlzIHBvc3NpbXVzIGVhcnVtIG9wdGlvIHJlcHJlaGVuZGVyaXQgdmVybyBuYW0gZnVnYS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTIgZm9udC1zZW1pYm9sZCBmb250LXNlcmlmXCI+SG93IHRvIFVzZSAgYSBmb3IgbG9vcDwvaDM+XG5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTRcIj5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDb21tb2RpIHByb3ZpZGVudCBkb2xvcmUgdWxsYW0gZG9sb3JlbSBlYSBzZWQuIFF1aWJ1c2RhbSBoaWMgc2VxdWkgdmVyaXRhdGlzIG5pc2ksIG5lbW8gbGFib3J1bSB2b2x1cHRhdGlidXMgYXV0ZW0gbW9sbGl0aWEgc29sdXRhIHN1bnQuIERpZ25pc3NpbW9zLCByZXBlbGxhdCBzYXBpZW50ZT9cbiAgICAgICAgICAgIFVuZGUgc29sdXRhIGlzdGUgdGVuZXR1ciByZXBlbGxlbmR1cyBkb2xvciBhYiBkb2xvcmVtLCBuZXNjaXVudCB0ZW1wb3JlIHVsbGFtIGV2ZW5pZXQgb2ZmaWNpaXMgaXVyZSBzZWQuIEFwZXJpYW0gY3VscGEgdm9sdXB0YXRpYnVzLCBxdWFzIGl1c3RvIHF1aWJ1c2RhbSwgYW1ldCwgb21uaXMgcG9zc2ltdXMgZWFydW0gb3B0aW8gcmVwcmVoZW5kZXJpdCB2ZXJvIG5hbSBmdWdhLlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTRcIj5cblxuICAgICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIENvbW1vZGkgcHJvdmlkZW50IGRvbG9yZSB1bGxhbSBkb2xvcmVtIGVhIHNlZC4gUXVpYnVzZGFtIGhpYyBzZXF1aSB2ZXJpdGF0aXMgbmlzaSwgbmVtbyBsYWJvcnVtIHZvbHVwdGF0aWJ1cyBhdXRlbSBtb2xsaXRpYSBzb2x1dGEgc3VudC4gRGlnbmlzc2ltb3MsIHJlcGVsbGF0IHNhcGllbnRlP1xuICAgICAgICAgICAgVW5kZSBzb2x1dGEgaXN0ZSB0ZW5ldHVyIHJlcGVsbGVuZHVzIGRvbG9yIGFiIGRvbG9yZW0sIG5lc2NpdW50IHRlbXBvcmUgdWxsYW0gZXZlbmlldCBvZmZpY2lpcyBpdXJlIHNlZC4gQXBlcmlhbSBjdWxwYSB2b2x1cHRhdGlidXMsIHF1YXMgaXVzdG8gcXVpYnVzZGFtLCBhbWV0LCBvbW5pcyBwb3NzaW11cyBlYXJ1bSBvcHRpbyByZXByZWhlbmRlcml0IHZlcm8gbmFtIGZ1Z2EuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8Zm9ybSBpZD1cImNvbW1lbnRcIj5cbiAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwieW91ciBjb21tZW50XCIgY29scz17NX0gcm93cz17Nn0gY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXhsIGgtMjAgYmctZ3JheS0xMDAgcm91bmRlZCBwLTQgdGV4dC1ncmF5LTgwMCBmb250LXNlbWlib2xkIHctZnVsbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJteS0yIHB5LTIgdGV4dC14bCB0ZXh0LWNlbnRlciB3LWZ1bGwgYmctYmx1ZS03MDAgdGV4dC1ncmF5LTUwIGhvdmVyOmJnLWJsdWUtNjAwIGZvY3VzOm91dGxpbmUtbm9uZSByb3VuZGVkXCIgdHlwZT1cInN1Ym1pdFwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGVudCJdLCJuYW1lcyI6WyJmb3JtYXQiLCJmb3JtYXREYXRlIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJEYXRlIiwiTWFpbkNvbnRlbnQiLCJwb3N0RGF0YSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJpbWciLCJzcmMiLCJpbWFnZXMiLCJhbHQiLCJoMSIsInRpdGxlIiwicHJvZmlsZXMiLCJhdmF0YXJfdXJsIiwic3BhbiIsInVzZXJuYW1lIiwiY3JlYXRlZF9hdCIsImJsb2NrcXVvdGUiLCJkZXNjcmlwdGlvbiIsImFydGljbGUiLCJzZWN0aW9uIiwiaDIiLCJwIiwiaDMiLCJmb3JtIiwiaWQiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiY29scyIsInJvd3MiLCJidXR0b24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Post/MainContent.tsx\n"));

/***/ })

});