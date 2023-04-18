// TYPE ALIASES

// We can create new Types which store the UNION type
// these are called TYPE ALIASES
// the name can be anything (that is not a JS Keyword)

// use the `type` keyword and then assign to it the Type (or UNION Type)
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text"

// So we have the same setup as before we just have RE-USABLE TYPE ALIASES that we can use instead
function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
    result = Number(input1) + Number(input2);
  } else {
    result = input1.toString() + input2.toString()
  }
  return result;
}