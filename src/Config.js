import LogLevel from "./LogLevel";
import Appender from "./Appender";

const APPENDERS = {};
const DEFAULTCONFIG = {
	filter: "",
	logLevel: "NOLOG",
	appenders: [],
};

export const loadConfig = async (config) => {
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
		const appender = Appender.getAppender(key);
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
			logLevel: LogLevel.lookup(config.logLevel),
			appenders: getAppenders(config.appenders),
		};
	}
}

export default Config;
