<template>
  <div class="wrap">
    <div class="row">
      <div class="col col-12 grid g3 g2--sm">
        <Card
          v-for="(cardItem, i) in content"
          class="card grow skrp xs"
          :card="cardItem"
          :key="'work' + i"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import scrollouthelper from "@/mixins/scrollouthelper.js";

export default {
  name: "WorkIndex",
  components: { Card },
  scrollToTop: true,
  mixins: [scrollouthelper],
  data() {
    return {
      content: []
    };
  },
  asyncData({ app, params, query }) {
    return app.workQuery(query, params);
  },
  mounted() {
    this.createScrollOut();
  },
  beforeDestroy() {
    this.destroyScrollOut();
  }
};
</script>
