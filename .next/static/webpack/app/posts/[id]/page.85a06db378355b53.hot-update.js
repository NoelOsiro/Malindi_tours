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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst Sidebar = (param)=>{\n    let { profileData } = param;\n    // Array of category data\n    const categories = [\n        {\n            name: \"Sports\"\n        },\n        {\n            name: \"Culture\"\n        },\n        {\n            name: \"Tourism\"\n        },\n        {\n            name: \"Events\"\n        },\n        {\n            name: \"Commerce\"\n        },\n        {\n            name: \"Awareness\"\n        }\n    ];\n    // Array of related posts data\n    const relatedPosts = [\n        {\n            title: \"While Loop in Javascript\",\n            description: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. m, sapiente explicabo!\"\n        },\n        {\n            title: \"Foreach Loop in Javascript\",\n            description: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. m, sapiente explicabo!\"\n        },\n        {\n            title: \"Map Loop in Javascript\",\n            description: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. m, sapiente explicabo!\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"col-span-2 md:col-span-1 mt-4 md:mt-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-3xl font-semibold border-l-4 border-gray-800 pl-2 my-8 text-gray-700\",\n                        children: \"Explore Categories\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"ml-3 text-lg font-semibold text-gray-700\",\n                        children: categories.map((category, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"border py-2 px-2 mt-2 mb-1 cursor-pointer hover:text-gray-900 rounded-sm flex justify-between\",\n                                children: category.name\n                            }, index, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"author-card\",\n                className: \"flex flex-col items-center my-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-3xl font-semibold border-l-4 my-8 border-gray-800 pl-2 text-gray-700 self-start\",\n                        children: \"About Author\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-48 h-48 bg-gray-900 bg-author-img bg-contain bg-no-repeat bg-center rounded-full\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                id: \"author-name\",\n                                className: \"text-2xl text-center font-medium my-4 text-gray-800\",\n                                children: profileData.username\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"my-1 text-gray-600 text-center\",\n                                children: [\n                                    profileData.bio,\n                                    \"                    \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center gap-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-16 h-16 cursor-pointer flex justify-center rounded-full\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-16 h-16 flex justify-center cursor-pointer rounded-full\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-16 h-16 flex justify-center cursor-pointer rounded-full\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"related-posts\",\n                className: \"grid gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-3xl font-semibold border-l-4 my-8 border-gray-800 pl-2 text-gray-700\",\n                        children: \"Related Posts\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, undefined),\n                    relatedPosts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-2 border rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"md:col-span-2 lg:col-span-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"img/aaa.png\",\n                                        className: \"w-full h-auto\",\n                                        alt: \"Related post\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-1 md:col-span-2 lg:col-span-1 px-2 flex flex-col justify-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-xl cursor-pointer\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"single.html\",\n                                                children: post.title\n                                            }, void 0, false, {\n                                                fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-600\",\n                                            children: post.description\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Malindi_tours/src/components/Post/Sidebar.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Bvc3QvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7O0FBTUEsTUFBTUEsVUFBc0M7UUFBQyxFQUFFQyxXQUFXLEVBQUU7SUFDeEQseUJBQXlCO0lBQ3pCLE1BQU1DLGFBQWE7UUFDZjtZQUFFQyxNQUFNO1FBQVc7UUFDbkI7WUFBRUEsTUFBTTtRQUFVO1FBQ2xCO1lBQUVBLE1BQU07UUFBVztRQUNuQjtZQUFFQSxNQUFNO1FBQVM7UUFDakI7WUFBRUEsTUFBTTtRQUFXO1FBQ25CO1lBQUVBLE1BQU07UUFBWTtLQUN2QjtJQUNELDhCQUE4QjtJQUM5QixNQUFNQyxlQUFlO1FBQ2pCO1lBQUVDLE9BQU87WUFBNEJDLGFBQWE7UUFBbUY7UUFDckk7WUFBRUQsT0FBTztZQUE4QkMsYUFBYTtRQUFtRjtRQUN2STtZQUFFRCxPQUFPO1lBQTBCQyxhQUFhO1FBQW1GO0tBQ3RJO0lBRUQscUJBQ0ksOERBQUNDO1FBQU1DLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNFO3dCQUFFRixXQUFVO2tDQUE0RTs7Ozs7O2tDQUN6Riw4REFBQ0c7d0JBQUdILFdBQVU7a0NBQ1ROLFdBQVdVLEdBQUcsQ0FBQyxDQUFDQyxVQUFVQyxzQkFDdkIsOERBQUNDO2dDQUFlUCxXQUFVOzBDQUNyQkssU0FBU1YsSUFBSTsrQkFEVFc7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXJCLDhEQUFDTDtnQkFBSU8sSUFBRztnQkFBY1IsV0FBVTs7a0NBQzVCLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBdUY7Ozs7OztrQ0FFcEcsOERBQUNDO2tDQUNHLDRFQUFDQTs0QkFBSUQsV0FBVTs7Ozs7Ozs7Ozs7a0NBRW5CLDhEQUFDQzs7MENBQ0csOERBQUNDO2dDQUFFTSxJQUFHO2dDQUFjUixXQUFVOzBDQUF1RFAsWUFBWWdCLFFBQVE7Ozs7OzswQ0FDekcsOERBQUNQO2dDQUFFRixXQUFVOztvQ0FDUlAsWUFBWWlCLEdBQUc7b0NBQUM7Ozs7Ozs7MENBQ3JCLDhEQUFDVDtnQ0FBSUQsV0FBVTs7a0RBQ1gsOERBQUNDO3dDQUFJRCxXQUFVOzs7Ozs7a0RBR2YsOERBQUNDO3dDQUFJRCxXQUFVOzs7Ozs7a0RBR2YsOERBQUNDO3dDQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTzNCLDhEQUFDQztnQkFBSU8sSUFBRztnQkFBZ0JSLFdBQVU7O2tDQUM5Qiw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQTRFOzs7Ozs7b0JBQ3hGSixhQUFhUSxHQUFHLENBQUMsQ0FBQ08sTUFBTUwsc0JBQ3JCLDhEQUFDTDs0QkFBZ0JELFdBQVU7OzhDQUN2Qiw4REFBQ0M7b0NBQUlELFdBQVU7OENBQ1gsNEVBQUNZO3dDQUFJQyxLQUFJO3dDQUFjYixXQUFVO3dDQUFnQmMsS0FBSTs7Ozs7Ozs7Ozs7OENBRXpELDhEQUFDYjtvQ0FBSUQsV0FBVTs7c0RBQ1gsOERBQUNFOzRDQUFFRixXQUFVO3NEQUNULDRFQUFDZTtnREFBRUMsTUFBSzswREFBZUwsS0FBS2QsS0FBSzs7Ozs7Ozs7Ozs7c0RBRXJDLDhEQUFDSzs0Q0FBRUYsV0FBVTtzREFBaUJXLEtBQUtiLFdBQVc7Ozs7Ozs7Ozs7Ozs7MkJBUjVDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjlCO0tBeEVNZDtBQXlFTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qb3N0L1NpZGViYXIudHN4P2VjMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXBvc3REYXRhIH0gZnJvbSBcIkAvYXBwL3Bvc3RzL1tpZF0vcGFnZVwiO1xuXG5pbnRlcmZhY2UgTWFpbkNvbnRlbnRQcm9wcyB7XG4gICAgcHJvZmlsZURhdGE6IElwb3N0RGF0YVsncHJvZmlsZXMnXVxuICB9XG5cbmNvbnN0IFNpZGViYXI6IFJlYWN0LkZDPE1haW5Db250ZW50UHJvcHM+ID0gKHsgcHJvZmlsZURhdGEgfSkgPT4ge1xuICAgIC8vIEFycmF5IG9mIGNhdGVnb3J5IGRhdGFcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gW1xuICAgICAgICB7IG5hbWU6IFwiU3BvcnRzXCIsICB9LFxuICAgICAgICB7IG5hbWU6IFwiQ3VsdHVyZVwiLH0sXG4gICAgICAgIHsgbmFtZTogXCJUb3VyaXNtXCIsIH0sXG4gICAgICAgIHsgbmFtZTogXCJFdmVudHNcIix9LFxuICAgICAgICB7IG5hbWU6IFwiQ29tbWVyY2VcIix9LFxuICAgICAgICB7IG5hbWU6IFwiQXdhcmVuZXNzXCIsfVxuICAgIF07XG4gICAgLy8gQXJyYXkgb2YgcmVsYXRlZCBwb3N0cyBkYXRhXG4gICAgY29uc3QgcmVsYXRlZFBvc3RzID0gW1xuICAgICAgICB7IHRpdGxlOiBcIldoaWxlIExvb3AgaW4gSmF2YXNjcmlwdFwiLCBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gbSwgc2FwaWVudGUgZXhwbGljYWJvIVwiIH0sXG4gICAgICAgIHsgdGl0bGU6IFwiRm9yZWFjaCBMb29wIGluIEphdmFzY3JpcHRcIiwgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIG0sIHNhcGllbnRlIGV4cGxpY2FibyFcIiB9LFxuICAgICAgICB7IHRpdGxlOiBcIk1hcCBMb29wIGluIEphdmFzY3JpcHRcIiwgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIG0sIHNhcGllbnRlIGV4cGxpY2FibyFcIiB9XG4gICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG1kOmNvbC1zcGFuLTEgbXQtNCBtZDptdC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkIGJvcmRlci1sLTQgYm9yZGVyLWdyYXktODAwIHBsLTIgbXktOCB0ZXh0LWdyYXktNzAwXCI+RXhwbG9yZSBDYXRlZ29yaWVzPC9wPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtbC0zIHRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYm9yZGVyIHB5LTIgcHgtMiBtdC0yIG1iLTEgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ncmF5LTkwMCByb3VuZGVkLXNtIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYXV0aG9yLWNhcmRcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBteS04XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZCBib3JkZXItbC00IG15LTggYm9yZGVyLWdyYXktODAwIHBsLTIgdGV4dC1ncmF5LTcwMCBzZWxmLXN0YXJ0XCI+QWJvdXQgQXV0aG9yPC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQ4IGgtNDggYmctZ3JheS05MDAgYmctYXV0aG9yLWltZyBiZy1jb250YWluIGJnLW5vLXJlcGVhdCBiZy1jZW50ZXIgcm91bmRlZC1mdWxsXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJhdXRob3ItbmFtZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtY2VudGVyIGZvbnQtbWVkaXVtIG15LTQgdGV4dC1ncmF5LTgwMFwiPntwcm9maWxlRGF0YS51c2VybmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTYwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGVEYXRhLmJpb30gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGdhcC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiBjdXJzb3ItcG9pbnRlciBmbGV4IGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTVkcgaWNvbiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgZmxleCBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogU1ZHIGljb24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IGZsZXgganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNWRyBpY29uICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJyZWxhdGVkLXBvc3RzXCIgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgYm9yZGVyLWwtNCBteS04IGJvcmRlci1ncmF5LTgwMCBwbC0yIHRleHQtZ3JheS03MDBcIj5SZWxhdGVkIFBvc3RzPC9wPlxuICAgICAgICAgICAgICAgIHtyZWxhdGVkUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgYm9yZGVyIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMiBsZzpjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvYWFhLnBuZ1wiIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG9cIiBhbHQ9XCJSZWxhdGVkIHBvc3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbWQ6Y29sLXNwYW4tMiBsZzpjb2wtc3Bhbi0xIHB4LTIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInNpbmdsZS5odG1sXCI+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+e3Bvc3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9hc2lkZT5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXSwibmFtZXMiOlsiU2lkZWJhciIsInByb2ZpbGVEYXRhIiwiY2F0ZWdvcmllcyIsIm5hbWUiLCJyZWxhdGVkUG9zdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXNpZGUiLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwidWwiLCJtYXAiLCJjYXRlZ29yeSIsImluZGV4IiwibGkiLCJpZCIsInVzZXJuYW1lIiwiYmlvIiwicG9zdCIsImltZyIsInNyYyIsImFsdCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Post/Sidebar.tsx\n"));

/***/ })

});