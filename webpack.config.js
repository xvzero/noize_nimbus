const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./frontend/noize_nimbus.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      WaveSurfer: 'wavesurfer.js'
    })
  ],
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"],
    // Alias `wavesurfer` to the correct wavesurfer package.
    // (wavesurfer.js has some non-standard naming convention)
    alias: {
      wavesurfer: require.resolve('wavesurfer.js')
    }
  }
};
