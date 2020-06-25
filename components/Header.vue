<style lang="scss">
  .nav{
    z-index:1000;
    display: flex;
    justify-content: space-between;
    mix-blend-mode: normal;
    align-items:flex-start;
    width:100%;
    pointer-events: none;
  }
  .nav__underlay{
    position:absolute;
    top:0px;
    left:0px;
    width:0px;
    height:100vh;
    background:#000;
    z-index:1;
    opacity:0;
    transition:1s ease all;
    pointer-events: auto;
  }
  .nav__underlay.active{
    opacity:0.3;
    width:100vw;
    cursor: pointer;
  }
  .nav.active{
    .nav__burger{
       cursor: default;
    }
  }
  .nav:not(.blendmode){
    .nav__logo{
     z-index:2;
    }
  }
  .nav.blendmode{
    mix-blend-mode: exclusion;
  }
  .nav__logo{
    background: none;
    border: none;
    padding: 0;
    padding-right:0px;
    position:absolute;
    top:rfs(1rem);
    left:calc(var(--page-margin) / 2);
    pointer-events: auto;
    svg{
      width:rfs(100px);
      display:block;
      path{
       fill:white;
      }
    }
  }
  .nav__close{
    width:rfs(75px);
    height:rfs(75px);
    background: transparent;
    cursor: pointer;
    border: none;
    padding: 0;
  }
  .nav__burger{
    width:2rem;
    height:3rem;
    pointer-events: auto;
    background: transparent;
    cursor: pointer;
    border: none;
    position:absolute;
    padding: 0;
    transform-origin: center center;
    top:rfs(1rem);
    right:calc(var(--row-pad) * var(--space-factor));
    z-index:2;
    span{
      width:rfs(5px);
      height:100%;
      display:block;
      background:white;
      position: absolute;
      top:0px;
    }
    .sq__1{
      right:0%;
    }
    .sq__2{
      right:50%;
    }
    .sq__3{
      right:100%;
    }
  }

  button.nav__burger:focus,
  .nav__logo.button:focus{
   outline:none;
    box-shadow: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  }

  //inner
  .sq__2--buttonwrap{
    width:rfs(50px);
    height:rfs(50px);
    position: absolute;
    right:1rem;
    top:1rem;
    opacity:0;

  }
  .sq__4, .sq__5{
    width:100%;
    height:rfs(5px);
    position:absolute;
    background: white;
    top:50%;
    right:50%;
    transform-origin: center center;
  }

  //ACTIVE STATE
  .nav--content{
    .sq__2--buttonwrap{
      opacity:1;
      z-index:1;
    }
    .sq__4{
      transform:rotate(45deg);
    }
    .sq__5{
      transform:rotate(-45deg);
    }
    .nav__menu{
      opacity:1;
      transform:translateY(0px);
    }
    .nav__address{
       opacity:1;
      transform:translateY(0px);
    }
  }
  .nav__menu{
    padding:rfs(2rem);
    padding-bottom:rfs(5rem);
    display:flex;
    height:100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    //transition:0.5s ease all;
    opacity:0;
    text-align:left;
    transform:translateY(100px);
    a{
      font-family:var(--productive-1);
      font-size:rfs(55px);
      padding:rfs(0.5rem);
    }
    p,hr{
      padding-left:rfs(0.5rem);
    }
  }
  .nav__address{
    display:flex;
    height:100%;
    padding:rfs(2rem);
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    transition:0.5s ease all;
    opacity:0;
    text-align:left;
    transition-delay: 0.2s;
    transform:translateY(100px);
    .fs__p{
      white-space: pre-line;
    }
  }
  .nav__slogan{
    max-width:2550px;
    opacity:0;
    height:0px;
  }
  .nav__address--wrap{
    height:0px;
    opacity:0;
  }
  .nav__address--mobile{
    transform:rotate(90deg);
    white-space:nowrap;
    align-self:center;
    z-index:1;
    cursor: pointer;
    position:relative;
    padding-right:3rem;
  }
  @include min-large(){
      .nav__address--mobile{
        display:none;
      }
      .nav__slogan{
        opacity:1;
        max-width:330px;
        height:20vh;
       }
      .nav__address--wrap{
        opacity: 1;
        height:40vh;
      }
      .nav__menu{
        a{
          white-space:nowrap;
        }
      }
  }
