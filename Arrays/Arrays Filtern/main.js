"use strict";

let meine_array = [
    1,
    3,
    2,
    56,
    23,
    123,
    42,
    90

];



let grade_zahlen_array = meine_array.filter(function(e){    //filtern() 

    if (e % 2 == 0 ){
        return true;
    } else {
        return false;
    }
});

console.log(grade_zahlen_array);
