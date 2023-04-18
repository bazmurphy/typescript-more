"use strict";
// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
    name: "Baz",
    age: 99,
    hobbies: ["Sports", "Cooking"]
};
console.log(person.name);
// hobbies is an Array of Strings
// TypeScript INFERRED this:
// hobbies: string[]
let favoriteActivites;
// Type 'string' is not assignable to type 'string[]'
favoriteActivites = "Sports";
// this is OK (its an array of strings)
favoriteActivites = ["Sports"];
// Type 'number' is not assignable to type 'string'
favoriteActivites = ["Sports", 1];
// if you want to support a MIXED Array one solution is to use:
// any[]
// any type is a special type in TypeScript which basically means do whatever you want
// you don't want to use it too often because you lose the value TypeScript gives you
// any is flexible, but it comes at the price of giving up the benefit TypeScript offers
for (const hobby of person.hobbies) {
    // TypeScript KNOWS that each hobby is a string, because we told it hobbies is an array of strings
    console.log(hobby);
    // TypeScript KNOWS that hobbies is of type: STRING ARRAY string[]
    console.log(hobby.toUpperCase());
    // So it allows us to do anything with hobby that can be done with a string
    // because it knows with certainty hobby will be a string because of the type we set above
    // TypeScripts inference shines here:
    // Property 'map' does not exist on type 'string'.
    console.log(hobby.map());
}
