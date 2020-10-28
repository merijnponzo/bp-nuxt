<template>
  <nuxt-link :to="render">
    <slot></slot>
  </nuxt-link>
</template>
<script>
export default {
  name: "PLink",
  props: {
    archive: {
      type: [Boolean, String],
      default: false
    },
    url: {
      type: [Boolean, String],
      default: false
    },
    filter: {
      type: [Boolean, String],
      default: false
    },
    field: {
      type: String,
      default: null
    },
    meta: {
      type: [Object, String],
      default: function() {
        return null;
      }
    }
  },
  data: function() {
    return {
      render: "/"
    };
  },
  mounted() {
    const prefix = this.$store.getters.getLangPrefix;
    let slug = false;
    /*
    if (this.archive) {
      slug = this.workArchive();
    } else if (this.url) {
      slug = `${prefix}${this.url}`;
    } else if (this.filter) {
      slug = `work/filter/${this.filter}/${this.meta}`;
    } else {
      slug = this.$typy(this.meta, "path_" + this.$store.getters.getLang)
        .safeObject;
    }
    if (slug) {
      this.render = `${prefix}${slug}`;
    } else {
      this.render = "/404";
    }
    */
  },
  methods: {
    workArchive() {
      const work = this.$store.getters.getWorknav;
      return `${work["path_" + this.$store.getters.getLang]}`;
    }
  }
};
</script>
