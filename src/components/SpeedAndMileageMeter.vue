<template>
  <div class="speed-milage-container">
    <span class="speed">{{ speed }}</span>
    <span class="mileage">{{ mileage }}</span>
    <div
      class="icon cruiser"
      :class="{
        active: cruiser,
      }"
    ></div>
  </div>
</template>
<script>
export default {
  name: "SpeedAndMilageMeter",
  props: {
    speed: String,
    mileage: String,
    cruiser: Boolean,
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
  .cruiser {
    opacity: 0;
    position: absolute;
    height: calc(1.5vh * var(--scale));
    width: calc(1.5vh * var(--scale));
    left: calc(15vh * var(--scale));
    top: calc(1.34vh * var(--scale));
    background-image: url("../assets/icons/lock.svg");
    background-position: center center;
    background-size: 100%;
    transform: scale(1.25);
    transition: opacity 0.75s, transform 0.75s;
    &.active {
      opacity: 1;
      transform: scale(1.01);
      transition: opacity 0.5s, transform 0.5s;
    }
  }
}
</style>
