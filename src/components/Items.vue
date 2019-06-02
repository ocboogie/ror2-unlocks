<template>
  <div>
    <transition-group name="items" tag="div">
      <item
        class="item"
        v-for="(item, index) in items"
        :key="item.codeName"
        @openItem="openItem"
        @mouseover.native="mouseOver(index)"
        @mouseleave.native="mouseLeave"
        ref="items"
        v-bind="item"
      />
    </transition-group>
    <item-tooltip
      v-show="showTooltip"
      v-if="hovedItem"
      v-bind="hovedItem"
      :target="tooltipTarget"
    />
  </div>
</template>
<script>
import items from "../assets/items.json";
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
