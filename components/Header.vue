<style lang="scss">
.nav:not(.blendmode) {
  .nav__logo {
    z-index: 2;
    opacity: 0;
  }
  .nav__content {
    height: 100%;
  }
}
.no-scroll {
  #__nuxt {
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    position: absolute;
    width: 100%;
  }
}
// logo
.logo--bp {
  transform: translateX(-25%);
  transition: 1s ease all;
  &.active {
    transform: translateX(0px);
    .logo--arrow {
      transform: scale(1, 1);
    }
    .logo--square {
      transform: scale(1, 1);
    }
  }
}
.logo--arrow {
  transform: scale(0, 0);
  transform-origin: center left;
  transition: 1s ease all;
}
.logo--square {
  transform: scale(0, 0);
  transform-origin: center left;
  transition: 1s ease all;
}

.nav.blendmode {
  mix-blend-mode: exclusion;
}
.nav__logo {
  background: none;
  border: none;
  padding: 0;
  padding-right: 0px;
  position: fixed;
  top: rfs(1rem);
  left: rfs(1rem);
  opacity: 1;
  transition: 1s ease all;
  pointer-events: auto;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  @include noselect();
  svg {
    width: rfs(150px);
    display: block;
    path {
      fill: white;
    }
  }
}
.nav__burger {
  width: rfs(3rem);
  height: rfs(2rem);
  pointer-events: auto;
  background: transparent;
  cursor: pointer;
  border: none;
  position: absolute;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  transform-origin: center center;
  top: rfs(3rem);
  right: rfs(3rem);
  z-index: 2;
  outline: none;
  @include noselect();
  &:before {
    content: "";
    width: rfs(6rem);
    height: rfs(6rem);
    position: absolute;
    top: rfs(-1rem);
    left: rfs(-1rem);
  }
}
.sq {
  width: 100%;
  height: 2px;
  display: block;
  background: white;
  position: absolute;
  top: 0px;
}
.sq:nth-child(2) {
  top: 50%;
}
.sq:nth-child(3) {
  top: 100%;
}
.sq__cross {
  width: 0%;
  height: 2px;
  display: block;
  background: white;
  position: absolute;
  top: 50%;
  transform-origin: center center;
  transform: rotate(-45deg);
}
.sq__cross:last-child {
  transform: rotate(45deg);
}
.nav__content {
  position: fixed;
  right: 0px;
  width: 100%;
  height: 0px;
  z-index: 1;
  div[class*="panel__"] {
    position: absolute;
  }
}

//MENU
.panel__2 {
  padding: rfs(2rem);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  color: white;
  //transition:0.5s ease all;
  a {
    font-family: var(--productive-1);
    font-size: rfs(40px);
    padding-left: 0px;
    padding-right: 0px;
    position: relative;
    color: white;
    display: block;
    padding-top: rfs(0.25rem);
    padding-bottom: rfs(0.25rem);
    transition: 0.3s ease padding-left;
    i {
      transform: scale(0, 0);
      width: 0px;
      transition: 0.3s ease all;
      position: absolute;
    }
  }
  a:hover {
    padding-left: 1rem;
    i {
      transform: scale(0.66, 0.66) translateX(-1.5rem);
    }
  }
  p,
  hr {
    //padding-left:rfs(0.5rem);
  }
}
.panel__1,
.panel__2 {
  right: -100%;
}
.panel__1 {
  width: 100%;
  padding-left: rfs(2rem);
  padding-right: rfs(2rem);
  padding-bottom: rfs(2rem);
  height: 100vh;
  bottom: 0px;
}
.panel__2 {
  height: 100%;
  top: 0px;
  .fs__b {
    width: 100%;
    display: block;
    margin-top: rfs(1rem);
    margin-bottom: rfs(0.25rem);
  }
}
.nav__address {
  height: 100%;
  color: white;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  br {
    height: 0px;
  }
  .fs__b {
    font-size: var(--fs-btn);
  }
  .fs__r {
    display: flex;
    span {
      display: block;
      width: calc(50% - 0.5rem);
      margin-right: 0.5rem;
    }
  }
  .nav__slogan {
    display: flex;
    padding-bottom: 1rem;
    span:nth-child(1) {
      margin-right: rfs(1rem);
    }
  }
  .fs__t {
    margin-top: rfs(1rem);
  }
}
.nav__link {
  opacity: 0;
  transform: translateY(75px);
  i {
    width: 0px;
  }
}

