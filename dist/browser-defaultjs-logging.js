/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Appender.js":
/*!*************************!*\
  !*** ./src/Appender.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Appender)
/* harmony export */ });
const APPENDERS = new Map();

class Appender {
	static getAppender(name) {
		return APPENDERS.get(name);
	}

	static register(name, appender) {
		APPENDERS.set(name, appender);
	}

	constructor() {}

	logMessage(aMessage, anException, aLoggerName, aDate, aLogLevel) {}
}


/***/ }),

/***/ "./src/Config.js":
/*!***********************!*\
  !*** ./src/Config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "loadConfig": () => (/* binding */ loadConfig)
/* harmony export */ });
/* harmony import */ var _LogLevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogLevel */ "./src/LogLevel.js");
/* harmony import */ var _Appender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Appender */ "./src/Appender.js");



const DEFAULTCONFIG = {
	filter: "",
	logLevel: "NOLOG",
	appenders: [],
};

const loadConfig = async (config) => {
	if (config instanceof Array) return config;
	else if (typeof config === "string") return loadRemote(config);

	const element = document.querySelector("[logging-properties]");
	if (element && element.hasAttribute("logging-properties")) {
		config = element.getAttribute("logging-properties");
		return JSON.parse(config);
	}
};

const loadRemote = async (url) => {
	let response = await fetch(new URL(url, location.href));
	return response.json();
};

const findConfig = (name, data) => {
	let defaultConfig = DEFAULTCONFIG;
	let actualConfig = defaultConfig;
	for (let config of data) {
		if (isConfigActiv(name, config, actualConfig)) actualConfig = config;
		else if (!config.filter) defaultConfig = config;
		if (actualConfig != null && actualConfig.filter == name) return actualConfig;
	}

	return actualConfig || defaultConfig;
};

const isConfigActiv = (name, config, actualConfig) => {
	if (config && actualConfig.filter.length >= config.filter.length) return false;
	return name.search(config.filter) == 0;
};

const getAppenders = (appenders) => {
	const result = [];
	for (let key of appenders) {
		const appender = _Appender__WEBPACK_IMPORTED_MODULE_1__["default"].getAppender(key);
		if (appender) result.push(appender);
	}

	return result;
};

class Config {
	constructor(config) {
		this.data = loadConfig(config);
	}

	async loggerConfig(name) {
		const data = await this.data;
		const config = findConfig(name, data);

		return {
			filter: config.filter,
			logLevel: _LogLevel__WEBPACK_IMPORTED_MODULE_0__["default"].lookup(config.logLevel),
			appenders: getAppenders(config.appenders),
		};
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Config);


/***/ }),

/***/ "./src/ConsoleAppender.js":
/*!********************************!*\
  !*** ./src/ConsoleAppender.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Appender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Appender */ "./src/Appender.js");
/* harmony import */ var _LogLevel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogLevel */ "./src/LogLevel.js");
/* harmony import */ var _utils_DateUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/DateUtils */ "./src/utils/DateUtils.js");





class ConsoleAppender extends _Appender__WEBPACK_IMPORTED_MODULE_0__["default"]{
	logMessage (aMessage, anException, aLoggerName, aDate, aLogLevel){
		if (_LogLevel__WEBPACK_IMPORTED_MODULE_1__["default"].NOLOG == aLogLevel)
			return;
		let log = [];
		if (aDate)
			log.push(_utils_DateUtils__WEBPACK_IMPORTED_MODULE_2__["default"].dateAsString(aDate), " ");
		
		log.push("***", aLogLevel.title, "*** ", aLoggerName);
		
		if (aMessage) {
			log.push(" -> ");
			if (Array.isArray(aMessage))
				Array.prototype.push.apply(log, aMessage);
			else
				log.push(aMessage);
		}
		if (anException)
			log.push(": ", anException);
		
		let appender = console.log;		
		if (_LogLevel__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR == aLogLevel) 
			appender = console.error; 
		else if (_LogLevel__WEBPACK_IMPORTED_MODULE_1__["default"].WARN == aLogLevel)
			appender = console.warn;
		else if (_LogLevel__WEBPACK_IMPORTED_MODULE_1__["default"].INFO == aLogLevel)
			appender = console.info;
		else if (_LogLevel__WEBPACK_IMPORTED_MODULE_1__["default"].DEBUG == aLogLevel)
			appender = console.debug;
		else if (_LogLevel__WEBPACK_IMPORTED_MODULE_1__["default"].TRACE == aLogLevel)
			appender = console.trace;
		
		appender.apply(console, log);	
	}
}

const INSTANCE = new ConsoleAppender();
_Appender__WEBPACK_IMPORTED_MODULE_0__["default"].register("ConsoleAppender", INSTANCE);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INSTANCE);

/***/ }),

/***/ "./src/HtmlAppender.js":
/*!*****************************!*\
  !*** ./src/HtmlAppender.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Appender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Appender */ "./src/Appender.js");
/* harmony import */ var _utils_DateUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/DateUtils */ "./src/utils/DateUtils.js");



