import "../node_modules/dom-api-extension";
import "../browser-index";
import logging from "./data/logging.json";


describe("MemoryAppenderTest", function() {
	beforeAll(function(){
		this.configEntries = logging.configs.length;
		defaultjs.logging.LoggerFactory.setConfig(logging.configs);
		this.logger = defaultjs.logging.LoggerFactory.newLogger("test.MemoryAppenderTest");
		window.__LOG__ = undefined;
	});
	 
	it("is logger correct", function(){
		expect(this.logger).toBeDefined();
		expect(this.logger.logLevel).toBe(defaultjs.logging.LogLevel.TRACE); 
	});
	
	it("add log entry", function(done){	
		expect(this.logger).toBeDefined();
		let message = "Log info Messages:" + Date.now();
		this.logger.logInfo(message).then((function(){
			console.log(window.__LOG__);
			expect(window.__LOG__).toBeDefined();
			expect(window.__LOG__.length).toBe(1);
			done();
		}).bind(this));
	});
});