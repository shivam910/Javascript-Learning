console.log("hello world")

// object oriented js
// object literal for cretaing object

let mobile = {
    name : "MI5PRO",
    price : 5000,
    start : function(){
        console.log("Mobile is  starting");
    }
}
console.log(mobile);


//creating a constructor for mobile
function generalmob(givenName, givenprice){
    this.name = givenName;
    this.price = givenprice;
    this.start = function(){
        console.log("new mobile is starting");
    }
    this.analyze = function(){
        console.log(`This mobile price is ${20000 - this.price} less than Samsung`);
    }
}
mob1 = new generalmob("Realme", 20000);
mob2 = new generalmob("Samsung" , 18000);
console.log(mob1, mob2);
