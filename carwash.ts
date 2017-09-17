// tslint:disable typedef
interface IWheelCleaning {
    cleanWheels(): void;
}
class BasicWheelCleaning implements IWheelCleaning {
    cleanWheels() {
        console.log("Soaping Wheel");
        console.log("Brushing Wheel");
    }
}
class ExecutiveWheelCleaning extends BasicWheelCleaning {
    cleanWheels() {
        super.cleanWheels();
        console.log("Waxing Wheel");
        console.log("Rinsing Wheel");
    }
}

interface IBodyCleaning {
    cleanBody():void;
}
class BasicBodyCleaning implements IBodyCleaning {
    cleanBody() {
        console.log("Soaping Car");
        console.log("Rinsing Car");
    }
}

class ExecutiveBodyCleaning extends BasicBodyCleaning {
    cleanBody() {
        super.cleanBody();
        console.log("Waxing Car");
        console.log("Blow drying Car");
    }
}

// before the factory pattern
class CarWashProgram {
    constructor(private washLevel: number) {
    }
    runWash() {
        var wheelWash: IWheelCleaning;
        var bodyWash: IBodyCleaning;
        switch (this.washLevel) {
            case 1:
                wheelWash = new BasicWheelCleaning();
                wheelWash.cleanWheels();
                bodyWash = new BasicBodyCleaning();
                bodyWash.cleanBody();
                break;
            case 2:
                wheelWash = new BasicWheelCleaning();
                wheelWash.cleanWheels();
                bodyWash = new ExecutiveBodyCleaning();
                bodyWash.cleanBody();
                break;
            case 3:
                wheelWash = new ExecutiveWheelCleaning();
                wheelWash.cleanWheels();
                bodyWash = new ExecutiveBodyCleaning();
                bodyWash.cleanBody();
                break;
        }
    }
}
console.log("----- Regular Carwash");

console.log("1------------");
var carWash1 = new CarWashProgram(1);
carWash1.runWash();
console.log("-2-----------");

var carWash2 = new CarWashProgram(2);
carWash2.runWash();
console.log("-3-----------");
var carWash3 = new CarWashProgram(3);
carWash3.runWash();
console.log("-------------");

