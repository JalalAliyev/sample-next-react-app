webpackHotUpdate_N_E("pages/events",{

/***/ "./components/events/events-search/events-search.jsx":
/*!***********************************************************!*\
  !*** ./components/events/events-search/events-search.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/button/button */ "./components/ui/button/button.jsx");
/* harmony import */ var _events_search_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-search.module.css */ "./components/events/events-search/events-search.module.css");
/* harmony import */ var _events_search_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_events_search_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\HP\\Desktop\\main\\NextjsProjects\\NextjsCourse\\sample-app\\components\\events\\events-search\\events-search.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var EventsSearch = function EventsSearch(_ref) {
  _s();

  var onSearch = _ref.onSearch;
  var yearRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var monthRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var submitHandler = function submitHandler(e) {
    e.preventDefault();
    var selectedYear = yearRef.current.value;
    var selectedMonth = monthRef.current.value.onSearch(selectedYear, selectedMonth);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: _events_search_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form,
    onSubmit: submitHandler,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _events_search_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.controls,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _events_search_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "year",
          children: "Year"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          id: "year",
          ref: yearRef,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "2021",
            children: "2021"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "2022",
            children: "2022"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _events_search_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "month",
          children: "Month"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          id: "month",
          ref: monthRef,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "1",
            children: "January"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "2",
            children: "February"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "3",
            children: "March"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "4",
            children: "April"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "5",
            children: "May"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "6",
            children: "June"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "7",
            children: "July"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "8",
            children: "August"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "9",
            children: "September"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "10",
            children: "October"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "11",
            children: "November"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: "12",
            children: "December"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_button_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: "Filter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(EventsSearch, "4sZyHlqhJQJ41bx7Y/Qzm6CKt0o=");

_c = EventsSearch;
/* harmony default export */ __webpack_exports__["default"] = (EventsSearch);

var _c;

$RefreshReg$(_c, "EventsSearch");

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

/***/ "./components/events/events-search/events-search.module.css":
/*!******************************************************************!*\
  !*** ./components/events/events-search/events-search.module.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./events-search.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/events/events-search/events-search.module.css");

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
      /*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./events-search.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/events/events-search/events-search.module.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./events-search.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/events/events-search/events-search.module.css");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/events/events-search/events-search.module.css":
/*!******************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/events/events-search/events-search.module.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".events-search_form__15_tb {\r\n  margin: 2rem auto;\r\n  -webkit-box-shadow: 0 1px 4px rgba(0,0,0,0.2);\r\n          box-shadow: 0 1px 4px rgba(0,0,0,0.2);\r\n  padding: 1rem;\r\n  background-color: white;\r\n  border-radius: 6px;\r\n  width: 90%;\r\n  max-width: 40rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  grid-gap: 1rem;\r\n  gap: 1rem;\r\n}\r\n\r\n.events-search_controls__2pAK6 {\r\n  width: 100%;\r\n  display: flex;\r\n  grid-gap: 1rem;\r\n  gap: 1rem;\r\n  flex-direction: column;\r\n}\r\n\r\n.events-search_control__3a9mF {\r\n  flex: 1 1;\r\n  display: flex;\r\n  grid-gap: 1rem;\r\n  gap: 1rem;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.events-search_control__3a9mF label {\r\n  font-weight: bold;\r\n}\r\n\r\n.events-search_control__3a9mF select {\r\n  font: inherit;\r\n  background-color: white;\r\n  border-radius: 6px;\r\n  width: 70%;\r\n  padding: 0.25rem;\r\n}\r\n\r\n.events-search_form__15_tb button {\r\n  width: 100%;\r\n  font: inherit;\r\n  padding: 0.25rem 0.5rem;\r\n  background-color: #03be9f;\r\n  border: 1px solid #03be9f;\r\n  color: #dafff7;\r\n  border-radius: 4px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .events-search_form__15_tb {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .events-search_controls__2pAK6 {\r\n    width: 80%;\r\n    flex-direction: row;\r\n  }\r\n\r\n  .events-search_control__3a9mF select {\r\n    width: 100%;\r\n  }\r\n\r\n  .events-search_form__15_tb button {\r\n    width: 20%;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://components/events/events-search/events-search.module.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,6CAAqC;UAArC,qCAAqC;EACrC,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,sBAAsB;EACtB,cAAS;EAAT,SAAS;AACX;;AAEA;EACE,WAAW;EACX,aAAa;EACb,cAAS;EAAT,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,SAAO;EACP,aAAa;EACb,cAAS;EAAT,SAAS;EACT,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,UAAU;IACV,mBAAmB;EACrB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,UAAU;EACZ;AACF","sourcesContent":[".form {\r\n  margin: 2rem auto;\r\n  box-shadow: 0 1px 4px rgba(0,0,0,0.2);\r\n  padding: 1rem;\r\n  background-color: white;\r\n  border-radius: 6px;\r\n  width: 90%;\r\n  max-width: 40rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.controls {\r\n  width: 100%;\r\n  display: flex;\r\n  gap: 1rem;\r\n  flex-direction: column;\r\n}\r\n\r\n.control {\r\n  flex: 1;\r\n  display: flex;\r\n  gap: 1rem;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.control label {\r\n  font-weight: bold;\r\n}\r\n\r\n.control select {\r\n  font: inherit;\r\n  background-color: white;\r\n  border-radius: 6px;\r\n  width: 70%;\r\n  padding: 0.25rem;\r\n}\r\n\r\n.form button {\r\n  width: 100%;\r\n  font: inherit;\r\n  padding: 0.25rem 0.5rem;\r\n  background-color: #03be9f;\r\n  border: 1px solid #03be9f;\r\n  color: #dafff7;\r\n  border-radius: 4px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .form {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .controls {\r\n    width: 80%;\r\n    flex-direction: row;\r\n  }\r\n\r\n  .control select {\r\n    width: 100%;\r\n  }\r\n\r\n  .form button {\r\n    width: 20%;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"form": "events-search_form__15_tb",
	"controls": "events-search_controls__2pAK6",
	"control": "events-search_control__3a9mF"
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dummy-data */ "./dummy-data.js");
/* harmony import */ var _components_events_event_list_event_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/events/event-list/event-list */ "./components/events/event-list/event-list.jsx");
/* harmony import */ var _components_events_events_search_events_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/events-search/events-search */ "./components/events/events-search/events-search.jsx");