const CONTAINER = "[data-log]";
class HtmlAppender extends _Appender__WEBPACK_IMPORTED_MODULE_0__["default"] {
	isAvailable() {
		return !!document.querySelector(CONTAINER);
	}
	logMessage(aMessage, anException, aLoggerName, aDate, aLogLevel) {
		const container = document.querySelector(CONTAINER);
		if (!container) return;

		const entry = document.createElement("div");
		entry.setAttribute("class", "log-entry " + aLogLevel.title);
		let message = _utils_DateUtils__WEBPACK_IMPORTED_MODULE_1__["default"].dateAsString(aDate || new Date()) + " ***" + aLogLevel.title + "*** " + aLoggerName + "";

		if (aMessage) message += " -> " + aMessage;
		if (anException) message += ": " + anException;

		entry.textContent = message;
		return container.appendChild(entry);
	}
}

const INSTANCE = new HtmlAppender();
_Appender__WEBPACK_IMPORTED_MODULE_0__["default"].register("HtmlAppender", INSTANCE);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INSTANCE);


/***/ }),

/***/ "./src/InteligentBrowserAppender.js":
/*!******************************************!*\
  !*** ./src/InteligentBrowserAppender.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Appender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Appender */ "./src/Appender.js");
/* harmony import */ var _HtmlAppender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HtmlAppender */ "./src/HtmlAppender.js");
/* harmony import */ var _ConsoleAppender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConsoleAppender */ "./src/ConsoleAppender.js");
/* harmony import */ var _MemoryAppender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MemoryAppender */ "./src/MemoryAppender.js");





let appender;
const getAppender = () => {
	if (appender) {		
		if (console)
			appender = _ConsoleAppender__WEBPACK_IMPORTED_MODULE_2__["default"];
		else if (_HtmlAppender__WEBPACK_IMPORTED_MODULE_1__["default"].isAvailable())
			appender = _HtmlAppender__WEBPACK_IMPORTED_MODULE_1__["default"];
		else
			appender = _MemoryAppender__WEBPACK_IMPORTED_MODULE_3__["default"];
	}
	
	return appender;
};
class IntelligentBrowserAppender extends _Appender__WEBPACK_IMPORTED_MODULE_0__["default"] {
	logMessage(aMessage, anException, aLoggerName, aDate, aLogLevel) {
		getAppender().logMessage(aMessage, anException, aLoggerName, aDate, aLogLevel);
	}
};

const INSTANCE = new IntelligentBrowserAppender();
_Appender__WEBPACK_IMPORTED_MODULE_0__["default"].register("IntelligentBrowserAppender", INSTANCE);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INSTANCE);


/***/ }),

/***/ "./src/LogLevel.js":
/*!*************************!*\
  !*** ./src/LogLevel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEBUG": () => (/* binding */ DEBUG),
/* harmony export */   "ERROR": () => (/* binding */ ERROR),
/* harmony export */   "INFO": () => (/* binding */ INFO),
/* harmony export */   "NOLOG": () => (/* binding */ NOLOG),
/* harmony export */   "TRACE": () => (/* binding */ TRACE),
/* harmony export */   "WARN": () => (/* binding */ WARN),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Level {
	constructor(aOrder, aTitle) {
		this.order = aOrder;
		this.title = aTitle;
	}

	isIncluded(aLogLevel) {
		return this.order >= aLogLevel.order;
	}
}


const NOLOG = new Level(0, "NOLOG");
const ERROR = new Level(1, "ERROR");
const WARN = new Level(2, "WARN");
const INFO = new Level(3, "INFO");
const DEBUG = new Level(4, "DEBUG");
const TRACE = new Level(5, "TRACE");

const LogLevel = {
	NOLOG,
	ERROR,
	WARN,
	INFO,
	DEBUG,
	TRACE,
	lookup: (aLevel) => {
		if (typeof aLevel !== "string") return NOLOG;
		return LogLevel[aLevel.toUpperCase()] || NOLOG;
	}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogLevel);



/***/ }),

/***/ "./src/Logger.js":
/*!***********************!*\
  !*** ./src/Logger.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LogLevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogLevel */ "./src/LogLevel.js");


class Logger {
	constructor(name, config) {
		this.name = name;
		this.__config__ = config;
	}

	get config() {
		return this.__config__;
	}

	set config(config) {
		this.__config__ = config;
	}

	logError(aMessage, aException) {
		return this.log(aMessage, aException, _LogLevel__WEBPACK_IMPORTED_MODULE_0__["default"].ERROR);
	}

	logWarn(aMessage, aException) {
		this.log(aMessage, aException, _LogLevel__WEBPACK_IMPORTED_MODULE_0__["default"].WARN);
	}

	logInfo(aMessage, aException) {
		this.log(aMessage, aException, _LogLevel__WEBPACK_IMPORTED_MODULE_0__["default"].INFO);
	}

	logDebug(aMessage, aException) {
		this.log(aMessage, aException, _LogLevel__WEBPACK_IMPORTED_MODULE_0__["default"].DEBUG);
	}

	asynclogTrace(aMessage, aException) {
		this.log(aMessage, aException, _LogLevel__WEBPACK_IMPORTED_MODULE_0__["default"].TRACE);
	}

	async log(aMessage, anException, aLogLevel) {
		const name = this.name;
		const date = new Date();

		setTimeout(async () => {
			const config = await this.config;
			if (!config.logLevel.isIncluded(aLogLevel)) return;
			const { appenders } = config;
			for (let appender of appenders) appender.logMessage(aMessage, anException, name, date, aLogLevel);
		}, 100);
	}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logger);


/***/ }),

/***/ "./src/LoggerFactory.js":
/*!******************************!*\
  !*** ./src/LoggerFactory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "newLogger": () => (/* binding */ newLogger)
/* harmony export */ });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./src/Config.js");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logger */ "./src/Logger.js");



