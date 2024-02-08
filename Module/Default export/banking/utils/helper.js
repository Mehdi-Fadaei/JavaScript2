import { element_typ, einrueckung } from "./settings";

export default function(obj) {
    let pre = document.createElement(element_typ);
    pre.textContent = JSON.stringify(obj, null, einrueckung);
    document.querySelector("body").appendChild(pre);
};