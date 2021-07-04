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
      lineNumber: 13,
      columnNumber: 12
    }, _this);
  }

  var numYear = +filterData[0];
  var numMonth = +filterData[1];

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numMonth > 12 || numMonth < 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorAlert, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Invalid filtered. Please adjust your values!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_button_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          link: "/events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "No events found for the chosen filter!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_button_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          link: "/events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "event-slug",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_event_list_event_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
      items: filteredEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qc3giXSwibmFtZXMiOlsiRmlsdGVyZWRFdmVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmaWx0ZXJEYXRhIiwicXVlcnkiLCJzbHVnIiwibnVtWWVhciIsIm51bU1vbnRoIiwiaXNOYU4iLCJmaWx0ZXJlZERhdGEiLCJ5ZWFyIiwibW9udGgiLCJmaWx0ZXJlZEV2ZW50cyIsImdldEZpbHRlcmVkRXZlbnRzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUMzQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsTUFBTUMsVUFBVSxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsSUFBaEM7O0FBRUEsTUFBSSxDQUFDRixVQUFMLEVBQWlCO0FBQ2Ysd0JBQU87QUFBRyxlQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBRUQsTUFBTUcsT0FBTyxHQUFHLENBQUNILFVBQVUsQ0FBQyxDQUFELENBQTNCO0FBQ0EsTUFBTUksUUFBUSxHQUFHLENBQUNKLFVBQVUsQ0FBQyxDQUFELENBQTVCOztBQUVBLE1BQ0VLLEtBQUssQ0FBQ0YsT0FBRCxDQUFMLElBQ0FFLEtBQUssQ0FBQ0QsUUFBRCxDQURMLElBRUFELE9BQU8sR0FBRyxJQUZWLElBR0FDLFFBQVEsR0FBRyxFQUhYLElBSUFBLFFBQVEsR0FBRyxDQUxiLEVBTUU7QUFDQSx3QkFDRTtBQUFBLDhCQUNFLHFFQUFDLFVBQUQ7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUEsK0JBQ0UscUVBQUMsb0VBQUQ7QUFBUSxjQUFJLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBLG9CQURGO0FBV0Q7O0FBRUQsTUFBTUUsWUFBWSxHQUFHO0FBQUVDLFFBQUksRUFBRUosT0FBUjtBQUFpQkssU0FBSyxFQUFFSjtBQUF4QixHQUFyQjtBQUVBLE1BQU1LLGNBQWMsR0FBR0MscUVBQWlCLENBQUNKLFlBQUQsQ0FBeEM7O0FBRUEsTUFBSSxDQUFDRyxjQUFELElBQW1CQSxjQUFjLENBQUNFLE1BQWYsS0FBMEIsQ0FBakQsRUFBb0Q7QUFDbEQsd0JBQ0U7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSwrQkFDRSxxRUFBQyxvRUFBRDtBQUFRLGNBQUksRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUEsb0JBREY7QUFRRDs7QUFDRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUEsMkJBQ0UscUVBQUMsZ0ZBQUQ7QUFBVyxXQUFLLEVBQUVGO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQW5ERDs7R0FBTVosYztVQUNXRSxxRDs7O0tBRFhGLGM7QUFxRFNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V2ZW50cy9bLi4uc2x1Z10uNjhiNGQ1YjI3N2I3MjhhODhjYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZ2V0RmlsdGVyZWRFdmVudHMgfSBmcm9tICcuLi8uLi9kdW1teS1kYXRhJztcclxuaW1wb3J0IEV2ZW50TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1saXN0L2V2ZW50LWxpc3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWkvYnV0dG9uL2J1dHRvbic7XHJcblxyXG5jb25zdCBGaWx0ZXJlZEV2ZW50cyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyRGF0YSA9IHJvdXRlci5xdWVyeS5zbHVnO1xyXG5cclxuICBpZiAoIWZpbHRlckRhdGEpIHtcclxuICAgIHJldHVybiA8cCBjbGFzc05hbWU9J2NlbnRlcic+TG9hZGluZzwvcD47XHJcbiAgfVxyXG5cclxuICBjb25zdCBudW1ZZWFyID0gK2ZpbHRlckRhdGFbMF07XHJcbiAgY29uc3QgbnVtTW9udGggPSArZmlsdGVyRGF0YVsxXTtcclxuXHJcbiAgaWYgKFxyXG4gICAgaXNOYU4obnVtWWVhcikgfHxcclxuICAgIGlzTmFOKG51bU1vbnRoKSB8fFxyXG4gICAgbnVtWWVhciA+IDIwMzAgfHxcclxuICAgIG51bU1vbnRoID4gMTIgfHxcclxuICAgIG51bU1vbnRoIDwgMVxyXG4gICkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8RXJyb3JBbGVydD5cclxuICAgICAgICAgIDxwPkludmFsaWQgZmlsdGVyZWQuIFBsZWFzZSBhZGp1c3QgeW91ciB2YWx1ZXMhPC9wPlxyXG4gICAgICAgIDwvRXJyb3JBbGVydD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NlbnRlcic+XHJcbiAgICAgICAgICA8QnV0dG9uIGxpbms9Jy9ldmVudHMnPlNob3cgQWxsIEV2ZW50czwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaWx0ZXJlZERhdGEgPSB7IHllYXI6IG51bVllYXIsIG1vbnRoOiBudW1Nb250aCB9O1xyXG5cclxuICBjb25zdCBmaWx0ZXJlZEV2ZW50cyA9IGdldEZpbHRlcmVkRXZlbnRzKGZpbHRlcmVkRGF0YSk7XHJcblxyXG4gIGlmICghZmlsdGVyZWRFdmVudHMgfHwgZmlsdGVyZWRFdmVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxwPk5vIGV2ZW50cyBmb3VuZCBmb3IgdGhlIGNob3NlbiBmaWx0ZXIhPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZW50ZXInPlxyXG4gICAgICAgICAgPEJ1dHRvbiBsaW5rPScvZXZlbnRzJz5TaG93IEFsbCBFdmVudHM8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2V2ZW50LXNsdWcnPlxyXG4gICAgICA8RXZlbnRMaXN0IGl0ZW1zPXtmaWx0ZXJlZEV2ZW50c30gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJlZEV2ZW50cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==