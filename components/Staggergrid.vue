<style lang="scss" scoped>
hr {
  visibility: hidden;
}
.stag {
  width: 5vw;
  height: 5vw;
  display: inline-block;
  color: white;
  font-size: 10px;
  font-weight: 100;
}
.bp--stagger {
  pointer-events: none;
}
.bp--stagger {
  opacity: 1;
}
.dienst {
  .stag {
    color: black;
  }
}
@include min-large() {
  .stag {
    font-size: 14px;
    width: 2vw;
    height: 2vw;
  }
}
</style>
<template>
  <div class="bp--stagger" :class="staggerclass" v-view="viewStagHandler">
    <hr />
    <template>
      <span class="stag" v-for="i in 150" :key="'dot' + i">+</span>
    </template>
  </div>
</template>

<script>
import Vue from "vue";
import VueAnime from "vue-animejs";

Vue.use(VueAnime);

export default {
  name: "Staggergrid",
  props: {
    staggerclass: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {};
  },
  mounted() {
    // console.log("stagger mounted");
  },
  methods: {
    viewStagHandler(e) {
      if (e.type === "enter") {
        this.$nextTick(() => {
          this.doStagger();
        });
      }
    },
    doStagger() {
      const grid = [5, 5];
      const col = grid[0];
      const row = grid[1];

      const staggersAnimation = this.$anime
        .timeline({
          targets: ".bp--stagger .stag",
          easing: "easeInOutSine",
          delay: this.$anime.stagger(50),
          loop: true,
          autoplay: false
        })
        .add({
          translateX: [
            {
              value: this.$anime.stagger("-.1rem", {
                grid: grid,
                from: "center",
                axis: "x"
              })
            },
            {
              value: this.$anime.stagger(".1rem", {
                grid: grid,
                from: "center",
                axis: "x"
              })
            }
          ],
          translateY: [
            {
              value: this.$anime.stagger("-.1rem", {
                grid: grid,
                from: "center",
                axis: "y"
              })
            },
            {
              value: this.$anime.stagger(".1rem", {
                grid: grid,
                from: "center",
                axis: "y"
              })
            }
          ],
          duration: 1000,
          delay: this.$anime.stagger(100, { grid: grid, from: "center" })
        })
        .add({
          translateX: () => this.$anime.random(-10, 10),
          translateY: () => this.$anime.random(-10, 10),
          delay: this.$anime.stagger(8, { from: "last" })
        })
        .add({
          translateX: this.$anime.stagger(".25rem", {
            grid: grid,
            from: "center",
            axis: "x"
          }),
          translateY: this.$anime.stagger(".1rem", {
            grid: grid,
            from: "center",
            axis: "y"
          }),
          rotate: 0,
          opacity: 0,
          delay: this.$anime.stagger(4, { from: "center" })
        })
        .add({
          opacity: this.$anime.stagger([90, 0], { grid: grid, from: "center" }),
          rotate: this.$anime.stagger([90, 0], { grid: grid, from: "center" }),
          delay: this.$anime.stagger(50, { grid: grid, from: "center" })
        })
        .add({
          translateX: 0,
          translateY: 0,
          scaleX: 1,
          duration: 1000,
          scaleY: 1,
          scale: 1,
          rotate: 0,
          opacity: 1,
          delay: this.$anime.stagger(100, { grid: grid, from: "center" })
        });
      staggersAnimation.play();
    }
  }
};
</script>
