<style lang="scss" scoped>
.box {
  max-width: 500px;
}
.comp__info {
  margin-top: rfs(5rem);
  margin-bottom: rfs(5rem);
}
@include min-medium() {
  .fs__h {
    span {
      display: block;
      width: 70%;
    }
  }
}
</style>
<template>
  <section class="comp__info" data-theme="">
    <div class="wrap" :class="gutter">
      <div class="row">
        <p-meta
          :meta="info"
          tag="h3"
          tagclass="chapter fs__h space--2"
          field="textfield"
        />
        <div class="col col-6">
          <div class="box pad--no">
            <p-meta tagclass="fs__r xl" :meta="info" field="textarea" />
            <router-link class="bp--nxt xl" :to="info.link">{{
              $t("more")
            }}</router-link>
          </div>
        </div>
        <div class="col col-6 comp__info--visual">
          <Visual :visual="info.visual" :ratio="ratio" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Visual from "@/components/Visual.vue";
// contenthelpers
import contenthelpers from "@/mixins/contenthelper.js";

export default {
  name: "Branches",
  components: { Visual },
  mixins: [contenthelpers],
  props: {
    gutter: {
      type: String,
      default: ""
    },
    cta: {
      type: [Boolean, String],
      default: null
    },
    ratio: {
      type: String,
      default: "ratio--4x3"
    },
    info: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>
