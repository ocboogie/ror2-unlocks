<template>
  <img class="item" width="96" height="96" :src="icon" :alt="name" />
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.item {
  cursor: pointer;
}
</style>
