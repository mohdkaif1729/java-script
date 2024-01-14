// Dates

const myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// const createdDate = new Date(2023, 0, 23, 5, 4, 34, 3)
// const createdDate = new Date(2023, 0, 23)
// const createdDate = new Date("2023-01-14") // yy-mm-dd
const createdDate = new Date("04-01-2025") // dd-mm-yy
// console.log(createdDate.toLocaleString()); 

let myTimeStamp = Date.now()
// console.log(createdDate.getTime()); // milli sec
// console.log(Math.floor(createdDate / 1000)); // to convert into sec
let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(newDate);