"use strict";
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["Red"] = "red-light";
    TrafficLight["Yellow"] = "yellow-light";
    TrafficLight["Green"] = "green-light";
})(TrafficLight || (TrafficLight = {}));
class TrafficLightRobot {
    constructor() {
        this.lights = [
            TrafficLight.Red,
            TrafficLight.Yellow,
            TrafficLight.Green,
        ];
        this.index = 0;
        this.currentLight = this.lights[this.index];
        this.updateLight();
    }
    start() {
        setInterval(() => this.changeLight(), 10000);
    }
    changeLight() {
        this.index = (this.index + 1) % this.lights.length;
        this.currentLight = this.lights[this.index];
        this.updateLight();
    }
    updateLight() {
        const lightElements = document.querySelectorAll(".light");
        lightElements.forEach((light) => light.classList.remove("on"));
        const currentLightElement = document.getElementById(this.currentLight);
        if (currentLightElement) {
            currentLightElement.classList.add("on");
        }
    }
}
const robot = new TrafficLightRobot();
robot.start();
