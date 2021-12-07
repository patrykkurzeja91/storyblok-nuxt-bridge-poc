<template>
  <div v-editable="blok">
    <component
      :is="childBlok.component"
      v-for="childBlok in blok.hero"
      :key="childBlok._uid"
      :blok="childBlok"
    />
    <component
      :is="childBlok.component"
      v-for="childBlok in blok.body"
      :key="childBlok._uid"
      :blok="childBlok"
    />
    <BaseButton
      class="button--schedule-demo"
      @click.prevent="onSubmit($event)"
    >
      <span>dsds</span>
    </BaseButton>
  </div>
</template>

<script>

export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>
