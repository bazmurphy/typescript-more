"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
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
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
// 5, 6, 7
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
;
// 5, 100, 200
