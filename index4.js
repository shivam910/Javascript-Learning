console.log("Hey Shivam");

document.getElementById("heading").addEventListener
("click",function(e){
    console.log("Event Created");
    //location.href="//google.com"
    let variable= e.target;
    // variable= e.target.className;
    // variable= e.target.classList;
    // variable= e.target.id;
    // variable=Array.from(e.target.classList);
    variable= e.target.offsetX;
    variable= e.target.offsetY;
    variable= e.target.clientX;

    console.log(variable);

});