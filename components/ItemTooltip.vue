<template>
  <div class="item-tooltip">
    <div class="name">{{ name }}</div>
    <description-renderer :description="description" />
  </div>
</template>
<script>
import DescriptionRenderer from './DescriptionRenderer.vue'

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
}
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
