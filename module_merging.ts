// class/Module Merging
class Car {
}
module Car {
export class Engine {
}
export class GloveBox {
}
}
var car:Car = new Car();
var engine:Car.Engine = new Car.Engine();
var gloveBox: Car.GloveBox = new Car.GloveBox();