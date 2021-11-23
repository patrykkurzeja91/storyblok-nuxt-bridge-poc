module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'vue/no-v-html': 0,
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
  },
}

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true,
//   },
//   parserOptions: {
//     parser: 'babel-eslint',
//   },
//   extends: [
//     'plugin:vue/recommended',
//     '@nuxtjs',
//     'plugin:nuxt/recommended',
//   ],
//   // add your custom rules here
//   rules: {
//     'comma-dangle': [2, 'always-multiline'],
//     'vue/no-v-html': 0,
//     'vue/max-attributes-per-line': [
//       'error',
//       {
//         singleline: 1,
//         multiline: {
//           max: 1,
//           allowFirstLine: false,
//         },
//       },
//     ],
//   },
// }
