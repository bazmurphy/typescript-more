"use strict";
// TypeScript is able to track this variable
let logged;
// the Function is DEFINED BEFORE you use it so
// TypeScript is not able to infer the Type of this parameter
function sendAnalytics(data) {
    console.log(data);
    // TypeScript understands/INFERS this is a boolean
    logged = true;
}
sendAnalytics("The data");
// we had to add an ! at the end of the code below to tell TypeScript that yes there will be a button
// we can get rid of this by error by setting `"strictNullChecks": false`
// `strictNullChecks` tell TypeScript to be pretty strict regarding working with values that potentially may hold a "null" value - such as a querySelector on an element that might not exist in the HTML
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("Clicked!");
});
// we can wrap it in an if block to also avoid this error..
if (button) {
    button.addEventListener("click", () => {
        console.log("Clicked!");
    });
}
// `"strictBindCallApply": true,`
// It checks on which function you are calling .bind(), .call() or .apply() on, and it checks if what you are setting up here makes sense.
function clickHandler(message) {
    console.log("Clicked! " + message);
}
if (button) {
    button.addEventListener("click", clickHandler.bind(null));
}
// if we provide the bind a second argument which is the message from above...
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}
