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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_lib_supabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/lib/supabase */ \"(app-pages-browser)/./src/app/lib/supabase.ts\");\n/* harmony import */ var _components_Post_MainContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Post/MainContent */ \"(app-pages-browser)/./src/components/Post/MainContent.tsx\");\n/* harmony import */ var _components_Post_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Post/Sidebar */ \"(app-pages-browser)/./src/components/Post/Sidebar.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Post = ()=>{\n    _s();\n    const [postData, setPostData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    const pathnameParts = pathname.split(\"/\");\n    const uuid = pathnameParts[pathnameParts.length - 1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            setLoading(true); // Set loading state to true before fetching data\n            debugger;\n            const post_with_user = _app_lib_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"posts\").select(\"\\n                    post_id,\\n                    post_content,\\n                    created_at,\\n                    category,\\n                    images,\\n                    title,\\n                    description,\\n                    profiles (username,avatar_url,bio)\\n                \").eq(\"post_id\", uuid).single();\n            try {\n                const { data, error } = await post_with_user;\n                if (error) {\n                    throw new Error(\"Failed to fetch data\");\n                }\n                const result = data;\n                setPostData(result);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            } finally{\n                setLoading(false); // Set loading state to false after fetching data\n            }\n        }\n        fetchData();\n        return ()=>{\n        // Perform any cleanup tasks here\n        };\n    }, [\n        uuid\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-2 mt-24 relative\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full flex justify-center items-center bg-gray-200 bg-opacity-75 z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-4xl font-bold\",\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n                lineNumber: 72,\n                columnNumber: 17\n            }, undefined),\n            postData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"grid md:grid-cols-3 mt-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_MainContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        postData: postData\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_Sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        profileData: postData.profiles\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Post, \"sgEYLnIVdblFBIY0d8voXi2SFwc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9zdHMvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzRDO0FBQ0U7QUFDVTtBQUNSO0FBQ0Y7QUFrQjlDLE1BQU1NLE9BQWlCOztJQUNuQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQWE7SUFDckQsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1XLFdBQVdOLDREQUFXQTtJQUM1QixNQUFNTyxnQkFBZ0JELFNBQVNFLEtBQUssQ0FBQztJQUNyQyxNQUFNQyxPQUFPRixhQUFhLENBQUNBLGNBQWNHLE1BQU0sR0FBRyxFQUFFO0lBRXBEZCxnREFBU0EsQ0FBQztRQUNOLGVBQWVlO1lBQ1hOLFdBQVcsT0FBTyxpREFBaUQ7WUFDbkUsUUFBUztZQUNULE1BQU1PLGlCQUFpQmYsdURBQVFBLENBQzFCZ0IsSUFBSSxDQUFDLFNBQ0xDLE1BQU0sQ0FBRSwwU0FVUkMsRUFBRSxDQUFDLFdBQVdOLE1BQ2RPLE1BQU07WUFFWCxJQUFJO2dCQUNBLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNTjtnQkFDOUIsSUFBSU0sT0FBTztvQkFDUCxNQUFNLElBQUlDLE1BQU07Z0JBQ3BCO2dCQUNBLE1BQU1DLFNBQXVCSDtnQkFDN0JkLFlBQVlpQjtZQUNoQixFQUFFLE9BQU9GLE9BQU87Z0JBQ1pHLFFBQVFILEtBQUssQ0FBQyx3QkFBd0JBO1lBQzFDLFNBQVU7Z0JBQ05iLFdBQVcsUUFBUSxpREFBaUQ7WUFDeEU7UUFDSjtRQUNBTTtRQUNBLE9BQU87UUFDSCxpQ0FBaUM7UUFDckM7SUFDSixHQUFHO1FBQUNGO0tBQUs7SUFFVCxxQkFDSSw4REFBQ2E7UUFBSUMsV0FBVTs7WUFDVm5CLHlCQUNHLDhEQUFDa0I7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUFxQjs7Ozs7Ozs7Ozs7WUFHM0NyQiwwQkFDRCw4REFBQ3NCO2dCQUFRRCxXQUFVOztrQ0FDZiw4REFBQ3pCLG9FQUFXQTt3QkFBQ0ksVUFBVUE7Ozs7OztrQ0FDdkIsOERBQUNILGdFQUFPQTt3QkFBQzBCLGFBQWF2QixTQUFTd0IsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZEO0dBM0RNekI7O1FBR2VELHdEQUFXQTs7O0tBSDFCQztBQTZETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Bvc3RzL1tpZF0vcGFnZS50c3g/MGJhZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCJAL2FwcC9saWIvc3VwYWJhc2VcIjtcbmltcG9ydCBNYWluQ29udGVudCBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3QvTWFpbkNvbnRlbnRcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdC9TaWRlYmFyXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IFF1ZXJ5RGF0YSB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXBvc3REYXRhIHtcbiAgICBwb3N0X2lkOiBzdHJpbmc7XG4gICAgcG9zdF9jb250ZW50OiBzdHJpbmc7XG4gICAgY3JlYXRlZF9hdDogc3RyaW5nO1xuICAgIGNhdGVnb3J5OiBudWxsO1xuICAgIGltYWdlczogc3RyaW5nW107XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHByb2ZpbGVzOiB7XG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgICAgIGF2YXRhcl91cmw6c3RyaW5nO1xuICAgICAgICBiaW86c3RyaW5nO1xuICAgIH1cbn1cblxuY29uc3QgUG9zdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Bvc3REYXRhLCBzZXRQb3N0RGF0YV0gPSB1c2VTdGF0ZTxhbnkgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gICAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgdXVpZCA9IHBhdGhuYW1lUGFydHNbcGF0aG5hbWVQYXJ0cy5sZW5ndGggLSAxXTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7IC8vIFNldCBsb2FkaW5nIHN0YXRlIHRvIHRydWUgYmVmb3JlIGZldGNoaW5nIGRhdGFcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgY29uc3QgcG9zdF93aXRoX3VzZXIgPSBzdXBhYmFzZVxuICAgICAgICAgICAgICAgIC5mcm9tKCdwb3N0cycpXG4gICAgICAgICAgICAgICAgLnNlbGVjdChgXG4gICAgICAgICAgICAgICAgICAgIHBvc3RfaWQsXG4gICAgICAgICAgICAgICAgICAgIHBvc3RfY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZF9hdCxcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlcyAodXNlcm5hbWUsYXZhdGFyX3VybCxiaW8pXG4gICAgICAgICAgICAgICAgYClcbiAgICAgICAgICAgICAgICAuZXEoJ3Bvc3RfaWQnLCB1dWlkKVxuICAgICAgICAgICAgICAgIC5zaW5nbGUoKTtcbiAgICAgICAgICAgIHR5cGUgUG9zdFdpdGhVc2VyID0gUXVlcnlEYXRhPHR5cGVvZiBwb3N0X3dpdGhfdXNlcj5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgcG9zdF93aXRoX3VzZXJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZGF0YScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IFBvc3RXaXRoVXNlciA9IGRhdGFcbiAgICAgICAgICAgICAgICBzZXRQb3N0RGF0YShyZXN1bHQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7IC8vIFNldCBsb2FkaW5nIHN0YXRlIHRvIGZhbHNlIGFmdGVyIGZldGNoaW5nIGRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gYW55IGNsZWFudXAgdGFza3MgaGVyZVxuICAgICAgICB9O1xuICAgIH0sIFt1dWlkXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTIgbXQtMjQgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1ncmF5LTIwMCBiZy1vcGFjaXR5LTc1IHotNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGRcIj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Bvc3REYXRhICYmIFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMyBtdC0xMlwiPlxuICAgICAgICAgICAgICAgIDxNYWluQ29udGVudCBwb3N0RGF0YT17cG9zdERhdGF9IC8+XG4gICAgICAgICAgICAgICAgPFNpZGViYXIgcHJvZmlsZURhdGE9e3Bvc3REYXRhLnByb2ZpbGVzfSAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdXBhYmFzZSIsIk1haW5Db250ZW50IiwiU2lkZWJhciIsInVzZVBhdGhuYW1lIiwiUG9zdCIsInBvc3REYXRhIiwic2V0UG9zdERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBhdGhuYW1lIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0IiwidXVpZCIsImxlbmd0aCIsImZldGNoRGF0YSIsInBvc3Rfd2l0aF91c2VyIiwiZnJvbSIsInNlbGVjdCIsImVxIiwic2luZ2xlIiwiZGF0YSIsImVycm9yIiwiRXJyb3IiLCJyZXN1bHQiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsInByb2ZpbGVEYXRhIiwicHJvZmlsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/posts/[id]/page.tsx\n"));

/***/ })

});