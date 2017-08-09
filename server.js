var webpack = require('webpack')
var devServer = require('webpack-dev-server')
var config = require('./webpack.config.js')
// var opn = require('opn')

new devServer(webpack(config), {
	publicPath: config.output.publicPath,
	inline: true,
	historyApiFallback: true,
	quiet: true,
	noInfo: false,
	stats: {
		assets: false,
		colors: true,
		version: false,
		hash: false,
		timings: false,
		chunks: false,
		chunkModules: false
	}
}).listen(3000, 'localhost', function (err) {
	if (err) {
		console.log(err)
	}
	// opn('http://localhost:3000')	
	console.log('Listening at localhost:3000')
})