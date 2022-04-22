import Vue from "vue";
import typy from "typy";

export const state = () => ({
  imagetransition: {
    url: false,
    classname: false,
    coordinates: { top: 0, left: 0 },
    bgColor: null
  },
  lang: "nl",
  langprefix: "",
  webp: "",
  //*info */
  slogan: "<span>Let's meet!</span><span>Say hi ;-)</span>",
  adres: "Joseph Ledelstraat 62<br/>2518 KM Den Haag",
  telefoon: "+316 83 177 826",
  mail: "team@ponzo.nl",
  googlemaps:
    "https://www.google.com/maps/place/Joseph+Ledelstraat+62,+2518+KM+Den+Haag/data=!4m2!3m1!1s0x47c5b0d3a3192e89:0x6c5f7233af4c618e?sa=X&ved=2ahUKEwjdxOquhIz3AhWGwAIHHeCDA2wQ8gF6BAgMEAE",
  instagram: "https://instagram.com/buroponzo",
  facebook: "https://facebook.nl/buroponzo",
  nav: {
    home: {
      name: "home",
      path_nl: "/",
      path_en: "/en"
    },
    diensten: [
      {
        name: "brandingstrategy",
        path_nl: "/branding-strategy",
        path_en: "/en/branding-strategy"
      },
      {
        name: "promotioncontent",
        path_nl: "/promotion-content",
        path_en: "/en/promotion-content"
      },
      {
        name: "websitesinterfaces",
        path_nl: "/websites-interfaces",
        path_en: "/en/websites-interfaces"
      }
    ],
    info: [
      {
        name: "home",
        path_nl: "/",
        path_en: "/en/"
      },
      {
        name: "work",
        path_nl: "/work",
        path_en: "/en/work"
      },
      {
        name: "aboutus",
        path_nl: "/about",
        path_en: "/en/about"
      },
      {
        name: "contact",
        path_nl: "/contact",
        path_en: "/en/contact"
      }
    ]
  },
  terms: {
    name: "terms",
    path_nl: "algemene-voorwaarden",
    path_en: "terms-conditions"
  },
  preloader: false,
  viewport: { width: 600, height: 600 }
});

export const mutations = {
  togglePreloader(state, payload) {
    Vue.set(state, "preloader", payload);
  },
  toggleWebP(state, payload) {
    Vue.set(state, "webp", payload);
  },
  viewport(state, payload) {
    Vue.set(state, "viewport", payload);
  },
  toggleImageTransition(state, payload) {
    if (typy(payload, "classname").isDefined) {
      Vue.set(state.imagetransition, "classname", payload.classname);
    }
    if (typy(payload, "url").isDefined) {
      Vue.set(state.imagetransition, "url", payload.url);
    }
    if (typy(payload, "bgColor").isDefined) {
      Vue.set(state.imagetransition, "bgColor", payload.bgColor);
    }
    if (typy(payload, "coordinates").isDefined) {
      Vue.set(state.imagetransition, "coordinates", payload.coordinates);
    }
  }
};

export const actions = {
  setPreloader({ commit }, payload) {
    commit("togglePreloader", payload);
  },
  setViewport({ commit }, payload) {
    commit("viewport", payload);
  },
  setWebp({ commit }, payload) {
    commit("toggleWebP", payload);
  },
  doImageTransition({ commit }, payload) {
    commit("toggleImageTransition", payload);
  }
};
export const getters = {
  getLang: state => {
    return state.lang;
  },
  getLangPrefix: state => {
    return state.langprefix;
  },
  getInfoNav: state => {
    return state.nav.info;
  },
  getWorknav: state => {
    return state.nav.info[1];
  },
  getDienstenNav: state => {
    return state.nav.diensten;
  },
  getTerms: state => {
    return state.terms;
  },
  getSlogan: state => {
    return state.slogan;
  },
  getPreloader: state => {
    return state.preloader;
  },
  getContact: state => {
    return {
      mail: state.mail,
      telefoon: state.telefoon,
      googlemaps: state.googlemaps,
      instagram: state.instagram,
      facebook: state.facebook,
      adres: state.adres
    };
  },
  getContactNav: state => {
    return `<span>${state.adres}</span><br/><span><a href="mailto:${state.mail}">Team@ponzo.nl</a><br/>${state.telefoon}</span>`;
  },
  getImagetransition: state => {
    return state.imagetransition;
  }
};
