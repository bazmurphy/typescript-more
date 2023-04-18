"use strict";
// UNION TYPES
// If we have somewhere we want to accept 2 Different Types of values
function combineVersion1(input1, input2) {
    // this will yell because TypeScript only sees a Union Type and it doesn't anaylse what is in the Union Type
    // Operator '+' cannot be applied to types 'string | number' and 'string | number'
    const result = input1 + input2;
    return result;
}
function combineVersion2(input1, input2) {
    let result;
    // this runtime if else will not always be required but OFTEN it will be
    // because if you work with UNION TYPES you can be more flexible in the paramters you accept
    // but then you might have different logic for the different types
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combineVersion1(30, 26);
console.log(combinedAges);
// 56
const combinedNames = combineVersion2("Baz", "Bob");
console.log(combinedNames);
