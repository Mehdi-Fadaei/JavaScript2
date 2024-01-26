"use strict";

let user_input = prompt("What you like to eat");

switch (user_input){

    case "Nudeln":
    case "Fisch":
    case "Pizza":
        console.log("Das mag Ich!");
        break;
    case "salad":
    case "steak":
    case "spageti":
        console.log("das mag ich nicht");
        break;
    default:
        console.log("Noting to eat");
        break;
}

