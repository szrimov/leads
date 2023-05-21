import {resolve} from 'path'

export default {
  ssr: false,
  // ssr: true,

  /*
   ** Headers of the page
   */
  head: {
    title: '',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#fff'},

  /*
   ** Resources for components
   */
  styleResources: {
    scss: ['@/assets/scss/variables/_index.scss', '@/assets/scss/_mixins.scss']
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/scss/index.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/modal',
    '@/plugins/v-click-outside',
    {src: '@/plugins/simple-svg.js', ssr: false}
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // 'nuxt-lazy-load',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios'
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.NUXT_ENV_API_URL,
    headers: {
      'Cache-Control': 'no-cache',
      Locale: 'ru',
      Account: process.env.NUXT_ENV_API_ACCOUNT
    }
  },

  router: {},

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: ['defu']
  },
  alias: {
    '@components': resolve(__dirname, './components')
  }
}
