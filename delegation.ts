// tslint:disable typedef
interface IControlPanel {
  startAlarm(message: string): any;
}
interface ISensor {
  check(): any;
}
class MasterControlPanel {
  private sensors: ISensor[] = [];
  constructor() {
    // instantiating the delegate HeatSensor
    this.sensors.push(new HeatSensor(this));
  }
  start() {
    for (var i = 0; i < this.sensors.length; i++) {
      // calling the delegate
      this.sensors[i].check();
    }
    setTimeout(() => this.start(), 1000);
  }
  startAlarm(message: string) {
    console.log("Alarm! " + message);
  }
}
class HeatSensor {
  private upperLimit = 38;
  private sensor = {
    read: function() {
      return Math.floor(Math.random() * 100);
    }
  };
  constructor(private controlPanel: IControlPanel) {}
  check() {
    if (this.sensor.read() > this.upperLimit) {
      // calling back to the wrapper
      this.controlPanel.startAlarm("Overheating!");
    }
  }
}
var cp = new MasterControlPanel();
cp.start();
