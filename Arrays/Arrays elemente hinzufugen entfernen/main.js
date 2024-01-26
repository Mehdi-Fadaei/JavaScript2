"use strict";

let meine_array = [
    "Sebastian",
    "Mehdi",
    "marcel",
    "Dennis"
]

console.log(meine_array[1]);
meine_array[1] = "Mark";        // wird index 1 in array umgeschriben
console.log(meine_array[1]);

// Methode push() : fügt am ende des array eine objekt hinzufugen

meine_array.push("Luci");
console.log(meine_array[meine_array.length - 1]);

// Methode pop() entfernt laste objekt von array
meine_array.pop();
console.log(meine_array[meine_array.length - 1]);

// methode unshift(): Fügt eine elemente am anfang des array
meine_array.unshift("Jax");
console.log(meine_array[0]);

// Methode shift() : entfernt erste objekt von array
meine_array.shift();
console.log(meine_array[0]);
