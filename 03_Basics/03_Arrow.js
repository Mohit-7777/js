const user = {
    username: "Mohit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Ankit"
// user.welcomeMessage();

// console.log(this);          // In node Environment this keyword refers to an empty object but in windows it is a window Object

// function Hello(){
//     let username = "Mohit"
    // console.log(this.username); // Undefined   It works only on objects and we can't use it in a function
    // console.log(this);          // This gives a lot of data like global or sth
//}

const Hello = () => {
    let username = "Mohit"
    console.log(this.username);     //Undefined same as Normal Function
    console.log(this);              // Empty Object ...  Different as compared to Normal Function
}


// Hello()

// const addTwo = (num1, num2)=>{           Normal Arrow Function
//     return num1 + num2                   When we use curly brackets{}, return keyword is mandetory       //Explicit return
// }


// const addTwo = (num1, num2)=> num1 + num2     // We don't require CURLY BRACKETS{} when we have only one statement and return keyword is also not required 
// const addTwo = (num1, num2)=> (num1 + num2)    // Implicit return        // () can also be used

// console.log(addTwo(10, 20)); 

const addTwo = (num1, num2)=> ({username: "Mohit"}) // For Objects ROUND BRACKETS()  are mandetory

console.log(addTwo(1,33));

// const myArray = [2,4,5,6,7,7]

// myArray.forEach

