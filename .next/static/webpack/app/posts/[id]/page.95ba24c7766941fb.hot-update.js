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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=format!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/format.mjs\");\n\n\nconst formatDate = (dateString)=>{\n    const date = new Date(dateString);\n    return (0,_barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, \"do MMMM yyyy\");\n};\nconst MainContent = (param)=>{\n    let { postData } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"col-span-2  p-6 relative md:mr-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: postData.images[0],\n                    className: \"cursor-pointer rounded-lg\",\n                    alt: \"placeholder tag\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold text-gray-800 py-6\",\n                children: postData.title\n            }, void 0, false, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex mt-2 my-2 items-center gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-10 h-10 bg-gray-300 rounded-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: postData.profiles.avatar_url,\n                            className: \"w-10 h-10 rounded-full\",\n                            alt: \"avatar\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-black-500\",\n                        children: [\n                            \"By \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-800 font-bold cursor-pointer\",\n                                children: postData.profiles.username\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 14\n                            }, undefined),\n                            \" on \",\n                            formatDate(postData.created_at)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n                className: \"italic mt-4 font-semibold font-mono text-gray-800 border-l-4 border-gray-900 my-3 pl-2 ml-8\",\n                children: postData.description\n            }, void 0, false, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"mt-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl mb-2 font-semibold font-sans\",\n                                children: \"What is a for loop\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"my-4\",\n                                children: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente? Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"my-4\",\n                                children: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente? Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl mb-2 font-semibold font-serif\",\n                                children: \"When to Use  a for loop\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"my-4\",\n                                children: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente? Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"my-4\",\n                                children: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente? Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl mb-2 font-semibold font-serif\",\n                                children: \"How to Use  a for loop\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"my-4\",\n                                children: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente? Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"my-4\",\n                                children: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi provident dolore ullam dolorem ea sed. Quibusdam hic sequi veritatis nisi, nemo laborum voluptatibus autem mollitia soluta sunt. Dignissimos, repellat sapiente? Unde soluta iste tenetur repellendus dolor ab dolorem, nesciunt tempore ullam eveniet officiis iure sed. Aperiam culpa voluptatibus, quas iusto quibusdam, amet, omnis possimus earum optio reprehenderit vero nam fuga.\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                id: \"comment\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        placeholder: \"your comment\",\n                        cols: 5,\n                        rows: 6,\n                        className: \"outline-none focus:outline-none text-xl h-20 bg-gray-100 rounded p-4 text-gray-800 font-semibold w-full\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-column\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                className: \"w-full bg-gray-100 p-2 my-2 px-4 text-xl text-gray-800 rounded focus:outline-none\",\n                                placeholder: \"your email\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"w-full bg-gray-100 p-2 px-4 text-xl text-gray-800 rounded focus:outline-none\",\n                                placeholder: \"your name\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"my-2 py-2 text-xl text-center w-full bg-blue-700 text-gray-50 hover:bg-blue-600 focus:outline-none rounded\",\n                        type: \"submit\",\n                        children: \"Comment\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Malindi_tours/src/components/Post/MainContent.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MainContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainContent);\nvar _c;\n$RefreshReg$(_c, \"MainContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Bvc3QvTWFpbkNvbnRlbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFDa0M7QUFPbEMsTUFBTUMsYUFBYSxDQUFDQztJQUNoQixNQUFNQyxPQUFPLElBQUlDLEtBQUtGO0lBQ3RCLE9BQU9GLDhFQUFNQSxDQUFDRyxNQUFNO0FBQ3hCO0FBRUEsTUFBTUUsY0FBMEM7UUFBQyxFQUFFQyxRQUFRLEVBQUU7SUFDM0QscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQUlDLEtBQUtMLFNBQVNNLE1BQU0sQ0FBQyxFQUFFO29CQUFFSixXQUFVO29CQUE0QkssS0FBSTs7Ozs7Ozs7Ozs7MEJBRTFFLDhEQUFDQztnQkFBR04sV0FBVTswQkFBeUNGLFNBQVNTLEtBQUs7Ozs7OzswQkFDckUsOERBQUNOO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNFOzRCQUFJQyxLQUFLTCxTQUFTVSxRQUFRLENBQUNDLFVBQVU7NEJBQUVULFdBQVU7NEJBQXlCSyxLQUFJOzs7Ozs7Ozs7OztrQ0FFakYsOERBQUNKO3dCQUFJRCxXQUFVOzs0QkFBaUI7MENBQzNCLDhEQUFDVTtnQ0FBS1YsV0FBVTswQ0FBMENGLFNBQVNVLFFBQVEsQ0FBQ0csUUFBUTs7Ozs7OzRCQUFROzRCQUFLbEIsV0FBV0ssU0FBU2MsVUFBVTs7Ozs7Ozs7Ozs7OzswQkFHdEksOERBQUNDO2dCQUFXYixXQUFVOzBCQUNuQkYsU0FBU2dCLFdBQVc7Ozs7OzswQkFFdkIsOERBQUNDOztrQ0FDQyw4REFBQ0M7d0JBQVFoQixXQUFVOzswQ0FDakIsOERBQUNpQjtnQ0FBR2pCLFdBQVU7MENBQXdDOzs7Ozs7MENBRXRELDhEQUFDa0I7Z0NBQUVsQixXQUFVOzBDQUFPOzs7Ozs7MENBS3BCLDhEQUFDa0I7Z0NBQUVsQixXQUFVOzBDQUFPOzs7Ozs7Ozs7Ozs7a0NBTXRCLDhEQUFDZ0I7OzBDQUNDLDhEQUFDRztnQ0FBR25CLFdBQVU7MENBQXlDOzs7Ozs7MENBR3ZELDhEQUFDa0I7Z0NBQUVsQixXQUFVOzBDQUFPOzs7Ozs7MENBS3BCLDhEQUFDa0I7Z0NBQUVsQixXQUFVOzBDQUFPOzs7Ozs7Ozs7Ozs7a0NBTXRCLDhEQUFDZ0I7OzBDQUNDLDhEQUFDRztnQ0FBR25CLFdBQVU7MENBQXlDOzs7Ozs7MENBR3ZELDhEQUFDa0I7Z0NBQUVsQixXQUFVOzBDQUFPOzs7Ozs7MENBS3BCLDhEQUFDa0I7Z0NBQUVsQixXQUFVOzBDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT3hCLDhEQUFDb0I7Z0JBQUtDLElBQUc7O2tDQUNQLDhEQUFDQzt3QkFBU0MsYUFBWTt3QkFBZUMsTUFBTTt3QkFBR0MsTUFBTTt3QkFBR3pCLFdBQVU7Ozs7OztrQ0FDakUsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDZiw4REFBQzBCO2dDQUFNQyxNQUFLO2dDQUFRM0IsV0FBVTtnQ0FBb0Z1QixhQUFZO2dDQUFhSyxRQUFROzs7Ozs7MENBQ25KLDhEQUFDRjtnQ0FBTUMsTUFBSztnQ0FBTzNCLFdBQVU7Z0NBQStFdUIsYUFBWTtnQ0FBWUssUUFBUTs7Ozs7Ozs7Ozs7O2tDQUc1SSw4REFBQ0M7d0JBQU83QixXQUFVO3dCQUE2RzJCLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlySjtLQTNFTTlCO0FBNkVOLCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Bvc3QvTWFpbkNvbnRlbnQudHN4PzZmOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXBvc3REYXRhIH0gZnJvbSBcIkAvYXBwL3Bvc3RzL1tpZF0vcGFnZVwiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5pbnRlcmZhY2UgTWFpbkNvbnRlbnRQcm9wcyB7XG4gIHBvc3REYXRhOiBJcG9zdERhdGFcbn1cblxuXG5jb25zdCBmb3JtYXREYXRlID0gKGRhdGVTdHJpbmc6c3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgJ2RvIE1NTU0geXl5eScpO1xufTtcblxuY29uc3QgTWFpbkNvbnRlbnQ6IFJlYWN0LkZDPE1haW5Db250ZW50UHJvcHM+ID0gKHsgcG9zdERhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgIHAtNiByZWxhdGl2ZSBtZDptci0yXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGltZyBzcmM9e3Bvc3REYXRhLmltYWdlc1swXX0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1sZ1wiIGFsdD1cInBsYWNlaG9sZGVyIHRhZ1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBweS02XCI+e3Bvc3REYXRhLnRpdGxlfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMiBteS0yIGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCBiZy1ncmF5LTMwMCByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICA8aW1nIHNyYz17cG9zdERhdGEucHJvZmlsZXMuYXZhdGFyX3VybH0gY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbFwiIGFsdD0nYXZhdGFyJy8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxhY2stNTAwXCI+XG4gICAgICAgICAgQnkgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXJcIj57cG9zdERhdGEucHJvZmlsZXMudXNlcm5hbWV9PC9zcGFuPiBvbiB7Zm9ybWF0RGF0ZShwb3N0RGF0YS5jcmVhdGVkX2F0KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT1cIml0YWxpYyBtdC00IGZvbnQtc2VtaWJvbGQgZm9udC1tb25vIHRleHQtZ3JheS04MDAgYm9yZGVyLWwtNCBib3JkZXItZ3JheS05MDAgbXktMyBwbC0yIG1sLThcIj5cbiAgICAgICAge3Bvc3REYXRhLmRlc2NyaXB0aW9ufVxuICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItMiBmb250LXNlbWlib2xkIGZvbnQtc2Fuc1wiPldoYXQgaXMgYSBmb3IgbG9vcDwvaDI+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS00XCI+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ29tbW9kaSBwcm92aWRlbnQgZG9sb3JlIHVsbGFtIGRvbG9yZW0gZWEgc2VkLiBRdWlidXNkYW0gaGljIHNlcXVpIHZlcml0YXRpcyBuaXNpLCBuZW1vIGxhYm9ydW0gdm9sdXB0YXRpYnVzIGF1dGVtIG1vbGxpdGlhIHNvbHV0YSBzdW50LiBEaWduaXNzaW1vcywgcmVwZWxsYXQgc2FwaWVudGU/XG4gICAgICAgICAgICBVbmRlIHNvbHV0YSBpc3RlIHRlbmV0dXIgcmVwZWxsZW5kdXMgZG9sb3IgYWIgZG9sb3JlbSwgbmVzY2l1bnQgdGVtcG9yZSB1bGxhbSBldmVuaWV0IG9mZmljaWlzIGl1cmUgc2VkLiBBcGVyaWFtIGN1bHBhIHZvbHVwdGF0aWJ1cywgcXVhcyBpdXN0byBxdWlidXNkYW0sIGFtZXQsIG9tbmlzIHBvc3NpbXVzIGVhcnVtIG9wdGlvIHJlcHJlaGVuZGVyaXQgdmVybyBuYW0gZnVnYS5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS00XCI+XG5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDb21tb2RpIHByb3ZpZGVudCBkb2xvcmUgdWxsYW0gZG9sb3JlbSBlYSBzZWQuIFF1aWJ1c2RhbSBoaWMgc2VxdWkgdmVyaXRhdGlzIG5pc2ksIG5lbW8gbGFib3J1bSB2b2x1cHRhdGlidXMgYXV0ZW0gbW9sbGl0aWEgc29sdXRhIHN1bnQuIERpZ25pc3NpbW9zLCByZXBlbGxhdCBzYXBpZW50ZT9cbiAgICAgICAgICAgIFVuZGUgc29sdXRhIGlzdGUgdGVuZXR1ciByZXBlbGxlbmR1cyBkb2xvciBhYiBkb2xvcmVtLCBuZXNjaXVudCB0ZW1wb3JlIHVsbGFtIGV2ZW5pZXQgb2ZmaWNpaXMgaXVyZSBzZWQuIEFwZXJpYW0gY3VscGEgdm9sdXB0YXRpYnVzLCBxdWFzIGl1c3RvIHF1aWJ1c2RhbSwgYW1ldCwgb21uaXMgcG9zc2ltdXMgZWFydW0gb3B0aW8gcmVwcmVoZW5kZXJpdCB2ZXJvIG5hbSBmdWdhLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItMiBmb250LXNlbWlib2xkIGZvbnQtc2VyaWZcIj5XaGVuIHRvIFVzZSAgYSBmb3IgbG9vcDwvaDM+XG5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTRcIj5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDb21tb2RpIHByb3ZpZGVudCBkb2xvcmUgdWxsYW0gZG9sb3JlbSBlYSBzZWQuIFF1aWJ1c2RhbSBoaWMgc2VxdWkgdmVyaXRhdGlzIG5pc2ksIG5lbW8gbGFib3J1bSB2b2x1cHRhdGlidXMgYXV0ZW0gbW9sbGl0aWEgc29sdXRhIHN1bnQuIERpZ25pc3NpbW9zLCByZXBlbGxhdCBzYXBpZW50ZT9cbiAgICAgICAgICAgIFVuZGUgc29sdXRhIGlzdGUgdGVuZXR1ciByZXBlbGxlbmR1cyBkb2xvciBhYiBkb2xvcmVtLCBuZXNjaXVudCB0ZW1wb3JlIHVsbGFtIGV2ZW5pZXQgb2ZmaWNpaXMgaXVyZSBzZWQuIEFwZXJpYW0gY3VscGEgdm9sdXB0YXRpYnVzLCBxdWFzIGl1c3RvIHF1aWJ1c2RhbSwgYW1ldCwgb21uaXMgcG9zc2ltdXMgZWFydW0gb3B0aW8gcmVwcmVoZW5kZXJpdCB2ZXJvIG5hbSBmdWdhLlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTRcIj5cblxuICAgICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIENvbW1vZGkgcHJvdmlkZW50IGRvbG9yZSB1bGxhbSBkb2xvcmVtIGVhIHNlZC4gUXVpYnVzZGFtIGhpYyBzZXF1aSB2ZXJpdGF0aXMgbmlzaSwgbmVtbyBsYWJvcnVtIHZvbHVwdGF0aWJ1cyBhdXRlbSBtb2xsaXRpYSBzb2x1dGEgc3VudC4gRGlnbmlzc2ltb3MsIHJlcGVsbGF0IHNhcGllbnRlP1xuICAgICAgICAgICAgVW5kZSBzb2x1dGEgaXN0ZSB0ZW5ldHVyIHJlcGVsbGVuZHVzIGRvbG9yIGFiIGRvbG9yZW0sIG5lc2NpdW50IHRlbXBvcmUgdWxsYW0gZXZlbmlldCBvZmZpY2lpcyBpdXJlIHNlZC4gQXBlcmlhbSBjdWxwYSB2b2x1cHRhdGlidXMsIHF1YXMgaXVzdG8gcXVpYnVzZGFtLCBhbWV0LCBvbW5pcyBwb3NzaW11cyBlYXJ1bSBvcHRpbyByZXByZWhlbmRlcml0IHZlcm8gbmFtIGZ1Z2EuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi0yIGZvbnQtc2VtaWJvbGQgZm9udC1zZXJpZlwiPkhvdyB0byBVc2UgIGEgZm9yIGxvb3A8L2gzPlxuXG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS00XCI+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ29tbW9kaSBwcm92aWRlbnQgZG9sb3JlIHVsbGFtIGRvbG9yZW0gZWEgc2VkLiBRdWlidXNkYW0gaGljIHNlcXVpIHZlcml0YXRpcyBuaXNpLCBuZW1vIGxhYm9ydW0gdm9sdXB0YXRpYnVzIGF1dGVtIG1vbGxpdGlhIHNvbHV0YSBzdW50LiBEaWduaXNzaW1vcywgcmVwZWxsYXQgc2FwaWVudGU/XG4gICAgICAgICAgICBVbmRlIHNvbHV0YSBpc3RlIHRlbmV0dXIgcmVwZWxsZW5kdXMgZG9sb3IgYWIgZG9sb3JlbSwgbmVzY2l1bnQgdGVtcG9yZSB1bGxhbSBldmVuaWV0IG9mZmljaWlzIGl1cmUgc2VkLiBBcGVyaWFtIGN1bHBhIHZvbHVwdGF0aWJ1cywgcXVhcyBpdXN0byBxdWlidXNkYW0sIGFtZXQsIG9tbmlzIHBvc3NpbXVzIGVhcnVtIG9wdGlvIHJlcHJlaGVuZGVyaXQgdmVybyBuYW0gZnVnYS5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS00XCI+XG5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDb21tb2RpIHByb3ZpZGVudCBkb2xvcmUgdWxsYW0gZG9sb3JlbSBlYSBzZWQuIFF1aWJ1c2RhbSBoaWMgc2VxdWkgdmVyaXRhdGlzIG5pc2ksIG5lbW8gbGFib3J1bSB2b2x1cHRhdGlidXMgYXV0ZW0gbW9sbGl0aWEgc29sdXRhIHN1bnQuIERpZ25pc3NpbW9zLCByZXBlbGxhdCBzYXBpZW50ZT9cbiAgICAgICAgICAgIFVuZGUgc29sdXRhIGlzdGUgdGVuZXR1ciByZXBlbGxlbmR1cyBkb2xvciBhYiBkb2xvcmVtLCBuZXNjaXVudCB0ZW1wb3JlIHVsbGFtIGV2ZW5pZXQgb2ZmaWNpaXMgaXVyZSBzZWQuIEFwZXJpYW0gY3VscGEgdm9sdXB0YXRpYnVzLCBxdWFzIGl1c3RvIHF1aWJ1c2RhbSwgYW1ldCwgb21uaXMgcG9zc2ltdXMgZWFydW0gb3B0aW8gcmVwcmVoZW5kZXJpdCB2ZXJvIG5hbSBmdWdhLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPGZvcm0gaWQ9XCJjb21tZW50XCI+XG4gICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cInlvdXIgY29tbWVudFwiIGNvbHM9ezV9IHJvd3M9ezZ9IGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC14bCBoLTIwIGJnLWdyYXktMTAwIHJvdW5kZWQgcC00IHRleHQtZ3JheS04MDAgZm9udC1zZW1pYm9sZCB3LWZ1bGxcIj48L3RleHRhcmVhPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCBwLTIgbXktMiBweC00IHRleHQteGwgdGV4dC1ncmF5LTgwMCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZVwiIHBsYWNlaG9sZGVyPVwieW91ciBlbWFpbFwiIHJlcXVpcmVkIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCBwLTIgcHgtNCB0ZXh0LXhsIHRleHQtZ3JheS04MDAgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmVcIiBwbGFjZWhvbGRlcj1cInlvdXIgbmFtZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm15LTIgcHktMiB0ZXh0LXhsIHRleHQtY2VudGVyIHctZnVsbCBiZy1ibHVlLTcwMCB0ZXh0LWdyYXktNTAgaG92ZXI6YmctYmx1ZS02MDAgZm9jdXM6b3V0bGluZS1ub25lIHJvdW5kZWRcIiB0eXBlPVwic3VibWl0XCI+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Db250ZW50Il0sIm5hbWVzIjpbImZvcm1hdCIsImZvcm1hdERhdGUiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsIkRhdGUiLCJNYWluQ29udGVudCIsInBvc3REYXRhIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImltZyIsInNyYyIsImltYWdlcyIsImFsdCIsImgxIiwidGl0bGUiLCJwcm9maWxlcyIsImF2YXRhcl91cmwiLCJzcGFuIiwidXNlcm5hbWUiLCJjcmVhdGVkX2F0IiwiYmxvY2txdW90ZSIsImRlc2NyaXB0aW9uIiwiYXJ0aWNsZSIsInNlY3Rpb24iLCJoMiIsInAiLCJoMyIsImZvcm0iLCJpZCIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJjb2xzIiwicm93cyIsImlucHV0IiwidHlwZSIsInJlcXVpcmVkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Post/MainContent.tsx\n"));

/***/ })

});