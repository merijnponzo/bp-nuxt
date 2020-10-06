<style lang="scss" scoped>
  .card.active{
    opacity:1;
  }
  .card{
    transition:1s ease all;
    // opacity:0;
  }
  .work__work{
    padding-top:rfs(5rem);
  }
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s ease-in-out;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
<template>
  <section class="work__work">
    <div class="wrap">
      <div class="row">
        <template  v-if="!$typy($route.params,'project').isDefined">
          <h2 class="chapter fs__h space--2">{{ $t("workslogan") }}</h2>
          <Filters />
        </template>
        <nuxt-child :key="$route.params.slug" />
      </div>
    </div>
  </section>
</template>
<script>
import contenthelpers from '@/mixins/contenthelper.js'
import Filters from '@/components/Filters.vue'
import Card from '@/components/Card.vue'
export default {
  components: { Card, Filters},
  mixins: { contenthelpers },
  scrollToTop: true,
  watchQuery: [
    '_start',
    'filter',
    'project'
  ],
  data() {
    return {
      loading: true,
      content: []
    }
  },
  asyncData({ app, params, query }) {
    return app.workQuery(query, params)
  }
  /*
  jsonld() {
    const items = this.puppies.map((item, index) => ({
      '@context': 'http://schema.org',
      '@type': 'ListItem',
      url: '',
      item: {
        '@id': item.uuid,
        name: item.name,
        url: this.puppySeoUrl(item)
      }
    }))
    return {
      '@context': 'http://schema.org',
      '@type': 'Product',
      itemListElement: items
    }
  }
  */
}
</script>
