// import webpack from 'webpack'
require("dotenv").config();
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  dev: process.env.NODE_ENV !== "production",
  head: {
    title: "Buro Ponzo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "Dutch Digital Agency",
        name: "Dutch Digital Agency",
        content:
          "Rebranding, Interaction design, UI design, Web ontwerp, Vuejs Developper rotterdam "
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Env variables
   */
  //http://cms.buroponzo.test http://cms.buroponzo.test
  env: {
    wpApi: process.env.WP_API,
    bpApi: process.env.BP_API,
    sitePath: process.env.SITEPATH
  },

  modern: "client",
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/main.scss"],
  styleResources: {
    scss: [
      "./assets/scss/variables.scss",
      "./assets/scss/global.scss",
      "./assets/scss/ponzu/mixins/mediaqueries.scss",
      "./assets/scss/ponzu/mixins/helpers.scss"
    ]
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // lazyload images
    // { src: "~/plugins/vue-lazysizes", ssr: false },
    // google analytics
    { src: "~/plugins/vue-siema.js", mode: "client" },
    { src: "~/plugins/typy.js" },
    { src: "~/plugins/ponzolang.js" },
    { src: "~/plugins/worksearch.js" },
    { src: "~/plugins/checkview.js" },
    { src: "~/plugins/jsonld" },
    { src: "~/plugins/vue-rellax.js", ssr: false }
    // { src: "~/plugins/vue-range-slider", mode: "client", ssr: false }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  // components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/google-analytics"],
  googleAnalytics: {
    id: "G-JJH231C7RF"
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    "nuxt-i18n",
    "@nuxtjs/style-resources",
    "nuxt-leaflet"
    //"nuxt-memwatch"
  ],
  i18n: {
    defaultLocale: "nl",
    locales: [
      {
        code: "nl",
        name: "Dutch",
        slug: "dutch",
        file: "nl/translations.json",
        iso: "nl-NL"
      }
    ],
    lazy: true,
    langDir: "locales/"
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
        config.devtool = ctx.isClient ? "source-map" : "inline-source-map";
      }
    },
    // vendor: ["vue-slider-component"],
    indicator: true,
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
    }
  }
};
