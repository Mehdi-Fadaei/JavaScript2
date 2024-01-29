"use strict";

// // create listen element und add id as attribute

// let li = document.createElement("li");
// li.setAttribute("id", "Meine_listenelement");
// console.log(li);

// // create listen element anker und add id href as attribute

// let a = document.createElement("a");
// a.setAttribute("id", "mein_ankerelement");
// a.setAttribute("href", "#");

// // create text Node 

// let text = document.createTextNode("Element");

// a.appendChild(text);
// li.appendChild(a);

// //console.log(li);

let liste= document.querySelector("#navigation > ul");

// liste.appendChild(li);


// inser Adjacent Element

// liste.insertAdjacentElemen("beforbegin", li );

// liste.insertAdjacentElement("afterbegin", li);

// liste.insertAdjacentElement("beforeend", li);

// liste.insertAdjacentElement("afterend", li);

// insertAdjacentHTML Methode

let dom_string = "<li id=\"mein-listenelement\"><a id=\"mein-ankerelement\" href=\"#\">Element</a></li>";

// liste.insertAdjacentHTML("beforebegin", dom_string);
// liste.insertAdjacentHTML("afterbegin", dom_string);
// liste.insertAdjacentHTML("beforeend", dom_string);
// liste.insertAdjacentHTML("afterend", dom_string);

// insert Adjacent Text

let text_2 = "Lorem ipsum dolor sit amet";

// liste.insertAdjacentText("beforebegin", text_2);
// liste.insertAdjacentText("afterbegin", text_2);
// liste.insertAdjacentText("beforeend", text_2);
// liste.insertAdjacentText("afterend", text_2);


















