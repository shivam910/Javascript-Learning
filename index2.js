console.log("Welcome bro");

let cont= document.querySelector(".no");
cont= document.querySelector(".container");

let nodeName = cont.childNodes[0].nodeName;
// console.log(nodeName);
let nodeType=cont.childNodes[1].nodeType
// console.log(nodeType); 

// console.log(cont.childNodes);
// console.log(cont.children);

let container=document.querySelector("div.container");
console.log(container.children[1].children)