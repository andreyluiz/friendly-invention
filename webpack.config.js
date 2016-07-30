var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: ['./app/index', './node_modules/materialize-css/dist/js/materialize.js'],
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'bundle.js',
    publicPath: 'js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riotjs-loader',
        query: {
          type: 'none'
        }
      }
    ],
    loaders: [
      {
        test: /\.js$|\.tag$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "resolve-url", "sass?sourceMap"]
      }
    ]
  },
  devServer: {
    contentBase: './public',
    inline: true,
    hot: true
  }
};
