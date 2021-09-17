import Config from "./Config";
import Logger from "./Logger";

const LOGGERMAP = new Map();
let CONFIG = new Config();
const updateLogger = () => {
	for (let [name, logger] of LOGGERMAP) logger.config = CONFIG.loggerConfig(name);
};

export const newLogger = (name) => {
	if (!LOGGERMAP.has(name)) LOGGERMAP.set(name, new Logger(name, CONFIG.loggerConfig(name)));

	return LOGGERMAP.get(name);
};

export const config = async function(config) {
	if (arguments.length == 0) return CONFIG.data;

	CONFIG = new Config(await config);
	updateLogger();
};

export default { newLogger, config };
