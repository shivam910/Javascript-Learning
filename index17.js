// Fetch API
console.log("IMPORTANT : Fetch API");

// button with id mybtn
let mybtn = document.getElementById("mybtn");

// div with id content
let content = document.getElementById("content");


// GET REQUEST
// function getdata()
// {   
//     console.log("started get data");
//     url = "shivam.txt";
//     fetch(url).then((response) =>
//     {
//         console.log("inside first then");
//         return response.text();
//     }).then((data) =>
//     {   console.log("inside second then");
//         console.log(data);
//     })
// }

// function getdata()
// {   
//     console.log("started get data");
//     url = "https://api.github.com/users";
//     fetch(url).then((response) =>
//     {
//         console.log("inside first then");
//         return response.json();
//     }).then((data) =>
//     {   console.log("inside second then");
//         console.log(data);
//     })
// }
// console.log("before get data");
// getdata();
// console.log("after get data");



// POST REQUEST
function postdata()
{   
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = `{"name":"ABCDEFGHI","salary":"1234","age":"28"}`
    params = {
        method : `post`,
        headers : {
           "Content-Type" : "application/json"
        },
        body: data          // We need to stringify the object
    }
    fetch(url,params).then(response => response.json())
    .then(data=>console.log(data))
}

postdata();