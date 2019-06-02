<template>
  <img
    class="item"
    width="96"
    height="96"
    :src="icon"
    :alt="name"
    tabindex="0"
    @click="openItem"
    @keyup.enter="openItem"
  />
</template>
<script>
export default {
  props: {
    codeName: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    tier: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    isLunar: {
      type: Boolean,
      default: null
    },
    unlock: {
      type: String,
      default: null
    },
    iconName: {
      type: String,
      required: true
    }
  },
  methods: {
    openItem() {
      this.$emit("openItem", {
        codeName: this.codeName,
        name: this.name,
        tier: this.tier,
        icon: this.icon,
        iconName: this.iconName,
        description: this.description,
        type: this.type,
        isLunar: this.isLunar,
        unlock: this.unlock
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.item {
  cursor: pointer;
}
</style>
