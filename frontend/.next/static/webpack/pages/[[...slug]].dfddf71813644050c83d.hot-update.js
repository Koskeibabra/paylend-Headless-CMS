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
      backgroundImage: "url(/assets/images/stack.jpg)"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container flex flex-col lg:flex-row lg:flex-wrap gap-12 align-top py-12 font-serif",
      children: data.features.map(function (feature) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex-1 text-lg rounded-md border-2 py-12 px-8 flex-1 md:w-lg",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-10 h-10",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_image__WEBPACK_IMPORTED_MODULE_1__.default, {
              media: feature.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "font-bold mt-4 mb-4",
            children: feature.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: feature.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 11
          }, _this)]
        }, feature.id, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, _this);
      })
    }, data.image, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9mZWF0dXJlLWNvbHVtbnMtZ3JvdXAuanMiXSwibmFtZXMiOlsiRmVhdHVyZUNvbHVtbnNHcm91cCIsImRhdGEiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJmZWF0dXJlcyIsIm1hcCIsImZlYXR1cmUiLCJpY29uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImlkIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDeEMsc0JBRUQ7QUFDQSxhQUFNLGdJQUROO0FBRUEsaUJBQVUsT0FGVjtBQUdBLGlCQUFVLGlCQUhWO0FBSUEsZ0JBQVMsVUFKVDtBQUtBLG1CQUFZLGFBTFo7QUFNQSxTQUFLLEVBQUU7QUFBRUMscUJBQWUsRUFBRTtBQUFuQixLQU5QO0FBQUEsMkJBUUc7QUFBSyxlQUFTLEVBQUMsb0ZBQWY7QUFBQSxnQkFDR0QsSUFBSSxDQUFDRSxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsT0FBRDtBQUFBLDRCQUNqQjtBQUFLLG1CQUFTLEVBQUMsOERBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsV0FBZjtBQUFBLG1DQUNFLDhEQUFDLG9EQUFEO0FBQVcsbUJBQUssRUFBRUEsT0FBTyxDQUFDQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQUkscUJBQVMsRUFBQyxxQkFBZDtBQUFBLHNCQUFxQ0QsT0FBTyxDQUFDRTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0U7QUFBQSxzQkFBSUYsT0FBTyxDQUFDRztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQSxXQUFtRkgsT0FBTyxDQUFDSSxFQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQjtBQUFBLE9BQWxCO0FBREgsT0FBeUdSLElBQUksQ0FBQ1MsS0FBOUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGQztBQXVCRCxDQXhCRDs7S0FBTVYsbUI7QUEwQk4sK0RBQWVBLG1CQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLmRmZGRmNzE4MTM2NDQwNTBjODNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuLi9lbGVtZW50cy9pbWFnZVwiXG5cbmNvbnN0IEZlYXR1cmVDb2x1bW5zR3JvdXAgPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICBcbiA8ZGl2XG4gY2xhc3M9XCJob3Jpem9udGFsLWxheW91dCBob3Jpem9udGFsLW1lbnUgbmF2YmFyLXN0YXRpYyBkYXJrLWxheW91dCAxLWNvbHVtbiBmb290ZXItc3RhdGljIGJnLWZ1bGwtc2NyZWVuLWltYWdlICBibGFuay1wYWdlIGJsYW5rLXBhZ2VcIlxuIGRhdGEtb3Blbj1cImhvdmVyXCJcbiBkYXRhLW1lbnU9XCJob3Jpem9udGFsLW1lbnVcIlxuIGRhdGEtY29sPVwiMS1jb2x1bW5cIlxuIGRhdGEtbGF5b3V0PVwiZGFyay1sYXlvdXRcIlxuIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL2Fzc2V0cy9pbWFnZXMvc3RhY2suanBnKVwiIH19XG4+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBsZzpmbGV4LXdyYXAgZ2FwLTEyIGFsaWduLXRvcCBweS0xMiBmb250LXNlcmlmXCIga2V5PXtkYXRhLmltYWdlfT5cbiAgICAgIHtkYXRhLmZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSB0ZXh0LWxnIHJvdW5kZWQtbWQgYm9yZGVyLTIgcHktMTIgcHgtOCBmbGV4LTEgbWQ6dy1sZ1wiIGtleT17ZmVhdHVyZS5pZH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTBcIj5cbiAgICAgICAgICAgIDxOZXh0SW1hZ2UgbWVkaWE9e2ZlYXR1cmUuaWNvbn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG10LTQgbWItNFwiPntmZWF0dXJlLnRpdGxlfTwvaDM+XG4gICAgICAgICAgPHA+e2ZlYXR1cmUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVDb2x1bW5zR3JvdXBcbiJdLCJzb3VyY2VSb290IjoiIn0=