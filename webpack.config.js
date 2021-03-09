const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
        {
              test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
              type: 'asset/resource',
            },
        {
              test: /\.css$/,
              use: [
              MiniCssExtractPlugin.loader, 'css-loader',
              ],
        },
            
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
			patterns: [{
				from: path.resolve(__dirname, 'src/img'), to: path.resolve(__dirname, 'dist/img'),
        from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist'),
			}]
		}),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
