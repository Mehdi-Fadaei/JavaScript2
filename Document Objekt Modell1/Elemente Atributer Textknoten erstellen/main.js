"use strict";

// leres Elemente herstellen 
let div = document.createElement("div");
console.log(div);

// Atributte anlegen in eine element
let attr = document.createAttribute("id");
console.log(attr);

// werte in attribut ein legen

attr.value = "meine_id";
console.log(attr);

// attribute wert in element einfügen
div.setAttributeNode(attr);
console.log(div);

// zweite methode atrribute zu element herstellen und zu fügen
div.setAttribute("calss", "meine_klasse");
console.log(div);

// creat textnode
let text = document.createTextNode("Lorem ipsum dolor sit amet.");
console.log(text);




