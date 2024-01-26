"use strict";

let inhaber_1 = {
    vorname: "Mehdi",
    nachname: "Fadaei",
    geschlecht: "Manlich",
    alter: 42,

};

let inhaber_2 = {
    vorname: "Max",
    nachname: "Musterman",
    geschlecht: "Musterlich",
    alt: 40,
};


let konto_1 = {
    inhaber: inhaber_1,
    iban: "DE1234",
    bic: "XXXX",
    kontostand: 1234,
};

let konto_2 = {
    inhaber: inhaber_2,
    iban: "DE5678",
    bic: "XXXX",
    kontostand: 7890
};

// verchachtelte objekt

let konto_3 = {
    inhaber: {
        vorname: "Max2",
        nachname: "Musterman2",
        geschlecht: "Musterlich",
        alt: 40,

    },
    inhaber: inhaber_2,
    iban: "DE5678",
    bic: "XXXX",
    kontostand: 7890

};

// challenge objekt:

let auto_modelle = {                // gier ist zuweisung = 
    marke: "hyundei",
    modell: "iqx",
    kraftstoffart: "benzin",        // : stast = hier ist keien zuweissung 
    kilometerstand: 1234,
    ausstattung: {
        navigationssystem: true,
        klimaanlage: true,
        sutzheizung: true,
        tempomat: true,
        panoramadach: true,
    },
    zustand: "new",
    preis: 123456,

};

console.log(auto_modelle);
auto_modelle.auto_ps = 300;
auto_modelle.modell = "Benz";
console.log(`Eine ${auto_modelle.modell} hat ${auto_modelle.auto_ps} PS.`);

