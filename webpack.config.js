const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const path = require('path');

module.exports = {
	entry: './js/scripts.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname),
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
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
							}
						},
						{
							loader: 'postcss-loader'
						}
					]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css'),
		new UglifyJsPlugin(
			{
				test: /\.js($|\?)/i
			}
		),
	],
};