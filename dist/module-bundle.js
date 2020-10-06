/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: utils, Appender, ConsoleAppender, HtmlAppender, InteligentBrowserAppender, MemoryAppender, LogLevel, Logger, LoggerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/utils */ "./src/utils/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _src_utils__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_Appender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Appender */ "./src/Appender.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Appender", function() { return _src_Appender__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_ConsoleAppender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/ConsoleAppender */ "./src/ConsoleAppender.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleAppender", function() { return _src_ConsoleAppender__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_HtmlAppender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/HtmlAppender */ "./src/HtmlAppender.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HtmlAppender", function() { return _src_HtmlAppender__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_InteligentBrowserAppender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/InteligentBrowserAppender */ "./src/InteligentBrowserAppender.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteligentBrowserAppender", function() { return _src_InteligentBrowserAppender__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_MemoryAppender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/MemoryAppender */ "./src/MemoryAppender.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryAppender", function() { return _src_MemoryAppender__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_LogLevel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/LogLevel */ "./src/LogLevel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _src_LogLevel__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_Logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/Logger */ "./src/Logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _src_Logger__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_LoggerFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/LoggerFactory */ "./src/LoggerFactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerFactory", function() { return _src_LoggerFactory__WEBPACK_IMPORTED_MODULE_8__["default"]; });














/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Appender.js":
/*!*************************!*\
  !*** ./src/Appender.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Appender; });
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
/*! exports provided: loadConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConfig", function() { return loadConfig; });
/* harmony import */ var _LogLevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogLevel */ "./src/LogLevel.js");
/* harmony import */ var _Appender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Appender */ "./src/Appender.js");



const APPENDERS = {};
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
	let actualConfig = null;
	for (let config in data) {
		if (isConfigActiv(name, config, actualConfig)) actualConfig = config;
		else if (!config.filter) defaultConfig = config;
		if (actualConfig != null && actualConfig.filter == name) return actualConfig;
	}

	return actualConfig || defaultConfig;
};

const isConfigActiv = (aLoggerName, aConfig, anActualConfig) => {
	if (anActualConfig && anActualConfig.filter.length >= aConfig.filter.length) return false;
	return aLoggerName.search(aConfig.filter) == 0;
};

const getAppenders = (appenders) => {
	const result = [];
	for (let key in appenders) {
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

/* harmony default export */ __webpack_exports__["default"] = (Config);


/***/ }),

/***/ "./src/ConsoleAppender.js":
/*!********************************!*\
  !*** ./src/ConsoleAppender.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
_Appender__WEBPACK_IMPORTED_MODULE_0__["default"].register("console", INSTANCE);
/* harmony default export */ __webpack_exports__["default"] = (INSTANCE);

/***/ }),

/***/ "./src/HtmlAppender.js":
/*!*****************************!*\
  !*** ./src/HtmlAppender.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
_Appender__WEBPACK_IMPORTED_MODULE_0__["default"].register("html", INSTANCE);
/* harmony default export */ __webpack_exports__["default"] = (INSTANCE);


/***/ }),

/***/ "./src/InteligentBrowserAppender.js":
/*!******************************************!*\
  !*** ./src/InteligentBrowserAppender.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

const INSTANCE = new InteligentBrowserAppender();
_Appender__WEBPACK_IMPORTED_MODULE_0__["default"].register("intelligent", INSTANCE);
/* harmony default export */ __webpack_exports__["default"] = (INSTANCE);


/***/ }),

/***/ "./src/LogLevel.js":
/*!*************************!*\
  !*** ./src/LogLevel.js ***!
  \*************************/
/*! exports provided: NOLOG, ERROR, WARN, INFO, DEBUG, TRACE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOLOG", function() { return NOLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WARN", function() { return WARN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO", function() { return INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG", function() { return DEBUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACE", function() { return TRACE; });
const NOLOG = new LogLevel(0, "NOLOG");
const ERROR = new LogLevel(1, "ERROR");
const WARN = new LogLevel(2, "WARN");
const INFO = new LogLevel(3, "INFO");
const DEBUG = new LogLevel(4, "DEBUG");
const TRACE = new LogLevel(5, "TRACE");

class LogLevel {
	static get NOLOG() {
		return NOLOG;
	}
	static get ERROR() {
		return ERROR;
	}
	static get WARN() {
		return WARN;
	}
	static get INFO() {
		return INFO;
	}
	static get DEBUG() {
		return DEBUG;
	}
	static get TRACE() {
		return TRACE;
	}

	constructor(aOrder, aTitle) {
		this.order = aOrder;
		this.title = aTitle;
	}

	isIncluded(aLogLevel) {
		return this.order >= aLogLevel.order;
	}

	static lookup(aLevel) {
		if (typeof aLevel !== "undefined") return NOLOG;
		return LogLevel[aLevel.toUpperCase()] || NOLOG;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (LogLevel);


/***/ }),

