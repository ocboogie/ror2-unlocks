const path = require("path");

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: '@import "~@/variables.scss";'
      }
    }
  },
  // Make icons not inline with base64
  chainWebpack: config => {
    const iconsPath = path.join(__dirname, "src/assets/icons");

    // Create a new rule just for icons, and use file-loader
    config.module
      .rule("icons")
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .include.add(iconsPath)
      .end()
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "img/[name].[hash:8].[ext]"
      });

    // Exclude icons from the origin rule
    config.module
      .rule("images")
      .exclude.add(iconsPath)
      .end();
  }
};
