<style lang="scss">
.card {
  position: relative;
  .box {
    padding-left: 0px;
    padding-top: rfs(10px);
  }
  .visual {
    overflow: hidden;
  }
  .fs__l {
    margin-bottom: 5px;
    font-weight: 300;
  }
  .fs__s {
    margin-bottom: 2px;
  }
  .fs__q {
    margin-bottom: 0px;
    font-weight: normal;
  }
  .terms {
    color: #7d7d7d;
  }
  &:hover {
    .arrow {
      width: 15%;
    }
  }
}
.arrow,
.arrow--trans {
  background: white;
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 2;
  height: auto;
  width: 20%;
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  i {
    transition: 0.5s ease all;
    font-size: 200%;
    transform: translateY(5%);
  }
}
.g3 {
  .arrow {
    i {
      font-size: 150%;
    }
  }
}

.arrow--trans {
  z-index: 1;
  transition: all 1s ease-out;
}
.slide-enter-active {
  animation: slide-in 1s ease-out;
}

@keyframes slide-in {
  0% {
  }
  25% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 120%;
    height: 120%;
  }
}

.card--link {
  cursor: pointer;
  .img {
    transition: 1s ease all;
  }
}

.card--link:hover {
  .visual {
    .img {
      transform: scale(1.2, 1.2);
      opacity: 0.5;
    }
  }
}
</style>
<template>
  <article :class="[cardclass]" class="card" v-view.once>
    <nuxt-link
      :to="localePath(card.slug)"
      @click.native="setImageTransition(card)"
      class="card--link"
    >
      <VisualThumb
        :style="{ backgroundColor: card.meta.tilecolor }"
        :visual="card.visual"
        :key="'visual' + card.id"
      >
        <span>
          <span class="arrow"><i class="ico-i_right"/></span>
          <transition name="slide">
            <span v-if="show" class="arrow--trans"></span>
          </transition>
        </span>
      </VisualThumb>
      <div class="box">
        <h4 class="fs__l">{{ card.meta.client }}</h4>
        <p-meta
          tagclass="fs__s"
          :meta="card.meta.projectsamenvatting"
          field="textfield"
        />
        <ul class="terms crumbs--xs">
          <li
            v-for="(term, t) in getChildTerms(card.terms, 5)"
            :key="'term' + t"
            class="fs__b"
            v-html="term.name"
          ></li>
        </ul>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
import VisualThumb from "@/components/VisualThumb.vue";
import contenthelper from "@/mixins/contenthelper.js";

export default {
  name: "Card",
  components: { VisualThumb },
  mixins: [contenthelper],
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
  },
  methods: {
    setImageTransition(project) {
      this.show = true;
      this.$store.dispatch("doImageTransition", {
        bgColor: project.meta.tilecolor,
        classname: "before"
      });
      //this.$emit('toggleProjects')
    }
  }
};
</script>
