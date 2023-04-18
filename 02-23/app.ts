// LITERAL TYPES

// Literal types are types where you don't just say that a type should hold a number or a string
// But where you are VERY CLEAR about the EXACT value it should hold
// they are especially useful when used in conjunction with UNION types

const number = 1;
// if you hover over this it shows number is an INFERRED type and its value is 1
// and because its a const TypeScript knows its value will never change
// so the value we assign is the exact Type we have
// const number: 1

function combine(input1: number | string, input2: number | string, resultConversion: "as-number" | "as-text") {
    let result;
    
    // Method1: 
    // if (typeof input1 === "number" && typeof input2 === "number") {
    //   result = input1 + input2;
    // } else {
    //   result = input1.toString() + input2.toString()
    // }
    // if (resultConversion === "as-number") {
    //   return Number(result);
    // } else {
    //   return result.toString();
    // }
    
    // Method2:
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
      result = Number(input1) + Number(input2);
    } else {
      result = input1.toString() + input2.toString()
    }

    return result;
}

// We are using "as-number" or "as-text" which is bad because we have to remember these...
// So we change the resultConversion from:
// function combine(input1: number | string, input2: number | string, resultConversion: string)
// To:
// function combine(input1: number | string, input2: number | string, resultConversion: "as-number" | "as-text")
// We use a UNION TYPE with LITERAL TYPES
// And we gain extra TYPE SAFETY to ensure we can't use the function incorrectly

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
// 56

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);
// 56

const combinedNames = combine("Baz", "Bob", "as-text");
console.log(combinedNames);
// BazBob