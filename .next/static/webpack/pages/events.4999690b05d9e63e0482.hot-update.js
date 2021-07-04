webpackHotUpdate_N_E("pages/events",{

/***/ "./components/event-item/event-item.jsx":
false,

/***/ "./components/event-item/event-item.module.css":
false,

/***/ "./components/event-list/event-list.jsx":
false,

/***/ "./components/event-list/event-list.module.css":
false,

/***/ "./components/events/event-item/event-item.jsx":
/*!*****************************************************!*\
  !*** ./components/events/event-item/event-item.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/button/button */ "./components/ui/button/button.jsx");
/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/date-icon */ "./components/icons/date-icon.js");
/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/address-icon */ "./components/icons/address-icon.js");
/* harmony import */ var _icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/arrow-right-icon */ "./components/icons/arrow-right-icon.js");
/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-item.module.css */ "./components/events/event-item/event-item.module.css");
/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_event_item_module_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\HP\\Desktop\\main\\NextjsProjects\\NextjsCourse\\sample-app\\components\\events\\event-item\\event-item.jsx",
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
    className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.item,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "/".concat(image),
      alt: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.summary,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.date,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_date_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
            children: readableDate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.address,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_address_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
            children: formattedAddress
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_button_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
          link: "/events/".concat(id),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Explore Event"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.icon,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/events/event-item/event-item.module.css":
/*!************************************************************!*\
  !*** ./components/events/event-item/event-item.module.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./event-item.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/events/event-item/event-item.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./event-item.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/events/event-item/event-item.module.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./event-item.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/events/event-item/event-item.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/events/event-list/event-list.jsx":
/*!*****************************************************!*\
  !*** ./components/events/event-list/event-list.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _event_item_event_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-item/event-item */ "./components/events/event-item/event-item.jsx");
/* harmony import */ var _event_list_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-list.module.css */ "./components/events/event-list/event-list.module.css");
/* harmony import */ var _event_list_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_event_list_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\HP\\Desktop\\main\\NextjsProjects\\NextjsCourse\\sample-app\\components\\event-list\\event-list.jsx",
    _this = undefined;





