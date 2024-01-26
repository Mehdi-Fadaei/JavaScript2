"use strict";

let produkt = "Brot";

switch (produkt){

    case "Brot":
        console.log("1,89");
        break;
    case "milch":
    case "Apfel":
        console.log("0,79");
        break;
    case "Schokolade":
    case "Chips":
        console.log("0,99");
        break;
    default:
        console.log("Produjt wurde nicht gefunden!");
        break;

}


