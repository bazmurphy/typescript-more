const button = document.querySelector("button")!; // the ! says we will have this element

// shouldn't TypeScript complain that "document" is unknown to it?
// how does it know that we have such a "document" constant available?
// and how does it know that if we have it available that it has a querySelector method?
// how does it know that button is something that has a addEventListener method?

button.addEventListener("click", () => {
  console.log("Clicked!")
});

// the reason is because of the "lib: []" option in the tsconfig.json
// and if it is not set then some defaults are assumed

// if it is not set the defaults depend on your JavaScript "target": "es2016",
// and it includes all the features that are globally available
// and it assumes all DOM APIs are available

// if the "lib: []" is NOT set

// if we comment it IN, then we get an Error:
// Cannot find name 'document'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.

// we can add 

// "lib": ["ES2016", "DOM", "DOM.Iterable", "ScriptHost"],

// and this is the default if it is uncommented (if you do not specify lib at all)