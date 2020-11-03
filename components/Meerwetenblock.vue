<style lang="scss" scoped>
.box {
  max-width: 500px;
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
        <h3 class="chapter fs__h space--2">
          <p-meta :meta="meerweten" field="textfield" />
        </h3>
        <div class="col col-6">
          <div class="box pad--no">
            <p-meta tagclass="fs__l xl" :meta="meerweten" field="textarea" />
            <router-link class="bp--nxt xl" :to="meerweten.link">{{
              $t("more")
            }}</router-link>
          </div>
        </div>
        <div class="col col-6 comp__info--visual" v-if="meerweten.visual">
          <Visual :visual="meerweten.visual" :ratio="ratio" />
          <div class="bp--stagwrap">
            <slot />
          </div>
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
    meerweten: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>
