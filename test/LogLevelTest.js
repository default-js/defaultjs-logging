import "@default-js/defaultjs-extdom";
import {LogLevel} from "../index";

describe("LogLevelTest", function() {
	
	it("test LogLevel.NOLOG", function(){		
		expect(LogLevel.NOLOG).toBeDefined();
		expect(LogLevel.NOLOG.order).toBe(0);
		expect(LogLevel.NOLOG.title).toBe("NOLOG");
		
		expect(LogLevel.NOLOG.isIncluded(LogLevel.NOLOG)).toBe(true);
		expect(LogLevel.NOLOG.isIncluded(LogLevel.ERROR)).toBe(false);
		expect(LogLevel.NOLOG.isIncluded(LogLevel.WARN)).toBe(false);
		expect(LogLevel.NOLOG.isIncluded(LogLevel.INFO)).toBe(false);
		expect(LogLevel.NOLOG.isIncluded(LogLevel.DEBUG)).toBe(false);
		expect(LogLevel.NOLOG.isIncluded(LogLevel.TRACE)).toBe(false);
	});
	
	it("test LogLevel.ERROR", function(){		
		expect(LogLevel.ERROR).toBeDefined();
		expect(LogLevel.ERROR.order).toBe(1);
		expect(LogLevel.ERROR.title).toBe("ERROR");

		expect(LogLevel.ERROR.isIncluded(LogLevel.NOLOG)).toBe(true);
		expect(LogLevel.ERROR.isIncluded(LogLevel.ERROR)).toBe(true);
		expect(LogLevel.ERROR.isIncluded(LogLevel.WARN)).toBe(false);
		expect(LogLevel.ERROR.isIncluded(LogLevel.INFO)).toBe(false);
		expect(LogLevel.ERROR.isIncluded(LogLevel.DEBUG)).toBe(false);
		expect(LogLevel.ERROR.isIncluded(LogLevel.TRACE)).toBe(false);
	});
	
	it("test LogLevel.WARN", function(){		
		expect(LogLevel.WARN).toBeDefined();
		expect(LogLevel.WARN.order).toBe(2);
		expect(LogLevel.WARN.title).toBe("WARN");
		
		expect(LogLevel.WARN.isIncluded(LogLevel.NOLOG)).toBe(true);
		expect(LogLevel.WARN.isIncluded(LogLevel.ERROR)).toBe(true);
		expect(LogLevel.WARN.isIncluded(LogLevel.WARN)).toBe(true);
		expect(LogLevel.WARN.isIncluded(LogLevel.INFO)).toBe(false);
		expect(LogLevel.WARN.isIncluded(LogLevel.DEBUG)).toBe(false);
		expect(LogLevel.WARN.isIncluded(LogLevel.TRACE)).toBe(false);
	});
	
	it("test LogLevel.INFO", function(){		
		expect(LogLevel.INFO).toBeDefined();
		expect(LogLevel.INFO.order).toBe(3);
		expect(LogLevel.INFO.title).toBe("INFO");
		
		expect(LogLevel.INFO.isIncluded(LogLevel.NOLOG)).toBe(true);
		expect(LogLevel.INFO.isIncluded(LogLevel.ERROR)).toBe(true);
		expect(LogLevel.INFO.isIncluded(LogLevel.WARN)).toBe(true);
		expect(LogLevel.INFO.isIncluded(LogLevel.INFO)).toBe(true);
		expect(LogLevel.INFO.isIncluded(LogLevel.DEBUG)).toBe(false);
		expect(LogLevel.INFO.isIncluded(LogLevel.TRACE)).toBe(false);
	});
	
	it("test LogLevel.DEBUG", function(){		
		expect(LogLevel.DEBUG).toBeDefined();
		expect(LogLevel.DEBUG.order).toBe(4);
		expect(LogLevel.DEBUG.title).toBe("DEBUG");
		
		expect(LogLevel.DEBUG.isIncluded(LogLevel.NOLOG)).toBe(true);
		expect(LogLevel.DEBUG.isIncluded(LogLevel.ERROR)).toBe(true);
		expect(LogLevel.DEBUG.isIncluded(LogLevel.WARN)).toBe(true);
		expect(LogLevel.DEBUG.isIncluded(LogLevel.INFO)).toBe(true);
		expect(LogLevel.DEBUG.isIncluded(LogLevel.DEBUG)).toBe(true);
		expect(LogLevel.DEBUG.isIncluded(LogLevel.TRACE)).toBe(false);
	});
	
	it("test LogLevel.TRACE", function(){		
		expect(LogLevel.TRACE).toBeDefined();
		expect(LogLevel.TRACE.order).toBe(5);
		expect(LogLevel.TRACE.title).toBe("TRACE");
		
		expect(LogLevel.TRACE.isIncluded(LogLevel.NOLOG)).toBe(true);
		expect(LogLevel.TRACE.isIncluded(LogLevel.ERROR)).toBe(true);
		expect(LogLevel.TRACE.isIncluded(LogLevel.WARN)).toBe(true);
		expect(LogLevel.TRACE.isIncluded(LogLevel.INFO)).toBe(true);
		expect(LogLevel.TRACE.isIncluded(LogLevel.DEBUG)).toBe(true);
		expect(LogLevel.TRACE.isIncluded(LogLevel.TRACE)).toBe(true);
	});
	
	it("test LogLevel.lookup", function(){
		expect(LogLevel.lookup(undefined)).toBe(LogLevel.NOLOG);
		expect(LogLevel.lookup("")).toBe(LogLevel.NOLOG);
		expect(LogLevel.lookup("IS_NOT_A_LOG_LEVEL")).toBe(LogLevel.NOLOG);
		expect(LogLevel.lookup("NOLOG")).toBe(LogLevel.NOLOG);
		expect(LogLevel.lookup("ERROR")).toBe(LogLevel.ERROR);
		expect(LogLevel.lookup("WARN")).toBe(LogLevel.WARN);
		expect(LogLevel.lookup("INFO")).toBe(LogLevel.INFO);
		expect(LogLevel.lookup("DEBUG")).toBe(LogLevel.DEBUG);
		expect(LogLevel.lookup("TRACE")).toBe(LogLevel.TRACE);
	});
});