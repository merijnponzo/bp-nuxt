<template>
  <div class="about" v-if="content">
    <pre>
    {{content}}
    </pre>
  </div>
</template>

<script>
// import Visual from '@/components/utils/Visual.vue'

export default {
  name: 'Page',
  // components: { Visual },
  data: function () {
    return {
      content: false
    }
  },
  asyncData({ app, params, store, $axios }) {
    const url = `${process.env.wpApi}/pages?slug=contact`
    return $axios.get(url).then(response => {
      return {
       content:response.data[0]
      }
    })
  }
}
</script>
