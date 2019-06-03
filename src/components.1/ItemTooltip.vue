<template>
  <div class="item-tooltip">
    <div class="name">{{ name }}</div>
    <description-renderer :description="description" />
  </div>
</template>
<script>
import DescriptionRenderer from "./DescriptionRenderer.vue";

export default {
  components: {
    DescriptionRenderer
  },
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.item-tooltip {
  z-index: 10;
  text-align: start;
  line-height: 1;
  width: 250px;
  padding: 0.75rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  color: #bdbdbd;
  background-color: #282939;

  .name {
    font-size: 1.25rem;
    font-weight: lighter;
    margin-bottom: 0.5rem;
  }
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

  &[x-placement^="top"] {
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

  &[x-placement^="bottom"] {
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

  &[x-placement^="right"] {
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

  &[x-placement^="left"] {
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
