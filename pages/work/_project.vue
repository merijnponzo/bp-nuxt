<style lang="scss" scoped>
  .chapter{
    margin-bottom: 0px;
    max-width:1200px;
  }
  .row--visuals{
    .col{
      margin-bottom:rfs(1.5rem);
    }
  }
  .work__content{
    background:white;
    position:relative;
    z-index:2;
  }
  .fs__b{
    color:#7D7D7D;
    font-family: var(--productive-1);
  }
  .term{
    font-size:24px;
    font-family: var(--productive-1);
  }
  .slide{
    width:100%;
  }
  .flex--0{
    margin-top:0px!important;
  }
  .chapter.fs__h{
    margin-top:rfs(150px);
  }
  .skrp{
    transition: 1s ease all;
    opacity:0;
     transform: translateY(5vw);
  }
  .skrp[data-scroll="in"]{
    transform: translateY(0px);
    opacity:1;
  }

  @include max-medium(){
    .terms__wrap{
      display:none;
    }
    .terms__wrap.active{
      display: block;
    }
    .nav__terms{
      margin-top:5px;
      width:100%;
      display: block;
      text-align: right;
    }
    .work__paginate{
      margin-top:rfs(3rem);
      margin-bottom:rfs(3rem);
      .col-6{
        display:flex;
        flex-direction:row;
        margin-bottom:5px;
        align-items:center;
        a{
          width:calc(70% - 5px);
          margin-left:5px;
          order:2;
        }
      }
      .visual{
        width:30%;
        order:1;
      }
    }
    .project__title{
       margin-left:0px;
       font-size:34px;
    }
  }
  @include min-medium(){
    .nav__terms{
      display:none;
    }
    .chapter.fs__h{
       margin-top:rfs(100px);
    }
    .work__paginate{
      padding-left:$work-single-indent;
     
      .bp--next{
        position:absolute;
        opacity:1;
        z-index:1;
        text-align:center;
        width:100%;
        height:100%;
        left:0px;
        display:flex;
        color:white;
        justify-content:center;
        align-items:center;
        background:rgba(0,0,0,0.5);
        transition:1s ease all;
        font-size:16px;
        &:hover{
          background:rgba(0,0,0,0);
          font-size:22px;
        }
      }
      
    }
  }
</style>
<template>
<section v-if="content">
  <div class="work__head">
    <section v-rellax="rellax">
      <div class="wrap">
        <div class="row">
          <h1 class="chapter project__title fs__h space--2">{{content.title.rendered}}</h1>
        </div>
      </div>
      <div class="wrap">
        <div class="row">
            <div class="col col-12" v-if="content.meta.banner">
            <BannerWork :banner="content.meta.banner"/>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="work__content">
    <div class="wrap">
      <div class="row">
        <div class="col col-12">
            <a v-if="!mobile" @click="mobile ? mobile = true : mobile = false" class="nav__terms">&#8594; {{$t('meertal')}}</a>
        </div>
        <div class="col col-12 space--1">
          <ul class="terms split--l-3 gut terms__wrap" v-if="mobile" :class="{'active':mobile}">
            <ol>
              <li class="fs__b">{{$t('dienst')}}</li>
              <li v-for="(term, t) in getChildTerms(content.meta.terms,5)" :key="'term'+t" class="term" v-html="term.name"></li>
            </ol>
            <ol>
              <li class="fs__b">{{$t('expertise')}}</li>
              <li v-for="(term, t) in getChildTerms(content.meta.terms,6)" :key="'term'+t" class="term" v-html="term.name"></li>
            </ol>
             <ol>
              <li class="fs__b">{{$t('client')}}</li>
              <li class="term">{{content.meta.client}}</li>
            </ol>
            <ol>
              <li class="fs__b">{{$t('branche')}}</li>
              <li v-for="(term, t) in getChildTerms(content.meta.terms,9)" :key="'term'+t" class="term" v-html="term.name"></li>
            </ol>
          </ul>
        </div>
      </div>
    </div>
    <!-- dynamic flex content -->
    <template v-for="(flexcontent,s) in content.meta.projectcontent">
      <template v-if="flexcontent.acf_fc_layout">
        <component
        class="project__comp skrp space--4"
        :class="`flex--${s}`"
        v-bind:is="`${flexcontent.acf_fc_layout}Flex`"
        :flexcontent="flexcontent"
        :index="s"
        :key="'comp'+s"
        >
        </component>
      </template>
    </template>
    <!-- meer weten -->
    <div class="wrap work__knowmore">
      <div class="row">
        <h2 class="chapter fs__h">{{$t('meerweten')}}</h2>
        <div class="col col-12 space--1">
          <div class="split--fl">
            <span>
              <router-link class="bp--nxt" to="/contact">{{$t('contactop')}}</router-link>
            </span>
            <span>
              <router-link class="bp--nxt" :to="getWorkArchive()">{{$t('alleprojecten')}}</router-link>
            </span>
          </div>
          </div>
        </div>
      </div>
      <!-- meer weten-->
      <!-- next prev -->
        <div class="wrap gut--0 work__paginate">
          <div class="row">
            <div class="col col-6">
              <template v-if="content.meta.previous">
                <router-link class="bp--next  fs__s xs" :to="getLink(content.meta.previous.slug)">
                  &#8592; {{content.meta.previous.post_title}}
                  </router-link>
                <Visual :visual="content.meta.previous.visual" key="visualprev" />
              </template>
            </div>
            <div class="col col-6">
              <template v-if="content.meta.next">
                  <router-link class="bp--next fs__s xs" :to="getLink(content.meta.next.slug)">
                    &#8594; {{content.meta.next.post_title}}
                  </router-link>
                  <Visual :visual="content.meta.next.visual" key="visualnext" />
              </template>
            </div>
          </div>
        </div>
    </div>
</section>
</template>

<script>
// contenthelpers
import BannerWork from '@/components/BannerWork.vue'
import visualsFlex from '@/components/flex/Visuals.vue'
import visualsingleFlex from '@/components/flex/Visualsingle.vue'
import sliderFlex from '@/components/flex/Slider.vue'
import omschrijvingFlex from '@/components/flex/Omschrijving.vue'
import movieFlex from '@/components/flex/Movie.vue'
import Visual from '@/components/Visual.vue'
import ScrollOut from "scroll-out";

export default {
  components: {
    BannerWork,
    movieFlex,
    sliderFlex,
    omschrijvingFlex,
    visualsFlex,
    visualsingleFlex,
    Visual
  },
  middleware: 'delay',
  data () {
    return {
      content: null,
      mobile: false,
      rellax: {
        speed: -8
      }
    }
  },
  name: 'WorkSingle',
  mounted(){
     this.so = ScrollOut({
      scope: this.$el
    });
    ScrollOut({
      targets: ".skrp",
      onShown: function(element, ctx, scrollingElement) {
       console.log('one??')
      },
    });
  },
  beforeDestroy() {
    this.so = null;
  },
  asyncData({ app, params, store, $axios }) {
    const slug = params.project.toLowerCase()
    const url = `${process.env.wpApi}/work?slug=${slug}`
      return $axios.get(url).then(response => {
      store.dispatch('doImageTransition', { classname: 'after'}) 
      return {
        content:response.data[0]
      }
    })
  }
}
</script>
