<style lang="scss" scoped>
.comp__slides {
  padding-bottom: rfs(2rem);
  padding-top: rfs(2rem);
  overflow-x: hidden;
}
.fs__h {
  padding-top: rfs(4rem);
  padding-bottom: rfs(4rem);
  border-top: 2px solid white;
}
.siema {
  overflow: visible !important;
}
.slide.active {
  .slide--story {
    left: 0px;
    opacity: 1;
    transform: scale(1, 1);
  }
  .slide--visual {
    left: 20%;
    transform: scale(1, 1);
    .visual {
      opacity: 1;
    }
  }
}
p {
  margin-top: rfs(1rem);
}
.slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
}
.slide--visual {
  z-index: 1;
  width: 100%;
  transition: 0.5s ease all;
  transform: scale(0.8, 0.8);
  transition: 0.5s ease opacity;
  opacity: 0.6;
  max-width: 550px;
}
.slide.active {
  .slide--visual {
    opacity: 1;
  }
}
.slide--nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: rfs(0.5rem);
}
.slide--index {
  width: 20px;
  height: 3.5px;
  background: white;
  opacity: 0.5;
  margin-right: 5px;
}
.slide--index.active {
  opacity: 1;
}
.bp--paginate {
  cursor: pointer;
}
.bp--paginate:hover {
  opacity: 0.5;
}
@include min-medium() {
  .siema-wrap {
    width: 60%;
  }
  .slide {
    flex-direction: row;
  }
  .slide--visual {
    width: 75%;
    transition: 0.75s ease all;
    left: 0px;
  }
  .slide.active {
    .slide--visual {
      transform: translateX(0px) scale(1, 1);
    }
  }
  .slide--nav {
    padding-top: rfs(0.5rem);
    width: 85%;
  }
}
@include min-large() {
  .slide.active {
    .slide--visual {
      transform: translateX(25%) scale(1, 1);
    }
  }
}
</style>
<template>
  <section class="comp__slides" data-theme="two">
    <div class="wrap push--2">
      <div class="row">
        <div class="col col-12">
          <div class="siema-wrap">
            <client-only>
              <siema
                ref="siema"
                :loop="true"
                @change="change"
                :autoplay="autoplay"
                :autoplay-duration="duration"
              >
                <div
                  class="slide clear"
                  :class="{ active: index == i }"
                  v-for="(slide, i) in flexcontent.visuals"
                  :key="'slider' + i"
                >
                  <div class="slide--visual">
                    <VisualSlide :visual="slide.visual" ratio="ratio--3x4" />
                    <p-meta tag="p" :meta="slide" field="textfield" />
                  </div>
                </div>
              </siema>
            </client-only>
          </div>
        </div>
        <div class="col col-12">
          <div class="slide--nav">
            <div
              class="slide--index"
              :class="{ active: index == i }"
              v-for="(slide, i) in flexcontent.slider"
              :key="'testimonial_index' + i"
            />
            <div class="bp--paginate prv" @click="siemaPaginate('prev')"></div>
            <div class="bp--paginate nxt" @click="siemaPaginate('next')"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VisualSlide from "@/components/VisualSlide.vue";
// contenthelpers
import contenthelpers from "@/mixins/contenthelper.js";

export default {
  name: "Visualsportraitflex",
  components: { VisualSlide },
  mixins: [contenthelpers],
  props: {
    flexcontent: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data: function() {
    return {
      duration: 4000,
      autoplay: false,
      index: 0
    };
  },
  methods: {
    change(e) {
      this.index = this.$refs.siema.currentSlide;
    },
    siemaPaginate(direction) {
      if (direction === "next") {
        this.$refs.siema.next();
      } else {
        this.$refs.siema.prev();
      }
    }
  }
};
</script>
