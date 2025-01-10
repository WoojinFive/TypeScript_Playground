// Interface

// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// let user1: Person;
// user1 = {
//   name: 'AAA',
//   age: 5,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// }

// user1.greet('Hi there - I am');


interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('AAA');

user1.greet('Hello')
console.log(user1);