"use strict";
// OOP basics prototypal - oriented inheritance
let str = 'string';
let strObj = new String(str);
console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 3, 5, 7]);


const solder = {
	heals: 400,
	armor: 100,
	sayHello: function () {
		console.log('hello');
	}
};
const john = Object.create(solder);

// const john = {
// 	heals: 100
// };

// john.__proto__ = solder;
// Object.setPrototypeOf(john, solder);
//console.log(john);
//console.log(john.armor);
john.sayHello();