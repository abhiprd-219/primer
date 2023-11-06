// class P{
//     constructor(name,age){
//         this.name = name,
//         this.age = age
//     }

//     getName(){
//         return this.name;
//     }
// }

// let p1 = new P("aman",21);


// class p2 extends p1{

//     constructor(name,age){
//         super();
//         this.name = name,
//         this.age = age
//     }
// }

// let p2Object = new p2("dsds",21);
// console.log(p2Object.name)
// console.log(p2Object.getName());



// class Student(
// constructor(name,age){
//     this.name = name,
//     this.age = age
// }
// )



























class Student{
    constructor(name,age){
        this.name = name,
        this.age = age
    }

    getName(){
        return this.name;
    }
}


let student1 = new Student("Aman",10);

let student2 = new Student("Karan",15);

let student3 = new Student("tre",20);

let student4 = new Student("dfgfg",25);
let student5 = new Student("as",30);

let student6 = new Student("ddsd",35);


let allStudents = [student1, student2, student3, student4, student5, student6];

let age20OrMore = allStudents.filter(function(student) {
  return student.age >= 20;
});

console.log(age20OrMore);




// Create 5 student objects with age 10,15,20,25,30.
// after that using filter method filter out the students with age >=20.



// The functions which accepts another functions in its parameter is called higher order function ...eg Map,reduce,filter etc
// A function having  lexical environment called closure


// var b =10;
// function f1(){
//     function f2(){
//         console.log(a);
//     }
//     f2();
// }

// f1();



// // In JavaScript, a closure is a function that "closes over" its surrounding lexical (scope) environment, capturing and preserving the variables from that environment even after the outer function has finished executing. This allows the inner function to access and manipulate those variables.
