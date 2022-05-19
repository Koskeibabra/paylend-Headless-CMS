self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/sections/feature-rows-group.js":
/*!***************************************************!*\
  !*** ./components/sections/feature-rows-group.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/image */ "./components/elements/image.js");
/* harmony import */ var _elements_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/video */ "./components/elements/video.js");
/* harmony import */ var _elements_custom_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/custom-link */ "./components/elements/custom-link.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Babra\\Desktop\\projects\\final-attempt\\my-site\\frontend\\components\\sections\\feature-rows-group.js",
    _this = undefined;






var FeatureRowsGroup = function FeatureRowsGroup(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container flex flex-col gap-12 py-12",
    children: data.features.map(function (feature, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()( // Common classes
        "flex flex-col justify-start md:justify-between md:items-center gap-10 font-serif", {
          "lg:flex-row": index % 2 === 0,
          "lg:flex-row-reverse": index % 2 === 1
        }),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full lg:w-6/12 lg:pr-6 text-lg",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            className: "title",
            children: feature.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fa fa-check-square-o bg-accent"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 18
              }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "my-6",
                children: feature.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 69
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fa fa-check-square-o"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 18
              }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "my-6",
                children: feature.desc1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 59
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fa fa-check-square-o"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 18
              }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "my-6",
                children: feature.desc2
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 59
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "fa fa-check-square-o"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 18
              }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "my-6",
                children: feature.desc3
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 59
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full max-h-full",
          children: feature.media.data.attributes.mime.startsWith("image") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-full h-auto",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_image__WEBPACK_IMPORTED_MODULE_2__.default, {
              media: feature.media
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)]
      }, feature.id, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = FeatureRowsGroup;
/* harmony default export */ __webpack_exports__["default"] = (FeatureRowsGroup);

var _c;

