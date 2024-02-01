"use strict";

let meine_element = document.querySelector(".jumbotron");

let meine_element_style = getComputedStyle(meine_element);

console.log(meine_element_style.color);
console.log(meine_element_style.width);
console.log(meine_element_style.backgroundColor);
console.log(meine_element_style.frontFamily);
console.log(meine_element_style.animation);

