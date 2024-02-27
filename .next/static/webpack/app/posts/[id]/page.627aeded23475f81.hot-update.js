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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_lib_supabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/lib/supabase */ \"(app-pages-browser)/./src/app/lib/supabase.ts\");\n/* harmony import */ var _components_Post_MainContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Post/MainContent */ \"(app-pages-browser)/./src/components/Post/MainContent.tsx\");\n/* harmony import */ var _components_Post_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Post/Sidebar */ \"(app-pages-browser)/./src/components/Post/Sidebar.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Post = ()=>{\n    _s();\n    const [postData, setPostData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    const pathnameParts = pathname.split(\"/\");\n    const uuid = pathnameParts[pathnameParts.length - 1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            const post_with_user = _app_lib_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"posts\").select(\"\\n                post_id,\\n                post_content,\\n                created_at,\\n                category,\\n                images,\\n                title,\\n                description,\\n                profiles (username,avatar_url,bio)\\n            \").eq(\"post_id\", uuid).single();\n            try {\n                const { data, error } = await post_with_user;\n                if (error) {\n                    throw new Error(\"Failed to fetch data\");\n                }\n                const result = data;\n                setPostData(result);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        }\n        fetchData();\n        return ()=>{\n        // Perform any cleanup tasks here\n        };\n    }, [\n        uuid\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-2 mt-24\",\n        children: postData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"grid md:grid-cols-3 mt-12\",\n            children: [\n                postData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_MainContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    postData: postData\n                }, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 30\n                }, undefined),\n                postData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_Sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    profileData: postData.profiles\n                }, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 30\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n            lineNumber: 66,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Post, \"95Wpf5Gc0EztuTlnQWG59qmQbrU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9zdHMvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzRDO0FBQ0U7QUFDVTtBQUNSO0FBQ0Y7QUFpQjlDLE1BQU1NLE9BQWlCOztJQUNuQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQWE7SUFDckQsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1XLFdBQVdOLDREQUFXQTtJQUM1QixNQUFNTyxnQkFBZ0JELFNBQVNFLEtBQUssQ0FBQztJQUNyQyxNQUFNQyxPQUFPRixhQUFhLENBQUNBLGNBQWNHLE1BQU0sR0FBRyxFQUFFO0lBRXBEZCxnREFBU0EsQ0FBQztRQUNOLGVBQWVlO1lBQ1gsTUFBTUMsaUJBQWlCZix1REFBUUEsQ0FDOUJnQixJQUFJLENBQUMsU0FDTEMsTUFBTSxDQUFFLHNRQVVSQyxFQUFFLENBQUMsV0FBV04sTUFDZE8sTUFBTTtZQUVQLElBQUk7Z0JBQ0EsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1OO2dCQUM5QixJQUFJTSxPQUFPO29CQUNQLE1BQU0sSUFBSUMsTUFBTTtnQkFDcEI7Z0JBQ0EsTUFBTUMsU0FBdUJIO2dCQUM3QmQsWUFBWWlCO1lBQ2hCLEVBQUUsT0FBT0YsT0FBTztnQkFDWkcsUUFBUUgsS0FBSyxDQUFDLHdCQUF3QkE7WUFDMUM7UUFDSjtRQUNBUDtRQUNBLE9BQU87UUFDSCxpQ0FBaUM7UUFDckM7SUFDSixHQUFHO1FBQUNGO0tBQUs7SUFDVCxxQkFDSSw4REFBQ2E7UUFBSUMsV0FBVTtrQkFDVnJCLDBCQUNELDhEQUFDc0I7WUFBUUQsV0FBVTs7Z0JBQ2RyQiwwQkFBWSw4REFBQ0osb0VBQVdBO29CQUFDSSxVQUFVQTs7Ozs7O2dCQUNuQ0EsMEJBQVksOERBQUNILGdFQUFPQTtvQkFBQzBCLGFBQWF2QixTQUFTd0IsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEU7R0FsRE16Qjs7UUFHZUQsd0RBQVdBOzs7S0FIMUJDO0FBb0ROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcG9zdHMvW2lkXS9wYWdlLnRzeD8wYmFmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIkAvYXBwL2xpYi9zdXBhYmFzZVwiO1xuaW1wb3J0IE1haW5Db250ZW50IGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdC9NYWluQ29udGVudFwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0L1NpZGViYXJcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgUXVlcnlEYXRhIH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJcG9zdERhdGEge1xuICAgIHBvc3RfaWQ6IHN0cmluZztcbiAgICBwb3N0X2NvbnRlbnQ6IHN0cmluZztcbiAgICBjcmVhdGVkX2F0OiBzdHJpbmc7XG4gICAgY2F0ZWdvcnk6IG51bGw7XG4gICAgaW1hZ2VzOiBzdHJpbmdbXTtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgcHJvZmlsZXM6IHtcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICAgICAgYXZhdGFyX3VybDpzdHJpbmc7XG4gICAgICAgIGJpbzpzdHJpbmc7XG4gICAgfVxuICB9XG5jb25zdCBQb3N0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBbcG9zdERhdGEsIHNldFBvc3REYXRhXSA9IHVzZVN0YXRlPGFueSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gICAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgdXVpZCA9IHBhdGhuYW1lUGFydHNbcGF0aG5hbWVQYXJ0cy5sZW5ndGggLSAxXTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3Rfd2l0aF91c2VyID0gc3VwYWJhc2VcbiAgICAgICAgICAgIC5mcm9tKCdwb3N0cycpXG4gICAgICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgICAgICBwb3N0X2lkLFxuICAgICAgICAgICAgICAgIHBvc3RfY29udGVudCxcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgICAgIGltYWdlcyxcbiAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBwcm9maWxlcyAodXNlcm5hbWUsYXZhdGFyX3VybCxiaW8pXG4gICAgICAgICAgICBgKVxuICAgICAgICAgICAgLmVxKCdwb3N0X2lkJywgdXVpZClcbiAgICAgICAgICAgIC5zaW5nbGUoKTtcbiAgICAgICAgICAgIHR5cGUgUG9zdFdpdGhVc2VyID0gUXVlcnlEYXRhPHR5cGVvZiBwb3N0X3dpdGhfdXNlcj5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcG9zdF93aXRoX3VzZXJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZGF0YScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IFBvc3RXaXRoVXNlciA9IGRhdGFcbiAgICAgICAgICAgICAgICBzZXRQb3N0RGF0YShyZXN1bHQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gYW55IGNsZWFudXAgdGFza3MgaGVyZVxuICAgICAgICB9O1xuICAgIH0sIFt1dWlkXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC0yIG10LTI0XCI+XG4gICAgICAgICAgICB7cG9zdERhdGEgJiYgXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIG10LTEyXCI+XG4gICAgICAgICAgICAgICAge3Bvc3REYXRhICYmIDxNYWluQ29udGVudCBwb3N0RGF0YT17cG9zdERhdGF9IC8+fVxuICAgICAgICAgICAgICAgIHtwb3N0RGF0YSAmJiA8U2lkZWJhciBwcm9maWxlRGF0YT17cG9zdERhdGEucHJvZmlsZXN9IC8+fVxuICAgICAgICAgICAgPC9zZWN0aW9uPn1cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN1cGFiYXNlIiwiTWFpbkNvbnRlbnQiLCJTaWRlYmFyIiwidXNlUGF0aG5hbWUiLCJQb3N0IiwicG9zdERhdGEiLCJzZXRQb3N0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicGF0aG5hbWUiLCJwYXRobmFtZVBhcnRzIiwic3BsaXQiLCJ1dWlkIiwibGVuZ3RoIiwiZmV0Y2hEYXRhIiwicG9zdF93aXRoX3VzZXIiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJzaW5nbGUiLCJkYXRhIiwiZXJyb3IiLCJFcnJvciIsInJlc3VsdCIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwicHJvZmlsZURhdGEiLCJwcm9maWxlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/posts/[id]/page.tsx\n"));

/***/ })

});