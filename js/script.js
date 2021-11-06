"use strict";

function first () {
   // do something
   setTimeout(function() {
      console.log(1);
   }, 500);
}

function second () {
   console.log(2);
}

first();
second();

// Callback - это функция которая должна быть выполнена после того как другая функция завершила свое выполнение.

function learnJS (lang, callback) {
   console.log(`Я учу: ${lang}`);
   callback();
}

function done () {
   console.log('Я прошел этот урок');
}

learnJS('Java Script', done);