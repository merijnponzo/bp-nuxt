<style lang="scss" scoped>
.preloader {
  width: rfs(4rem);
  height: rfs(4rem);
  position: absolute;
  top: calc(50% - 2rem);
  left: calc(50% - 2rem);
  mix-blend-mode: multiply;
}
</style>
<template v-if="Imagetransition">
  <div id="imagetransition" :class="Imagetransition.classname">
    <Preloader v-if="preload" />
  </div>
</template>

<script>
import Preloader from "@/components/Preloader.vue";
import VueAnime from "vue-animejs";
import Vue from "vue";
Vue.use(VueAnime);
export default {
  name: "Imagetransition",
  components: { Preloader },
  props: {},
  data: function() {
    return {
      active: false,
      styleObject: {},
      preload: false,
      preloadInterval: null
    };
  },
  // compute property changes from clicked tile
  computed: {
    Imagetransition() {
      return this.$store.getters.getImagetransition;
    }
  },
  // watch if classname is changed
  watch: {
    Imagetransition: {
      deep: true,
      handler(e) {
        if (e.classname === "before") {
          this.changeIn();
        } else if (e.classname === "after") {
          this.changeOut();
        }
      }
    }
  },
  methods: {
    changeIn() {
      this.preloadInterval = setInterval(() => {
        this.preload = true;
      }, 1500);
      this.$anime.set("#imagetransition", {
        width: "0px",
        height: "0px",
        left: "0px",
        top: "100%",
        backgroundColor: this.Imagetransition.bgColor
      });
      const animation = this.$anime.timeline().add({
        targets: "#imagetransition",
        width: "100vw",
        height: "100%",
        duration: 750,
        left: "0px",
        top: "0%",
        easing: "easeOutExpo",
        delay: 250
      });
    },
    changeOut() {
      clearInterval(this.preloadInterval)
      this.$anime.set("#imagetransition", {
        top: "0px",
        left: "0px",
        bottom: "auto",
        width: "100%",
        height: "100%"
      });
      const animation = this.$anime.timeline().add({
        targets: "#imagetransition",
        width: "0%",
        height: "0%",
        left: "100%",
        duration: 500,
        easing: "easeInExpo",
        delay: 0
      });
    }
  }
};
</script>
