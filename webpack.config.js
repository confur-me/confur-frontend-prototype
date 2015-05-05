var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      './app.jsx'
    ]
  },
  output: {
    path: './dest/',
    publicPath: '/dest/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js|\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },

  /**
   * Setup postcss
   */
  postcss: [
    require('autoprefixer-core'),
    require('csswring')
  ],

  /**
   * Add the lib/ to the $NODE_PATH
   */
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: ['node_modules', 'lib']
  }

};