var EventList = function EventList(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: _event_list_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list,
    children: items.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_event_item_event_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        item: item
      }, item.id, false, {
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

_c = EventList;
/* harmony default export */ __webpack_exports__["default"] = (EventList);

var _c;

$RefreshReg$(_c, "EventList");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/events/event-list/event-list.module.css":
/*!************************************************************!*\
  !*** ./components/events/event-list/event-list.module.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./event-list.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/events/event-list/event-list.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./event-list.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/events/event-list/event-list.module.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./event-list.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/events/event-list/event-list.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/event-item/event-item.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/event-list/event-list.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/events/event-item/event-item.module.css":
/*!************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/events/event-item/event-item.module.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".event-item_item__30cs2 {\r\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  background-color: white;\r\n  margin: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  grid-gap: 1rem;\r\n  gap: 1rem;\r\n}\r\n\r\n.event-item_item__30cs2 img {\r\n  width: 100%;\r\n  object-fit: cover;\r\n  height: 10rem;\r\n}\r\n\r\n.event-item_content__3cjBv {\r\n  width: 100%;\r\n  padding: 0 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.event-item_content__3cjBv h2 {\r\n  margin: 0.5rem 0;\r\n}\r\n\r\n.event-item_date__2nZHJ,\r\n.event-item_address__318Sj {\r\n  display: flex;\r\n  grid-gap: 0.5rem;\r\n  gap: 0.5rem;\r\n  align-items: center;\r\n}\r\n\r\n.event-item_date__2nZHJ svg,\r\n.event-item_address__318Sj svg {\r\n  width: 1.25rem;\r\n  height: 1.25rem;\r\n  color: #666666;\r\n}\r\n\r\n.event-item_content__3cjBv time {\r\n  color: #666666;\r\n  font-weight: bold;\r\n}\r\n\r\n.event-item_content__3cjBv address {\r\n  margin: 0.5rem 0;\r\n  color: #666666;\r\n  white-space: pre;\r\n}\r\n\r\n.event-item_actions__11aTX {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 1rem;\r\n  color: blue;\r\n}\r\n\r\n.event-item_actions__11aTX a {\r\n  display: block;\r\n}\r\n\r\n.event-item_actions__11aTX a span {\r\n  vertical-align: middle;\r\n}\r\n\r\n.event-item_icon__1I_s2 {\r\n  margin-left: 0.5rem;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.event-item_icon__1I_s2 svg {\r\n  width: 1.25rem;\r\n  height: 1.25rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .event-item_item__30cs2 {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .event-item_item__30cs2 img {\r\n    width: 40%;\r\n    height: 14rem;\r\n  }\r\n\r\n  .event-item_content__3cjBv {\r\n    width: 60%;\r\n    padding: 0;\r\n    text-align: left;\r\n  }\r\n\r\n  .event-item_content__3cjBv h2 {\r\n    margin: 1rem 0;\r\n  }\r\n\r\n  .event-item_actions__11aTX {\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://components/events/event-item/event-item.module.css"],"names":[],"mappings":"AAAA;EACE,mFAA2E;UAA3E,2EAA2E;EAC3E,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,cAAS;EAAT,SAAS;AACX;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,gBAAW;EAAX,WAAW;EACX,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;EACd,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,UAAU;IACV,aAAa;EACf;;EAEA;IACE,UAAU;IACV,UAAU;IACV,gBAAgB;EAClB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,mBAAmB;IACnB,yBAAyB;EAC3B;AACF","sourcesContent":[".item {\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  background-color: white;\r\n  margin: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.item img {\r\n  width: 100%;\r\n  object-fit: cover;\r\n  height: 10rem;\r\n}\r\n\r\n.content {\r\n  width: 100%;\r\n  padding: 0 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.content h2 {\r\n  margin: 0.5rem 0;\r\n}\r\n\r\n.date,\r\n.address {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  align-items: center;\r\n}\r\n\r\n.date svg,\r\n.address svg {\r\n  width: 1.25rem;\r\n  height: 1.25rem;\r\n  color: #666666;\r\n}\r\n\r\n.content time {\r\n  color: #666666;\r\n  font-weight: bold;\r\n}\r\n\r\n.content address {\r\n  margin: 0.5rem 0;\r\n  color: #666666;\r\n  white-space: pre;\r\n}\r\n\r\n.actions {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 1rem;\r\n  color: blue;\r\n}\r\n\r\n.actions a {\r\n  display: block;\r\n}\r\n\r\n.actions a span {\r\n  vertical-align: middle;\r\n}\r\n\r\n.icon {\r\n  margin-left: 0.5rem;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.icon svg {\r\n  width: 1.25rem;\r\n  height: 1.25rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .item {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .item img {\r\n    width: 40%;\r\n    height: 14rem;\r\n  }\r\n\r\n  .content {\r\n    width: 60%;\r\n    padding: 0;\r\n    text-align: left;\r\n  }\r\n\r\n  .content h2 {\r\n    margin: 1rem 0;\r\n  }\r\n\r\n  .actions {\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"item": "event-item_item__30cs2",
	"content": "event-item_content__3cjBv",
	"date": "event-item_date__2nZHJ",
	"address": "event-item_address__318Sj",
	"actions": "event-item_actions__11aTX",
	"icon": "event-item_icon__1I_s2"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/events/event-list/event-list.module.css":
/*!************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/events/event-list/event-list.module.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".event-list_list__3BG1s {\r\n  width: 90%;\r\n  max-width: 40rem;\r\n  margin: 5rem auto;\r\n}", "",{"version":3,"sources":["webpack://components/events/event-list/event-list.module.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,gBAAgB;EAChB,iBAAiB;AACnB","sourcesContent":[".list {\r\n  width: 90%;\r\n  max-width: 40rem;\r\n  margin: 5rem auto;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"list": "event-list_list__3BG1s"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./pages/events/index.jsx":
/*!********************************!*\
  !*** ./pages/events/index.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dummy-data */ "./dummy-data.js");
