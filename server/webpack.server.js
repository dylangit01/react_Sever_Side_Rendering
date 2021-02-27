const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
	// Inform webpack that building a bundle for nodeJS, not the browser
	target: 'node',

	entry: './src/index.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	externals: [webpackNodeExternals()],
}

module.exports = merge(baseConfig, config)