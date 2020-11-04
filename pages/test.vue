<style lang="scss" scoped>
section {
  z-index: 3;
  position: relative;
}
.bg__video {
  // transition:0.5s ease transform;
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
    min-height: 90vh;
    transition: 0.5s ease height;
    // height:$video-top;
    align-items: flex-end;
  }
  .crumbs--xl {
    height: 150px;
    z-index: 5;
    position: relative;
    margin-top: rfs(1.5rem);
    background: white;
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
    <Test v-for="(testing, i) in tests" :card="testing" :key="'test' + i" />
  </div>
</template>

<script>
import Highlights from "@/components/Highlights.vue";
import Logowall from "@/components/Logowall.vue";
import Branches from "@/components/Branches.vue";
import Testimonials from "@/components/Testimonials.vue";
import Info from "@/components/Infoblock.vue";
import Test from "@/components/Test.vue";
// import Morerows from "@/components/Morerows.vue";
import Playbutton from "@/components/Playbutton.vue";
import { mapGetters } from "vuex";
import Vue from "vue";
import Preloader from "@/components/Preloader.vue";
import VueWindowSize from "vue-window-size";
Vue.use(VueWindowSize);

export default {
  name: "Page",
  components: {
    Playbutton,
    Highlights,
    Logowall,
    Branches,
    Preloader,
    Testimonials,
    Info,
    Test
  },
  data: function() {
    return {
      dir: "right",
      flypos: { x: 0, y: 0 },
      show: true,
      fullScreenMode: false,
      hideVideo: 0,
      initVideo: 1,
      inScrollVideo: false,
      play: false,
      tests: [
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        },
        {
          title: "Hahahdwon dwd dw dwqwdwd",
          text:
            "  ernatively you may click to refuse to consent or access more detailed information and change your preferences before consenting. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your prefer",
          img:
            "https://studiodumbar.com/media/pages/work/24-vincent-van-gogh-museum/14907874-1585061107/vgmmmm-main-1600x.webp"
        }
      ]
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
      this.toggleVideoFullscreen();
      this.initVideo = 1;
      const player = this.$refs["bpplayer"];
      if (player) {
        player.play();
      }
    }, 2000);
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
    },
    autoPlay(e) {
      if (e.percentInView > 0.85 && !this.play) {
        this.play = true;
        const player = this.$refs["bpplayer"];
        if (player) {
          player.play();
        }
      } else if (e.type === "exit") {
        this.play = false;
      }
    },
    toggleVideoFullscreen() {
      const elem = this.$refs["bpplayer"];
      if (elem) {
        elem.addEventListener("fullscreenchange", event => {
          const elem = this.$refs["bpplayer"];
          if (!this.fullScreenMode) {
            this.fullScreenMode = true;
            elem.src = this.content.meta.showreel.video;
            elem.muted = false;
            elem.controls = true;
          } else {
            this.fullScreenMode = false;
            elem.src = this.content.meta.showreel.bgvideo;
            elem.muted = true;
            elem.controls = false;
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
