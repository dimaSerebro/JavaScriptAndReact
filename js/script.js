"use strict";
// Динамичесская типизация в JS

					// To string  (можно что-то превратить в строку)

// 1) вариант с помощью String
console.log(typeof(String(null)));
console.log(typeof(String(5)));

//2) канкатинация

console.log(typeof(5 + ''));

// пример

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 20 + 'px';
console.log(fontSize);


					// To number

//1) Number
console.log(typeof(Number(null)));
console.log(typeof(Number("привет")));

//2) унарный +
console.log(typeof(+"4"));

//3)
console.log(typeof(parseInt("15px" + 10)));

					// To boolean

// 0, '', null, undefined, NaN -  эти типы данных преобразуються в False

//1)
let switcher = null;

function heySwitch () {
	if (switcher) {
		console.log('Working...' );
	}
}
switcher = 1;

heySwitch();

//2)
console.log(typeof(Boolean('0')));

//3)
console.log(typeof(!!'0'));







