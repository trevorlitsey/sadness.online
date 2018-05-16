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
			}
		},
		{
			loader: 'sass-loader'
		}
	]
})

module.exports = {
	entry: './js/scripts.js',
	output: {
		filename: '[hash].bundle.js',
		path: path.resolve(__dirname),
	},
	mode: process.env.NODE_ENV || 'development',
	devServer: {
		contentBase: path.join(__dirname),
		compress: true,
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: process.env.NODE_ENV === 'development' ? ['style-loader', 'css-loader', 'sass-loader'] : extractCssPlugin,
			},
			{ test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
		]
	},
	plugins: [
		new ExtractTextPlugin('[hash].bundle.css'),
		new UglifyJsPlugin(
			{
				test: /\.js($|\?)/i
			}
		),
		new CleanWebpackPlugin(['*.html', '*.bundle.js', '*.css', '*.png', '*.jpg', '*.ttf']),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'templates/index.html'
		})
	],
};