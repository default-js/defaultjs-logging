class Level {
	constructor(aOrder, aTitle) {
		this.order = aOrder;
		this.title = aTitle;
	}

	isIncluded(aLogLevel) {
		return this.order >= aLogLevel.order;
	}
}


export const NOLOG = new Level(0, "NOLOG");
export const ERROR = new Level(1, "ERROR");
export const WARN = new Level(2, "WARN");
export const INFO = new Level(3, "INFO");
export const DEBUG = new Level(4, "DEBUG");
export const TRACE = new Level(5, "TRACE");

const LogLevel = {
	NOLOG,
	ERROR,
	WARN,
	INFO,
	DEBUG,
	TRACE,
	lookup: (aLevel) => {
		if (typeof aLevel !== "string") return NOLOG;
		return LogLevel[aLevel.toUpperCase()] || NOLOG;
	}
};
export default LogLevel;

