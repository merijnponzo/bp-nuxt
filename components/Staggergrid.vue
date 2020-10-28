<style lang="scss" scoped>
  hr{
    visibility: hidden;
  }
  .stag{
    width:1vw;
    height:1px;
    display:inline-block;
    color:white;
    margin:5px;
    transform:scale(0,0);
    font-size:10px;
  }
  .bp--stagger{
    opacity:0;
    padding-left:6px;
    transition: 1s ease all;
  }
  .bp--stagger.view-in{
    opacity:1
  }
  .dienst{
    .stag{
      color:black;
    }
  }
  @include min-large(){
    .stag{
      margin:10px;
    }
  }
</style>
<template>
  <div class="bp--stagger" :class="staggerclass" v-view="viewHandler">
    <hr/>
      <template v-if="show">
        <span class="stag" v-for="i in 600" :key="'dot'+i" :class="staggerclass"  >+</span>
      </template>
   </div>
</template>

<script>
import Vue from 'vue'
import checkView from 'vue-check-view'
import VueAnime from 'vue-animejs'

Vue.use(VueAnime)
Vue.use(checkView)

export default {
  name: 'Staggergrid',
  props: {
    staggerclass: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      show: false
    }
  },
  methods: {
    viewHandler (e) {
      console.log(e)
      if (e.type === 'enter') {
        this.show = true
        this.$nextTick(() => {
          this.doStagger()
        })
      } else if (e.type === 'exit') this.show = false
    },
    doStagger () {
      this.$anime({
        targets: '.bp--stagger .stag',
        translateX: this.$anime.stagger(1, { grid: [1, 1], from: 'center', axis: 'x' }),
        translateY: this.$anime.stagger(1, { grid: [1, 1], from: 'center', axis: 'x' }),
        scale: [
          { value: 0, easing: 'easeOutSine', duration: 500 },
          { value: 1, easing: 'easeInOutQuad', duration: 1200 }
        ],
        // rotateZ: this.$anime.stagger([0, 90], { grid: [10, 21], from: 'center', axis: 'x' }),
        delay: this.$anime.stagger(70, { grid: [14, 14], from: 'center' }),
        easing: 'easeInOutQuad'
      })
    }
  }
}
</script>
