"use strict";

// function ausdrucke: braucht ; am ende und wird nicht hoisting

const function_1 = function(){
    console.log("Funkction 1");
};

function_1();

let function_2 = function(){
    console.log("funkction 2 ");
};

function_2();

function_2 = function(){
    console.log("Funktion zwei mit let : ");
};

// functiondeclarations braucht keien ; functiondeclaration wird sofort hoisting 

function function_3(){
    console.log("function 3 nach function declaration:");
}

function_3();



