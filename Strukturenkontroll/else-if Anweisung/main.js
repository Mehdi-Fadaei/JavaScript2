"use strict"

// else if Anweisungen

const mindes_alt = 18;

let user_angabe = parseInt(prompt("Gebe deien alte ein!"));

if ( user_angabe > mindes_alt){
    console.log("Du bist Alt genugend");
}else if(user_angabe === mindes_alt){
    console.log("Du bist Gerade 18!");
}else{
    console.log("Du bist nicht alt genugend!)");
}



