'use strict';
//!                    Получение элементов со страницы

const box = document.getElementById('box');

console.log (box);

const btns = document.getElementsByTagName('button');//*  мы получаем колекцию из кнопок он же массив , что бы получить одну кнопку в конец прописываем в квадратных скобках нужный элемент по порядку [1]

console.log(btns[1]);//* или выбираем нужный элемент когда будем делать изменения над ними

const circle = document.getElementsByClassName('circle');
//!  если мы работаем с классом то мы не ставим точку пред обьявлением елемента

console.log(circle);

const hearts = document.querySelectorAll('.heart');
//!  если мы работаем с селектором мы ставим точку перед елементом поиска


hearts.forEach( item => {
   console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
