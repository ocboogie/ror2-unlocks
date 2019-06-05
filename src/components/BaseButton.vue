<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  appearance: none;
  text-align: center;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 4px;

  border: 1.5px solid darken(#9955a2, 10%);
  color: #bdbdbd;
  background: rgba(#9955a2, 0);

  &:hover,
  &:focus {
    background: rgba(#9955a2, 0.1);
  }

  &:active {
    background: rgba(#9955a2, 0.25);
  }
}
</style>
