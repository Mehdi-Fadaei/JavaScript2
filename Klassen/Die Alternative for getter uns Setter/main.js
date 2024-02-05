"use strict";

let k = new Konto("DE2323", "mehdi fadaei", 3500);
k.einzahlen(500);
k.abheben(21);
console.log(k.kontostand_abfragen());





