<style lang="scss" scoped>
.bg__video{
  transition:0.5s ease all;
}
.bg__video.in-active{
  opacity:0;
  transform:scale(0.75,0.75);
  pointer-events: none;
}
.showreel__controls{
  background:var(--color-bg);
  overflow: hidden;
}
.work__highlights{
  z-index:3;
  position:relative;
}
.intro__nav{
  .row{
    height:$video-top;
    align-items: flex-end;
  }
  .fs__h{
    color:white;
    mix-blend-mode: difference;
    z-index:3;
  }
  .crumbs--xl{
    z-index:4;
    height : 150px;
  }
}
.intro__icon{
  svg{
    fill:none;
    stroke:black;
    width:rfs(100px);
    height:rfs(100px);
    transform:translateY(-50px);
  }
  z-index:2;
}
/*
.left {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
}
.right {
    -moz-transform: scaleX(1);
    -o-transform: scaleX(1);
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    filter: FlipH;
    -ms-filter: "FlipH";
}
*/
.showreel_typo{
  font-family: 'Parabole';
  font-size:26px;
  color:black;
  z-index:2;
}
#bee {
  pointer-events:none;
  position:absolute;
}
.square{
  width:50px;
  height:50px;
  background:red;
}
h1.fs__h{
  mix-blend-mode: exclusion;
  color:white;
}
.home__posts{
  margin-top:rfs(2rem);
  margin-bottom:rfs(2rem);
}

@include min-large(){
  .fs__h{
    max-width:1200px;
  }
  .intro__nav{
    .crumbs--xl{
        .bp--nxt{
          align-self:center;
        }
    }
  }
}
</style>
<template>
  <div v-if="content">
      <section class="wrap intro__nav">
        <div class="row">
          <span class="intro__push" />
          <div class="col col-12 intro__icon">
             <Playbutton/>
          </div>
          <h1 class="chapter fs__h space--0" v-html="metaTextarea(content.meta,'introtext')"></h1>
          <div class="col col-12 crumbs--xl">
            <a class="fs__s bp--nxt" v-for="(dienst,i) in $store.getters.getDienstenNav" :key="'dienst'+i">
              {{$t(dienst.name)}}
            </a>
          </div>
        </div>
      </section>
      <Highlights gutter="gut--u-5" :highlights="content.meta.highlights" v-view="viewHandler"/>
      <Logowall :clients="content.meta.clients"/>
      <Branches :branches="content.meta.branches">
        <Staggergrid/>
      </Branches>
      <Testimonials :testimonials="content.meta.testimonials"/>
       <Info gutter="gut--u-5" cta="contactop" :info="content.meta.meerweten"/>
      <Morerows class="home__posts" :rows="content.meta.meer_posts" />
     <!-- video -->
       <template v-if="inScrollVideo">
        <div class="bg__video" @click="hideVideo ? null : openFullScreen()" :class="{'in-active':hideVideo}">
            <div id="bee" :style="beestyle" :class="dir">
              <span class="showreel_typo">PLAY SHOWREEL</span>
            </div>
            <template v-if="switchVideo">
              <video
                  autoplay
                  loop
                  :controls="fullScreenMode"
                  ref="bpplayer"
                  class="wid--fl"
                  muted=""
                  :src="switchVideo"
                  type="video/mp4"
                  />
              </template>
          </div>
          <!-- / video -->
      </template>
  </div>
</template>

<script>
import Highlights from '@/components/Highlights.vue'
import Logowall from '@/components/Logowall.vue'
import Branches from '@/components/Branches.vue'
import Testimonials from '@/components/Testimonials.vue'
import Info from '@/components/Infoblock.vue'
import Morerows from '@/components/Morerows.vue'
import Staggergrid from '@/components/Staggergrid.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'
import Playbutton from '@/components/Playbutton.vue'
// contenthelpers
import contenthelpers from '@/mixins/contenthelper.js'
import Vue from 'vue'
import checkView from 'vue-check-view'
Vue.use(checkView)
export default {
  name: 'Page',
  mixins: [contenthelpers],
  components: { VideoPlayer, Playbutton, Highlights, Logowall, Branches, Testimonials, Morerows, Info, Staggergrid },
  data: function () {
    return {
      dir:'right',
      mouse:{x:0,y:0},
      beepos:{x:0,y:0},
      beestyle:{left:0,top:0},
      show:true,
      switchVideo:null,
      fullScreenMode:false,
      hideVideo:0,
      inScrollVideo: false
    }
  },
  /*
  computed: {
     videoScaleStyle () {
       if(this.videoScale > 0.99){
          return { transform: 'scale(1)' }
       } else if(this.videoScale > 0.85 ){
          const scrollFactor = window.scrollY
          return { transform: 'scale('+this.videoScale / (scrollFactor * 0.02) +')' }
       }else {
         return { transform: 'scale(0)', opacity : 0 }
       }
     }
  },
  */
  asyncData({ app, params, store, $axios, context }) {
    const url = `${process.env.wpApi}/pages?slug=home`
    return $axios.get(url).then(response => {
      return {
       content:response.data[0]
      }
    })
  },
  mounted(){
      document.addEventListener("mousemove", this.getMouse); 
      this.switchVideo = this.content.meta.showreel.bgvideo
      if( window.scrollY > 1500 ){
        this.inScrollVideo = false
      } else {
        this.inScrollVideo = true
      }
   
      setTimeout(() => {
        this.toggleVideoFullscreen()
      },1000)
     

  },
  beforeDestroy(){
    document.removeEventListener('mousemove',this.getMouse);
    const elem = this.$refs['bpplayer']
    document.removeEventListener('fullscreenchange',elem)
   
  },
  methods: {
     getMouse(e){
      this.mouse.x = e.pageX;
			this.mouse.y = e.pageY;
        //Checking directional change
        if(this.mouse.x > this.beepos.x){
          this.dir = "right";
        } else {
          this.dir = "left";
        }
        this.followMouse()
    },
    
     followMouse(){
      //1. find distance X , distance Y
			var distX = this.mouse.x - this.beepos.x;
			var distY = this.mouse.y - this.beepos.y;
			//Easing motion
      //Progressive reduction of distance 
			this.beepos.x = this.mouse.x;
			this.beepos.y = this.mouse.y;
      this.beestyle= {left: this.beepos.x+"px", top:this.beepos.y+"px"}	
    },
     viewHandler (e) {
       if(e.percentTop < 0.9){
         this.inScrollVideo = true
         this.hideVideo  = true
       }else{
         this.hideVideo  = false
       }
    },
    toggleVideoFullscreen(){
      const elem = this.$refs['bpplayer']
      elem.addEventListener('fullscreenchange', (event) => {
         const elem = this.$refs['bpplayer']
          if(!this.fullScreenMode){
            this.switchVideo = this.content.meta.showreel.video
            this.fullScreenMode = true
          }else{
            this.switchVideo = this.content.meta.showreel.bgvideo
            this.fullScreenMode = false
          }
          elem.load();
      });
    },  
    openFullScreen () {
        const elem = this.$refs['bpplayer']
        if(!this.fullScreenMode){
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
          } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
          }
        }
      }
    }
}
</script>
