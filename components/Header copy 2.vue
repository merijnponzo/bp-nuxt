<style lang="scss">
.nav {
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  mix-blend-mode: normal;
  align-items: flex-start;
  width: 100%;
  pointer-events: none;
}
.nav__underlay {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 0px;
  height: 100vh;
  background: #000;
  z-index: 1;
  opacity: 0;
  transition: 1s ease all;
  pointer-events: auto;
}
.nav__underlay.active {
  opacity: 0.3;
  width: 100vw;
  cursor: pointer;
}
.nav.active {
  .nav__burger {
    cursor: default;
  }
}
.nav:not(.blendmode) {
  .nav__logo {
    z-index: 2;
  }
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
  pointer-events: auto;
  svg {
    width: rfs(150px);
    display: block;
    path {
      fill: white;
    }
  }
}
.nav__close {
  width: rfs(3rem);
  height: rfs(3rem);
  top: rfs(2rem);
  right: rfs(2rem);
  position: fixed;
  background: transparent;
  cursor: pointer;
  border: none;
  padding: 0;
  position: fixed;
}
.nav__burger {
  width: 1.5rem;
  height: 2rem;
  pointer-events: auto;
  background: transparent;
  cursor: pointer;
  border: none;
  position: absolute;
  padding: 0;
  transform-origin: center center;
  top: 2rem;
  right: 2rem;
  z-index: 2;
  span {
    width: 3px;
    height: 100%;
    display: block;
    background: white;
    position: absolute;
    top: 0px;
  }
}

button.nav__burger:focus,
.nav__logo.button:focus {
  outline: none;
  box-shadow: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
}

//inner
.sq__2--buttonwrap {
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: calc(50% - (2rem) / 2);
  top: 1rem;
  opacity: 0;
}
.sq__4,
.sq__5 {
  width: 100%;
  height: rfs(5px);
  position: absolute;
  background: white;
  top: 50%;
  right: 50%;
  transform-origin: center center;
}

//ACTIVE STATE
.nav--content {
  .sq__2--buttonwrap {
    opacity: 1;
    z-index: 1;
  }
  .sq__4 {
    transform: rotate(45deg);
  }
  .sq__5 {
    transform: rotate(-45deg);
  }
  .nav__menu {
    opacity: 1;
    transform: translateY(0px);
  }
  .nav__address {
    opacity: 1;
    transform: translateY(0px);
  }
}
.nav__menu {
  padding: rfs(2rem);
  padding-bottom: rfs(5rem);
  display: flex;
  height: calc(100% - 100px);
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  //transition:0.5s ease all;
  opacity: 0;
  text-align: left;
  transform: translateY(100px);
  a {
    font-family: var(--productive-1);
    font-size: rfs(55px);
    padding: rfs(0.5rem);
    padding-left: 0px;
    padding-right: 0px;
    position: relative;
    .ico-i_right:before {
      transform: scale(0, 0);
      width: 0px;
      transition: 0.3s ease all;
    }
  }
  a:hover {
    .ico-i_right:before {
      width: rfs(30px);
      transform: scale(0.66, 0.66) translateY(0.66rem);
    }
  }
  p,
  hr {
    //padding-left:rfs(0.5rem);
  }
}
hr {
   border: none;
  height: 2px;
  background:black;
}
.nav__address {
  display: flex;
  height: calc(100% - 100px);
  padding: rfs(2rem);
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  transition: 0.5s ease all;
  opacity: 0;
  text-align: left;
  transition-delay: 0.2s;
  transform: translateY(100px);
  .fs__r {
    white-space: pre-line;
  }
}
.nav__slogan {
  max-width: 2550px;
  opacity: 0;
  height: 0px;
}
.nav__address--wrap {
  height: 0px;
  opacity: 0;
}
.nav__address--mobile {
  transform: rotate(90deg);
  white-space: nowrap;
  z-index: 1;
  align-self: center;
  cursor: pointer;
  position: relative;
  font-family: var(--productive-1);
}
.nav__address--mobile-left {
  align-self: flex-start !important;
}

