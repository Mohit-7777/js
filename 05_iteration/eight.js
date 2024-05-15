//Summary

// reduce():-  Callback of this function takes two values accumulator and current value and at the end of the 
//             definiton we are required to initialize the value of accumulator

// reduce() give a single value by calculating the arrays .

//we can use method chaining to use filter and map with reduce function









const myNums = [1,2,3,4]

// const myTotoal = myNums.reduce(function(acc, cur) {
//     console.log(`acc: ${acc} and cur: ${cur}`);
//     return acc + cur
// }, 0)                                                       // This 0 after the definition of the function is used to define the first value of the accumulator


const myTotoal = myNums.reduce((acc, cur)=> acc+cur, 0)         //Unlike filter and map , Reduce gives only 1 reduced value which doesn't requrie array
console.log(myTotoal);
console.log(myNums);

const shoppingCart = [
    {
        itemName :"js course",
        price:2999,
    },
    {
        itemName: "py course",
        price:999,
    },
    {
        itemName :"mobile dev course",
        price:5999,
    },
    {
        itemName :"Data science course",
        price:12999,
    }
]

const priceTOPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceTOPay);