"use strict";
// any is really flexible
// which sounds great at first but actually its a big disadvantage
// try to avoid using "any" whenever possible
// it takes away any advantages TypeScript gives you and gives you the same experience as Vanilla JavaScript
// if any property can store any value then there is not much for TypeScript to check...
// you can use "any" as a fallback if you have some kind of data where you really can't know which kind of data will be stored in it
// and you are then using some runtime checks at runtime to narrow down what you want to do for certain values
// similar to manually checking the type with JavaScript (typeof)
// if you know which kind of data you are working with then be explicit about it
// let TypeScripts inference do its job
// dont fallback to any if you don't need to
// FROM LEAST SPECIFIC TO MOST SPECIFIC
let anArray1 = ["Hello", "Goodbye"];
anArray1 = "Hello";
let anArray2 = ["Hello", "Goodbye"];
// Type 'string' is not assignable to type '[]'
anArray2 = "Hello";
let anArray3 = ["Hello, Goodbye"];
// Type '[number, number]' is not assignable to type '[]'
anArray2 = [1, 2];
let anArray4 = [1, 2];
// Type 'string' is not assignable to type 'number'
anArray4 = ["Hello", "Goodbye"];
let anArray5 = ["Hello", "Goodye"];
// Type '[string, string, string]' is not assignable to type '[string, string]'
// Source has 3 element(s) but target allows only 2
anArray5 = ["Hello", "Goodbye", "Goodnight"];
// Type '[string, string, number]' is not assignable to type '[string, string]'.
// Source has 3 element(s) but target allows only 2.
anArray5 = ["Hello", "Goodbye", 3];
