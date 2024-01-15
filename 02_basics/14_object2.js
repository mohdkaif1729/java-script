// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "kaif23"
tinderUser.name = "kaif"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(tinderUser.id);
// console.log(tinderUser.name);
// console.log(tinderUser.name);

// nesting of objects 

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstname: "mohd",
            lastname: "kaif"
        }
    }
}

console.log(regularUser.fullName.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}

const obj2 = {
    4: "d",
    5: "e",
    6: "f"
}

const obj3 = {
    7: "g",
    8: "h",
    9: "i"
}

// const obj4 = {obj1, obj2, obj3}
// console.log(obj4);

// const obj4 = {...obj1, ...obj2, ...obj3} // more use full 
// console.log(obj4);

const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

// array of objects
const arrayOfObjects = [
    {
        id: "1",
        email: "some@gmail.com"
    },
    {
        id: "1",
        email: "some@gmail.com"
    },
    {
        id: "1",
        email: "some@gmail.com"
    }
]

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProperty("loggedIn"));

