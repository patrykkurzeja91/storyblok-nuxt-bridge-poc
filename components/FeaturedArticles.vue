<template>
  <div v-editable="blok">
    <h2 class="pt-2 pl-6 text-lg text-gray-700 italic">
      {{ blok.title }}
    </h2>
    <ul class="flex py-6 mb-6">
      <li
        v-for="article in sortedArticles"
        :key="article._uid"
        class="flex-auto px-6"
        style="min-width: 33%;"
      >
        <ArticleTeaser
          v-if="article.content"
          :article-link="article.full_slug"
          :article-content="article.content"
        />
        <p
          v-else
          class="px-4 py-2 text-white bg-red-700 text-center rounded"
        >
          This content loads on save. <strong>Save the entry & reload.</strong>
        </p>
      </li>
    </ul>
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
  setup (props) {
    const { $store } = useNuxtApp()

    const sortedArticles = computed(() => {
      const featuredArticles = $store.state.articles.articles.filter((article) => {
        return props.blok.articles.includes(article.uuid)
      })

      // Enable the ordering of the article previews
      featuredArticles.sort((a, b) => {
        return props.blok.articles.indexOf(a.uuid) - props.blok.articles.indexOf(b.uuid)
      })

      return featuredArticles
    })
    return {
      sortedArticles,
    }
  },
}
</script>
