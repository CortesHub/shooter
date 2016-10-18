var path = require('path');
var root = path.resolve(__dirname);

//var webpack = require('webpack');


module.exports = {

  // entrée des fichiers
  entry: {
    app: ['./public/js/app.js']
  },

  // sortie du bundle
  output: {
    path: path.resolve(__dirname, '/dist/js'),
    filename: 'bundle.js',
    // if --hot server
    publicPath: '/dist/js/'
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


  // server : webpack-dev-server --hot --inline --progress --colors --content-base ./
  // http://localhost:8080/webpack-dev-server/
  // 26:10


}
