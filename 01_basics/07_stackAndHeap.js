// Stack (Primitive)
// passing values
let valueOne = "Mohd"
let valueTwo = valueOne
valueTwo = "Mohd Kaif"

// console.log(valueOne);
// console.log(valueTwo);

// Heap 

const obj1 = {
    name: "mohd kaif",
    age: 20
}

const obj2 = obj1
obj2.name = "Kaif"

// Passing reference 
console.log(obj1.name);
console.log(obj2.name);