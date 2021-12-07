<template>
  <component
    :is="blok.tag_type || 'p'"
    v-editable="blok"
    :class="[customMargin]"
    :style="{maxWidth: maxWidth}"
    v-html="blok.text"
  />
</template>

<script>

export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  setup (props) {
    const customMargin = computed(() => {
      return `mb-${props.blok?.custom_margin}` ?? ''
    })
    // const fontStyle = computed(() => {
    //   return props.blok.font_style.font?.value ?? ''
    // })
    // const textColor = computed(() => {
    //   return `text-${props.blok?.color?.color_name}` ?? ''
    // })
    // const narrowText = computed(() => {
    //   return props.blok.narrow ? 'text-narrow' : ''
    // })
    // const position = computed(() => {
    //   return `text--${props.blok.position}` || 'text--left'
    // })
    // const hasPill = computed(() => {
    //   return props.blok.font_style.font?.value.includes('text-subheading') && props.blok.pill_text && props.blok.pill_text !== ''
    // })
    // const pillText = computed(() => {
    //   return hasPill.value && 'text-pill'
    // })
    const maxWidth = computed((props) => {
      if (props.blok?.max_width) { return `${props.blok.max_width}px` }

      return 'none'
    })

    return {
      customMargin,
      // fontStyle,
      // textColor,
      // narrowText,
      // position,
      maxWidth,
      // pillText,
    }
  },
}
</script>

<style lang="scss" scoped>
.text-pill {
  &::after {
    display: inline-flex;
    transform: translateY(-10%);
    content: attr(data-visual-label);
    background-color: $color-navy-800;
    padding: 2px 8px;
    border-radius: 50vh;
    color: $color-white;
    font-size: 11px;
    line-height: 16px;
    margin-left: 8px;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 600;
    width: fit-content;
  }
}

.text-narrow {
  max-width: 660px;
  margin: 0 auto;
}

.text {
  margin-left: 0;
  margin-right: 0;

  &--center {
    text-align: center;
  }

  &--left {
    text-align: left;
  }

  &--right {
    text-align: right;
  }
}
</style>
