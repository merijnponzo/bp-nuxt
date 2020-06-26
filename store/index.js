import Vue from 'vue'


export const state = () => ({
  slogan: "Let's meet! Say hi ;-)",
  address: 'Teilingerstraat 120\n3032AW Rotterdam\n\nteam@ponzo.nl\n+316 83 177 826',
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
  }
}

export const actions = {
  setPreloader ({ commit }, payload) {
    commit('togglePreloader', payload)
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
  getAddress: state => {
    return state.address
  },
  getTerms: state => {
    return state.terms
  },
  getSlogan: state => {
    return state.slogan
  },
  getPreloader: state => {
    return state.preloader
  }  
}

