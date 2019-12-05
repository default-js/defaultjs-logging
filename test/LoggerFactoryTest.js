import "../node_modules/dom-api-extension";
import "../browser-index";
import logging from "./data/logging.json";


describe("LoggerFactoryTest", function() {
	beforeAll(function(){
		this.configEntries = logging.configs.length;
		defaultjs.logging.LoggerFactory.setConfig(logging.configs);
		this.logger = undefined;
	});
	
	it("check load configs", function(){
		
	});
	
	it("check loaded logger configs", function(){		
		let config = defaultjs.logging.LoggerFactory.getConfig();
		expect(config.length).toBe(this.configEntries);		
	});
	
	it("new Logger", function(){
		this.logger =defaultjs.logging.LoggerFactory.newLogger("test.LoggerFactoryTest");
		expect(this.logger).toBeDefined();
		expect(this.logger.logLevel).toBe(defaultjs.logging.LogLevel.TRACE); 
	});
	
	it("new Logger dublicate check", function(){
		let logger1 = defaultjs.logging.LoggerFactory.newLogger("test.LoggerFactoryTest");
		let logger2 = defaultjs.logging.LoggerFactory.newLogger("test.LoggerFactoryTest");
		expect(logger1).toBeDefined();
		expect(logger2).toBeDefined();
		expect(logger1).toBe(logger2);
	});
});