<template>
  <div id="app">
    <Header class="nav" />
    <Imagetransition />
    <main>
      <Nuxt :key="$route.path" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Imagetransition from "@/components/Imagetransition.vue";

export default {
  name: "Page",
  components: { Footer, Header, Imagetransition },
};
</script>
<style lang="scss">
main {
  background: white;
  z-index: 1;
}

.page-enter-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter {
  opacity: 0;
  transform: translateY(25vh);
}
.page-enter-to {
  transform: translateY(0px);
  opacity: 1;
}
main {
  display: block;
  position: relative;
  width: 100%;
  min-height: 100vh;
}
#imagetransition {
  position: fixed;
  left: 0px;
  pointer-events: none;
  overflow: hidden;
  z-index: 100000;
  width: 0px;
  height: 0px;
  top: 100%;
  background: white;
}
</style>
