const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./assets/js/index",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./templates/index.html",
      filename: "./index.html"
    })
  ]
};
