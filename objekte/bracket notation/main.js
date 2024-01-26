"use strict";

let konto_1 = {
    iban: "DE1234",
    bic: "xxxxx",
    inhaber: {
        vorname: "Max",
        nachname: "Musterman",
        geschlecht: "Musterlich",
        alter: 42,
    },
    kontostand: 1234,
    aktive: true,
};

let konto_2 = {
    iban: "DE5678",
    bic: "yyyy",
    inhaber: {
        vorname: "Max2",
        nachname: "Musterman2",
        geschlecht: "Musterlich",
        alter: 12,
    },
    kontostand: 5678,
    aktive: true,
};

// werte lesen ( Dot notation)

let wert_1 = konto_1.iban;
console.log(wert_1);
console.log(`konto nummer ${konto_1.iban} gehort zu ${konto_1.inhaber.geschlecht} ${konto_1.inhaber.vorname} ${konto_1.inhaber.nachname}`);

// eigenschaft setzen ( Dot-notation)

konto_1.abhebelimit = 1000;     // dieses eingenschaft wurde in laufende zeit von program hergestelt und wird nicht zu objekt hinzugefugt

console.log(konto_1);

// Werte setzen bzw. verandern ( Dot - Notation)

konto_1.kontostand = 30;
console.log(konto_1.kontostand);

