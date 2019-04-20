<template>
  <div class="sidebar">
    <div class="icon-container" v-if="icon">
      <img v-if="iconLoaded" :src="icon" alt="item icon" class="icon" />
    </div>

    <div class="name" v-if="Boolean(name)">{{ name }}</div>
    <div class="type" v-if="Boolean(tier) || type === 'equipment'">
      {{ displayType }}
    </div>

    <div class="info" v-if="Boolean(unlock)">
      Unlock: <span class="info-body unlock-description">{{ unlock }}</span>
    </div>
    <template v-if="Boolean(description)">
      <div class="description-label">
        Description:
      </div>
      <description-renderer :description="description" />
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
  data: () => ({ iconLoaded: false }),
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

      return require("../assets/icons-hi-res/" + this.iconName + ".png");
    }
  },
  watch: {
    iconName: {
      handler(val, oldVal) {
        if (val === oldVal || !this.icon) {
          return;
        }

        this.iconLoaded = false;
        const icon = new Image();

        icon.onload = () => {
          this.iconLoaded = true;
        };
        icon.src = this.icon;
      },
      immediate: true
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
    font-size: 1.7rem;
    margin-bottom: 1.8rem;
  }

  .description-label,
  .info {
    font-weight: lighter;
    font-size: 1.75rem;
  }

  .info {
    margin-bottom: 1rem;
    .info-body {
      font-weight: normal;
    }
  }

  .unlock-description {
    font-size: 1.5rem;
  }

  .description-label {
    margin-bottom: 0.25rem;
  }
}
</style>
