// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]
// } = {
//   name: 'aaa',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 5,
  READ_ONLY = 100,
  AUTHOR = 200
};

const person = {
  name: 'aaa',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.READ_ONLY
};

// person.role.push('admin');
// person.role[1] = 10;

console.log(person.role);

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.READ_ONLY) {
  console.log('is read only');
}