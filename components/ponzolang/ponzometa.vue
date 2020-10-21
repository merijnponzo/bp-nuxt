<template v-if="render">
  <span>
    <template v-if="tag === 'html'">
      <div :class="tagclass" v-html="render"></div>
    </template>
    <template v-if="tag === 'p'">
      <p :class="tagclass">{{ render }}</p>
    </template>
    <template v-else-if="tag === 'h1'">
      <h1 :class="tagclass">{{ render }}</h1>
    </template>
    <template v-else-if="tag === 'h3'">
      <h3 :class="tagclass">{{ render }}</h3>
    </template>
  </span>
</template>
<script>
export default {
  name: "PMeta",
  props: {
    tag: {
      type: String,
      default: "p"
    },
    tagclass:{
      type: String,
      default: false
    },
    field: {
      type: String,
      default: null
    },
    meta: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data: function() {
    return {
      render: null
    };
  },
  mounted() {
    const field = this.field + ".textfield";
    this.render = this.$typy(
      this.meta,
      `${this.field}.${this.$store.getters.getLang}`
    ).safeObject;
  }
};
</script>
