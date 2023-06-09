"use strict";
// TYPE ALIASES
// So we have the same setup as before we just have RE-USABLE TYPE ALIASES that we can use instead
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = Number(input1) + Number(input2);
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
