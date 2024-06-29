const User = {
  _email: "k@k.com",
  _password: "abc",

  // get and set is not work as function but as property
  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  }
}

const chai = Object.create(User);

console.log(chai.email);