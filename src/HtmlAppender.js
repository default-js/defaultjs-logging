import DateUtils from "./utils/DateUtils";

const CONTAINER = "[data-log]";		
const HtmlAppender = {
	isAvailable : function(){
		return !!document.querySelector(CONTAINER) ;
	},
	logMessage : function(aMessage, anException, aLoggerName, aDate, aLogLevel) {
		let container = document.querySelector(CONTAINER);
		if (!container)
			return;
		
		let entry = document.createElement("div");
		entry.setAttribute("class", "log-entry " + aLogLevel.title);
		let message =  DateUtils.dateAsString(aDate || new Date()) + " ***" + aLogLevel.title + "*** " + aLoggerName + "";
		
		if (aMessage)
			message += " -> " + aMessage;
		if (anException)
			message += ": " + anException;
		
		entry.textContent = message;
		return container.appendChild(entry);
	}
};

export default HtmlAppender;