</style>
<template>
  <header :class="{'active':active, 'nav--content':activeContentAnim, 'blendmode':blendmode}" data-state="fixed">
    <button class="nav__logo">
    <router-link to="/"><Logo /></router-link>
    </button>
    <button class="nav__burger" @click="navIn()">
      <span class="sq__1">
        <template v-if="activeContent">
          <nav class="nav__menu">
            <p class="fs__b">BURO PONZO</p>
            <template v-for="(infoItem,i) in $store.getters.getInfoNav">
              <router-link @click.native="navOut()" :to="getLink(infoItem)" :key="'info-nav'+i">
                {{$t(infoItem.name)}}
              </router-link>
            </template>
            <hr/>
            <p class="fs__b">{{$t('diensten')}}</p>
            <template v-for="(dienstItem,s) in $store.getters.getDienstenNav">
            <router-link @click.native="navOut()" :to="getLink(dienstItem)" :key="'dienst-nav'+s">
                {{$t(dienstItem.name)}}
              </router-link>
            </template>
          </nav>
        </template>
      </span>
      <span class="sq__2">
        <template v-if="activeContent">
          <div class="sq__2--buttonwrap" >
              <button class="nav__close" @click.stop="navOut()">
                  <span class="sq__4"></span>
                  <span class="sq__5"></span>
              </button>
          </div>
          <div class="nav__address">
            <div class="nav__address--mobile" @click="navSubToggle()">
              <template v-if="!navSub">Say Hi!</template>
              <template v-else>&larr; Say Bye!</template>
            </div>
            <div class="nav__address--wrap">
              <p class="fs__b">{{$t('contact')}} </p>
              <p class="fs__p xl">{{$store.getters.getAddress}}</p>
            </div>
            <p class="fs__t nav__slogan">{{$store.getters.getSlogan}}</p>
          </div>
        </template>
      </span>
      <span class="sq__3"></span>
    </button>
    <div class="nav__underlay" :class="{'active':activeContentAnim}" @click="navOut()"></div>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue'
import contenthelper from '@/mixins/contenthelper.js'
import Vue from 'vue'
import VueAnime from 'vue-animejs'
Vue.use(VueAnime)

export default {
  name: 'Header',
  mixins: [contenthelper],
  components: { Logo },
  data: function () {
    return {
      active: false,
      activeContent: false,
      activeContentAnim: false,
      direction: 'in',
      tl: null,
      navSub: false,
      blendmode: true
    }
  },
  mounted () {
    this.$anime.set('.nav__burger', {
      rotate: function () { return 90 }
    })
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      if (this.activeContent) {
        this.navOut()
      }
    },
    displayIn () {
      if (!this.activeContent) {
        this.activeContent = true
        // trigger class
        setTimeout(() => {
          this.activeContentAnim = true
        }, 500)
      }
    },
    displayOut () {
      if (this.activeContent) {
        this.activeContentAnim = false
        this.activeContent = false
      }
    },
    displayDoneOut () {
      this.active = false
    },
    blendOut () {
      this.blendmode = false
    },
    blendIn () {
      this.blendmode = true
    },
    navIn () {
      if (!this.active) {
        this.active = true
        this.direction = 'in'
        // pass function
        const func1 = this.displayIn
        const func2 = this.blendOut
        this.tl = this.$anime.timeline({
          easing: 'easeInOutCirc',
          duration: 425
        })
        let navWidth = '80vw'
        let whiteWidth = 70
        let blackWidth = 30
        if (window.innerWidth < window.innerHeight) {
          navWidth = '100vw'
          blackWidth = 15
          whiteWidth = 85
        }
        this.tl.update = function (anim) {
          if (anim.progress > 70) {
            func1()
            func2()
          }
        }
        this.tl
          .add({
            targets: '.nav__burger',
            rotate: '360deg',
            top: 0,
            right: 0
          })
          .add({
            targets: '.sq__1, .sq__2, .sq__3',
            right: '0%',
            height: '100%',
            width: '5px'
          }, '-=150')
          .add({
            targets: '.nav__burger',
            width: navWidth,
            height: '100vh'
          }, '-=150')
          // black
          .add({
            targets: '.sq__2',
            width: blackWidth + '%',
            backgroundColor: '#000',
            color: '#fff'
          })
          // white
          .add({
            targets: '.sq__1',
            width: whiteWidth + '%',
            right: blackWidth + '%'
          }, '-=400')
      }
      this.tl.finished.then(this.displayDoneIn)
    },
    navOut () {
      const func1 = this.displayOut
      const func2 = this.blendIn
      this.tl.update = function (anim) {
        if (anim.progress < 70) {
          func1()
        }
        if (anim.progress < 20) {
          func2()
        }
      }
      this.tl.reverse()
      this.tl.play()
      this.tl.finished.then(this.displayDoneOut)
    },
    // SUB NAV MOBILE
    navSubToggle () {
      (!this.navSub) ? this.navSub = 1 : this.navSub = 0
      if (this.navSub) {
        this.$anime.set('.nav__address--mobile', {
          rotate: function () { return 90 },
          translateX: function () { return 0 }
        })
        this.$anime.set('.nav__address--wrap', {
          height: function () { return 0 }
        })
      }

      if (this.navSub) {
        this.tlSub = this.$anime.timeline({
          easing: 'easeOutSine',
          duration: 400
        })
        this.tlSub
          .add({
            targets: '.sq__2',
            width: '100%'
          })
          .add({
            targets: '.nav__address--mobile',
            rotate: '0deg',
            paddingRight: '0px'
          })
          .add({
            targets: '.nav__address--wrap',
            opacity: 1,
            padding: '1rem'
          })
          .add({
            targets: '.nav__address--mobile',
            translateX: '-100px'
          }, '-=250')
          .add({
            targets: '.nav__address--wrap',
            height: '50vh'
          }, '-=250')
          .add({
            targets: '.nav__slogan',
            padding: '1rem',
            height: '25vh',
            opacity: 1
          }, '-=250')
      } else {
        this.tlSub.reverse()
        this.tlSub.play()
      }
    }
  }
}
</script>
