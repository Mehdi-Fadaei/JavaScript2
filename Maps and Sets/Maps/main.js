"use strict";

// besonderes onjekte die konnen keys mit wert verbinden und die durfen unterschidliches type sein

let meine_map = new Map();

//Methode set() nimmt zwei parametern key , valieu und add key mit valieu in unsere map

meine_map.set("Test", "Wert zur eigenschaft Test");
meine_map.set(13, "Wert zur Eigenschaft 12");
meine_map.set([], "Wert zu eingenschaft []");
meine_map.set(function() {}, "Wert zu eigenschaft Funktion");
meine_map.set({}, "Wert zur Eigenschaft {}");

// Methode get() als patameter nimt key in maps und gib wert zuruck
console.log(meine_map.get("Test"));
console.log(meine_map.get(13));
console.log(meine_map.get([]));
console.log(meine_map.get(function() {}));
console.log(meine_map.get({}));

// Methode had() suchnach key inmapt und gib tru oder false zuruck 
console.log(meine_map.has(13));
console.log(meine_map.has(15));
console.log(meine_map.has({}));
console.log(meine_map.has([]));

// methode delete() loscht eine eigenschaft und denen wert 
meine_map.delete("Test");

// Methode clear loscht gesamte map
//meine_map.clear();

// methode size gib size of maps zuruck 
console.log(meine_map.size);

console.log(meine_map);
