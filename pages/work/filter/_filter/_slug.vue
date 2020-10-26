<template>
  <div class="wrap">
    <div class="row">
      <div class="col col-12 grid g3">
        <Card
          v-for="(cardItem, i) in content"
          class="card xs"
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
  components: { Card },
  scrollToTop: true,
  data() {
    return {
      content: []
    };
  },
  asyncData({ app, params, query }) {
    return app.workQuery(query, params);
  }
};
</script>
