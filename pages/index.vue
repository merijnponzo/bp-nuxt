<style lang="scss" scoped>
section {
  z-index: 3;
  position: relative;
}
.bg__video {
  // transition:0.5s ease transform;
}
#bg__video_hotspot {
  width: 0px;
  height: 0px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
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
  .col-12 {
    position: relative;
    overflow: hidden;
  }
  .row {
    min-height: 100vh;
    transition: 0.5s ease height;
    // height:$video-top;
    align-items: flex-end;
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
  <div v-if="content" class="bp__home">
    <div class="wrap gut--0 intro__nav">
      <div class="row" :style="{ height: windowHeight + 'px' }">
        <div
          id="bg__video_hotspot"
          @click="hideVideo ? null : openFullScreen()"
        ></div>
        <div class="col col-12">
          <div @click="hideVideo ? null : openFullScreen()" class="intro__icon">
            <Playbutton />
          </div>
          <p-meta
            class="chapter intro__slogan space--0"
            tagclass="fs__h"
            tag="h1"
            :meta="content.meta.introtext"
            field="textarea"
          />
          <div class="crumbs--xl"   v-view="viewHandler">
            <p-link
              v-for="(dienst, i) in getDienstenNav"
              :meta="dienst"
              :key="'dienst' + i"
            >
              <p class="fs__s bp--nxt">{{ $t(dienst.name) }}</p>
            </p-link>
          </div>
        </div>
      </div>
    </div>
    <Highlights
      gutter="gut--u-5"
      :highlights="content.meta.highlights"
    />
    <Logowall :clients="content.meta.clients" />
    <Branches :branches="content.meta.branches">
      <Staggergrid />
    </Branches>
    <Testimonials :testimonials="content.meta.testimonials" />
    <Info gutter="gut--u-5" cta="contactop" :info="content.meta.meerweten" />
    <!-- 
    <Morerows class="home__posts" :rows="content.meta.meer_posts" />
    -->
    <!-- video -->
    <template v-if="!hideVideo">
      <div class="bg__video skrp" :style="scaleVideo">
        <div id="fly" :style="flystyle">
          <span class="showreel_typo">PLAY SHOWREEL</span>
        </div>
        <video
          loop
          autoplay
          v-if="switchVideo"
          :controls="fullScreenMode"
          ref="bpplayer"
          class="wid--fl"
          :muted="{ muted: !fullScreenMode }"
          :src="switchVideo"
          type="video/mp4"
        />
      </div>
    </template>
    <!-- / video -->
  </div>
</template>

<script>
import Highlights from "@/components/Highlights.vue";
import Logowall from "@/components/Logowall.vue";
import Branches from "@/components/Branches.vue";
import Testimonials from "@/components/Testimonials.vue";
import Info from "@/components/Infoblock.vue";
// import Morerows from "@/components/Morerows.vue";
import Staggergrid from "@/components/Staggergrid.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";
import Playbutton from "@/components/Playbutton.vue";
import { mapGetters } from "vuex";
// contenthelpers
// import scrollouthelper from "@/mixins/scrollouthelper.js";
import checkView from "vue-check-view";
import Vue from "vue";
Vue.use(checkView);

export default {
  name: "Page",
  components: {
    VideoPlayer,
    Playbutton,
    Highlights,
    Logowall,
    Branches,
    Testimonials,
    // Morerows,
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
      inScrollVideo: false,
      videoScale: 1
    };
  },
  computed: {
    ...mapGetters(["getDienstenNav"]),
  },
  asyncData({ app, params, store, $axios, context }) {
    const url = `${process.env.wpApi}/pages?slug=home`;
    return $axios.get(url).then(response => {
      return {
        content: response.data[0]
      };
    });
  },
  mounted() {
    // document.addEventListener("mousemove", this.getMouse);
    this.switchVideo = this.content.meta.showreel.bgvideo;
    // this.createScrollOut();
    setTimeout(() => {
      this.toggleVideoFullscreen();
    }, 1000);
  },
  beforeDestroy() {
    // document.removeEventListener("mousemove", this.getMouse);
    const elem = this.$refs["bpplayer"];
    document.removeEventListener("fullscreenchange", elem);
    // this.createScrollOut();
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
      this.videoScale = 1 - (e.scrollPercent * 10)
      if (this.videoScale < 0) {
        this.hideVideo = true;
      } else {
        this.hideVideo = false;
      }
    },
    toggleVideoFullscreen() {
      const elem = this.$refs["bpplayer"];
      if (elem) {
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
      }
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
