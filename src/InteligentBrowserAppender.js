import Appender from "./Appender";
import HtmlAppender from "./HtmlAppender";
import ConsoleAppender from "./ConsoleAppender";
import MemoryAppender from "./MemoryAppender";

let appender;
const getAppender = () => {
	if (appender) {		
		if (console)
			appender = ConsoleAppender;
		else if (HtmlAppender.isAvailable())
			appender = HtmlAppender;
		else
			appender = MemoryAppender;
	}
	
	return appender;
};
class IntelligentBrowserAppender extends Appender {
	logMessage(aMessage, anException, aLoggerName, aDate, aLogLevel) {
		getAppender().logMessage(aMessage, anException, aLoggerName, aDate, aLogLevel);
	}
};

const INSTANCE = new IntelligentBrowserAppender();
Appender.register("IntelligentBrowserAppender", INSTANCE);
export default INSTANCE;
