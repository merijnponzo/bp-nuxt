<style lang="scss" scoped>
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
#bee {
  position:absolute;
  transition: transform .1s;
  z-index:2;
}

.home__content{
    position: relative;
    display: block;
    background:white;
    z-index:2;
    margin-top:calc(#{$video-top} + var(--header-height) * -1);
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
   
    <VideoheaderHome :video="content.meta.showreel">
       <div id="bee" :style="beestyle" :class="dir"> 
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/160783/astroboy.png"   />
      </div>
    </VideoheaderHome>
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
      dir:'right',
      mouse:{x:0,y:0},
      beepos:{x:0,y:0},
      beestyle:{left:0,top:0}
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
		}


  }
}
</script>
