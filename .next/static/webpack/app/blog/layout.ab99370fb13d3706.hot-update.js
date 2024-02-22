"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blog/layout",{

/***/ "(app-pages-browser)/./src/components/Navbar/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Navbar = ()=>{\n    _s();\n    const [scrolling, setScrolling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const isTop = window.scrollY < 10;\n            if (isTop !== scrolling) {\n                setScrolling(isTop);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        // Clean up the event listener when the component unmounts\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        scrolling\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        id: \"header\",\n        className: \"fixed w-full z-30 top-0 text-white \".concat(scrolling ? \"\" : \"bg-white shadow\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-4 flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"toggleColour flex align ce \".concat(scrolling ? \"text-white\" : \"gradient-text\", \" no-underline hover:no-underline font-bold text-2xl lg:text-4xl\"),\n                            href: \"/\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: \"/beach.svg\",\n                                    alt: \"Your SVG\",\n                                    width: 50,\n                                    height: 50\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 21\n                                }, undefined),\n                                \"MaliCul\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block lg:hidden pr-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            id: \"nav-toggle\",\n                            className: \"flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"fill-current h-6 w-6\",\n                                viewBox: \"0 0 20 20\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                        children: \"Menu\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20\",\n                        id: \"nav-content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"list-reset lg:flex justify-end flex-1 items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"mr-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"inline-block text-black no-underline py-2 px-4  font-bold \".concat(scrolling ? \"text-white\" : \"\"),\n                                            href: \"#\",\n                                            children: \"Active\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"mr-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4 \".concat(scrolling ? \"text-white\" : \"\"),\n                                            href: \"#\",\n                                            children: \"link\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"mr-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4 \".concat(scrolling ? \"text-white\" : \"\"),\n                                            href: \"#\",\n                                            children: \"link\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                id: \"navAction\",\n                                className: \"mx-auto lg:mx-0 hover:underline \".concat(scrolling ? \"bg-white\" : \"gradient text-white\", \" text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out\"),\n                                children: \"Action\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"border-b border-gray-100 opacity-25 my-0 py-0\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navbar, \"CyOm2JjlLunxRpKA4hUTJhVIhnQ=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDbUQ7QUFDcEI7QUFFL0IsTUFBTUksU0FBUzs7SUFDWCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBQUM7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ04sTUFBTU0sZUFBZTtZQUNuQixNQUFNQyxRQUFRQyxPQUFPQyxPQUFPLEdBQUc7WUFDL0IsSUFBSUYsVUFBVUgsV0FBVztnQkFDdkJDLGFBQWFFO1lBQ2Y7UUFDRjtRQUVBQyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSjtRQUVsQywwREFBMEQ7UUFDMUQsT0FBTztZQUNMRSxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVTDtRQUN2QztJQUNGLEdBQUc7UUFBQ0Y7S0FBVTtJQUVoQixxQkFDSSw4REFBQ1E7UUFBSUMsSUFBRztRQUFTQyxXQUFXLHNDQUF3RSxPQUFsQ1YsWUFBWSxLQUFJOzswQkFDOUUsOERBQUNXO2dCQUFJRCxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ1gsNEVBQUNFOzRCQUFFRixXQUFXLDhCQUF3RSxPQUExQ1YsWUFBWSxlQUFjLGlCQUFnQjs0QkFBa0VhLE1BQUs7OzhDQUM3Siw4REFBQ2Ysa0RBQUtBO29DQUNsQmdCLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0pDLE9BQU87b0NBQ1BDLFFBQVE7Ozs7OztnQ0FDUjs7Ozs7Ozs7Ozs7O2tDQUtRLDhEQUFDTjt3QkFBSUQsV0FBVTtrQ0FDWCw0RUFBQ1E7NEJBQU9ULElBQUc7NEJBQWFDLFdBQVU7c0NBQzlCLDRFQUFDUztnQ0FBSVQsV0FBVTtnQ0FBdUJVLFNBQVE7Z0NBQVlDLE9BQU07O2tEQUM1RCw4REFBQ0M7a0RBQU07Ozs7OztrREFDUCw4REFBQ0M7d0NBQUtDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSXBCLDhEQUFDYjt3QkFBSUQsV0FBVTt3QkFBK0hELElBQUc7OzBDQUM3SSw4REFBQ2dCO2dDQUFHZixXQUFVOztrREFDViw4REFBQ2dCO3dDQUFHaEIsV0FBVTtrREFDViw0RUFBQ0U7NENBQUVGLFdBQVcsNkRBQTBGLE9BQTdCVixZQUFZLGVBQWM7NENBQU1hLE1BQUs7c0RBQUk7Ozs7Ozs7Ozs7O2tEQUV4SCw4REFBQ2E7d0NBQUdoQixXQUFVO2tEQUNWLDRFQUFDRTs0Q0FBRUYsV0FBVywyRkFBd0gsT0FBN0JWLFlBQVksZUFBYzs0Q0FBTWEsTUFBSztzREFBSTs7Ozs7Ozs7Ozs7a0RBRXRKLDhEQUFDYTt3Q0FBR2hCLFdBQVU7a0RBQ1YsNEVBQUNFOzRDQUFFRixXQUFXLDJGQUF3SCxPQUE3QlYsWUFBWSxlQUFjOzRDQUFNYSxNQUFLO3NEQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHMUosOERBQUNLO2dDQUNHVCxJQUFHO2dDQUNIQyxXQUFXLG1DQUFnRixPQUE3Q1YsWUFBWSxhQUFXLHVCQUFzQjswQ0FDOUY7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLVCw4REFBQzJCO2dCQUFHakIsV0FBVTs7Ozs7Ozs7Ozs7O0FBRzFCO0dBakVNWDtLQUFBQTtBQW1FTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLnRzeD82Y2IwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgICBjb25zdCBbc2Nyb2xsaW5nLCBzZXRTY3JvbGxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzVG9wID0gd2luZG93LnNjcm9sbFkgPCAxMDtcbiAgICAgICAgICBpZiAoaXNUb3AgIT09IHNjcm9sbGluZykge1xuICAgICAgICAgICAgc2V0U2Nyb2xsaW5nKGlzVG9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIFxuICAgICAgICAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICB9LCBbc2Nyb2xsaW5nXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGlkPVwiaGVhZGVyXCIgY2xhc3NOYW1lPXtgZml4ZWQgdy1mdWxsIHotMzAgdG9wLTAgdGV4dC13aGl0ZSAke3Njcm9sbGluZyA/ICcnOiAnYmctd2hpdGUgc2hhZG93J31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtMCBweS0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YHRvZ2dsZUNvbG91ciBmbGV4IGFsaWduIGNlICR7c2Nyb2xsaW5nID8gJ3RleHQtd2hpdGUnOiAnZ3JhZGllbnQtdGV4dCd9IG5vLXVuZGVybGluZSBob3Zlcjpuby11bmRlcmxpbmUgZm9udC1ib2xkIHRleHQtMnhsIGxnOnRleHQtNHhsYH0gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgIHNyYz1cIi9iZWFjaC5zdmdcIlxuICAgICAgICBhbHQ9XCJZb3VyIFNWR1wiXG4gICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hbGlDdWxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbGc6aGlkZGVuIHByLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm5hdi10b2dnbGVcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTEgdGV4dC1waW5rLTgwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBob3ZlcjpzY2FsZS0xMDUgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBoLTYgdy02XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TWVudTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDNoMjB2MkgwVjN6bTAgNmgyMHYySDBWOXptMCA2aDIwdjJIMHYtMnpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgtZ3JvdyBsZzpmbGV4IGxnOml0ZW1zLWNlbnRlciBsZzp3LWF1dG8gaGlkZGVuIG10LTIgbGc6bXQtMCBiZy13aGl0ZSBsZzpiZy10cmFuc3BhcmVudCB0ZXh0LWJsYWNrIHAtNCBsZzpwLTAgei0yMFwiIGlkPVwibmF2LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtcmVzZXQgbGc6ZmxleCBqdXN0aWZ5LWVuZCBmbGV4LTEgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGlubGluZS1ibG9jayB0ZXh0LWJsYWNrIG5vLXVuZGVybGluZSBweS0yIHB4LTQgIGZvbnQtYm9sZCAke3Njcm9sbGluZyA/ICd0ZXh0LXdoaXRlJzogJyd9YH0gaHJlZj1cIiNcIj5BY3RpdmU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtci0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgaW5saW5lLWJsb2NrIHRleHQtYmxhY2sgbm8tdW5kZXJsaW5lIGhvdmVyOnRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC11bmRlcmxpbmUgcHktMiBweC00ICR7c2Nyb2xsaW5nID8gJ3RleHQtd2hpdGUnOiAnJ31gfSBocmVmPVwiI1wiPmxpbms8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BpbmxpbmUtYmxvY2sgdGV4dC1ibGFjayBuby11bmRlcmxpbmUgaG92ZXI6dGV4dC1ncmF5LTgwMCBob3Zlcjp0ZXh0LXVuZGVybGluZSBweS0yIHB4LTQgJHtzY3JvbGxpbmcgPyAndGV4dC13aGl0ZSc6ICcnfWB9IGhyZWY9XCIjXCI+bGluazwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmF2QWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG14LWF1dG8gbGc6bXgtMCBob3Zlcjp1bmRlcmxpbmUgJHtzY3JvbGxpbmcgPyAnYmctd2hpdGUnOidncmFkaWVudCB0ZXh0LXdoaXRlJ30gdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgcm91bmRlZC1mdWxsIG10LTQgbGc6bXQtMCBweS00IHB4LTggc2hhZG93IG9wYWNpdHktNzUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGhvdmVyOnNjYWxlLTEwNSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0xMDAgb3BhY2l0eS0yNSBteS0wIHB5LTBcIiAvPlxuICAgICAgICA8L25hdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIk5hdmJhciIsInNjcm9sbGluZyIsInNldFNjcm9sbGluZyIsImhhbmRsZVNjcm9sbCIsImlzVG9wIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmF2IiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJhIiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiYnV0dG9uIiwic3ZnIiwidmlld0JveCIsInhtbG5zIiwidGl0bGUiLCJwYXRoIiwiZCIsInVsIiwibGkiLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar/Navbar.tsx\n"));

/***/ })

});