/***/ "./src/Logger.js":
/*!***********************!*\
  !*** ./src/Logger.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
		const config = await this.config;
		if (!config.logLevel.isIncluded(aLogLevel)) return;
		if (!config.appenders.length === 0) return;

		const name = this.name;
		const { appenders } = config;
		const date = new Data();

		setTimeout(async () => {
			for (let appender of appenders) 
				appender.logMessage(aMessage, anException, name, date, aLogLevel);
		}, 100);
	}
}
/* harmony default export */ __webpack_exports__["default"] = (Logger);


/***/ }),

/***/ "./src/LoggerFactory.js":
/*!******************************!*\
  !*** ./src/LoggerFactory.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./src/Config.js");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logger */ "./src/Logger.js");



const LOGGERMAP = new Map();

const updateLogger = (config) => {	
	for (let [name, logger] of LOGGERMAP)
		logger.config = config.loggerConfig(name);
};

class LoggerFactory {
	constructor() {
		this.__config__ = new _Config__WEBPACK_IMPORTED_MODULE_0__["default"](); 
	}

	newLogger(name) {
		if (!LOGGERMAP.has(name))
			LOGGERMAP.set(name, new _Logger__WEBPACK_IMPORTED_MODULE_1__["default"](name, this.__config__.loggerConfig(name)));

		return LOGGERMAP.get(name);
	}

	async config(config){
		if(arguments.length == 0)
			return this.__config__;
		
		this.__config__ = new _Config__WEBPACK_IMPORTED_MODULE_0__["default"](config);
		updateLogger(this.__config__);
	}

}

/* harmony default export */ __webpack_exports__["default"] = (LoggerFactory);


/***/ }),

/***/ "./src/MemoryAppender.js":
/*!*******************************!*\
  !*** ./src/MemoryAppender.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Appender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Appender */ "./src/Appender.js");


const GLOBAL = self || global || window || undefined || {};
const LOG = GLOBAL.__LOG__ = [];
class MemoryAppender extends _Appender__WEBPACK_IMPORTED_MODULE_0__["default"] {
	logMessage(aMessage, anException,aLoggerName, aDate, aLogLevel) {		
		LOG.push({
			"date" : aDate,
			"logLevel" : aLogLevel,
			"loggerName" : aLoggerName,
			"message" : aMessage,
			"exception" : anException
		});
	}
}; 

const INSTANCE = new MemoryAppender();
_Appender__WEBPACK_IMPORTED_MODULE_0__["default"].register("memory", INSTANCE);
/* harmony default export */ __webpack_exports__["default"] = (INSTANCE);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/utils/DateUtils.js":
/*!********************************!*\
  !*** ./src/utils/DateUtils.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (DateUtils);

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateUtils */ "./src/utils/DateUtils.js");

