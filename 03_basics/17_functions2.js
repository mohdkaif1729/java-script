// take infinite arguments in a functions using rest operator (...)

function calculateCartPrice(...num) {

    // this function returns array of the given values
    return num
}

const result = calculateCartPrice(34, 24, 90, 100, 23, "mohd kaif", 4.5, false, true, "hello")
// console.log(result);

// how we pass array to functions 
const priceOfShirts = [300, 400, 500, 600]

function returnGivenIndexedShirtPrice(priceofshirt, index) {

    return priceofshirt[index]

}

// console.log(returnGivenIndexedShirtPrice(priceOfShirts, 3));

// how we pass object to functions
const userDetails = {
    name: "Mohd Kaif",
    age : 20,
    address: "Vasundhara",
    city: "Ghaziabad",
    pincode: "201012"
}

function returnAddressOfUser(user) {
    
    return (user.address)
}

console.log(returnAddressOfUser(userDetails));