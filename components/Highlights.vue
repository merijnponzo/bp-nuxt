<style lang="scss" scoped>
.work__highlights{
  background-color:var(--color-bg);
}
.cta {
  margin-top:rfs(5rem);
  padding-bottom: rfs(5rem);
  .btn {
    &:hover {
      i {
        transform: scale(1, 1);
        width: rfs(18px);
      }
    }
    i {
      width: 0px;
      transition: 0.5s ease all;
      transform: scale(0, 0);
      font-size: rfs(18px);
    }
  }
}
.mwid--400 {
  align-self: center;
}
@include min-medium() {
  .card:nth-child(odd) {
    margin-top: rfs(5rem);
  }
  .card__highlight {
    margin-bottom: rfs(2rem);
  }
}
</style>
<template>
  <section class="work__highlights">
    <div class="wrap" :class="gutter">
      <div class="row">
        <h2 class="chapter fs__h space--3">{{ $t("highlights") }}</h2>
        <template v-for="(cardItem, i) in highlights">
          <Card
            class="col col-6 col--sm-6 skrp slide"
            :card="cardItem"
            :key="'highlight' + i"
          />
        </template>
      </div>
      <div class="col col-12">
        <div class="box ali--mc cta">
          <p-link archive="true" class="btn xl line mwid--400">
            <i class="ico-i_right"></i><span>{{ $t("bekijkprojecten") }}</span>
          </p-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Hightlights",
  components: { Card },
  props: {
    gutter: {
      type: String,
      default: ""
    },
    highlights: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>
