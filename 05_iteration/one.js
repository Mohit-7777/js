// for

// for (let i = 0; i <= 10; i++) {
//     const element = i
//     if(i==5){
//         console.log("5 is best");
//     }
//     console.log(element);
    
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`Outer Loop value: ${i}`);
//     for (let j = 0; j < 10; j++) {
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i + "*" + j + "=" + i*j);
        
//     }
    
// }


let myArr = ["flash", "batman", "superman"]

// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
}


//break and continue

for (let index = 0; index <= 20; index++) {
    if(index==5){
        console.log(`Detected 5`);
        break;                                 // Break the loop after this
    }

    console.log(`Value of i is ${index}`);
    
}

for (let index = 0; index <= 20; index++) {
    if(index==5){
        console.log(`Detected 5`);
        continue                                // Skip the error for 1 time
    }

    console.log(`Value of i is ${index}`);
    
}