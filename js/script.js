//                 ---1---
// Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }

// function checkAge(age) {
//     (age > 18) ? true : confirm('Батьки дозволили?')
// }

// let value = +prompt("Enter your age");

// checkAge(value);

//                     ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// const returnMin = (a, b) => {
//     (a > b) ? alert("Іmaller number " + b) : alert("Іmaller number " + a)
// }

// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter two number");

// returnMin(num1, num2);


//                      ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//     }
//     ask(
//     "Ви згодні?"
//     ,
//     function() { alert("Ви погодились."); },
//     function() { alert("Ви скасували виконання."); }
//     );



// const ask = (question, yes, no) => {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// () => { alert("Ви погодились."); },
// () => { alert("Ви скасували виконання."); }
// );