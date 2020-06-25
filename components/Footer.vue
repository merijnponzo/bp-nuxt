<style lang="scss">
   .footer__logo{
     width:rfs(100px);
      path{
        fill:white;
      }
    }
    .footer__menu{
      display: flex;
      flex-direction: column;
      a{
        padding-top:rfs(5px);
        padding-bottom:rfs(5px);
        text-transform: uppercase;
        font-size:rfs(18px);
      }
    }
    .address{
      white-space: pre;
    }
    .footer__top{
      border-bottom:1px solid var(--color-one-dark);
      padding-top:rfs(3rem);
      padding-bottom:rfs(3rem);
    }
    .footer__middle{
      .col{
        padding-top:rfs(3rem);
        padding-bottom:rfs(3rem);
      }
    }
    .footer__bottom{
      background:white;
      padding-top:rfs(3rem);
      padding-bottom:rfs(3rem);
      color:black;
      font-size:rfs(24px);
      i:before{
        font-size:rfs(40px);
      }
      .split--6{
        align-items: center;
      }
      .copyright{
        text-align: right;
      }
    }
    @include min-large(){
      .footer__middle{
        .col:nth-child(2){
          border-left:1px solid var(--color-one-dark);
        }
      }
    }
</style>
<template>
  <footer data-theme="two">
    <div class="footer__top">
      <div class="wrap">
        <div class="row">
          <div class="col col-6">
            <Logo class="footer__logo" />
          </div>
          <div class="col col-6">
            <p class="fs__p xl">{{$store.getters.getSlogan}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap footer__middle">
      <div class="row">
        <div class="col col-6">
          <nav class="footer__menu">
            <p class="fs__b">BURO PONZO</p>
            <a v-for="(infoItem,i) in $store.getters.getInfoNav" :key="'info-nav'+i">
              {{$t(infoItem.name)}}
            </a>
            <p class="fs__b">{{$t('diensten')}}</p>
            <a v-for="(dienstItem,i) in $store.getters.getDienstenNav" :key="'dienst-nav'+i">
              {{$t(dienstItem.name)}}
            </a>
          </nav>
        </div>
        <div class="col col-6">
            <p class="fs__p xl address">{{$store.getters.getAddress}}</p>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="wrap">
          <div class="row">
            <div class="col col-6">
              <a>
                {{$t($store.getters.getTerms)}}
              </a>
            </div>
            <div class="col col-6">
              <div class="split--6">
                <span><i class="ico-i_facebook"/><i class="ico-i_instagram"/></span>
                <span class="copyright">© Copyright 2020 [v0.9]</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </footer>
</template>

<script>
import Logo from '@/components/Logo.vue'
export default {
  components: { Logo },
  name: 'Footer',
  data: function () {
    return {

    }
  },
  methods: {
  }
}
</script>
