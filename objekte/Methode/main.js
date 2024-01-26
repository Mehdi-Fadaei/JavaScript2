"use strict";

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
    aktive: true,

    geld_einzahlen: function(s){                     // eine function in objekt is eine methode
        this.kontostand = this.kontostand + s;             // this keyword ( objekt selber) and dot notation 

    },

    geld_abheben: function(s){
        this.kontostand = this.kontostand - s;
    
    }

};

konto.geld_einzahlen(500);
console.log(konto.kontostand);

// challenge . Methode in objekt einbauen

let person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 18,

    person_verarbeiten: function() {

        return {
            n: `${this.vorname} ${this.nachname}`,
            z: `${this.vorname} ${this.nachname} (${this.alter} Jahre)`,
            b: `Hallo ${this.vorname} ${this.nachname}!`
        };
    
    }
};

console.log(person.person_verarbeiten());







