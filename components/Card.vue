<style lang="scss" scoped>
.card{
  transition:0.75s ease all;
  transform:translateY(5vw);
  opacity:0;
  .box{
    padding-left:0px;
  }
}
.card.view-in{
  opacity:1;
  transform:translateY(0px);
}
</style>
<template>
  <article v-view :class="cardclass" class="card">
   <Visual :visual="card.visual" :key="'visual'+card.id">
     <span class="arrow"><i class="ico-i_right"/></span>
   </Visual>
   <div class="box">
    <h4 class="fs__q">
       <router-link class="lnk tile" :to="getLink(card.slug)">{{card.post_title}}</router-link></h4>
    <h5 class="fs__s">{{card.meta.samenvatting}}</h5>
    <ul class="terms crumbs--xs">
        <li v-for="(term, t) in getChildTerms(card.terms,5)" :key="'term'+t" class="fs__b" v-html="term.name"></li>
    </ul>
   </div>
   </article>
</template>

<script>
import Visual from '@/components/Visual.vue'
import contenthelper from '@/mixins/contenthelper.js'
import checkView from 'vue-check-view'
import Vue from 'vue'
Vue.use(checkView)

export default {
  name: 'Card',
  components: { Visual },
  mixins: [contenthelper],
  props: {
    cardclass: {
      type: String,
      default: ''
    },
    card: {
      type: Object,
      default: function () {
        return []
      }
    }
  }
}
</script>
<style lang="scss">
  .arrow{
    background: white;
    padding-left:rfs(0.5rem);
    padding-right:rfs(0.5rem);
    position:absolute;
    bottom:0px;
    right:0px;
    z-index:1;
    height:rfs(45px);
    width:rfs(65px);
    padding-top:rfs(0.15rem);
    text-align: center;
    i{
       font-size:rfs(40px);
    }
  }
</style>
