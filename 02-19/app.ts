// When we want to override Inference we have to be Explicit
// We need to tell "role" to be a Tuple
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // an Array of Exactly Two Elements with type number and type string
} = {
  name: "Baz",
  age: 99,
  hobbies: ["Sports", "Cooking"],
  // this Tuple
  // should only have 2 elements
  // should only have 1 role, and the role is made up of 2 elements
  // we want this specific structure
  // TypeScript INFERS a Type, but we want to OVERRIDE it so we need to use the Type code above
  role: [2, "author"]
};

// 0. We can add an element to the end (which should not be allowed)
// 1. But why can we still push admin onto the array?
// 2. Push is an EXCEPTION which is allowed in Tuples and TypeScript can't catch this Error
person.role.push("admin");

// 0. We can edit the second value to be a number (which should not be allowed)
// 1. Now: Type 'number' is not assignable to type 'string'
person.role[1] = 10;

// we can't set it an empty array because it checks the length
// Type '[]' is not assignable to type '[number, string]'
person.role = []; 

// it will allow us to override it with the correct structure:
person.role = [0, "admin"];

// it will not allow us to add an extra element like this:
// Type '[number, string, string]' is not assignable to type '[number, string]'
person.role = [0, "admin", "user"];

// If you have an array and you know exactly how many elements and of what type
// Consider using a Tuple to get even more Strictness into your Code to be even clearer about the type of data you are expecting