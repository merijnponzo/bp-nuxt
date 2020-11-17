<template>
  <div id="app">
    <Header class="nav" />
    <Imagetransition />
    <main>
      <Nuxt :key="$route.path" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Imagetransition from "@/components/Imagetransition.vue";

export default {
  name: "Page",
  components: { Footer, Header, Imagetransition },
  data: function() {
    return {
      sitenav: [
        {
          url: "https://wwww.buroponzo.nl",
          text: "Home"
        },
        {
          url: "https://wwww.buroponzo.nl/work",
          text: "Werk"
        },
        {
          url: "https://wwww.buroponzo.nl/branding-strategy",
          text: "Branding&Strategy"
        },
        {
          url: "https://www.buroponzo.nl/promotion-content",
          text: "Promotion&Content"
        },
        {
          url: "https://wwww.buroponzo.nl/websites-interfaces",
          text: "Websites&Interfaces"
        },
        {
          url: "https://wwww.buroponzo.nl/about",
          text: "Over ons"
        },
        {
          url: "https://wwww.buroponzo.nl/contact",
          text: "Contact"
        }
      ]
    };
  },
  jsonld() {
    const items = this.sitenav.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      item: {
        "@id": item.url,
        name: item.text,
        url: item.url
      }
    }));
    return {
      "@context": "http://schema.org",
      "@type": "SiteNavigationElement",
      itemListElement: items
    };
  }
};
</script>
<style lang="scss">
main {
  background: white;
  z-index: 1;
}

.default-enter-active {
  transition: opacity 0.5s, transform 0.5s;
}
.default-enter {
  opacity: 0;
  transform: translateY(100px);
}
.default-enter-to {
  transform: translateY(0px);
  opacity: 1;
}
main {
  display: block;
  position: relative;
  width: 100%;
  min-height: 100vh;
}
#imagetransition {
  position: fixed;
  left: 0px;
  pointer-events: none;
  overflow: hidden;
  z-index: 100000;
  width: 0px;
  height: 0px;
  top: 100%;
  background: white;
}
</style>
