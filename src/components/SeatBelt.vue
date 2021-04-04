<template>
  <div
    class="icon seatbelt"
    :class="{
      active: active,
    }"
  ></div>
</template>
<script>
export default {
  props: {
    active: Boolean,
  },
};
</script>
<style lang="scss">
.seatbelt {
  background-color: var(--off);
  background-image: url("../assets/icons/seatbelt.svg");
  background-position: center center;
  background-size: 150%;
  background-repeat: no-repeat;
  transition: background-color 0.2s;
  &.active {
    background-color: var(--on);
    transition: background-color 0.2s;
  }
}
</style>
