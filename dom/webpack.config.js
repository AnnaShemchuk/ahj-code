const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      }
    ]
  },
  devServer: {
  static: {
    directory: path.join(__dirname, 'public'),
  },
},
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    
    new CopyPlugin({
      patterns: [
        { 
          from: 'public/images', 
          to: 'images' 
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@images': path.resolve(__dirname, 'src/images'),
      '@styles': path.resolve(__dirname, 'src/css')
    }
  }
};