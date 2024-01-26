"use strict";

console.log(Math);

// Kreisfläche berechnen mit Radius
// A = PI * r^2

let a = Math.PI * Math.pow(12, 2);
console.log(a);

// Runden

let a_gerundet = Math.round(a);
console.log(a_gerundet);

let a_abgerundet = Math.floor(a);
console.log(a_abgerundet);

let a_aufgerundet = Math.ceil(a);
console.log(a_aufgerundet);

// Nachkommastellen

let a_nachkommastellen = a.toFixed(3);      // tofixed gib string zuruck casting ??
console.log(a_nachkommastellen);

// Strings in Zahlen umwandeln

let a_integer = parseInt(a_nachkommastellen);
console.log(a_integer);

let a_float = parseFloat(a_nachkommastellen);
console.log(a_float);

// Random Methode

console.log(
    Math.floor(Math.random() * (12 + 1))      // Math.floor round number Math.random create random number from 0 to 0.9999999999 ( 12 + 1) change range to max 12 
);

// zufähliches zahlen zwichen 20 und 40 

let maximum_range = 40;
let minimum_range = 20;

console.log(
    Math.floor(Math.random() * (maximum_range - minimum_range + 1) + minimum_range)
);

// gleit komma zahlen floating englisch schreib weisse nur mit . keine , 

// zwei foating nummer zussamen rechnen gib probleme

console.log(99.93 + 354.97);
console.log(((99.93 * 100 + 354.97 * 100) / 100));
console.log(((99.93 * 100 + 354.97 * 100) / 100).toFixed(2));
console.log(9332654729891549);
// 9332654729891548

