const accountId = 144553
let accEmail = "abcd@google.com"
var accPass = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2
accEmail = "ab@mb.com"
accPass = "54321"
accountCity = "Dehradun"

console.log(accountId);

// BIG INT :- represented by n      range:- - (2^53-1) to + (2^53-1)

let y = 9999999999999999;       // This will be rounded off to 10000000000000000

let x = 999999999999999999999n; //BigInt... Here n is used for BigInt

console.log(`${y} and ${x}`);

console.table([accountId, accEmail, accPass, accountCity, accountState]);