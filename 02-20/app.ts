// ENUMERATORS / ENUMS

// if we wanted to have some fixed values to determine someones role
// we would have to define them here;
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person = {
  name: "Baz",
  age: 99,
  hobbies: ["Sports", "Cooking"],
  // role: 0,
  // and then use it here:
  role: ADMIN,
};

if (person.role === ADMIN) {
  console.log("is admin");
}

// Instead we can make an ENUM
// We should start it with an uppercase character, because it is a CUSTOM TYPE
// You will often see enums with all-uppercase values, but that's not a "must-do". 
// You can use ANY value names.
enum Role { ADMIN, READ_ONLY, AUTHOR };
// ADMIN = 0, READ_ONLY = 1, AUTHOR = 2
// behind the scenes ADMIN recieves the number 0, READ_ONLY the number 1, AUTHOR the number 2 etc.
const person = {
  name: "Baz",
  age: 99,
  hobbies: ["Sports", "Cooking"],
  // and then we can use the ENUM here:
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("is admin");
}

// You can also assign values to the identifiers
enum Role { ADMIN = 5, READ_ONLY, AUTHOR };
// 5, 6, 7

enum Role { ADMIN = 5, READ_ONLY = 100, AUTHOR = 200};
// 5, 100, 200