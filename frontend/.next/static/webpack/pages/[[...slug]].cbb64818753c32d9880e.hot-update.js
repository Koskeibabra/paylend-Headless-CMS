self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/sections/feature-columns-group.js":
/*!******************************************************!*\
  !*** ./components/sections/feature-columns-group.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/image */ "./components/elements/image.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Babra\\Desktop\\projects\\final-attempt\\my-site\\frontend\\components\\sections\\feature-columns-group.js",
    _this = undefined;



var FeatureColumnsGroup = function FeatureColumnsGroup(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    "class": "horizontal-layout horizontal-menu navbar-static dark-layout 1-column footer-static bg-full-screen-image  blank-page blank-page",
    "data-open": "hover",
    "data-menu": "horizontal-menu",
    "data-col": "1-column",
    "data-layout": "dark-layout",
    style: {
      backgroundImage: "url(/assets/images/pages/auth-bg.jpg)"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container flex flex-col lg:flex-row lg:flex-wrap gap-12 align-top py-12 font-serif",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_image__WEBPACK_IMPORTED_MODULE_1__.default, {
        src: "/assets/images/stack.png",
        layout: "fill",
        objectFit: "cover",
        quality: 100
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, _this), data.features.map(function (feature) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex-1 text-lg rounded-md border-2 py-12 px-8 flex-1 md:w-lg",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-10 h-10",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_image__WEBPACK_IMPORTED_MODULE_1__.default, {
              media: feature.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "font-bold mt-4 mb-4",
            children: feature.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: feature.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 11
          }, _this)]
        }, feature.id, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, _this);
      })]
    }, data.image, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 2
  }, _this);
};

_c = FeatureColumnsGroup;
/* harmony default export */ __webpack_exports__["default"] = (FeatureColumnsGroup);

var _c;

$RefreshReg$(_c, "FeatureColumnsGroup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9mZWF0dXJlLWNvbHVtbnMtZ3JvdXAuanMiXSwibmFtZXMiOlsiRmVhdHVyZUNvbHVtbnNHcm91cCIsImRhdGEiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJmZWF0dXJlcyIsIm1hcCIsImZlYXR1cmUiLCJpY29uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImlkIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDeEMsc0JBRUQ7QUFDQSxhQUFNLGdJQUROO0FBRUEsaUJBQVUsT0FGVjtBQUdBLGlCQUFVLGlCQUhWO0FBSUEsZ0JBQVMsVUFKVDtBQUtBLG1CQUFZLGFBTFo7QUFNQSxTQUFLLEVBQUU7QUFBRUMscUJBQWUsRUFBRTtBQUFuQixLQU5QO0FBQUEsMkJBUUc7QUFBSyxlQUFTLEVBQUMsb0ZBQWY7QUFBQSw4QkFDUSw4REFBQyxvREFBRDtBQUNBLFdBQUcsRUFBQywwQkFESjtBQUVBLGNBQU0sRUFBQyxNQUZQO0FBR0EsaUJBQVMsRUFBQyxPQUhWO0FBSUEsZUFBTyxFQUFFO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURSLEVBT0dELElBQUksQ0FBQ0UsUUFBTCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLE9BQUQ7QUFBQSw0QkFDakI7QUFBSyxtQkFBUyxFQUFDLDhEQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxtQ0FDRSw4REFBQyxvREFBRDtBQUFXLG1CQUFLLEVBQUVBLE9BQU8sQ0FBQ0M7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFJLHFCQUFTLEVBQUMscUJBQWQ7QUFBQSxzQkFBcUNELE9BQU8sQ0FBQ0U7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQUtFO0FBQUEsc0JBQUlGLE9BQU8sQ0FBQ0c7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUEsV0FBbUZILE9BQU8sQ0FBQ0ksRUFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEaUI7QUFBQSxPQUFsQixDQVBIO0FBQUEsT0FBeUdSLElBQUksQ0FBQ1MsS0FBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGQztBQTZCRCxDQTlCRDs7S0FBTVYsbUI7QUFnQ04sK0RBQWVBLG1CQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLmNiYjY0ODE4NzUzYzMyZDk4ODBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuLi9lbGVtZW50cy9pbWFnZVwiXG5cbmNvbnN0IEZlYXR1cmVDb2x1bW5zR3JvdXAgPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICBcbiA8ZGl2XG4gY2xhc3M9XCJob3Jpem9udGFsLWxheW91dCBob3Jpem9udGFsLW1lbnUgbmF2YmFyLXN0YXRpYyBkYXJrLWxheW91dCAxLWNvbHVtbiBmb290ZXItc3RhdGljIGJnLWZ1bGwtc2NyZWVuLWltYWdlICBibGFuay1wYWdlIGJsYW5rLXBhZ2VcIlxuIGRhdGEtb3Blbj1cImhvdmVyXCJcbiBkYXRhLW1lbnU9XCJob3Jpem9udGFsLW1lbnVcIlxuIGRhdGEtY29sPVwiMS1jb2x1bW5cIlxuIGRhdGEtbGF5b3V0PVwiZGFyay1sYXlvdXRcIlxuIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL2Fzc2V0cy9pbWFnZXMvcGFnZXMvYXV0aC1iZy5qcGcpXCIgfX1cbj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGxnOmZsZXgtd3JhcCBnYXAtMTIgYWxpZ24tdG9wIHB5LTEyIGZvbnQtc2VyaWZcIiBrZXk9e2RhdGEuaW1hZ2V9PlxuICAgICAgICAgICAgPE5leHRJbWFnZVxuICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc3RhY2sucG5nXCJcbiAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxuICAgICAgICAvPlxuICAgICAge2RhdGEuZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHRleHQtbGcgcm91bmRlZC1tZCBib3JkZXItMiBweS0xMiBweC04IGZsZXgtMSBtZDp3LWxnXCIga2V5PXtmZWF0dXJlLmlkfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMFwiPlxuICAgICAgICAgICAgPE5leHRJbWFnZSBtZWRpYT17ZmVhdHVyZS5pY29ufSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgbXQtNCBtYi00XCI+e2ZlYXR1cmUudGl0bGV9PC9oMz5cbiAgICAgICAgICA8cD57ZmVhdHVyZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZUNvbHVtbnNHcm91cFxuIl0sInNvdXJjZVJvb3QiOiIifQ==