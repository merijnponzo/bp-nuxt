<style lang="scss" scoped>
.comp__testimonial {
  padding-top: rfs(8rem);
  padding-bottom: rfs(8rem);
}
.box {
  max-width: 600px;
}
.chapter{
  margin-bottom:rfs(1rem);
}
.bp--nxt{
  margin-top:rfs(1rem);
}
.avatar--card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom:rfs(20px);
  .avatar {
    width: 60px;
    height: auto;
    max-width: 60px;
    max-height: 60px;
    margin-right: 20px;
  }
  .fs__p {
    color: #7d7d7d;
  }
  .avatar--text {
    width: calc(100% - 80px);
  }
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
  <section class="comp__testimonial" data-theme="" v-if="testimonial">
    <div class="wrap" :class="gutter">
      <div class="row">
        <div class="col col-5 col--m-6 comp__testimonial--visual">
          <Visual :visual="testimonial.visual" ratio="ratio--3x4" />
          <div class="bp--stagwrap">
            <slot />
          </div>
        </div>
        <div class="col col-7 col--m-6">
          <h3 class="chapter fs__h space--2">
            {{ $t("happycustomer") }}
          </h3>
          <div class="box bp--indent">
            <div class="avatar--card" v-if="testimonial.meta.avatar">
              <Visual
                class="avatar"
                :visual="testimonial.meta.avatar"
                ratio="ratio--1x1"
              />
              <div class="avatar--text">
                <h6 class="fs__p">{{ testimonial.meta.name }}</h6>
                <h6 class="fs__b">{{ testimonial.post_title }}</h6>
              </div>
            </div>
            <p-meta
              :meta="testimonial.meta"
              field="textarea"
              tagclass="fs__l xl"
              tag="div"
            />
            <p-link class="fs__s xs bp--nxt" :url="`${testimonial.meta.case}`">
              {{ $t("bekijkcase") }}
            </p-link>
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
      type: String,
      default: ""
    },
    ratio: {
      type: String,
      default: "ratio--4x3"
    },
    testimonial: {
      type: [Boolean, Object],
      default: function() {
        return false;
      }
    }
  }
};
</script>
