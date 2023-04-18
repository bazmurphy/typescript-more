"use strict";
// FUNCTIONS as TYPES
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: ", +num);
}
printResult(add(5, 12));
// [0]
let combineValues;
// [2] we have to set this explicitly as type Function
let combineValues;
// [5] this is where Function Types come into play Function Types describe a function, the parameters, and the return value
// here we are saying combinedValues is a Function that takes no parameters and returns a number
let combineValues;
combineValues = add;
// [1] we can set it as a number, and that is a problem...
combineValues = 5;
// Type 'number' is not assignable to type '(a: number, b: number) => number'.
// [3] we can set it to another Function, and that is a problem...
// [5a] Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.
// [5b] Type 'void' is not assignable to type 'number'.
combineValues = printResult;
// Type 'number' is not assignable to type '(a: number, b: number) => number'.
// [4] and then we try to execute it as a function and get an error, because its trying to run printResult with (8, 8)
// [4a] This expression is not callable. Type 'Number' has no call signatures.
console.log(combineValues(8, 8));
