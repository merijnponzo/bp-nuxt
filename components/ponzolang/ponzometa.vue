<template v-if="render">
  <div>
    <template v-if="tag === 'html'">
      <div v-html="render"></div>
    </template>
    <template v-if="tag === 'p'">
      <p>{{ render }}</p>
    </template>
    <template v-else-if="tag === 'h1'">
      <h1>{{ render }}</h1>
    </template>
    <template v-else-if="tag === 'h3'">
      <h1>{{ render }}</h1>
    </template>
  </div>
</template>
<script>
export default {
  name: "PMeta",
  props: {
    tag: {
      type: String,
      default: "p"
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
