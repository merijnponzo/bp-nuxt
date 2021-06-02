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
  <section class="wrap gut--m">
    <div class="row visuals--more" :class="{ four: flexcontent.visuals > 3 }">
      <div
        class="col col-6 col--mm-6"
        v-for="(visual, v) in flexcontent.visuals"
        :key="'colV' + v"
      >
        <template v-if="visual.video">
          <VideoPlayer
            :mobile="$typy(visual, 'video.url').safeObject"
            :desktop="$typy(visual, 'video.url').safeObject"
          />
        </template>
        <template v-else>
          <Visual :visual="visual.visual" :key="'visual' + visual.id" />
        </template>
      </div>
    </div>
  </section>
</template>
<script>
import Visual from "@/components/Visual.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  name: "VisualsFlex",
  components: { Visual, VideoPlayer },
  props: {
    flexcontent: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@include max-medium() {
  .visuals--more.four {
    --grid-gutter: 4px !important;
    .col--mm-6 {
      margin-bottom: 8px !important;
    }
  }
}
</style>
