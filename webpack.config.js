const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const path = require('path');

const extractCssPlugin = ExtractTextPlugin.extract({
	disable: process.env.NODE_ENV === 'development' && true,
	fallback: 'style-loader',
	use: [
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1,
				minimize: true,
			},
		},
		{
			loader: 'sass-loader',
		},
	],
});

const baseConfig = name => ({
	mode: process.env.NODE_ENV || 'development',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		compress: true,
		port: 8080,
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use:
					process.env.NODE_ENV === 'production'
						? extractCssPlugin
						: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(mp3|aiff)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'media/',
							limit: 8192,
						},
					},
				],
			},
			{
				test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'media/',
							limit: 8192,
						},
					},
				],
			},
		],
	},
	plugins: [
		new ExtractTextPlugin('[hash].bundle.css'),
		new UglifyJsPlugin({
			test: /\.js($|\?)/i,
		}),
		new CleanWebpackPlugin(['./dist/*']),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: `src/${name}.html`,
		}),
	],
});

const mainConfig = {
	entry: './src/js/index.js',
	output: {
		filename: '[hash].index.js',
		path: path.resolve(__dirname, 'dist'),
	},
	...baseConfig('index'),
};

const webcamConfig = {
	entry: './src/webcam.js',
	output: {
		filename: '[hash].bundle.js',
		path: path.resolve(__dirname, 'dist', 'webcam'),
	},
	...baseConfig('webcam'),
};

module.exports = [mainConfig, webcamConfig];
