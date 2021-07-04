module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/events/[eventId].jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/event-details/event-content/event-content.jsx":
/*!******************************************************************!*\
  !*** ./components/event-details/event-content/event-content.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_content_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-content.module.css */ "./components/event-details/event-content/event-content.module.css");
/* harmony import */ var _event_content_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_content_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\HP\\Desktop\\main\\NextjsProjects\\NextjsCourse\\sample-app\\components\\event-details\\event-content\\event-content.jsx";


const EventContent = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _event_content_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EventContent);

/***/ }),

/***/ "./components/event-details/event-content/event-content.module.css":
/*!*************************************************************************!*\
  !*** ./components/event-details/event-content/event-content.module.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "event-content_content__32PMD"
};


/***/ }),

/***/ "./components/event-details/event-logistics/event-logistics.jsx":
/*!**********************************************************************!*\
  !*** ./components/event-details/event-logistics/event-logistics.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/address-icon */ "./components/icons/address-icon.js");
/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/date-icon */ "./components/icons/date-icon.js");
/* harmony import */ var _logistics_item_logistics_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logistics-item/logistics-item */ "./components/event-details/logistics-item/logistics-item.jsx");
/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-logistics.module.css */ "./components/event-details/event-logistics/event-logistics.module.css");
/* harmony import */ var _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\HP\\Desktop\\main\\NextjsProjects\\NextjsCourse\\sample-app\\components\\event-details\\event-logistics\\event-logistics.jsx";





const EventLogistics = ({
  date,
  address,
  image,
  imageAlt
}) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const addressText = address.replace(', ', '\n');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.logistics,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.image,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: `/${image}`,
        alt: imageAlt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _event_logistics_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_logistics_item_logistics_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
        icon: _icons_date_icon__WEBPACK_IMPORTED_MODULE_2__["default"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
          children: humanReadableDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_logistics_item_logistics_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
        icon: _icons_address_icon__WEBPACK_IMPORTED_MODULE_1__["default"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("address", {
          children: addressText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EventLogistics);

/***/ }),

/***/ "./components/event-details/event-logistics/event-logistics.module.css":
/*!*****************************************************************************!*\
  !*** ./components/event-details/event-logistics/event-logistics.module.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"logistics": "event-logistics_logistics__t97rv",
	"image": "event-logistics_image__2S5pD",
	"list": "event-logistics_list__1o3Ih"
};


/***/ }),

/***/ "./components/event-details/event-summary/event-summary.jsx":
/*!******************************************************************!*\
  !*** ./components/event-details/event-summary/event-summary.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-summary.module.css */ "./components/event-details/event-summary/event-summary.module.css");
/* harmony import */ var _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_summary_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\HP\\Desktop\\main\\NextjsProjects\\NextjsCourse\\sample-app\\components\\event-details\\event-summary\\event-summary.jsx";


const EventSummary = ({
  title
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _event_summary_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.summary,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EventSummary);

/***/ }),

/***/ "./components/event-details/event-summary/event-summary.module.css":
/*!*************************************************************************!*\
  !*** ./components/event-details/event-summary/event-summary.module.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"summary": "event-summary_summary__2N3O0"
};


/***/ }),

/***/ "./components/event-details/logistics-item/logistics-item.jsx":
/*!********************************************************************!*\
  !*** ./components/event-details/logistics-item/logistics-item.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logistics-item.module.css */ "./components/event-details/logistics-item/logistics-item.module.css");
/* harmony import */ var _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\HP\\Desktop\\main\\NextjsProjects\\NextjsCourse\\sample-app\\components\\event-details\\logistics-item\\logistics-item.jsx";


const LogisticsItem = ({
  icon: Icon,
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: _logistics_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LogisticsItem);

/***/ }),

/***/ "./components/event-details/logistics-item/logistics-item.module.css":
/*!***************************************************************************!*\
  !*** ./components/event-details/logistics-item/logistics-item.module.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "logistics-item_item__1WeNs",
	"icon": "logistics-item_icon__cwNKn"
};


/***/ }),

/***/ "./components/icons/address-icon.js":
/*!******************************************!*\
  !*** ./components/icons/address-icon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\HP\\Desktop\\main\\NextjsProjects\\NextjsCourse\\sample-app\\components\\icons\\address-icon.js";

function AddressIcon() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (AddressIcon);

/***/ }),

