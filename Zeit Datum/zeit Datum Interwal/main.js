"use strict";

"use strict";

// let d = new Date();
// console.log(d);

// console.log(Date.now());

// let e = new Date(1469168082927);
// console.log(e);

// let f = new Date("Sep 23 2003 07:52:22 GMT+0200");
// console.log(f);

// // new Date(jahr, monats-index[, tag[, stunde[, minute[, sekunde[, millisekunde]]]]])
// let g = new Date(2012, 5, 23, 15, 15, 15, 155);
// console.log(g);

// lekxikon 2 seter für Date() 
let d = new Date();

d.setFullYear(1993);
d.setMonth(0);
d.setDate(16);
d.setHours(9);
d.setMinutes(32);
d.setSeconds(12);
d.setMilliseconds(111);

console.log(d);

console.log(d.getFullYear());
console.log(d.getMonth());      //index
console.log(d.getDate());
console.log(d.getDay());        //index
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());


let d_utc = new Date();

d_utc.setUTCFullYear(1993);
d_utc.setUTCMonth(0);
d_utc.setUTCDate(16);
d_utc.setUTCHours(9);
d_utc.setUTCMinutes(32);
d_utc.setUTCSeconds(12);
d_utc.setUTCMilliseconds(111);

console.log(d_utc);

console.log(d.getUTCFullYear());
console.log(d.getUTCMonth());
console.log(d.getUTCDate());
console.log(d.getUTCDay());
console.log(d.getUTCHours());
console.log(d.getUTCMinutes());
console.log(d.getUTCSeconds());
console.log(d.getUTCMilliseconds());

let d_unix = new Date();

d_unix.setTime(1568557000000);
console.log(d_unix);
console.log(d_unix.getTime());



