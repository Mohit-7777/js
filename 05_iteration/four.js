//Summary

// FOr Objects Always use Forin Loop
// We get the keys when we try to print the objects normally
// For values we need to log(Object[i])     just like we access the values in array


//We can't iterate Maps() using Forin Loop




const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb:"Ruby",
    swift: "Swift by apple",
}


for (const key in myObject) {
    // console.log(key);                   // This will show the keys of the object
    // console.log(myObject[key]);         // This will show the values of the object
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(key);                   // Only the indexing will be shown
    // console.log(programming[key]);      // The values of the arrays can we shown like this
}


const map = new Map()
map.set("IN", "India")
map.set("USA", "United States Of India")
map.set("Fr", "France")


for (const key in map) {
    console.log(key);                   //Forin Loop doesn't work for Maps like Forof Loop
}