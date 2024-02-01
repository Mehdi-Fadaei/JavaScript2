"use strict";

let ul = document.querySelector("#navigation > ul");
//console.log(nav);

// Kind Elemente

let child_nodes =ul.childNodes;   // gib uns alle child elemente inklusive text und commentare knoten
let children =ul.children;        // alle kindelemente exklusive text und Kommentarknoten
let first_child =ul.firstChild;   // erste kindelemente inkl Text und Kommentarknoten
let last_child =ul.lastChild;     // letzes kindelemente inkl Text und kommentarknoten

let first_element_child =ul.firstElementChild;    // erstes kindelemente exkl Text und Kommentarknoten
let last_elemente_child =ul.lastElementChild;     // letzes kindeelemente exklusive Texte und Kommentarknoten

console.log(children);
console.log(child_nodes);
console.log(first_child);
console.log(last_child);
console.log(first_element_child);
console.log(last_elemente_child);

// Geschwisterelemente

let next_sibling = ul.nextSibling;      // nächstes Geschwisterelement inkl Text und Kommentarknoten
let previus_sibling = ul.previousSibling;       // vorangehende Geschwisterelement inkl text und Kommentarknoten

let next_element_sibling = ul.nextElementSibling;   // nächtes Geschwisterelemente exkl text und Kommentarknoten
let previus_element_sibling = ul.previousElementSibling;        // vorangehende Geschwisterelemente exkl text und Kommentarknoten

console.log(next_sibling);
console.log(previus_sibling);
console.log(next_element_sibling);
console.log(previus_element_sibling);


// eigenschaften und Methoden kann man chaining 

let next_element_sibling_first_elemente_sibling = ul.firstElementChild.nextElementSibling; // in ul first lement danach nexte sibling
console.log(next_element_sibling_first_elemente_sibling);

// Elternelemente

let parent_element = ul.parentElement;          // Elternelement eine Elemen aus geben 
console.log(parent_element);

// Allgmeines navigieren

let anker = ul.querySelectorAll("li > a");


console.log(anker);








