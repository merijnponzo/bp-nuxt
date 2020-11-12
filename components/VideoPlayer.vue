<style lang="scss" scoped>
#bpplayer {
  width: 100% !important;
  height: auto !important;
}
.video {
  position: relative;
}
.slide-loader {
  height: 3px;
  background: black;
  width: 100%;
  position: absolute;
  bottom: 0px;
  z-index: 1;
}
.slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all 3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  width: 0px;
}
</style>
<template>
  <div class="video" :class="outer">
    <div :class="[ratio, inner]" v-view="autoPlay">
      <video loop ref="bpplayersingle" class="wid--fl" muted playsinline>
        <source v-if="videoSource" :src="videoSource" type="video/mp4" />
      </video>
    </div>
    <transition name="slide-fade">
      <span class="slide-loader" v-if="!debounce"></span>
    </transition>
  </div>
</template>

<script>
import NuxtSSRScreenSize from "nuxt-ssr-screen-size";
export default {
  name: "Video",
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  props: {
    poster: {
      type: [Object, Boolean],
      default: function() {
        return {};
      }
    },
    showcontrols: {
      type: [String, Boolean],
      default: false
    },
    outer: {
      type: String,
      default: ""
    },
    inner: {
      type: String,
      default: ""
    },
    mobile: {
      type: [String, Boolean],
      default: null
    },
    desktop: {
      type: [String, Boolean],
      default: null
    },
    ratio: {
      type: String,
      default: "ratio--4x3"
    }
  },
  data: function() {
    return {
      play: false,
      videoSource: false,
      timeOut: false,
      debounce: false
    };
  },
  mounted() {
    let videoUrl = false;
    if (this.$vssWidth < 1000 && this.mobile) {
      videoUrl = this.mobile;
    } else {
      videoUrl = this.desktop;
    }
    this.videoSource = videoUrl;
  },
  methods: {
    autoPlay(e) {
      const player = this.$refs["bpplayersingle"];
      if (e.type === "enter" && !this.play && !this.debounce) {
        setTimeout(() => {
          if (this.debounce) {
            player.play();
            this.play = true;
          }
        }, 3000);
        this.debounce = true;
      } else if (e.type === "exit") {
        this.debounce = false;
        if (this.play) {
          player.pause();
          this.play = false;
        }
      }
    }
  }
};
</script>
