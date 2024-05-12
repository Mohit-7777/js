// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score =100 // js is a DYNAMICALLY TYPED LANGUAGE that why we don't require to input the datatype for the declaration of a variabel
const scoreValue = 100.3

const IsLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 741852963741852n

//Reference Type(Non primitive)
// Array, Objects, Functions

const heroes = ["Shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Mohit",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heroes);