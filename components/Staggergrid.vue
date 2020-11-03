<style lang="scss" scoped>
hr {
  visibility: hidden;
}
.stag {
  width: 5vw;
  height: 5vw;
  display: inline-block;
  color: white;
  font-size: 14px;
}
.bp--stagger {
  pointer-events: none;
}
.bp--stagger.view-in {
  opacity: 1;
}
.dienst {
  .stag {
    color: black;
  }
}
@include min-large() {
  .stag {
    width: 2vw;
    height: 2vw;
  }
}
</style>
<template>
  <div class="bp--stagger" :class="staggerclass" v-view="viewHandler">
    <hr />
    <template v-if="show">
      <span class="stag" v-for="i in 130" :key="'dot' + i" :class="staggerclass"
        >+</span
      >
    </template>
  </div>
</template>

<script>
import Vue from "vue";
import checkView from "vue-check-view";
import VueAnime from "vue-animejs";

Vue.use(VueAnime);
Vue.use(checkView);

export default {
  name: "Staggergrid",
  props: {
    staggerclass: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      show: false
    };
  },
  methods: {
    viewHandler(e) {
      if (e.type === "enter") {
        this.show = true;
        this.$nextTick(() => {
          this.doStagger();
        });
      } else if (e.type === "exit") this.show = false;
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
          scale: 0.5,
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
          translateY: this.$anime.stagger(".25rem", {
            grid: grid,
            from: "center",
            axis: "y"
          }),
          rotate: 0,
          delay: this.$anime.stagger(4, { from: "center" })
        })
        .add({
          rotate: this.$anime.stagger([90, 0], { grid: grid, from: "center" }),
          delay: this.$anime.stagger(50, { grid: grid, from: "center" })
        })
        .add({
          translateX: 0,
          translateY: 0,
          scale: 0.5,
          scaleX: 1,
          rotate: 180,
          duration: 1000,
          delay: this.$anime.stagger(100, { grid: grid, from: "center" })
        })
        .add({
          scaleY: 1,
          scale: 1,
          delay: this.$anime.stagger(20, { grid: grid, from: "center" })
        });

      staggersAnimation.play();

      /*
      this.$anime({
        targets: ".bp--stagger .stag",
        translateX: this.$anime.stagger(1, {
          grid: [10, 10],
          from: "center",
          axis: "x"
        }),
        translateY: this.$anime.stagger(1, {
          grid: [2, 2],
          from: "center",
          axis: "x"
        }),
        scale: [
          { value: 0, easing: "easeOutSine", duration: 500 },
          { value: 1, easing: "easeOutSine", duration: 1200 }
        ],
        // rotateZ: this.$anime.stagger([0, 90], { grid: [10, 21], from: 'center', axis: 'x' }),
        delay: this.$anime.stagger(70, { grid: [20, 60], from: "center" }),
        easing: "easeInOutQuad"
      });
      */
    }
  }
};
</script>
