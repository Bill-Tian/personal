/*
 * @Author: Mr.Tian
 * @Date: 2021-11-04 14:19:49
 * @LastEditTime: 2022-01-11 14:42:46
 * @LastEditors: Mr.Tian
 * @Description: 
 */

module.exports = {

  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        wrapper: 'article',
        wrapperName: '123',
        raw: true,
        preventExtract: true,
        use: [
          [require('markdown-it-container'), 'tip'],
          [require('markdown-it-container'), 'warning'],
          [require('markdown-it-container'), 'danger'],
          [require('markdown-it-container'), 'details'],
        ],
      })
  },

  // 选项...
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',

  devServer: {
    host: "0.0.0.0",
    port: 3200, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理

    // 配置多个代理
    proxy: {
      "/api": {
        target: "http://10.0.7.108:3000/api", // 要访问的接口域名
        ws: true, // 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/api": "" //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
        }
      }
    }
  }

}
