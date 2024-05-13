const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[0]);


//Array Method

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()


// console.log(myArr.includes(5));
// console.log(myArr.indexOf(3));


const newArr = myArr.join()   // Converts an array into string
// console.log(myArr);
// console.log(newArr);


//Slice , Spice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)      // Doesn't Change the Original instead it create a new Array    (It covers (1 till 3-1) in this case)
console.log("B", myn1);
console.log(myArr);

const myn2 = myArr.splice(1, 3)     // Changes/ Affect the Original Array   (It covers (1 till 3) in this case)
console.log("C", myn2);
console.log(myArr);


