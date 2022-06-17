// const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  // unindo configurações
  mode: 'development',
  module: {
    // modulos de dev
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader', // carregador que interpreta os arquivos com as extensões definidas em test
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'inline-source-map', // conectar arquivos finais
  devServer: {
    devMiddleware: {
      writeToDisk: true, // possibilita escrever arquivos no modo dev
    },
    static: {
      directory: './public', // diretorio de publicação
    },
    historyApiFallback: true, // observar rotas dinamicas
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.dev.html', // template html que sera usada para desenvolvimento
    }),
  ],
})
