"use strict";

let first_number = 20;
let secound_number = 12;
let third_number = 100;
let fourt_number = 42;
let five_number = -26;

// alle variable in function are local 

const number_addtion = function(a, b){
    let c = a + b;
    console.log(`addieren von ${a} and ${b} = ${c}`);
};

const number_subtraction = function(a, b){
    let c = a - b;
    console.log(`subtansieren von ${a} and ${b} = ${c}`);
};

const number_multipication = function(a, b){
    let c = a * b;
    console.log(`multiplai von ${a} and ${b} = ${c}`);
};

const number_division = function(a, b){
    let c = a / b;
    console.log(`division von ${a} and ${b} = ${c}`);
};

const number_remin = function(a, b){
    let c = a % b;
    console.log(`rest von division von ${a} and ${b} = ${c}`);
};

const mathe_magie = function(a, b){
    let addt = a + b;
    let multi = a * b;
    let divi = a / b;
    let remi = a % b;
    let subt = a - b;

    console.log(`
    addieren von ${a} and ${b} = ${addt}
    subtansieren von ${a} and ${b} = ${subt}
    multiplai von ${a} and ${b} = ${multi}
    division von ${a} and ${b} = ${divi}
    rest von division von ${a} and ${b} = ${divi}
    `);

};



number_addtion(first_number, secound_number);
number_addtion(third_number, first_number);
number_addtion(first_number, first_number);
number_addtion(secound_number, third_number);

number_multipication(first_number, secound_number);
number_multipication(third_number, first_number);
number_multipication(first_number, first_number);
number_multipication(secound_number, third_number);

number_remin(first_number, secound_number);
number_remin(third_number, first_number);
number_remin(first_number, first_number);
number_remin(secound_number, third_number);

number_division(first_number, secound_number);
number_division(third_number, first_number);
number_division(first_number, first_number);
number_division(secound_number, third_number);

number_subtraction(first_number, secound_number);
number_subtraction(third_number, first_number);
number_subtraction(first_number, first_number);
number_subtraction(secound_number, third_number);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");

mathe_magie(12, 23);


