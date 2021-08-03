<style lang="scss" scoped>
.chapter {
  margin-bottom: 0px;
  max-width: 1200px;
}
.row--visuals {
  .col {
    margin-bottom: rfs(1.5rem);
  }
}
.project__title {
  padding-top: rfs(1rem);
  padding-bottom: rfs(1rem);
}

.project__comp {
  .img-wrap {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .video {
    background-color: rgba(0, 0, 0, 0.5);
  }
  &.wallpaper {
    .img-wrap {
      background-color: transparent;
    }
    .video {
      background-color: transparent;
    }
  }
}

.work__paginate {
  margin-top: rfs(50px);
}
.work__content {
  background: white;
  position: relative;
  z-index: 2;
}
.fs__b {
  color: #7d7d7d;
  font-family: var(--productive-1);
}
.term {
  font-size: 24px;
  font-family: var(--productive-1);
}
.slide {
  width: 100%;
}
.flex--0 {
  margin-top: 0px !important;
}
.chapter.fs__h {
  margin-top: rfs(150px);
}

@include max-small() {
  .terms__wrap {
    display: none;
    li {
      font-size: 16px;
    }
    .fs__b {
      margin-bottom: 0px;
    }
    margin-bottom: rfs(2rem);
  }
  .terms__wrap.active {
    display: block;
  }
  .nav__terms {
    margin-top: 10px;
    width: 100%;
    display: block;
    text-align: right;
  }
  .project__title {
    margin-left: 0px;
    font-size: 34px;
  }
}
@include min-medium() {
  .nav__terms {
    display: none;
  }
  .terms__wrap {
    display: flex;
  }
  .chapter.fs__h {
    margin-top: rfs(100px);
  }
  .work__paginate {
    padding-left: $work-single-indent;
  }
}
</style>
<template>
  <section v-if="content">
    <div class="work__head">
      <section>
        <div class="wrap">
          <div class="row">
            <h1
              class="chapter project__title fs__h space--2"
              v-html="content.title.rendered"
            />
          </div>
        </div>
        <div class="wrap">
          <div class="row">
            <div class="col col-12" v-if="content.meta.banner">
              <BannerWork
                :banner="content.meta.banner"
                :key="'banner' + content.id"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="work__content">
      <div class="wrap">
        <div class="row">
          <div class="col col-12">
            <a
              v-if="!mobile"
              @click="mobile ? (mobile = false) : (mobile = true)"
              class="nav__terms"
              >&#8594; {{ $t("meertal") }}</a
            >
          </div>
          <div class="col col-12 space--1">
            <ul
              class="terms split--l-3 split--sm-6 gut terms__wrap"
              :class="{ active: mobile }"
            >
              <ol>
                <li class="fs__b">{{ $t("dienst") }}</li>
                <li
                  v-for="(term, t) in getChildTerms(content.meta.terms, 5)"
                  :key="'termdiens' + t"
                  class="term"
                  v-html="term.name"
                ></li>
              </ol>
              <ol>
                <li class="fs__b">{{ $t("expertise") }}</li>
                <li
                  v-for="(term, t) in getChildTerms(content.meta.terms, 6)"
                  :key="'termexps' + t"
                  class="term"
                  v-html="term.name"
                ></li>
              </ol>
              <ol>
                <li class="fs__b">{{ $t("client") }}</li>
                <li class="term">{{ content.meta.client }}</li>
              </ol>
              <ol>
                <li class="fs__b">{{ $t("branche") }}</li>
                <li
                  v-for="(term, t) in getChildTerms(content.meta.terms, 9)"
                  :key="'termbranc' + t"
                  class="term"
                  v-html="term.name"
                ></li>
              </ol>
            </ul>
          </div>
        </div>
      </div>
      <!-- dynamic flex content -->
      <template v-for="(flexcontent, s) in content.meta.projectcontent">
        <template v-if="flexcontent.acf_fc_layout">
          <component
            class="project__comp skrp space--4"
            :class="`flex--${s}`"
            v-view.once
            :style="{ '--tile-color': content.meta.tilecolor }"
            v-bind:is="`${flexcontent.acf_fc_layout}Flex`"
            :flexcontent="flexcontent"
            :index="s"
            :key="'comp' + s + '_' + content.id"
          >
          </component>
        </template>
      </template>
      <!-- meer weten -->
      <div class="wrap work__knowmore">
        <div class="row">
          <h2 class="chapter fs__h">{{ $t("meerweten") }}</h2>
          <div class="col col-12 space--3">
            <div class="split--fl">
              <span>
                <p-link archive="true" class="bp--prv xl">
                  <p class="desktop">Terug naar&nbsp;</p>
                  <p>{{ $t("work") }}</p>
                </p-link>
              </span>
              <span>
                <router-link class="bp--nxt xl" to="/contact">
                  <p class="desktop">Naar&nbsp;</p>
                  <p>{{ $t("contact") }}</p></router-link
                >
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- meer weten-->
      <!-- next prev -->
      <div class="wrap gut--0 work__paginate">
        <div class="row">
          <div class="bp--tile col col-6 col--mm-6">
            <template v-if="content.meta.previous">
              <p-link
                :url="content.meta.previous.slug"
                class="bp--prev fs__s xs"
              >
                &#8592; {{ content.meta.previous.post_title }}
              </p-link>
              <Visual
                :visual="content.meta.previous.visual"
                :key="'visual' + content.id"
              />
            </template>
          </div>
          <div class="bp--tile col col-6 col--mm-6">
            <template v-if="content.meta.next">
              <p-link :url="content.meta.next.slug" class="bp--next fs__s xs">
                &#8594; {{ content.meta.next.post_title }}
              </p-link>
              <Visual
                :visual="content.meta.next.visual"
                :key="'visual' + content.id"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// contenthelpers
import BannerWork from "@/components/BannerWork.vue";
import visualsFlex from "@/components/flex/Visuals.vue";
import visualsinstagramFlex from "@/components/flex/Visualsrellax.vue";
import visualsingleFlex from "@/components/flex/Visualsingle.vue";
import revisedFlex from "@/components/flex/Revised.vue";
import visualsportraitFlex from "@/components/flex/Visualsportrait.vue";
import sliderFlex from "@/components/flex/Slider.vue";
import omschrijvingFlex from "@/components/flex/Omschrijving.vue";
import movieFlex from "@/components/flex/Movie.vue";
import Visual from "@/components/Visual.vue";

export default {
  name: "WorkSingle",
  scrollToTop: true,
  transition: "default",
  components: {
    BannerWork,
    movieFlex,
    sliderFlex,
    omschrijvingFlex,
    visualsFlex,
    visualsinstagramFlex,
    visualsingleFlex,
    revisedFlex,
    visualsportraitFlex,
    Visual
  },
  middleware: "delay",
  data() {
    return {
      content: null,
      mobile: false
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  asyncData({ app, params, store, $axios }) {
    const slug = params.project.toLowerCase();
    const url = `${process.env.wpApi}/work?slug=${slug}`;
    return $axios.get(url).then(response => {
      store.dispatch("doImageTransition", { classname: "after" });
      return {
        content: response.data[0]
      };
    });
  }
};
</script>
