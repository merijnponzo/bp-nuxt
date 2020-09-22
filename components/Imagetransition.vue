<template v-if="Imagetransition">
  <div id="imagetransition" :class="Imagetransition.classname">
  </div>
</template>

<script>
import VueAnime from 'vue-animejs'
import Vue from 'vue'
Vue.use(VueAnime)
export default {
  name: 'Imagetransition',
  props: {

  },
  data: function () {
    return {
      active: false,
      styleObject: {}
    }
  },
  // compute property changes from clicked tile
  computed: {
    Imagetransition () {
      return this.$store.getters.getImagetransition
    }
  },
  // watch if classname is changed
  watch: {
    Imagetransition: {
      deep: true,
      handler (e) {
        if (e.classname === 'before') {
          this.changeIn()
        }else if(e.classname === 'after'){
          this.changeOut()
        }
      }
    }
  },
  methods: {
    changeIn () {
      this.$anime.set('#imagetransition', 
        {
          width: '0px',
          height: '0px',
          left:'0px',
          top:'100%',
          backgroundColor:this.Imagetransition.bgColor
        }
      )
      const animation = this
        .$anime
        .timeline()
        .add({
          targets:'#imagetransition',
          width: '100vw',
          height: '100%',
          duration: 750,
          left:'0px',
          top:'0%',
          easing: 'easeOutExpo',
          delay:250
         })
         
    },
    changeOut () {
      this.$anime.set('#imagetransition', {
        top:'0px',
        left:'0px',
        bottom:'auto',
        width:'100%',
        height:'100%',
      })
      const animation = this
        .$anime
        .timeline()
        .add({
          targets:'#imagetransition',
          width: '0%',
          height: '0%',
          left:'100%',
          duration: 500,
          easing: 'easeInExpo',
          delay:0
         })    
        }
    }
}
</script>
