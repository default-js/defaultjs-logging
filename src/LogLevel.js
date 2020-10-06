export const NOLOG = new LogLevel(0, "NOLOG");
export const ERROR = new LogLevel(1, "ERROR");
export const WARN = new LogLevel(2, "WARN");
export const INFO = new LogLevel(3, "INFO");
export const DEBUG = new LogLevel(4, "DEBUG");
export const TRACE = new LogLevel(5, "TRACE");

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

export default LogLevel;
