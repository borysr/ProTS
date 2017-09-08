///<reference path="Shipping.ts" />
import Shipping = require("./Shipping");
    import Ship = Shipping.IShip;

    export class Dock {
        private dockedShips: Ship[] = [];
        arrival(ship: Ship): void {
            this.dockedShips.push(ship);
        }
    }