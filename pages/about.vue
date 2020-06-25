<template>
  <div class="about" v-if="page">
    {{page.meta}}
  </div>
</template>

<script>
// import Visual from '@/components/utils/Visual.vue'

export default {
  name: 'Page',
  // components: { Visual },
  data: function () {
    return {
      page: false
    }
  },
  mounted () {
    this.requestPage()
  },
  methods: {
    requestPage () {
      const slug = this.$route.name.toLowerCase()
      this.axios.get(`${process.env.VUE_APP_WP}/pages/?slug=${slug}`).then((response) => {
        if (response.data.length) {
          this.page = response.data[0]
        }
      })
    }
  }

}
</script>
