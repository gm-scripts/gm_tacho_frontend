<template>
  <div class="icon frontlight" :class="mode">
    <div class="beam-container">
      <div class="lightbeam"></div>
      <div class="lightbeam"></div>
      <div class="lightbeam"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FrontLight",
  props: {
    mode: String,
  },
};
</script>
<style lang="scss">
.frontlight {
  background-image: url("../assets/icons/frontlight.svg");
  background-position: 0 center;
  background-size: 80%;
  background-repeat: no-repeat;
  position: relative;
  background-color: var(--on);

  .beam-container {
    position: absolute;
    top: calc(0.6vh * var(--scale));
    left: calc(1.05vh * var(--scale));
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    place-items: center;
    grid-gap: calc(0.125vh * var(--scale));
    .lightbeam {
      border-radius: calc(0.083vh * var(--scale));
      height: calc(0.14vh * var(--scale));
      width: calc(0.6vh * var(--scale));
      background-color: #ffffff;
      transition: opacity 0.1s, transform 0.5s;
    }
  }

  &.off {
    background-color: var(--frontlight-off);
    .lightbeam {
      opacity: 0;
    }
  }
  &.normal {
    .lightbeam {
      transform: rotate(25deg) translateY(calc(0.1vh * var(--scale)));
    }
  }
  &.high {
    .lightbeam {
      transform: rotate(0) translateY(0);
    }
  }
}
</style>
