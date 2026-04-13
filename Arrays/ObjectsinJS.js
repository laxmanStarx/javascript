let user = {
    name : "vaibhav",
    age :23
}

console.log(user.age)

//object literals

let obj = {a: 1, b: 2};
console.log(obj)

//2 Constructor

let obj1 = new Object()
console.log(obj1.name = "Rajesh");


//Object.create()


let proto = {greet() {console.log("hi")}};
let obj3 = Object.create(proto) 
console.log(obj3);