@include min-large() {
  .nav__address--mobile {
    display: none;
  }
  .nav__slogan {
    opacity: 1;
    max-width: 330px;
    height: 20vh;
  }
  .nav__address--wrap {
    opacity: 1;
    height: 40vh;
  }
  .nav__address {
    height: 100%;
  }
  .nav__logo {
    top: 0.5rem;
    left: 1rem;
    svg {
      width: 10rem;
    }
  }
  .nav__burger {
    top: 2rem;
    right: 3rem;
    width: 2rem;
    height: 3rem;
    span {
      width: 5px;
    }
  }
  .nav__menu {
    height: 100%;
    a {
      white-space: nowrap;
      padding: rfs(0.25rem);
    }
  }
}
.fs__b {
  margin-top: rfs(0.5rem);
  margin-bottom: rfs(0.5rem);
}
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
</style>
<template>
  <header
    :class="{
      active: active,
      'nav--content': activeContentAnim,
      blendmode: blendmode
    }"
    data-state="fixed"
  >
    <button class="nav__logo">
      <template v-if="$route.params.project">
        <router-link to="/work"><Logo class="active"/></router-link>
      </template>
      <template v-else>
        <router-link to="/"><Logo /></router-link>
      </template>
    </button>
    <button class="nav__burger" @click="navIn()">
      <span class="sq__1">
        <template v-if="activeContent">
          <nav class="nav__menu">
            <p class="fs__b">BURO PONZO</p>
            <template v-for="(infoItem, i) in getInfoNav">
              <p-link
                @click.native="navOut()"
                :meta="infoItem"
                :key="'info-nav' + i"
                ><i class="ico-i_right"></i>
                {{ $t(infoItem.name) }}
              </p-link>
            </template>
            <hr />
            <p class="fs__b">{{ $t("diensten") }}</p>
            <template v-for="(dienstItem, s) in getDienstenNav">
              <p-link
                @click.native="navOut()"
                :meta="dienstItem"
                :key="'dienst-nav' + s"
                ><i class="ico-i_right"></i>
                {{ $t(dienstItem.name) }}
              </p-link>
            </template>
          </nav>
        </template>
      </span>
      <span class="sq__2">
        <template v-if="activeContent">
          <div class="sq__2--buttonwrap">
            <button class="nav__close" @click.stop="navOut()">
              <span class="sq__4"></span>
              <span class="sq__5"></span>
            </button>
          </div>
          <div class="nav__address">
            <div
              class="nav__address--mobile"
              :class="{ 'nav__address--mobile-left': mobileLeft }"
              @click="navSubToggle()"
            >
              <template v-if="!navSub">Say Hi!</template>
              <template v-else>&larr; {{ $t("tonav") }}</template>
            </div>
            <div class="nav__address--wrap">
              <p class="fs__b">{{ $t("contact") }}</p>
              <p class="fs__r" v-html="getContactNav"></p>
            </div>
            <p class="fs__t nav__slogan">{{ getSlogan }}</p>
          </div>
        </template>
      </span>
      <span class="sq__3"></span>
    </button>
    <div
      class="nav__underlay"
      :class="{ active: activeContentAnim }"
      @click="navOut()"
    ></div>
  </header>
</template>

<script>
import Logo from "@/components/Logo.vue";
import contenthelper from "@/mixins/contenthelper.js";
import Vue from "vue";
import VueAnime from "vue-animejs";
import { mapGetters } from 'vuex'
Vue.use(VueAnime);

