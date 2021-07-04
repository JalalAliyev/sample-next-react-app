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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dummy-data */ "./dummy-data.js");
/* harmony import */ var _components_events_event_list_event_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/event-list/event-list */ "./components/events/event-list/event-list.jsx");


var _jsxFileName = "C:\\Users\\HP\\Desktop\\main\\NextjsProjects\\NextjsCourse\\sample-app\\pages\\events\\[...slug].jsx",
    _this = undefined,
    _s = $RefreshSig$();






var FilteredEvents = function FilteredEvents() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var filterData = router.query.slug;
  var year = +filterData[0];
  var month = +filterData[1];

  if (!year || !month) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "center",
      children: "Loading"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
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
      lineNumber: 28,
      columnNumber: 12
    }, _this);
  }

  var filteredData = {
    year: numYear,
    month: numMonth
  };
  var filteredEvents = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_3__["getFilteredEvents"])(filteredData);

  if (!filteredEvents || filteredEvents.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "No events found for the chosen filter!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "event-slug",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_event_list_event_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
      items: filteredEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, _this);
};

_s(FilteredEvents, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qc3giXSwibmFtZXMiOlsiRmlsdGVyZWRFdmVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmaWx0ZXJEYXRhIiwicXVlcnkiLCJzbHVnIiwieWVhciIsIm1vbnRoIiwibnVtWWVhciIsIm51bU1vbnRoIiwiaXNOYU4iLCJmaWx0ZXJlZERhdGEiLCJmaWx0ZXJlZEV2ZW50cyIsImdldEZpbHRlcmVkRXZlbnRzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQzNCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxVQUFVLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxJQUFoQztBQUVBLE1BQU1DLElBQUksR0FBRyxDQUFDSCxVQUFVLENBQUMsQ0FBRCxDQUF4QjtBQUNBLE1BQU1JLEtBQUssR0FBRyxDQUFDSixVQUFVLENBQUMsQ0FBRCxDQUF6Qjs7QUFFQSxNQUFJLENBQUNHLElBQUQsSUFBUyxDQUFDQyxLQUFkLEVBQXFCO0FBQ25CLHdCQUFPO0FBQUcsZUFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELE1BQU1DLE9BQU8sR0FBRyxDQUFDRixJQUFqQjtBQUNBLE1BQU1HLFFBQVEsR0FBRyxDQUFDRixLQUFsQjs7QUFFQSxNQUNFRyxLQUFLLENBQUNGLE9BQUQsQ0FBTCxJQUNBRSxLQUFLLENBQUNELFFBQUQsQ0FETCxJQUVBRCxPQUFPLEdBQUcsSUFGVixJQUdBQyxRQUFRLEdBQUcsRUFIWCxJQUlBQSxRQUFRLEdBQUcsQ0FMYixFQU1FO0FBQ0Esd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELE1BQU1FLFlBQVksR0FBRztBQUFFTCxRQUFJLEVBQUVFLE9BQVI7QUFBaUJELFNBQUssRUFBRUU7QUFBeEIsR0FBckI7QUFFQSxNQUFNRyxjQUFjLEdBQUdDLHFFQUFpQixDQUFDRixZQUFELENBQXhDOztBQUVBLE1BQUksQ0FBQ0MsY0FBRCxJQUFtQkEsY0FBYyxDQUFDRSxNQUFmLEtBQTBCLENBQWpELEVBQW9EO0FBQ2xELHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFDRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUEsMkJBQ0UscUVBQUMsZ0ZBQUQ7QUFBVyxXQUFLLEVBQUVGO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQXJDRDs7R0FBTVosYztVQUNXRSxxRDs7O0tBRFhGLGM7QUF1Q1NBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V2ZW50cy9bLi4uc2x1Z10uMDZiZGFmNWMyNDQ1ZjFkZmJlYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZ2V0RmlsdGVyZWRFdmVudHMgfSBmcm9tICcuLi8uLi9kdW1teS1kYXRhJztcclxuaW1wb3J0IEV2ZW50TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1saXN0L2V2ZW50LWxpc3QnXHJcblxyXG5jb25zdCBGaWx0ZXJlZEV2ZW50cyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyRGF0YSA9IHJvdXRlci5xdWVyeS5zbHVnO1xyXG5cclxuICBjb25zdCB5ZWFyID0gK2ZpbHRlckRhdGFbMF07XHJcbiAgY29uc3QgbW9udGggPSArZmlsdGVyRGF0YVsxXTtcclxuXHJcbiAgaWYgKCF5ZWFyIHx8ICFtb250aCkge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT0nY2VudGVyJz5Mb2FkaW5nPC9wPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IG51bVllYXIgPSAreWVhcjtcclxuICBjb25zdCBudW1Nb250aCA9ICttb250aDtcclxuXHJcbiAgaWYgKFxyXG4gICAgaXNOYU4obnVtWWVhcikgfHxcclxuICAgIGlzTmFOKG51bU1vbnRoKSB8fFxyXG4gICAgbnVtWWVhciA+IDIwMzAgfHxcclxuICAgIG51bU1vbnRoID4gMTIgfHxcclxuICAgIG51bU1vbnRoIDwgMVxyXG4gICkge1xyXG4gICAgcmV0dXJuIDxwPkludmFsaWQgZmlsdGVyZWQuIFBsZWFzZSBhZGp1c3QgeW91ciB2YWx1ZXMhPC9wPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHsgeWVhcjogbnVtWWVhciwgbW9udGg6IG51bU1vbnRoIH07XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gZ2V0RmlsdGVyZWRFdmVudHMoZmlsdGVyZWREYXRhKTtcclxuXHJcbiAgaWYgKCFmaWx0ZXJlZEV2ZW50cyB8fCBmaWx0ZXJlZEV2ZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiA8cD5ObyBldmVudHMgZm91bmQgZm9yIHRoZSBjaG9zZW4gZmlsdGVyITwvcD47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZXZlbnQtc2x1Zyc+XHJcbiAgICAgIDxFdmVudExpc3QgaXRlbXM9e2ZpbHRlcmVkRXZlbnRzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcmVkRXZlbnRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9