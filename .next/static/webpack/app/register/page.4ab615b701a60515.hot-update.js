"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/register/page",{

/***/ "(app-pages-browser)/./src/app/register/components/RegisterForm.tsx":
/*!******************************************************!*\
  !*** ./src/app/register/components/RegisterForm.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst RegisterForm = (param)=>{\n    let { formData, formErrors, handleInputChange, handleSubmit } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-4xl font-semibold text-white mb-8\",\n                children: \"Welcome back!\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Malindi_tours/src/app/register/components/RegisterForm.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        name: \"email\",\n                        placeholder: \"Email\",\n                        className: \"block w-full p-3 rounded bg-gray-800 border border-gray-700 placeholder-gray-500 focus:outline-none focus:border-indigo-500\",\n                        value: formData.email,\n                        onChange: handleInputChange\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/app/register/components/RegisterForm.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, undefined),\n                    formErrors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500 mt-1\",\n                        children: formErrors.email\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/app/register/components/RegisterForm.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/app/register/components/RegisterForm.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        name: \"password\",\n                        placeholder: \"Password\",\n                        className: \"block w-full p-3 rounded bg-gray-800 border border-gray-700 placeholder-gray-500 focus:outline-none focus:border-indigo-500\",\n                        value: formData.password,\n                        onChange: handleInputChange\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/app/register/components/RegisterForm.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined),\n                    formErrors.password && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500 mt-1\",\n                        children: formErrors.password\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/app/register/components/RegisterForm.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/app/register/components/RegisterForm.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        name: \"confirm_password\",\n                        placeholder: \"Confirm Password\",\n                        className: \"block w-full p-3 rounded bg-gray-800 border border-gray-700 placeholder-gray-500 focus:outline-none focus:border-indigo-500\",\n                        value: formData.confirmPassword,\n                        onChange: handleInputChange\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/app/register/components/RegisterForm.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined),\n                    formErrors.confirmPassword && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500 mt-1\",\n                        children: formErrors.confirmPassword\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/app/register/components/RegisterForm.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/app/register/components/RegisterForm.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSubmit,\n                className: \"w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline\",\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Malindi_tours/src/app/register/components/RegisterForm.tsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Malindi_tours/src/app/register/components/RegisterForm.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_c = RegisterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterForm);\nvar _c;\n$RefreshReg$(_c, \"RegisterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVnaXN0ZXIvY29tcG9uZW50cy9SZWdpc3RlckZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQXVEO0FBaUJ2RCxNQUFNQyxlQUE0QztRQUFDLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxpQkFBaUIsRUFBRUMsWUFBWSxFQUFFO0lBQ3hHLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNDO2dCQUFHQyxXQUFVOzBCQUF5Qzs7Ozs7OzBCQUV2RCw4REFBQ0Y7Z0JBQUlFLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFDR0MsTUFBSzt3QkFDTEMsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkosV0FBVTt3QkFDVkssT0FBT1gsU0FBU1ksS0FBSzt3QkFDckJDLFVBQVVYOzs7Ozs7b0JBRWJELFdBQVdXLEtBQUssa0JBQ2IsOERBQUNFO3dCQUFFUixXQUFVO2tDQUFxQkwsV0FBV1csS0FBSzs7Ozs7Ozs7Ozs7OzBCQUkxRCw4REFBQ1I7Z0JBQUlFLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFDR0MsTUFBSzt3QkFDTEMsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkosV0FBVTt3QkFDVkssT0FBT1gsU0FBU2UsUUFBUTt3QkFDeEJGLFVBQVVYOzs7Ozs7b0JBRWJELFdBQVdjLFFBQVEsa0JBQ2hCLDhEQUFDRDt3QkFBRVIsV0FBVTtrQ0FBcUJMLFdBQVdjLFFBQVE7Ozs7Ozs7Ozs7OzswQkFJN0QsOERBQUNYO2dCQUFJRSxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQ0dDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pKLFdBQVU7d0JBQ1ZLLE9BQU9YLFNBQVNnQixlQUFlO3dCQUMvQkgsVUFBVVg7Ozs7OztvQkFFYkQsV0FBV2UsZUFBZSxrQkFDdkIsOERBQUNGO3dCQUFFUixXQUFVO2tDQUFxQkwsV0FBV2UsZUFBZTs7Ozs7Ozs7Ozs7OzBCQUlwRSw4REFBQ0M7Z0JBQ0dDLFNBQVNmO2dCQUNURyxXQUFVOzBCQUNiOzs7Ozs7Ozs7Ozs7QUFLYjtLQXZETVA7QUF5RE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yZWdpc3Rlci9jb21wb25lbnRzL1JlZ2lzdGVyRm9ybS50c3g/NjIxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBSZWdpc3RlckZvcm1Qcm9wcyB7XG4gICAgZm9ybURhdGE6IHtcbiAgICAgICAgZW1haWw6IHN0cmluZztcbiAgICAgICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG4gICAgfTtcbiAgICBmb3JtRXJyb3JzOiB7XG4gICAgICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuICAgIH07XG4gICAgaGFuZGxlSW5wdXRDaGFuZ2U6IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZDtcbiAgICBoYW5kbGVTdWJtaXQ6IChlOiBNb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4gdm9pZDtcbn1cblxuY29uc3QgUmVnaXN0ZXJGb3JtOiBSZWFjdC5GQzxSZWdpc3RlckZvcm1Qcm9wcz4gPSAoeyBmb3JtRGF0YSwgZm9ybUVycm9ycywgaGFuZGxlSW5wdXRDaGFuZ2UsIGhhbmRsZVN1Ym1pdCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIG1iLThcIj5XZWxjb21lIGJhY2shPC9oMj5cbiAgICAgICAgICAgIHsvKiBFbWFpbCBpbnB1dCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHAtMyByb3VuZGVkIGJnLWdyYXktODAwIGJvcmRlciBib3JkZXItZ3JheS03MDAgcGxhY2Vob2xkZXItZ3JheS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5lbWFpbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBtdC0xXCI+e2Zvcm1FcnJvcnMuZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBQYXNzd29yZCBpbnB1dCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHAtMyByb3VuZGVkIGJnLWdyYXktODAwIGJvcmRlciBib3JkZXItZ3JheS03MDAgcGxhY2Vob2xkZXItZ3JheS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7Zm9ybUVycm9ycy5wYXNzd29yZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBtdC0xXCI+e2Zvcm1FcnJvcnMucGFzc3dvcmR9PC9wPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBDb25maXJtIFBhc3N3b3JkIGlucHV0ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtX3Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHAtMyByb3VuZGVkIGJnLWdyYXktODAwIGJvcmRlciBib3JkZXItZ3JheS03MDAgcGxhY2Vob2xkZXItZ3JheS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNvbmZpcm1QYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Zvcm1FcnJvcnMuY29uZmlybVBhc3N3b3JkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIG10LTFcIj57Zm9ybUVycm9ycy5jb25maXJtUGFzc3dvcmR9PC9wPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBTdWJtaXQgYnV0dG9uICovfVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctaW5kaWdvLTUwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTMgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyRm9ybTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlZ2lzdGVyRm9ybSIsImZvcm1EYXRhIiwiZm9ybUVycm9ycyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsImVtYWlsIiwib25DaGFuZ2UiLCJwIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/register/components/RegisterForm.tsx\n"));

/***/ })

});