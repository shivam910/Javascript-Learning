console.log("Wow Shivam")

//object literal

let obj = {
    name : "Shivam",
    stream : "Web development",
    address : "Jaipur"
}

console.log(obj);

function Obj (givenname){
    this.name = givenname;
}

Obj.prototype.getName = function(){
    return this.name;
}

Obj.prototype.setName = function(newName){
    this.name= newName; 
}

let obj2 = new Obj ("Shukla");
console.log(obj2);