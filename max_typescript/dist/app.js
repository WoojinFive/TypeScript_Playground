"use strict";
// const names: Array<string> = []; // string[]
// // names[0].split(' ');
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });
// promise.then(data => {
//   let splitedData = data.split(' ');
//   console.log(splitedData);
// });
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
// console.log(merge({ name: 'AAA' }, { age: 30 }));
const mergedObj = merge({ name: 'AAA', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
