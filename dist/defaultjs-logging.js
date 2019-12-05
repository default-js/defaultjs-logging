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
/******/ 	return __webpack_require__(__webpack_require__.s = "./browser-index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./browser-index.js":
/*!**************************!*\
  !*** ./browser-index.js ***!
  \**************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/utils */ "./src/utils/index.js");
/* harmony import */ var _src_ConsoleAppender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/ConsoleAppender */ "./src/ConsoleAppender.js");
/* harmony import */ var _src_HtmlAppender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/HtmlAppender */ "./src/HtmlAppender.js");
/* harmony import */ var _src_InteligentBrowserAppender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/InteligentBrowserAppender */ "./src/InteligentBrowserAppender.js");
/* harmony import */ var _src_MemoryAppender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/MemoryAppender */ "./src/MemoryAppender.js");
/* harmony import */ var _src_LogLevel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/LogLevel */ "./src/LogLevel.js");
/* harmony import */ var _src_Logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/Logger */ "./src/Logger.js");
/* harmony import */ var _src_LoggerFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/LoggerFactory */ "./src/LoggerFactory.js");
/* harmony import */ var _src_LoggerRegistry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/LoggerRegistry */ "./src/LoggerRegistry.js");










const global = window || global || self || undefined || {};
global.defaultjs = global.defaultjs || {};
global.defaultjs.logging = global.defaultjs.logging || {
	VERSION : "1.0.0-beta.1",
	utils : _src_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
	ConsoleAppender : _src_ConsoleAppender__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
	ConsolenAppender : _src_ConsoleAppender__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
	HtmlAppender : _src_HtmlAppender__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
	MemoryAppender : _src_MemoryAppender__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
	InteligentBrowserAppender : _src_InteligentBrowserAppender__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
	LogLevel : _src_LogLevel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
	Logger : _src_Logger__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
	LoggerFactory : _src_LoggerFactory__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
	LoggerRegistry : _src_LoggerRegistry__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]
};

/***/ }),

/***/ "./src/ConsoleAppender.js":
/*!********************************!*\
  !*** ./src/ConsoleAppender.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _LogLevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogLevel */ "./src/LogLevel.js");
/* harmony import */ var _utils_DateUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/DateUtils */ "./src/utils/DateUtils.js");



const ConsoleAppender = {
	logMessage : function(aMessage, anException, aLoggerName, aDate, aLogLevel) {
		if (_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].NOLOG == aLogLevel)
			return;
		let log = [];
		if (aDate)
			log.push(_utils_DateUtils__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].dateAsString(aDate), " ");
		
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
		if (_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ERROR == aLogLevel) 
			appender = console.error; 
		else if (_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].WARN == aLogLevel)
			appender = console.warn;
		else if (_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].INFO == aLogLevel)
			appender = console.info;
		else if (_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].DEBUG == aLogLevel)
			appender = console.debug;
		else if (_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].TRACE == aLogLevel)
			appender = console.trace;
		
		appender.apply(console, log);	
	}
};
/* harmony default export */ __webpack_exports__["a"] = (ConsoleAppender);

/***/ }),

/***/ "./src/HtmlAppender.js":
/*!*****************************!*\
  !*** ./src/HtmlAppender.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_DateUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/DateUtils */ "./src/utils/DateUtils.js");


const CONTAINER = "[data-log]";		
const HtmlAppender = {
	isAvailable : function(){
		return !!document.querySelector(CONTAINER) ;
	},
	logMessage : function(aMessage, anException, aLoggerName, aDate, aLogLevel) {
		let container = document.querySelector(CONTAINER);
		if (!container)
			return;
		
		let entry = document.createElement("div");
		entry.setAttribute("class", "log-entry " + aLogLevel.title);
		let message =  _utils_DateUtils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].dateAsString(aDate || new Date()) + " ***" + aLogLevel.title + "*** " + aLoggerName + "";
		
		if (aMessage)
			message += " -> " + aMessage;
		if (anException)
			message += ": " + anException;
		
		entry.textContent = message;
		return container.appendChild(entry);
	}
};

/* harmony default export */ __webpack_exports__["a"] = (HtmlAppender);

/***/ }),

/***/ "./src/InteligentBrowserAppender.js":
/*!******************************************!*\
  !*** ./src/InteligentBrowserAppender.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _HtmlAppender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlAppender */ "./src/HtmlAppender.js");
/* harmony import */ var _ConsoleAppender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleAppender */ "./src/ConsoleAppender.js");
/* harmony import */ var _MemoryAppender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MemoryAppender */ "./src/MemoryAppender.js");




let appender;
const getAppender = function() {
	if (this.appender) {		
		if (console)
			this.appender = ConsolenAppender;
		else if (_HtmlAppender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].isAvailable())
			this.appender = _HtmlAppender__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
		else
			this.appender = _MemoryAppender__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"];
	}
	
	return this.appender;
};
const InteligentBrowserAppender = {
	logMessage : function(aMessage, anException, aLoggerName, aDate, aLogLevel) {
		getAppender().logMessage(aMessage, anException, aLoggerName, aDate, aLogLevel);
	}
};

/* harmony default export */ __webpack_exports__["a"] = (InteligentBrowserAppender);


/***/ }),

/***/ "./src/LogLevel.js":
/*!*************************!*\
  !*** ./src/LogLevel.js ***!
  \*************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const LogLevel = function(aOrder, aTitle) {
	this.order = aOrder;
	this.title = aTitle;
};

LogLevel.prototype.isIncluded = function(aLogLevel) {
	return this.order >= aLogLevel.order;
};

LogLevel.getLogLevel = function(aLogLevel) {
	if (typeof aLogLevel === "undefined")
		return LogLevel.NOLOG;
	
	return LogLevel[aLogLevel.toUpperCase()] || LogLevel.NOLOG;
};

LogLevel.NOLOG = new LogLevel(0, "NOLOG");
LogLevel.ERROR = new LogLevel(1, "ERROR");
LogLevel.WARN = new LogLevel(2, "WARN");
LogLevel.INFO = new LogLevel(3, "INFO");
LogLevel.DEBUG = new LogLevel(4, "DEBUG");
LogLevel.TRACE = new LogLevel(5, "TRACE");

/* harmony default export */ __webpack_exports__["a"] = (LogLevel);

