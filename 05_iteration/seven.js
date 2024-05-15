//Summary

// map() is used to take the values from arrays and change the values accordingly
// It takes only one value inside the callback of the function 





const myNumbers = [1,2,3,4,5,6,7,8,9]

// const newNums = myNumbers.map((num)=> num+10)           //This method creates a new array and put the values inside it according to the condition
                                                        //Filter is used to get the specific values from the arrays whereas map is used
// console.log(newNums);                                   // is used to get the values and change them accrodingly
                                                        // Both creates a new array
console.log(myNumbers);

const newNums = myNumbers.map((num) => num*100).map((num) =>num+1).filter((num) => num>=400)
console.log(newNums);