import Vue from "vue";
import typy from "typy";

const Contenthelpers = Vue.mixin({
  filters: {},
  data: function() {
    return {
      lang: "nl",
      content: false,
    };
  },
  methods: {
    // get childterms by parent id
    getChildTerms(parentObj, parentId) {
      const terms = [];
      for (var parentKey in parentObj) {
        for (var childObj in parentObj[parentKey]) {
          const term = parentObj[parentKey][childObj];
          if (term.parent === parentId) {
            terms.push(term);
          }
        }
      }
      return terms;
    }
  }
});
export default Contenthelpers;