/***/ }),

/***/ "./src/Logger.js":
/*!***********************!*\
  !*** ./src/Logger.js ***!
  \***********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _LogLevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogLevel */ "./src/LogLevel.js");


const Logger = function(aName, aLogLevel, aLogAppenders) {
	this.name = aName;
	this.logLevel = aLogLevel;
	this.appenders = aLogAppenders || [];
};

Logger.prototype.isErrorEnabled = function() {
	return this.logLevel.isIncluded(_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ERROR);
};
Logger.prototype.isWarnEnabled = function() {
	return this.logLevel.isIncluded(_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].WARN);
};
Logger.prototype.isInfoEnabled = function() {
	return this.logLevel.isIncluded(_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].INFO);
};
Logger.prototype.isDebugEnabled = function() {
	return this.logLevel.isIncluded(_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].DEBUG);
};
Logger.prototype.isTraceEnabled = function() {
	return this.logLevel.isIncluded(_LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].TRACE);
};

Logger.prototype.logError = function(aMessage, aException) {
	return this.log(aMessage, aException, _LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ERROR);
};

Logger.prototype.logWarn = function(aMessage, aException) {
	return this.log(aMessage, aException, _LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].WARN);
};

Logger.prototype.logInfo = function(aMessage, aException) {
	return this.log(aMessage, aException, _LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].INFO);
};

Logger.prototype.logDebug = function(aMessage, aException) {
	return this.log(aMessage, aException, _LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].DEBUG);
};

Logger.prototype.logTrace = function(aMessage, aException) {
	return this.log(aMessage, aException, _LogLevel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].TRACE);
};

Logger.prototype.log = function(aMessage, anException, aLogLevel) {
	if(!this.logLevel.isIncluded(aLogLevel))
		return Promise.resolve();
	
	if (!this.appenders.length === 0)
		return Promise.resolve();

	return new Promise((function(resolve){
		setTimeout((function(){
			let results = [];
			for (let i = 0; i < this.appenders.length; i++){
				let result = this.appenders[i].logMessage(aMessage, anException, this.name,new Date(), aLogLevel);
				if(result)
					results.push(result);
			}
			
			Promise.all(results).then(resolve);			
		}).bind(this), 100);
	}).bind(this));
};
/* harmony default export */ __webpack_exports__["a"] = (Logger);

/***/ }),

/***/ "./src/LoggerFactory.js":
/*!******************************!*\
  !*** ./src/LoggerFactory.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _LoggerRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoggerRegistry */ "./src/LoggerRegistry.js");
/* harmony import */ var _LogLevel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogLevel */ "./src/LogLevel.js");
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logger */ "./src/Logger.js");




let configs = undefined;
let appenders = {};
let loadLazyCounter = 0;

const getConfig = function() {
	if (!configs)
		updateConfigs();

	return configs;
};

const setConfig = function(aConfig) {
	if (aConfig) {
		configs = aConfig;
		updateLogger();
	}
};

const updateConfigs = function(aConfig) {
	if (configs)
		configs = {};

	let element = document.querySelector("[logging-properties]");
	if (element) {
		let config = element.attr("logging-properties");
		loadConfig(JSON.parse(config));
	} else 
		doLoadLazy();
};

const doLoadLazy = function() {
	if (loadLazyCounter < 10){
		loadLazyCounter++;
		setTimeout(loadConfig, 1);
	}
};

const loadConfig = function(aConfig) {
	if (aConfig){
        if (aConfig.remote)
            loadConfigRemote(aConfig.remote);
        else if (aConfig.data) {
            setConfig(aConfig.data.configs);
        }
	}
	else 
        updateConfigs();
};

const loadConfigRemote = function(aRemoteData) {
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4)
			setConfig(JSON.parse(response));
	};
	xhttp.open("get", aRemoteData.url, false);
	return xhttp.send();
};

const updateLogger = function() {
	let loggers = _LoggerRegistry__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAllLogger();
	for ( let name in loggers) {
		var logger = loggers[name];

		let config = findConfig(name);
		let logLevel = _LogLevel__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getLogLevel(config.logLevel);
		let appenders = getAppenders(config.appenders);

		logger.logLevel = logLevel;
		logger.logAppenders = appenders;
	}
};

const findConfig = function(aLoggerName) {
	let defaultConfig = {
		"filter" : "",
		"logLevel" : "NOLOG",
		"appenders" : []
	};
	let actualConfig = undefined;
	let configs = getConfig() || [];
	for (let i = 0; i < configs.length; i++) {
		let config = configs[i];
		if (isConfigActiv(aLoggerName, config, actualConfig))
			actualConfig = config;
		else if (config.filter == undefined || config.filter == "")
			defaultConfig = config;
		if (actualConfig != undefined && actualConfig.filter == aLoggerName)
			return actualConfig;
	}

	return actualConfig || defaultConfig;
};

const isConfigActiv = function(aLoggerName, aConfig, anActualConfig) {
	if (anActualConfig && anActualConfig.filter.length >= aConfig.filter.filter)
		return false;
	return aLoggerName.search(aConfig.filter) == 0;
};

const getAppenders = function(theAppenders) {
	let result = new Array();
	for (let i = 0; i < theAppenders.length; i++) {
		let appenderString = theAppenders[i];
		let appender = appenders[appenderString];
		if (!appender) {
			appender = (new Function("return " + appenderString +";")).call()
			if (appender) {
				appenders[appenderString] = appender;
			}
		}
		if (appender)
			result.push(appender);
	}

	return result;
};

