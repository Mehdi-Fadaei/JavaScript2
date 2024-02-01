"use strict";

// for oder for of schleifen

// HTML Collection

let html_collection = document.getElementsByClassName("jumbotron");
console.log(html_collection);

for ( let i = 0; i < html_collection.length; i++ ){
    console.log(html_collection[i]);

}

let html_collection_1 = document.getElementsByTagName("li");

for ( let i = 0; i < html_collection_1.length; i++){
    console.log(html_collection_1[i]);

}

// for of schleife

for (let e of html_collection){
    console.log(e);
}

for ( let e of html_collection_1){
    console.log(e);
}

// querySelectorAll gib Node - lists  zuruck hat forEach Methode 

let node_list = document.querySelectorAll("p");
console.log(node_list);

for ( let i = 0; i < node_list.length; i++ ){
    console.log(node_list[i]);

}

for ( let e of node_list){
    console.log(node_list[e]);
}

node_list.forEach(function(e) {
    console.log(e);
});

