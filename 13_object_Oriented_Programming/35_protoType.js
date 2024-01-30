function multiplyBy5(num) {
    return num * 5; 
}

// function is also objects in JS
// multiplyBy5.power = 2
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);


function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++;
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 35)
// new is use then new object is


// console.log(chai.username);
// ptototype is nothing but the general object which is present in all the objects

// using prototype we add the new properties and new functions in existing objects and newly creating object


const userName = 'kaif     ';

String.prototype.truelenght = function() {
    return this.trim().length
}
// this is how you create own method to claculate the lenght
console.log(userName.truelenght());

let user = {
    name: 'kaif',
    
}
Object.prototype.printInfo = function() {
    console.log(this.name);
    console.log(this.age);
}

user.printInfo();



// inheritance

let person = {
    fullname: "mohd kaif",
    age: 20,
    // __proto__: user
}

// let doctor.__proto__ = person;


// person.__proto__ = user

// modern syntax
Object.setPrototypeOf(person, user)
console.log(person.name);