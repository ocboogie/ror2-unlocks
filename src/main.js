// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { head }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  head.meta.push({
    name: "author",
    content: "ocboogie"
  });
  head.meta.push({
    name: "keywords",
    content:
      "risk of rain 2, ror2, items, stats, descriptions, unlocks, cheat sheet"
  });
  head.meta.push({
    name: "msapplication-TileColor",
    content: "#da532c"
  });
  head.meta.push({
    name: "theme-color",
    content: "#ffffff"
  });
}
