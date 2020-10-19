<style lang="scss" scoped>
.bg__video {
  transition: 0.3s ease all;
  z-index: 0;
}
#bg__video_hotspot {
  width: 0px;
  height: 0px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
}
.bg__video.in-active {
  opacity: 0;
  transform: scale(0.75, 0.75);
  pointer-events: none;
}
.showreel__controls {
  background: var(--color-bg);
  overflow: hidden;
}
.work__highlights {
  z-index: 3;
  position: relative;
}
.intro__nav {
  transition: 0.5s ease height;
  .col-12 {
    position: relative;
    overflow: hidden;
  }
  .row {
    // height:$video-top;
    align-items: flex-end;
  }
  .fs__h {
    color: white;
    mix-blend-mode: difference;
    z-index: 3;
    position: relative;
    margin-bottom: rfs(3rem);
  }
  .crumbs--xl {
    height: 150px;
    z-index: 5;
    position: relative;
  }
  .intro__icon {
    svg {
      fill: none;
      stroke: white;
      mix-blend-mode: difference;
      width: rfs(100px);
      height: rfs(100px);
      position: relative;
      z-index: 4;
    }
    cursor: pointer;
    margin-bottom: rfs(2rem);
    background: transparent;
    &:hover {
      stroke-width: 2px;
    }
  }
}
.showreel_typo {
  font-family: "Parabole";
  font-size: 26px;
  color: black;
  z-index: 2;
  transform: translateY(15px) translateX(15px);
}

.square {
  width: 50px;
  height: 50px;
  background: red;
}
h1.fs__h {
  mix-blend-mode: exclusion;
  color: white;
}
.home__posts {
  margin-top: rfs(2rem);
  margin-bottom: rfs(2rem);
}
#fly {
  z-index: 10;
  pointer-events: none;
  position: relative;
}
@include max-medium() {
  .intro__slogan {
    margin-left: 0px;
  }
  .intro__icon {
    svg {
      stroke-width: 2px;
      width: 150px;
      height: 150px;
    }
  }
  #fly {
    display: none;
  }
}
@include min-large() {
  #fly {
    position: absolute;
  }
  #bg__video_hotspot {
    width: 100%;
    height: 100%;
  }
  .fs__h {
    max-width: 1200px;
  }
  .intro__nav {
    .crumbs--xl {
      height: 125px;
      margin-top: 25px;
      .bp--nxt {
        align-self: center;
      }
    }
  }
}
</style>
<template>
  <div v-if="content">
    <section class="wrap gut--0 intro__nav">
      <div class="row" :style="{ height: windowHeight + 'px' }">
        <div
          id="bg__video_hotspot"
          @click="hideVideo ? null : openFullScreen()"
        ></div>
        <div class="col col-12">
          <div @click="hideVideo ? null : openFullScreen()" class="intro__icon">
            <Playbutton />
          </div>
          <h1
            class="chapter fs__h intro__slogan space--0"
            v-html="metaTextarea(content.meta, 'introtext')"
          ></h1>
          <div class="crumbs--xl">
            <nuxt-link
              v-for="(dienst, i) in $store.getters.getDienstenNav"
              :to="getLinkObj(dienst)"
              :key="'dienst' + i"
            >
              <p class="fs__s bp--nxt">{{ $t(dienst.name) }}</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <Highlights
      gutter="gut--u-5"
      :highlights="content.meta.highlights"
      v-view="viewHandler"
    />
    <Logowall :clients="content.meta.clients" />
    <Branches :branches="content.meta.branches">
      <Staggergrid />
    </Branches>
    <Testimonials :testimonials="content.meta.testimonials" />
    <Info gutter="gut--u-5" cta="contactop" :info="content.meta.meerweten" />
    <Morerows class="home__posts" :rows="content.meta.meer_posts" />
    <!-- video -->
    <template v-if="inScrollVideo">
      <div class="bg__video" :class="{ 'in-active': hideVideo }">
        <div id="fly" :style="flystyle">
          <span class="showreel_typo">PLAY SHOWREEL</span>
        </div>
        <template v-if="switchVideo">
          <video
            loop
            autoplay
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
import Highlights from "@/components/Highlights.vue";
import Logowall from "@/components/Logowall.vue";
import Branches from "@/components/Branches.vue";
import Testimonials from "@/components/Testimonials.vue";
import Info from "@/components/Infoblock.vue";
import Morerows from "@/components/Morerows.vue";
import Staggergrid from "@/components/Staggergrid.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";
import Playbutton from "@/components/Playbutton.vue";
import contenthelpers from "@/mixins/contenthelper.js";

// contenthelpers
import VueWindowSize from "vue-window-size";
import Vue from "vue";
import checkView from "vue-check-view";
Vue.use(checkView);
Vue.use(VueWindowSize);

export default {
  name: "Page",
  mixins: [contenthelpers],
  components: {
    VideoPlayer,
    Playbutton,
    Highlights,
    Logowall,
    Branches,
    Testimonials,
    Morerows,
    Info,
    Staggergrid
  },
  data: function() {
    return {
      dir: "right",
      mouse: { x: 0, y: 0 },
      flypos: { x: 0, y: 0 },
      flystyle: { left: 0, top: 0 },
      show: true,
      switchVideo: null,
      fullScreenMode: false,
      hideVideo: 0,
      inScrollVideo: false
    };
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
    const url = `${process.env.wpApi}/pages?slug=home`;
    return $axios.get(url).then(response => {
      return {
        content: response.data[0]
      };
    });
  },
  mounted() {
    document.addEventListener("mousemove", this.getMouse);

    this.switchVideo = this.content.meta.showreel.bgvideo;
    if (window.scrollY > 1500) {
      this.inScrollVideo = false;
    } else {
      this.inScrollVideo = true;
    }

    setTimeout(() => {
      this.toggleVideoFullscreen();
    }, 1000);
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.getMouse);
    const elem = this.$refs["bpplayer"];
    document.removeEventListener("fullscreenchange", elem);
  },
  methods: {
    getMouse(e) {
      this.mouse.x = e.pageX;
      this.mouse.y = e.pageY;
      //Checking directional change
      if (this.mouse.x > this.flypos.x) {
        this.dir = "right";
      } else {
        this.dir = "left";
      }
      this.followMouse();
    },

    followMouse() {
      //1. find distance X , distance Y
      var distX = this.mouse.x - this.flypos.x;
      var distY = this.mouse.y - this.flypos.y;
      //Easing motion
      //Progressive reduction of distance
      this.flypos.x = this.mouse.x;
      this.flypos.y = this.mouse.y;
      this.flystyle = { left: this.flypos.x + "px", top: this.flypos.y + "px" };
    },
    viewHandler(e) {
      if (e.percentTop < 0.95) {
        this.inScrollVideo = true;
        this.hideVideo = true;
      } else {
        this.hideVideo = false;
      }
    },
    toggleVideoFullscreen() {
      const elem = this.$refs["bpplayer"];
      elem.addEventListener("fullscreenchange", event => {
        const elem = this.$refs["bpplayer"];
        if (!this.fullScreenMode) {
          this.switchVideo = this.content.meta.showreel.video;
          this.fullScreenMode = true;
        } else {
          this.switchVideo = this.content.meta.showreel.bgvideo;
          this.fullScreenMode = false;
        }
        elem.load();
      });
    },
    openFullScreen() {
      const elem = this.$refs["bpplayer"];
      if (!this.fullScreenMode) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          /* Chrome, Safari and Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          /* IE/Edge */
          elem.msRequestFullscreen();
        }
      }
    }
  }
};
</script>
