import "@default-js/defaultjs-extdom";
import {LoggerFactory, LogLevel, ConsoleAppender, MemoryAppender, HtmlAppender, InteligentBrowserAppender} from "../index";
import logging from "./data/logging.json";

describe("LoggerTest", () => {
	let logger = null;
	let configEntries = null;

	beforeAll(async () => {
		configEntries = logging.configs;
		await LoggerFactory.config(logging.configs);
		logger = LoggerFactory.newLogger("test.LoggerTest");
	});
	
	it("check loaded logger configs", async () => {		
		const config = await LoggerFactory.config();
		expect(config.length).toBe(configEntries.length);
	});
	
	it("is logger correct", async () => {
		expect(logger).toBeDefined();
		const config = await logger.config;
		expect(config.logLevel).toBe(LogLevel.TRACE); 
	});
});