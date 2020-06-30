import Vue from 'vue'


export const state = () => ({
  webp:'',
  //*info */
  slogan: "Let's meet! Say hi ;-)",
  adres: 'Voorhaven 27B\n3025 HC Rotterdam',
  telefoon:'+316 83 177 826',
  mail:'team@ponzo.nl',
  googlemaps:'https://www.google.com/maps/dir//buroponzo/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47c434a9bfa0978f:0x75ced8472d84e8e5?sa=X&ved=2ahUKEwihxZD6o6nqAhXL5KQKHd6ADWYQ9RcwDHoECBAQEA',
  instagram:'https://instagram.com/buroponzo',
  facebook:'https://facebook.nl/buroponzo',
  nav: {
    home: {
      name: 'home',
      path_nl: '/',
      path_en: '/en'
    },
    diensten: [
      {
        name: 'brandingstrategy',
        path_nl: '/branding-strategy',
        path_en: '/en/branding-strategy'
      },
      {
        name: 'promotioncontent',
        path_nl: '/promotion-content',
        path_en: '/en/promotion-content'
      },
      {
        name: 'websitesinterfaces',
        path_nl: '/websites',
        path_en: '/en/websites'
      }
    ],
    info: [
      {
        name: 'work',
        path_nl: '/work',
        path_en: '/en/work'
      },
      {
        name: 'aboutus',
        path_nl: '/about',
        path_en: '/en/about'
      },
      {
        name: 'contact',
        path_nl: '/contact',
        path_en: '/en/contact'
      }
    ]
  },
  terms: {
    name: 'terms',
    path_nl: 'algemene-voorwaarden',
    path_en: 'terms-conditions'
  },
  preloader: false
})

export const mutations = {
  togglePreloader (state, payload) {
    Vue.set(state, 'preloader', payload)
  },
  toggleWebP (state, payload) {
    Vue.set(state, 'webp', payload)
  }
}

export const actions = {
  setPreloader ({ commit }, payload) {
    commit('togglePreloader', payload)
  },
  setWebp ({ commit }, payload) {
    commit('toggleWebP', payload)
  }
}
export const getters = {
  getInfoNav: state => {
    return state.nav.info
  },
  getWorknav: state => {
    return state.nav.info[0]
  },
  getDienstenNav: state => {
    return state.nav.diensten
  },
  getTerms: state => {
    return state.terms
  },
  getSlogan: state => {
    return state.slogan
  },
  getPreloader: state => {
    return state.preloader
  },
  getContact: state => {
    return {
      mail:state.mail,
      telefoon:state.telefoon,
      googlemaps:state.googlemaps,
      instagram:state.instagram,
      facebook:state.facebook,
      adres:state.adres
    }
  }    
}

