<style lang="scss" scoped>
.comp__branches {
  padding-top: rfs(8rem);
  padding-bottom: rfs(8rem);
}
.comp__branches--visual {
  position: relative;
  height: 600px;
  .img {
    position: absolute;
    width: auto;
    height: 100%;
  }
  .img:nth-child(1){
    filter: brightness(50%);
  }
  .img:nth-child(2){
    filter: brightness(-25%);
  }
}
.fs__h {
  margin-bottom: rfs(3rem);
}
.bp--nxt {
  margin-top: rfs(1rem);
}
.bp--stagwrap {
  position: absolute;
  top: rfs(-6rem);
  bottom: rfs(-6rem);
  left: 0px;
  height: calc(100% + 12rem);
  width: 75%;
  overflow: hidden;
  z-index: 0;
}
.visual {
  z-index: 1;
}
@include min-medium() {
  .comp__branches--visual {
    padding-right: 0px;
    height: 700px;
  }
}
</style>
<template>
  <section class="comp__branches" data-theme="two">
    <div class="wrap">
      <div class="row">
        <div class="col col-5 col--sm-6 comp__branches--visual">
          <img
            class="lazyload img"
            v-rellax="{speed: -2, center:true}"
            src="~/assets/images/masonry_branches_visual_1.gif"
          />
          <img
            class="lazyload img"
            v-rellax="{speed: -1, center:true}"
            src="~/assets/images/masonry_branches_visual_2.gif"
          />
          <img
            class="lazyload img"
            v-rellax="{speed: 2, center:true}"
            src="~/assets/images/masonry_branches_visual_3.gif"
          />
        </div>
        <div class="col col-7 col--sm-6">
          <h3
            class="fs__h space--2"
            v-html="metaTextfield(branches, 'browse_title')"
          ></h3>
          <div class="box bp--indent">
            <div
              class="fs__l xl"
              v-html="metaTexthtml(branches, 'browse_text')"
            ></div>
            <div class="split--m-12 split--l-6 split--u-4">
              <nuxt-link
                v-for="(branche, i) in branches.branches"
                :key="'branches' + i"
                :to="getFilterLink(branche.slug, 'branche')"
                class="fs__s xs bp--nxt"
              >
                <span v-html="branche.name" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// contenthelpers
import contenthelpers from "@/mixins/contenthelper.js";

export default {
  name: "BranchesComp",
  components: {},
  mixins: [contenthelpers],
  props: {
    branches: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>
