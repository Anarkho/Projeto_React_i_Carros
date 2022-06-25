const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/index.js', // arquivo principal
  output: {
    // saida dos arquivos de build
    path: path.join(__dirname, 'public'), // pasta de saida dos arquivos
    filename: 'main-bundle-[hash].js', // gera dinamicamente arquivo javascript legivel
    publicPath: '/', // interpreta os estão os arquivos publicos
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'], // interpreta arquivos com essas determinadas extensões
    alias: {
      '@': path.join(__dirname, 'src'), // alias para referenciar caminho ./src
    },
  },
  plugins: [
    // plugins que serão usadas no common
    new CleanWebpackPlugin(),
    new Dotenv(),
  ],
}
