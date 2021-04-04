<template>
  <div
    id="tacho-container"
    v-if="visible"
    :style="{
      '--scale': cssConfigs.scale,
      '--bg-gauge': cssConfigs.bgGauge,
      '--speedometer-color': cssConfigs.speedometerColor,
      '--color-primary': cssConfigs.colorPrimary,
      '--light-on': cssConfigs.lightOn,
      '--light-off': cssConfigs.lightOff,
      '--on': cssConfigs.on,
      '--off': cssConfigs.off,
      '--fuel-color': cssConfigs.fuelColor,
      '--frontlight-off': cssConfigs.frontlightOff,
    }"
  >
    <TachoBar :status="data.speedometerGaugeVal" />
    <SpeedMile :speed="data.displaySpeed" :mileage="data.mileage" />
    <div id="iconbar">
      <SeatBelt :active="data.seatBeltActive" />
      <Blinker :inverse="true" :active="data.blinkerLeft" />
      <GearShift :shiftValue="data.gearShift" />
      <Blinker :inverse="false" :active="data.blinkerRight" />
      <FrontLight :mode="data.frontLightMode" />
    </div>
    <FuelGauge :fuelValue="data.fuelValue" />
  </div>
</template>

<script>
import TachoBar from "./components/TachoBar.vue";
import SpeedMile from "./components/SpeedAndMileageMeter.vue";
import SeatBelt from "./components/SeatBelt.vue";
import Blinker from "./components/Blinker.vue";
import FrontLight from "./components/FrontLight.vue";
import GearShift from "./components/GearShift.vue";
import FuelGauge from "./components/FuelGauge.vue";

export default {
  name: "App",
  components: {
    TachoBar,
    SpeedMile,
    SeatBelt,
    Blinker,
    FrontLight,
    GearShift,
    FuelGauge,
  },
  data() {
    return {
      visible: false,
      cssConfigs: {
        scale: 1.5,
        bgGauge: "#4a4a55",
        speedometerColor: "#23bf7c",
        colorPrimary: "#4a4a55",
        lightOn: "#eecc00",
        lightOff: "#aa8833",
        on: "#33cc33",
        off: "#cc3333",
        fuelColor: "#996633",
        frontlightOff: "#4433cc",
      },
      data: {
        speedometerGaugeVal: 0.4,
        displaySpeed: "220 km/h",
        mileage: "253487km",
        seatBeltActive: true,
        blinkerLeft: true,
        blinkerRight: true,
        frontLightMode: "high",
        gearShift: "0",
        fuelValue: 0.2,
      },
    };
  },
  mounted() {
    window.addEventListener("message", (e) => {
      let data = e.data;

      switch (data.type) {
        case "config": {
          this.cssConfigs.bgGauge = data.bgGauge;
          this.cssConfigs.speedometerColor = data.speedometerColor;
          this.cssConfigs.colorPrimary = data.colorPrimary;
          this.cssConfigs.lightOn = data.lightOn;
          this.cssConfigs.lightOff = data.lightOff;
          this.cssConfigs.on = data.on;
          this.cssConfigs.off = data.off;
          this.cssConfigs.fuelColor = data.fuelColor;
          this.cssConfigs.frontlightOff = data.frontlightOff;
          break;
        }
        case "values": {
          this.visible = data.visible;
          this.data.speedometerGaugeVal = data.speedometerGaugeVal;
          this.data.displaySpeed = data.displaySpeed;
          this.data.mileage = data.mileage;
          this.data.seatBeltActive = data.seatBeltActive;
          this.data.blinkerLeft = data.blinkerLeft;
          this.data.blinkerRight = data.blinkerRight;
          this.data.frontLightMode = data.frontLightMode;
          this.data.gearShift = data.gearShift;
          this.data.fuelValue = data.fuelValue;
          break;
        }
      }
    });
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
#tacho-container {
  --scale: 1.5;
  --bg-gauge: #4a4a55;
  --speedometer-color: #23bf7c;
  --color-primary: #4a4a55;
  --light-on: #eecc00;
  --light-off: #aa8833;
  --on: #33cc33;
  --off: #cc3333;
  --fuel-color: #996633;
  --frontlight-off: #4433cc;
  position: fixed;
  bottom: 0;
  right: 0;
  #iconbar {
    position: absolute;
    top: calc(14vh * var(--scale));
    left: calc(6.7vh * var(--scale));
    display: grid;
    grid-template-columns: 1fr 1fr 1.6fr 1fr 1fr;
    grid-gap: calc(0.5vh * var(--scale));
    .icon {
      border: calc(0.333vh * var(--scale)) solid var(--color-primary);
      border-radius: calc(1.25vh * var(--scale));
      height: calc(2.5vh * var(--scale));
      width: calc(2.5vh * var(--scale));
    }
  }
}
</style>
