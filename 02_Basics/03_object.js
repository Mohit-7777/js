//All methods that are used here  // Summary

// 1.Symbol() : Used to define Symbol datatype
// 2.Square Brackets[]  are used to represent the Symbol dataType inside an object
// 3. To access the Symbol data Type we use [Symbol_datatype_property_name]
// 4. We can access the properties of an object using the . operator and also by using ["property_name"]
// 5. To access the property of an object inside the method of the same object we use this keyword





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