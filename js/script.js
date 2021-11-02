"use strict";
// Условия if , else , "?"(тернарный оператор)
if (4 == 9) {
   console.log('Ok!');
} else {
   console.log('Error');
}

/* const num = 50;

if (num < 49) {
   console.log('Error');
} else if (num > 100) {
   console.log('Много!');
} else {
   console.log('ok!');
}

(num === 50) ? console.log('ok!') : console.log('Error'); */

const num = 50;

switch (num) {
   case 49:
      console.log('No no no');
      break;
   case 100:
      console.log('No no no');
      break;
   case 50:
      console.log('В точку!');
      break;
   default:
      console.log('Не в этот раз(');
      break;

}