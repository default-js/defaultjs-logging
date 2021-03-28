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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnJvd3Nlci1idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc29sZUFwcGVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9IdG1sQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ0xldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9Mb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ2dlckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01lbW9yeUFwcGVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9EYXRlVXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7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Ozs7Ozs7QUMxQnhCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZSx3RUFBUyxFIiwiZmlsZSI6ImJyb3dzZXItYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9icm93c2VyLWJ1bmRsZS5qc1wiKTtcbiIsImltcG9ydCBDb25zb2xlQXBwZW5kZXIgZnJvbSBcIi4vc3JjL0NvbnNvbGVBcHBlbmRlclwiO1xyXG5pbXBvcnQgSHRtbEFwcGVuZGVyIGZyb20gXCIuL3NyYy9IdG1sQXBwZW5kZXJcIjtcclxuaW1wb3J0IEludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIgZnJvbSBcIi4vc3JjL0ludGVsaWdlbnRCcm93c2VyQXBwZW5kZXJcIjtcclxuaW1wb3J0IE1lbW9yeUFwcGVuZGVyIGZyb20gXCIuL3NyYy9NZW1vcnlBcHBlbmRlclwiO1xyXG5pbXBvcnQgTG9nTGV2ZWwgZnJvbSBcIi4vc3JjL0xvZ0xldmVsXCI7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4vc3JjL0xvZ2dlclwiO1xyXG5pbXBvcnQgTG9nZ2VyRmFjdG9yeSBmcm9tIFwiLi9zcmMvTG9nZ2VyRmFjdG9yeVwiO1xyXG5cclxuY29uc3QgZ2xvYmFsID0gc2VsZiB8fCBnbG9iYWwgfHwgd2luZG93IHx8IHRoaXMgfHwge307XHJcbmdsb2JhbC5kZWZhdWx0anMgPSBnbG9iYWwuZGVmYXVsdGpzIHx8IHt9O1xyXG5nbG9iYWwuZGVmYXVsdGpzLmxvZ2dpbmcgPSBnbG9iYWwuZGVmYXVsdGpzLmxvZ2dpbmcgfHwge1xyXG5cdFZFUlNJT04gOiBcIiR7dmVyc2lvbn1cIixcclxuXHR1dGlscyA6IHV0aWxzLFxyXG5cdENvbnNvbGVBcHBlbmRlciA6IENvbnNvbGVBcHBlbmRlcixcclxuXHRDb25zb2xlbkFwcGVuZGVyIDogQ29uc29sZUFwcGVuZGVyLFxyXG5cdEh0bWxBcHBlbmRlciA6IEh0bWxBcHBlbmRlcixcclxuXHRNZW1vcnlBcHBlbmRlciA6IE1lbW9yeUFwcGVuZGVyLFxyXG5cdEludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIgOiBJbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyLFxyXG5cdExvZ0xldmVsIDogTG9nTGV2ZWwsXHJcblx0TG9nZ2VyIDogTG9nZ2VyLFxyXG5cdExvZ2dlckZhY3RvcnkgOiBMb2dnZXJGYWN0b3J5XHJcbn07IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiY29uc3QgQVBQRU5ERVJTID0gbmV3IE1hcCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwZW5kZXIge1xyXG5cdHN0YXRpYyBnZXRBcHBlbmRlcihuYW1lKSB7XHJcblx0XHRyZXR1cm4gQVBQRU5ERVJTLmdldChuYW1lKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyByZWdpc3RlcihuYW1lLCBhcHBlbmRlcikge1xyXG5cdFx0QVBQRU5ERVJTLnNldChuYW1lLCBhcHBlbmRlcik7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdGxvZ01lc3NhZ2UoYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBhTG9nZ2VyTmFtZSwgYURhdGUsIGFMb2dMZXZlbCkge31cclxufVxyXG4iLCJpbXBvcnQgTG9nTGV2ZWwgZnJvbSBcIi4vTG9nTGV2ZWxcIjtcbmltcG9ydCBBcHBlbmRlciBmcm9tIFwiLi9BcHBlbmRlclwiO1xuXG5jb25zdCBERUZBVUxUQ09ORklHID0ge1xuXHRmaWx0ZXI6IFwiXCIsXG5cdGxvZ0xldmVsOiBcIk5PTE9HXCIsXG5cdGFwcGVuZGVyczogW10sXG59O1xuXG5leHBvcnQgY29uc3QgbG9hZENvbmZpZyA9IGFzeW5jIChjb25maWcpID0+IHtcblx0aWYgKGNvbmZpZyBpbnN0YW5jZW9mIEFycmF5KSByZXR1cm4gY29uZmlnO1xuXHRlbHNlIGlmICh0eXBlb2YgY29uZmlnID09PSBcInN0cmluZ1wiKSByZXR1cm4gbG9hZFJlbW90ZShjb25maWcpO1xuXG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2xvZ2dpbmctcHJvcGVydGllc11cIik7XG5cdGlmIChlbGVtZW50ICYmIGVsZW1lbnQuaGFzQXR0cmlidXRlKFwibG9nZ2luZy1wcm9wZXJ0aWVzXCIpKSB7XG5cdFx0Y29uZmlnID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJsb2dnaW5nLXByb3BlcnRpZXNcIik7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoY29uZmlnKTtcblx0fVxufTtcblxuY29uc3QgbG9hZFJlbW90ZSA9IGFzeW5jICh1cmwpID0+IHtcblx0bGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpKTtcblx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmNvbnN0IGZpbmRDb25maWcgPSAobmFtZSwgZGF0YSkgPT4ge1xuXHRsZXQgZGVmYXVsdENvbmZpZyA9IERFRkFVTFRDT05GSUc7XG5cdGxldCBhY3R1YWxDb25maWcgPSBkZWZhdWx0Q29uZmlnO1xuXHRmb3IgKGxldCBjb25maWcgb2YgZGF0YSkge1xuXHRcdGlmIChpc0NvbmZpZ0FjdGl2KG5hbWUsIGNvbmZpZywgYWN0dWFsQ29uZmlnKSkgYWN0dWFsQ29uZmlnID0gY29uZmlnO1xuXHRcdGVsc2UgaWYgKCFjb25maWcuZmlsdGVyKSBkZWZhdWx0Q29uZmlnID0gY29uZmlnO1xuXHRcdGlmIChhY3R1YWxDb25maWcgIT0gbnVsbCAmJiBhY3R1YWxDb25maWcuZmlsdGVyID09IG5hbWUpIHJldHVybiBhY3R1YWxDb25maWc7XG5cdH1cblxuXHRyZXR1cm4gYWN0dWFsQ29uZmlnIHx8IGRlZmF1bHRDb25maWc7XG59O1xuXG5jb25zdCBpc0NvbmZpZ0FjdGl2ID0gKG5hbWUsIGNvbmZpZywgYWN0dWFsQ29uZmlnKSA9PiB7XG5cdGlmIChjb25maWcgJiYgYWN0dWFsQ29uZmlnLmZpbHRlci5sZW5ndGggPj0gY29uZmlnLmZpbHRlci5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIG5hbWUuc2VhcmNoKGNvbmZpZy5maWx0ZXIpID09IDA7XG59O1xuXG5jb25zdCBnZXRBcHBlbmRlcnMgPSAoYXBwZW5kZXJzKSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRmb3IgKGxldCBrZXkgb2YgYXBwZW5kZXJzKSB7XG5cdFx0Y29uc3QgYXBwZW5kZXIgPSBBcHBlbmRlci5nZXRBcHBlbmRlcihrZXkpO1xuXHRcdGlmIChhcHBlbmRlcikgcmVzdWx0LnB1c2goYXBwZW5kZXIpO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbmNsYXNzIENvbmZpZyB7XG5cdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuXHRcdHRoaXMuZGF0YSA9IGxvYWRDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdGFzeW5jIGxvZ2dlckNvbmZpZyhuYW1lKSB7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZGF0YTtcblx0XHRjb25zdCBjb25maWcgPSBmaW5kQ29uZmlnKG5hbWUsIGRhdGEpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGZpbHRlcjogY29uZmlnLmZpbHRlcixcblx0XHRcdGxvZ0xldmVsOiBMb2dMZXZlbC5sb29rdXAoY29uZmlnLmxvZ0xldmVsKSxcblx0XHRcdGFwcGVuZGVyczogZ2V0QXBwZW5kZXJzKGNvbmZpZy5hcHBlbmRlcnMpLFxuXHRcdH07XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnO1xuIiwiaW1wb3J0IEFwcGVuZGVyIGZyb20gXCIuL0FwcGVuZGVyXCI7XG5pbXBvcnQgTG9nTGV2ZWwgZnJvbSBcIi4vTG9nTGV2ZWxcIjtcbmltcG9ydCBEYXRlVXRpbHMgZnJvbSBcIi4vdXRpbHMvRGF0ZVV0aWxzXCI7XG5cblxuY2xhc3MgQ29uc29sZUFwcGVuZGVyIGV4dGVuZHMgQXBwZW5kZXJ7XG5cdGxvZ01lc3NhZ2UgKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpe1xuXHRcdGlmIChMb2dMZXZlbC5OT0xPRyA9PSBhTG9nTGV2ZWwpXG5cdFx0XHRyZXR1cm47XG5cdFx0bGV0IGxvZyA9IFtdO1xuXHRcdGlmIChhRGF0ZSlcblx0XHRcdGxvZy5wdXNoKERhdGVVdGlscy5kYXRlQXNTdHJpbmcoYURhdGUpLCBcIiBcIik7XG5cdFx0XG5cdFx0bG9nLnB1c2goXCIqKipcIiwgYUxvZ0xldmVsLnRpdGxlLCBcIioqKiBcIiwgYUxvZ2dlck5hbWUpO1xuXHRcdFxuXHRcdGlmIChhTWVzc2FnZSkge1xuXHRcdFx0bG9nLnB1c2goXCIgLT4gXCIpO1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoYU1lc3NhZ2UpKVxuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShsb2csIGFNZXNzYWdlKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0bG9nLnB1c2goYU1lc3NhZ2UpO1xuXHRcdH1cblx0XHRpZiAoYW5FeGNlcHRpb24pXG5cdFx0XHRsb2cucHVzaChcIjogXCIsIGFuRXhjZXB0aW9uKTtcblx0XHRcblx0XHRsZXQgYXBwZW5kZXIgPSBjb25zb2xlLmxvZztcdFx0XG5cdFx0aWYgKExvZ0xldmVsLkVSUk9SID09IGFMb2dMZXZlbCkgXG5cdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUuZXJyb3I7IFxuXHRcdGVsc2UgaWYgKExvZ0xldmVsLldBUk4gPT0gYUxvZ0xldmVsKVxuXHRcdFx0YXBwZW5kZXIgPSBjb25zb2xlLndhcm47XG5cdFx0ZWxzZSBpZiAoTG9nTGV2ZWwuSU5GTyA9PSBhTG9nTGV2ZWwpXG5cdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUuaW5mbztcblx0XHRlbHNlIGlmIChMb2dMZXZlbC5ERUJVRyA9PSBhTG9nTGV2ZWwpXG5cdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUuZGVidWc7XG5cdFx0ZWxzZSBpZiAoTG9nTGV2ZWwuVFJBQ0UgPT0gYUxvZ0xldmVsKVxuXHRcdFx0YXBwZW5kZXIgPSBjb25zb2xlLnRyYWNlO1xuXHRcdFxuXHRcdGFwcGVuZGVyLmFwcGx5KGNvbnNvbGUsIGxvZyk7XHRcblx0fVxufVxuXG5jb25zdCBJTlNUQU5DRSA9IG5ldyBDb25zb2xlQXBwZW5kZXIoKTtcbkFwcGVuZGVyLnJlZ2lzdGVyKFwiQ29uc29sZUFwcGVuZGVyXCIsIElOU1RBTkNFKTtcbmV4cG9ydCBkZWZhdWx0IElOU1RBTkNFOyIsImltcG9ydCBBcHBlbmRlciBmcm9tIFwiLi9BcHBlbmRlclwiO1xuaW1wb3J0IERhdGVVdGlscyBmcm9tIFwiLi91dGlscy9EYXRlVXRpbHNcIjtcblxuY29uc3QgQ09OVEFJTkVSID0gXCJbZGF0YS1sb2ddXCI7XG5jbGFzcyBIdG1sQXBwZW5kZXIgZXh0ZW5kcyBBcHBlbmRlciB7XG5cdGlzQXZhaWxhYmxlKCkge1xuXHRcdHJldHVybiAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ09OVEFJTkVSKTtcblx0fVxuXHRsb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpIHtcblx0XHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENPTlRBSU5FUik7XG5cdFx0aWYgKCFjb250YWluZXIpIHJldHVybjtcblxuXHRcdGNvbnN0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRlbnRyeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxvZy1lbnRyeSBcIiArIGFMb2dMZXZlbC50aXRsZSk7XG5cdFx0bGV0IG1lc3NhZ2UgPSBEYXRlVXRpbHMuZGF0ZUFzU3RyaW5nKGFEYXRlIHx8IG5ldyBEYXRlKCkpICsgXCIgKioqXCIgKyBhTG9nTGV2ZWwudGl0bGUgKyBcIioqKiBcIiArIGFMb2dnZXJOYW1lICsgXCJcIjtcblxuXHRcdGlmIChhTWVzc2FnZSkgbWVzc2FnZSArPSBcIiAtPiBcIiArIGFNZXNzYWdlO1xuXHRcdGlmIChhbkV4Y2VwdGlvbikgbWVzc2FnZSArPSBcIjogXCIgKyBhbkV4Y2VwdGlvbjtcblxuXHRcdGVudHJ5LnRleHRDb250ZW50ID0gbWVzc2FnZTtcblx0XHRyZXR1cm4gY29udGFpbmVyLmFwcGVuZENoaWxkKGVudHJ5KTtcblx0fVxufVxuXG5jb25zdCBJTlNUQU5DRSA9IG5ldyBIdG1sQXBwZW5kZXIoKTtcbkFwcGVuZGVyLnJlZ2lzdGVyKFwiSHRtbEFwcGVuZGVyXCIsIElOU1RBTkNFKTtcbmV4cG9ydCBkZWZhdWx0IElOU1RBTkNFO1xuIiwiaW1wb3J0IEFwcGVuZGVyIGZyb20gXCIuL0FwcGVuZGVyXCI7XG5pbXBvcnQgSHRtbEFwcGVuZGVyIGZyb20gXCIuL0h0bWxBcHBlbmRlclwiO1xuaW1wb3J0IENvbnNvbGVBcHBlbmRlciBmcm9tIFwiLi9Db25zb2xlQXBwZW5kZXJcIjtcbmltcG9ydCBNZW1vcnlBcHBlbmRlciBmcm9tIFwiLi9NZW1vcnlBcHBlbmRlclwiO1xuXG5sZXQgYXBwZW5kZXI7XG5jb25zdCBnZXRBcHBlbmRlciA9ICgpID0+IHtcblx0aWYgKGFwcGVuZGVyKSB7XHRcdFxuXHRcdGlmIChjb25zb2xlKVxuXHRcdFx0YXBwZW5kZXIgPSBDb25zb2xlQXBwZW5kZXI7XG5cdFx0ZWxzZSBpZiAoSHRtbEFwcGVuZGVyLmlzQXZhaWxhYmxlKCkpXG5cdFx0XHRhcHBlbmRlciA9IEh0bWxBcHBlbmRlcjtcblx0XHRlbHNlXG5cdFx0XHRhcHBlbmRlciA9IE1lbW9yeUFwcGVuZGVyO1xuXHR9XG5cdFxuXHRyZXR1cm4gYXBwZW5kZXI7XG59O1xuY2xhc3MgSW50ZWxsaWdlbnRCcm93c2VyQXBwZW5kZXIgZXh0ZW5kcyBBcHBlbmRlciB7XG5cdGxvZ01lc3NhZ2UoYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBhTG9nZ2VyTmFtZSwgYURhdGUsIGFMb2dMZXZlbCkge1xuXHRcdGdldEFwcGVuZGVyKCkubG9nTWVzc2FnZShhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKTtcblx0fVxufTtcblxuY29uc3QgSU5TVEFOQ0UgPSBuZXcgSW50ZWxsaWdlbnRCcm93c2VyQXBwZW5kZXIoKTtcbkFwcGVuZGVyLnJlZ2lzdGVyKFwiSW50ZWxsaWdlbnRCcm93c2VyQXBwZW5kZXJcIiwgSU5TVEFOQ0UpO1xuZXhwb3J0IGRlZmF1bHQgSU5TVEFOQ0U7XG4iLCJjbGFzcyBMZXZlbCB7XHJcblx0Y29uc3RydWN0b3IoYU9yZGVyLCBhVGl0bGUpIHtcclxuXHRcdHRoaXMub3JkZXIgPSBhT3JkZXI7XHJcblx0XHR0aGlzLnRpdGxlID0gYVRpdGxlO1xyXG5cdH1cclxuXHJcblx0aXNJbmNsdWRlZChhTG9nTGV2ZWwpIHtcclxuXHRcdHJldHVybiB0aGlzLm9yZGVyID49IGFMb2dMZXZlbC5vcmRlcjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgTk9MT0cgPSBuZXcgTGV2ZWwoMCwgXCJOT0xPR1wiKTtcclxuZXhwb3J0IGNvbnN0IEVSUk9SID0gbmV3IExldmVsKDEsIFwiRVJST1JcIik7XHJcbmV4cG9ydCBjb25zdCBXQVJOID0gbmV3IExldmVsKDIsIFwiV0FSTlwiKTtcclxuZXhwb3J0IGNvbnN0IElORk8gPSBuZXcgTGV2ZWwoMywgXCJJTkZPXCIpO1xyXG5leHBvcnQgY29uc3QgREVCVUcgPSBuZXcgTGV2ZWwoNCwgXCJERUJVR1wiKTtcclxuZXhwb3J0IGNvbnN0IFRSQUNFID0gbmV3IExldmVsKDUsIFwiVFJBQ0VcIik7XHJcblxyXG5jb25zdCBMb2dMZXZlbCA9IHtcclxuXHROT0xPRyxcclxuXHRFUlJPUixcclxuXHRXQVJOLFxyXG5cdElORk8sXHJcblx0REVCVUcsXHJcblx0VFJBQ0UsXHJcblx0bG9va3VwOiAoYUxldmVsKSA9PiB7XHJcblx0XHRpZiAodHlwZW9mIGFMZXZlbCAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIE5PTE9HO1xyXG5cdFx0cmV0dXJuIExvZ0xldmVsW2FMZXZlbC50b1VwcGVyQ2FzZSgpXSB8fCBOT0xPRztcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExvZ0xldmVsO1xyXG5cclxuIiwiaW1wb3J0IExvZ0xldmVsIGZyb20gXCIuL0xvZ0xldmVsXCI7XG5cbmNsYXNzIExvZ2dlciB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIGNvbmZpZykge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5fX2NvbmZpZ19fID0gY29uZmlnO1xuXHR9XG5cblx0Z2V0IGNvbmZpZygpIHtcblx0XHRyZXR1cm4gdGhpcy5fX2NvbmZpZ19fO1xuXHR9XG5cblx0c2V0IGNvbmZpZyhjb25maWcpIHtcblx0XHR0aGlzLl9fY29uZmlnX18gPSBjb25maWc7XG5cdH1cblxuXHRsb2dFcnJvcihhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xuXHRcdHJldHVybiB0aGlzLmxvZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbiwgTG9nTGV2ZWwuRVJST1IpO1xuXHR9XG5cblx0bG9nV2FybihhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xuXHRcdHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBMb2dMZXZlbC5XQVJOKTtcblx0fVxuXG5cdGxvZ0luZm8oYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcblx0XHR0aGlzLmxvZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbiwgTG9nTGV2ZWwuSU5GTyk7XG5cdH1cblxuXHRsb2dEZWJ1ZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbikge1xuXHRcdHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBMb2dMZXZlbC5ERUJVRyk7XG5cdH1cblxuXHRhc3luY2xvZ1RyYWNlKGFNZXNzYWdlLCBhRXhjZXB0aW9uKSB7XG5cdFx0dGhpcy5sb2coYU1lc3NhZ2UsIGFFeGNlcHRpb24sIExvZ0xldmVsLlRSQUNFKTtcblx0fVxuXG5cdGFzeW5jIGxvZyhhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dMZXZlbCkge1x0XHRcblx0XHRcdGNvbnN0IG5hbWUgPSB0aGlzLm5hbWU7XG5cdFx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdFxuXHRcdHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgY29uZmlnID0gYXdhaXQgdGhpcy5jb25maWc7XG5cdFx0XHRpZiAoIWNvbmZpZy5sb2dMZXZlbC5pc0luY2x1ZGVkKGFMb2dMZXZlbCkpIHJldHVybjtcblx0XHRcdGNvbnN0IHsgYXBwZW5kZXJzIH0gPSBjb25maWc7XG5cdFx0XHRmb3IgKGxldCBhcHBlbmRlciBvZiBhcHBlbmRlcnMpXG5cdFx0XHRcdGFwcGVuZGVyLmxvZ01lc3NhZ2UoYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLCBuYW1lLCBkYXRlLCBhTG9nTGV2ZWwpO1xuXHRcdH0sIDEwMCk7XG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2dlcjtcbiIsImltcG9ydCBDb25maWcgZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuL0xvZ2dlclwiO1xuXG5jb25zdCBMT0dHRVJNQVAgPSBuZXcgTWFwKCk7XG5cbmNvbnN0IHVwZGF0ZUxvZ2dlciA9IChjb25maWcpID0+IHtcdFxuXHRmb3IgKGxldCBbbmFtZSwgbG9nZ2VyXSBvZiBMT0dHRVJNQVApXG5cdFx0bG9nZ2VyLmNvbmZpZyA9IGNvbmZpZy5sb2dnZXJDb25maWcobmFtZSk7XG59O1xuXG5jbGFzcyBMb2dnZXJGYWN0b3J5IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5fX2NvbmZpZ19fID0gbmV3IENvbmZpZygpOyBcblx0fVxuXG5cdG5ld0xvZ2dlcihuYW1lKSB7XG5cdFx0aWYgKCFMT0dHRVJNQVAuaGFzKG5hbWUpKVxuXHRcdFx0TE9HR0VSTUFQLnNldChuYW1lLCBuZXcgTG9nZ2VyKG5hbWUsIHRoaXMuX19jb25maWdfXy5sb2dnZXJDb25maWcobmFtZSkpKTtcblxuXHRcdHJldHVybiBMT0dHRVJNQVAuZ2V0KG5hbWUpO1xuXHR9XG5cblx0YXN5bmMgY29uZmlnKGNvbmZpZyl7XG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxuXHRcdFx0cmV0dXJuIHRoaXMuX19jb25maWdfXy5kYXRhO1xuXHRcdFxuXHRcdHRoaXMuX19jb25maWdfXyA9IG5ldyBDb25maWcoY29uZmlnKTtcblx0XHR1cGRhdGVMb2dnZXIodGhpcy5fX2NvbmZpZ19fKTtcblx0fVxuXG59XG5cbmNvbnN0IElOU1RBTkNFID0gbmV3IExvZ2dlckZhY3RvcnkoKTtcblxuZXhwb3J0IGRlZmF1bHQgSU5TVEFOQ0U7XG4iLCJpbXBvcnQgQXBwZW5kZXIgZnJvbSBcIi4vQXBwZW5kZXJcIjtcblxuY29uc3QgR0xPQkFMID0gc2VsZiB8fCBnbG9iYWwgfHwgd2luZG93IHx8IHRoaXMgfHwge307XG5jb25zdCBMT0cgPSAoKSA9PiB7XG5cdGlmKCEoR0xPQkFMLl9fTE9HX18gaW5zdGFuY2VvZiBBcnJheSkpXG5cdFx0R0xPQkFMLl9fTE9HX18gPSBbXTtcblx0cmV0dXJuIEdMT0JBTC5fX0xPR19fO1xufSAgO1xuXG5cblxuY2xhc3MgTWVtb3J5QXBwZW5kZXIgZXh0ZW5kcyBBcHBlbmRlciB7XG5cdGxvZ01lc3NhZ2UoYU1lc3NhZ2UsIGFuRXhjZXB0aW9uLGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKSB7XG5cdFx0Y29uc3QgbG9nID0gTE9HKCk7XHRcdFxuXHRcdGxvZy5wdXNoKHtcblx0XHRcdFwiZGF0ZVwiIDogYURhdGUsXG5cdFx0XHRcImxvZ0xldmVsXCIgOiBhTG9nTGV2ZWwsXG5cdFx0XHRcImxvZ2dlck5hbWVcIiA6IGFMb2dnZXJOYW1lLFxuXHRcdFx0XCJtZXNzYWdlXCIgOiBhTWVzc2FnZSxcblx0XHRcdFwiZXhjZXB0aW9uXCIgOiBhbkV4Y2VwdGlvblxuXHRcdH0pO1xuXHR9XG59OyBcblxuY29uc3QgSU5TVEFOQ0UgPSBuZXcgTWVtb3J5QXBwZW5kZXIoKTtcbkFwcGVuZGVyLnJlZ2lzdGVyKFwiTWVtb3J5QXBwZW5kZXJcIiwgSU5TVEFOQ0UpO1xuZXhwb3J0IGRlZmF1bHQgSU5TVEFOQ0U7XG4iLCJjb25zdCBEYXRlVXRpbHMgPSB7XHJcblx0XHRkYXRlQXNTdHJpbmcgOiBmdW5jdGlvbihhRGF0ZSl7XHJcblx0XHRcdGlmKCFhRGF0ZSBpbnN0YW5jZW9mIERhdGUpXHJcblx0XHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gXCJcIjtcclxuXHRcdFx0XHJcblx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRGdWxsWWVhcigpICsgXCIuXCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldE1vbnRoKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0TW9udGgoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0TW9udGgoKTtcclxuXHRcdFx0cmVzdWx0ICs9IFwiLlwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXREYXRlKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0RGF0ZSgpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXREYXRlKCk7XHRcdFxyXG5cdFx0XHRyZXN1bHQgKz0gIFwiIFwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRIb3VycygpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldEhvdXJzKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldEhvdXJzKCk7XHJcblx0XHRcdHJlc3VsdCArPSBcIjpcIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0TWludXRlcygpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0TWludXRlcygpO1xyXG5cdFx0XHRyZXN1bHQgKz0gXCI6XCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldFNlY29uZHMoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXRTZWNvbmRzKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldFNlY29uZHMoKTtcclxuXHRcdFx0cmVzdWx0ICs9IFwiOlwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRNaWxsaXNlY29uZHMoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwMFwiICsgYURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcblx0XHRcdGlmKGFEYXRlLmdldE1pbGxpc2Vjb25kcygpIDwgMTAwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEYXRlVXRpbHM7Il0sInNvdXJjZVJvb3QiOiIifQ==