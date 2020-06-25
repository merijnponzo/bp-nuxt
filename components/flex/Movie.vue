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
      <Video class="flex__video" :video="flexcontent.movie"/>
    </div>
  </div>
 </section>
</template>
<script>
import Video from '@/components/Video.vue'
export default {
  name: 'MovieFlex',
  components: { Video },
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
