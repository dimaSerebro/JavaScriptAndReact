'use strict';

// const now = new Date('2021-11-29');
// new Date.parse('2021-11-29');

// console.log(now.setHours(18, 40));
// console.log(now);

/* console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay()); */

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} милисекунд `);