"use strict";

let eigenschaft = "iban";

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

// werte lesen ( Bracket notation)

let wert_1 = konto_1["iban"];
console.log(wert_1);
console.log(`konto nummer ${konto_1[eigenschaft]} gehort zu ${konto_1["inhaber"]["geschlecht"]} ${konto_1["inhaber"]["vorname"]}
${konto_1["inhaber"]["nachname"]}
`);

// werte lesen verschachtelt ( Bracket notation)

let wert_2 = konto_1["inhaber"]["vorname"];
console.log(wert_2);

// eigenschaft setzen ( Bracket-notation)

konto_1["abhebenlimit"] = 1000;     // dieses eingenschaft wurde in laufende zeit von program hergestelt und wird nicht zu objekt hinzugefugt

console.log(konto_1);

// Werte setzen bzw. verandern ( Bracket - Notation)

konto_1["kontolimit"] = 30;
console.log(konto_1.kontostand);

// warum sollten wir die Bracket-Notation jemals verwenden?


let wert_3 = konto_1[eigenschaft];          // equalevant mit konto_1["iban"];
console.log(wert_3);
