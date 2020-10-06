import Config from "./Config";
import Logger from "./Logger";

const LOGGERMAP = new Map();

const updateLogger = (config) => {	
	for (let [name, logger] of LOGGERMAP)
		logger.config = config.loggerConfig(name);
};

class LoggerFactory {
	constructor() {
		this.__config__ = new Config(); 
	}

	newLogger(name) {
		if (!LOGGERMAP.has(name))
			LOGGERMAP.set(name, new Logger(name, this.__config__.loggerConfig(name)));

		return LOGGERMAP.get(name);
	}

	async config(config){
		if(arguments.length == 0)
			return this.__config__.data;
		
		this.__config__ = new Config(config);
		updateLogger(this.__config__);
	}

}

const INSTANCE = new LoggerFactory();

export default INSTANCE;
