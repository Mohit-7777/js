//Summary

// Functions :-  Function Definitions, Function Calling, Arguments , parameters, reference , exection, return statement

//passing all the values to the function parameter using the ...Rest operator

// passing whole object to the function parameter and using the parameter in the definition

// passing the arrays into the function parameter and using the  parameter in the definiton




function sayMyname(){
    console.log("M");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("t");
}
//sayMyname   => This is the REFERENCE of the method and using () we execute it  
//Reference tells us where exactly the method exists     
// sayMyname();   USED to execute the function


function addTwoNumber(num1, num2){          //while defining these brackets() are known as paramenters
    console.log(num1+num2);
}
// addTwoNumber(3, 4)      //While calling () are known as Arguments.  Arguments are provided inside the brackets

function addTwoNumber(num1, num2){
    // let result = num1 + num2;
    // return result;

    return num1+num2

    console.log("Mohit");           // Nothing will work after the return statement
}

const result =  addTwoNumber(5, 7)
// console.log("Result: " + result);

// function loginUserMesage(username){
function loginUserMesage(username = "Mohi"){
    // if(username === undefined){
        if(!username){
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`
}

console.log(loginUserMesage("Mohit"));  // This will override Mohi only if the arguments are passed Correctly
console.log(loginUserMesage()); 



// function calculateCartPrice(...num1){           //... is a REST Operator and is used to pass all the values present inside the arguments
  
    function calculateCartPrice(val1, val2, ...num1){       // val1 and val2 are assigned the first 2 values of the arguments
    return num1
}

console.log(calculateCartPrice(200, 400, 500));


const user = {
    username: "Mohit",
    price: 199,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)      // Here we have passed the whole object

handleObject({
    username: "Ankit",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))