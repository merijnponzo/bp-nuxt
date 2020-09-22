<style lang="scss" scoped>
  hr{
    color:white;
    background:white;
    outline:0px;
    border:white 1px solid;
  }
  .bg__video{
    width:100%;
    background:var(--color-bg);
  }
  @include max-medium(){
    .ratio--35x10{
      padding-bottom:66.6%;
    }
  }
</style>
<template>
  <div class="" v-view="viewHandler">
    <hr/>
    <section ref="banner">
      <template v-if="banner.video_desktop">
        <div class="row bg__video">
          <div class="ratio--35x10">
            <template v-if="$typy(banner,'mobiel.sizes.large').isDefined">
              <VideoPlayer 
              :poster_mobile="banner.mobiel"
              :poster_desktop="banner.desktop"
              :mobile="banner.video_mobiel" 
              :desktop="banner.video_desktop" 
              />
            </template>
            </div>
        </div>
      </template>
      <template v-else>
        <template v-if="$typy(banner,'desktop.sizes.large').isDefined">
          <div class="visual show--min-l">
            <div class="img-wrap ratio--35x10">
              <img class="img" :src="banner.desktop.sizes.large"/>
            </div>
          </div>
        </template>
        <template v-if="$typy(banner,'desktop.sizes.medium').isDefined">
          <div class="visual show--max-m">
            <div class="img-wrap ratio--4x3">
              <img class="img" :src="banner.mobiel.sizes.medium"/>
            </div>
          </div>
         </template>
      </template>
    </section>
   </div>
</template>
<script>
import Vue from 'vue'
import VideoPlayer from '@/components/VideoPlayer.vue'
export default {
  name: 'BannerWork',
  components:{VideoPlayer},
  props: {
    banner: {
      type: Object,
      default: function () {
        return []
      }
    }
  },
  data: function () {
    return {
      visible: false
    }
  },
  methods: {
    viewHandler (e) {
      if (e.percentInView > 0.25) {
        this.visible = true
      } else {
        this.visible = false
      }
    }
  }
}
</script>
