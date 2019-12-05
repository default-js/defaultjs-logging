import utils from "./src/utils";
import ConsoleAppender from "./src/ConsoleAppender";
import HtmlAppender from "./src/HtmlAppender";
import InteligentBrowserAppender from "./src/InteligentBrowserAppender";
import MemoryAppender from "./src/MemoryAppender";
import LogLevel from "./src/LogLevel";
import Logger from "./src/Logger";
import LoggerFactory from "./src/LoggerFactory";
import LoggerRegistry from "./src/LoggerRegistry";

const global = window || global || self || this || {};
global.defaultjs = global.defaultjs || {};
global.defaultjs.logging = global.defaultjs.logging || {
	VERSION : "${version}",
	utils : utils,
	ConsoleAppender : ConsoleAppender,
	ConsolenAppender : ConsoleAppender,
	HtmlAppender : HtmlAppender,
	MemoryAppender : MemoryAppender,
	InteligentBrowserAppender : InteligentBrowserAppender,
	LogLevel : LogLevel,
	Logger : Logger,
	LoggerFactory : LoggerFactory,
	LoggerRegistry : LoggerRegistry
};