.header__logo {
  width: rfs(200px);
  margin-bottom: rfs(2rem);
  path {
    fill: white;
  }
}
.nav__underlay {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: #000;
  z-index: 0;
  opacity: 0.3;
  pointer-events: cursor;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
header {
  .fs__b {
    color: #ccc;
  }
}
@include max-medium() {
  .panel__1 {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 25%,
      rgba(34, 34, 34, 1) 100%
    );
  }
  .panel__2 {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 25%,
      rgba(34, 34, 34, 1) 100%
    );
    height: calc(100% - 200px);
    padding-bottom: 200px;
  }
}
@include min-medium() {
  .panel__1 {
    width: 40%;
    right: -40%;
    background-color: #333;
    z-index: 3;
    height: 100%;
    padding-bottom: rfs(5rem);
    background: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 1) 25%,
      rgba(34, 34, 34, 1) 100%
    );
  }
  .panel__2 {
    background: black;
    right: -100%;
    padding-right: 40%;
    width: 100%;
    z-index: 2;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-bottom: rfs(5rem);
    a {
      font-size: rfs(42px);
      padding-bottom: rfs(0.5rem);
      padding-top: rfs(0.5rem);
    }
    a:hover {
      padding-left: 3rem;
      i {
        transform: scale(0.5, 0.5) translateX(-3rem);
      }
    }
  }
  .nav__burger {
    &:before {
      content: "";
      width: rfs(4rem);
      height: rfs(4rem);
      position: absolute;
      top: rfs(-1rem);
      left: rfs(-1rem);
    }
  }
  .nav__content {
    width: 90%;
  }
  .sq,
  .sq__cross {
    height: 3px;
  }
  .header__logo {
    padding-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .nav__address {
    .fs__r {
      margin-bottom: 3px;
    }
    .fs__r {
      display: block;
      span {
        width: 100%;
        display: block;
      }
    }
    .nav__slogan {
      display: block;
      padding-bottom: 0rem;
      margin-top: 3.5rem;
      span {
        display: block;
        width: 100%;
      }
    }
  }
}
@include min-wide() {
  .header__logo {
    margin-bottom: 3rem;
    width: 250px;
  }
  .panel__2 {
    padding-left: 5rem;
    a {
      font-size: rfs(52px);
      padding: rfs(0.5rem);
    }
    justify-content: flex-end;
    a:hover {
      padding-left: 3rem;
      i {
        transform: scale(0.5, 0.5) translateX(-4rem);
      }
    }
  }
  .nav__address {
    .fs__r {
      font-size: 28px;
    }
    .fs__t {
      margin-top: 9rem;
    }
  }
  .nav__content {
    width: 80%;
  }
}
</style>
<template>
  <header :class="{ blendmode: blendmode }" data-state="fixed">
    <button class="nav__logo">
      <template v-if="$route.params.project">
        <router-link to="/work"><Logo class="active"/></router-link>
      </template>
      <template v-else>
        <router-link to="/"><Logo /></router-link>
      </template>
    </button>
    <button class="nav__burger" @click="navToggle()">
      <span class="sq"></span>
      <span class="sq"></span>
      <span class="sq"></span>
      <span class="sq__cross"></span>
      <span class="sq__cross"></span>
    </button>
    <nav class="nav__content">
      <div class="panel__1">
        <div class="nav__address">
          <div>
            <p class="fs__b">{{ $t("contact") }}</p>
            <p class="fs__r" v-html="getContactNav"></p>
          </div>
          <p class="fs__t nav__slogan" v-html="getSlogan"></p>
        </div>
      </div>
      <div class="panel__2">
        <LogoFull class="header__logo" />
        <div class="nav__wrap">
          <p class="fs__b nav__link">{{ $t("bekijk") }}</p>
          <p-link
            v-for="(infoItem, i) in getInfoNav"
            :key="'info-nav' + i"
            @click.native="navOut()"
            :meta="infoItem"
            class="nav__link"
            ><i class="ico-i_right"></i>
            {{ $t(infoItem.name) }}
          </p-link>
          <p class="fs__b nav__link dienst">{{ $t("diensten") }}</p>
          <p-link
            v-for="(dienstItem, s) in getDienstenNav"
            :key="'dienst-nav' + s"
            @click.native="navOut()"
            :meta="dienstItem"
            class="nav__link"
            ><i class="ico-i_right"></i>
            {{ $t(dienstItem.name) }}
          </p-link>
        </div>
      </div>
    </nav>
    <transition name="fade">
      <div class="nav__underlay" v-show="!blendmode" @click="navOut()"></div>
    </transition>
  </header>
