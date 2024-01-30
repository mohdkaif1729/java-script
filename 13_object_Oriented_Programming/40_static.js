class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const hitesh = new User("hitesh");
// console.log(hitesh);

class Teacher extends User {
    constructor(username, email)     {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();