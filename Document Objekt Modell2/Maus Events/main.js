"use strict";

let jumbo = document.querySelector(".jumbotron");

jumbo.addEventListener("click", e => { 
    console.log(e);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.target);
});

jumbo.addEventListener("dblclick", e => {
    console.log("DBLCLICK:");
    console.log(e);
});

jumbo.addEventListener("mousedown", e => {
    console.log("MOUSEDOWN:");
    console.log(e);
});

jumbo.addEventListener("mouseup", e => {
    console.log("MOUSEUP:");
    console.log(e);
});

jumbo.addEventListener("mouseover", e => {
    console.log("MOUSEOVER:");
    console.log(e);
});

jumbo.addEventListener("mouseout", e => {
    console.log("MOUSEOUT:");
    console.log(e);
});