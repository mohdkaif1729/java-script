// singleton
// object.created()

// object literals

const mySymbol = Symbol("key1") 

const JsUsers = {
    name: "kaif",
    // mySymbol: "Mohd Kaif", // this is not a correct declaration
    [mySymbol]: "Mohd Kaif", // this is thes correct declaration
    age: 18,
    location: "vasundhara",
    email: "mohdkaif@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "saturday"],
    greetingTwo : function() {
        console.log(`hello js users ${this.name}`);
    }

}

// console.log(JsUsers.name);
// console.log(JsUsers["mySymbol"]); // this not the correct way to access the symbol key

// console.log(JsUsers[mySymbol]); // this is the correct way to access the symbol key

JsUsers.email = "mohdkaif10@uber"
// Object.freeze(JsUsers) // freeze to not change object keys
JsUsers.email = "kaif@microsoft"

// console.log(JsUsers);

JsUsers.greeting = function() {
    console.log("hello js users");
}


console.log(JsUsers);