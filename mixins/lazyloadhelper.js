import Vue from "vue";
const LazyloadHelper = Vue.mixin({
  methods: {
    lazyLoad(e) {
      const target = e.target;
      if (target.element) {
        const images = target.element.querySelectorAll(".lazyload");
        for (const image of images) {
          const src = image.getAttribute("data-src");
          const srcset = image.getAttribute("data-srcset");
          if (src !== null) {
            image.setAttribute("src", src);
          } else if (srcset !== null) {
            image.setAttribute("srcset", srcset);
          }
          image.classList.add("lazyloaded");
        }
      }
    }
  }
});
export default LazyloadHelper;
