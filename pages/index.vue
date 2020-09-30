<style lang="scss" scoped>
.showreel__controls{
  height:$video-top;
  background:var(--color-bg);
  overflow: hidden;
}
.showreel__hotspot{
  position:absolute;
  top:0px;
  left:0px;
  width: 100%;
  height:100%;
  background: red;
  z-index: 2;
}
.showreel__play{
  fill:none;
  stroke:#ffff;
  width:rfs(100px);
  height:rfs(100px);
  transform:translateY(-50px);
  mix-blend-mode: difference;
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
  z-index:2;
}
.home__content{
    position: relative;
    display: block;
    background:white;
    z-index:2;
    // margin-top:calc(#{$video-top} + var(--header-height) * -1);
}
.square{
  width:50px;
  height:50px;
  background:red;
}
h1.fs__h{
  margin-top:rfs(-2rem);
  //mix-blend-mode: exclusion;
  //color:white;
  z-index:3;
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
    <div class="showreel" @click="fullscreenChange">
      <div id="bee" :style="beestyle" :class="dir">
        <span class="showreel_typo">PLAY SHOWREEL</span>
      </div>
      <div class="bg__video">
        <template v-if="switchVideo">
          <video
              autoplay
              loop
              controls
              ref="bpplayer"
              class="wid--fl"
              muted=""
              :src="switchVideo"
              type="video/mp4"
              />
          </template>
      </div>
      <section class="wrap">
        <div class="row">
          <div class="col col-12 showreel__playwrap">
              <Playbutton class="showreel__play"/>
          </div>
        </div>
      </section>
    </div>
    <div class="home__content">
      <section class="wrap intro__nav">
        <div class="row">
          <h1 class="chapter fs__h space--0" v-html="metaTextarea(content.meta,'introtext')"></h1>
          <div class="col col-12 crumbs--xl space--4">
            <a class="fs__s bp--nxt" v-for="(dienst,i) in $store.getters.getDienstenNav" :key="'dienst'+i">
              {{$t(dienst.name)}}
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
      <Morerows class="home__posts" :rows="content.meta.meer_posts" />
    </div>
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
      videoToggle:false
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
      if (e.type === 'enter') {
        this.show = true
      } else if (e.type === 'exit') this.show = false
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
