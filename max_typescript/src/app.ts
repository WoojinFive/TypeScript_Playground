// const add = (a: number, b: number = 1, c: number = 2) => a + b + c;

// console.log(add(5));

const hobbies = ['Sports', 'Cooking', 'Fishing'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  firstName: 'aaa',
  age: 30
};

const copiedPerson = { ...person };
copiedPerson.firstName = 'bbb'
console.log(person);
console.log(copiedPerson);

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
}

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies);
console.log(hobby1);
console.log(hobby2);
console.log(remainingHobbies);

const { firstName: userName, age } = person;
console.log(person);
console.log(userName);
console.log(age);