const LoggerFactory = {
	newLogger : function(aLoggerName) {
		let logger = _LoggerRegistry__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getLogger(aLoggerName);
		if (!logger) {
			let config = findConfig(aLoggerName);
			let logLevel = _LogLevel__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getLogLevel(config.logLevel);
			let appenders = getAppenders(config.appenders);
	
			logger = new _Logger__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](aLoggerName, logLevel, appenders);
			_LoggerRegistry__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].addLogger(logger);
		}
	
		return logger;
	},
	getConfig : getConfig,	
	setConfig : setConfig
};

/* harmony default export */ __webpack_exports__["a"] = (LoggerFactory);

/***/ }),

/***/ "./src/LoggerRegistry.js":
/*!*******************************!*\
  !*** ./src/LoggerRegistry.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ "./src/Logger.js");


const LOGGER = {};
const LoggerRegistry = {
	addLogger : function(aLogger){
		if(!aLogger instanceof _Logger__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])
			return;
		
		if(typeof LOGGER[aLogger.name] === "undefined")
			LOGGER[aLogger.name] = aLogger;
	},
	getLogger : function(aName){
		if(typeof aName !== "string")
			return;
		
		return LOGGER[aName];
	},	
	getAllLogger : function(){
		return LOGGER;
	},
	getInstance : function(){
		return LoggerRegistry;
	}
};	
/* harmony default export */ __webpack_exports__["a"] = (LoggerRegistry);

/***/ }),

/***/ "./src/MemoryAppender.js":
/*!*******************************!*\
  !*** ./src/MemoryAppender.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const MemoryAppender = {
	logMessage : function(aMessage, anException,aLoggerName, aDate, aLogLevel) {
		let global = window || global || {};
		global.__LOG__ = global.__LOG__ || [];
		
		global.__LOG__.push({
			"date" : aDate,
			"logLevel" : aLogLevel,
			"loggerName" : aLoggerName,
			"message" : aMessage,
			"exception" : anException
		});
	}
}; 
/* harmony default export */ __webpack_exports__["a"] = (MemoryAppender);


/***/ }),

/***/ "./src/utils/DateUtils.js":
/*!********************************!*\
  !*** ./src/utils/DateUtils.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (DateUtils);

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _DateUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateUtils */ "./src/utils/DateUtils.js");

