webpackHotUpdate_N_E("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].jsx":
/*!************************************!*\
  !*** ./pages/events/[...slug].jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_HP_Desktop_main_NextjsProjects_NextjsCourse_sample_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dummy-data */ "./dummy-data.js");



var _jsxFileName = "C:\\Users\\HP\\Desktop\\main\\NextjsProjects\\NextjsCourse\\sample-app\\pages\\events\\[...slug].jsx",
    _this = undefined,
    _s = $RefreshSig$();





var FilteredEvents = function FilteredEvents() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _router$query$slug = Object(C_Users_HP_Desktop_main_NextjsProjects_NextjsCourse_sample_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(router.query.slug, 2),
      year = _router$query$slug[0],
      month = _router$query$slug[1];

  if (!year || !month) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "center",
      children: "Loading"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }, _this);
  }

  var numYear = +year;
  var numMonth = +month;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numMonth > 12 || numMonth < 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Invalid filtered. Please adjust your values!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }, _this);
  }

  var events = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_4__["getFilteredEvents"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "event-slug"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 10
  }, _this);
};

_s(FilteredEvents, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = FilteredEvents;
/* harmony default export */ __webpack_exports__["default"] = (FilteredEvents);

var _c;

$RefreshReg$(_c, "FilteredEvents");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qc3giXSwibmFtZXMiOlsiRmlsdGVyZWRFdmVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInNsdWciLCJ5ZWFyIiwibW9udGgiLCJudW1ZZWFyIiwibnVtTW9udGgiLCJpc05hTiIsImV2ZW50cyIsImdldEZpbHRlcmVkRXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFDM0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEMkIsK0xBR0xELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxJQUhSO0FBQUEsTUFHcEJDLElBSG9CO0FBQUEsTUFHZEMsS0FIYzs7QUFLM0IsTUFBSSxDQUFDRCxJQUFELElBQVMsQ0FBQ0MsS0FBZCxFQUFxQjtBQUNuQix3QkFBTztBQUFHLGVBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxNQUFNQyxPQUFPLEdBQUcsQ0FBQ0YsSUFBakI7QUFDQSxNQUFNRyxRQUFRLEdBQUcsQ0FBQ0YsS0FBbEI7O0FBRUEsTUFDRUcsS0FBSyxDQUFDRixPQUFELENBQUwsSUFDQUUsS0FBSyxDQUFDRCxRQUFELENBREwsSUFFQUQsT0FBTyxHQUFHLElBRlYsSUFHQUMsUUFBUSxHQUFHLEVBSFgsSUFJQUEsUUFBUSxHQUFHLENBTGIsRUFNRTtBQUNBLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxNQUFNRSxNQUFNLEdBQUdDLHFFQUFpQixFQUFoQztBQUVBLHNCQUFPO0FBQUssYUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0F6QkQ7O0dBQU1YLGM7VUFDV0UscUQ7OztLQURYRixjO0FBMkJTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ldmVudHMvWy4uLnNsdWddLjFhMGM0MjM2M2U1Zjk5YWUxNzcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGdldEZpbHRlcmVkRXZlbnRzIH0gZnJvbSAnLi4vLi4vZHVtbXktZGF0YSc7XHJcblxyXG5jb25zdCBGaWx0ZXJlZEV2ZW50cyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3llYXIsIG1vbnRoXSA9IHJvdXRlci5xdWVyeS5zbHVnO1xyXG5cclxuICBpZiAoIXllYXIgfHwgIW1vbnRoKSB7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPSdjZW50ZXInPkxvYWRpbmc8L3A+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbnVtWWVhciA9ICt5ZWFyO1xyXG4gIGNvbnN0IG51bU1vbnRoID0gK21vbnRoO1xyXG5cclxuICBpZiAoXHJcbiAgICBpc05hTihudW1ZZWFyKSB8fFxyXG4gICAgaXNOYU4obnVtTW9udGgpIHx8XHJcbiAgICBudW1ZZWFyID4gMjAzMCB8fFxyXG4gICAgbnVtTW9udGggPiAxMiB8fFxyXG4gICAgbnVtTW9udGggPCAxXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gPHA+SW52YWxpZCBmaWx0ZXJlZC4gUGxlYXNlIGFkanVzdCB5b3VyIHZhbHVlcyE8L3A+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZXZlbnRzID0gZ2V0RmlsdGVyZWRFdmVudHMoKVxyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2V2ZW50LXNsdWcnPjwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcmVkRXZlbnRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9