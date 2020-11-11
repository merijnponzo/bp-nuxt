<style lang="scss">
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
    background: white;
    border: 2px solid black;
    content: "";
  }
  &.active {
    background: white;
    &::after {
      background: white;
    }
  }
}

.revised--drag {
  position: absolute;
  z-index: 4;
  width: 100%;
  height: 100%;
  top: 0px;
  overflow: hidden;
  left: 0px;
  input {
    &:active {
      outline: none !important;
      border: none !important;
    }
    height: 0px;
  }
  .vue-slider-dot {
    background: black;
    height: 2000px !important;
    width: 60px !important;
    margin-left: -25px;
    opacity: 0;
    cursor: pointer;
  }
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
  pointer-events: none;
  cursor: pointer;
}
@include min-large() {
  .revised__comp.wrap {
    padding-left: $work-single-indent;
  }
}
.revised--title {
  margin-top: rfs(0.5rem);
  display: block;
  text-align: center;
  span {
    margin-left: -3px;
    color: black;
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
        <div class="revised--drag">
          <vue-slider ref="slider" :min="0" :max="100" v-model="number" />
          <span class="range--indicator" :class="{ active: dragActive }" />
        </div>
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
      <div class="col col-12">
        <span class="fs__b xl revised--title"
          ><span>←</span><span>→</span></span
        >
      </div>
    </div>
  </section>
</template>
<script>
import Visual from "@/components/Visual.vue";

export default {
  name: "RevisedFlex",
  components: { Visual },
  props: {
    flexcontent: {
      type: Object,
      default: function() {
        return {};
      }
    },
    defaultnumber: {
      type: [Number, String],
      default: 50
    }
  },
  data() {
    return {
      number: 50,
      dragActive: false
    };
  },
  computed: {
    doNegative() {
      const negative = 100 - this.number;
      const fix = 0;
      return negative + fix;
    }
  },
  mounted() {
    this.number = parseInt(this.defaultnumber);
  }
};
</script>