var _jsxFileName = "C:\\Users\\HP\\Desktop\\main\\NextjsProjects\\NextjsCourse\\sample-app\\pages\\events\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var Events = function Events() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var events = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_2__["getAllEvents"])();

  var findEventsHandler = function findEventsHandler(year, month) {
    var fullPath = "/events/".concat(year, "/").concat(month);
    router.push(fullPath);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_events_search_events_search__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onSearch: findEventsHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_event_list_event_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
      items: events
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Events, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnRzLXNlYXJjaC9ldmVudHMtc2VhcmNoLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnRzLXNlYXJjaC9ldmVudHMtc2VhcmNoLm1vZHVsZS5jc3M/ZGYxMiIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnRzLXNlYXJjaC9ldmVudHMtc2VhcmNoLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9pbmRleC5qc3giXSwibmFtZXMiOlsiRXZlbnRzU2VhcmNoIiwib25TZWFyY2giLCJ5ZWFyUmVmIiwidXNlUmVmIiwibW9udGhSZWYiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0ZWRZZWFyIiwiY3VycmVudCIsInZhbHVlIiwic2VsZWN0ZWRNb250aCIsImNsYXNzZXMiLCJmb3JtIiwiY29udHJvbHMiLCJjb250cm9sIiwiRXZlbnRzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZXZlbnRzIiwiZ2V0QWxsRXZlbnRzIiwiZmluZEV2ZW50c0hhbmRsZXIiLCJ5ZWFyIiwibW9udGgiLCJmdWxsUGF0aCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFnQjtBQUFBOztBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUNuQyxNQUFNQyxPQUFPLEdBQUdDLG9EQUFNLEVBQXRCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRCxvREFBTSxFQUF2Qjs7QUFFQSxNQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBTztBQUMzQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBTUMsWUFBWSxHQUFHTixPQUFPLENBQUNPLE9BQVIsQ0FBZ0JDLEtBQXJDO0FBQ0EsUUFBTUMsYUFBYSxHQUFHUCxRQUFRLENBQUNLLE9BQVQsQ0FBaUJDLEtBQWpCLENBRXJCVCxRQUZxQixDQUVaTyxZQUZZLEVBRUVHLGFBRkYsQ0FBdEI7QUFHRCxHQU5EOztBQVFBLHNCQUNFO0FBQU0sYUFBUyxFQUFFQyxnRUFBTyxDQUFDQyxJQUF6QjtBQUErQixZQUFRLEVBQUVSLGFBQXpDO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVPLGdFQUFPLENBQUNFLFFBQXhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFRixnRUFBTyxDQUFDRyxPQUF4QjtBQUFBLGdDQUNFO0FBQU8saUJBQU8sRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBUSxZQUFFLEVBQUMsTUFBWDtBQUFrQixhQUFHLEVBQUViLE9BQXZCO0FBQUEsa0NBQ0U7QUFBUSxpQkFBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFRLGlCQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFRRTtBQUFLLGlCQUFTLEVBQUVVLGdFQUFPLENBQUNHLE9BQXhCO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFRLFlBQUUsRUFBQyxPQUFYO0FBQW1CLGFBQUcsRUFBRVgsUUFBeEI7QUFBQSxrQ0FDRTtBQUFRLGlCQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQVEsaUJBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBUSxpQkFBSyxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRTtBQUFRLGlCQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQUtFO0FBQVEsaUJBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBTUU7QUFBUSxpQkFBSyxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFPRTtBQUFRLGlCQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQVFFO0FBQVEsaUJBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBU0U7QUFBUSxpQkFBSyxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEYsZUFVRTtBQUFRLGlCQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixlQVdFO0FBQVEsaUJBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhGLGVBWUU7QUFBUSxpQkFBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBMkJFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBM0NEOztHQUFNSixZOztLQUFBQSxZO0FBNkNTQSwyRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBLFVBQVUsbUJBQU8sQ0FBQyx5TkFBOEc7QUFDaEksMEJBQTBCLG1CQUFPLENBQUMsMldBQTRMOztBQUU5Tjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBO0FBQ0EsTUFBTSwyV0FBNEw7QUFDbE07QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQywyV0FBNEw7O0FBRXROOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywrQkFBK0Isd0JBQXdCLG9EQUFvRCxvREFBb0Qsb0JBQW9CLDhCQUE4Qix5QkFBeUIsaUJBQWlCLHVCQUF1QixvQkFBb0IscUNBQXFDLDZCQUE2QixxQkFBcUIsZ0JBQWdCLEtBQUssd0NBQXdDLGtCQUFrQixvQkFBb0IscUJBQXFCLGdCQUFnQiw2QkFBNkIsS0FBSyx1Q0FBdUMsZ0JBQWdCLG9CQUFvQixxQkFBcUIsZ0JBQWdCLDBCQUEwQixxQ0FBcUMsS0FBSyw2Q0FBNkMsd0JBQXdCLEtBQUssOENBQThDLG9CQUFvQiw4QkFBOEIseUJBQXlCLGlCQUFpQix1QkFBdUIsS0FBSywyQ0FBMkMsa0JBQWtCLG9CQUFvQiw4QkFBOEIsZ0NBQWdDLGdDQUFnQyxxQkFBcUIseUJBQXlCLEtBQUssbUNBQW1DLGtDQUFrQyw0QkFBNEIsT0FBTywwQ0FBMEMsbUJBQW1CLDRCQUE0QixPQUFPLGdEQUFnRCxvQkFBb0IsT0FBTyw2Q0FBNkMsbUJBQW1CLE9BQU8sS0FBSyxPQUFPLHlIQUF5SCxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssZ0NBQWdDLHdCQUF3Qiw0Q0FBNEMsb0JBQW9CLDhCQUE4Qix5QkFBeUIsaUJBQWlCLHVCQUF1QixvQkFBb0IscUNBQXFDLDZCQUE2QixnQkFBZ0IsS0FBSyxtQkFBbUIsa0JBQWtCLG9CQUFvQixnQkFBZ0IsNkJBQTZCLEtBQUssa0JBQWtCLGNBQWMsb0JBQW9CLGdCQUFnQiwwQkFBMEIscUNBQXFDLEtBQUssd0JBQXdCLHdCQUF3QixLQUFLLHlCQUF5QixvQkFBb0IsOEJBQThCLHlCQUF5QixpQkFBaUIsdUJBQXVCLEtBQUssc0JBQXNCLGtCQUFrQixvQkFBb0IsOEJBQThCLGdDQUFnQyxnQ0FBZ0MscUJBQXFCLHlCQUF5QixLQUFLLG1DQUFtQyxhQUFhLDRCQUE0QixPQUFPLHFCQUFxQixtQkFBbUIsNEJBQTRCLE9BQU8sMkJBQTJCLG9CQUFvQixPQUFPLHdCQUF3QixtQkFBbUIsT0FBTyxLQUFLLG1CQUFtQjtBQUN6K0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNZ0IsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyxnRUFBWSxFQUEzQjs7QUFFQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN6QyxRQUFNQyxRQUFRLHFCQUFjRixJQUFkLGNBQXNCQyxLQUF0QixDQUFkO0FBQ0FOLFVBQU0sQ0FBQ1EsSUFBUCxDQUFZRCxRQUFaO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHNGQUFEO0FBQWMsY0FBUSxFQUFFSDtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxnRkFBRDtBQUFXLFdBQUssRUFBRUY7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7QUFNRCxDQWZEOztHQUFNSCxNO1VBQ1dFLHFEOzs7S0FEWEYsTTtBQWlCU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzLjZkYjJlNTgyOTg3ZjgwM2Q1Zjc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi91aS9idXR0b24vYnV0dG9uJztcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vZXZlbnRzLXNlYXJjaC5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IEV2ZW50c1NlYXJjaCA9ICh7b25TZWFyY2h9KSA9PiB7XHJcbiAgY29uc3QgeWVhclJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG1vbnRoUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRZZWFyID0geWVhclJlZi5jdXJyZW50LnZhbHVlXHJcbiAgICBjb25zdCBzZWxlY3RlZE1vbnRoID0gbW9udGhSZWYuY3VycmVudC52YWx1ZVxyXG5cclxuICAgIC5vblNlYXJjaChzZWxlY3RlZFllYXIsIHNlbGVjdGVkTW9udGgpXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd5ZWFyJz5ZZWFyPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3QgaWQ9J3llYXInIHJlZj17eWVhclJlZn0+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzIwMjEnPjIwMjE8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMjAyMic+MjAyMjwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbW9udGgnPk1vbnRoPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3QgaWQ9J21vbnRoJyByZWY9e21vbnRoUmVmfT5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMSc+SmFudWFyeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScyJz5GZWJydWFyeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSczJz5NYXJjaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc0Jz5BcHJpbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc1Jz5NYXk8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nNic+SnVuZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc3Jz5KdWx5PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzgnPkF1Z3VzdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc5Jz5TZXB0ZW1iZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMTAnPk9jdG9iZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMTEnPk5vdmVtYmVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzEyJz5EZWNlbWJlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8QnV0dG9uPkZpbHRlcjwvQnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudHNTZWFyY2g7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vZXZlbnRzLXNlYXJjaC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9ldmVudHMtc2VhcmNoLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9ldmVudHMtc2VhcmNoLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmV2ZW50cy1zZWFyY2hfZm9ybV9fMTVfdGIge1xcclxcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWF4LXdpZHRoOiA0MHJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ3JpZC1nYXA6IDFyZW07XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5ldmVudHMtc2VhcmNoX2NvbnRyb2xzX18ycEFLNiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBncmlkLWdhcDogMXJlbTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5ldmVudHMtc2VhcmNoX2NvbnRyb2xfXzNhOW1GIHtcXHJcXG4gIGZsZXg6IDEgMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBncmlkLWdhcDogMXJlbTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5ldmVudHMtc2VhcmNoX2NvbnRyb2xfXzNhOW1GIGxhYmVsIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uZXZlbnRzLXNlYXJjaF9jb250cm9sX18zYTltRiBzZWxlY3Qge1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5ldmVudHMtc2VhcmNoX2Zvcm1fXzE1X3RiIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2JlOWY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDNiZTlmO1xcclxcbiAgY29sb3I6ICNkYWZmZjc7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmV2ZW50cy1zZWFyY2hfZm9ybV9fMTVfdGIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmV2ZW50cy1zZWFyY2hfY29udHJvbHNfXzJwQUs2IHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ldmVudHMtc2VhcmNoX2NvbnRyb2xfXzNhOW1GIHNlbGVjdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmV2ZW50cy1zZWFyY2hfZm9ybV9fMTVfdGIgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50cy1zZWFyY2gvZXZlbnRzLXNlYXJjaC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLDZDQUFxQztVQUFyQyxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixjQUFTO0VBQVQsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFTO0VBQVQsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQU87RUFDUCxhQUFhO0VBQ2IsY0FBUztFQUFULFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb3JtIHtcXHJcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXgtd2lkdGg6IDQwcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250cm9scyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udHJvbCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5jb250cm9sIGxhYmVsIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udHJvbCBzZWxlY3Qge1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2JlOWY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDNiZTlmO1xcclxcbiAgY29sb3I6ICNkYWZmZjc7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmZvcm0ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRyb2xzIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250cm9sIHNlbGVjdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0gYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZm9ybVwiOiBcImV2ZW50cy1zZWFyY2hfZm9ybV9fMTVfdGJcIixcblx0XCJjb250cm9sc1wiOiBcImV2ZW50cy1zZWFyY2hfY29udHJvbHNfXzJwQUs2XCIsXG5cdFwiY29udHJvbFwiOiBcImV2ZW50cy1zZWFyY2hfY29udHJvbF9fM2E5bUZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGdldEFsbEV2ZW50cyB9IGZyb20gJy4uLy4uL2R1bW15LWRhdGEnO1xyXG5pbXBvcnQgRXZlbnRMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWxpc3QvZXZlbnQtbGlzdCc7XHJcbmltcG9ydCBFdmVudHNTZWFyY2ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudHMvZXZlbnRzLXNlYXJjaC9ldmVudHMtc2VhcmNoJztcclxuXHJcbmNvbnN0IEV2ZW50cyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBldmVudHMgPSBnZXRBbGxFdmVudHMoKTtcclxuXHJcbiAgY29uc3QgZmluZEV2ZW50c0hhbmRsZXIgPSAoeWVhciwgbW9udGgpID0+IHtcclxuICAgIGNvbnN0IGZ1bGxQYXRoID0gYC9ldmVudHMvJHt5ZWFyfS8ke21vbnRofWA7XHJcbiAgICByb3V0ZXIucHVzaChmdWxsUGF0aCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxFdmVudHNTZWFyY2ggb25TZWFyY2g9e2ZpbmRFdmVudHNIYW5kbGVyfSAvPlxyXG4gICAgICA8RXZlbnRMaXN0IGl0ZW1zPXtldmVudHN9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9