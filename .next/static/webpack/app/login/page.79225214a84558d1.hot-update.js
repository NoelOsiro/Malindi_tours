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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_pages_login_BackgroundSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/pages/login/BackgroundSection */ \"(app-pages-browser)/./src/components/pages/login/BackgroundSection.tsx\");\n/* harmony import */ var _components_pages_login_LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/pages/login/LoginForm */ \"(app-pages-browser)/./src/components/pages/login/LoginForm.tsx\");\n/* harmony import */ var _components_Alert_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Alert/Alert */ \"(app-pages-browser)/./src/components/Alert/Alert.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _utils_supabase_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/supabase/client */ \"(app-pages-browser)/./src/utils/supabase/client.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction LoginPage() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [formErrors, setFormErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [alertMessage, setAlert] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const validateForm = (formData)=>{\n        let errors = {\n            email: \"\",\n            password: \"\"\n        };\n        if (!formData.email.trim()) {\n            errors.email = \"Email is required\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {\n            errors.email = \"Invalid email address\";\n        }\n        if (!formData.password.trim()) {\n            errors.password = \"Password is required\";\n        }\n        return Object.values(errors).some((error)=>error !== \"\") ? errors : null;\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        try {\n            const validationErrors = validateForm(formData);\n            if (validationErrors !== null) {\n                // There are validation errors\n                setFormErrors(validationErrors);\n                setLoading(false);\n                return;\n            }\n            const supabase = (0,_utils_supabase_client__WEBPACK_IMPORTED_MODULE_7__.createClient)();\n            const { error } = await supabase.auth.signInWithPassword(formData);\n            if (error) {\n                setAlert(error.message);\n            } else router.push(\"/\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"min-h-screen flex items-stretch text-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_login_BackgroundSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-1/2 w-full bg-gray-900 flex items-center justify-center text-center p-16\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full py-6 z-20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center mb-8 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        src: \"/beach.svg\",\n                                        alt: \"Malicul\",\n                                        className: \"mr-4\",\n                                        width: 45,\n                                        height: 45\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-4xl font-semibold text-white\",\n                                        children: \"MaliCul\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-4xl font-semibold text-white mb-8\",\n                                children: \"Welcome back!\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 25\n                            }, this),\n                            alertMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                type: \"error\",\n                                message: alertMessage\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 42\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_login_LoginForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                formData: formData,\n                                formErrors: formErrors,\n                                handleInputChange: handleInputChange,\n                                handleSubmit: handleSubmit,\n                                loading: loading\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n            lineNumber: 63,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginPage, \"jS/IgEAqhkqf8wElXzvC3CnbTJw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQzBEO0FBQ2Q7QUFDbUM7QUFDaEI7QUFDbEI7QUFDZDtBQUN1QjtBQUd2QyxTQUFTTzs7SUFDcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO1FBQUVVLE9BQU87UUFBSUMsVUFBVTtJQUFHO0lBQ25FLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQztRQUFFVSxPQUFPO1FBQUlDLFVBQVU7SUFBRztJQUN2RSxNQUFNLENBQUNHLGNBQWNDLFNBQVMsR0FBR2YsK0NBQVFBLENBQUM7SUFDMUMsTUFBTSxDQUFDZ0IsU0FBU0MsV0FBVyxHQUFHakIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTWtCLFNBQVNqQiwwREFBU0E7SUFFeEIsTUFBTWtCLG9CQUFvQixDQUFDQztRQUN2QixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLEVBQUVHLE1BQU07UUFDaENkLFlBQVk7WUFBRSxHQUFHRCxRQUFRO1lBQUUsQ0FBQ2EsS0FBSyxFQUFFQztRQUFNO0lBQzdDO0lBRUEsTUFBTUUsZUFBZSxDQUFDaEI7UUFDbEIsSUFBSWlCLFNBQThDO1lBQUVmLE9BQU87WUFBSUMsVUFBVTtRQUFHO1FBRTVFLElBQUksQ0FBQ0gsU0FBU0UsS0FBSyxDQUFDZ0IsSUFBSSxJQUFJO1lBQ3hCRCxPQUFPZixLQUFLLEdBQUc7UUFDbkIsT0FBTyxJQUFJLENBQUMsZUFBZWlCLElBQUksQ0FBQ25CLFNBQVNFLEtBQUssR0FBRztZQUM3Q2UsT0FBT2YsS0FBSyxHQUFHO1FBQ25CO1FBRUEsSUFBSSxDQUFDRixTQUFTRyxRQUFRLENBQUNlLElBQUksSUFBSTtZQUMzQkQsT0FBT2QsUUFBUSxHQUFHO1FBQ3RCO1FBQ0EsT0FBT2lCLE9BQU9DLE1BQU0sQ0FBQ0osUUFBUUssSUFBSSxDQUFDQyxDQUFBQSxRQUFTQSxVQUFVLE1BQU1OLFNBQVM7SUFDeEU7SUFFQSxNQUFNTyxlQUFlLE9BQU9aO1FBQ3hCQSxFQUFFYSxjQUFjO1FBQ2hCaEIsV0FBVztRQUNYLElBQUk7WUFDQSxNQUFNaUIsbUJBQW1CVixhQUFhaEI7WUFDdEMsSUFBSTBCLHFCQUFxQixNQUFNO2dCQUMzQiw4QkFBOEI7Z0JBQzlCckIsY0FBY3FCO2dCQUNkakIsV0FBVztnQkFDWDtZQUNKO1lBQ0EsTUFBTWtCLFdBQVc3QixvRUFBWUE7WUFDN0IsTUFBTSxFQUFFeUIsS0FBSyxFQUFFLEdBQUcsTUFBTUksU0FBU0MsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQzdCO1lBQ3pELElBQUl1QixPQUFPO2dCQUNQaEIsU0FBU2dCLE1BQU1PLE9BQU87WUFDMUIsT0FDS3BCLE9BQU9xQixJQUFJLENBQUM7UUFDckIsU0FDUTtZQUNKdEIsV0FBVztRQUNmO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ3VCO2tCQUNHLDRFQUFDQztZQUFRQyxXQUFVOzs4QkFDZiw4REFBQ3hDLGlGQUFpQkE7Ozs7OzhCQUNsQiw4REFBQ3lDO29CQUFJRCxXQUFVOzhCQUNYLDRFQUFDQzt3QkFBSUQsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFJRCxXQUFVOztrREFDWCw4REFBQ3JDLGtEQUFLQTt3Q0FBQ3VDLEtBQUk7d0NBQWFDLEtBQUk7d0NBQVVILFdBQVU7d0NBQU9JLE9BQU87d0NBQUlDLFFBQVE7Ozs7OztrREFDMUUsOERBQUNDO3dDQUFHTixXQUFVO2tEQUFvQzs7Ozs7Ozs7Ozs7OzBDQUV0RCw4REFBQ007Z0NBQUdOLFdBQVU7MENBQXlDOzs7Ozs7NEJBQ3RENUIsOEJBQWdCLDhEQUFDViwrREFBS0E7Z0NBQUM2QyxNQUFNO2dDQUFTWCxTQUFTeEI7Ozs7OzswQ0FDaEQsOERBQUNYLHlFQUFTQTtnQ0FDTkssVUFBVUE7Z0NBQ1ZJLFlBQVlBO2dDQUNaTyxtQkFBbUJBO2dDQUNuQmEsY0FBY0E7Z0NBQ2RoQixTQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQztHQTFFd0JUOztRQUtMTixzREFBU0E7OztLQUxKTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL3BhZ2UudHN4P2ZjNjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyBDaGFuZ2VFdmVudCwgTW91c2VFdmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IEJhY2tncm91bmRTZWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vQmFja2dyb3VuZFNlY3Rpb24nO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhZ2VzL2xvZ2luL0xvZ2luRm9ybSc7XG5pbXBvcnQgQWxlcnQgZnJvbSAnQC9jb21wb25lbnRzL0FsZXJ0L0FsZXJ0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0AvdXRpbHMvc3VwYWJhc2UvY2xpZW50J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHsgZW1haWw6ICcnLCBwYXNzd29yZDogJycgfSk7XG4gICAgY29uc3QgW2Zvcm1FcnJvcnMsIHNldEZvcm1FcnJvcnNdID0gdXNlU3RhdGUoeyBlbWFpbDogJycsIHBhc3N3b3JkOiAnJyB9KTtcbiAgICBjb25zdCBbYWxlcnRNZXNzYWdlLCBzZXRBbGVydF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtuYW1lXTogdmFsdWUgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHZhbGlkYXRlRm9ybSA9IChmb3JtRGF0YTogeyBlbWFpbDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgbGV0IGVycm9yczogeyBlbWFpbDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0gPSB7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH07XG5cbiAgICAgICAgaWYgKCFmb3JtRGF0YS5lbWFpbC50cmltKCkpIHtcbiAgICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdFbWFpbCBpcyByZXF1aXJlZCc7XG4gICAgICAgIH0gZWxzZSBpZiAoIS9cXFMrQFxcUytcXC5cXFMrLy50ZXN0KGZvcm1EYXRhLmVtYWlsKSkge1xuICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0ludmFsaWQgZW1haWwgYWRkcmVzcyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZvcm1EYXRhLnBhc3N3b3JkLnRyaW0oKSkge1xuICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhlcnJvcnMpLnNvbWUoZXJyb3IgPT4gZXJyb3IgIT09ICcnKSA/IGVycm9ycyA6IG51bGw7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBNb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3JzID0gdmFsaWRhdGVGb3JtKGZvcm1EYXRhKTtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uRXJyb3JzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlcmUgYXJlIHZhbGlkYXRpb24gZXJyb3JzXG4gICAgICAgICAgICAgICAgc2V0Rm9ybUVycm9ycyh2YWxpZGF0aW9uRXJyb3JzKTtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudCgpO1xuICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduSW5XaXRoUGFzc3dvcmQoZm9ybURhdGEpO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc2V0QWxlcnQoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Ugcm91dGVyLnB1c2goJy8nKVxuICAgICAgICB9IFxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtc3RyZXRjaCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPEJhY2tncm91bmRTZWN0aW9uIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTEvMiB3LWZ1bGwgYmctZ3JheS05MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgcC0xNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweS02IHotMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItOCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2JlYWNoLnN2Z1wiIGFsdD1cIk1hbGljdWxcIiBjbGFzc05hbWU9XCJtci00XCIgd2lkdGg9ezQ1fSBoZWlnaHQ9ezQ1fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj5NYWxpQ3VsPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBtYi04XCI+V2VsY29tZSBiYWNrITwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWxlcnRNZXNzYWdlICYmIDxBbGVydCB0eXBlPXsnZXJyb3InfSBtZXNzYWdlPXthbGVydE1lc3NhZ2V9Lz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9naW5Gb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1FcnJvcnM9e2Zvcm1FcnJvcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJCYWNrZ3JvdW5kU2VjdGlvbiIsIkxvZ2luRm9ybSIsIkFsZXJ0IiwiSW1hZ2UiLCJjcmVhdGVDbGllbnQiLCJMb2dpblBhZ2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1FcnJvcnMiLCJzZXRGb3JtRXJyb3JzIiwiYWxlcnRNZXNzYWdlIiwic2V0QWxlcnQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInZhbGlkYXRlRm9ybSIsImVycm9ycyIsInRyaW0iLCJ0ZXN0IiwiT2JqZWN0IiwidmFsdWVzIiwic29tZSIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0aW9uRXJyb3JzIiwic3VwYWJhc2UiLCJhdXRoIiwic2lnbkluV2l0aFBhc3N3b3JkIiwibWVzc2FnZSIsInB1c2giLCJtYWluIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDIiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});