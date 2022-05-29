const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/javascripts/main.js',
	output: {
		path : path.resolve(__dirname, './dist'),
		filename : './javascripts/main.js',
	},
	module: {
		rules: [
			{
				test: /\.css/,//正規表現 .cssというファイル名を検知
				use: [
					{
						loader: MiniCssExtractPlugin.loader, //loaderは下から上に適用
					},
					{
						loader: 'css-loader', // css-loaderを使う
					},
				]
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: './stylesheets/main.css',
		}),
		new HtmlWebpackPlugin({
			template: './src/templates/index.html',
		}),
		new CleanWebpackPlugin(),
	],
};
