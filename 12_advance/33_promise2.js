const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log("Async task is complete");
        resolve();
    }, 1000);
});

// .then() is related to resolve, if you want to connect the promise with then so use resolve method in promise
promiseOne.then(() => {
    console.log("Promise consumed");
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task two");
        resolve();
    }, 1000);
}).then(() => {
    console.log("Promise consumed 2");
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "chai", email: "chai@example.com" });
    }, 1000);
});

promiseThree.then((user) => {
    console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "hitesh", password: "123" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username; // this is return in next then
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log('the promise is either resolved or rejected');
    })


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 1000);
})

async function consumedPromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
        
    } catch (error) {
        console.log(error)
    }
}

consumedPromiseFive();


async function getAllUsers() {
    const respose = await fetch('https://jsonplaceholder.typicode.com/users');
    const resposeInJson = await respose.json();
    console.log(resposeInJson[0].username);

}

// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users').then((respose) => {
    return respose.json();
}).then((data) => {
    console.log(data);
})
