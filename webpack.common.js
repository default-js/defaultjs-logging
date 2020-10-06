const path = require("path");

entries = {};
entries["module-bundle"] ="./index.js";
entries["browser-bundle"] = "./browser-bundle.js";


console.log("entries", entries);

module.exports = {
	entry: entries,
	resolve: {
		alias: {
			"@src": path.resolve(__dirname + "/src"),
			"@test": path.resolve(__dirname + "/test"),
			"@modules": path.resolve(__dirname + "/node_modules"),
		},
	},
	target: "web",
};
