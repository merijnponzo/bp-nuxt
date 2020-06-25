 <template>
 <section class="wrap">
  <div class="row">
    <div class="col col-3 col--u-6">
      <p class="fs__s">{{$t(flexcontent.omschrijving.label)}}</p>
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
