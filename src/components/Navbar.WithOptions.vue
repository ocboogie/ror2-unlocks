<template>
  <div class="navbar-container" :class="{ expanded }">
    <div class="navbar">
      <div class="navbar-inner">
        <!-- TODO: Move search to it's own component -->
        <input
          class="search"
          placeholder="Search"
          @input="$emit('searched', $event.target.value)"
        />
        <div class="options">
          <div>
            <input class="checkbox" type="checkbox" id="common" />
            <label for="common">Common (White)</label>
          </div>

          <div>
            <input class="checkbox" type="checkbox" id="uncommon" />
            <label for="uncommon">Uncommon (Green)</label>
          </div>

          <div>
            <input class="checkbox" type="checkbox" id="legendary" />
            <label for="legendary">Legendary (Red)</label>
          </div>

          <div>
            <input class="checkbox" type="checkbox" id="boss" />
            <label for="boss">Boss (Yellow)</label>
          </div>

          <div>
            <input class="checkbox" type="checkbox" id="lunar" />
            <label for="lunar">Lunar (Blue)</label>
          </div>

          <div>
            <input class="checkbox" type="checkbox" id="active" />
            <label for="active">Active (Orange)</label>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="toggle-options" @click="expanded = !expanded">
      <svg
        class="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35.371 13.721"
      >
        <path
          d="M853.574,110.567h35.371L871.26,124.288Z"
          transform="translate(-853.574 -110.567)"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  data: () => ({ expanded: false })
};
</script>

<style lang="scss" scoped>
.navbar-container {
  @media (min-width: 970px) {
    padding-right: $sidebarWidth;
  }

  .toggle-options {
    background-color: transparent;
    border: none;
    fill: #745080;
    cursor: pointer;

    margin-top: 0.75rem;
    margin-bottom: 1rem;

    .icon {
      width: 40px;
      height: 20px;
    }
  }

  .navbar {
    padding-top: 1.5rem;

    background-color: rgb(55, 56, 72, 0.25);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    overflow: hidden;

    .navbar-inner {
      max-width: 350px;
      margin: auto;
    }

    .search {
      width: 100%;
      // min-width: 350px;
      padding: 1rem 1rem;
      font-size: 20px;

      background-color: #242530;
      color: #bdbdbd;

      border: none;
      border-radius: 6px;
      &:focus {
        outline-color: #31345e;
      }

      margin-bottom: 1.1rem;
    }

    .options {
      display: none;
      flex-wrap: wrap;
      flex-direction: column;
      align-content: space-between;

      text-align: left;
      height: 70px;
      margin-bottom: 1rem;

      color: #bdbdbd;
      font-weight: lighter;

      & > * {
        flex-basis: 100% / 2;
      }

      .checkbox {
        background-color: #242530;
      }
    }
  }

  &.expanded {
    .toggle-options {
      transform: scaleY(-1);
    }

    .options {
      display: flex;
    }
  }
}
</style>
