<style lang="scss" scoped>
.bg__video{
  transition:0.5s ease all;
}
.showreel__controls{
  background:var(--color-bg);
  overflow: hidden;
}
.intro__nav{
  .row{
    height:100vh;
    align-items: flex-end;
  }
  .fs__h{
    color:white;
    mix-blend-mode: difference;
    z-index:3;
  }
  .intro__push{
    
  }
  .crumbs--xl{
    z-index:4;
    margin-bottom:rfs(1rem);
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
.showreel_typo{
  font-family: 'Parabole';
  font-size:26px;
  color:white;
  mix-blend-mode: difference;
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
    <div class="bg__video" @click="fullscreenChange" :style="videoScaleStyle">
      <div id="bee" :style="beestyle" :class="dir">
        <span class="showreel_typo">PLAY SHOWREEL</span>
      </div>
      <template v-if="switchVideo">
        <video
            autoplay
            loop
            ref="bpplayer"
            class="wid--fl"
            muted=""
            :src="switchVideo"
            type="video/mp4"
            />
        </template>
    </div>
    <!-- / video -->
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
      videoToggle:false,
      videoScale : 1
    }
  },
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
      this.interval = setInterval(this.followMouse, 50);
      this.switchVideo = this.content.meta.showreel.bgvideo
      
  },
  beforeDestroy(){
    document.removeEventListener('mousemove',this.getMouse);
    clearInterval(this.interval)
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
		},
     followMouse(){
      //1. find distance X , distance Y
			var distX = this.mouse.x - this.beepos.x;
			var distY = this.mouse.y - this.beepos.y;
			//Easing motion
       //Progressive reduction of distance 
			this.beepos.x += distX/5;
			this.beepos.y += distY/2;
      this.beestyle= {left: this.beepos.x+"px", top:this.beepos.y+"px"}	
    },
     viewHandler (e) {
       this.videoScale = e.percentTop
    },
    fullscreenChange () {
        const elem = this.$refs['bpplayer']
        if(!this.videoToggle){
          this.switchVideo = this.content.meta.showreel.video
          this.videoToggle = true
        }else{
          this.videoToggle = false
          this.switchVideo = this.content.meta.showreel.bgvideo
        }
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen();
        }
      
        if (elem.exitFullscreen) {
          elem.exitFullscreen();
          this.videoToggle = false
        } else if (elem.mozCancelFullScreen) { /* Firefox */
          elem.mozCancelFullScreen();
          this.videoToggle = false
        } else if (elem.webkitExitFullscreen) { /* Chrome, Safari and Opera */
          elem.webkitExitFullscreen();
        } else if (elem.msExitFullscreen) { /* IE/Edge */
          elem.msExitFullscreen();
          this.videoToggle = false
        }

  
        elem.load();
       
      }
    }
}
</script>
