//for of Loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(greet);
}

for(let i=0; i<greetings.length; i++){
        // console.log(greetings[i]);
}

//Maps => Similar to array          Map is an Object
const map = new Map()
map.set('IN', "India")                              //Output   'IN' => 'India'
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);

// for(const key of map){
//     console.log(key);                               //This will print the key in arrays eg: ['IN', 'India']
// }                                                                                           ['USA', 'United States Of America']

for(const [key, value] of map){
    console.log(key, ":-", value);                                                             // IN :- India
}                                                                                               //Fr :- France

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for(const [key, value] of myObject){                   // MyObject is not iterable
    console.log(key, ":-" , value);                    // It doesn't work for the objects like it use to work for the maps
}

