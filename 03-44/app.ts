// this is allowed because TypeScript can't tell if you are using this in another file
let randomGlobalVariable = "abc";

// "noUnusedParameters": true
// 'randomParameter' is declared but its value is never read.
function randomFunction(randomParameter) {
  //  "noUnusedLocals": true, 
  // 'randomLocalVariable' is declared but its value is never read.
  let randomLocalVariable = "def";
  console.log("hello");
}


// "noImplicitReturns": true, 
// Not all code paths return a value.
function randomFunction2(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  // return;
}