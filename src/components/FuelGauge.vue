<template>
  <div class="fuelgauge-container" :style="{
    '--gauge-state': fuelValue,
  }">
    <div class="gauge-outer">
      <span class="percentage">{{ Math.floor(fuelValue * 100) }}%</span>
      <div class="gauge-inner"></div>
    </div>
    <div class="icon"></div>
  </div>
</template>
<script>
export default {
  name: "FuelGauge",
  props: {
    fuelValue: Number,
  },
};
</script>
<style lang="scss">
.fuelgauge-container {
  --gauge-state: 0.5;
  position: absolute;
  top: calc(18vh * var(--scale));
  left: calc(8.5vh * var(--scale));
  .icon {
    position: relative;
    z-index: 2;
    height: calc(3vh * var(--scale));
    width: calc(3vh * var(--scale));
    background-color: var(--fuel-color);
    background-image: url("../assets/icons/fuel.svg");
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: calc(0.4vh * var(--scale)) calc(0.2vh * var(--scale));
    border-radius: calc(1.5vh * var(--scale));
    border: calc(0.4vh * var(--scale)) solid var(--color-primary);
  }
  .gauge-outer {
    z-index: 1;
    --unit: calc(1.6vh * var(--scale));
    height: var(--unit);
    width: calc(7 * var(--unit));
    border-radius: calc(var(--unit) * 0.5);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: calc((3vh * var(--scale)) - var(--unit));
    background-color: var(--bg-gauge);
    opacity: 0.9;
    .percentage {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ffffff;
      font-family: Helvetica, Arial, sans-serif;
      font-size: calc(1.5vh * var(--scale));
    }
    .gauge-inner {
      height: var(--unit);
      width: calc((6 * var(--unit) * var(--gauge-state)) + var(--unit));
      transition: width 0.2s;
      background-color: var(--fuel-color);
      border-radius: inherit;
    }
  }
}
</style>
