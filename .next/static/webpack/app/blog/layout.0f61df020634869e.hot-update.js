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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// components/Navbar.tsx\n\n\n\n// Define an array of navigation links\nconst navLinks = [\n    {\n        label: \"Blog\",\n        href: \"/blog\"\n    },\n    {\n        label: \"Explore\",\n        href: \"/explore\"\n    },\n    {\n        label: \"Events\",\n        href: \"/events\"\n    },\n    {\n        label: \"Commerce\",\n        href: \"/commerce\"\n    }\n];\nconst Navbar = ()=>{\n    _s();\n    const [scrolling, setScrolling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMenuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const isTop = window.scrollY < 10;\n            if (isTop !== scrolling) {\n                setScrolling(isTop);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        // Clean up the event listener when the component unmounts\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        scrolling\n    ]);\n    const toggleMenu = ()=>{\n        setMenuOpen(!isMenuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        id: \"header\",\n        className: \"fixed w-full h-[65px] px-2 z-30 top-0 text-white \".concat(scrolling ? \"\" : \"bg-white shadow\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-4 flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"toggleColour flex items-center justify-center \".concat(scrolling ? \"text-white\" : \"gradient-text\", \" no-underline hover:no-underline font-bold text-2xl lg:text-4xl\"),\n                            href: \"/\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: \"/beach.svg\",\n                                    alt: \"Malicul\",\n                                    className: \"mr-4\",\n                                    width: 45,\n                                    height: 45\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined),\n                                \"MaliCul\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block lg:hidden pr-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            id: \"nav-toggle\",\n                            className: \"flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out\",\n                            onClick: toggleMenu,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"fill-current h-6 w-6\",\n                                viewBox: \"0 0 20 20\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                        children: \"Menu\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex-grow lg:flex lg:items-center lg:w-auto \".concat(isMenuOpen ? \"block\" : \"hidden\", \" mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 sidenav overlay\"),\n                        id: \"nav-content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"list-reset lg:flex justify-end flex-1 items-center\",\n                                children: navLinks.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"mr-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4\\n                  \".concat(scrolling ? \"text-white\" : \"\", \"\\n                  \").concat(pathname === link.href ? \"font-bold\" : \"\"),\n                                            href: link.href,\n                                            children: link.label\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                id: \"navAction\",\n                                className: \"mx-auto lg:mx-0 hover:underline \".concat(scrolling ? \"bg-white\" : \"gradient text-white\", \" text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-2 px-6 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out\"),\n                                children: \"Post\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"border-b border-gray-100 opacity-25 my-0 py-0\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Malindi_tours/src/components/Navbar/Navbar.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"vYkQdlvhsxjly4fu3kYJE7tCYow=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esd0JBQXdCO0FBQzJCO0FBQ3BCO0FBQ2U7QUFFOUMsc0NBQXNDO0FBQ3RDLE1BQU1LLFdBQVc7SUFDZjtRQUFFQyxPQUFPO1FBQVFDLE1BQU07SUFBUTtJQUMvQjtRQUFFRCxPQUFPO1FBQVdDLE1BQU07SUFBVztJQUNyQztRQUFFRCxPQUFPO1FBQVVDLE1BQU07SUFBVTtJQUNuQztRQUFFRCxPQUFPO1FBQVlDLE1BQU07SUFBWTtDQUV4QztBQUVELE1BQU1DLFNBQW1COztJQUN2QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUyxZQUFZQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1XLFdBQVdULDREQUFXQTtJQUU1QkgsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxlQUFlO1lBQ25CLE1BQU1DLFFBQVFDLE9BQU9DLE9BQU8sR0FBRztZQUMvQixJQUFJRixVQUFVTixXQUFXO2dCQUN2QkMsYUFBYUs7WUFDZjtRQUNGO1FBRUFDLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVKO1FBRWxDLDBEQUEwRDtRQUMxRCxPQUFPO1lBQ0xFLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVMO1FBQ3ZDO0lBQ0YsR0FBRztRQUFDTDtLQUFVO0lBRWQsTUFBTVcsYUFBYTtRQUNqQlIsWUFBWSxDQUFDRDtJQUNmO0lBRUEscUJBQ0UsOERBQUNVO1FBQ0NDLElBQUc7UUFDSEMsV0FBVyxvREFBdUYsT0FBbkNkLFlBQVksS0FBSzs7MEJBRWhGLDhEQUFDZTtnQkFBSUQsV0FBVTs7a0NBRWIsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDRTs0QkFDQ0YsV0FBVyxpREFFVixPQURDZCxZQUFZLGVBQWUsaUJBQzVCOzRCQUNERixNQUFLOzs4Q0FFTCw4REFBQ0osa0RBQUtBO29DQUFDdUIsS0FBSTtvQ0FBYUMsS0FBSTtvQ0FBVUosV0FBVTtvQ0FBT0ssT0FBTztvQ0FBSUMsUUFBUTs7Ozs7O2dDQUFNOzs7Ozs7Ozs7Ozs7a0NBTXBGLDhEQUFDTDt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ087NEJBQ0NSLElBQUc7NEJBQ0hDLFdBQVU7NEJBQ1ZRLFNBQVNYO3NDQUVULDRFQUFDWTtnQ0FBSVQsV0FBVTtnQ0FBdUJVLFNBQVE7Z0NBQVlDLE9BQU07O2tEQUM5RCw4REFBQ0M7a0RBQU07Ozs7OztrREFDUCw4REFBQ0M7d0NBQUtDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTWQsOERBQUNiO3dCQUNDRCxXQUFXLHNEQUVWLE9BRENaLGFBQWEsVUFBVSxVQUN4Qjt3QkFDRFcsSUFBRzs7MENBRUgsOERBQUNnQjtnQ0FBR2YsV0FBVTswQ0FFWGxCLFNBQVNrQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ25CLDhEQUFDQzt3Q0FBR25CLFdBQVU7a0RBQ1osNEVBQUNFOzRDQUNDRixXQUFXLDhHQUVUVixPQURBSixZQUFZLGVBQWUsSUFBRyx3QkFDVyxPQUF6Q0ksYUFBYTJCLEtBQUtqQyxJQUFJLEdBQUcsY0FBYTs0Q0FDeENBLE1BQU1pQyxLQUFLakMsSUFBSTtzREFFZGlDLEtBQUtsQyxLQUFLOzs7Ozs7dUNBUFdtQzs7Ozs7Ozs7OzswQ0FjOUIsOERBQUNYO2dDQUNDUixJQUFHO2dDQUNIQyxXQUFXLG1DQUVWLE9BRENkLFlBQVksYUFBYSx1QkFDMUI7MENBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLTCw4REFBQ2tDO2dCQUFHcEIsV0FBVTs7Ozs7Ozs7Ozs7O0FBR3BCO0dBL0ZNZjs7UUFHYUosd0RBQVdBOzs7S0FIeEJJO0FBaUdOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIudHN4PzZjYjAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG4vLyBjb21wb25lbnRzL05hdmJhci50c3hcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG4vLyBEZWZpbmUgYW4gYXJyYXkgb2YgbmF2aWdhdGlvbiBsaW5rc1xuY29uc3QgbmF2TGlua3MgPSBbXG4gIHsgbGFiZWw6ICdCbG9nJywgaHJlZjogJy9ibG9nJyB9LFxuICB7IGxhYmVsOiAnRXhwbG9yZScsIGhyZWY6ICcvZXhwbG9yZScgfSxcbiAgeyBsYWJlbDogJ0V2ZW50cycsIGhyZWY6ICcvZXZlbnRzJyB9LFxuICB7IGxhYmVsOiAnQ29tbWVyY2UnLCBocmVmOiAnL2NvbW1lcmNlJyB9LFxuICAvLyBBZGQgb3RoZXIgbGlua3MgYXMgbmVlZGVkXG5dO1xuXG5jb25zdCBOYXZiYXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbc2Nyb2xsaW5nLCBzZXRTY3JvbGxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpc1RvcCA9IHdpbmRvdy5zY3JvbGxZIDwgMTA7XG4gICAgICBpZiAoaXNUb3AgIT09IHNjcm9sbGluZykge1xuICAgICAgICBzZXRTY3JvbGxpbmcoaXNUb3ApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcblxuICAgIC8vIENsZWFuIHVwIHRoZSBldmVudCBsaXN0ZW5lciB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW3Njcm9sbGluZ10pO1xuXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0TWVudU9wZW4oIWlzTWVudU9wZW4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG5hdlxuICAgICAgaWQ9XCJoZWFkZXJcIlxuICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgdy1mdWxsIGgtWzY1cHhdIHB4LTIgei0zMCB0b3AtMCB0ZXh0LXdoaXRlICR7c2Nyb2xsaW5nID8gJycgOiAnYmctd2hpdGUgc2hhZG93J31gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtMCBweS0yXCI+XG4gICAgICAgIHsvKiBZb3VyIGxvZ28gYW5kIGJyYW5kICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdG9nZ2xlQ29sb3VyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICR7XG4gICAgICAgICAgICAgIHNjcm9sbGluZyA/ICd0ZXh0LXdoaXRlJyA6ICdncmFkaWVudC10ZXh0J1xuICAgICAgICAgICAgfSBuby11bmRlcmxpbmUgaG92ZXI6bm8tdW5kZXJsaW5lIGZvbnQtYm9sZCB0ZXh0LTJ4bCBsZzp0ZXh0LTR4bGB9XG4gICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9iZWFjaC5zdmdcIiBhbHQ9XCJNYWxpY3VsXCIgY2xhc3NOYW1lPVwibXItNFwiIHdpZHRoPXs0NX0gaGVpZ2h0PXs0NX0gLz5cbiAgICAgICAgICAgIE1hbGlDdWxcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBIYW1idXJnZXIgYnV0dG9uIGZvciBtb2JpbGUgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbGc6aGlkZGVuIHByLTRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBpZD1cIm5hdi10b2dnbGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0xIHRleHQtcGluay04MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gaG92ZXI6c2NhbGUtMTA1IGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNZW51fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtNiB3LTZcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICA8dGl0bGU+TWVudTwvdGl0bGU+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAzaDIwdjJIMFYzem0wIDZoMjB2MkgwVjl6bTAgNmgyMHYySDB2LTJ6XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTmF2aWdhdGlvbiBsaW5rcyAqL31cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBmbGV4LWdyb3cgbGc6ZmxleCBsZzppdGVtcy1jZW50ZXIgbGc6dy1hdXRvICR7XG4gICAgICAgICAgICBpc01lbnVPcGVuID8gJ2Jsb2NrJyA6ICdoaWRkZW4nXG4gICAgICAgICAgfSBtdC0yIGxnOm10LTAgYmctd2hpdGUgbGc6YmctdHJhbnNwYXJlbnQgdGV4dC1ibGFjayBwLTQgbGc6cC0wIHotMjAgc2lkZW5hdiBvdmVybGF5YH1cbiAgICAgICAgICBpZD1cIm5hdi1jb250ZW50XCJcbiAgICAgICAgPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXJlc2V0IGxnOmZsZXgganVzdGlmeS1lbmQgZmxleC0xIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgey8qIER5bmFtaWNhbGx5IGdlbmVyYXRlIG5hdmlnYXRpb24gbGlua3MgKi99XG4gICAgICAgICAgICB7bmF2TGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXItM1wiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbmxpbmUtYmxvY2sgdGV4dC1ibGFjayBuby11bmRlcmxpbmUgaG92ZXI6dGV4dC1ncmF5LTgwMCBob3Zlcjp0ZXh0LXVuZGVybGluZSBweS0yIHB4LTRcbiAgICAgICAgICAgICAgICAgICR7c2Nyb2xsaW5nID8gJ3RleHQtd2hpdGUnIDogJyd9XG4gICAgICAgICAgICAgICAgICAke3BhdGhuYW1lID09PSBsaW5rLmhyZWYgPyAnZm9udC1ib2xkJzogJyd9YH1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bGluay5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgey8qIFlvdXIgcG9zdCBidXR0b24gKi99XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJuYXZBY3Rpb25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbXgtYXV0byBsZzpteC0wIGhvdmVyOnVuZGVybGluZSAke1xuICAgICAgICAgICAgICBzY3JvbGxpbmcgPyAnYmctd2hpdGUnIDogJ2dyYWRpZW50IHRleHQtd2hpdGUnXG4gICAgICAgICAgICB9IHRleHQtZ3JheS04MDAgZm9udC1ib2xkIHJvdW5kZWQtZnVsbCBtdC00IGxnOm10LTAgcHktMiBweC02IHNoYWRvdyBvcGFjaXR5LTc1IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBob3ZlcjpzY2FsZS0xMDUgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBQb3N0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8aHIgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMTAwIG9wYWNpdHktMjUgbXktMCBweS0wXCIgLz5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJ1c2VQYXRobmFtZSIsIm5hdkxpbmtzIiwibGFiZWwiLCJocmVmIiwiTmF2YmFyIiwic2Nyb2xsaW5nIiwic2V0U2Nyb2xsaW5nIiwiaXNNZW51T3BlbiIsInNldE1lbnVPcGVuIiwicGF0aG5hbWUiLCJoYW5kbGVTY3JvbGwiLCJpc1RvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU1lbnUiLCJuYXYiLCJpZCIsImNsYXNzTmFtZSIsImRpdiIsImEiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdmciLCJ2aWV3Qm94IiwieG1sbnMiLCJ0aXRsZSIsInBhdGgiLCJkIiwidWwiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJsaSIsImhyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar/Navbar.tsx\n"));

/***/ })

});