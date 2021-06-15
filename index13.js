console.log("good going");

// Example of asynchronus programming

setTimeout(() => {
    
    for(let i=0 ; i<100 ; i++)
    {   
    const element = i ;
    console.log(element);
    }
}, 100);

console.log("no.s from 0 to 99");