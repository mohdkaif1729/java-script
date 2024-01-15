const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "hitesh" 
}

// course.courseInstructor
// destructuring the object so that we can not use course.courseInstructor all time then another syntax is crated 
const {courseInstructor, price, coursename} = course

console.log(courseInstructor);
console.log(coursename);
console.log(price);


// API code formate is json

// {
//     {

//     },
//     {

//     },
//     {

//     }
// } 

// [
//     {

//     },
//     {

//     }
// ]