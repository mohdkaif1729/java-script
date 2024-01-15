// one method to create functions is
// console.log(one(5));
// in this declaration of function access before definition is not gives error
// function one(num) {
//     return num + 1
// }


// one another method to create functions is
// in this declaration of function access before definition is gives error
console.log(two(5));
const two = function(num) {
    return num + 2
}

