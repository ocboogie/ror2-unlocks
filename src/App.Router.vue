<template>
  <div id="app">
    <router-view />
    <background id="background" />
  </div>
</template>
<script>
import Background from "./components/Background.vue";

export default {
  components: {
    Background
  }
};
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

#background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -100;
}
#app {
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400");

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
