<template>
  <div class="visual">
    <slot></slot>
    <div class="img-wrap" :class="[`${ratio}`, `fit-${fit}`]">
      <template v-if="visual.sizes">
        <template v-if="visual.sizes.thumbnail == null">
          <span class="img">
            No image
          </span>
        </template>
        <template v-else>
          <picture class="picture" :key="visual.file">
            <template v-if="visual.sizes.thumbnail">
              <source
                class="img lazyload"
                :data-srcset="visual.sizes.thumbnail"
                media="(max-width: 640px)"
              />
            </template>
            <template v-if="visual.sizes.medium">
              <source
                class="img lazyload"
                :data-srcset="visual.sizes.medium"
                media="(max-width: 1200px)"
              />
            </template>
            <img
              :data-src="visual.sizes.thumbnail"
              class="img lazyload"
              data-sizes="auto"
            />
          </picture>
        </template>
      </template>
    </div>
    <slot name="description"></slot>
  </div>
</template>
<script>
export default {
  name: "VisualThumb",
  props: {
    ratio: {
      type: String,
      default: "ratio--4x3"
    },
    fit: {
      type: String,
      default: "cover"
    },
    visual: {
      type: [Boolean, Object]
    }
  }
};
</script>
