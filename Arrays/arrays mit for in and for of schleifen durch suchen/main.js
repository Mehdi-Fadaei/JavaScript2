"use strict";

let meine_array = [
    "Tv",
    42,
    false,
    "Martin"

];

let meine_objekt = {                            // nicht iteriebar
    size: 42,
    name: "Mehdi",
    nachname: "Fadaei"

};

// for in schleifen durch sucht attributen in eine arary
for ( let eigenschaft in meine_array){          // durchsucht in meine_array jede atributten und die werden in variable eigenschaft gespeichert 
    console.log(eigenschaft);                   // es wird name for eigenschaften gegeben nicht wert
    console.log(meine_objekt[eigenschaft]);     // jetz wird wert in jede eigenschaft aus gegeben
}

// for of durch lauft des iterable objekte wie array mapd sets
for ( let wert_of of meine_array){             // durchsucht in meine_objekt jede variable von objekt
    console.log(wert_of);
}

for ( let wert_of in meine_objekt){
    console.log(wert_of);
}