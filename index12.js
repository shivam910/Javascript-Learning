console.log("lalala")

class Employee{
    constructor(name, department, experience){
        this.name =  name;       
        this.department = department;  
        this.experience =   experience;
    }
    slogan()
    {
        return `I am ${this.name} and I am the best`;
    }
    joiningyear()
    {
        return 2021-this.experience;
    }
    static add(a,b)
    {
        return a+b;
    }
}

shivam = new Employee("Shivam", "CS", 10);
console.log(shivam);
console.log(shivam.joiningyear());
console.log(Employee.add(9,13));

class programmer extends Employee {
    constructor (name, department, experience, lang){
        super(name, department, experience);
        this.lang = lang;
    }

    favlang(){
        if (this.lang == "python")
            return "Python";
        else
            return "JS";
    }
    static multiply(a,b){
        return a*b;
    }
}
rohan = new programmer("Rohan", "CS", 3, "python");
console.log(rohan);
console.log(programmer.multiply(3,5));