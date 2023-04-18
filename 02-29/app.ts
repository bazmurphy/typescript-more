// THE "UNKNOWN" TYPE

// it might be unknown because we don't know what the user will input yet
// we can store any value in there without getting errors
let userInput: unknown;

userInput = 5;
userInput = "Baz";

// "unknown" is different from "any"

let userName: string;
// Type 'unknown' is not assignable to type 'string'.
userName = userInput;

// userName wants a string, but unknown is not guaranteed to be a string
// we assigned one "Baz" but userInput could hold any value because its "unknown"

// if we switch "unknown" to "any" the Error goes away
// let userInput: any;
// because "any" is the most flexible in TypeScript and it disables all Type Checking

// "unknown" is a bit more restrictive than "any"
// with "unknown" we have to check the type that is stored in userInput 
// before we can assign it to a variable that wants a string (userName)
// so we could wrap it in a if block, to check for a string

if (typeof userInput === "string") {
  userName = userInput;
}

// so we need this extra if type check
// if we want to assign a value of "unknown" to a value with a fixed type
// "unknown" is the better choice over "any" if you know I can't tell exactly what type i will store in there
// but i know what i want to do with it eventually

// well just add another check so that what you want to do can be done
// so if you want to work with a "string" you have a string and you are good

// "unknown" is better than "any" because it makes sure that you are not allowed to do everything but you have at least some type checking

// of course if you have a chance in advance to know what userInput is always a string or number..
// then you should use a UNION type instead of "unknown" userInput: string | number
// "unknown" isn't a type you should use all the time, but it is better than "any"