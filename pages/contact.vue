<style lang="scss" scoped>
    .address{
      white-space: pre;
    }
    span{
      margin-bottom:rfs(2rem);
      display:block;
    }
    .fs__t{
      font-weight: normal;
    }
    .visual{
      margin-top:rfs(6rem);
    }
    .map-overlay{
      background: rgba(255,255,255,0.66);
      width:100%;
      height:100%;
      position: absolute;
      z-index: 122;
      top:0px;
      left:0px;
      bottom:0px;
      display:flex;
      align-items: center;
      cursor: pointer;
      justify-content: center;
      right:0px;
      .btn{
        transition:1s ease all;
      }
      .btn:hover{
        transform: scale(1.2,1.2);
      }
    }
    #map{
      position: relative;
      height:70vh;
      margin-top:rfs(6rem);
      z-index: 0;
    }
    .map-wrap{
      position: relative;
      width:100%;
      height:70vh;
      display:block;
    }
    .vue2leaflet-map{
        filter: grayscale(100%);
    }
    @include min-large(){
      #map{
        height:60vh;
      }
      .map-wrap{
        height:60vh;
      }
    }
</style>
<template>
  <div v-if="content">
    <section class="wrap">
      <div class="row">
        <h1 class="fs__h chapter">Contact</h1>
        <div class="col col-6">
          <span class="">
              <p class="fs__b">{{$t('mail')}}</p>
              <a class="fs__t" :href="`mailto:${$store.getters.getContact.mail}`">{{$store.getters.getContact.mail}}</a>
          </span>
          <span class="">
              <p class="fs__b">{{$t('telefoon')}}</p>
              <a class="fs__t" :href="`mailto:${$store.getters.getContact.telefoon}`">{{$store.getters.getContact.telefoon}}</a>
          </span>
          <span class="">
              <p class="fs__b">{{$t('adres')}}</p>
              <p class="fs__t address" v-html="$store.getters.getContact.adres"></p><br/>
              <p class="fs__r xl">{{$t('gesitueerd')}}</p><br/>
              <a :href="$store.getters.getContact.googlemaps" class="bp--nxt">Google Maps</a>
          </span>
        </div>
        <div class="col col-6">
          <span class="">
              <p class="fs__b">{{$t('social')}}</p>
              <a class="fs__t " :href="`mailto:${$store.getters.getContact.instagram}`">Instagram</a><br/>
              <a class="fs__t" :href="`mailto:${$store.getters.getContact.facebook}`">Facebook</a>
          </span>
          <Visual :visual="content.meta.contactvisual" />
        </div>
      </div>
    </section>
    <section class="map-wrap">
      <div class="map-overlay" v-if="mapOverlay" @click="mapOverlay = false">
        <button class="btn line">{{$t('click')}}</button>
      </div>
        <div id="map">
          <no-ssr>
            <l-map :zoom=13 :center="[51.907790, 4.447830]">
              <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
              <l-marker :lat-lng="[51.907790, 4.447830]"></l-marker>
            </l-map>
          </no-ssr>
        </div>
    </section>
  </div>
</template>

<script>
import Visual from '@/components/Visual.vue'
export default {
  name: 'Page',
  components: { Visual },
  data: function () {
    return {
      content: false,
      mapOverlay: true
    }
  },
  asyncData({ app, params, store, $axios }) {
    const url = `${process.env.wpApi}/pages?slug=contact`
    return $axios.get(url).then(response => {
      return {
       content:response.data[0]
      }
    })
  }
}
</script>
