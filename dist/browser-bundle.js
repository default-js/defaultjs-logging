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
/******/ 	return __webpack_require__(__webpack_require__.s = "./browser-bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./browser-bundle.js":
/*!***************************!*\
  !*** ./browser-bundle.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
	VERSION : "1.0.0-beta.1",
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnJvd3Nlci1idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc29sZUFwcGVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9IdG1sQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ0xldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9Mb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ2dlckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01lbW9yeUFwcGVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9EYXRlVXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7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LHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDbEJ4QjtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2Usd0VBQVMsRSIsImZpbGUiOiJicm93c2VyLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYnJvd3Nlci1idW5kbGUuanNcIik7XG4iLCJpbXBvcnQgQ29uc29sZUFwcGVuZGVyIGZyb20gXCIuL3NyYy9Db25zb2xlQXBwZW5kZXJcIjtcclxuaW1wb3J0IEh0bWxBcHBlbmRlciBmcm9tIFwiLi9zcmMvSHRtbEFwcGVuZGVyXCI7XHJcbmltcG9ydCBJbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyIGZyb20gXCIuL3NyYy9JbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyXCI7XHJcbmltcG9ydCBNZW1vcnlBcHBlbmRlciBmcm9tIFwiLi9zcmMvTWVtb3J5QXBwZW5kZXJcIjtcclxuaW1wb3J0IExvZ0xldmVsIGZyb20gXCIuL3NyYy9Mb2dMZXZlbFwiO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuL3NyYy9Mb2dnZXJcIjtcclxuaW1wb3J0IExvZ2dlckZhY3RvcnkgZnJvbSBcIi4vc3JjL0xvZ2dlckZhY3RvcnlcIjtcclxuXHJcbmNvbnN0IGdsb2JhbCA9IHNlbGYgfHwgZ2xvYmFsIHx8IHdpbmRvdyB8fCB0aGlzIHx8IHt9O1xyXG5nbG9iYWwuZGVmYXVsdGpzID0gZ2xvYmFsLmRlZmF1bHRqcyB8fCB7fTtcclxuZ2xvYmFsLmRlZmF1bHRqcy5sb2dnaW5nID0gZ2xvYmFsLmRlZmF1bHRqcy5sb2dnaW5nIHx8IHtcclxuXHRWRVJTSU9OIDogXCIke3ZlcnNpb259XCIsXHJcblx0dXRpbHMgOiB1dGlscyxcclxuXHRDb25zb2xlQXBwZW5kZXIgOiBDb25zb2xlQXBwZW5kZXIsXHJcblx0Q29uc29sZW5BcHBlbmRlciA6IENvbnNvbGVBcHBlbmRlcixcclxuXHRIdG1sQXBwZW5kZXIgOiBIdG1sQXBwZW5kZXIsXHJcblx0TWVtb3J5QXBwZW5kZXIgOiBNZW1vcnlBcHBlbmRlcixcclxuXHRJbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyIDogSW50ZWxpZ2VudEJyb3dzZXJBcHBlbmRlcixcclxuXHRMb2dMZXZlbCA6IExvZ0xldmVsLFxyXG5cdExvZ2dlciA6IExvZ2dlcixcclxuXHRMb2dnZXJGYWN0b3J5IDogTG9nZ2VyRmFjdG9yeVxyXG59OyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImNvbnN0IEFQUEVOREVSUyA9IG5ldyBNYXAoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGVuZGVyIHtcclxuXHRzdGF0aWMgZ2V0QXBwZW5kZXIobmFtZSkge1xyXG5cdFx0cmV0dXJuIEFQUEVOREVSUy5nZXQobmFtZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcmVnaXN0ZXIobmFtZSwgYXBwZW5kZXIpIHtcclxuXHRcdEFQUEVOREVSUy5zZXQobmFtZSwgYXBwZW5kZXIpO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRsb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpIHt9XHJcbn1cclxuIiwiaW1wb3J0IExvZ0xldmVsIGZyb20gXCIuL0xvZ0xldmVsXCI7XHJcbmltcG9ydCBBcHBlbmRlciBmcm9tIFwiLi9BcHBlbmRlclwiO1xyXG5cclxuY29uc3QgQVBQRU5ERVJTID0ge307XHJcbmNvbnN0IERFRkFVTFRDT05GSUcgPSB7XHJcblx0ZmlsdGVyOiBcIlwiLFxyXG5cdGxvZ0xldmVsOiBcIk5PTE9HXCIsXHJcblx0YXBwZW5kZXJzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkQ29uZmlnID0gYXN5bmMgKGNvbmZpZykgPT4ge1xyXG5cdGlmIChjb25maWcgaW5zdGFuY2VvZiBBcnJheSkgcmV0dXJuIGNvbmZpZztcclxuXHRlbHNlIGlmICh0eXBlb2YgY29uZmlnID09PSBcInN0cmluZ1wiKSByZXR1cm4gbG9hZFJlbW90ZShjb25maWcpO1xyXG5cclxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltsb2dnaW5nLXByb3BlcnRpZXNdXCIpO1xyXG5cdGlmIChlbGVtZW50ICYmIGVsZW1lbnQuaGFzQXR0cmlidXRlKFwibG9nZ2luZy1wcm9wZXJ0aWVzXCIpKSB7XHJcblx0XHRjb25maWcgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImxvZ2dpbmctcHJvcGVydGllc1wiKTtcclxuXHRcdHJldHVybiBKU09OLnBhcnNlKGNvbmZpZyk7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgbG9hZFJlbW90ZSA9IGFzeW5jICh1cmwpID0+IHtcclxuXHRsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZikpO1xyXG5cdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn07XHJcblxyXG5jb25zdCBmaW5kQ29uZmlnID0gKG5hbWUsIGRhdGEpID0+IHtcclxuXHRsZXQgZGVmYXVsdENvbmZpZyA9IERFRkFVTFRDT05GSUc7XHJcblx0bGV0IGFjdHVhbENvbmZpZyA9IG51bGw7XHJcblx0Zm9yIChsZXQgY29uZmlnIGluIGRhdGEpIHtcclxuXHRcdGlmIChpc0NvbmZpZ0FjdGl2KG5hbWUsIGNvbmZpZywgYWN0dWFsQ29uZmlnKSkgYWN0dWFsQ29uZmlnID0gY29uZmlnO1xyXG5cdFx0ZWxzZSBpZiAoIWNvbmZpZy5maWx0ZXIpIGRlZmF1bHRDb25maWcgPSBjb25maWc7XHJcblx0XHRpZiAoYWN0dWFsQ29uZmlnICE9IG51bGwgJiYgYWN0dWFsQ29uZmlnLmZpbHRlciA9PSBuYW1lKSByZXR1cm4gYWN0dWFsQ29uZmlnO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGFjdHVhbENvbmZpZyB8fCBkZWZhdWx0Q29uZmlnO1xyXG59O1xyXG5cclxuY29uc3QgaXNDb25maWdBY3RpdiA9IChhTG9nZ2VyTmFtZSwgYUNvbmZpZywgYW5BY3R1YWxDb25maWcpID0+IHtcclxuXHRpZiAoYW5BY3R1YWxDb25maWcgJiYgYW5BY3R1YWxDb25maWcuZmlsdGVyLmxlbmd0aCA+PSBhQ29uZmlnLmZpbHRlci5sZW5ndGgpIHJldHVybiBmYWxzZTtcclxuXHRyZXR1cm4gYUxvZ2dlck5hbWUuc2VhcmNoKGFDb25maWcuZmlsdGVyKSA9PSAwO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QXBwZW5kZXJzID0gKGFwcGVuZGVycykgPT4ge1xyXG5cdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdGZvciAobGV0IGtleSBpbiBhcHBlbmRlcnMpIHtcclxuXHRcdGNvbnN0IGFwcGVuZGVyID0gQXBwZW5kZXIuZ2V0QXBwZW5kZXIoa2V5KTtcclxuXHRcdGlmIChhcHBlbmRlcikgcmVzdWx0LnB1c2goYXBwZW5kZXIpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNsYXNzIENvbmZpZyB7XHJcblx0Y29uc3RydWN0b3IoY29uZmlnKSB7XHJcblx0XHR0aGlzLmRhdGEgPSBsb2FkQ29uZmlnKGNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBsb2dnZXJDb25maWcobmFtZSkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZGF0YTtcclxuXHRcdGNvbnN0IGNvbmZpZyA9IGZpbmRDb25maWcobmFtZSwgZGF0YSk7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZmlsdGVyOiBjb25maWcuZmlsdGVyLFxyXG5cdFx0XHRsb2dMZXZlbDogTG9nTGV2ZWwubG9va3VwKGNvbmZpZy5sb2dMZXZlbCksXHJcblx0XHRcdGFwcGVuZGVyczogZ2V0QXBwZW5kZXJzKGNvbmZpZy5hcHBlbmRlcnMpLFxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpZztcclxuIiwiaW1wb3J0IEFwcGVuZGVyIGZyb20gXCIuL0FwcGVuZGVyXCI7XHJcbmltcG9ydCBMb2dMZXZlbCBmcm9tIFwiLi9Mb2dMZXZlbFwiO1xyXG5pbXBvcnQgRGF0ZVV0aWxzIGZyb20gXCIuL3V0aWxzL0RhdGVVdGlsc1wiO1xyXG5cclxuXHJcbmNsYXNzIENvbnNvbGVBcHBlbmRlciBleHRlbmRzIEFwcGVuZGVye1xyXG5cdGxvZ01lc3NhZ2UgKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpe1xyXG5cdFx0aWYgKExvZ0xldmVsLk5PTE9HID09IGFMb2dMZXZlbClcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0bGV0IGxvZyA9IFtdO1xyXG5cdFx0aWYgKGFEYXRlKVxyXG5cdFx0XHRsb2cucHVzaChEYXRlVXRpbHMuZGF0ZUFzU3RyaW5nKGFEYXRlKSwgXCIgXCIpO1xyXG5cdFx0XHJcblx0XHRsb2cucHVzaChcIioqKlwiLCBhTG9nTGV2ZWwudGl0bGUsIFwiKioqIFwiLCBhTG9nZ2VyTmFtZSk7XHJcblx0XHRcclxuXHRcdGlmIChhTWVzc2FnZSkge1xyXG5cdFx0XHRsb2cucHVzaChcIiAtPiBcIik7XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGFNZXNzYWdlKSlcclxuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShsb2csIGFNZXNzYWdlKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGxvZy5wdXNoKGFNZXNzYWdlKTtcclxuXHRcdH1cclxuXHRcdGlmIChhbkV4Y2VwdGlvbilcclxuXHRcdFx0bG9nLnB1c2goXCI6IFwiLCBhbkV4Y2VwdGlvbik7XHJcblx0XHRcclxuXHRcdGxldCBhcHBlbmRlciA9IGNvbnNvbGUubG9nO1x0XHRcclxuXHRcdGlmIChMb2dMZXZlbC5FUlJPUiA9PSBhTG9nTGV2ZWwpIFxyXG5cdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUuZXJyb3I7IFxyXG5cdFx0ZWxzZSBpZiAoTG9nTGV2ZWwuV0FSTiA9PSBhTG9nTGV2ZWwpXHJcblx0XHRcdGFwcGVuZGVyID0gY29uc29sZS53YXJuO1xyXG5cdFx0ZWxzZSBpZiAoTG9nTGV2ZWwuSU5GTyA9PSBhTG9nTGV2ZWwpXHJcblx0XHRcdGFwcGVuZGVyID0gY29uc29sZS5pbmZvO1xyXG5cdFx0ZWxzZSBpZiAoTG9nTGV2ZWwuREVCVUcgPT0gYUxvZ0xldmVsKVxyXG5cdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUuZGVidWc7XHJcblx0XHRlbHNlIGlmIChMb2dMZXZlbC5UUkFDRSA9PSBhTG9nTGV2ZWwpXHJcblx0XHRcdGFwcGVuZGVyID0gY29uc29sZS50cmFjZTtcclxuXHRcdFxyXG5cdFx0YXBwZW5kZXIuYXBwbHkoY29uc29sZSwgbG9nKTtcdFxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgSU5TVEFOQ0UgPSBuZXcgQ29uc29sZUFwcGVuZGVyKCk7XHJcbkFwcGVuZGVyLnJlZ2lzdGVyKFwiY29uc29sZVwiLCBJTlNUQU5DRSk7XHJcbmV4cG9ydCBkZWZhdWx0IElOU1RBTkNFOyIsImltcG9ydCBBcHBlbmRlciBmcm9tIFwiLi9BcHBlbmRlclwiO1xyXG5pbXBvcnQgRGF0ZVV0aWxzIGZyb20gXCIuL3V0aWxzL0RhdGVVdGlsc1wiO1xyXG5cclxuY29uc3QgQ09OVEFJTkVSID0gXCJbZGF0YS1sb2ddXCI7XHJcbmNsYXNzIEh0bWxBcHBlbmRlciBleHRlbmRzIEFwcGVuZGVyIHtcclxuXHRpc0F2YWlsYWJsZSgpIHtcclxuXHRcdHJldHVybiAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ09OVEFJTkVSKTtcclxuXHR9XHJcblx0bG9nTWVzc2FnZShhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKSB7XHJcblx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENPTlRBSU5FUik7XHJcblx0XHRpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuXHRcdGNvbnN0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdGVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibG9nLWVudHJ5IFwiICsgYUxvZ0xldmVsLnRpdGxlKTtcclxuXHRcdGxldCBtZXNzYWdlID0gRGF0ZVV0aWxzLmRhdGVBc1N0cmluZyhhRGF0ZSB8fCBuZXcgRGF0ZSgpKSArIFwiICoqKlwiICsgYUxvZ0xldmVsLnRpdGxlICsgXCIqKiogXCIgKyBhTG9nZ2VyTmFtZSArIFwiXCI7XHJcblxyXG5cdFx0aWYgKGFNZXNzYWdlKSBtZXNzYWdlICs9IFwiIC0+IFwiICsgYU1lc3NhZ2U7XHJcblx0XHRpZiAoYW5FeGNlcHRpb24pIG1lc3NhZ2UgKz0gXCI6IFwiICsgYW5FeGNlcHRpb247XHJcblxyXG5cdFx0ZW50cnkudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG5cdFx0cmV0dXJuIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyeSk7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBJTlNUQU5DRSA9IG5ldyBIdG1sQXBwZW5kZXIoKTtcclxuQXBwZW5kZXIucmVnaXN0ZXIoXCJodG1sXCIsIElOU1RBTkNFKTtcclxuZXhwb3J0IGRlZmF1bHQgSU5TVEFOQ0U7XHJcbiIsImltcG9ydCBBcHBlbmRlciBmcm9tIFwiLi9BcHBlbmRlclwiO1xyXG5pbXBvcnQgSHRtbEFwcGVuZGVyIGZyb20gXCIuL0h0bWxBcHBlbmRlclwiO1xyXG5pbXBvcnQgQ29uc29sZUFwcGVuZGVyIGZyb20gXCIuL0NvbnNvbGVBcHBlbmRlclwiO1xyXG5pbXBvcnQgTWVtb3J5QXBwZW5kZXIgZnJvbSBcIi4vTWVtb3J5QXBwZW5kZXJcIjtcclxuXHJcbmxldCBhcHBlbmRlcjtcclxuY29uc3QgZ2V0QXBwZW5kZXIgPSAoKSA9PiB7XHJcblx0aWYgKGFwcGVuZGVyKSB7XHRcdFxyXG5cdFx0aWYgKGNvbnNvbGUpXHJcblx0XHRcdGFwcGVuZGVyID0gQ29uc29sZUFwcGVuZGVyO1xyXG5cdFx0ZWxzZSBpZiAoSHRtbEFwcGVuZGVyLmlzQXZhaWxhYmxlKCkpXHJcblx0XHRcdGFwcGVuZGVyID0gSHRtbEFwcGVuZGVyO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRhcHBlbmRlciA9IE1lbW9yeUFwcGVuZGVyO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gYXBwZW5kZXI7XHJcbn07XHJcbmNsYXNzIEludGVsbGlnZW50QnJvd3NlckFwcGVuZGVyIGV4dGVuZHMgQXBwZW5kZXIge1xyXG5cdGxvZ01lc3NhZ2UoYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBhTG9nZ2VyTmFtZSwgYURhdGUsIGFMb2dMZXZlbCkge1xyXG5cdFx0Z2V0QXBwZW5kZXIoKS5sb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IElOU1RBTkNFID0gbmV3IEludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIoKTtcclxuQXBwZW5kZXIucmVnaXN0ZXIoXCJpbnRlbGxpZ2VudFwiLCBJTlNUQU5DRSk7XHJcbmV4cG9ydCBkZWZhdWx0IElOU1RBTkNFO1xyXG4iLCJleHBvcnQgY29uc3QgTk9MT0cgPSBuZXcgTG9nTGV2ZWwoMCwgXCJOT0xPR1wiKTtcclxuZXhwb3J0IGNvbnN0IEVSUk9SID0gbmV3IExvZ0xldmVsKDEsIFwiRVJST1JcIik7XHJcbmV4cG9ydCBjb25zdCBXQVJOID0gbmV3IExvZ0xldmVsKDIsIFwiV0FSTlwiKTtcclxuZXhwb3J0IGNvbnN0IElORk8gPSBuZXcgTG9nTGV2ZWwoMywgXCJJTkZPXCIpO1xyXG5leHBvcnQgY29uc3QgREVCVUcgPSBuZXcgTG9nTGV2ZWwoNCwgXCJERUJVR1wiKTtcclxuZXhwb3J0IGNvbnN0IFRSQUNFID0gbmV3IExvZ0xldmVsKDUsIFwiVFJBQ0VcIik7XHJcblxyXG5jbGFzcyBMb2dMZXZlbCB7XHJcblx0c3RhdGljIGdldCBOT0xPRygpIHtcclxuXHRcdHJldHVybiBOT0xPRztcclxuXHR9XHJcblx0c3RhdGljIGdldCBFUlJPUigpIHtcclxuXHRcdHJldHVybiBFUlJPUjtcclxuXHR9XHJcblx0c3RhdGljIGdldCBXQVJOKCkge1xyXG5cdFx0cmV0dXJuIFdBUk47XHJcblx0fVxyXG5cdHN0YXRpYyBnZXQgSU5GTygpIHtcclxuXHRcdHJldHVybiBJTkZPO1xyXG5cdH1cclxuXHRzdGF0aWMgZ2V0IERFQlVHKCkge1xyXG5cdFx0cmV0dXJuIERFQlVHO1xyXG5cdH1cclxuXHRzdGF0aWMgZ2V0IFRSQUNFKCkge1xyXG5cdFx0cmV0dXJuIFRSQUNFO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoYU9yZGVyLCBhVGl0bGUpIHtcclxuXHRcdHRoaXMub3JkZXIgPSBhT3JkZXI7XHJcblx0XHR0aGlzLnRpdGxlID0gYVRpdGxlO1xyXG5cdH1cclxuXHJcblx0aXNJbmNsdWRlZChhTG9nTGV2ZWwpIHtcclxuXHRcdHJldHVybiB0aGlzLm9yZGVyID49IGFMb2dMZXZlbC5vcmRlcjtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb29rdXAoYUxldmVsKSB7XHJcblx0XHRpZiAodHlwZW9mIGFMZXZlbCAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIE5PTE9HO1xyXG5cdFx0cmV0dXJuIExvZ0xldmVsW2FMZXZlbC50b1VwcGVyQ2FzZSgpXSB8fCBOT0xPRztcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ0xldmVsO1xyXG4iLCJpbXBvcnQgTG9nTGV2ZWwgZnJvbSBcIi4vTG9nTGV2ZWxcIjtcclxuXHJcbmNsYXNzIExvZ2dlciB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgY29uZmlnKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5fX2NvbmZpZ19fID0gY29uZmlnO1xyXG5cdH1cclxuXHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9fY29uZmlnX187XHJcblx0fVxyXG5cclxuXHRzZXQgY29uZmlnKGNvbmZpZykge1xyXG5cdFx0dGhpcy5fX2NvbmZpZ19fID0gY29uZmlnO1xyXG5cdH1cclxuXHJcblx0bG9nRXJyb3IoYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcclxuXHRcdHJldHVybiB0aGlzLmxvZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbiwgTG9nTGV2ZWwuRVJST1IpO1xyXG5cdH1cclxuXHJcblx0bG9nV2FybihhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xyXG5cdFx0dGhpcy5sb2coYU1lc3NhZ2UsIGFFeGNlcHRpb24sIExvZ0xldmVsLldBUk4pO1xyXG5cdH1cclxuXHJcblx0bG9nSW5mbyhhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xyXG5cdFx0dGhpcy5sb2coYU1lc3NhZ2UsIGFFeGNlcHRpb24sIExvZ0xldmVsLklORk8pO1xyXG5cdH1cclxuXHJcblx0bG9nRGVidWcoYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcclxuXHRcdHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBMb2dMZXZlbC5ERUJVRyk7XHJcblx0fVxyXG5cclxuXHRhc3luY2xvZ1RyYWNlKGFNZXNzYWdlLCBhRXhjZXB0aW9uKSB7XHJcblx0XHR0aGlzLmxvZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbiwgTG9nTGV2ZWwuVFJBQ0UpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgbG9nKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ0xldmVsKSB7XHJcblx0XHRjb25zdCBjb25maWcgPSBhd2FpdCB0aGlzLmNvbmZpZztcclxuXHRcdGlmICghY29uZmlnLmxvZ0xldmVsLmlzSW5jbHVkZWQoYUxvZ0xldmVsKSkgcmV0dXJuO1xyXG5cdFx0aWYgKCFjb25maWcuYXBwZW5kZXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLm5hbWU7XHJcblx0XHRjb25zdCB7IGFwcGVuZGVycyB9ID0gY29uZmlnO1xyXG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRhKCk7XHJcblxyXG5cdFx0c2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcblx0XHRcdGZvciAobGV0IGFwcGVuZGVyIG9mIGFwcGVuZGVycykgXHJcblx0XHRcdFx0YXBwZW5kZXIubG9nTWVzc2FnZShhTWVzc2FnZSwgYW5FeGNlcHRpb24sIG5hbWUsIGRhdGUsIGFMb2dMZXZlbCk7XHJcblx0XHR9LCAxMDApO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMb2dnZXI7XHJcbiIsImltcG9ydCBDb25maWcgZnJvbSBcIi4vQ29uZmlnXCI7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4vTG9nZ2VyXCI7XHJcblxyXG5jb25zdCBMT0dHRVJNQVAgPSBuZXcgTWFwKCk7XHJcblxyXG5jb25zdCB1cGRhdGVMb2dnZXIgPSAoY29uZmlnKSA9PiB7XHRcclxuXHRmb3IgKGxldCBbbmFtZSwgbG9nZ2VyXSBvZiBMT0dHRVJNQVApXHJcblx0XHRsb2dnZXIuY29uZmlnID0gY29uZmlnLmxvZ2dlckNvbmZpZyhuYW1lKTtcclxufTtcclxuXHJcbmNsYXNzIExvZ2dlckZhY3Rvcnkge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fX2NvbmZpZ19fID0gbmV3IENvbmZpZygpOyBcclxuXHR9XHJcblxyXG5cdG5ld0xvZ2dlcihuYW1lKSB7XHJcblx0XHRpZiAoIUxPR0dFUk1BUC5oYXMobmFtZSkpXHJcblx0XHRcdExPR0dFUk1BUC5zZXQobmFtZSwgbmV3IExvZ2dlcihuYW1lLCB0aGlzLl9fY29uZmlnX18ubG9nZ2VyQ29uZmlnKG5hbWUpKSk7XHJcblxyXG5cdFx0cmV0dXJuIExPR0dFUk1BUC5nZXQobmFtZSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBjb25maWcoY29uZmlnKXtcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuIHRoaXMuX19jb25maWdfXztcclxuXHRcdFxyXG5cdFx0dGhpcy5fX2NvbmZpZ19fID0gbmV3IENvbmZpZyhjb25maWcpO1xyXG5cdFx0dXBkYXRlTG9nZ2VyKHRoaXMuX19jb25maWdfXyk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyRmFjdG9yeTtcclxuIiwiaW1wb3J0IEFwcGVuZGVyIGZyb20gXCIuL0FwcGVuZGVyXCI7XHJcblxyXG5jb25zdCBHTE9CQUwgPSBzZWxmIHx8IGdsb2JhbCB8fCB3aW5kb3cgfHwgdGhpcyB8fCB7fTtcclxuY29uc3QgTE9HID0gR0xPQkFMLl9fTE9HX18gPSBbXTtcclxuY2xhc3MgTWVtb3J5QXBwZW5kZXIgZXh0ZW5kcyBBcHBlbmRlciB7XHJcblx0bG9nTWVzc2FnZShhTWVzc2FnZSwgYW5FeGNlcHRpb24sYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpIHtcdFx0XHJcblx0XHRMT0cucHVzaCh7XHJcblx0XHRcdFwiZGF0ZVwiIDogYURhdGUsXHJcblx0XHRcdFwibG9nTGV2ZWxcIiA6IGFMb2dMZXZlbCxcclxuXHRcdFx0XCJsb2dnZXJOYW1lXCIgOiBhTG9nZ2VyTmFtZSxcclxuXHRcdFx0XCJtZXNzYWdlXCIgOiBhTWVzc2FnZSxcclxuXHRcdFx0XCJleGNlcHRpb25cIiA6IGFuRXhjZXB0aW9uXHJcblx0XHR9KTtcclxuXHR9XHJcbn07IFxyXG5cclxuY29uc3QgSU5TVEFOQ0UgPSBuZXcgTWVtb3J5QXBwZW5kZXIoKTtcclxuQXBwZW5kZXIucmVnaXN0ZXIoXCJtZW1vcnlcIiwgSU5TVEFOQ0UpO1xyXG5leHBvcnQgZGVmYXVsdCBJTlNUQU5DRTtcclxuIiwiY29uc3QgRGF0ZVV0aWxzID0ge1xyXG5cdFx0ZGF0ZUFzU3RyaW5nIDogZnVuY3Rpb24oYURhdGUpe1xyXG5cdFx0XHRpZighYURhdGUgaW5zdGFuY2VvZiBEYXRlKVxyXG5cdFx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHJlc3VsdCA9IFwiXCI7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0RnVsbFllYXIoKSArIFwiLlwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRNb250aCgpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldE1vbnRoKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldE1vbnRoKCk7XHJcblx0XHRcdHJlc3VsdCArPSBcIi5cIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0RGF0ZSgpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldERhdGUoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0RGF0ZSgpO1x0XHRcclxuXHRcdFx0cmVzdWx0ICs9ICBcIiBcIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0SG91cnMoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXRIb3VycygpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRIb3VycygpO1xyXG5cdFx0XHRyZXN1bHQgKz0gXCI6XCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldE1pbnV0ZXMoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXRNaW51dGVzKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0cmVzdWx0ICs9IFwiOlwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRTZWNvbmRzKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0U2Vjb25kcygpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRTZWNvbmRzKCk7XHJcblx0XHRcdHJlc3VsdCArPSBcIjpcIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMDBcIiArIGFEYXRlLmdldE1pbGxpc2Vjb25kcygpO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRNaWxsaXNlY29uZHMoKSA8IDEwMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldE1pbGxpc2Vjb25kcygpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGF0ZVV0aWxzOyJdLCJzb3VyY2VSb290IjoiIn0=