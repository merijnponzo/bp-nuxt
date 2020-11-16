<style lang="scss" scoped>
.card.active {
  opacity: 1;
}
.card {
  transition: 1s ease all;
  // opacity:0;
}
.work__work {
  padding-top: rfs(7rem);
}
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
@include max-small() {
  .chapter {
    margin-left: 0px;
    font-size: 34px;
    max-width: 600px;
  }
}
@include min-medium() {
  .work__work {
    padding-top: 4rem;
  }
  .chapter {
    max-width: 1020px;
  }
}
</style>
<template>
  <section>
    <template v-if="!$typy($route.params, 'project').isDefined">
      <div class="wrap work__work">
        <div class="row">
          <h2 class="chapter fs__h space--2">{{ $t("workslogan") }}</h2>
          <Filters />
        </div>
      </div>
    </template>
    <nuxt-child :key="$route.fullPath" />
  </section>
</template>
<script>
import Filters from "@/components/Filters.vue";
// import Card from "@/components/Card.vue";

export default {
  name: "Work",
  scrollToTop: true,
  transition: "default",
  components: { Filters },
  watchQuery: ["_start", "filter", "project"],
  data() {
    return {
      loading: true,
      content: []
    };
  },
  asyncData({ app, params, query }) {
    return app.workQuery(query, params);
  }
};
</script>
