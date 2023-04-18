## TypeScript

### 01-04 Installing & Using TypeScript
initialise npm project  
`npm init -y`  
install typescript as dev dependency  
`npm install typescript -D`  
generate the tsconfig.json  
`npx tsc --init`  
run the compiler in watch mode  
`npx tsc --watch` 

---

`!` this value will never be null  

`as ~type~`  
`as HTMLInputElement`  

example:  
`const input1 = document.getElementById("num1")! as HTMLInputElement;`

---

### 01-09 Project Setup
.

### 02-11 Using Types
.

### 02-12 TypeScript Types vs JavaScript Types
The key difference is : JavaScript uses "dynamic types" (resolved at runtime), TypeScript uses "static types" (set during development).

### 02-13
In TypeScript, you work with types like string or number all the time.
Important: It is string and number (etc.), NOT String, Number etc.
The core primitive types in TypeScript are all lowercase!

### 02-14 Working with Numbers, Strings & Booleans
.

### 02-15 Type Assignment & Type Inference
.