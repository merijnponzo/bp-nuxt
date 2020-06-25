<style lang="scss" scoped>
  .more--row{
      padding-top:rfs(1rem);
      padding-bottom:rfs(1rem);
      border-bottom:1px solid var(--color-two);
      span{
        text-align: right;
      }
      .bp--nxt::before{
        height:0px;
      }
  }
</style>
<template>
   <section class="comp__morerows">
    <div class="wrap">
      <div class="row">
        <div class="col col-12" v-for="(row,r) in rows" :key="'morerow'+r">
          <div class="more--row box pad--no split">
            <p class="fs__s">{{row.post_title}}</p><span class="bp--nxt fs__s">{{$t('more')}}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// contenthelpers
import contenthelpers from '@/mixins/contenthelper.js'

export default {
  name: 'Morerows',
  mixins: [contenthelpers],
  props: {
    rows: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data: function () {
    return {}
  },
  methods: {}
}
</script>
