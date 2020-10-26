<style lang="scss" scoped>
  section{
    background-color: white;
  }
  .icon{
    min-height:rfs(8rem);
    width:100%;
    display:block;
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom:rfs(3rem);
    background-position: center;
  }
  .comp__clients{
    padding-bottom:rfs(3rem);
  }
</style>
<template>
   <section class="comp__clients">
    <div class="wrap">
      <div class="row">
        <slot/>
        <h2 class="chapter fs__h space--3">{{ $t("ourclients") }}</h2>
        <template v-for="(clientItem, i) in clients">
          <div class="col col-2 col--m-4 col--ms-6" :card="clientItem" :key="'client'+i">
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
    clients: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>