$RefreshReg$(_c, "FeatureRowsGroup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9mZWF0dXJlLXJvd3MtZ3JvdXAuanMiXSwibmFtZXMiOlsiRmVhdHVyZVJvd3NHcm91cCIsImRhdGEiLCJmZWF0dXJlcyIsIm1hcCIsImZlYXR1cmUiLCJpbmRleCIsImNsYXNzTmFtZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGVzYzEiLCJkZXNjMiIsImRlc2MzIiwibWVkaWEiLCJhdHRyaWJ1dGVzIiwibWltZSIsInN0YXJ0c1dpdGgiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDckMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsc0NBQWY7QUFBQSxjQUNHQSxJQUFJLENBQUNDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSwwQkFDakI7QUFDRSxpQkFBUyxFQUFFQyxpREFBVSxFQUNuQjtBQUNBLDBGQUZtQixFQUduQjtBQUNFLHlCQUFlRCxLQUFLLEdBQUcsQ0FBUixLQUFjLENBRC9CO0FBRUUsaUNBQXVCQSxLQUFLLEdBQUcsQ0FBUixLQUFjO0FBRnZDLFNBSG1CLENBRHZCO0FBQUEsZ0NBWUU7QUFBSyxtQkFBUyxFQUFDLGtDQUFmO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLE9BQWQ7QUFBQSxzQkFBdUJELE9BQU8sQ0FBQ0c7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsb0NBQ0E7QUFBQSxzQ0FBSztBQUFHLHlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFMLG9CQUF3RDtBQUFHLHlCQUFTLEVBQUMsTUFBYjtBQUFBLDBCQUFxQkgsT0FBTyxDQUFDSTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREEsZUFFQTtBQUFBLHNDQUFLO0FBQUcseUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQUwsb0JBQThDO0FBQUcseUJBQVMsRUFBQyxNQUFiO0FBQUEsMEJBQXFCSixPQUFPLENBQUNLO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGQSxlQUdBO0FBQUEsc0NBQUs7QUFBRyx5QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBTCxvQkFBOEM7QUFBRyx5QkFBUyxFQUFDLE1BQWI7QUFBQSwwQkFBcUJMLE9BQU8sQ0FBQ007QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhBLGVBSUE7QUFBQSxzQ0FBSztBQUFHLHlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFMLG9CQUE4QztBQUFHLHlCQUFTLEVBQUMsTUFBYjtBQUFBLDBCQUFxQk4sT0FBTyxDQUFDTztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRixlQXlCRTtBQUFLLG1CQUFTLEVBQUMsbUJBQWY7QUFBQSxvQkFFR1AsT0FBTyxDQUFDUSxLQUFSLENBQWNYLElBQWQsQ0FBbUJZLFVBQW5CLENBQThCQyxJQUE5QixDQUFtQ0MsVUFBbkMsQ0FBOEMsT0FBOUMsa0JBQ0M7QUFBSyxxQkFBUyxFQUFDLGVBQWY7QUFBQSxtQ0FDRSw4REFBQyxvREFBRDtBQUFXLG1CQUFLLEVBQUVYLE9BQU8sQ0FBQ1E7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpCRjtBQUFBLFNBU09SLE9BQU8sQ0FBQ1ksRUFUZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGlCO0FBQUEsS0FBbEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQ0QsQ0EzQ0Q7O0tBQU1oQixnQjtBQTZDTiwrREFBZUEsZ0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uMmFjYjE3MjBiYmJlYTIwMWEyZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4uL2VsZW1lbnRzL2ltYWdlXCJcbmltcG9ydCBWaWRlbyBmcm9tIFwiLi4vZWxlbWVudHMvdmlkZW9cIlxuaW1wb3J0IEN1c3RvbUxpbmsgZnJvbSBcIi4uL2VsZW1lbnRzL2N1c3RvbS1saW5rXCJcblxuY29uc3QgRmVhdHVyZVJvd3NHcm91cCA9ICh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2wgZ2FwLTEyIHB5LTEyXCI+XG4gICAgICB7ZGF0YS5mZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAvLyBDb21tb24gY2xhc3Nlc1xuICAgICAgICAgICAgXCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgbWQ6anVzdGlmeS1iZXR3ZWVuIG1kOml0ZW1zLWNlbnRlciBnYXAtMTAgZm9udC1zZXJpZlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImxnOmZsZXgtcm93XCI6IGluZGV4ICUgMiA9PT0gMCxcbiAgICAgICAgICAgICAgXCJsZzpmbGV4LXJvdy1yZXZlcnNlXCI6IGluZGV4ICUgMiA9PT0gMSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICAgIGtleT17ZmVhdHVyZS5pZH1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiBUZXh0IHNlY3Rpb24gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy02LzEyIGxnOnByLTYgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRpdGxlXCI+e2ZlYXR1cmUudGl0bGV9PC9oNj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaSA+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hlY2stc3F1YXJlLW8gYmctYWNjZW50XCI+PC9pPiA8cCBjbGFzc05hbWU9XCJteS02XCI+e2ZlYXR1cmUuZGVzY3JpcHRpb259PC9wPjwvbGk+XG4gICAgICAgICAgICA8bGkgPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrLXNxdWFyZS1vXCI+PC9pPiA8cCBjbGFzc05hbWU9XCJteS02XCI+e2ZlYXR1cmUuZGVzYzF9PC9wPjwvbGk+XG4gICAgICAgICAgICA8bGkgPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrLXNxdWFyZS1vXCI+PC9pPiA8cCBjbGFzc05hbWU9XCJteS02XCI+e2ZlYXR1cmUuZGVzYzJ9PC9wPjwvbGk+XG4gICAgICAgICAgICA8bGkgPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrLXNxdWFyZS1vXCI+PC9pPiA8cCBjbGFzc05hbWU9XCJteS02XCI+e2ZlYXR1cmUuZGVzYzN9PC9wPjwvbGk+XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC91bD5cbiAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiBNZWRpYSBzZWN0aW9uICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC1oLWZ1bGxcIj5cbiAgICAgICAgICAgIHsvKiBJbWFnZXMgKi99XG4gICAgICAgICAgICB7ZmVhdHVyZS5tZWRpYS5kYXRhLmF0dHJpYnV0ZXMubWltZS5zdGFydHNXaXRoKFwiaW1hZ2VcIikgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8TmV4dEltYWdlIG1lZGlhPXtmZWF0dXJlLm1lZGlhfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogVmlkZW9zICovfVxuICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVSb3dzR3JvdXBcbiJdLCJzb3VyY2VSb290IjoiIn0=