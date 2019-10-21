const config = require('./config');
const path = require('path');

module.exports = {
  lintOnSave: true,
  devServer: {
    // 开发服务器配置
    historyApiFallback: false,
    noInfo: false,
    host: config.dev.host,
    port: config.dev.port,
    open: true,
    contentBase: './',
    proxy: config.dev.env.proxyTable,
    hot: true,
    inline: true,
    overlay: {
      // 这里配置 html 页面是否显示 eslint 错误信息蒙版
      errors: true,
      warnings: true
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve('src'),
        vue$: 'vue/dist/vue.common.js',
        views: path.resolve(__dirname, 'src/views')
      }
    }
  }
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         chunks: 'initial',
  //         name: 'commons',
  //         minChunks: 2,
  //         maxInitialRequests: 5,
  //         minSize: 0
  //       },
  //       vendor: {
  //         // 抽离第三插件
  //         test: /node_modules/,
  //         chunks: 'initial',
  //         name: 'vendor',
  //         priority: 10
  //       }
  //     }
  //   }
  // }
};
