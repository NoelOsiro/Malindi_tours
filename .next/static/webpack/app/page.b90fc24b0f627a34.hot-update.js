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

/***/ "(app-pages-browser)/./src/components/Navbar/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// components/Navbar.tsx\n\n\nconst Navbar = ()=>{\n    _s();\n    const [scrolling, setScrolling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMenuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const isTop = window.scrollY < 10;\n            if (isTop !== scrolling) {\n                setScrolling(isTop);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        // Clean up the event listener when the component unmounts\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        scrolling\n    ]);\n    const toggleMenu = ()=>{\n        setMenuOpen(!isMenuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        id: \"header\",\n        className: \"fixed w-full z-30 top-0 text-white \".concat(scrolling ? \"\" : \"bg-white shadow\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-4 flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"toggleColour flex items-center justify-center \".concat(scrolling ? \"text-white\" : \"gradient-text\", \" no-underline hover:no-underline font-bold text-2xl lg:text-4xl\"),\n                            href: \"/\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: \"/beach.svg\",\n                                    alt: \"Your SVG\",\n                                    className: \"mr-4\",\n                                    width: 50,\n                                    height: 50\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, undefined),\n                                \"MaliCul\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block lg:hidden pr-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            id: \"nav-toggle\",\n                            className: \"flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out\",\n                            onClick: toggleMenu,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"fill-current h-6 w-6\",\n                                viewBox: \"0 0 20 20\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                        children: \"Menu\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex-grow lg:flex lg:items-center lg:w-auto \".concat(isMenuOpen ? \"block\" : \"hidden\", \" mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20\"),\n                        id: \"nav-content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"list-reset lg:flex justify-end flex-1 items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"mr-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4 font-bold \".concat(scrolling ? \"text-white\" : \"\"),\n                                            href: \"/blog\",\n                                            children: \"Blog\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"mr-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4 \".concat(scrolling ? \"text-white\" : \"\"),\n                                            href: \"/events\",\n                                            children: \"Events\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                id: \"navAction\",\n                                className: \"mx-auto lg:mx-0 hover:underline \".concat(scrolling ? \"bg-white\" : \"gradient text-white\", \" text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-2 px-6 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out\"),\n                                children: \"Post\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"border-b border-gray-100 opacity-25 my-0 py-0\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"e6xXmhZYhsK5DZMOK4oQ6uc0pOc=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSx3QkFBd0I7QUFDMkI7QUFDcEI7QUFFL0IsTUFBTUksU0FBbUI7O0lBQ3ZCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNLLFlBQVlDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsZUFBZTtZQUNuQixNQUFNQyxRQUFRQyxPQUFPQyxPQUFPLEdBQUc7WUFDL0IsSUFBSUYsVUFBVUwsV0FBVztnQkFDdkJDLGFBQWFJO1lBQ2Y7UUFDRjtRQUVBQyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSjtRQUVsQywwREFBMEQ7UUFDMUQsT0FBTztZQUNMRSxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVTDtRQUN2QztJQUNGLEdBQUc7UUFBQ0o7S0FBVTtJQUVkLE1BQU1VLGFBQWE7UUFDakJQLFlBQVksQ0FBQ0Q7SUFDZjtJQUVBLHFCQUNFLDhEQUFDUztRQUNDQyxJQUFHO1FBQ0hDLFdBQVcsc0NBRVYsT0FEQ2IsWUFBWSxLQUFLOzswQkFHbkIsOERBQUNjO2dCQUFJRCxXQUFVOztrQ0FFYiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNFOzRCQUNDRixXQUFXLGlEQUVWLE9BRENiLFlBQVksZUFBZSxpQkFDNUI7NEJBQ0RnQixNQUFLOzs4Q0FFTCw4REFBQ2xCLGtEQUFLQTtvQ0FDSm1CLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0pMLFdBQVU7b0NBQ1ZNLE9BQU87b0NBQ1BDLFFBQVE7Ozs7OztnQ0FDUjs7Ozs7Ozs7Ozs7O2tDQU1OLDhEQUFDTjt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ1E7NEJBQ0NULElBQUc7NEJBQ0hDLFdBQVU7NEJBQ1ZTLFNBQVNaO3NDQUVULDRFQUFDYTtnQ0FBSVYsV0FBVTtnQ0FBdUJXLFNBQVE7Z0NBQVlDLE9BQU07O2tEQUM5RCw4REFBQ0M7a0RBQU07Ozs7OztrREFDUCw4REFBQ0M7d0NBQUtDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTWQsOERBQUNkO3dCQUNDRCxXQUFXLHNEQUVWLE9BRENYLGFBQWEsVUFBVSxVQUN4Qjt3QkFDRFUsSUFBRzs7MENBRUgsOERBQUNpQjtnQ0FBR2hCLFdBQVU7O2tEQUVaLDhEQUFDaUI7d0NBQUdqQixXQUFVO2tEQUNaLDRFQUFDRTs0Q0FDQ0YsV0FBVyxxR0FFVixPQURDYixZQUFZLGVBQWU7NENBRTdCZ0IsTUFBSztzREFDTjs7Ozs7Ozs7Ozs7a0RBSUgsOERBQUNjO3dDQUFHakIsV0FBVTtrREFDWiw0RUFBQ0U7NENBQ0NGLFdBQVcsMkZBRVYsT0FEQ2IsWUFBWSxlQUFlOzRDQUU3QmdCLE1BQUs7c0RBQ047Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQVFMLDhEQUFDSztnQ0FDQ1QsSUFBRztnQ0FDSEMsV0FBVyxtQ0FFVixPQURDYixZQUFZLGFBQWEsdUJBQzFCOzBDQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS0wsOERBQUMrQjtnQkFBR2xCLFdBQVU7Ozs7Ozs7Ozs7OztBQUdwQjtHQS9HTWQ7S0FBQUE7QUFpSE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci50c3g/NmNiMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbi8vIGNvbXBvbmVudHMvTmF2YmFyLnRzeFxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IE5hdmJhcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzY3JvbGxpbmcsIHNldFNjcm9sbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpc1RvcCA9IHdpbmRvdy5zY3JvbGxZIDwgMTA7XG4gICAgICBpZiAoaXNUb3AgIT09IHNjcm9sbGluZykge1xuICAgICAgICBzZXRTY3JvbGxpbmcoaXNUb3ApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcblxuICAgIC8vIENsZWFuIHVwIHRoZSBldmVudCBsaXN0ZW5lciB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW3Njcm9sbGluZ10pO1xuXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0TWVudU9wZW4oIWlzTWVudU9wZW4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG5hdlxuICAgICAgaWQ9XCJoZWFkZXJcIlxuICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgdy1mdWxsIHotMzAgdG9wLTAgdGV4dC13aGl0ZSAke1xuICAgICAgICBzY3JvbGxpbmcgPyAnJyA6ICdiZy13aGl0ZSBzaGFkb3cnXG4gICAgICB9YH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTAgcHktMlwiPlxuICAgICAgICB7LyogWW91ciBsb2dvIGFuZCBicmFuZCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRvZ2dsZUNvbG91ciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAke1xuICAgICAgICAgICAgICBzY3JvbGxpbmcgPyAndGV4dC13aGl0ZScgOiAnZ3JhZGllbnQtdGV4dCdcbiAgICAgICAgICAgIH0gbm8tdW5kZXJsaW5lIGhvdmVyOm5vLXVuZGVybGluZSBmb250LWJvbGQgdGV4dC0yeGwgbGc6dGV4dC00eGxgfVxuICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvYmVhY2guc3ZnXCJcbiAgICAgICAgICAgICAgYWx0PVwiWW91ciBTVkdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci00XCJcbiAgICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIE1hbGlDdWxcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBIYW1idXJnZXIgYnV0dG9uIGZvciBtb2JpbGUgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbGc6aGlkZGVuIHByLTRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBpZD1cIm5hdi10b2dnbGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0xIHRleHQtcGluay04MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gaG92ZXI6c2NhbGUtMTA1IGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNZW51fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtNiB3LTZcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICA8dGl0bGU+TWVudTwvdGl0bGU+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAzaDIwdjJIMFYzem0wIDZoMjB2MkgwVjl6bTAgNmgyMHYySDB2LTJ6XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTmF2aWdhdGlvbiBsaW5rcyAqL31cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBmbGV4LWdyb3cgbGc6ZmxleCBsZzppdGVtcy1jZW50ZXIgbGc6dy1hdXRvICR7XG4gICAgICAgICAgICBpc01lbnVPcGVuID8gJ2Jsb2NrJyA6ICdoaWRkZW4nXG4gICAgICAgICAgfSBtdC0yIGxnOm10LTAgYmctd2hpdGUgbGc6YmctdHJhbnNwYXJlbnQgdGV4dC1ibGFjayBwLTQgbGc6cC0wIHotMjBgfVxuICAgICAgICAgIGlkPVwibmF2LWNvbnRlbnRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtcmVzZXQgbGc6ZmxleCBqdXN0aWZ5LWVuZCBmbGV4LTEgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICB7LyogWW91ciBuYXZpZ2F0aW9uIGxpbmtzICovfVxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yLTNcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbmxpbmUtYmxvY2sgdGV4dC1ibGFjayBuby11bmRlcmxpbmUgaG92ZXI6dGV4dC1ncmF5LTgwMCBob3Zlcjp0ZXh0LXVuZGVybGluZSBweS0yIHB4LTQgZm9udC1ib2xkICR7XG4gICAgICAgICAgICAgICAgICBzY3JvbGxpbmcgPyAndGV4dC13aGl0ZScgOiAnJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIGhyZWY9XCIvYmxvZ1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBCbG9nXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXItM1wiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlubGluZS1ibG9jayB0ZXh0LWJsYWNrIG5vLXVuZGVybGluZSBob3Zlcjp0ZXh0LWdyYXktODAwIGhvdmVyOnRleHQtdW5kZXJsaW5lIHB5LTIgcHgtNCAke1xuICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nID8gJ3RleHQtd2hpdGUnIDogJydcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICBocmVmPVwiL2V2ZW50c1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFdmVudHNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIHsvKiBBZGQgb3RoZXIgbmF2aWdhdGlvbiBsaW5rcyBhcyBuZWVkZWQgKi99XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIHsvKiBZb3VyIHBvc3QgYnV0dG9uICovfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGlkPVwibmF2QWN0aW9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG14LWF1dG8gbGc6bXgtMCBob3Zlcjp1bmRlcmxpbmUgJHtcbiAgICAgICAgICAgICAgc2Nyb2xsaW5nID8gJ2JnLXdoaXRlJyA6ICdncmFkaWVudCB0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgfSB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCByb3VuZGVkLWZ1bGwgbXQtNCBsZzptdC0wIHB5LTIgcHgtNiBzaGFkb3cgb3BhY2l0eS03NSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gaG92ZXI6c2NhbGUtMTA1IGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUG9zdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGhyIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTEwMCBvcGFjaXR5LTI1IG15LTAgcHktMFwiIC8+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTmF2YmFyIiwic2Nyb2xsaW5nIiwic2V0U2Nyb2xsaW5nIiwiaXNNZW51T3BlbiIsInNldE1lbnVPcGVuIiwiaGFuZGxlU2Nyb2xsIiwiaXNUb3AiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVNZW51IiwibmF2IiwiaWQiLCJjbGFzc05hbWUiLCJkaXYiLCJhIiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInZpZXdCb3giLCJ4bWxucyIsInRpdGxlIiwicGF0aCIsImQiLCJ1bCIsImxpIiwiaHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar/Navbar.tsx\n"));

/***/ })

});