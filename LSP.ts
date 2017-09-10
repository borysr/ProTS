// tslint:disable typedef
class Animal {}
class Cat extends Animal {}
class House {
    catFriendly(cat: Cat) {return 0;} // contravariance of method arguments in the subtype
    hasPets() {return new Animal();} // covariance of return types in in the subtype
}
class SingleFamilyHouse extends House {
    catFriendly(cat: Animal) {return 1;}
    hasPets() {return new Cat(); }
}
