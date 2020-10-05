import "../node_modules/dom-api-extension";
import "../browser-index";
import logging from "./data/logging.json";

describe("LoggerTest", function() {
	beforeAll(function(){
		this.configEntries = logging.configs.length;
		defaultjs.logging.LoggerFactory.setConfig(logging.configs);
		this.logger = defaultjs.logging.LoggerFactory.newLogger("test.LoggerTest");
	});
	
	it("check loaded logger configs", function(){		
		let config = defaultjs.logging.LoggerFactory.getConfig();
		expect(config.length).toBe(this.configEntries);
	});
	
	it("is logger correct", function(){
		expect(this.logger).toBeDefined();
		expect(this.logger.logLevel).toBe(defaultjs.logging.LogLevel.TRACE); 
	});
});