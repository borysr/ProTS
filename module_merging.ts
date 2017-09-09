// class/Module Merging
class CaR {
}
module CaR {
export class Engine {
}
export class GloveBox {
}
}
var caR:CaR = new CaR();
var engine:CaR.Engine = new CaR.Engine();
var gloveBox: CaR.GloveBox = new CaR.GloveBox();