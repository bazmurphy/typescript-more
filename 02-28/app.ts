// FUNCTION TYPES && CALLBACKS

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
  // if we were to do something with the value returned from the callback, for example:
  // const value = callback(result);
  // then we would not use => void
}

// the advantage of typing the callback in the function definition...
// is that TypeScript is able to infer that result will be a number
addAndHandle(10, 20, (result) => {
  console.log(result);
});

// If we try to add a second parameter to the callback, we get an Error:
// Argument of type '(result: any, b: any) => void' is not assignable to parameter of type '(num: number) => void'.
addAndHandle(10, 20, (result, b) => {
  console.log(result);
});

// TypeScript does not pick up if we return something (even though we said the callback will return void)
addAndHandle(10, 20, (result) => {
  console.log(result);
  // the callback does return something, even though we made it clear above using void, that it shouldn't return
  return result;

  // this is not a mistake of a bug in TypeScript it happens on purpose
  // by specificy => void in our callback type
  // we are saying we ignore any type you are returning here
  // we are saying in addAndHandle where we get the callback function
  // we will not do anything with the return type
  // that is why you can return something without punishment
  // but you know that the callback will not do anything with the value you return
  // so that addAndHandle (the parent function) will not do anything with the value you are returning

    // this is why in TypeScript parameters are really important in callbacks
  // but why it doesn't really care about the return type

  // the void type is used in the callback function to indicate that it does not return anything
  // It is okay to use a return statement in a function with a return type of void
  // but it will not have any effect on the function's output.
});


// this is an example where we use the return from the callback
// and so we define its return type as number (instead of void)
function testing(n1: number, n2: number, callback: (num: number) => number) {
  const initial = n1 + n2;
  return callback(initial) * 10;
}

testing(20, 40, (result) => {
  return result + 2;
})