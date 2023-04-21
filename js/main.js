"use strict";

const WELCOME_MESSAGE = `Hello World!`;

const output = document.querySelector('#js-output');
output.innerHTML = WELCOME_MESSAGE + '<br><br>';

function getExtremeElements(array) {
  const firstElement = array[0];
  const lastElement = array[array.length - 1];
  return [firstElement, lastElement];
}

function printArray(array) {
  output.innerHTML += 'Twoja tablica: <br><br>'
  for (let i = 0; i < array.length; i++) {
    const pre = i === 0 ? '[ ' : '';
    const post = i === array.length - 1 ? ' ]' : ', ';
    output.appendChild(
      document.createElement('span'))
      .innerHTML =
      `${pre}${typeof array[i] === 'string' ? '\"' + array[i] + '\"' : array[i]}${post}`;
  }
  output.innerHTML += '<hr>';
}

const myArr = [1, 2, 3, 4, 5]
printArray(myArr);
printArray(getExtremeElements(myArr));
printArray(['blue', 'green', 'red', 'orange', 'yellow', 'black', 'white']);


// ----------------------


// function someFunc() {
//
// }

// function sum(a, b) {
//   console.log(`Wynik dodawania to: ${a + b}`);
// }
//
// sum(2, 2);
// someFunc();

// function sum(a, b) {
//   return a + b;
// }
//
// const result = sum(2,2);
// console.log(result);

// const arrString = "Jakiś string".split(" ");
// printArray(arrString);


// function multiply(x, y, z) {
//   console.log(`Wynikiem mnożenia jest ${x * y * z}`);
// }
//
// console.log("Log przed wywołaniem funkcji multiply");
// multiply(2, 3, 5);// Wynikiem mnożenia jest 30
// console.log("Log po wywołaniu funkcji multiply");

// Kolejność logów w konsoli
// "Log przed wywołaniem funkcji multiply"
// "Wynikiem mnożenia jest 30"
// "Log po wywołaniu funkcji multiply"



// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
//
//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }
//
// // count(1, 5);// countFrom = 1, countTo = 5, step = 1
// // count(2);// countFrom = 2, countTo = 10, step = 1
// // count();// countFrom = 0, countTo = 10, step = 1
// count(10, 30, 10);


// function sum() {
//   let total = 0;
//
//   for (const argument of arguments) {
//     total += argument;
//   }
//
//   return total;
// }
//
// console.log(sum(1, 3, 5));


// function someFn() {
//   // const args = Array.from(arguments);
//   const args = [...arguments];
// }
//
// function fn(a, b, ...args) {
//
// }

// console.log("jakiś tekst", WELCOME_MESSAGE, 24256372347);

// function someFunc() {
//   console.log("Jestem funkcja!");
//   return;
//   console.log("Po return");
// }
//
// someFunc();


// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Wprowadź kwotę większą od zera");
//   } else if (amount > balance) {
//     console.log("Za mało środków na koncie");
//   } else {
//     console.log("Operacja wypłaty powiodła się");
//   }
// }
//
// withdraw(0, 300);// "Wprowadź kwotę większą od zera"
// withdraw(500, 300);// "Za mało środków na koncie"
// withdraw(100, 300);// "Operacja wypłaty powiodła się"
//
//
// function improvedWithdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Wprowadź kwotę większą od zera");
//     return;
//   }
//
//   if (amount > balance) {
//     console.log("Za mało środków na koncie");
//     return;
//   }
//
//   console.log("Operacja wypłaty powiodła się");
// }
//
// improvedWithdraw(0, 300);
// improvedWithdraw(500, 300);
// improvedWithdraw(100, 300);


// sum(1,4);

// const sum = function (x, y) {
//   console.log(x + y);
// }
//
// sum(1,5);

// function someFn() {
//   console.log(WELCOME_MESSAGE);
// }

// function foo() {
//   const a = 20;
//   console.log(a);// 20
//
//   for (let i = 0; i < 5; i++) {
//     console.log(a);// 20
//
//     if (i === 2) {
//       console.log(a);// 20
//     }
//   }
// }
//
// // ❌ Błąd! Zmienna a nie jest dostępna w zakresie globalnym
// console.log(a);
//
// for (let i = 0; i < 3; i++) {
// // ❌ Błąd! Zmienna a nie jest dostępna w tym zakresie
//   console.log(a);
// }


// if (true) {
//   const a = 0;
//   console.log(a);
// }

// console.log(a);


// function bar() {
//   console.log("bar");
// }
//
// function baz() {
//   console.log("baz");
// }
//
// function foo() {
//   console.log("foo");
//   bar();
//   baz();
// }
//
// foo();

