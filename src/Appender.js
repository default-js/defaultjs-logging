const APPENDERS = new Map();

export default class Appender {
	static getAppender(name) {
		return APPENDERS.get(name);
	}

	static register(name, appender) {
		APPENDERS.set(name, appender);
	}

	constructor() {}

	logMessage(aMessage, anException, aLoggerName, aDate, aLogLevel) {}
}
