var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({/*configuration object here*/
	template:__dirname + '/app/index.html',
	filename:'index.html',
	inject: 'body'

});

module.exports = {
	entry: __dirname + '/app/index.js',
	module:{
		loaders:[{
			test:/\.js$/,
			exclude:/node_modules/,
			loader:'babel-loader'
		},  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(
      {
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    )
  }]
	},
	output:{
		filename:'transformed.js',
		path:__dirname + '/build'
	},
	plugins:[HTMLWebpackPluginConfig ,  new ExtractTextPlugin('styles.css'),]
};