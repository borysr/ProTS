/* tslint:disable typedef */
class Display {
    name: string = "";
}

class Television extends Display {}

class LEDTV extends Television {}

class HiFi {
    sound: string ="";
}

var display = new Display();
var tv = new Television();
var led = new LEDTV();
var hifi = new HiFi();

var isDisplay:boolean;

isDisplay = display instanceof Display;
console.log("display is Display? " + isDisplay);

isDisplay = tv instanceof Display;
console.log("tv is Display? " + isDisplay);

isDisplay = led instanceof Display;
console.log("led is Display? " + isDisplay);

isDisplay = hifi instanceof Display;
console.log("hifi is Display? " + isDisplay);

var hasName: boolean;

hasName = "name" in display;
console.log("display has name? " + hasName);

hasName = "name" in tv;
console.log("tv has name? " + hasName);

hasName = "name" in led;
console.log("led has name? " + hasName);

hasName = "name" in hifi;
console.log("hifi has name? " + hasName);
