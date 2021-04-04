# notes

## test value messages

```js
postMessage({
  type: "values",
  speedometerGaugeVal: 0.8,
  displaySpeed: "20 km/h",
  mileage: "260km",
  seatBeltActive: false,
  blinkerLeft: false,
  blinkerRight: false,
  frontLightMode: "off",
  gearShift: "6",
  fuelValue: 0.2,
});
postMessage({
  type: "values",
  speedometerGaugeVal: 0,
  displaySpeed: "220 km/h",
  mileage: "264537456km",
  seatBeltActive: true,
  blinkerLeft: true,
  blinkerRight: false,
  frontLightMode: "normal",
  gearShift: "N",
  fuelValue: 0.57,
});
postMessage({
  type: "values",
  speedometerGaugeVal: 1,
  displaySpeed: "2000 km/h",
  mileage: "15km",
  seatBeltActive: false,
  blinkerLeft: true,
  blinkerRight: true,
  frontLightMode: "high",
  gearShift: "R",
  fuelValue: 1,
});
```

## test config messages

```js
postMessage({
  type: "config",
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
});
postMessage({
  type: "config",
  scale: 1,
  bgGauge: "gray",
  speedometerColor: "cyan",
  colorPrimary: "grey",
  lightOn: "yellow",
  lightOff: "orange",
  on: "green",
  off: "red",
  fuelColor: "brown",
  frontlightOff: "blue",
});
```
