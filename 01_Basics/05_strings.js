const name = "Mohit"
const repoCount = 50;

//String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Mohit-mb-com')

// console.log(gameName[0]);
// console.log(gameName.__porto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,2)   // Can't give -ve values in substirng
console.log(newString);

const anotherString = gameName.slice(-1, 1)     //-ve values are permitted
console.log(anotherString);

const newStringOne = "  Mohit   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mohit.com/mohit%20bisht"
console.log(url.replace('%20', '-'))

console.log(url.includes('mohit'));

console.log(gameName.split("-"));