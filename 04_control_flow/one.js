//Summary

//Basic if else and else if  statement
// && vs ||



// if

// const isUserLoggdIn = true
// const temperature = 41

// if(3!=2){
//     console.log("Executed");
// }
// if(temperature<50){
//     console.log("Less than 50");
// }else{
//     console.log("greater than 50");
// }

// <, >, <=, >=, ==, !=, ===, !==


const score = 200

if(score>100){
    const pow = "fly"
    // console.log(`User power : ${pow}`);
}

// console.log(`User power : ${pow}`);      pow is not defined


// const balance = 700
// if(balance>500) console.log("test"), console.log("test2")

// if(balance < 500){
//         console.log("Less than 500");
// }else if(balance < 750){
//         console.log("less than 750");
// }else if(balance<900){
//         console.log("less than 900");
// }else{
//         console.log("Greater than 900");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}