const LOGGERMAP = new Map();
let CONFIG = new _Config__WEBPACK_IMPORTED_MODULE_0__["default"]();
const updateLogger = () => {
	for (let [name, logger] of LOGGERMAP) logger.config = CONFIG.loggerConfig(name);
};

const newLogger = (name) => {
	if (!LOGGERMAP.has(name)) LOGGERMAP.set(name, new _Logger__WEBPACK_IMPORTED_MODULE_1__["default"](name, CONFIG.loggerConfig(name)));

	return LOGGERMAP.get(name);
};

const config = async function(config) {
	if (arguments.length == 0) return CONFIG.data;

	CONFIG = new _Config__WEBPACK_IMPORTED_MODULE_0__["default"](await config);
	updateLogger();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ newLogger, config });


/***/ }),

/***/ "./src/MemoryAppender.js":
/*!*******************************!*\
  !*** ./src/MemoryAppender.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Appender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Appender */ "./src/Appender.js");


const GLOBAL = self || __webpack_require__.g || window || undefined || {};
const LOG = () => {
	if(!(GLOBAL.__LOG__ instanceof Array))
		GLOBAL.__LOG__ = [];
	return GLOBAL.__LOG__;
}  ;



class MemoryAppender extends _Appender__WEBPACK_IMPORTED_MODULE_0__["default"] {
	logMessage(aMessage, anException,aLoggerName, aDate, aLogLevel) {
		const log = LOG();		
		log.push({
			"date" : aDate,
			"logLevel" : aLogLevel,
			"loggerName" : aLoggerName,
			"message" : aMessage,
			"exception" : anException
		});
	}
}; 

const INSTANCE = new MemoryAppender();
_Appender__WEBPACK_IMPORTED_MODULE_0__["default"].register("MemoryAppender", INSTANCE);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (INSTANCE);


/***/ }),

/***/ "./src/utils/DateUtils.js":
/*!********************************!*\
  !*** ./src/utils/DateUtils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DateUtils = {
		dateAsString : function(aDate){
			if(!aDate instanceof Date)
				return "";
			
			let result = "";
			
			result += aDate.getFullYear() + ".";
			if(aDate.getMonth() < 10) 
				result += "0" + aDate.getMonth();
			else 
				result += aDate.getMonth();
			result += ".";
			if(aDate.getDate() < 10) 
				result += "0" + aDate.getDate();
			else 
				result += aDate.getDate();		
			result +=  " ";
			if(aDate.getHours() < 10) 
				result += "0" + aDate.getHours();
			else 
				result += aDate.getHours();
			result += ":";
			if(aDate.getMinutes() < 10) 
				result += "0" + aDate.getMinutes();
			else 
				result += aDate.getMinutes();
			result += ":";
			if(aDate.getSeconds() < 10) 
				result += "0" + aDate.getSeconds();
			else 
				result += aDate.getSeconds();
			result += ":";
			if(aDate.getMilliseconds() < 10) 
				result += "00" + aDate.getMilliseconds();
			if(aDate.getMilliseconds() < 100) 
				result += "0" + aDate.getMilliseconds();
			else 
				result += aDate.getMilliseconds();
			
			return result;
		}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateUtils);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./browser.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsoleAppender": () => (/* reexport safe */ _src_ConsoleAppender__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "HtmlAppender": () => (/* reexport safe */ _src_HtmlAppender__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "InteligentBrowserAppender": () => (/* reexport safe */ _src_InteligentBrowserAppender__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "LogLevel": () => (/* reexport safe */ _src_LogLevel__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Logger": () => (/* reexport safe */ _src_Logger__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "LoggerFactory": () => (/* reexport safe */ _src_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "MemoryAppender": () => (/* reexport safe */ _src_MemoryAppender__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _src_ConsoleAppender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ConsoleAppender */ "./src/ConsoleAppender.js");
/* harmony import */ var _src_HtmlAppender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/HtmlAppender */ "./src/HtmlAppender.js");
/* harmony import */ var _src_InteligentBrowserAppender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/InteligentBrowserAppender */ "./src/InteligentBrowserAppender.js");
/* harmony import */ var _src_MemoryAppender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/MemoryAppender */ "./src/MemoryAppender.js");
/* harmony import */ var _src_LogLevel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/LogLevel */ "./src/LogLevel.js");
/* harmony import */ var _src_Logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/Logger */ "./src/Logger.js");
/* harmony import */ var _src_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/LoggerFactory */ "./src/LoggerFactory.js");








