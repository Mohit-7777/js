let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);  // 33abc is converted to a number
console.log(valueInNumber);         //  which is NaN not a number
                                    // if null the valueInNumber will be 0

// "33" => 33
// "33abc" => NaN 
// true => 1; false => 0

let isLoggedIn = 10;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true; 0 => false;
// "" => false
// "Mohit" => true

let someNumber = 33
let StringNumber = String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber);