const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)      it will make index 3 an array consisting of 3 elements which are superman flash and batman

// console.log(marvel_heros);
// console.log(marvel_heros[3]);    There will be total 4 element and index 3 contains 3 elements

// const allHeroes =marvel_heros.concat(dc_heros)           There will be 6 elements in the array
// console.log(allHeroes);

//Spread Operator

const all_new_heroes = [...marvel_heros, ...dc_heros]      // We can concatinate more than 2 arrays using spread operator

// console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity)         // flatten the multi-dimensional Array
// console.log(real_another_array);



// console.log(Array.isArray("Mohit"));
// console.log(Array.from("Mohit"));

console.log(Array.from({name: "Mohit"}));       // DOesnt work for key Value Pair So it will give [] Empty array


let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));
// console.log(Array.of(marvel_heros, dc_heros));
