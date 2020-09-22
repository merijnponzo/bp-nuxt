<style lang="scss" scoped>
  .col{
    overflow:hidden;
  }
  .flex__video{
    background:#ccc;
  }
  @include min-large(){
    .wrap{
      padding-left:$work-single-indent;
    }
  }
</style>
<template>
 <section class="wrap gut--m">
  <div class="row">
    <div class="col col-12">
       <VideoPlayer
          :poster="$typy(flexcontent,'movie.poster').safeObject"
          :mobile="$typy(flexcontent,'movie.videomobiel').safeObject"
          :desktop="$typy(flexcontent,'movie.video').safeObject"
          >
      </VideoPlayer>
    </div>
  </div>
 </section>
</template>
<script>
import VideoPlayer from '@/components/VideoPlayer.vue'
export default {
  name: 'MovieFlex',
  components: { VideoPlayer },
  props: {
    flexcontent: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>
