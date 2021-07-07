console.log("Async-Await");

// The async function returns a promise 
async function Shivam() {
  console.log("Inside Shivam function");
  const response = await fetch("https://api.github.com/users");
  console.log("before response");
  const user = await response.json();
  console.log("users resolved");
  return user;
}

console.log("before calling shivam");
let a = Shivam();
console.log("after calling Shivam");
console.log(a);
a.then((data) => console.log(data));
console.log("last line");

// An async function is a function that is declared with the asynckeyword. Async functions are the instances of AsyncFunction constructor, and the await keyword is permitted within them.
// The async and await keywords enable the asynchronous, promise-based behavior to be written cleaner.