<style lang="scss" scoped>
#bpplayer {
  width: 100% !important;
  height: auto !important;
}
</style>
<template>
  <div class="video" :class="outer">
    <div :class="[ratio, inner]" v-view="autoPlay">
      <video
        loop
        ref="bpplayersingle"
        class="wid--fl"
        muted
        playsinline
        :key="desktop + mobile"
      >
        <template v-if="$vssWidth < 1000 && mobile">
          <source :src="mobile" type="video/mp4" />
        </template>
        <template v-else>
          <source :src="desktop" type="video/mp4" />
        </template>
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
      play: false
    };
  },
  methods: {
    autoPlay(e) {
      if (e.percentInView > 0.85 && !this.play) {
        const player = this.$refs["bpplayersingle"];
        if (player) {
          player.play();
        }
        this.play = true;
      } else if (e.type === "exit") {
        const player = this.$refs["bpplayersingle"];
        if (player) {
          player.pause();
        }
        this.play = false;
      }
    }
  }
};
</script>
