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
/* harmony export */   "loadConfig": () => (/* binding */ loadConfig),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony export */   "NOLOG": () => (/* binding */ NOLOG),
/* harmony export */   "ERROR": () => (/* binding */ ERROR),
/* harmony export */   "WARN": () => (/* binding */ WARN),
/* harmony export */   "INFO": () => (/* binding */ INFO),
/* harmony export */   "DEBUG": () => (/* binding */ DEBUG),
/* harmony export */   "TRACE": () => (/* binding */ TRACE),
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
/* harmony export */   "newLogger": () => (/* binding */ newLogger),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/*!***************************!*\
  !*** ./browser-bundle.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
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
	VERSION : "1.0.0",
	utils : utils,
	ConsoleAppender : _src_ConsoleAppender__WEBPACK_IMPORTED_MODULE_0__["default"],
	ConsolenAppender : _src_ConsoleAppender__WEBPACK_IMPORTED_MODULE_0__["default"],
	HtmlAppender : _src_HtmlAppender__WEBPACK_IMPORTED_MODULE_1__["default"],
	MemoryAppender : _src_MemoryAppender__WEBPACK_IMPORTED_MODULE_3__["default"],
	InteligentBrowserAppender : _src_InteligentBrowserAppender__WEBPACK_IMPORTED_MODULE_2__["default"],
	LogLevel : _src_LogLevel__WEBPACK_IMPORTED_MODULE_4__["default"],
	Logger : _src_Logger__WEBPACK_IMPORTED_MODULE_5__["default"],
	LoggerFactory : _src_LoggerFactory__WEBPACK_IMPORTED_MODULE_6__["default"]
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci1idW5kbGUtZGVmYXVsdGpzLWxvZ2dpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGtDO0FBQ0E7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZEQUFvQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLHdEQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVZO0FBQ0E7QUFDUTs7O0FBRzFDLDhCQUE4QixpREFBUTtBQUN0QztBQUNBLE1BQU0sdURBQWM7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxRUFBc0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQWM7QUFDcEI7QUFDQSxXQUFXLHNEQUFhO0FBQ3hCO0FBQ0EsV0FBVyxzREFBYTtBQUN4QjtBQUNBLFdBQVcsdURBQWM7QUFDekI7QUFDQSxXQUFXLHVEQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBaUI7QUFDakIsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OztBQzNDVztBQUNROztBQUUxQztBQUNBLDJCQUEyQixpREFBUTtB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QUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0Q7QUFDTjtBQUMwQjtBQUN0QjtBQUNaO0FBQ0o7QUFDYztBQUNoRDtBQUNBLDJDQUEyQyxTQUFJO0FBQy9DO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQSxtQkFBbUIsNERBQWU7QUFDbEMsb0JBQW9CLDREQUFlO0FBQ25DLGdCQUFnQix5REFBWTtBQUM1QixrQkFBa0IsMkRBQWM7QUFDaEMsNkJBQTZCLHNFQUF5QjtBQUN0RCxZQUFZLHFEQUFRO0FBQ3BCLFVBQVUsbURBQU07QUFDaEIsaUJBQWlCLDBEQUFhO0FBQzlCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtbG9nZ2luZy8uL3NyYy9BcHBlbmRlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtbG9nZ2luZy8uL3NyYy9Db25maWcuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWxvZ2dpbmcvLi9zcmMvQ29uc29sZUFwcGVuZGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nLy4vc3JjL0h0bWxBcHBlbmRlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtbG9nZ2luZy8uL3NyYy9JbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nLy4vc3JjL0xvZ0xldmVsLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nLy4vc3JjL0xvZ2dlci5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtbG9nZ2luZy8uL3NyYy9Mb2dnZXJGYWN0b3J5LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nLy4vc3JjL01lbW9yeUFwcGVuZGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nLy4vc3JjL3V0aWxzL0RhdGVVdGlscy5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtbG9nZ2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtbG9nZ2luZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWxvZ2dpbmcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtbG9nZ2luZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWxvZ2dpbmcvLi9icm93c2VyLWJ1bmRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUFBFTkRFUlMgPSBuZXcgTWFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGVuZGVyIHtcblx0c3RhdGljIGdldEFwcGVuZGVyKG5hbWUpIHtcblx0XHRyZXR1cm4gQVBQRU5ERVJTLmdldChuYW1lKTtcblx0fVxuXG5cdHN0YXRpYyByZWdpc3RlcihuYW1lLCBhcHBlbmRlcikge1xuXHRcdEFQUEVOREVSUy5zZXQobmFtZSwgYXBwZW5kZXIpO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdGxvZ01lc3NhZ2UoYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBhTG9nZ2VyTmFtZSwgYURhdGUsIGFMb2dMZXZlbCkge31cbn1cbiIsImltcG9ydCBMb2dMZXZlbCBmcm9tIFwiLi9Mb2dMZXZlbFwiO1xuaW1wb3J0IEFwcGVuZGVyIGZyb20gXCIuL0FwcGVuZGVyXCI7XG5cbmNvbnN0IERFRkFVTFRDT05GSUcgPSB7XG5cdGZpbHRlcjogXCJcIixcblx0bG9nTGV2ZWw6IFwiTk9MT0dcIixcblx0YXBwZW5kZXJzOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkQ29uZmlnID0gYXN5bmMgKGNvbmZpZykgPT4ge1xuXHRpZiAoY29uZmlnIGluc3RhbmNlb2YgQXJyYXkpIHJldHVybiBjb25maWc7XG5cdGVsc2UgaWYgKHR5cGVvZiBjb25maWcgPT09IFwic3RyaW5nXCIpIHJldHVybiBsb2FkUmVtb3RlKGNvbmZpZyk7XG5cblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbbG9nZ2luZy1wcm9wZXJ0aWVzXVwiKTtcblx0aWYgKGVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJsb2dnaW5nLXByb3BlcnRpZXNcIikpIHtcblx0XHRjb25maWcgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImxvZ2dpbmctcHJvcGVydGllc1wiKTtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShjb25maWcpO1xuXHR9XG59O1xuXG5jb25zdCBsb2FkUmVtb3RlID0gYXN5bmMgKHVybCkgPT4ge1xuXHRsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZikpO1xuXHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgZmluZENvbmZpZyA9IChuYW1lLCBkYXRhKSA9PiB7XG5cdGxldCBkZWZhdWx0Q29uZmlnID0gREVGQVVMVENPTkZJRztcblx0bGV0IGFjdHVhbENvbmZpZyA9IGRlZmF1bHRDb25maWc7XG5cdGZvciAobGV0IGNvbmZpZyBvZiBkYXRhKSB7XG5cdFx0aWYgKGlzQ29uZmlnQWN0aXYobmFtZSwgY29uZmlnLCBhY3R1YWxDb25maWcpKSBhY3R1YWxDb25maWcgPSBjb25maWc7XG5cdFx0ZWxzZSBpZiAoIWNvbmZpZy5maWx0ZXIpIGRlZmF1bHRDb25maWcgPSBjb25maWc7XG5cdFx0aWYgKGFjdHVhbENvbmZpZyAhPSBudWxsICYmIGFjdHVhbENvbmZpZy5maWx0ZXIgPT0gbmFtZSkgcmV0dXJuIGFjdHVhbENvbmZpZztcblx0fVxuXG5cdHJldHVybiBhY3R1YWxDb25maWcgfHwgZGVmYXVsdENvbmZpZztcbn07XG5cbmNvbnN0IGlzQ29uZmlnQWN0aXYgPSAobmFtZSwgY29uZmlnLCBhY3R1YWxDb25maWcpID0+IHtcblx0aWYgKGNvbmZpZyAmJiBhY3R1YWxDb25maWcuZmlsdGVyLmxlbmd0aCA+PSBjb25maWcuZmlsdGVyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gbmFtZS5zZWFyY2goY29uZmlnLmZpbHRlcikgPT0gMDtcbn07XG5cbmNvbnN0IGdldEFwcGVuZGVycyA9IChhcHBlbmRlcnMpID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gW107XG5cdGZvciAobGV0IGtleSBvZiBhcHBlbmRlcnMpIHtcblx0XHRjb25zdCBhcHBlbmRlciA9IEFwcGVuZGVyLmdldEFwcGVuZGVyKGtleSk7XG5cdFx0aWYgKGFwcGVuZGVyKSByZXN1bHQucHVzaChhcHBlbmRlcik7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuY2xhc3MgQ29uZmlnIHtcblx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0dGhpcy5kYXRhID0gbG9hZENvbmZpZyhjb25maWcpO1xuXHR9XG5cblx0YXN5bmMgbG9nZ2VyQ29uZmlnKG5hbWUpIHtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5kYXRhO1xuXHRcdGNvbnN0IGNvbmZpZyA9IGZpbmRDb25maWcobmFtZSwgZGF0YSk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0ZmlsdGVyOiBjb25maWcuZmlsdGVyLFxuXHRcdFx0bG9nTGV2ZWw6IExvZ0xldmVsLmxvb2t1cChjb25maWcubG9nTGV2ZWwpLFxuXHRcdFx0YXBwZW5kZXJzOiBnZXRBcHBlbmRlcnMoY29uZmlnLmFwcGVuZGVycyksXG5cdFx0fTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWc7XG4iLCJpbXBvcnQgQXBwZW5kZXIgZnJvbSBcIi4vQXBwZW5kZXJcIjtcbmltcG9ydCBMb2dMZXZlbCBmcm9tIFwiLi9Mb2dMZXZlbFwiO1xuaW1wb3J0IERhdGVVdGlscyBmcm9tIFwiLi91dGlscy9EYXRlVXRpbHNcIjtcblxuXG5jbGFzcyBDb25zb2xlQXBwZW5kZXIgZXh0ZW5kcyBBcHBlbmRlcntcblx0bG9nTWVzc2FnZSAoYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBhTG9nZ2VyTmFtZSwgYURhdGUsIGFMb2dMZXZlbCl7XG5cdFx0aWYgKExvZ0xldmVsLk5PTE9HID09IGFMb2dMZXZlbClcblx0XHRcdHJldHVybjtcblx0XHRsZXQgbG9nID0gW107XG5cdFx0aWYgKGFEYXRlKVxuXHRcdFx0bG9nLnB1c2goRGF0ZVV0aWxzLmRhdGVBc1N0cmluZyhhRGF0ZSksIFwiIFwiKTtcblx0XHRcblx0XHRsb2cucHVzaChcIioqKlwiLCBhTG9nTGV2ZWwudGl0bGUsIFwiKioqIFwiLCBhTG9nZ2VyTmFtZSk7XG5cdFx0XG5cdFx0aWYgKGFNZXNzYWdlKSB7XG5cdFx0XHRsb2cucHVzaChcIiAtPiBcIik7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShhTWVzc2FnZSkpXG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGxvZywgYU1lc3NhZ2UpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRsb2cucHVzaChhTWVzc2FnZSk7XG5cdFx0fVxuXHRcdGlmIChhbkV4Y2VwdGlvbilcblx0XHRcdGxvZy5wdXNoKFwiOiBcIiwgYW5FeGNlcHRpb24pO1xuXHRcdFxuXHRcdGxldCBhcHBlbmRlciA9IGNvbnNvbGUubG9nO1x0XHRcblx0XHRpZiAoTG9nTGV2ZWwuRVJST1IgPT0gYUxvZ0xldmVsKSBcblx0XHRcdGFwcGVuZGVyID0gY29uc29sZS5lcnJvcjsgXG5cdFx0ZWxzZSBpZiAoTG9nTGV2ZWwuV0FSTiA9PSBhTG9nTGV2ZWwpXG5cdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUud2Fybjtcblx0XHRlbHNlIGlmIChMb2dMZXZlbC5JTkZPID09IGFMb2dMZXZlbClcblx0XHRcdGFwcGVuZGVyID0gY29uc29sZS5pbmZvO1xuXHRcdGVsc2UgaWYgKExvZ0xldmVsLkRFQlVHID09IGFMb2dMZXZlbClcblx0XHRcdGFwcGVuZGVyID0gY29uc29sZS5kZWJ1Zztcblx0XHRlbHNlIGlmIChMb2dMZXZlbC5UUkFDRSA9PSBhTG9nTGV2ZWwpXG5cdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUudHJhY2U7XG5cdFx0XG5cdFx0YXBwZW5kZXIuYXBwbHkoY29uc29sZSwgbG9nKTtcdFxuXHR9XG59XG5cbmNvbnN0IElOU1RBTkNFID0gbmV3IENvbnNvbGVBcHBlbmRlcigpO1xuQXBwZW5kZXIucmVnaXN0ZXIoXCJDb25zb2xlQXBwZW5kZXJcIiwgSU5TVEFOQ0UpO1xuZXhwb3J0IGRlZmF1bHQgSU5TVEFOQ0U7IiwiaW1wb3J0IEFwcGVuZGVyIGZyb20gXCIuL0FwcGVuZGVyXCI7XG5pbXBvcnQgRGF0ZVV0aWxzIGZyb20gXCIuL3V0aWxzL0RhdGVVdGlsc1wiO1xuXG5jb25zdCBDT05UQUlORVIgPSBcIltkYXRhLWxvZ11cIjtcbmNsYXNzIEh0bWxBcHBlbmRlciBleHRlbmRzIEFwcGVuZGVyIHtcblx0aXNBdmFpbGFibGUoKSB7XG5cdFx0cmV0dXJuICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05UQUlORVIpO1xuXHR9XG5cdGxvZ01lc3NhZ2UoYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBhTG9nZ2VyTmFtZSwgYURhdGUsIGFMb2dMZXZlbCkge1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ09OVEFJTkVSKTtcblx0XHRpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xuXG5cdFx0Y29uc3QgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibG9nLWVudHJ5IFwiICsgYUxvZ0xldmVsLnRpdGxlKTtcblx0XHRsZXQgbWVzc2FnZSA9IERhdGVVdGlscy5kYXRlQXNTdHJpbmcoYURhdGUgfHwgbmV3IERhdGUoKSkgKyBcIiAqKipcIiArIGFMb2dMZXZlbC50aXRsZSArIFwiKioqIFwiICsgYUxvZ2dlck5hbWUgKyBcIlwiO1xuXG5cdFx0aWYgKGFNZXNzYWdlKSBtZXNzYWdlICs9IFwiIC0+IFwiICsgYU1lc3NhZ2U7XG5cdFx0aWYgKGFuRXhjZXB0aW9uKSBtZXNzYWdlICs9IFwiOiBcIiArIGFuRXhjZXB0aW9uO1xuXG5cdFx0ZW50cnkudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuXHRcdHJldHVybiBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW50cnkpO1xuXHR9XG59XG5cbmNvbnN0IElOU1RBTkNFID0gbmV3IEh0bWxBcHBlbmRlcigpO1xuQXBwZW5kZXIucmVnaXN0ZXIoXCJIdG1sQXBwZW5kZXJcIiwgSU5TVEFOQ0UpO1xuZXhwb3J0IGRlZmF1bHQgSU5TVEFOQ0U7XG4iLCJpbXBvcnQgQXBwZW5kZXIgZnJvbSBcIi4vQXBwZW5kZXJcIjtcbmltcG9ydCBIdG1sQXBwZW5kZXIgZnJvbSBcIi4vSHRtbEFwcGVuZGVyXCI7XG5pbXBvcnQgQ29uc29sZUFwcGVuZGVyIGZyb20gXCIuL0NvbnNvbGVBcHBlbmRlclwiO1xuaW1wb3J0IE1lbW9yeUFwcGVuZGVyIGZyb20gXCIuL01lbW9yeUFwcGVuZGVyXCI7XG5cbmxldCBhcHBlbmRlcjtcbmNvbnN0IGdldEFwcGVuZGVyID0gKCkgPT4ge1xuXHRpZiAoYXBwZW5kZXIpIHtcdFx0XG5cdFx0aWYgKGNvbnNvbGUpXG5cdFx0XHRhcHBlbmRlciA9IENvbnNvbGVBcHBlbmRlcjtcblx0XHRlbHNlIGlmIChIdG1sQXBwZW5kZXIuaXNBdmFpbGFibGUoKSlcblx0XHRcdGFwcGVuZGVyID0gSHRtbEFwcGVuZGVyO1xuXHRcdGVsc2Vcblx0XHRcdGFwcGVuZGVyID0gTWVtb3J5QXBwZW5kZXI7XG5cdH1cblx0XG5cdHJldHVybiBhcHBlbmRlcjtcbn07XG5jbGFzcyBJbnRlbGxpZ2VudEJyb3dzZXJBcHBlbmRlciBleHRlbmRzIEFwcGVuZGVyIHtcblx0bG9nTWVzc2FnZShhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKSB7XG5cdFx0Z2V0QXBwZW5kZXIoKS5sb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpO1xuXHR9XG59O1xuXG5jb25zdCBJTlNUQU5DRSA9IG5ldyBJbnRlbGxpZ2VudEJyb3dzZXJBcHBlbmRlcigpO1xuQXBwZW5kZXIucmVnaXN0ZXIoXCJJbnRlbGxpZ2VudEJyb3dzZXJBcHBlbmRlclwiLCBJTlNUQU5DRSk7XG5leHBvcnQgZGVmYXVsdCBJTlNUQU5DRTtcbiIsImNsYXNzIExldmVsIHtcclxuXHRjb25zdHJ1Y3RvcihhT3JkZXIsIGFUaXRsZSkge1xyXG5cdFx0dGhpcy5vcmRlciA9IGFPcmRlcjtcclxuXHRcdHRoaXMudGl0bGUgPSBhVGl0bGU7XHJcblx0fVxyXG5cclxuXHRpc0luY2x1ZGVkKGFMb2dMZXZlbCkge1xyXG5cdFx0cmV0dXJuIHRoaXMub3JkZXIgPj0gYUxvZ0xldmVsLm9yZGVyO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBOT0xPRyA9IG5ldyBMZXZlbCgwLCBcIk5PTE9HXCIpO1xyXG5leHBvcnQgY29uc3QgRVJST1IgPSBuZXcgTGV2ZWwoMSwgXCJFUlJPUlwiKTtcclxuZXhwb3J0IGNvbnN0IFdBUk4gPSBuZXcgTGV2ZWwoMiwgXCJXQVJOXCIpO1xyXG5leHBvcnQgY29uc3QgSU5GTyA9IG5ldyBMZXZlbCgzLCBcIklORk9cIik7XHJcbmV4cG9ydCBjb25zdCBERUJVRyA9IG5ldyBMZXZlbCg0LCBcIkRFQlVHXCIpO1xyXG5leHBvcnQgY29uc3QgVFJBQ0UgPSBuZXcgTGV2ZWwoNSwgXCJUUkFDRVwiKTtcclxuXHJcbmNvbnN0IExvZ0xldmVsID0ge1xyXG5cdE5PTE9HLFxyXG5cdEVSUk9SLFxyXG5cdFdBUk4sXHJcblx0SU5GTyxcclxuXHRERUJVRyxcclxuXHRUUkFDRSxcclxuXHRsb29rdXA6IChhTGV2ZWwpID0+IHtcclxuXHRcdGlmICh0eXBlb2YgYUxldmVsICE9PSBcInN0cmluZ1wiKSByZXR1cm4gTk9MT0c7XHJcblx0XHRyZXR1cm4gTG9nTGV2ZWxbYUxldmVsLnRvVXBwZXJDYXNlKCldIHx8IE5PTE9HO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTG9nTGV2ZWw7XHJcblxyXG4iLCJpbXBvcnQgTG9nTGV2ZWwgZnJvbSBcIi4vTG9nTGV2ZWxcIjtcblxuY2xhc3MgTG9nZ2VyIHtcblx0Y29uc3RydWN0b3IobmFtZSwgY29uZmlnKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLl9fY29uZmlnX18gPSBjb25maWc7XG5cdH1cblxuXHRnZXQgY29uZmlnKCkge1xuXHRcdHJldHVybiB0aGlzLl9fY29uZmlnX187XG5cdH1cblxuXHRzZXQgY29uZmlnKGNvbmZpZykge1xuXHRcdHRoaXMuX19jb25maWdfXyA9IGNvbmZpZztcblx0fVxuXG5cdGxvZ0Vycm9yKGFNZXNzYWdlLCBhRXhjZXB0aW9uKSB7XG5cdFx0cmV0dXJuIHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBMb2dMZXZlbC5FUlJPUik7XG5cdH1cblxuXHRsb2dXYXJuKGFNZXNzYWdlLCBhRXhjZXB0aW9uKSB7XG5cdFx0dGhpcy5sb2coYU1lc3NhZ2UsIGFFeGNlcHRpb24sIExvZ0xldmVsLldBUk4pO1xuXHR9XG5cblx0bG9nSW5mbyhhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xuXHRcdHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBMb2dMZXZlbC5JTkZPKTtcblx0fVxuXG5cdGxvZ0RlYnVnKGFNZXNzYWdlLCBhRXhjZXB0aW9uKSB7XG5cdFx0dGhpcy5sb2coYU1lc3NhZ2UsIGFFeGNlcHRpb24sIExvZ0xldmVsLkRFQlVHKTtcblx0fVxuXG5cdGFzeW5jbG9nVHJhY2UoYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcblx0XHR0aGlzLmxvZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbiwgTG9nTGV2ZWwuVFJBQ0UpO1xuXHR9XG5cblx0YXN5bmMgbG9nKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ0xldmVsKSB7XG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMubmFtZTtcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblxuXHRcdHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgY29uZmlnID0gYXdhaXQgdGhpcy5jb25maWc7XG5cdFx0XHRpZiAoIWNvbmZpZy5sb2dMZXZlbC5pc0luY2x1ZGVkKGFMb2dMZXZlbCkpIHJldHVybjtcblx0XHRcdGNvbnN0IHsgYXBwZW5kZXJzIH0gPSBjb25maWc7XG5cdFx0XHRmb3IgKGxldCBhcHBlbmRlciBvZiBhcHBlbmRlcnMpIGFwcGVuZGVyLmxvZ01lc3NhZ2UoYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBuYW1lLCBkYXRlLCBhTG9nTGV2ZWwpO1xuXHRcdH0sIDEwMCk7XG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2dlcjtcbiIsImltcG9ydCBDb25maWcgZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuL0xvZ2dlclwiO1xuXG5jb25zdCBMT0dHRVJNQVAgPSBuZXcgTWFwKCk7XG5sZXQgQ09ORklHID0gbmV3IENvbmZpZygpO1xuY29uc3QgdXBkYXRlTG9nZ2VyID0gKCkgPT4ge1xuXHRmb3IgKGxldCBbbmFtZSwgbG9nZ2VyXSBvZiBMT0dHRVJNQVApIGxvZ2dlci5jb25maWcgPSBDT05GSUcubG9nZ2VyQ29uZmlnKG5hbWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IG5ld0xvZ2dlciA9IChuYW1lKSA9PiB7XG5cdGlmICghTE9HR0VSTUFQLmhhcyhuYW1lKSkgTE9HR0VSTUFQLnNldChuYW1lLCBuZXcgTG9nZ2VyKG5hbWUsIENPTkZJRy5sb2dnZXJDb25maWcobmFtZSkpKTtcblxuXHRyZXR1cm4gTE9HR0VSTUFQLmdldChuYW1lKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBhc3luYyBmdW5jdGlvbihjb25maWcpIHtcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkgcmV0dXJuIENPTkZJRy5kYXRhO1xuXG5cdENPTkZJRyA9IG5ldyBDb25maWcoYXdhaXQgY29uZmlnKTtcblx0dXBkYXRlTG9nZ2VyKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IG5ld0xvZ2dlciwgY29uZmlnIH07XG4iLCJpbXBvcnQgQXBwZW5kZXIgZnJvbSBcIi4vQXBwZW5kZXJcIjtcblxuY29uc3QgR0xPQkFMID0gc2VsZiB8fCBnbG9iYWwgfHwgd2luZG93IHx8IHRoaXMgfHwge307XG5jb25zdCBMT0cgPSAoKSA9PiB7XG5cdGlmKCEoR0xPQkFMLl9fTE9HX18gaW5zdGFuY2VvZiBBcnJheSkpXG5cdFx0R0xPQkFMLl9fTE9HX18gPSBbXTtcblx0cmV0dXJuIEdMT0JBTC5fX0xPR19fO1xufSAgO1xuXG5cblxuY2xhc3MgTWVtb3J5QXBwZW5kZXIgZXh0ZW5kcyBBcHBlbmRlciB7XG5cdGxvZ01lc3NhZ2UoYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKSB7XG5cdFx0Y29uc3QgbG9nID0gTE9HKCk7XHRcdFxuXHRcdGxvZy5wdXNoKHtcblx0XHRcdFwiZGF0ZVwiIDogYURhdGUsXG5cdFx0XHRcImxvZ0xldmVsXCIgOiBhTG9nTGV2ZWwsXG5cdFx0XHRcImxvZ2dlck5hbWVcIiA6IGFMb2dnZXJOYW1lLFxuXHRcdFx0XCJtZXNzYWdlXCIgOiBhTWVzc2FnZSxcblx0XHRcdFwiZXhjZXB0aW9uXCIgOiBhbkV4Y2VwdGlvblxuXHRcdH0pO1xuXHR9XG59OyBcblxuY29uc3QgSU5TVEFOQ0UgPSBuZXcgTWVtb3J5QXBwZW5kZXIoKTtcbkFwcGVuZGVyLnJlZ2lzdGVyKFwiTWVtb3J5QXBwZW5kZXJcIiwgSU5TVEFOQ0UpO1xuZXhwb3J0IGRlZmF1bHQgSU5TVEFOQ0U7XG4iLCJjb25zdCBEYXRlVXRpbHMgPSB7XHJcblx0XHRkYXRlQXNTdHJpbmcgOiBmdW5jdGlvbihhRGF0ZSl7XHJcblx0XHRcdGlmKCFhRGF0ZSBpbnN0YW5jZW9mIERhdGUpXHJcblx0XHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gXCJcIjtcclxuXHRcdFx0XHJcblx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRGdWxsWWVhcigpICsgXCIuXCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldE1vbnRoKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0TW9udGgoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0TW9udGgoKTtcclxuXHRcdFx0cmVzdWx0ICs9IFwiLlwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXREYXRlKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0RGF0ZSgpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXREYXRlKCk7XHRcdFxyXG5cdFx0XHRyZXN1bHQgKz0gIFwiIFwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRIb3VycygpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldEhvdXJzKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldEhvdXJzKCk7XHJcblx0XHRcdHJlc3VsdCArPSBcIjpcIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0TWludXRlcygpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0TWludXRlcygpO1xyXG5cdFx0XHRyZXN1bHQgKz0gXCI6XCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldFNlY29uZHMoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXRTZWNvbmRzKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldFNlY29uZHMoKTtcclxuXHRcdFx0cmVzdWx0ICs9IFwiOlwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRNaWxsaXNlY29uZHMoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwMFwiICsgYURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcblx0XHRcdGlmKGFEYXRlLmdldE1pbGxpc2Vjb25kcygpIDwgMTAwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEYXRlVXRpbHM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDb25zb2xlQXBwZW5kZXIgZnJvbSBcIi4vc3JjL0NvbnNvbGVBcHBlbmRlclwiO1xyXG5pbXBvcnQgSHRtbEFwcGVuZGVyIGZyb20gXCIuL3NyYy9IdG1sQXBwZW5kZXJcIjtcclxuaW1wb3J0IEludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIgZnJvbSBcIi4vc3JjL0ludGVsaWdlbnRCcm93c2VyQXBwZW5kZXJcIjtcclxuaW1wb3J0IE1lbW9yeUFwcGVuZGVyIGZyb20gXCIuL3NyYy9NZW1vcnlBcHBlbmRlclwiO1xyXG5pbXBvcnQgTG9nTGV2ZWwgZnJvbSBcIi4vc3JjL0xvZ0xldmVsXCI7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4vc3JjL0xvZ2dlclwiO1xyXG5pbXBvcnQgTG9nZ2VyRmFjdG9yeSBmcm9tIFwiLi9zcmMvTG9nZ2VyRmFjdG9yeVwiO1xyXG5cclxuY29uc3QgZ2xvYmFsID0gc2VsZiB8fCBnbG9iYWwgfHwgd2luZG93IHx8IHRoaXMgfHwge307XHJcbmdsb2JhbC5kZWZhdWx0anMgPSBnbG9iYWwuZGVmYXVsdGpzIHx8IHt9O1xyXG5nbG9iYWwuZGVmYXVsdGpzLmxvZ2dpbmcgPSBnbG9iYWwuZGVmYXVsdGpzLmxvZ2dpbmcgfHwge1xyXG5cdFZFUlNJT04gOiBcIiR7dmVyc2lvbn1cIixcclxuXHR1dGlscyA6IHV0aWxzLFxyXG5cdENvbnNvbGVBcHBlbmRlciA6IENvbnNvbGVBcHBlbmRlcixcclxuXHRDb25zb2xlbkFwcGVuZGVyIDogQ29uc29sZUFwcGVuZGVyLFxyXG5cdEh0bWxBcHBlbmRlciA6IEh0bWxBcHBlbmRlcixcclxuXHRNZW1vcnlBcHBlbmRlciA6IE1lbW9yeUFwcGVuZGVyLFxyXG5cdEludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIgOiBJbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyLFxyXG5cdExvZ0xldmVsIDogTG9nTGV2ZWwsXHJcblx0TG9nZ2VyIDogTG9nZ2VyLFxyXG5cdExvZ2dlckZhY3RvcnkgOiBMb2dnZXJGYWN0b3J5XHJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9