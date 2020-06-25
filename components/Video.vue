<style lang="scss" scoped>

</style>
<template>
  <div class="video">
    <div class="ratio--4x3">
      <video
          :poster="video.poster.url"
          autoplay
          loop
          class="wid--fl"
          ref="video"
          muted=""
          >
          <source :src="video.video" type="video/mp4" media="screen and (min-width:1001px)">
          <source :src="video.videomobiel" type="video/mp4" media="screen and (max-width:1000px)">

        </video>
    </div>
   </div>
</template>

<script>
export default {
  name: 'Video',
  props: {
    video: {
      type: Object,
      default: function () {
        return []
      }
    }
  }
}
</script>
