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
/* tslint:disable typedef */
var Display = /** @class */ (function () {
    function Display() {
        this.name = "";
    }
    return Display;
}());
var Television = /** @class */ (function (_super) {
    __extends(Television, _super);
    function Television() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Television;
}(Display));
var LEDTV = /** @class */ (function (_super) {
    __extends(LEDTV, _super);
    function LEDTV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LEDTV;
}(Television));
var HiFi = /** @class */ (function () {
    function HiFi() {
        this.sound = "";
    }
    return HiFi;
}());
var display = new Display();
var tv = new Television();
var led = new LEDTV();
var hifi = new HiFi();
var isDisplay;
isDisplay = display instanceof Display;
console.log("display is Display? " + isDisplay);
isDisplay = tv instanceof Display;
console.log("tv is Display? " + isDisplay);
isDisplay = led instanceof Display;
console.log("led is Display? " + isDisplay);
isDisplay = hifi instanceof Display;
console.log("hifi is Display? " + isDisplay);
var hasName;
hasName = "name" in display;
console.log("display has name? " + hasName);
hasName = "name" in tv;
console.log("tv has name? " + hasName);
hasName = "name" in led;
console.log("led has name? " + hasName);
hasName = "name" in hifi;
console.log("hifi has name? " + hasName);
