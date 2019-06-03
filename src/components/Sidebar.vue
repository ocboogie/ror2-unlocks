<template>
  <div class="sidebar">
    <div class="icon-container" v-if="icon">
      <img :src="icon" alt="item icon" class="icon" />
    </div>

    <div class="name" v-if="name">{{ name }}</div>
    <div class="type" v-if="tier || type === 'equipment'">
      {{ displayType }}
    </div>

    <template v-if="unlock">
      <div class="label">
        Unlock
      </div>
      <span class="info-body">{{ unlock }}</span>
    </template>

    <template v-if="description">
      <div class="label">
        Description
      </div>
      <description-renderer class="info-body" :description="description" />
    </template>
  </div>
</template>
<script>
import tierDisplay from "../assets/tierDisplay.json";
import DescriptionRenderer from "./DescriptionRenderer.vue";

export default {
  components: {
    DescriptionRenderer
  },
  computed: {
    displayType() {
      if (this.type === "equipment") {
        if (this.isLunar) {
          return `${tierDisplay["Lunar"]} Equipment`;
        }
        return "Equipment";
      }
      return `${tierDisplay[this.tier]} Item`;
    },
    icon() {
      if (!this.iconName) {
        return;
      }
      return require(`~/assets/icons-hi-res/${this.iconName}.png`);
    }
  },
  props: {
    name: {
      type: String,
      default: null
    },
    tier: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    isLunar: {
      type: Boolean,
      default: false
    },
    unlock: {
      type: String,
      default: null
    },
    iconName: {
      type: String,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped>
.sidebar {
  text-align: center;
  background-color: rgba(#282939, 0.8);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  height: 100%;
  padding: 1rem;
  color: #bdbdbd;

  .icon-container {
    width: 200px;
    height: 200px;
    margin: auto;
    margin-bottom: 1rem;
    background-color: #242530;
    border-radius: 12px;
    overflow: hidden;
    .icon {
      width: 100%;
      height: 100%;
    }
  }

  .name {
    font-size: 2rem;
    font-weight: lighter;
    margin-bottom: 0.25rem;
  }

  .type {
    font-weight: bold;
    opacity: 0.65;
    font-size: 1.25rem;
  }

  .label {
    font-weight: 100;
    opacity: 0.5;
    margin-top: 1rem;
    margin-bottom: 0.35rem;
  }
  .info-body {
    font-size: 1.1rem;
  }
}
</style>
