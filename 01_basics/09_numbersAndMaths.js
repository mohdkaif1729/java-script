// *************************  Numbers ****************************
let number = 345
// console.log(number.toString());
// console.log(typeof number.toString());
// return string 

const num = new Number(100)
// console.log(num);

const string = new String(100)
// console.log(string);

let otherNumber = 34
// console.log(otherNumber.toExponential(3));
// console.log(typeof otherNumber.toExponential(3));
// return string

let fixedNumber = 9.345
// console.log(fixedNumber.toFixed(0));
// console.log(fixedNumber.toFixed(1));
// console.log(fixedNumber.toFixed(2));
// console.log(fixedNumber.toFixed(3));
// console.log(fixedNumber.toFixed(6));
// console.log(typeof fixedNumber.toFixed(6));
// return string

let precision = 4533.42
// console.log(precision.toPrecision());
// console.log(precision.toPrecision(1));
// console.log(precision.toPrecision(2));
// console.log(precision.toPrecision(3));
// console.log(precision.toPrecision(4));
// console.log(precision.toPrecision(5));
// console.log(typeof precision.toPrecision(5));
// return string

let value = 34
// console.log(value.valueOf(value));
// console.log(typeof value.valueOf(value));
// return number

// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("10"));
// console.log(Number("  10"));
// console.log(Number("10  "));
// console.log(Number(" 10  )"));
// console.log(Number("10.33)"));
// console.log(Number("10,33)"));
// console.log(Number("10 33)"));
// console.log(Number("John"));
// console.log(Number(new Date("1970-01-01")));

// console.log("100" * "1kaif");

const hundred = 1000000
// console.log(hundred.toLocaleString()); // this is according to us standard

// console.log(hundred.toLocaleString('en-IN')); // this is according to indian standard

// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.isFinite);



// *************************  Maths ****************************

// console.log(Math);
// console.log(Math.abs(-2));
// console.log(Math.abs(2));
// console.log(Math.round(45.56));
// console.log(Math.ceil(4.56));
// console.log(Math.floor(4.16));
// console.log(Math.min(4, 5, 7, 9, 2, 1));
// console.log(Math.max(4, 5, 7, 9, 2, 1));

const min = 1
const max = 6
const random = Math.random()
console.log(random); // is generated values from 0 < x < 1  
   

console.log(Math.floor(random * (max - min + 1)) + min)
