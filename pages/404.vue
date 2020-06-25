<template>
  <div class="error-404">
    <h1>404</h1>
    <p>Page not found</p>
  </div>
</template>

<script>

export default {
  name: '404',
  data: function () {
    return {
      page: false
    }
  },
  mounted () {
    this.requestPage()
  },
  methods: {
  }

}
</script>
