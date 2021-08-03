<style lang="scss" scoped>
.col-6 {
  margin-bottom: rfs(1.5rem);
}
@include min-large() {
  .wrap {
    padding-left: $work-single-indent;
  }
}
</style>
<template>
  <div
    :style="{ backgroundColor: flexcontent.backgroundcolor }"
    class="visual__instagram"
  >
    <section class="wrap wrap--insta">
      <div class="row">
        <div class="col col-12 instagram--desc">
          <span class="fs__r xl">{{ flexcontent.description }}</span>
        </div>
      </div>
    </section>
    <section>
      <div class="wrap gut--m">
        <div class="row visual__instagram--wrap">
          <div
            class="col col-6 col--m-6 rellax"
            v-for="(visualcontainer, v) in visualcontainers"
            :data-rellax-speed="$vssWidth > 960 ? (v + 1) * 10 : 10"
            :key="'colV' + v"
          >
            <template v-for="(visual, v) in visualcontainer">
              <template v-if="visual.video">
                <VideoPlayer
                  :mobile="$typy(visual, 'video.url').safeObject"
                  :desktop="$typy(visual, 'video.url').safeObject"
                />
              </template>
              <template v-else>
                <Visual
                  :class="` polaroid--${flexcontent.polaroid} visual--${v + 1}`"
                  :visual="visual.visual"
                  :key="'visual' + visual.visual.id"
                  :ratio="`ratio--${flexcontent.ratio}`"
                />
              </template>
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Visual from "@/components/Visual.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";
import Rellax from "rellax";
import NuxtSSRScreenSize from "nuxt-ssr-screen-size";

export default {
  name: "visualsrellaxFlex",
  components: { Visual, VideoPlayer },
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  props: {
    flexcontent: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data: function() {
    return {
      visualcontainers: [[], []]
    };
  },
  created() {
    // divide items
    for (let i = 0; i < this.flexcontent.visuals.length; i++) {
      if (this.$vssWidth > 960) {
        if (i % 2 == 0) {
          this.visualcontainers[0].push(this.flexcontent.visuals[i]);
        } else {
          this.visualcontainers[1].push(this.flexcontent.visuals[i]);
        }
      } else {
        this.visualcontainers[0].push(this.flexcontent.visuals[i]);
      }
    }
  },
  mounted() {
    const rellax = new Rellax(".rellax", { center: true });
  }
};
</script>
<style lang="scss" scoped>
.wrap--insta {
  padding-left: 0px;
}
.instagram--desc {
  padding-top: rfs(2rem);
  padding-bottom: rfs(2rem);
  text-align: left;
  left: 0px;
  width: 100%;
  display: block;
}
.visual__instagram {
  padding-top: rfs(5rem);
  padding-bottom: rfs(5rem);
  height: 100vh;
  overflow: hidden;
}
.visual__instagram--wrap {
  margin-top: -100vh;
}
.polaroid--true {
  background: white;
  padding: rfs(0.5rem);
  @include shadow();
  margin-bottom: rfs(3rem);
}
@include min-large() {
  .visual__instagram--wrap {
    margin-top: -25vh;
  }
}
</style>