export default {
  name: "Header",
  mixins: [contenthelper],
  components: { Logo },
  data: function() {
    return {
      active: false,
      activeContent: false,
      activeContentAnim: false,
      direction: "in",
      tl: null,
      navSub: false,
      blendmode: true,
      mobileLeft: false
    };
  },
  computed: {
    ...mapGetters([
      'getContactNav',
      'getContact',
      'getInfoNav',
      'getDienstenNav',
      'getSlogan'
    ])
  },
  mounted() {
    this.$anime.set(".nav__burger", {
      rotate: 90
    });
    this.$anime.set(".sq__1", {
      right: "0%",
      height: "100%"
    });
    this.$anime.set(".sq__2", {
      right: "50%",
      height: "100%"
    });
    this.$anime.set(".sq__3", {
      right: "100%",
      height: "100%"
    });
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      if (this.activeContent) {
        this.navOut();
      }
    },
    displayIn() {
      if (!this.activeContent) {
        this.activeContent = true;
        // trigger class
        setTimeout(() => {
          this.activeContentAnim = true;
        }, 500);
      }
    },
    displayOut() {
      if (this.activeContent) {
        this.activeContentAnim = false;
        this.activeContent = false;
      }
    },
    displayDoneOut() {
      this.active = false;
    },
    blendOut() {
      this.blendmode = false;
    },
    blendIn() {
      this.blendmode = true;
    },
    navIn() {
      if (!this.active) {
        this.active = true;
        this.direction = "in";
        // pass function
        const func1 = this.displayIn;
        const func2 = this.blendOut;
        this.tl = this.$anime.timeline({
          easing: "easeInOutCirc",
          duration: 400
        });
        let navWidth = "80vw";
        let whiteWidth = 70;
        let blackWidth = 30;
        let burgerWidth = "2rem";
        let burgerHeight = "2rem";

        if (window.innerWidth < window.innerHeight) {
          navWidth = "100vw";
          blackWidth = 10;
          whiteWidth = 90;
          burgerWidth = "1.5rem";
          burgerHeight = "2rem";
        }
        if (window.innerWidth < 640) {
          navWidth = "100vw";
          blackWidth = 20;
          whiteWidth = 80;
          burgerWidth = "2rem";
          burgerHeight = "3rem";
        }
        this.tl.update = function(anim) {
          if (anim.progress > 70) {
            func1();
            func2();
          }
        };
        this.tl
          .add({
            targets: ".nav__burger",
            rotate: "0deg",
            top: 0,
            right: 0,
            width: burgerWidth,
            height: burgerHeight
          })
          .add(
            {
              targets: ".sq__1, .sq__2, .sq__3",
              right: "0%",
              height: "100%",
              width: "5px"
            },
            "-=150"
          )
          .add(
            {
              targets: ".nav__burger",
              width: navWidth,
              height: "100vh"
            },
            "-=150"
          )
          // black
          .add({
            targets: ".sq__2",
            width: blackWidth + "%",
            backgroundColor: "#000",
            color: "#fff"
          })
          // white
          .add(
            {
              targets: ".sq__1",
              width: whiteWidth + "%",
              right: blackWidth + "%"
            },
            "-=400"
          );
      }
      this.tl.finished.then(this.displayDoneIn);
    },
    navOut() {
      const func1 = this.displayOut;
      const func2 = this.blendIn;
      this.tl.update = function(anim) {
        if (anim.progress < 70) {
          func1();
        }
        if (anim.progress < 20) {
          func2();
        }
      };
      this.tl.reverse();
      this.tl.play();
      this.tl.finished.then(this.displayDoneOut);
    },
    // SUB NAV MOBILE
    navSubToggle() {
      !this.navSub ? (this.navSub = 1) : (this.navSub = 0);
      if (this.navSub) {
        this.$anime.set(".nav__address--mobile", {
          rotate: function() {
            return 90;
          },
          translateX: function() {
            return 0;
          }
        });
        this.$anime.set(".nav__address--wrap", {
          height: function() {
            return 0;
          }
        });
      }
      if (this.navSub) {
        this.tlSub = this.$anime.timeline({
          easing: "easeOutSine",
          duration: 600
        });
        this.mobileLeft = true;
        this.tlSub
          .add({
            targets: ".sq__2",
            width: "100%"
          })
          .add(
            {
              targets: ".nav__address--mobile",
              rotate: "0deg",
              paddingRight: "0px"
            },
            "-=600"
          )
          .add(
            {
              targets: ".nav__address--wrap",
              height: "60vh",
              opacity: 1,
              padding: "1rem"
            },
            "-=600"
          )
          .add(
            {
              targets: ".nav__slogan",
              padding: "1rem",
              height: "12vh",
              opacity: 1
            },
            "-=600"
          );
      } else {
        this.tlSub.reverse();
        this.tlSub.play();
        //reset flexbox align left to center
        setTimeout(() => {
          this.mobileLeft = false;
        }, 600);
      }
    }
  }
};
</script>
