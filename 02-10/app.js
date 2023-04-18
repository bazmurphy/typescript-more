"use strict";
function add(n1, n2) {
    return n1 + n2;
}
const number1 = "5";
const number2 = 2.8;
const result = add(number1, number2);
const paragraph = document.createElement("paragraph");
paragraph.innerText = `the result is ${result} \n the type is ${typeof result}`;
document.body.appendChild(paragraph);
