// const user = {
//     username: "Mohd Kaif",
//     loginCount: 8,
//     singnedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database")
//         // console.log(`Username: ${this.username}`);
//         console.log(this); // current context
//     }
// }


// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this); // here it is empty object

// const promiseOne = new Promise();
// const date = new Date()

// ****** new keyword is create new instance of template object


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.gretting = function() {
        console.log(`welcome ${this.username}`);
    }

    return this; // optional
}

// ****************** if we not use the new keyword to create another user then, it overwrite in previous created user
// const user1 = User("kaif", 12, true);
// const user2 = User("kaif", 12, true);
// ************* IMP lines on new keyword **************
/**
    1). empty object is created called instance.
    2). constructor function is invoked with the cause to use of new keyword.
    3). this keyword inject the all info to vaiables
    4). get all thinks
**/


const user1 = new User("kaif", 12, true);
const user2 = new User("kaif", 12, true);

console.log(user1.constructor);
// console.log(user2);

