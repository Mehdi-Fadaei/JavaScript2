"use strict";

let jumbo = document.querySelector(".jumbotron");
// console.log(jumbo);

let class_list = jumbo.classList;
console.log(class_list);

// Klassen hinzufügen
jumbo.classList.add("meine-klasse");
// Klassen entfernen
jumbo.classList.remove("jumbotron");
// Klassen ersetzen
jumbo.classList.replace("meine-klasse", "deine-klasse");
// Vorhandensein von Klassen abfragen
console.log(jumbo.classList.contains("deine-klasse"));
// Klassen toggeln (An-Aus-Schalter)
jumbo.classList.toggle("auch-eine-klasse");
jumbo.classList.toggle("auch-eine-klasse");