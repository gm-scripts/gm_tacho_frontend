<template>
  <div class="speed-milage-container">
    <span class="speed">{{ speed }}</span
    >
    <span class="mileage">{{ mileage }}</span>
  </div>
</template>
<script>
export default {
  name: "SpeedAndMilageMeter",
  props: {
    speed: String,
    mileage: String,
  },
};
</script>
<style lang="scss">
.speed-milage-container {
  position: absolute;
  top: calc(9vh * var(--scale));
  left: calc(6.5vh * var(--scale));
  span {
    display: block;
    color: #ffffff;
    font-family: Helvetica, Arial, sans-serif;
  }
  $text-width: 15vh;
  .speed {
    text-align: right;
    font-size: calc(3vh * var(--scale));
    width: calc(#{$text-width} * var(--scale));
  }
  .mileage {
    text-align: right;
    font-size: calc(1.35vh * var(--scale));
    width: calc(#{$text-width} * var(--scale));
    position: relative;
    top: calc(-0.75vh * var(--scale));
  }
}
</style>
