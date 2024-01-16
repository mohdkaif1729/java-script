// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     // console.log(element);
    
// }

// const array = [1, 2, 3, 4, 5]
// const object = {
//     name: "kaif",
//     age: 20
// }

// this is not iterable for objects
// for(const [key, values] of object) {
    // console.log(`${key}, is ${values}`);

// }

// this is iterable for arrays

// const map = new Map()
// map.set('name', 'kaif')
// map.set('age', '20')
// for(const key of map) {
//     console.log(key);

// }
// for(const [key, value] of map) {
//     console.log(`${key} : ${value} `);

// }

// const myObject = {
//     js: 'java script',
//     cpp: 'c++',
//     c: 'c',
//     java: 'java',
//     python: 'py'
// }

// for(const key in myObject) {
//     // console.log(`${key} for ${myObject[key]} values!`);
// }

// const array = [3, 5, 6, 7, 9, 0]
// for(const key in array) {
//     // console.log(array[key]);
// }


// array.forEach( function myFunction(items) {
//     // console.log(items);
// } )

// array.forEach( (items) => {
//     // console.log(items);
// } )

// function printMe(items) {
//     console.log(items);
// }

// array.forEach(printMe)

// array.forEach( (items, index, arr) => {
//     // console.log(items, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languagFileName: "js"
    },
    {
        languageName: "java",
        languagFileName: "java"
    },
    {
        languageName: "python",
        languagFileName: "py"
    }
]

myCoding.forEach( (items) => {
    console.log(items.languagFileName);
} )