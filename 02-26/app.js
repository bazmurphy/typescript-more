"use strict";
// FUNCTION RETURN TYPES && "VOID"
// you can set the Type the function returns by adding ():type after the parameters
// but if you don't have a specific reason to set the type then you should allow TypeScript to INFER the return type
function add(n1, n2) {
    return n1 + n2;
}
// but in this function we are not returning anything
// this type of function has a special return type called VOID
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
// in Vanilla JavaScript if we use the value of a function that doesn't return anything we get UNDEFINED as a value
// you can have UNDEFINED as a TYPE in TypeScript
let someValue;
// but in TypeScript is not ALLOWED to return undefined (so you should use void instead as above)
// Error: A function whose declared type is neither 'void' nor 'any' must return a value.
function printResult2(num) {
    console.log("Result: " + num);
}
// if the function has a return but it is not defined then you can use:
function printResult3(num) {
    console.log("Result: " + num);
    return;
}
