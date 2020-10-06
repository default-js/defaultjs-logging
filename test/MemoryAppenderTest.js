import "@default-js/defaultjs-extdom";
import { LoggerFactory, LogLevel, ConsoleAppender, MemoryAppender, HtmlAppender, InteligentBrowserAppender } from "../index";
import logging from "./data/logging.json";


let logger = null;
let configEntries = null;

describe("MemoryAppenderTest", () => {

	beforeAll(async () => {
		configEntries = logging.configs;
		await LoggerFactory.config(logging.configs);
		logger = LoggerFactory.newLogger("test.LoggerTest");
		await logger.config;
		window.__LOG__ = undefined;
	});

	it("is logger correct", async () => {
		expect(logger).toBeDefined();
		const config = await logger.config;
		expect(config.logLevel).toBe(LogLevel.TRACE);
	});

	it("add log entry", async () => {
		expect(logger).toBeDefined();
		let message = "Log info Messages:" + Date.now();
		logger.logInfo(message);

		return new Promise((resolve) => {
			setTimeout(() => {
				console.log(window.__LOG__);
				expect(window.__LOG__).toBeDefined();
				expect(window.__LOG__.length).toBe(1);

				resolve();
			}, 100);
		});
	});
});