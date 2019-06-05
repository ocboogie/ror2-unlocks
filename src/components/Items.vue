<template>
  <div>
    <transition-group name="items" tag="div">
      <item
        class="item"
        v-for="(item, index) in items"
        :key="item.codeName"
        tabindex="0"
        v-show="item.show"
        @click.native="openItem(item)"
        @keyup.enter.native="openItem(item)"
        @mouseover.native="mouseOver(index)"
        @mouseleave.native="mouseLeave"
        :name="item.name"
        :icon="item.icon"
        ref="items"
      />
    </transition-group>
    <item-tooltip
      v-show="showTooltip"
      v-if="hovedItem"
      :name="hovedItem.name"
      :description="hovedItem.description"
      :target="tooltipTarget"
    />
  </div>
</template>
<script>
import Item from "./Item.vue";
import ItemTooltip from "./ItemTooltip.vue";

export default {
  components: {
    Item,
    ItemTooltip
  },
  data: () => ({ hovedItem: null, tooltipTarget: null, showTooltip: false }),
  computed: {
    items() {
      return this.$static.posts.edges
        .map(({ node: item }) => item)
        .map(item => ({
          ...item,
          show:
            item.name.toLowerCase().includes(this.search.toLowerCase()) ||
            item.description.toLowerCase().includes(this.search.toLowerCase()),
          iconName: item.icon,
          icon: require(`~/assets/icons/${item.icon}.jpeg`)
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
    },
    mouseOver(index) {
      this.hovedItem = this.items[index];
      this.tooltipTarget = this.$refs.items[index].$el;
      this.showTooltip = true;
    },
    mouseLeave() {
      this.showTooltip = false;
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
        tier
      }
    }
  }
}
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
