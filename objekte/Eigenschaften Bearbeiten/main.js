"use strict";

let auto_1 = {
    marke: "s3",
    modelle: "Benz",
    kraftstoffe: "Benzin",
    ps: 120,

};

let auto_2 = {};


// Eigenschaft ändern
auto_1.marke = "Tesla";
console.log(auto_1.marke);

// Eigenschaften Hinzufügen
auto_2.modell = "BMW";
auto_2.ps = "450";
auto_2["baujahre"] = 2023;
console.log(auto_2);

// Eigenschaften entfernen

delete auto_2.ps;
console.log(auto_2);

