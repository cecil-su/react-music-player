var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
  	'webpack-dev-server/client?http://localhost:3000',
  	// 'webpack/hot/only-dev-server',
  	// 'react-hot-loader/patch',
  	path.join(__dirname, 'index.js')
  ],

  output: {
  	path:  path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
  	new HtmlWebpackPlugin({
  		template: 'index.tpl.html',
  		inject: true,
  		filename: 'index.html'
  	}),
  	// new webpack.optimize.OccurenceOrderPlugin(),
  	new webpack.HotModuleReplacementPlugin(),
  	new webpack.NoEmitOnErrorsPlugin(),
  	new webpack.DefinePlugin({
  		'process.env.NODE_ENV': JSON.stringify('development')
  	})
  ],

  module: {
  	rules: [
  		{
  			test: /\.js$/,
  			exclude: /node_modules/,
  			loader: 'babel-loader',
  			options: {
  				presets: ['react', 'es2015']
  			}
  		},
  		{
  			test: /\.css$/,
  			loader: 'style-loader!css-loader'
  		},
  		{
  			test: /\.less$/,
  			loader: 'style-loader!css-loader!less-loader'
  		}
  	]
  }
}