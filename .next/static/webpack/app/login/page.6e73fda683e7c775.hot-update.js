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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_pages_login_BackgroundSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/pages/login/BackgroundSection */ \"(app-pages-browser)/./src/components/pages/login/BackgroundSection.tsx\");\n/* harmony import */ var _components_pages_login_LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/pages/login/LoginForm */ \"(app-pages-browser)/./src/components/pages/login/LoginForm.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _utils_supabase_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/supabase/client */ \"(app-pages-browser)/./src/utils/supabase/client.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction LoginPage() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [formErrors, setFormErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const validateForm = (formData)=>{\n        let errors = {\n            email: \"\",\n            password: \"\"\n        };\n        if (!formData.email) {\n            errors.email = \"Email is required\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {\n            errors.email = \"Invalid email address\";\n        }\n        if (!formData.password) {\n            errors.password = \"Password is required\";\n        }\n        setFormErrors(errors);\n        return Object.keys(errors).length === 0;\n    };\n    const handleSubmit = async (e)=>{\n        try {\n            const isValid = validateForm(formData);\n            if (!isValid) {\n                throw new Error(\"Invalid form data\");\n            }\n            const supabase = (0,_utils_supabase_client__WEBPACK_IMPORTED_MODULE_6__.createClient)();\n            const { error } = await supabase.auth.signInWithPassword(formData);\n            if (error) {\n                throw new Error(\"Supabase authentication error: \".concat(error.message));\n            }\n        } catch (error) {\n            console.error(error);\n            // You can redirect to the error page or show an error message to the user\n            (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.redirect)(\"/error\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"min-h-screen flex items-stretch text-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_login_BackgroundSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-1/2 w-full bg-gray-900 flex items-center justify-center text-center p-16\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full py-6 z-20\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center mb-8 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        src: \"/beach.svg\",\n                                        alt: \"Malicul\",\n                                        className: \"mr-4\",\n                                        width: 45,\n                                        height: 45\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-4xl font-semibold text-white\",\n                                        children: \"MaliCul\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-4xl font-semibold text-white mb-8\",\n                                children: \"Welcome back!\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pages_login_LoginForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                formData: formData,\n                                formErrors: formErrors,\n                                handleInputChange: handleInputChange,\n                                handleSubmit: handleSubmit,\n                                loading: loading\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n            lineNumber: 59,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/Malindi_tours/src/app/login/page.tsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginPage, \"jNiIzVpx/rM7ZNu7VJDJbJzA3ng=\");\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDMEQ7QUFDZjtBQUNvQztBQUNoQjtBQUdoQztBQUN1QjtBQUd2QyxTQUFTTTs7SUFDcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO1FBQUVTLE9BQU87UUFBSUMsVUFBVTtJQUFHO0lBQ25FLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQztRQUFFUyxPQUFPO1FBQUlDLFVBQVU7SUFBRztJQUN2RSxNQUFNLENBQUNHLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7SUFFdkMsTUFBTWUsb0JBQW9CLENBQUNDO1FBQ3ZCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ1gsWUFBWTtZQUFFLEdBQUdELFFBQVE7WUFBRSxDQUFDVSxLQUFLLEVBQUVDO1FBQU07SUFDN0M7SUFFQSxNQUFNRSxlQUFlLENBQUNiO1FBQ2xCLElBQUljLFNBQVM7WUFBRVosT0FBTztZQUFJQyxVQUFVO1FBQUc7UUFDdkMsSUFBSSxDQUFDSCxTQUFTRSxLQUFLLEVBQUU7WUFDakJZLE9BQU9aLEtBQUssR0FBRztRQUNuQixPQUFPLElBQUksQ0FBQyxlQUFlYSxJQUFJLENBQUNmLFNBQVNFLEtBQUssR0FBRztZQUM3Q1ksT0FBT1osS0FBSyxHQUFHO1FBQ25CO1FBQ0EsSUFBSSxDQUFDRixTQUFTRyxRQUFRLEVBQUU7WUFDcEJXLE9BQU9YLFFBQVEsR0FBRztRQUN0QjtRQUNBRSxjQUFjUztRQUNkLE9BQU9FLE9BQU9DLElBQUksQ0FBQ0gsUUFBUUksTUFBTSxLQUFLO0lBQzFDO0lBRUEsTUFBTUMsZUFBZSxPQUFPVjtRQUN4QixJQUFJO1lBRUEsTUFBTVcsVUFBVVAsYUFBYWI7WUFDN0IsSUFBSSxDQUFDb0IsU0FBUztnQkFDVixNQUFNLElBQUlDLE1BQU07WUFDcEI7WUFDQSxNQUFNQyxXQUFXeEIsb0VBQVlBO1lBQzdCLE1BQU0sRUFBRXlCLEtBQUssRUFBRSxHQUFHLE1BQU1ELFNBQVNFLElBQUksQ0FBQ0Msa0JBQWtCLENBQUN6QjtZQUN6RCxJQUFJdUIsT0FBTztnQkFDUCxNQUFNLElBQUlGLE1BQU0sa0NBQWdELE9BQWRFLE1BQU1HLE9BQU87WUFDbkU7UUFDSixFQUFFLE9BQU9ILE9BQU87WUFDWkksUUFBUUosS0FBSyxDQUFDQTtZQUNkLDBFQUEwRTtZQUMxRTdCLHlEQUFRQSxDQUFDO1FBQ2IsU0FBVTtZQUNOYSxXQUFXO1FBQ2Y7SUFDSjtJQUVBLHFCQUNJLDhEQUFDcUI7a0JBQ0csNEVBQUNDO1lBQVFDLFdBQVU7OzhCQUNmLDhEQUFDbkMsaUZBQWlCQTs7Ozs7OEJBQ2xCLDhEQUFDb0M7b0JBQUlELFdBQVU7OEJBQ1gsNEVBQUNDO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQUlELFdBQVU7O2tEQUNmLDhEQUFDakMsa0RBQUtBO3dDQUFDbUMsS0FBSTt3Q0FBYUMsS0FBSTt3Q0FBVUgsV0FBVTt3Q0FBT0ksT0FBTzt3Q0FBSUMsUUFBUTs7Ozs7O2tEQUMxRSw4REFBQ0M7d0NBQUdOLFdBQVU7a0RBQW9DOzs7Ozs7Ozs7Ozs7MENBRWxELDhEQUFDTTtnQ0FBR04sV0FBVTswQ0FBeUM7Ozs7OzswQ0FDdkQsOERBQUNsQyx5RUFBU0E7Z0NBQ05JLFVBQVVBO2dDQUNWSSxZQUFZQTtnQ0FDWkksbUJBQW1CQTtnQ0FDbkJXLGNBQWNBO2dDQUNkYixTQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQztHQXBFd0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3g/ZmM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IENoYW5nZUV2ZW50LCBNb3VzZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBCYWNrZ3JvdW5kU2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhZ2VzL2xvZ2luL0JhY2tncm91bmRTZWN0aW9uJztcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYWdlcy9sb2dpbi9Mb2dpbkZvcm0nO1xuaW1wb3J0IEFsZXJ0IGZyb20gJ0AvY29tcG9uZW50cy9BbGVydC9BbGVydCc7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uL2xpYi9zdXBhYmFzZSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL3V0aWxzL3N1cGFiYXNlL2NsaWVudCdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblBhZ2UoKSB7XG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH0pO1xuICAgIGNvbnN0IFtmb3JtRXJyb3JzLCBzZXRGb3JtRXJyb3JzXSA9IHVzZVN0YXRlKHsgZW1haWw6ICcnLCBwYXNzd29yZDogJycgfSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtuYW1lXTogdmFsdWUgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHZhbGlkYXRlRm9ybSA9IChmb3JtRGF0YTp7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH0pID0+IHtcbiAgICAgICAgbGV0IGVycm9ycyA9IHsgZW1haWw6ICcnLCBwYXNzd29yZDogJycgfTtcbiAgICAgICAgaWYgKCFmb3JtRGF0YS5lbWFpbCkge1xuICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gJ0VtYWlsIGlzIHJlcXVpcmVkJztcbiAgICAgICAgfSBlbHNlIGlmICghL1xcUytAXFxTK1xcLlxcUysvLnRlc3QoZm9ybURhdGEuZW1haWwpKSB7XG4gICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZvcm1EYXRhLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnO1xuICAgICAgICB9XG4gICAgICAgIHNldEZvcm1FcnJvcnMoZXJyb3JzKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZCA9IHZhbGlkYXRlRm9ybShmb3JtRGF0YSk7XG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZm9ybSBkYXRhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudCgpO1xuICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduSW5XaXRoUGFzc3dvcmQoZm9ybURhdGEpO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdXBhYmFzZSBhdXRoZW50aWNhdGlvbiBlcnJvcjogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAvLyBZb3UgY2FuIHJlZGlyZWN0IHRvIHRoZSBlcnJvciBwYWdlIG9yIHNob3cgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgdXNlclxuICAgICAgICAgICAgcmVkaXJlY3QoJy9lcnJvcicpOyAgICBcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtc3RyZXRjaCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPEJhY2tncm91bmRTZWN0aW9uIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTEvMiB3LWZ1bGwgYmctZ3JheS05MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgcC0xNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweS02IHotMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItOCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYmVhY2guc3ZnXCIgYWx0PVwiTWFsaWN1bFwiIGNsYXNzTmFtZT1cIm1yLTRcIiB3aWR0aD17NDV9IGhlaWdodD17NDV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+TWFsaUN1bDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgbWItOFwiPldlbGNvbWUgYmFjayE8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ2luRm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhPXtmb3JtRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRXJyb3JzPXtmb3JtRXJyb3JzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvbWFpbj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwicmVkaXJlY3QiLCJCYWNrZ3JvdW5kU2VjdGlvbiIsIkxvZ2luRm9ybSIsIkltYWdlIiwiY3JlYXRlQ2xpZW50IiwiTG9naW5QYWdlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJmb3JtRXJyb3JzIiwic2V0Rm9ybUVycm9ycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwidmFsaWRhdGVGb3JtIiwiZXJyb3JzIiwidGVzdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJpc1ZhbGlkIiwiRXJyb3IiLCJzdXBhYmFzZSIsImVycm9yIiwiYXV0aCIsInNpZ25JbldpdGhQYXNzd29yZCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibWFpbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});