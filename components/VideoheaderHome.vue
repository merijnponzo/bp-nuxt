<style lang="scss" scoped>
  .showreel{
    position: fixed;
    top:0px;
    width:100%;
  }
  .showreel__observe{
    height:$video-top;
    position: relative;
    background:var(--color-bg);
  }
  .bg__video{
    height:$video-top;
    background:var(--color-bg);
    overflow: hidden;
    video{
      width:auto;
      height:150%;
      margin-left:-15%;
    }
  }
  @include min-large(){
    .bg__video{
      height:$video-top;
      video{
        width:150%;
        height:150%;
        margin-top:-20%;
        margin-left:0px;
      }
    }

  }
</style>
<template>
  <div class="showreel__observe" v-view="viewHandler">
    <section class="wrap wid--fl showreel" v-if="visible">
      <div class="row bg__video pad--no">
        <div class="col col-12">
          <video
              :poster="video.poster.url"
              autoplay
              loop
              ref="video"
              muted=""
              >
              <source
              :src="video.bgvideo"
              type="video/mp4"
              media="(min-device-pixel-ratio:2), (-webkit-min-device-pixel-ratio:2), (min--moz-device-pixel-ratio:2), (-o-min-device-pixel-ratio:2)">
              <source :src="video.bgvideo" type="video/mp4" media="(max-device-pixel-ratio:1), (-webkit-max-device-pixel-ratio:1), (max--moz-device-pixel-ratio:1), (-o-max-device-pixel-ratio:1)">
            </video>
        </div>
      </div>
    </section>
   </div>
</template>

<script>
export default {
  name: 'VideoheaderHome',
  props: {
    video: {
      type: Object,
      default: function () {
        return []
      }
    }
  },
  data: function () {
    return {
      visible: false
    }
  },
  methods: {
    viewHandler (e) {
      if (e.percentInView > 0) {
        this.visible = true
      } else {
        this.visible = false
      }
    }
  }
}
</script>
