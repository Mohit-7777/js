//Singleton :- when object is created using constructor

// When creating object as literal its non singleton        (Object Literal)

//Object Literals

// Object.create (Singleton)

const mySym = Symbol("Key1")

const JsUser = {
    name: "Mohit",
    "fullname" : "Mohit Bisht",
    [mySym] : "myKey1",                     // Square Brackets[]  are used to represent the Symbol dataType
    age: 23,
    location: "Dehradun",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],
}

// console.log(JsUser.name);
// console.log(JsUser["fullname"]);        // The best way to access an element in an object    It works everywhere and everytime
// console.log(JsUser[mySym]);             // Symbol Doesn't require double inverted commas
// console.log(JsUser);


JsUser.age = 22

//Object.freeze(JsUser)                   // This method is useful when we want to make the Object constant.. Values can't be changed using it

JsUser.age = 45

// console.log(JsUser["age"]);


JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user${this.fullname}`);       //To refer the property of same Object we use the keyword this.
}

// console.log(JsUser.greeting);              // Function doesn't execute... It just gave the reference (Function return back)
// console.log(JsUser.greeting());
JsUser.greeting();
JsUser.greetingTwo();