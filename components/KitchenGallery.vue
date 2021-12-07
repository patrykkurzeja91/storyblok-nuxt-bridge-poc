<template>
  <div class="grid">
    <aside class="side-nav">
      <div class="side-nav__box">
        <ul>
          <scrollactive class="side-nav__nav">
            <li
              v-for="(item) in blok.blocks"
              :key="item._uid"
            >
              <a
                :href="`#${slugifyItem(item.title)}`"
                class="scrollactive-item side-nav__item"
              >{{ item.title }}</a>
            </li>
          </scrollactive>
        </ul>
      </div>
    </aside>
    <main class="gallery">
      <component
        :is="childBlok.component"
        v-for="childBlok in blok.blocks"
        :key="childBlok._uid"
        :blok="childBlok"
      />
    </main>
  </div>
</template>
<script>
import {
  // computed,
  defineComponent,
} from '@nuxtjs/composition-api'
import { slugify, scrollTo } from '@/utils/helpers'

export default defineComponent({
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  setup () {
    return {
      scrollToItem: (hash, offset) => scrollTo(hash, offset),
      slugifyItem: slug => slugify(slug),
    }
  },
})
</script>
<style lang="scss" scoped>
.grid {
  position: relative;
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 20px;
}

.side-nav {
  position: relative;
  padding-top: 200px;

  &__box {
    position: sticky;
    top: 30px;
    padding: 20px;
    border-radius: 8px;

    /* box-shadow:
      0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3),
      0 -6px 16px -6px rgba(0, 0, 0, 0.03); */
    background: rgba(255, 255, 255, 0.25);

    /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  &__item.is-active {
    font-weight: 700;
  }
}
</style>
