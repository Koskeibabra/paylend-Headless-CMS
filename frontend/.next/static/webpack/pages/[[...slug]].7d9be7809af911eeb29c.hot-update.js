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
    className: "",
    "data-open": "hover",
    "data-menu": "horizontal-menu",
    "data-col": "1-column",
    "data-layout": "dark-layout",
    style: {
      backgroundImage: "url(/assets/images/stack.png)"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container flex flex-col lg:flex-row lg:flex-wrap gap-12 align-top py-12 font-serif",
      children: data.features.map(function (feature) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex-1 text-lg rounded-md border py-12 px-8 flex-1 md:w-lg",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-10 h-10 m-auto ",
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
            className: "font-bold mt-4 mb-4 text-white text-center md",
            children: feature.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-white text-center font-light",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9mZWF0dXJlLWNvbHVtbnMtZ3JvdXAuanMiXSwibmFtZXMiOlsiRmVhdHVyZUNvbHVtbnNHcm91cCIsImRhdGEiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJmZWF0dXJlcyIsIm1hcCIsImZlYXR1cmUiLCJpY29uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImlkIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDeEMsc0JBRUQ7QUFDQSxhQUFTLEVBQUMsRUFEVjtBQUVBLGlCQUFVLE9BRlY7QUFHQSxpQkFBVSxpQkFIVjtBQUlBLGdCQUFTLFVBSlQ7QUFLQSxtQkFBWSxhQUxaO0FBTUEsU0FBSyxFQUFFO0FBQUVDLHFCQUFlLEVBQUU7QUFBbkIsS0FOUDtBQUFBLDJCQVFHO0FBQUssZUFBUyxFQUFDLG9GQUFmO0FBQUEsZ0JBQ0dELElBQUksQ0FBQ0UsUUFBTCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLE9BQUQ7QUFBQSw0QkFDakI7QUFBSyxtQkFBUyxFQUFDLDREQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQUEsbUNBQ0UsOERBQUMsb0RBQUQ7QUFBVyxtQkFBSyxFQUFFQSxPQUFPLENBQUNDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBSSxxQkFBUyxFQUFDLCtDQUFkO0FBQUEsc0JBQStERCxPQUFPLENBQUNFO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRTtBQUFHLHFCQUFTLEVBQUMsbUNBQWI7QUFBQSxzQkFBa0RGLE9BQU8sQ0FBQ0c7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBLFdBQWlGSCxPQUFPLENBQUNJLEVBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGlCO0FBQUEsT0FBbEI7QUFESCxPQUF5R1IsSUFBSSxDQUFDUyxLQUE5RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZDO0FBdUJELENBeEJEOztLQUFNVixtQjtBQTBCTiwrREFBZUEsbUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uN2Q5YmU3ODA5YWY5MTFlZWIyOWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4uL2VsZW1lbnRzL2ltYWdlXCJcblxuY29uc3QgRmVhdHVyZUNvbHVtbnNHcm91cCA9ICh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIFxuIDxkaXZcbiBjbGFzc05hbWU9XCJcIlxuIGRhdGEtb3Blbj1cImhvdmVyXCJcbiBkYXRhLW1lbnU9XCJob3Jpem9udGFsLW1lbnVcIlxuIGRhdGEtY29sPVwiMS1jb2x1bW5cIlxuIGRhdGEtbGF5b3V0PVwiZGFyay1sYXlvdXRcIlxuIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL2Fzc2V0cy9pbWFnZXMvc3RhY2sucG5nKVwiIH19XG4+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBsZzpmbGV4LXdyYXAgZ2FwLTEyIGFsaWduLXRvcCBweS0xMiBmb250LXNlcmlmXCIga2V5PXtkYXRhLmltYWdlfT5cbiAgICAgIHtkYXRhLmZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSB0ZXh0LWxnIHJvdW5kZWQtbWQgYm9yZGVyIHB5LTEyIHB4LTggZmxleC0xIG1kOnctbGdcIiBrZXk9e2ZlYXR1cmUuaWR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIG0tYXV0byBcIj5cbiAgICAgICAgICAgIDxOZXh0SW1hZ2UgbWVkaWE9e2ZlYXR1cmUuaWNvbn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG10LTQgbWItNCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIG1kXCI+e2ZlYXR1cmUudGl0bGV9PC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGZvbnQtbGlnaHRcIj57ZmVhdHVyZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZUNvbHVtbnNHcm91cFxuIl0sInNvdXJjZVJvb3QiOiIifQ==