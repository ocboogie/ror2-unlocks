<template>
  <div class="home">
    <div class="inner">
      <navbar @searched="searched" />
      <items @openItem="openItem" class="items" :search="searching" />
    </div>
    <transition name="page-darken-fade">
      <div class="page-darken" v-if="expanded" @click="closeItem" />
    </transition>
    <sidebar class="sidebar" :class="{ expanded }" v-bind="openedItem" />
  </div>
</template>

<script>
import Items from "../components/Items.vue";
import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Items,
    Sidebar,
    Navbar
  },
  data: () => ({ openedItem: null, expanded: false, searching: "" }),
  methods: {
    openItem(item) {
      this.openedItem = item;
      this.expanded = true;
    },
    closeItem() {
      this.expanded = false;
    },
    searched(value) {
      this.searching = value;
    }
  }
};
</script>
<style lang="scss" scoped>
.page-darken-fade-enter-active,
.page-darken-fade-leave-active {
  transition: opacity 0.1s;
}
.page-darken-fade-enter,
.page-darken-fade-leave-to {
  opacity: 0;
}

.home {
  .sidebar {
    z-index: 9;
    top: 0;
    right: 0;
    bottom: 0;
    width: $sidebarWidth;
    position: fixed;
    transition: transform 0.25s cubic-bezier(0, 0, 0, 1);

    @include small {
      z-index: 20;
      width: 75%;
      transform: translateX(100%);
    }
    &.expanded {
      transform: translateX(0);
      display: block;
    }
  }
  .page-darken {
    z-index: 15;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;

    background-color: rgba($color: black, $alpha: 0.6);
    @include notSmall {
      display: none;
    }
  }
  .items {
    @include notSmall {
      padding-right: $sidebarWidth;
    }
    margin: auto;
    max-width: 1250px;
  }
}
</style>
