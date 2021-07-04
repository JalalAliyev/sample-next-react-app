webpackHotUpdate_N_E("pages/index",{

/***/ "./components/event-item/event-item.jsx":
/*!**********************************************!*\
  !*** ./components/event-item/event-item.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/button/button */ "./components/ui/button/button.jsx");
/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/date-icon */ "./components/icons/date-icon.js");
/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-item.module.css */ "./components/event-item/event-item.module.css");
/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_event_item_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\HP\\Desktop\\main\\NextjsProjects\\NextjsCourse\\sample-app\\components\\event-item\\event-item.jsx",
    _this = undefined;






var EventItem = function EventItem(_ref) {
  var item = _ref.item;
  var title = item.title,
      image = item.image,
      date = item.date,
      location = item.location,
      id = item.id;
  var readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  var formattedAddress = location.replace(', ', '\n');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.item,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "/".concat(image),
      alt: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.summary,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.date,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_date_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
            children: readableDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.address,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
            children: formattedAddress
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_button_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
          link: "/events/".concat(id),
          children: "Explore Event"
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
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_c = EventItem;
/* harmony default export */ __webpack_exports__["default"] = (EventItem);

var _c;

$RefreshReg$(_c, "EventItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudC1pdGVtL2V2ZW50LWl0ZW0uanN4Il0sIm5hbWVzIjpbIkV2ZW50SXRlbSIsIml0ZW0iLCJ0aXRsZSIsImltYWdlIiwiZGF0ZSIsImxvY2F0aW9uIiwiaWQiLCJyZWFkYWJsZURhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZm9ybWF0dGVkQWRkcmVzcyIsInJlcGxhY2UiLCJjbGFzc2VzIiwiY29udGVudCIsInN1bW1hcnkiLCJhZGRyZXNzIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUFBLE1BQ3RCQyxLQURzQixHQUNlRCxJQURmLENBQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLEtBRGUsR0FDZUYsSUFEZixDQUNmRSxLQURlO0FBQUEsTUFDUkMsSUFEUSxHQUNlSCxJQURmLENBQ1JHLElBRFE7QUFBQSxNQUNGQyxRQURFLEdBQ2VKLElBRGYsQ0FDRkksUUFERTtBQUFBLE1BQ1FDLEVBRFIsR0FDZUwsSUFEZixDQUNRSyxFQURSO0FBRzlCLE1BQU1DLFlBQVksR0FBRyxJQUFJQyxJQUFKLENBQVNKLElBQVQsRUFBZUssa0JBQWYsQ0FBa0MsT0FBbEMsRUFBMkM7QUFDOURDLE9BQUcsRUFBRSxTQUR5RDtBQUU5REMsU0FBSyxFQUFFLE1BRnVEO0FBRzlEQyxRQUFJLEVBQUU7QUFId0QsR0FBM0MsQ0FBckI7QUFLQSxNQUFNQyxnQkFBZ0IsR0FBR1IsUUFBUSxDQUFDUyxPQUFULENBQWlCLElBQWpCLEVBQXVCLElBQXZCLENBQXpCO0FBRUEsc0JBQ0U7QUFBSSxhQUFTLEVBQUVDLDZEQUFPLENBQUNkLElBQXZCO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLGFBQU1FLEtBQU4sQ0FBUjtBQUF1QixTQUFHLEVBQUVEO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFFYSw2REFBTyxDQUFDQyxPQUF4QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUQsNkRBQU8sQ0FBQ0UsT0FBeEI7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLZjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUVhLDZEQUFPLENBQUNYLElBQXhCO0FBQUEsa0NBQ0UscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsc0JBQU9HO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFNRTtBQUFLLG1CQUFTLEVBQUVRLDZEQUFPLENBQUNHLE9BQXhCO0FBQUEsaUNBQ0U7QUFBQSxzQkFBVUw7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVdFO0FBQUssaUJBQVMsRUFBRUUsNkRBQU8sQ0FBQ0ksT0FBeEI7QUFBQSwrQkFDRSxxRUFBQyx5REFBRDtBQUFRLGNBQUksb0JBQWFiLEVBQWIsQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQTlCRDs7S0FBTU4sUztBQWdDU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODljYjRjMTY2OGFkM2FhYjhkZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3VpL2J1dHRvbi9idXR0b24nO1xyXG5pbXBvcnQgRGF0ZUljb24gZnJvbSAnLi4vaWNvbnMvZGF0ZS1pY29uJztcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vZXZlbnQtaXRlbS5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IEV2ZW50SXRlbSA9ICh7IGl0ZW0gfSkgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUsIGltYWdlLCBkYXRlLCBsb2NhdGlvbiwgaWQgfSA9IGl0ZW07XHJcblxyXG4gIGNvbnN0IHJlYWRhYmxlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XHJcbiAgICBkYXk6ICdudW1lcmljJyxcclxuICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgfSk7XHJcbiAgY29uc3QgZm9ybWF0dGVkQWRkcmVzcyA9IGxvY2F0aW9uLnJlcGxhY2UoJywgJywgJ1xcbicpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgPGltZyBzcmM9e2AvJHtpbWFnZX1gfSBhbHQ9e3RpdGxlfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdW1tYXJ5fT5cclxuICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxyXG4gICAgICAgICAgICA8RGF0ZUljb24gLz5cclxuICAgICAgICAgICAgPHRpbWU+e3JlYWRhYmxlRGF0ZX08L3RpbWU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFkZHJlc3N9PlxyXG4gICAgICAgICAgICA8YWRkcmVzcz57Zm9ybWF0dGVkQWRkcmVzc308L2FkZHJlc3M+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICAgIDxCdXR0b24gbGluaz17YC9ldmVudHMvJHtpZH1gfT5FeHBsb3JlIEV2ZW50PC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRJdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9