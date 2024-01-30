"use strict";

// this referenziert das Objekt in dessen Kontext es aufgerufen wird
let person_1 = {
    vorname: "Anna",
    nachname: "Musterfrau",
    alter: 24,
    meine_methode() { console.log(this); }
};
person_1.meine_methode();

// durch Nutzung von this innerhalb einer Funktion "fällt das this aus dem Kontext"
// im Strict-Mode ist es undefined
// ohne Strict-Mode bezieht es sich auf das Window-Objekt
let person_2 = {
    vorname: "Anna",
    nachname: "Musterfrau",
    alter: 24,
    meine_methode() {
        const meine_funktion = function() { console.log(this); };
        meine_funktion();
    }
};
person_2.meine_methode();

// Pfeil-Funktionen erhalten den Kontext zum Objekt in dem sie erstellt werden
let person_3 = {
    vorname: "Anna",
    nachname: "Musterfrau",
    alter: 24,
    meine_methode() {
        const meine_funktion = () => console.log(this);
        meine_funktion();
    }
};
person_3.meine_methode();

// Wann nutze ich normale Funktionen und wann Pfeil-Funktionen?
// auf globaler Ebene im Code -> normale Funktionen
// in Call-Back-Funktionen -> Pfeil-Funktionen
// in Methoden von Objekten -> Pfeil-Funktionen
// allgemein immer beim Kontakt mit dem Keyword this -> Pfeil-Funktionen
