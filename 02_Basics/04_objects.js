//Summary

// Object.keys(object_name) // This method is used to collect all the keys from the object and store it in an array...
// Object.values(object_name)

// object.entries(object_name)  all the keys and values are fetched and stored in different different arrays ["key1" , "val1"]  ["key1" , "val1"]

//Object_name.hasOwnProperty('key_name')  checks if the key exist in the particular Object or not

// ... Spread operator is used to concatinate two or more objects
// we can Also concatinate using object.assign({}, obj1, obj2)








//const tinderUser = new Object()           Singleton Object 
const tinderUser = {}                     //Literal Object


tinderUser.id = "123abc"
tinderUser.name = "Mohit"
tinderUser.isLoggedIn = true

// console.log(tinderUser);


const regularUser = {
    email : "mohit@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Mohit",
            lastname : "Bisht"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}               Concatination of 2 Objects  but its object inside Objects
// const obj3 = Object.assign({}, obj1, obj2)  //Concatination of 2 Objects    // {} is the target and obj1 and obj2 are the source tho it can work without {}

const obj3 = {...obj1, ...obj2}             //Concatination of 2 Objects  using Spread Operator

// console.log(obj3);

const users = [
    {
        id:1,
        email: "m@gmail.com",
    },
    {
        id:2,
        email: "s@gmail.com",
    },
    {
        id:3,
        email: "b@gmail.com",
    }
]

// console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // This method is used to collect all the keys from the object and store it in an array...
// Output for this will be an array

console.log(Object.values(tinderUser)); // This method is used to collect all the values from the object and store it in an array...
// Output for this will be an array

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name')); // output in boolean


const course = {
    coursename : "Js in hindi",
    price : "999",
    courseInstructor : "Mohit",
}

// course.courseInstructor              Instead of using . operator everytime 

const {coursename}= course              // we can make the properties of the object a variable and directly log them.
console.log(coursename);                // This is know as destructuring
                                        // Curly Brackets {} refers to destructuring...


const {coursename : name }= course       //also we can name the properties and make them as a variable 
console.log(name)


//Json :  Json is nothing but an Object or Array of Object without name
//Java Script Object Notation

// {
//     "name" : "mohit",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

// [
//     {},
//     {},
//     {}
// ]