const utils = {
		DateUtils : _DateUtils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
};
/* harmony default export */ __webpack_exports__["a"] = (utils);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnJvd3Nlci1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc29sZUFwcGVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9IdG1sQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ0xldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9Mb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ2dlckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZ2dlclJlZ2lzdHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9NZW1vcnlBcHBlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvRGF0ZVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FB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O0FBQ0EsRTtBQUNlLHVFQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDZDlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2Usa0VBQVMsRTs7Ozs7Ozs7Ozs7OztBQzNDeEI7QUFBb0M7QUFDcEM7QUFDQSxjQUFjLDBEQUFTO0FBQ3ZCO0FBQ2UsOERBQUssRSIsImZpbGUiOiJkZWZhdWx0anMtbG9nZ2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYnJvd3Nlci1pbmRleC5qc1wiKTtcbiIsImltcG9ydCB1dGlscyBmcm9tIFwiLi9zcmMvdXRpbHNcIjtcclxuaW1wb3J0IENvbnNvbGVBcHBlbmRlciBmcm9tIFwiLi9zcmMvQ29uc29sZUFwcGVuZGVyXCI7XHJcbmltcG9ydCBIdG1sQXBwZW5kZXIgZnJvbSBcIi4vc3JjL0h0bWxBcHBlbmRlclwiO1xyXG5pbXBvcnQgSW50ZWxpZ2VudEJyb3dzZXJBcHBlbmRlciBmcm9tIFwiLi9zcmMvSW50ZWxpZ2VudEJyb3dzZXJBcHBlbmRlclwiO1xyXG5pbXBvcnQgTWVtb3J5QXBwZW5kZXIgZnJvbSBcIi4vc3JjL01lbW9yeUFwcGVuZGVyXCI7XHJcbmltcG9ydCBMb2dMZXZlbCBmcm9tIFwiLi9zcmMvTG9nTGV2ZWxcIjtcclxuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi9zcmMvTG9nZ2VyXCI7XHJcbmltcG9ydCBMb2dnZXJGYWN0b3J5IGZyb20gXCIuL3NyYy9Mb2dnZXJGYWN0b3J5XCI7XHJcbmltcG9ydCBMb2dnZXJSZWdpc3RyeSBmcm9tIFwiLi9zcmMvTG9nZ2VyUmVnaXN0cnlcIjtcclxuXHJcbmNvbnN0IGdsb2JhbCA9IHdpbmRvdyB8fCBnbG9iYWwgfHwgc2VsZiB8fCB0aGlzIHx8IHt9O1xyXG5nbG9iYWwuZGVmYXVsdGpzID0gZ2xvYmFsLmRlZmF1bHRqcyB8fCB7fTtcclxuZ2xvYmFsLmRlZmF1bHRqcy5sb2dnaW5nID0gZ2xvYmFsLmRlZmF1bHRqcy5sb2dnaW5nIHx8IHtcclxuXHRWRVJTSU9OIDogXCIke3ZlcnNpb259XCIsXHJcblx0dXRpbHMgOiB1dGlscyxcclxuXHRDb25zb2xlQXBwZW5kZXIgOiBDb25zb2xlQXBwZW5kZXIsXHJcblx0Q29uc29sZW5BcHBlbmRlciA6IENvbnNvbGVBcHBlbmRlcixcclxuXHRIdG1sQXBwZW5kZXIgOiBIdG1sQXBwZW5kZXIsXHJcblx0TWVtb3J5QXBwZW5kZXIgOiBNZW1vcnlBcHBlbmRlcixcclxuXHRJbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyIDogSW50ZWxpZ2VudEJyb3dzZXJBcHBlbmRlcixcclxuXHRMb2dMZXZlbCA6IExvZ0xldmVsLFxyXG5cdExvZ2dlciA6IExvZ2dlcixcclxuXHRMb2dnZXJGYWN0b3J5IDogTG9nZ2VyRmFjdG9yeSxcclxuXHRMb2dnZXJSZWdpc3RyeSA6IExvZ2dlclJlZ2lzdHJ5XHJcbn07IiwiaW1wb3J0IExvZ0xldmVsIGZyb20gXCIuL0xvZ0xldmVsXCI7XG5pbXBvcnQgRGF0ZVV0aWxzIGZyb20gXCIuL3V0aWxzL0RhdGVVdGlsc1wiO1xuXG5jb25zdCBDb25zb2xlQXBwZW5kZXIgPSB7XG5cdGxvZ01lc3NhZ2UgOiBmdW5jdGlvbihhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKSB7XG5cdFx0aWYgKExvZ0xldmVsLk5PTE9HID09IGFMb2dMZXZlbClcblx0XHRcdHJldHVybjtcblx0XHRsZXQgbG9nID0gW107XG5cdFx0aWYgKGFEYXRlKVxuXHRcdFx0bG9nLnB1c2goRGF0ZVV0aWxzLmRhdGVBc1N0cmluZyhhRGF0ZSksIFwiIFwiKTtcblx0XHRcblx0XHRsb2cucHVzaChcIioqKlwiLCBhTG9nTGV2ZWwudGl0bGUsIFwiKioqIFwiLCBhTG9nZ2VyTmFtZSk7XG5cdFx0XG5cdFx0aWYgKGFNZXNzYWdlKSB7XG5cdFx0XHRsb2cucHVzaChcIiAtPiBcIik7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShhTWVzc2FnZSkpXG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGxvZywgYU1lc3NhZ2UpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRsb2cucHVzaChhTWVzc2FnZSk7XG5cdFx0fVxuXHRcdGlmIChhbkV4Y2VwdGlvbilcblx0XHRcdGxvZy5wdXNoKFwiOiBcIiwgYW5FeGNlcHRpb24pO1xuXHRcdFxuXHRcdGxldCBhcHBlbmRlciA9IGNvbnNvbGUubG9nO1x0XHRcblx0XHRpZiAoTG9nTGV2ZWwuRVJST1IgPT0gYUxvZ0xldmVsKSBcblx0XHRcdGFwcGVuZGVyID0gY29uc29sZS5lcnJvcjsgXG5cdFx0ZWxzZSBpZiAoTG9nTGV2ZWwuV0FSTiA9PSBhTG9nTGV2ZWwpXG5cdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUud2Fybjtcblx0XHRlbHNlIGlmIChMb2dMZXZlbC5JTkZPID09IGFMb2dMZXZlbClcblx0XHRcdGFwcGVuZGVyID0gY29uc29sZS5pbmZvO1xuXHRcdGVsc2UgaWYgKExvZ0xldmVsLkRFQlVHID09IGFMb2dMZXZlbClcblx0XHRcdGFwcGVuZGVyID0gY29uc29sZS5kZWJ1Zztcblx0XHRlbHNlIGlmIChMb2dMZXZlbC5UUkFDRSA9PSBhTG9nTGV2ZWwpXG5cdFx0XHRhcHBlbmRlciA9IGNvbnNvbGUudHJhY2U7XG5cdFx0XG5cdFx0YXBwZW5kZXIuYXBwbHkoY29uc29sZSwgbG9nKTtcdFxuXHR9XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29uc29sZUFwcGVuZGVyOyIsImltcG9ydCBEYXRlVXRpbHMgZnJvbSBcIi4vdXRpbHMvRGF0ZVV0aWxzXCI7XG5cbmNvbnN0IENPTlRBSU5FUiA9IFwiW2RhdGEtbG9nXVwiO1x0XHRcbmNvbnN0IEh0bWxBcHBlbmRlciA9IHtcblx0aXNBdmFpbGFibGUgOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ09OVEFJTkVSKSA7XG5cdH0sXG5cdGxvZ01lc3NhZ2UgOiBmdW5jdGlvbihhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKSB7XG5cdFx0bGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ09OVEFJTkVSKTtcblx0XHRpZiAoIWNvbnRhaW5lcilcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHRsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGVudHJ5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibG9nLWVudHJ5IFwiICsgYUxvZ0xldmVsLnRpdGxlKTtcblx0XHRsZXQgbWVzc2FnZSA9ICBEYXRlVXRpbHMuZGF0ZUFzU3RyaW5nKGFEYXRlIHx8IG5ldyBEYXRlKCkpICsgXCIgKioqXCIgKyBhTG9nTGV2ZWwudGl0bGUgKyBcIioqKiBcIiArIGFMb2dnZXJOYW1lICsgXCJcIjtcblx0XHRcblx0XHRpZiAoYU1lc3NhZ2UpXG5cdFx0XHRtZXNzYWdlICs9IFwiIC0+IFwiICsgYU1lc3NhZ2U7XG5cdFx0aWYgKGFuRXhjZXB0aW9uKVxuXHRcdFx0bWVzc2FnZSArPSBcIjogXCIgKyBhbkV4Y2VwdGlvbjtcblx0XHRcblx0XHRlbnRyeS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG5cdFx0cmV0dXJuIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyeSk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEh0bWxBcHBlbmRlcjsiLCJpbXBvcnQgSHRtbEFwcGVuZGVyIGZyb20gXCIuL0h0bWxBcHBlbmRlclwiO1xuaW1wb3J0IENvbnNvbGVBcHBlbmRlciBmcm9tIFwiLi9Db25zb2xlQXBwZW5kZXJcIjtcbmltcG9ydCBNZW1vcnlBcHBlbmRlciBmcm9tIFwiLi9NZW1vcnlBcHBlbmRlclwiO1xuXG5sZXQgYXBwZW5kZXI7XG5jb25zdCBnZXRBcHBlbmRlciA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5hcHBlbmRlcikge1x0XHRcblx0XHRpZiAoY29uc29sZSlcblx0XHRcdHRoaXMuYXBwZW5kZXIgPSBDb25zb2xlbkFwcGVuZGVyO1xuXHRcdGVsc2UgaWYgKEh0bWxBcHBlbmRlci5pc0F2YWlsYWJsZSgpKVxuXHRcdFx0dGhpcy5hcHBlbmRlciA9IEh0bWxBcHBlbmRlcjtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLmFwcGVuZGVyID0gTWVtb3J5QXBwZW5kZXI7XG5cdH1cblx0XG5cdHJldHVybiB0aGlzLmFwcGVuZGVyO1xufTtcbmNvbnN0IEludGVsaWdlbnRCcm93c2VyQXBwZW5kZXIgPSB7XG5cdGxvZ01lc3NhZ2UgOiBmdW5jdGlvbihhTWVzc2FnZSwgYW5FeGNlcHRpb24sIGFMb2dnZXJOYW1lLCBhRGF0ZSwgYUxvZ0xldmVsKSB7XG5cdFx0Z2V0QXBwZW5kZXIoKS5sb2dNZXNzYWdlKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ2dlck5hbWUsIGFEYXRlLCBhTG9nTGV2ZWwpO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnRlbGlnZW50QnJvd3NlckFwcGVuZGVyO1xuIiwiY29uc3QgTG9nTGV2ZWwgPSBmdW5jdGlvbihhT3JkZXIsIGFUaXRsZSkge1xyXG5cdHRoaXMub3JkZXIgPSBhT3JkZXI7XHJcblx0dGhpcy50aXRsZSA9IGFUaXRsZTtcclxufTtcclxuXHJcbkxvZ0xldmVsLnByb3RvdHlwZS5pc0luY2x1ZGVkID0gZnVuY3Rpb24oYUxvZ0xldmVsKSB7XHJcblx0cmV0dXJuIHRoaXMub3JkZXIgPj0gYUxvZ0xldmVsLm9yZGVyO1xyXG59O1xyXG5cclxuTG9nTGV2ZWwuZ2V0TG9nTGV2ZWwgPSBmdW5jdGlvbihhTG9nTGV2ZWwpIHtcclxuXHRpZiAodHlwZW9mIGFMb2dMZXZlbCA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHJldHVybiBMb2dMZXZlbC5OT0xPRztcclxuXHRcclxuXHRyZXR1cm4gTG9nTGV2ZWxbYUxvZ0xldmVsLnRvVXBwZXJDYXNlKCldIHx8IExvZ0xldmVsLk5PTE9HO1xyXG59O1xyXG5cclxuTG9nTGV2ZWwuTk9MT0cgPSBuZXcgTG9nTGV2ZWwoMCwgXCJOT0xPR1wiKTtcclxuTG9nTGV2ZWwuRVJST1IgPSBuZXcgTG9nTGV2ZWwoMSwgXCJFUlJPUlwiKTtcclxuTG9nTGV2ZWwuV0FSTiA9IG5ldyBMb2dMZXZlbCgyLCBcIldBUk5cIik7XHJcbkxvZ0xldmVsLklORk8gPSBuZXcgTG9nTGV2ZWwoMywgXCJJTkZPXCIpO1xyXG5Mb2dMZXZlbC5ERUJVRyA9IG5ldyBMb2dMZXZlbCg0LCBcIkRFQlVHXCIpO1xyXG5Mb2dMZXZlbC5UUkFDRSA9IG5ldyBMb2dMZXZlbCg1LCBcIlRSQUNFXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nTGV2ZWw7IiwiaW1wb3J0IExvZ0xldmVsIGZyb20gXCIuL0xvZ0xldmVsXCI7XG5cbmNvbnN0IExvZ2dlciA9IGZ1bmN0aW9uKGFOYW1lLCBhTG9nTGV2ZWwsIGFMb2dBcHBlbmRlcnMpIHtcblx0dGhpcy5uYW1lID0gYU5hbWU7XG5cdHRoaXMubG9nTGV2ZWwgPSBhTG9nTGV2ZWw7XG5cdHRoaXMuYXBwZW5kZXJzID0gYUxvZ0FwcGVuZGVycyB8fCBbXTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUuaXNFcnJvckVuYWJsZWQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMubG9nTGV2ZWwuaXNJbmNsdWRlZChMb2dMZXZlbC5FUlJPUik7XG59O1xuTG9nZ2VyLnByb3RvdHlwZS5pc1dhcm5FbmFibGVkID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmxvZ0xldmVsLmlzSW5jbHVkZWQoTG9nTGV2ZWwuV0FSTik7XG59O1xuTG9nZ2VyLnByb3RvdHlwZS5pc0luZm9FbmFibGVkID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmxvZ0xldmVsLmlzSW5jbHVkZWQoTG9nTGV2ZWwuSU5GTyk7XG59O1xuTG9nZ2VyLnByb3RvdHlwZS5pc0RlYnVnRW5hYmxlZCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5sb2dMZXZlbC5pc0luY2x1ZGVkKExvZ0xldmVsLkRFQlVHKTtcbn07XG5Mb2dnZXIucHJvdG90eXBlLmlzVHJhY2VFbmFibGVkID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmxvZ0xldmVsLmlzSW5jbHVkZWQoTG9nTGV2ZWwuVFJBQ0UpO1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS5sb2dFcnJvciA9IGZ1bmN0aW9uKGFNZXNzYWdlLCBhRXhjZXB0aW9uKSB7XG5cdHJldHVybiB0aGlzLmxvZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbiwgTG9nTGV2ZWwuRVJST1IpO1xufTtcblxuTG9nZ2VyLnByb3RvdHlwZS5sb2dXYXJuID0gZnVuY3Rpb24oYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcblx0cmV0dXJuIHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBMb2dMZXZlbC5XQVJOKTtcbn07XG5cbkxvZ2dlci5wcm90b3R5cGUubG9nSW5mbyA9IGZ1bmN0aW9uKGFNZXNzYWdlLCBhRXhjZXB0aW9uKSB7XG5cdHJldHVybiB0aGlzLmxvZyhhTWVzc2FnZSwgYUV4Y2VwdGlvbiwgTG9nTGV2ZWwuSU5GTyk7XG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLmxvZ0RlYnVnID0gZnVuY3Rpb24oYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcblx0cmV0dXJuIHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBMb2dMZXZlbC5ERUJVRyk7XG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLmxvZ1RyYWNlID0gZnVuY3Rpb24oYU1lc3NhZ2UsIGFFeGNlcHRpb24pIHtcblx0cmV0dXJuIHRoaXMubG9nKGFNZXNzYWdlLCBhRXhjZXB0aW9uLCBMb2dMZXZlbC5UUkFDRSk7XG59O1xuXG5Mb2dnZXIucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbiwgYUxvZ0xldmVsKSB7XG5cdGlmKCF0aGlzLmxvZ0xldmVsLmlzSW5jbHVkZWQoYUxvZ0xldmVsKSlcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFxuXHRpZiAoIXRoaXMuYXBwZW5kZXJzLmxlbmd0aCA9PT0gMClcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihyZXNvbHZlKXtcblx0XHRzZXRUaW1lb3V0KChmdW5jdGlvbigpe1xuXHRcdFx0bGV0IHJlc3VsdHMgPSBbXTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcHBlbmRlcnMubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gdGhpcy5hcHBlbmRlcnNbaV0ubG9nTWVzc2FnZShhTWVzc2FnZSwgYW5FeGNlcHRpb24sIHRoaXMubmFtZSxuZXcgRGF0ZSgpLCBhTG9nTGV2ZWwpO1xuXHRcdFx0XHRpZihyZXN1bHQpXG5cdFx0XHRcdFx0cmVzdWx0cy5wdXNoKHJlc3VsdCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdFByb21pc2UuYWxsKHJlc3VsdHMpLnRoZW4ocmVzb2x2ZSk7XHRcdFx0XG5cdFx0fSkuYmluZCh0aGlzKSwgMTAwKTtcblx0fSkuYmluZCh0aGlzKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyOyIsImltcG9ydCBMb2dnZXJSZWdpc3RyeSBmcm9tIFwiLi9Mb2dnZXJSZWdpc3RyeVwiO1xuaW1wb3J0IExvZ0xldmVsIGZyb20gXCIuL0xvZ0xldmVsXCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuL0xvZ2dlclwiO1xuXG5sZXQgY29uZmlncyA9IHVuZGVmaW5lZDtcbmxldCBhcHBlbmRlcnMgPSB7fTtcbmxldCBsb2FkTGF6eUNvdW50ZXIgPSAwO1xuXG5jb25zdCBnZXRDb25maWcgPSBmdW5jdGlvbigpIHtcblx0aWYgKCFjb25maWdzKVxuXHRcdHVwZGF0ZUNvbmZpZ3MoKTtcblxuXHRyZXR1cm4gY29uZmlncztcbn07XG5cbmNvbnN0IHNldENvbmZpZyA9IGZ1bmN0aW9uKGFDb25maWcpIHtcblx0aWYgKGFDb25maWcpIHtcblx0XHRjb25maWdzID0gYUNvbmZpZztcblx0XHR1cGRhdGVMb2dnZXIoKTtcblx0fVxufTtcblxuY29uc3QgdXBkYXRlQ29uZmlncyA9IGZ1bmN0aW9uKGFDb25maWcpIHtcblx0aWYgKGNvbmZpZ3MpXG5cdFx0Y29uZmlncyA9IHt9O1xuXG5cdGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltsb2dnaW5nLXByb3BlcnRpZXNdXCIpO1xuXHRpZiAoZWxlbWVudCkge1xuXHRcdGxldCBjb25maWcgPSBlbGVtZW50LmF0dHIoXCJsb2dnaW5nLXByb3BlcnRpZXNcIik7XG5cdFx0bG9hZENvbmZpZyhKU09OLnBhcnNlKGNvbmZpZykpO1xuXHR9IGVsc2UgXG5cdFx0ZG9Mb2FkTGF6eSgpO1xufTtcblxuY29uc3QgZG9Mb2FkTGF6eSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAobG9hZExhenlDb3VudGVyIDwgMTApe1xuXHRcdGxvYWRMYXp5Q291bnRlcisrO1xuXHRcdHNldFRpbWVvdXQobG9hZENvbmZpZywgMSk7XG5cdH1cbn07XG5cbmNvbnN0IGxvYWRDb25maWcgPSBmdW5jdGlvbihhQ29uZmlnKSB7XG5cdGlmIChhQ29uZmlnKXtcbiAgICAgICAgaWYgKGFDb25maWcucmVtb3RlKVxuICAgICAgICAgICAgbG9hZENvbmZpZ1JlbW90ZShhQ29uZmlnLnJlbW90ZSk7XG4gICAgICAgIGVsc2UgaWYgKGFDb25maWcuZGF0YSkge1xuICAgICAgICAgICAgc2V0Q29uZmlnKGFDb25maWcuZGF0YS5jb25maWdzKTtcbiAgICAgICAgfVxuXHR9XG5cdGVsc2UgXG4gICAgICAgIHVwZGF0ZUNvbmZpZ3MoKTtcbn07XG5cbmNvbnN0IGxvYWRDb25maWdSZW1vdGUgPSBmdW5jdGlvbihhUmVtb3RlRGF0YSkge1xuXHRsZXQgeGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0eGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHhodHRwLnJlYWR5U3RhdGUgPT0gNClcblx0XHRcdHNldENvbmZpZyhKU09OLnBhcnNlKHJlc3BvbnNlKSk7XG5cdH07XG5cdHhodHRwLm9wZW4oXCJnZXRcIiwgYVJlbW90ZURhdGEudXJsLCBmYWxzZSk7XG5cdHJldHVybiB4aHR0cC5zZW5kKCk7XG59O1xuXG5jb25zdCB1cGRhdGVMb2dnZXIgPSBmdW5jdGlvbigpIHtcblx0bGV0IGxvZ2dlcnMgPSBMb2dnZXJSZWdpc3RyeS5nZXRBbGxMb2dnZXIoKTtcblx0Zm9yICggbGV0IG5hbWUgaW4gbG9nZ2Vycykge1xuXHRcdHZhciBsb2dnZXIgPSBsb2dnZXJzW25hbWVdO1xuXG5cdFx0bGV0IGNvbmZpZyA9IGZpbmRDb25maWcobmFtZSk7XG5cdFx0bGV0IGxvZ0xldmVsID0gTG9nTGV2ZWwuZ2V0TG9nTGV2ZWwoY29uZmlnLmxvZ0xldmVsKTtcblx0XHRsZXQgYXBwZW5kZXJzID0gZ2V0QXBwZW5kZXJzKGNvbmZpZy5hcHBlbmRlcnMpO1xuXG5cdFx0bG9nZ2VyLmxvZ0xldmVsID0gbG9nTGV2ZWw7XG5cdFx0bG9nZ2VyLmxvZ0FwcGVuZGVycyA9IGFwcGVuZGVycztcblx0fVxufTtcblxuY29uc3QgZmluZENvbmZpZyA9IGZ1bmN0aW9uKGFMb2dnZXJOYW1lKSB7XG5cdGxldCBkZWZhdWx0Q29uZmlnID0ge1xuXHRcdFwiZmlsdGVyXCIgOiBcIlwiLFxuXHRcdFwibG9nTGV2ZWxcIiA6IFwiTk9MT0dcIixcblx0XHRcImFwcGVuZGVyc1wiIDogW11cblx0fTtcblx0bGV0IGFjdHVhbENvbmZpZyA9IHVuZGVmaW5lZDtcblx0bGV0IGNvbmZpZ3MgPSBnZXRDb25maWcoKSB8fCBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGNvbmZpZyA9IGNvbmZpZ3NbaV07XG5cdFx0aWYgKGlzQ29uZmlnQWN0aXYoYUxvZ2dlck5hbWUsIGNvbmZpZywgYWN0dWFsQ29uZmlnKSlcblx0XHRcdGFjdHVhbENvbmZpZyA9IGNvbmZpZztcblx0XHRlbHNlIGlmIChjb25maWcuZmlsdGVyID09IHVuZGVmaW5lZCB8fCBjb25maWcuZmlsdGVyID09IFwiXCIpXG5cdFx0XHRkZWZhdWx0Q29uZmlnID0gY29uZmlnO1xuXHRcdGlmIChhY3R1YWxDb25maWcgIT0gdW5kZWZpbmVkICYmIGFjdHVhbENvbmZpZy5maWx0ZXIgPT0gYUxvZ2dlck5hbWUpXG5cdFx0XHRyZXR1cm4gYWN0dWFsQ29uZmlnO1xuXHR9XG5cblx0cmV0dXJuIGFjdHVhbENvbmZpZyB8fCBkZWZhdWx0Q29uZmlnO1xufTtcblxuY29uc3QgaXNDb25maWdBY3RpdiA9IGZ1bmN0aW9uKGFMb2dnZXJOYW1lLCBhQ29uZmlnLCBhbkFjdHVhbENvbmZpZykge1xuXHRpZiAoYW5BY3R1YWxDb25maWcgJiYgYW5BY3R1YWxDb25maWcuZmlsdGVyLmxlbmd0aCA+PSBhQ29uZmlnLmZpbHRlci5maWx0ZXIpXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gYUxvZ2dlck5hbWUuc2VhcmNoKGFDb25maWcuZmlsdGVyKSA9PSAwO1xufTtcblxuY29uc3QgZ2V0QXBwZW5kZXJzID0gZnVuY3Rpb24odGhlQXBwZW5kZXJzKSB7XG5cdGxldCByZXN1bHQgPSBuZXcgQXJyYXkoKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGVBcHBlbmRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgYXBwZW5kZXJTdHJpbmcgPSB0aGVBcHBlbmRlcnNbaV07XG5cdFx0bGV0IGFwcGVuZGVyID0gYXBwZW5kZXJzW2FwcGVuZGVyU3RyaW5nXTtcblx0XHRpZiAoIWFwcGVuZGVyKSB7XG5cdFx0XHRhcHBlbmRlciA9IChuZXcgRnVuY3Rpb24oXCJyZXR1cm4gXCIgKyBhcHBlbmRlclN0cmluZyArXCI7XCIpKS5jYWxsKClcblx0XHRcdGlmIChhcHBlbmRlcikge1xuXHRcdFx0XHRhcHBlbmRlcnNbYXBwZW5kZXJTdHJpbmddID0gYXBwZW5kZXI7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChhcHBlbmRlcilcblx0XHRcdHJlc3VsdC5wdXNoKGFwcGVuZGVyKTtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBMb2dnZXJGYWN0b3J5ID0ge1xuXHRuZXdMb2dnZXIgOiBmdW5jdGlvbihhTG9nZ2VyTmFtZSkge1xuXHRcdGxldCBsb2dnZXIgPSBMb2dnZXJSZWdpc3RyeS5nZXRMb2dnZXIoYUxvZ2dlck5hbWUpO1xuXHRcdGlmICghbG9nZ2VyKSB7XG5cdFx0XHRsZXQgY29uZmlnID0gZmluZENvbmZpZyhhTG9nZ2VyTmFtZSk7XG5cdFx0XHRsZXQgbG9nTGV2ZWwgPSBMb2dMZXZlbC5nZXRMb2dMZXZlbChjb25maWcubG9nTGV2ZWwpO1xuXHRcdFx0bGV0IGFwcGVuZGVycyA9IGdldEFwcGVuZGVycyhjb25maWcuYXBwZW5kZXJzKTtcblx0XG5cdFx0XHRsb2dnZXIgPSBuZXcgTG9nZ2VyKGFMb2dnZXJOYW1lLCBsb2dMZXZlbCwgYXBwZW5kZXJzKTtcblx0XHRcdExvZ2dlclJlZ2lzdHJ5LmFkZExvZ2dlcihsb2dnZXIpO1xuXHRcdH1cblx0XG5cdFx0cmV0dXJuIGxvZ2dlcjtcblx0fSxcblx0Z2V0Q29uZmlnIDogZ2V0Q29uZmlnLFx0XG5cdHNldENvbmZpZyA6IHNldENvbmZpZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyRmFjdG9yeTsiLCJpbXBvcnQgTG9nZ2VyIGZyb20gXCIuL0xvZ2dlclwiO1xuXG5jb25zdCBMT0dHRVIgPSB7fTtcbmNvbnN0IExvZ2dlclJlZ2lzdHJ5ID0ge1xuXHRhZGRMb2dnZXIgOiBmdW5jdGlvbihhTG9nZ2VyKXtcblx0XHRpZighYUxvZ2dlciBpbnN0YW5jZW9mIExvZ2dlcilcblx0XHRcdHJldHVybjtcblx0XHRcblx0XHRpZih0eXBlb2YgTE9HR0VSW2FMb2dnZXIubmFtZV0gPT09IFwidW5kZWZpbmVkXCIpXG5cdFx0XHRMT0dHRVJbYUxvZ2dlci5uYW1lXSA9IGFMb2dnZXI7XG5cdH0sXG5cdGdldExvZ2dlciA6IGZ1bmN0aW9uKGFOYW1lKXtcblx0XHRpZih0eXBlb2YgYU5hbWUgIT09IFwic3RyaW5nXCIpXG5cdFx0XHRyZXR1cm47XG5cdFx0XG5cdFx0cmV0dXJuIExPR0dFUlthTmFtZV07XG5cdH0sXHRcblx0Z2V0QWxsTG9nZ2VyIDogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gTE9HR0VSO1xuXHR9LFxuXHRnZXRJbnN0YW5jZSA6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIExvZ2dlclJlZ2lzdHJ5O1xuXHR9XG59O1x0XG5leHBvcnQgZGVmYXVsdCBMb2dnZXJSZWdpc3RyeTsiLCJjb25zdCBNZW1vcnlBcHBlbmRlciA9IHtcblx0bG9nTWVzc2FnZSA6IGZ1bmN0aW9uKGFNZXNzYWdlLCBhbkV4Y2VwdGlvbixhTG9nZ2VyTmFtZSwgYURhdGUsIGFMb2dMZXZlbCkge1xuXHRcdGxldCBnbG9iYWwgPSB3aW5kb3cgfHwgZ2xvYmFsIHx8IHt9O1xuXHRcdGdsb2JhbC5fX0xPR19fID0gZ2xvYmFsLl9fTE9HX18gfHwgW107XG5cdFx0XG5cdFx0Z2xvYmFsLl9fTE9HX18ucHVzaCh7XG5cdFx0XHRcImRhdGVcIiA6IGFEYXRlLFxuXHRcdFx0XCJsb2dMZXZlbFwiIDogYUxvZ0xldmVsLFxuXHRcdFx0XCJsb2dnZXJOYW1lXCIgOiBhTG9nZ2VyTmFtZSxcblx0XHRcdFwibWVzc2FnZVwiIDogYU1lc3NhZ2UsXG5cdFx0XHRcImV4Y2VwdGlvblwiIDogYW5FeGNlcHRpb25cblx0XHR9KTtcblx0fVxufTsgXG5leHBvcnQgZGVmYXVsdCBNZW1vcnlBcHBlbmRlcjtcbiIsImNvbnN0IERhdGVVdGlscyA9IHtcclxuXHRcdGRhdGVBc1N0cmluZyA6IGZ1bmN0aW9uKGFEYXRlKXtcclxuXHRcdFx0aWYoIWFEYXRlIGluc3RhbmNlb2YgRGF0ZSlcclxuXHRcdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdFx0XHJcblx0XHRcdGxldCByZXN1bHQgPSBcIlwiO1xyXG5cdFx0XHRcclxuXHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi5cIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0TW9udGgoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXRNb250aCgpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRNb250aCgpO1xyXG5cdFx0XHRyZXN1bHQgKz0gXCIuXCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldERhdGUoKSA8IDEwKSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gXCIwXCIgKyBhRGF0ZS5nZXREYXRlKCk7XHJcblx0XHRcdGVsc2UgXHJcblx0XHRcdFx0cmVzdWx0ICs9IGFEYXRlLmdldERhdGUoKTtcdFx0XHJcblx0XHRcdHJlc3VsdCArPSAgXCIgXCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldEhvdXJzKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0SG91cnMoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0SG91cnMoKTtcclxuXHRcdFx0cmVzdWx0ICs9IFwiOlwiO1xyXG5cdFx0XHRpZihhRGF0ZS5nZXRNaW51dGVzKCkgPCAxMCkgXHJcblx0XHRcdFx0cmVzdWx0ICs9IFwiMFwiICsgYURhdGUuZ2V0TWludXRlcygpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRNaW51dGVzKCk7XHJcblx0XHRcdHJlc3VsdCArPSBcIjpcIjtcclxuXHRcdFx0aWYoYURhdGUuZ2V0U2Vjb25kcygpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldFNlY29uZHMoKTtcclxuXHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRyZXN1bHQgKz0gYURhdGUuZ2V0U2Vjb25kcygpO1xyXG5cdFx0XHRyZXN1bHQgKz0gXCI6XCI7XHJcblx0XHRcdGlmKGFEYXRlLmdldE1pbGxpc2Vjb25kcygpIDwgMTApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjAwXCIgKyBhRGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcclxuXHRcdFx0aWYoYURhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgPCAxMDApIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBcIjBcIiArIGFEYXRlLmdldE1pbGxpc2Vjb25kcygpO1xyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdHJlc3VsdCArPSBhRGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERhdGVVdGlsczsiLCJpbXBvcnQgRGF0ZVV0aWxzIGZyb20gXCIuL0RhdGVVdGlsc1wiO1xyXG5jb25zdCB1dGlscyA9IHtcclxuXHRcdERhdGVVdGlscyA6IERhdGVVdGlsc1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB1dGlsczsiXSwic291cmNlUm9vdCI6IiJ9