const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
	entry: './js/scripts.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname)
	},
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname),
		compress: true,
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader',
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css'),
	],
};