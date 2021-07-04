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
/* harmony import */ var _components_ui_button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ui/button/button */ "./components/ui/button/button.jsx");
/* harmony import */ var _components_ui_error_alert_error_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/error-alert/error-alert */ "./components/ui/error-alert/error-alert.jsx");
/* harmony import */ var _components_events_results_title_results_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/events/results-title/results-title */ "./components/events/results-title/results-title.jsx");



var _jsxFileName = "C:\\Users\\HP\\Desktop\\main\\NextjsProjects\\NextjsCourse\\sample-app\\pages\\events\\[...slug].jsx",
    _this = undefined,
    _s = $RefreshSig$();









var FilteredEvents = function FilteredEvents() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var filterData = router.query.slug;

  if (!filterData) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "center",
      children: "Loading"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 12
    }, _this);
  }

  var numYear = +filterData[0];
  var numMonth = +filterData[1];

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numMonth > 12 || numMonth < 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_error_alert_error_alert__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Invalid filtered. Please adjust your values!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_button_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          link: "/events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  }

  var filteredData = {
    year: numYear,
    month: numMonth
  };
  var filteredEvents = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_3__["getFilteredEvents"])(filteredData);

  if (!filteredEvents || filteredEvents.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_error_alert_error_alert__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "No events found for the chosen filter!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_button_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          link: "/events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  }

  var date = new Date(numYear, numMonth - 1);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "event-slug",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_results_title_results_title__WEBPACK_IMPORTED_MODULE_7__["default"], {
      date: date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_event_list_event_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
      items: filteredEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qc3giXSwibmFtZXMiOlsiRmlsdGVyZWRFdmVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmaWx0ZXJEYXRhIiwicXVlcnkiLCJzbHVnIiwibnVtWWVhciIsIm51bU1vbnRoIiwiaXNOYU4iLCJmaWx0ZXJlZERhdGEiLCJ5ZWFyIiwibW9udGgiLCJmaWx0ZXJlZEV2ZW50cyIsImdldEZpbHRlcmVkRXZlbnRzIiwibGVuZ3RoIiwiZGF0ZSIsIkRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQzNCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxVQUFVLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxJQUFoQzs7QUFFQSxNQUFJLENBQUNGLFVBQUwsRUFBaUI7QUFDZix3QkFBTztBQUFHLGVBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxNQUFNRyxPQUFPLEdBQUcsQ0FBQ0gsVUFBVSxDQUFDLENBQUQsQ0FBM0I7QUFDQSxNQUFNSSxRQUFRLEdBQUcsQ0FBQ0osVUFBVSxDQUFDLENBQUQsQ0FBNUI7O0FBRUEsTUFDRUssS0FBSyxDQUFDRixPQUFELENBQUwsSUFDQUUsS0FBSyxDQUFDRCxRQUFELENBREwsSUFFQUQsT0FBTyxHQUFHLElBRlYsSUFHQUMsUUFBUSxHQUFHLEVBSFgsSUFJQUEsUUFBUSxHQUFHLENBTGIsRUFNRTtBQUNBLHdCQUNFO0FBQUEsOEJBQ0UscUVBQUMsOEVBQUQ7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUEsK0JBQ0UscUVBQUMsb0VBQUQ7QUFBUSxjQUFJLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBLG9CQURGO0FBVUQ7O0FBRUQsTUFBTUUsWUFBWSxHQUFHO0FBQUVDLFFBQUksRUFBRUosT0FBUjtBQUFpQkssU0FBSyxFQUFFSjtBQUF4QixHQUFyQjtBQUVBLE1BQU1LLGNBQWMsR0FBR0MscUVBQWlCLENBQUNKLFlBQUQsQ0FBeEM7O0FBRUEsTUFBSSxDQUFDRyxjQUFELElBQW1CQSxjQUFjLENBQUNFLE1BQWYsS0FBMEIsQ0FBakQsRUFBb0Q7QUFDbEQsd0JBQ0U7QUFBQSw4QkFDRSxxRUFBQyw4RUFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSwrQkFDRSxxRUFBQyxvRUFBRDtBQUFRLGNBQUksRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUEsb0JBREY7QUFVRDs7QUFFRCxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTVixPQUFULEVBQWtCQyxRQUFRLEdBQUcsQ0FBN0IsQ0FBYjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQSw0QkFDRSxxRUFBQyxzRkFBRDtBQUFjLFVBQUksRUFBRVE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsZ0ZBQUQ7QUFBVyxXQUFLLEVBQUVIO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBeEREOztHQUFNWixjO1VBQ1dFLHFEOzs7S0FEWEYsYztBQTBEU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5hOTA0YmY4NWJkZTJmZmEwYjdhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBnZXRGaWx0ZXJlZEV2ZW50cyB9IGZyb20gJy4uLy4uL2R1bW15LWRhdGEnO1xyXG5pbXBvcnQgRXZlbnRMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWxpc3QvZXZlbnQtbGlzdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aS9idXR0b24vYnV0dG9uJztcclxuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aS9lcnJvci1hbGVydC9lcnJvci1hbGVydCc7XHJcbmltcG9ydCBSZXN1bHRzVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudHMvcmVzdWx0cy10aXRsZS9yZXN1bHRzLXRpdGxlJztcclxuXHJcbmNvbnN0IEZpbHRlcmVkRXZlbnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBmaWx0ZXJEYXRhID0gcm91dGVyLnF1ZXJ5LnNsdWc7XHJcblxyXG4gIGlmICghZmlsdGVyRGF0YSkge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT0nY2VudGVyJz5Mb2FkaW5nPC9wPjtcclxuICB9XHJcblxyXG4gIGNvbnN0IG51bVllYXIgPSArZmlsdGVyRGF0YVswXTtcclxuICBjb25zdCBudW1Nb250aCA9ICtmaWx0ZXJEYXRhWzFdO1xyXG5cclxuICBpZiAoXHJcbiAgICBpc05hTihudW1ZZWFyKSB8fFxyXG4gICAgaXNOYU4obnVtTW9udGgpIHx8XHJcbiAgICBudW1ZZWFyID4gMjAzMCB8fFxyXG4gICAgbnVtTW9udGggPiAxMiB8fFxyXG4gICAgbnVtTW9udGggPCAxXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxFcnJvckFsZXJ0PlxyXG4gICAgICAgICAgPHA+SW52YWxpZCBmaWx0ZXJlZC4gUGxlYXNlIGFkanVzdCB5b3VyIHZhbHVlcyE8L3A+XHJcbiAgICAgICAgPC9FcnJvckFsZXJ0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZW50ZXInPlxyXG4gICAgICAgICAgPEJ1dHRvbiBsaW5rPScvZXZlbnRzJz5TaG93IEFsbCBFdmVudHM8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsdGVyZWREYXRhID0geyB5ZWFyOiBudW1ZZWFyLCBtb250aDogbnVtTW9udGggfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBnZXRGaWx0ZXJlZEV2ZW50cyhmaWx0ZXJlZERhdGEpO1xyXG5cclxuICBpZiAoIWZpbHRlcmVkRXZlbnRzIHx8IGZpbHRlcmVkRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8RXJyb3JBbGVydD5cclxuICAgICAgICAgIDxwPk5vIGV2ZW50cyBmb3VuZCBmb3IgdGhlIGNob3NlbiBmaWx0ZXIhPC9wPlxyXG4gICAgICAgIDwvRXJyb3JBbGVydD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2VudGVyJz5cclxuICAgICAgICAgIDxCdXR0b24gbGluaz0nL2V2ZW50cyc+U2hvdyBBbGwgRXZlbnRzPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShudW1ZZWFyLCBudW1Nb250aCAtIDEpO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZXZlbnQtc2x1Zyc+XHJcbiAgICAgIDxSZXN1bHRzVGl0bGUgZGF0ZT17ZGF0ZX0gLz5cclxuICAgICAgPEV2ZW50TGlzdCBpdGVtcz17ZmlsdGVyZWRFdmVudHN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyZWRFdmVudHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=