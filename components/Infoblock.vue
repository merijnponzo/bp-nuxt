<style lang="scss" scoped>
  .comp__info{
    padding-top:rfs(8rem);
    padding-bottom:rfs(8rem);

  }
  .box{
    max-width:500px;
  }
  @include min-medium(){
    .fs__h{
      span{
        display:block;
        width:70%;
      }
    }
  }
</style>
<template>
   <section class="comp__info" data-theme="">
    <div class="wrap" :class="gutter">
      <div class="row">
        <h3 class="chapter fs__h space--2">
          <span v-html="metaTextfield(info)"></span>
        </h3>
        <div class="col col-6">
          <div class="box pad--no">
            <p class="fs__l xl" v-html="metaTextarea(info)"></p>
            <template v-if="cta">
              [[link]]
            </template>
          </div>
        </div>
        <div class="col col-6 comp__info--visual">
        <Visual :visual="info.visual" :ratio="ratio" />
          <div class="bp--stagwrap">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Visual from '@/components/Visual.vue'
// contenthelpers
import contenthelpers from '@/mixins/contenthelper.js'

export default {
  name: 'Branches',
  components: { Visual },
  mixins: [contenthelpers],
  props: {
    gutter: {
      type: String,
      default: ''
    },
    cta: {
      type: [Boolean, String]
    },
    ratio: {
      type: String,
      default: 'ratio--4x3'
    },
    info: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>
