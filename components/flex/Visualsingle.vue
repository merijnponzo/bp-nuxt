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
  :style="{backgroundColor:flexcontent.visualsingle.backgroundcolor}"
  :class="{'wallpaper':flexcontent.visualsingle.wallpaper}">
    <div class="wrap">
    <div class="row" v-if="flexcontent.visualsingle.visual">
      <div class="col col-12">
       <template v-if="!flexcontent.visualsingle.video">
          <Visual :ratio="getRatio(flexcontent)" :visual="flexcontent.visualsingle.visual" />
        </template>
        <template v-else>
         <video
         :poster="$typy(flexcontent,'visualsingle.visual.sizes.large').safeObject"
          autoplay
          loop
          class="wid--fl"
          ref="video"
          muted=""
          >
          <source :src="$typy(flexcontent,'visualsingle.video_desktop.url').safeObject" type="video/mp4" media="screen and (min-width:1001px)">
          <source :src="$typy(flexcontent,'visualsingle.video_small.url').safeObject" type="video/mp4" media="screen and (max-width:1000px)">
        </video>
        </template>
      </div>
    </div>
  </div>
  </section>
</template>
<script>
import Visual from '@/components/Visual.vue'
export default {
  name: 'VisualsingleFlex',
  components: { Visual },
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
