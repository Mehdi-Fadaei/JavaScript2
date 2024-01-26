"use strict";

let s = " Lorem ipsum dolor sit amet ipsum. ";

console.log(s.length);
console.log(s.indexOf("ipsum"));
console.log(s.indexOf("ipsum", 15));
console.log(s.lastIndexOf("ipsum"));
console.log(s.includes("dolor"));
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.trim());
console.log(s.repeat(20));

// methode of search replace match
// regex expression

let regex = /i\w{4}t/g;     // regex mit i bei anfang danach 4 buchstaben endet mit t global

console.log(s.search(regex));               // return -1 oder null oder 1
console.log(s.replace(regex, "opsum"));
console.log(s.match(/i\w{4}t/g));                // return true oder false









