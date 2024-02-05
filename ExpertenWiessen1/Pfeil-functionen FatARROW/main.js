"use strict";

// Normale Funktion:
// const multiplizieren = function(a, b) { return a * b; };

// Regel 1: function-Keyword wird durch => nach Parametern ersetzt
//const multiplizieren = (a, b) => { return a * b; };

// Regel 2: wenn die Logik der Funktion aus nur einem Ausdruck besteht, kann man die {} weglassen
// Regel 3: wenn es sich sogar nur um eine return-Anweisung handelt, kann auch das return weggelassen werden
const multiplizieren = (a, b) => a * b;

// Test-Ausgabe:
// console.log(multiplizieren(5, 10));

// Normale Funktion:
// const begruessung = function(name) { return `Hallo ${name}`; };

// Regel 4: wenn nur ein Parameter übergeben wird, können die () weggelassen werden
const begruessung = name => `Hallo ${name}`;

// Test-Ausgabe:
// console.log(begruessung("Max"));

// Normale Funktion:
// const sinnDesLebens = function() { return 42; };

// Regel 5: wenn keine Parameter übergeben werden, müssen leere () gesetzt werden
const sinnDesLebens = () => 42;

// Test-Ausgabe:
// console.log(sinnDesLebens());


// Praxis-Beispiel: Pfeil-Funktionen sind super praktisch z.B. in Call-Back-Funktionen 
// wie sie die forEach()-Methode erwartet
let einkaufsliste = [
    "Brot",
    "Käse",
    "Tomaten",
    "Butter",
    "Eier",
    "Orangensaft"
];

// Normale Funktion:
// einkaufsliste.forEach(function(e) { console.log(e); });

// Pfeil-Funktion:
einkaufsliste.forEach(e => console.log(e));