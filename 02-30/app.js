"use strict";
// The "never" Type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
// this function doesn't return undefined
// it never returns anything
// so instead of using "void" we should use "never"
// to prove this point if we store the function into a result and console log it
const result = generateError("Error: Testing Return", 404);
console.log(result);
// there is no undefined being returned
// nothing is console logged
// because since an Error is thrown it "cancels/crashes our script"
// that means the function never produces a value
// so the return type of this function is not just "void" but ALSO "never"
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
// this makes it really clear that this function is intended to never return anything
