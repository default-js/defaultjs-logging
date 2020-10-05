import HtmlAppender from "./HtmlAppender";
import ConsoleAppender from "./ConsoleAppender";
import MemoryAppender from "./MemoryAppender";

let appender;
const getAppender = function() {
	if (this.appender) {		
		if (console)
			this.appender = ConsolenAppender;
		else if (HtmlAppender.isAvailable())
			this.appender = HtmlAppender;
		else
			this.appender = MemoryAppender;
	}
	
	return this.appender;
};
const InteligentBrowserAppender = {
	logMessage : function(aMessage, anException, aLoggerName, aDate, aLogLevel) {
		getAppender().logMessage(aMessage, anException, aLoggerName, aDate, aLogLevel);
	}
};

export default InteligentBrowserAppender;
