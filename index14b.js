console.log( "using promises (its a part b )")

let students = 
[
    {   name : "Shivam", subject : "Javascript"},
    {   name : "Harry",  subject : "Python"}   
]

function enrollstudent (student)
{   
    return new Promise( function(resolve, reject){
    setTimeout( function()
    {
        students.push(student) ;
        console.log( "New Student enrolled" ) ;
        const error = false;
        if(!error)
        resolve() ;
        else
        reject();   
    }, 5000)
    })
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
    }, 1000);
}


let newstudent = { name : "Sunny" , subject : "Python" };

enrollstudent(newstudent).then(getstudent).catch(function(){
    console.log("Some error occured");
});