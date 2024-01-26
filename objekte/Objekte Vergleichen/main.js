"use strict";

let objekt_1 = {
    nummer: 1,
    name: "One"
};

let objekt_2 = {
    nummer: 2,
    name: "Two"
};

let objekt_3 = {
    nummer: 2,
    name: "Two"
};

const objekt_vergleichen = function(o_1, o_2){

    if (o_1.nummer == o_2.nummer && o_1.name == o_2.name){
        console.log("Es handelt um Gleiche Objeckt");
    }else {
        console.log("Es handelt um unterschidliches objekt");
    }
};

objekt_vergleichen(objekt_1, objekt_2);
objekt_vergleichen(objekt_3, objekt_3);
objekt_vergleichen(objekt_2, objekt_3);



console.log(objekt_1 == objekt_2);          // false
console.log(objekt_2 == objekt_3);          // false 
console.log(objekt_3 == objekt_3);          // true  in java onjekte sind nimals gleich nur wenn die selber objeckt sind 

console.log({} == {});                      //false

