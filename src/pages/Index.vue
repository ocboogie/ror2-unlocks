<template>
  <Layout>
    <navbar @searched="searched" />
    <items class="items" :search="searching" @openItem="openItem" />

    <transition name="page-darken-fade">
      <div v-if="expanded" class="page-darken" @click="closeItem" />
    </transition>

    <sidebar class="sidebar" :class="{ expanded }" v-bind="openedItem" />

    <ClientOnly>
      <background id="background" />
    </ClientOnly>
  </Layout>
</template>

<script>
import debounce from "debounce";
import Items from "@/components/Items.vue";
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import Background from "@/components/Background.vue";

export default {
  components: {
    Items,
    Sidebar,
    Navbar,
    Background
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
    searched: debounce(function(value) {
      this.searching = value;
    }, 200)
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

.sidebar {
  z-index: 9;
  top: 0;
  right: 0;
  bottom: 0;
  width: $sidebarWidth;
  position: fixed;
  overflow-y: auto;
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
  margin: auto;
  text-align: center;
  max-width: 1250px;
  @include notSmall {
    padding-right: $sidebarWidth;
  }
}

#background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -100;
}
</style>

