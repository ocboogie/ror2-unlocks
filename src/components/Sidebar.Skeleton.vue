<template>
  <div class="sidebar">
    <div class="icon-container">
      <img :src="icon" alt="item icon" class="icon" v-if="icon" />
    </div>

    <div class="name" :class="{ skeleton: !Boolean(name) }">{{ name }}</div>

    <div
      class="type"
      :class="{ skeleton: !Boolean(tier) && type !== 'equipment' }"
    >
      <template v-if="Boolean(tier) || type === 'equipment'">
        Type: <span class="type-name">{{ displayType }}</span>
      </template>
    </div>

    <div class="description-label" :class="{ skeleton: !Boolean(description) }">
      <template v-if="Boolean(description)">
        Description:
      </template>
    </div>
    <div
      class="description"
      :class="{ skeleton: !Boolean(description) }"
      v-html="description"
    />
  </div>
</template>
<script>
import tierDisplay from "../assets/tierDisplay.json";

export default {
  computed: {
    displayType() {
      if (this.type === "equipment") {
        if (this.isLunar) {
          return `${tierDisplay["Lunar"]} Equipment`;
        }
        return "Equipment";
      }
      return `${tierDisplay[this.tier]} Item`;
    }
  },
  created() {
    console.log(this.type);
  },
  props: {
    icon: {
      type: String,
      default: null
    },
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
    }
  }
};
</script>
<style lang="scss" scoped>
.skeleton {
  background-color: #242530;
}
.sidebar {
  text-align: center;
  background-color: #282939;
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
    margin-bottom: 1.8rem;
  }

  .description-label,
  .type {
    font-weight: lighter;
    font-size: 1.75rem;
  }

  .description-label {
    margin-bottom: 0.25rem;
  }

  .type {
    margin-bottom: 1rem;
    .type-name {
      font-weight: normal;
    }
  }

  .skeleton {
    // Useing to center with changing the margin
    display: inline-block;
    &.name {
      height: 38px;
      width: 100%;
    }
    &.description-label {
      height: 34px;
      width: 70%;
    }
    &.description.skeleton {
      height: 2.5rem;
      width: 90%;
      height: 50px;
    }
    &.type {
      height: 2.5rem;
      width: 60%;
      height: 38px;
    }
  }
}
</style>
