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
            v-rellax="rellax"
            class="col col-6 col--m-6"
            v-for="(visualcontainer, v) in visualcontainers"
            :key="'colV' + v"
            :class="`column--${v}`"
            :data-rellax-speed="(v + 2) * 5"
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
                  :class="
                    `polaroid polaroid--${flexcontent.polaroid} shadow--${
                      flexcontent.shadow
                    } visual--${v + 1}`
                  "
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

export default {
  name: "visualsrellaxFlex",
  components: { Visual, VideoPlayer },
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
      visualcontainers: [[], []],
      rellax: {
        center: true
      },
      timer: null
    };
  },
  mounted() {
    this.divideCards();
    window.addEventListener("resize", this.divideCards);
  },
  destroyed() {
    window.removeEventListener("resize", this.divideCards);
  },
  beforeDestroy() {
    this.rellax = false;
  },
  methods: {
    divideCards() {
      // divide items
      this.visualcontainers = [[], []];
      this.rellax = false;
      clearTimeout(this.timer);
      for (let i = 0; i < this.flexcontent.visuals.length; i++) {
        if (window.innerWidth > 960) {
          if (i % 2 == 0) {
            this.visualcontainers[0].push(this.flexcontent.visuals[i]);
          } else {
            this.visualcontainers[1].push(this.flexcontent.visuals[i]);
          }
        } else {
          this.visualcontainers[0].push(this.flexcontent.visuals[i]);
        }
      }

      this.timer = setTimeout(() => {
        this.rellax = {
          center: true,
          speed: 6
        };
      }, 1000);
    }
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
  height: 900px;
  overflow: hidden;
}
.visual__instagram--wrap {
  margin-top: -250px;
}
.polaroid--true {
  background: white;
  padding: rfs(0.5rem);
}
.polaroid {
  margin-bottom: rfs(3rem);
}
.shadow--true {
  @include shadow();
}
@include min-large() {
  .column--1 {
    margin-top: rfs(5rem);
  }
  .visual__instagram {
    height: 800px;
  }
}
@include min-wide() {
  .column--1 {
    margin-top: rfs(5rem);
  }
  .visual__instagram {
    height: 1000px;
  }
}
</style>
