import Logger from "./Logger";

const LOGGER = {};
const LoggerRegistry = {
	addLogger : function(aLogger){
		if(!aLogger instanceof Logger)
			return;
		
		if(typeof LOGGER[aLogger.name] === "undefined")
			LOGGER[aLogger.name] = aLogger;
	},
	getLogger : function(aName){
		if(typeof aName !== "string")
			return;
		
		return LOGGER[aName];
	},	
	getAllLogger : function(){
		return LOGGER;
	},
	getInstance : function(){
		return LoggerRegistry;
	}
};	
export default LoggerRegistry;