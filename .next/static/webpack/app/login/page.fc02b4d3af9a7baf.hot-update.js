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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_pages_login_BackgroundSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/pages/login/BackgroundSection */ \"(app-pages-browser)/./src/components/pages/login/BackgroundSection.tsx\");\n/* harmony import */ var _components_pages_login_LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/pages/login/LoginForm */ \"(app-pages-browser)/./src/components/pages/login/LoginForm.tsx\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/auth-helpers-nextjs */ \"(app-pages-browser)/./node_modules/@supabase/auth-helpers-nextjs/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Alert_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Alert/Alert */ \"(app-pages-browser)/./src/components/Alert/Alert.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction LoginPage() {\n    _s();\n    const supabase = (0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_4__.createClientComponentClient)();\n    // State for form fields\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    // State for form errors\n    const [formErrors, setFormErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    // State for loading status\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // State for displaying error message\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Function to handle form field changes\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    // Function to handle form submission\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Clear previous error and loading status\n        setErrorMessage(\"\");\n        setLoading(true);\n        // Perform form validation\n        let errors = {\n            email: \"\",\n            password: \"\"\n        };\n        if (!formData.email) {\n            errors.email = \"Email is required\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {\n            errors.email = \"Invalid email address\";\n        }\n        if (!formData.password) {\n            errors.password = \"Password is required\";\n        }\n        if (Object.keys(errors).length > 0) {\n            setFormErrors(errors);\n            setLoading(false);\n        }\n        try {\n            await supabase.auth.signInWithPassword(formData);\n        // // If login is successful, you can redirect to another page\n        // router.push('/dashboard');\n        } catch (error) {\n            setErrorMessage(\"Error: \" + error.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"min-h-screen flex items-stretch text-white \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_login_BackgroundSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-1/2 w-full bg-gray-900 flex items-center justify-center text-center p-16\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full py-6 z-20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"my-6\",\n                                \"data-testid\": \"logo\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    viewBox: \"0 0 247 31\",\n                                    className: \"w-auto h-7 sm:h-8 inline-flex\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        fill: \"rgba(99,102,241, .8)\",\n                                        fillRule: \"evenodd\",\n                                        clipRule: \"evenodd\",\n                                        d: \"M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-100\",\n                                children: \"or use email your account\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 25\n                            }, this),\n                            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Loading...\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 37\n                            }, this),\n                            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                type: \"error\",\n                                message: errorMessage\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 42\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_login_LoginForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                formData: formData,\n                                formErrors: formErrors,\n                                handleInputChange: handleInputChange,\n                                handleSubmit: handleSubmit\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n            lineNumber: 76,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginPage, \"aiziGMolzzO7+qeRoUqILDrDxMw=\");\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDMEQ7QUFDcUI7QUFDaEI7QUFDYTtBQUUvQjtBQUU5QixTQUFTSzs7SUFDcEIsTUFBTUMsV0FBV0gsMEZBQTJCQTtJQUM1Qyx3QkFBd0I7SUFDeEIsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO1FBQ3JDUyxPQUFPO1FBQ1BDLFVBQVU7SUFDZDtJQUVBLHdCQUF3QjtJQUN4QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQUM7UUFDekNTLE9BQU87UUFDUEMsVUFBVTtJQUNkO0lBQ0EsMkJBQTJCO0lBQzNCLE1BQU0sQ0FBQ0csU0FBU0MsV0FBVyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUV2QyxxQ0FBcUM7SUFDckMsTUFBTSxDQUFDZSxjQUFjQyxnQkFBZ0IsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRWpELHdDQUF3QztJQUN4QyxNQUFNaUIsb0JBQW9CLENBQUNDO1FBQ3ZCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ2IsWUFBWTtZQUNSLEdBQUdELFFBQVE7WUFDWCxDQUFDWSxLQUFLLEVBQUVDO1FBQ1o7SUFDSjtJQUVBLHFDQUFxQztJQUNyQyxNQUFNRSxlQUFlLE9BQU9KO1FBRXhCQSxFQUFFSyxjQUFjO1FBRWhCLDBDQUEwQztRQUMxQ1AsZ0JBQWdCO1FBQ2hCRixXQUFXO1FBQ1gsMEJBQTBCO1FBQzFCLElBQUlVLFNBQVM7WUFDVGYsT0FBTztZQUNQQyxVQUFVO1FBQ2Q7UUFFQSxJQUFJLENBQUNILFNBQVNFLEtBQUssRUFBRTtZQUNqQmUsT0FBT2YsS0FBSyxHQUFHO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGVBQWVnQixJQUFJLENBQUNsQixTQUFTRSxLQUFLLEdBQUc7WUFDN0NlLE9BQU9mLEtBQUssR0FBRztRQUNuQjtRQUNBLElBQUksQ0FBQ0YsU0FBU0csUUFBUSxFQUFFO1lBQ3BCYyxPQUFPZCxRQUFRLEdBQUc7UUFDdEI7UUFDQSxJQUFJZ0IsT0FBT0MsSUFBSSxDQUFDSCxRQUFRSSxNQUFNLEdBQUcsR0FBRztZQUNoQ2hCLGNBQWNZO1lBQ2RWLFdBQVc7UUFDZjtRQUNBLElBQUk7WUFDQSxNQUFNUixTQUFTdUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ3ZCO1FBQ3ZDLDhEQUE4RDtRQUM5RCw2QkFBNkI7UUFDakMsRUFBRSxPQUFPd0IsT0FBVztZQUNoQmYsZ0JBQWdCLFlBQVllLE1BQU1DLE9BQU87UUFDN0MsU0FBVTtZQUNObEIsV0FBVztRQUNmO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ21CO1FBQUtDLFdBQVU7a0JBQ1osNEVBQUNDO1lBQVFELFdBQVU7OzhCQUVmLDhEQUFDakMsaUZBQWlCQTs7Ozs7OEJBRWxCLDhEQUFDbUM7b0JBQUlGLFdBQVU7OEJBQ1gsNEVBQUNFO3dCQUFJRixXQUFVOzswQ0FDWCw4REFBQ0c7Z0NBQUdILFdBQVU7Z0NBQU9JLGVBQVk7MENBQzdCLDRFQUFDQztvQ0FBSUMsU0FBUTtvQ0FBYU4sV0FBVTs4Q0FDaEMsNEVBQUNPO3dDQUFLQyxNQUFLO3dDQUF1QkMsVUFBUzt3Q0FBVUMsVUFBUzt3Q0FBVUMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHbEYsOERBQUNDO2dDQUFFWixXQUFVOzBDQUFnQjs7Ozs7OzRCQUc1QnJCLHlCQUFXLDhEQUFDaUM7MENBQUU7Ozs7Ozs0QkFDZC9CLDhCQUFnQiw4REFBQ1gsK0RBQUtBO2dDQUFDMkMsTUFBSztnQ0FBUWYsU0FBU2pCOzs7Ozs7MENBQzlDLDhEQUFDYix5RUFBU0E7Z0NBQ05LLFVBQVVBO2dDQUNWSSxZQUFZQTtnQ0FDWk0sbUJBQW1CQTtnQ0FDbkJLLGNBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTFDO0dBL0Z3QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3g/ZmM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IENoYW5nZUV2ZW50LCBNb3VzZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYWNrZ3JvdW5kU2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhZ2VzL2xvZ2luL0JhY2tncm91bmRTZWN0aW9uJztcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYWdlcy9sb2dpbi9Mb2dpbkZvcm0nO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50Q29tcG9uZW50Q2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL2F1dGgtaGVscGVycy1uZXh0anMnO1xuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tICcuLi9saWIvc3VwYWJhc2UnO1xuaW1wb3J0IEFsZXJ0IGZyb20gJ0AvY29tcG9uZW50cy9BbGVydC9BbGVydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudENvbXBvbmVudENsaWVudDxEYXRhYmFzZT4oKVxuICAgIC8vIFN0YXRlIGZvciBmb3JtIGZpZWxkc1xuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICB9KTtcblxuICAgIC8vIFN0YXRlIGZvciBmb3JtIGVycm9yc1xuICAgIGNvbnN0IFtmb3JtRXJyb3JzLCBzZXRGb3JtRXJyb3JzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgfSk7XG4gICAgLy8gU3RhdGUgZm9yIGxvYWRpbmcgc3RhdHVzXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy8gU3RhdGUgZm9yIGRpc3BsYXlpbmcgZXJyb3IgbWVzc2FnZVxuICAgIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgZm9ybSBmaWVsZCBjaGFuZ2VzXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gQ2xlYXIgcHJldmlvdXMgZXJyb3IgYW5kIGxvYWRpbmcgc3RhdHVzXG4gICAgICAgIHNldEVycm9yTWVzc2FnZSgnJyk7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIC8vIFBlcmZvcm0gZm9ybSB2YWxpZGF0aW9uXG4gICAgICAgIGxldCBlcnJvcnMgPSB7XG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBpZiAoIWZvcm1EYXRhLmVtYWlsKSB7XG4gICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgcmVxdWlyZWQnO1xuICAgICAgICB9IGVsc2UgaWYgKCEvXFxTK0BcXFMrXFwuXFxTKy8udGVzdChmb3JtRGF0YS5lbWFpbCkpIHtcbiAgICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZm9ybURhdGEucGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBpcyByZXF1aXJlZCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0Rm9ybUVycm9ycyhlcnJvcnMpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnbkluV2l0aFBhc3N3b3JkKGZvcm1EYXRhKTtcbiAgICAgICAgICAgIC8vIC8vIElmIGxvZ2luIGlzIHN1Y2Nlc3NmdWwsIHlvdSBjYW4gcmVkaXJlY3QgdG8gYW5vdGhlciBwYWdlXG4gICAgICAgICAgICAvLyByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcjphbnkpIHtcbiAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnRXJyb3I6ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtc3RyZXRjaCB0ZXh0LXdoaXRlIFwiPlxuICAgICAgICAgICAgICAgIHsvKiBCYWNrZ3JvdW5kIEltYWdlIFNlY3Rpb24gKi99XG4gICAgICAgICAgICAgICAgPEJhY2tncm91bmRTZWN0aW9uIC8+XG4gICAgICAgICAgICAgICAgey8qIExvZ2luIEZvcm0gU2VjdGlvbiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctMS8yIHctZnVsbCBiZy1ncmF5LTkwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBwLTE2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTYgei0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15LTZcIiBkYXRhLXRlc3RpZD0nbG9nbyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0NyAzMVwiIGNsYXNzTmFtZT1cInctYXV0byBoLTcgc206aC04IGlubGluZS1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJyZ2JhKDk5LDEwMiwyNDEsIC44KVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjUuNTE3IDBDMTguNzEyIDAgMTQuNDYgMy4zODIgMTIuNzU4IDEwLjE0NmMyLjU1Mi0zLjM4MiA1LjUyOS00LjY1IDguOTMxLTMuODA1IDEuOTQxLjQ4MiAzLjMyOSAxLjg4MiA0Ljg2NCAzLjQzMiAyLjUwMiAyLjUyNCA1LjM5OCA1LjQ0NSAxMS43MjIgNS40NDUgNi44MDQgMCAxMS4wNTctMy4zODIgMTIuNzU4LTEwLjE0NS0yLjU1MSAzLjM4Mi01LjUyOCA0LjY1LTguOTMgMy44MDQtMS45NDItLjQ4Mi0zLjMzLTEuODgyLTQuODY1LTMuNDMxQzM0LjczNiAyLjkyIDMxLjg0MSAwIDI1LjUxNyAwek0xMi43NTggMTUuMjE4QzUuOTU0IDE1LjIxOCAxLjcwMSAxOC42IDAgMjUuMzY0YzIuNTUyLTMuMzgyIDUuNTI5LTQuNjUgOC45My0zLjgwNSAxLjk0Mi40ODIgMy4zMyAxLjg4MiA0Ljg2NSAzLjQzMiAyLjUwMiAyLjUyNCA1LjM5NyA1LjQ0NSAxMS43MjIgNS40NDUgNi44MDQgMCAxMS4wNTctMy4zODEgMTIuNzU4LTEwLjE0NS0yLjU1MiAzLjM4Mi01LjUyOSA0LjY1LTguOTMxIDMuODA1LTEuOTQxLS40ODMtMy4zMjktMS44ODMtNC44NjQtMy40MzItMi41MDItMi41MjQtNS4zOTgtNS40NDYtMTEuNzIyLTUuNDQ2elwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgdXNlIGVtYWlsIHlvdXIgYWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgPHA+TG9hZGluZy4uLjwvcD59XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIDxBbGVydCB0eXBlPVwiZXJyb3JcIiBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ2luRm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhPXtmb3JtRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRXJyb3JzPXtmb3JtRXJyb3JzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn1cblxuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCYWNrZ3JvdW5kU2VjdGlvbiIsIkxvZ2luRm9ybSIsImNyZWF0ZUNsaWVudENvbXBvbmVudENsaWVudCIsIkFsZXJ0IiwiTG9naW5QYWdlIiwic3VwYWJhc2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1FcnJvcnMiLCJzZXRGb3JtRXJyb3JzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImVycm9ycyIsInRlc3QiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiYXV0aCIsInNpZ25JbldpdGhQYXNzd29yZCIsImVycm9yIiwibWVzc2FnZSIsIm1haW4iLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiZGl2IiwiaDEiLCJkYXRhLXRlc3RpZCIsInN2ZyIsInZpZXdCb3giLCJwYXRoIiwiZmlsbCIsImZpbGxSdWxlIiwiY2xpcFJ1bGUiLCJkIiwicCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});