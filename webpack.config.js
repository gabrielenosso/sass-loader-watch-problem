'use strict';

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  debug: true,
  devtool: '#inline-source-map',
  context: path.join(__dirname, 'showcase'),
  entry: {
    app: ['webpack/hot/dev-server', './main.js']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap!autoprefixer-loader!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
        )
      }
    ]
  },
  plugins: [
        // extract inline css into separate 'styles.css'
    new ExtractTextPlugin('styles.css')
  ]
};
