<style lang="scss" scoped>
.box {
  max-width: 500px;
}
.comp__info {
  margin-top: rfs(5rem);
  margin-bottom: rfs(5rem);
}
#bg__video_hotspot {
  position: relative;
  transition: 1s ease all;
}
#bpplayervideo_about {
  position: absolute;
  top: 0px;
  left: 0px;
}
.intro__icon {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  transition: 1s ease all;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    svg {
      stroke-width: 3px;
    }
  }
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
}

@include min-medium() {
  .fs__h {
    span {
      display: block;
      width: 70%;
    }
  }
}
</style>
<template>
  <section class="comp__info" data-theme="">
    <div class="wrap" :class="gutter">
      <div class="row">
        <p-meta
          :meta="info"
          tag="h3"
          tagclass="chapter fs__h space--2"
          field="textfield"
        />
        <div class="col col-6">
          <div class="box pad--no">
            <p-meta tagclass="fs__r xl" :meta="info" field="textarea" />
            <router-link class="bp--nxt xl" :to="info.link">{{
              $t("more")
            }}</router-link>
          </div>
        </div>
        <div class="col col-6 comp__info--visual" id="bg__video_hotspot">
          <div class="intro__icon">
            <Playbutton />
          </div>
          <Visual :visual="info.visual" :ratio="ratio" />
          <video
            loop
            id="bpplayervideo_about"
            class="wid--fl"
            v-if="showVideo"
            :src="info.video"
            type="video/mp4"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Visual from "@/components/Visual.vue";
import Playbutton from "@/components/Playbutton.vue";
// contenthelpers
import contenthelpers from "@/mixins/contenthelper.js";
const screenfull = require("screenfull");
export default {
  name: "InfoVideoBlock",
  components: { Visual, Playbutton },
  mixins: [contenthelpers],
  props: {
    gutter: {
      type: String,
      default: ""
    },
    cta: {
      type: [Boolean, String],
      default: null
    },
    ratio: {
      type: String,
      default: "ratio--4x3"
    },
    info: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data: function() {
    return {
      showVideo: false
    };
  },
  mounted() {
    // this.createScrollOut();
    setTimeout(() => {
      // use screenfull
      document
        .getElementById("bg__video_hotspot")
        .addEventListener("click", () => {
          this.showVideo = true;

          setTimeout(() => {
            const elem = document.getElementById("bpplayervideo_about");
            if (screenfull.isEnabled) {
              if (this.$typy(elem).isDefined) {
                screenfull.request(elem);
                elem.play();
              }
            } else {
              if (this.$typy(elem).isDefined) {
                elem.play();
              }
            }
          }, 500);
        });
    }, 2000);
    // listener for change
    if (screenfull.isEnabled) {
      screenfull.on("change", () => {
        if (!screenfull.isFullscreen) {
          const elem = document.getElementById("bpplayervideo_about");
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
  }
};
</script>
