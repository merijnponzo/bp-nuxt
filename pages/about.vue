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
  margin-top:calc(#{$video-top}/2) ;
}
.about__title{
  transform: translateY(calc(-1 * var(--header-height) - (var(--fs-hero) / 2)));
  z-index:3;
}
.dienst__expertises--expertises{
    margin-top:rfs(3rem);
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
          v-if="showVideo"
          :desktop="content.meta.headervideodesktop" 
          :mobile="content.meta.headervideomobile" 
        />
      </div>
    </section>
     <section class="about__content" data-theme="two">
      <div class="wrap">
        <div class="row">
          <div class="col col-12">
            <h1 class="chapter about__title">{{$t('overbp')}}</h1>
          </div>
          <div class="col col-4 col--u-6">
            <p class="fs__s" v-html="metaTextfield(content.meta,'who')"></p>
          </div>
          <div class="col col-8 col--u-6">
            <p class="fs__r mwid--750" v-html="metaTextarea(content.meta,'who_long')"></p>
          </div>
        </div>
      </div>
      <!-- what -->
      <div class="wrap space--2">
        <div class="row">
          <div class="col col-4 col--u-6">
            <p class="fs__s" v-html="metaTextfield(content.meta,'what')"></p>
          </div>
          <div class="col col-8 col--u-6">
            <p class="fs__r mwid--750" v-html="metaTextarea(content.meta,'what_long')"></p>
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
            <p class="fs__r mwid--750" v-html="metaTextarea(content.meta,'teamsamenvatting')"></p>
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
              <p class="fs__r xs" v-html="metaTextarea(member)"></p>
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
            <p class="fs__s" v-html="metaTextfield(content.meta,'netwerk')"></p>
          </div>
          <div class="col col-8 col--u-6">
            <p class="fs__r mwid--750" v-html="metaTextarea(content.meta,'netwerk_long')"></p>
          </div>
          <div class="col col-4"></div>
          <div class="col col-8">
            <div class="split--l-6 split--m-6 dienst__expertises--expertises" >
              <ul v-for="(expertiseCol, c) in 3" :key="'expertise__ul'+c">
                <template v-for="(expertise, e) in content.meta.netwerk_expertise">
                  <li v-if="e % 2 === c" :key="'expertise'+e">
                    <p class="fs__s" v-html="metaTextfield(expertise)"></p>
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

// import VueWindowSize from 'vue-window-size'
//import Vue from 'vue'
// import checkView from 'vue-check-view'
// Vue.use(checkView)
//Vue.use(VueWindowSize);


export default {
  name: 'Page',
  components: { Visual, Diensten, Info, Morerows },
  mixins:[contenthelpers],
  data: function () {
    return {
      content: false,
      showVideo: true
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
    viewHandler (e) {
       if(e.percentTop > 0){
         this.showVideo = true
       }else{
          this.showVideo = false
       }
       console.log(e.percentTop, this.showVideo)
    },
  }
}
</script>
