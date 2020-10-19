<style lang="scss" scoped>
  .dienst{
    padding-top:rfs(4rem);
  }
  .dienst__intro--text{
      padding-top:rfs(6rem);
      padding-bottom:rfs(6rem);
  }
  h1{
    max-width:400px;
    position:sticky;
    top:rfs(10rem);
    z-index:2;
    color:white;
    mix-blend-mode: exclusion;
  }
  .dienst__intro--visual{
    margin-top:rfs(-2rem);
    padding-bottom:rfs(10rem);
    .visual{
        z-index:1;
    }
  }
  .bp--stagwrap{
    position:absolute;
    top:rfs(4rem);
    right:0px;
    height:calc(100% + 20rem);
    width:80%;
    overflow: hidden;
    z-index:0;
  }
  .dienst__expertises{
    padding-top:rfs(8rem);
    padding-bottom:rfs(8rem);
    .fs__h{
      margin-top:rfs(3rem);
    }
  }
  .dienst__expertises--text{
      padding-top:rfs(3rem);
      padding-bottom:rfs(3rem);
  }
  .dienst__expertises--expertises{
    margin-top:rfs(3rem);
    ul{
      padding-left:rfs(1rem);
      border-left:1px solid var(--color-bg);
    }
  }
  @include large-only(){
    .dienst__expertises--visual{
       margin-right:calc( -1 * (var(--page-margin) / 2));
      .visual{
        max-width:480px;
        float:right
      }
    }
  }
  @include min-large(){
    .dienst__intro--text{
      padding-top:33.33vh;
      padding-bottom:rfs(6rem);
    }
    .dienst__intro--visual{
      padding-right:$dienst-single-indent;
    }
    .dienst__expertises--visual{
      .visual{
        max-width:600px;
        float:right
      }
    }
    .dienst__expertises--text{
      display:flex;
      align-items: center;
      justify-content: center;
      .fs__s{
        max-width:500px;
      }
    }
    .dienst__expertises--expertises{
      margin-top:rfs(6rem);
    }
  }

</style>
<template>
  <div class="dienst" v-if="content">
   <section class="wrap dienst__intro">
     <div class="row">
       <div class="col col-6">
          <h1 v-html="content.title.rendered"></h1>
        </div>
        <div class="col col-6 col--m-6 dienst__intro--text">
          <p class="fs__s" v-html="metaTextarea(content.meta,'intro')"></p>
        </div>
        <div class="col col-12 col--m-6 dienst__intro--visual">
          <Visual ratio="ratio--16x9" :visual="content.meta.intro.visual"/>
          <div class="bp--stagwrap">
           <Staggergrid staggerclass="dienst" />
          </div>
        </div>
      </div>
    </section>
    <section class="dienst__expertises" data-theme="two">
      <div class="wrap gut--0">
        <div class="row">
          <div class="col col-6 col--m-6 dienst__expertises--text">
              <p class="fs__s" v-html="metaTextarea(content.meta,'expertises')"></p>
          </div>
          <div class="col col-6 col--m-6 dienst__expertises--visual">
            <Visual ratio="ratio--3x4" :visual="content.meta.expertises.visual"/>
          </div>
          <h2 class="fs__h xs chapter">{{$t('ditiswatwekunnen')}}</h2>
          <div class="col col-12">
            <div class="split--l-4 split--m-4 dienst__expertises--expertises" >
              <ul v-for="(expertiseCol, c) in 3" :key="'expertise__ul'+c">
                <template v-for="(expertise, e) in content.meta.expertises.expertises">
                  <li v-if="e % 3 === c" :key="'expertise'+e">
                    <p class="fs__s" v-html="metaTextfield(expertise)"></p>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="dienst__highlights">
      <Highlights gutter="gut--u-5" :highlights="content.meta.highlights" />
    </section>
    <section class="dienst__werkwijzen">
      <Werkwijzen cta="contactop" :werkwijzen="content.meta.werkwijze"/>
    </section>
    <section class="dienst__testimonial">
      <Testimonialblock :testimonial="content.meta.testimonial" />
    </section>
    <section class="dienst__logowall">
      <Logowall :clients="content.meta.clients">
        <hr class="chapter"/>
      </Logowall>
    </section>
    <section class="dienst__contactop">
      <Info gutter="gut--u-5" cta="contactop" :info="content.meta.meerweten.meerweten"/>
    </section>
  </div>
</template>

<script>
// contenthelpers
import contenthelpers from '@/mixins/contenthelper.js'
// import checkView from 'vue-check-view'
import Visual from '@/components/Visual.vue'
import Staggergrid from '@/components/Staggergrid.vue'
import Highlights from '@/components/Highlights.vue'
import Info from '@/components/Infoblock.vue'
import Testimonialblock from '@/components/Testimonialblock.vue'
import Werkwijzen from '@/components/Werkwijzen.vue'
import Logowall from '@/components/Logowall.vue'
// import Vue from 'vue'
// Vue.use(checkView)

export default {
  mixins: [contenthelpers],
  components: {
    Visual, Staggergrid, Highlights, Info, Werkwijzen, Testimonialblock, Logowall
  },
  data () {
    return {
      content: null
    }
  },
  name: 'DienstenSingle',
   asyncData({ app, params, store, $axios }) {
    const slug = params.slug.toLowerCase()
    const url = `${process.env.wpApi}/dienst?slug=${slug}`
    return $axios.get(url).then(response => {
      return {
       content:response.data[0]
      }
    })
  }
}
</script>
