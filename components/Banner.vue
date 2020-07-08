<style lang="scss" scoped>
  hr{
    color:white;
    background:white;
    outline:0px;
    border:white 1px solid;
  }
</style>
<template>
  <div class="" v-view="viewHandler">
    <hr/>
    <section ref="banner">
      <template v-if="banner.video">
        <div class="row bg__video">
          <div class="ratio--35x10">
            <template v-if="$typy(banner,'mobiel.sizes.large').isDefined">
              <video
                  :poster="banner.mobiel.sizes.large"
                  autoplay
                  loop
                  v-if="visible"
                  ref="video"
                  muted=""
                  >
                  <source
                  :src="banner.video"
                  type="video/mp4"
                  media="(min-device-pixel-ratio:2), (-webkit-min-device-pixel-ratio:2), (min--moz-device-pixel-ratio:2), (-o-min-device-pixel-ratio:2)">
                  <source :src="banner.video" type="video/mp4" media="(max-device-pixel-ratio:1), (-webkit-max-device-pixel-ratio:1), (max--moz-device-pixel-ratio:1), (-o-max-device-pixel-ratio:1)">
              </video>
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
export default {
  name: 'Banner',
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
