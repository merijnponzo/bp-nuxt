<style lang="scss" scoped>
  #bpplayer{
    width:100%!important;
    height:auto!important;
  }
</style>
<template>
  <div>
    <div class="video"> 
      <div :class="ratio">
        <video
            v-if="windowWidth"
            autoplay
            loop
            controls
            id="bpplayer"
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
  </div>
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
  }
}
</script>
