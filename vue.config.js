const config = require('./config');

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
  }
};
