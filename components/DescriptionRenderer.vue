<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="description-renderer" v-html="description" />
</template>
<script>
export default {
  props: {
    description: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.description-renderer::v-deep {
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
}
</style>
