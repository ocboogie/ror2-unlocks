<template>
  <div class="layout">
    <slot />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
html {
  box-sizing: border-box;
}
body {
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400");
  font-family: roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #242531;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
</style>