/***/ "./components/icons/date-icon.js":
/*!***************************************!*\
  !*** ./components/icons/date-icon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\HP\\Desktop\\main\\NextjsProjects\\NextjsCourse\\sample-app\\components\\icons\\date-icon.js";

function DateIcon() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (DateIcon);

/***/ }),

/***/ "./dummy-data.js":
/*!***********************!*\
  !*** ./dummy-data.js ***!
  \***********************/
/*! exports provided: getFeaturedEvents, getAllEvents, getFilteredEvents, getEventById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeaturedEvents", function() { return getFeaturedEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEvents", function() { return getAllEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilteredEvents", function() { return getFilteredEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventById", function() { return getEventById; });
const DUMMY_EVENTS = [{
  id: 'e1',
  title: 'Programming for everyone',
  description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
  location: 'Somestreet 25, 12345 San Somewhereo',
  date: '2021-05-12',
  image: 'images/coding-event.jpg',
  isFeatured: false
}, {
  id: 'e2',
  title: 'Networking for introverts',
  description: "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
  location: 'New Wall Street 5, 98765 New Work',
  date: '2021-05-30',
  image: 'images/introvert-event.jpg',
  isFeatured: true
}, {
  id: 'e3',
  title: 'Networking for extroverts',
  description: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
  location: 'My Street 12, 10115 Broke City',
  date: '2022-04-10',
  image: 'images/extrovert-event.jpg',
  isFeatured: true
}];
const getFeaturedEvents = () => {
  return DUMMY_EVENTS.filter(event => event.isFeatured);
};
const getAllEvents = () => {
  return DUMMY_EVENTS;
};
const getFilteredEvents = dataFilter => {
  const {
    year,
    month
  } = dataFilter;
  let filteredEvents = DUMMY_EVENTS.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });
  return filteredEvents;
};
const getEventById = id => {
  return DUMMY_EVENTS.find(event => event.id === id);
};

/***/ }),

/***/ "./pages/events/[eventId].jsx":
/*!************************************!*\
  !*** ./pages/events/[eventId].jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_event_details_event_summary_event_summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/event-details/event-summary/event-summary */ "./components/event-details/event-summary/event-summary.jsx");
/* harmony import */ var _components_event_details_event_logistics_event_logistics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/event-details/event-logistics/event-logistics */ "./components/event-details/event-logistics/event-logistics.jsx");
/* harmony import */ var _components_event_details_event_content_event_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/event-details/event-content/event-content */ "./components/event-details/event-content/event-content.jsx");
/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dummy-data */ "./dummy-data.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\HP\\Desktop\\main\\NextjsProjects\\NextjsCourse\\sample-app\\pages\\events\\[eventId].jsx";







