const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10)
// console.log(newNums);


// const newNums = myNumbers.map( (num) => {return num + 10})


// chaining is very important 
const newNums = myNumbers
                        .map( (num) => num + 10)
                        .map( (num) => num + 1)
                        .filter( (n) => n % 2 == 0 )
console.log(newNums);
 