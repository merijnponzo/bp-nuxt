<style lang="scss" scoped>
#bpplayer {
  width: 100% !important;
  height: auto !important;
}
</style>
<template>
  <div class="video" :class="outer">
    <div :class="[ratio, inner]" v-view="autoPlay">
      <video loop ref="bpplayersingle" class="wid--fl" muted playsinline>
        <source v-if="videoSource" :src="videoSource" type="video/mp4" />
      </video>
    </div>
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
      timeOut: false
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
      console.log(e);
      if (e.percentInView > 0.85 && !this.play) {
        console.log("yes!");
        //this.pgtDebounce(this.checkUserIdValid, 1000);
      }
    },
    checkUserIdValid() {
      console.log("is valid");
    }
  }
};
</script>
