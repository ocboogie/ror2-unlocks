<template>
  <div
    class="item"
    tabindex="0"
    @focus="openTooltip"
    @mouseover="openTooltip"
    @mouseout="closeTooltip"
    @click="openItem"
    @keyup.enter="openItem"
  >
    <img class="icon" width="96" height="96" :src="icon" :alt="name" />
  </div>
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
    openTooltip() {
      this.$emit("openTooltip", {
        name: this.name,
        description: this.description,
        target: this.$el
      });
    },
    closeTooltip() {
      this.$emit("closeTooltip");
    },
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
  background-size: cover;
}
</style>
<style lang="scss">
.cStack {
  font-size: 0.8rem;
  color: rgba(#bdbdbd, 0.8);
}
.cIsUtility {
  color: #95cde5;
}
.cIsDamage {
  color: #e5c962;
}
.cIsHealing {
  color: #9ce562;
}
</style>
