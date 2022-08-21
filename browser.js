import ConsoleAppender from "./src/ConsoleAppender";
import HtmlAppender from "./src/HtmlAppender";
import InteligentBrowserAppender from "./src/InteligentBrowserAppender";
import MemoryAppender from "./src/MemoryAppender";
import LogLevel from "./src/LogLevel";
import Logger from "./src/Logger";
import LoggerFactory from "./src/LoggerFactory";

const global = self || global || window || this || {};
global.defaultjs = global.defaultjs || {};
global.defaultjs.logging = global.defaultjs.logging || {
	VERSION: "${version}",
	ConsoleAppender,
	HtmlAppender,
	MemoryAppender,
	InteligentBrowserAppender,
	LogLevel,
	Logger,
	LoggerFactory,
};

export { ConsoleAppender, HtmlAppender, MemoryAppender, InteligentBrowserAppender, LogLevel, Logger, LoggerFactory };
