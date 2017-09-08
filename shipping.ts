module Shipping {
    // available as Shipping.IShip
    export interface IShip {
        name: string;
        port: string;
        displacement: number;
    }

    // available as Shipping.Ferry
    export class Ferry implements IShip {
        constructor(
            public name: string,
            public port: string,
            public displacement: number ) {}
    }

    // only available inside of the Shipping module
    var defaultDisplacement: number = 4000;

    class PrivateShip implements IShip {
        constructor (
            public name: string,
            public port: string,
            public displacement: number) {
        }
    }
}

var ferry: Shipping.Ferry = new Shipping.Ferry("Assurance", "London", 3220);
