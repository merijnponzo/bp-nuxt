<style lang="scss" scoped>
.comp__branches {
  padding-top: rfs(8rem);
  padding-bottom: rfs(8rem);
  position: relative;
}
.comp__branches--visual {
  position: relative;
  margin-top: rfs(50px);
  .img {
    position: absolute;
    width: 100%;
    height: auto;
    transition: 1s ease all;
  }
  .img:nth-child(1) {
    filter: brightness(40%);
    z-index: 0;
    bottom: 5%;
  }
  .img:nth-child(2) {
    z-index: 30;
    filter: brightness(70%);
    bottom: 0%;
  }
  .img:nth-child(3) {
    filter: brightness(70%);
    z-index: 3;
    bottom: 15%;
  }
}
.view-in--gt-above {
  .img:nth-child(1) {
    filter: brightness(60%);
    bottom: 10%;
  }
  .img:nth-child(2) {
    bottom: 15%;
  }
  .img:nth-child(3) {
    filter: brightness(70%);
    bottom: 25%;
  }
}
.view-in--gt-half {
  .img:nth-child(1) {
    filter: brightness(40%);
    bottom: 15%;
  }
  .img:nth-child(2) {
    bottom: 10%;
    filter: brightness(100%);
  }
  .img:nth-child(3) {
    filter: brightness(50%);
    bottom: 10%;
  }
}
.skrp.parallax {
  opacity: 1;
}
.fs__h {
  margin-bottom: rfs(3rem);
}
.bp--nxt {
  margin-top: rfs(1rem);
}
.visual {
  z-index: 1;
}
.comp__branches--visual {
  height: 550px;
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
        <div
          class="col col-5 col--sm-6 comp__branches--visual"
          v-view="lazyLoad"
        >
          <img
            class="lazyload img skrp parallax"
            style="--index: 1"
            v-view.once="lazyLoad"
            :data-src="branches.visual1.url"
          />
          <img
            class="lazyload img skrp parallax"
            style="--index: 2"
            v-view.once="lazyLoad"
            :data-src="branches.visual2.url"
          />
          <img
            class="lazyload img skrp parallax"
            style="--index: 3"
            v-view.once="lazyLoad"
            :data-src="branches.visual3.url"
          />
        </div>
        <div class="col col-7 col--sm-6">
          <p-meta
            :meta="branches.browse_title"
            field="textfield"
            tagclass="fs__h space--2"
          />
          <div class="box bp--indent">
            <p-meta
              :meta="branches.browse_text"
              field="texthtml"
              tag="div"
              tagclass="fs__r"
            />
            <div class="split--l-6 split--u-4">
              <p-link
                v-for="(branche, i) in branches.branches"
                :key="'branches' + i"
                :meta="branche.slug"
                filter="branche"
                class="bp--nxt"
              >
                <span v-html="branche.name" />
              </p-link>
              <p-link filter="branche" :archive="true" class="bp--nxt">
                <span>{{ $t("allebranches") }}</span>
              </p-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import LazyloadHelper from "@/mixins/lazyloadhelper.js";
export default {
  name: "BranchesComp",
  mixins: [LazyloadHelper],
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
