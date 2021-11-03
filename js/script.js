"use strict";
  //  Циклы while и for

let num = 50;

/* while (num <= 55) {
   console.log(num);
   num++;
}
 */

/* do {
   console.log(num);
   num++;
} while (num <= 52); */

for (let i = 1; i < 10; i++) {
   if (i === 6) {
      //break; результат от 1 до 6
      continue; // пропускает шаг который нам не нужен, не прерывая при этом цикл
   }
   console.log(i);
}