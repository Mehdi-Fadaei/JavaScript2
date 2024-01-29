"use strict";

//getElementById Methode gib element id oder null zuruck 

let el_by_id_1 = document.getElementById("navigation");
console.log(el_by_id_1);

let el_by_id_2 = document.getElementById("not true id");
console.log(el_by_id_2);

// getElementsByClassName Methode gib HTML Collection zuruck wenn length == 0 ist leer 
let els_by_class_name_1 = document.getElementsByClassName("jumbotron");
console.log(els_by_class_name_1);

let els_by_class_name_2 = document.getElementsByClassName("Test");
console.log(els_by_class_name_2);
console.log(els_by_class_name_2.length == 0);

// getelementsByTagname methode gin HTML collection zuruck 
let els_by_tag_name_1 = document.getElementsByTagName("p");
console.log(els_by_tag_name_1);

let els_by_tag_name_2 = document.getElementsByTagName("test");
console.log(els_by_tag_name_2);
console.log(els_by_tag_name_2.length == 0);





