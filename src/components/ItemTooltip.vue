<template>
  <div class="tooltip">
    <div class="name">{{ name }}</div>
    <div class="description" v-html="description" />
  </div>
</template>
<script>
import Popper from "popper.js";

// TODO: Improve performance by lazy destroying

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    target: {
      type: HTMLElement,
      required: true
    }
  },
  mounted() {
    this.popper = new Popper(this.target, this.$el);
  },
  updated() {
    this.popper.reference = this.target;
    this.popper.update();
  },
  beforeDestroy() {
    this.dispose();
  },
  methods: {
    dispose() {
      if (this.popper) {
        this.popper.destroy();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.tooltip {
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
