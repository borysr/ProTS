// tslint:disable typedef
var bestCommonTypePremise = [
    {a: "A", b: 1, c: true}
];

for ( var i = 0; i < bestCommonTypePremise.length; i++ ) {
    var value = bestCommonTypePremise[i];
    console.log(value.a);
    console.log(value.b);
    console.log(value.c);
}

var bestCommonTypeExample = [
    {a: "A", b: 1, c: true},
    {a: "B", b: 2},
    {b: 3}
];

for (var j = 0; j < bestCommonTypeExample.length; j++) {
    var val = bestCommonTypeExample[j];
    // common type {b:string}
    // console.log(val.a); // common type does not have property a
    console.log(val.b);
    // console.log(val.c); // common type does not have property a
}