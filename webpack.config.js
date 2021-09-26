const path = require("path"),
			basePath = __dirname,
			distPath = "dist",
			HtmlWebpackPlugin = require("html-webpack-plugin"),
			MiniCssExtractPlugin  = require("mini-css-extract-plugin");

module.exports = {
	module: {
		rules: [
			{
				test:/\.js$/i,
				exclude: /node_modules/,
				use: { loader: "babel-loader", }
			},
			{
				test: /\.pug$/i,
				use: [ { loader: "pug-loader", } ],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(jpg|jpeg|png|svg|webp|gif)$/i,
				use: ["file-loader?name=assets/images/[name].[ext]"],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.pug",
			filename: "./index.html",
			scriptLoading: "blocking",
		}),
		new MiniCssExtractPlugin({
			filename: 'styles.css'
		}),
	],
	// Output point
	output: {
		path: path.join( basePath, distPath),
		filename: "scripts.js"
	}
}