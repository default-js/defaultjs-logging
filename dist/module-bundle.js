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
_Appender__WEBPACK_IMPORTED_MODULE_0__["default"].register("ConsoleAppender", INSTANCE);
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
_Appender__WEBPACK_IMPORTED_MODULE_0__["default"].register("HtmlAppender", INSTANCE);
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

const INSTANCE = new IntelligentBrowserAppender();
_Appender__WEBPACK_IMPORTED_MODULE_0__["default"].register("IntelligentBrowserAppender", INSTANCE);
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
			const name = this.name;
			const date = new Date();
			
		setTimeout(async () => {
			const config = await this.config;
			if (!config.logLevel.isIncluded(aLogLevel)) return;
			const { appenders } = config;
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
			return this.__config__.data;
		
		this.__config__ = new _Config__WEBPACK_IMPORTED_MODULE_0__["default"](config);
		updateLogger(this.__config__);
	}

}

const INSTANCE = new LoggerFactory();

/* harmony default export */ __webpack_exports__["default"] = (INSTANCE);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc29sZUFwcGVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9IdG1sQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ0xldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9Mb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ2dlckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01lbW9yeUFwcGVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9EYXRlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNlLHdFQUFTLEU7Ozs7Ozs7Ozs7OztBQzNDeEI7QUFBQTtBQUFvQztBQUNwQztBQUNBLGNBQWMsa0RBQVM7QUFDdkI7QUFDZSxvRUFBSyxFIiwiZmlsZSI6Im1vZHVsZS1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gXCIuL3NyYy91dGlsc1wiO1xyXG5pbXBvcnQgQXBwZW5kZXIgZnJvbSBcIi4vc3JjL0FwcGVuZGVyXCI7XHJcbmltcG9ydCBDb25zb2xlQXBwZW5kZXIgZnJvbSBcIi4vc3JjL0NvbnNvbGVBcHBlbmRlclwiO1xyXG5pbXBvcnQgSHRtbEFwcGVuZGVyIGZyb20gXCIuL3NyYy9IdG1sQXBwZW5kZXJcIjtcclxuaW1wb3J0IEludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIgZnJvbSBcIi4vc3JjL0ludGVsaWdlbnRCcm93c2VyQXBwZW5kZXJcIjtcclxuaW1wb3J0IE1lbW9yeUFwcGVuZGVyIGZyb20gXCIuL3NyYy9NZW1vcnlBcHBlbmRlclwiO1xyXG5pbXBvcnQgTG9nTGV2ZWwgZnJvbSBcIi4vc3JjL0xvZ0xldmVsXCI7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4vc3JjL0xvZ2dlclwiO1xyXG5pbXBvcnQgTG9nZ2VyRmFjdG9yeSBmcm9tIFwiLi9zcmMvTG9nZ2VyRmFjdG9yeVwiO1xyXG5cclxuZXhwb3J0IHsgXHJcbiAgICB1dGlscywgXHJcbiAgICBBcHBlbmRlciwgXHJcbiAgICBDb25zb2xlQXBwZW5kZXIsIFxyXG4gICAgSHRtbEFwcGVuZGVyLCBcclxuICAgIEludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIsIFxyXG4gICAgTWVtb3J5QXBwZW5kZXIsIFxyXG4gICAgTG9nTGV2ZWwsIFxyXG4gICAgTG9nZ2VyLCBcclxuICAgIExvZ2dlckZhY3RvcnkgXHJcbn07XHJcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImNvbnN0IEFQUEVOREVSUyA9IG5ldyBNYXAoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGVuZGVyIHtcclxuXHRzdGF0aWMgZ2V0QXBwZW5kZXIobmFtZSkge1xyXG5cdFx0cmV0dXJuIEFQUEVOREVSUy5nZXQobmFtZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcmVnaXN0ZXIobmFtZSwgYXBwZW5kZXIpIHtcclxuXHRcdEFQUEVOREVSUy5zZXQobmFtZSwgYXBwZW5kZXIpO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRsb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpIHt9XHJcbn1cclxuIiwiaW1wb3J0IExvZ0xldmVsIGZyb20gXCIuL0xvZ0xldmVsXCI7XG5pbXBvcnQgQXBwZW5kZXIgZnJvbSBcIi4vQXBwZW5kZXJcIjtcblxuY29uc3QgREVGQVVMVENPTkZJRyA9IHtcblx0ZmlsdGVyOiBcIlwiLFxuXHRsb2dMZXZlbDogXCJOT0xPR1wiLFxuXHRhcHBlbmRlcnM6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRDb25maWcgPSBhc3luYyAoY29uZmlnKSA9PiB7XG5cdGlmIChjb25maWcgaW5zdGFuY2VvZiBBcnJheSkgcmV0dXJuIGNvbmZpZztcblx0ZWxzZSBpZiAodHlwZW9mIGNvbmZpZyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGxvYWRSZW1vdGUoY29uZmlnKTtcblxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltsb2dnaW5nLXByb3BlcnRpZXNdXCIpO1xuXHRpZiAoZWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImxvZ2dpbmctcHJvcGVydGllc1wiKSkge1xuXHRcdGNvbmZpZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwibG9nZ2luZy1wcm9wZXJ0aWVzXCIpO1xuXHRcdHJldHVybiBKU09OLnBhcnNlKGNvbmZpZyk7XG5cdH1cbn07XG5cbmNvbnN0IGxvYWRSZW1vdGUgPSBhc3luYyAodXJsKSA9PiB7XG5cdGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKSk7XG5cdHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jb25zdCBmaW5kQ29uZmlnID0gKG5hbWUsIGRhdGEpID0+IHtcblx0bGV0IGRlZmF1bHRDb25maWcgPSBERUZBVUxUQ09ORklHO1xuXHRsZXQgYWN0dWFsQ29uZmlnID0gZGVmYXVsdENvbmZpZztcblx0Zm9yIChsZXQgY29uZmlnIG9mIGRhdGEpIHtcblx0XHRpZiAoaXNDb25maWdBY3RpdihuYW1lLCBjb25maWcsIGFjdHVhbENvbmZpZykpIGFjdHVhbENvbmZpZyA9IGNvbmZpZztcblx0XHRlbHNlIGlmICghY29uZmlnLmZpbHRlcikgZGVmYXVsdENvbmZpZyA9IGNvbmZpZztcblx0XHRpZiAoYWN0dWFsQ29uZmlnICE9IG51bGwgJiYgYWN0dWFsQ29uZmlnLmZpbHRlciA9PSBuYW1lKSByZXR1cm4gYWN0dWFsQ29uZmlnO1xuXHR9XG5cblx0cmV0dXJuIGFjdHVhbENvbmZpZyB8fCBkZWZhdWx0Q29uZmlnO1xufTtcblxuY29uc3QgaXNDb25maWdBY3RpdiA9IChuYW1lLCBjb25maWcsIGFjdHVhbENvbmZpZykgPT4ge1xuXHRpZiAoY29uZmlnICYmIGFjdHVhbENvbmZpZy5maWx0ZXIubGVuZ3RoID49IGNvbmZpZy5maWx0ZXIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cdHJldHVybiBuYW1lLnNlYXJjaChjb25maWcuZmlsdGVyKSA9PSAwO1xufTtcblxuY29uc3QgZ2V0QXBwZW5kZXJzID0gKGFwcGVuZGVycykgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBbXTtcblx0Zm9yIChsZXQga2V5IG9mIGFwcGVuZGVycykge1xuXHRcdGNvbnN0IGFwcGVuZGVyID0gQXBwZW5kZXIuZ2V0QXBwZW5kZXIoa2V5KTtcblx0XHRpZiAoYXBwZW5kZXIpIHJlc3VsdC5wdXNoKGFwcGVuZGVyKTtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5jbGFzcyBDb25maWcge1xuXHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHR0aGlzLmRhdGEgPSBsb2FkQ29uZmlnKGNvbmZpZyk7XG5cdH1cblxuXHRhc3luYyBsb2dnZXJDb25maWcobmFtZSkge1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmRhdGE7XG5cdFx0Y29uc3QgY29uZmlnID0gZmluZENvbmZpZyhuYW1lLCBkYXRhKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRmaWx0ZXI6IGNvbmZpZy5maWx0ZXIsXG5cdFx0XHRsb2dMZXZlbDogTG9nTGV2ZWwubG9va3VwKGNvbmZpZy5sb2dMZXZlbCksXG5cdFx0XHRhcHBlbmRlcnM6IGdldEFwcGVuZGVycyhjb25maWcuYXBwZW5kZXJzKSxcblx0XHR9O1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZztcbiIsImltcG9ydCBBcHBlbmRlciBmcm9tIFwiLi9BcHBlbmRlclwiO1xuaW1wb3J0IExvZ0xldmVsIGZyb20gXCIuL0xvZ0xldmVsXCI7XG5pbXBvcnQgRGF0ZVV0aWxzIGZyb20gXCIuL3V0aWxzL0RhdGVVdGlsc1wiO1xuXG5cbmNsYXNzIENvbnNvbGVBcHBlbmRlciBleHRlbmRzIEFwcGVuZGVye1xuXHRsb2dNZXNzYWdlIChhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKXtcblx0XHRpZiAoTG9nTGV2ZWwuTk9MT0cgPT0gYUxvZ0xldmVsKVxuXHRcdFx0cmV0dXJuO1xuXHRcdGxldCBsb2cgPSBbXTtcblx0XHRpZiAoYURhdGUpXG5cdFx0XHRsb2cucHVzaChEYXRlVXRpbHMuZGF0ZUFzU3RyaW5nKGFEYXRlKSwgXCIgXCIpO1xuXHRcdFxuXHRcdGxvZy5wdXNoKFwiKioqXCIsIGFMb2dMZXZlbC50aXRsZSwgXCIqKiogXCIsIGFMb2dnZXJOYW1lKTtcblx0XHRcblx0XHRpZiAoYU1lc3NhZ2UpIHtcblx0XHRcdGxvZy5wdXNoKFwiIC0+IFwiKTtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGFNZXNzYWdlKSlcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkobG9nLCBhTWVzc2FnZSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGxvZy5wdXNoKGFNZXNzYWdlKTtcblx0XHR9XG5cdFx0aWYgKGFuRXhjZXB0aW9uKVxuXHRcdFx0bG9nLnB1c2goXCI6IFwiLCBhbkV4Y2VwdGlvbik7XG5cdFx0XG5cdFx0bGV0IGFwcGVuZGVyID0gY29uc29sZS5sb2c7XHRcdFxuXHRcdGlmIChMb2dMZXZlbC5FUlJPUiA9PSBhTG9nTGV2ZWwpIFxuXHRcdFx0YXBwZW5kZXIgPSBjb25zb2xlLmVycm9yOyBcblx0XHRlbHNlIGlmIChMb2dMZXZlbC5XQVJOID09IGFMb2dMZXZlbClcblx0XHRcdGFwcGVuZGVyID0gY29uc29sZS53YXJuO1xuXHRcdGVsc2UgaWYgKExvZ0xldmVsLklORk8gPT0gYUxvZ0xldmVsKVxuXHRcdFx0YXBwZW5kZXIgPSBjb25zb2xlLmluZm87XG5cdFx0ZWxzZSBpZiAoTG9nTGV2ZWwuREVCVUcgPT0gYUxvZ0xldmVsKVxuXHRcdFx0YXBwZW5kZXIgPSBjb25zb2xlLmRlYnVnO1xuXHRcdGVsc2UgaWYgKExvZ0xldmVsLlRSQUNFID09IGFMb2dMZXZlbClcblx0XHRcdGFwcGVuZGVyID0gY29uc29sZS50cmFjZTtcblx0XHRcblx0XHRhcHBlbmRlci5hcHBseShjb25zb2xlLCBsb2cpO1x0XG5cdH1cbn1cblxuY29uc3QgSU5TVEFOQ0UgPSBuZXcgQ29uc29sZUFwcGVuZGVyKCk7XG5BcHBlbmRlci5yZWdpc3RlcihcIkNvbnNvbGVBcHBlbmRlclwiLCBJTlNUQU5DRSk7XG5leHBvcnQgZGVmYXVsdCBJTlNUQU5DRTsiLCJpbXBvcnQgQXBwZW5kZXIgZnJvbSBcIi4vQXBwZW5kZXJcIjtcbmltcG9ydCBEYXRlVXRpbHMgZnJvbSBcIi4vdXRpbHMvRGF0ZVV0aWxzXCI7XG5cbmNvbnN0IENPTlRBSU5FUiA9IFwiW2RhdGEtbG9nXVwiO1xuY2xhc3MgSHRtbEFwcGVuZGVyIGV4dGVuZHMgQXBwZW5kZXIge1xuXHRpc0F2YWlsYWJsZSgpIHtcblx0XHRyZXR1cm4gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENPTlRBSU5FUik7XG5cdH1cblx0bG9nTWVzc2FnZShhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKSB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05UQUlORVIpO1xuXHRcdGlmICghY29udGFpbmVyKSByZXR1cm47XG5cblx0XHRjb25zdCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0ZW50cnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsb2ctZW50cnkgXCIgKyBhTG9nTGV2ZWwudGl0bGUpO1xuXHRcdGxldCBtZXNzYWdlID0gRGF0ZVV0aWxzLmRhdGVBc1N0cmluZyhhRGF0ZSB8fCBuZXcgRGF0ZSgpKSArIFwiICoqKlwiICsgYUxvZ0xldmVsLnRpdGxlICsgXCIqKiogXCIgKyBhTG9nZ2VyTmFtZSArIFwiXCI7XG5cblx0XHRpZiAoYU1lc3NhZ2UpIG1lc3NhZ2UgKz0gXCIgLT4gXCIgKyBhTWVzc2FnZTtcblx0XHRpZiAoYW5FeGNlcHRpb24pIG1lc3NhZ2UgKz0gXCI6IFwiICsgYW5FeGNlcHRpb247XG5cblx0XHRlbnRyeS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG5cdFx0cmV0dXJuIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyeSk7XG5cdH1cbn1cblxuY29uc3QgSU5TVEFOQ0UgPSBuZXcgSHRtbEFwcGVuZGVyKCk7XG5BcHBlbmRlci5yZWdpc3RlcihcIkh0bWxBcHBlbmRlclwiLCBJTlNUQU5DRSk7XG5leHBvcnQgZGVmYXVsdCBJTlNUQU5DRTtcbiIsImltcG9ydCBBcHBlbmRlciBmcm9tIFwiLi9BcHBlbmRlclwiO1xuaW1wb3J0IEh0bWxBcHBlbmRlciBmcm9tIFwiLi9IdG1sQXBwZW5kZXJcIjtcbmltcG9ydCBDb25zb2xlQXBwZW5kZXIgZnJvbSBcIi4vQ29uc29sZUFwcGVuZGVyXCI7XG5pbXBvcnQgTWVtb3J5QXBwZW5kZXIgZnJvbSBcIi4vTWVtb3J5QXBwZW5kZXJcIjtcblxubGV0IGFwcGVuZGVyO1xuY29uc3QgZ2V0QXBwZW5kZXIgPSAoKSA9PiB7XG5cdGlmIChhcHBlbmRlcikge1x0XHRcblx0XHRpZiAoY29uc29sZSlcblx0XHRcdGFwcGVuZGVyID0gQ29uc29sZUFwcGVuZGVyO1xuXHRcdGVsc2UgaWYgKEh0bWxBcHBlbmRlci5pc0F2YWlsYWJsZSgpKVxuXHRcdFx0YXBwZW5kZXIgPSBIdG1sQXBwZW5kZXI7XG5cdFx0ZWxzZVxuXHRcdFx0YXBwZW5kZXIgPSBNZW1vcnlBcHBlbmRlcjtcblx0fVxuXHRcblx0cmV0dXJuIGFwcGVuZGVyO1xufTtcbmNsYXNzIEludGVsbGlnZW50QnJvd3NlckFwcGVuZGVyIGV4dGVuZHMgQXBwZW5kZXIge1xuXHRsb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpIHtcblx0XHRnZXRBcHBlbmRlcigpLmxvZ01lc3NhZ2UoYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBhTG9nZ2VyTmFtZSwgYURhdGUsIGFMb2dMZXZlbCk7XG5cdH1cbn07XG5cbmNvbnN0IElOU1RBTkNFID0gbmV3IEludGVsbGlnZW50QnJvd3NlckFwcGVuZGVyKCk7XG5BcHBlbmRlci5yZWdpc3RlcihcIkludGVsbGlnZW50QnJvd3NlckFwcGVuZGVyXCIsIElOU1RBTkNFKTtcbmV4cG9ydCBkZWZhdWx0IElOU1RBTkNFO1xuIiwiY2xhc3MgTGV2ZWwge1xyXG5cdGNvbnN0cnVjdG9yKGFPcmRlciwgYVRpdGxlKSB7XHJcblx0XHR0aGlzLm9yZGVyID0gYU9yZGVyO1xyXG5cdFx0dGhpcy50aXRsZSA9IGFUaXRsZTtcclxuXHR9XHJcblxyXG5cdGlzSW5jbHVkZWQoYUxvZ0xldmVsKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vcmRlciA+PSBhTG9nTGV2ZWwub3JkZXI7XHJcblx0fVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE5PTE9HID0gbmV3IExldmVsKDAsIFwiTk9MT0dcIik7XHJcbmV4cG9ydCBjb25zdCBFUlJPUiA9IG5ldyBMZXZlbCgxLCBcIkVSUk9SXCIpO1xyXG5leHBvcnQgY29uc3QgV0FSTiA9IG5ldyBMZXZlbCgyLCBcIldBUk5cIik7XHJcbmV4cG9ydCBjb25zdCBJTkZPID0gbmV3IExldmVsKDMsIFwiSU5GT1wiKTtcclxuZXhwb3J0IGNvbnN0IERFQlVHID0gbmV3IExldmVsKDQsIFwiREVCVUdcIik7XHJcbmV4cG9ydCBjb25zdCBUUkFDRSA9IG5ldyBMZXZlbCg1LCBcIlRSQUNFXCIpO1xyXG5cclxuY29uc3QgTG9nTGV2ZWwgPSB7XHJcblx0Tk9MT0csXHJcblx0RVJST1IsXHJcblx0V0FSTixcclxuXHRJTkZPLFxyXG5cdERFQlVHLFxyXG5cdFRSQUNFLFxyXG5cdGxvb2t1cDogKGFMZXZlbCkgPT4ge1xyXG5cdFx0aWYgKHR5cGVvZiBhTGV2ZWwgIT09IFwic3RyaW5nXCIpIHJldHVybiBOT0xPRztcclxuXHRcdHJldHVybiBMb2dMZXZlbFthTGV2ZWwudG9VcHBlckNhc2UoKV0gfHwgTk9MT0c7XHJcblx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMb2dMZXZlbDtcclxuXHJcbiIsImltcG9ydCBMb2dMZXZlbCBmcm9tIFwiLi9Mb2dMZXZlbFwiO1xuXG5jbGFzcyBMb2dnZXIge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBjb25maWcpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuX19jb25maWdfXyA9IGNvbmZpZztcblx0fVxuXG5cdGdldCBjb25maWcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX19jb25maWdfXztcblx0fVxuXG5cdHNldCBjb25maWcoY29uZmlnKSB7XG5cdFx0dGhpcy5fX2NvbmZpZ19fID0gY29uZmlnO1xuXHR9XG5cblx0bG9nRXJyb3IoYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcblx0XHRyZXR1cm4gdGhpcy5sb2coYU1lc3NhZ2UsIGFFeGNlcHRpb24sIExvZ0xldmVsLkVSUk9SKTtcblx0fVxuXG5cdGxvZ1dhcm4oYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcblx0XHR0aGlzLmxvZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbiwgTG9nTGV2ZWwuV0FSTik7XG5cdH1cblxuXHRsb2dJbmZvKGFNZXNzYWdlLCBhRXhjZXB0aW9uKSB7XG5cdFx0dGhpcy5sb2coYU1lc3NhZ2UsIGFFeGNlcHRpb24sIExvZ0xldmVsLklORk8pO1xuXHR9XG5cblx0bG9nRGVidWcoYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcblx0XHR0aGlzLmxvZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbiwgTG9nTGV2ZWwuREVCVUcpO1xuXHR9XG5cblx0YXN5bmNsb2dUcmFjZShhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xuXHRcdHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBMb2dMZXZlbC5UUkFDRSk7XG5cdH1cblxuXHRhc3luYyBsb2coYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBhTG9nTGV2ZWwpIHtcdFx0XG5cdFx0XHRjb25zdCBuYW1lID0gdGhpcy5uYW1lO1xuXHRcdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcblx0XHRzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IGNvbmZpZyA9IGF3YWl0IHRoaXMuY29uZmlnO1xuXHRcdFx0aWYgKCFjb25maWcubG9nTGV2ZWwuaXNJbmNsdWRlZChhTG9nTGV2ZWwpKSByZXR1cm47XG5cdFx0XHRjb25zdCB7IGFwcGVuZGVycyB9ID0gY29uZmlnO1xuXHRcdFx0Zm9yIChsZXQgYXBwZW5kZXIgb2YgYXBwZW5kZXJzKVxuXHRcdFx0XHRhcHBlbmRlci5sb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgbmFtZSwgZGF0ZSwgYUxvZ0xldmVsKTtcblx0XHR9LCAxMDApO1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBMb2dnZXI7XG4iLCJpbXBvcnQgQ29uZmlnIGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9Mb2dnZXJcIjtcblxuY29uc3QgTE9HR0VSTUFQID0gbmV3IE1hcCgpO1xuXG5jb25zdCB1cGRhdGVMb2dnZXIgPSAoY29uZmlnKSA9PiB7XHRcblx0Zm9yIChsZXQgW25hbWUsIGxvZ2dlcl0gb2YgTE9HR0VSTUFQKVxuXHRcdGxvZ2dlci5jb25maWcgPSBjb25maWcubG9nZ2VyQ29uZmlnKG5hbWUpO1xufTtcblxuY2xhc3MgTG9nZ2VyRmFjdG9yeSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuX19jb25maWdfXyA9IG5ldyBDb25maWcoKTsgXG5cdH1cblxuXHRuZXdMb2dnZXIobmFtZSkge1xuXHRcdGlmICghTE9HR0VSTUFQLmhhcyhuYW1lKSlcblx0XHRcdExPR0dFUk1BUC5zZXQobmFtZSwgbmV3IExvZ2dlcihuYW1lLCB0aGlzLl9fY29uZmlnX18ubG9nZ2VyQ29uZmlnKG5hbWUpKSk7XG5cblx0XHRyZXR1cm4gTE9HR0VSTUFQLmdldChuYW1lKTtcblx0fVxuXG5cdGFzeW5jIGNvbmZpZyhjb25maWcpe1xuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcblx0XHRcdHJldHVybiB0aGlzLl9fY29uZmlnX18uZGF0YTtcblx0XHRcblx0XHR0aGlzLl9fY29uZmlnX18gPSBuZXcgQ29uZmlnKGNvbmZpZyk7XG5cdFx0dXBkYXRlTG9nZ2VyKHRoaXMuX19jb25maWdfXyk7XG5cdH1cblxufVxuXG5jb25zdCBJTlNUQU5DRSA9IG5ldyBMb2dnZXJGYWN0b3J5KCk7XG5cbmV4cG9ydCBkZWZhdWx0IElOU1RBTkNFO1xuIiwiaW1wb3J0IEFwcGVuZGVyIGZyb20gXCIuL0FwcGVuZGVyXCI7XG5cbmNvbnN0IEdMT0JBTCA9IHNlbGYgfHwgZ2xvYmFsIHx8IHdpbmRvdyB8fCB0aGlzIHx8IHt9O1xuY29uc3QgTE9HID0gKCkgPT4ge1xuXHRpZighKEdMT0JBTC5fX0xPR19fIGluc3RhbmNlb2YgQXJyYXkpKVxuXHRcdEdMT0JBTC5fX0xPR19fID0gW107XG5cdHJldHVybiBHTE9CQUwuX19MT0dfXztcbn0gIDtcblxuXG5cbmNsYXNzIE1lbW9yeUFwcGVuZGVyIGV4dGVuZHMgQXBwZW5kZXIge1xuXHRsb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbixhTG9nZ2VyTmFtZSwgYURhdGUsIGFMb2dMZXZlbCkge1xuXHRcdGNvbnN0IGxvZyA9IExPRygpO1x0XHRcblx0XHRsb2cucHVzaCh7XG5cdFx0XHRcImRhdGVcIiA6IGFEYXRlLFxuXHRcdFx0XCJsb2dMZXZlbFwiIDogYUxvZ0xldmVsLFxuXHRcdFx0XCJsb2dnZXJOYW1lXCIgOiBhTG9nZ2VyTmFtZSxcblx0XHRcdFwibWVzc2FnZVwiIDogYU1lc3NhZ2UsXG5cdFx0XHRcImV4Y2VwdGlvblwiIDogYW5FeGNlcHRpb25cblx0XHR9KTtcblx0fVxufTsgXG5cbmNvbnN0IElOU1RBTkNFID0gbmV3IE1lbW9yeUFwcGVuZGVyKCk7XG5BcHBlbmRlci5yZWdpc3RlcihcIk1lbW9yeUFwcGVuZGVyXCIsIElOU1RBTkNFKTtcbmV4cG9ydCBkZWZhdWx0IElOU1RBTkNFO1xuIiwiY29uc3QgRGF0ZVV0aWxzID0ge1xyXG5cdFx0ZGF0ZUFzU3RyaW5nIDogZnVuY3Rpb24oYURhdGUpe1xyXG5cdFx0XHRpZighYURhdGUgaW5zdGFuY2VvZiBEYXRlKVxyXG5cdFx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHJlc3VsdCA9IFwiXCI7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0RnVsbFllYXIoKSArIFwiLlwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRNb250aCgpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldE1vbnRoKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldE1vbnRoKCk7XHJcblx0XHRcdHJlc3VsdCArPSBcIi5cIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0RGF0ZSgpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldERhdGUoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0RGF0ZSgpO1x0XHRcclxuXHRcdFx0cmVzdWx0ICs9ICBcIiBcIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0SG91cnMoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXRIb3VycygpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRIb3VycygpO1xyXG5cdFx0XHRyZXN1bHQgKz0gXCI6XCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldE1pbnV0ZXMoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXRNaW51dGVzKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0cmVzdWx0ICs9IFwiOlwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRTZWNvbmRzKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0U2Vjb25kcygpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRTZWNvbmRzKCk7XHJcblx0XHRcdHJlc3VsdCArPSBcIjpcIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMDBcIiArIGFEYXRlLmdldE1pbGxpc2Vjb25kcygpO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRNaWxsaXNlY29uZHMoKSA8IDEwMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldE1pbGxpc2Vjb25kcygpO1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGF0ZVV0aWxzOyIsImltcG9ydCBEYXRlVXRpbHMgZnJvbSBcIi4vRGF0ZVV0aWxzXCI7XHJcbmNvbnN0IHV0aWxzID0ge1xyXG5cdFx0RGF0ZVV0aWxzIDogRGF0ZVV0aWxzXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHV0aWxzOyJdLCJzb3VyY2VSb290IjoiIn0=