<template>
  <div class="items">
    <item
      class="item"
      v-for="item in items"
      :key="item.codeName"
      @openTooltip="openTooltip"
      @closeTooltip="closeTooltip"
      @openItem="openItem"
      v-bind="item"
    />
    <item-tooltip v-if="tooltip" v-bind="tooltip" />
  </div>
</template>
<script>
import items from "../assets/items.json";
import Item from "./Item.vue";
import ItemTooltip from "./ItemTooltip.vue";

const tierNumbers = {
  Tier1: 0,
  Tier2: 1,
  Tier3: 2,
  Boss: 3,
  Lunar: 4
};

export default {
  components: {
    Item,
    ItemTooltip
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
          icon: require("../assets/icons/" + item.icon)
        }))
        .sort((a, b) => {
          let aTier = tierNumbers[a.tier];
          let bTier = tierNumbers[b.tier];

          if (a.type === "equipment" && b.type === "equipment") {
            if (!b.isLunar && a.isLunar) {
              return -1;
            }

            return a.index - b.index;
          } else if (a.type === "equipment") {
            return 1;
          }

          if (aTier === bTier) {
            return a.index - b.index;
          }
          return aTier - bTier;
        });
    }
  },
  data: () => ({
    tooltip: null
  }),
  props: {
    search: {
      type: String,
      default: ""
    }
  },
  watch: {
    search() {
      this.closeTooltip();
    }
  },
  methods: {
    openTooltip(tooltip) {
      this.tooltip = tooltip;
    },
    closeTooltip() {
      this.tooltip = null;
    },
    openItem(item) {
      console.log(item);
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
}
</style>
