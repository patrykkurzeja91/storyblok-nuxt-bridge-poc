<template>
  <!-- <VRuntimeTemplate
    class="richtext"
    :template="richtext"
  /> -->
  <div
    class="richtext"
    v-html="richtext"
  />
</template>

<script>
import {
  defineComponent,
  computed,
  useContext,
} from '@nuxtjs/composition-api'
// import VRuntimeTemplate from 'v-runtime-template'

export default defineComponent({
  // components: {
  //   VRuntimeTemplate,
  // },
  props: {
    richTextTemplate: {
      type: Object,
      required: true,
    },
  },
  setup (props) {
    const context = useContext()

    const richtext = computed(() => {
      return props.richTextTemplate ? '<div>' + context.app.$storyapi.richTextResolver.render(props.richTextTemplate) + '</div>' : ''
    })
    return {
      richtext,
    }
  },
})
</script>
