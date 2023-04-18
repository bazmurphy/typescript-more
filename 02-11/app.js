"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// const number1 = "5";
const number1 = 5;
const number2 = 2.8;
// Argument of type 'string' is not assignable to parameter of type 'number'
const result = add(number1, number2);
console.log(result);
console.log(typeof result);
