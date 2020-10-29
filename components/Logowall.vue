<style lang="scss" scoped>
  section{
    background-color: white;
  }
  .icon{
    min-height:rfs(12rem);
    width:100%;
    display:block;
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom:rfs(1rem);
    background-position: center;
  }
  .fs__t{
    width:100%;
  }
  .comp__clients{
    padding-bottom:rfs(3rem);
  }
  @include min-medium(){
    .icon{
       min-height:rfs(8rem);
       margin-bottom:rfs(3rem);
    }
  }
</style>
<template>
   <section class="comp__clients">
    <div class="wrap">
      <div class="row">
        <template v-if="smallmode">
          <h2 class="fs__t col col-12">{{ $t("morehappycustomers") }}</h2>
        </template>
        <template v-else>
          <h2 class="fs__h col col-12 space--3">{{ $t("ourclients") }}</h2>
        </template>
        <template v-for="(clientItem, i) in clients">
          <div class="col col-2 col--m-4 col--ms-6" :key="'client'+i">
            <div class="visual">
              <div
              class="icon"
              v-bind:style="{ 'background-image': 'url(' + clientItem.icon + ')' }"
              >
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Logowall',
  props: {
    smallmode:{
      type: [String, Boolean],
      default: false
    },
    clients: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>
