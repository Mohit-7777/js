//Summary

//forEach loop works only with the callbacks ....
// We can't return items using the forEach loop we can only log them

//To return the items from the array we use filter()
// filter method also works with callbacks..
// It takes values inside the callbacks and return them according to the conditions
// It creates a whole new array and doesn't affect the Original array





// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item)=>{            // we cant return item uisng forEach loop
//         console.log(item);      
//         return item    
// })

// console.log(values);


const myNum = [1,2,3,4,5,6,7,8,9]

// const newNums = myNum.filter((num)=> num>4)           // we can return using the .filter function
// console.log(newNums);                                 // It creates another array and save the values according to the condition



// We can do the same without filter function but

const newNums = []                                      // Here we need to create a new array

myNum.forEach(num => {                                  // And push the values to the array according to the condition
    if(num>4){
        newNums.push(num)
    }
});
// console.log(newNums);


const books = [
    {title:"Book ONe" , genre: "Fiction", publish: 1974, edition: 2004},
    {title:"Book Two " , genre: "Non-Fiction", publish: 1992, edition: 2008},
    {title:"Book Three" , genre: "History", publish: 1999, edition: 2010},
    {title:"Book Four" , genre: "Science", publish: 1989, edition: 2014},
    {title:"Book Five" , genre: "Fiction", publish: 2009, edition: 2010},
    {title:"Book Six" , genre: "History", publish: 1987, edition:1996 },
];

let userBooks = books.filter((bk) => bk.genre=="History")
 userBooks = books.filter((bk) => bk.publish >= 1998 && bk.genre=="History")

console.log(userBooks);