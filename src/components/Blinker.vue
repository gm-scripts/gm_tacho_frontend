<template>
  <div
    class="icon blinker"
    :class="{
      inverse: inverse,
      active: active,
    }"
  ></div>
</template>
<script>
export default {
  name: "Blinker",
  props: {
    inverse: Boolean,
    active: Boolean,
  },
};
</script>
<style lang="scss">
.blinker {
  background-color: var(--light-off);
  background-image: url("../assets/icons/arrow.svg");
  background-size: 75%;
  background-position: calc(0.33vh * var(--scale)) center;
  background-repeat: no-repeat;
  &.inverse {
    transform: rotate(180deg);
  }
  &.active {
    animation: blink 1s infinite;
  }
}
@keyframes blink {
  0% {
    background-color: var(--light-on);
  }
  50% {
    background-color: var(--light-on);
  }
  60% {
    background-color: var(--light-off);
  }
  95% {
    background-color: var(--light-off);
  }
  100% {
    background-color: var(--light-on);
  }
}
</style>
