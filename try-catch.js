console.log("Try and Catch in JS");


// Pretend this is coming from a server
let a="Shivam Shukla";
a = undefined;
if(a != undefined){
    throw new Error(`This is not undefined`);
}
else{
    console.log(`This is undefined`);
}

try {
    // kbaiga
    console.log(`We are inside try block`);
    functio();
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log(`Finally`);
    
}
