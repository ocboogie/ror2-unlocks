<template>
  <div class="navbar">
    <div class="navbar-inner">
      <!-- TODO: Move search to it's own component -->
      <input
        class="search"
        placeholder="Search"
        @input="$emit('searched', $event.target.value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  @include notSmall {
    padding-right: $sidebarWidth;
  }

  width: 100%;
  padding: 1rem 0rem;
  background-color: rgb(43, 44, 57, 0.85);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  .navbar-inner {
    max-width: 350px;
    margin: auto;
  }

  .search {
    width: 100%;
    height: 3rem;
    padding: 1rem 1rem;
    font-size: 1.2rem;

    background-color: #242530;
    color: #bdbdbd;

    border: none;
    border-radius: 6px;
    &:focus {
      outline-color: #31345e;
    }
  }
}
</style>
