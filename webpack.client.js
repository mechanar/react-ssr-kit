const path = require("path");
const baseConfig = require("./webpack.base");
const merge = require("webpack-merge");

const config = {
	mode: "development",
	entry: "./src/client/index.js",

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public")
	},
	devtool: "inline-source-map"
};

module.exports = merge(baseConfig, config);
