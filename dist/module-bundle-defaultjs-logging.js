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

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DateUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateUtils */ "./src/utils/DateUtils.js");

const utils = {
		DateUtils : _DateUtils__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utils);

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
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "utils": () => (/* reexport safe */ _src_utils__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Appender": () => (/* reexport safe */ _src_Appender__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ConsoleAppender": () => (/* reexport safe */ _src_ConsoleAppender__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "HtmlAppender": () => (/* reexport safe */ _src_HtmlAppender__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "InteligentBrowserAppender": () => (/* reexport safe */ _src_InteligentBrowserAppender__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "MemoryAppender": () => (/* reexport safe */ _src_MemoryAppender__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "LogLevel": () => (/* reexport safe */ _src_LogLevel__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "Logger": () => (/* reexport safe */ _src_Logger__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "LoggerFactory": () => (/* reexport safe */ _src_LoggerFactory__WEBPACK_IMPORTED_MODULE_8__["default"])
/* harmony export */ });
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/utils */ "./src/utils/index.js");
/* harmony import */ var _src_Appender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Appender */ "./src/Appender.js");
/* harmony import */ var _src_ConsoleAppender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/ConsoleAppender */ "./src/ConsoleAppender.js");
/* harmony import */ var _src_HtmlAppender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/HtmlAppender */ "./src/HtmlAppender.js");
/* harmony import */ var _src_InteligentBrowserAppender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/InteligentBrowserAppender */ "./src/InteligentBrowserAppender.js");
/* harmony import */ var _src_MemoryAppender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/MemoryAppender */ "./src/MemoryAppender.js");
/* harmony import */ var _src_LogLevel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/LogLevel */ "./src/LogLevel.js");
/* harmony import */ var _src_Logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/Logger */ "./src/Logger.js");
/* harmony import */ var _src_LoggerFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/LoggerFactory */ "./src/LoggerFactory.js");












})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLWJ1bmRsZS1kZWZhdWx0anMtbG9nZ2luZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNka0M7QUFDQTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkRBQW9CO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsd0RBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRVk7QUFDQTtBQUNROzs7QUFHMUMsOEJBQThCLGlEQUFRO0FBQ3RDO0FBQ0EsTUFBTSx1REFBYztBQUNwQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFFQUFzQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBYztBQUNwQjtBQUNBLFdBQVcsc0RBQWE7QUFDeEI7QUFDQSxXQUFXLHNEQUFhO0FBQ3hCO0FBQ0EsV0FBVyx1REFBYztBQUN6QjtBQUNBLFdBQVcsdURBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUFpQjtBQUNqQixpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FDM0NXO0FBQ1E7O0FBRTFDO0FBQ0EsMkJBQTJCLGlEQUFRO0FB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Qzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDTTtBQUNjO0FBQ047QUFDMEI7QUFDdEI7QUFDWjtBQUNKO0FBQ2M7QUFDaEQ7QUFXRSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nLy4vc3JjL0FwcGVuZGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtbG9nZ2luZy8uL3NyYy9Db25zb2xlQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWxvZ2dpbmcvLi9zcmMvSHRtbEFwcGVuZGVyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nLy4vc3JjL0ludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWxvZ2dpbmcvLi9zcmMvTG9nTGV2ZWwuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWxvZ2dpbmcvLi9zcmMvTG9nZ2VyLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nLy4vc3JjL0xvZ2dlckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWxvZ2dpbmcvLi9zcmMvTWVtb3J5QXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWxvZ2dpbmcvLi9zcmMvdXRpbHMvRGF0ZVV0aWxzLmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtbG9nZ2luZy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1sb2dnaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGRlZmF1bHQtanMvZGVmYXVsdGpzLWxvZ2dpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AZGVmYXVsdC1qcy9kZWZhdWx0anMtbG9nZ2luZy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQUEVOREVSUyA9IG5ldyBNYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwZW5kZXIge1xuXHRzdGF0aWMgZ2V0QXBwZW5kZXIobmFtZSkge1xuXHRcdHJldHVybiBBUFBFTkRFUlMuZ2V0KG5hbWUpO1xuXHR9XG5cblx0c3RhdGljIHJlZ2lzdGVyKG5hbWUsIGFwcGVuZGVyKSB7XG5cdFx0QVBQRU5ERVJTLnNldChuYW1lLCBhcHBlbmRlcik7XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bG9nTWVzc2FnZShhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKSB7fVxufVxuIiwiaW1wb3J0IExvZ0xldmVsIGZyb20gXCIuL0xvZ0xldmVsXCI7XG5pbXBvcnQgQXBwZW5kZXIgZnJvbSBcIi4vQXBwZW5kZXJcIjtcblxuY29uc3QgREVGQVVMVENPTkZJRyA9IHtcblx0ZmlsdGVyOiBcIlwiLFxuXHRsb2dMZXZlbDogXCJOT0xPR1wiLFxuXHRhcHBlbmRlcnM6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRDb25maWcgPSBhc3luYyAoY29uZmlnKSA9PiB7XG5cdGlmIChjb25maWcgaW5zdGFuY2VvZiBBcnJheSkgcmV0dXJuIGNvbmZpZztcblx0ZWxzZSBpZiAodHlwZW9mIGNvbmZpZyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGxvYWRSZW1vdGUoY29uZmlnKTtcblxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltsb2dnaW5nLXByb3BlcnRpZXNdXCIpO1xuXHRpZiAoZWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImxvZ2dpbmctcHJvcGVydGllc1wiKSkge1xuXHRcdGNvbmZpZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwibG9nZ2luZy1wcm9wZXJ0aWVzXCIpO1xuXHRcdHJldHVybiBKU09OLnBhcnNlKGNvbmZpZyk7XG5cdH1cbn07XG5cbmNvbnN0IGxvYWRSZW1vdGUgPSBhc3luYyAodXJsKSA9PiB7XG5cdGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKSk7XG5cdHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jb25zdCBmaW5kQ29uZmlnID0gKG5hbWUsIGRhdGEpID0+IHtcblx0bGV0IGRlZmF1bHRDb25maWcgPSBERUZBVUxUQ09ORklHO1xuXHRsZXQgYWN0dWFsQ29uZmlnID0gZGVmYXVsdENvbmZpZztcblx0Zm9yIChsZXQgY29uZmlnIG9mIGRhdGEpIHtcblx0XHRpZiAoaXNDb25maWdBY3RpdihuYW1lLCBjb25maWcsIGFjdHVhbENvbmZpZykpIGFjdHVhbENvbmZpZyA9IGNvbmZpZztcblx0XHRlbHNlIGlmICghY29uZmlnLmZpbHRlcikgZGVmYXVsdENvbmZpZyA9IGNvbmZpZztcblx0XHRpZiAoYWN0dWFsQ29uZmlnICE9IG51bGwgJiYgYWN0dWFsQ29uZmlnLmZpbHRlciA9PSBuYW1lKSByZXR1cm4gYWN0dWFsQ29uZmlnO1xuXHR9XG5cblx0cmV0dXJuIGFjdHVhbENvbmZpZyB8fCBkZWZhdWx0Q29uZmlnO1xufTtcblxuY29uc3QgaXNDb25maWdBY3RpdiA9IChuYW1lLCBjb25maWcsIGFjdHVhbENvbmZpZykgPT4ge1xuXHRpZiAoY29uZmlnICYmIGFjdHVhbENvbmZpZy5maWx0ZXIubGVuZ3RoID49IGNvbmZpZy5maWx0ZXIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiBuYW1lLnNlYXJjaChjb25maWcuZmlsdGVyKSA9PSAwO1xufTtcblxuY29uc3QgZ2V0QXBwZW5kZXJzID0gKGFwcGVuZGVycykgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBbXTtcblx0Zm9yIChsZXQga2V5IG9mIGFwcGVuZGVycykge1xuXHRcdGNvbnN0IGFwcGVuZGVyID0gQXBwZW5kZXIuZ2V0QXBwZW5kZXIoa2V5KTtcblx0XHRpZiAoYXBwZW5kZXIpIHJlc3VsdC5wdXNoKGFwcGVuZGVyKTtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5jbGFzcyBDb25maWcge1xuXHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHR0aGlzLmRhdGEgPSBsb2FkQ29uZmlnKGNvbmZpZyk7XG5cdH1cblxuXHRhc3luYyBsb2dnZXJDb25maWcobmFtZSkge1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmRhdGE7XG5cdFx0Y29uc3QgY29uZmlnID0gZmluZENvbmZpZyhuYW1lLCBkYXRhKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRmaWx0ZXI6IGNvbmZpZy5maWx0ZXIsXG5cdFx0XHRsb2dMZXZlbDogTG9nTGV2ZWwubG9va3VwKGNvbmZpZy5sb2dMZXZlbCksXG5cdFx0XHRhcHBlbmRlcnM6IGdldEFwcGVuZGVycyhjb25maWcuYXBwZW5kZXJzKSxcblx0XHR9O1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZztcbiIsImltcG9ydCBBcHBlbmRlciBmcm9tIFwiLi9BcHBlbmRlclwiO1xuaW1wb3J0IExvZ0xldmVsIGZyb20gXCIuL0xvZ0xldmVsXCI7XG5pbXBvcnQgRGF0ZVV0aWxzIGZyb20gXCIuL3V0aWxzL0RhdGVVdGlsc1wiO1xuXG5cbmNsYXNzIENvbnNvbGVBcHBlbmRlciBleHRlbmRzIEFwcGVuZGVye1xuXHRsb2dNZXNzYWdlIChhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKXtcblx0XHRpZiAoTG9nTGV2ZWwuTk9MT0cgPT0gYUxvZ0xldmVsKVxuXHRcdFx0cmV0dXJuO1xuXHRcdGxldCBsb2cgPSBbXTtcblx0XHRpZiAoYURhdGUpXG5cdFx0XHRsb2cucHVzaChEYXRlVXRpbHMuZGF0ZUFzU3RyaW5nKGFEYXRlKSwgXCIgXCIpO1xuXHRcdFxuXHRcdGxvZy5wdXNoKFwiKioqXCIsIGFMb2dMZXZlbC50aXRsZSwgXCIqKiogXCIsIGFMb2dnZXJOYW1lKTtcblx0XHRcblx0XHRpZiAoYU1lc3NhZ2UpIHtcblx0XHRcdGxvZy5wdXNoKFwiIC0+IFwiKTtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGFNZXNzYWdlKSlcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkobG9nLCBhTWVzc2FnZSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGxvZy5wdXNoKGFNZXNzYWdlKTtcblx0XHR9XG5cdFx0aWYgKGFuRXhjZXB0aW9uKVxuXHRcdFx0bG9nLnB1c2goXCI6IFwiLCBhbkV4Y2VwdGlvbik7XG5cdFx0XG5cdFx0bGV0IGFwcGVuZGVyID0gY29uc29sZS5sb2c7XHRcdFxuXHRcdGlmIChMb2dMZXZlbC5FUlJPUiA9PSBhTG9nTGV2ZWwpIFxuXHRcdFx0YXBwZW5kZXIgPSBjb25zb2xlLmVycm9yOyBcblx0XHRlbHNlIGlmIChMb2dMZXZlbC5XQVJOID09IGFMb2dMZXZlbClcblx0XHRcdGFwcGVuZGVyID0gY29uc29sZS53YXJuO1xuXHRcdGVsc2UgaWYgKExvZ0xldmVsLklORk8gPT0gYUxvZ0xldmVsKVxuXHRcdFx0YXBwZW5kZXIgPSBjb25zb2xlLmluZm87XG5cdFx0ZWxzZSBpZiAoTG9nTGV2ZWwuREVCVUcgPT0gYUxvZ0xldmVsKVxuXHRcdFx0YXBwZW5kZXIgPSBjb25zb2xlLmRlYnVnO1xuXHRcdGVsc2UgaWYgKExvZ0xldmVsLlRSQUNFID09IGFMb2dMZXZlbClcblx0XHRcdGFwcGVuZGVyID0gY29uc29sZS50cmFjZTtcblx0XHRcblx0XHRhcHBlbmRlci5hcHBseShjb25zb2xlLCBsb2cpO1x0XG5cdH1cbn1cblxuY29uc3QgSU5TVEFOQ0UgPSBuZXcgQ29uc29sZUFwcGVuZGVyKCk7XG5BcHBlbmRlci5yZWdpc3RlcihcIkNvbnNvbGVBcHBlbmRlclwiLCBJTlNUQU5DRSk7XG5leHBvcnQgZGVmYXVsdCBJTlNUQU5DRTsiLCJpbXBvcnQgQXBwZW5kZXIgZnJvbSBcIi4vQXBwZW5kZXJcIjtcbmltcG9ydCBEYXRlVXRpbHMgZnJvbSBcIi4vdXRpbHMvRGF0ZVV0aWxzXCI7XG5cbmNvbnN0IENPTlRBSU5FUiA9IFwiW2RhdGEtbG9nXVwiO1xuY2xhc3MgSHRtbEFwcGVuZGVyIGV4dGVuZHMgQXBwZW5kZXIge1xuXHRpc0F2YWlsYWJsZSgpIHtcblx0XHRyZXR1cm4gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENPTlRBSU5FUik7XG5cdH1cblx0bG9nTWVzc2FnZShhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKSB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05UQUlORVIpO1xuXHRcdGlmICghY29udGFpbmVyKSByZXR1cm47XG5cblx0XHRjb25zdCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0ZW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsb2ctZW50cnkgXCIgKyBhTG9nTGV2ZWwudGl0bGUpO1xuXHRcdGxldCBtZXNzYWdlID0gRGF0ZVV0aWxzLmRhdGVBc1N0cmluZyhhRGF0ZSB8fCBuZXcgRGF0ZSgpKSArIFwiICoqKlwiICsgYUxvZ0xldmVsLnRpdGxlICsgXCIqKiogXCIgKyBhTG9nZ2VyTmFtZSArIFwiXCI7XG5cblx0XHRpZiAoYU1lc3NhZ2UpIG1lc3NhZ2UgKz0gXCIgLT4gXCIgKyBhTWVzc2FnZTtcblx0XHRpZiAoYW5FeGNlcHRpb24pIG1lc3NhZ2UgKz0gXCI6IFwiICsgYW5FeGNlcHRpb247XG5cblx0XHRlbnRyeS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG5cdFx0cmV0dXJuIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyeSk7XG5cdH1cbn1cblxuY29uc3QgSU5TVEFOQ0UgPSBuZXcgSHRtbEFwcGVuZGVyKCk7XG5BcHBlbmRlci5yZWdpc3RlcihcIkh0bWxBcHBlbmRlclwiLCBJTlNUQU5DRSk7XG5leHBvcnQgZGVmYXVsdCBJTlNUQU5DRTtcbiIsImltcG9ydCBBcHBlbmRlciBmcm9tIFwiLi9BcHBlbmRlclwiO1xuaW1wb3J0IEh0bWxBcHBlbmRlciBmcm9tIFwiLi9IdG1sQXBwZW5kZXJcIjtcbmltcG9ydCBDb25zb2xlQXBwZW5kZXIgZnJvbSBcIi4vQ29uc29sZUFwcGVuZGVyXCI7XG5pbXBvcnQgTWVtb3J5QXBwZW5kZXIgZnJvbSBcIi4vTWVtb3J5QXBwZW5kZXJcIjtcblxubGV0IGFwcGVuZGVyO1xuY29uc3QgZ2V0QXBwZW5kZXIgPSAoKSA9PiB7XG5cdGlmIChhcHBlbmRlcikge1x0XHRcblx0XHRpZiAoY29uc29sZSlcblx0XHRcdGFwcGVuZGVyID0gQ29uc29sZUFwcGVuZGVyO1xuXHRcdGVsc2UgaWYgKEh0bWxBcHBlbmRlci5pc0F2YWlsYWJsZSgpKVxuXHRcdFx0YXBwZW5kZXIgPSBIdG1sQXBwZW5kZXI7XG5cdFx0ZWxzZVxuXHRcdFx0YXBwZW5kZXIgPSBNZW1vcnlBcHBlbmRlcjtcblx0fVxuXHRcblx0cmV0dXJuIGFwcGVuZGVyO1xufTtcbmNsYXNzIEludGVsbGlnZW50QnJvd3NlckFwcGVuZGVyIGV4dGVuZHMgQXBwZW5kZXIge1xuXHRsb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpIHtcblx0XHRnZXRBcHBlbmRlcigpLmxvZ01lc3NhZ2UoYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBhTG9nZ2VyTmFtZSwgYURhdGUsIGFMb2dMZXZlbCk7XG5cdH1cbn07XG5cbmNvbnN0IElOU1RBTkNFID0gbmV3IEludGVsbGlnZW50QnJvd3NlckFwcGVuZGVyKCk7XG5BcHBlbmRlci5yZWdpc3RlcihcIkludGVsbGlnZW50QnJvd3NlckFwcGVuZGVyXCIsIElOU1RBTkNFKTtcbmV4cG9ydCBkZWZhdWx0IElOU1RBTkNFO1xuIiwiY2xhc3MgTGV2ZWwge1xyXG5cdGNvbnN0cnVjdG9yKGFPcmRlciwgYVRpdGxlKSB7XHJcblx0XHR0aGlzLm9yZGVyID0gYU9yZGVyO1xyXG5cdFx0dGhpcy50aXRsZSA9IGFUaXRsZTtcclxuXHR9XHJcblxyXG5cdGlzSW5jbHVkZWQoYUxvZ0xldmVsKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vcmRlciA+PSBhTG9nTGV2ZWwub3JkZXI7XHJcblx0fVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE5PTE9HID0gbmV3IExldmVsKDAsIFwiTk9MT0dcIik7XHJcbmV4cG9ydCBjb25zdCBFUlJPUiA9IG5ldyBMZXZlbCgxLCBcIkVSUk9SXCIpO1xyXG5leHBvcnQgY29uc3QgV0FSTiA9IG5ldyBMZXZlbCgyLCBcIldBUk5cIik7XHJcbmV4cG9ydCBjb25zdCBJTkZPID0gbmV3IExldmVsKDMsIFwiSU5GT1wiKTtcclxuZXhwb3J0IGNvbnN0IERFQlVHID0gbmV3IExldmVsKDQsIFwiREVCVUdcIik7XHJcbmV4cG9ydCBjb25zdCBUUkFDRSA9IG5ldyBMZXZlbCg1LCBcIlRSQUNFXCIpO1xyXG5cclxuY29uc3QgTG9nTGV2ZWwgPSB7XHJcblx0Tk9MT0csXHJcblx0RVJST1IsXHJcblx0V0FSTixcclxuXHRJTkZPLFxyXG5cdERFQlVHLFxyXG5cdFRSQUNFLFxyXG5cdGxvb2t1cDogKGFMZXZlbCkgPT4ge1xyXG5cdFx0aWYgKHR5cGVvZiBhTGV2ZWwgIT09IFwic3RyaW5nXCIpIHJldHVybiBOT0xPRztcclxuXHRcdHJldHVybiBMb2dMZXZlbFthTGV2ZWwudG9VcHBlckNhc2UoKV0gfHwgTk9MT0c7XHJcblx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMb2dMZXZlbDtcclxuXHJcbiIsImltcG9ydCBMb2dMZXZlbCBmcm9tIFwiLi9Mb2dMZXZlbFwiO1xuXG5jbGFzcyBMb2dnZXIge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBjb25maWcpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuX19jb25maWdfXyA9IGNvbmZpZztcblx0fVxuXG5cdGdldCBjb25maWcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX19jb25maWdfXztcblx0fVxuXG5cdHNldCBjb25maWcoY29uZmlnKSB7XG5cdFx0dGhpcy5fX2NvbmZpZ19fID0gY29uZmlnO1xuXHR9XG5cblx0bG9nRXJyb3IoYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcblx0XHRyZXR1cm4gdGhpcy5sb2coYU1lc3NhZ2UsIGFFeGNlcHRpb24sIExvZ0xldmVsLkVSUk9SKTtcblx0fVxuXG5cdGxvZ1dhcm4oYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcblx0XHR0aGlzLmxvZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbiwgTG9nTGV2ZWwuV0FSTik7XG5cdH1cblxuXHRsb2dJbmZvKGFNZXNzYWdlLCBhRXhjZXB0aW9uKSB7XG5cdFx0dGhpcy5sb2coYU1lc3NhZ2UsIGFFeGNlcHRpb24sIExvZ0xldmVsLklORk8pO1xuXHR9XG5cblx0bG9nRGVidWcoYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcblx0XHR0aGlzLmxvZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbiwgTG9nTGV2ZWwuREVCVUcpO1xuXHR9XG5cblx0YXN5bmNsb2dUcmFjZShhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xuXHRcdHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBMb2dMZXZlbC5UUkFDRSk7XG5cdH1cblxuXHRhc3luYyBsb2coYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBhTG9nTGV2ZWwpIHtcblx0XHRjb25zdCBuYW1lID0gdGhpcy5uYW1lO1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG5cdFx0c2V0VGltZW91dChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBjb25maWcgPSBhd2FpdCB0aGlzLmNvbmZpZztcblx0XHRcdGlmICghY29uZmlnLmxvZ0xldmVsLmlzSW5jbHVkZWQoYUxvZ0xldmVsKSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgeyBhcHBlbmRlcnMgfSA9IGNvbmZpZztcblx0XHRcdGZvciAobGV0IGFwcGVuZGVyIG9mIGFwcGVuZGVycykgYXBwZW5kZXIubG9nTWVzc2FnZShhTWVzc2FnZSwgYW5FeGNlcHRpb24sIG5hbWUsIGRhdGUsIGFMb2dMZXZlbCk7XG5cdFx0fSwgMTAwKTtcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyO1xuIiwiaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4vTG9nZ2VyXCI7XG5cbmNvbnN0IExPR0dFUk1BUCA9IG5ldyBNYXAoKTtcbmxldCBDT05GSUcgPSBuZXcgQ29uZmlnKCk7XG5jb25zdCB1cGRhdGVMb2dnZXIgPSAoKSA9PiB7XG5cdGZvciAobGV0IFtuYW1lLCBsb2dnZXJdIG9mIExPR0dFUk1BUCkgbG9nZ2VyLmNvbmZpZyA9IENPTkZJRy5sb2dnZXJDb25maWcobmFtZSk7XG59O1xuXG5leHBvcnQgY29uc3QgbmV3TG9nZ2VyID0gKG5hbWUpID0+IHtcblx0aWYgKCFMT0dHRVJNQVAuaGFzKG5hbWUpKSBMT0dHRVJNQVAuc2V0KG5hbWUsIG5ldyBMb2dnZXIobmFtZSwgQ09ORklHLmxvZ2dlckNvbmZpZyhuYW1lKSkpO1xuXG5cdHJldHVybiBMT0dHRVJNQVAuZ2V0KG5hbWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGFzeW5jIGZ1bmN0aW9uKGNvbmZpZykge1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSByZXR1cm4gQ09ORklHLmRhdGE7XG5cblx0Q09ORklHID0gbmV3IENvbmZpZyhhd2FpdCBjb25maWcpO1xuXHR1cGRhdGVMb2dnZXIoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgbmV3TG9nZ2VyLCBjb25maWcgfTtcbiIsImltcG9ydCBBcHBlbmRlciBmcm9tIFwiLi9BcHBlbmRlclwiO1xuXG5jb25zdCBHTE9CQUwgPSBzZWxmIHx8IGdsb2JhbCB8fCB3aW5kb3cgfHwgdGhpcyB8fCB7fTtcbmNvbnN0IExPRyA9ICgpID0+IHtcblx0aWYoIShHTE9CQUwuX19MT0dfXyBpbnN0YW5jZW9mIEFycmF5KSlcblx0XHRHTE9CQUwuX19MT0dfXyA9IFtdO1xuXHRyZXR1cm4gR0xPQkFMLl9fTE9HX187XG59ICA7XG5cblxuXG5jbGFzcyBNZW1vcnlBcHBlbmRlciBleHRlbmRzIEFwcGVuZGVyIHtcblx0bG9nTWVzc2FnZShhTWVzc2FnZSwgYW5FeGNlcHRpb24sYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpIHtcblx0XHRjb25zdCBsb2cgPSBMT0coKTtcdFx0XG5cdFx0bG9nLnB1c2goe1xuXHRcdFx0XCJkYXRlXCIgOiBhRGF0ZSxcblx0XHRcdFwibG9nTGV2ZWxcIiA6IGFMb2dMZXZlbCxcblx0XHRcdFwibG9nZ2VyTmFtZVwiIDogYUxvZ2dlck5hbWUsXG5cdFx0XHRcIm1lc3NhZ2VcIiA6IGFNZXNzYWdlLFxuXHRcdFx0XCJleGNlcHRpb25cIiA6IGFuRXhjZXB0aW9uXG5cdFx0fSk7XG5cdH1cbn07IFxuXG5jb25zdCBJTlNUQU5DRSA9IG5ldyBNZW1vcnlBcHBlbmRlcigpO1xuQXBwZW5kZXIucmVnaXN0ZXIoXCJNZW1vcnlBcHBlbmRlclwiLCBJTlNUQU5DRSk7XG5leHBvcnQgZGVmYXVsdCBJTlNUQU5DRTtcbiIsImNvbnN0IERhdGVVdGlscyA9IHtcclxuXHRcdGRhdGVBc1N0cmluZyA6IGZ1bmN0aW9uKGFEYXRlKXtcclxuXHRcdFx0aWYoIWFEYXRlIGluc3RhbmNlb2YgRGF0ZSlcclxuXHRcdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdFx0XHJcblx0XHRcdGxldCByZXN1bHQgPSBcIlwiO1xyXG5cdFx0XHRcclxuXHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi5cIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0TW9udGgoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXRNb250aCgpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRNb250aCgpO1xyXG5cdFx0XHRyZXN1bHQgKz0gXCIuXCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldERhdGUoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXREYXRlKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldERhdGUoKTtcdFx0XHJcblx0XHRcdHJlc3VsdCArPSAgXCIgXCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldEhvdXJzKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0SG91cnMoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0SG91cnMoKTtcclxuXHRcdFx0cmVzdWx0ICs9IFwiOlwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRNaW51dGVzKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0TWludXRlcygpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRNaW51dGVzKCk7XHJcblx0XHRcdHJlc3VsdCArPSBcIjpcIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0U2Vjb25kcygpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldFNlY29uZHMoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0U2Vjb25kcygpO1xyXG5cdFx0XHRyZXN1bHQgKz0gXCI6XCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldE1pbGxpc2Vjb25kcygpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjAwXCIgKyBhRGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcclxuXHRcdFx0aWYoYURhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgPCAxMDApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldE1pbGxpc2Vjb25kcygpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERhdGVVdGlsczsiLCJpbXBvcnQgRGF0ZVV0aWxzIGZyb20gXCIuL0RhdGVVdGlsc1wiO1xyXG5jb25zdCB1dGlscyA9IHtcclxuXHRcdERhdGVVdGlscyA6IERhdGVVdGlsc1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB1dGlsczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHV0aWxzIGZyb20gXCIuL3NyYy91dGlsc1wiO1xyXG5pbXBvcnQgQXBwZW5kZXIgZnJvbSBcIi4vc3JjL0FwcGVuZGVyXCI7XHJcbmltcG9ydCBDb25zb2xlQXBwZW5kZXIgZnJvbSBcIi4vc3JjL0NvbnNvbGVBcHBlbmRlclwiO1xyXG5pbXBvcnQgSHRtbEFwcGVuZGVyIGZyb20gXCIuL3NyYy9IdG1sQXBwZW5kZXJcIjtcclxuaW1wb3J0IEludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIgZnJvbSBcIi4vc3JjL0ludGVsaWdlbnRCcm93c2VyQXBwZW5kZXJcIjtcclxuaW1wb3J0IE1lbW9yeUFwcGVuZGVyIGZyb20gXCIuL3NyYy9NZW1vcnlBcHBlbmRlclwiO1xyXG5pbXBvcnQgTG9nTGV2ZWwgZnJvbSBcIi4vc3JjL0xvZ0xldmVsXCI7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4vc3JjL0xvZ2dlclwiO1xyXG5pbXBvcnQgTG9nZ2VyRmFjdG9yeSBmcm9tIFwiLi9zcmMvTG9nZ2VyRmFjdG9yeVwiO1xyXG5cclxuZXhwb3J0IHsgXHJcbiAgICB1dGlscywgXHJcbiAgICBBcHBlbmRlciwgXHJcbiAgICBDb25zb2xlQXBwZW5kZXIsIFxyXG4gICAgSHRtbEFwcGVuZGVyLCBcclxuICAgIEludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIsIFxyXG4gICAgTWVtb3J5QXBwZW5kZXIsIFxyXG4gICAgTG9nTGV2ZWwsIFxyXG4gICAgTG9nZ2VyLCBcclxuICAgIExvZ2dlckZhY3RvcnkgXHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==