<style lang="scss" scoped>
  .col-6{
    margin-bottom:rfs(1.5rem);
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
      <div class="col col-6 col--mm-6" v-for="(visual, v) in flexcontent.visuals" :key="'colsV'+v" >
            <Visual :visual="visual.visual" :key="'visual'+visual.id" ratio="3x4"/>
      </div>
    </div>
  </section>
</template>
<script>
import Visual from '@/components/Visual.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'
export default {
  name: 'VisualsPortrait',
  components: { Visual },
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
