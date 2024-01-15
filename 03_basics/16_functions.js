// function definition
function myFunction() {

    console.log("i am in myFunction");
}

// myFunction => function reference 
// myFunction() => function call

// this how we deal the all different data types
function addTwoNumbers(number1, number2) {

    console.log(number1 + number2);
}

// addTwoNumbers(4, 5)

// addTwoNumbers(4, "5")

// addTwoNumbers(4, "a")

// addTwoNumbers(4, undefined)

// addTwoNumbers(4, null)

// addTwoNumbers(4, "")

function addTwoNumbers(number1, number2) {

    return (number1 + number2)

}
// console.log(addTwoNumbers(4, 5));

// console.log(addTwoNumbers(4));

// console.log(addTwoNumbers());

function returnString(number) {

    return `the name is ${number}`
} 

console.log(returnString("Mohd Kaif"));




