const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
  entry: {
    main: path.resolve(__dirname,'./src/pages/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.js",
    publicPath: ""
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 8080,
    open: true,
  },


  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname,'./src/index.html')
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin()],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        }, 'postcss-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
    ]
  }
}