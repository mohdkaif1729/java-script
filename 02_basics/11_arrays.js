// arrays

// this is how we create array in js statically and dynamically
const myArray = [0, 1, 2, 3, 4, 5]
// console.log(myArray);

const myArrayNew = new Array(0, 1, 2, 3, 4, 5)
// console.log(myArrayNew);

// push operation
// myArray.push(6) // push elements from back
// myArray.push(7)
// myArray.push(8)
// console.log(myArray);

// pop operation
// myArray.pop()
// myArray.pop()
// console.log(myArray);

// unshift operation
// myArray.unshift(-1) // push elements from front
// myArray.unshift(-2)
// myArray.unshift(-3)
// console.log(myArray);

// shift operation
// myArray.shift()
// myArray.shift()
// console.log(myArray);

// slice operation
// console.log("Original Array: ", myArray);
const sliceArray = myArray.slice(1, 3)
// console.log(sliceArray);

// splice operation
// console.log("after slice operation: ", myArray);
const spliceArray = myArray.splice(1, 3)
// console.log(spliceArray);
// console.log("after splice operation: ", myArray);

// join operation
const joinArray = myArray.join()
console.log(joinArray);
console.log(typeof joinArray);

// This is how you declare array with initialization in JS.
const cars = ["Saab", "Volvo", "BMW"];

// This is how you declare an array in JS, after you initialize it with values.
const house = [];
house[0] = "kaif";
house[1] = 4;
house[2] = 4.45;
// full array print
console.log(house);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// This is the method you declare array with initialization with new keyword.
const points = new Array(); // declare array
const sportsCars = new Array("Saab", "Volvo", "BMW");
console.log(sportsCars);

// Array Elements Can Be Objects
// JavaScript variables can be objects. Arrays are special kinds of objects.
// Because of this, you can have variables of different types in the same Array.
// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
// In JavaScript, arrays use numbered indexes.
// In JavaScript, objects use named indexes.

// propeties of array
// length
console.log(fruits.length);

let kaif;

// Array methods
// how to check that array is an array
console.log(typeof fruits); // return object
console.log(Array.isArray(kaif));

// converted array into strings

const fruitsToStrings = fruits.toString();
console.log(fruitsToStrings);

console.log(fruits.at(2));

console.log(fruits.join("$"));

fruits.push("me");
fruits.push("may");
fruits.push(5);

fruits.pop();
fruits.pop();

fruits.shift();
fruits.shift();

fruits.unshift("rohan");
fruits.unshift("sohan");
fruits.unshift("mohan");

console.log(fruits);

// it leaves empty holes in array that's why it is not recommanded
// delete fruits[0];

console.log(fruits);

// The concat() method creates a new array by merging (concatenating) existing arrays:
// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.

const newArray = fruits.concat(cars);
console.log(newArray);

const array1 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3 to 4
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copyint to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]


const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
