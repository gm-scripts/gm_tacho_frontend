<template>
  <div class="speed-milage-container">
    <span class="speed">{{ speed }}</span>
    <span class="mileage">{{ mileage }}</span>
    <div class="icon cruiser"></div>
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
    height: 20px;
    width: 20px;
    background-color: var(--off);
    background-image: url("../assets/icons/lock.svg");
    background-position: center center;
    background-size: 150%;
    background-repeat: no-repeat;
    transition: background-color 0.2s;
    &.active {
      background-color: var(--on);
      transition: background-color 0.2s;
    }
  }
}
</style>
