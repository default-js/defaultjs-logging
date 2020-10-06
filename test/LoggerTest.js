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
		const config = LoggerFactory.config();
		expect(config.length).toBe(configEntries.length);
	});
	
	it("is logger correct", async () => {
		expect(logger).toBeDefined();
		expect(await logger.config.logLevel).toBe(LogLevel.TRACE); 
	});
});