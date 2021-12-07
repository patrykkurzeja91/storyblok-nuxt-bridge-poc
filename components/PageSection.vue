<template>
  <section
    v-editable="blok"
    class="background-gradient"
    :class="[paddingBottom, paddingTop]"
  >
    <div
      class="container zindex"
      :class="[{'container--narrow': blok.narrow}, position]"
    >
      <component
        :is="childBlok.component"
        v-for="childBlok in blok.blocks"
        :key="childBlok._uid"

        :blok="childBlok"
      />
    </div>
    <div
      class="container"
      :class="[{'container--narrow': blok.narrow}]"
    >
      <!-- <KitchenGallery /> -->
    </div>
  </section>
</template>

<script>
export default defineComponent({
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  setup (props) {
    const paddingBottom = computed(() => {
      return `pb-${props.blok.padding_bottom}` || 'pb-0'
    })
    const paddingTop = computed(() => {
      return `pt-${props.blok.padding_top}` || 'pt-0'
    })
    const backgroundColor = computed(() => {
      return props.blok.background?.color
    })
    const position = computed(() => {
      return props.blok.position ? `box--${props.blok.position}` : 'box--right'
    })

    return {
      paddingBottom,
      paddingTop,
      backgroundColor,
      position,
    }
  },
})
</script>

<style lang="scss" scoped>
.box {
  margin-left: 0;
  margin-right: 0;

  &--center {
    @media (min-width: $breakpoint-md) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  &--left {
    @media (min-width: $breakpoint-md) {
      margin-right: auto;
    }
  }

  &--right {
    @media (min-width: $breakpoint-md) {
      margin-left: auto;
    }
  }
}
$color_line: #ffd180;
$container_width: 740px;
$stripe_width: calc(#{$container_width} / 4);

.background-gradient {
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 100%;
    max-width: $container_width;
    height: 100%;
    background:
      repeating-linear-gradient(
        to right,
        $color_line,
        $color_line 1px,
        transparent 1px,
        transparent $stripe_width,
      );
    border-right: 1px solid $color_line;
    transform: translateX(-50%);
  }

  /* background: linear-gradient(to bottom, #fff, $color-beige); */

  /* background:
    repeating-linear-gradient(
      to right,
      transparent 0,
      transparent 220px,
      #ffd180 220px,
      #ffd180 225px
    ); */

  /* --xy: 80% 65%;
  --b: 31deg;
  --a: 121deg;
  --c0: #ffa60d;
  --c1: #fdf9f4;
  --c2: #ffdbb1;
  --c3: #fdf9f4;

  background:
    conic-gradient(
      from var(--b) at var(--xy),
      var(--c0) var(--a),
      var(--c1) 0% 50%,
      var(--c2) 0% calc(180deg + var(--a)),
      var(--c3) 0%
    ); */
}

.zindex {
  z-index: 10;
}
</style>
