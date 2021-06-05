// console.log("Hello Shivam");

// // document.getElementById("heading").addEventListener
// // ("click",function(e)
// //     {
// //         let variable=e.target;
// //         console.log(variable);
// //     }
// // )

// let btn =document.getElementById("btn");
// btn.addEventListener( "click" , func1 );
// btn.addEventListener( "mousedown" , func3 );
// btn.addEventListener( "dblclick" , func2 );

// function func1(e){
//     console.log( "Thanks", e );
//     e.preventDefault();
// }

// function func2(e){
//     console.log( "Thanks its a double clisck", e );
//     e.preventDefault();
// }

// function func3(e){
//     console.log( "Thanks its a mouse down", e );
//     e.preventDefault();
// }

// document.querySelector(".no").addEventListener
// ("mouseenter",function()
// {
//     console.log("you entered no");
// })

// document.querySelector(".no").addEventListener
// ("mouseleave",function()
// {
//     console.log("you entered no");
// })

document.querySelector(".no").addEventListener
("mousemove",function(e)
{
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor="rgb(${e.offsetX}, ${e.offsetX}, ${e.offsetX})";
    console.log("you moved your mouse");
})