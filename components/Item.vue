<template>
  <div>
    <no-ssr>
      <v-popover trigger="hover">
        <div
          class="item"
          tabindex="0"
          @click="openItem"
          @keyup.enter="openItem"
        >
          <img class="icon" width="96" height="96" :src="icon" :alt="name" />
        </div>

        <item-tooltip slot="popover" :name="name" :description="description" />
      </v-popover>

      <div slot="placeholder" class="item" tabindex="0">
        <img class="icon" width="96" height="96" :src="icon" :alt="name" />
      </div>
    </no-ssr>
  </div>
</template>
<script>
import { VPopover } from 'v-tooltip'
import ItemTooltip from './ItemTooltip.vue'

export default {
  components: {
    ItemTooltip,
    VPopover
  },
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
      this.$emit('openItem', {
        codeName: this.codeName,
        name: this.name,
        tier: this.tier,
        icon: this.icon,
        iconName: this.iconName,
        description: this.description,
        type: this.type,
        isLunar: this.isLunar,
        unlock: this.unlock
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  background-size: cover;
  cursor: pointer;
}
</style>
<style lang="scss">
.tooltip {
  pointer-events: none;
  display: block !important;

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: #bdbdbd;
    z-index: 1;
  }

  &[x-placement^='top'] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^='bottom'] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^='right'] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^='left'] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }
}
</style>
