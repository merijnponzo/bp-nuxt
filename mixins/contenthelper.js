import Vue from 'vue'
import typy from 'typy'

const Contenthelpers = Vue.mixin({
  filters: {},
  data: function () {
    return {
      lang: 'nl',
      content: false
    }
  },
  computed: {},
  mounted () {

  },
  methods: {
    clearData () {
      this.content = null
    },
    getData () {
      console.log('get data')
    },
    setData (content, hook = false) {
      this.content = content
      setTimeout(() => {
        this.$store.dispatch('setPreloader', false)
      }, 500)
      if (hook) {
        this[hook]()
      }
    },
    getStoreLinkProp (obj) {
      return `${obj['path_' + this.lang]}`
    },
    getLinkObj(obj){
      let lang = ''
      if (this.lang !== 'nl') {
        lang = this.lang + '/'
      }
      return `${lang}${obj['path_' + this.lang]}`
    },
    // en/work/projectname or werk/projectname
    getLink (slug) {
      let lang = ''
      if (this.lang !== 'nl') {
        lang = this.lang + '/'
      }
      return `${lang}${slug}`
    },
    // en/work/projectname or werk/projectname
    getFilterLink (slug, filter) {
      let lang = ''
      if (this.lang !== 'nl') {
        lang = this.lang + '/'
      }
      return `${lang}/work/filter/${filter}/${slug}`
    },
    // archive
    getWorkArchive () {
      const work = this.$store.getters.getWorknav
      return this.getStoreLinkProp(work)
    },
    // page slug
    getPageSlug (obj) {
      let lang = ''
      if (this.lang !== 'nl') {
        lang = this.lang + '/'
      }

      if (typy(obj, 'post_name').isDefined) {
        return `${lang}${obj.post_name}`
      } else {
        return '/404'
      }
    },
    metaTextarea (obj, fieldprop) {
      let field = 'textarea'
      if (fieldprop) field = fieldprop + '.textarea'
      return typy(obj, `${field}.${this.lang}`).safeObject
    },
    metaTextfield (obj, fieldprop) {
      let field = 'textfield'
      if (fieldprop) field = fieldprop + '.textfield'
      return typy(obj, `${field}.${this.lang}`).safeObject
    },
    metaTexthtml (obj, fieldprop) {
      let field = 'texthtml'
      if (fieldprop) field = fieldprop + '.texthtml'
      return typy(obj, `${field}.${this.lang}`).safeObject
    },
    // get childterms by parent id
    getChildTerms (parentObj, parentId) {
      const terms = []
      for (var parentKey in parentObj) {
        for (var childObj in parentObj[parentKey]) {
          const term = parentObj[parentKey][childObj]
          if (term.parent === parentId) {
            terms.push(term)
          }
        }
      }
      return terms
    }
  }
})
export default Contenthelpers
