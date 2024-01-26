"use strict";

let meine_array = [

    "Tv",
    "Appfel",
    42,
    "ps5",
    true

];

// includes("wert"[, index]) Methode durchsucht das Array ab einem StartIndex nach einem Wert und wird true oder false zuruck gegeben
console.log(meine_array.includes("Tv", 0));         // true
console.log(meine_array.includes("TV", 2));         //false

//indexof("wert"[, index]): durchsucht das array ab einem startindex nach bestimte wert und geb index wieder zuruck 

console.log(meine_array.indexOf(42, 0));

//lastindexof() sucht nach index von eine wert von ende von arrqy nach anfang des array

console.log(meine_array.lastIndexOf("Appfel"));
console.log(meine_array.lastIndexOf("Appfel", 1));
console.log(meine_array.lastIndexOf("Appfel", 4));


