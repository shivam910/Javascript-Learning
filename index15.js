console.log("Now I am starting with Promises");

//  As we know that callback functions were initially used to handle asynchronous operations. However, callbacks functions were limited in terms of functionality and often led to confusing code, so, promises were introduced to deal with these problems.


// When new Promise is created, the function passed into it runs automatically. It contains the producing code which produces the result. Its arguments resolve and reject.


// The constructor syntax for a promise object is:

// let myPromise = new Promise(function(resolve, reject) {
// // code here
// });

function func1()
{
    return new Promise(function(resolve, reject)
    {
    setTimeout(() =>{
        const error = true ;
        if (!error)
        {
            console.log("Func1 :Promise Resolved") ;
            resolve();
        }
        else
        {
            console.log("Func1 :Promise Rejected");
            reject("Sorry not been fullfilled");
        }
    },2000)
    })
}


func1().then(function (){// if callback gets resolved  
    console.log( "Shivam : Thanks for resolving" );
}) .catch(function(error){
    console.log("Shivam : Very Bad Bro ,reason : " + error);
})




// Benefits of Promises:-
// It improves the code readability
// It is better in the handling of asynchronous operations
// It has a better flow of control definition in asynchronous logic
// It is better in error handling