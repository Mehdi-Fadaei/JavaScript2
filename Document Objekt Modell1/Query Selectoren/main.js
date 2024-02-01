"use strict";

let gs_1 = document.querySelector("body > #navigation > ul");
console.log(gs_1);

// Methode suchen
let qr_2 = document.querySelector(".jumbotron");
console.log(qr_2);

// not existierte Methode return NULL
let qr_3 = document.querySelector(".test");
console.log(qr_3);

// not valid name ist fehler
// console.log(document.querySelector("%%&%$§"));

// querySelectorAll Methdoe gabe eine nodeList objekt zuruck mit list von alle 
let qsa_1 = document.querySelectorAll("body > #navigation > ul > li > a");
console.log(qsa_1);

let qsa_2 = document.querySelectorAll(".test2");
console.log(qsa_2);

// let qsa_3 = document.querySelectorAll("%&/%&%%%");


