console.log("Hello Shivam");

let imparray=["Aloo", "Pyaz", "Bhindi"];
localStorage.setItem("sabzi", JSON.stringify(imparray));

//Add a key value pair inside local storage
localStorage.setItem("sabzi", JSON.stringify(imparray));
localStorage.setItem("Name","Shivam");
localStorage.setItem("Name2","Adarsh");

localStorage.removeItem("Name2");

// let name=localStorage.getItem("Name");
let name= JSON.parse(localStorage.getItem("sabzi"));
// localStorage.clear();  used to clear the local storage
console.log(name);

//Session Storage

sessionStorage.setItem("sessionsabzi", JSON.stringify(imparray));
sessionStorage.setItem("sessionName","oShivam");
sessionStorage.setItem("sessionName2","oAdarsh");