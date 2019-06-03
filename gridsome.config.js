const path = require("path");

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/variables.scss")]
    });
}

module.exports = {
  siteName: "Risk of Rain 2 Unlocks",
  siteDescription:
    "Risk of Rain 2 cheat sheet with items unlocks, stats, descriptions and more.",
  titleTemplate: "%s",
  plugins: [],
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });

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
