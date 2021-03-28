import LogLevel from "./LogLevel";

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
		return this.log(aMessage, aException, LogLevel.ERROR);
	}

	logWarn(aMessage, aException) {
		this.log(aMessage, aException, LogLevel.WARN);
	}

	logInfo(aMessage, aException) {
		this.log(aMessage, aException, LogLevel.INFO);
	}

	logDebug(aMessage, aException) {
		this.log(aMessage, aException, LogLevel.DEBUG);
	}

	asynclogTrace(aMessage, aException) {
		this.log(aMessage, aException, LogLevel.TRACE);
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
export default Logger;
