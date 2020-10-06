<template>
<div class="col col-12 grid g3">
  <Card
    v-for="(cardItem, i) in content"
    class="card xs" 
    v-on:toggleProjects="showProjects = false" 
    :class="{'active':showProjects}" 
    :card="cardItem" 
    :key="'work'+i" 
  />
</div>
</template>
<script>
import Card from '@/components/Card.vue'
import contenthelpers from '@/mixins/contenthelper.js'

export default {
  components: { Card },
  mixins: { contenthelpers },
  data() {
    return {
      loading: true,
      content: [],
      showProjects:true
    }
  },
  asyncData({ app, params, query }) {
    return app.workQuery(query, params)
  }
}
</script>