const EventDetail = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const eventId = router.query.eventId;
  const event = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_5__["getEventById"])(eventId);

  if (!event) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "No event found!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_event_details_event_summary_event_summary__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: event.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_event_details_event_logistics_event_logistics__WEBPACK_IMPORTED_MODULE_3__["default"], {
      date: event.date,
      address: event.location,
      image: event.image,
      imageAlt: event.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_event_details_event_content_event_content__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: event.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (EventDetail);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ldmVudC1kZXRhaWxzL2V2ZW50LWNvbnRlbnQvZXZlbnQtY29udGVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ldmVudC1kZXRhaWxzL2V2ZW50LWNvbnRlbnQvZXZlbnQtY29udGVudC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlscy9ldmVudC1sb2dpc3RpY3MvZXZlbnQtbG9naXN0aWNzLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbHMvZXZlbnQtbG9naXN0aWNzL2V2ZW50LWxvZ2lzdGljcy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlscy9ldmVudC1zdW1tYXJ5L2V2ZW50LXN1bW1hcnkuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlscy9ldmVudC1zdW1tYXJ5L2V2ZW50LXN1bW1hcnkubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbHMvbG9naXN0aWNzLWl0ZW0vbG9naXN0aWNzLWl0ZW0uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlscy9sb2dpc3RpY3MtaXRlbS9sb2dpc3RpY3MtaXRlbS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvYWRkcmVzcy1pY29uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvZGF0ZS1pY29uLmpzIiwid2VicGFjazovLy8uL2R1bW15LWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXZlbnRzL1tldmVudElkXS5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkV2ZW50Q29udGVudCIsImNoaWxkcmVuIiwiY2xhc3NlcyIsImNvbnRlbnQiLCJFdmVudExvZ2lzdGljcyIsImRhdGUiLCJhZGRyZXNzIiwiaW1hZ2UiLCJpbWFnZUFsdCIsImh1bWFuUmVhZGFibGVEYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsImFkZHJlc3NUZXh0IiwicmVwbGFjZSIsImxvZ2lzdGljcyIsImxpc3QiLCJEYXRlSWNvbiIsIkFkZHJlc3NJY29uIiwiRXZlbnRTdW1tYXJ5IiwidGl0bGUiLCJzdW1tYXJ5IiwiTG9naXN0aWNzSXRlbSIsImljb24iLCJJY29uIiwiaXRlbSIsIkRVTU1ZX0VWRU5UUyIsImlkIiwiZGVzY3JpcHRpb24iLCJsb2NhdGlvbiIsImlzRmVhdHVyZWQiLCJnZXRGZWF0dXJlZEV2ZW50cyIsImZpbHRlciIsImV2ZW50IiwiZ2V0QWxsRXZlbnRzIiwiZ2V0RmlsdGVyZWRFdmVudHMiLCJkYXRhRmlsdGVyIiwiZmlsdGVyZWRFdmVudHMiLCJldmVudERhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RXZlbnRCeUlkIiwiZmluZCIsIkV2ZW50RGV0YWlsIiwicm91dGVyIiwidXNlUm91dGVyIiwiZXZlbnRJZCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtC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RThCLEtBQUssQ0FBQ0osUUFGakI7QUFHRSxXQUFLLEVBQUVJLEtBQUssQ0FBQzVCLEtBSGY7QUFJRSxjQUFRLEVBQUU0QixLQUFLLENBQUNiO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFRRSxxRUFBQyw2RkFBRDtBQUFBLDZCQUNFO0FBQUEsa0JBQUlhLEtBQUssQ0FBQ0w7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBLGtCQURGO0FBY0QsQ0F4QkQ7O0FBMEJlZSwwRUFBZixFOzs7Ozs7Ozs7OztBQ2xDQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9ldmVudHMvW2V2ZW50SWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9ldmVudHMvW2V2ZW50SWRdLmpzeFwiKTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gJy4vZXZlbnQtY29udGVudC5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgRXZlbnRDb250ZW50ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgcmV0dXJuICggXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRDb250ZW50OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRcIjogXCJldmVudC1jb250ZW50X2NvbnRlbnRfXzMyUE1EXCJcbn07XG4iLCJpbXBvcnQgQWRkcmVzc0ljb24gZnJvbSAnLi4vLi4vaWNvbnMvYWRkcmVzcy1pY29uJztcclxuaW1wb3J0IERhdGVJY29uIGZyb20gJy4uLy4uL2ljb25zL2RhdGUtaWNvbic7XHJcbmltcG9ydCBMb2dpc3RpY3NJdGVtIGZyb20gJy4uL2xvZ2lzdGljcy1pdGVtL2xvZ2lzdGljcy1pdGVtJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9ldmVudC1sb2dpc3RpY3MubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBFdmVudExvZ2lzdGljcyA9ICh7IGRhdGUsIGFkZHJlc3MsIGltYWdlLCBpbWFnZUFsdCB9KSA9PiB7XHJcbiAgY29uc3QgaHVtYW5SZWFkYWJsZURhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge1xyXG4gICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgeWVhcjogJ251bWVyaWMnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGFkZHJlc3NUZXh0ID0gYWRkcmVzcy5yZXBsYWNlKCcsICcsICdcXG4nKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2lzdGljc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfT5cclxuICAgICAgICA8aW1nIHNyYz17YC8ke2ltYWdlfWB9IGFsdD17aW1hZ2VBbHR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICAgIDxMb2dpc3RpY3NJdGVtIGljb249e0RhdGVJY29ufT5cclxuICAgICAgICAgIDx0aW1lPntodW1hblJlYWRhYmxlRGF0ZX08L3RpbWU+XHJcbiAgICAgICAgPC9Mb2dpc3RpY3NJdGVtPlxyXG4gICAgICAgIDxMb2dpc3RpY3NJdGVtIGljb249e0FkZHJlc3NJY29ufT5cclxuICAgICAgICAgIDxhZGRyZXNzPnthZGRyZXNzVGV4dH08L2FkZHJlc3M+XHJcbiAgICAgICAgPC9Mb2dpc3RpY3NJdGVtPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudExvZ2lzdGljcztcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9naXN0aWNzXCI6IFwiZXZlbnQtbG9naXN0aWNzX2xvZ2lzdGljc19fdDk3cnZcIixcblx0XCJpbWFnZVwiOiBcImV2ZW50LWxvZ2lzdGljc19pbWFnZV9fMlM1cERcIixcblx0XCJsaXN0XCI6IFwiZXZlbnQtbG9naXN0aWNzX2xpc3RfXzFvM0loXCJcbn07XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL2V2ZW50LXN1bW1hcnkubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBFdmVudFN1bW1hcnkgPSAoeyB0aXRsZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdW1tYXJ5fT5cclxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudFN1bW1hcnk7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1bW1hcnlcIjogXCJldmVudC1zdW1tYXJ5X3N1bW1hcnlfXzJOM08wXCJcbn07XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL2xvZ2lzdGljcy1pdGVtLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgTG9naXN0aWNzSXRlbSA9ICh7IGljb246IEljb24sIGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259PlxyXG4gICAgICAgIDxJY29uIC8+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PntjaGlsZHJlbn08L3NwYW4+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpc3RpY3NJdGVtO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpdGVtXCI6IFwibG9naXN0aWNzLWl0ZW1faXRlbV9fMVdlTnNcIixcblx0XCJpY29uXCI6IFwibG9naXN0aWNzLWl0ZW1faWNvbl9fY3dOS25cIlxufTtcbiIsImZ1bmN0aW9uIEFkZHJlc3NJY29uKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgIGZpbGw9J25vbmUnXG4gICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xuICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgZD0nTTE3LjY1NyAxNi42NTdMMTMuNDE0IDIwLjlhMS45OTggMS45OTggMCAwMS0yLjgyNyAwbC00LjI0NC00LjI0M2E4IDggMCAxMTExLjMxNCAweidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xuICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgZD0nTTE1IDExYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHonXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRyZXNzSWNvbjtcbiIsImZ1bmN0aW9uIERhdGVJY29uKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgIGZpbGw9J25vbmUnXG4gICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xuICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgZD0nTTggN1YzbTggNFYzbS05IDhoMTBNNSAyMWgxNGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnonXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlSWNvbjsiLCJjb25zdCBEVU1NWV9FVkVOVFMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdlMScsXHJcbiAgICB0aXRsZTogJ1Byb2dyYW1taW5nIGZvciBldmVyeW9uZScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0V2ZXJ5b25lIGNhbiBsZWFybiB0byBjb2RlISBZZXMsIGV2ZXJ5b25lISBJbiB0aGlzIGxpdmUgZXZlbnQsIHdlIGFyZSBnb2luZyB0byBnbyB0aHJvdWdoIGFsbCB0aGUga2V5IGJhc2ljcyBhbmQgZ2V0IHlvdSBzdGFydGVkIHdpdGggcHJvZ3JhbW1pbmcgYXMgd2VsbC4nLFxyXG4gICAgbG9jYXRpb246ICdTb21lc3RyZWV0IDI1LCAxMjM0NSBTYW4gU29tZXdoZXJlbycsXHJcbiAgICBkYXRlOiAnMjAyMS0wNS0xMicsXHJcbiAgICBpbWFnZTogJ2ltYWdlcy9jb2RpbmctZXZlbnQuanBnJyxcclxuICAgIGlzRmVhdHVyZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdlMicsXHJcbiAgICB0aXRsZTogJ05ldHdvcmtpbmcgZm9yIGludHJvdmVydHMnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiV2Uga25vdzogTmV0d29ya2luZyBpcyBubyBmdW4gaWYgeW91IGFyZSBhbiBpbnRyb3ZlcnQgcGVyc29uLiBUaGF0J3Mgd2h5IHdlIGNhbWUgdXAgd2l0aCB0aGlzIGV2ZW50IC0gaXQnbGwgYmUgc28gbXVjaCBlYXNpZXIuIFByb21pc2VkIVwiLFxyXG4gICAgbG9jYXRpb246ICdOZXcgV2FsbCBTdHJlZXQgNSwgOTg3NjUgTmV3IFdvcmsnLFxyXG4gICAgZGF0ZTogJzIwMjEtMDUtMzAnLFxyXG4gICAgaW1hZ2U6ICdpbWFnZXMvaW50cm92ZXJ0LWV2ZW50LmpwZycsXHJcbiAgICBpc0ZlYXR1cmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdlMycsXHJcbiAgICB0aXRsZTogJ05ldHdvcmtpbmcgZm9yIGV4dHJvdmVydHMnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdZb3UgcHJvYmFibHkgbmVlZCBubyBoZWxwIHdpdGggbmV0d29ya2luZyBpbiBnZW5lcmFsLiBCdXQgZm9jdXNpbmcgeW91ciBlbmVyZ3kgY29ycmVjdGx5IC0gdGhhdCBpcyBzb21ldGhpbmcgd2hlcmUgbW9zdCBwZW9wbGUgY2FuIGltcHJvdmUuJyxcclxuICAgIGxvY2F0aW9uOiAnTXkgU3RyZWV0IDEyLCAxMDExNSBCcm9rZSBDaXR5JyxcclxuICAgIGRhdGU6ICcyMDIyLTA0LTEwJyxcclxuICAgIGltYWdlOiAnaW1hZ2VzL2V4dHJvdmVydC1ldmVudC5qcGcnLFxyXG4gICAgaXNGZWF0dXJlZDogdHJ1ZSxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZlYXR1cmVkRXZlbnRzID0gKCkgPT4ge1xyXG4gIHJldHVybiBEVU1NWV9FVkVOVFMuZmlsdGVyKChldmVudCkgPT4gZXZlbnQuaXNGZWF0dXJlZCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsRXZlbnRzID0gKCkgPT4ge1xyXG4gIHJldHVybiBEVU1NWV9FVkVOVFM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmlsdGVyZWRFdmVudHMgPSAoZGF0YUZpbHRlcikgPT4ge1xyXG4gIGNvbnN0IHsgeWVhciwgbW9udGggfSA9IGRhdGFGaWx0ZXI7XHJcblxyXG4gIGxldCBmaWx0ZXJlZEV2ZW50cyA9IERVTU1ZX0VWRU5UUy5maWx0ZXIoKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBldmVudERhdGUgPSBuZXcgRGF0ZShldmVudC5kYXRlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGV2ZW50RGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyICYmIGV2ZW50RGF0ZS5nZXRNb250aCgpID09PSBtb250aCAtIDFcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBmaWx0ZXJlZEV2ZW50cztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRFdmVudEJ5SWQgPSAoaWQpID0+IHtcclxuICByZXR1cm4gRFVNTVlfRVZFTlRTLmZpbmQoKGV2ZW50KSA9PiBldmVudC5pZCA9PT0gaWQpO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEV2ZW50U3VtbWFyeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbHMvZXZlbnQtc3VtbWFyeS9ldmVudC1zdW1tYXJ5JztcclxuaW1wb3J0IEV2ZW50TG9naXN0aWNzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlscy9ldmVudC1sb2dpc3RpY3MvZXZlbnQtbG9naXN0aWNzJztcclxuaW1wb3J0IEV2ZW50Q29udGVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50LWRldGFpbHMvZXZlbnQtY29udGVudC9ldmVudC1jb250ZW50JztcclxuaW1wb3J0IHsgZ2V0RXZlbnRCeUlkIH0gZnJvbSAnLi4vLi4vZHVtbXktZGF0YSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IEV2ZW50RGV0YWlsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBldmVudElkID0gcm91dGVyLnF1ZXJ5LmV2ZW50SWQ7XHJcbiAgY29uc3QgZXZlbnQgPSBnZXRFdmVudEJ5SWQoZXZlbnRJZCk7XHJcblxyXG4gIGlmICghZXZlbnQpIHtcclxuICAgIHJldHVybiA8cD5ObyBldmVudCBmb3VuZCE8L3A+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxFdmVudFN1bW1hcnkgdGl0bGU9e2V2ZW50LnRpdGxlfSAvPlxyXG4gICAgICA8RXZlbnRMb2dpc3RpY3NcclxuICAgICAgICBkYXRlPXtldmVudC5kYXRlfVxyXG4gICAgICAgIGFkZHJlc3M9e2V2ZW50LmxvY2F0aW9ufVxyXG4gICAgICAgIGltYWdlPXtldmVudC5pbWFnZX1cclxuICAgICAgICBpbWFnZUFsdD17ZXZlbnQudGl0bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxFdmVudENvbnRlbnQ+XHJcbiAgICAgICAgPHA+e2V2ZW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9FdmVudENvbnRlbnQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnREZXRhaWw7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9