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
var BasicWheelCleaning = /** @class */ (function () {
    function BasicWheelCleaning() {
    }
    BasicWheelCleaning.prototype.cleanWheels = function () {
        console.log("Soaping Wheel");
        console.log("Brushing Wheel");
    };
    return BasicWheelCleaning;
}());
var ExecutiveWheelCleaning = /** @class */ (function (_super) {
    __extends(ExecutiveWheelCleaning, _super);
    function ExecutiveWheelCleaning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExecutiveWheelCleaning.prototype.cleanWheels = function () {
        _super.prototype.cleanWheels.call(this);
        console.log("Waxing Wheel");
        console.log("Rinsing Wheel");
    };
    return ExecutiveWheelCleaning;
}(BasicWheelCleaning));
var BasicBodyCleaning = /** @class */ (function () {
    function BasicBodyCleaning() {
    }
    BasicBodyCleaning.prototype.cleanBody = function () {
        console.log("Soaping Car");
        console.log("Rinsing Car");
    };
    return BasicBodyCleaning;
}());
var ExecutiveBodyCleaning = /** @class */ (function (_super) {
    __extends(ExecutiveBodyCleaning, _super);
    function ExecutiveBodyCleaning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExecutiveBodyCleaning.prototype.cleanBody = function () {
        _super.prototype.cleanBody.call(this);
        console.log("Waxing Car");
        console.log("Blow drying Car");
    };
    return ExecutiveBodyCleaning;
}(BasicBodyCleaning));
// before the factory pattern
var CarWashProgram = /** @class */ (function () {
    function CarWashProgram(washLevel) {
        this.washLevel = washLevel;
    }
    CarWashProgram.prototype.runWash = function () {
        var wheelWash;
        var bodyWash;
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
    };
    return CarWashProgram;
}());
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
