<template>
  <div
    v-editable="blok"
    :style="{maxWidth}"
  >
    <!-- <div
      class="richtext"
      :class="[customMargin, textColor, narrowText, textAlignment]"
    > -->
    <div
      class="richtext"
      :class="[customMargin]"
      v-html="richtext"
    />
    <!-- <div
      class="richtext"
      :class="[customMargin]"
    >
      <VRuntimeTemplate :template="richtext" />
      <VRuntimeTemplate :v-html="richtext" />
      <div
        class="richtext"

        :class="[customMargin]"
        v-html="richtext"
      />
    </div> -->
  </div>
</template>

<script>
import VRuntimeTemplate from 'v-runtime-template'
import {
  computed,
  defineComponent,
  onBeforeMount,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  components: {
    VRuntimeTemplate,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  setup (props) {
    const context = useContext()

    const richtext = computed(() => {
      return props.blok.richtext ? '<div>' + context.app.$storyapi.richTextResolver.render(props.blok.richtext) + '</div>' : ''
    })
    const customMargin = computed(() => {
      return `mb-${props.blok?.custom_margin}` ?? ''
    })
    const maxWidth = computed((props) => {
      if (props.blok?.max_width) { return `${props.blok.max_width}px` }

      return 'none'
    })
    // const textColor = computed(() => {
    //   return `text-${props.blok?.color?.color_name}` ?? ''
    // })
    // const narrowText = computed(() => {
    //   return props.blok.narrow ? 'text-narrow' : ''
    // })
    // const textAlignment = computed(() => {
    //   return props.blok.text_align ? `text-align--${props.blok.text_align}` : ''
    // })

    onBeforeMount(() => {
      context.app.$storyapi.setComponentResolver((component, blok) => {
        return `<component :blok='${JSON.stringify(blok)}'
                         :is="'${component}'"></component>`
      })
    })
    return {
      // textAlignment,
      richtext,
      customMargin,
      maxWidth,
      // textColor,
      // narrowText,
    }
  },
})
</script>

<style lang="scss" scoped>
.text-narrow {
  max-width: 660px;
  margin: 0 auto;
}

.text-align {
  &--left {
    text-align: left;
  }

  &--center {
    text-align: center;
  }

  &--right {
    text-align: right;
  }
}

</style>
