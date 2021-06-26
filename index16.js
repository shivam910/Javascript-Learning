console.log("Welcome to arrow function");

// regular function
// const shivam = function()
//     {
//         console.log("I'm the most awesome person i know.");
//     }
// shivam();

// Arrow function
const shivam = () =>
    {
        console.log("I'm the most awesome person i know.");
    }
shivam();

const greet = () => `Good Moorning`;
console.log(greet());

// for single argument we dont need to put the parenthesis
const greeting = name => "good morning "+name;
console.log(greeting("Shivam!"));

// for multiple arguments parenthesis is required
const myself = (name,age) => "Hi i am " + name + ". My age: "+age;
console.log( myself("Shivam",21) );