var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: './dist/bundle.js'
  },
  resolve: {
    root: path.resolve(__dirname),
    alias:{
      utils: path.resolve( __dirname, 'src', 'utils' )
    },
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
