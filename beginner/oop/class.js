class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    // getter function
    personName() {
        return this.name;
    }
    introduceSelf() {
        return `Hello My name is ${this.name} and I will teach you ${this.subject}`;
    }
    // setter 
    //set personName(x) {
     //   this.personName = x;
    //}
}

let teacher1 = new Teacher('Jack', 'english');
console.log(teacher1.personName());
console.log(teacher1.introduceSelf());

console.log(typeof Teacher);