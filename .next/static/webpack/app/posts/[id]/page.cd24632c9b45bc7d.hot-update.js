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

/***/ "(app-pages-browser)/./src/app/posts/[id]/page.tsx":
/*!*************************************!*\
  !*** ./src/app/posts/[id]/page.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_lib_supabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/lib/supabase */ \"(app-pages-browser)/./src/app/lib/supabase.ts\");\n/* harmony import */ var _components_Post_MainContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Post/MainContent */ \"(app-pages-browser)/./src/components/Post/MainContent.tsx\");\n/* harmony import */ var _components_Post_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Post/Sidebar */ \"(app-pages-browser)/./src/components/Post/Sidebar.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Post = ()=>{\n    _s();\n    const [postData, setPostData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    const pathnameParts = pathname.split(\"/\");\n    const uuid = pathnameParts[pathnameParts.length - 1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            const post_with_user = _app_lib_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"posts\").select(\"\\n                post_id,\\n                post_content,\\n                created_at,\\n                category,\\n                images,\\n                title,\\n                description,\\n                profiles (username,avatar_url)\\n            \").eq(\"post_id\", uuid).single();\n            try {\n                const { data, error } = await post_with_user;\n                if (error) {\n                    throw new Error(\"Failed to fetch data\");\n                }\n                const postData = data;\n                setPostData(postData);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        }\n        fetchData();\n        return ()=>{\n        // Perform any cleanup tasks here\n        };\n    }, [\n        uuid\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-2 mt-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"grid md:grid-cols-3 mt-12\",\n            children: [\n                postData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_MainContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    postData: postData\n                }, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 30\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_Sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n            lineNumber: 62,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Post, \"lnu/fNzXQ8iFXN3oAhMuwnqjuYg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9zdHMvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzRDO0FBQ0U7QUFDVTtBQUNSO0FBQ0Y7QUFlOUMsTUFBTU0sT0FBaUI7O0lBQ25CLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBbUI7SUFDM0QsTUFBTVMsV0FBV0osNERBQVdBO0lBQzVCLE1BQU1LLGdCQUFnQkQsU0FBU0UsS0FBSyxDQUFDO0lBQ3JDLE1BQU1DLE9BQU9GLGFBQWEsQ0FBQ0EsY0FBY0csTUFBTSxHQUFHLEVBQUU7SUFFcERaLGdEQUFTQSxDQUFDO1FBQ04sZUFBZWE7WUFDWCxNQUFNQyxpQkFBaUJiLHVEQUFRQSxDQUM5QmMsSUFBSSxDQUFDLFNBQ0xDLE1BQU0sQ0FBRSxrUUFVUkMsRUFBRSxDQUFDLFdBQVdOLE1BQ2RPLE1BQU07WUFFUCxJQUFJO2dCQUNBLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNTjtnQkFDOUIsSUFBSU0sT0FBTztvQkFDUCxNQUFNLElBQUlDLE1BQU07Z0JBQ3BCO2dCQUNBLE1BQU1mLFdBQXlCYTtnQkFDL0JaLFlBQVlEO1lBQ2hCLEVBQUUsT0FBT2MsT0FBTztnQkFDWkUsUUFBUUYsS0FBSyxDQUFDLHdCQUF3QkE7WUFDMUM7UUFDSjtRQUNBUDtRQUNBLE9BQU87UUFDSCxpQ0FBaUM7UUFDckM7SUFDSixHQUFHO1FBQUNGO0tBQUs7SUFDVCxxQkFDSSw4REFBQ1k7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0M7WUFBUUQsV0FBVTs7Z0JBQ2RsQiwwQkFBWSw4REFBQ0osb0VBQVdBO29CQUFDSSxVQUFVQTs7Ozs7OzhCQUNwQyw4REFBQ0gsZ0VBQU9BOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXhCO0dBL0NNRTs7UUFFZUQsd0RBQVdBOzs7S0FGMUJDO0FBaUROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcG9zdHMvW2lkXS9wYWdlLnRzeD8wYmFmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIkAvYXBwL2xpYi9zdXBhYmFzZVwiO1xuaW1wb3J0IE1haW5Db250ZW50IGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdC9NYWluQ29udGVudFwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0L1NpZGViYXJcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgUXVlcnlEYXRhIH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcbmV4cG9ydCBpbnRlcmZhY2UgSXBvc3REYXRhIHtcbiAgICBwb3N0X2lkOiBzdHJpbmc7XG4gICAgcG9zdF9jb250ZW50OiBzdHJpbmc7XG4gICAgY3JlYXRlZF9hdDogc3RyaW5nO1xuICAgIGNhdGVnb3J5OiBudWxsO1xuICAgIGltYWdlczogc3RyaW5nW107XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHByb2ZpbGVzOiB7XG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgICAgIGF2YXRhclxuICAgIH1cbiAgfVxuY29uc3QgUG9zdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Bvc3REYXRhLCBzZXRQb3N0RGF0YV0gPSB1c2VTdGF0ZTxJcG9zdERhdGEgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gICAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgdXVpZCA9IHBhdGhuYW1lUGFydHNbcGF0aG5hbWVQYXJ0cy5sZW5ndGggLSAxXTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3Rfd2l0aF91c2VyID0gc3VwYWJhc2VcbiAgICAgICAgICAgIC5mcm9tKCdwb3N0cycpXG4gICAgICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgICAgICBwb3N0X2lkLFxuICAgICAgICAgICAgICAgIHBvc3RfY29udGVudCxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgICAgIGltYWdlcyxcbiAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBwcm9maWxlcyAodXNlcm5hbWUsYXZhdGFyX3VybClcbiAgICAgICAgICAgIGApXG4gICAgICAgICAgICAuZXEoJ3Bvc3RfaWQnLCB1dWlkKVxuICAgICAgICAgICAgLnNpbmdsZSgpO1xuICAgICAgICAgICAgdHlwZSBQb3N0V2l0aFVzZXIgPSBRdWVyeURhdGE8dHlwZW9mIHBvc3Rfd2l0aF91c2VyPlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBwb3N0X3dpdGhfdXNlclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBkYXRhJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3REYXRhOiBQb3N0V2l0aFVzZXIgPSBkYXRhXG4gICAgICAgICAgICAgICAgc2V0UG9zdERhdGEocG9zdERhdGEpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gYW55IGNsZWFudXAgdGFza3MgaGVyZVxuICAgICAgICB9O1xuICAgIH0sIFt1dWlkXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC0yIG10LTI0XCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIG10LTEyXCI+XG4gICAgICAgICAgICAgICAge3Bvc3REYXRhICYmIDxNYWluQ29udGVudCBwb3N0RGF0YT17cG9zdERhdGF9IC8+fVxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3VwYWJhc2UiLCJNYWluQ29udGVudCIsIlNpZGViYXIiLCJ1c2VQYXRobmFtZSIsIlBvc3QiLCJwb3N0RGF0YSIsInNldFBvc3REYXRhIiwicGF0aG5hbWUiLCJwYXRobmFtZVBhcnRzIiwic3BsaXQiLCJ1dWlkIiwibGVuZ3RoIiwiZmV0Y2hEYXRhIiwicG9zdF93aXRoX3VzZXIiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJzaW5nbGUiLCJkYXRhIiwiZXJyb3IiLCJFcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/posts/[id]/page.tsx\n"));

/***/ })

});