"use strict";

let jumbo = document.querySelector(".jumbotron");

// Das CSSStyleDeclaration-Objekt ausgeben
console.log(jumbo.style);
// Inline-Styles auslesen
console.log(jumbo.style.backgroundColor);
// Inline-Styles verändern
jumbo.style.backgroundColor = "blue";
jumbo.style.width = "85%";
jumbo.style.height = "1000px";
jumbo.style.fontSize = "20px";