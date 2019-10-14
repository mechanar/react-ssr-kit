module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					presets: [
						"@babel/preset-react",
						["@babel/env", { targets: { browsers: ["last 2 versions"] } }]
					]
				}
			}
		]
	}
};
