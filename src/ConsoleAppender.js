import LogLevel from "./LogLevel";
import DateUtils from "./utils/DateUtils";

const ConsoleAppender = {
	logMessage : function(aMessage, anException, aLoggerName, aDate, aLogLevel) {
		if (LogLevel.NOLOG == aLogLevel)
			return;
		let log = [];
		if (aDate)
			log.push(DateUtils.dateAsString(aDate), " ");
		
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
		if (LogLevel.ERROR == aLogLevel) 
			appender = console.error; 
		else if (LogLevel.WARN == aLogLevel)
			appender = console.warn;
		else if (LogLevel.INFO == aLogLevel)
			appender = console.info;
		else if (LogLevel.DEBUG == aLogLevel)
			appender = console.debug;
		else if (LogLevel.TRACE == aLogLevel)
			appender = console.trace;
		
		appender.apply(console, log);	
	}
};
export default ConsoleAppender;