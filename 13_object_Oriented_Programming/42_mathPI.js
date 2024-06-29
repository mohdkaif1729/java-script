
// let k = 43.4321


// let d = k.ceil()
// console.log(Math.ceil(Math.PI));

// You can not change the property of any object in js
// const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);


const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,
}

// console.log(chai);

let descripter = Object.getOwnPropertyDescriptor(chai, "name");


console.log(descripter);

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
})

descripter = Object.getOwnPropertyDescriptor(chai, "name");

console.log(descripter);
