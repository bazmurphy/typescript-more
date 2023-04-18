const person = {
  name: "Baz",
  age: 99
}

console.log(person);
// { name: "Baz", age: 99 }

// Property 'nickname' does not exist on type '{ name: string; age: number; }'
console.log(person.nickname);

// Hover over person
// const person: {
//   name: string;
//   age: number;
// }
// and we can see TypeScript INFERRED that this is an Object, 
// with a name key where the type has to be a string, 
// and an age key where the type has to be a number

const person: object = {
  name: "Baz",
  age: 99
}

// We could explicitly define it as just type object (generic)
// And now TypeScript just expects an Object (but not the internal structure)
// But it still yells at us because no .nickname key exists in the object

// But often you want to be more specific than a generic object type, you want the full support
// So we add : {}
// Its TypeScripts notation for a Specialised Object Type (where we provide some information about the Object)
// We then add key: type entries
const person: {
  name: string;
  age: number;
} = {
  name: "Baz",
  age: 99
}

// But it is usually better to let TypeScript INFER the Object rather than explicitly define it(?)