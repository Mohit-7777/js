//Summary

//forEach is used to iterate all over the array
// we use callbacks here..

// The callback function of forEach loop contain 3 parameters 1.value
//                                                            2.key
//                                                            3. whole array            we can name them anything

// We can use this method to fetch a particular data from the array or array of Objects






const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item) {       //Callback functions doesn't have names
        // console.log(item);
})                     


// coding.forEach((val) => {console.log(val);})

function printMe(item){                 //function to print anything it receives in the parameters4
        console.log(item);              //Callback fn for coding.forEach
}

coding.forEach(printMe)                 // giving the reference of the print function in the arguments of forEach loop


coding.forEach((item, index, arr)=>{            //3 parameters of the forEach loop 1. item or the value         only 1 is also possible and only 1 and 2 is also possible
        console.log(item, index, arr);                                           //2. Index of the values
})                                                                               //3. Whole Array





//To Access the values of array of objects we use forEach
// [{}, {}, {}]         

const myCoding = [
        {
                languageName:"JavaScript",
                languageFileName: "js"
        },
        {
                languageName: "java",
                languageFileName: "java"
        },
        {
                languageName: "python",
                languageFileName: "py"
        }
]

myCoding.forEach((item)=>{
        console.log(item.languageName);
})