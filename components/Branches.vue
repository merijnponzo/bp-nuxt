<style lang="scss" scoped>
.comp__branches {
  padding-top: rfs(8rem);
  padding-bottom: rfs(8rem);
}
.view-in{
  .img:nth-child(1) {
    filter: brightness(40%);
    margin-top:rfs(25px);
    z-index:0;
  }
  .img:nth-child(2) {
    margin-top:rfs(40px);
    z-index:30;
  }
  .img:nth-child(3) {
    filter: brightness(70%);
    margin-top:rfs(30px);
    z-index:3;
  }
}
.view-in--gt-half{
  .img:nth-child(1) {
    filter: brightness(60%);
    margin-top:rfs(35px);
  }
  .img:nth-child(2) {
    margin-top:rfs(60px);
  }
  .img:nth-child(3) {
    filter: brightness(70%);
    margin-top:rfs(0px);
  }
}
.view-in--gt-above{
  .img:nth-child(1) {
    filter: brightness(20%);
    margin-top:rfs(0px);
  }
  .img:nth-child(2) {
    margin-top:rfs(-20px);
  }
  .img:nth-child(3) {
    filter: brightness(30%);
    margin-top:rfs(-30px);
  }
}

.comp__branches--visual {
  position: relative;
  height: 60vh;
  margin-top:rfs(50px);
  .img {
    position: absolute;
    width: 100%;
    height: auto;
    transition:1s ease all;
  }
}
.skrp.parallax{
  opacity:1;
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
  <section class="comp__branches" data-theme="two" v-view>
    <div class="wrap">
      <div class="row">
        <div class="col col-5 col--sm-6 comp__branches--visual" style="--total: 3">
          <img
            class="lazyload img skrp parallax"
            style="--index: 1"
            :data-src="branches.visual1.url"
          />
          <img
            class="lazyload img skrp parallax"
            style="--index: 2"
            :data-src="branches.visual2.url"
          />
          <img
            class="lazyload img skrp parallax"
            style="--index: 3"
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
            <div class="split--m-12 split--l-6 split--u-4">
              <p-link
                v-for="(branche, i) in branches.branches"
                :key="'branches' + i"
                :meta="branche.slug"
                filter="branche"
                class="fs__s xs bp--nxt"
              >
                <span v-html="branche.name" />
              </p-link>
              <p-link
                filter="branche"
                :archive="true"
                class="fs__s xs bp--nxt"
              >
                <span>{{$t('allebranches')}}</span>
              </p-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import checkView from "vue-check-view";
import Vue from "vue";
Vue.use(checkView);
export default {
  name: "BranchesComp",
  components: {},
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
