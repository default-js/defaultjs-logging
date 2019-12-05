const MemoryAppender = {
	logMessage : function(aMessage, anException,aLoggerName, aDate, aLogLevel) {
		let global = window || global || {};
		global.__LOG__ = global.__LOG__ || [];
		
		global.__LOG__.push({
			"date" : aDate,
			"logLevel" : aLogLevel,
			"loggerName" : aLoggerName,
			"message" : aMessage,
			"exception" : anException
		});
	}
}; 
export default MemoryAppender;
