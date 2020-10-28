<style lang="scss" scoped>
.comp__testimonials {
  padding-bottom: rfs(2rem);
  overflow: hidden;
  position: relative;
  z-index: 1;
  background: black;
}
.fs__h {
  padding-top: rfs(4rem);
  padding-bottom: rfs(4rem);
  border-top: 2px solid white;
}
.avatar--card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: rfs(1rem);
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
.slide {
  height: 100%;
  display: block;
  width: 101%;
  padding-right: 10px;
  position: relative;
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
.bp--paginate {
  cursor: pointer;
}
.bp--nxt {
  align-self: flex-end;
  margin-right: rfs(1rem);
}
.bp--paginate:hover {
  opacity: 0.5;
}
.slide--story {
  display: flex;
  flex-direction: column;
  margin-bottom: rfs(1rem);
}
@include max-medium() {
  .avatar--card {
    margin-top: rfs(1rem);
    margin-bottom: rfs(1rem);
  }
}
@include min-small() {
  .siema {
    overflow: visible !important;
  }
  .slide {
    position: relative;
    height: 750px;
    opacity: 0.55;
    width: 95%;
    margin-right: 5%;
    transition: 1s ease opacity;
  }
  .slide--story {
    position: absolute;
    height: 450px;
    left: 50%;
    width: 45%;
    transition: 0.3s ease all;
  }
  .slide--visual {
    height: 550px;
    position: absolute;
    left: 0px;
    width: 45%;
    transition: 0.3s ease all;
    transform: scale(0.66, 0.66);
    .visual {
      height: 100%;
    }
  }
  .slide.active {
    opacity: 1;
    .slide--story {
      left: 0px;
    }
    .slide--visual {
      left: 45%;
      transform: scale(0.85, 0.85);
    }
  }
}
</style>
<template>
  <section class="comp__testimonials" data-theme="two">
    <div class="wrap">
      <div class="row">
        <div class="col col-12">
          <h3 class="fs__h">{{ $t("ourclientstestimonials") }}</h3>
        </div>
        <div class="col col-12">
          <div class="siema-wrap">
            <no-ssr>
              <siema
                ref="siema"
                :loop="true"
                @change="change()"
                :autoplay="autoplay"
                :autoplay-duration="duration"
              >
                <div
                  v-for="(testimonial, s) in testimonials"
                  :class="{ active: index == s }"
                  :key="'testimonial' + s"
                  class="slide clear"
                >
                  <div class="slide--story">
                    <div class="box bp--indent">
                      <div class="avatar--card">
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
                        :meta="testimonial.meta.story"
                        field="textarea"
                        tag="div"
                        tagclass="fs__q xl"
                      />
                    </div>
                  </div>
                  <div class="slide--visual bp--tile">
                    <Visual :visual="testimonial.visual" ratio="" />
                    <nuxt-link
                      :to="localePath(testimonial.meta.case)"
                      class="fs__s xs bp--nxt"
                    >
                      {{ $t("bekijkcase") }}</nuxt-link
                    >
                  </div>
                </div>
              </siema>
            </no-ssr>
          </div>
        </div>
        <div class="col col-12">
          <div class="slide--nav">
            <div
              v-for="(testimonial, i) in testimonials"
              :class="{ active: index === i }"
              :key="'testimonial_index' + i"
              class="slide--index"
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
import Visual from "@/components/Visual.vue";
export default {
  name: "Testimonials",
  components: { Visual },
  props: {
    testimonials: {
      type: Array,
      default: function() {
        return [];
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
  mounted() {
    console.log("testimonial block is mounted");
  },
  methods: {
    change() {
      console.log(this.$refs.siema.currentSlide);
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
