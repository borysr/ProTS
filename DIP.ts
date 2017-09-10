// tslint:disable typedef
// violation od Dependency Inversion Principle
class Light {
    switchOn() {
        // ..
    }
    switchOff() {
        // ...
    }
}
class LightSwitch {
    private isOn = false;
    constructor(private light: Light) {
    }
    onPress() {
        if(this.isOn) {
            this.light.switchOff();
            this.isOn = false;
        } else {
            this.light.switchOn();
            this.isOn = true;
        }
    }
}
//
// according to DIP
interface ILightSource {
    switchOn():void;
    switchOff():void;
}
class Light1 implements ILightSource {
    switchOn():void {
        // ..
    }
    switchOff(): void {
        // ..
    }
}
class LightSwitch1 {
    private isOn = false;
    constructor(private light: ILightSource) {
    }
    onPress() {
        if(this.isOn) {
            this.light.switchOff();
            this.isOn = false;
        } else {
            this.light.switchOn();
            this.isOn = true;
        }
    }
}
