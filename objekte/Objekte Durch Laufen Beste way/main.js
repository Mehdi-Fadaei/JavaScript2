"use strict";

let meine_objekt = {
    name: "Max",
    nachname: "Musterman",
    alt: 42
};

let paare = Object.entries(meine_objekt);               // Object.entries methode gib key paare zuruck attribute:wer
console.log(paare);

let eigenschaften = Object.keys(meine_objekt);          // keys methode gib nur key zuruck
console.log(eigenschaften);

let wert = Object.values(meine_objekt);                 // values methode gib valieus zuruck 
console.log(wert);

