"use strict"

if (true) {
    console.log("If wird durch gefuhrt)");
}

const mindes_alt = 18;

let meine_alt = parseInt(prompt("wie alt bist du?", "Gebe deien alt ein"));

// if Anweisung
if ( meine_alt >= mindes_alt){
    console.log("dur darf es!");
}

if (meine_alt < mindes_alt){
    console.log("Du darf nicht");

}


// if-else Anweisung

if ( meine_alt >= mindes_alt){
    console.log("Du Darf es !");

}else {
    console.log("Du Darf Nicht!");
}

//  verschachtelt else - if Anweisung
if (meine_alt >= mindes_alt){
    if ( meine_alt === mindes_alt){
        console.log("Du bist Gerade 18?");
    }else{
        console.log("Du bist Alt Genug!");
    }
}else {
    console.log("Du darf Nicht!");
}

