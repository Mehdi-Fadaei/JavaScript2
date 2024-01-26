"use strict";

let meine_map = new Map();
meine_map.set("Test", "Wert der Eigenschaft Test.");
meine_map.set(13, "Wert der Eigenschaft 13.");
meine_map.set([], "Wert zur Eigenschaft [].");
meine_map.set(function() {}, "Wert zur Eigenschaft function() {}.");
meine_map.set({}, "Wert zur Eigenschaft {}.");
console.log(meine_map);

let mein_set = new Set();
mein_set.add("Test");
mein_set.add(13);
mein_set.add([]);
mein_set.add(function() {});
mein_set.add({});
console.log(mein_set);

meine_map.forEach(function(wert, eigenschaft, map) {
    console.log(wert);
    console.log(eigenschaft);
    console.log(map);
});

mein_set.forEach(function(wert, NULL, set) {
    console.log(wert);
    console.log(set);
});

for (let paar of meine_map) {
    console.log(paar);
}

// [eigenschaft, wert]
for (let [eigenschaft, wert] of meine_map) {
    console.log(eigenschaft);
    console.log(wert);
}

for (let wert of mein_set) {
    console.log(wert);
}

// console.log(meine_map.entries());
// console.log(meine_map.values());
// console.log(meine_map.keys());

// Über Maps iterieren
for (let [eigenschaft, wert] of meine_map.entries()) {
    console.log(eigenschaft);
    console.log(wert);
}

for (let eigenschaft of meine_map.keys()) {
    console.log(eigenschaft);
}

for (let wert of meine_map.values()) {
    console.log(wert);
}

// Über Sets iterieren
for (let wert of mein_set.values()) {
    console.log(wert);
}