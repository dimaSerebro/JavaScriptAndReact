"use strict";

const options = {
   name: 'test',
   height: 1024,
   width: 1024,
   colors: {
      border: 'red',
      bg: 'black'
   }
};
//console.log(options['colors']['border']);
// delete options.name;
// console.log(options);

console.log(Object.keys(options).length);
// Методы это действия которые может совершать наш объект!
const quality = {
   kindness: true,
   honesty: true,
   greed: false,
   poverty: false,
   loyalty: {
      treason: false,
      notTreason: true
   },
   makeTest: function() {
      console.log('Test');
   }
};

quality.makeTest();

const {treason, notTreason} = quality.loyalty;// Деструктиризация это когда мы можем достать коробку из коробки и напрямую обратиться к ней 
console.log(treason);

console.log(Object.keys(quality).length);

/* let counter = 0;
for (let key in options) {
   if (typeof (options[key]) === 'object') {
      for (let i in options[key]) {
         console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);
      }
   } else {
      console.log(`Свойство ${key} имеет значение ${options[key]}`);
      counter++;
   }
}
console.log(counter); */


