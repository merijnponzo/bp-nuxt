<style lang="scss" scoped>
.col-6 {
  margin-bottom: rfs(1.5rem);
}
@include min-large() {
  .visual__single:not(.wallpaper) {
    .wrap {
      padding-left: $work-single-indent;
    }
  }
  .visual__single.wallpaper {
    .wrap {
      padding-left: $work-single-indent/2;
      padding-right: $work-single-indent/2;
    }
  }
}
</style>
<template>
  <section
    class="visual__single"
    :style="[
      flexcontent.visualsingle.wallpaper
        ? { backgroundColor: flexcontent.visualsingle.backgroundcolor }
        : { backgroundColor: 'transparant' }
    ]"
    :class="{ wallpaper: flexcontent.visualsingle.wallpaper }"
  >
    <div class="wrap">
      <div class="row">
        <div
          class="col col-12"
          :class="`parent--${getParentRatio(flexcontent)}`"
        >
          <template v-if="!flexcontent.visualsingle.video">
            <Visual
              :ratio="getRatio(flexcontent)"
              :visual="flexcontent.visualsingle.visual"
            />
          </template>
          <span
            class="visualsingle--description fs__r xl"
            v-if="flexcontent.visualsingle.description.length"
          >
            {{ flexcontent.visualsingle.description }}
          </span>
          <template v-else>
            <VideoPlayer
              :poster="$typy(flexcontent, 'visualsingle.poster').safeObject"
              :mobile="
                $typy(flexcontent, 'visualsingle.video_small.url').safeObject
              "
              :desktop="
                $typy(flexcontent, 'visualsingle.video_desktop.url').safeObject
              "
            >
            </VideoPlayer>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Visual from "@/components/Visual.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";

export default {
  name: "VisualsingleFlex",
  components: { Visual, VideoPlayer },
  props: {
    flexcontent: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    getRatio(flexcontent) {
      if (flexcontent.visualsingle.wallpaper) {
        return "ratio--4x3";
      } else if (flexcontent.visualsingle.is3x4) {
        return "ratio--3x4";
      } else {
        return "ratio--4x3";
      }
    },
    getParentRatio(flexcontent) {
      if (flexcontent.visualsingle.wallpaper) {
        return "fit--4x3";
      } else if (flexcontent.visualsingle.is3x4) {
        return "fit--3x4";
      } else {
        return "fit--4x3";
      }
    }
  }
};
</script>
<style lang="scss">
.parent--fit--3x4 .visual {
  max-width: 700px;
}

.visualsingle--description {
  max-width: 480px;
  padding-top: rfs(2rem);
  display: block;
}
@include min-large() {
  .parent--fit--3x4 {
    display: flex;
    flex-direction: flex-row;
    align-items: flex-end;
  }
  .visualsingle--description {
    padding-left: rfs(2rem);
  }
}
</style>
