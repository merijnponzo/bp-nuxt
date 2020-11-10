<style lang="scss" scoped>
.comp__diensten {
  padding-top: rfs(8rem);
  padding-bottom: rfs(8rem);
}
.comp__diensten--visual {
  position: relative;
}
.fs__h {
  margin-bottom: rfs(3rem);
}
.bp--nxt {
  margin-top: rfs(1rem);
  padding-right: rfs(1rem);
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
  .comp__diensten--visual {
    padding-right: 0px;
  }
}
</style>
<template>
  <div class="wrap comp__diensten">
    <div class="row">
      <div class="col col-7">
        <p-meta
          tagclass="fs__h space--2"
          tag="h3"
          :meta="diensten.browse_title"
          field="textfield"
        />
        <div class="box bp--indent">
          <p-meta
            tagclass="fs__r xl"
            tag="h3"
            :meta="diensten.browse_text"
            field="texthtml"
          />
          <div class="split--m-12 split--l-6 split--u-4">
            <p-link
              v-for="(dienst, i) in getDienstenNav"
              :meta="dienst"
              :key="'dienst' + i"
              class="bp--nxt xl"
            >
              <span>{{ $t(dienst.name) }}</span>
            </p-link>
          </div>
        </div>
      </div>
      <div class="col col-5 comp__diensten--visual">
        <Visual :visual="diensten.browse_visual" ratio="ratio--3x4" />
        <div class="bp--stagwrap">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Visual from "@/components/Visual.vue";
// contenthelpers
import contenthelpers from "@/mixins/contenthelper.js";
import { mapGetters } from "vuex";
export default {
  name: "DienstenComp",
  components: { Visual },
  mixins: [contenthelpers],
  props: {
    diensten: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    ...mapGetters(["getDienstenNav"])
  }
};
</script>
