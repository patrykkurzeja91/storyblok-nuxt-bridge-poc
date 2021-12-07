<template>
  <div
    :id="slugifyItem(blok.title)"
    v-editable="blok"
    class="kitchen"
  >
    <div class="kitchen--sticky">
      <h5>{{ blok.title }}</h5>
      <BaseRichText :rich-text-template="blok.description" />
    </div>
    <div class="kitchen__grid">
      <div
        v-for="image in blok.images"
        :key="image.id"
        class="kitchen__item"
      >
        <img
          :src="image.filename"
          :alt="image.alt"
        >
      </div>
    </div>
  </div>
</template>

<script>
import {
  // computed,
  defineComponent,
} from '@nuxtjs/composition-api'
import { slugify } from '@/utils/helpers'
export default defineComponent({
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  setup () {
    return {
      slugifyItem: slug => slugify(slug),
    }
  },
})
</script>

<style lang="scss" scoped>
.kitchen {
  position: relative;
  margin-bottom: 40px;
  margin-top: 20px;

  &__grid {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 30px;
  }

  &__item {
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 16px;
    box-shadow:
      0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3),
      0 -6px 16px -6px rgba(0, 0, 0, 0.03);

    img {
      object-fit: cover;
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  &--sticky {
    /* background-color: $color-beige; */
    position: sticky;
    top: 0;
    padding: 20px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background: rgba(255, 255, 255, 0.25);

    /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.18);

    @media (min-width: $breakpoint-md) {
      position: relative;
    }
  }
}
</style>
