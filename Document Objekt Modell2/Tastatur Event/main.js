"use strict";

document.addEventListener("keydown", e => {
    // console.log(e);
    if (e.key === "@") {
        console.log("Das @-Zeichen wurde gedrückt!");
    }
});

document.addEventListener("keyup", e => {
    if (e.key === "p") {
        console.log("Das p-Zeichen wurden gedrückt!");
    }
});

// wichtig: keypress-Event hört nicht auf Shift, Fn und und CapsLock
document.addEventListener("keypress", e => {
    if (e.key === ":") {
        console.log("Das :-Zeichen wurden gedrückt!");
    }
});