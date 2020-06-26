<style lang="scss" scoped>
.home__content{
    position: relative;
    display: block;
    background:white;
    z-index:2;
}
h1.fs__h{
  margin-top:rfs(-5rem);
}
.crumbs--xl{
  transform:translateY(-1rem);
}
@include min-large(){
  .fs__h{
    max-width:1200px;
  }
}
</style>
<template>
  <div id="home" v-if="content">
    <VideoheaderHome :video="content.meta.showreel"/>
    <div class="home__content">
      <section class="wrap intro__nav">
        <div class="row">
          <h1 class="chapter fs__h space--0" v-html="metaTextarea(content.meta,'introtext')"></h1>
          <div class="col col-12 crumbs--xl space--4">
            <a class="fs__s bp--nxt" v-for="(dienst,i) in $store.getters.getDienstenNav" :key="'dienst'+i">
              {{dienst.name}}
            </a>
          </div>
        </div>
      </section>
      <Highlights gutter="gut--u-5" :highlights="content.meta.highlights"/>
      <Logowall :clients="content.meta.clients"/>
      <Branches :branches="content.meta.branches">
        <Staggergrid/>
      </Branches>
      <Testimonials :testimonials="content.meta.testimonials"/>
       <Info gutter="gut--u-5" cta="contactop" :info="content.meta.meerweten"/>
      <Morerows :rows="content.meta.meer_posts" />
    </div>
  </div>
</template>

<script>
import VideoheaderHome from '@/components/VideoheaderHome.vue'
import Highlights from '@/components/Highlights.vue'
import Logowall from '@/components/Logowall.vue'
import Branches from '@/components/Branches.vue'
import Testimonials from '@/components/Testimonials.vue'
import Info from '@/components/Infoblock.vue'
import Morerows from '@/components/Morerows.vue'
import Staggergrid from '@/components/Staggergrid.vue'
// contenthelpers
import contenthelpers from '@/mixins/contenthelper.js'

export default {
  name: 'Page',
  mixins: [contenthelpers],
  components: { VideoheaderHome, Highlights, Logowall, Branches, Testimonials, Morerows, Info, Staggergrid },
  data: function () {
    return {
    }
  },
  asyncData({ app, params, store, $axios }) {
    const url = `${process.env.wpApi}/pages?slug=home`
    return $axios.get(url).then(response => {
      return {
       content:response.data[0]
      }
    })
  },
  methods: {
    renderPattern (e) {
      if (e.type === 'enter') {
        return true
      }
    }

  }
}
</script>
