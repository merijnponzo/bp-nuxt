<style lang="scss" scoped>
  #bpplayer{
    width:100%!important;
    height:auto!important;
  }
</style>
<template>
  <client-only>
    <div class="video" :class="outer" v-view="autoPlay"> 
      <div :class="[ratio,inner]">
        <video
            v-if="windowWidth"
            loop
            autoplay
            :controls="showcontrols"
            ref="bpplayersingle"
            class="wid--fl"
            muted=""
            >
            <template v-if="windowWidth < 1000">
              <source :src="mobile" type="video/mp4">
            </template>
            <template v-else-if="desktop">
              <source :src="desktop" type="video/mp4">
            </template>
            <template v-else>
              <source :src="mobile" type="video/mp4">
            </template>
          </video>
      </div>
    </div>
    </client-only>
</template>

<script>
import Vue from 'vue';
import VueWindowSize from 'vue-window-size';
Vue.use(VueWindowSize);


export default {
  name: 'Video',
  props: {
    poster: {
      type: [Object, Boolean],
      default: function () {
        return {}
      }
    },
    showcontrols:{
      type: [String, Boolean],
      default: false
    },
    outer:{
      type:String,
      default:''
    },
    inner:{
      type:String,
      default:''
    },
    mobile:{
      type: [String, Boolean],
      default: null
    },
    desktop:{
      type: [String, Boolean],
      default: null
    },
    ratio:{
      type: String,
      default:'ratio--4x3'
    }
  },
  data : function(){
    return {
      play : false
    }
  },
  methods:{
    autoPlay(e){
      if(e.percentInView > 0.85 && !this.play){
        this.play = true
        const player = this.$refs['bpplayersingle']
        if(player){
          player.play()
        }
      } else if (e.type === 'exit' ){
        this.play = false
      }
    }
  }
}
</script>
