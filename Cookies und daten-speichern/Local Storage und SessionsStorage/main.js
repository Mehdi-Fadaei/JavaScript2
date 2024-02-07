"use strict";

// Items im localStorage setzen
localStorage.setItem("name", "Ruben Winkler");
console.log(localStorage.getItem("name"));

// Items aus dem localStorage entfernen
localStorage.setItem("alter", "26");
localStorage.removeItem("alter");

// localStorage säubern
localStorage.clear();

console.log(localStorage);

// Items im sessionStorage setzen
sessionStorage.setItem("passwort", "15479456782Hg&/");

// // Items aus dem sessionStorage entfernen
sessionStorage.setItem("farbe", "blau");
sessionStorage.removeItem("farbe");

// sessionStorage säubern
sessionStorage.clear();

console.log(sessionStorage);