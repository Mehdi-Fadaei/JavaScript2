"use strict";

let meine_variable = "Mehdi";
let meine_objekt = {
    zahl: 4999
};

const meine_function = function(v, o){
    v = "Dennis";
    o.zahl = 2000;
};

meine_function(meine_variable, meine_objekt);

console.log(meine_variable);
console.log(meine_objekt.zahl);

// call-by-value ( übertragen als wert gilt für primitive Datentypen / String, Number, Boolean)
// call-by-refrence Übertragen als Verweis/Rückverweis gilt für komplexere Datentypen 8 Objekte, Functionen, Arrays)

let konto = {
    iban: "DE12345",
    bic: "XXXXX",
    inhaber: {
        vorname: "Max",
        nachname: "Musterman",
        geschlecht: "Musterlich",
        alter: 25
    },
    kontostand: 3500,
    aktive: true
};

const geld_abheben = function(k, s){
    k.kontostand = k.kontostand - s;

};

const geld_einzahlen = function(k, s){
    k.kontostand = k.kontostand + s;
};

geld_einzahlen(konto, 500);
console.log(`new konto stand is : ${konto.kontostand}`);

geld_abheben(konto, 30);
console.log(`new konto stand is : ${konto.kontostand}`);
