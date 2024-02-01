"use strict";

let formular = document.querySelector("form");

formular.addEventListener("submit", e => {
    e.preventDefault();
    console.log(e);
});

formular.addEventListener("reset", e => console.log(e));