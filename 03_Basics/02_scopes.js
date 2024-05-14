//Summary

//Basic Scoping 
// function inside function
//Expression can't be called about the function but Normal functions can be








// let a =10
// const b=20
// var c =30

let a = 300

if(true){
    let a =10
// const b=20
// var c =30
// console.log(a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Mohit"
    // console.log("mohittttt");

    function two(){
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()


//+++++++++++++++++++++++++++++++++ ++++++++++++++++++++++++++++++++++++

console.log(addone(5));             // Normal Function can be called by putting function call above the function
function addone(num){               // Normal Function 
    return num+1
}
// addone(5)



// addTwo(5)                           //Can't access addTwo before initialization
const addTwo = function(num){       //Expression or Variables
    return num+2
}


