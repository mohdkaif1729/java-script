const myArray = [1, 2, 3, 4, 5, "Mohd Kaif", true, 20.12]
// console.log(myArray);

const newArray = [8, 9, "Kaif", false, 19.7]
// myArray.push(newArray);

// console.log(myArray); // add array in existing array

const joinArray = myArray.concat(newArray)
// console.log(joinArray);

const all_concatenate = [...myArray, ...newArray] // more useful method 
// console.log(all_concatenate);

const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_Array.flat(Infinity)

// console.log(real_another_array);

// console.log(Array.isArray("kaif"));
// console.log(Array.from("'hitesh"));
// console.log(Array.from({name: "hitesh"})); // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
