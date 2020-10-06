import Appender from "./Appender";

const GLOBAL = self || global || window || this || {};
const LOG = GLOBAL.__LOG__ = [];
class MemoryAppender extends Appender {
	logMessage(aMessage, anException,aLoggerName, aDate, aLogLevel) {		
		LOG.push({
			"date" : aDate,
			"logLevel" : aLogLevel,
			"loggerName" : aLoggerName,
			"message" : aMessage,
			"exception" : anException
		});
	}
}; 

const INSTANCE = new MemoryAppender();
Appender.register("memory", INSTANCE);
export default INSTANCE;
