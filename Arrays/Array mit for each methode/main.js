"use strict";

let meine_array = [
    "Tv",
    "Mehdi",
    "Markus",
    "ps5",
    true,
    5
    
]


console.log(meine_array);

let meine_funktion = function(e){               //eine funktion ist notwendig for call back for foreach methode mit e als aktuelles index 
    console.log(e);                             // e ist aktuelles index position als parameter for objeckte in array
};

meine_array.forEach(meine_funktion);