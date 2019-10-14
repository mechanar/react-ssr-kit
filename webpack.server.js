const path = require("path");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");

const config = {
	target: "node",
	mode: "production",
	entry: "./src/server.js",
	externals: [webpackNodeExternals()],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build")
	}
};

module.exports = merge(baseConfig, config);
