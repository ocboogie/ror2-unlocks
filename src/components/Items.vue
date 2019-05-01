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

const tierNumbers = {
  Tier1: 0,
  Tier2: 1,
  Tier3: 2,
  Boss: 3,
  Lunar: 4
};

export default {
  components: {
    Item
  },
  computed: {
    items() {
      return items
        .filter(
          item =>
            item.name.toLowerCase().includes(this.search.toLowerCase()) ||
            item.description.toLowerCase().includes(this.search.toLowerCase())
        )
        .map(item => ({
          ...item,
          iconName: item.icon,
          icon: require("../assets/icons/" + item.icon + ".jpeg")
        }))
        .sort((a, b) => {
          if (a.type === "equipment" && b.type === "equipment") {
            if (a.isLunar === b.isLunar) {
              return a.index - b.index;
            } else if (a.isLunar || b.isLunar) {
              return b.isLunar - a.isLunar;
            }
          } else if (a.type === "equipment") {
            return 1;
          }

          let aTier = tierNumbers[a.tier];
          let bTier = tierNumbers[b.tier];
          if (aTier === bTier) {
            return a.index - b.index;
          }
          return aTier - bTier;
        });
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
<style lang="scss" scoped>
.items {
  line-height: 0;
  .item {
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
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