const utils = {
		DateUtils : _DateUtils__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (utils);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc29sZUFwcGVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9IdG1sQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ0xldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9Mb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ2dlckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01lbW9yeUFwcGVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9EYXRlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZSx3RUFBUyxFOzs7Ozs7Ozs7Ozs7QUMzQ3hCO0FBQUE7QUFBb0M7QUFDcEM7QUFDQSxjQUFjLGtEQUFTO0FBQ3ZCO0FBQ2Usb0VBQUssRSIsImZpbGUiOiJtb2R1bGUtYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB1dGlscyBmcm9tIFwiLi9zcmMvdXRpbHNcIjtcclxuaW1wb3J0IEFwcGVuZGVyIGZyb20gXCIuL3NyYy9BcHBlbmRlclwiO1xyXG5pbXBvcnQgQ29uc29sZUFwcGVuZGVyIGZyb20gXCIuL3NyYy9Db25zb2xlQXBwZW5kZXJcIjtcclxuaW1wb3J0IEh0bWxBcHBlbmRlciBmcm9tIFwiLi9zcmMvSHRtbEFwcGVuZGVyXCI7XHJcbmltcG9ydCBJbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyIGZyb20gXCIuL3NyYy9JbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyXCI7XHJcbmltcG9ydCBNZW1vcnlBcHBlbmRlciBmcm9tIFwiLi9zcmMvTWVtb3J5QXBwZW5kZXJcIjtcclxuaW1wb3J0IExvZ0xldmVsIGZyb20gXCIuL3NyYy9Mb2dMZXZlbFwiO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuL3NyYy9Mb2dnZXJcIjtcclxuaW1wb3J0IExvZ2dlckZhY3RvcnkgZnJvbSBcIi4vc3JjL0xvZ2dlckZhY3RvcnlcIjtcclxuXHJcbmV4cG9ydCB7IFxyXG4gICAgdXRpbHMsIFxyXG4gICAgQXBwZW5kZXIsIFxyXG4gICAgQ29uc29sZUFwcGVuZGVyLCBcclxuICAgIEh0bWxBcHBlbmRlciwgXHJcbiAgICBJbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyLCBcclxuICAgIE1lbW9yeUFwcGVuZGVyLCBcclxuICAgIExvZ0xldmVsLCBcclxuICAgIExvZ2dlciwgXHJcbiAgICBMb2dnZXJGYWN0b3J5IFxyXG59O1xyXG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJjb25zdCBBUFBFTkRFUlMgPSBuZXcgTWFwKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBlbmRlciB7XHJcblx0c3RhdGljIGdldEFwcGVuZGVyKG5hbWUpIHtcclxuXHRcdHJldHVybiBBUFBFTkRFUlMuZ2V0KG5hbWUpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHJlZ2lzdGVyKG5hbWUsIGFwcGVuZGVyKSB7XHJcblx0XHRBUFBFTkRFUlMuc2V0KG5hbWUsIGFwcGVuZGVyKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bG9nTWVzc2FnZShhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKSB7fVxyXG59XHJcbiIsImltcG9ydCBMb2dMZXZlbCBmcm9tIFwiLi9Mb2dMZXZlbFwiO1xyXG5pbXBvcnQgQXBwZW5kZXIgZnJvbSBcIi4vQXBwZW5kZXJcIjtcclxuXHJcbmNvbnN0IEFQUEVOREVSUyA9IHt9O1xyXG5jb25zdCBERUZBVUxUQ09ORklHID0ge1xyXG5cdGZpbHRlcjogXCJcIixcclxuXHRsb2dMZXZlbDogXCJOT0xPR1wiLFxyXG5cdGFwcGVuZGVyczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZENvbmZpZyA9IGFzeW5jIChjb25maWcpID0+IHtcclxuXHRpZiAoY29uZmlnIGluc3RhbmNlb2YgQXJyYXkpIHJldHVybiBjb25maWc7XHJcblx0ZWxzZSBpZiAodHlwZW9mIGNvbmZpZyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGxvYWRSZW1vdGUoY29uZmlnKTtcclxuXHJcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbbG9nZ2luZy1wcm9wZXJ0aWVzXVwiKTtcclxuXHRpZiAoZWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImxvZ2dpbmctcHJvcGVydGllc1wiKSkge1xyXG5cdFx0Y29uZmlnID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJsb2dnaW5nLXByb3BlcnRpZXNcIik7XHJcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShjb25maWcpO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGxvYWRSZW1vdGUgPSBhc3luYyAodXJsKSA9PiB7XHJcblx0bGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpKTtcclxuXHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuY29uc3QgZmluZENvbmZpZyA9IChuYW1lLCBkYXRhKSA9PiB7XHJcblx0bGV0IGRlZmF1bHRDb25maWcgPSBERUZBVUxUQ09ORklHO1xyXG5cdGxldCBhY3R1YWxDb25maWcgPSBudWxsO1xyXG5cdGZvciAobGV0IGNvbmZpZyBpbiBkYXRhKSB7XHJcblx0XHRpZiAoaXNDb25maWdBY3RpdihuYW1lLCBjb25maWcsIGFjdHVhbENvbmZpZykpIGFjdHVhbENvbmZpZyA9IGNvbmZpZztcclxuXHRcdGVsc2UgaWYgKCFjb25maWcuZmlsdGVyKSBkZWZhdWx0Q29uZmlnID0gY29uZmlnO1xyXG5cdFx0aWYgKGFjdHVhbENvbmZpZyAhPSBudWxsICYmIGFjdHVhbENvbmZpZy5maWx0ZXIgPT0gbmFtZSkgcmV0dXJuIGFjdHVhbENvbmZpZztcclxuXHR9XHJcblxyXG5cdHJldHVybiBhY3R1YWxDb25maWcgfHwgZGVmYXVsdENvbmZpZztcclxufTtcclxuXHJcbmNvbnN0IGlzQ29uZmlnQWN0aXYgPSAoYUxvZ2dlck5hbWUsIGFDb25maWcsIGFuQWN0dWFsQ29uZmlnKSA9PiB7XHJcblx0aWYgKGFuQWN0dWFsQ29uZmlnICYmIGFuQWN0dWFsQ29uZmlnLmZpbHRlci5sZW5ndGggPj0gYUNvbmZpZy5maWx0ZXIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XHJcblx0cmV0dXJuIGFMb2dnZXJOYW1lLnNlYXJjaChhQ29uZmlnLmZpbHRlcikgPT0gMDtcclxufTtcclxuXHJcbmNvbnN0IGdldEFwcGVuZGVycyA9IChhcHBlbmRlcnMpID0+IHtcclxuXHRjb25zdCByZXN1bHQgPSBbXTtcclxuXHRmb3IgKGxldCBrZXkgaW4gYXBwZW5kZXJzKSB7XHJcblx0XHRjb25zdCBhcHBlbmRlciA9IEFwcGVuZGVyLmdldEFwcGVuZGVyKGtleSk7XHJcblx0XHRpZiAoYXBwZW5kZXIpIHJlc3VsdC5wdXNoKGFwcGVuZGVyKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5jbGFzcyBDb25maWcge1xyXG5cdGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG5cdFx0dGhpcy5kYXRhID0gbG9hZENvbmZpZyhjb25maWcpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgbG9nZ2VyQ29uZmlnKG5hbWUpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmRhdGE7XHJcblx0XHRjb25zdCBjb25maWcgPSBmaW5kQ29uZmlnKG5hbWUsIGRhdGEpO1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGZpbHRlcjogY29uZmlnLmZpbHRlcixcclxuXHRcdFx0bG9nTGV2ZWw6IExvZ0xldmVsLmxvb2t1cChjb25maWcubG9nTGV2ZWwpLFxyXG5cdFx0XHRhcHBlbmRlcnM6IGdldEFwcGVuZGVycyhjb25maWcuYXBwZW5kZXJzKSxcclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maWc7XHJcbiIsImltcG9ydCBBcHBlbmRlciBmcm9tIFwiLi9BcHBlbmRlclwiO1xyXG5pbXBvcnQgTG9nTGV2ZWwgZnJvbSBcIi4vTG9nTGV2ZWxcIjtcclxuaW1wb3J0IERhdGVVdGlscyBmcm9tIFwiLi91dGlscy9EYXRlVXRpbHNcIjtcclxuXHJcblxyXG5jbGFzcyBDb25zb2xlQXBwZW5kZXIgZXh0ZW5kcyBBcHBlbmRlcntcclxuXHRsb2dNZXNzYWdlIChhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKXtcclxuXHRcdGlmIChMb2dMZXZlbC5OT0xPRyA9PSBhTG9nTGV2ZWwpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdGxldCBsb2cgPSBbXTtcclxuXHRcdGlmIChhRGF0ZSlcclxuXHRcdFx0bG9nLnB1c2goRGF0ZVV0aWxzLmRhdGVBc1N0cmluZyhhRGF0ZSksIFwiIFwiKTtcclxuXHRcdFxyXG5cdFx0bG9nLnB1c2goXCIqKipcIiwgYUxvZ0xldmVsLnRpdGxlLCBcIioqKiBcIiwgYUxvZ2dlck5hbWUpO1xyXG5cdFx0XHJcblx0XHRpZiAoYU1lc3NhZ2UpIHtcclxuXHRcdFx0bG9nLnB1c2goXCIgLT4gXCIpO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShhTWVzc2FnZSkpXHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkobG9nLCBhTWVzc2FnZSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRsb2cucHVzaChhTWVzc2FnZSk7XHJcblx0XHR9XHJcblx0XHRpZiAoYW5FeGNlcHRpb24pXHJcblx0XHRcdGxvZy5wdXNoKFwiOiBcIiwgYW5FeGNlcHRpb24pO1xyXG5cdFx0XHJcblx0XHRsZXQgYXBwZW5kZXIgPSBjb25zb2xlLmxvZztcdFx0XHJcblx0XHRpZiAoTG9nTGV2ZWwuRVJST1IgPT0gYUxvZ0xldmVsKSBcclxuXHRcdFx0YXBwZW5kZXIgPSBjb25zb2xlLmVycm9yOyBcclxuXHRcdGVsc2UgaWYgKExvZ0xldmVsLldBUk4gPT0gYUxvZ0xldmVsKVxyXG5cdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUud2FybjtcclxuXHRcdGVsc2UgaWYgKExvZ0xldmVsLklORk8gPT0gYUxvZ0xldmVsKVxyXG5cdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUuaW5mbztcclxuXHRcdGVsc2UgaWYgKExvZ0xldmVsLkRFQlVHID09IGFMb2dMZXZlbClcclxuXHRcdFx0YXBwZW5kZXIgPSBjb25zb2xlLmRlYnVnO1xyXG5cdFx0ZWxzZSBpZiAoTG9nTGV2ZWwuVFJBQ0UgPT0gYUxvZ0xldmVsKVxyXG5cdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUudHJhY2U7XHJcblx0XHRcclxuXHRcdGFwcGVuZGVyLmFwcGx5KGNvbnNvbGUsIGxvZyk7XHRcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IElOU1RBTkNFID0gbmV3IENvbnNvbGVBcHBlbmRlcigpO1xyXG5BcHBlbmRlci5yZWdpc3RlcihcImNvbnNvbGVcIiwgSU5TVEFOQ0UpO1xyXG5leHBvcnQgZGVmYXVsdCBJTlNUQU5DRTsiLCJpbXBvcnQgQXBwZW5kZXIgZnJvbSBcIi4vQXBwZW5kZXJcIjtcclxuaW1wb3J0IERhdGVVdGlscyBmcm9tIFwiLi91dGlscy9EYXRlVXRpbHNcIjtcclxuXHJcbmNvbnN0IENPTlRBSU5FUiA9IFwiW2RhdGEtbG9nXVwiO1xyXG5jbGFzcyBIdG1sQXBwZW5kZXIgZXh0ZW5kcyBBcHBlbmRlciB7XHJcblx0aXNBdmFpbGFibGUoKSB7XHJcblx0XHRyZXR1cm4gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENPTlRBSU5FUik7XHJcblx0fVxyXG5cdGxvZ01lc3NhZ2UoYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBhTG9nZ2VyTmFtZSwgYURhdGUsIGFMb2dMZXZlbCkge1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05UQUlORVIpO1xyXG5cdFx0aWYgKCFjb250YWluZXIpIHJldHVybjtcclxuXHJcblx0XHRjb25zdCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRlbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxvZy1lbnRyeSBcIiArIGFMb2dMZXZlbC50aXRsZSk7XHJcblx0XHRsZXQgbWVzc2FnZSA9IERhdGVVdGlscy5kYXRlQXNTdHJpbmcoYURhdGUgfHwgbmV3IERhdGUoKSkgKyBcIiAqKipcIiArIGFMb2dMZXZlbC50aXRsZSArIFwiKioqIFwiICsgYUxvZ2dlck5hbWUgKyBcIlwiO1xyXG5cclxuXHRcdGlmIChhTWVzc2FnZSkgbWVzc2FnZSArPSBcIiAtPiBcIiArIGFNZXNzYWdlO1xyXG5cdFx0aWYgKGFuRXhjZXB0aW9uKSBtZXNzYWdlICs9IFwiOiBcIiArIGFuRXhjZXB0aW9uO1xyXG5cclxuXHRcdGVudHJ5LnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuXHRcdHJldHVybiBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW50cnkpO1xyXG5cdH1cclxufVxyXG5cclxuY29uc3QgSU5TVEFOQ0UgPSBuZXcgSHRtbEFwcGVuZGVyKCk7XHJcbkFwcGVuZGVyLnJlZ2lzdGVyKFwiaHRtbFwiLCBJTlNUQU5DRSk7XHJcbmV4cG9ydCBkZWZhdWx0IElOU1RBTkNFO1xyXG4iLCJpbXBvcnQgQXBwZW5kZXIgZnJvbSBcIi4vQXBwZW5kZXJcIjtcclxuaW1wb3J0IEh0bWxBcHBlbmRlciBmcm9tIFwiLi9IdG1sQXBwZW5kZXJcIjtcclxuaW1wb3J0IENvbnNvbGVBcHBlbmRlciBmcm9tIFwiLi9Db25zb2xlQXBwZW5kZXJcIjtcclxuaW1wb3J0IE1lbW9yeUFwcGVuZGVyIGZyb20gXCIuL01lbW9yeUFwcGVuZGVyXCI7XHJcblxyXG5sZXQgYXBwZW5kZXI7XHJcbmNvbnN0IGdldEFwcGVuZGVyID0gKCkgPT4ge1xyXG5cdGlmIChhcHBlbmRlcikge1x0XHRcclxuXHRcdGlmIChjb25zb2xlKVxyXG5cdFx0XHRhcHBlbmRlciA9IENvbnNvbGVBcHBlbmRlcjtcclxuXHRcdGVsc2UgaWYgKEh0bWxBcHBlbmRlci5pc0F2YWlsYWJsZSgpKVxyXG5cdFx0XHRhcHBlbmRlciA9IEh0bWxBcHBlbmRlcjtcclxuXHRcdGVsc2VcclxuXHRcdFx0YXBwZW5kZXIgPSBNZW1vcnlBcHBlbmRlcjtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIGFwcGVuZGVyO1xyXG59O1xyXG5jbGFzcyBJbnRlbGxpZ2VudEJyb3dzZXJBcHBlbmRlciBleHRlbmRzIEFwcGVuZGVyIHtcclxuXHRsb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpIHtcclxuXHRcdGdldEFwcGVuZGVyKCkubG9nTWVzc2FnZShhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKTtcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBJTlNUQU5DRSA9IG5ldyBJbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyKCk7XHJcbkFwcGVuZGVyLnJlZ2lzdGVyKFwiaW50ZWxsaWdlbnRcIiwgSU5TVEFOQ0UpO1xyXG5leHBvcnQgZGVmYXVsdCBJTlNUQU5DRTtcclxuIiwiZXhwb3J0IGNvbnN0IE5PTE9HID0gbmV3IExvZ0xldmVsKDAsIFwiTk9MT0dcIik7XHJcbmV4cG9ydCBjb25zdCBFUlJPUiA9IG5ldyBMb2dMZXZlbCgxLCBcIkVSUk9SXCIpO1xyXG5leHBvcnQgY29uc3QgV0FSTiA9IG5ldyBMb2dMZXZlbCgyLCBcIldBUk5cIik7XHJcbmV4cG9ydCBjb25zdCBJTkZPID0gbmV3IExvZ0xldmVsKDMsIFwiSU5GT1wiKTtcclxuZXhwb3J0IGNvbnN0IERFQlVHID0gbmV3IExvZ0xldmVsKDQsIFwiREVCVUdcIik7XHJcbmV4cG9ydCBjb25zdCBUUkFDRSA9IG5ldyBMb2dMZXZlbCg1LCBcIlRSQUNFXCIpO1xyXG5cclxuY2xhc3MgTG9nTGV2ZWwge1xyXG5cdHN0YXRpYyBnZXQgTk9MT0coKSB7XHJcblx0XHRyZXR1cm4gTk9MT0c7XHJcblx0fVxyXG5cdHN0YXRpYyBnZXQgRVJST1IoKSB7XHJcblx0XHRyZXR1cm4gRVJST1I7XHJcblx0fVxyXG5cdHN0YXRpYyBnZXQgV0FSTigpIHtcclxuXHRcdHJldHVybiBXQVJOO1xyXG5cdH1cclxuXHRzdGF0aWMgZ2V0IElORk8oKSB7XHJcblx0XHRyZXR1cm4gSU5GTztcclxuXHR9XHJcblx0c3RhdGljIGdldCBERUJVRygpIHtcclxuXHRcdHJldHVybiBERUJVRztcclxuXHR9XHJcblx0c3RhdGljIGdldCBUUkFDRSgpIHtcclxuXHRcdHJldHVybiBUUkFDRTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKGFPcmRlciwgYVRpdGxlKSB7XHJcblx0XHR0aGlzLm9yZGVyID0gYU9yZGVyO1xyXG5cdFx0dGhpcy50aXRsZSA9IGFUaXRsZTtcclxuXHR9XHJcblxyXG5cdGlzSW5jbHVkZWQoYUxvZ0xldmVsKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vcmRlciA+PSBhTG9nTGV2ZWwub3JkZXI7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9va3VwKGFMZXZlbCkge1xyXG5cdFx0aWYgKHR5cGVvZiBhTGV2ZWwgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBOT0xPRztcclxuXHRcdHJldHVybiBMb2dMZXZlbFthTGV2ZWwudG9VcHBlckNhc2UoKV0gfHwgTk9MT0c7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dMZXZlbDtcclxuIiwiaW1wb3J0IExvZ0xldmVsIGZyb20gXCIuL0xvZ0xldmVsXCI7XHJcblxyXG5jbGFzcyBMb2dnZXIge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIGNvbmZpZykge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuX19jb25maWdfXyA9IGNvbmZpZztcclxuXHR9XHJcblxyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fX2NvbmZpZ19fO1xyXG5cdH1cclxuXHJcblx0c2V0IGNvbmZpZyhjb25maWcpIHtcclxuXHRcdHRoaXMuX19jb25maWdfXyA9IGNvbmZpZztcclxuXHR9XHJcblxyXG5cdGxvZ0Vycm9yKGFNZXNzYWdlLCBhRXhjZXB0aW9uKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sb2coYU1lc3NhZ2UsIGFFeGNlcHRpb24sIExvZ0xldmVsLkVSUk9SKTtcclxuXHR9XHJcblxyXG5cdGxvZ1dhcm4oYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcclxuXHRcdHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBMb2dMZXZlbC5XQVJOKTtcclxuXHR9XHJcblxyXG5cdGxvZ0luZm8oYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcclxuXHRcdHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBMb2dMZXZlbC5JTkZPKTtcclxuXHR9XHJcblxyXG5cdGxvZ0RlYnVnKGFNZXNzYWdlLCBhRXhjZXB0aW9uKSB7XHJcblx0XHR0aGlzLmxvZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbiwgTG9nTGV2ZWwuREVCVUcpO1xyXG5cdH1cclxuXHJcblx0YXN5bmNsb2dUcmFjZShhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xyXG5cdFx0dGhpcy5sb2coYU1lc3NhZ2UsIGFFeGNlcHRpb24sIExvZ0xldmVsLlRSQUNFKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGxvZyhhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dMZXZlbCkge1xyXG5cdFx0Y29uc3QgY29uZmlnID0gYXdhaXQgdGhpcy5jb25maWc7XHJcblx0XHRpZiAoIWNvbmZpZy5sb2dMZXZlbC5pc0luY2x1ZGVkKGFMb2dMZXZlbCkpIHJldHVybjtcclxuXHRcdGlmICghY29uZmlnLmFwcGVuZGVycy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcblx0XHRjb25zdCBuYW1lID0gdGhpcy5uYW1lO1xyXG5cdFx0Y29uc3QgeyBhcHBlbmRlcnMgfSA9IGNvbmZpZztcclxuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0YSgpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRmb3IgKGxldCBhcHBlbmRlciBvZiBhcHBlbmRlcnMpIFxyXG5cdFx0XHRcdGFwcGVuZGVyLmxvZ01lc3NhZ2UoYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBuYW1lLCBkYXRlLCBhTG9nTGV2ZWwpO1xyXG5cdFx0fSwgMTAwKTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyO1xyXG4iLCJpbXBvcnQgQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuL0xvZ2dlclwiO1xyXG5cclxuY29uc3QgTE9HR0VSTUFQID0gbmV3IE1hcCgpO1xyXG5cclxuY29uc3QgdXBkYXRlTG9nZ2VyID0gKGNvbmZpZykgPT4ge1x0XHJcblx0Zm9yIChsZXQgW25hbWUsIGxvZ2dlcl0gb2YgTE9HR0VSTUFQKVxyXG5cdFx0bG9nZ2VyLmNvbmZpZyA9IGNvbmZpZy5sb2dnZXJDb25maWcobmFtZSk7XHJcbn07XHJcblxyXG5jbGFzcyBMb2dnZXJGYWN0b3J5IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX19jb25maWdfXyA9IG5ldyBDb25maWcoKTsgXHJcblx0fVxyXG5cclxuXHRuZXdMb2dnZXIobmFtZSkge1xyXG5cdFx0aWYgKCFMT0dHRVJNQVAuaGFzKG5hbWUpKVxyXG5cdFx0XHRMT0dHRVJNQVAuc2V0KG5hbWUsIG5ldyBMb2dnZXIobmFtZSwgdGhpcy5fX2NvbmZpZ19fLmxvZ2dlckNvbmZpZyhuYW1lKSkpO1xyXG5cclxuXHRcdHJldHVybiBMT0dHRVJNQVAuZ2V0KG5hbWUpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgY29uZmlnKGNvbmZpZyl7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdHJldHVybiB0aGlzLl9fY29uZmlnX187XHJcblx0XHRcclxuXHRcdHRoaXMuX19jb25maWdfXyA9IG5ldyBDb25maWcoY29uZmlnKTtcclxuXHRcdHVwZGF0ZUxvZ2dlcih0aGlzLl9fY29uZmlnX18pO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2dlckZhY3Rvcnk7XHJcbiIsImltcG9ydCBBcHBlbmRlciBmcm9tIFwiLi9BcHBlbmRlclwiO1xyXG5cclxuY29uc3QgR0xPQkFMID0gc2VsZiB8fCBnbG9iYWwgfHwgd2luZG93IHx8IHRoaXMgfHwge307XHJcbmNvbnN0IExPRyA9IEdMT0JBTC5fX0xPR19fID0gW107XHJcbmNsYXNzIE1lbW9yeUFwcGVuZGVyIGV4dGVuZHMgQXBwZW5kZXIge1xyXG5cdGxvZ01lc3NhZ2UoYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKSB7XHRcdFxyXG5cdFx0TE9HLnB1c2goe1xyXG5cdFx0XHRcImRhdGVcIiA6IGFEYXRlLFxyXG5cdFx0XHRcImxvZ0xldmVsXCIgOiBhTG9nTGV2ZWwsXHJcblx0XHRcdFwibG9nZ2VyTmFtZVwiIDogYUxvZ2dlck5hbWUsXHJcblx0XHRcdFwibWVzc2FnZVwiIDogYU1lc3NhZ2UsXHJcblx0XHRcdFwiZXhjZXB0aW9uXCIgOiBhbkV4Y2VwdGlvblxyXG5cdFx0fSk7XHJcblx0fVxyXG59OyBcclxuXHJcbmNvbnN0IElOU1RBTkNFID0gbmV3IE1lbW9yeUFwcGVuZGVyKCk7XHJcbkFwcGVuZGVyLnJlZ2lzdGVyKFwibWVtb3J5XCIsIElOU1RBTkNFKTtcclxuZXhwb3J0IGRlZmF1bHQgSU5TVEFOQ0U7XHJcbiIsImNvbnN0IERhdGVVdGlscyA9IHtcclxuXHRcdGRhdGVBc1N0cmluZyA6IGZ1bmN0aW9uKGFEYXRlKXtcclxuXHRcdFx0aWYoIWFEYXRlIGluc3RhbmNlb2YgRGF0ZSlcclxuXHRcdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdFx0XHJcblx0XHRcdGxldCByZXN1bHQgPSBcIlwiO1xyXG5cdFx0XHRcclxuXHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi5cIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0TW9udGgoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXRNb250aCgpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRNb250aCgpO1xyXG5cdFx0XHRyZXN1bHQgKz0gXCIuXCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldERhdGUoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXREYXRlKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldERhdGUoKTtcdFx0XHJcblx0XHRcdHJlc3VsdCArPSAgXCIgXCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldEhvdXJzKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0SG91cnMoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0SG91cnMoKTtcclxuXHRcdFx0cmVzdWx0ICs9IFwiOlwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRNaW51dGVzKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0TWludXRlcygpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRNaW51dGVzKCk7XHJcblx0XHRcdHJlc3VsdCArPSBcIjpcIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0U2Vjb25kcygpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldFNlY29uZHMoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0U2Vjb25kcygpO1xyXG5cdFx0XHRyZXN1bHQgKz0gXCI6XCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldE1pbGxpc2Vjb25kcygpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjAwXCIgKyBhRGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcclxuXHRcdFx0aWYoYURhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgPCAxMDApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldE1pbGxpc2Vjb25kcygpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERhdGVVdGlsczsiLCJpbXBvcnQgRGF0ZVV0aWxzIGZyb20gXCIuL0RhdGVVdGlsc1wiO1xyXG5jb25zdCB1dGlscyA9IHtcclxuXHRcdERhdGVVdGlscyA6IERhdGVVdGlsc1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB1dGlsczsiXSwic291cmNlUm9vdCI6IiJ9