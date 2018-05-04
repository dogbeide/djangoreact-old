// require our dependencies
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

modules.exports = {
  // the base directory (absolute path) for resolving the entry option
  context: __dirname,
  // the entry point we created earlier. Note that './' means cur dir
  entry: './assets/js/index',

  output: {
    // where compiled bundle will be stored
    path: path.resolve('./assets/bundles/'),
    // naming convention webpack should use for your files
    filename: '[name]-[hash].js',
  },

  plugins: [
    // tells webpack where to store data about your bundles
    new BundleTracker({filename: './webpack-stats.json'}),
    // makes jQuery available in every module
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],

  module: {
    loaders: [
      // a regex telling webpack to use loaders on all .js/.jsx files
      {
        test: /\.jsx?$/,
        // avoid transpiling ENTIRE node_modules (millions of years)
        exclude: /node_modules/,
        // use the babel loader
        loader: 'babel-loader',
        query: {
          // specifies that we're dealing with React
          presets: ['react']
        }
      }
    ]
  },

  resolve: {
    // tells webpack where to look for modules
    modulesDirectories: ['node_modules'],
    // extensions taht should be used o resolve modules
    extensions: ['', '.js', '.jsx']
  }
}
