const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8080",
  outputDir: "../static/dist",
  indexPath: "../../templates/index.html",

  configureWebpack: {
    devServer: {
      devMiddleware: {
        writeToDisk: true,
      },
    },
  },
});