const global = self || global || window || undefined || {};
global.defaultjs = global.defaultjs || {};
global.defaultjs.logging = global.defaultjs.logging || {
	VERSION: "1.0.0",
	ConsoleAppender: _src_ConsoleAppender__WEBPACK_IMPORTED_MODULE_0__["default"],
	HtmlAppender: _src_HtmlAppender__WEBPACK_IMPORTED_MODULE_1__["default"],
	MemoryAppender: _src_MemoryAppender__WEBPACK_IMPORTED_MODULE_3__["default"],
	InteligentBrowserAppender: _src_InteligentBrowserAppender__WEBPACK_IMPORTED_MODULE_2__["default"],
	LogLevel: _src_LogLevel__WEBPACK_IMPORTED_MODULE_4__["default"],
	Logger: _src_Logger__WEBPACK_IMPORTED_MODULE_5__["default"],
	LoggerFactory: _src_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__["default"],
};



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05vRDtBQUNOO0FBQzBCO0FBQ3RCO0FBQ1o7QUFDSjtBQUNjO0FBQ2hEO0FBQ0EsMkNBQTJDLFNBQUk7QUFDL0M7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLGVBQWU7QUFDZiwwQkFBMEI7QUFDMUIsU0FBUztBQUNULE9BQU87QUFDUCxjQUFjO0FBQ2Q7QUFDQTtBQUNxSCIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nLy4vc3JjL0FwcGVuZGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtbG9nZ2luZy8uL3NyYy9Db25zb2xlQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWxvZ2dpbmcvLi9zcmMvSHRtbEFwcGVuZGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nLy4vc3JjL0ludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWxvZ2dpbmcvLi9zcmMvTG9nTGV2ZWwuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWxvZ2dpbmcvLi9zcmMvTG9nZ2VyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nLy4vc3JjL0xvZ2dlckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWxvZ2dpbmcvLi9zcmMvTWVtb3J5QXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWxvZ2dpbmcvLi9zcmMvdXRpbHMvRGF0ZVV0aWxzLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtbG9nZ2luZy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWxvZ2dpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtbG9nZ2luZy8uL2Jyb3dzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBQRU5ERVJTID0gbmV3IE1hcCgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBlbmRlciB7XG5cdHN0YXRpYyBnZXRBcHBlbmRlcihuYW1lKSB7XG5cdFx0cmV0dXJuIEFQUEVOREVSUy5nZXQobmFtZSk7XG5cdH1cblxuXHRzdGF0aWMgcmVnaXN0ZXIobmFtZSwgYXBwZW5kZXIpIHtcblx0XHRBUFBFTkRFUlMuc2V0KG5hbWUsIGFwcGVuZGVyKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRsb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpIHt9XG59XG4iLCJpbXBvcnQgTG9nTGV2ZWwgZnJvbSBcIi4vTG9nTGV2ZWxcIjtcbmltcG9ydCBBcHBlbmRlciBmcm9tIFwiLi9BcHBlbmRlclwiO1xuXG5jb25zdCBERUZBVUxUQ09ORklHID0ge1xuXHRmaWx0ZXI6IFwiXCIsXG5cdGxvZ0xldmVsOiBcIk5PTE9HXCIsXG5cdGFwcGVuZGVyczogW10sXG59O1xuXG5leHBvcnQgY29uc3QgbG9hZENvbmZpZyA9IGFzeW5jIChjb25maWcpID0+IHtcblx0aWYgKGNvbmZpZyBpbnN0YW5jZW9mIEFycmF5KSByZXR1cm4gY29uZmlnO1xuXHRlbHNlIGlmICh0eXBlb2YgY29uZmlnID09PSBcInN0cmluZ1wiKSByZXR1cm4gbG9hZFJlbW90ZShjb25maWcpO1xuXG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2xvZ2dpbmctcHJvcGVydGllc11cIik7XG5cdGlmIChlbGVtZW50ICYmIGVsZW1lbnQuaGFzQXR0cmlidXRlKFwibG9nZ2luZy1wcm9wZXJ0aWVzXCIpKSB7XG5cdFx0Y29uZmlnID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJsb2dnaW5nLXByb3BlcnRpZXNcIik7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoY29uZmlnKTtcblx0fVxufTtcblxuY29uc3QgbG9hZFJlbW90ZSA9IGFzeW5jICh1cmwpID0+IHtcblx0bGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpKTtcblx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmNvbnN0IGZpbmRDb25maWcgPSAobmFtZSwgZGF0YSkgPT4ge1xuXHRsZXQgZGVmYXVsdENvbmZpZyA9IERFRkFVTFRDT05GSUc7XG5cdGxldCBhY3R1YWxDb25maWcgPSBkZWZhdWx0Q29uZmlnO1xuXHRmb3IgKGxldCBjb25maWcgb2YgZGF0YSkge1xuXHRcdGlmIChpc0NvbmZpZ0FjdGl2KG5hbWUsIGNvbmZpZywgYWN0dWFsQ29uZmlnKSkgYWN0dWFsQ29uZmlnID0gY29uZmlnO1xuXHRcdGVsc2UgaWYgKCFjb25maWcuZmlsdGVyKSBkZWZhdWx0Q29uZmlnID0gY29uZmlnO1xuXHRcdGlmIChhY3R1YWxDb25maWcgIT0gbnVsbCAmJiBhY3R1YWxDb25maWcuZmlsdGVyID09IG5hbWUpIHJldHVybiBhY3R1YWxDb25maWc7XG5cdH1cblxuXHRyZXR1cm4gYWN0dWFsQ29uZmlnIHx8IGRlZmF1bHRDb25maWc7XG59O1xuXG5jb25zdCBpc0NvbmZpZ0FjdGl2ID0gKG5hbWUsIGNvbmZpZywgYWN0dWFsQ29uZmlnKSA9PiB7XG5cdGlmIChjb25maWcgJiYgYWN0dWFsQ29uZmlnLmZpbHRlci5sZW5ndGggPj0gY29uZmlnLmZpbHRlci5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIG5hbWUuc2VhcmNoKGNvbmZpZy5maWx0ZXIpID09IDA7XG59O1xuXG5jb25zdCBnZXRBcHBlbmRlcnMgPSAoYXBwZW5kZXJzKSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRmb3IgKGxldCBrZXkgb2YgYXBwZW5kZXJzKSB7XG5cdFx0Y29uc3QgYXBwZW5kZXIgPSBBcHBlbmRlci5nZXRBcHBlbmRlcihrZXkpO1xuXHRcdGlmIChhcHBlbmRlcikgcmVzdWx0LnB1c2goYXBwZW5kZXIpO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbmNsYXNzIENvbmZpZyB7XG5cdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuXHRcdHRoaXMuZGF0YSA9IGxvYWRDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdGFzeW5jIGxvZ2dlckNvbmZpZyhuYW1lKSB7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZGF0YTtcblx0XHRjb25zdCBjb25maWcgPSBmaW5kQ29uZmlnKG5hbWUsIGRhdGEpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGZpbHRlcjogY29uZmlnLmZpbHRlcixcblx0XHRcdGxvZ0xldmVsOiBMb2dMZXZlbC5sb29rdXAoY29uZmlnLmxvZ0xldmVsKSxcblx0XHRcdGFwcGVuZGVyczogZ2V0QXBwZW5kZXJzKGNvbmZpZy5hcHBlbmRlcnMpLFxuXHRcdH07XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnO1xuIiwiaW1wb3J0IEFwcGVuZGVyIGZyb20gXCIuL0FwcGVuZGVyXCI7XG5pbXBvcnQgTG9nTGV2ZWwgZnJvbSBcIi4vTG9nTGV2ZWxcIjtcbmltcG9ydCBEYXRlVXRpbHMgZnJvbSBcIi4vdXRpbHMvRGF0ZVV0aWxzXCI7XG5cblxuY2xhc3MgQ29uc29sZUFwcGVuZGVyIGV4dGVuZHMgQXBwZW5kZXJ7XG5cdGxvZ01lc3NhZ2UgKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpe1xuXHRcdGlmIChMb2dMZXZlbC5OT0xPRyA9PSBhTG9nTGV2ZWwpXG5cdFx0XHRyZXR1cm47XG5cdFx0bGV0IGxvZyA9IFtdO1xuXHRcdGlmIChhRGF0ZSlcblx0XHRcdGxvZy5wdXNoKERhdGVVdGlscy5kYXRlQXNTdHJpbmcoYURhdGUpLCBcIiBcIik7XG5cdFx0XG5cdFx0bG9nLnB1c2goXCIqKipcIiwgYUxvZ0xldmVsLnRpdGxlLCBcIioqKiBcIiwgYUxvZ2dlck5hbWUpO1xuXHRcdFxuXHRcdGlmIChhTWVzc2FnZSkge1xuXHRcdFx0bG9nLnB1c2goXCIgLT4gXCIpO1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoYU1lc3NhZ2UpKVxuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShsb2csIGFNZXNzYWdlKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0bG9nLnB1c2goYU1lc3NhZ2UpO1xuXHRcdH1cblx0XHRpZiAoYW5FeGNlcHRpb24pXG5cdFx0XHRsb2cucHVzaChcIjogXCIsIGFuRXhjZXB0aW9uKTtcblx0XHRcblx0XHRsZXQgYXBwZW5kZXIgPSBjb25zb2xlLmxvZztcdFx0XG5cdFx0aWYgKExvZ0xldmVsLkVSUk9SID09IGFMb2dMZXZlbCkgXG5cdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUuZXJyb3I7IFxuXHRcdGVsc2UgaWYgKExvZ0xldmVsLldBUk4gPT0gYUxvZ0xldmVsKVxuXHRcdFx0YXBwZW5kZXIgPSBjb25zb2xlLndhcm47XG5cdFx0ZWxzZSBpZiAoTG9nTGV2ZWwuSU5GTyA9PSBhTG9nTGV2ZWwpXG5cdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUuaW5mbztcblx0XHRlbHNlIGlmIChMb2dMZXZlbC5ERUJVRyA9PSBhTG9nTGV2ZWwpXG5cdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUuZGVidWc7XG5cdFx0ZWxzZSBpZiAoTG9nTGV2ZWwuVFJBQ0UgPT0gYUxvZ0xldmVsKVxuXHRcdFx0YXBwZW5kZXIgPSBjb25zb2xlLnRyYWNlO1xuXHRcdFxuXHRcdGFwcGVuZGVyLmFwcGx5KGNvbnNvbGUsIGxvZyk7XHRcblx0fVxufVxuXG5jb25zdCBJTlNUQU5DRSA9IG5ldyBDb25zb2xlQXBwZW5kZXIoKTtcbkFwcGVuZGVyLnJlZ2lzdGVyKFwiQ29uc29sZUFwcGVuZGVyXCIsIElOU1RBTkNFKTtcbmV4cG9ydCBkZWZhdWx0IElOU1RBTkNFOyIsImltcG9ydCBBcHBlbmRlciBmcm9tIFwiLi9BcHBlbmRlclwiO1xuaW1wb3J0IERhdGVVdGlscyBmcm9tIFwiLi91dGlscy9EYXRlVXRpbHNcIjtcblxuY29uc3QgQ09OVEFJTkVSID0gXCJbZGF0YS1sb2ddXCI7XG5jbGFzcyBIdG1sQXBwZW5kZXIgZXh0ZW5kcyBBcHBlbmRlciB7XG5cdGlzQXZhaWxhYmxlKCkge1xuXHRcdHJldHVybiAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ09OVEFJTkVSKTtcblx0fVxuXHRsb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpIHtcblx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENPTlRBSU5FUik7XG5cdFx0aWYgKCFjb250YWluZXIpIHJldHVybjtcblxuXHRcdGNvbnN0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRlbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxvZy1lbnRyeSBcIiArIGFMb2dMZXZlbC50aXRsZSk7XG5cdFx0bGV0IG1lc3NhZ2UgPSBEYXRlVXRpbHMuZGF0ZUFzU3RyaW5nKGFEYXRlIHx8IG5ldyBEYXRlKCkpICsgXCIgKioqXCIgKyBhTG9nTGV2ZWwudGl0bGUgKyBcIioqKiBcIiArIGFMb2dnZXJOYW1lICsgXCJcIjtcblxuXHRcdGlmIChhTWVzc2FnZSkgbWVzc2FnZSArPSBcIiAtPiBcIiArIGFNZXNzYWdlO1xuXHRcdGlmIChhbkV4Y2VwdGlvbikgbWVzc2FnZSArPSBcIjogXCIgKyBhbkV4Y2VwdGlvbjtcblxuXHRcdGVudHJ5LnRleHRDb250ZW50ID0gbWVzc2FnZTtcblx0XHRyZXR1cm4gY29udGFpbmVyLmFwcGVuZENoaWxkKGVudHJ5KTtcblx0fVxufVxuXG5jb25zdCBJTlNUQU5DRSA9IG5ldyBIdG1sQXBwZW5kZXIoKTtcbkFwcGVuZGVyLnJlZ2lzdGVyKFwiSHRtbEFwcGVuZGVyXCIsIElOU1RBTkNFKTtcbmV4cG9ydCBkZWZhdWx0IElOU1RBTkNFO1xuIiwiaW1wb3J0IEFwcGVuZGVyIGZyb20gXCIuL0FwcGVuZGVyXCI7XG5pbXBvcnQgSHRtbEFwcGVuZGVyIGZyb20gXCIuL0h0bWxBcHBlbmRlclwiO1xuaW1wb3J0IENvbnNvbGVBcHBlbmRlciBmcm9tIFwiLi9Db25zb2xlQXBwZW5kZXJcIjtcbmltcG9ydCBNZW1vcnlBcHBlbmRlciBmcm9tIFwiLi9NZW1vcnlBcHBlbmRlclwiO1xuXG5sZXQgYXBwZW5kZXI7XG5jb25zdCBnZXRBcHBlbmRlciA9ICgpID0+IHtcblx0aWYgKGFwcGVuZGVyKSB7XHRcdFxuXHRcdGlmIChjb25zb2xlKVxuXHRcdFx0YXBwZW5kZXIgPSBDb25zb2xlQXBwZW5kZXI7XG5cdFx0ZWxzZSBpZiAoSHRtbEFwcGVuZGVyLmlzQXZhaWxhYmxlKCkpXG5cdFx0XHRhcHBlbmRlciA9IEh0bWxBcHBlbmRlcjtcblx0XHRlbHNlXG5cdFx0XHRhcHBlbmRlciA9IE1lbW9yeUFwcGVuZGVyO1xuXHR9XG5cdFxuXHRyZXR1cm4gYXBwZW5kZXI7XG59O1xuY2xhc3MgSW50ZWxsaWdlbnRCcm93c2VyQXBwZW5kZXIgZXh0ZW5kcyBBcHBlbmRlciB7XG5cdGxvZ01lc3NhZ2UoYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBhTG9nZ2VyTmFtZSwgYURhdGUsIGFMb2dMZXZlbCkge1xuXHRcdGdldEFwcGVuZGVyKCkubG9nTWVzc2FnZShhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKTtcblx0fVxufTtcblxuY29uc3QgSU5TVEFOQ0UgPSBuZXcgSW50ZWxsaWdlbnRCcm93c2VyQXBwZW5kZXIoKTtcbkFwcGVuZGVyLnJlZ2lzdGVyKFwiSW50ZWxsaWdlbnRCcm93c2VyQXBwZW5kZXJcIiwgSU5TVEFOQ0UpO1xuZXhwb3J0IGRlZmF1bHQgSU5TVEFOQ0U7XG4iLCJjbGFzcyBMZXZlbCB7XHJcblx0Y29uc3RydWN0b3IoYU9yZGVyLCBhVGl0bGUpIHtcclxuXHRcdHRoaXMub3JkZXIgPSBhT3JkZXI7XHJcblx0XHR0aGlzLnRpdGxlID0gYVRpdGxlO1xyXG5cdH1cclxuXHJcblx0aXNJbmNsdWRlZChhTG9nTGV2ZWwpIHtcclxuXHRcdHJldHVybiB0aGlzLm9yZGVyID49IGFMb2dMZXZlbC5vcmRlcjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgTk9MT0cgPSBuZXcgTGV2ZWwoMCwgXCJOT0xPR1wiKTtcclxuZXhwb3J0IGNvbnN0IEVSUk9SID0gbmV3IExldmVsKDEsIFwiRVJST1JcIik7XHJcbmV4cG9ydCBjb25zdCBXQVJOID0gbmV3IExldmVsKDIsIFwiV0FSTlwiKTtcclxuZXhwb3J0IGNvbnN0IElORk8gPSBuZXcgTGV2ZWwoMywgXCJJTkZPXCIpO1xyXG5leHBvcnQgY29uc3QgREVCVUcgPSBuZXcgTGV2ZWwoNCwgXCJERUJVR1wiKTtcclxuZXhwb3J0IGNvbnN0IFRSQUNFID0gbmV3IExldmVsKDUsIFwiVFJBQ0VcIik7XHJcblxyXG5jb25zdCBMb2dMZXZlbCA9IHtcclxuXHROT0xPRyxcclxuXHRFUlJPUixcclxuXHRXQVJOLFxyXG5cdElORk8sXHJcblx0REVCVUcsXHJcblx0VFJBQ0UsXHJcblx0bG9va3VwOiAoYUxldmVsKSA9PiB7XHJcblx0XHRpZiAodHlwZW9mIGFMZXZlbCAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIE5PTE9HO1xyXG5cdFx0cmV0dXJuIExvZ0xldmVsW2FMZXZlbC50b1VwcGVyQ2FzZSgpXSB8fCBOT0xPRztcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExvZ0xldmVsO1xyXG5cclxuIiwiaW1wb3J0IExvZ0xldmVsIGZyb20gXCIuL0xvZ0xldmVsXCI7XG5cbmNsYXNzIExvZ2dlciB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIGNvbmZpZykge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5fX2NvbmZpZ19fID0gY29uZmlnO1xuXHR9XG5cblx0Z2V0IGNvbmZpZygpIHtcblx0XHRyZXR1cm4gdGhpcy5fX2NvbmZpZ19fO1xuXHR9XG5cblx0c2V0IGNvbmZpZyhjb25maWcpIHtcblx0XHR0aGlzLl9fY29uZmlnX18gPSBjb25maWc7XG5cdH1cblxuXHRsb2dFcnJvcihhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xuXHRcdHJldHVybiB0aGlzLmxvZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbiwgTG9nTGV2ZWwuRVJST1IpO1xuXHR9XG5cblx0bG9nV2FybihhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xuXHRcdHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBMb2dMZXZlbC5XQVJOKTtcblx0fVxuXG5cdGxvZ0luZm8oYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcblx0XHR0aGlzLmxvZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbiwgTG9nTGV2ZWwuSU5GTyk7XG5cdH1cblxuXHRsb2dEZWJ1ZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xuXHRcdHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBMb2dMZXZlbC5ERUJVRyk7XG5cdH1cblxuXHRhc3luY2xvZ1RyYWNlKGFNZXNzYWdlLCBhRXhjZXB0aW9uKSB7XG5cdFx0dGhpcy5sb2coYU1lc3NhZ2UsIGFFeGNlcHRpb24sIExvZ0xldmVsLlRSQUNFKTtcblx0fVxuXG5cdGFzeW5jIGxvZyhhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dMZXZlbCkge1xuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLm5hbWU7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cblx0XHRzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IGNvbmZpZyA9IGF3YWl0IHRoaXMuY29uZmlnO1xuXHRcdFx0aWYgKCFjb25maWcubG9nTGV2ZWwuaXNJbmNsdWRlZChhTG9nTGV2ZWwpKSByZXR1cm47XG5cdFx0XHRjb25zdCB7IGFwcGVuZGVycyB9ID0gY29uZmlnO1xuXHRcdFx0Zm9yIChsZXQgYXBwZW5kZXIgb2YgYXBwZW5kZXJzKSBhcHBlbmRlci5sb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgbmFtZSwgZGF0ZSwgYUxvZ0xldmVsKTtcblx0XHR9LCAxMDApO1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBMb2dnZXI7XG4iLCJpbXBvcnQgQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9Mb2dnZXJcIjtcblxuY29uc3QgTE9HR0VSTUFQID0gbmV3IE1hcCgpO1xubGV0IENPTkZJRyA9IG5ldyBDb25maWcoKTtcbmNvbnN0IHVwZGF0ZUxvZ2dlciA9ICgpID0+IHtcblx0Zm9yIChsZXQgW25hbWUsIGxvZ2dlcl0gb2YgTE9HR0VSTUFQKSBsb2dnZXIuY29uZmlnID0gQ09ORklHLmxvZ2dlckNvbmZpZyhuYW1lKTtcbn07XG5cbmV4cG9ydCBjb25zdCBuZXdMb2dnZXIgPSAobmFtZSkgPT4ge1xuXHRpZiAoIUxPR0dFUk1BUC5oYXMobmFtZSkpIExPR0dFUk1BUC5zZXQobmFtZSwgbmV3IExvZ2dlcihuYW1lLCBDT05GSUcubG9nZ2VyQ29uZmlnKG5hbWUpKSk7XG5cblx0cmV0dXJuIExPR0dFUk1BUC5nZXQobmFtZSk7XG59O1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0gYXN5bmMgZnVuY3Rpb24oY29uZmlnKSB7XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHJldHVybiBDT05GSUcuZGF0YTtcblxuXHRDT05GSUcgPSBuZXcgQ29uZmlnKGF3YWl0IGNvbmZpZyk7XG5cdHVwZGF0ZUxvZ2dlcigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBuZXdMb2dnZXIsIGNvbmZpZyB9O1xuIiwiaW1wb3J0IEFwcGVuZGVyIGZyb20gXCIuL0FwcGVuZGVyXCI7XG5cbmNvbnN0IEdMT0JBTCA9IHNlbGYgfHwgZ2xvYmFsIHx8IHdpbmRvdyB8fCB0aGlzIHx8IHt9O1xuY29uc3QgTE9HID0gKCkgPT4ge1xuXHRpZighKEdMT0JBTC5fX0xPR19fIGluc3RhbmNlb2YgQXJyYXkpKVxuXHRcdEdMT0JBTC5fX0xPR19fID0gW107XG5cdHJldHVybiBHTE9CQUwuX19MT0dfXztcbn0gIDtcblxuXG5cbmNsYXNzIE1lbW9yeUFwcGVuZGVyIGV4dGVuZHMgQXBwZW5kZXIge1xuXHRsb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbixhTG9nZ2VyTmFtZSwgYURhdGUsIGFMb2dMZXZlbCkge1xuXHRcdGNvbnN0IGxvZyA9IExPRygpO1x0XHRcblx0XHRsb2cucHVzaCh7XG5cdFx0XHRcImRhdGVcIiA6IGFEYXRlLFxuXHRcdFx0XCJsb2dMZXZlbFwiIDogYUxvZ0xldmVsLFxuXHRcdFx0XCJsb2dnZXJOYW1lXCIgOiBhTG9nZ2VyTmFtZSxcblx0XHRcdFwibWVzc2FnZVwiIDogYU1lc3NhZ2UsXG5cdFx0XHRcImV4Y2VwdGlvblwiIDogYW5FeGNlcHRpb25cblx0XHR9KTtcblx0fVxufTsgXG5cbmNvbnN0IElOU1RBTkNFID0gbmV3IE1lbW9yeUFwcGVuZGVyKCk7XG5BcHBlbmRlci5yZWdpc3RlcihcIk1lbW9yeUFwcGVuZGVyXCIsIElOU1RBTkNFKTtcbmV4cG9ydCBkZWZhdWx0IElOU1RBTkNFO1xuIiwiY29uc3QgRGF0ZVV0aWxzID0ge1xyXG5cdFx0ZGF0ZUFzU3RyaW5nIDogZnVuY3Rpb24oYURhdGUpe1xyXG5cdFx0XHRpZighYURhdGUgaW5zdGFuY2VvZiBEYXRlKVxyXG5cdFx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHJlc3VsdCA9IFwiXCI7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0RnVsbFllYXIoKSArIFwiLlwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRNb250aCgpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldE1vbnRoKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldE1vbnRoKCk7XHJcblx0XHRcdHJlc3VsdCArPSBcIi5cIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0RGF0ZSgpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldERhdGUoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0RGF0ZSgpO1x0XHRcclxuXHRcdFx0cmVzdWx0ICs9ICBcIiBcIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0SG91cnMoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXRIb3VycygpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRIb3VycygpO1xyXG5cdFx0XHRyZXN1bHQgKz0gXCI6XCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldE1pbnV0ZXMoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXRNaW51dGVzKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0cmVzdWx0ICs9IFwiOlwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRTZWNvbmRzKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0U2Vjb25kcygpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRTZWNvbmRzKCk7XHJcblx0XHRcdHJlc3VsdCArPSBcIjpcIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMDBcIiArIGFEYXRlLmdldE1pbGxpc2Vjb25kcygpO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRNaWxsaXNlY29uZHMoKSA8IDEwMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldE1pbGxpc2Vjb25kcygpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGF0ZVV0aWxzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ29uc29sZUFwcGVuZGVyIGZyb20gXCIuL3NyYy9Db25zb2xlQXBwZW5kZXJcIjtcclxuaW1wb3J0IEh0bWxBcHBlbmRlciBmcm9tIFwiLi9zcmMvSHRtbEFwcGVuZGVyXCI7XHJcbmltcG9ydCBJbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyIGZyb20gXCIuL3NyYy9JbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyXCI7XHJcbmltcG9ydCBNZW1vcnlBcHBlbmRlciBmcm9tIFwiLi9zcmMvTWVtb3J5QXBwZW5kZXJcIjtcclxuaW1wb3J0IExvZ0xldmVsIGZyb20gXCIuL3NyYy9Mb2dMZXZlbFwiO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuL3NyYy9Mb2dnZXJcIjtcclxuaW1wb3J0IExvZ2dlckZhY3RvcnkgZnJvbSBcIi4vc3JjL0xvZ2dlckZhY3RvcnlcIjtcclxuXHJcbmNvbnN0IGdsb2JhbCA9IHNlbGYgfHwgZ2xvYmFsIHx8IHdpbmRvdyB8fCB0aGlzIHx8IHt9O1xyXG5nbG9iYWwuZGVmYXVsdGpzID0gZ2xvYmFsLmRlZmF1bHRqcyB8fCB7fTtcclxuZ2xvYmFsLmRlZmF1bHRqcy5sb2dnaW5nID0gZ2xvYmFsLmRlZmF1bHRqcy5sb2dnaW5nIHx8IHtcclxuXHRWRVJTSU9OOiBcIiR7dmVyc2lvbn1cIixcclxuXHRDb25zb2xlQXBwZW5kZXIsXHJcblx0SHRtbEFwcGVuZGVyLFxyXG5cdE1lbW9yeUFwcGVuZGVyLFxyXG5cdEludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIsXHJcblx0TG9nTGV2ZWwsXHJcblx0TG9nZ2VyLFxyXG5cdExvZ2dlckZhY3RvcnksXHJcbn07XHJcblxyXG5leHBvcnQgeyBDb25zb2xlQXBwZW5kZXIsIEh0bWxBcHBlbmRlciwgTWVtb3J5QXBwZW5kZXIsIEludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIsIExvZ0xldmVsLCBMb2dnZXIsIExvZ2dlckZhY3RvcnkgfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9