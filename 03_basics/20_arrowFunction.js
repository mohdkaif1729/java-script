const userInfo = {
    username: "Mohd Kaif",
    price: 999,
    welcomeMessage: function() {
        // console.log(`${username} , welcome to website`); // not use like this 
        console.log(`${this.username} , welcome to website`); // use like this 
        // console.log(this);
    }

}

// browser use global object is windows
// console.log(userInfo);
// userInfo.welcomeMessage()
// userInfo.username = "sam"
// userInfo.welcomeMessage()


// function chai() {
//     let username = "kaif"
//     console.log(this.username);
// }

// chai()

//arrow function
const chai = () => {
    let username = "kaif"
    console.log(this.username);
}

// chai()

// arrow syntax
// () => {}
// const variable = (parameters....) => {}

// const add = (num1, num2) => {
//     return num1 + num2
// }


// implicitly return if one line of statement in function
// const add = (num1, num2) => num1 + num2
// const add = (num1, num2) => (num1 + num2)

const add = (num1, num2) => ({username: "kaif"}) // return object

console.log(add(4, 5));