<template>
  <transition-group name="items" tag="div">
    <item
      class="item"
      v-for="item in items"
      :key="item.codeName"
      @openItem="openItem"
      v-bind="item"
    />
  </transition-group>
</template>
<script>
import items from "../assets/items.json";
import Item from "./Item.vue";

export default {
  components: {
    Item
  },
  computed: {
    items() {
      console.log(this.$static.posts.edges);
      return this.$static.posts.edges
        .map(({ node: item }) => item)
        .filter(
          item =>
            item.name.toLowerCase().includes(this.search.toLowerCase()) ||
            item.description.toLowerCase().includes(this.search.toLowerCase())
        )
        .map(item => ({
          ...item,
          iconName: item.icon,
          // https://github.com/gridsome/gridsome/issues/292
          icon: require(`!!assets-loader?width=96!~/assets/icons/${
            item.icon
          }.jpeg`)
        }));
    }
  },
  props: {
    search: {
      type: String,
      default: ""
    }
  },
  methods: {
    openItem(item) {
      this.$emit("openItem", item);
    }
  }
};
</script>

<static-query>
query Item {
  posts: allItem(sortBy: "index", order: ASC) {
    edges {
      node {
        codeName
        isLunar
        name
        description
        icon
        type
        unlock
      }
    }
  }
}
#Fetc
</static-query>

<style lang="scss" scoped>
.items {
  line-height: 0;
  .item {
    display: inline-block;
    margin: 7px;
  }

  .items-enter-active,
  .items-leave-active,
  .items-move {
    transition: all 0.25s;
    &.items-leave-active {
      position: absolute;
    }
  }
  .items-enter,
  .items-leave-to {
    opacity: 0;
  }
}
</style>
