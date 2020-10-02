<style lang="scss">
   footer{
     z-index:2;
     position: relative;
     width: 100%;
     height:auto;
   }
   .footer__logo{
     width:rfs(200px);
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
    .indent{
      padding:0px;
      align-self:center;
      .fs__r{
        margin-bottom:0px;
      }
      span{
        display:block;
        color:white;
      }
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
      .terms{
        order:4;
      }
      
    }
    @include min-large(){
      .footer__middle{
        .col:nth-child(2){
          border-left:1px solid var(--color-one-dark);
        }
      }
      .indent{
        padding-top:0px;
        padding-left:4rem;
      }
      .contact{
        .fs__b{
          display:none;
        }
      }
      .footer__bottom{
        .split--6{
          align-items: center;
        }
        .copyright{
          text-align: right;
        }
        .terms{
          order:3;
        }
        .social{
          order:4;
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
            <LogoFull class="footer__logo" />
          </div>
          <div class="col col-6 vcenter">
            <div class="box indent">
              <p class="fs__r xl">{{$store.getters.getSlogan}}</p>
            </div>
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
        <div class="col col-6 contact">
           <p class="fs__b">{{$t('contact')}}</p>
          <div class="box indent">
            <p class="fs__r xl">
              <span v-html="$store.getters.getContact.adres"></span>
              <span>{{$store.getters.getContact.mail}}</span>
              <span>{{$store.getters.getContact.telefoon}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="wrap">
          <div class="row">
            <div class="col col-6 terms">
              <a class="fs__r xs" :href="this.getLinkObj($store.getters.getTerms)">
                {{$t($store.getters.getTerms.name)}}
              </a>
            </div>
            <div class="col col-6 social">
              <div class="split--m-6">
                <span><i class="ico-i_facebook"/><i class="ico-i_instagram"/></span>
                <span class="copyright fs__r xs">© Copyright 2020 [v0.9]</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </footer>
</template>

<script>
import LogoFull from '@/components/LogoFull.vue'
import contenthelpers from '@/mixins/contenthelper.js'


export default {
  mixins: {contenthelpers},
  components: { LogoFull },
  name: 'Footer',
  data: function () {
    return {

    }
  },
  methods: {
  }
}
</script>
