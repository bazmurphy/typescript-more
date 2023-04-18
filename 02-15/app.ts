function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}


// INFERRED TYPES

// TypeScript knows this is a number
// We could do:
const number1: number = 5;
// But this is redundant and TypeScript is perfectly able to infer the type from 5
// Assigning ": number" is not good practice
// Type Inference is there to save you having to manually code the type

// TypeScript will yell at you if you give it a type it did not INFER

// Only if you assign it in an uninitalised way
let number1: number;
number1 = 5;
// Then it is good practice to tell TypeScript which value will eventually be stored in there
// So then when you assign a value to it later it should be type number

// const number1 = 5;
const number2 = 2.8;

const printResult = true;
// const resultPhrase = "Result is: ";

let resultPhrase = "Result is: ";
// TypeScript inferred that we want to store a string
// We assign to it a number and so we get an error
resultPhrase = 0;
// Type 'number' is not assignable to type 'string'.

// Thats the job the CORE TASK of TypeScript checking TYPES and yelling at us if we are using them Incorrectly

add(number1, number2, printResult, resultPhrase);
// Result is: 7.8