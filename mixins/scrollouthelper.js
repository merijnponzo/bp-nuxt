import Vue from "vue";
import ScrollOut from "scroll-out";

const ScrollOutHelper = Vue.mixin({
  data: function() {
    return {
      so: null
    };
  },
  methods: {
    createScrollOut() {
      if (this.so === null) {
        this.so = ScrollOut({
          scope: this.$el
        });
        ScrollOut({
          targets: ".skrp",
          cssProps: {
            visibleY: true,
            scrollPercentY: true
          },
          onShown: function(element, ctx, scrollingElement) {
            const NODE = element.nodeName;
            if (!element.src && (NODE === "source" || NODE === "IMG")) {
              element.src = element.dataset.src;
            }
            element.classList.add("scrolled");
          }
        });
      }
    },
    destroyScrollOut() {
      if (this.so !== null) {
        this.so.teardown();
      }
      this.so = null;
    }
  }
});
export default ScrollOutHelper;
