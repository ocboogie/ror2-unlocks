const itemsJson = require("./src/assets/items.json");

// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addContentType }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
    const items = addContentType("Item");

    for (const [index, item] of itemsJson.entries()) {
      item.index = index;
      items.addNode(item);
    }
    // const contentType = addContentType({
    //   typeName: "MyData"
    // });

    // items.addNode({
    //   title: "Lorem ipsum dolor sit amet.",
    //   customField: "..."
    // });
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });
};
