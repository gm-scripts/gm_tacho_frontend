<template>
  <div class="gearshift">
    <span class="val">{{ shiftValue }}</span>
  </div>
</template>
<script>
export default {
  name: "GearShift",
  props: {
    shiftValue: String,
  },
};
</script>
<style lang="scss">
.gearshift {
  background-color: var(--color-primary);
  background-image: url("../assets/icons/gearshift.svg");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: 15% center;
  border-radius: calc(1.25vh * var(--scale));
  height: calc(2.5vh * var(--scale));
  width: calc(4vh * var(--scale));
  position: relative;
  .val {
    color: #ffffff;
    font-family: Helvetica, Arial, sans-serif;
    font-size: calc(1.8vh * var(--scale));
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    vertical-align: middle;
    text-align: right;
    position: absolute;
    right: calc(0.5vh * var(--scale));
  }
}
</style>
