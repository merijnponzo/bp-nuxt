<template>
  <div class="wrap">
    <div class="row">
      <div class="col col-12 grid g3--min-l g2 g2--sm">
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

export default {
  name: "WorkIndex",
  transition: "default",
  scrollTop: true,
  components: { Card },
  data() {
    return {
      content: []
    };
  },
  asyncData({ app, params, query }) {
    return app.workQuery(query, params);
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>
