"use strict";

let meine_set = new Set();

// Methode add()    alle typen erlaubt sind wird nur wert gespechert
meine_set.add("Test");
meine_set.add("Test");      // in set wird keine duplication geschpeichert
meine_set.add(13);
meine_set.add([]);
meine_set.add({});
meine_set.add(function(){});
meine_set.add(function(){});

// methode has() wird boolean aus geben
console.log(meine_set.has("Test"));
console.log(meine_set.has({}));
console.log(meine_set.has(function(){}));
console.log(meine_set.has(7 + 6));          // hier wird 7 + 6 als 13 angenommen has(13) 

meine_set.delete("Test");

// meine_set.clear();

console.log(meine_set.size);
console.log(meine_set);


