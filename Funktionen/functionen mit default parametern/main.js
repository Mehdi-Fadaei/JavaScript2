"use strict";

// eine parametern in function default wert geben wenn keien parametern bei call von function gegeben wurde wird default parametern benutzt.


const begrussung = function(name = "Max", nachname = "Musterman", alte = 18){

    console.log(`
    Hello ${name} ${nachname} du bist ${alte} jahre alt!`
    );

};

let meine_name = "Mehdi";
let meine_nachname = "Fadaei";
let meine_alt = 42;

begrussung(meine_name, meine_nachname, meine_alt);  // alle parametern ab geben 
begrussung();                                       // default parametern nutzen
begrussung(undefined, meine_nachname, meine_alt);  // undefined parameter ab geben und rein folge von default parametern ändern





