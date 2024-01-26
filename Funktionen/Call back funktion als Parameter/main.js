"use strict";

let funktion_1 = function(){            // funktion one

    console.log("Funktion one !");
};

let funktion_2 = function(f){           // funktion two als parametern funktion one

    console.log("Funktion two!");
    f();                                // funktion one als parameter bei funktion two bekannt hier wird es abgerufen call back
}

funktion_2(funktion_1);                 // funktion two word mit funktion one als parametern abgerufen


let funktion_3 = function(f){           // funktion drei 

    console.log("Funktion drei!");
    f();
}


funktion_3(function(){                  // funktion drei mit direckte call back einegen funktion direckt in parameternabgeben abrufen

    console.log("Funktion drei mit eigene funktion als parameter direkt");

});