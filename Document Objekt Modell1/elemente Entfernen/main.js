"use strict";

// ein element Auswahlen use # idd 

let meine_element = document.querySelector("#navigation");

meine_element.remove();

// suche nach . Klasse
// node liste entleren


let meien_jombo = document.querySelectorAll(".jumbotron");

// for each schleife for iteraten in node list and remove each node

meien_jombo.forEach(function(e){

    e.remove();
});




