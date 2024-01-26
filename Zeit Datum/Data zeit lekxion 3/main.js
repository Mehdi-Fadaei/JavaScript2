"use strict";

let d = new Date();
console.log(d);

//  BCP47 ( de-De ) standart sprache =>  d.toLocaleString([schema [, optionen]])

let de_DE = d.toLocaleString("de-DE");
console.log(de_DE);

// optionen in objekt fest stellen von format und schreib weisse RFM toLocaleString()

let optionen = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hours: "numeric",
    minute: "2-digit",
    second: "2-digit"
}

let de_DE_2 = d.toLocaleString("de-DE", optionen);
console.log(de_DE_2);

// toLocaleDateString() Methode gib nur Datum raus nimt nur optionen die mit datum zu tun hat

let de_De_datum = d.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
});

console.log(de_De_datum);

// toLocaleTimeString() Methode gib nur zeit raus nimt nur optionen die mit Zeit zu tun hat

let de_DE_zeit = d.toLocaleTimeString("de-DE", {
    hours: "numeric",
    minute: "2-digit",
    second: "2-digit"
});

console.log(de_DE_zeit);


