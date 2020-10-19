<style lang="scss" scoped>
  .card.active{
    opacity:1;
  }
  .card{
    transition:1s ease all;
    // opacity:0;
  }
  .work__work{
    padding-top:rfs(7rem);
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
  @include max-small(){
    .chapter{
      margin-left:0px;
      font-size:34px;
    }
  }
  @include min-medium(){
    .work__work{
      padding-top:4rem;
    }
  }
</style>
<template>
  <section>
    <template  v-if="!$typy($route.params,'project').isDefined">
        <div class="wrap work__work">
          <div class="row">
            <h2 class="chapter fs__h space--2">{{ $t("workslogan") }}</h2>
            <Filters />
          </div>
        </div>
    </template>
    <nuxt-child :key="$route.params.slug" />
  </section>
</template>
<script>
import Filters from '@/components/Filters.vue'
import Card from '@/components/Card.vue'
import ScrollOut from "scroll-out";

export default {
  components: { Card, Filters},
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
  mounted(){
     this.so = ScrollOut({
      scope: this.$el
    });
    ScrollOut({
      targets: ".skrp",
      offset: 400,
      threshhold: 0.5, 
      cssProps: {
        visibleY: true
      }
    });
  },
  asyncData({ app, params, query }) {
    return app.workQuery(query, params)
  },
  beforeDestroy() {
    this.so = null;
  },

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
