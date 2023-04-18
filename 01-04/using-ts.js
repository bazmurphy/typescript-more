"use strict";
// we can add an ! on the end, and tells TypeScript this will NEVER yield NULL
// this will always find an element
// we can add HTMLInputElement (this is TYPE CASTING) 
// and this tells TypeScript which type of Element this will be
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
// the biggest advantage of TypeScript is TYPES
// we can add a more explicit type other than "any"
// we tell TypeScript both of these arguments should be numbers
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(Number(input1.value), Number(input2.value)));
});
