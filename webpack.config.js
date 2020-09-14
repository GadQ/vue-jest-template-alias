const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');
const { resolve } = path

module.exports = {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      '@components': resolve(__dirname, 'src/App/components')
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  devServer: {
    compress: true,
    port: 9000
  }
}
