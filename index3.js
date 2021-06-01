console.log("Welcome Shivam");

let element= document.createElement("li");
element.className="childul";
element.id="createdid";
element.setAttribute("title","mytitle");
element.innerText="This line is added by using javascript";
element.style.color="red";

//to append the element in the document
let ul=document.querySelector("ul.this");
ul.appendChild(element);

// console.log(ul);
// console.log(element);
let elem2=document.createElement("h3");
elem2.id="elem2";
elem2.className="elem2";
let tNode=document.createTextNode("This is elem2");
elem2.appendChild(tNode);
element.replaceWith(elem2);

let myul=document.getElementById("myul");
myul.replaceChild(element,document.getElementById("fui"));
myul.removeChild(document.getElementById("lui"));