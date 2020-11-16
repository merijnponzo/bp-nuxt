<style lang="scss" scoped>
.dienst__intro {
  padding-top: rfs(10rem);
}
.dienst__intro--text {
  padding-top: rfs(3rem);
  padding-bottom: rfs(3rem);
}

h1 {
  max-width: 400px;
  position: sticky;
  top: rfs(10rem);
  z-index: 3;
  color: white;
  mix-blend-mode: exclusion;
}
.dienst__intro--visual {
  padding-bottom: rfs(5rem);
  display: flex;
  z-index: 0;
  justify-content: space-between;
  flex-direction: column;
  .visual {
    z-index: 1;
  }
  .diensten--visual-1 {
    width: 60%;
    z-index: 5;
  }
  .diensten--visual-2 {
    width: 40%;
    align-self: flex-end;
    z-index: 6;
  }
  .element {
    transition: 1s ease all;
    transform: scale(0, 0);
  }
  &.view-in {
    .element {
      transform: scale(1, 1);
    }
  }
}

.bp--stagwrap {
  position: absolute;
  top: rfs(1rem);
  left: rfs(1rem);
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2;
}
.dienst__expertises {
  padding-top: rfs(8rem);
  padding-bottom: rfs(8rem);
  .fs__h {
    margin-top: rfs(3rem);
  }
}
.dienst__expertises--text {
  padding-top: rfs(3rem);
  padding-bottom: rfs(3rem);
}
.dienst__expertises--expertises {
  margin-top: rfs(3rem);
  ul {
    padding-left: rfs(1rem);
    border-left: 1px solid var(--color-bg);
  }
}
@include min-medium() {
  .bp--stagwrap {
    position: absolute;
    top: 25%;
    right: 5rem;
    left: auto;
    height: calc(100% + 20rem);
    max-width: 600px;
    overflow: hidden;
    z-index: 2;
  }
  .diensten--visual-2 {
    z-index: 1;
  }
  .dienst__expertises--text {
    padding-right: rfs(2rem);
  }
}
@include large-only() {
  .dienst__expertises--visual {
    margin-right: calc(-1 * (var(--page-margin) / 2));
    .visual {
      max-width: 480px;
      float: right;
    }
  }
}
@include min-large() {
  .dienst__intro--text {
    padding-top: 33.33vh;
    padding-bottom: rfs(6rem);
  }
  .dienst__intro--visual {
    // padding-right: $dienst-single-indent;
  }
  .dienst__expertises--visual {
    .visual {
      max-width: 600px;
      float: right;
    }
  }
  .dienst__expertises--text {
    display: flex;
    align-items: center;
    justify-content: center;
    .fs__s {
      max-width: 500px;
    }
  }
  .dienst__expertises--expertises {
    margin-top: rfs(6rem);
  }
}
</style>
<template>
  <div class="dienst" v-if="content">
    <section class="wrap dienst__intro">
      <div class="row">
        <div class="col col-6">
          <h1 v-html="content.title.rendered"></h1>
        </div>
        <div
          class="col col-6 dienst__intro--text meta--description skrp"
          v-view.once
        >
          <p-meta
            :meta="content.meta.intro"
            field="textarea"
            tagclass="fs__s"
            tag="p"
          />
        </div>
        <div class="col col-12 dienst__intro--visual" v-view.once>
          <Visual
            class="element diensten--visual-1"
            ratio="ratio--16x9"
            :visual="content.meta.intro.visual1"
          />
          <Visual
            class="element diensten--visual-2"
            ratio="ratio--16x9"
            :visual="content.meta.intro.visual2"
          />
          <div class="bp--stagwrap">
            <Staggergrid staggerclass="dienst" />
          </div>
        </div>
      </div>
    </section>
    <section class="dienst__expertises" data-theme="two">
      <div class="wrap gut--0">
        <div class="row">
          <div
            class="col col-6 col--m-6 dienst__expertises--text meta--description skrp"
            v-view.once
          >
            <p-meta
              :meta="content.meta.expertises"
              field="textarea"
              tagclass="fs__s"
              tag="p"
            />
          </div>
          <div class="col col-6 col--m-6 dienst__expertises--visual">
            <Visual
              ratio="ratio--3x4"
              :visual="content.meta.expertises.visual"
            />
          </div>
          <h2 class="fs__h xs chapter">{{ $t("ditiswatwekunnen") }}</h2>
          <div class="col col-12">
            <div class="split--l-4 split--m-4 dienst__expertises--expertises">
              <ul v-for="(expertiseCol, c) in 3" :key="'expertise__ul' + c">
                <template
                  v-for="(expertise, e) in content.meta.expertises.expertises"
                >
                  <li v-if="e % 3 === c" :key="'expertise' + e">
                    <p-meta
                      :meta="expertise"
                      field="textfield"
                      tagclass="fs__s"
                      tag="p"
                    />
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="dienst__highlights" v-if="content.meta.highlights">
      <Highlights gutter="gut--u-5" :highlights="content.meta.highlights" />
    </section>
    <section class="dienst__werkwijzen" v-if="content.meta.werkwijze">
      <Werkwijzen cta="contactop" :werkwijzen="content.meta.werkwijze" />
    </section>
    <section class="dienst__testimonial" v-if="content.meta.testimonial">
      <Testimonialblock :testimonial="content.meta.testimonial" />
    </section>
    <section class="dienst__logowall" v-if="content.meta.clients">
      <Logowall :clients="content.meta.clients" :smallmode="true">
        <hr class="chapter" />
      </Logowall>
    </section>
    <section class="dienst__contactop" v-if="content.meta.meerweten">
      <Meerweten :meerweten="content.meta.meerweten.meerweten" />
    </section>
  </div>
</template>

<script>
// contenthelpers
import contenthelpers from "@/mixins/contenthelper.js";
// import checkView from 'vue-check-view'
import Visual from "@/components/Visual.vue";
import Staggergrid from "@/components/Staggergrid.vue";
import Highlights from "@/components/Highlights.vue";
import Meerweten from "@/components/Meerwetenblock.vue";
import Testimonialblock from "@/components/Testimonialblock.vue";
import Werkwijzen from "@/components/Werkwijzen.vue";
import Logowall from "@/components/Logowall.vue";
// import Vue from 'vue'
// Vue.use(checkView)

export default {
  mixins: [contenthelpers],
  transition: "default",
  components: {
    Visual,
    Staggergrid,
    Highlights,
    Werkwijzen,
    Testimonialblock,
    Logowall,
    Meerweten
  },
  data() {
    return {
      content: null
    };
  },
  name: "DienstenSingle",
  asyncData({ app, params, store, $axios }) {
    const slug = params.slug.toLowerCase();
    const url = `${process.env.wpApi}/dienst?slug=${slug}`;
    return $axios.get(url).then(response => {
      return {
        content: response.data[0]
      };
    });
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>