/* harmony import */ var _components_events_event_list_event_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/events/event-list/event-list */ "./components/events/event-list/event-list.jsx");


var _jsxFileName = "C:\\Users\\HP\\Desktop\\main\\NextjsProjects\\NextjsCourse\\sample-app\\pages\\events\\index.jsx",
    _this = undefined;




var Events = function Events() {
  var events = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_1__["getAllEvents"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_event_list_event_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
      items: events
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = Events;
/* harmony default export */ __webpack_exports__["default"] = (Events);

var _c;

$RefreshReg$(_c, "Events");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtaXRlbS9ldmVudC1pdGVtLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtaXRlbS9ldmVudC1pdGVtLm1vZHVsZS5jc3M/MTgyYSIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudC1saXN0L2V2ZW50LWxpc3QuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1saXN0L2V2ZW50LWxpc3QubW9kdWxlLmNzcz82MTdmIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1pdGVtL2V2ZW50LWl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtbGlzdC9ldmVudC1saXN0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9pbmRleC5qc3giXSwibmFtZXMiOlsiRXZlbnRJdGVtIiwiaXRlbSIsInRpdGxlIiwiaW1hZ2UiLCJkYXRlIiwibG9jYXRpb24iLCJpZCIsInJlYWRhYmxlRGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJmb3JtYXR0ZWRBZGRyZXNzIiwicmVwbGFjZSIsImNsYXNzZXMiLCJjb250ZW50Iiwic3VtbWFyeSIsImFkZHJlc3MiLCJhY3Rpb25zIiwiaWNvbiIsIkV2ZW50TGlzdCIsIml0ZW1zIiwibGlzdCIsIm1hcCIsIkV2ZW50cyIsImV2ZW50cyIsImdldEFsbEV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEs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QkFBbUIseUJBQXlCLE9BQU8sdUJBQXVCLHVCQUF1QixPQUFPLG9CQUFvQiw0QkFBNEIsa0NBQWtDLE9BQU8sS0FBSyxtQkFBbUI7QUFDbnJKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNEJBQTRCLGlCQUFpQix1QkFBdUIsd0JBQXdCLEtBQUssT0FBTyxtSEFBbUgsVUFBVSxZQUFZLGFBQWEsaUNBQWlDLGlCQUFpQix1QkFBdUIsd0JBQXdCLEtBQUssbUJBQW1CO0FBQzlaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTs7QUFFQSxJQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLE1BQU1DLE1BQU0sR0FBR0MsZ0VBQVksRUFBM0I7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLGdGQUFEO0FBQVcsV0FBSyxFQUFFRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FSRDs7S0FBTUQsTTtBQVVTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ldmVudHMuNDk5OTY5MGIwNWQ5ZTYzZTA0ODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL3VpL2J1dHRvbi9idXR0b24nO1xyXG5pbXBvcnQgRGF0ZUljb24gZnJvbSAnLi4vLi4vaWNvbnMvZGF0ZS1pY29uJztcclxuaW1wb3J0IEFkZHJlc3NJY29uIGZyb20gJy4uLy4uL2ljb25zL2FkZHJlc3MtaWNvbic7XHJcbmltcG9ydCBBcnJvd1JpZ2h0SWNvbiBmcm9tICcuLi8uLi9pY29ucy9hcnJvdy1yaWdodC1pY29uJztcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vZXZlbnQtaXRlbS5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IEV2ZW50SXRlbSA9ICh7IGl0ZW0gfSkgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUsIGltYWdlLCBkYXRlLCBsb2NhdGlvbiwgaWQgfSA9IGl0ZW07XHJcblxyXG4gIGNvbnN0IHJlYWRhYmxlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XHJcbiAgICBkYXk6ICdudW1lcmljJyxcclxuICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgfSk7XHJcbiAgY29uc3QgZm9ybWF0dGVkQWRkcmVzcyA9IGxvY2F0aW9uLnJlcGxhY2UoJywgJywgJ1xcbicpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgPGltZyBzcmM9e2AvJHtpbWFnZX1gfSBhbHQ9e3RpdGxlfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdW1tYXJ5fT5cclxuICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PlxyXG4gICAgICAgICAgICA8RGF0ZUljb24gLz5cclxuICAgICAgICAgICAgPHRpbWU+e3JlYWRhYmxlRGF0ZX08L3RpbWU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFkZHJlc3N9PlxyXG4gICAgICAgICAgICA8QWRkcmVzc0ljb24gLz5cclxuICAgICAgICAgICAgPGFkZHJlc3M+e2Zvcm1hdHRlZEFkZHJlc3N9PC9hZGRyZXNzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICA8QnV0dG9uIGxpbms9e2AvZXZlbnRzLyR7aWR9YH0+XHJcbiAgICAgICAgICAgIDxzcGFuPkV4cGxvcmUgRXZlbnQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufT5cclxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRJdGVtO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL2V2ZW50LWl0ZW0ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vZXZlbnQtaXRlbS5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vZXZlbnQtaXRlbS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBFdmVudEl0ZW0gZnJvbSAnLi4vZXZlbnQtaXRlbS9ldmVudC1pdGVtJztcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vZXZlbnQtbGlzdC5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgRXZlbnRMaXN0ID0gKHsgaXRlbXMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgPEV2ZW50SXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRMaXN0O1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL2V2ZW50LWxpc3QubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vZXZlbnQtbGlzdC5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vZXZlbnQtbGlzdC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ldmVudC1pdGVtX2l0ZW1fXzMwY3MyIHtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAxcHggMTJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDFweCAxMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZXZlbnQtaXRlbV9pdGVtX18zMGNzMiBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIGhlaWdodDogMTByZW07XFxyXFxufVxcclxcblxcclxcbi5ldmVudC1pdGVtX2NvbnRlbnRfXzNjakJ2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZXZlbnQtaXRlbV9jb250ZW50X18zY2pCdiBoMiB7XFxyXFxuICBtYXJnaW46IDAuNXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZXZlbnQtaXRlbV9kYXRlX18yblpISixcXHJcXG4uZXZlbnQtaXRlbV9hZGRyZXNzX18zMThTaiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ3JpZC1nYXA6IDAuNXJlbTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmV2ZW50LWl0ZW1fZGF0ZV9fMm5aSEogc3ZnLFxcclxcbi5ldmVudC1pdGVtX2FkZHJlc3NfXzMxOFNqIHN2ZyB7XFxyXFxuICB3aWR0aDogMS4yNXJlbTtcXHJcXG4gIGhlaWdodDogMS4yNXJlbTtcXHJcXG4gIGNvbG9yOiAjNjY2NjY2O1xcclxcbn1cXHJcXG5cXHJcXG4uZXZlbnQtaXRlbV9jb250ZW50X18zY2pCdiB0aW1lIHtcXHJcXG4gIGNvbG9yOiAjNjY2NjY2O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5ldmVudC1pdGVtX2NvbnRlbnRfXzNjakJ2IGFkZHJlc3Mge1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXHJcXG4gIGNvbG9yOiAjNjY2NjY2O1xcclxcbiAgd2hpdGUtc3BhY2U6IHByZTtcXHJcXG59XFxyXFxuXFxyXFxuLmV2ZW50LWl0ZW1fYWN0aW9uc19fMTFhVFgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5ldmVudC1pdGVtX2FjdGlvbnNfXzExYVRYIGEge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5ldmVudC1pdGVtX2FjdGlvbnNfXzExYVRYIGEgc3BhbiB7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4uZXZlbnQtaXRlbV9pY29uX18xSV9zMiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ldmVudC1pdGVtX2ljb25fXzFJX3MyIHN2ZyB7XFxyXFxuICB3aWR0aDogMS4yNXJlbTtcXHJcXG4gIGhlaWdodDogMS4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuZXZlbnQtaXRlbV9pdGVtX18zMGNzMiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZXZlbnQtaXRlbV9pdGVtX18zMGNzMiBpbWcge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDE0cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmV2ZW50LWl0ZW1fY29udGVudF9fM2NqQnYge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmV2ZW50LWl0ZW1fY29udGVudF9fM2NqQnYgaDIge1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ldmVudC1pdGVtX2FjdGlvbnNfXzExYVRYIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWl0ZW0vZXZlbnQtaXRlbS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUZBQTJFO1VBQTNFLDJFQUEyRTtFQUMzRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFTO0VBQVQsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsZ0JBQVc7RUFBWCxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFVBQVU7SUFDVixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaXRlbSB7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDFweCAxMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBoZWlnaHQ6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgaDIge1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUsXFxyXFxuLmFkZHJlc3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUgc3ZnLFxcclxcbi5hZGRyZXNzIHN2ZyB7XFxyXFxuICB3aWR0aDogMS4yNXJlbTtcXHJcXG4gIGhlaWdodDogMS4yNXJlbTtcXHJcXG4gIGNvbG9yOiAjNjY2NjY2O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB0aW1lIHtcXHJcXG4gIGNvbG9yOiAjNjY2NjY2O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IGFkZHJlc3Mge1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXHJcXG4gIGNvbG9yOiAjNjY2NjY2O1xcclxcbiAgd2hpdGUtc3BhY2U6IHByZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb25zIGEge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb25zIGEgc3BhbiB7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHN2ZyB7XFxyXFxuICB3aWR0aDogMS4yNXJlbTtcXHJcXG4gIGhlaWdodDogMS4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuaXRlbSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaXRlbSBpbWcge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDE0cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRlbnQgaDIge1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hY3Rpb25zIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaXRlbVwiOiBcImV2ZW50LWl0ZW1faXRlbV9fMzBjczJcIixcblx0XCJjb250ZW50XCI6IFwiZXZlbnQtaXRlbV9jb250ZW50X18zY2pCdlwiLFxuXHRcImRhdGVcIjogXCJldmVudC1pdGVtX2RhdGVfXzJuWkhKXCIsXG5cdFwiYWRkcmVzc1wiOiBcImV2ZW50LWl0ZW1fYWRkcmVzc19fMzE4U2pcIixcblx0XCJhY3Rpb25zXCI6IFwiZXZlbnQtaXRlbV9hY3Rpb25zX18xMWFUWFwiLFxuXHRcImljb25cIjogXCJldmVudC1pdGVtX2ljb25fXzFJX3MyXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmV2ZW50LWxpc3RfbGlzdF9fM0JHMXMge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1heC13aWR0aDogNDByZW07XFxyXFxuICBtYXJnaW46IDVyZW0gYXV0bztcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWxpc3QvZXZlbnQtbGlzdC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxpc3Qge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1heC13aWR0aDogNDByZW07XFxyXFxuICBtYXJnaW46IDVyZW0gYXV0bztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibGlzdFwiOiBcImV2ZW50LWxpc3RfbGlzdF9fM0JHMXNcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyBnZXRBbGxFdmVudHMgfSBmcm9tICcuLi8uLi9kdW1teS1kYXRhJztcclxuaW1wb3J0IEV2ZW50TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1saXN0L2V2ZW50LWxpc3QnO1xyXG5cclxuY29uc3QgRXZlbnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGV2ZW50cyA9IGdldEFsbEV2ZW50cygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEV2ZW50TGlzdCBpdGVtcz17ZXZlbnRzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==