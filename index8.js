console.log("yay shivam");

let today = new Date();
console.log(today);

let otherday = new Date( "5 10 2012 10:15:10");
// (MM/DD/YYYY)
console.log(otherday);
let a = otherday.getDay();
a = otherday.getDate();
a = otherday.getMinutes();
a = otherday.getSeconds();
console.log(a);
otherday.setDate(25);
otherday.setMinutes(50);
otherday.setHours(4);
console.log(otherday);