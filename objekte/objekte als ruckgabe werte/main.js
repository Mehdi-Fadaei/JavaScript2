"use strict";

let person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 18
};

const person_verarbeiten = function(p) {

    return {
        n: `${p.vorname} ${p.nachname}`,
        z: `${p.vorname} ${p.nachname} (${p.alter} Jahre)`,
        b: `Hallo ${p.vorname} ${p.nachname}!`
    };

};

console.log(person_verarbeiten(person));