// tslint:disable typedef
interface IVehicle {
    moveTo(x: number, y: number): void;
}
class Car implements IVehicle {
    moveTo(x: number, y:number) {
        console.log("Driving to "+ x + " " + y);
    }
}

class SportsCar extends Car { }

class Airplane {
    moveTo(x: number, y:number) {
        console.log("Flying to " + x + " " + y);
    }
}

function navigate(vehicle: IVehicle) {
    vehicle.moveTo(59.9436499, 10.7167959);
}

var airplane = new Airplane();

navigate(airplane);

var car = new SportsCar();
navigate(car);