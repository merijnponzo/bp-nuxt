<style lang="scss" scoped>
  .cta{
    padding-bottom:rfs(5rem);
    .btn{
      &:hover{
        i{
          transform:scale(1,1);
          width:rfs(18px);
        }
      }
      i{
        width:0px;
        transition:0.5s ease all;
        transform:scale(0,0);
        font-size:rfs(18px);
      }
    }
  }
  .mwid--400{
    align-self: center;
  }
  @include min-medium(){
    .card:nth-child(odd){
      margin-top:rfs(5rem);
    }
     .card__highlight{
      margin-bottom:rfs(2rem);
    }
  }
</style>
<template>
   <section class="work__highlights" data-theme="bg">
    <div class="wrap" :class="gutter">
      <div class="row">
        <h2 class="chapter fs__h space--3">{{ $t("highlights") }}</h2>
        <template v-for="(cardItem, i) in highlights">
          <Card class="col col-6 col--s-6" :card="cardItem" :key="'highlight'+i" />
        </template>
      </div>
      <div class="col col-12">
        <div class="box ali--mc cta">
          <router-link :to="getWorkArchive()" class="btn xl line mwid--400">
            <i class="ico-i_right"></i><span>{{$t('bekijkprojecten')}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/Card.vue'
import contenthelpers from '@/mixins/contenthelper.js'

export default {
  mixins: [contenthelpers],
  name: 'Hightlights',
  components: { Card },
  props: {
    gutter: {
      type: String,
      default: ''
    },
    highlights: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>
