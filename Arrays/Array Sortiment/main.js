"use strict";

let meine_array = [2, 13, 1, 56, 456, 23, 8, 0];

let meine_array_wort = [ "Mehdi", "Tv", "Ali"];

let new_sortiert_array = meine_array.sort();
console.log(new_sortiert_array);                // standard wird alle zu string verglichen nach alphabet

new_sortiert_array = meine_array_wort.sort();
console.log(new_sortiert_array);


// for zahlen sortiment von kleinnach grusse zahl

let new_sortierte_zahlen_array = meine_array.sort(function(a, b) { 
                                                    
    return a - b;                                   
                                                    
});

console.log(new_sortierte_zahlen_array);

// von gruss nach kleine zahlen

new_sortierte_zahlen_array = meine_array.sort(function(a, b) { 
                                                    
    return b - a;                                   
                                                    
});

console.log(new_sortierte_zahlen_array);
