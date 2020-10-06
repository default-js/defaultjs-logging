import "@default-js/defaultjs-extdom";
import { LoggerFactory, LogLevel, ConsoleAppender, MemoryAppender, HtmlAppender, InteligentBrowserAppender } from "../index";
import logging from "./data/logging.json";


let logger = null;
let configEntries = null;
let logcontainer = null;

describe("HtmlAppenderTest", () => {
	beforeAll(async () => {

		logcontainer = document.createElement("div");
		logcontainer.setAttribute("data-log", "");
		document.body.appendChild(logcontainer);

		configEntries = logging.configs;
		LoggerFactory.config(configEntries);
		logger = LoggerFactory.newLogger("test.HtmlAppenderTest");
	});

	it("is logger correct", async () => {
		expect(logger).toBeDefined();
		const config = await logger.config;
		expect(config.logLevel).toBe(LogLevel.TRACE);
	});

	it("add log entry", async () => {
		let message = "Log info Messages:" + Date.now();
		logger.logInfo(message);

		return new Promise((resolve) => {
			setTimeout(() => {
				let entry = logcontainer.find(".log-entry.INFO").first();
				expect(entry).toBeDefined();
				resolve();
			}, 100);
		});
	});
});