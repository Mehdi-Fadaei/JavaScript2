export const objekt_anzeigen = function(obj) {
    let pre = document.createElement(element_typ);
    pre.textContent = JSON.stringify(obj, null, einrueckung);
    document.querySelector("body").appendChild(pre);
};