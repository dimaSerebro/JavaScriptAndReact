"use strict";
//Передача по ссылке или передача по значению spred оператор

// let a = 5,
//     b = a;

// b = b + 5;
// console.log(b);
// console.log(a);


// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj;//  На этом этапе мы не создаем новый объект сданнми а создаем ссылку на obj изменя copy мы будем изменять наш obj
// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy (mainObj) {
  let objCopy = {};

  let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}


const numbers = {
	a: 4,
	b: 7,
	c: {
		x: 5,
		y: 9
	}
};

const newNumbers = copy(numbers);

numbers.a = 10;
numbers.c.x = 15;

// console.log(newNumbers);
// console.log(numbers);

const add = {
	d: 4,
	e: 1
};

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
const newAarray = [...oldArray];// работа spread оператора

newArray[1] = 'acsdfc';
console.log(newArray);
console.log(oldArray);
console.log(newAarray);

const video = ['youtube', 'gidonline', 'rutube'],
			blogs = ['wordpress', 'livejournal', 'bloggers'],
			internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log (a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

log(...num);

const q = {
	one: 1,
	two: 2
};

const newObj = {...q};
newObj.one = 4;
console.log(newObj);
console.log(q);