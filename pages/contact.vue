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
</style>
<template>
  <div class="wrap" v-if="content">
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
  </div>
</template>

<script>
import Visual from '@/components/Visual.vue'
export default {
  name: 'Page',
  components: { Visual },
  data: function () {
    return {
      content: false
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
