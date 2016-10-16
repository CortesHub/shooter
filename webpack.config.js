var path = require('path');
var root = path.resolve(__dirname);

var webpack = require('webpack');


module.exports = {


  // entrée des fichiers
  entry: {
    app: ['./public/js/app.js']
  },

  // sortie du bundle
  output: {
    path: path.resolve(__dirname, './public/dist/js'),
    filename: 'app.bundle.js',
    // if --hot server
    publicPath: '/js/'
  },


  // loader
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        include: root
      }
    ]
  },


  // plugin (livereload, prefix...)
  plugins: [
//		new webpack.optimize.UglifyJsPlugin({
//			comments: false
//		})
  ]


  // server ($ webpack-dev-server --hot --inline --content-base ./public)
  // 26:10


}
