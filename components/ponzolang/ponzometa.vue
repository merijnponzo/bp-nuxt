<script>
export default {
  name: "PMeta",
  functional: true,
  render: function(h, { props, parent }) {
    // default field type is a textfield
    const field = props.field + ".textfield";
    // get html from the right field and language
    const html = parent.$typy(
      props.meta,
      `${props.field}.${parent.$store.getters.getLang}`
    ).safeObject;
    // render always as html
    const value = {
      class: props.tagclass,
      domProps: {
        innerHTML: html
      }
    };
    return h(props.tag, value);
  },
  props: {
    tag: {
      type: String,
      default: "p"
    },
    tagclass: {
      type: [Boolean, String],
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
  }
};
</script>
