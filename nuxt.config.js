export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bird-finder',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/ebirdAPI.js',
    '~/plugins/flickrAPI.js'
  ],

  // define runtime config vars for ebird and flickr API axios instances
  // TODO: check if this is a security risk
  publicRuntimeConfig: {
    EBIRD_API_URL: process.env.EBIRD_API_URL,
    EBIRD_API_KEY_NAME: process.env.EBIRD_API_KEY_NAME,
    EBIRD_API_KEY: process.env.EBIRD_API_KEY,
    FLICKR_API_URL: process.env.FLICKR_API_URL,
    FLICKR_API_KEY_NAME: process.env.FLICKR_API_KEY_NAME,
    FLICKR_API_KEY: process.env.FLICKR_API_KEY
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseUrl: process.env.API_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
