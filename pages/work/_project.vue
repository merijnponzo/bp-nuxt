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
  @include min-large(){
    .chapter.fs__h{
       margin-top:rfs(100px);
    }
    .work__paginate{
      padding-left:$work-single-indent;
    }
  }
</style>
<template>
<div>
  <div class="work__work" v-if="content">
    <div class="wrap">
      <div class="row">
        <h1 class="chapter fs__h space--2" v-html="metaTextfield(content.meta.projectsamenvatting)"></h1>
      </div>
    </div>
    <div class="wrap">
      <div class="row">
          <div class="col col-12" v-if="content.meta.banner">
          <BannerWork :banner="content.meta.banner"/>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="row">
        <div class="col col-12 space--1">
          <ul class="terms split--l-3 gut">
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
        class="space--4"
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
    <div class="wrap">
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
        <div class="wrap work__paginate">
          <div class="row">
            <div class="col col-6">
              <template v-if="content.meta.previous">
                <router-link class="bp--next" :to="getLink(content.meta.previous.slug)">
                    {{content.meta.previous.post_title}}
                  </router-link>
                <Visual :visual="content.meta.previous.visual" key="visualprev" />
              </template>
            </div>
            <div class="col col-6">
              <template v-if="content.meta.next">
                  <router-link class="bp--next" :to="getLink(content.meta.next.slug)">
                    {{content.meta.next.post_title}}
                  </router-link>
                  <Visual :visual="content.meta.next.visual" key="visualnext" />
              </template>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// contenthelpers
import contenthelpers from '@/mixins/contenthelper.js'
import BannerWork from '@/components/BannerWork.vue'
import checkView from 'vue-check-view'
import visualsFlex from '@/components/flex/Visuals.vue'
import visualsingleFlex from '@/components/flex/Visualsingle.vue'
import sliderFlex from '@/components/flex/Slider.vue'
import omschrijvingFlex from '@/components/flex/Omschrijving.vue'
import movieFlex from '@/components/flex/Movie.vue'
import Visual from '@/components/Visual.vue'
import Vue from 'vue'
Vue.use(checkView)

export default {
  mixins: [contenthelpers],
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
      content: null
    }
  },
  name: 'WorkSingle',
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
