"use strict";

let k = new Konto("DE6206752564419854", "Max Mustermann", 3500);
console.log(k);

let k_als_json_string = JSON.stringify(k);
console.log(k_als_json_string);

let k_als_objekt = JSON.parse(k_als_json_string);
console.log(k_als_objekt);

let k_neu = new Konto(k_als_objekt._iban, k_als_objekt._inhaber, k_als_objekt._saldo);
console.log(k_neu);