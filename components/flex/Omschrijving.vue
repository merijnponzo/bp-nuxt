<style css scoped>
  .fs__t.xs{
    text-transform:Capitalize;
    font-weight:400;
  }
</style>
 <template>
 <section class="wrap project--description">
  <div class="row">
    <div class="col col-3 col--u-6">
      <p class="fs__t xs">{{$t(flexcontent.omschrijving.label)}}</p>
    </div>
    <div class="col col-9 col--u-6">
      <p class="fs__r mwid--750"
      :class="{'xl' : index === 0}"
      v-html="metaTextarea(flexcontent.omschrijving)"></p>
    </div>
  </div>
 </section>
</template>
<script>
import contenthelper from '@/mixins/contenthelper.js'
export default {
  name: 'OmschrijvingFlex',
  mixins: [contenthelper],
  props: {
    index: {
      type: Number,
      default: 0
    },
    flexcontent: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>
