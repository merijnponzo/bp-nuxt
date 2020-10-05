<style lang="scss">
.card{
  transition:0.75s ease all;
  transform:translateY(5vw);
  opacity:0;
  position: relative;
  .box{
    padding-left:0px;
    padding-top:rfs(10px);
  }
  .visual{
    overflow: hidden;
  }
  .fs__l{
    margin-bottom:5px;
    font-weight:300;
  }
  .fs__q{
    margin-bottom:0px;
    font-weight:normal;
  }
  .terms{
    color:#7D7D7D;
  }
}
.card.view-in{
  opacity:1;
  transform:translateY(0px);
}
.arrow, .arrow--trans{
    background: white;
    padding-left:rfs(0.5rem);
    padding-right:rfs(0.5rem);
    position:absolute;
    bottom:0px;
    right:0px;
    z-index:2;
    height:rfs(45px);
    width:rfs(65px);
    padding-top:rfs(0.15rem);
    text-align: center;
    i{
       font-size:rfs(40px);
    }
  }
  .arrow--trans{
    z-index:1;
    transition: all 1s ease-out;
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out;
  }
 
  @keyframes slide-in {
    0% {
     
    }
    25% {
      width:100%;
      height:100%;
    }
    100% {
      width:120%;
      height:120%;
    }
  }
  
  .card--link{
    cursor: pointer;
    .img{
      transition: 1s ease all;
    }
  }
 
  .card--link:hover{
    .visual{
      .img{
        transform: scale(1.2,1.2);
        opacity:0.5;
      }
    }
  }
  
  
</style>
<template>
  <article v-view.once :class="[cardclass]" class="card">
   <nuxt-link :to="getLink(card.slug)" @click.native="setImageTransition(card)"  class="card--link">
      <Visual :style="{backgroundColor:card.meta.tilecolor}" :visual="card.visual"  :key="'visual'+card.id">
        <span>
            <span class="arrow"><i class="ico-i_right"/></span>
            <transition name="slide">
                <span v-if="show" class="arrow--trans"></span>
            </transition>
        </span>
      </Visual>
      <div class="box">
        <h2 class="fs__l">{{card.meta.client}}</h2>
        <h3 class="fs__s" v-html="metaTextfield(card.meta.projectsamenvatting)"></h3>
        <ul class="terms crumbs--xs">
          <li v-for="(term, t) in getChildTerms(card.terms,5)" :key="'term'+t" class="fs__b" v-html="term.name"></li>
        </ul>
      </div>
    </nuxt-link>
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
  },
  data:function(){
    return{
      show:false,
      done:false
    }
  },
  methods:{
      setImageTransition (project) {
        this.show = true
        this.$store.dispatch('doImageTransition', { bgColor: project.meta.tilecolor, classname: 'before' })
        //this.$emit('toggleProjects')
      
    },
  }
}
</script>


