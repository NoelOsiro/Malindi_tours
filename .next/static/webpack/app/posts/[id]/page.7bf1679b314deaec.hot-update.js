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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Post_MainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Post/MainContent */ \"(app-pages-browser)/./src/components/Post/MainContent.tsx\");\n/* harmony import */ var _components_Post_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Post/Sidebar */ \"(app-pages-browser)/./src/components/Post/Sidebar.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _utils_supabase_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/supabase/client */ \"(app-pages-browser)/./src/utils/supabase/client.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Post = ()=>{\n    _s();\n    const [postData, setPostData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const pathnameParts = pathname.split(\"/\");\n    const uuid = pathnameParts[pathnameParts.length - 1];\n    const supabase = (0,_utils_supabase_client__WEBPACK_IMPORTED_MODULE_5__.createClient)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            setLoading(true); // Set loading state to true before fetching data\n            const post_with_user = supabase.from(\"posts\").select(\"\\n                    post_id,\\n                    post_content,\\n                    created_at,\\n                    category,\\n                    images,\\n                    title,\\n                    description,\\n                    profiles (username,avatar_url,bio)\\n                \").eq(\"post_id\", uuid).single();\n            try {\n                const { data, error } = await post_with_user;\n                if (error) {\n                    throw new Error(\"Failed to fetch data\");\n                }\n                const result = data;\n                setPostData(result);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            } finally{\n                setLoading(false); // Set loading state to false after fetching data\n            }\n        }\n        fetchData();\n        return ()=>{\n        // Perform any cleanup tasks here\n        };\n    }, [\n        uuid\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-2 mt-24 h-full\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[700px] flex justify-center items-center bg-gray-200 bg-opacity-75 z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-4xl font-bold\",\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n                lineNumber: 73,\n                columnNumber: 17\n            }, undefined),\n            postData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"grid md:grid-cols-3 mt-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_MainContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        postData: postData\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        profileData: postData.profiles\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Malindi_tours/src/app/posts/[id]/page.tsx\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Post, \"sgEYLnIVdblFBIY0d8voXi2SFwc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9zdHMvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzRDO0FBQ1k7QUFDUjtBQUNGO0FBRVM7QUFpQnZELE1BQU1NLE9BQWlCOztJQUNuQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQWE7SUFDckQsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1XLFdBQVdQLDREQUFXQTtJQUM1QixNQUFNUSxnQkFBZ0JELFNBQVNFLEtBQUssQ0FBQztJQUNyQyxNQUFNQyxPQUFPRixhQUFhLENBQUNBLGNBQWNHLE1BQU0sR0FBRyxFQUFFO0lBQ3BELE1BQU1DLFdBQVdYLG9FQUFZQTtJQUU3QkosZ0RBQVNBLENBQUM7UUFDTixlQUFlZ0I7WUFDWFAsV0FBVyxPQUFPLGlEQUFpRDtZQUVuRSxNQUFNUSxpQkFBaUJGLFNBQ2xCRyxJQUFJLENBQUMsU0FDTEMsTUFBTSxDQUFFLDBTQVVSQyxFQUFFLENBQUMsV0FBV1AsTUFDZFEsTUFBTTtZQUVYLElBQUk7Z0JBQ0EsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1OO2dCQUM5QixJQUFJTSxPQUFPO29CQUNQLE1BQU0sSUFBSUMsTUFBTTtnQkFDcEI7Z0JBQ0EsTUFBTUMsU0FBdUJIO2dCQUM3QmYsWUFBWWtCO1lBQ2hCLEVBQUUsT0FBT0YsT0FBTztnQkFDWkcsUUFBUUgsS0FBSyxDQUFDLHdCQUF3QkE7WUFDMUMsU0FBVTtnQkFDTmQsV0FBVyxRQUFRLGlEQUFpRDtZQUN4RTtRQUNKO1FBQ0FPO1FBQ0EsT0FBTztRQUNILGlDQUFpQztRQUNyQztJQUNKLEdBQUc7UUFBQ0g7S0FBSztJQUVULHFCQUNJLDhEQUFDYztRQUFJQyxXQUFVOztZQUNWcEIseUJBQ0csOERBQUNtQjtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQXFCOzs7Ozs7Ozs7OztZQUczQ3RCLDBCQUNELDhEQUFDdUI7Z0JBQVFELFdBQVU7O2tDQUNmLDhEQUFDM0Isb0VBQVdBO3dCQUFDSyxVQUFVQTs7Ozs7O2tDQUN2Qiw4REFBQ0osZ0VBQU9BO3dCQUFDNEIsYUFBYXhCLFNBQVN5QixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkQ7R0E1RE0xQjs7UUFHZUYsd0RBQVdBOzs7S0FIMUJFO0FBOEROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcG9zdHMvW2lkXS9wYWdlLnRzeD8wYmFmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYWluQ29udGVudCBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3QvTWFpbkNvbnRlbnRcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdC9TaWRlYmFyXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IFF1ZXJ5RGF0YSB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAL3V0aWxzL3N1cGFiYXNlL2NsaWVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXBvc3REYXRhIHtcbiAgICBwb3N0X2lkOiBzdHJpbmc7XG4gICAgcG9zdF9jb250ZW50OiBzdHJpbmc7XG4gICAgY3JlYXRlZF9hdDogc3RyaW5nO1xuICAgIGNhdGVnb3J5OiBudWxsO1xuICAgIGltYWdlczogc3RyaW5nW107XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHByb2ZpbGVzOiB7XG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgICAgIGF2YXRhcl91cmw6c3RyaW5nO1xuICAgICAgICBiaW86c3RyaW5nO1xuICAgIH1cbn1cblxuY29uc3QgUG9zdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Bvc3REYXRhLCBzZXRQb3N0RGF0YV0gPSB1c2VTdGF0ZTxhbnkgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG4gICAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgdXVpZCA9IHBhdGhuYW1lUGFydHNbcGF0aG5hbWVQYXJ0cy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudCgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTsgLy8gU2V0IGxvYWRpbmcgc3RhdGUgdG8gdHJ1ZSBiZWZvcmUgZmV0Y2hpbmcgZGF0YVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwb3N0X3dpdGhfdXNlciA9IHN1cGFiYXNlXG4gICAgICAgICAgICAgICAgLmZyb20oJ3Bvc3RzJylcbiAgICAgICAgICAgICAgICAuc2VsZWN0KGBcbiAgICAgICAgICAgICAgICAgICAgcG9zdF9pZCxcbiAgICAgICAgICAgICAgICAgICAgcG9zdF9jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2F0LFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzICh1c2VybmFtZSxhdmF0YXJfdXJsLGJpbylcbiAgICAgICAgICAgICAgICBgKVxuICAgICAgICAgICAgICAgIC5lcSgncG9zdF9pZCcsIHV1aWQpXG4gICAgICAgICAgICAgICAgLnNpbmdsZSgpO1xuICAgICAgICAgICAgdHlwZSBQb3N0V2l0aFVzZXIgPSBRdWVyeURhdGE8dHlwZW9mIHBvc3Rfd2l0aF91c2VyPlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBwb3N0X3dpdGhfdXNlclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBkYXRhJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogUG9zdFdpdGhVc2VyID0gZGF0YVxuICAgICAgICAgICAgICAgIHNldFBvc3REYXRhKHJlc3VsdCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gU2V0IGxvYWRpbmcgc3RhdGUgdG8gZmFsc2UgYWZ0ZXIgZmV0Y2hpbmcgZGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgLy8gUGVyZm9ybSBhbnkgY2xlYW51cCB0YXNrcyBoZXJlXG4gICAgICAgIH07XG4gICAgfSwgW3V1aWRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtMiBtdC0yNCBoLWZ1bGxcIj5cbiAgICAgICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzcwMHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1ncmF5LTIwMCBiZy1vcGFjaXR5LTc1IHotNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGRcIj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Bvc3REYXRhICYmIFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMyBtdC0xMlwiPlxuICAgICAgICAgICAgICAgIDxNYWluQ29udGVudCBwb3N0RGF0YT17cG9zdERhdGF9IC8+XG4gICAgICAgICAgICAgICAgPFNpZGViYXIgcHJvZmlsZURhdGE9e3Bvc3REYXRhLnByb2ZpbGVzfSAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNYWluQ29udGVudCIsIlNpZGViYXIiLCJ1c2VQYXRobmFtZSIsImNyZWF0ZUNsaWVudCIsIlBvc3QiLCJwb3N0RGF0YSIsInNldFBvc3REYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwYXRobmFtZSIsInBhdGhuYW1lUGFydHMiLCJzcGxpdCIsInV1aWQiLCJsZW5ndGgiLCJzdXBhYmFzZSIsImZldGNoRGF0YSIsInBvc3Rfd2l0aF91c2VyIiwiZnJvbSIsInNlbGVjdCIsImVxIiwic2luZ2xlIiwiZGF0YSIsImVycm9yIiwiRXJyb3IiLCJyZXN1bHQiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsInByb2ZpbGVEYXRhIiwicHJvZmlsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/posts/[id]/page.tsx\n"));

/***/ })

});