const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            presets: [[
              '@babel/preset-env', {
                targets: {
                  esmodules: true
                }
              }],
              '@babel/preset-react']
          }
        }
      },
      {
        test: [/\.s[c]ss$/i, /\.css$/i],
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js', 'jsx'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
  },
};