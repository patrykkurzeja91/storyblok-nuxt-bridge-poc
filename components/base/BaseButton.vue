<template>
  <button
    class="button button--large"
    type="submit"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot name="loader" />
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: inline-block;
  max-width: 100%;
  padding: 12px 32px;
  overflow: hidden;
  font-size: $font-size-p-small;
  font-weight: $font-weight-semibold;
  line-height: $line-height-p;
  color: $color-white;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: $color-primary;
  border-radius: 30px;
  transition: all 0.25s;

  &:focus {
    background-color: $color-primary;

    @include shadow-outline;
  }

  &:hover {
    text-decoration: none;
    background-color: $color-orange-2;
  }
}

.button--large {
  padding: 18px 32px;
}
</style>
