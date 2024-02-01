"use strict";

// input-Event wird bei jeder Veränderung der value-Eigenschaft gefeuert
let input = document.querySelector("input[type=text]");
input.addEventListener("input", e => console.log(e));
let textarea = document.querySelector("textarea");
textarea.addEventListener("input", e => console.log(e));

// change-Event wird erst gefeuert, wenn die Veränderung "abgeschlossen" ist
textarea.addEventListener("change", e => console.log(e));
input.addEventListener("change", e => console.log(e));

let checkboxen = document.querySelectorAll("input[type=checkbox]");
checkboxen.forEach(el => {
    el.addEventListener("change", e => {
        console.log(e);
        console.log(e.target.checked);
    });
});

let radiobuttons = document.querySelectorAll("input[type=radio]");
radiobuttons.forEach(el => {
    el.addEventListener("change", e => {
        console.log(e);
        console.log(e.target.value);
    });
});

let range = document.querySelector("input[type=range]");
range.addEventListener("change", e => {
    console.log(e);
    console.log(e.target.value);
});