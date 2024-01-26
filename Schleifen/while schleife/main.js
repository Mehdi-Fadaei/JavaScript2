"use strict";

let zahler_x = 0;
let zahler_y = 0;

while(zahler_x <= 12){
    zahler_x ++;
    if (zahler_x == 7){
        continue;               // wenn zahler_x bei 6 ist wird nicht console.log durch gefuhrt und schleife fang direckt weiter bei 7 
    }
    console.log(zahler_x);
    
}// keyword breack gesamte schleife und code nach schleife wird weiter gelaufen

while ( zahler_y <= 10){
    zahler_y ++;
    if (zahler_y == 5){
        console.log("Break")
        break;
    }
    console.log(zahler_y)
}

console.log("Nach zweite schleife");
