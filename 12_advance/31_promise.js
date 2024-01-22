// synchronous programming execute in a sequence one, two, three
// console.log("one");
// console.log("two");
// console.log("three");

// asynchronous programming because kaif is print after all the statements one, two, three, four
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log('Kaif');
// }, 2000);

// setTimeout(() => {
//     console.log('Mohd');
// }, 1000); // if i am give 0 then also it execute the instruction after all work is done

// console.log("three");
// console.log("four");

// call back
// function sum(a, b) {
//     console.log(a + b);
// }

// function calculate(a, b, sumCallback) {
//     sumCallback(a,  b);
// }

// calculate(1, 2, sum);
// calculate(1, 2, (a, b) => {
//     console.log(a + b);
// })

// callback hell

// function data(id, nextdata) {
//     setTimeout(() => {
//         console.log(`data: ${id}`);
//         if (nextdata) {
//             nextdata();
//         }
//     }, 1000);
// }

// data(1, () => {
//     data(2, () => {
//         data(3, () => {
//             data(4);
//         });
//     });
// });

// promises

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("hello");
//         reject("some error");
//     })
// }

// const promise = getPromise();
// promise.then((res) => {
//     console.log("sucess: ", res);
// })

// promise.catch((err) => {
//     console.log("error: ", err);
// })

function data(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data: ${id}`);
            resolve("sucess");
        }, 2000);
    });
}


// async await

// iife
(async () => {
    await data(1);
    await data(2);
    await data(3);
    await data(4);
    await data(5);
})()
// async function getAllData() {
//     await data(1);
//     await data(2);
//     await data(3);
//     await data(4);
//     await data(5);
// }

// getAllData();

// method 1
// data(1).then( (res1) => {
//     console.log(`data: ${res1}`);
//     data(2).then( (res2) => {
//         console.log(`data: ${res2}`);
//     })
// } )

// method 2
// promise chaining
// data(1)
//     .then((res1) => {
//         return data(2);
//     })
//     .then((res2) => {
//         return data(3);
//     })
//     .then((res3) => {
//         console.log(`task finished`);
//     });

// console.log(promise);
