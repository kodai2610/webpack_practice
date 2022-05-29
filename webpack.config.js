const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
			path : path.resolve(__dirname, './dist'),
			filename : 'main.js',
	},
	module: {
		rules: [
			{
				test: /\.css/,//正規表現 .cssというファイル名を検知
				use: [
					{
						loader: 'style-loader', //loaderは下から上に適用
					},
					{
						loader: 'css-loader', // css-loaderを使う
					},
				]
			},
		],
	},
};
