<style lang="scss">
#revised__wrap {
  overflow: hidden;
  .slider {
    margin: 0px !important;
    background: rgba(0, 0, 0, 0) !important;
    .slider-dot {
      height: 100vh !important;
      width: 60px !important;
      background: rgba(255, 255, 255, 0) !important;
      box-shadow: 0 0 0px 0px #000000 !important;
    }
  }
  .slider:focus {
    box-shadow: 0 0 0px 0px #000000 !important;
  }
}

.range--indicator {
  position: absolute;
  left: calc(100% - var(--percentage));
  height: 100%;
  width: 2px;
  top: 0px;
  z-index: 3;
  background: black;
  &::after {
    width: 20px;
    pointer-events: none;
    height: 20px;
    top: calc(50% - 10px);
    left: -10px;
    border-radius: 100px;
    position: absolute;
    background: black;
    content: "";
  }
  &.active {
    background: white;
    &::after {
      background: white;
    }
  }
}

input {
  &:active {
    outline: none !important;
    border: none !important;
  }
}
.revised--drag {
  position: absolute;
  z-index: 4;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.revised--after {
  z-index: 2;
  top: 0px;
  left: 0px;
  position: absolute;
  opacity: 1;
  clip-path: inset(0px var(--percentage) 0px 0px);
}
.revised--before::after {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  opacity: var(--current);
  content: "";
  background: black;
  z-index: 1;
}
@include min-large() {
  .revised__comp.wrap {
    padding-left: $work-single-indent;
  }
}
</style>
<template>
  <section class="wrap gut--m revised__comp">
    <div class="row">
      <div
        id="revised__wrap"
        class="col col-12 col--mm-12"
        :style="`--percentage:${doNegative}%;--current:${number}%`"
      >
        <div class="revided--drag">
          <vue-range-slider
            ref="slider"
            :min="0"
            :max="100"
            v-model="number"
          ></vue-range-slider>
        </div>
        <span class="range--indicator" :class="{ active: dragActive }" />
        <template v-if="flexcontent.before">
          <Visual
            :visual="flexcontent.before"
            class="revised--before"
            :key="'visual-fwwjjw1'"
          />
        </template>
        <template v-if="flexcontent.before">
          <Visual
            :visual="flexcontent.after"
            class="revised--after"
            :key="'visual-dodwi902'"
          />
        </template>
      </div>
    </div>
  </section>
</template>
<script>
import Visual from "@/components/Visual.vue";
import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";

export default {
  name: "RevisedFlex",
  components: { Visual, VueRangeSlider },
  props: {
    flexcontent: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      number: 33,
      dragActive: false
    };
  },
  computed: {
    doNegative() {
      const negative = 100 - this.number;
      let fix = 0;
      if (negative < 55) {
        fix = 2;
      }
      return negative + fix;
    }
  }
};
</script>
