import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  bridge: {
    // vite: true,
  },
  head: {
    title: 'nuxt-bridge-test',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Lora:ital,wght@0,400;0,600;0,700;1,400&display=swap', rel: 'stylesheet' },
    ],
  },
  target: 'static',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/index.scss'],
  styleResources: {
    scss: [
      '@/assets/styles/_mixins.scss',
      '@/assets/styles/_constants.scss',
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-scrollactive.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.SB_TOKEN,
        cacheProvider: 'memory',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient }) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    },
  },
},
)
