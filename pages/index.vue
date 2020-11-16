<style lang="scss" scoped>
section {
  z-index: 3;
  position: relative;
}
.bg__video {
  // transition:0.5s ease transform;
  & > div {
    text-align: center;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
video:after {
  border: 2px solid red;
  content: "";
  width: 100px;
  position: absolute;
  height: 100px;
  z-index: 2;
}
#bg__video_hotspot {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
.showreel__controls {
  background: var(--color-bg);
  overflow: hidden;
}
.work__highlights {
  z-index: 3;
  position: relative;
}

.crumbs--wrap {
  position: relative;
  background: white;
  padding-top: rfs(1.5rem);
  padding-bottom: rfs(1.5rem);
}

.intro__nav {
  .col-12 {
    position: relative;
    overflow: hidden;
  }
  .intro__stretch {
    min-height: calc(100vh - 200px);
    transition: 0.5s ease height;
    // height:$video-top;
    align-items: flex-end;
  }

  .intro__icon {
    svg {
      fill: none;
      stroke: white;
      mix-blend-mode: difference;
      width: rfs(150px);
      height: rfs(150px);
      position: relative;
      z-index: 4;
      stroke-width: 2px;
    }
    cursor: pointer;
    margin-bottom: rfs(2rem);
    background: transparent;
    &:hover {
      stroke-width: 4px;
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
.intro__slogan {
  mix-blend-mode: exclusion;
  color: white;
  position: relative;
  z-index: 10;
}
.home__posts {
  margin-top: rfs(2rem);
  margin-bottom: rfs(2rem);
}
#fly {
  z-index: 10;
  pointer-events: none;
  position: absolute;
  display: none;
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
}
@include medium-only() {
  .crumbs--xl {
    a {
      // padding-right:5rem;
    }
  }
}
@include min-large() {
  #fly {
    position: absolute;
    display: block;
  }
  #bg__video_hotspot {
    width: 100%;
    height: 100%;
  }
  .fs__h {
    max-width: 1200px;
  }
  .intro__nav {
  }
  .crumbs--xl {
    height: 125px;
    .bp--nxt {
      align-self: center;
    }
  }
}
</style>
<template>
  <div v-if="content" class="bp__home">
    <div class="wrap gut--0 intro__nav">
      <div
        class="row intro__stretch"
        :style="{ height: $vssHeight - 200 + 'px' }"
        v-on:mousemove="updateCoordinates"
      >
        <div id="bg__video_hotspot"></div>
        <div class="col col-12">
          <div class="intro__icon">
            <Playbutton />
          </div>
          <p-meta
            tagclass="fs__h chapter intro__slogan space--0"
            tag="h1"
            :meta="content.meta.introtext"
            field="textarea"
          />
        </div>
      </div>
    </div>
    <section class="crumbs--wrap">
      <div class="wrap">
        <div class="row">
          <div class="col col-12">
            <div class="crumbs--xl">
              <p-link
                v-for="(dienst, i) in getDienstenNav"
                :meta="dienst"
                :key="'dienst' + i"
                class="bp--nxt xl"
              >
                <span>{{ $t(dienst.name) }}</span>
              </p-link>
            </div>
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
    <Branches :branches="content.meta.branches"> </Branches>
    <Testimonials :testimonials="content.meta.testimonials" />
    <Info gutter="gut--u-5" cta="contactop" :info="content.meta.meerweten" />
    <!-- 
    <Morerows class="home__posts" :rows="content.meta.meer_posts" />
    -->
    <!-- video -->

    <div class="bg__video skrp">
      <div v-show="!hideVideo && !initVideo">
        <div id="fly" :style="flystyle">
          <span class="showreel_typo">PLAY SHOWREEL</span>
        </div>
        <video
          loop
          class="wid--fl"
          muted
          autoplay
          v-show="!showVideo"
          playsinline
          :src="content.meta.showreel.bgvideo"
          type="video/mp4"
        />
        <video
          loop
          id="bpplayervideo"
          class="wid--fl"
          controls
          v-show="showVideo"
          :src="content.meta.showreel.video"
          type="video/mp4"
        />
      </div>
    </div>

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
import Playbutton from "@/components/Playbutton.vue";
import { mapGetters } from "vuex";
import Vue from "vue";
import Preloader from "@/components/Preloader.vue";
import NuxtSSRScreenSize from "nuxt-ssr-screen-size";

const screenfull = require("screenfull");
export default {
  name: "Page",
  transition: "default",
  components: {
    Playbutton,
    Highlights,
    Logowall,
    Branches,
    Preloader,
    Testimonials,
    Info
  },
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  data: function() {
    return {
      dir: "right",
      flypos: { x: 0, y: 0 },
      show: true,
      fullScreenMode: false,
      showVideo: false,
      hideVideo: 0,
      initVideo: 1,
      inScrollVideo: false,
      play: false,
      hasListener: false
    };
  },
  computed: {
    ...mapGetters(["getDienstenNav"]),
    flystyle() {
      return { left: this.flypos.x + "px", top: this.flypos.y + "px" };
    }
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
    // this.createScrollOut();
    setTimeout(() => {
      this.initVideo = 0;
      // use screenfull
      document
        .getElementById("bg__video_hotspot")
        .addEventListener("click", () => {
          this.showVideo = true;
          alert("test");
          const elem = document.getElementById("bpplayervideo");
          if (screenfull.isEnabled) {
            if (this.$typy(elem).isDefined) {
              screenfull.request(elem);
              elem.play();
            }
          }
        });
    }, 2000);
    // listener for change
    if (screenfull.isEnabled) {
      screenfull.on("change", () => {
        if (!screenfull.isFullscreen) {
          const elem = document.getElementById("bpplayervideo");
          if (this.$typy(elem).isDefined) {
            elem.pause();
            elem.currentTime = 0;
            setTimeout(() => {
              this.showVideo = false;
            }, 500);
          }
        }
      });
    }
  },
  methods: {
    updateCoordinates(e) {
      this.flypos.x = e.clientX;
      this.flypos.y = e.clientY;
    },
    viewHandler(e) {
      this.videoScale = 1 - e.scrollPercent * 10;
      if (this.videoScale < 0) {
        this.hideVideo = true;
      } else {
        this.hideVideo = false;
      }
    }
  }
};
</script>
