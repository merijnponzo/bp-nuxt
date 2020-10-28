<style lang="scss">
.about__content{
  z-index:2;
  width:100%;
  position:relative;
  padding-top:rfs(4rem);
}
.about__intro{
  min-height:calc(100vh - 150px);
  background: linear-gradient(-180deg, rgba(0,0,0,1) 64%, rgba(34,34,34,1) 100%);
  .bg__video{
    background:transparent!important;
  }
}

.about__cta{
  width:100%;
  z-index:2;
  position:relative;
  background:#ffff;
}
.about__title{
  transform: translateY(calc(-1 * var(--header-height) - (var(--fs-hero) / 2)));
  z-index:3;
}
.dienst__expertises--expertises{
    margin-top:rfs(3rem);
    padding-bottom:rfs(6rem);
    ul{
      padding-left:rfs(1rem);
      border-left:1px solid var(--color-bg);
    }
}
@include min-large(){
   .dienst__expertises--expertises{
      margin-top:rfs(6rem);
      min-height:100px;
    }
  .comp__diensten{
    .fs__h{
      max-width:550px;
    }
  }
  .stagger--absolute{
    width:650px;
    height:600px;
    overflow:hidden;
    position:absolute;
    transform:translateY(-75%);
  }
}

</style>
<template>
  <div class="about" v-if="content">
    <section class="about__intro">
      <div class="wrap gut--0">
        <div class="showreel__playwrap"></div>
          <VideoPlayer 
          outer="showreel" 
          inner="bg__video" 
          ratio="_" 
          v-if="!hideVideo"
          :desktop="content.meta.headervideodesktop" 
          :mobile="content.meta.headervideomobile" 
        />
      </div>
    </section>
     <section class="about__content" data-theme="two" v-view="viewHandler">
      <div class="wrap">
        <div class="row">
          <div class="col col-12">
            <h1 class="chapter about__title">{{$t('overbp')}}</h1>
          </div>
          <div class="col col-4 col--u-6">
            <p-meta
              tagclass="fs__s"
              tag="p"
              :meta="content.meta.who"
              field="textfield"
            />
          </div>
          <div class="col col-8 col--u-6">
            <p-meta
              tagclass="fs__r mwid--750"
              tag="p"
              :meta="content.meta.who_long"
              field="textarea"
            />
          </div>
        </div>
      </div>
      <!-- what -->
      <div class="wrap space--2">
        <div class="row">
          <div class="col col-4 col--u-6">
            <p-meta
              tagclass="fs__r"
              tag="p"
              :meta="content.meta.what"
              field="textfield"
            />
          </div>
          <div class="col col-8 col--u-6">
            <p-meta
              tagclass="fs__r mwid--750"
              tag="p"
              :meta="content.meta.what_long"
              field="textarea"
            />
          </div>
        </div>
      </div>
      <!-- visual groot -->
      <div class="wrap space--2">
        <div class="row">
          <h1 class="chapter">Meet the team</h1>
          <div class="col col-12 space--3">
            <Visual ratio="ratio--4x3" :visual="content.meta.visualgroot"/>
          </div>
          <div class="col col-4 col--u-6"></div>
          <div class="col col-8 col--u-6">
             <p-meta
              tagclass="fs__r mwid--750"
              tag="p"
              :meta="content.meta.teamsamenvatting"
              field="textarea"
            />
          </div>
        </div>
      </div>
      <!-- members -->
      <div class="wrap space--3">
        <div class="row">
          <div class="col col-4" v-for="(member,m) in content.meta.members" :key="'members'+m">
            <Visual ratio="ratio--4x3" :visual="member.visual"/>
            <div class="box px0">
              <h4 class="fs__a">{{member.naam}}</h4>
              <p-meta
                tagclass="fs__r xs"
                tag="p"
                :meta="member"
                field="textarea"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- diensten -->
      <Diensten :diensten="content.meta.diensten"/>
      <!-- netwerk -->
      <div class="wrap space--2">
        <div class="row">
          <div class="col col-4 col--u-6">
            <p-meta
                tagclass="fs__r"
                tag="p"
                :meta="content.meta.netwerk"
                field="textarea"
              />
              <Staggergrid class="stagger--absolute" />
          </div>
          <div class="col col-8 col--u-6">
            <p-meta
                tagclass="fs__r xl mwid--750"
                tag="p"
                :meta="content.meta.netwerk_long"
                field="textarea"
              />
          </div>
          <div class="col col-4">
          
          </div>
          <div class="col col-8">
            <div class="split--l-6 split--m-6 dienst__expertises--expertises" >
              <ul v-for="(expertiseCol, c) in 3" :key="'expertise__ul'+c">
                <template v-for="(expertise, e) in content.meta.netwerk_expertise">
                  <li v-if="e % 2 === c" :key="'expertise'+e">
                     <p-meta
                      tagclass="fs__s"
                      tag="p"
                      :meta="expertise"
                      field="textfield"
                    />
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about__cta">    
        <Info gutter="gut--u-5" cta="contactop" :info="content.meta.meerweten"/>
        <Morerows class="push--2" :rows="content.meta.meer_posts" />
    </section>
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer.vue'
import Visual from '@/components/Visual.vue'
import Diensten from '@/components/Diensten.vue'
import Info from '@/components/Infoblock.vue'
import Morerows from '@/components/Morerows.vue'
// contenthelpers
import contenthelpers from '@/mixins/contenthelper.js'
import Staggergrid from '@/components/Staggergrid.vue'
// import VueWindowSize from 'vue-window-size'
//import Vue from 'vue'
// import checkView from 'vue-check-view'
// Vue.use(checkView)
//Vue.use(VueWindowSize);


export default {
  name: 'Page',
  components: { Visual, Diensten, Info, Morerows, Staggergrid },
  mixins:[contenthelpers],
  data: function () {
    return {
      content: false,
      hideVideo: true
    }
  },
  mounted(){
    if( window.scrollY > 1500 ){
        this.showVideo = false
      } else {
        this.showVideo = true
      }
  },
  asyncData({ app, params, store, $axios }) {
    const url = `${process.env.wpApi}/pages?slug=about`
    return $axios.get(url).then(response => {
      return {
       content:response.data[0]
      }
    })
  },
  methods : {
     viewHandler(e) {
      this.videoScale = 1 - e.scrollPercent * 10;
      if (this.videoScale < 0) {
        this.hideVideo = true;
      } else {
        this.hideVideo = false;
      }
    },
  }
}
</script>
