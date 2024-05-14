//Summary

// Truthy and Falsy Values
// Truthy and Flasy values for arrays and Objects

//Nullish Coalescing Operator (??): null undefined
//Ternary Operators



const userEmail = "m@mohit.ai"

if(userEmail){
    console.log("Got user Email");
}else{
    console.log("Don't have user email");
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", "false", " ", [] , (), {}, function(){}

// if(userEmail.length === 0){
//     console.log("arrray is empty");
// }

const empObj = {}
if(Object.keys(empObj).length===0){
    console.log("Object is empty");
}


//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null??10
val1 = undefined??10??20

console.log(val1);


// Ternary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80");