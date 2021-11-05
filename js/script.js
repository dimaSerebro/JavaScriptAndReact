"use strict";

const str = "teSt";

// console.log(str[2] = 'd');  так не работает

console.log(str.toLocaleLowerCase());
console.log(str.toLocaleUpperCase());

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('g'));// возвращает значение -1 так как не нашло искуемый элемент в строке

const logg = "Good buy everybody";

console.log(logg.slice(4, 18));// может принимать отрицательные значения, будет отсчет с конца строки
console.log(logg.substring(4, 8)); // не принимает отрицательные значения , если напишем -1  тогда будет 0

console.log(logg.substr(4, 4));

const num = 23.4;
console.log(Math.round(num));

const test = '12.3px';
console.log(parseInt(test));// переводит в нужную единицу измирения и округляет к целому
console.log(parseFloat(test));// возвращет число с плавающей точкой 