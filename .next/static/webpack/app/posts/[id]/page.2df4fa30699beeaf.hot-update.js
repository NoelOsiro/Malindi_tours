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

/***/ "(app-pages-browser)/./src/components/Post/Sidebar.tsx":
/*!*****************************************!*\
  !*** ./src/components/Post/Sidebar.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst Sidebar = (param)=>{\n    let { profileData } = param;\n    // Array of category data\n    const categories = [\n        {\n            name: \"Sports\"\n        },\n        {\n            name: \"Culture\"\n        },\n        {\n            name: \"Tourism\"\n        },\n        {\n            name: \"Events\"\n        },\n        {\n            name: \"Commerce\"\n        },\n        {\n            name: \"Awareness\"\n        }\n    ];\n    // Array of related posts data\n    const relatedPosts = [\n        {\n            title: \"While Loop in Javascript\",\n            description: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. m, sapiente explicabo!\"\n        },\n        {\n            title: \"Foreach Loop in Javascript\",\n            description: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. m, sapiente explicabo!\"\n        },\n        {\n            title: \"Map Loop in Javascript\",\n            description: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. m, sapiente explicabo!\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"col-span-2 md:col-span-1 mt-4 md:mt-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-3xl font-semibold border-l-4 border-gray-800 pl-2 my-8 text-gray-700\",\n                        children: \"Explore Categories\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"ml-3 text-lg font-semibold text-gray-700\",\n                        children: categories.map((category, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 rounded-sm flex justify-between\",\n                                children: category.name\n                            }, index, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"author-card\",\n                className: \"flex flex-col items-center my-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-3xl font-semibold border-l-4 my-8 border-gray-800 pl-2 text-gray-700 self-start\",\n                        children: \"About Author\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-48 h-48 bg-gray-900 bg-author-img bg-contain bg-no-repeat bg-center rounded-full\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                id: \"author-name\",\n                                className: \"text-2xl text-center font-medium my-4 text-gray-800\",\n                                children: profileData.username\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"my-1 text-gray-600 text-center\",\n                                children: [\n                                    profileData.bio,\n                                    \"                    \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center gap-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-16 h-16 cursor-pointer flex justify-center rounded-full\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            viewBox: \"-204.79995 -341.33325 1774.9329 2047.9995\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    d: \"M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373\",\n                                                    fill: \"#1877f2\"\n                                                }, void 0, false, {\n                                                    fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 118\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    d: \"M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4\",\n                                                    fill: \"#fff\"\n                                                }, void 0, false, {\n                                                    fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 501\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-16 h-16 flex justify-center cursor-pointer rounded-full\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-16 h-16 flex justify-center cursor-pointer rounded-full\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"related-posts\",\n                className: \"grid gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-3xl font-semibold border-l-4 my-8 border-gray-800 pl-2 text-gray-700\",\n                        children: \"Related Posts\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, undefined),\n                    relatedPosts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-2 border rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"md:col-span-2 lg:col-span-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"img/aaa.png\",\n                                        className: \"w-full h-auto\",\n                                        alt: \"Related post\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-1 md:col-span-2 lg:col-span-1 px-2 flex flex-col justify-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-xl cursor-pointer\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"single.html\",\n                                                children: post.title\n                                            }, void 0, false, {\n                                                fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-600\",\n                                            children: post.description\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Bvc3QvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7O0FBTUEsTUFBTUEsVUFBc0M7UUFBQyxFQUFFQyxXQUFXLEVBQUU7SUFDeEQseUJBQXlCO0lBQ3pCLE1BQU1DLGFBQWE7UUFDZjtZQUFFQyxNQUFNO1FBQVU7UUFDbEI7WUFBRUEsTUFBTTtRQUFXO1FBQ25CO1lBQUVBLE1BQU07UUFBVztRQUNuQjtZQUFFQSxNQUFNO1FBQVU7UUFDbEI7WUFBRUEsTUFBTTtRQUFZO1FBQ3BCO1lBQUVBLE1BQU07UUFBYTtLQUN4QjtJQUNELDhCQUE4QjtJQUM5QixNQUFNQyxlQUFlO1FBQ2pCO1lBQUVDLE9BQU87WUFBNEJDLGFBQWE7UUFBbUY7UUFDckk7WUFBRUQsT0FBTztZQUE4QkMsYUFBYTtRQUFtRjtRQUN2STtZQUFFRCxPQUFPO1lBQTBCQyxhQUFhO1FBQW1GO0tBQ3RJO0lBRUQscUJBQ0ksOERBQUNDO1FBQU1DLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNFO3dCQUFFRixXQUFVO2tDQUE0RTs7Ozs7O2tDQUN6Riw4REFBQ0c7d0JBQUdILFdBQVU7a0NBQ1ROLFdBQVdVLEdBQUcsQ0FBQyxDQUFDQyxVQUFVQyxzQkFDdkIsOERBQUNDO2dDQUFlUCxXQUFVOzBDQUNyQkssU0FBU1YsSUFBSTsrQkFEVFc7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXJCLDhEQUFDTDtnQkFBSU8sSUFBRztnQkFBY1IsV0FBVTs7a0NBQzVCLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBdUY7Ozs7OztrQ0FFcEcsOERBQUNDO2tDQUNHLDRFQUFDQTs0QkFBSUQsV0FBVTs7Ozs7Ozs7Ozs7a0NBRW5CLDhEQUFDQzs7MENBQ0csOERBQUNDO2dDQUFFTSxJQUFHO2dDQUFjUixXQUFVOzBDQUF1RFAsWUFBWWdCLFFBQVE7Ozs7OzswQ0FDekcsOERBQUNQO2dDQUFFRixXQUFVOztvQ0FDUlAsWUFBWWlCLEdBQUc7b0NBQUM7Ozs7Ozs7MENBQ3JCLDhEQUFDVDtnQ0FBSUQsV0FBVTs7a0RBQ1gsOERBQUNDO3dDQUFJRCxXQUFVO2tEQUNmLDRFQUFDVzs0Q0FBSUMsT0FBTTs0Q0FBOEJDLFNBQVE7OzhEQUE0Qyw4REFBQ0M7b0RBQUtDLEdBQUU7b0RBQXVXQyxNQUFLOzs7Ozs7OERBQVcsOERBQUNGO29EQUFLQyxHQUFFO29EQUErUUMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBRXh2Qiw4REFBQ2Y7d0NBQUlELFdBQVU7Ozs7OztrREFHZiw4REFBQ0M7d0NBQUlELFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPM0IsOERBQUNDO2dCQUFJTyxJQUFHO2dCQUFnQlIsV0FBVTs7a0NBQzlCLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBNEU7Ozs7OztvQkFDeEZKLGFBQWFRLEdBQUcsQ0FBQyxDQUFDYSxNQUFNWCxzQkFDckIsOERBQUNMOzRCQUFnQkQsV0FBVTs7OENBQ3ZCLDhEQUFDQztvQ0FBSUQsV0FBVTs4Q0FDWCw0RUFBQ2tCO3dDQUFJQyxLQUFJO3dDQUFjbkIsV0FBVTt3Q0FBZ0JvQixLQUFJOzs7Ozs7Ozs7Ozs4Q0FFekQsOERBQUNuQjtvQ0FBSUQsV0FBVTs7c0RBQ1gsOERBQUNFOzRDQUFFRixXQUFVO3NEQUNULDRFQUFDcUI7Z0RBQUVDLE1BQUs7MERBQWVMLEtBQUtwQixLQUFLOzs7Ozs7Ozs7OztzREFFckMsOERBQUNLOzRDQUFFRixXQUFVO3NEQUFpQmlCLEtBQUtuQixXQUFXOzs7Ozs7Ozs7Ozs7OzJCQVI1Q1E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0I5QjtLQXhFTWQ7QUF5RU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdC9TaWRlYmFyLnRzeD9lYzEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElwb3N0RGF0YSB9IGZyb20gXCJAL2FwcC9wb3N0cy9baWRdL3BhZ2VcIjtcblxuaW50ZXJmYWNlIE1haW5Db250ZW50UHJvcHMge1xuICAgIHByb2ZpbGVEYXRhOiBJcG9zdERhdGFbJ3Byb2ZpbGVzJ11cbn1cblxuY29uc3QgU2lkZWJhcjogUmVhY3QuRkM8TWFpbkNvbnRlbnRQcm9wcz4gPSAoeyBwcm9maWxlRGF0YSB9KSA9PiB7XG4gICAgLy8gQXJyYXkgb2YgY2F0ZWdvcnkgZGF0YVxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXG4gICAgICAgIHsgbmFtZTogXCJTcG9ydHNcIiwgfSxcbiAgICAgICAgeyBuYW1lOiBcIkN1bHR1cmVcIiwgfSxcbiAgICAgICAgeyBuYW1lOiBcIlRvdXJpc21cIiwgfSxcbiAgICAgICAgeyBuYW1lOiBcIkV2ZW50c1wiLCB9LFxuICAgICAgICB7IG5hbWU6IFwiQ29tbWVyY2VcIiwgfSxcbiAgICAgICAgeyBuYW1lOiBcIkF3YXJlbmVzc1wiLCB9XG4gICAgXTtcbiAgICAvLyBBcnJheSBvZiByZWxhdGVkIHBvc3RzIGRhdGFcbiAgICBjb25zdCByZWxhdGVkUG9zdHMgPSBbXG4gICAgICAgIHsgdGl0bGU6IFwiV2hpbGUgTG9vcCBpbiBKYXZhc2NyaXB0XCIsIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBtLCBzYXBpZW50ZSBleHBsaWNhYm8hXCIgfSxcbiAgICAgICAgeyB0aXRsZTogXCJGb3JlYWNoIExvb3AgaW4gSmF2YXNjcmlwdFwiLCBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gbSwgc2FwaWVudGUgZXhwbGljYWJvIVwiIH0sXG4gICAgICAgIHsgdGl0bGU6IFwiTWFwIExvb3AgaW4gSmF2YXNjcmlwdFwiLCBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gbSwgc2FwaWVudGUgZXhwbGljYWJvIVwiIH1cbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgbWQ6Y29sLXNwYW4tMSBtdC00IG1kOm10LTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgYm9yZGVyLWwtNCBib3JkZXItZ3JheS04MDAgcGwtMiBteS04IHRleHQtZ3JheS03MDBcIj5FeHBsb3JlIENhdGVnb3JpZXM8L3A+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1sLTMgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJib3JkZXIgcHktMiBweC0yIG10LTIgbWItMSBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWdyYXktOTAwIHJvdW5kZWQtc20gZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhdXRob3ItY2FyZFwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG15LThcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkIGJvcmRlci1sLTQgbXktOCBib3JkZXItZ3JheS04MDAgcGwtMiB0ZXh0LWdyYXktNzAwIHNlbGYtc3RhcnRcIj5BYm91dCBBdXRob3I8L3A+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNDggaC00OCBiZy1ncmF5LTkwMCBiZy1hdXRob3ItaW1nIGJnLWNvbnRhaW4gYmctbm8tcmVwZWF0IGJnLWNlbnRlciByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImF1dGhvci1uYW1lXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1jZW50ZXIgZm9udC1tZWRpdW0gbXktNCB0ZXh0LWdyYXktODAwXCI+e3Byb2ZpbGVEYXRhLnVzZXJuYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktMSB0ZXh0LWdyYXktNjAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZURhdGEuYmlvfSAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IGN1cnNvci1wb2ludGVyIGZsZXgganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAgdmlld0JveD1cIi0yMDQuNzk5OTUgLTM0MS4zMzMyNSAxNzc0LjkzMjkgMjA0Ny45OTk1XCI+PHBhdGggZD1cIk0xMzY1LjMzMyA2ODIuNjY3QzEzNjUuMzMzIDMwNS42NCAxMDU5LjY5MyAwIDY4Mi42NjcgMCAzMDUuNjQgMCAwIDMwNS42NCAwIDY4Mi42NjdjMCAzNDAuNzM4IDI0OS42NDEgNjIzLjE2IDU3NiA2NzQuMzczVjg4MEg0MDIuNjY3VjY4Mi42NjdINTc2di0xNTAuNGMwLTE3MS4wOTQgMTAxLjkxNy0yNjUuNiAyNTcuODUzLTI2NS42IDc0LjY5IDAgMTUyLjgxNCAxMy4zMzMgMTUyLjgxNCAxMy4zMzN2MTY4aC04Ni4wODNjLTg0LjgwNCAwLTExMS4yNSA1Mi42MjMtMTExLjI1IDEwNi42MXYxMjguMDU3aDE4OS4zMzNMOTQ4LjQgODgwSDc4OS4zMzN2NDc3LjA0YzMyNi4zNTktNTEuMjEzIDU3Ni0zMzMuNjM1IDU3Ni02NzQuMzczXCIgZmlsbD1cIiMxODc3ZjJcIi8+PHBhdGggZD1cIk05NDguNCA4ODBsMzAuMjY3LTE5Ny4zMzNINzg5LjMzM1Y1NTQuNjA5Qzc4OS4zMzMgNTAwLjYyMyA4MTUuNzggNDQ4IDkwMC41ODQgNDQ4aDg2LjA4M1YyODBzLTc4LjEyNC0xMy4zMzMtMTUyLjgxNC0xMy4zMzNjLTE1NS45MzYgMC0yNTcuODUzIDk0LjUwNi0yNTcuODUzIDI2NS42djE1MC40SDQwMi42NjdWODgwSDU3NnY0NzcuMDRhNjg3LjgwNSA2ODcuODA1IDAgMDAxMDYuNjY3IDguMjkzYzM2LjI4OCAwIDcxLjkxLTIuODQgMTA2LjY2Ni04LjI5M1Y4ODBIOTQ4LjRcIiBmaWxsPVwiI2ZmZlwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgZmxleCBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogU1ZHIGljb24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IGZsZXgganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNWRyBpY29uICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJyZWxhdGVkLXBvc3RzXCIgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgYm9yZGVyLWwtNCBteS04IGJvcmRlci1ncmF5LTgwMCBwbC0yIHRleHQtZ3JheS03MDBcIj5SZWxhdGVkIFBvc3RzPC9wPlxuICAgICAgICAgICAgICAgIHtyZWxhdGVkUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgYm9yZGVyIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMiBsZzpjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvYWFhLnBuZ1wiIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG9cIiBhbHQ9XCJSZWxhdGVkIHBvc3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbWQ6Y29sLXNwYW4tMiBsZzpjb2wtc3Bhbi0xIHB4LTIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInNpbmdsZS5odG1sXCI+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+e3Bvc3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9hc2lkZT5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXSwibmFtZXMiOlsiU2lkZWJhciIsInByb2ZpbGVEYXRhIiwiY2F0ZWdvcmllcyIsIm5hbWUiLCJyZWxhdGVkUG9zdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXNpZGUiLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwidWwiLCJtYXAiLCJjYXRlZ29yeSIsImluZGV4IiwibGkiLCJpZCIsInVzZXJuYW1lIiwiYmlvIiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94IiwicGF0aCIsImQiLCJmaWxsIiwicG9zdCIsImltZyIsInNyYyIsImFsdCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Post/Sidebar.tsx\n"));

/***/ })

});