// tslint:disable typedef
// violation of Interface Segragation Principle
interface IAllInOne {
    copyDocument(document: Document): void;
    printDocument(document: Document): void;
    stapleDocument(document: Document, tray: number): void;
}
//
// - Interface Separation Principle
interface IPrinter {
    printDocument(document: Document): void;
}
interface ICopier {
    copyDocument(document: Document): void;
}
interface IStapler {
    stapleDocument(document: Document, tray: number): void;
}

class SimplePrinter implements IPrinter {
    printDocument(document: Document) {
        // ..
    }
}

class SuperPrinter implements IPrinter, IStapler, ICopier {
    printDocument(document: Document) {
        // ..
    }
    copyDocument(document: Document) {
        // ..
    }
    stapleDocument(document: Document) {
        // ..
    }
}