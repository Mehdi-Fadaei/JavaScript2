"use strict";

const meine_function = function(a, b){

    return a * b;
};

let z_1 = 13;
let z_2 = 34;

let ergebnis = meine_function(z_1, z_2);
console.log(ergebnis);

console.log(meine_function(meine_function(z_1, z_2), meine_function(z_1, z_2)));


