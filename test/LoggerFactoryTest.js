import "@default-js/defaultjs-extdom";
import {LoggerFactory, LogLevel, ConsoleAppender, MemoryAppender, HtmlAppender, InteligentBrowserAppender} from "../index";
import logging from "./data/logging.json";


describe("LoggerFactoryTest", () => {
	let configEntries = null;
	let logger = null;

	beforeAll(async () => {
		configEntries = logging.configs;
		await LoggerFactory.config(logging.configs);
		logger = LoggerFactory.newLogger("test.LoggerTest");
	});
	
	it("check load configs", async () => {
		
	});
	
	it("check loaded logger configs", async () => {	
			
		let config = await LoggerFactory.config();
		expect(config.length).toBe(configEntries.length);		
	});
	
	it("new Logger", async () => {
		logger = LoggerFactory.newLogger("test.LoggerFactoryTest");
		expect(logger).toBeDefined();
		
		const config = await logger.config;
		
		
		expect(config.logLevel).toBe(LogLevel.TRACE); 
	});
	
	it("new Logger dublicate check", async () => {
		const logger1 = LoggerFactory.newLogger("test.LoggerFactoryTest");
		const logger2 = LoggerFactory.newLogger("test.LoggerFactoryTest");
		expect(logger1).toBeDefined();
		expect(logger2).toBeDefined();
		expect(logger1).toBe(logger2);
	});
});