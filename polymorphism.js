var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.moveTo = function (x, y) {
        console.log("Driving to " + x + " " + y);
    };
    return Car;
}());
var SportsCar = /** @class */ (function (_super) {
    __extends(SportsCar, _super);
    function SportsCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SportsCar;
}(Car));
var Airplane = /** @class */ (function () {
    function Airplane() {
    }
    Airplane.prototype.moveTo = function (x, y) {
        console.log("Flying to " + x + " " + y);
    };
    return Airplane;
}());
function navigate(vehicle) {
    vehicle.moveTo(59.9436499, 10.7167959);
}
var airplane = new Airplane();
navigate(airplane);
var car = new SportsCar();
navigate(car);
