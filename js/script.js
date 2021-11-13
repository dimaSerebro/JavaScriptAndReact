'use strict';
//!               Действие с элементами на странице
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: yellow; width: 850px';

btns[1].style.borderRadius = '100%';
btns[1].style.width = '50px';
btns[1].style.height = '50px';
circles[0].style.backgroundColor = 'green';

// for (let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'violet';
// }

hearts.forEach( item => {
   item.style.backgroundColor = 'violet';
});

const div = document.createElement('div');
// const text = document.createTextNode('I was here');

div.classList.add('black');
div.style.width = '250px';
div.style.color = 'green';



wrapper.append(div); //* вставляет в конец родителя  элемент
// wrapper.appendChild(div); //* раньше

//wrapper.prepend(div);//* вставляет в начало родителя элемент

// hearts[0].before(div);
// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[1]); //* раньше

// circles[0].remove(); //* удаление элемента
// wrapper.removeChild(hearts[1]); //* раньше

hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);//* раньше

div.innerHTML = "<h1>Hello world</h1>";// выведет заголовок первого порядка

// div.textContent = '<h1>Hello world</h1>'; // выведет все что мы написали

div.insertAdjacentHTML("afterend", '<h2>Hello world</h2>');




