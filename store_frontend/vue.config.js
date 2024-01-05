const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === 'production'
  // ? 'https://maniva-store-front.fly.dev'
  // : 'http://localhost:8080',
  outputDir: "./dist",
  // indexPath: "../../templates/index.html",

  // configureWebpack: {
  //   devServer: {
  //     devMiddleware: {
  //       writeToDisk: true,
  //     },
  //   },
  // },
});
