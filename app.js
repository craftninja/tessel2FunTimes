'use strict';

const tessel = require('tessel');

const ledPin = tessel.port.B.pin[7]
const photoresistorPin = tessel.port.A.pin[4]

setInterval(() => {
  photoresistorPin.analogRead((error, lightIntensity) => {
    ledPin.analogWrite(1 - lightIntensity);
  });
}, 100);

console.log("I'm doing the thing! (Press CTRL + C to stop)");
