self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/sections/hero.js":
/*!*************************************!*\
  !*** ./components/sections/hero.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/src/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/button */ "./utils/button.js");
/* harmony import */ var _elements_button_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/button-link */ "./components/elements/button-link.js");
/* harmony import */ var _elements_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/image */ "./components/elements/image.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Babra\\Desktop\\projects\\final-attempt\\my-site\\frontend\\components\\sections\\hero.js",
    _this = undefined;






var Hero = function Hero(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    className: "container flex flex-col md:flex-row items-center justify-between py-12 font-serif",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex-1 sm:pr-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "uppercase tracking-wide font-semibold",
        children: data.label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "title mt-2 sm:mt-0 mb-4 sm:mb-2",
        children: data.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xl mb-6",
        children: data.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-row flex-wrap gap-4",
        children: data.buttons.map(function (button) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_button_link__WEBPACK_IMPORTED_MODULE_3__.default, {
            button: button,
            appearance: (0,utils_button__WEBPACK_IMPORTED_MODULE_2__.getButtonAppearance)(button.type, "light")
          }, button.id, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-base md:text-sm mt-4 sm:mt-3 rich-text-hero",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_1___default()), {
          children: data.smallTextWithLink
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex-shrink-0 w-full md:w-6/12 ",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_image__WEBPACK_IMPORTED_MODULE_4__.default, {
        media: data.picture
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9oZXJvLmpzIl0sIm5hbWVzIjpbIkhlcm8iLCJkYXRhIiwibGFiZWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9ucyIsIm1hcCIsImJ1dHRvbiIsImdldEJ1dHRvbkFwcGVhcmFuY2UiLCJ0eXBlIiwiaWQiLCJzbWFsbFRleHRXaXRoTGluayIsInBpY3R1cmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN6QixzQkFDRTtBQUFNLGFBQVMsRUFBQyxtRkFBaEI7QUFBQSw0QkFFRTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLDhCQUVFO0FBQUcsaUJBQVMsRUFBQyx1Q0FBYjtBQUFBLGtCQUFzREEsSUFBSSxDQUFDQztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFJRTtBQUFJLGlCQUFTLEVBQUMsaUNBQWQ7QUFBQSxrQkFBaURELElBQUksQ0FBQ0U7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBTUU7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQSxrQkFBNkJGLElBQUksQ0FBQ0c7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBUUU7QUFBSyxpQkFBUyxFQUFDLCtCQUFmO0FBQUEsa0JBQ0dILElBQUksQ0FBQ0ksT0FBTCxDQUFhQyxHQUFiLENBQWlCLFVBQUNDLE1BQUQ7QUFBQSw4QkFDaEIsOERBQUMsMERBQUQ7QUFDRSxrQkFBTSxFQUFFQSxNQURWO0FBRUUsc0JBQVUsRUFBRUMsaUVBQW1CLENBQUNELE1BQU0sQ0FBQ0UsSUFBUixFQUFjLE9BQWQ7QUFGakMsYUFHT0YsTUFBTSxDQUFDRyxFQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGdCO0FBQUEsU0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsZUFrQkU7QUFBSyxpQkFBUyxFQUFDLGtEQUFmO0FBQUEsK0JBQ0UsOERBQUMsdURBQUQ7QUFBQSxvQkFBV1QsSUFBSSxDQUFDVTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQXlCRTtBQUFLLGVBQVMsRUFBQyxpQ0FBZjtBQUFBLDZCQUNFLDhEQUFDLG9EQUFEO0FBQVcsYUFBSyxFQUFFVixJQUFJLENBQUNXO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBaENEOztLQUFNWixJO0FBa0NOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjFmNjNkZmMxMjgzNTkzZjc3NGJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcbmltcG9ydCB7IGdldEJ1dHRvbkFwcGVhcmFuY2UgfSBmcm9tIFwidXRpbHMvYnV0dG9uXCJcbmltcG9ydCBCdXR0b25MaW5rIGZyb20gXCIuLi9lbGVtZW50cy9idXR0b24tbGlua1wiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuLi9lbGVtZW50cy9pbWFnZVwiXG5cbmNvbnN0IEhlcm8gPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTEyIGZvbnQtc2VyaWZcIj5cbiAgICAgIHsvKiBMZWZ0IGNvbHVtbiBmb3IgY29udGVudCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHNtOnByLThcIj5cbiAgICAgICAgey8qIEhlcm8gc2VjdGlvbiBsYWJlbCAqL31cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgZm9udC1zZW1pYm9sZFwiPntkYXRhLmxhYmVsfTwvcD5cbiAgICAgICAgey8qIEJpZyB0aXRsZSAqL31cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIG10LTIgc206bXQtMCBtYi00IHNtOm1iLTJcIj57ZGF0YS50aXRsZX08L2gxPlxuICAgICAgICB7LyogRGVzY3JpcHRpb24gcGFyYWdyYXBoICovfVxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTZcIj57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIHsvKiBCdXR0b25zIHJvdyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBnYXAtNFwiPlxuICAgICAgICAgIHtkYXRhLmJ1dHRvbnMubWFwKChidXR0b24pID0+IChcbiAgICAgICAgICAgIDxCdXR0b25MaW5rXG4gICAgICAgICAgICAgIGJ1dHRvbj17YnV0dG9ufVxuICAgICAgICAgICAgICBhcHBlYXJhbmNlPXtnZXRCdXR0b25BcHBlYXJhbmNlKGJ1dHRvbi50eXBlLCBcImxpZ2h0XCIpfVxuICAgICAgICAgICAgICBrZXk9e2J1dHRvbi5pZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogU21hbGwgcmljaCB0ZXh0ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmFzZSBtZDp0ZXh0LXNtIG10LTQgc206bXQtMyByaWNoLXRleHQtaGVyb1wiPlxuICAgICAgICAgIDxNYXJrZG93bj57ZGF0YS5zbWFsbFRleHRXaXRoTGlua308L01hcmtkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIFJpZ2h0IGNvbHVtbiBmb3IgdGhlIGltYWdlICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctZnVsbCBtZDp3LTYvMTIgXCI+XG4gICAgICAgIDxOZXh0SW1hZ2UgbWVkaWE9e2RhdGEucGljdHVyZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvXG4iXSwic291cmNlUm9vdCI6IiJ9