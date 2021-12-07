<template>
  <BaseButton
    v-editable="blok"
    @click="scrollToFrom('#form-section', blok.offset)"
  >
    {{ blok.text }}
  </BaseButton>
</template>

<script>
import {
  defineComponent,
} from '@nuxtjs/composition-api'

import { scrollTo } from '@/utils/helpers'

export default defineComponent({
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  setup () {
    const scrollToFrom = scrollTo

    return {
      scrollToFrom,
    }
  },
})
</script>
