const myNumbers = [1, 2, 3]
 
// const myTotal = myNumbers.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNumbers.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 3) // this is the value of accumulator

const myTotal = myNumbers.reduce( (acc, currval) => {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0) // this is the value of accumulator

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "cpp course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 3999
    },
    {
        itemName: "mobile dev course",
        price: 4999
    },
    {
        itemName: "data science course",
        price: 9999
    }
]

// reduce use for adding items numeric values
const total = shoppingCart.reduce( (acc, items) => {
    return acc + items.price
}, 0)

console.log(total);