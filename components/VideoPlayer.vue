<style lang="scss" scoped>

</style>
<template>
  <div class="video">
    <div class="ratio--4x3">
      <video
          
          autoplay
          loop
          class="wid--fl"
          ref="video"
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
    }
  }
}
</script>