</template>
<script>
import LogoFull from "@/components/LogoFull.vue";
import Logo from "@/components/Logo.vue";
import contenthelper from "@/mixins/contenthelper.js";
import Vue from "vue";
import VueAnime from "vue-animejs";
import { mapGetters } from "vuex";
Vue.use(VueAnime);

export default {
  name: "Header",
  mixins: [contenthelper],
  components: { Logo, LogoFull },
  data: function() {
    return {
      blendmode: true,
      navBusy: false
    };
  },
  computed: {
    ...mapGetters([
      "getContactNav",
      "getContact",
      "getInfoNav",
      "getDienstenNav",
      "getSlogan"
    ])
  },
  mounted() {
    this.$anime.set(".nav__link", {
      translateY: "25px"
    });
  },
  methods: {
    navToggle() {
      if (this.blendmode && !this.navBusy) {
        this.blendmode = false;
        this.navBusy = true;
        document.querySelector("html").style.overflow = "hidden";
        this.$anime({
          targets: ".sq",
          width: 0,
          right: 0,
          duration: 800,
          easing: "easeOutSine",
          delay: this.$anime.stagger(50)
        });
        this.$anime({
          targets: ".sq__cross",
          width: "100%",
          duration: 500,
          easing: "easeOutSine",
          delay: 500
        });
        this.$anime.set(".panel__1", {
          right: "-100%",
          backgroundColor: "#333"
        });
        this.$anime.set(".panel__2", {
          right: "-100%"
        });
        this.$anime({
          targets: ".panel__1",
          right: 0,
          duration: 400,
          easing: "easeOutSine"
        });
        this.tl = this.$anime.timeline({
          easing: "easeOutSine",
          duration: 400,
          delay: 200
        });
        this.tl
          .add({
            targets: ".panel__2",
            right: "0%"
          })
          .add({
            targets: ".nav__link",
            opacity: 1,
            translateY: {
              value: 0,
              easing: "easeOutSine"
            },
            delay: this.$anime.stagger(100)
          });
        this.tl.finished.then(this.navUnbusy);
      } else {
        this.navOut();
      }
    },
    navOut() {
      if (!this.navBusy) {
        this.navBusy = true;
        this.tl.reverse();
        this.tl.play();
        this.tl.finished.then(this.blendIn);
        document.querySelector("html").style.overflow = "auto";
        this.$anime({
          targets: ".sq__cross",
          width: 0,
          duration: 500,
          easing: "spring(1, 80, 10, 0)"
        });
        this.$anime({
          targets: ".sq",
          width: "100%",
          delay: 500
        });
        this.$anime({
          targets: ".panel__1",
          right: "-100%",
          duration: 400,
          delay: 800,
          easing: "easeInSine"
        });
      }
    },
    blendIn() {
      this.blendmode = true;
      this.navBusy = false;
    },
    navUnbusy() {
      this.navBusy = false;
    }
  }
};
</script>
