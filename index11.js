console.log("hiiiiiiieeee");

const proto={
    slogan: function(){
        return `Shivam Sukla is always the best`;
    },
    change: function(newname){
        this.name = newname ;
    }
}

// const shivam = Object.create(proto);
// shivam.name = "Shivam";
// shivam.role = "Web Developer";
// shivam.like = "family";
// shivam.change ("New Shivam");

const shivam1 = Object.create(proto,{
    depat: {value: "Hero"},
    name: { value : "Shivam", writable: true}
})
shivam1.change("Shivam1")

// console.log(shivam1);

function employee(name, salary, experience){
    this.name= name;
    this.salary = salary;
    this.experience = experience;
}

employee.prototype.slogan = function(){
    return `Shivam is still the best than ${this.name}`;
}

let shivam = new employee("anyone", 1500000, 7);
console.log(shivam.slogan());

function programmer( name, salary, experience, language){
    employee.call(this, name, salary, experience);
    this.language=language;
}

abcd = new programmer ("abcd", 10, 0, "nothing")
console.log(abcd);