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


const kontostand_ausgeben = function(konto) {
    console.log(`${konto.inhaber.geschlecht} ${konto.inhaber.vorname} ${konto.inhaber.nachname} hat 
    ${konto.kontostand} euro auf konto`);

};

const konto_stand_vergleichen = function(konto_x, konto_y) {

    if (konto_x.kontostand > konto_y.kontostand){
        console.log(`konto nummer ${konto_x.iban} hat mehr geld als ${konto_y.iban}`);
    }else {
        console.log(`konto nummer ${konto_y.iban} hat mehr geld als ${konto_x.iban}`);
    }
}

kontostand_ausgeben(konto_1);
kontostand_ausgeben(konto_2);
konto_stand_vergleichen(konto_1,konto_2);
konto_stand_vergleichen(konto_2,konto_1);


