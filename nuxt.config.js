// import webpack from 'webpack'
require('dotenv').config()
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  dev: (process.env.NODE_ENV !== 'production'),
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Env variables
  */
  env: {
    wpApi: process.env.WP_API || 'http://buroponzo.test/wp-json/wp/v2',
    bpApi: process.env.BP_API || 'http://buroponzo.test/wp-json/bp/v1',
    sitePath: process.env.SITEPATH || 'http://buroponzo.test'
  },
  /*
  ** Global CSS
  */
 css: [
   '@/assets/scss/main.scss',  '@/ponzubuild/src/ponzu.scss'
 ],
 styleResources: {
   scss: [
     './assets/scss/variables.scss',
     './assets/scss/global.scss',
     'ponzubuild/src/mixins/mediaqueries.scss',
     'ponzubuild/src/mixins/helpers.scss'
   ]
 },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
 plugins: [
  // lazyload images
  { src: '~/plugins/vue-lazysizes', ssr: false },
  // google analytics
  { src: '~/plugins/ga.js', mode: 'client' },
  { src: '~/plugins/vue-siema.js', ssr: false }
],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
 modules: [
  '@nuxtjs/axios',
  'nuxt-i18n',
  '@nuxtjs/style-resources',
   'nuxt-leaflet',
  ],
  i18n: {
    defaultLocale: 'nl',
    locales: [
      {
        code: 'nl',
        name: 'Dutch',
        slug: 'dutch',
        file: 'en/translations.json',
        iso: 'nl-NL'
      },
      {
        code: 'en',
        name: 'English',
        slug: 'united-states',
        file: 'en/translations.json',
        iso: 'en-US'
      }

    ],
    lazy: true,
    langDir: 'locales/',
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    //analyze:true,
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
    indicator:true,
    cssSourceMap: true,
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        rfs: { baseValue: 14 },
        autoprefixer: {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    },
  }
}
