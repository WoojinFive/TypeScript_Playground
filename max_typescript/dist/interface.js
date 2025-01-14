"use strict";
// Interface
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    // constructor(n: string = '') {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('hi');
        }
    }
}
let user1;
user1 = new Person();
user1.greet('Hello');
console.log(user1);
