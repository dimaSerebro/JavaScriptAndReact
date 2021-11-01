"use strict";

/* console.log('arr' + " - object ");
console.log( 4 + " - object ");
console.log( 4 + +"4");  */

let incr = 10,
    decr = 10;

/* incr++;//увеличивает на 1(постфиксная форма записи)
--decr;//уменьшает на 1 (префиксная форма записи) */

//возвращает старое значение до увеличения или уменьшения
console.log(incr++);
console.log(decr--);
//возвращает увеличенное или уменьшенное на 1 значение
console.log(++incr);
console.log(--decr);

console.log(10%4);// остаток от деления

console.log(2*4 == 8);// true
console.log(2*4 == '8'); // сравнивает значения и не смотрит на их тип
console.log(2*4 === '8');// false строгое сравнение(идет сравнение числа и строки)

// Оператор и && / или ||

/* const isOpen = true, // && если один из подопечных будет false они оба будут ложны
      isClosed = false;
console.log(isOpen && isClosed);// false */
/*
const isOpen = false, // || или  , если одно из условий будет true ответ будет true
      isClosed = false;
console.log(isOpen || isClosed);// false */
  // оператор отрицания "!"
const isOpen = false,
      isClosed = false;
console.log(isOpen || !isClosed);// true

console.log(2 + 2 * 2 == 8);// false будь внимателен с приорететами операторов
console.log(2 + 2 * 2 != 6);// false
console.log(2 + 2 * 2 !== '6');// true