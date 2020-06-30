<template>
  <div id="app">
    <Header class="nav" />
    <main>
     <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import supportsWebP from 'supports-webp';
export default {
  name: 'Page',
  components: { Footer, Header },
  data: function () {
    return {
    }
  }
}
</script>
<style lang="scss">
main{
  background:white;
}
.preloader{
  position:fixed;
  height:5px;
  background:black;
  top:0px;
  width:0%;
  z-index:10;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s ease;
  width:100%;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.page-enter-active, .page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: scale(0.9,0.9)
}
main{
  display:block;
  position:relative;
  width:100%;
  min-height:100vh;
}
</style>
