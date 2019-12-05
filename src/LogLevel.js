const LogLevel = function(aOrder, aTitle) {
	this.order = aOrder;
	this.title = aTitle;
};

LogLevel.prototype.isIncluded = function(aLogLevel) {
	return this.order >= aLogLevel.order;
};

LogLevel.getLogLevel = function(aLogLevel) {
	if (typeof aLogLevel === "undefined")
		return LogLevel.NOLOG;
	
	return LogLevel[aLogLevel.toUpperCase()] || LogLevel.NOLOG;
};

LogLevel.NOLOG = new LogLevel(0, "NOLOG");
LogLevel.ERROR = new LogLevel(1, "ERROR");
LogLevel.WARN = new LogLevel(2, "WARN");
LogLevel.INFO = new LogLevel(3, "INFO");
LogLevel.DEBUG = new LogLevel(4, "DEBUG");
LogLevel.TRACE = new LogLevel(5, "TRACE");

export default LogLevel;