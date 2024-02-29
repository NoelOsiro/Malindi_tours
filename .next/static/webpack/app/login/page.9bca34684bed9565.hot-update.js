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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_pages_login_BackgroundSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/pages/login/BackgroundSection */ \"(app-pages-browser)/./src/components/pages/login/BackgroundSection.tsx\");\n/* harmony import */ var _components_pages_login_LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/pages/login/LoginForm */ \"(app-pages-browser)/./src/components/pages/login/LoginForm.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _utils_supabase_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/supabase/client */ \"(app-pages-browser)/./src/utils/supabase/client.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction LoginPage() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [formErrors, setFormErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [alertMessage, setAlert] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const validateForm = (formData)=>{\n        let errors = {\n            email: \"\",\n            password: \"\"\n        };\n        if (!formData.email.trim()) {\n            errors.email = \"Email is required\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {\n            errors.email = \"Invalid email address\";\n        }\n        if (!formData.password.trim()) {\n            errors.password = \"Password is required\";\n        }\n        return Object.values(errors).some((error)=>error !== \"\") ? errors : null;\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        try {\n            const validationErrors = validateForm(formData);\n            if (validationErrors !== null) {\n                // There are validation errors\n                setFormErrors(validationErrors);\n                setLoading(false);\n                return;\n            }\n            const supabase = (0,_utils_supabase_client__WEBPACK_IMPORTED_MODULE_6__.createClient)();\n            const { error } = await supabase.auth.signInWithPassword(formData);\n            if (error) {\n                throw new Error(\"Supabase authentication error: \".concat(error.message));\n            }\n        } catch (error) {\n            console.error(error);\n            // You can redirect to the error page or show an error message to the user\n            (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.redirect)(\"/error\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"min-h-screen flex items-stretch text-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_login_BackgroundSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-1/2 w-full bg-gray-900 flex items-center justify-center text-center p-16\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full py-6 z-20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center mb-8 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        src: \"/beach.svg\",\n                                        alt: \"Malicul\",\n                                        className: \"mr-4\",\n                                        width: 45,\n                                        height: 45\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-4xl font-semibold text-white\",\n                                        children: \"MaliCul\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-4xl font-semibold text-white mb-8\",\n                                children: \"Welcome back!\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_login_LoginForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                formData: formData,\n                                formErrors: formErrors,\n                                handleInputChange: handleInputChange,\n                                handleSubmit: handleSubmit,\n                                loading: loading\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n            lineNumber: 65,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginPage, \"4aSejlvAnEj9HBWKTBqlggzUmmI=\");\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDMEQ7QUFDZjtBQUNvQztBQUNoQjtBQUdoQztBQUN1QjtBQUd2QyxTQUFTTTs7SUFDcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO1FBQUVTLE9BQU87UUFBSUMsVUFBVTtJQUFHO0lBQ25FLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQztRQUFFUyxPQUFPO1FBQUlDLFVBQVU7SUFBRztJQUN2RSxNQUFNLENBQUNHLGNBQWNDLFNBQVMsR0FBR2QsK0NBQVFBLENBQUM7SUFDMUMsTUFBTSxDQUFDZSxTQUFTQyxXQUFXLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNaUIsb0JBQW9CLENBQUNDO1FBQ3ZCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ2IsWUFBWTtZQUFFLEdBQUdELFFBQVE7WUFBRSxDQUFDWSxLQUFLLEVBQUVDO1FBQU07SUFDN0M7SUFFQSxNQUFNRSxlQUFlLENBQUNmO1FBQ2xCLElBQUlnQixTQUE4QztZQUFFZCxPQUFPO1lBQUlDLFVBQVU7UUFBRztRQUU1RSxJQUFJLENBQUNILFNBQVNFLEtBQUssQ0FBQ2UsSUFBSSxJQUFJO1lBQ3hCRCxPQUFPZCxLQUFLLEdBQUc7UUFDbkIsT0FBTyxJQUFJLENBQUMsZUFBZWdCLElBQUksQ0FBQ2xCLFNBQVNFLEtBQUssR0FBRztZQUM3Q2MsT0FBT2QsS0FBSyxHQUFHO1FBQ25CO1FBRUEsSUFBSSxDQUFDRixTQUFTRyxRQUFRLENBQUNjLElBQUksSUFBSTtZQUMzQkQsT0FBT2IsUUFBUSxHQUFHO1FBQ3RCO1FBQ0EsT0FBT2dCLE9BQU9DLE1BQU0sQ0FBQ0osUUFBUUssSUFBSSxDQUFDQyxDQUFBQSxRQUFTQSxVQUFVLE1BQU1OLFNBQVM7SUFDeEU7SUFFQSxNQUFNTyxlQUFlLE9BQU9aO1FBQ3hCQSxFQUFFYSxjQUFjO1FBQ2hCZixXQUFXO1FBQ1gsSUFBSTtZQUNBLE1BQU1nQixtQkFBbUJWLGFBQWFmO1lBQ3RDLElBQUl5QixxQkFBcUIsTUFBTTtnQkFDM0IsOEJBQThCO2dCQUM5QnBCLGNBQWNvQjtnQkFDZGhCLFdBQVc7Z0JBQ1g7WUFDSjtZQUNBLE1BQU1pQixXQUFXNUIsb0VBQVlBO1lBQzdCLE1BQU0sRUFBRXdCLEtBQUssRUFBRSxHQUFHLE1BQU1JLFNBQVNDLElBQUksQ0FBQ0Msa0JBQWtCLENBQUM1QjtZQUN6RCxJQUFJc0IsT0FBTztnQkFDUCxNQUFNLElBQUlPLE1BQU0sa0NBQWdELE9BQWRQLE1BQU1RLE9BQU87WUFDbkU7UUFDSixFQUFFLE9BQU9SLE9BQU87WUFDWlMsUUFBUVQsS0FBSyxDQUFDQTtZQUNkLDBFQUEwRTtZQUMxRTVCLHlEQUFRQSxDQUFDO1FBQ2IsU0FBVTtZQUNOZSxXQUFXO1FBQ2Y7SUFDSjtJQUVBLHFCQUNJLDhEQUFDdUI7a0JBQ0csNEVBQUNDO1lBQVFDLFdBQVU7OzhCQUNmLDhEQUFDdkMsaUZBQWlCQTs7Ozs7OEJBQ2xCLDhEQUFDd0M7b0JBQUlELFdBQVU7OEJBQ1gsNEVBQUNDO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQUlELFdBQVU7O2tEQUNYLDhEQUFDckMsa0RBQUtBO3dDQUFDdUMsS0FBSTt3Q0FBYUMsS0FBSTt3Q0FBVUgsV0FBVTt3Q0FBT0ksT0FBTzt3Q0FBSUMsUUFBUTs7Ozs7O2tEQUMxRSw4REFBQ0M7d0NBQUdOLFdBQVU7a0RBQW9DOzs7Ozs7Ozs7Ozs7MENBRXRELDhEQUFDTTtnQ0FBR04sV0FBVTswQ0FBeUM7Ozs7OzswQ0FDdkQsOERBQUN0Qyx5RUFBU0E7Z0NBQ05JLFVBQVVBO2dDQUNWSSxZQUFZQTtnQ0FDWk0sbUJBQW1CQTtnQ0FDbkJhLGNBQWNBO2dDQUNkZixTQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQztHQTFFd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3g/ZmM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IENoYW5nZUV2ZW50LCBNb3VzZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBCYWNrZ3JvdW5kU2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhZ2VzL2xvZ2luL0JhY2tncm91bmRTZWN0aW9uJztcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYWdlcy9sb2dpbi9Mb2dpbkZvcm0nO1xuaW1wb3J0IEFsZXJ0IGZyb20gJ0AvY29tcG9uZW50cy9BbGVydC9BbGVydCc7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uL2xpYi9zdXBhYmFzZSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL3V0aWxzL3N1cGFiYXNlL2NsaWVudCdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblBhZ2UoKSB7XG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH0pO1xuICAgIGNvbnN0IFtmb3JtRXJyb3JzLCBzZXRGb3JtRXJyb3JzXSA9IHVzZVN0YXRlKHsgZW1haWw6ICcnLCBwYXNzd29yZDogJycgfSk7XG4gICAgY29uc3QgW2FsZXJ0TWVzc2FnZSwgc2V0QWxlcnRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbbmFtZV06IHZhbHVlIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB2YWxpZGF0ZUZvcm0gPSAoZm9ybURhdGE6IHsgZW1haWw6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgIGxldCBlcnJvcnM6IHsgZW1haWw6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9ID0geyBlbWFpbDogJycsIHBhc3N3b3JkOiAnJyB9O1xuXG4gICAgICAgIGlmICghZm9ybURhdGEuZW1haWwudHJpbSgpKSB7XG4gICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgcmVxdWlyZWQnO1xuICAgICAgICB9IGVsc2UgaWYgKCEvXFxTK0BcXFMrXFwuXFxTKy8udGVzdChmb3JtRGF0YS5lbWFpbCkpIHtcbiAgICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmb3JtRGF0YS5wYXNzd29yZC50cmltKCkpIHtcbiAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBpcyByZXF1aXJlZCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZXJyb3JzKS5zb21lKGVycm9yID0+IGVycm9yICE9PSAnJykgPyBlcnJvcnMgOiBudWxsO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbkVycm9ycyA9IHZhbGlkYXRlRm9ybShmb3JtRGF0YSk7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbkVycm9ycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZXJlIGFyZSB2YWxpZGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgICAgIHNldEZvcm1FcnJvcnModmFsaWRhdGlvbkVycm9ycyk7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnbkluV2l0aFBhc3N3b3JkKGZvcm1EYXRhKTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU3VwYWJhc2UgYXV0aGVudGljYXRpb24gZXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgLy8gWW91IGNhbiByZWRpcmVjdCB0byB0aGUgZXJyb3IgcGFnZSBvciBzaG93IGFuIGVycm9yIG1lc3NhZ2UgdG8gdGhlIHVzZXJcbiAgICAgICAgICAgIHJlZGlyZWN0KCcvZXJyb3InKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtc3RyZXRjaCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPEJhY2tncm91bmRTZWN0aW9uIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTEvMiB3LWZ1bGwgYmctZ3JheS05MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgcC0xNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweS02IHotMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItOCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2JlYWNoLnN2Z1wiIGFsdD1cIk1hbGljdWxcIiBjbGFzc05hbWU9XCJtci00XCIgd2lkdGg9ezQ1fSBoZWlnaHQ9ezQ1fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj5NYWxpQ3VsPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBtYi04XCI+V2VsY29tZSBiYWNrITwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9naW5Gb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGE9e2Zvcm1EYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1FcnJvcnM9e2Zvcm1FcnJvcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJyZWRpcmVjdCIsIkJhY2tncm91bmRTZWN0aW9uIiwiTG9naW5Gb3JtIiwiSW1hZ2UiLCJjcmVhdGVDbGllbnQiLCJMb2dpblBhZ2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1FcnJvcnMiLCJzZXRGb3JtRXJyb3JzIiwiYWxlcnRNZXNzYWdlIiwic2V0QWxlcnQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInZhbGlkYXRlRm9ybSIsImVycm9ycyIsInRyaW0iLCJ0ZXN0IiwiT2JqZWN0IiwidmFsdWVzIiwic29tZSIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0aW9uRXJyb3JzIiwic3VwYWJhc2UiLCJhdXRoIiwic2lnbkluV2l0aFBhc3N3b3JkIiwiRXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsIm1haW4iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});