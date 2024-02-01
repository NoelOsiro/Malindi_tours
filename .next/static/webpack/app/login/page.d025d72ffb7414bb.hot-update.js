"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/page.tsx":
/*!********************************!*\
  !*** ./src/app/login/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BackgroundSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BackgroundSection */ \"(app-pages-browser)/./src/app/login/components/BackgroundSection.tsx\");\n/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/LoginForm */ \"(app-pages-browser)/./src/app/login/components/LoginForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    // State for form fields\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    // State for form errors\n    const [formErrors, setFormErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    // Function to handle form field changes\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    // Function to handle form submission\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Perform form validation\n        let errors = {\n            email: \"\",\n            password: \"\"\n        };\n        if (!formData.email) {\n            errors.email = \"Email is required\";\n        }\n        if (!formData.password) {\n            errors.password = \"Password is required\";\n        }\n        if (Object.keys(errors).length > 0) {\n            setFormErrors(errors);\n            return;\n        }\n        // Mock API call\n        try {\n            const response = await fetch(\"https://dummyjson.com/auth/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formData)\n            });\n            const data = await response.json();\n            console.log(\"API response:\", data);\n        // Handle success or failure\n        } catch (error) {\n            console.error(\"Error:\", error);\n        // Handle error\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"min-h-screen flex items-stretch text-white \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BackgroundSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-1/2 w-full bg-gray-900 flex items-center justify-center text-center p-16\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full py-6 z-20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"my-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    viewBox: \"0 0 247 31\",\n                                    className: \"w-auto h-7 sm:h-8 inline-flex\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            fill: \"rgba(99,102,241, .8)\",\n                                            fillRule: \"evenodd\",\n                                            clipRule: \"evenodd\",\n                                            d: \"M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 97\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            fill: \"#fff\",\n                                            fillRule: \"evenodd\",\n                                            clipRule: \"evenodd\",\n                                            d: \"M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z\"\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 759\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"py-6 flex justify-between\",\n                                style: {\n                                    marginLeft: \"25%\",\n                                    marginRight: \"25%\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white\",\n                                        children: \"f\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white\",\n                                        children: \"G+\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white\",\n                                        children: \"in\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-100\",\n                                children: \"or use email your account\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                formData: formData,\n                                formErrors: f,\n                                handleInputChange: undefined,\n                                handleSubmit: undefined\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n            lineNumber: 69,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"synF9elHYE82VZywDuz9dWWPlQQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDeUQ7QUFFTTtBQUNoQjtBQUVoQyxTQUFTRzs7SUFDcEIsd0JBQXdCO0lBQ3hCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUNyQ00sT0FBTztRQUNQQyxVQUFVO0lBQ2Q7SUFFQSx3QkFBd0I7SUFDeEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO1FBQ3pDTSxPQUFPO1FBQ1BDLFVBQVU7SUFDZDtJQUVBLHdDQUF3QztJQUN4QyxNQUFNRyxvQkFBb0IsQ0FBQ0M7UUFDdkIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDVCxZQUFZO1lBQ1IsR0FBR0QsUUFBUTtZQUNYLENBQUNRLEtBQUssRUFBRUM7UUFDWjtJQUNKO0lBRUEscUNBQXFDO0lBQ3JDLE1BQU1FLGVBQWUsT0FBT0o7UUFDeEJBLEVBQUVLLGNBQWM7UUFFaEIsMEJBQTBCO1FBQzFCLElBQUlDLFNBQVM7WUFDVFgsT0FBTztZQUNQQyxVQUFVO1FBQ2Q7UUFDQSxJQUFJLENBQUNILFNBQVNFLEtBQUssRUFBRTtZQUNqQlcsT0FBT1gsS0FBSyxHQUFHO1FBQ25CO1FBQ0EsSUFBSSxDQUFDRixTQUFTRyxRQUFRLEVBQUU7WUFDcEJVLE9BQU9WLFFBQVEsR0FBRztRQUN0QjtRQUNBLElBQUlXLE9BQU9DLElBQUksQ0FBQ0YsUUFBUUcsTUFBTSxHQUFHLEdBQUc7WUFDaENYLGNBQWNRO1lBQ2Q7UUFDSjtRQUVBLGdCQUFnQjtRQUNoQixJQUFJO1lBQ0EsTUFBTUksV0FBVyxNQUFNQyxNQUFNLG9DQUFvQztnQkFDN0RDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDdkI7WUFDekI7WUFDQSxNQUFNd0IsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO1lBQ2hDQyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCSDtRQUM3Qiw0QkFBNEI7UUFDaEMsRUFBRSxPQUFPSSxPQUFPO1lBQ1pGLFFBQVFFLEtBQUssQ0FBQyxVQUFVQTtRQUN4QixlQUFlO1FBQ25CO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0M7UUFBS0MsV0FBVTtrQkFDWiw0RUFBQ0M7WUFBUUQsV0FBVTs7OEJBRWYsOERBQUNqQyxxRUFBaUJBOzs7Ozs4QkFFbEIsOERBQUNtQztvQkFBSUYsV0FBVTs4QkFDWCw0RUFBQ0U7d0JBQUlGLFdBQVU7OzBDQUNYLDhEQUFDRztnQ0FBR0gsV0FBVTswQ0FDViw0RUFBQ0k7b0NBQUlDLFNBQVE7b0NBQWFMLFdBQVU7O3NEQUFnQyw4REFBQ007NENBQUtDLE1BQUs7NENBQXVCQyxVQUFTOzRDQUFVQyxVQUFTOzRDQUFVQyxHQUFFOzs7Ozs7c0RBQTRrQiw4REFBQ0o7NENBQUtDLE1BQUs7NENBQU9DLFVBQVM7NENBQVVDLFVBQVM7NENBQVVDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUV4eEIsOERBQUNSO2dDQUFJRixXQUFVO2dDQUE0QlcsT0FBTztvQ0FBQ0MsWUFBVztvQ0FBTUMsYUFBWTtnQ0FBSzs7a0RBQ2pGLDhEQUFDQzt3Q0FBS2QsV0FBVTtrREFBeUc7Ozs7OztrREFDekgsOERBQUNjO3dDQUFLZCxXQUFVO2tEQUF5Rzs7Ozs7O2tEQUN6SCw4REFBQ2M7d0NBQUtkLFdBQVU7a0RBQXlHOzs7Ozs7Ozs7Ozs7MENBRTdILDhEQUFDZTtnQ0FBRWYsV0FBVTswQ0FBZ0I7Ozs7OzswQ0FHN0IsOERBQUNoQyw2REFBU0E7Z0NBQ1ZFLFVBQVVBO2dDQUNWSSxZQUFZMEM7Z0NBQUd4QyxtQkFBbUJ5QztnQ0FBV3BDLGNBQWNvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuRjtHQXpGd0JoRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL3BhZ2UudHN4P2ZjNjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyBDaGFuZ2VFdmVudCwgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTb2NpYWxNZWRpYUljb25zIGZyb20gJy4vY29tcG9uZW50cy9Tb2NpYWxNZWRpYUljb25zJztcbmltcG9ydCBCYWNrZ3JvdW5kU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQmFja2dyb3VuZFNlY3Rpb24nO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICAvLyBTdGF0ZSBmb3IgZm9ybSBmaWVsZHNcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgfSk7XG5cbiAgICAvLyBTdGF0ZSBmb3IgZm9ybSBlcnJvcnNcbiAgICBjb25zdCBbZm9ybUVycm9ycywgc2V0Rm9ybUVycm9yc10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIH0pO1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGZvcm0gZmllbGQgY2hhbmdlc1xuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBQZXJmb3JtIGZvcm0gdmFsaWRhdGlvblxuICAgICAgICBsZXQgZXJyb3JzID0ge1xuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoIWZvcm1EYXRhLmVtYWlsKSB7XG4gICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgcmVxdWlyZWQnO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZm9ybURhdGEucGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBpcyByZXF1aXJlZCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0Rm9ybUVycm9ycyhlcnJvcnMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTW9jayBBUEkgY2FsbFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kdW1teWpzb24uY29tL2F1dGgvbG9naW4nLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FQSSByZXNwb25zZTonLCBkYXRhKTtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBzdWNjZXNzIG9yIGZhaWx1cmVcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvclxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtc3RyZXRjaCB0ZXh0LXdoaXRlIFwiPlxuICAgICAgICAgICAgICAgIHsvKiBCYWNrZ3JvdW5kIEltYWdlIFNlY3Rpb24gKi99XG4gICAgICAgICAgICAgICAgPEJhY2tncm91bmRTZWN0aW9uLz5cbiAgICAgICAgICAgICAgICB7LyogTG9naW4gRm9ybSBTZWN0aW9uICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0xLzIgdy1mdWxsIGJnLWdyYXktOTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIHAtMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktNiB6LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXktNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNDcgMzFcIiBjbGFzc05hbWU9XCJ3LWF1dG8gaC03IHNtOmgtOCBpbmxpbmUtZmxleFwiPjxwYXRoIGZpbGw9XCJyZ2JhKDk5LDEwMiwyNDEsIC44KVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjUuNTE3IDBDMTguNzEyIDAgMTQuNDYgMy4zODIgMTIuNzU4IDEwLjE0NmMyLjU1Mi0zLjM4MiA1LjUyOS00LjY1IDguOTMxLTMuODA1IDEuOTQxLjQ4MiAzLjMyOSAxLjg4MiA0Ljg2NCAzLjQzMiAyLjUwMiAyLjUyNCA1LjM5OCA1LjQ0NSAxMS43MjIgNS40NDUgNi44MDQgMCAxMS4wNTctMy4zODIgMTIuNzU4LTEwLjE0NS0yLjU1MSAzLjM4Mi01LjUyOCA0LjY1LTguOTMgMy44MDQtMS45NDItLjQ4Mi0zLjMzLTEuODgyLTQuODY1LTMuNDMxQzM0LjczNiAyLjkyIDMxLjg0MSAwIDI1LjUxNyAwek0xMi43NTggMTUuMjE4QzUuOTU0IDE1LjIxOCAxLjcwMSAxOC42IDAgMjUuMzY0YzIuNTUyLTMuMzgyIDUuNTI5LTQuNjUgOC45My0zLjgwNSAxLjk0Mi40ODIgMy4zMyAxLjg4MiA0Ljg2NSAzLjQzMiAyLjUwMiAyLjUyNCA1LjM5NyA1LjQ0NSAxMS43MjIgNS40NDUgNi44MDQgMCAxMS4wNTctMy4zODEgMTIuNzU4LTEwLjE0NS0yLjU1MiAzLjM4Mi01LjUyOSA0LjY1LTguOTMxIDMuODA1LTEuOTQxLS40ODMtMy4zMjktMS44ODMtNC44NjQtMy40MzItMi41MDItMi41MjQtNS4zOTgtNS40NDYtMTEuNzIyLTUuNDQ2elwiPjwvcGF0aD48cGF0aCBmaWxsPVwiI2ZmZlwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNNzYuNTQ2IDEyLjgyNWgtNC40NTN2OC41NjdjMCAyLjI4NSAxLjUwOCAyLjI0OSA0LjQ1MyAyLjEwNnYzLjQ2M2MtNS45NjIuNzE0LTguMzMyLS45MjgtOC4zMzItNS41Njl2LTguNTY3SDY0LjkxVjkuMTEyaDMuMzA0VjQuMzE4bDMuODc5LTEuMTQzdjUuOTM3aDQuNDUzdjMuNzEzek05My41MiA5LjExMmgzLjg3OHYxNy44NDloLTMuODc4di0yLjU3Yy0xLjM2NSAxLjg5MS0zLjQ4NCAzLjAzNC02LjI4NSAzLjAzNC00Ljg4NCAwLTguOTQyLTQuMTA1LTguOTQyLTkuMzg5IDAtNS4zMTggNC4wNTgtOS4zODggOC45NDItOS4zODggMi44MDEgMCA0LjkyIDEuMTQyIDYuMjg1IDIuOTk5VjkuMTEyem0tNS42NzQgMTQuNjM2YzMuMjMyIDAgNS42NzQtMi4zOTIgNS42NzQtNS43MTJzLTIuNDQyLTUuNzExLTUuNjc0LTUuNzExLTUuNjc0IDIuMzkyLTUuNjc0IDUuNzExYzAgMy4zMiAyLjQ0MiA1LjcxMiA1LjY3NCA1LjcxMnptMTYuMDE2LTE3LjMxM2MtMS4zNjQgMC0yLjQ3Ny0xLjE0Mi0yLjQ3Ny0yLjQ2M2EyLjQ3NSAyLjQ3NSAwIDAxMi40NzctMi40NjMgMi40NzUgMi40NzUgMCAwMTIuNDc4IDIuNDYzYzAgMS4zMi0xLjExMyAyLjQ2My0yLjQ3OCAyLjQ2M3ptLTEuOTM5IDIwLjUyNlY5LjExMmgzLjg3OXYxNy44NDloLTMuODc5em04LjM2OCAwVi45aDMuODc4djI2LjA2aC0zLjg3OHptMjkuMDUzLTE3Ljg0OWg0LjA5NGwtNS42MzggMTcuODQ5aC0zLjgwN2wtMy43MzUtMTIuMDMtMy43NzEgMTIuMDNoLTMuODA2bC01LjYzOS0xNy44NDloNC4wOTRsMy40ODQgMTIuMzE1IDMuNzcxLTEyLjMxNWgzLjY5OWwzLjczNCAxMi4zMTUgMy41Mi0xMi4zMTV6bTguOTA2LTIuNjc3Yy0xLjM2NSAwLTIuNDc4LTEuMTQyLTIuNDc4LTIuNDYzYTIuNDc1IDIuNDc1IDAgMDEyLjQ3OC0yLjQ2MyAyLjQ3NSAyLjQ3NSAwIDAxMi40NzggMi40NjNjMCAxLjMyLTEuMTEzIDIuNDYzLTIuNDc4IDIuNDYzem0tMS45MzkgMjAuNTI2VjkuMTEyaDMuODc4djE3Ljg0OWgtMy44Nzh6bTE3LjgxMi0xOC4zMTNjNC4wMjIgMCA2Ljg5NSAyLjcxMyA2Ljg5NSA3LjM1NFYyNi45NmgtMy44NzhWMTYuMzk0YzAtMi43MTMtMS41OC00LjE0LTQuMDIyLTQuMTQtMi41NSAwLTQuNTYxIDEuNDk5LTQuNTYxIDUuMTR2OS41NjdoLTMuODc5VjkuMTEyaDMuODc5djIuMjg1YzEuMTg1LTEuODU2IDMuMTI0LTIuNzQ5IDUuNTY2LTIuNzQ5em0yNS4yODItNi42NzVoMy44NzlWMjYuOTZoLTMuODc5di0yLjU3Yy0xLjM2NCAxLjg5Mi0zLjQ4MyAzLjAzNC02LjI4NCAzLjAzNC00Ljg4NCAwLTguOTQyLTQuMTA1LTguOTQyLTkuMzg5IDAtNS4zMTggNC4wNTgtOS4zODggOC45NDItOS4zODggMi44MDEgMCA0LjkyIDEuMTQyIDYuMjg0IDIuOTk5VjEuOTczem0tNS42NzQgMjEuNzc1YzMuMjMyIDAgNS42NzQtMi4zOTIgNS42NzQtNS43MTJzLTIuNDQyLTUuNzExLTUuNjc0LTUuNzExLTUuNjc0IDIuMzkyLTUuNjc0IDUuNzExYzAgMy4zMiAyLjQ0MiA1LjcxMiA1LjY3NCA1LjcxMnptMjIuNTUzIDMuNjc3Yy01LjQyMyAwLTkuNDgxLTQuMTA1LTkuNDgxLTkuMzg5IDAtNS4zMTggNC4wNTgtOS4zODggOS40ODEtOS4zODggMy41MTkgMCA2LjU3MiAxLjgyIDguMDA4IDQuNjA1bC0zLjM0IDEuOTI4Yy0uNzktMS42NzgtMi41NDktMi43NDktNC43MDQtMi43NDktMy4xNiAwLTUuNTY2IDIuMzkyLTUuNTY2IDUuNjA0IDAgMy4yMTMgMi40MDYgNS42MDUgNS41NjYgNS42MDUgMi4xNTUgMCAzLjkxNC0xLjEwNyA0Ljc3Ni0yLjc0OWwzLjM0IDEuODkyYy0xLjUwOCAyLjgyLTQuNTYxIDQuNjQtOC4wOCA0LjY0em0xNC40NzItMTMuMzg3YzAgMy4yNDkgOS42NjEgMS4yODUgOS42NjEgNy44OSAwIDMuNTctMy4xMjUgNS40OTctNy4wMDMgNS40OTctMy41OTEgMC02LjE3Ny0xLjYwNy03LjMyNi00LjE3N2wzLjM0LTEuOTI3Yy41NzQgMS42MDYgMi4wMTEgMi41NyAzLjk4NiAyLjU3IDEuNzI0IDAgMy4wNTItLjU3MSAzLjA1Mi0yIDAtMy4xNzYtOS42Ni0xLjM5MS05LjY2LTcuNzgxIDAtMy4zNTYgMi45MDktNS40NjIgNi41NzItNS40NjIgMi45NDUgMCA1LjM4NyAxLjM1NyA2LjY0NCAzLjcxM2wtMy4yNjggMS44MmMtLjY0Ny0xLjM5Mi0xLjkwNC0yLjAzNS0zLjM3Ni0yLjAzNS0xLjQwMSAwLTIuNjIyLjYwNy0yLjYyMiAxLjg5MnptMTYuNTU2IDBjMCAzLjI0OSA5LjY2IDEuMjg1IDkuNjYgNy44OSAwIDMuNTctMy4xMjQgNS40OTctNy4wMDMgNS40OTctMy41OTEgMC02LjE3Ni0xLjYwNy03LjMyNi00LjE3N2wzLjM0LTEuOTI3Yy41NzUgMS42MDYgMi4wMTEgMi41NyAzLjk4NiAyLjU3IDEuNzI0IDAgMy4wNTMtLjU3MSAzLjA1My0yIDAtMy4xNzYtOS42Ni0xLjM5MS05LjY2LTcuNzgxIDAtMy4zNTYgMi45MDgtNS40NjIgNi41NzItNS40NjIgMi45NDQgMCA1LjM4NiAxLjM1NyA2LjY0MyAzLjcxM2wtMy4yNjggMS44MmMtLjY0Ni0xLjM5Mi0xLjkwMy0yLjAzNS0zLjM3NS0yLjAzNS0xLjQwMSAwLTIuNjIyLjYwNy0yLjYyMiAxLjg5MnpcIiA+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNiBmbGV4IGp1c3RpZnktYmV0d2VlblwiIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjI1JVwiLG1hcmdpblJpZ2h0OlwiMjUlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGlubGluZS1mbGV4IHJvdW5kZWQtZnVsbCBmb250LWJvbGQgdGV4dC1sZyBib3JkZXItMiBib3JkZXItd2hpdGVcIj5mPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMTAgaC0xMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaW5saW5lLWZsZXggcm91bmRlZC1mdWxsIGZvbnQtYm9sZCB0ZXh0LWxnIGJvcmRlci0yIGJvcmRlci13aGl0ZVwiPkcrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMTAgaC0xMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaW5saW5lLWZsZXggcm91bmRlZC1mdWxsIGZvbnQtYm9sZCB0ZXh0LWxnIGJvcmRlci0yIGJvcmRlci13aGl0ZVwiPmluPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgdXNlIGVtYWlsIHlvdXIgYWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ2luRm9ybSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhPXtmb3JtRGF0YX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRXJyb3JzPXtmfSBoYW5kbGVJbnB1dENoYW5nZT17dW5kZWZpbmVkfSBoYW5kbGVTdWJtaXQ9e3VuZGVmaW5lZH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59XG5cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQmFja2dyb3VuZFNlY3Rpb24iLCJMb2dpbkZvcm0iLCJIb21lIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJmb3JtRXJyb3JzIiwic2V0Rm9ybUVycm9ycyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZXJyb3JzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1haW4iLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiZGl2IiwiaDEiLCJzdmciLCJ2aWV3Qm94IiwicGF0aCIsImZpbGwiLCJmaWxsUnVsZSIsImNsaXBSdWxlIiwiZCIsInN0eWxlIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0Iiwic3BhbiIsInAiLCJmIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});