<template>
  <component
    :is="comp"
    :[attributeName]="addressUrl"
    :target="target"
    :disabled="disabled"
  >
    <slot>link</slot>
  </component>
</template>

<script>
export default {
  props: {
    address: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
    },
    target: {
      type: String,
      default: '',
    },
  },
  setup (props) {
    const addressUrl = computed(() => {
      if (props.address?.linktype === 'story') {
        return props.address.cached_url.charAt(0) === '/'
          ? props.address?.cached_url
          : `/${props.address?.cached_url}`
      }
      return props.address?.cached_url
    })
    const comp = computed(() => {
      return props.address?.linktype === 'story' ? 'nuxt-link' : 'a'
    })
    const attributeName = computed(() => {
      return props.address.linktype === 'story' ? 'to' : 'href'
    })

    return {
      comp,
      attributeName,
      addressUrl,
    }
  },
}
</script>
