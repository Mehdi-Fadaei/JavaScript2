"use strict";

// console.log("Los");             
// setTimeout(function(){          // setTimeout() Methode nimt parametr als calback function and parameter  als milisecounde.
//     console.log("Fertig!");
// }, 2000);

// // setTimeout(code-string, zeitspanne) ohne callback 

// setTimeout("console.log(\"start Again a set time out!\");", 4000);  // back slash !!!

// // time out remove mit idd time out
// // idd raus finden mit console.log
// console.log(setTimeout("console.log(\"start Again a set time out!\");", 4000));

// clearTimeout(3);

// INTERVALE
// setInteval(callback-function, zeitspannen[, parameter1, parameter2, ..., parameterN]})


setInterval(function () {
    console.log("Einesekunde ist um!");
}, 2000);

// setInteval(code-string, zeitspanne)

setInterval("console.log('interval 2');", 2000);

// interval löschen mit interval idd

clearInterval();


