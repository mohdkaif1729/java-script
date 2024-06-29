class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  // property and getter and setter name is always be same
  // get and set is not work alone
  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value.toUpperCase();
  }
}

const user = new User("kaif@gmail.com", 'abcde');

console.log(user._password);