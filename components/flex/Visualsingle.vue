<style lang="scss" scoped>
  .col-6{
    margin-bottom:rfs(1.5rem);
  }
  @include min-large(){
    .visual__single:not(.wallpaper){
      .wrap{
        padding-left:$work-single-indent;
      }
    }
    .visual__single.wallpaper{
      .wrap{
        padding-left:$work-single-indent/2;
        padding-right:$work-single-indent/2;
      }
    }
  }
</style>
<template>
  <section class="visual__single"
  :style="[flexcontent.visualsingle.wallpaper ? {backgroundColor: flexcontent.visualsingle.backgroundcolor} : {backgroundColor : 'transparant' } ]"
  :class="{'wallpaper':flexcontent.visualsingle.wallpaper}">
    <div class="wrap">
      <div class="row">
        <div class="col col-12">
          <template v-if="!flexcontent.visualsingle.video">
            <Visual :ratio="getRatio(flexcontent)" :visual="flexcontent.visualsingle.visual" />
          </template>
          <template v-else>
            <VideoPlayer
              :poster="$typy(flexcontent,'visualsingle.poster').safeObject"
              :mobile="$typy(flexcontent,'visualsingle.video_small.url').safeObject"
              :desktop="$typy(flexcontent,'visualsingle.video_desktop.url').safeObject"
            >
            </VideoPlayer>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Visual from '@/components/Visual.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'

export default {
  name: 'VisualsingleFlex',
  components: { Visual, VideoPlayer },
  props: {
    flexcontent: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  methods: {
    getRatio (flexcontent) {
      if (flexcontent.visualsingle.wallpaper) {
        return 'ratio--4x3'
      } else {
        return 'ratio--4x3'
      }
    }
  }
}
</script>
