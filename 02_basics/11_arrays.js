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


