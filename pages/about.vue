<style lang="scss">
.about__content {
  z-index: 2;
  width: 100%;
  position: relative;
  padding-top: rfs(6rem);
}
.about__intro {
  // background: linear-gradient(-180deg, rgba(0,0,0,1) 64%, rgba(34,34,34,1) 100%);
  background: black;
  background: url("~assets/images/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: bottom;
  z-index: 3;
  position: relative;

  video {
    height: auto;
    width: 100%;
  }
}

.member {
  .box {
    margin-top: rfs(1rem);
  }
  .fs__a {
    margin-bottom: 2px;
  }
}
.stagger-container {
  overflow: hidden;
}
.about__cta {
  width: 100%;
  z-index: 2;
  position: relative;
  background: #ffff;
}
.about__title {
  transform: translateY(2rem);
  z-index: 3;
  color: white;
  mix-blend-mode: exclusion;
  position: absolute;
  bottom: 0px;
}
.dienst__expertises {
  padding-bottom: rfs(5rem);
}
.dienst__expertises--expertises {
  margin-top: rfs(3rem);
  padding-bottom: rfs(6rem);
  ul {
    padding-left: rfs(1rem);
    border-left: 1px solid var(--color-bg);
  }
}
@include max-medium() {
  .comp__diensten--visual,
  .member {
    margin-top: rfs(3rem);
  }
}
@include min-medium() {
  .about__title {
    transform: translateY(2rem);
  }
}
@include min-large() {
  .about__title {
    transform: translateY(3rem);
  }
  .dienst__expertises--expertises {
    margin-top: rfs(6rem);
    min-height: 100px;
  }
  .comp__diensten {
    .fs__h {
      max-width: 550px;
    }
  }
  .stagger--absolute {
    width: 100%;
    height: 600px;
    overflow: hidden;
    position: absolute;
  }
}
</style>
<template>
  <div class="about" v-if="content">
    <section class="about__intro">
      <div class="wrap gut--0">
        <div class="row">
          <div class="col col-12">
            <VideoPlayer
              outer=""
              inner=""
              ratio="_"
              :desktop="content.meta.headervideodesktop"
              :mobile="content.meta.headervideomobile"
            />
            <h1 class="chapter about__title">{{ $t("overbp") }}</h1>
          </div>
        </div>
      </div>
    </section>
    <section class="about__content" data-theme="two">
      <div class="wrap">
        <div class="row meta--description skrp" v-view.once>
          <div class="col col-4 col--u-6">
            <p-meta
              tagclass="fs__s xl"
              tag="p"
              :meta="content.meta.who"
              field="textfield"
            />
          </div>
          <div class="col col-8 col--u-6">
            <p-meta
              tagclass="fs__r xl mwid--750"
              tag="p"
              :meta="content.meta.who_long"
              field="textarea"
            />
          </div>
        </div>
      </div>
      <!-- what -->
      <div class="wrap space--2">
        <div class="row meta--description skrp" v-view.once>
          <div class="col col-4 col--u-6">
            <p-meta
              tagclass="fs__r xl"
              tag="p"
              :meta="content.meta.what"
              field="textfield"
            />
          </div>
          <div class="col col-8 col--u-6">
            <p-meta
              tagclass="fs__r xl mwid--750"
              tag="p"
              :meta="content.meta.what_long"
              field="textarea"
            />
          </div>
        </div>
      </div>
      <!-- visual groot -->
      <div class="wrap space--2">
        <div class="row">
          <h1 class="chapter">Meet the team</h1>
          <div class="col col-12 space--3">
            <Revised
              :flexcontent="content.meta.teamvisual"
              defaultnumber="20"
            />
          </div>
          <div class="col col-4 col--u-6"></div>
          <div class="col col-8 col--u-6 meta--description skrp" v-view.once>
            <p-meta
              tagclass="fs__r xl mwid--750"
              tag="p"
              :meta="content.meta.teamsamenvatting"
              field="textarea"
            />
          </div>
        </div>
      </div>
      <!-- members -->
      <div class="wrap space--3">
        <div class="row">
          <div
            class="col member col-4 col--sm-6"
            v-for="(member, m) in content.meta.members"
            :key="'members' + m"
          >
            <Visual ratio="ratio--3x4" :visual="member.visual" />
            <div class="box pad--0">
              <h4 class="fs__a">{{ member.naam }}</h4>
              <p class="fs__m">{{ member.functie }}</p>
              <p-meta
                tagclass="fs__r xs"
                tag="p"
                :meta="member"
                field="textarea"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- diensten -->
      <Diensten :diensten="content.meta.diensten" />
      <!-- netwerk -->
      <div class="wrap space--2 dienst__expertises">
        <div class="row stagger-container">
          <div class="col col-4 col--u-6 meta--description skrp" v-view.once>
            <p-meta
              tagclass="fs__r xl"
              tag="p"
              :meta="content.meta.netwerk"
              field="textfield"
            />
            <Staggergrid class="stagger--absolute" />
          </div>
          <div class="col col-8 col--u-6">
            <p-meta
              tagclass="fs__r xl mwid--750"
              tag="p"
              :meta="content.meta.netwerk_long"
              field="textarea"
            />
          </div>
          <div class="col col-4"></div>
          <div class="col col-8">
            <div class="split--l-6 split--m-6 dienst__expertises--expertises">
              <ul v-for="(expertiseCol, c) in 3" :key="'expertise__ul' + c">
                <template
                  v-for="(expertise, e) in content.meta.netwerk_expertise"
                >
                  <li v-if="e % 2 === c" :key="'expertise' + e">
                    <p-meta
                      tagclass="fs__s"
                      tag="p"
                      :meta="expertise"
                      field="textfield"
                    />
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about__cta">
      <InfoVideo
        gutter="gut--u-5"
        cta="contactop"
        :info="content.meta.meerweten"
      />
      <!-- 
      <Morerows class="push--2" :rows="content.meta.meer_posts" />
      -->
    </section>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";
import Visual from "@/components/Visual.vue";
import Diensten from "@/components/Diensten.vue";
import InfoVideo from "@/components/InfoVideoblock.vue";
import Morerows from "@/components/Morerows.vue";
import Revised from "@/components/flex/Revised.vue";
// contenthelpers
import contenthelpers from "@/mixins/contenthelper.js";
import Staggergrid from "@/components/Staggergrid.vue";

export default {
  name: "Page",
  components: { Visual, Diensten, InfoVideo, Morerows, Staggergrid, Revised },
  mixins: [contenthelpers],
  data: function() {
    return {
      content: false
    };
  },
  asyncData({ app, params, store, $axios }) {
    const url = `${process.env.wpApi}/pages?slug=about`;
    return $axios.get(url).then(response => {
      return {
        content: response.data[0]
      };
    });
  }
};
</script>
