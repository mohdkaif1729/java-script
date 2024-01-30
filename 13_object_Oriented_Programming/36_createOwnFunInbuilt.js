let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function() {
    console.log('hitesh is present in all objects');
}

// heroPower.hitesh();
// myHeros.hitesh();

Array.prototype.heyHistesh = function() {
    console.log("Histesh says hello");
}

myHeros.heyHistesh();
// heroPower.heyHistesh(); // not defined in this only in array