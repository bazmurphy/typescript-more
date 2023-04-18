function add(n1: number, n2: number) {
  return n1 + n2;
}

// const number1 = "5";
const number1 = 5;
const number2 = 2.8;

// Argument of type 'string' is not assignable to parameter of type 'number'
const result = add(number1, number2);

const paragraph = document.createElement("paragraph");
paragraph.innerText = `the result is ${result} \n the type is ${typeof result}`;
document.body.appendChild(paragraph);