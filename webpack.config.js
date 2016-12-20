var webpack = require('webpack');
var path = require('path');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
	watch: true, 
	watchOptions: {
		aggregateTimeout: 100  
	},	
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
		{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
			  presets: ['react', 'es2015'],
			  plugins: ['transform-object-rest-spread', 'transform-react-display-name']
			}
		},
		{ 
			test: /\.css$/, 
			loader: "style!css"
		},
		{ 
			test: /\.(woff|woff2|eot|ttf|svg)$/, 
			loader: "url"
		}		
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
