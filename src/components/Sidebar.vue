<template>
  <div class="sidebar">
    <div class="icon-container" v-if="this.icon">
      <img
        v-show="iconLoaded"
        :src="icon"
        alt="item icon"
        class="icon"
        @load="iconLoaded = true"
      />
    </div>

    <template v-if="item">
      <div class="name">{{ item.name }}</div>
      <div class="type">
        {{ displayType }}
      </div>

      <template v-if="item.unlock">
        <div class="label">
          Unlock
        </div>
        <span class="info-body">{{ item.unlock }}</span>
      </template>

      <template>
        <div class="label">
          Description
        </div>
        <description-renderer
          class="info-body"
          :description="item.description"
        />
      </template>

      <base-button
        class="close-button"
        @click.native="$emit('closeItem')"
        @keyup.enter.native="$emit('closeItem')"
      >
        Close
      </base-button>
    </template>
    <template v-else>
      <h2 class="header">What is Risk of Rain 2?</h2>
      <div class="game-description">
        Risk of Rain 2 is an upcoming third-person shooter roguelike video game
        being developed by Hopoo Games. It is a sequel to Risk of Rain, and is
        being supported by Gearbox Publishing. The game was released in an early
        access version in March 2019, with Hopoo Games anticipating about a year
        of work before they push a final release.
      </div>
      <g-image class="game-banner" src="../assets/ROR2Banner.jpg" />
    </template>
  </div>
</template>
<script>
import tierDisplay from "../assets/tierDisplay.json";
import DescriptionRenderer from "./DescriptionRenderer.vue";
import BaseButton from "./BaseButton.vue";

export default {
  components: {
    DescriptionRenderer,
    BaseButton
  },
  data: () => ({ iconLoaded: false }),
  computed: {
    displayType() {
      if (!this.item) {
        return null;
      }
      if (this.item.type === "equipment") {
        if (this.item.isLunar) {
          return `${tierDisplay["Lunar"]} Equipment`;
        }
        return "Equipment";
      }
      return `${tierDisplay[this.item.tier]} Item`;
    },
    icon() {
      if (!this.item) {
        return null;
      }
      if (!this.item.iconName) {
        return;
      }
      return require(`~/assets/icons-hi-res/${this.item.iconName}.png`);
    }
  },
  watch: {
    item: {
      handler(item, oldItem) {
        if (!item || item === oldItem || !item.icon) {
          return;
        }

        this.iconLoaded = false;
      },
      immediate: true
    }
  },
  props: {
    item: {
      type: Object,
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

  .header {
    font-weight: lighter;
  }

  .game-description {
    text-align: left;
  }

  .game-banner {
    margin-top: 1rem;
    width: 100%;
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

  .close-button {
    margin-top: 2rem;
  }
}
</style>
