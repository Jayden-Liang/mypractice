const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
  entry:'./src/index.js',
  output: {
    path: path.resolve(__dirname, 'project'),
    filename: 'js/bundle.js'
  },
  devServer: {
      contentBase: './project'
  },
  plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html'
      }),
      new HtmlWebpackPlugin({
          filename: 'test.html',
          template: './src/mytest.html'
      })
  ]
}
