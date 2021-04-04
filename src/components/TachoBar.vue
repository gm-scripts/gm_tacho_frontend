<template>
  <div id="bar-container">
    <svg
      viewBox="0 0 100 100"
      id="bar"
      :style="{
        '--status': status,
      }"
    >
      <circle cx="50" cy="30" r="46" class="bar-outer" />
      <circle cx="50" cy="30" r="46" class="bar-inner" />
    </svg>
  </div>
</template>
<script>
export default {
  name: "TachoBar",
  props: {
    status: Number, // float 0-1
  },
};
</script>
<style lang="scss">
#bar-container {
  height: calc(24.2424vh * var(--scale));
  width: calc(24.2424vh * var(--scale));
  margin-bottom: calc(0.25vh * var(--scale));
  #bar {
    --status: 1;
    height: calc(24.2424vh * var(--scale));
    width: calc(24.2424vh * var(--scale));
    circle {
      display: block;
      fill: transparent;
      stroke-width: 8px;
      stroke-linecap: round;
      stroke-dasharray: 283;
      transform-origin: 50% 50%;
    }
    .bar-outer {
      stroke: var(--bg-gauge);
      stroke-dashoffset: 146;
      transform: rotate(140deg);
      position: relative;
    }
    .bar-inner {
      stroke: var(--speedometer-color);
      stroke-dashoffset: calc(
        -130 * var(--status) + 276
      ); // 276 is minimum val, 146 max
      transition: stroke-dashoffset 20ms;
      transform: rotate(140deg);
      position: relative;
    }
    #bar-col {
      .good {
        stop-color: var(--col-good);
      }
      .mid {
        stop-color: var(--col-mid);
      }
      .speeding {
        stop-color: var(--col-speeding);
      }
    }
  }
}
</style>
