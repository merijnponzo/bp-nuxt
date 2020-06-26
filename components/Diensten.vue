<style lang="scss" scoped>
  .comp__diensten{
    padding-top:rfs(8rem);
    padding-bottom:rfs(8rem);
  }
  .comp__diensten--visual{
    position:relative;
  }
  .fs__h{
    margin-bottom:rfs(3rem);
  }
  .bp--nxt{
    margin-top: rfs(1rem);
  }
  .bp--stagwrap{
    position:absolute;
    top:rfs(-6rem);
    bottom:rfs(-6rem);
    left:0px;
    height:calc(100% + 12rem);
    width:75%;
    overflow: hidden;
    z-index:0;
  }
  .visual{
    z-index:1;
  }
  @include min-medium(){
    .comp__diensten--visual{
      padding-right:0px;
    }
  }
</style>
<template>
    <div class="wrap comp__diensten">
      <div class="row">
        <div class="col col-7">
          <h3 class="fs__h space--2" v-html="metaTextfield(diensten,'browse_title')"></h3>
          <div class="box bp--indent">
            <div class="fs__l xl" v-html="metaTexthtml(diensten,'browse_text')"></div>
            <div class="split--m-12 split--l-6 split--u-4">
              <div v-for="(dienst,i) in diensten.diensten" :key="'diensten'+i">
              <a class="fs__s xs bp--nxt" v-html="dienst.name"></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-5 comp__diensten--visual">
          <Visual :visual="diensten.browse_visual" ratio="ratio--3x4" />
          <div class="bp--stagwrap">
              <slot />
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import Visual from '@/components/Visual.vue'
// contenthelpers
import contenthelpers from '@/mixins/contenthelper.js'

export default {
  name: 'DienstenComp',
  components: { Visual },
  mixins: [contenthelpers],
  props: {
    diensten: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>
