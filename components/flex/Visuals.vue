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
      <div class="col col-6" v-for="(visual, v) in flexcontent.visuals" :key="'colV'+v" >
          <Visual :visual="visual.visual" :key="'visual'+visual.id"/>
      </div>
    </div>
  </section>
</template>
<script>
import Visual from '@/components/Visual.vue'
export default {
  name: 'VisualsFlex',
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
