<style lang="scss">
.babdbd {
  background: black;
  color: white;
}
.wrap-test {
  width: 1000px;
  margin: 0 auto;
}
.row-test {
  display: flex;
}
.col-test {
  width: 50%;
  h1 {
    font-size: 48px !important;
  }
  p {
    font-size: 18px !important;
  }
}
</style>
<template functional>
  <div class="babdbd">
    <div class="wrap-test">
      <div class="row-test">
        <div class="col-test">
          <h1>{{ props.card.title }}</h1>
          <p>
            {{ props.card }}
          </p>
          <router-link to="/">test1</router-link>
        </div>
        <div class="col-test">
          <h1>HDIWHWDOIHWDOIWHDOIWD</h1>
          <div class="visual">
            <div class="img-wrap">
              <img class="img" :src="props.card.img" />
            </div>
          </div>
          <p>
            {{ props.card.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VisualThumb from "@/components/VisualThumb.vue";
// import contenthelper from "@/mixins/contenthelper.js";

export default {
  name: "Card",
  components: { VisualThumb },
  props: {
    cardclass: {
      type: String,
      default: ""
    },
    card: {
      type: Object,
      default: function() {
        return [];
      }
    }
  },
  data: function() {
    return {
      show: false,
      done: false
    };
  }
};
</script>
