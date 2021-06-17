console.log(" Man you completed ajax.... superb")



// Callbacks are used to make sure that a function is not going to execute before a task is completed but will execute right after the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from future errors.

// How to create a Callback:-

// function addition(x, y , callback){
//     setTimeout(() => {
//     document.write(`The sum of ${x} and ${y} is ${x+y}.`); 
//     callback(); 
//      }, 5000); } 
//      // display() function is called just after the ending of addition() function
//     function display(){ 
//     document.write('Numbers added!'); 
//      } 
//      // Calling addition() function
//     addition(5,5,display);


    let students = 
    [
        {   name : "Shivam", subject : "Javascript"},
        {   name : "Harry",  subject : "Python"}   
    ]

    function enrollstudent (student, callback)
    {
        setTimeout( function()
        {
            students.push(student) ;
            console.log( "New Student enrolled" ) ;
            callback() ;
        }, 1000)
    }

    function getstudent (student)
    {
        setTimeout( function()
        {
            let str="";
            students.forEach(function (student)
            {
                str+= `<li> ${student.name}</li>`;  
            }
            );
           
            document.getElementById("students").innerHTML = str;
            console.log("fetched");
        }, 5000);
    }


    let newstudent = { name : "Sunny" , subject : "Python" };

    enrollstudent(newstudent, getstudent);