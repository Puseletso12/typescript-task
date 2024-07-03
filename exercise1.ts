enum TrafficLight {
  Red = "red-light",
  Yellow = "yellow-light",
  Green = "green-light",
}

class TrafficLightRobot {
  private currentLight: TrafficLight;
  private lights: TrafficLight[] = [
    TrafficLight.Red,
    TrafficLight.Yellow,
    TrafficLight.Green,
  ];
  private index: number = 0;
  constructor() {
    this.currentLight = this.lights[this.index];
    this.updateLight();
  }
  start() {
    setInterval(() => this.changeLight(), 10000);
  }
  private changeLight() {
    this.index = (this.index + 1) % this.lights.length;
    this.currentLight = this.lights[this.index];
    this.updateLight();
  }
  private updateLight() {
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
